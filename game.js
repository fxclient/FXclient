function a() {
	var b, c, d;
	b = [32, 65, 191, 913, 931], c = [64, 127, 688, 930, 1155], d = new Array(b.length + 1);
	for (var f = 0; f < d.length; f++) {
		d[f] = 0;
		for (var g = f - 1; 0 <= g; g--) d[f] += c[g] - b[g]
	}

	function p(o) {
		for (var f = b.length - 1; 0 <= f; f--)
			if (o >= b[f] && o < c[f]) return f;
		return -1
	}
	this.h = function(i) {
		return 0 !== (i = i.trim()).indexOf("Bot ") && 0 !== i.indexOf("[Bot] ") && function(i, k, l) {
			var m = (i = i.trim()).length;
			if (m < k || l < m) return !1;
			for (var o, n = 0, f = 0; f < m; f++)
				if (o = i.charCodeAt(f), n += 65 <= o && o <= 90 || 1040 <= o && o <= 1071 ? 1 : 0, -1 === p(o)) return !1;
			if (3 < n && n > Math.floor(m / 2)) return !1;
			return !0
		}(i, 3, 20)
	}, this.q = function(i) {
		for (var m = (i = i.trim()).length, r = [], f = 0; f < m; f++) {
			var o, s = p(o = i.charCodeAt(f));
			r.push(d[s] + o - b[s])
		}
		return r
	}, this.t = function(r) {
		for (var o, u, i = "", m = r.length, f = 0; f < m; f++)
			for (u = 1; u < d.length; u++)
				if (r[f] < d[u]) {
					o = b[u - 1] + r[f] - d[u - 1], i += String.fromCharCode(o);
					break
				} return i
	}, this.v = function(i) {
		for (var r = this.q(i), result = "", f = 0; f < r.length; f++) result = (result += r[f] < 10 ? "00" : r[f] < 100 ? "0" : "") + r[f].toString(10);
		return result
	}, this.w = function(i) {
		for (var r = new Array(Math.floor(i.length / 3)), f = 0; f < i.length; f += 3) r[Math.floor(f / 3)] = parseInt(i.substring(f, f + 3));
		return this.t(r)
	}, this.x = function(i) {
		for (var y, r = [i.length], f = 0; f < i.length; f++) r[f] = i.charCodeAt(f) - 48;
		var result = "";
		for (f = 0; f < i.length; f++) f === i.length - 1 || 51 < 10 * r[f] + r[f + 1] ? result += r[f].toString() : (y = 10 * r[f] + r[f + 1], result += String.fromCharCode(y + (y < 26 ? 65 : 71)), f++);
		return result
	}, this.z = function(i) {
		for (var o, result = "", f = 0; f < i.length; f++) 48 <= (o = i.charCodeAt(f)) && o < 58 ? result += String.fromCharCode(o) : 65 <= o && o < 75 ? result += "0" + (o - 65).toString() : 75 <= o && o < 91 ? result += (o - 65).toString() :
			97 <= o && o < 123 && (result += (o - 71).toString());
		return result
	}, this.a0 = function(i) {
		for (var m = i.length, r = [], f = 0; f < m; f++)(o = i.charCodeAt(f)) < 58 ? r.push(i[f]) : (o -= o < 91 ? 65 : 71, r.push(String(a1(o, 10))), r.push(String(o - 10 * a1(o, 10))));
		var m = r.length - 2,
			o = 0,
			a2 = [];
		for (f = 0; f < m; f += 3) a2[o++] = parseInt(r[f] + r[f + 1] + r[f + 2]);
		return a2
	}, this.a3 = function() {
		for (var a4, a5 = "", f = 0; f < 6; f++) a4 = 48 + a6.random() % 36, a4 += 58 <= a4 ? 39 : 0, a5 += String.fromCharCode(a4);
		return a5
	}
}

function a7() {
	var a8, a9, aA, aB, aC, aD, fontSize, aE, aF, aG, aH, aI, aJ, aK, aL, aM;

	function ap() {
		ag.drawImage(aJ, aq + (ar ? aq + as.at() : 0), au + 2 * aq)
	}

	function aV() {
		aJ.width = a8[0].width + aH, aJ.height = aC + aH, (aK = aJ.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a8[0].width + aH, aC + aH), aK.translate(Math.floor(aH / 2), Math.floor(aH / 2)), aK.lineWidth = aH, aK.fillStyle = 1 === a8[0].al ? av.aw : av.ax, ay(), aK.fill(), aK.strokeStyle = 1 === a8[0].al ? av.az : av.b0,
		ay(), aK.stroke(), aK.textAlign = b1, aK.textBaseline = b2, aK.fillStyle = 1 === a8[0].al ? av.az : av.b0, aK.font = aD[0], aK.fillText(aF[a8[0].ak], Math.floor(a8[0].width / 2), Math.floor(.72 * aE[0] * aC)), aK.font = aD[1], aK.fillText(a8[
				0].i, Math.floor(a8[0].width / 2), Math.floor((aE[0] + .48 * aE[1]) * aC))
	}

	function ay() {
		aK.beginPath(), aK.moveTo(aI, 0), aK.lineTo(a8[0].width - aI, 0), aK.lineTo(a8[0].width, aI), aK.lineTo(a8[0].width, aC - aI), aK.lineTo(a8[0].width - aI, aC), aK.lineTo(aI, aC), aK.lineTo(0, aC - aI), aK.lineTo(0, aI), aK.closePath()
	}
	this.aN = function() {
		a9 = 4, aA = aB = aL = 0, a8 = [], aD = new Array(2), fontSize = new Array(2), aE = new Array(2), aF = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"], aE[0] = .3, aE[1] = .7, aG = new Array(4), aJ = document
			.createElement("canvas"), aM = aO.aP + 2e3, this.resize()
	}, this.resize = function() {
		var f, aQ;
		for (aC = Math.floor((aR ? .0725 : .058) * aS), fontSize[0] = Math.floor(.85 * aE[0] * aC), fontSize[1] = Math.floor(.85 * aE[1] * aC), aD[0] = aT + fontSize[0] + aU, aD[1] = aT + fontSize[1] + aU, f = aG.length - 1; 0 <= f; f--) aG[f] =
			this.measureText(aF[f] + "000", aD[0]);
		if (aH = Math.floor(1 + .05 * aC), aI = Math.floor(.2 * aC), 0 < a8.length) {
			for (f = a8.length - 1; 0 <= f; f--) aQ = this.measureText(a8[f].i + "00", aD[1]), a8[f].width = aQ < aG[f] ? aG[f] : aQ;
			aV()
		}
	}, this.aW = function() {
		0 !== a9 && (4 === a9 ? aO.aP > aM && (a9 = 0, 1 === aY) && aZ.aa(ab.ac.ad[ab.ae].name, 3, 1, 9) : (1 === a9 ? (0 === aA && (aV(), aA = 1e-4), 1 <= (aA += .002 * (aO.aP - aL)) && (aB = 0, a9 = 2, aA = 1), aO.an = !0) : 2 === a9 ? ((aB +=
			(aO.aP - aL) / 1e3) > a8[0].am || 1 < aB && 1 < a8.length) && (a9 = 3) : 3 === a9 && ((aA -= .002 * (aO.aP - aL)) <= 0 && (aA = 0, a8.shift(), a9 = 0 < a8.length ? 1 : 0), aO.an = !0), aL = aO.aP))
	}, this.measureText = function(i, aD) {
		return ag.font = aD, Math.floor(ag.measureText(i).width)
	}, this.ah = function(ai, f) {
		this.aa(aj[ai], f, 1, 0 === f ? 3 : 7)
	}, this.aa = function(i, ak, al, am) {
		var aQ = (aQ = this.measureText(i + "00", aD[1])) < aG[ak] ? aG[ak] : aQ;
		a8.push({
			i: i,
			width: aQ,
			ak: ak,
			al: al,
			am: am
		}), 0 === a9 && (aA = 0, a9 = 1, aL = aO.aP)
	}, this.ao = function() {
		0 !== a9 && 0 !== aA && (aA < 1 ? (ag.globalAlpha = aA, ap(), ag.globalAlpha = 1) : ap())
	}
}

function b3() {
	var b4 = 32,
		b5 = new Array(2);

	function b7(o) {
		var b8, b9, bA, bC, bB, bE = b4,
			bF = bG.bH.b7(bE, bE),
			bI = bG.bH.getContext(bF, !0),
			bJ = bG.bH.getImageData(bI, bE, bE),
			bK = bJ.data,
			bL = (bE >> 1) - .5,
			bM = Math.sqrt(bL * bL);
		for (bK.fill(255), b9 = 0; b9 < bE; b9++)
			for (b8 = 0; b8 < bE; b8++) bB = b8 - bL, bC = b9 - bL, bA = 4 * (b9 * bE + b8), bB = 714 * (bM - Math.sqrt(bB * bB + bC * bC)) / bM, bK[2 + bA] = o, bK[3 + bA] = 255 < bB ? 0 : bB;
		return bI.putImageData(bJ, 0, 0), bF
	}
	this.b6 = -1, this.aN = function() {
		this.b6 = -1, b5[0] || (b5[0] = b7(255), b5[1] = b7(0))
	}, this.bN = function(bI, bO, b8, b9, a4, f) {
		bP.bQ() && (bI.setTransform(bO *= 4 / 3 * .625, 0, 0, bO, b8 - (a4 *= 4 / 3), b9 - a4), bI.drawImage(b5[+(bR.bS.bT[f] === this.b6)], 0, 0))
	}
}

function bU() {
	for (var b8, b9, f = bV - 1; 0 <= f; f--) b8 = a1(bW[f], 4) % ab.bX, b9 = a1(bW[f], 4 * ab.bX), bY[bZ] = bY[bZ] > b8 ? b8 : bY[bZ], ba[bZ] = ba[bZ] > b9 ? b9 : ba[bZ], bb[bZ] = bb[bZ] < b8 ? b8 : bb[bZ], bc[bZ] = bc[bZ] < b9 ? b9 : bc[bZ]
}

function bd() {
	var bf, s, f, m = be[bZ].length;
	loop: for (f = m - 1; 0 <= f; f--) {
		for (bf = 3; 0 <= bf; bf--)
			if (s = be[bZ][f] + bg[bf], bh.bi(s) || bh.bj(s) && bh.bk(s) !== bZ) {
				bh.bl(be[bZ][f], bZ);
				continue loop
			} be[bZ][f] = be[bZ][m - 1], be[bZ].pop(), m--
	}
}

function bm() {
	var bf, s, bo, bp, m = bn[bZ].length;
	loop: for (var f = m - 1; 0 <= f; f--) {
		for (bo = bp = !1, bf = 3; 0 <= bf; bf--) {
			if (s = bn[bZ][f] + bg[bf], bh.bq(s, bZ)) continue loop;
			bo = bo || bh.br(s), bp = bp || bh.bs(s)
		}
		bo ? bt[bZ].push(bn[bZ][f]) : bp ? bu[bZ].push(bn[bZ][f]) : bh.bv(bn[bZ][f], bZ), bn[bZ][f] = bn[bZ][m - 1], bn[bZ].pop(), m--
	}
}

function bw() {
	bx[by] -= bV
}

function bz(border) {
	for (var m = border.length, f = m - 1; 0 <= f; f--) bh.c0(by, border[f]) || (border[f] = border[m - 1], border.pop(), m--)
}

function c1(border) {
	for (var m = border.length, f = m - 1; 0 <= f; f--) !bh.c0(by, border[f]) && bh.c2(border[f]) && (border[f] = border[m - 1], border.pop(), m--)
}

function c3(border) {
	for (var bf, s, m = border.length, f = m - 1; 0 <= f; f--)
		for (bf = 3; 0 <= bf; bf--)
			if (s = border[f] + bg[bf], bh.bq(s, by)) {
				bn[by].push(border[f]), border[f] = border[m - 1], border.pop(), m--;
				break
			}
}

function c4() {
	for (var bf, s, f = bV - 1; 0 <= f; f--)
		for (bf = 3; 0 <= bf; bf--) s = bW[f] + bg[bf], bh.c5(by, s) && bh.c6(s) && (bn[by].push(s), bh.c7(s, by))
}

function c8() {
	var b8, b9;
	loop: for (; ba[by] < bc[by];) {
		for (b8 = bb[by]; b8 >= bY[by]; b8--)
			if (bh.c0(by, 4 * (ba[by] * ab.bX + b8))) break loop;
		ba[by]++
	}
	loop: for (; ba[by] < bc[by];) {
		for (b8 = bb[by]; b8 >= bY[by]; b8--)
			if (bh.c0(by, 4 * (bc[by] * ab.bX + b8))) break loop;
		bc[by]--
	}
	loop: for (; bY[by] < bb[by];) {
		for (b9 = bc[by]; b9 >= ba[by]; b9--)
			if (bh.c0(by, 4 * (b9 * ab.bX + bY[by]))) break loop;
		bY[by]++
	}
	loop: for (; bY[by] < bb[by];) {
		for (b9 = bc[by]; b9 >= ba[by]; b9--)
			if (bh.c0(by, 4 * (b9 * ab.bX + bb[by]))) break loop;
		bb[by]--
	}
}

function c9(player, cA) {
	return 0 === cB.cC[player] || cB.cC[player] !== cB.cC[cA]
}

function cD(player, cA) {
	for (var cE, cF = cG.cH(player), f = 0; f < cF; f++)
		if (0 === cG.cI(player, f))
			if ((cE = cG.cJ(player, f)) === cK) {
				if (cA === cK) return !1;
				if (cL(cA)) return !0
			} else if (cA === cK) {
		if (cL(cE)) return !0
	} else if (cM(cA, cE)) return !0;
	return !1
}

function cL(player) {
	for (var f, cN, m = bn[player].length, bf = 3; 0 <= bf; bf--)
		for (cN = bg[bf], f = 0; f < m; f++)
			if (bh.bi(bn[player][f] + cN)) return !0;
	return !1
}

function cM(cO, cP) {
	var f, cQ, bf, cN, s, cR = bn[cO].length,
		cS = bn[cP].length;
	for (cS < cR && (cQ = cO, cO = cP, cP = cQ, cQ = cR, cR = cS, 0), bf = 3; 0 <= bf; bf--)
		for (cN = bg[bf], f = 0; f < cR; f++)
			if (s = bn[cO][f] + cN, bh.bj(s) && bh.bk(s) === cP) return !0;
	return !1
}

function cT() {
	cU.cV(), ag.setTransform(cW, 0, 0, cW, 0, 0), ag.imageSmoothingEnabled = cW < 3, ag.drawImage(ab.cX, cY.cZ(), cY.ca()), cb.cc.ao(), ag.drawImage(cd, cY.cZ(), cY.ca()), cU.ao(), ag.imageSmoothingEnabled = !1, ag.setTransform(1, 0, 0, 1, 0, 0), bR
		.cc.ao(), ce.ao(), cf.ao(), (cg ? (as.ao(), ch) : (ag.imageSmoothingEnabled = !1, ci.ao(), cj.ao(), ck.ao(), ch.ao(), cl.ao(), cm.ao(), cY.ao(), aZ.ao(), as.ao(), cn.ao(), co.ao(), cp.ao(), cq.ao(), cr.ao(), cs.ao(), ct.ao(), cu)).ao()
}

function cv(aK, aQ, aC) {
	aK.clearRect(0, 0, aQ, aC), aK.fillStyle = av.ax, aK.fillRect(0, 0, aQ, aC)
}

function cw(aK, aQ, aC, cx) {
	aK.fillStyle = av.b0, aK.fillRect(0, 0, aQ, cx), aK.fillRect(0, 0, cx, aC), aK.fillRect(aQ - cx, 0, cx, aC), aK.fillRect(0, aC - cx, aQ, cx)
}

function cy(aK, b8, b9, bE, cx, s, cz) {
	aK.fillStyle = av.b0;
	var s = Math.floor(bE * s),
		d1 = (s += (s - cx) % 2, Math.floor((s - cx) / 2)),
		bE = Math.floor((bE - s) / 2);
	aK.fillRect(b8 + bE, b9 + bE + d1, s, cx), cz && aK.fillRect(b8 + bE + d1, b9 + bE, cx, s)
}

function d3() {
	var y, aQ, aC, max, d4, d5, d7, d8, d9, dA, dB, dC, dD, dE, d6 = 1e4;

	function dQ(dO, dP, m) {
		var f;
		for (d7[0] = dO, f = 1; f < m; f++) d7[f] = d7[f - 1] + dP, dP = d7[f] >= d6 ? (d7[f] = d6 - 1, -dP) : d7[f] < 0 ? (d7[f] = 0, -dP) : (dP += 16384 <= a6.random() ? d5 : -d5) < -d4 ? -d4 : d4 < dP ? d4 : dP
	}

	function dS(b8, b9, dT, m) {
		(dT ? function(b8, b9, m) {
			var f;
			for (f = 0; f < m; f++) y[b9 * aQ + b8 + f] = d7[f]
		} : function(b8, b9, m) {
			var f;
			for (f = 0; f < m; f++) y[b9 * aQ + b8 + f * aQ] = d7[f]
		})(b8, b9, m)
	}

	function dW(value, m) {
		var f, dX, bO, dY = value - d7[m - 1];
		if (0 != dY) {
			for (dX = 1 + a1(Math.abs(dY), m - 1), dX = dY < 0 ? -dX : dX, d7[m - 1] = value, bO = (bO = m - 1 - a1(Math.abs(dY), Math.abs(dX))) < 1 ? 1 : m - 2 < bO ? m - 2 : bO, f = m - 2; bO <= f; f--) d7[f] += dY - (m - 1 - f) * dX;
			(dY < 0 ? function(m) {
				var f;
				for (f = m - 2; 1 <= f; f--) d7[f] < 0 && (d7[f] = -d7[f] - 1)
			} : function(m) {
				var f;
				for (f = m - 2; 1 <= f; f--) d7[f] >= d6 && (d7[f] = 2 * d6 - d7[f] - 1)
			})(m)
		}
	}

	function db(dc, dd, m) {
		for (var f = 0; f < m; f++) dc[f] = dd[f]
	}

	function de(r) {
		for (var f = 0; f < r.length - 1; f++) r[f] = r[f + 1] - r[f];
		r[r.length - 1] = r[r.length - 3]
	}

	function df(dg, gap, dh) {
		d8.push(dg), d9.push(gap), dA.push(dh)
	}
	this.dF = function(dG) {
		! function(dG) {
			var f;
			for (aQ = dG[0], aC = dG[1], d4 = dG[2], d5 = dG[3], y = new Int16Array(aQ * aC), max = aC < aQ ? aQ : aC, d7 = new Int16Array(max), d8 = [], d9 = [], dA = [], dB = new Array(aQ), dC = new Array(aC), f = aQ - 1; 0 <= f; f--) dB[f] = !
				1;
			for (f = aC - 1; 0 <= f; f--) dC[f] = !1;
			dD = new Int16Array(aQ), dE = new Int16Array(aC)
		}(dG),
		function(m) {
			var dO = a6.random() % d6,
				dP = a6.random() % (2 * d4 + 1) - d4;
			dQ(dO, dP, m)
		}(max), db(dE, d7, aC), dS(0, 0, !0, aQ);
		var b8, b9, dG = y[0],
			m = max,
			dP = a6.random() % (2 * d4 + 1) - d4;
		for (dQ(dG, dP, m), db(dD, d7, aQ), dS(0, 0, !1, aC), de(dD), de(dE), dQ(y[aQ - 1], dD[aQ - 1], aC), dS(aQ - 1, 0, !1, aC), dQ(y[aQ * (aC - 1)], dE[aC - 1], aQ), dW(y[aQ * aC - 1], aQ), dS(0, aC - 1, !0, aQ), dB[aQ - 1] = dB[0] = !0, dC[
				aC - 1] = dC[0] = !0, df(0, aQ, !0), df(0, aC, !1), ! function() {
				var dj, dg;
				for (;;) {
					if (dj = function() {
							var f, dj = d8.length - 1;
							for (f = dj - 1; 0 <= f; f--) d9[f] > d9[dj] && (dj = f);
							return dj
						}(), d9[dj] < 5) return;
					dg = d8[dj] + a1(d9[dj], 2), (dA[dj] ? function(b8) {
						var m, dm, f, dn = 0,
							dp = 0;
						for (; dp < aC - 1;) {
							for (f = dn + 1; f < aC; f++)
								if (dC[f]) {
									dp = f;
									break
								} m = dp - dn + 1, dQ(y[b8 + aQ * dn], 0 === dn ? dD[b8] : d7[dm - 1] - d7[dm - 2], m), dW(y[dp * aQ + b8], m), dS(b8, dn, !1, m), dm = m, dn = dp
						}
						dB[b8] = !0
					} : function(b9) {
						var m, dm, f, dn = 0,
							dp = 0;
						for (; dp < aQ - 1;) {
							for (f = dn + 1; f < aQ; f++)
								if (dB[f]) {
									dp = f;
									break
								} m = dp - dn + 1, dQ(y[b9 * aQ + dn], 0 === dn ? dE[b9] : d7[dm - 1] - d7[dm - 2], m), dW(y[b9 * aQ + dp], m), dS(dn, b9, !0, m), dm = m, dn = dp
						}
						dC[b9] = !0
					})(dg), df(dg, d8[dj] + d9[dj] - dg, dA[dj]), d9[dj] = dg - d8[dj] + 1
				}
			}(), b8 = 0; b8 < aQ; b8++)
			if (!dB[b8])
				for (b9 = 0; b9 < aC; b9++) dC[b9] || ! function(b8, b9) {
					var value = y[b9 * aQ + b8 - 1] + y[(b9 - 1) * aQ + b8],
						dr = 2;
					dB[b8 + 1] && (dr++, value += y[b9 * aQ + b8 + 1]);
					dC[b9 + 1] && (dr++, value += y[(b9 + 1) * aQ + b8]);
					y[b9 * aQ + b8] = a1(value, dr)
				}(b8, b9)
	}, this.dL = function() {
		return y
	}, this.dM = function() {
		y = null
	}
}
var cW, ds, dt;

function du() {
	var dv, dw, aQ, b8, b9, dx, dy;
	this.aN = function() {
		dv = new Array(2), dw = new Array(2), this.dz = !1, dy = dx = dt = ds = 0, cW = 1, this.resize()
	}, this.resize = function() {
		aQ = (aQ = Math.floor((aR ? .072 : .0502) * aS)) < 8 ? 8 : aQ;
		for (var f = 1; 0 <= f; f--) dv[f] = document.createElement("canvas"), dv[f].width = aQ, dv[f].height = aQ, dw[f] = dv[f].getContext("2d", {
			alpha: !0
		});
		this.e0(),
			function() {
				for (var ef = Math.floor(1 + aQ / 20), f = 1; 0 <= f; f--) dw[f].clearRect(0, 0, aQ, aQ), dw[f].fillStyle = av.eg, dw[f].beginPath(), dw[f].arc(aQ / 2, aQ / 2, aQ / 2 - ef, 0, 2 * Math.PI), dw[f].fill(), dw[f].lineWidth = ef, dw[
					f].fillStyle = av.b0, dw[f].strokeStyle = av.b0, dw[f].beginPath(), dw[f].arc(aQ / 2, aQ / 2, aQ / 2 - ef, 0, 2 * Math.PI), dw[f].stroke(), cy(dw[f], 0, 0, aQ, ef, .3, 0 === f)
			}()
	}, this.cZ = function() {
		return -ds / cW
	}, this.ca = function() {
		return -dt / cW
	}, this.e5 = function(e6, e7) {
		ds = cW * e6 - e7
	}, this.e8 = function(e9, eA) {
		dt = cW * e9 - eA
	}, this.eB = function(e3, e4) {
		return cg || ! function(e3, e4) {
			return Math.pow(e3 - (b8 + aQ / 2), 2) + Math.pow(e4 - (b9 + aQ / 2), 2) < aQ * aQ / 4 || Math.pow(e3 - (b8 + aQ / 2), 2) + Math.pow(e4 - (b9 + 2 * aQ), 2) < aQ * aQ / 4
		}(e3, e4) || eC.eD.eE ? (eI.eJ() && (this.dz = !0, dx = e3, dy = e4), !1) : e4 < b9 + 1.25 * aQ ? this.eF(Math.floor(eG / 2), Math.floor(eH / 2), -200) : this.eF(Math.floor(eG / 2), Math.floor(eH / 2), 200)
	}, this.eK = function(e3, e4) {
		var eL, eM, bB, bC;
		return !eI.eJ() || (eL = ds, eM = dt, ds += bB = dx - e3, dt += bC = dy - e4, ce.eK(bB, bC), this.eN(), dx = e3, dy = e4, eL !== ds) || eM !== dt
	}, this.eF = function(eO, eP, deltaY) {
		var eQ;
		if (eI.eJ()) {
			if (0 < deltaY) eQ = (eQ = 500 / (500 + deltaY)) < .5 ? .5 : eQ;
			else {
				if (!(deltaY < 0)) return !1;
				eQ = 2 < (eQ = (500 - deltaY) / 500) ? 2 : eQ
			}
			this.eR(eO, eP, eQ), aO.an = !0
		}
		return !0
	}, this.eR = function(b8, b9, bO) {
		var ee;
		bO = ee = (ee = 1024 < (ee = bO) * cW ? 1024 / cW : ee) * cW < .125 ? .125 / cW : ee, ce.zoom(bO, b8, b9),
			function(ee, eO, eP) {
				cW *= ee, ds = (ds + eO) * ee - eO, dt = (dt + eP) * ee - eP, cY.eN()
			}(bO, b8, b9)
	}, this.eN = function() {
		var eU = eV / 16,
			eW = 0,
			eX = eY / 16,
			eZ = 0;
		ds < eU - eV && (eW = eU - eV - ds), ds > cW * ab.bX - eU && (eW = cW * ab.bX - eU - ds), dt < eX - eY && (eZ = eX - eY - dt), dt > cW * ab.ea - eX && (eZ = cW * ab.ea - eX - dt), ds += eW, dt += eZ, eb.ec(), ce.ed(eW, eZ)
	}, this.e0 = function() {
		b8 = eG - aQ - aq, b9 = Math.floor(eH / 2 - 1.25 * aQ)
	}, this.ao = function() {
		eC.eD.eE || (ag.drawImage(dv[0], b8, b9), ag.drawImage(dv[1], b8, Math.floor(b9 + 3 * aQ / 2)))
	}
}

function eh() {
	this.ei = "https://", this.ej = this.ei + "territorial.io/", this.ek = this.ej + "changelog", this.el = this.ej + "terms", this.em = this.ej + "cookie_policy", this.en = this.ej + "privacy_policy", this.eo = this.ej + "tutorial", this.ep = this
		.ej + "players", this.eq = this.ej + "clans", this.er = this.ei + "play.google.com/store/apps/details?id=territorial.io", this.es = this.ei + "apps.apple.com/app/id1581110913", this.et = this.ei + "www.youtube.com/watch?v=toZTQ8aRdFc", this
		.eu = this.ei + "discord.gg/pthqvpTXmh", this.ev = this.ei + "www.instagram.com/davidtschacher/"
}

function ew(ex) {
	this.aN = function(ey) {
		var ez = document.createElement("p");
		ez.style.color = av.b0, ez.innerText = ex, ey.appendChild(ez)
	}, this.resize = function() {}
}

function f0() {
	var f1 = -15e3,
		f2 = !1;

	function eB(cE) {
		fJ() || (f2 = !0, fK(cE, 1), fL.bS.fM(fL.bS.fN), fO(Math.floor(fP * cE.clientX), Math.floor(fP * cE.clientY)))
	}

	function f8(cE) {
		f1 = aO.aP, fK(cE, 1), fL.bS.fM(fL.bS.fN), 0 < cE.touches.length && (fQ = Math.floor(fP * cE.touches[0].clientX), fR = Math.floor(fP * cE.touches[0].clientY), fS.f8(cE) || fO(fQ, fR))
	}

	function fO(b8, b9) {
		0 === aY ? fT.eB(b8, b9) : ch.fU(b8, b9) || cs.eB(b8, b9) || ct.eB(b8, b9) || cr.eB(b8, b9) || cq.fV(b8, b9) || co.eB(b8, b9) || cp.eB(b8, b9) || fW.fX(b8, b9) || cl.eB(b8, b9) || cq.fY(b8, b9)
	}

	function eK(cE) {
		fJ() || (f2 = !0, fK(cE, 1), fZ(Math.floor(fP * cE.clientX), Math.floor(fP * cE.clientY)))
	}

	function f9(cE) {
		f1 = aO.aP, fK(cE, 1), 0 < cE.touches.length && (fQ = Math.floor(fP * cE.touches[0].clientX), fR = Math.floor(fP * cE.touches[0].clientY), fS.f9(cE) || fZ(fQ, fR))
	}

	function fZ(b8, b9) {
		0 === aY ? fT.eK(b8, b9) : cs.eK(b8, b9) || (cp.eK(b8, b9), cq.fa() ? cq.eK(b8, b9) : ck.fb ? ck.eK(b8, b9) && (aO.an = !0) : (cj.eK(b8, b9), cY.dz && cY.eK(b8, b9) && (aO.an = !0)))
	}

	function f7(cE) {
		fJ() || (fK(cE, 1), 0 === aY ? (fT.click(-1024, -1024), fc.fd()) : (cj.fe(-1024, -1024), cp.eK(-1024, -1024), ck.ff(), cY.dz && (cY.dz = !1)))
	}

	function f6(cE) {
		fJ() || (fK(cE, 1), fg(Math.floor(fP * cE.clientX), Math.floor(fP * cE.clientY), 2 === cE.button))
	}

	function click(cE) {
		fJ() || fK(cE, 1)
	}

	function fA(cE) {
		f1 = aO.aP, fK(cE, 1), cE && cE.touches && 0 < cE.touches.length && 0 !== aY ? cY.dz = !1 : fS.fh() || fg(fQ, fR, !1)
	}

	function fB(cE) {
		f1 = aO.aP, fK(cE, 1), fg(fQ, fR, !1)
	}

	function fC(cE) {
		fi.fC(cE)
	}

	function fD(cE) {
		fi.fD(cE)
	}

	function fE(cE) {
		fJ() || fK(cE, 0)
	}

	function fg(b8, b9, fj) {
		0 === aY ? fT.click(b8, b9) : (cj.fe(b8, b9), cs.fe(), ck.ff(), cY.dz = !1, cq.click(b8, b9, fj) && (aO.an = !0))
	}

	function eF(cE) {
		var b8, b9, deltaY;
		fJ() || (fK(cE, 1), fL.bS.fM(fL.bS.fN), b8 = Math.floor(fP * cE.clientX), b9 = Math.floor(fP * cE.clientY), deltaY = cE.deltaY, 1 === cE.deltaMode && (deltaY *= 16), 0 === aY ? fT.eF(b8, b9, deltaY) : cj.eF(b8, b9, deltaY) || (ck.fk(b8, b9) ?
			ck.eF(deltaY) && (aO.an = !0) : cY.eF(b8, b9, +deltaY)))
	}

	function fF(cE) {
		fK(cE, 0)
	}

	function fK(cE, id) {
		0 === id && (fl.fa || ct.fa || fm.fa) || 1 === id && (fm.fn || ct.fn) || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== fT.fp() && cE.preventDefault()
	}

	function fG(cE) {
		fJ() || aO.aP < 400 || (8 !== fT.fp() && fT.fq(cE) ? aO.an = !0 : "Escape" === cE.key ? fT.fr() : "ArrowLeft" === cE.key || "a" === cE.key ? fs.ft(3) : "ArrowUp" === cE.key || "w" === cE.key ? fs.ft(0) : "ArrowRight" === cE.key || "d" === cE
			.key ? fs.ft(1) : "ArrowDown" === cE.key || "s" === cE.key ? fs.ft(2) : "h" === cE.key ? 1 <= aY && ch.fu(!cg) : " " === cE.key && aY && (fv.fw(), cp.fx && cp.fy(), fz) && ch.g0(!1))
	}

	function fH(cE) {
		fJ() || ("ArrowLeft" === cE.key || "a" === cE.key ? fs.g1(3) : "ArrowUp" === cE.key || "w" === cE.key ? fs.g1(0) : "ArrowRight" === cE.key || "d" === cE.key ? fs.g1(1) : "ArrowDown" === cE.key || "s" === cE.key ? fs.g1(2) : "1" === cE.key ?
			ck.g2(.75) : "2" === cE.key ? ck.g2(7 / 8) : "3" === cE.key ? ck.g2(.9375) : "4" === cE.key ? ck.g2(31 / 32) : "5" === cE.key ? ck.g2(32 / 31) : "6" === cE.key ? ck.g2(16 / 15) : "7" === cE.key ? ck.g2(8 / 7) : "8" === cE.key ? ck.g2(
				4 / 3) : "+" === cE.key ? 0 !== aY && cY.eF(Math.floor(eG / 2), Math.floor(eH / 2), -200) : "-" === cE.key ? 0 !== aY && cY.eF(Math.floor(eG / 2), Math.floor(eH / 2), 200) : "c" === cE.key && 0 !== aY && cs.g3())
	}

	function fI() {
		"hidden" === document.visibilityState ? aO.g4() : aO.g5()
	}

	function fJ() {
		return f1 + 15e3 > aO.aP
	}

	function resize() {
		g8.g9()
	}
	this.f3 = 0, this.f4 = "", this.aN = function() {
		f5.addEventListener("mousedown", eB, {
			passive: !1
		}), f5.addEventListener("mousemove", eK, {
			passive: !1
		}), f5.addEventListener("mouseup", f6, {
			passive: !1
		}), f5.addEventListener("click", click, {
			passive: !1
		}), f5.addEventListener("mouseleave", f7, {
			passive: !1
		}), f5.addEventListener("wheel", eF, {
			passive: !1
		}), f5.addEventListener("touchstart", f8, {
			passive: !1
		}), f5.addEventListener("touchmove", f9, {
			passive: !1
		}), f5.addEventListener("touchend", fA, {
			passive: !1
		}), f5.addEventListener("touchcancel", fB, {
			passive: !1
		}), f5.addEventListener("dragover", fC), f5.addEventListener("drop", fD), f5.addEventListener("dblclick", fE), document.addEventListener("contextmenu", fF), document.addEventListener("keyup", fG), document.addEventListener("keydown",
			fH), document.addEventListener("visibilitychange", fI), window.addEventListener("resize", resize)
	}, this.fX = function(b8, b9) {
		return !!ch.eB(b8, b9) || !!(cj.eB(b8, b9) || cY.eB(b8, b9) || ck.eB(b8, b9) || ci.eB(b8, b9))
	}, this.g6 = fJ, this.g7 = function() {
		return !f2 || 0 < f1
	}
}

function gA() {
	var gB, gC, gD, gE, gF, gG, gH, gJ, gK, gM, gN, gO, gR, gS, gT, gU, gV, gI = 48,
		gP = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		gQ = [0, 0, 0, 0];

	function gc(f, bF) {
		var f = gH[f].getContext("2d", {
				alpha: !0
			}),
			zoom = (f.clearRect(0, 0, gI, gI), gI / bF.width),
			cQ = gI / bF.height,
			zoom = cQ < zoom ? cQ : zoom;
		f.imageSmoothingEnabled = !0, f.setTransform(zoom, 0, 0, zoom, Math.floor((gI - zoom * bF.width) / 2), Math.floor((gI - zoom * bF.height) / 2)), f.drawImage(bF, 0, 0), f.setTransform(1, 0, 0, 1, 0, 0)
	}

	function gj(o, a4, gm, bI) {
		bI.beginPath(), bI.moveTo(o, o), bI.lineTo(o + Math.cos(gm) * a4, o + Math.cos(gm + 1.5 * Math.PI) * a4), bI.stroke()
	}

	function hC() {
		if (7 === fT.fp()) {
			for (var hD, bF, bI, zoom, cQ, g = -1, f = gJ.length - 1; 0 <= f; f--)
				if (null === gJ[f].aJ) {
					g = f;
					break
				} - 1 !== g && (null !== (hD = gx(gJ[g].h3, gJ[g].h4)) ? gJ[g].aJ = hD : (hD = {
					bX: ab.bX,
					ea: ab.ea,
					cX: ab.cX,
					hE: ab.hE,
					hF: ab.hF,
					hG: ab.hG,
					ae: ab.ae,
					gy: ab.gy
				}, ab.dF(gJ[g].h3, gJ[g].h4), ab.hH.hI(), (bF = document.createElement("canvas")).width = 128, bF.height = 128, bI = bF.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / ab.bX) < (cQ = 128 / ab.ea) && (zoom = cQ), bI.imageSmoothingEnabled = !0, bI.setTransform(zoom, 0, 0, zoom, (128 - zoom * ab.bX) / 2, (128 - zoom * ab.ea) / 2), bI.drawImage(ab.cX, 0, 0), ab.bX = hD.bX, ab
				.ea = hD.ea, ab.cX = hD.cX, ab.hE = hD.hE, ab.hF = hD.hF, ab.hG = hD.hG, ab.ae = hD.ae, ab.gy = hD.gy, gJ[g].aJ = bF), aO.an = !0)
		}
	}

	function gx(h3, h4) {
		for (var f = gJ.length - 1; 0 <= f; f--)
			if (null !== gJ[f].aJ && gJ[f].h3 === h3 && gJ[f].h4 === h4) return gJ[f].aJ;
		return null
	}
	this.aN = function() {
		var f;
		for (gV = 0, gM = -1, fT.setState(7), gJ = [], this.resize(), gH = new Array(13), f = gH.length; 0 <= f; f--) gH[f] = document.createElement("canvas"), gH[f].width = gI, gH[f].height = gI;
		for (f = 0; f < 7; f++) ! function(gf) {
			var gh, bI = gH[gf - 2].getContext("2d", {
					alpha: !0
				}),
				gg = 1.5 * Math.PI,
				o = Math.floor(.5 * gI),
				a4 = Math.floor(.48 * gI);
			bI.lineWidth = 2, bI.strokeStyle = av.b0, bI.clearRect(0, 0, gI, gI);
			for (var f = 0; f < gf; f++) gh = gg + 2 * Math.PI / gf,
				function(f, o, a4, gg, gh, bI) {
					bI.fillStyle = cB.gl[f], bI.beginPath(), bI.arc(o, o, a4, gg, gh), bI.lineTo(o, o), bI.fill()
				}(f + 1, o, a4, gg, gh, bI), 0 !== f && gj(o, a4, gg, bI), gg = gh;
			gj(o, a4, 1.5 * Math.PI, bI),
				function(o, a4, bI) {
					bI.beginPath(), bI.arc(o, o, a4, 0, 2 * Math.PI), bI.stroke()
				}(o, a4, bI)
		}(f + 2);
		gc(7, gd.get(4)), gc(8, ge.bF[27]), gc(9, ge.bF[46]), gc(10, ge.bF[36]), gc(11, gd.get(19)), gc(12, gd.get(20)), aO.an = !0
	}, this.gX = function() {
		this.gY(), fL.bS.gZ(3240), ga.aN(), aO.an = !0
	}, this.gY = function() {
		gJ = [], gH = []
	}, this.gn = function() {
		return gO
	}, this.resize = function() {
		var go, gp, gq, gr;
		for (gD = [0, 0], gK = [0, 0, 0, 0], gU = aR ? (gN = Math.floor(.8 * .4 * aS), gO = Math.floor(.56 * gN), gK[0] = gs, eV < eY ? (gK[1] = gO + 2 * gs, gK[2] = eV - 3 * gK[0], gK[3] = gt.ca() - 3 * gs - gO, gS = Math.floor(.95 * gO), gT =
				Math.floor((eV - gN - gs) / 2), Math.floor(gs + gO / 2)) : (gK[1] = gs, gK[2] = eV - 3 * gs - gN, gK[3] = gt.ca() - 2 * gs, gS = Math.floor(.8 * gN), gK[3] - gO < gN && (gS = Math.floor(.8 * (gK[3] - gO)), gS = gu(gO, gS)),
				gT = Math.floor(eV - gN / 2 - gs), gu(gU = Math.floor(gs + gO + (gK[3] - gO) / 2), Math.floor(gO + 2 * gs + gS / 2)))) : (gN = Math.floor(.2016 * aS), gO = Math.floor(.56 * gN), gK[2] = Math.floor(.5 * eV), gK[3] = Math.floor(.5 *
				eY), gK[1] = Math.floor(.45 * (eY - gK[3])), gK[0] = Math.floor((eV - gK[2]) / 2), gS = Math.floor(.75 * gO), gT = Math.floor(eV / 2), Math.floor(gK[1] + gK[3] + (eY - gK[3] - gK[1]) / 2)), gR = aT + Math.floor(.65 * gO / 4) + aU,
			go = gp = 1; go * gp < gJ.length;) gK[3] / (gp + 1) < gK[2] / (go + 1) ? go++ : gp++;
		gB = (gq = (gK[2] - (go - 1) * gs) / go) < (gr = (gK[3] - (gp - 1) * gs) / gp) ? gq : gr, gC = Math.floor(gB), gG = aT + Math.floor(.5 * gB / 5) + aU, gD[0] = go, gD[1] = gp, gE = gK[0] + Math.floor((gK[2] - gD[0] * gB - (gD[0] - 1) *
			gs) / 2), gF = gK[1] + Math.floor((gK[3] - gD[1] * gB - (gD[1] - 1) * gs) / 2)
	}, this.gv = function(gw, s) {
		var f, cQ, aJ, m = gJ.length;
		for (gQ = gw, f = 0; f < s.length; f++) aJ = gx(s[f].ae, s[f].gy), gJ.push({
			gz: s[f].id,
			h0: s[f].h0,
			h1: s[f].h2,
			h3: s[f].ae,
			h4: s[f].gy,
			joined: s[f].h5,
			h6: s[f].h7,
			h8: s[f].h8,
			aJ: aJ,
			h9: s[f].h9,
			hA: s[f].hA
		});
		for (f = m - 1; 0 <= f; f--) gJ.shift();
		if (-1 !== gM)
			for (cQ = gM, gM = -1, f = gJ.length - 1; 0 <= f; f--)
				if (gJ[f].gz === cQ) {
					gM = cQ;
					break
				}(gJ.length > gV || gJ.length < gV) && (gV = gJ.length, this.resize()), this.hB(), aO.an = !0
	}, this.hB = function() {
		for (var f = gJ.length - 1; 0 <= f; f--) null === gJ[f].aJ && setTimeout(hC, 0)
	}, this.eB = function(b8, b9) {
		return 4 * ((b8 - gT) * (b8 - gT) + (b9 - gU) * (b9 - gU)) <= gS * gS ? (this.gX(), hJ.eK(b8, b9, !1), !0) : function(b8, b9) {
			var g, u, hL, hM;
			if (0 !== gJ.length) {
				var f = 0;
				for (hM = gF, u = 0; u < gD[1]; u++) {
					for (hL = gE, g = 0; g < gD[0]; g++) {
						if (hL < b8 && b8 < hL + gB && hM < b9 && b9 < hM + gB) return fL.hN.hO(gJ[f].gz), gM = gJ[f].gz !== gM ? gJ[f].gz : -1, aO.an = !0;
						if (++f >= gJ.length) return !1;
						hL += gB + gs
					}
					hM += gB + gs
				}
			}
			return !1
		}(b8, b9)
	}, this.ao = function() {
		var g, u, b8, a4, zoom, f = 0,
			b9 = gF;
		if (ag.imageSmoothingEnabled = !0, ag.lineWidth = 3, a4 = Math.floor(.5 * gS), ag.fillStyle = av.hS, ag.beginPath(), ag.arc(gT, gU, a4, 0, 2 * Math.PI), ag.fill(), ag.strokeStyle = av.b0, ag.beginPath(), ag.arc(gT, gU, a4, 0, 2 * Math
			.PI), ag.stroke(), a4 = gd.get(0).height, zoom = .6 * gS / a4, ag.setTransform(zoom, 0, 0, zoom, Math.floor(gT - .56 * zoom * gd.get(0).width), Math.floor(gU - .5 * zoom * a4)), ag.drawImage(gd.get(0), 0, 0), ag.setTransform(1, 0, 0,
				1, 0, 0),
			function() {
				ag.fillStyle = av.hS, ag.fillRect(eV - gN - gs, gs, gN, gO), 0 <= gM ? (ag.fillStyle = av.hT, ag.fillRect(eV - gN - gs, gs, gN, Math.floor(.25 * gO))) : (ag.fillStyle = av.hU, ag.fillRect(eV - gN - gs, gs + Math.floor(.25 * gO),
					gN, Math.floor(.25 * gO)));
				ag.strokeStyle = av.b0, ag.strokeRect(eV - gN - gs, gs, gN, gO), ag.fillStyle = av.b0, ag.font = gR, ag.textBaseline = b2;
				for (var b9, hV = Math.floor(.04 * gN), hW = Math.floor(.08 * gO), f = 3; 0 <= f; f--) b9 = Math.floor(gs + (f + 1) * (gO + 2 * hW) / 5 - hW), ag.textAlign = hX, ag.fillText(gP[f], eV - gN - gs + hV, b9), ag.textAlign = hY, ag
					.fillText(bG.hZ.ha(gQ[f]), eV - gs - hV, b9)
			}(), 0 !== gJ.length)
			for (u = 0; u < gD[1]; u++) {
				for (b8 = gE, g = 0; g < gD[0]; g++) {
					if (! function(f, b8, b9) {
							var zoom, u, hb, hd, hf;
							null === gJ[f].aJ ? (ag.fillStyle = av.hS, ag.fillRect(b8, b9, gC, gC)) : (zoom = gC / 128, ag.setTransform(zoom, 0, 0, zoom, b8, b9), ag.drawImage(gJ[f].aJ, 0, 0), ag.setTransform(1, 0, 0, 1, 0, 0));
							gM === gJ[f].gz ? (function(b8, b9) {
								var d0 = Math.floor(.2 * gC),
									d1 = Math.floor(.3 * d0);
								ag.fillStyle = av.hh, ag.fillRect(b8 + gC - d0, b9, d0, d0), ag.fillStyle = av.az, ag.fillRect(b8 + gC - d0, b9, 2, d0), ag.fillRect(b8 + gC - d0, b9 + d0 - 2, d0, 2), cp.hg(b8 + gC - d0 + d1, b9 + d1, d0 -
									2 * d1), ag.setTransform(1, 0, 0, 1, 0, 0)
							}(b8, b9), ag.lineWidth = 3, ag.fillStyle = av.hh) : ag.fillStyle = av.eg;
							if (hd = Math.floor(gB / 4), ag.fillRect(b8, b9, hd, hd), hf = Math.floor(b9 + .8 * gB), ag.fillRect(b8, hf, gC, Math.floor(gB / 5)), function(f, b8, b9) {
									var zoom;
									gJ[f].h1 && (f = gd.get(4), zoom = .5 * gB / f.width, ag.setTransform(zoom, 0, 0, zoom, Math.floor(b8 + (gB - zoom * f.width) / 2), Math.floor(b9 + (gB - zoom * f.height) / 2)), ag.globalAlpha = .6, ag
										.drawImage(f, 0, 0), ag.globalAlpha = 1, ag.setTransform(1, 0, 0, 1, 0, 0))
								}(f, b8, b9), gJ[f].h9) {
								for (u = hb = 0; u < gJ[f].h9; u++) hb = Math.max(hb, aZ.measureText(gJ[f].hA[u], gG));
								hb += .05 * gB, u = 5 === gJ[f].h9, hd = u ? b9 + hd : Math.max(b9 + .8 * gB - .11 * gJ[f].h9 * gB, b9 + hd), hf = u ? hf : Math.min(hd + .11 * gJ[f].h9 * gB + .05 * gB, hf), ag.fillRect(b8, hd, hb, hf - hd)
							}
							for (ag.font = gG, ag.textBaseline = b2, ag.textAlign = hX, ag.fillStyle = av.hj, ag.fillText(gJ[f].joined.toString(), Math.floor(b8 + .22 * gB), Math.floor(b9 + .9 * gB)), ag.fillStyle = av.b0, u = 0; u < gJ[f]
								.h9; u++) ag.fillText(gJ[f].hA[gJ[f].h9 - u - 1], Math.floor(b8 + .03 * gB), Math.floor(b9 + .77 * gB - .11 * u * gB));
							ag.textAlign = hY, ag.fillStyle = av.hk, ag.fillText(gJ[f].h6.toString(), Math.floor(b8 + .81 * gB), Math.floor(b9 + .9 * gB)), ag.strokeStyle = gM === gJ[f].gz ? av.hl : av.hm, ag.strokeRect(b8, b9, gC, gC), hf = Math
								.floor(.16 * gB), zoom = hf / gI, ag.setTransform(zoom, 0, 0, zoom, Math.floor(b8 + .33 * hf), Math.floor(b9 + .33 * hf)), gH.length > gJ[f].h0 && ag.drawImage(gH[gJ[f].h0], 0, 0);
							ag.setTransform(zoom, 0, 0, zoom, Math.floor(b8 + .15 * hf), Math.floor(b9 + gB - 1.08 * hf)), ag.drawImage(gH[11], 0, 0), ag.setTransform(zoom, 0, 0, zoom, Math.floor(b8 + gB - 1.05 * hf), Math.floor(b9 + gB - 1.15 *
								hf)), ag.drawImage(gH[12], 0, 0), ag.setTransform(1, 0, 0, 1, 0, 0)
						}(f, Math.floor(b8), Math.floor(b9)), ++f >= gJ.length) return;
					b8 += gB + gs
				}
				b9 += gB + gs
			}
	}
}

function ho() {
	this.hp = function(g, u) {
		return Math.floor((g + .5) / u)
	}, this.hq = function(g, u) {
		return Math.floor(g * (u + .5))
	}, this.sqrt = function(y) {
		return ~~Math.sqrt(y + .5)
	}, this.pow = function(cE) {
		return Math.floor(Math.pow(2, cE) + .5)
	}, this.hr = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.hs = function(ht, hu, hv) {
		return Math.max(Math.min(ht, hu), hv)
	}, this.hw = function(hx, hy, b8, b9) {
		b8 -= hx, hx = b9 - hy, b9 = 0;
		return 0 == b8 ? b9 = 0 <= hx ? Math.PI : 0 : (b9 = Math.atan(hx / b8), b9 += 0 < b8 ? .5 * Math.PI : 1.5 * Math.PI), b9
	}, this.log2 = function(y) {
		return Math.floor(!!y * (1 + Math.log2(y + .5)))
	}
}

function i0() {
	this.ha = function(y) {
		var f, i1, i2, i3, i4;
		if (y < 0) return "-" + this.ha(Math.abs(y));
		if (y < 1e3) return y.toString();
		for (i1 = Math.floor(Math.log(y + .5) / Math.log(10)) + 1, i2 = Math.floor((i1 - 1) / 3), i4 = (i3 = y.toString()).substring(i1 - 3, i1), f = 1; f < i2; f++) i4 = i3.substring(i1 - 3 * (f + 1), i1 - 3 * f) + " " + i4;
		return i3.substring(0, i1 - 3 * i2) + " " + i4
	}, this.i5 = function(s, i1) {
		return s.toFixed(i1) + "%"
	}, this.i6 = function(y, i7 = 3) {
		return y.toFixed(Math.max(Math.floor(i7 - Math.log10(y)), 0))
	}, this.i8 = function(username) {
		var iA, i9 = username.indexOf("[");
		return !(i9 < 0) && 1 < (iA = username.indexOf("]")) - i9 && iA - i9 <= 8 ? username.substring(i9 + 1, iA).toUpperCase().trim() : null
	}
}

function iB() {
	2 === ab.ae ? iC([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === ab.ae ? iC([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === ab.ae ? iC([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === ab.ae && iC([512],
		[512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function iC(iD, iE, iF, iG, iH) {
	for (var b8, b9, iK, iL, ee, iM, iI = iD.length - 1, iJ = ab.bX + ab.ea, m = (iJ *= iJ, iF.length), f = m - 1; 0 <= f; f--) iF[f] *= iF[f];
	var iN = new Array(m),
		iO = new Array(m),
		iP = new Array(m),
		y = iQ.dL();
	if (void 0 === iH)
		for (iH = new Array(m), f = m - 1; 0 <= f; f--) iH[f] = 0;
	for (f = 1; f < m; f++) iN[f] = iF[f] - iF[f - 1], iO[f] = iG[f] - iG[f - 1], iP[f] = iH[f] - iH[f - 1];
	for (b8 = ab.bX - 1; 0 <= b8; b8--)
		for (b9 = ab.ea - 1; 0 <= b9; b9--) {
			for (iK = iJ, f = iI; 0 <= f; f--) iK = (iL = (b8 - iD[f]) * (b8 - iD[f]) + (b9 - iE[f]) * (b9 - iE[f])) < iK ? iL : iK;
			for (ee = iG[m - 1], iM = iH[m - 1], f = 1; f < m; f++)
				if (iK < iF[f]) {
					ee = iG[f - 1] + iR((iK - iF[f - 1]) * iO[f], iN[f]), iM = iH[f - 1] + iR((iK - iF[f - 1]) * iP[f], iN[f]);
					break
				} iS(ab.bX * b9 + b8, ee, iM, y)
		}
}

function iS(iT, ee, iM, y) {
	ee < 500 ? y[iT] = a1(y[iT] * ee * 2, 1e3) : 500 < ee && (y[iT] += a1(2 * (1e4 - y[iT]) * (ee - 500), 1e3)), y[iT] += a1(iM * (10 * ee - y[iT]), 1e3)
}

function iU(title, iV) {
	this.aN = function(ey) {
		var iW = document.createElement("h3");
		iW.style.color = av.b0, iW.style.marginTop = "0", iW.innerText = title, ey.appendChild(iW), iV && ((iW = document.createElement("p")).style.color = av.b0, iW.innerText = iV, ey.appendChild(iW)), this.resize()
	}, this.resize = function() {}
}

function iX(player) {
	return iY.iZ[1] = be[player].length, iY.iZ[0] === cK ? ia(player) : ib(player, iY.iZ[0]), 0 !== iY.iZ[1] || 0 !== be[player].length
}

function ic(player) {
	ar && (id[player] = 1), ie(iY.iZ[1], player), cG.ah(player, iY.ig[0], iY.iZ[0]), ih.ii(player, !1)
}

function ij(player, cA, m, ik) {
	var il = a1(3 * im[player], 256);
	ik -= ik >= a1(im[player], 2) ? il : 0, ie(m, player), cG.ah(player, ik, cA), im[player] -= ik + il, ih.ii(player, !1)
}

function ib(player, cA) {
	for (var dh, f = bn[player].length - 1; 0 <= f; f--)
		if (bh.io(bn[player][f]))
			for (dh = 3; 0 <= dh; dh--)
				if (bh.bj(bn[player][f] + bg[dh]) && bh.bk(bn[player][f] + bg[dh]) === cA) {
					be[player].push(bn[player][f]);
					break
				}
}

function ie(ip, player) {
	for (var f = be[player].length - 1; ip <= f; f--) bh.bl(be[player][f], player)
}

function ia(player) {
	for (var dh, f = bn[player].length - 1; 0 <= f; f--)
		if (bh.io(bn[player][f]))
			for (dh = 3; 0 <= dh; dh--)
				if (bh.bi(bn[player][f] + bg[dh])) {
					be[player].push(bn[player][f]);
					break
				}
}

function iq(player, ir) {
	var f, g, dh, is, m = bn[player].length,
		dY = 256 <= m ? 12 : 32 <= m ? 6 : 1,
		it = m - 1 - a6.iu(dY);
	iv = 0;
	loop: for (f = it; 0 <= f; f -= dY)
		for (dh = 3; 0 <= dh; dh--)
			if ((is = bh.bi(bn[player][f] + bg[dh]) ? cK : bh.bk(bn[player][f] + bg[dh])) === cK || bh.bj(bn[player][f] + bg[dh]) && is !== player && (ir || c9(player, is))) {
				for (g = iv - 1; 0 <= g; g--)
					if (iw[g] === is) continue loop;
				if (iw[iv] = is, ++iv >= ix) return !0
			}
	return 0 < iv
}

function iy(player, ir) {
	var f, dh, is;
	for (iv = 0, f = bn[player].length - 1; 0 <= f; f--)
		for (dh = 3; 0 <= dh; dh--)
			if ((is = bh.bi(bn[player][f] + bg[dh]) ? cK : bh.bk(bn[player][f] + bg[dh])) === cK || bh.bj(bn[player][f] + bg[dh]) && is !== player && (ir || c9(player, is))) return iw[iv++] = is, !0;
	return !1
}

function iz() {
	for (var u, f = iv - 1; 0 <= f; f--)
		if (iw[f] === cK) {
			for (iv--, u = f; u < iv; u++) iw[u] = iw[u + 1];
			return !0
		} return !1
}

function j0(player) {
	for (var u, f = iv - 1; 0 <= f; f--)
		if (cG.j1(player, iw[f]))
			for (iv--, u = f; u < iv; u++) iw[u] = iw[u + 1];
	return 0 === iv
}

function j2() {
	for (var f = iv - 1; 0 <= f; f--)
		if (iw[f] >= j3) return !0;
	return !1
}

function j4() {
	for (var f = iv - 1; 0 <= f; f--) iw[f] < j3 && (iw[f] = iw[--iv]);
	return 0 < iv
}

function j5(player) {
	for (var u, j6 = iw[0], j7 = im[j6] + cG.j8(j6, player), f = iv - 1; 1 <= f; f--)(u = im[iw[f]] + cG.j8(iw[f], player)) < j7 && (j6 = iw[f], j7 = u);
	return j6
}

function j9(player) {
	var aC, jA = iw[0];
	if (1 !== iv)
		for (var jB = a1(bb[player] + bY[player], 2), jC = a1(bc[player] + ba[player], 2), bD = jD(jB - a1(bb[jA] + bY[jA], 2)) + jD(jC - a1(bc[jA] + ba[jA], 2)), f = iv - 1; 1 <= f; f--)(aC = jD(jB - a1(bb[iw[f]] + bY[iw[f]], 2)) + jD(jC - a1(bc[iw[
			f]] + ba[iw[f]], 2))) < bD && (bD = aC, jA = iw[f]);
	return jA
}

function jE() {
	return iw[a6.iu(iv)]
}

function jF() {
	var jG, aJ, jH, jI;

	function jN(iT, name, jO, i) {
		jH[iT] = name, aJ[iT] = new Image, aJ[iT].onload = function() {
			0 < jO && ! function(iT, jO) {
				var b8, b9, f, o = document.createElement("canvas"),
					aQ = aJ[iT].width,
					aC = aJ[iT].height,
					bI = (o.width = aQ, o.height = aC, o.getContext("2d", {
						alpha: !0
					})),
					bJ = (bI.drawImage(aJ[iT], 0, 0), bI.getImageData(0, 0, aQ, aC)),
					bK = bJ.data;
				if (jO < 3) {
					var jR = 2 === jO ? 160 : 600;
					for (b8 = aQ - 1; 0 <= b8; b8--)
						for (b9 = aC - 1; 0 <= b9; b9--) bK[f = 4 * (b8 + b9 * aQ)] + bK[f + 1] + bK[f + 2] < jR && (bK[f + 3] = Math.floor(255 * (bK[f] + bK[f + 1] + bK[f + 2]) / jR))
				} else if (3 === jO)
					for (b8 = aQ - 1; 0 <= b8; b8--)
						for (b9 = aC - 1; 0 <= b9; b9--) 0 === bK[f = 4 * (b8 + b9 * aQ)] && 200 < bK[f + 1] && 0 === bK[f + 2] && (bK[f + 3] = 0);
				else if (4 === jO) ! function(bK, aQ, aC) {
					var b8, b9, f;
					for (b8 = aQ - 1; 0 <= b8; b8--)
						for (b9 = aC - 1; 0 <= b9; b9--) bK[1 + (f = 4 * (b8 + b9 * aQ))] > bK[f] + 20 && bK[1 + f] > bK[2 + f] + 20 && bK[f] + bK[2] < 40 && (bK[3 + f] = 255 - bK[1 + f], bK[f] = bK[1 + f] = bK[2 + f] = bK[f])
				}(bK, aQ, aC);
				else if (5 === jO) ! function(bK, aQ, aC, id) {
					var b8, b9, f;
					for (b8 = aQ - 1; 0 <= b8; b8--)
						for (b9 = aC - 1; 0 <= b9; b9--) 200 < bK[1 + (f = 4 * (b8 + b9 * aQ))] && bK[1 + f] - 20 > bK[f] && bK[1 + f] - 20 > bK[2 + f] ? bK[f] + bK[2 + f] < 40 ? bK[3 + f] = 0 : (bK[3 + f] = bK[f], bK[f] = 255, bK[1 +
							f] = 255, bK[2 + f] = 255) : bK[f] < 50 && bK[1 + f] < 50 && bK[2 + f] < 50 && (bK[f] + bK[1 + f] + bK[2 + f] < 50 ? (bK[1 + f] = 0 === id ? bK[1 + f] : 160, bK[3 + f] = 180) : (bK[1 + f] = 0 === id ? bK[
							1 + f] : 160, bK[3 + f] = 180 + Math.floor(75 * (bK[f] + bK[1 + f] + bK[2 + f] - 50) / 100)))
				}(bK, aQ, aC, 0);
				else if (6 === jO)
					for (b8 = aQ - 1; 0 <= b8; b8--)
						for (b9 = aC - 1; 0 <= b9; b9--) bK[(f = 4 * (b8 + b9 * aQ)) + 3] = Math.floor(255 * (bK[f] + bK[f + 1] + bK[f + 2]) / 765), bK[f] = bK[f + 1] = bK[f + 2] = 255;
				else if (7 === jO)
					for (b8 = aQ - 1; 0 <= b8; b8--)
						for (b9 = aC - 1; 0 <= b9; b9--) bK[(f = 4 * (b8 + b9 * aQ)) + 1] > bK[f + 2] + 10 && (bK[f + 3] = bK[f], bK[f + 1] = bK[f + 2]);
				bI.putImageData(bJ, 0, 0), aJ[iT] = o
			}(iT, jO), jQ()
		}, aJ[iT].onerror = function(cE) {
			console.error("Error loading image at index", iT, "Error:", cE), jQ()
		}, aJ[iT].src = "data:image/png;base64," + i
	}

	function jQ() {
		gd.jL() || (jG--, gd.jL() && (gt.jV(), cq.jW(), ge.aN(), jX.jY([aJ[8], aJ[16], aJ[7], aJ[9], aJ[10]], [!jZ, 0 === ja, !0, !0, !0]), aO.an = !0, aJ[7] = jI, aJ[8] = jI, aJ[9] = jI, aJ[10] = jI))
	}
	this.aN = function() {
		if (void 0 === aJ) {
			jG = 22, aJ = new Array(jG), jH = new Array(jG), (jI = document.createElement("canvas")).width = 1, jI.height = 1;
			for (var f = jG - 1; 0 <= f; f--) aJ[f] = jI;
			jN(0, "exit", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
				), jN(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg=="
				), jN(2, "defeat", 6,
				"iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
				), jN(3, "orders", 6,
				"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"
				), jN(4, "crown", 4,
				"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
				), jN(5, "arena", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
				), jN(6, "territorial.io", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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"
				), jN(7, "youtube", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
				), jN(8, "googleplay", 3,
				"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"
				), jN(9, "discord", 7,
				"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
				), jN(10, "insta", 3,
				"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"
				), jN(11, "emojis", 4,
				"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"
				), jN(12, "flags", 3,
				"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"
				), jN(13, "bestTeam", 5,
				"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"
				), jN(14, "bestPlayer", 5,
				"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"
				), jN(15, "zoom", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
				), jN(16, "apple", 3,
				"iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
				), jN(17, "loading", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII="
				), jN(18, "target", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII="
				), jN(19, "members", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
				), jN(20, "hourglass", 7,
				"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
				), jN(21, "stalemate", 6,
				"iVBORw0KGgoAAAANSUhEUgAAAeoAAABABAMAAAAnsyk1AAAAElBMVEUAAAA8PjxeYF2Rk5C6vLn////ACCfyAAAFMklEQVRo3uXby3qjIBQAYBEfwO+buM9c3Ntp2ZOZ8ADx8v6vMp2qybmBCK6SbNomEc4vcAS0RbG+1Iebvl5/vxev8lIf0+M1nl8DXboJvd5eET1N3QuoGfoVOvlp4q/+6fv3JL2evY83orp/uVH9NbLrp0braXrBLt541LenVpsH9Ao7+/DUc1E0kuF85ZkHdokHMriMPfNEpbo39fx3e1fbV1D3NKVb8KEn1TkpCShvbxET50gvnzdaDG4A520mfhHSvg+oWsHaN9QlCf0Ydc+vqFYqfUk8SeqGNpcDtW+oKzEJ5KqHghYO1ZrOKPLUa842oPYNdbPRGmnqka+JrDAi13eT1Cd6jj9LuV7ff/+g51tQG3FOk6sWei5Qt3Qo5I1raVG9oXbinCZb3dFTCtWszlz1ZwRve9Qli/0YtfW8QzP73CmS1OQD7A6r0aHn49QXxrPyWqlLVrM9BegOqxt5iZat7tleh5UjsslqYXk91HFqIy/RstWDzOOjuE9XC0eNXZQana/hOPUYUBtWZ5q6CmwpBNWlEHykug9v6NQUY8VkNu/3RKlH/1KTs4NqciLPx6k72qjWs/HTJavlw/C1Wwz35Nlxyldb6Q2pGay0OyJNX8fIneFhM9ylmhFeb45RX2gPtKSFRmGXa6e6+LW5WyiGuwTaO3KactTj+nGJdJbQBsebZq9a3hseNsJdcdaRgnPUw1q1FtVq+drNcMxudSmyz+Fw1xK7luyzZandEuM8gP8SyFqnbXkNu9Uy+xIOd00s54YMiZ3X65qrP9+bv/pOIGudXcWFJrwYl4auxB7C6jWx1DSCLLVZDpx//iRFrwXUmqezBHVRfPji8anvw1mTz7LUzRL4/Pc3ArkP55K3TJI6eOteUKv7O4qMnSz13HHsnLZGjSHqkbodG69p6qL45nxzAEEN+pjDfSNLPRfbl/CveyTlIwrDqkhV0/a+hdRgNBtcXJYacXuiBnW2jJCuxjOWPqRu+YajPUA9HzwuHZ2oG77ddztEDWe6Q0htHkFXvh31BPXySyuqQbeuWIz71OWP948rOLyNUsMUpvH389Rz8MsFjKgduA3Jph971C2bvegoNZSWGJCnhivAGquhVLE68tTKxagraVOlO0ANd6oLrEYTA0dH6R51w0OMUouLcps/D8d5BavFk3ZJmYdXPLWZGLXxP7eUpy5hcVhtgkvDNPWlEG7v+cJVgcVpnlrBZtTe+wJ8v26PmucuFTNL0YGntfLUwGaxWt7zua8W9qgVu3rrmBlpFXhaK1NtQGlIrcNPiO1aXzva2CZm9eF5XMseoG5BKyL1Sa7zkqIGKeIPKTuw0jSBmwPK+1GU+gQiRWpPnX2KGp7B8ffPa9SugpzMlkMi1LyLOv6kwEDUnjrHvdfr/6H4HqhE+xRU7UksczrLVGtQF1QrX5x1gtp3CtHahKq990TO+WolNIkNPO+6xrlP7btjMgbSUOOLwOar781gsfoUqnO3Wm93cKY25MxoeFCu2vD7VBa0zkhv2fQpal9urANq55vZDAeowV63Fm58DXR6OCSpq+AFQVKXrD84aRGYqG74yt2CUns206hT1GI+w/8KQNTV5Ln/9NVAuepKVGt2pg1OZ3vVenNziagb9q12ElolUa0fVQE1P9PNJK/IItVCerwEp5KGTTkbUGKuuuSZFmyKPs505QkqVs3Yf8ITaMeGAZxQ5aqX3y1WO5ZlNZ5E7lfjjfCxK4Lqkl/S4YT3IHWH1IrXWeIclKD+LGP9T+Tr8/9r6j/yRPVUqj3rEAAAAABJRU5ErkJggg=="
				)
		}
	}, this.get = function(iT) {
		return aJ[iT]
	}, this.jK = function(name) {
		for (var f = jH.length - 1; 0 <= f; f--)
			if (jH[f] === name) return aJ[f];
		return jI
	}, this.jL = function() {
		return 0 === jG
	}
}

function jc() {
	var aF, jd, je, aQ, aC, font;

	function jh(dr) {
		return dr < 10 ? "0" + dr : String(dr)
	}
	this.aN = function() {
		void 0 === aQ && this.resize(), this.setTime()
	}, this.resize = function() {
		aQ = Math.floor((aR ? .53 : .36) * aS), aC = Math.floor(.065 * aQ), font = aT + Math.floor(.9 * aC) + aU, je--, this.setTime()
	}, this.aW = function() {
		this.setTime() && (aO.an = !0)
	}, this.setTime = function() {
		var cQ = new Date,
			jg = cQ.getUTCMinutes(),
			cQ = cQ.getUTCSeconds();
		return jd = 3600 - 60 * jg - cQ, jd %= 900, aF = "Next Contest: " + jh(Math.floor(jd / 60)) + ":" + jh(jd % 60), je !== (je = 60 * jg + cQ) && (aQ = aZ.measureText(aF, font), aQ += Math.floor(.4 * aC), !0)
	}, this.ao = function() {
		ag.lineWidth = 1 + Math.floor(aC / 15), 7 === fT.fp() && ji.gn() + 2 * gs > .5 * (eH - aQ) ? ag.translate(eG - aC, Math.floor(ji.gn() + 2 * gs + aQ)) : ag.translate(eG - aC, Math.floor(.5 * (eH + aQ))), ag.rotate(-Math.PI / 2), ag
			.fillStyle = av.b0, ag.fillRect(0, 0, aQ, aC), ag.strokeStyle = av.az, ag.strokeRect(0, 0, aQ, aC + 10), ag.fillStyle = av.az, ag.font = font, ag.textBaseline = b2, ag.textAlign = b1, ag.fillText(aF, Math.floor(aQ / 2), Math.floor(
				.59 * aC)), ag.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function jj() {
	var a8, aC, hW, jk, jl, jm, jn, jo, jp;

	function ca() {
		return ck.kE(ci.kB()) ? cl.fa ? ck.b9 - ck.aC - 2 * hW : ck.b9 - hW : ch.kE(ci.kD()) ? cl.fa ? ch.ca() - ck.aC - 2 * hW : ch.ca() - hW : cl.fa ? eY - ck.aC - (eC.kF() + 1) * hW : eY - eC.kF() * aq
	}

	function jz(cQ, i, id, s, k2, k3, k4, k5, k6) {
		var f, aK, kC, bF, kM, kN = void 0 !== k6,
			aQ = Math.floor(aZ.measureText(i, ci.aD) + 1.5 * jk + (kN ? aC : 1.5 * jk));
		if (aO.an = !0, eV < aQ + hW && !kN && 50 !== id && 20 < i.length) kC = Math.floor(.5 * i.length), jz(cQ, i.substring(0, kC), id, s, k2, k3, k4, k5, k6), jz(cQ, i.substring(kC), id, s, k2, k3, k4, k5, k6);
		else if (kC = aQ + (50 === id ? jl : 0), (bF = document.createElement("canvas")).width = aQ, bF.height = aC, (aK = bF.getContext("2d", {
				alpha: !0
			})).font = ci.aD, aK.textBaseline = b2, aK.textAlign = hX, aK.clearRect(0, 0, aQ, aC), aK.fillStyle = k3, aK.fillRect(0, 0, aQ, aC), aK.fillStyle = k2, aK.fillText(i, Math.floor(1.5 * jk), Math.floor(aC / 2)), kN && (kN = aC / ge.aQ, aK
				.imageSmoothingEnabled = !0, aK.setTransform(kN, 0, 0, kN, aQ - aC, 0), aK.drawImage(ge.bF[k6], 0, 0)), 0 === (kM = {
				aP: cQ,
				i: i,
				id: id,
				player: s,
				aJ: bF,
				k2: k2,
				k3: k3,
				aQ: aQ,
				kC: kC,
				k4: k4,
				k5: k5,
				k6: k6
			}).aP || 0 < a8.length && 0 < a8[0].aP) a8.unshift(kM);
		else {
			for (f = 1; f < a8.length; f++)
				if (0 < a8[f].aP) return void a8.splice(f, 0, kM);
			a8.push(kM)
		}
	}

	function k0(a4, lF, u) {
		return "rgb(" + a4 + "," + lF + "," + u + ")"
	}

	function kR(id, gf) {
		for (var m = a8.length, f = 0; f < m; f++) a8[f].id === id && gf-- <= 0 && (a8.splice(f, 1), f--, m--)
	}

	function kS(id, player) {
		for (var lH = !1, f = a8.length - 1; 0 <= f; f--) a8[f].id !== id || player !== cK && a8[f].player !== player || (a8.splice(f, 1), lH = !0);
		return lH
	}

	function lP(i) {
		jz(340, i, 6, 0, k0(215, 245, 255), av.ax, -1, !1)
	}

	function lb(player, lc) {
		return (ld || j3 <= player || lc || eC.eD.le ? aj : lf)[player]
	}
	this.aN = function() {
		jn = aR ? 7 : 12, jm = {
			jq: [jo = 0, 0, 0],
			jr: [0, 0, 0],
			am: [220, 180, 180],
			js: [0, 0, 0],
			o: [0, 0, 0]
		}, a8 = [], this.resize(), jt && this.ju(0, 18), lP(k8.k9(37, [ab.ac.ad[ab.ae].name])), lP(k8.k9(38, [ab.bX - 2, ab.ea - 2])), lP(k8.k9(39, [lQ.lR], {
			kq: [0]
		})), lQ.lR !== lQ.lS && lP(k8.k9(40, [lQ.lS, lQ.lS / lQ.lR], {
			kq: [0],
			lT: [1]
		})), 0 < lQ.lU && lP(k8.k9(41, [lQ.lU, lQ.lU / lQ.lR], {
			kq: [0],
			lT: [1]
		})), 0 < lQ.lV && lP(k8.k9(42, [lQ.lV, lQ.lV / lQ.lR], {
			kq: [0],
			lT: [1]
		})), 10 === lW && jz(120, k8.k9(43), 6, 0, k0(235, 255, 120), av.ax, -1, !1), this.jw()
	}, this.jw = function() {
		var f, m;
		if (jx.jy)
			for (m = jx.ac.iV.length, f = 0; f < m; f++) jz(400, jx.ac.iV[f], 6, 0, k0(255, 255, 255), av.ax, -1, !1)
	}, this.resize = function() {
		var k1, f;
		if (aC = (aC = Math.floor((aR ? .031 : .0249) * aS)) < 10 ? 10 : aC, this.fontSize = Math.floor(2 * aC / 3), this.aD = aT + this.fontSize + aU, hW = aq, jk = Math.floor(aC / 5), 0 < a8.length)
			for (k1 = a8, a8 = [], f = k1.length - 1; 0 <= f; f--) jz(k1[f].aP, k1[f].i, k1[f].id, k1[f].player, k1[f].k2, k1[f].k3, k1[f].k4, k1[f].k5, k1[f].k6);
		this.k7()
	}, this.k7 = function() {
		jp = document.createElement("canvas");
		var i = k8.k9(0),
			aK = (jl = aZ.measureText(i, this.aD) + 5 * jk, jp.height = aC, jp.width = jl, jp.getContext("2d", {
				alpha: !0
			}));
		aK.font = this.aD, aK.textBaseline = b2, aK.textAlign = b1, aK.clearRect(0, 0, jl, aC), aK.fillStyle = av.kA, aK.fillRect(0, 0, jl, aC), aK.fillStyle = av.b0, aK.fillText(i, Math.floor(jl / 2), Math.floor(aC / 2))
	}, this.kB = function() {
		var m;
		return cl.fa ? cl.aQ : 0 === (m = a8.length) ? 0 : 1 === m ? a8[0].kC : gu(a8[0].kC, a8[1].kC)
	}, this.kD = function() {
		var m = a8.length;
		return cl.fa ? m ? gu(cl.aQ, a8[0].kC) : cl.aQ : 0 === m ? 0 : 1 === m ? a8[0].kC : 2 === m ? gu(a8[0].kC, a8[1].kC) : gu(gu(a8[0].kC, a8[1].kC), a8[2].kC)
	}, this.eB = function(b8, b9) {
		for (var e4, kG = ca(), f = a8.length - 1; 0 <= f; f--)
			if ((e4 = kG - (f + 1) * aC) <= b9 && b9 < e4 + aC) return 50 === a8[f].id ? b8 >= eG - jl - hW - a8[f].aQ && (eG - jl - hW <= b8 ? kH.kI.kJ(a8[f].player) : eI.kK(a8[f].player, 800, !1, 0), !0) : b8 >= eG - a8[f].aQ - hW && (736 ===
				a8[f].id ? window.open("https://" + a8[f].i, "_blank") : a8[f].k5 && (eI.kK(a8[f].player, 800, !1, 0), 0 <= a8[f].k4) && (e4 = a8[f].k4, a8[f].k4 = a8[f].player, a8[f].player = e4), !0);
		return !1
	}, this.kL = function(cQ, i, id, s, k2, k3, k4, k5, k6) {
		jz(cQ, i, id, s, k2, k3, k4, k5, k6)
	}, this.kO = function(id) {
		for (var f = a8.length - 1; 0 <= f; f--) a8[f].id === id && (a8[f].aP = 1)
	}, this.ju = function(player, id) {
		0 === id ? (kP.kQ[player < j3 ? 4 : 3]++, aZ.ah(player, 0), kR(423, 0), jz(160, k8.k9(1, [aj[player]]), 423, player, "rgb(10,220,10)", av.ax, -1, !1)) : 1 === id ? (kS(50, cK), aZ.ah(player, 1), jz(360, k8.k9(2, [aj[player]]), 0, player,
			"rgb(255,40,40)", av.ax, -1, !0), eI.kK(player, 2700, !1, 0)) : 2 === id ? (aZ.ah(player, 2), jz(0, k8.k9(3), 0, player, "rgb(10,255,255)", av.ax, -1, !0), eI.kK(player, 2700, !1, 0)) : 3 === id ? (aZ.ah(player, 2), jz(0, k8.k9(4,
			[aj[player]]), 0, player, av.b0, av.ax, -1, !0), eI.kK(player, 2700, !1, 0)) : 4 === id ? (kT--, kU--, this.kV(1, player, player)) : 5 === id ? 2 !== kW[player] && bh.kX(kY) && (function(id, kv) {
			var f, kw = 0,
				m = a8.length;
			for (f = 0; f < m; f++)
				if (a8[f].id === id && kv <= ++kw) return a8.splice(f, 1)
		}(1, 5), ce.ka(player) ? jz(180, k8.k9(5, [aj[player]]), 1, player, k0(255, 200, 180), av.ax, -1, !0) : (kR(573, 0), jz(180, k8.k9(6, [aj[player]]), 573, player, "rgb(255,70,10)", av.ax, -1, !0))) : 18 === id ? jz(255, k8.k9(7), 18,
			0, av.b0, av.ax, -1, !1) : 21 === id ? jz(220, k8.k9(8), id, 0, "rgb(255,40,40)", av.ax, -1, !1) : 22 === id ? this.kV(2, player, player) : 59 === id && jz(0, k8.k9(9), id, 0, av.kb, av.ax, 0, !1)
	}, this.kc = function(kd) {
		jz(200, k8.k9(10, [kd]), 94, 0, av.b0, av.ke, -1, !1)
	}, this.kf = function(kg) {
		if (kY === kg) wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter);
		aZ.ah(kg, 2), jz(0, j3 < 100 ? k8.k9(11, [aj[kg]]) : k8.k9(12, [aj[kg]]), 3, kg, av.b0, av.ax, -1, !0), jz(0, "Your Current Win Count is Now " + wins_counter, 3, kg, av.b0, av.ax, -1, !0), eI.kK(kg, 2700, !1, 0)
	}, this.kh = function(bO) {
		var ki = "(" + bP.kj(bO >> 2) + ", " + bP.kk(bO >> 2) + ")",
			k5 = !1,
			player = 0;
		bh.c2(bO) ? bh.bi(bO) ? ki = k8.k9(13, [ki]) : (player = bh.bk(bO), ki = k8.k9(14, [aj[player], bG.hZ.ha(im[player]), bG.hZ.ha(bx[player]), ki]), k5 = !0) : ki = bh.kl(bO) ? k8.k9(15, [ki]) : k8.k9(16, [ki]), aO.an = !0, kR(55, 0), jz(
			220, ki, 55, player, av.b0, av.ax, -1, k5)
	}, this.km = function(kn) {
		var bL = bR.bS,
			player = bL.ko[kn] >> 3;
		aO.an = !0, kR(55, 0), jz(220, k8.k9(17, [aj[player], bL.kp[kn]], {
			kq: [1]
		}), 55, player, av.b0, av.ax, -1, !0)
	}, this.kr = function(hN, ks, kt) {
		hN === kY ? jz(175, k8.k9(18, [aj[ks]]), 1001, ks, k0(200, 255, 210), av.ax, -1, !0, kt) : this.ku(hN, kt)
	}, this.ku = function(hN, kt) {
		kR(1e3, 0), jz(175, k8.k9(19, [aj[hN]]), 1e3, hN, av.b0, "rgba(5,60,25,0.9)", -1, !0, kt)
	}, this.kx = function(ky) {
		var kd;
		ky ? (kd = k8.k9(20), aZ.aa(k8.k9(21), 2, 1, 12), jz(0, kd, 40, 0, "rgb(10,220,10)", av.ax, -1, !1)) : (kd = k8.k9(22), aZ.aa(k8.k9(23), 2, 0, 16), jz(0, kd, 41, 0, "rgb(200,80,80)", av.ax, -1, !1)), eI.kz(2700)
	}, this.l0 = function(jq) {
		jz(300, jq[0].name + " [" + l1.l2(jq[0].l3) + "] vs " + jq[1].name + " [" + l1.l2(jq[1].l3) + "]", 65, 0, av.az, "rgba(100,255,255,0.75)", -1, !1)
	}, this.l4 = function(kd) {
		jz(200, kd, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.l5 = function() {
		jz(0, k8.k9(24), 247, 0, av.l6, av.ax, -1, !1)
	}, this.l7 = function(jq, l8, l9, lA) {
		1 === fL.bS.lB() && (jz(0, jq[0].name + ": " + l1.l2(jq[0].l3) + " -> " + l8, 66, 0, av.b0, lA[0], -1, !1), jz(0, jq[1].name + ": " + l1.l2(jq[1].l3) + " -> " + l9, 66, 1, av.b0, lA[1], -1, !1))
	}, this.lC = function(player, id) {
		0 === id ? kS(50, player) ? (jz(128, k8.k9(25, [aj[player]]), 52, player, k0(180, 255, 180), av.ax, -1, !0), ce.lD(player, 2, 255)) : jz(384, k8.k9(26, [aj[player]]), 51, player, k0(210, 210, 255), av.ax, -1, !0) : kS(51, player) ? (jz(
			128, k8.k9(27, [aj[player]]), 52, player, av.b0, "rgba(60,120,10,0.9)", -1, !0), ce.lD(player, 2, 255)) : (jz(384, k8.k9(28, [aj[player]]), 50, player, av.b0, "rgba(90,90,90,0.9)", -1, !0), ce.lD(player, 2, 96))
	}, this.lE = function(jq, target) {
		var color = k0(210, 255, 210);
		1 < jq.length ? jz(230, k8.k9(29, [jq.length, aj[target]]), 66, target, color, av.ax, -1, !0) : jz(230, k8.k9(30, [aj[jq[0]], aj[target]]), 66, jq[0], color, av.ax, target, !0)
	}, this.lG = function(player, target) {
		jz(230, k8.k9(31, [aj[player], aj[target]]), 66, player, av.b0, "rgba(75,65,5,0.9)", target, !0)
	}, this.lJ = function(id, player) {
		kS(id, player)
	}, this.lK = function() {
		var iT;
		100 <= im[kY] || (-1 === (iT = function(id) {
			for (var f = a8.length - 1; 0 <= f; f--)
				if (a8[f].id === id) return f;
			return -1
		}(143)) ? jz(80, k8.k9(32), 143, 0, av.b0, av.ax, -1, !1) : a8[iT].aP = 80)
	}, this.lL = function(lM, lN, player) {
		2 !== kW[kY] && (jz(200, k8.k9(33, [lM, aj[player]], {
			kq: [0]
		}), 30, player, "rgb(190,255,190)", av.ax, -1, !0), lN) && jz(30, k8.k9(34, [lN], {
			kq: [0]
		}), 30, 0, av.b0, av.ax, -1, !1)
	}, this.lO = function(lM, player) {
		2 !== kW[kY] && (kR(31, 0), 2 === kW[player] || j3 <= player ? jz(150, k8.k9(36, [aj[player], lM], {
			kq: [1]
		}), 31, player, av.az, "rgba(205,205,205,0.9)", -1, !0) : jz(150, k8.k9(35, [aj[player], lM], {
			kq: [1]
		}), 31, player, av.az, "rgba(205,255,205,0.9)", -1, !0))
	}, this.lX = function(lY) {
		for (var o = aO.lZ(), f = 2; 0 <= f; f--) 0 < jm.js[f] && (lY || jm.o[f] < o - 220) && this.la(f)
	}, this.la = function(id) {
		var i, m = jm.js[id],
			player = jm.jq[id];
		jm.js[id] = 0, 1 === m ? (i = 0 === id ? k8.k9(47, [lb(player, !0), lb(jm.jr[0], !0)]) : k8.k9(47 + id, [lb(player, !1)]), kR(7, 0), jz(jm.am[id], i, 7, jm.jr[id], av.b0, av.ax, -1, !0)) : 2 <= m && (i = k8.k9(44 + id, [lb(player, 0 ===
			id), m - 1]), kR(7, 0), jz(jm.am[id], i, 7, player, av.b0, av.ax, -1, !1))
	}, this.kV = function(id, lg, k4) {
		var o = aO.lZ(),
			m = jm.js[id] + 1;
		jm.js[id]++, jm.jq[id] = lg, jm.jr[id] = k4, 1 === m && (jm.o[id] = o), (1 === m && (kT < 32 || 2 === aY) || 1 < m && (jm.o[id] < o - 140 || 2 === aY)) && this.la(id)
	}, this.aW = function() {
		for (var dY = (dY = a8.length - jn) <= 1 ? 1 : dY * dY, f = a8.length - 1; 0 <= f; f--) 0 < a8[f].aP && (a8[f].aP -= dY, a8[f].aP <= 0) && (aO.an = !0, a8.splice(f, 1));
		! function() {
			var gf, f;
			if (128 !== jo && !(++jo < 128))
				for (gf = 5, f = li - 1; 0 <= f; f--) 1 === kW[lj[f]] && 0 < gf-- && jz(240, k8.k9(50, [aj[lj[f]]]), 1, lj[f], av.az, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.lX(!1)
	}, this.ao = function() {
		for (var lk, b9 = ca(), f = a8.length - 1; 0 <= f; f--) lk = b9 - (f + 1) * aC, 50 === a8[f].id ? (ag.drawImage(a8[f].aJ, eG - a8[f].aQ - jl - hW, lk), ag.drawImage(jp, eG - jl - hW, lk)) : ag.drawImage(a8[f].aJ, eG - a8[f].aQ - hW, lk)
	}
}

function ll() {
	var input, color;
	this.fa = !1, this.fn = !1, this.aN = function() {
		color = av.ax, (input = document.createElement("INPUT")).setAttribute("type", "text"), input.setAttribute("name", "username"), input.setAttribute("id", "usernameField"), input.setAttribute("autocomplete", "username"), input.value = "",
			input.style.textAlign = "center", input.style.backgroundColor = color, input.style.borderRadius = "0", input.style.color = av.b0, input.style.position = "absolute", input.readOnly = !1, input.addEventListener("input", function() {
				ga.lm()
			}), input.addEventListener("focus", function() {
				fm.fn = !0
			}), input.addEventListener("blur", function() {
				fm.fn = !1
			})
	}, this.resize = function() {
		var fontSize, hV, hW;
		this.fa && (hV = .3 * (fontSize = .22 * hJ.aC / fP), hW = ln / fP, input.style.border = hW.toFixed(2) + "px solid " + av.b0, input.style.font = aT + fontSize + aU, input.style.padding = hV.toFixed(2) + "px", input.style.left = (((eG - hJ
			.aQ) / fP - hW) / 2).toFixed(2) + "px", input.style.width = (hJ.aQ / fP - 2 * hV - hW).toFixed(2) + "px", input.style.top = ((hJ.b9 - .52 * hJ.aC) / fP).toFixed(2) + "px")
	}, this.get = function() {
		return input
	}, this.lo = function(lo) {
		this.fa !== lo && ((this.fa = lo) ? (this.resize(), document.body.appendChild(input)) : (this.fn = !1, document.body.removeChild(input)))
	}, this.g1 = function(lp) {
		lp && color === av.ax || !lp && color === av.lq || (color = lp ? av.ax : av.lq, input.style.backgroundColor = color)
	}
}

function lr() {
	var ls = document.createElement("div"),
		lt = [];
	this.aN = function(ey) {
		ls.style.position = "absolute", this.resize(), ey.appendChild(ls)
	}, this.lu = function(aQ, aC) {
		var ez = document.createElement("div");
		ez.style.width = aQ.toFixed(1) + "px", ez.style.height = aC.toFixed(1) + "px", ls.appendChild(ez)
	}, this.lv = function(color) {
		ls.style.backgroundColor = color
	}, this.resize = function() {
		for (var f = 0; f < lt.length; f++) lt[f].resize();
		ls.style.height = "max-content", ls.style.width = "max-content"
	}, this.lw = function(b8, b9, aQ) {
		ls.style.left = b8.toFixed(1) + "px", ls.style.top = b9.toFixed(1) + "px", ls.style.width = aQ.toFixed(1) + "px", ls.style.lx("--brick-width", aQ.toFixed(1) + "px")
	}, this.ly = function(ez) {
		ez.aN(ls), lt.push(ez)
	}, this.lz = function() {
		return ls.offsetWidth
	}, this.m0 = function() {
		return ls.offsetHeight
	}
}

function m1() {
	function mH() {
		ab.hH.aW()
	}

	function mR(s, mQ) {
		0 < mQ && (ab.hG[s] += mQ, ab.hG[s + 1] += mQ, ab.hG[s + 2] += mQ)
	}

	function br(s) {
		return ab.hG[s + 2] > ab.hG[s] && ab.hG[s + 2] > ab.hG[s + 1]
	}
	this.m2 = -1, this.m3 = 0, this.m4 = 0, this.m5 = 8, this.m6 = 32, this.m7 = 8, this.m8 = 32, this.m9 = [0, 0], this.mA = [0, 0, 0, 0], this.mB = null, this.mC = !0, this.mD = !1, this.hI = function() {
		-1 !== this.m2 && clearTimeout(this.m2), this.m2 = -1, this.mB = null, iQ.dM()
	}, this.aN = function() {
		7 === fT.fp() || this.mD || (this.mC = !0, this.m3 = 0, this.m4 = 1, this.m9 = [ab.ac.ad[ab.ae].mE[0], ab.ac.ad[ab.ae].mF[0]], this.mA = [ab.ac.ad[ab.ae].mG[3], ab.ac.ad[ab.ae].mG[4], ab.ac.ad[ab.ae].mG[5], ab.ac.ad[ab.ae].mG[6]], this
			.m5 = ab.ac.ad[ab.ae].mG[7], this.m6 = ab.ac.ad[ab.ae].mG[8], this.m7 = ab.ac.ad[ab.ae].mG[9], this.m8 = ab.ac.ad[ab.ae].mG[10], this.mC ? this.m2 = setTimeout(mH, 16) : this.aW())
	}, this.aW = function() {
		if (8 === fT.fp() && eI.mI()) this.m2 = setTimeout(mH, 16);
		else {
			if (0 === this.m3) {
				var mJ = a6.mK();
				if (a6.mL(ab.ac.ad[ab.ae].mG[2]), iQ.dF([ab.bX, ab.ea, ab.ac.ad[ab.ae].mG[0], ab.ac.ad[ab.ae].mG[1]]), a6.mL(mJ), this.mB = iQ.dL(), this.m3++, this.mC) return void(this.m2 = setTimeout(mH, 16))
			}
			for (var s, bA, mJ = this.mC ? 10 : 1e6, mJ = ab.ea - this.m4 - 1 < mJ ? ab.ea - this.m4 - 1 : mJ, mM = this.m4 + mJ, b9 = this.m4; b9 < mM; b9++)
				for (var b8 = 1; b8 < ab.bX - 1; b8++) br(s = 4 * (bA = b8 + b9 * ab.bX)) ? this.mN(s, bA, 1) : (this.mN(s, bA, 0), function(b8, b9, s) {
					return 1 < b8 && br(s - 4) || b8 < ab.bX - 2 && br(s + 4) || 1 < b9 && br(s - 4 * ab.bX) || b9 < ab.ea - 2 && br(s + 4 * ab.bX)
				}(b8, b9, s) && this.mP(b8, b9));
			this.m4 = mM, this.m4 >= ab.ea - 1 ? (ab.hE.putImageData(ab.hF, 0, 0, 1, 1, ab.bX - 2, ab.ea - 2), aO.an = !0, this.hI()) : this.mC && (this.m2 = setTimeout(mH, 16))
		}
	}, this.mN = function(s, bA, iT) {
		mR(s, Math.floor(this.m9[iT] + this.mA[iT] * this.mB[bA] / 1e4) - ab.hG[s])
	}, this.mS = function(s, a4, mT, iT, mA) {
		mR(s, Math.floor(this.m9[iT] + (1 - a4 / mT) * mA) - ab.hG[s])
	}, this.mP = function(eO, eP) {
		for (var s, a4, mT, mU = eO - this.m6, mV = eP - this.m6, mW = eO + this.m6, mM = eP + this.m6, mU = mU < 1 ? 1 : mU, mW = mW > ab.bX - 2 ? ab.bX - 2 : mW, mM = mM > ab.ea - 2 ? ab.ea - 2 : mM, b9 = mV < 1 ? 1 : mV; b9 <= mM; b9++)
			for (var b8 = mU; b8 <= mW; b8++) br(s = 4 * (b8 + b9 * ab.bX)) ? (mT = this.m5 + (this.m6 - this.m5) * this.mB[b8 + ab.bX * b9] / 1e4, Math.abs(eO - b8) > mT || Math.abs(eP - b9) > mT || mT <= (a4 = Math.sqrt((eO - b8) * (eO - b8) +
				(eP - b9) * (eP - b9))) || this.mS(s, a4, mT, 1, this.mA[3])) : (mT = this.m7 + (this.m8 - this.m7) * this.mB[b8 + ab.bX * b9] / 1e4, Math.abs(eO - b8) > mT || Math.abs(eP - b9) > mT || mT <= (a4 = Math.sqrt((eO - b8) * (eO -
				b8) + (eP - b9) * (eP - b9))) || this.mS(s, a4, mT, 0, this.mA[2]))
	}
}
var j3, kT, mk, kU, mX = [60, 74, 112, 200, 256, 512];

function mY() {
	var a9, mZ, ma, mb, mc, md;

	function mp(f) {
		a9[f] = 1 + a1(mc[f] * a6.random(), 10 * a6.value(100))
	}
	this.me = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.mf = [97, 95, 93, 90, 87, 84], this.mg = [98, 95, 70, 40, 20, 0], this.mh = [85, 70, 50, 30, 7, 3], this.mi = [0, 0, 5, 25, 50, 90], this.ik = null, this.aN =
		function() {
			var f, mj;
			if (a9 = new Uint8Array(mk), mZ = new Uint16Array(mk), ma = new Uint16Array(mk), mb = new Uint8Array(mk), this.ik = new Uint8Array(mk), mc = new Uint16Array(mk), md = new Uint16Array(mk), jx.jy) {
				if (jx.ac.ml)
					for (f = mk - 1; 0 <= f; f--) this.ik[f] = jx.ac.ml[f + 1]
			} else if (9 === lW) this.mm();
			else if (ld)
				if (ar)
					for (f = mk - 1; 0 <= f; f--) this.ik[f] = mn.mo[cB.cC[f + j3] - 1].bf;
				else
					for (f = mk - 1; 0 <= f; f--) this.ik[f] = mn.mo[0].bf;
			else
				for (mj = 8 === lW ? 1 : 0, f = mk - 1; 0 <= f; f--) this.ik[f] = mj;
			for (f = mk - 1; 0 <= f; f--) this.ik[f] <= 2 ? (mb[f] = 5, mc[f] = md[f] = 1040, 0 === this.ik[f] ? (mZ[f] = 1e3, ma[f] = 1e3) : 1 === this.ik[f] ? (mZ[f] = 1e3, ma[f] = 920, mc[f] = md[f] = 1100) : (mZ[f] = 825, ma[f] = 750)) : this.ik[
				f] <= 4 ? (mb[f] = 1 + a6.iu(20), 3 === this.ik[f] ? (mZ[f] = ma[f] = 500, mc[f] = md[f] = 1e3) : (md[f] = 250 + a6.iu(1501), mc[f] = 500 + a6.iu(501), mZ[f] = 300 + a6.iu(201), ma[f] = 100 + a6.iu(201))) : (mc[f] = 1e3, md[f] =
				1e3, mb[f] = 35 + a6.iu(16), mZ[f] = 300 + a6.iu(201), ma[f] = 50 + a6.iu(101)), mp(f)
		}, this.mm = function() {
			for (var f, bO = 0, u = 0; u < 6; u++) {
				for (f = bO + mq.mr[u] - 1; bO <= f; f--) this.ik[f] = u;
				bO += mq.mr[u]
			}
		}, this.ms = function(mt, value) {
			0 <= mt && (a9[mt] = value)
		}, this.aW = function(mt) {
			0 == --a9[mt] && ! function(mt) {
				! function(mt) {
					mc[mt] !== md[mt] && (mc[mt] += mc[mt] < md[mt] ? 3 : -3);
					mZ[mt] !== ma[mt] && (mZ[mt] += mZ[mt] < ma[mt] ? mb[mt] : -mb[mt], mZ[mt] = (Math.abs(mZ[mt] - ma[mt]) <= mb[mt] ? ma : mZ)[mt]);
					a9[mt] = a1(mc[mt], 10)
				}(mt);
				var player = mt + j3;
				mw(player, a1(mZ[mt] * im[player], 1e3))
			}(mt)
		}
}

function mx() {
	this.ad = null, this.aN = function() {
		var my = [120, 105, 92],
			cos = [12, 12, 60],
			mz = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			n0 = [140, 130, 120],
			n1 = [12, 12, 76],
			n2 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			n3 = [130, 117, 106],
			n4 = [12, 12, 68],
			n5 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.ad = new Array(ab.n6 + 1), this.ad[0] = {
			name: "White Arena",
			aQ: 230,
			aC: 230,
			dP: 1e3,
			d5: 2e3,
			mJ: 173
		}, this.ad[1] = {
			name: "Black Arena",
			aQ: 800,
			aC: 800,
			dP: 100,
			d5: 50,
			mJ: 43
		}, this.ad[2] = {
			name: "Island",
			aQ: 512,
			aC: 512,
			dP: 128,
			d5: 32,
			mJ: 0
		}, this.ad[3] = {
			name: "Mountains",
			aQ: 960,
			aC: 960,
			dP: 60,
			d5: 8,
			mJ: 0
		}, this.ad[4] = {
			name: "Desert",
			aQ: 900,
			aC: 900,
			dP: 100,
			d5: 5,
			mJ: 0
		}, this.ad[5] = {
			name: "Swamp",
			aQ: 1e3,
			aC: 1e3,
			dP: 100,
			d5: 40,
			mJ: 0
		}, this.ad[6] = {
			name: "Snow",
			aQ: 1e3,
			aC: 1e3,
			dP: 100,
			d5: 20,
			mJ: 0
		}, this.ad[7] = {
			name: "Cliffs",
			aQ: 1024,
			aC: 1024,
			dP: 128,
			d5: 32,
			mJ: 0
		}, this.ad[8] = {
			name: "Pond",
			aQ: 820,
			aC: 820,
			dP: 200,
			d5: 100,
			mJ: 0
		}, this.ad[9] = {
			name: "Halo",
			aQ: 1024,
			aC: 1024,
			dP: 128,
			d5: 32,
			mJ: 0
		}, this.ad[10] = {
			name: "Europe",
			mE: n0,
			mF: n1,
			mG: n2
		}, this.ad[11] = {
			name: "World",
			mE: n3,
			mF: n4,
			mG: n5
		}, this.ad[12] = {
			name: "Caucasia",
			mE: n3,
			mF: n4,
			mG: n5
		}, this.ad[13] = {
			name: "Africa",
			mE: my,
			mF: cos,
			mG: mz
		}, this.ad[14] = {
			name: "Middle East",
			mE: my,
			mF: cos,
			mG: mz
		}, this.ad[15] = {
			name: "Scandinavia",
			mE: n0,
			mF: n1,
			mG: n2
		}, this.ad[16] = {
			name: "North America",
			mE: n0,
			mF: n1,
			mG: n2
		}, this.ad[17] = {
			name: "South America",
			mE: my,
			mF: cos,
			mG: mz
		}, this.ad[18] = {
			name: "Asia",
			mE: n3,
			mF: n4,
			mG: n5
		}, this.ad[19] = {
			name: "Australia",
			mE: my,
			mF: cos,
			mG: mz
		}, this.ad[20] = {}
	}
}

function n7() {
	var data = [];

	function n8(type, n9, value) {
		data.push({
			type: type,
			n9: n9,
			value: value,
			nA: value
		})
	}
	this.aN = function() {
		n8(1, ["English, Russian"], 0), n8(0, [5, 20, 5], 12), n8(0, [0, 2, 1], 0)
	}, this.get = function(iT) {
		return data[iT]
	}
}

function nB() {
	var hL, hM, nC, he, nD = 0,
		nE = 0;

	function nH() {
		return Math.pow(Math.pow(nC - hL, 2) + Math.pow(he - hM, 2), .5)
	}

	function nF(cE) {
		hL = fP * cE.touches[0].clientX, hM = fP * cE.touches[0].clientY, nC = fP * cE.touches[1].clientX, he = fP * cE.touches[1].clientY
	}
	this.f8 = function(cE) {
		return 1 < cE.touches.length ? (nE = aO.aP, nD = 3, nF(cE), cq.nG(), !0) : (nD = 0, !1)
	}, this.f9 = function(cE) {
		var iK, e7, eA;
		return 0 !== aY && 1 < cE.touches.length && (nD = Math.max(nD - 1, 0), eI.eJ() && (iK = nH(), nF(cE), cE = nH(), e7 = Math.floor((hL + nC) / 2), eA = Math.floor((hM + he) / 2), cY.eR(e7, eA, Math.max(.125, cE) / Math.max(.125, iK)), aO
			.an = !0), !0)
	}, this.fh = function() {
		var b8, b9;
		return !!(nD && (nD = 0, aO.aP < nE + 500)) && (b8 = (hL + nC) / 2, b9 = (hM + he) / 2, cq.fY(b8, b9), cq.click(b8, b9, !0) && (aO.an = !0), !0)
	}
}

function nI() {
	var r, mU, nJ, nK, gap, nL, nM, nN, nO, nP, aD, nQ, nR, nS, nT, nU, m2, nV, nW;

	function na() {
		nK = Math.floor(.2 * (aR ? .07 : .035) * aS), nK = gu(aR ? 3 : 1, nK);
		var nf = eV / (r.length + gap);
		nK = nK < nf ? nf : nK, nU = Math.floor((1 - gap) * nK), mU = 0, ng()
	}

	function ng() {
		mU = (mU = mU < -20 ? -20 : mU) > (r.length - 15) * nK ? (r.length - 15) * nK : mU, nM = Math.floor(mU / nK), nN = (nN = nM + Math.floor(eG / nK)) > r.length - 1 ? r.length - 1 : nN, nM = (nM = nN < nM ? nN : nM) < 0 ? 0 : nM;
		var bL = nN;
		nL = nJ / r[bL];
		for (var f = nN - 1; nM <= f; f--) r[f] > r[bL] && (bL = f, nL = nJ / Math.pow(r[f], nT))
	}

	function nj(b8) {
		b8 = Math.floor((mU + eG - b8 - gap * nK) / nK);
		return (b8 = b8 < -1 ? -1 : -1 === b8 ? 0 : b8 > r.length - 1 ? -1 : b8) !== nO && (nO = b8, -1 === m2 && 0 === nO && nS && (m2 = setInterval(nk, 100)), 1)
	}

	function nm(f) {
		var no = Math.floor(nL * Math.pow(r[f], nT));
		ag.fillRect(mU + eG - (f + 1) * nK, eH - no, nU, no)
	}

	function nk() {
		var s;
		0 !== (nO = 8 === fT.fp() ? -1 : nO) ? (nV = (new Date).getTime(), clearInterval(m2), m2 = -1) : (s = r[1] / 864e3, -1 !== nV && (s += ((new Date).getTime() - nV) * r[1] / 864e5, nV = -1), 0 < s && (r[0] += Math.floor(s), aO.an = !0))
	}
	this.aN = function() {
		nS = !(nV = m2 = -1), nO = -(nT = 1), this.nX = !1, nR = 0, nQ = new Date, mU = 0, gap = .3, (nW = []).push({
			gf: "Plateau A",
			m: 0,
			cE: 57
		}), nW.push({
			gf: "Max A",
			m: 1,
			cE: 1
		}), nW.push({
			gf: "Black Friday",
			m: 15,
			cE: 15
		}), nW.push({
			gf: "Max B",
			m: 19,
			cE: 19
		}), nW.push({
			gf: "Max C",
			m: 44,
			cE: 44
		}), nW.push({
			gf: "First Android Version",
			m: 58,
			cE: 58
		}), nW.push({
			gf: "Max D",
			m: 67,
			cE: 67
		}), nW.push({
			gf: "The iFrame Explosion",
			m: 98,
			cE: 99
		}), nW.push({
			gf: "The 155-Day Uptrend",
			m: 58,
			cE: 213
		}), nW.push({
			gf: "Max E",
			m: 213,
			cE: 213
		}), nW.push({
			gf: "Plateau B",
			m: 214,
			cE: 259
		}), nW.push({
			gf: "Turbulent Times",
			m: 260,
			cE: 344
		}), nW.push({
			gf: "Max F",
			m: 262,
			cE: 262
		}), nW.push({
			gf: "Max G",
			m: 282,
			cE: 282
		}), nW.push({
			gf: "Max H",
			m: 333,
			cE: 333
		}), nW.push({
			gf: "The 19-Day Downtrend",
			m: 283,
			cE: 301
		}), nW.push({
			gf: "Plateau C",
			m: 345,
			cE: 385
		}), nW.push({
			gf: "The Alliance Ascent",
			m: 386,
			cE: 395
		}), nW.push({
			gf: "Max I",
			m: 395,
			cE: 395
		}), nW.push({
			gf: "First iOS Version",
			m: 411,
			cE: 411
		}), nW.push({
			gf: "Plateau D",
			m: 396,
			cE: 453
		}), nW.push({
			gf: "The TikTok Revolution",
			m: 454,
			cE: 470
		}), nW.push({
			gf: "Max J",
			m: 456,
			cE: 456
		}), nW.push({
			gf: "Max K",
			m: 472,
			cE: 472
		}), nW.push({
			gf: "Max L",
			m: 478,
			cE: 478
		}), nW.push({
			gf: "YT Drew",
			m: 471,
			cE: 485
		}), nW.push({
			gf: "Plateau E",
			m: 485,
			cE: 600
		}), nW.push({
			gf: "Uptrend A",
			m: 600,
			cE: 613
		}), nW.push({
			gf: "Max M",
			m: 613,
			cE: 613
		}), nW.push({
			gf: "Downtrend A",
			m: 614,
			cE: 635
		}), nW.push({
			gf: "Plateau F",
			m: 636,
			cE: 737
		}), nW.push({
			gf: "End of Record",
			m: 738,
			cE: 738
		}), r = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		], this.resize(), fL.bS.nZ(0, 0)
	}, this.resize = function() {
		nJ = Math.floor(.15 * eY), nP = Math.floor((aR ? .018 : .0137) * aS), aD = aT + (nP = nP < 2 ? 2 : nP) + aU, na()
	}, this.nb = function() {
		nS || fL.hN.nc()
	}, this.nd = function(ne) {
		var f;
		for (nS = !0, f = 0; f < ne.length; f++) r.unshift(ne[f]);
		na(), aO.an = !0
	}, this.nh = function() {
		ng()
	}, this.eK = function(b8, b9) {
		eH - .6 * nJ < b9 ? this.nX ? b8 !== nR && (mU += b8 - nR, nR = b8, ng(), nj(b8), this.nX = -1 !== nO, aO.an = !0) : nj(b8) && (aO.an = !0) : this.fd()
	}, this.fd = function() {
		-1 !== nO && (this.nX = !1, nO = -1, aO.an = !0)
	}, this.eF = function(b8, deltaY) {
		-1 !== nO && (mU += Math.floor(deltaY), ng(), nj(b8), aO.an = !0)
	}, this.eB = function(b8, b9) {
		this.eK(b8, b9), -1 !== nO && (nR = b8, this.nX = !0)
	}, this.fe = function() {
		-1 !== nO && (this.nX = !1)
	}, this.ao = function() {
		ag.fillStyle = av.nl;
		for (var nq, month, cQ, d1, nt, nu, hM, nv, nw, f = nN; nM <= f; f--) nm(f);
		nS && 0 === nM && (ag.fillStyle = av.lq, nm(0)), -1 !== nO && (ag.fillStyle = av.hm, nm(nO)), -1 !== nO && (ag.font = aD, ag.textBaseline = np, (cQ = new Date).setTime(nQ.getTime() - 1e3 * nO * 60 * 60 * 24), month = "month", nq = "day",
			"undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(cQ), nq = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(cQ)), nq = nq + ", " + cQ.getUTCDate() + " " + month + " " + cQ.getFullYear(), month = 1 === r[nO] ? " second played" : " seconds played", month = bG.hZ.ha(r[nO]) + month, cQ = Math.floor(ag.measureText(nq).width), d1 =
			Math.floor(ag.measureText(month).width), nt = Math.floor(.5 * (cQ + nP)), nu = (nu = mU + eG - (nO + 1) * nK) < nt ? nt : eG - nt < nu ? eG - nt : nu, hM = eH - Math.floor(nL * Math.pow(r[nO], nT)), nv = Math.floor(1.1 * nP), nw =
			eH - nv < hM ? eH - nv : hM, ag.fillStyle = av.ax, ag.fillRect(eG - d1 - nP, nw - nv, d1 + nP, nv), ag.fillRect(nu - nt, eH - nv, cQ + nP, nv), ag.fillStyle = av.b0, ag.textAlign = hY, ag.fillText(month, Math.floor(eG - .5 * nP),
				nw),
			function(hM, nv) {
				for (var d0, nz = -1, iT = r.length - nO - 1, f = nW.length - 1; 0 <= f; f--) iT >= nW[f].m && iT <= nW[f].cE && (-1 === nz || nW[f].cE - nW[f].m < nW[nz].cE - nW[nz].m) && (nz = f); - 1 !== nz && (d0 = Math.floor(ag
					.measureText(nW[nz].gf).width), ag.fillStyle = av.ax, ag.fillRect(eG - d0 - nP, hM, d0 + nP, nv), ag.fillStyle = av.b0, ag.fillText(nW[nz].gf, Math.floor(eG - .5 * nP), hM + nv))
			}(nw - 2 * nv, nv), ag.textAlign = b1, ag.fillText(nq, nu, eH), ag.strokeStyle = av.ny, ag.lineWidth = 1, ag.beginPath(), ag.moveTo(0, hM), ag.lineTo(eG, hM), ag.closePath(), ag.stroke())
	}
}

function o0() {
	var o1, o2, ip, cA, ik, id;

	function o3(player) {
		return player < j3 ? o1 * player : o1 * j3 + o2 * (player - j3)
	}
	this.aN = function() {
		o1 = j3 < 16 ? 12 : 8, o2 = 4;
		var m = o3(cK);
		ip = new Uint8Array(cK), cA = new Uint16Array(m), ik = new Uint32Array(m), id = new Uint16Array(m)
	}, this.o4 = function(ai, o5) {
		var o6 = this.j8(ai, o5);
		this.o7(ai, o5, 0), o6 = bG.kI.o8(ai, o6), ai === kY && (kP.kQ[13] -= o6)
	}, this.o9 = function(player) {
		ip[player] = 0
	}, this.oA = function(player, o5) {
		var oC, o5 = function(player, o5) {
			var f, bL = o3(player);
			for (f = ip[player] - 1; 0 <= f; f--)
				if (0 === id[bL + f] && cA[bL + f] === o5) return f;
			return ip[player]
		}(player, o5);
		o5 !== ip[player] && (oC = ik[o3(player) + o5], this.oD(player, o5), this.ah(player, oC, cK))
	}, this.j1 = function(player, o5) {
		for (var bL = o3(player), f = ip[player] - 1; 0 <= f; f--)
			if (0 === id[bL + f] && cA[bL + f] === o5) return !0;
		return !1
	}, this.oE = function(player) {
		return player < j3 ? ip[player] < o1 : ip[player] < o2
	}, this.cH = function(player) {
		return ip[player]
	}, this.cJ = function(player, f) {
		return cA[o3(player) + f]
	}, this.cI = function(player, f) {
		return id[o3(player) + f]
	}, this.oF = function(player, oG) {
		for (var bL = o3(player), f = ip[player] - 1; 0 <= f; f--)
			if (id[bL + f] === oG) return f;
		return -1
	}, this.oH = function(player, f) {
		return ik[o3(player) + f]
	}, this.j8 = function(player, o5) {
		for (var bL = o3(player), f = ip[player] - 1; 0 <= f; f--)
			if (0 === id[bL + f] && cA[bL + f] === o5) return ik[bL + f];
		return 0
	}, this.oI = function(player) {
		for (var bL = o3(player), y = 0, f = ip[player] - 1; 0 <= f; f--) y += ik[bL + f];
		return y
	}, this.oJ = function(player) {
		for (var bL = o3(player), y = 0, f = ip[player] - 1; 0 <= f; f--) 0 === id[bL + f] && (y += ik[bL + f]);
		return y
	}, this.oK = function(player) {
		for (var bL = o3(player), gf = 0, f = ip[player] - 1; 0 <= f; f--) 0 < id[bL + f] && gf++;
		return gf
	}, this.o7 = function(player, o5, oC) {
		for (var bL = o3(player), f = ip[player] - 1; 0 <= f; f--) 0 === id[bL + f] && cA[bL + f] === o5 && (ik[bL + f] = oC)
	}, this.oL = function(player, f, oC) {
		ik[o3(player) + f] = oC
	}, this.ah = function(player, oC, o5) {
		var f, bL = o3(player);
		for (o5 === kY && kP.kQ[player < j3 ? 6 : 5]++, f = ip[player] - 1; 0 <= f; f--)
			if (0 === id[bL + f] && cA[bL + f] === o5) return ik[bL + f] += oC, void(ik[bL + f] = ik[bL + f] > oM ? oM : ik[bL + f]);
		cA[bL + ip[player]] = o5, ik[bL + ip[player]] = oC, id[bL + ip[player]] = 0, ip[player]++, player < j3 && (o5 === kY ? ci.ju(player, 5) : player === kY && ce.ka(o5))
	}, this.oN = function(player, oC, oG) {
		var bL = o3(player);
		oO[player] = 2, cA[bL + ip[player]] = 0, ik[bL + ip[player]] = oC, id[bL + ip[player]] = oG, ip[player]++
	}, this.oD = function(player, iT) {
		var g, bL;
		if (0 !== ip[player])
			for (bL = o3(player), ip[player]--, g = iT; g < ip[player]; g++) cA[bL + g] = cA[bL + g + 1], ik[bL + g] = ik[bL + g + 1], id[bL + g] = id[bL + g + 1]
	}, this.oP = function(player) {
		for (var g, bL, oQ = [], f = li - 1; 0 <= f; f--)
			for (bL = o3(lj[f]), g = ip[lj[f]] - 1; 0 <= g; g--)
				if (0 === id[bL + g] && cA[bL + g] === player) {
					oQ.push(lj[f]);
					break
				} return oQ
	}
}

function oR() {
	var aL = 0,
		oS = !0;

	function oV(i) {
		8 !== fT.fp() || 2 !== kW[kY] && (0 !== oO[kY] || jt) || ci.l4(i)
	}
	this.aW = function() {
		var cQ, h6;
		aO.aP > aL && (aL = aO.aP + 2500, cQ = new Date, h6 = cQ.getUTCSeconds(), oS ? h6 < 45 && (oS = !1) : h6 < 45 || -1 !== aO.oU || (oS = !0, (h6 = cQ.getUTCMinutes() + 1) % 15 == 0 && oV(30 === h6 ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function oW() {
	this.aW = function() {
		oX.aW(), oY.aW(), g8.aW(), fL.bS.aW(), oZ.oa(), ob.aW(), aO.an && (aO.an = !1, fT.ao())
	}
}

function oc() {
	function oe(m3) {
		console.log("Video Ad Completed: " + m3)
	}

	function od() {
		return jZ || om
	}
	this.aN = function() {
		var oi;
		od() || (window.aiptag = window.aiptag || {
				cmd: []
			}, aiptag.cmd.display = aiptag.cmd.display || [], aiptag.cmd.player = aiptag.cmd.player || [], aiptag.cmp = {
				show: !0,
				position: "centered",
				button: !0,
				buttonText: "Privacy Settings",
				buttonPosition: "bottom-center"
			}, aiptag.cmd.player.push(function() {
				aiptag.adplayer = new aipPlayer({
					AD_WIDTH: 960,
					AD_HEIGHT: 540,
					AD_DISPLAY: "fullscreen",
					LOADING_TEXT: "loading advertisement",
					PREROLL_ELEM: function() {
						return document.getElementById("videoad")
					},
					AIP_COMPLETE: oe
				})
			}), (oi = document.createElement("div")).id = "videoad", document.body.appendChild(oi), (oi = document.createElement("script")).async = !0, oi.src = "//api.adinplay.com/libs/aiptag/pub/TRT/territorial.io/tag.min.js", document.head
			.appendChild(oi))
	}, this.ok = function() {
		if (console.log("showVideo"), od()) console.log("error 0");
		else {
			if (void 0 !== aiptag.adplayer) return console.log("Success: Ad will be shown!"), aiptag.cmd.player.push(function() {
				aiptag.adplayer.startVideoAd()
			}), !0;
			console.log("error: aiptag.adplayer is undefined")
		}
		return !1
	}, this.ol = function(lo) {
		od() || "undefined" != typeof aipAPItag && (lo ? aipAPItag.showCMPButton() : aipAPItag.hideCMPButton())
	}
}

function on() {
	var oo;

	function p8(oq, cN) {
		for (var i = "", f = cN; f < oq.length && f < cN + 4; f++) i += (f === cN ? "" : "   ") + "[" + cB.hA[oq[f].id] + "]: " + oq[f].p5.toFixed(Math.max(Math.floor(3 - Math.log10(oq[f].p5)), 0));
		i.length && ci.kL(0, i, 45, 0, bG.bH.p7(225, 240, 255), av.ax, -1, !1)
	}
	this.op = 0, this.oq = null, this.aN = function() {
		oo = 0, this.op = 0, this.oq = null
	}, this.aW = function(ky) {
		var or = cB.os[as.ot()];
		this.op = as.ou(), this.oq = function(or, op) {
				var f, u, m, cC = cB.cC,
					os = cB.os,
					hA = cB.hA,
					p1 = cB.p1,
					p2 = bx,
					p3 = j3,
					p4 = [],
					iT = 0;
				for (u = hA.length - 1; 0 <= u; u--)
					if (os[cC[p1[u][0]]] === or) {
						for (p4.push({
								id: u,
								p2: 0,
								player: p1[u][0],
								p5: 0
							}), m = p1[u].length, f = 0; f < m; f++) p4[iT].p2 += p2[p1[u][f]];
						for (p4[iT].p5 = (1 + p6) * p3 * p4[iT].p2 / op, f = 0; f < iT; f++)
							if (p4[iT].p2 > p4[f].p2) {
								p4.splice(f, 0, p4[iT]), p4.pop();
								break
							} iT++
					} 8 < p4.length && (p4.length = 8);
				for (; 0 < p4.length && 0 === p4[p4.length - 1].p2;) p4.pop();
				return p4
			}(or, this.op), aZ.aa("Team " + cB.jH[or], 2, 1, 12),
			function(ky, or) {
				var color;
				ky = ky ? (color = bG.bH.p7(10, 220, 10), "Congratulations! Team " + cB.jH[or] + " won the game!") : (color = bG.bH.p7(200, 80, 80), "Our alliance was defeated! Team " + cB.jH[or] + " won the game.");
				ci.kL(0, ky, 40, 0, color, av.ax, -1, !1)
			}(ky, or), 0 !== (ky = this.oq).length && (ci.kL(0, "The allied clans of the winning team have earned these glorious points:", 40, 0, av.b0, av.ax, -1, !1), p8(ky, 0), p8(ky, 4)), kH.kI.oy(), eI.kz(2700)
	}, this.oz = function() {
		2 === aY && -1 !== oo && (0 === oo ? oo = this.oq && 0 !== this.oq.length ? aO.aP + 8e3 : -1 : aO.aP < oo || (oo = -1, ci.kL(255, "Clan rankings and results can also be accessed under:", 735, 0, av.b0, av.ax, -1, !1), ci.kL(255,
			"territorial.io/clans", 736, 0, av.b0, av.ax, -1, !1), ci.kL(255, "territorial.io/clan-results", 736, 0, av.b0, av.ax, -1, !1)))
	}
}

function p9() {
	var pA, b8, b9, pB, pC, pD, aP, player, pE, gap, zoom, pF, pG;

	function pW(player) {
		for (var f = pF.length - 1; 0 <= f; f--)
			if (pF[f] === player) return 1
	}

	function pU(dg) {
		var f, m;
		if (-1 !== dg)
			for (m = pA.length, f = 0; f < m; f++)
				if (pA[f].fa && pA[f].b8 + 1 === dg % 4 && pA[f].b9 + 1 === dg >> 2) return f;
		return -1
	}

	function pT(eO, eP) {
		var lF = gap / 2;
		return eO < b8 - pB - 3 * lF || b8 + 3 * pB + 5 * lF < eO || eP < b9 - pB - 3 * lF || b9 + 2 * pB + 3 * lF < eP ? -1 : 4 * (eP < b9 - lF ? 0 : eP < b9 + pB + lF ? 1 : 2) + (eO < b8 - lF ? 0 : eO < b8 + pB + lF ? 1 : eO < b8 + 2 * pB + 3 *
			lF ? 2 : 3)
	}
	this.jW = function() {
		var f, u, pJ = [av.pK, av.pL, av.pM, av.pN, av.pO];
		for (pA = new Array(8), f = 0; f < 8; f++) pA[f] = {
			id: f,
			fa: !1,
			nz: 0,
			aJ: [],
			b8: 0,
			b9: 0
		};
		for (pA[0].colors = [0, 1, 2, 3], pA[0].b8 = 0, pA[0].b9 = 0, pA[1].colors = [0, 1, 4], pA[1].b8 = 1, pA[1].b9 = 0, pA[2].colors = [0, 2], pA[2].b8 = -1, pA[2].b9 = 0, pA[3].colors = [0], pA[3].b8 = 0, pA[3].b9 = 0, pA[4].colors = [0, 2],
			pA[4].b8 = 1, pA[4].b9 = 1, pA[5].colors = [3], pA[5].b8 = 0, pA[5].b9 = -1, pA[6].id = 20, pA[6].colors = [0], pA[6].b8 = 1, pA[6].b9 = -1, pA[7].id = 21, pA[7].colors = [0], pA[7].b8 = 0, pA[7].b9 = 1, f = 0; f < 8; f++)
			for (u = 0; u < pA[f].colors.length; u++) pA[f].aJ.push(function(id, pP) {
				var bE = gd.get(3).height,
					bF = bG.bH.b7(bE, bE),
					bI = bG.bH.getContext(bF);
				20 === id ? bI.drawImage(gd.get(18), 0, 0) : 21 === id ? bI.drawImage(gd.jK("emojis"), -4 * bE, 0) : (function(aQ, aK, pR) {
					aK.fillStyle = pR, aK.beginPath(), aK.arc(Math.floor(aQ / 2), Math.floor(aQ / 2), Math.floor(.47 * aQ), 0, 2 * Math.PI), aK.fill()
				}(bE, bI, pP), bI.drawImage(gd.get(3), -id * bE, 0));
				return bF
			}(pA[f].id, pJ[pA[f].colors[u]]))
	}, this.pI = function() {
		return pA
	}, this.aN = function() {
		pF = [], b8 = b9 = aP = 0, pC = pD = -1e3, this.resize()
	}, this.resize = function() {
		pB = Math.floor((aR ? .075 : .0468) * aS), zoom = pB / gd.get(3).height, gap = Math.floor(pB / 3)
	}, this.fV = function(eO, eP) {
		return !!this.fa() && (aO.an = !0, !!ge.eB(eO, eP, player) || (eO = function(eO, eP) {
			var dg, f;
			if (pD = pC = -1e3, dg = pT(eO, eP), -1 === (dg = pU(dg))) return 0;
			if (1 === pA[dg].colors[pA[dg].nz]) return 0;
			if (5 === dg) {
				if (! function() {
						var cQ = (new Date).getTime();
						pG + 4e3 < cQ && (pF = []);
						pG = cQ
					}(), pW(player)) return 1;
				pF.push(player), 16 < pF.length && pF.shift()
			} else if (6 === dg) {
				for (f = pF.length - 1; 0 <= f; f--) 0 === oO[pF[f]] && pF.splice(f, 1);
				0 < pF.length && (pX.pY(1, pF, !0) && kH.kI.pZ(pF, player), pF = [])
			} else if (2 === dg) kH.pa.pb(ck.pc(), player);
			else if (3 === dg) jt && kH.pa.pd(pE);
			else if (0 === dg)
				if (0 === pA[0].nz) {
					if (pe && cm.pf() < 300) return 1;
					kH.pa.pg(ck.pc(), player)
				} else ph.pi(player, ck.pc());
			else if (1 === dg) kH.pa.pj(ck.pc(), pE);
			else {
				if (7 === dg) return ge.show(eO, eP), 2;
				if (4 !== dg) return 0;
				pX.pY(0, [player], !0) && kH.kI.kJ(player)
			}
			return 1
		}(eO, eP), this.nG(), 2 === eO && (ge.fa = !0), 0 < eO))
	}, this.fY = function(eO, eP) {
		this.fa() || (pC = eO, pD = eP, aP = (new Date).getTime())
	}, this.click = function(eO, eP, fj) {
		var pl = bP.pm(eO),
			pn = bP.po(eP),
			bA = bP.pp(pl, pn),
			bO = bP.pq(bA);
		return !(!bP.pr(pl, pn) || (pl = (aR ? .025 : .0144) * aS, Math.abs(eO - pC) > pl) || Math.abs(eP - pD) > pl || performance.now() > aP + 425) && (fj ? (function(eO, eP, bO) {
			bh.c2(bO) || -1 === (eO = bR.pu.q5(eO, eP)) ? ci.kh(bO) : ci.km(eO)
		}(eO, eP, bO), !1) : cp.fx || this.fa() || !bP.bQ() || fz ? (this.nG(), !1) : jt ? !!bh.c2(bO) && (pE = bA, pA[3].fa = !0, this.pt(eO, eP)) : (bR.pu.pv(bA) || bR.pu.pw(eO, eP) || (2 === aY ? bh.bj(bO) && 0 < ge.px && (player = bh
			.bk(bO), bh.kX(player)) && (pA[0].fa = !0, pA[0].nz = 1, pA[7].fa = !0) : bh.kl(bO) || (pE = bA, bR.pu.py(kY, bA) && (pA[0].fa = !0, pA[0].nz = 1, pA[1].fa = !0, pA[1].nz = iY.pz[2] ? 0 : 2), bh.br(bO)) || (bh.bi(bO) ?
			(player = cK, cL(kY) ? (pA[0].fa = !0, pA[0].nz = 0) : cD(kY, player) && (pA[0].fa = !0, pA[0].nz = 3)) : (player = bh.bk(bO)) === kY ? 0 !== ge.px && (pA[0].fa = !0, pA[0].nz = 1, pA[7].fa = !0) : (pA[0].nz = 1, pA[5]
				.fa = function(player) {
					return bh.kX(player) && !pW(player) && pX.pY(1, [player], !1)
				}(player), pA[7].fa = 1 <= ge.px && bh.kX(player), c9(player, kY) ? (pA[4].fa = bh.kX(player) && !ce.q1(player) && pX.pY(0, [player], !1), pA[6].fa = function(player) {
					if (0 === pF.length) return !1;
					if ((new Date).getTime() > pG + 4e3) return !(pF = []);
					return !pW(player) && ! function(player) {
						var f;
						if (ar)
							for (f = pF.length - 1; 0 <= f; f--)
								if (!c9(player, pF[f])) return 1;
						return
					}(player)
				}(player), cM(kY, player) ? (pA[0].nz = 0, pA[0].fa = !0) : cD(kY, player) && (pA[0].nz = 3, pA[0].fa = !0), pA[0].fa = this.q3()) : (pA[2].fa = !0, pA[0].fa = !0)))), this.pt(eO, eP)))
	}, this.pt = function(eO, eP) {
		return b8 = eO - Math.floor(pB / 2), b9 = eP - Math.floor(pB / 2), !!this.fa()
	}, this.eK = function(eO, eP) {
		return !!this.fa() && (ge.fa ? !ge.q7(eO, eP) && (ge.q8(), ge.fa = !1, aO.an = !0) : function(qA, eO, eP) {
			eO = pT(eO, eP);
			if (0 <= pU(eO)) return !1;
			if ((1 === eO || 6 === eO) && 0 <= pU(2)) return !1;
			if ((6 === eO || 9 === eO) && 0 <= pU(10)) return !1;
			return qA.nG(), aO.an = !0
		}(this, eO, eP))
	}, this.nG = function() {
		for (var f = pA.length - 1; 0 <= f; f--) pA[f].fa = !1, pA[f].nz = 0;
		ge.fa = !1
	}, this.fa = function() {
		return this.q3() || ge.fa
	}, this.q3 = function() {
		for (var m = pA.length, f = 0; f < m; f++)
			if (pA[f].fa) return !0;
		return !1
	}, this.ao = function() {
		if (this.fa())
			if (ge.fa) ge.ao();
			else {
				var f, bI = ag,
					u = pA,
					m = u.length,
					qD = (pB + gap) / zoom;
				for (bI.imageSmoothingEnabled = !0, bI.setTransform(zoom, 0, 0, zoom, b8, b9), f = 0; f < m; f++) u[f].fa && ag.drawImage(u[f].aJ[u[f].nz], u[f].b8 * qD, u[f].b9 * qD);
				bI.imageSmoothingEnabled = !1, bI.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}
var ld, fz, qG, oM, qH, kY, cg, jt, pe, ar, qK, lW, p6, qL, l1, qM, cK = 512,
	qE = 512,
	qF = 150,
	aY = 0,
	qI = 512,
	qJ = 2;

function qN(qO, qP, jq, h0, h1, qQ) {
	cg = !1, fz = qQ, p6 = h1, ar = (lW = h0) < 7 || 9 === lW, kT = j3 = jq.length, ld = 1 === kT, qK = 9 === (lW = 8 === (lW = 10 === lW && ld ? 7 : lW) && 2 !== j3 ? 7 : lW) ? 2 : lW + 2, qM = j3 <= 2 ? 30 : j3 <= 50 ? 40 : 50, pe = jt = !(jx.jy &&
			!jx.ac.qR) && (ar || j3 < 100), qL = jt ? new qS : null, qI = 512, qE = cK, ld && (qE = mn.qT()), mk = qE - j3, kU = 0, kY = qP, a6.mL(qO), mq.aN(), qU(jq), kH.qV.qW = [], cB.aN(jq), aY = 1, oM = 15e8, qH = 1e9, kP.aN(), qX(), lQ.qY(), qZ
		.aN(), qa.aN(), qb(), bh.aN(jq), cU.aN(), bP.aN(), bR.aN(), qc.aN(), qd.aN(), qe.dF(), qe.qf(), qg.aN(), qh(), qi.aN(qO, jq, h0, h1), as.aN(), qj.aN(), cb.aN(), cs.aN(), qk.putImageData(ql, 0, 0), cj.aN(), cY.aN(), ck.aN(), ch.aN(), cl.aN(),
		cn.aN(), cm.aN(), cp.aN(), aZ.aN(), ci.aN(), co.aN(), cq.aN(), cr.aN(), cf.aN(), ih.aN(), qm.aN(), qn(), cG.aN(), ce.aN(), qo.aN(), qp.aN(), pX.aN(), ph.aN(), qq.qr.ol(!1), 8 === lW ? (l1 = new qs).aN(jq) : l1 = null, aO.qt(), qu(), cu.aN(),
		aO.an = !0, fz || ld && jt || qv(1)
}

function qu() {
	eI.qw(), 0 === oO[kY] && cr.show(!1, !0), ce.qx(!0)
}

function qy(qz) {
	ct.nG(), fL.bS.close(fL.bS.fN, 3246), aY = 0, aO.r0(), qv(0), qq.qr.ol(!0), ga.aN(!qz)
}

function r1() {
	var aC, aJ, aK, r2, r3, r4, r5, r6, r7, r8, r9, rA, rB, rC;

	function jV() {
		var aQ = cl.aQ,
			bL = (r7 = !1, cv(aK, aQ, aC), Math.floor(aQ / 2));
		1 === r3 ? (aK.fillStyle = av.rE, aK.fillRect(bL, 0, bL, aC)) : -1 === r3 && (aK.fillStyle = av.lq, aK.fillRect(0, 0, bL, aC)), cw(aK, aQ, aC, 2);
		var bL = (bL = Math.floor(.25 * aC)) < 2 ? 2 : bL,
			lR = (aK.fillStyle = av.rF, Math.floor((aC - 4) * r4[1] / r5[1]));
		0 < lR && aK.fillRect(2, aC - 2 - lR, bL, lR), 0 < (lR = Math.floor((aC - 4) * r4[0] / r5[0])) && aK.fillRect(aQ - 2 - bL, aC - 2 - lR, bL, lR);
		bL = (bL = Math.floor(aC / 8)) < 2 ? 2 : bL;
		cy(aK, Math.floor(.4 * aC), 0, aC, bL, .5, !1), cy(aK, Math.floor(aQ - 1.4 * aC), 0, aC, bL, .5, !0), aK.drawImage(r2, Math.floor((aQ - r2.width) / 2), 3)
	}

	function rI() {
		r7 = !0, r8 = 140, r3 = 0, r6 = [], cl.fa = !1, ci.lJ(247, 0), r4[0] = r4[1] = 0
	}

	function ca() {
		return ck.kE(ci.kB()) ? ck.b9 - aC - aq : ch.kE(ci.kD()) ? ch.ca() - aC - aq : eY - aC - eC.kF() * aq
	}
	this.fa = !1, this.aQ = 0, this.aN = function() {
		rA = rB = 0, this.fa = !1, r7 = rC = !1, r8 = 140, r4 = [r3 = 0, 0], r5 = [1, 1], r6 = [], r9 = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		aC = ck.aC, this.aQ = 4 * aC, this.rD(), (aJ = document.createElement("canvas")).width = this.aQ, aJ.height = aC, aK = aJ.getContext("2d", {
			alpha: !0
		}), jV()
	}, this.qx = function() {
		r7 && jV()
	}, this.rD = function() {
		var bI, aH, bL, rG = (rG = aC - 6) < 6 ? 6 : rG;
		void 0 !== r2 && r2.width === rG || ((r2 = document.createElement("canvas")).width = rG, r2.height = rG, (bI = r2.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, rG, rG), aH = Math.floor(rG / 8), bI.lineWidth = aH = aH < 1 ? 1 : aH, bI.strokeStyle = av.b0, bL = Math.floor(rG / 2), rG = Math.floor((rG - aH) / 2), bI.beginPath(), bI.arc(bL, bL, rG, 0, 2 * Math.PI), bI
			.moveTo(bL, bL - rG), bI.lineTo(bL, bL + rG), bI.moveTo(bL + Math.cos(.78 * Math.PI) * rG, bL + Math.cos(.28 * Math.PI) * rG), bI.lineTo(bL, bL), bI.lineTo(bL + Math.cos(.22 * Math.PI) * rG, bL + Math.cos(1.72 * Math.PI) * rG), bI
			.stroke())
	}, this.eB = function(b8, b9) {
		var hM;
		return !(b8 < eV - this.aQ - aq || b9 < (hM = ca()) || hM + aC < b9 || (fz || kH.pa.rH(b8 > eV - aq - this.aQ / 2 ? 1 : 0), 0))
	}, this.aW = function() {
		if (0 < rB) 0 === --rB && rI();
		else if (this.fa) 270 == --r8 && 2 <= rA && function() {
			var f;
			for (f = li - 1; 0 <= f; f--)
				if (bh.kX(lj[f])) return;
			return 1
		}() && (r7 = !0, r4[0] += r5[0]), 180 === r8 && 3 * r4[0] < r5[0] ? rI() : r4[0] >= r5[0] ? rC ? qc.rQ.rR() : qc.rQ.rS(-1) : r4[1] >= r5[1] ? rB = 4 : r8 <= 0 && rI();
		else if (function() {
				var f;
				for (f = 9; 0 <= f; f--) 12 < Math.abs(r9[f] - bx[rO[f]]) && (r8 = 140), r9[f] = bx[rO[f]];
				if (--r8 <= 0) return 1;
				return
			}()) {
			(rC = rL()) && ci.l5(), this.fa = !0, r8 = 360;
			var f, cQ = 0;
			for (f = li - 1; 0 <= f; f--) bh.kX(lj[f]) && (cQ += bx[lj[f]]);
			r5[0] = gu(a1(3 * cQ, 5), 1), ar && 9 !== lW && (r5[0] = rN(gu(a1(cQ * (100 - a1(100 * as.ou(), qG)), 100), 1), r5[0])), r5[1] = gu(cQ - r5[0], 1), rA++
		}
	}, this.rT = function() {
		this.fa && r4[0] < r5[0] && rI()
	}, this.rU = function(player, rV) {
		var f, cQ;
		if (this.fa) {
			for (f = r6.length - 1; 0 <= f; f--)
				if (r6[f] === player) return;
			r6.push(player), r7 = !0, cQ = ld ? r5[0] : bx[player], rV ? r4[0] += cQ : r4[1] += cQ, player === kY && (r3 = rV ? 1 : -1)
		}
	}, this.ao = function() {
		var b9;
		this.fa && (b9 = ca(), ag.drawImage(aJ, eV - this.aQ - aq, b9))
	}
}

function rW(ex) {
	var ls = document.createElement("div"),
		rX = document.createElement("span"),
		rY = !1,
		rZ = !1;

	function show() {
		rZ || (rX.parentNode.appendChild(ls), rZ = !0)
	}

	function nG() {
		rZ && !rY && (rX.parentNode.removeChild(ls), rZ = !1)
	}
	this.aN = function(ey) {
		ls.style.position = "absolute", ls.style.zIndex = "100", ls.style.backgroundColor = av.ra, ls.style.color = av.b0, ls.width = "auto", ls.style.padding = "0.5em", ls.style.fontSize = "inherit", ls.style.wordBreak = "break-word", ls
			.innerText = ex, rX.style.position = "relative", rX.style.display = "inline-block", rX.style.marginLeft = "1em", rX.style.textAlign = "center", rX.innerText = "?", rX.tabIndex = 0, rX.onmouseover = show, rX.onmouseout = nG, rX
			.onclick = cE => {
				((rY = !rY) ? nG : show)(), rX.rb(), cE.preventDefault()
			}, rX.rc = () => {
				rY = !1, nG()
			}, this.resize(), ey.appendChild(rX)
	}, this.resize = function() {
		var ip = bG.bH.rd(.5) * aS / fP * .04;
		rX.style.width = ip.toFixed(1) + "px", rX.style.height = ip.toFixed(1) + "px", rX.style.lineHeight = ip.toFixed(1) + "px", rX.style.outline = (.06 * ip).toFixed(1) + "px solid " + av.b0, ls.style.border = (.06 * ip).toFixed(1) +
			"px solid " + av.b0
	}
}

function re(rf, rg) {
	this.b8 = 0, this.b9 = 0, this.aQ = 0, this.aC = 0, this.resize = function() {
		this.aC = Math.min(bG.bH.rd(.5) * rf[1] * aS, eH - 2 * aq), this.aQ = Math.min(this.aC * (rf[0] / rf[1]), eG - 2 * aq), this.aC = rf[1] * this.aQ / rf[0], this.b8 = aq + rg[0] * (eG - this.aQ - 2 * aq), this.b9 = aq + rg[1] * (eH - this
			.aC - 2 * aq)
	}, this.rh = function() {
		return this.b8 + .5 * this.aQ
	}
}

function ri() {
	this.rj = -1, this.aN = function() {
		this.rj = -1
	}, this.aW = function() {
		-1 !== this.rj && qc.rQ.rS(this.rj)
	}, this.rk = function(player) {
		return !!cp.rl(player) && (1 === li ? (this.rj = player, ld && jt && qL.aW()) : (ci.ju(player, player === kY ? 21 : 22), 8 === lW ? this.rj = 1 - player : ld ? (rm(player), rn(), jt && qL.aW()) : this.ro(player)), !0)
	}, this.rp = function(player) {
		1 === aY && 0 !== oO[player] && 2 !== kW[player] && (8 === lW ? this.rj = 1 - player : this.ro(player)), ci.ju(player, 4)
	}, this.ro = function(player) {
		jt ? (rm(player), rn()) : qp.rq(player)
	}
}

function rr() {
	var rv, rw, rx, ry, rz, s0, s1, s2, s3, s4, s5, rs = [224, 224, 224],
		rt = [
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
		ru = [
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

	function sV(s, sX) {
		sR[s] = 0, sR[s + 1] = 0, sR[s + 2] = sX, sR[s + 3] = 0, sY(s)
	}

	function sY(s) {
		var b8;
		qZ.sa || (b8 = bh.cZ(s), s = bh.ca(s), qZ.sa = b8 >= eb.sb[0] && b8 <= eb.sb[2] && s >= eb.sb[1] && s <= eb.sb[3])
	}
	this.aN = function(jq) {
		if (rv = new Uint8Array(cK), rw = new Uint8Array(cK), rx = new Uint8Array(cK), ry = new Uint8Array(cK), rz = new Uint8Array(cK), s0 = new Uint8Array(cK), s1 = new Uint8Array(cK), s2 = new Uint8Array(cK), s3 = new Uint8Array(cK), s4 =
			new Uint8Array(cK), this.mA = new Uint8Array(cK), (s5 = new Int32Array(4))[0] = -4 * ab.bX, s5[1] = 4, s5[2] = -s5[0], s5[3] = -s5[1], ar)
			for (var bL, o, f = cK - 1; 0 <= f; f--) o = cB.os[cB.cC[f]], bL = a1((ru[o][3] + 1) * a6.random(), a6.value(100)), rv[f] = rt[o][0] + bL * ru[o][0], rw[f] = rt[o][1] + bL * ru[o][1], rx[f] = rt[o][2] + bL * ru[o][2];
		else jx.jy && jx.ac.sC ? function(r) {
			var f;
			for (f = qE - 1; 0 <= f; f--) rv[f] = 4 * r[f][0], rw[f] = 4 * r[f][1], rx[f] = 4 * r[f][2]
		}(jx.ac.sC) : (function() {
			for (var f = cK - 1; j3 <= f; f--) rv[f] = 4 * a1(64 * a6.random(), a6.value(100)), rw[f] = 4 * a1(64 * a6.random(), a6.value(100)), rx[f] = 4 * a1(64 * a6.random(), a6.value(100))
		}(), function(jq) {
			for (var f = j3 - 1; 0 <= f; f--) rv[f] = 4 * jq[f].sN[0], rw[f] = 4 * jq[f].sN[1], rx[f] = 4 * jq[f].sN[2]
		}(jq));
		! function() {
			var f, bf;
			for (f = cK - 1; 0 <= f; f--) bf = a1(rv[f] + rw[f] + rx[f], 3), rv[f] += iR(bf - rv[f], 2), rw[f] += iR(bf - rw[f], 2), rx[f] += iR(bf - rx[f], 2), rv[f] -= rv[f] % 4, rw[f] -= rw[f] % 4, rx[f] -= rx[f] % 4
		}(),
		function() {
			for (var f = cK - 1; 0 <= f; f--) rv[f] += a1(f, 128), rw[f] += a1(f % 128, 32), rx[f] += a1(f % 32, 8), ry[f] = f % 8
		}(), this.sI(),
			function() {
				for (var u = 32, f = cK - 1; 0 <= f; f--) rz[f] = rv[f] < u ? rv[f] + u : rv[f] - u, s0[f] = rw[f] < u ? rw[f] + u : rw[f] - u, s1[f] = rx[f] < u ? rx[f] + u : rx[f] - u
			}(),
			function() {
				for (var u = 20, f = cK - 1; 0 <= f; f--) s2[f] = 235 < rv[f] ? rv[f] - u : rv[f] + u, s3[f] = 235 < rw[f] ? rw[f] - u : rw[f] + u, s4[f] = 235 < rx[f] ? rx[f] - u : rx[f] + u
			}()
	}, this.sL = function(player) {
		var r = iY.sM;
		return r[0] = rv[player], r[1] = rw[player], r[2] = rx[player], r
	}, this.sI = function() {
		for (var f = cK - 1; 0 <= f; f--) this.mA[f] = rv[f] + rw[f] + rx[f] < 280 ? 0 : 1
	}, this.cZ = function(s) {
		return a1(s, 4) % ab.bX
	}, this.ca = function(s) {
		return a1(s, 4 * ab.bX)
	}, this.sO = function(b8, b9) {
		return Math.floor(4 * (b9 * ab.bX + b8))
	}, this.sP = function(s) {
		return this.bs(s + s5[0]) || this.bs(s + s5[1]) || this.bs(s + s5[2]) || this.bs(s + s5[3])
	}, this.sQ = function(s, player) {
		return this.bq(s + s5[0], player) || this.bq(s + s5[1], player) || this.bq(s + s5[2], player) || this.bq(s + s5[3], player)
	}, this.kX = function(player) {
		return player < j3 && 2 !== kW[player]
	}, this.bj = function(s) {
		return 208 <= sR[s + 3]
	}, this.c0 = function(player, s) {
		return this.bj(s) && this.c5(player, s)
	}, this.c5 = function(player, s) {
		return player === this.bk(s)
	}, this.c6 = function(s) {
		return 208 <= sR[s + 3] && sR[s + 3] < 224
	}, this.io = function(s) {
		return 224 <= sR[s + 3] && sR[s + 3] < 248
	}, this.mO = function(s) {
		for (var f = 3; 0 <= f; f--)
			if (this.br(s + s5[f])) return !0;
		return !1
	}, this.sS = function(s) {
		return 192 <= sR[s + 3] && sR[s + 3] < 208
	}, this.sT = function(s, player) {
		return this.sS(s) && player === this.bk(s)
	}, this.c2 = function(s) {
		return this.bj(s) || this.bi(s)
	}, this.br = function(s) {
		return 0 === sR[s + 3] && 2 === sR[s + 2]
	}, this.bi = function(s) {
		return 0 === sR[s + 3] && 1 === sR[s + 2]
	}, this.bs = function(s) {
		return 0 === sR[s + 3] && 3 === sR[s + 2]
	}, this.kl = function(s) {
		return this.bs(s)
	}, this.bq = function(s, player) {
		return this.bi(s) || this.bj(s) && player !== this.bk(s)
	}, this.bk = function(s) {
		return sR[s] % 4 * 128 + sR[s + 1] % 4 * 32 + sR[s + 2] % 4 * 8 + sR[s + 3] % 8
	}, this.sU = function(s) {
		sV(s, 1)
	}, this.sW = function(s) {
		sV(s, 2)
	}, this.bv = function(s, player) {
		sR[s] = rv[player], sR[s + 1] = rw[player], sR[s + 2] = rx[player], sR[s + 3] = 208 + ry[player], sY(s)
	}, this.c7 = function(s, player) {
		sR[s] = rz[player], sR[s + 1] = s0[player], sR[s + 2] = s1[player], sR[s + 3] = 224 + ry[player], sY(s)
	}, this.bl = function(s, player) {
		sR[s] = s2[player], sR[s + 1] = s3[player], sR[s + 2] = s4[player], sR[s + 3] = 248 + ry[player], sY(s)
	}, this.sZ = function(s, player) {
		sR[s] = rs[0] + rv[player] % 4, sR[s + 1] = rs[1] + rw[player] % 4, sR[s + 2] = rs[2] + rx[player] % 4, sR[s + 3] = 192 + ry[player], sY(s)
	}
}

function sc(bE, ip, sd, se) {
	var f, sg = .2,
		aJ = document.createElement("canvas"),
		bI = aJ.getContext("2d", {
			alpha: !1
		});
	for (aJ.width = bE, aJ.height = bE, bI.font = ip + "px " + settings.fontName, bI.textAlign = "center", bI.textBaseline = "middle", bI.fillStyle = "red", f = 0; f < sd.length; f++) bI.fillText(sd[f], .5 * bE, .5 * bE);
	return -1 < (aJ = function(bJ) {
		var f, a4;
		for (f = bJ.data.length - 4; 0 <= f; f -= 4)
			if (a4 = bJ.data[f], se <= a4) return Math.floor(f / (4 * bE));
		return -1
	}(bI.getImageData(0, 0, bE, bE))) && (sg = (aJ - .5 * bE + .1 * ip) / ip), Math.max(sg, 0)
}

function si() {
	this.ip = 501, this.p2 = new Uint32Array(this.ip), this.sj = new Uint32Array(this.ip), this.sk = new Uint16Array(this.ip), this.sl = 0, this.sm = 1, this.o = 0, this.max = [0, 0, 0], this.kQ = 0, this.sn = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.aN = function() {
		this.sl = 0, this.sm = 1, this.o = 0, this.so(), this.sp()
	}, this.sq = function(player, sr) {
		player === kY && (this.kQ[0] += sr, this.kQ[1]++, this.kQ[12] += iY.ig[1], this.kQ[13] += iY.ig[0])
	}, this.lL = function(player, ss) {
		donationsTracker.logDonation(player, ss, iY.ig[0]);
		player === kY && (ci.lL(iY.ig[0], iY.ig[1], ss), this.kQ[12] += iY.ig[1], this.kQ[16] += iY.ig[0]), ss === kY && (ci.lO(iY.ig[0], player), this.kQ[10] += iY.ig[0])
	}, this.aW = function() {
		0 < this.o-- || this.st()
	}, this.st = function() {
		0 !== oO[kY] && (this.p2[this.sl] = bx[kY], this.sj[this.sl] = im[kY], this.sk[this.sl] = qa.su(kY), this.sv(this.sl), this.sl++, this.sl === this.ip && this.sw(), this.o = this.sm - 1, cs.jV())
	}, this.sw = function() {
		this.so(), this.sv(0), this.sl = 1 + a1(this.ip, 2);
		for (var f = 1; f < this.sl; f++) this.p2[f] = this.p2[2 * f], this.sj[f] = this.sj[2 * f], this.sk[f] = this.sk[2 * f], this.sv(f);
		this.sm *= 2
	}, this.so = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.sp = function() {
		this.kQ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.sv = function(f) {
		this.max[0] = this.p2[f] > this.max[0] ? this.p2[f] : this.max[0], this.max[1] = this.sj[f] > this.max[1] ? this.sj[f] : this.max[1], this.max[2] = this.sk[f] > this.max[2] ? this.sk[f] : this.max[2]
	}
}

function qS() {
	this.ah = function(player, bA) {
		qg.sx(player, bP.kj(bA), bP.kk(bA)) && (aO.an = !0), ld && this.aW()
	}, this.aW = function() {
		var f;
		for (jt = !1, f = 0; f < j3; f++) 0 !== oO[f] && 0 === bx[f] && qg.sy(f);
		0 !== oO[kY] ? (kP.kQ[7] = bx[kY], kP.kQ[8] = im[kY], ck.lo(), cm.sz(), fz || eI.t0(bY[kY] - 5, ba[kY] - 5, bb[kY] + 5, bc[kY] + 5), cu.aN()) : cr.show(!1, !1, !1, !0), ci.kO(18), ce.t1(), ce.qx(!0), cb.bS.t2(), qL = null, qZ.t3 = !0, qZ
			.t4(), ld && qv(1)
	}
}

function t5() {
	this.ip = 0, this.iT = 0, this.t6 = null, this.aN = function(t6) {
		this.iT = 0, this.t6 = t6, this.ip = t6.length
	}, this.gY = function() {
		this.t6 = null
	}, this.t7 = function(ip) {
		for (var y = 0, t6 = this.t6, eJ = this.iT + ip - 1, f = this.iT; f <= eJ; f++) y |= (t6[f >> 3] >> 7 - (7 & f) & 1) << eJ - f;
		return this.iT += ip, this.iT > 8 * this.ip && console.log("error unwrapper"), y
	}, this.t8 = function(ip) {
		for (var r = new Array(ip), f = 0; f < ip; f++) r[f] = this.t7(10);
		return t9.t(r)
	}, this.tA = function(tB) {
		return this.ip === tC.tD(tB)
	}
}

function tE() {
	var aA, aL;
	this.aN = function() {
		aA = 1, aL = 0
	}, this.aW = function() {
		0 < aA && (aL = 0 === aL ? aO.aP + 16 : aL, aA = (aA -= .001 * (aO.aP - aL)) < 0 ? 0 : aA, aL = aO.aP, aO.an = !0)
	}, this.ao = function() {
		0 < aA && (ag.fillStyle = "rgba(0,0,0," + aA + ")", ag.fillRect(0, 0, eG, eH))
	}
}

function tH() {
	this.pu = new tI, this.tJ = new tK, this.cc = new tL, this.bS = new tM, this.mB = new tN, this.tO = new b3, this.tP = new tQ, this.tR = new tS, this.tT = new tU, this.aN = function() {
		this.cc.aN(), this.bS.aN(), this.mB.aN(), this.tO.aN()
	}
}

function tV() {
	var b8, b9, aC, tW, tX, tY, tZ, ta, tb, aQ, tc, td;
	this.fa = !1, this.aN = function(i, te) {
		if (13 <= ja && ja < 18) return te ? void(tc = i) : tc !== i ? void 0 : void om.saveString(200, i);
		te && ((tf.a8[1].ky.fa || tf.a8[2].ky.fa) && tf.fq(), fm.lo(!1), tc = i, (td = document.createElement("a")).appendChild(document.createTextNode(tc)), this.fa = !0, td.title = tc, td.target = "_blank", td.href = tc, td.style.textAlign =
			"center", td.style.color = av.b0, td.style.position = "absolute", td.style.padding = "0px", td.style.margin = "0px", this.resize(), document.body.appendChild(td), aO.an = !0)
	}, this.nG = function() {
		return !(!this.fa || (document.body.removeChild(td), this.fa = !1))
	}, this.eB = function(e7, eA) {
		return !!this.fa && ((e7 < b8 || eA < b9 || b8 + aQ < e7 || b9 + aC < eA || b8 + aQ - tW < e7 && eA < b9 + tW) && (aO.an = !0, this.fa = !1, document.body.removeChild(td), 0 === fT.fp()) && fm.lo(!0), !0)
	}, this.resize = function() {
		var aD, tg;
		this.fa && (ta = Math.floor(.8 * (aR ? eY < eV ? .6 : .55 : .4) * aS), tW = Math.floor(.15 * ta), tX = Math.floor(.35 * tW), tY = Math.floor(.5 * tW), tZ = Math.floor(2.5 * tY), aC = tW + tX + 3 * tY, aD = aT + Math.floor(tX / fP) + aU,
			tb = Math.floor(fP * aZ.measureText(tc, aD)), tg = aQ = (ta < tb ? tb : ta) + 2 * tZ, aQ = Math.min(aQ, eV - 2 * (aR ? 2 : 1) * aq), aD = aT + Math.floor(aQ / tg * tX / fP) + aU, tb = Math.floor(fP * aZ.measureText(tc, aD)), b8 =
			Math.floor((eG - aQ) / 2), b9 = Math.floor((eH - aC) / 2), td.style.font = aD, td.style.top = Math.floor((b9 + 1.4 * tY + tW) / fP) + "px", td.style.left = Math.floor((b8 + (aQ - tb) / 2) / fP) + "px")
	}, this.ao = function() {
		this.fa && (ag.fillStyle = av.ax, ag.fillRect(b8, b9 + tW, aQ, aC - tW), ag.fillStyle = av.th, ag.fillRect(b8, b9, aQ, tW), ag.fillStyle = av.b0, ag.lineWidth = ln, ag.strokeStyle = av.b0, ag.strokeRect(b8, b9, aQ, aC), ag.fillRect(b8,
			b9 + tW, aQ, ln), ag.font = aT + Math.floor(.48 * tW) + aU, ag.textAlign = b1, ag.textBaseline = b2, ag.fillText("You are leaving Territorial.io!", Math.floor(b8 + (aQ - .5 * tW) / 2), Math.floor(b9 + .55 * tW)), cp.hg(Math
			.floor(b8 + aQ - .8 * tW), Math.floor(b9 + .25 * tW), Math.floor(.5 * tW)), ag.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function ti() {
	this.q = function() {
		var tw, gp = function() {
				var f, u8 = qi.tx.u8,
					m = u8.length,
					max = 0;
				for (f = 0; f < m; f++) max = Math.max(max, u8[f]);
				return uG(Math.max(max, 1))
			}(),
			tB = function(gp) {
				return 179 + function() {
					var f, jq = qi.tx.ty.jq,
						m = jq.length,
						tB = 24 * m;
					for (f = 0; f < m; f++) tB += 10 * t9.q(jq[f].name).length;
					8 === qi.tx.ty.h0 && (tB += 14 * m);
					return tB
				}() + (1 === qi.tx.ty.jq.length ? 12 * qi.tx.ty.u2.length : 0) + function() {
					var f, u4 = qi.tx.u4,
						m = u4.length,
						tB = 13 * m,
						uF = [22, 20, 19, 32, 32, 10, 7, 1, 0, 0];
					for (f = 0; f < m; f++) tB += uF[u4[f]];
					return tB
				}() + function(gp) {
					return qi.tx.u8.length * (1 + gp)
				}(gp)
			}(gp);
		tC.dF(tB + (6 - tB % 6) % 6), tw = qi.tx.ty, tC.tq(9, tz), tC.tq(31, tC.ip), tC.iT += 16, tC.tq(9, tw.qP), tC.tq(14, tw.qO), tC.tq(4, tw.h0), tC.tq(1, tw.h1), tC.tq(6, tw.h3), tC.tq(14, tw.h4), tC.tq(10, tw.jq.length);
		var f, u, u0, cR, jq = qi.tx.ty.jq,
			m = jq.length;
		for (f = 0; f < m; f++)
			for (tC.tq(1, jq[f].u1), tC.tq(18, (jq[f].sN[0] << 12) + (jq[f].sN[1] << 6) + jq[f].sN[2]), u0 = t9.q(jq[f].name), cR = u0.length, tC.tq(5, cR), u = 0; u < cR; u++) tC.tq(10, u0[u]);
		if (8 === qi.tx.ty.h0)
			for (f = 0; f < m; f++) tC.tq(14, jq[f].l3);
		return function() {
				var f, tw = qi.tx.ty;
				if (1 === tw.jq.length)
					for (f = 0; f < tw.u2.length; f++) tC.tq(3, tw.u2[f]), tC.tq(9, tw.u3[f] - 1)
			}(),
			function(gp) {
				var f, u4 = qi.tx.u4,
					ht = qi.tx.u5,
					hu = qi.tx.u6,
					hv = qi.tx.u7,
					m = u4.length;
				for (tC.tq(5, gp), tC.tq(30, m), tC.tq(30, qi.tx.u8.length), f = 0; f < m; f++) tC.tq(4, u4[f]), tC.tq(9, ht[f]), 0 === u4[f] ? tC.tq(22, hu[f]) : 1 === u4[f] ? (tC.tq(10, hu[f]), tC.tq(10, hv[f])) : 2 === u4[f] ? (tC.tq(10, hu[
					f]), tC.tq(9, hv[f])) : 3 === u4[f] || 4 === u4[f] ? (tC.tq(10, hu[f]), tC.tq(22, hv[f])) : 5 === u4[f] ? tC.tq(10, hu[f]) : 6 === u4[f] ? tC.tq(7, hu[f]) : 7 === u4[f] && tC.tq(1, hu[f])
			}(gp),
			function(gp) {
				var f, u9 = qi.tx.u9,
					u8 = qi.tx.u8,
					m = u9.length;
				for (f = 0; f < m; f++) tC.tq(1, u9[f]), tC.tq(gp, u8[f])
			}(gp), tC.iT !== tB && ci.kc("Encoder Index Error: " + tC.iT + " " + tB), tC.iT = 40, tC.tq(16, function() {
				var f, s = tC.t6,
					m = tC.ip,
					uA = 0;
				for (f = 7; f < m; f++) uA = uA + s[f] & 65535;
				return uA
			}()), ts.aN(tC.t6), tt.tu(tt.tv(a1(tB - 1, 6) + 1))
	}
}

function uH() {}

function uI() {
	var ls = document.createElement("div"),
		uJ = [];
	this.aN = function(ey) {
		ls.style.position = "relative", ey.appendChild(ls)
	}, this.resize = function() {
		for (var uK, uN, uO, gap, uL = [], uM = 0, f = 0; f < uJ.length; f++) uJ[f].resize(), uM = Math.max(uM, uJ[f].lz());
		if (0 !== uM) {
			for (gap = .009 * (uO = ls.offsetWidth), uK = eV < eY ? 1 : Math.max(1, Math.floor(uO / (uM + gap))), f = 0; f < uK; f++) uL.push(0);
			for (f = 0; f < uJ.length; f++) uN = uL.indexOf(Math.min(...uL)), uJ[f].lw(uN * uO / uK, uL[uN], uO / uK - gap), uL[uN] += uJ[f].m0() + gap;
			ls.style.height = Math.max(...uL).toFixed(1) + "px"
		}
	}, this.uP = function(ez) {
		ez.aN(ls), uJ.push(ez)
	}
}

function uQ() {
	var m3;
	this.aN = function() {
		hJ.aN(), fm.aN(), m3 = 0, uR.aN(), ga.aN()
	}, this.setState = function(uS) {
		m3 = uS
	}, this.fp = function() {
		return m3
	}, this.uT = function() {
		0 === fT.fp() && ga.gY(), this.setState(8), ji.gY(), tf.fq(), ob.fa = !1, fl.eB(-1e3, -1e3)
	}, this.fq = function(cE) {
		if (!ab.uU) return !1;
		if (!(aO.aP < 400)) {
			if ("Enter" === cE.key || "Escape" === cE.key) {
				if (this.uV()) return 0 === m3 && fm.lo(!0), !0;
				if ("Enter" === cE.key) {
					if (0 === m3) return ga.uW(), !0;
					if (7 === m3) return !0
				}
			}
			return !1
		}
	}, this.uX = function() {
		return ct.fa || ob.fa || fl.fa || tf.uY()
	}, this.uZ = function() {
		ob.resize(), ct.resize(), fl.resize(), tf.resize()
	}, this.uV = function() {
		return !!fl.nG() || !(!tf.fq() && (ob.fa ? ob.fa = !1 : !ct.fa || (ct.nG(), 0)))
	}, this.fr = function() {
		aO.an = !0, 8 === m3 ? cg ? ch.fu(!1) : cs.fa ? cs.fy() : ct.fa ? ct.nG() : cp.fy() : 7 === m3 ? ji.gX() : 6 === m3 ? oY.ua() : 3 === m3 ? ub.uc(0, 0) : 2 === m3 ? mn.uc() : 0 !== m3 || this.uV() || qv(11)
	}, this.eB = function(b8, b9) {
		if (!uR.eB(b8, b9) && ab.uU && !fl.eB(b8, b9) && !ct.eB(b8, b9) && !(6 === m3 && oY.eB(b8, b9) || 2 === m3 && mn.eB(b8, b9) || eC.eB(b8, b9) || ob.eB(b8, b9) || jX.eB(b8, b9, !0) || tf.eB(b8, b9, !0))) {
			if (fc.eB(b8, b9), 0 === m3) ga.eB(b8, b9);
			else if (3 === m3) ub.eB(b8, b9);
			else if (5 === m3) ud.eB(b8, b9);
			else if (7 === m3 && ji.eB(b8, b9)) return;
			gt.eB(b8, b9)
		}
	}, this.eK = function(b8, b9) {
		if (eC.eK(b8, b9), !fc.nX) {
			if (uR.eK(b8, b9)) return void fc.fd();
			if (0 <= tf.fk(b8, b9)) return void fc.fd();
			if (tf.eK(b8, b9)) return void fc.fd();
			if (2 === m3 && mn.eK(b8, b9)) return void fc.fd();
			if (hJ.eK(b8, b9, !0)) return
		}
		fc.eK(b8, b9)
	}, this.click = function(b8, b9) {
		fc.fe(), tf.ue() || jX.eB(b8, b9, !1) || tf.eB(b8, b9, !1)
	}, this.eF = function(b8, b9, deltaY) {
		tf.a8[1].ky.fa || (tf.a8[2].ky.fa ? tf.a8[2].ky.eF(b8, b9, deltaY) : 0 === m3 && fc.eF(b8, deltaY))
	}, this.uf = function() {
		hJ.nh(), tf.nh(), 0 === m3 ? (fm.resize(), fc.nh()) : 7 === m3 && ji.resize(), aO.an = !0
	}, this.ao = function() {
		var b9, aJ, sg, b8;
		8 !== m3 && 10 !== m3 && (ag.imageSmoothingEnabled = !0, this.cV(), fc.ao(), oX.ao(), b9 = Math.floor(.3 * eH), aJ = gd.jK("territorial.io"), sg = (sg = 1.75 * eH / aJ.width) * aJ.width < .98 * eG ? .98 * eG / aJ.width : sg, ag
			.globalAlpha = .15, b8 = Math.floor(.5 * (eG - sg * aJ.width)), b8 = Math.floor(b8 / sg), b9 = Math.floor(b9 - .5 * aJ.height * sg), b9 = Math.floor(b9 / sg), ag.setTransform(sg, 0, 0, sg, b8, b9), ag.drawImage(aJ, b8, b9), ag
			.setTransform(1, 0, 0, 1, 0, 0), ag.globalAlpha = 1, jX.ao(), gt.ao(), tf.ao(), eC.ao(), 0 === m3 ? ga.ao() : 2 === m3 ? mn.ao() : 3 === m3 ? ub.ao() : 5 === m3 ? ud.ao() : 6 === m3 ? oY.ao() : 7 === m3 && ji.ao(), tf.uh(), uR
			.ao(), ob.ao(), fl.ao(), ct.ao())
	}, this.cV = function() {
		var uj, ui;
		ab.uU ? (ui = eV / ab.bX, uj = eY / ab.ea, ag.setTransform(ui = uj < ui ? ui : uj, 0, 0, ui, Math.floor((eV - ui * ab.bX) / 2), Math.floor((eY - ui * ab.ea) / 2)), ag.drawImage(ab.cX, 0, 0), ag.setTransform(1, 0, 0, 1, 0, 0), ag
			.fillStyle = av.hS) : ag.fillStyle = av.az, ag.fillRect(0, 0, eV, eY)
	}
}

function uk() {
	var jH, kQ, m, ul, um;

	function ur() {
		for (var uA = 0, f = 1; f < 5; f++) uA += kQ[f] % 1024;
		return uA
	}

	function uq() {
		for (var f = 1; f < m - um; f++) kQ[f] = parseInt(kQ[f])
	}

	function us() {
		kQ[0] = "Player " + Math.floor(1e3 * Math.random()), kQ[1] = eV < eY ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, kQ[2] = 1, kQ[3] = 1, kQ[4] = eV < eY ? 0 : 1, kQ[5] = 0, kQ[6] = "000", kQ[7] = "0", kQ[8] = "0", kQ[9] = "0",
			v0.ut()
	}

	function up() {
		for (var f = m - um - 1; 0 <= f; f--) kQ[f] = t9.z(kQ[f]);
		kQ[0] = t9.w(kQ[0])
	}

	function v3(name, value, v4) {
		var v5 = new Date,
			v4 = (v5.setTime(v5.getTime() + Math.floor(31536e6 * v4)), name + "=" + value + ";expires=" + v5.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = v4
	}
	this.aN = function() {
		if (!(5 <= ja || jZ)) {
			um = 4, jH = [], m = 10;
			for (var f = ul = 0; f < m; f++) jH.push("u" + f);
			kQ = new Array(m), ! function(v1) {
				for (var g, s, v2 = v1.split(";"), f = v2.length - 1; 0 <= f; f--) {
					for (v2[f] = v2[f].trim(), g = 2; 0 <= g; g--) v2[f] = v2[f].replace(" ", "");
					3 < v2[f].length && (g = jH.indexOf(v2[f].substring(0, 2)), s = v2[f].indexOf("="), 0 <= g && 2 === s ? kQ[g] = v2[f].substring(s + 1, v2[f].length) : 0 < s && v3(v2[f].substring(0, s), "0", 0))
				}
			}(document.cookie), kQ[9] || (kQ[9] = "0"), (! function() {
				for (var f = m - 1; 0 <= f; f--)
					if (void 0 === kQ[f]) return;
				return 1
			}() || (ul = 2, up(), uq(), ur() !== kQ[5])) && us()
		}
	}, this.ut = function() {
		if (2 === ul) {
			kQ[1] = 0 === kQ[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : kQ[1], kQ[5] = ur(), ! function() {
				for (var f = 1; f < m - um; f++) kQ[f] = kQ[f].toString()
			}(), ! function() {
				kQ[0] = t9.v(kQ[0]);
				for (var f = m - um - 1; 0 <= f; f--) kQ[f] = t9.x(kQ[f])
			}();
			for (var f = m - 1; 0 <= f; f--) v3(jH[f], kQ[f], 1);
			up(), uq()
		}
	}, this.ul = function() {
		return ul
	}, this.ux = function(g) {
		ul = g, this.ut()
	}, this.uy = function(f, value) {
		5 <= ja || jZ || (kQ[f] = value)
	}, this.uz = function(f) {
		return 5 <= ja || jZ ? 0 : kQ[f]
	}
}

function v6() {
	var v7, v8, v9, vA, vB, vC, vD, vE;

	function vG(f) {
		var g;
		for (v9--, g = f; g < v9; g++) vA[g] = vA[g + 1], vB[g] = vB[g + 1], vC[g] = vC[g + 1], vD[g] = vD[g + 1], vE[g] = vE[g + 1]
	}
	this.aN = function() {
		v7 = 1, v9 = 0, v8 = 2 * cK, vA = new Uint16Array(v8), vB = new Uint8Array(v8), vC = new Uint16Array(v8), vD = new Uint32Array(v8), vE = new Uint32Array(v8)
	}, this.lw = function(iT, position) {
		vD[iT] = position
	}, this.aW = function() {
		for (var f = v9 - 1; 0 <= f; f--) 0 == vB[f]-- && (vB[f] = 2, vF.aW(f, vC[f], vA[f], vD[f], vE[f]))
	}, this.vH = function(player, id) {
		for (var f = v9 - 1; 0 <= f; f--)
			if (player === vA[f] && id === vC[f]) return void vG(f)
	}, this.vI = function(player) {
		for (var f = v9 - 1; 0 <= f; f--) player === vA[f] && (vF.vJ(player, vD[f]), vG(f))
	}, this.ii = function(player, it, vK) {
		if (v8 <= v9) return 0;
		vA[v9] = player, vB[v9] = 0, vC[v9] = v7, vD[v9] = it, vE[v9] = vK;
		player = v7;
		return v9++, v7 = 2 * v8 < ++v7 ? 1 : v7, player
	}, this.ao = function() {
		if (!(cW < 40 || 0 === v9)) {
			var g, b8, b9, f, fontSize, vP, ik, hL = ds / cW,
				hM = dt / cW,
				nC = (eG + ds) / cW,
				he = (eH + dt) / cW;
			for (ag.textAlign = b1, ag.textBaseline = b2, g = v9 - 1; 0 <= g; g--) b8 = bh.cZ(vD[g]), b9 = bh.ca(vD[g]), f = vA[g], hL - 1 < b8 && b8 < nC && hM - 1 < b9 && b9 < he && 0 !== oO[f] && ((fontSize = Math.floor(.94 * cW * ce.vQ(f))) <
				6 || (b8 = Math.floor(eG * (b8 + .5 - hL) / (nC - hL)), b9 = Math.floor(eH * (b9 + .48 - hM) / (he - hM)), ag.font = aT + fontSize + aU, ag.fillStyle = av.az, ik = cG.oH(f, cG.oF(f, vC[g])), ag.fillText(eC.eD.vR ? bG.hZ.ha(
					ik) : aj[f], b8, b9), (vP = Math.floor(.5 * fontSize)) < 6) || (ag.font = aT + vP + aU, ag.fillText(eC.eD.vR ? aj[f] : bG.hZ.ha(ik), b8, b9 + Math.floor(.82 * fontSize))))
		}
	}
}

function vS() {
	this.vT = !1, this.sa = !1, this.t3 = !1, this.vU = [0, 0, 0, 0], this.vV = function() {
		var hL, hM, nC, he;
		this.t3 = this.t3 || this.sa, (this.sa || this.vT && this.t3) && (hL = eb.sb[0], hM = eb.sb[1], nC = eb.sb[2], he = eb.sb[3], hL = hL < this.vU[0] ? this.vU[0] : hL, hM = hM < this.vU[1] ? this.vU[1] : hM, nC = nC > this.vU[2] ? this.vU[
			2] : nC, he = he > this.vU[3] ? this.vU[3] : he, this.sa = !1, this.vT = !1, hL === this.vU[0] && hM === this.vU[1] && nC === this.vU[2] && he === this.vU[3] ? this.t4() : hL <= nC && hM <= he && qk.putImageData(ql, 0, 0, hL,
			hM, nC - hL + 1, he - hM + 1))
	}, this.t4 = function() {
		this.t3 && this.vU[2] >= this.vU[0] && this.vU[3] >= this.vU[1] && qk.putImageData(ql, 0, 0, this.vU[0], this.vU[1], this.vU[2] - this.vU[0] + 1, this.vU[3] - this.vU[1] + 1), this.t3 = !1
	}, this.vW = function() {
		this.vU[2] >= this.vU[0] && this.vU[3] >= this.vU[1] && qk.putImageData(ql, 0, 0, this.vU[0], this.vU[1], this.vU[2] - this.vU[0] + 1, this.vU[3] - this.vU[1] + 1), this.t3 = !1
	}, this.aN = function() {
		var b8, b9;
		this.vT = !1, this.sa = !1, this.t3 = !1, this.vU[0] = ab.bX, this.vU[1] = ab.ea, this.vU[2] = this.vU[3] = 0;
		loop: for (b8 = 1; b8 < ab.bX - 1; b8++)
			for (b9 = ab.ea - 2; 1 < b9; b9--)
				if (1 === sR[bh.sO(b8, b9) + 2]) {
					this.vU[0] = b8;
					break loop
				} loop: for (b9 = 1; b9 < ab.ea - 1; b9++)
			for (b8 = ab.bX - 2; 1 < b8; b8--)
				if (1 === sR[bh.sO(b8, b9) + 2]) {
					this.vU[1] = b9;
					break loop
				} loop: for (b8 = ab.bX - 2; 0 < b8; b8--)
			for (b9 = ab.ea - 2; 1 < b9; b9--)
				if (1 === sR[bh.sO(b8, b9) + 2]) {
					this.vU[2] = b8;
					break loop
				} loop: for (b9 = ab.ea - 2; 0 < b9; b9--)
			for (b8 = ab.bX - 2; 1 < b8; b8--)
				if (1 === sR[bh.sO(b8, b9) + 2]) {
					this.vU[3] = b9;
					break loop
				}
	}
}

function vX() {
	var player, ik, lg, vY, hL, hM, nC, he, iT, vZ, id;

	function vf() {
		var cA;
		if (bh.bi(lg)) cA = cK;
		else {
			if ((cA = bh.bk(lg)) === player) return void vh(!0);
			if (!c9(player, cA)) return function(cA) {
				var max = bx[cA] * qF - im[cA];
				max <= 0 || (ik -= max = max < ik ? max : ik, player === kY && (ci.lL(max, 0, cA), kP.kQ[16] += max), cA === kY && (ci.lO(max, player), kP.kQ[10] += max), im[cA] += max, ce.vk(cA, max))
			}(cA), void vh(!0)
		}
		player === kY && (kP.kQ[13] += ik), cf.vH(player, id), cG.oD(player, vZ), be[player].push(vY), cG.ah(player, ik, cA), ih.ii(player, !0)
	}

	function vh(vl) {
		cf.vH(player, id), cG.oD(player, vZ), vl && (im[player] += ik)
	}

	function vb() {
		bh.sT(lg, player) && bh.sW(lg)
	}

	function va(f, oG, ai, it, eJ) {
		if (iT = f, id = oG, player = ai, hL = bh.cZ(it), hM = bh.ca(it), nC = bh.cZ(eJ), he = bh.ca(eJ), vY = lg = bh.sO(hL, hM), -1 !== (vZ = cG.oF(player, id))) return ik = cG.oH(player, vZ), 1;
		vb(), cf.vH(player, id)
	}
	this.aW = function(f, id, ai, it, eJ) {
		va(f, id, ai, it, eJ) && (vb(), function() {
			var vm = a1(ik, 128);
			ik -= vm = vm < 1 ? 1 : vm, player === kY && (kP.kQ[15] += vm);
			if (ik <= qJ) return player === kY && (kP.kQ[15] += ik), void vh(!1);
			return cG.oL(player, vZ, ik), 1
		}()) && (f = bh.sO(hL, hM), lg = Math.abs(nC - hL) >= Math.abs(he - hM) ? f + bg[hL < nC ? 1 : 3] : f + bg[hM < he ? 2 : 0], hL = bh.cZ(lg), hM = bh.ca(lg), cf.lw(iT, lg), ! function() {
			if (bh.c2(lg)) return;
			return 1
		}() ? vf() : bh.br(lg) && bh.sZ(lg, player))
	}, this.vJ = function(ai, it) {
		player = ai, lg = bh.sO(bh.cZ(it), bh.ca(it)), vb()
	}
}

function vn() {
	function vo() {
		if (2 === aY) return 1;
		cl.rT(), aY = 2, kU = kT
	}

	function vq() {
		ci.lX(!0), cj.qx(!0), cm.qx(!0), cl.qx(), ch.vw(), fz && aO.vx.vy(), aO.an = !0, qZ.vW(), qv(0)
	}
	this.rR = function() {
		vo() || (kH.kI.vp(), ci.lJ(247, 0), ci.ju(0, 59), eI.kz(2700), cr.show(!1, !1, !0), vq())
	}, this.rS = function(kg) {
		var vr = 0,
			ky = !1;
		vo() || (8 === lW ? ((ky = (vr = kg < 0 ? bx[0] >= bx[1] ? 0 : 1 : kg) === kY) ? ci.ju(vr, 2) : ci.ju(1 - kY, 3), l1.vs(vr), kH.kI.vt(vr)) : ar ? (ky = cB.cC[kY] === as.vu(), 9 === lW ? (kH.kI.vt(ky ? rO[0] : 512), ci.kx(ky)) : qc.vv.aW(
			ky)) : (ky = (vr = rO[0]) === kY, ci.kf(vr), kH.kI.vt(vr)), cr.show(ky, !1), vq())
	}
}

function vz() {
	var aP = 6e4;
	this.show = function() {
		return aO.aP < aP ? (console.log("can't show ad, next ad will be shown in " + ((aP - aO.aP) / 1e3).toFixed(0) + "s"), !1) : (aP = aO.aP + 135e4, !!qq.qr.ok() || (jZ ? (window.webkit.messageHandlers.iosCommandA.postMessage("show ad " +
			Math.floor(135e4)), !0) : 12 <= ja && (om.presentAd(Math.floor(135e4)), !0)))
	}
}

function w0() {
	this.aW = function(t6) {
		var id, ht, eJ;
		for (ts.aN(t6), ts.iT += 2, eJ = 8 * ts.ip; ts.iT + 8 <= eJ;) id = ts.t7(4), ht = ts.t7(9), 0 === id ? this.w1(id, ht, ts.t7(22)) : 1 === id ? this.w1(id, ht, ts.t7(10), ts.t7(10)) : 2 === id ? this.w1(id, ht, ts.t7(10), ts.t7(9)) : 3 ===
			id || 4 === id ? this.w1(id, ht, ts.t7(10), ts.t7(22)) : 5 === id ? this.w1(id, ht, ts.t7(10)) : 6 === id ? this.w1(id, ht, ts.t7(7)) : 7 === id ? this.w1(id, ht, ts.t7(1)) : this.w1(id, ht);
		this.w2()
	}, this.qW = [], this.w2 = function() {
		for (var w4 = 0, w5 = 0, w6 = 0, w7 = 0, w8 = 0, w9 = 0, f = 0; f < 512; f++) w4 += oO[f], w5 += bx[f], w6 += im[f], w7 += bR.bS.wA[f];
		w8 += bR.bS.wB, w9 += li, this.qW.push(((255 & w4 + w5 + w6 + w7 + w8 + w9) << 12) + ((3 & w4) << 10) + ((3 & w5) << 8) + ((3 & w6) << 6) + ((3 & w7) << 4) + ((3 & w8) << 2) + (3 & w9))
	}, this.w1 = function(id, ht, hu, hv) {
		0 === id ? kH.wC.pd(ht, hu) : 1 === id ? kH.wC.pg(ht, hu, hv) : 2 === id ? kH.wC.wD(ht, hu, hv) : 3 === id ? kH.wC.pj(ht, hu, hv) : 4 === id ? kH.wC.pv(ht, hu, hv) : 5 === id ? kH.wC.wE(ht, hu) : 6 === id ? kH.wC.wF(ht, hu) : 7 === id ?
			kH.wC.rH(ht, hu) : 8 === id ? kH.wC.rk(ht) : kH.wC.rp(ht)
	}
}

function wG() {
	this.rQ = new vn, this.vv = new on, this.aN = function() {
		this.vv.aN()
	}
}

function tQ() {
	this.aW = function() {
		for (var wH, tP, wI = bR.bS.wI, wJ = bR.bS.wJ, wK = bR.bS.wK, f = bR.bS.wB - 1; 0 <= f; f--) wH = wJ[f], 0 !== (tP = wI[f]) && wH === wK[f] && (! function(f, wO, dh) {
			var cA, player = bR.bS.ko[f] >> 3,
				dh = wO + bP.wQ[dh] << 2,
				f = bR.bS.kp[f];
			if (bh.bi(dh)) cA = cK;
			else {
				if ((cA = bh.bk(dh)) === player) return bG.kI.o8(player, f);
				if (!c9(player, cA)) return kH.wR.wS(player, cA, f)
			}
			player === kY && (kP.kQ[13] += f);
			be[player].push(wO << 2), cG.ah(player, f, cA), ih.ii(player, !0)
		}(f, bP.wM(wH), tP - 1), bR.tJ.wN(f))
	}
}

function wT() {
	function wd(i) {
		0 === aY ? ub.wg(3605) : ci.kc(i)
	}
	this.t = function(i) {
		if (wU.wV(wU.wW(wU.wX(i))), ! function() {
				if (ts.ip < 10) wd("File Too Small");
				else if (ts.t7(9) !== tz && wd("Game Version Error"), ts.t7(31) !== ts.ip) wd("Size Error");
				else {
					if (function(aC) {
							var f, s = ts.t6,
								m = ts.ip,
								uA = 0;
							for (f = 7; f < m; f++) uA = uA + s[f] & 65535;
							return uA === aC
						}(ts.t7(16))) return 1;
					wd("Hash Error")
				}
				return
			}()) return !1;
		(ty = {}).qP = ts.t7(9), ty.qO = ts.t7(14), ty.h0 = ts.t7(4), ty.h1 = 1 === ts.t7(1), ty.h3 = ts.t7(6), ty.h4 = ts.t7(14), ty.wh = ts.t7(10), qi.tx.ty = ty,
			function() {
				var f, u1, sN, name, m = qi.tx.ty.wh,
					jq = [];
				for (f = 0; f < m; f++) u1 = ts.t7(1), sN = [ts.t7(6), ts.t7(6), ts.t7(6)], name = ts.t8(ts.t7(5)), jq.push({
					name: name,
					sN: sN,
					u1: u1
				});
				if (qi.tx.ty.jq = jq, 8 === qi.tx.ty.h0)
					for (f = 0; f < m; f++) jq[f].l3 = ts.t7(14)
			}(),
			function() {
				var f, m, tw = qi.tx.ty;
				if (1 === tw.jq.length)
					for (m = 6 < tw.h0 ? 1 : tw.h0 + 2, tw.u2 = new Array(m), tw.u3 = new Array(m), f = 0; f < m; f++) tw.u2[f] = ts.t7(3), tw.u3[f] = ts.t7(9) + 1
			}(), ty = ts.t7(5), wi = ts.t7(30), wj = ts.t7(30);
		var ty, wi, wj, f, id, m = wi,
			wm = new Uint8Array(m),
			wn = new Uint16Array(m),
			wo = new Uint32Array(m),
			wp = new Uint32Array(m);
		for (qi.tx.u4 = wm, qi.tx.u5 = wn, qi.tx.u6 = wo, qi.tx.u7 = wp, f = 0; f < m; f++) wm[f] = id = ts.t7(4), wn[f] = ts.t7(9), 0 === id ? wo[f] = ts.t7(22) : 1 === id ? (wo[f] = ts.t7(10), wp[f] = ts.t7(10)) : 2 === id ? (wo[f] = ts.t7(10),
			wp[f] = ts.t7(9)) : 3 === id || 4 === id ? (wo[f] = ts.t7(10), wp[f] = ts.t7(22)) : 5 === id ? wo[f] = ts.t7(10) : 6 === id ? wo[f] = ts.t7(7) : 7 === id && (wo[f] = ts.t7(1));
		return function(m, gp) {
			var f, u9 = new Uint8Array(m),
				u8 = new Array(m);
			for (u8.fill(0), qi.tx.u9 = u9, qi.tx.u8 = u8, f = 0; f < m; f++) u9[f] = ts.t7(1), u8[f] = ts.t7(gp)
		}(wj, ty), ts.iT < 8 * ts.ip - 13 || ts.iT > 8 * ts.ip ? (wd("Out Of Bounds Error: " + ts.iT + " " + 8 * ts.ip), !1) : (qi.tx.we = i, !0)
	}
}

function wq() {
	var o, lY = !1,
		wr = !1,
		ws = -1e4;

	function resize(dY) {
		o = 0, gd.jL() && (wu(dY) || lY) && (lY = !1, wx(), gt.aN(), hJ.aN(), fm.resize(), jX.aN(), oY.resize(), fc.resize(), oX.resize(), uR.resize(), ob.resize(), ge.aN(), wy.resize(), 1 <= aY ? (cj.resize(!1), cn.resize(), cm.resize(), cY
		.resize(), ck.resize(), ci.resize(), cp.resize(), ct.resize(), ch.resize(), cl.resize(), co.resize(), aZ.resize(), cq.resize(), cs.resize(), ce.resize(), cr.resize(), as.resize(), cY.eN()) : (2 === fT.fp() ? mn.resize() : 3 === fT
		.fp() && ub.resize(), fT.uZ(), fT.uf()), aO.an = !0)
	}

	function wz(y) {
		return y && 128 < y ? Math.floor(y) : 128
	}

	function wu(dY) {
		var d0, rG, x5;
		return g8.x0(), d0 = wz(document.documentElement.clientWidth), rG = window.visualViewport ? wz(window.visualViewport.height) : wz(document.documentElement.clientHeight), dY && !wr ? (wr = !0, document.body.removeChild(f5)) : wr && (wr = !1,
			document.body.appendChild(f5)), dY = Math.floor(.5 + fP * d0), x5 = Math.floor(.5 + fP * rG), !(dY === eG && x5 === eH || fW.g7() && (fm.fn || ct.fn)) && (eG = eV = dY, eH = eY = x5, wt = rN(eV, eY), aS = a1(eY + eV, 2), f5.width =
			dY, f5.height = x5, f5.style.width = d0 + "px", f5.style.height = rG + "px", 1)
	}
	this.aN = function() {
		eV = eY = wt = eG = eH = aS = 0, fP = o = 1, f5 = document.getElementById("canvasA"), (ag = f5.getContext("2d", {
			alpha: !1
		})).imageSmoothingEnabled = !1, wu(0)
	}, this.aW = function() {
		wv.aW(), 50 <= ++o && resize(0)
	}, this.ww = function(dY) {
		lY = !0, resize(dY)
	}, this.g9 = function() {
		ws + 1e3 > aO.aP || (ws = aO.aP, resize(0))
	}, this.x0 = function() {
		var x1 = window.devicePixelRatio || 1,
			f = eC.eD.x2,
			f = (fP = f < 3 ? .5 + .25 * f : (.5 + .125 * (f - 3)) * x1, wz(document.documentElement.clientWidth)),
			aC = window.visualViewport ? wz(window.visualViewport.height) : wz(document.documentElement.clientHeight),
			x4 = jZ || om || f < aC ? 700 : 1200,
			eQ = fP / x1,
			eQ = Math.min(Math.max(eQ, x4 / ((f + aC) / 2)), 1);
		return fP = x1 * eQ, eQ
	}
}

function x6() {
	this.x7 = 28, this.jd = 0, this.x8 = null;
	var xA = this.x9 = null;

	function xD(bE, xF) {
		var b8, b9, bA, bB, bF = bG.bH.b7(bE, bE),
			bI = bG.bH.getContext(bF, !0),
			bJ = bG.bH.getImageData(bI, bE, bE),
			bK = bJ.data,
			bL = (bE >> 1) - .5,
			xG = .5 + bL;
		for (xG *= xG, b9 = 0; b9 < bE; b9++)
			for (b8 = 0; b8 < bE; b8++) bB = (bB = b8 - bL) * bB + (bB = b9 - bL) * bB, bK[bA = 4 * (b9 * bE + b8)] = xF[0], bK[1 + bA] = xF[1], bK[2 + bA] = xF[2], bK[3 + bA] = (xG - bB) * xF[3] / xG;
		return bI.putImageData(bJ, 0, 0), bF
	}

	function bN(f, bI, bF, bE) {
		var b8;
		0 !== oO[f] && 0 !== bx[f] && (b8 = bY[f] + bb[f] + 1 - bE - 2 >> 1, bE = ba[f] + bc[f] + 1 - bE - 2 >> 1, bI.drawImage(bF[ar ? cB.cC[f] : f < j3 ? 1 : 0], b8, bE))
	}
	this.aN = function() {
		var qA;
		this.jd = 700,
			function(qA) {
				var f, bE = qA.x7;
				if (qA.x9 = [], xA = [], ar)
					for (f = 0; f <= qK; f++) qA.x9.push(xD(bE, cB.xE[cB.os[f]])), xA.push(xD(bE >> 1, cB.xE[cB.os[f]]));
				else qA.x9.push(xD(bE, cB.xE[0])), qA.x9.push(xD(bE, cB.xE[4])), xA.push(xD(bE >> 1, cB.xE[0]))
			}(this),
			function(qA, xH) {
				var f, x8 = qA.x8,
					bI = bG.bH.getContext(x8, !0),
					m = cK,
					bE = qA.x7 >> 1;
				bI.imageSmoothingEnabled = !1, bI.setTransform(1, 0, 0, 1, 0, 0), xH && bI.clearRect(0, 0, x8.width, x8.height);
				for (f = j3; f < m; f++) bN(f, bI, xA, bE)
			}(this, null !== (qA = this).x8 && qA.x8.width === ab.bX - 2 && qA.x8.height === ab.ea - 2 || (qA.x8 = bG.bH.b7(ab.bX - 2, ab.ea - 2), !1))
	}, this.t2 = function() {
		for (var m = j3, bE = this.x7, x9 = this.x9, bI = bG.bH.getContext(this.x8, !0), f = 0; f < m; f++) bN(f, bI, x9, bE)
	}
}

function xI() {
	function xM(xN, b8, b9, aQ, aC) {
		xN >= ab.n6 || (ab.ae === xN && (ag.fillStyle = av.xL, ag.fillRect(b8, b9, aQ, aC), ag.fillStyle = av.b0), ag.strokeRect(b8, b9, aQ, aC), ag.fillText(ab.ac.ad[xN].name, Math.floor(b8 + .5 * aQ), Math.floor(b9 + .55 * aC)))
	}
	this.fa = !1, this.xJ = [0, 0, 0, 0], this.show = function() {
		this.fa = !0, this.resize(), aO.an = !0
	}, this.resize = function() {
		var cR = a1(ab.n6 + ab.n6 % 2, 2),
			cR = eY - cR * gs;
		this.xJ[2] = aR ? Math.floor(.75 * wt) : Math.floor(.5 * wt), this.xJ[3] = Math.floor(1.25 * this.xJ[2]), this.xJ[3] > cR && (this.xJ[3] = cR, this.xJ[2] = Math.floor(cR / 1.2)), this.xJ[0] = Math.floor((eV - this.xJ[2]) / 2), this.xJ[
			1] = Math.floor((eY - this.xJ[3]) / 2)
	}, this.eK = function(b8, b9) {
		return !(b8 < this.xJ[0] || b9 < this.xJ[1] || b8 > this.xJ[0] + this.xJ[2] || b9 > this.xJ[1] + this.xJ[3])
	}, this.eB = function(b8, b9) {
		var rG, cR = a1(ab.n6 + ab.n6 % 2, 2);
		return aO.an = !0, b8 < this.xJ[0] || b9 < this.xJ[1] || b8 > this.xJ[0] + this.xJ[2] || b9 > this.xJ[1] + this.xJ[3] ? !(this.fa = !1) : (rG = Math.floor(.17 * this.xJ[3]), b9 < this.xJ[1] + rG ? b8 > this.xJ[0] + this.xJ[2] - rG && (
			this.fa = !1) : (b9 = (b9 = Math.floor(cR * (b9 - this.xJ[1] - rG - .00576 * aS) / (this.xJ[3] - rG - .01152 * aS))) < 0 ? 0 : cR - 1 < b9 ? cR - 1 : b9, b8 > this.xJ[0] + this.xJ[2] / 2 && (b9 += cR), b9 >= ab.n6 || ab.dF(b9,
			Math.floor(16384 * Math.random()))), !0)
	}, this.ao = function() {
		var f, hM, rG = Math.floor(.17 * this.xJ[3]),
			cR = a1(ab.n6 + ab.n6 % 2, 2),
			gap = .6 * .01152 * aS,
			x5 = (this.xJ[3] - rG - (cR + 1) * gap) / cR,
			d0 = Math.floor((this.xJ[2] - 3 * gap) / 2);
		for (ag.lineWidth = ln, ag.textAlign = b1, ag.textBaseline = b2, ag.fillStyle = av.ax, ag.fillRect(this.xJ[0], this.xJ[1] + rG, this.xJ[2], this.xJ[3] - rG), ag.fillStyle = av.xL, ag.fillRect(this.xJ[0], this.xJ[1], this.xJ[2], rG), ag
			.strokeStyle = av.b0, ag.strokeRect(this.xJ[0], this.xJ[1], this.xJ[2], this.xJ[3]), ag.fillStyle = av.b0, ag.fillRect(this.xJ[0], this.xJ[1] + rG, this.xJ[2], 2), ag.font = aT + Math.floor(.48 * rG) + aU, ag.fillText("Maps", Math
				.floor(this.xJ[0] + this.xJ[2] / 2), Math.floor(this.xJ[1] + .55 * rG)), ag.font = aT + Math.floor(.48 * x5) + aU, f = cR - 1; 0 <= f; f--) hM = Math.floor(this.xJ[1] + rG + gap + f * (x5 + gap)), xM(f, this.xJ[0] + gap, hM, d0,
			x5), xM(f + cR, this.xJ[0] + d0 + 2 * gap, hM, d0, x5);
		cp.hg(Math.floor(this.xJ[0] + this.xJ[2] - .7 * rG), Math.floor(this.xJ[1] + .3 * rG), Math.floor(.4 * rG)), ag.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function xO() {
	ci.aW(), ce.aW(), cm.xP(), fL.bS.aW(), qc.vv.oz()
}

function xQ() {
	ph.aW(), qm.aW(), qa.aW(), qo.aW(), qp.aW(), ih.aW(), cf.aW(), bR.bS.aW(), xR(), cj.aW(), mq.aW(), ce.aW(), ce.xS(), cm.aW(), cb.aW(), cn.aW(), co.aW(), ci.aW(), pX.aW(), ck.aW(), cl.aW(), kP.aW(), as.aW(), qj.aW(), fL.bS.aW(), qi.aW(), aO.aW()
}

function xT() {
	eI.aW(), cr.aW(), aZ.aW(), cu.aW(), ch.aW(), oZ.xU()
}

function xV() {
	cj.qx(!1), co.qx(), cm.qx(!1), cn.qx(), ck.qx(), cl.qx(), ce.qx(2 === aY), as.jV()
}

function xW() {
	ce.qx(!0) && (aO.an = !0), fL.bS.aW()
}

function xX() {
	this.xY = function(kt, player) {
		ci.kr(kY, player, kt), fL.hN.xZ(kt, player)
	}, this.kJ = function(player) {
		ci.lC(player, 0), fL.hN.xa(player)
	}, this.pZ = function(pF, player) {
		ci.lE(pF, player), fL.hN.xb(pF, player)
	}, this.vt = function(vr) {
		ld || fz || fL.hN.xc(xd(), vr)
	}, this.vp = function() {
		ld || fz || fL.hN.xe(xd(), rO[0], rO[1], rO[2])
	}, this.oy = function() {
		ld || fz || fL.hN.xf(xd())
	}
}

function xg() {
	this.aQ = 0, this.aC = 0, this.xh = 0, this.fa = !1, this.xi = 10, this.s = .12, this.xj = !1, this.xk = !1, this.xl = !1, this.aN = function() {
		this.fa = !0, this.resize(), this.xj = !1
	}, this.resize = function() {
		this.fa && (this.aQ = 1.15 * eV < eY ? Math.floor((aR ? .94 : .69) * eV) : Math.floor((aR ? .94 : .69) * eY / 1.15), this.aQ -= this.aQ % this.xi, this.aC = +this.aQ, this.xh = Math.floor(.15 * this.aQ))
	}, this.eB = function(eO, eP, m3) {
		var hL = (eG - this.aQ) / 2;
		return eP -= (eH - this.aC - this.xh) / 2, (eO -= hL) < 0 || eP < 0 || eO >= this.aQ - 1 || eP >= this.aC + this.xh - 1 || eO >= this.aQ - this.xh && eP < this.xh ? (0 === m3 && (this.fa = !1, 0 === fT.fp() && fm.lo(!0), aO.an = !0), !
			1) : (eP < this.xh || (eO = (eO = a1(eO, hL = Math.floor(this.aQ / this.xi)) + this.xi * a1(eP - this.xh, hL)) < 0 ? 0 : eO >= ge.xm ? ge.xm - 1 : eO, (0 === m3 || 1 === m3 && !ge.xn[eO] || 2 === m3 && ge.xn[eO]) && (this.xk = !ge.xn[
				eO], this.xj = !0, this.xl = !0, ge.xn[eO] = !ge.xn[eO], ge.xo(), aO.an = !0)), !0)
	}, this.eK = function(eO, eP) {
		this.xj && this.eB(eO, eP, this.xk ? 1 : 2)
	}, this.ue = function() {
		this.xl && (xp(), this.xl = !1), this.xl = !1, this.xj = !1
	}, this.ao = function() {
		ag.imageSmoothingEnabled = !0;
		for (var hL = (eG - this.aQ) / 2, hM = (eH - this.aC - this.xh) / 2, d0 = (ag.setTransform(1, 0, 0, 1, hL, hM), ag.fillStyle = av.ax, ag.fillRect(0, this.xh, this.aQ, this.aC), ag.fillStyle = av.xq, ag.fillRect(0, 0, this.aQ, this.xh), ag
				.fillStyle = av.b0, ag.lineWidth = ln, ag.strokeStyle = av.b0, ag.strokeRect(-1, -1, this.aQ + 2, this.aC + this.xh + 2), ag.fillRect(0, this.xh - ln, this.aQ, ln), ag.font = aT + Math.floor(.44 * this.xh) + aU, ag.textAlign =
				b1, ag.textBaseline = b2, ag.fillText("Select Your Emojis!", Math.floor((this.aQ - .725 * this.xh) / 2), Math.floor(.55 * this.xh)), Math.floor(this.aQ / this.xi)), zoom = (d0 - 2 * this.s * d0) / ge.aQ, f = ge.xm - 1; 0 <=
			f; f--) ag.setTransform(1, 0, 0, 1, Math.floor(hL + f % this.xi * d0), Math.floor(hM + this.xh + a1(f, this.xi) * d0)), ge.xn[f] && (ag.fillStyle = av.hT, ag.fillRect(0, 0, d0, d0)), ag.setTransform(zoom, 0, 0, zoom, Math.floor(hL +
			f % this.xi * d0 + this.s * d0), Math.floor(hM + this.xh + a1(f, this.xi) * d0 + this.s * d0)), ag.drawImage(ge.bF[f], 0, 0);
		cp.hg(Math.floor(hL + this.aQ - .725 * this.xh), Math.floor(hM + .275 * this.xh), Math.floor(.45 * this.xh)), ag.setTransform(1, 0, 0, 1, 0, 0), ag.imageSmoothingEnabled = !1
	}
}
var aq, xu, gs, ln, fQ, fR, tf, aj, lf, oO, bY, ba, bb, bc, bx, z3, im, be, bn, bt, bu, kW, f5, ag, eV, eY, wt, aS, eG, eH, fP, aR, lj, li, a7O, bZ, a7P, a7Q, by, bV, a7R, bW, a7S, a7T, bg, a7U, a7V, cd, sR, qk, ql, ix, iv, iw, id, aBu, a6s, a41, tz,
	a7F, a6u, a7G, a9G, qd, ih, qm, cf, eI, qg, t9, cq, cp, ci, oX, co, aZ, ck, cY, fc, cn, cj, cm, cr, hJ, oY, fT, ub, fm, ud, mn, ga, gd, bh, v0, cG, qa, ce, qe, mq, lQ, iQ, fs, aFt, a6, vF, cU, fS, cu, g8, ji, aA5, cl, oZ, fL, ph, eC, wv, qp, qo,
	pX, fi, jx, k8, a6v, kH, qi, ct, bG, av, ch, tC, tt, ts, wU, a8T, fW, a4J, yP, bP, bR, iY, cb, qj, qc, ab, fv, wy, qq, jX, fl, gt, eb, qZ, ge, kP, cs, uR, aO, cB, as, ob, aFu, jZ, a42, om, ja, au, rO, aBW, b2 = "middle",
	np = "bottom",
	b1 = "center",
	hX = "left",
	hY = "right",
	aT = "bold ",
	xr = "italic ",
	xs = "normal ",
	aU = "px " + settings.fontName,
	xt = [aT, xr + aT, aT],
	xv = ["wss://", "/s50/", "/s51/", "/s52/"];

function xw() {
	wx(), (tf = new xx).aN()
}

function wx() {
	ln = .0022 * (1 + .5 * aR) * aS, gs = (gs = Math.floor((aR ? .02 : .01152) * aS)) < 2 ? 2 : gs, aq = (aq = Math.floor((aR ? .0114 : .01296) * aS)) < 2 ? 2 : aq, xu = (xu = Math.floor(.005 * wt)) < 1 ? 1 : xu
}

function xy(aK, aQ, aC) {
	aK.fillStyle = av.b0, aK.fillRect(0, 0, aQ, 1), aK.fillRect(0, aC - 1, aQ, 1), aK.fillRect(0, 0, 1, aC), aK.fillRect(aQ - 1, 0, 1, aC)
}

function tM() {
	this.xz = null, this.y0 = 512, this.y1 = 8, this.wB = 0, this.v7 = 0, this.ko = new Uint16Array(this.y0), this.y2 = new Uint32Array(this.y0), this.wK = new Uint32Array(this.y0), this.wJ = new Uint32Array(this.y0), this.y3 = new Uint16Array(this
			.y0), this.kp = new Uint32Array(this.y0), this.y4 = new Uint16Array(this.y0), this.bT = new Uint16Array(this.y0), this.wI = new Uint8Array(this.y0), this.wA = new Uint8Array(cK), this.y5 = new Uint16Array(this.y1 * cK), this.aN =
		function() {
			this.v7 = 0, this.wB = 0, this.xz = new Uint8Array(ab.bX + ab.ea), this.wA.fill(0)
		}, this.y6 = function(player) {
			var m = this.wB,
				y7 = bP.y8(iY.pz[0]),
				cR = this.wA[player],
				cS = (player << 3) + cR;
			oO[player] = 2, this.ko[m] = cS, this.y2[m] = y7, this.wJ[m] = y7, this.wK[m] = bP.y8(iY.pz[1]), this.y3[m] = 0, this.kp[m] = iY.ig[0], this.y4[m] = bR.mB.y6(m, bP.y9(y7)), this.bT[m] = this.v7, this.wI[m] = iY.pz[2], this.v7 = this.v7 +
				1 & 1023, this.y5[cS] = m, this.wA[player] = cR + 1, this.wB++
		}, this.pv = function() {
			var yA = iY.pz[3];
			this.y2[yA] = this.wJ[yA], this.wK[yA] = bP.y8(iY.pz[1]), this.y3[yA] = 0, this.wI[yA] = iY.pz[2]
		}, this.aW = function() {
			if (aO.lZ() % 5 == 3) {
				bR.tP.aW(), ! function(qA) {
					var f, yE, yF, yG, yH, y7, yL, yM, bf, cN, y2 = qA.y2,
						wK = qA.wK,
						wJ = qA.wJ,
						kp = qA.kp,
						y3 = qA.y3,
						y4 = qA.y4,
						qA = qA.wB,
						yO = ab.bX << 4;
					for (f = qA - 1; 0 <= f; f--) yF = wJ[f], yE = wK[f], yF !== yE && (y7 = y2[f], yL = yE % yO - (yH = y7 % yO), yM = ~~((yE + .5) / yO) - (y7 = ~~((y7 + .5) / yO)), bf = ~~Math.sqrt(yL * yL + yM * yM + .5), cN = 4e5 + 2e4 * ~~
						Math.sqrt(.5 + (Math.sqrt(kp[f] + .5) << 4)), 65535 <= (cN = y3[f] + Math.max(~~((.5 + cN) / bf), 1)) ? wJ[f] = yG = yE : (y3[f] = cN, wJ[f] = yG = yH + yP.hp(cN * yL, 65536) + yO * (y7 + yP.hp(cN * yM, 65536))), y4[
						f] = bR.mB.yQ(y4[f], yF, yG))
				}(this), ! function(qA) {
					var f, yR, bL, u, o, yS, yT, yU, lg, eW, hL, hM, yV, yW, yX, k4, y7, ya, m = qA.wB,
						wJ = qA.wJ,
						ko = qA.ko,
						kp = qA.kp,
						mB = bR.mB.mB,
						yb = mB.length,
						yc = bR.mB.yc,
						yO = ab.bX << 4,
						yd = ar,
						ye = cB.cC,
						cN = (m - 1) * (aO.lZ() % 2);
					for (f = 0; f < m; f++) {
						for (yR = Math.abs(f - cN), y7 = wJ[yR], bL = bP.y9(y7), lg = ko[yR] >> 3, hL = y7 % yO, hM = ~~((y7 + .5) / yO), y7 = kp[yR], ya = 80 + ~~Math.sqrt(.5 + (Math.sqrt(y7 + .5) << 8)), yW = Math.min(ya * ya, 262144), yX = -1,
							u = 0; u < 9; u++)
							if (!((yS = bL + yc[u]) < 0 || yb <= yS))
								for (yU = mB[yS], yT = yU.length, o = 0; o < yT; o++) yV = yU[o], k4 = ko[yV] >> 3, lg == k4 || yd && ye[lg] === ye[k4] || (k4 = wJ[yV], (k4 = (eW = hL - k4 % yO) * eW + (eW = hM - ~~((k4 + .5) / yO)) * eW) < yW &&
									(yX = yV, yW = k4)); - 1 !== yX && (y7 = Math.min(Math.max(1, yP.hp(y7 * (ya - Math.floor(Math.sqrt(yW + .5))), 5 * ya)), kp[yX]), kp[yR] -= y7 >> 4, kp[yX] -= y7)
					}
				}(this);
				var f, ik, kp = (qA = this).kp,
					qA = qA.wB;
				for (f = qA - 1; 0 <= f; f--) ik = kp[f], 0 < (ik -= Math.max(1, ik >> 7)) ? kp[f] = ik : bR.tJ.wN(f)
			}
		}
}

function yf() {
	var aQ, aC, yg;

	function yu(lg, bf, ys, yj, bK) {
		bf = yt(lg, bf + 1 + 2 * yj & 3);
		! function(lg, k4) {
			return 1 < Math.abs(lg % aQ - k4 % aQ) || 1 < Math.abs(yw(lg) - yw(k4))
		}(lg, bf) && 0 === bK[bf << 2] && (bK[bf << 2] = ys)
	}

	function yw(s) {
		return Math.floor((s + .5) / aQ) % aC
	}

	function yt(s, bf) {
		return s + yg[bf]
	}
	this.t = function(i) {
		var f, gp, m, yh, yk = ts;
		for (wU.wV(wU.wW(i)), ab.bX = aQ = yk.t7(12), ab.ea = aC = yk.t7(12), yg = [-aQ, -1, aQ, 1], ab.cX = document.createElement("canvas"), ab.cX.width = ab.bX, ab.cX.height = ab.ea, ab.hE = ab.cX.getContext("2d", {
				alpha: !1
			}), ab.hF = ab.hE.getImageData(0, 0, ab.bX, ab.ea), ab.hG = ab.hF.data, bG.yn.yo(ab.hG), m = yk.t7(12), gp = yk.t7(5), yh = uG(aQ * aC - 1), f = 0; f < m; f++) ! function(bL, s, yi, yj) {
			var f, bf, yk = ts,
				bK = ab.hG,
				yp = s,
				vY = s,
				yq = 0,
				yr = 1 + yi,
				ys = 2 - yi;
			for (bK[s << 2] = yr, f = 0; f < bL; f++) bf = yk.t7(2), s = yt(s, bf), bK[s << 2] === yr ? yq % 2 == 1 && yu(vY, yq + 2 * yj + 3, ys, yj, bK) : bK[s << 2] = yr, yu(s, bf, ys, yj, bK), yu(vY, bf, ys, yj, bK), vY = s, yq = bf;
			yt(s, 0) === yp ? (yu(s, 0, ys, yj, bK), yu(yp, 0, ys, yj, bK)) : yt(s, 1) === yp && (yu(s, 0, ys, yj, bK), yu(yp, 2, ys, yj, bK));
			0 === bL && (yu(yp, 0, ys, yj, bK), yu(yp, 2, ys, yj, bK))
		}(yk.t7(gp), yk.t7(yh), 1 === yk.t7(1), 1 === yk.t7(1));
		var b8, b9, yR, yx, yy, yz, bK = ab.hG,
			z0 = !0,
			mE = ab.ac.ad[ab.ae].mE,
			mF = ab.ac.ad[ab.ae].mF;
		for (b9 = 0; b9 < aC; b9++)
			for (yx = !0, yy = z0, b8 = yz = 0; b8 < aQ; b8++) yR = 4 * b9 * aQ + 4 * b8, yz <= b8 && 0 < bK[yR] && (yy = 2 === bK[yR], yx) && (yx = !1, yy !== z0) ? (z0 = yy, yz = b8 + 1, b8 = -1) : (yy ? (bK[yR] = mF[0], bK[1 + yR] = mF[1], bK[
				2 + yR] = mF[2]) : (bK[yR] = mE[0], bK[1 + yR] = mE[1], bK[2 + yR] = mE[2]), bK[3 + yR] = 255);
		ab.hE.putImageData(ab.hF, 0, 0), ab.uU = !0, ab.hH.aN(), aO.an = !0
	}
}

function z1() {
	var r = ["Accept", "You erased {0}.", "You were erased by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You surrendered!",
		"The game ended in a stalemate!", "Error: {0}", "{0} won the game.", "{0} was immortalized!", "Unclaimed Land {0}", "Player: {0}   Balance: {1}   Territory: {2}   Coords: {3}", "Mountains {0}", "Water {0}",
		"Ship Owner: {0}   Strength: {1}", " Message to {0}: ", "{0}: ", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"Agreeing to peace concludes the game in a stalemate!", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requested a non-aggression pact.",
		"You asked {0} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggested you attack {1}.", "Your balance is too low!", "You exported {0} resource{20} to {1}.", "A tax of {0} unit{20} was deducted.",
		"{0} supported you with {1} resource{21}.", "A bot ({0}) supported you with {1} resource{21}.", "Map: {0}", "Dimension: {0}x{1}", "Overall Pixels: {0}", "Land: {0} ({1})", "Water: {0} ({1})", "Mountains: {0} ({1})",
		"Full sending against human players is disabled.", "{0} and {1} other player{21} were erased.", "{0} and {1} other player{21} left the game.", "{0} and {1} other player{21} surrendered.", "{0} was erased by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game."
	];
	this.k9 = function(iT, z2, n9) {
		var f, m, i;
		if (!z2) return r[iT];
		for (m = z2.length, i = r[iT], f = 0; f < m; f++) Number.isInteger(z2[f]) && 1 !== z2[f] && (i = i.replace("{" + (20 + f) + "}", "s"));
		if (n9) {
			if (n9.kq)
				for (f = 0; f < n9.kq.length; f++) z2[n9.kq[f]] = bG.hZ.ha(z2[n9.kq[f]]);
			if (n9.lT)
				for (f = 0; f < n9.lT.length; f++) z2[n9.lT[f]] = bG.hZ.i5(100 * z2[n9.lT[f]], 1)
		}
		for (f = 0; f < m; f++) i = i.replace("{" + f + "}", z2[f]);
		return i
	}
}

function qU(jq) {
	var f;
	for (aj = new Array(cK), lf = aj, oO = new Uint8Array(cK), bY = new Uint16Array(cK), ba = new Uint16Array(cK), bb = new Uint16Array(cK), bc = new Uint16Array(cK), bx = new Uint32Array(cK), z3 = new Uint32Array(cK), im = new Uint32Array(cK),
		donationsTracker.reset(), be = new Array(cK), bn = new Array(cK), bt = new Array(cK), bu = new Array(cK), kW = new Uint8Array(cK), f = jq.length - 1; 0 <= f; f--) aj[f] = jq[f].name, kW[f] = jq[f].u1
}

function z4() {
	var z5, z6, br, z7;
	this.aN = function() {
		var f, b8, b9, sN, z8, aQ, aC, aK, bJ, bK, y, s, bD, g, tO;
		if (function() {
				if (br = !0, z7 = "rgb(" + ab.hG[0] + "," + ab.hG[1] + "," + ab.hG[2] + ")", ab.zB(ab.ae)) return 1;
				return br = !1, 0
			}()) z6 = null;
		else {
			for (z5 = a1(96, 4), z8 = 1 === ab.ae ? (sN = 0, 160) : (sN = 128, 32), z7 = "rgb(" + sN + "," + sN + "," + sN + ")", z6 = new Array(4), f = 3; 0 <= f; f--) {
				if (z6[f] = document.createElement("canvas"), aQ = f % 2 == 0 ? ab.bX : z5, aC = f % 2 == 0 ? z5 : ab.ea + 2 * z5, z6[f].width = aQ, z6[f].height = aC, bK = (bJ = (aK = z6[f].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aQ, aC)).data, f % 2 == 0)
					for (b9 = z5 - 1; 0 <= b9; b9--)
						for (y = z8 + Math.floor((b9 + 1) * (sN - z8) / (z5 + 1)), b8 = aQ - 1; 0 <= b8; b8--) bK[s = 4 * ((0 === f ? z5 - b9 - 1 : b9) * aQ + b8)] = y, bK[s + 1] = y, bK[s + 2] = y, bK[s + 3] = 255;
				else {
					for (b8 = z5 - 1; 0 <= b8; b8--)
						for (y = z8 + Math.floor((b8 + 1) * (sN - z8) / (z5 + 1)), b9 = aC - 1 - z5; z5 <= b9; b9--) bK[s = 4 * (b9 * aQ + (3 === f ? z5 - b8 - 1 : b8))] = y, bK[s + 1] = y, bK[s + 2] = y, bK[s + 3] = 255;
					for (g = 1; 0 <= g; g--)
						for (b8 = z5 - 1; 0 <= b8; b8--)
							for (b9 = z5 - 1; 0 <= b9; b9--) bD = (Math.pow(b8 * b8 + b9 * b9, .5) + 1) / (z5 + 1), y = z8 + Math.floor((1 < bD ? 1 : bD) * (sN - z8)), bK[s = 4 * ((0 === g ? z5 - b9 - 1 : b9 + g * (aC - z5)) * aQ + (1 === f ?
								b8 : z5 - b8 - 1))] = y, bK[s + 1] = y, bK[s + 2] = y, bK[s + 3] = 255
				}
				aK.putImageData(bJ, 0, 0)
			}
			tO = z8, ab.hE.fillStyle = "rgb(" + tO + "," + tO + "," + tO + ")", ab.hE.fillRect(0, 0, ab.bX, 1), ab.hE.fillRect(0, ab.ea - 1, ab.bX, 1), ab.hE.fillRect(0, 0, 1, ab.ea), ab.hE.fillRect(ab.bX - 1, 0, 1, ab.ea)
		}
	}, this.cV = function() {
		var g = br ? 0 : -z5;
		zC(g, g, ab.bX - 2 * g, ab.ea - 2 * g, eb.zD, eb.zE, eb.zF, eb.zG) || (ag.fillStyle = z7, ag.fillRect(0, 0, eG, eH))
	}, this.ao = function() {
		br || (zH(0, -z5, ab.bX, z5, eb.zD, eb.zE, eb.zF, eb.zG) && ag.drawImage(z6[0], eb.zI, eb.zJ - z5), zH(ab.bX, -z5, z5, ab.ea + 2 * z5, eb.zD, eb.zE, eb.zF, eb.zG) && ag.drawImage(z6[1], eb.zI + ab.bX, eb.zJ - z5), zH(0, ab.ea, ab.bX, z5,
			eb.zD, eb.zE, eb.zF, eb.zG) && ag.drawImage(z6[2], eb.zI, eb.zJ + ab.ea), zH(-z5, -z5, z5, ab.ea + 2 * z5, eb.zD, eb.zE, eb.zF, eb.zG) && ag.drawImage(z6[3], eb.zI - z5, eb.zJ - z5))
	}
}

function zK() {
	this.zL = null, this.aN = function() {
		this.zL = 10 !== lW ? null : new Uint32Array(cK)
	}, this.aW = function() {
		10 === lW && this.zM()
	}, this.zM = function() {
		for (var s, target, sk, zL = this.zL, jq = lj, sj = im, f = li - 1; 0 <= f; f--) s = jq[f], j3 <= s || (target = Math.max(a1(sj[s], 4), 2048), sk = Math.max(qa.su(s), 100), zL[s] += a1(sk * target, 1e4), zL[s] > target && (zL[s] =
			target))
	}, this.zN = function(player, ik) {
		return ik > this.zL[player] ? (ik = this.zL[player], this.zL[player] = 0) : this.zL[player] -= ik, ik
	}
}

function xx() {
	this.m = 0, this.aQ = 0, this.a8 = null, this.aN = function() {
		this.a8 = [], this.a8.push({
			b8: 0,
			b9: 0,
			nz: aR,
			ky: null
		}), this.a8.push({
			b8: 0,
			b9: 0,
			nz: !1,
			ky: new xg
		}), this.a8.push({
			b8: 0,
			b9: 0,
			nz: !1,
			ky: new zO
		}), this.a8[2].ky.zP(), this.m = this.a8.length, this.aQ = 0
	}, this.nh = function() {
		this.aQ = Math.floor((aR ? .063 : .04) * aS), this.aQ += 4 - this.aQ % 4, this.a8[0].b8 = gs, this.a8[0].b9 = eH - this.aQ - gs;
		for (var f = 1; f < this.m; f++) this.a8[f].b8 = this.a8[f - 1].b8 + Math.floor(aR ? 1.5 * gs : 3.7 * gs) + this.aQ, this.a8[f].b9 = this.a8[0].b9
	}, this.fk = function(eO, eP) {
		if (gd.jL())
			for (var f = this.m - 1; 0 <= f; f--)
				if (eO >= this.a8[f].b8 && eP >= this.a8[f].b9 && eO < this.a8[f].b8 + this.aQ && eP < this.a8[f].b9 + this.aQ) return f;
		return -1
	}, this.uY = function() {
		for (var f = 2; 1 <= f; f--)
			if (this.a8[f].ky.fa) return !0;
		return !1
	}, this.resize = function() {
		for (var f = 2; 1 <= f; f--) this.a8[f].ky.resize()
	}, this.fq = function() {
		return this.a8[1].ky.fa ? (this.a8[1].ky.eB(-5e3, -5e3, 0), !0) : !!this.a8[2].ky.fa && (this.a8[2].ky.eB(-5e3, -5e3), !0)
	}, this.eB = function(eO, eP, te) {
		if (te) {
			if (this.a8[1].ky.fa) return this.a8[1].ky.eB(eO, eP, 0), !0;
			if (this.a8[2].ky.fa) return this.a8[2].ky.eB(eO, eP), !0
		}
		eO = this.fk(eO, eP);
		if (te) {
			if (0 === eO) return this.a8[eO].nz = !this.a8[eO].nz, aR = this.a8[eO].nz, g8.ww(0), zQ(this.a8[0].nz, !1), !0;
			if (1 <= eO && eO < 3) return this.a8[eO].ky.aN(), fm.lo(!1), aO.an = !0
		}
		return !1
	}, this.eK = function(eO, eP) {
		return this.a8[1].ky.fa ? (this.a8[1].ky.eK(eO, eP), !0) : !!this.a8[2].ky.fa && (this.a8[2].ky.eK(eO), !0)
	}, this.ue = function() {
		for (var f = 2; 1 <= f; f--)
			if (this.a8[f].ky.fa) return this.a8[f].ky.ue(), !0;
		return !1
	}, this.ao = function() {
		if (gd.jL()) {
			ag.imageSmoothingEnabled = !0;
			for (var f = this.m - 1; 0 <= f; f--) ag.fillStyle = this.a8[f].nz ? av.kA : av.ax, ag.fillRect(this.a8[f].b8, this.a8[f].b9, this.aQ, this.aQ), 0 === f ? this.zR(f, gd.get(15)) : 1 === f ? this.zS() : 2 === f && this.zT(), ag
				.setTransform(1, 0, 0, 1, 0, 0), ag.lineWidth = ln, ag.strokeStyle = av.b0, ag.strokeRect(this.a8[f].b8, this.a8[f].b9, this.aQ, this.aQ);
			ag.imageSmoothingEnabled = !1
		}
	}, this.zR = function(f, bF) {
		var gap = .08 * this.aQ,
			zoom = (this.aQ - 2 * gap) / bF.width;
		ag.setTransform(zoom, 0, 0, zoom, this.a8[f].b8 + gap, this.a8[f].b9 + (this.aQ - zoom * bF.height) / 2), ag.drawImage(bF, 0, 0)
	}, this.zS = function() {
		var gap = .06 * this.aQ,
			zoom = (this.aQ - 2 * gap) / ge.aQ;
		ag.setTransform(zoom, 0, 0, zoom, this.a8[1].b8 + gap, this.a8[1].b9 + gap), ag.drawImage(ge.bF[4], 0, 0)
	}, this.zT = function() {
		ag.setTransform(1, 0, 0, 1, this.a8[2].b8, this.a8[2].b9);
		for (var bf = this.aQ / 4, b8 = 3; 0 <= b8; b8--)
			for (var b9 = 3; 0 <= b9; b9--) {
				var a4 = Math.floor(367 * (b8 + 1) * (b9 + 1) % 256),
					lF = Math.floor(687 * (b8 + 1) * (b9 + 1) % 256),
					u = Math.floor(651 * (b8 + 1) * (b9 + 1) % 256);
				ag.fillStyle = "rgb(" + a4 + "," + lF + "," + u + ")", ag.fillRect(b8 * bf, b9 * bf, bf, bf)
			}
	}, this.uh = function() {
		for (var f = 2; 1 <= f; f--)
			if (this.a8[f].ky.fa) return void this.a8[f].ky.ao()
	}
}

function tI() {
	function zX(zU) {
		var zh = 4 + .03 * (1 + 1.5 * aR) * aS / cW;
		return bP.zi(zU, iY.pz[1]) < zh
	}
	this.py = function(player, zU) {
		return !!bP.zV(zU) && bR.bS.wB !== bR.bS.y0 && bR.bS.wA[player] !== bR.bS.y1 && 0 !== bt[player].length && !!bR.tT.zW(player, zU) && !!zX(zU)
	}, this.zY = function(player, zZ, zU) {
		return !!(bP.zV(zU) && this.za(player, zZ) && bR.tT.zb(zU) && zX(zU))
	}, this.za = function(player, id) {
		for (var yA, zc = player << 3, zd = zc + bR.bS.wA[player], y5 = bR.bS.y5, bT = bR.bS.bT, f = zc; f < zd; f++)
			if (id === bT[yA = y5[f]]) return iY.pz[3] = yA, !0;
		return !1
	}, this.pv = function(bA) {
		var b6 = bR.tO.b6;
		return bR.tO.b6 = -1, !!this.za(kY, b6) && (kH.pa.pv(b6, bA), !0)
	}, this.pw = function(eO, eP) {
		var f, zd, uN, y5, yW, wJ, ze, bD, kp, zf, player = kY,
			m = bR.bS.wA[player];
		if (0 === m) return !1;
		for (y5 = bR.bS.y5, wJ = bR.bS.wJ, kp = bR.bS.kp, zd = (player = player << 3) + m, yW = .4 * bG.bH.rd(.5) * aS / cW, uN = -1, f = player; f < zd; f++) zf = y5[f], ze = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(kp[zf]))), (bD = bP.zg(eO, eP,
			wJ[zf])) - ze < yW && (yW = bD, uN = zf);
		return !(uN < 0 || (bR.tO.b6 = bR.bS.bT[uN], 0))
	}, this.q5 = function(eO, eP) {
		var f, uN, yW, wJ, ze, bD, kp, m = bR.bS.wB;
		if (m < 1) return -1;
		for (wJ = bR.bS.wJ, kp = bR.bS.kp, yW = 1e3, uN = -1, f = 0; f < m; f++) ze = 16 * bG.bH.rd(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(kp[f]))), (bD = bP.zg(eO, eP, wJ[f])) < yW && bD < ze && (yW = bD, uN = f);
		return uN
	}
}

function zj() {
	var ee = 1,
		jH = [null, null];
	this.aN = function() {
		ee = .72 * (aR ? .0011 : .001) * aS;
		for (var f = 1; 0 <= f; f--) jH[f] && this.zk(f, jH[f].i)
	}, this.zk = function(iT, i) {
		jH[iT] = {
			i: i,
			font: aT + 10 + aU
		}, this.jV(iT)
	}, this.jV = function(iT) {
		var i, fontSize, aD, aQ, zl;
		gd.jL() && jH[iT] && (i = jH[iT].i, fontSize = Math.floor(.15 * ee * gd.get(13).height), aQ = aZ.measureText(i, aD = aT + fontSize + aU), (zl = .8 * ee * gd.get(13).width) < aQ && (fontSize = Math.floor(fontSize * zl / aQ), aD = aT +
			fontSize + aU), jH[iT] = {
			i: i,
			font: aD
		}, aO.an = !0)
	}, this.zm = function() {
		return Math.floor(ee * gd.get(13).height)
	}, this.eB = function(eO, eP) {
		return !!gd.jL() && !(eO < gs || eP < eH - tf.aQ - ee * gd.get(13).height - 2 * gs || eP > eH - tf.aQ - 2 * gs || (eO < gs + ee * gd.get(13).width ? (ob.lo(0), 0) : eO < 2 * gs + ee * gd.get(13).width || !(eO < 2 * gs + 2 * ee * gd.get(
			13).width) || (ob.lo(1), 0)))
	}, this.ca = function() {
		return Math.floor(eH - tf.aQ - ee * gd.get(13).height - 2 * gs)
	}, this.ao = function() {
		if (gd.jL()) {
			ag.imageSmoothingEnabled = !0, ag.setTransform(ee, 0, 0, ee, gs, this.ca()), ag.drawImage(gd.get(14), 0, 0), ag.setTransform(ee, 0, 0, ee, 2 * gs + ee * gd.get(13).width, this.ca()), ag.drawImage(gd.get(13), 0, 0);
			for (var f = 1; 0 <= f; f--) jH[f] && (ag.setTransform(1, 0, 0, 1, (1 + f) * gs + f * ee * gd.get(13).width, this.ca()), ag.font = jH[f].font, ag.textBaseline = b2, ag.textAlign = b1, ag.fillStyle = av.b0, ag.fillText(jH[f].i, .5 *
				ee * gd.get(13).width, .86 * ee * gd.get(13).height));
			ag.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function zn() {
	var zo, v9, vA, vB, zp, zq;

	function zu(kv) {
		for (var f = v9 - 1; 0 <= f; f--) 0 === vB[vA[f]] && bx[vA[f]] >= kv && zt(vA[f])
	}

	function zs(player) {
		10 === vB[player] ? vB[player] = zo : bx[player] < 1e3 ? vB[player] = 3 : bx[player] < 1e4 ? vB[player] = 2 : bx[player] < 6e4 ? vB[player] = 1 : vB[player] = 0
	}
	this.aN = function() {
		zp = zq = 0, zo = 6, v9 = 0, vA = new Uint16Array(cK), vB = new Uint8Array(cK)
	}, this.aW = function() {
		var f;
		for (zp = kP.kQ[13], zq = im[kY], f = v9 - 1; 0 <= f; f--) 10 === vB[vA[f]] ? zs(vA[f]) : 0 == vB[vA[f]]-- && (zs(vA[f]), zt(vA[f]));
		16e4 <= bx[rO[0]] && (zu(16e4), 3e5 <= bx[rO[0]]) && zu(3e5), bx[kY] > kP.kQ[7] && (kP.kQ[7] = bx[kY]), kP.kQ[14] += zq - im[kY] + zp - kP.kQ[13]
	}, this.vH = function(player) {
		for (var g, f = v9 - 1; 0 <= f; f--)
			if (player === vA[f]) {
				for (v9--, g = f; g < v9; g++) vA[g] = vA[g + 1];
				return
			}
	}, this.ii = function(player, zw) {
		for (var f = v9 - 1; 0 <= f; f--)
			if (player === vA[f]) return;
		vA[v9++] = player, vB[player] = zw ? 2 : 10
	}
}

function zx() {
	this.zy = sc(32, 32, ["a", "b", "m"], 200), this.b7 = function(aQ, aC) {
		var o = document.createElement("canvas");
		return o.width = aQ, o.height = aC, o
	}, this.getContext = function(aJ, alpha) {
		return aJ.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(aK, aQ, aC) {
		return aK.getImageData(0, 0, aQ, aC)
	}, this.p7 = function(a4, lF, u) {
		return "rgb(" + a4 + "," + lF + "," + u + ")"
	}, this.zz = function(a4, lF, u, g) {
		return "rgba(" + a4 + "," + lF + "," + u + "," + g.toFixed(3) + ")"
	}, this.a00 = function(a01, b8, b9, aQ, aC) {
		var eQ = 1 / fP,
			hV = .02 * eQ * aC,
			hW = eQ * ln;
		a01.padding = hV.toFixed(2) + "px", a01.border = hW.toFixed(2) + "px solid " + av.b0, a01.left = (eQ * b8).toFixed(2) + "px", a01.top = (eQ * b9).toFixed(2) + "px", a01.width = (eQ * aQ - 2 * hV - 2 * hW).toFixed(2) + "px", a01.height = (
			eQ * aC - 2 * hV - 2 * hW).toFixed(2) + "px"
	}, this.a02 = function(ip, type) {
		return ip = ip.toFixed(2), 0 === type ? ip + "px " + settings.fontName : 1 === type ? "bold " + ip + "px " + settings.fontName : 2 === type ? "small-caps " + ip + "px " + settings.fontName : "small-caps bold " + ip + "px " + settings
			.fontName
	}, this.textAlign = function(bI, id) {
		bI.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(bI, id) {
		bI.textBaseline = 1 === id ? "middle" : "bottom"
	}, this.rd = function(y) {
		return 1 + y * aR
	}
}

function a03() {
	this.a04 = [], this.a05 = [], this.aN = function() {
		this.a04 = [], this.a05 = []
	}, this.aW = function() {
		0 <= this.a04.length && this.a06(this.a04), 0 <= this.a05.length && this.a06(this.a05)
	}, this.a06 = function(r) {
		for (var u = -1, f = r.length - 1; 0 <= f; f--)
			if (r[f].aP--, r[f].aP <= 0) {
				u = f;
				break
			} for (f = u; 0 <= f; f--) r.shift()
	}, this.pY = function(id, jq, a07) {
		return this.a08(this.a04, id, jq, a07)
	}, this.a09 = function(id, jq, a07) {
		return this.a08(this.a05, id, jq, a07)
	}, this.a08 = function(r, id, jq, a07) {
		return ! function(r, id, jq) {
			var f, yR;
			for (f = jq.length - 1; 0 <= f; f--)
				for (yR = r.length - 1; 0 <= yR; yR--)
					if (r[yR].player === jq[f] && id === r[yR].id) return 1;
			return
		}(r, id, jq) && (a07 && function(r, id, jq) {
			var f;
			for (f = jq.length - 1; 0 <= f; f--) r.push({
				player: jq[f],
				id: id,
				aP: 384
			})
		}(r, id, jq), !0)
	}
}

function a0C() {
	this.a0D = new Uint16Array(2), this.ig = new Uint32Array(2), this.sM = new Uint8Array(4), this.a0E = new Uint8Array(4), this.pz = new Uint32Array(5), this.iZ = new Uint32Array(8), this.a0F = function(r, ht) {
		return r[0] = ht, r
	}, this.a0G = function(r, ht, hu) {
		return r[0] = ht, r[1] = hu, r
	}, this.a0H = function(r, ht, hu, hv) {
		return r[0] = ht, r[1] = hu, r[2] = hv, r
	}, this.a0I = function(r, ht, hu, hv, a0J) {
		return r[0] = ht, r[1] = hu, r[2] = hv, r[3] = a0J, r
	}
}

function a0K() {
	var input;

	function a0L(cE) {
		a0O(cE.target.files)
	}

	function a0O(files) {
		files && 0 < files.length && fi.a0P(files[0])
	}

	function a0V(cE) {
		var o = new Image;
		o.onload = a0W, o.src = cE.target.result
	}

	function a0W(cE) {
		var a0X, cE = cE.target,
			aQ = cE.width,
			aC = cE.height;
		4096 < aQ || 4096 < aC || aQ < 10 || aC < 10 ? (a0X = "Image w & h must be between 10 and 4096.", om ? om.showToast(a0X) : alert(a0X)) : (jx.fd(), ab.ae = ab.a0U(), ab.gy = 0, ab.bX = aQ, ab.ea = aC, ab.cX.width = ab.bX, ab.cX.height = ab.ea,
			ab.hE.drawImage(cE, 0, 0), a0X = ab.hE.getImageData(0, 0, ab.bX, ab.ea), ab.hG = a0X.data)
	}

	function a0Y(cE) {
		cE.stopPropagation(), cE.preventDefault()
	}

	function a0Z() {
		return 0 === fT.fp() || 2 === fT.fp()
	}
	this.aN = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = a0L
	}, this.a0M = function() {
		input.click()
	}, this.a0N = function(cE) {
		a0L(cE)
	}, this.a0P = function(a0Q) {
		var r = a0Q.name.split("."),
			a0R = r[r.length - 1].toLowerCase();
		"json" === a0R ? jx.a0T(a0Q) : "gif" !== a0R && "jpg" !== a0R && "jpeg" !== a0R && "png" !== a0R || (ab.ac.ad[ab.a0U()].name = r[0], (a0R = new FileReader).onload = a0V, a0R.readAsDataURL(a0Q))
	}, this.fC = function(cE) {
		a0Z() && (a0Y(cE), cE.dataTransfer.dropEffect = "copy")
	}, this.fD = function(cE) {
		a0Z() && (a0Y(cE), a0O(cE.dataTransfer.files))
	}
}

function a0a() {
	var a0b, r, a0c;

	function a0h() {
		var m3;
		0 === (m3 = fT.fp()) ? ga.gY() : 6 === m3 ? fL.bS.gZ(a0b) : 7 === m3 ? (ji.gY(), fL.bS.close(fL.bS.a0f, 3240)) : 8 === m3 && (qy(!0), ga.gY()), fT.setState(3), hJ.nh(), a0j(a0b), aO.an = !0
	}

	function a0g(cE) {
		for (var f = r.length - 1; 0 <= f; f--)
			if (cE === r[f].code) return r[f].i;
		return a0c + cE
	}

	function a0j(cE) {
		hJ.pA[2].aF = a0g(cE)
	}
	this.dF = function() {
		(r = []).push({
			i: "No Server Response",
			code: 1006
		}), r.push({
			i: "Account successfully saved!",
			code: 3231
		}), r.push({
			i: "Account Error",
			code: 3232
		}), r.push({
			i: "No Servers Found",
			code: 3249
		}), r.push({
			i: "Thanks for the vote.",
			code: 3252
		}), r.push({
			i: "Please accept Cookies",
			code: 3265
		}), r.push({
			i: "Invalid Password Format",
			code: 3266
		}), r.push({
			i: "Invalid Replay Format",
			code: 3605
		}), r.push({
			i: "Lobby Timeout",
			code: 4207
		}), r.push({
			i: "Invalid Username",
			code: 4214
		}), r.push({
			i: "User already exists.",
			code: 4224
		}), r.push({
			i: "No Client Response Error",
			code: 4229
		}), a0c = "Error "
	}, this.aN = function(a0d, cE) {
		a0b = cE;
		var m3 = fT.fp();
		if (6 === m3) {
			if (4211 === cE) return void ud.aN(0, 0);
			if (4214 !== cE) return void oY.a0e(a0d)
		} else {
			if (7 !== m3) return 8 === m3 ? void(a0d !== fL.bS.fN || ld || ci.kc(a0g(cE))) : void 0;
			if (a0d !== fL.bS.a0f) return
		}
		a0h()
	}, this.wg = function(cE) {
		a0b = cE, 8 === fT.fp() ? ci.kc(a0g(cE)) : a0h()
	}, this.resize = function() {
		a0j(a0b)
	}, this.eB = function(b8, b9) {
		3 === hJ.fk(b8, b9, 3, 1) && this.uc(b8, b9)
	}, this.uc = function(b8, b9) {
		ga.aN(), hJ.eK(b8, b9, !1), aO.an = !0
	}, this.ao = function() {
		hJ.a0k()
	}
}

function a0l() {
	var a0q, a0s;
	this.a0m = 5, this.a0n = this.a0m - 1, this.a0o = this.a0m + this.a0n, this.a0p = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a0r = null;

	function a11(f) {
		return a0s[f].a0v && a0q[f].a11()
	}

	function a13(a0d) {
		a0s[a0d].aP = aO.aP, a0s[a0d].a0w = !1
	}
	this.fN = 0, this.a0f = 0, this.aN = function() {
		this.a0r = new Array(this.a0m);
		this.a0r[0] = "territorial.io";
		var f, mJ = a6.mK(0);
		for (a6.mL(0), f = 1; f < this.a0m; f++) this.a0r[f] = t9.a3() + ".territorial.io";
		for (a6.mL(mJ), a0q = new Array(this.a0o), a0s = new Array(this.a0o), f = this.a0o - 1; 0 <= f; f--) a0s[f] = {
			a0v: !1,
			aP: 0,
			a0w: !1
		}
	}, this.lB = function() {
		return this.a0f < this.a0m ? this.a0f : this.a0f - this.a0n
	}, this.aW = function() {
		for (var f = this.a0o - 1; 0 <= f; f--) this.a0x(f) && aO.aP > a0s[f].aP + 15e3 && fL.hN.a0y(f, a0s[f].a0w)
	}, this.nZ = function(a0d, a0z) {
		if (a0s[a0d].a0v) {
			if (a0q[a0d].a11()) return a0q[a0d].a12(a0z), a0q[a0d].a0x();
			a0q[a0d].nG()
		}
		return this.a10(a0d, a0z), !1
	}, this.a10 = function(a0d, a0z) {
		a0s[a0d].a0v = !0, a13(a0d), a0q[a0d] = new a14, a0q[a0d].aN(a0d, a0z)
	}, this.a12 = function(a0d, a0z) {
		a11(a0d) && a0q[a0d].a12(a0z)
	}, this.a15 = function(a0d, a0z) {
		0 === a0z ? fc.nb() : a0z < 3 ? fL.hN.a16(a0d, a0z - 1) : 3 === a0z ? fL.hN.a17(a0d) : 4 === a0z ? oY.nb(a0d) : 5 === a0z ? a0d === this.fN && fL.hN.a18() : 6 !== a0z && 7 === a0z && fL.hN.a19(a0d)
	}, this.a0x = function(f) {
		return a0s[f].a0v && a0q[f].a0x()
	}, this.send = function(a0d, t6) {
		a13(a0d), a0q[a0d].send(t6)
	}, this.fM = function(a0d) {
		a0s[a0d].a0w = !0
	}, this.close = function(a0d, a1A) {
		a11(a0d) && a0q[a0d].close(a1A)
	}, this.a1B = function(a0d, a1A) {
		ub.wg(a1A), a11(a0d) && a0q[a0d].close(a1A)
	}, this.gZ = function(a1A) {
		for (var f = this.a0o - 1; 0 <= f; f--) this.close(f, a1A)
	}, this.a1C = function(a0d, a1A) {
		for (var f = this.a0o - 1; 0 <= f; f--) f !== a0d && this.close(f, a1A)
	}, this.a1D = function(a0d, cE) {
		a0q[a0d].nG(), ub.aN(a0d, cE.code)
	}
}

function a1E() {
	var aC, aJ, aD, a1G, a1H, a1F = ["Quit Game", "Surrender", "Statistics", "Replay"];

	function a1I() {
		var a1J, aK = aJ.getContext("2d", {
			alpha: !0
		});
		aK.clearRect(0, 0, aC, aC), aK.fillStyle = av.hS, aK.fillRect(0, 0, aC, aC), 0 === a1G && (aK.fillStyle = av.a1K, aK.fillRect(0, 0, aC, aC)), aK.fillStyle = av.b0, aK.fillRect(0, 0, aC, 1), aK.fillRect(0, 0, 1, aC), aK.fillRect(0, aC - 1, aC,
				1), aK.fillRect(aC - 1, 0, 1, aC), a1J = .9 * aC / gd.get(0).width, aK.imageSmoothingEnabled = !0, aK.setTransform(a1J, 0, 0, a1J, Math.floor((aC - a1J * gd.get(0).width) / 2), Math.floor((aC - a1J * gd.get(0).height) / 2)), aK
			.drawImage(gd.get(0), 0, 0), aK.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a1N(eO, eP) {
		if (!cp.fx) return eO <= aC + aq && eP >= ck.b9 ? 0 : -1;
		if (eO <= 4 * aC + aq) {
			if (eP >= ck.b9) return 0;
			if (eP >= ck.b9 - aC - a1H * aq) return a1Q(2) ? 2 : -1;
			if (eP >= ck.b9 - 2 * (aC + a1H * aq)) return a1Q(3) ? 3 : -1;
			if (eP >= ck.b9 - 3 * (aC + a1H * aq)) return a1Q(4) ? 4 : -1
		} else if (eO <= 7 * aC + aq && eP >= ck.b9 - aC - a1H * aq) return 1;
		return -1
	}

	function a1Q(f) {
		return 2 === f ? a1O(2) || a1O(3) || a1O(4) : 3 === f && a1O(3) || a1O(4)
	}

	function a1O(f) {
		return 2 === f ? !fz && cp.rl(kY) : 3 === f ? 2 <= kP.sl : ct.a1V()
	}

	function a1W(f, pP) {
		ag.setTransform(1, 0, 0, 1, aq, ck.b9 - f * a1H * aq - f * aC), ag.fillStyle = av.hS, ag.fillRect(0, 0, 4 * aC, aC), a1G === f + 1 && pP === av.b0 && (ag.fillStyle = av.a1K, ag.fillRect(0, 0, 4 * aC, aC)), ag.fillStyle = pP, ag.fillRect(0, 0,
			4 * aC, 1), ag.fillRect(0, 0, 1, aC), ag.fillRect(4 * aC, 0, 1, aC), ag.fillRect(0, aC - 1, 4 * aC, 1), ag.fillText(a1F[f], 2 * aC, .54 * aC)
	}
	this.fx = !1, this.aN = function() {
		a1G = -1, this.fx = !1, a1H = aR ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		aC = ck.aC, (aJ = document.createElement("canvas")).width = aC, aJ.height = aC, aD = aT + Math.floor((aR ? .5 : .45) * aC) + aU, a1I()
	}, this.fy = function() {
		this.fx = !this.fx, this.fx ? (ch.fu(!1), fz && ch.a1L && ch.g0(!0), this.a1M()) : (a1G = -1, a1I(), ld && 1 === aY && !jt && qv(1)), aO.an = !0
	}, this.a1M = function() {
		(ld || fz) && 1 === aY && (cj.qx(!0), jt || setTimeout(function() {
			qZ.vW()
		}, 0), qv(0))
	}, this.eB = function(eO, eP) {
		var nz = a1N(eO, eP);
		if (this.fx) {
			if (cg) return 0 <= nz && ch.fu(!1), !fz;
			if (0 === nz) qy();
			else if (1 === nz) this.fy();
			else if (2 === nz) a1O(nz) && (kH.pa.rk(), this.fy());
			else if (3 === nz) a1O(nz) && (cs.fy(), aO.an = !0, ct.fa) && ct.nG();
			else if (4 === nz) a1O(nz) && (ct.fa ? ct.nG() : ct.show(), cs.fa) && cs.fy();
			else {
				if (!(ld || 1 !== aY || fz || cs.fa || ct.fa) && (cp.fy(), 1)) return !1;
				fW.fX(eO, eP) || cq.fY(eO, eP)
			}
			return !0
		}
		return 0 === nz && (this.fy(), !0)
	}, this.eK = function(eO, eP) {
		eO = a1N(eO, eP);
		eO !== a1G && (a1G = eO, this.fx || a1I(), aO.an = !0)
	}, this.ao = function() {
		var aQ;
		this.fx ? (aQ = Math.floor(5.5 * aC), ag.setTransform(1, 0, 0, 1, aq, ck.b9), ag.fillStyle = av.hS, ag.fillRect(0, 0, aQ, aC), 0 === a1G ? (ag.fillStyle = av.a1K, ag.fillRect(0, 0, 4 * aC, aC)) : 1 === a1G && (ag.fillStyle = av.a1K, ag
				.fillRect(4 * aC, 0, Math.floor(1.5 * aC), aC)), ag.fillStyle = av.b0, ag.fillRect(0, 0, aQ, 1), ag.fillRect(0, 0, 1, aC), ag.fillRect(4 * aC, 0, 1, aC), ag.fillRect(0, aC - 1, aQ, 1), ag.fillRect(aQ - 1, 0, 1, aC), ag.font =
			aD, ag.textBaseline = b2, ag.textAlign = b1, ag.fillText(a1F[0], 2 * aC, .54 * aC), aQ = .4 * aC, cp.hg(aq + 4 * aC + (1.5 * aC - aQ) / 2, ck.b9 + .3 * aC, aQ), a1Q(2) && a1W(1, a1O(2) ? av.b0 : av.a1X), a1Q(3) && a1W(2, a1O(3) ?
				av.b0 : av.a1X), a1Q(4) && a1W(3, av.b0), ag.setTransform(1, 0, 0, 1, 0, 0)) : ag.drawImage(aJ, aq, ck.b9)
	}, this.rl = function(player) {
		return 0 !== oO[player] && 2 !== aY && bh.kX(player)
	}, this.hg = function(b8, b9, m) {
		ag.setTransform(1, 0, 0, 1, b8, b9), ag.lineWidth = ln, ag.strokeStyle = av.b0, ag.beginPath(), ag.moveTo(0, 0), ag.lineTo(m, m), ag.moveTo(0, m), ag.lineTo(m, 0), ag.stroke()
	}
}

function a1Y() {
	var a1Z, a1a, a1b, a1c, a1d, iT = 0,
		aP = aO.aP;

	function a1j() {
		! function() {
			if (!jt) return;
			if (ld) return;
			return a1d % 7 != 0 ? a1d++ : a1c === qM ? (a1m(), cm.a1n(a1c), qL.aW()) : (a1m(), a1d++, a1c++, ce.t1(), ce.qx(!0)), 1
		}() && (a1m(), xQ())
	}

	function a1k() {
		iT = 0, (jt ? (aO.an = cm.a1n(a1c - (a1d % 7 == 0 ? 0 : 1) + a1d % 7 / 7) || aO.an, xW) : cp.fx || !ch.a1L ? xW : (aO.an = !0, xV))()
	}

	function a1m() {
		var f, m, a1o = qi.tx.u4,
			ht = qi.tx.u5,
			hu = qi.tx.u6,
			hv = qi.tx.u7,
			a1p = qi.tx.u9,
			a1q = qi.tx.u8;
		if (a1Z >= a1q.length) ci.kc("Replay file smaller than expected."), qc.rQ.rS(-1);
		else if (a1q = a1q[a1Z], a1p[a1Z]) {
			for (m = a1a + a1q, f = a1a; f < m; f++) kH.qV.w1(a1o[f], ht[f], hu[f], hv[f]);
			a1a += a1q, a1Z++
		} else ++a1b >= a1q && (a1Z++, a1b = 0)
	}
	this.a1e = 0, this.aN = function() {
		a1d = a1c = a1b = a1a = a1Z = 0
	}, this.aW = function() {
		var yb;
		g8.aW(), ch.a1f() < 1.7 ? 0 === iT ? aO.aP >= aP && (yb = aO.a1i / ch.a1f(), aP += yb * Math.floor(1 + (aO.aP - aP) / yb), 2 === aY || cp.fx || !ch.a1L ? xO() : (a1j(), qZ.vV()), iT++) : a1k() : function() {
			var yb;
			if (aO.aP >= aP)
				if (2 === aY || cp.fx || !ch.a1L) xO(), aP = aO.aP;
				else {
					for (yb = aO.a1i / ch.a1f(), 16 < (aO.aP - aP) / yb && (aP = aO.aP - 16 * yb); aO.aP >= aP && 2 !== aY;) aP += yb, a1j();
					qZ.vV()
				} a1k()
		}(), xT(), aO.an && (aO.an = !1, cT())
	}, this.vy = function() {
		a1Z !== qi.tx.u8.length && ci.kc("Replay file larger than expected.")
	}
}

function a1r() {
	this.yo = function(r) {
		r.fill(0)
	}, this.a1s = function(r) {
		for (var m = r.length, f = 0; f < m; f++) r[f] = []
	}, this.a1t = function(hD, ee) {
		for (var a1u = iY.a0E, f = 0; f < 3; f++) a1u[f] = ee * hD[f];
		return a1u
	}, this.a1v = function(hD, a1u, a1w) {
		for (var dY = 0, f = 0; f < 3; f++) dY += Math.abs(hD[f] - a1u[f]);
		return a1w <= dY
	}, this.a1x = function(hD, a1y) {
		for (var f = 0; f < 3; f++) hD[f] = yP.hr(hD[f] + a1y, 0, 255);
		return hD
	}, this.a1z = function(r, zc = 0, zd = r.length - 1) {
		for (var a20 = 0, f = zc; f <= zd; f++) a20 += r[f];
		return a20
	}, this.a21 = function(r, a22) {
		for (var f, a23, m = r.length, a24 = [], g = m - 1; 0 <= g; g--) {
			for (f = a23 = 0; f < m; f++) a22(r[f]) < a22(r[a23]) && (a23 = f);
			m--, a24.push(r[a23]), r[a23] = r[m], r.pop()
		}
		return a24
	}
}

function a25() {
	var b8, b9, aQ, aC, a26, mU, mV, a27, player, r;

	function a2C() {
		return function() {
			var f;
			for (f = 0; f < 8; f++)
				if (b8 = a1(aQ * a6.random(), a6.value(100)), b9 = a1(aC * a6.random(), a6.value(100)), a2J()) return 1;
			return
		}() || function() {
			var bB, bC, g, lk, u, qB;
			for (bB = a1(aQ * a6.random(), a6.value(100)), bC = a1(aC * a6.random(), a6.value(100)), g = 40; 1 <= g; g--)
				for (lk = aC - g; 0 <= lk; lk -= 40)
					for (b9 = (lk + bC) % aC, u = 40; 1 <= u; u--)
						for (qB = aQ - u; 0 <= qB; qB -= 40)
							if (b8 = (qB + bB) % aQ, a2J()) return 1;
			return
		}()
	}

	function a2J() {
		for (var s, a2L, gap = a1(a26 - a27, 2), mM = mV + b9 * a26 + gap, mW = mU + b8 * a26 + gap, a2K = mM + a27 - 1; mM <= a2K; a2K--)
			for (a2L = mW + a27 - 1; mW <= a2L; a2L--)
				if (s = bh.sO(a2L, a2K), !bh.c2(s) || bh.io(s)) return;
		return 1
	}

	function a2D(qB, lk) {
		a28(), a2M(qB - 2, lk - 2)
	}

	function a28() {
		oO[player] = 0, im[player] = 0, bx[player] = z3[player] = 0, be[player] = [], bn[player] = [], bt[player] = [], bu[player] = [], bY[player] = ba[player] = bb[player] = bc[player] = 0
	}

	function a2M(qB, lk) {
		var s, f, a2N, a2O;
		for (oO[player] = 1, im[player] = player < j3 ? qI : mX[qd.ik[player - j3]], bY[player] = qB + 10, ba[player] = lk + 10, bc[player] = bb[player] = 0, a2N = qB; a2N < qB + 4; a2N++)
			for (a2O = lk; a2O < lk + 4; a2O++)(qB < a2N && a2N < qB + 3 || lk < a2O && a2O < lk + 3) && (s = bh.sO(a2N, a2O), bh.c2(s)) && (bY[player] = a2N < bY[player] ? a2N : bY[player], bb[player] = a2N > bb[player] ? a2N : bb[player], ba[
				player] = a2O < ba[player] ? a2O : ba[player], bc[player] = a2O > bc[player] ? a2O : bc[player], r[bx[player]] = s, bx[player]++, bh.bv(s, player));
		for (z3[player] = bx[player], f = bx[player] - 1; 0 <= f; f--) bh.sQ(r[f], player) ? (bh.c7(r[f], player), bn[player].push(r[f])) : bh.mO(r[f]) ? (bh.c7(r[f], player), bt[player].push(r[f])) : bh.sP(r[f]) && (bh.c7(r[f], player), bu[player]
			.push(r[f]))
	}

	function a2I(qB, lk) {
		for (var s, a2L, a2K = lk; lk - 6 < a2K; a2K--)
			for (a2L = qB; qB - 6 < a2L; a2L--)
				if (s = bh.sO(a2L, a2K), bh.io(s)) return;
		return 1
	}
	this.aN = function() {
		var f, qB, lk;
		if (r = new Array(12), a27 = 6, a26 = 10, aQ = a1(ab.bX, a26), aC = a1(ab.ea, a26), mU = a1(ab.bX - a26 * aQ, 2), mV = a1(ab.ea - a26 * aC, 2), jt)
			for (f = 0; f < j3; f++) player = f, a28(), oO[player] = 1;
		if (jx.jy && jx.ac.a29) {
			for (player = 0; player < cK; player++)
				if (1 !== oO[player]) {
					if (player < qE) {
						if (function() {
								var qB = jx.ac.a29[player] + 1,
									lk = jx.ac.a2H[player] + 1;
								if (3 < qB && qB < ab.bX - 5 && 3 < lk && lk < ab.ea - 5 && bh.c2(bh.sO(qB, lk)) && a2I(qB + 3, lk + 3)) return a2D(qB + 1, lk + 1), 1;
								return
							}()) continue;
						if (a2C()) {
							qB = mU + b8 * a26 + a1(a26, 2), lk = mV + b9 * a26 + a1(a26, 2), a2D(qB, lk);
							continue
						}
					}
					a28()
				}
		} else ! function() {
			var qB, lk;
			for (player = 0; player < cK; player++) 1 !== oO[player] && (player < qE && a2C() ? (qB = mU + b8 * a26 + a1(a26, 2), lk = mV + b9 * a26 + a1(a26, 2), a2D(qB, lk)) : a28())
		}();
		kP.kQ[7] = bx[kY], kP.kQ[8] = im[kY]
	}, this.sx = function(cA, a2P, a2Q) {
		var f, qB, lk, s, b8, b9;
		for (player = cA, f = 0; f < 20; f++)
			for (qB = a2P + f; a2P - f <= qB; qB--)
				for (lk = a2Q + f; a2Q - f <= lk; lk--)
					if ((qB === a2P + f || qB === a2P - f || lk === a2Q + f || lk === a2Q - f) && 3 < qB && qB < ab.bX - 5 && 3 < lk && lk < ab.ea - 5 && bh.c2(bh.sO(qB, lk)) && a2I(qB + 3, lk + 3)) {
						if (0 < bx[player]) {
							for (b9 = b8 = s = void 0, b8 = bb[player]; b8 >= bY[player]; b8--)
								for (b9 = bc[player]; b9 >= ba[player]; b9--) s = 4 * (b9 * ab.bX + b8), bh.c0(player, s) && (bh.sU(s), bx[player]--);
							a28()
						}
						return a2M(qB - 1, lk - 1), !0
					} return !1
	}, this.sy = function(cA) {
		player = cA, a2C() ? a2D(mU + b8 * a26 + a1(a26, 2), mV + b9 * a26 + a1(a26, 2)) : a28()
	}
}

function a2S() {
	this.wQ = new Int16Array(4), this.a2T = new Int16Array(4), this.aN = function() {
		var f;
		for (this.wQ[0] = -ab.bX, this.wQ[1] = 1, this.wQ[2] = ab.bX, this.wQ[3] = -1, f = 0; f < 4; f++) this.a2T[f] = 4 * this.wQ[f]
	}, this.a2U = function(a2V, a2W) {
		var eW = this.kj(a2W) - this.kj(a2V),
			a2W = this.kk(a2W) - this.kk(a2V),
			a2V = eW >>> 31 << 1;
		return 5 + a2V + (1 - a2V) * (1 - (a2W >>> 31 << 1)) * (Math.abs(eW) - Math.abs(a2W) >>> 31) & 3
	}, this.a2Y = function(a2V, a2W, dh) {
		return dh % 2 == 0 ? dh + (1 - dh) * (1 - (this.kj(a2W) - this.kj(a2V) >>> 31 << 1)) + 4 & 3 : dh + (2 - dh) * (1 - (this.kk(a2W) - this.kk(a2V) >>> 31 << 1)) + 4 & 3
	}, this.a2Z = function(s, bA) {
		for (var a2W, a2a, a2c = bt[s], m = a2c.length, aQ = ab.bX, a2d = this.kj(bA), a2e = this.kk(bA), a2f = a2c[0] >> 2, min = this.a2g(a2d, a2e, a2f), f = 1; f < m; f++)(a2a = (a2a = a2d - (a2W = a2c[f] >> 2) % aQ) * a2a + (a2a = a2e - ~~((
			.5 + a2W) / aQ)) * a2a) < min && (min = a2a, a2f = a2W);
		return a2f
	}, this.a2h = function(player, bO) {
		return !bh.bi(bO) && player === bh.bk(bO)
	}, this.a2g = function(pl, pn, bA) {
		return (pl -= this.kj(bA)) * pl + (pn -= this.kk(bA)) * pn
	}, this.zg = function(e7, eA, iI) {
		e7 = this.a2i(e7) - this.a2j(iI), eA = this.a2k(eA) - this.a2l(iI);
		return Math.sqrt(e7 * e7 + eA * eA)
	}, this.zi = function(a2V, a2W) {
		var bB = this.kj(a2V) - this.kj(a2W),
			a2V = this.kk(a2V) - this.kk(a2W);
		return Math.sqrt(bB * bB + a2V * a2V)
	}, this.a2m = function(s) {
		return s < j3 && 0 !== oO[s] && 2 !== kW[s]
	}, this.bQ = function() {
		return 0 !== oO[kY] && 2 !== kW[kY]
	}, this.a2n = function(s, sr) {
		return yP.hp(sr * im[s], 1e3)
	}, this.a2i = function(e7) {
		return 16 * (e7 + ds) / cW
	}, this.a2k = function(eA) {
		return 16 * (eA + dt) / cW
	}, this.pm = function(e7) {
		return Math.floor((e7 + ds) / cW)
	}, this.po = function(eA) {
		return Math.floor((eA + dt) / cW)
	}, this.pr = function(pl, pn) {
		return 1 <= pl && 1 <= pn && pl < ab.bX - 1 && pn < ab.ea - 1
	}, this.kj = function(bA) {
		return bA % ab.bX
	}, this.kk = function(bA) {
		return yP.hp(bA, ab.bX)
	}, this.pp = function(pl, pn) {
		return pn * ab.bX + pl
	}, this.zV = function(bA) {
		var pl = this.kj(bA),
			bA = this.kk(bA);
		return 0 < pl && pl < ab.bX - 1 && 0 < bA && bA < ab.ea - 1
	}, this.pq = function(bA) {
		return bA << 2
	}, this.a2o = function(bA) {
		return ab.bX * this.kk(bA) * 256 + (this.kj(bA) << 4)
	}, this.y8 = function(bA) {
		return this.a2o(bA) + 8 + (ab.bX << 7)
	}, this.wM = function(iI) {
		return ab.bX * (this.a2l(iI) >> 4) + (this.a2j(iI) >> 4)
	}, this.y9 = function(iI) {
		iI = this.wM(iI);
		return (this.kj(iI) >> 5) + bR.mB.a2p * (this.kk(iI) >> 5)
	}, this.a2j = function(iI) {
		return iI % (ab.bX << 4)
	}, this.a2l = function(iI) {
		return yP.hp(iI, ab.bX << 4)
	}, this.a2q = function(bA, dh) {
		return bA + this.wQ[dh]
	}, this.a2r = function(bO, dh) {
		return bO + this.a2T[dh]
	}
}

function a2s() {
	this.pa = new a2t, this.kI = new xX, this.wC = new a2u, this.qV = new w0, this.wR = new a2v
}

function a2w(ex, a2x, a2y, a2z, a30) {
	var ls, select, a31, a32, n9 = a30 || [],
		rZ = !1;

	function nG() {
		rZ && (a31.innerHTML = "", ls.removeChild(a31), rZ = !1)
	}
	this.aN = function(ey) {
		var a33 = document.createElement("label");
		a33.innerText = ex, a33.style.color = av.b0, a33.style.marginLeft = "0.5em", a33.style.display = "block", a33.style.margin = "0.5em 0", a33.style.width = "max-content", (ls = document.createElement("div")).style.position = "relative", ls
			.style.display = "inline-block", ls.style.marginLeft = "1em", (select = document.createElement("button")).innerText = n9[a2z], select.style.position = "relative", select.style.border = "none", select.style.padding = "0 0.5em", select
			.style.color = av.b0, select.style.font = "inherit", select.style.backgroundColor = av.a34, select.onclick = cE => {
				(rZ ? nG : function() {
					var f, a36;
					if (!rZ) {
						for (f = 0; f < n9.length; f++)(a36 = document.createElement("div")).innerText = n9[f], a36.style.textAlign = "center", a31.appendChild(a36);
						ls.appendChild(a31), rZ = !0
					}
				})(), select.rb(), cE.preventDefault()
			}, select.rc = nG, (a31 = document.createElement("div")).style.position = "absolute", a31.style.left = "50%", a31.style.transform = "translateX(-50%)", a31.style.zIndex = "100", a31.style.backgroundColor = av.ra, a31.style.color = av
			.b0, a31.style.width = "max-content", a31.style.padding = "0.5em", a31.style.fontSize = "inherit", a31.style.userSelect = "none", a31.onmousedown = function(cE) {
				for (var f = 0; f < a31.a35.length; f++)
					if (cE.target === a31.a35[f]) {
						select.innerText = n9[f], a2y(f);
						break
					} cE.stopPropagation()
			}, a32 = new rW(a2x), this.resize(), ls.appendChild(select), a33.appendChild(ls), a32.aN(a33), ey.appendChild(a33)
	}, this.resize = function() {
		var ip = bG.bH.rd(.5) * aS / fP * .04;
		select.style.height = ip.toFixed(1) + "px", select.style.outline = (.06 * ip).toFixed(1) + "px solid " + av.b0, a31.style.top = (1.06 * ip).toFixed(1) + "px", a31.style.outline = (.06 * ip).toFixed(1) + "px solid " + av.b0, a32.resize()
	}, this.a37 = function(a38) {
		n9.push(a38)
	}
}

function a2u() {
	this.pd = function(player, bA) {
		bG.kI.a39(0) && bG.kI.a3A(player) && bP.zV(bA) && (qi.tx.a3B(0, player, bA), qL.ah(player, bA))
	}, this.pg = function(player, sr, cA) {
		bG.kI.a39(1) && bG.kI.a3A(player) && bG.kI.a3C(player, cA) && bG.kI.a3D(player, sr, 12, qJ) && cG.oE(player) && bG.kI.a3E(player, cA) && iX(player) && (qi.tx.a3B(1, player, sr, iY.iZ[0]), bG.kI.a3F(player), kP.sq(player, sr), ic(player))
	}, this.wD = function(player, sr, ss) {
		bG.kI.a39(1) && bG.kI.a3A(player) && ar && bG.kI.a3C(player, ss) && bG.kI.a3G(player, ss) && bG.kI.a3H(player, bG.kI.a2n(player, sr), ss) && (qi.tx.a3B(2, player, sr, ss), qa.pb(player, ss))
	}, this.pj = function(player, sr, bA) {
		bG.kI.a39(1) && bG.kI.a3A(player) && bP.zV(bA) && bR.bS.wB !== bR.bS.y0 && bR.bS.wA[player] !== bR.bS.y1 && 0 !== bt[player].length && bG.kI.a3D(player, sr, 32, 16) && bR.tT.zW(player, bA) && (qi.tx.a3B(3, player, sr, bA), bG.kI.a3F(
			player), bR.bS.y6(player))
	}, this.pv = function(player, zZ, bA) {
		bG.kI.a39(1) && bG.kI.a3A(player) && bP.zV(bA) && bR.pu.za(player, zZ) && bR.tT.zb(bA) && (qi.tx.a3B(4, player, zZ, bA), bG.kI.a3I(player, 8), bR.bS.pv())
	}, this.wE = function(player, cA) {
		bG.kI.a39(1) && bG.kI.a3A(player) && (cA = Math.min(cA, cK), cG.j1(player, cA)) && (qi.tx.a3B(5, player, cA), cG.o4(player, cA))
	}, this.wF = function(player, kt) {
		bG.kI.a39(2) && bG.kI.a3A(player) && (kt = Math.min(kt, ge.a3J - 1), qi.tx.a3B(6, player, kt), ce.lD(player, 0, kt))
	}, this.rH = function(player, a3K) {
		bG.kI.a39(1) && bG.kI.a3A(player) && (qi.tx.a3B(7, player, a3K), cl.rU(player, a3K))
	}, this.rk = function(player) {
		(bG.kI.a39(0) || bG.kI.a39(1)) && bG.kI.a3A(player) && qj.rk(player) && qi.tx.a3B(8, player)
	}, this.rp = function(player) {
		qj.rp(player), qi.tx.a3B(9, player)
	}
}

function a3L() {
	var username, a3M;

	function a3Y() {
		var a1F;
		return 0 === username.indexOf("vote ") && 2 === (a1F = username.split(" ")).length ? (ga.a3N = a1F[1], a3e(), fL.bS.nZ(0, 7) && fL.hN.a19(0), ub.wg(3252), 1) : void 0
	}

	function a3e() {
		username = a3S(), fm.get().value = username, fm.g1(!0)
	}

	function a3X() {
		var max, a3f;
		if (0 === username.indexOf("account ")) return 2 !== (a3f = username.split(" ")).length || (max = Math.floor(Math.pow(2, 48)), (a3f = parseInt(t9.z(a3f[1]))) <= 0) || max <= a3f ? (a3e(), ub.wg(3266)) : a3g(a3f) ? (a3e(), ub.wg(3231)) : (
		a3e(), 5 <= ja ? ub.wg(3232) : (ub.wg(3265), uR.fa = !0, uR.iT = -1)), 1
	}

	function a3b() {
		return void 0 !== username && t9.h(username)
	}

	function a3T() {
		if (a3b()) return fm.g1(!0), 1;
		fm.g1(!1)
	}
	this.a3N = "", this.a3O = -7e3, this.aN = function(a3P) {
		ja < 5 || (a3M && aO.aP > a3M + 144e5 ? om.setState(14) : a3M = aO.aP), fT.setState(0), hJ.nh(), fm.lo(!0), oX.aN(), tf.nh(), a3P && qq.a3R.show() ? setTimeout(function() {
			0 === fT.fp() && qv(12)
		}, 15e3) : qv(12), void 0 === username && (username = a3S(), fm.get().value = username, a3T())
	}, this.gY = function() {
		qv(13), fm.lo(!1)
	}, this.a3U = function(iT) {
		return 0 === iT ? hJ.aQ : 1 === iT ? Math.floor(.3 * hJ.aC) : 2 === iT ? fm.get().style.font : username
	}, this.lm = function() {
		var a3V;
		username = fm.get().value.trim(), a3T(), "password" !== username && "account" !== username || (a3V = t9.x(a3W().toString()), username = "account " + a3V, fm.get().value = username)
	}, this.eB = function(b8, b9) {
		aO.g5(), 1 === hJ.fk(b8, b9, 1, 1) ? a3X() || a3Y() || (qv(10), a3T() ? (this.gY(), a3Z(username), mn.aN()) : ub.wg(4214)) : 0 === hJ.fk(b8, b9, 0, 1) && this.uW()
	}, this.uW = function() {
		a3X() || a3Y() || (qv(10), a3b() && 5 <= username.length && 40 === username.charCodeAt(0) && 40 === username.charCodeAt(1) && 41 === username.charCodeAt(3) && 41 === username.charCodeAt(4) ? oY.a3c(Math.abs(username.charCodeAt(2) + 5)) :
			oY.a3c(eC.a3d), a3T() ? gd.jL() ? (this.gY(), a3Z(username), jx.fd(), oY.aN()) : ub.wg(3228) : ub.wg(4214))
	}, this.a3h = function() {
		return !tf.uY() && !ob.fa && !fl.fa
	}, this.ao = function() {
		var o, eQ;
		this.a3h() && (ag.imageSmoothingEnabled = !0, o = gd.jK("territorial.io"), eQ = 1.1 * hJ.aQ / o.width, ag.setTransform(eQ, 0, 0, eQ, Math.floor((eG - eQ * o.width) / 2), hJ.b9 - eQ * o.height - .72 * hJ.aC), ag.drawImage(o, 0, 0), ag
			.setTransform(1, 0, 0, 1, 0, 0), hJ.a3j())
	}, this.a3k = function() {
		return username
	}
}

function a3l() {
	var a3m, a3n, a3o;

	function a3s(f) {
		var button = hJ.pA[f],
			b8 = button.b8,
			b9 = button.b9,
			aQ = button.aQ,
			aC = button.aC;
		ag.fillStyle = button.a3r, ag.fillRect(b8, b9, aQ, aC), f === a3m && (ag.fillStyle = a3o, ag.fillRect(b8, b9, aQ, aC)), ag.lineWidth = ln, ag.strokeStyle = a3n, ag.strokeRect(b8, b9, aQ, aC),
			function(button) {
				var b8 = button.b8,
					b9 = button.b9,
					aQ = button.aQ,
					aC = button.aC;
				ag.textAlign = b1, ag.textBaseline = b2, ag.font = button.font, ag.fillStyle = a3n, ag.fillText(button.aF, Math.floor(b8 + aQ / 2), Math.floor(b9 + aC / 2 + .1 * button.fontSize))
			}(button)
	}
	this.aQ = 0, this.aC = 0, this.b9 = 0, this.gap = 0, this.aN = function() {
		a3m = -1, a3n = av.b0, a3o = "rgba(255,255,255,0.16)", this.pA = new Array(7), this.aC = Math.floor((aR ? .123 : .093) * aS), this.aQ = Math.floor((aR ? 3.96 : 4.2) * this.aC), this.gap = Math.floor(.025 * this.aQ);
		var a3p = Math.floor(.26 * this.aC),
			a3q = aT + a3p + aU;
		this.pA[0] = {
			b8: 0,
			b9: 0,
			aQ: Math.floor(.6 * this.aQ - this.gap / 2),
			aC: this.aC,
			aF: "Multiplayer",
			font: a3q,
			a3r: "rgba(22,88,22,0.8)",
			fontSize: a3p
		}, a3p = Math.floor(.18 * this.aC), this.pA[1] = {
			b8: 0,
			b9: 0,
			aQ: this.aQ - this.pA[0].aQ - this.gap,
			aC: this.aC,
			aF: "Single Player",
			font: aT + a3p + aU,
			a3r: "rgba(22,88,88,0.8)",
			fontSize: a3p
		}, this.pA[2] = {
			b8: 0,
			b9: 0,
			aQ: this.aQ,
			aC: Math.floor(.3 * this.aC),
			aF: "",
			font: this.pA[1].font,
			a3r: "rgba(100,0,0,0.8)",
			fontSize: this.pA[1].fontSize
		}, this.pA[3] = {
			b8: 0,
			b9: 0,
			aQ: this.aQ,
			aC: this.aC,
			aF: "Back",
			font: this.pA[0].font,
			a3r: "rgba(0,0,0,0.8)",
			fontSize: this.pA[0].fontSize
		}, this.pA[4] = {
			b8: 0,
			b9: 0,
			aQ: this.aQ,
			aC: Math.floor(.3 * this.aC),
			aF: "The game was updated!",
			font: this.pA[1].font,
			a3r: "rgba(100,0,0,0.8)",
			fontSize: this.pA[1].fontSize
		}, this.pA[5] = {
			b8: 0,
			b9: 0,
			aQ: this.pA[0].aQ,
			aC: Math.floor(.8 * this.aC),
			aF: "Reload",
			font: this.pA[0].font,
			a3r: "rgba(0,100,0,0.8)",
			fontSize: this.pA[0].fontSize
		}, this.pA[6] = {
			b8: 0,
			b9: 0,
			aQ: this.pA[1].aQ,
			aC: this.pA[5].aC,
			aF: "Back",
			font: this.pA[0].font,
			a3r: "rgba(0,0,0,0.8)",
			fontSize: this.pA[0].fontSize
		}, this.nh()
	}, this.nh = function() {
		this.b9 = Math.floor(.54 * eH), this.pA[0].b8 = Math.floor(.5 * eG - .5 * this.aQ), this.pA[1].b8 = this.pA[0].b8 + this.pA[0].aQ + this.gap, this.pA[2].b8 = this.pA[3].b8 = this.pA[0].b8, this.pA[4].b8 = this.pA[5].b8 = this.pA[0].b8,
			this.pA[6].b8 = this.pA[1].b8, this.pA[0].b9 = Math.floor(.54 * eH), this.pA[1].b9 = this.pA[0].b9, this.pA[2].b9 = Math.floor((eH - this.pA[2].aC - this.pA[3].aC - this.gap) / 2), this.pA[3].b9 = this.pA[2].b9 + this.pA[2].aC + this
			.gap, this.pA[4].b9 = Math.floor((eH - this.pA[4].aC - this.pA[5].aC - this.gap) / 2), this.pA[5].b9 = this.pA[6].b9 = this.pA[4].b9 + this.pA[4].aC + this.gap
	}, this.a3j = function() {
		a3s(0), a3s(1)
	}, this.a0k = function() {
		a3s(2), a3s(3)
	}, this.a3t = function() {
		a3s(4), a3s(5), a3s(6)
	}, this.eK = function(b8, b9, qx) {
		var f = -1;
		return 0 === fT.fp() ? f = this.fk(b8, b9, 0, 2) : 3 === fT.fp() ? f = this.fk(b8, b9, 3, 1) : 5 === fT.fp() && (f = this.fk(b8, b9, 5, 2)), a3m !== f && (a3m = f, qx) && (aO.an = !0), -1 !== f && (fc.fd(), !0)
	}, this.fk = function(b8, b9, dn, ip) {
		for (var f = dn; f < dn + ip; f++)
			if (b8 >= this.pA[f].b8 && b9 >= this.pA[f].b9 && b8 <= this.pA[f].b8 + this.pA[f].aQ && b9 <= this.pA[f].b9 + this.pA[f].aC) return f;
		return -1
	}
}

function a3v() {
	this.a3d = 0;
	var a3m = -1,
		a3w = !1,
		a3x = [],
		a3y = 0;

	function fk(b8, b9, a4F, f) {
		return 0 === f ? b8 >= a4F.hL && (0 === f || b9 >= a4F.hM) && b9 <= a4F.hM + a4F.rG : (b9 -= f * (a4F.rG - ln), b8 >= a4F.nC && b9 >= a4F.hM && b9 <= a4F.hM + a4F.rG)
	}

	function a4G() {
		var d0 = Math.floor((aR ? .145 : .09) * aS),
			d1 = Math.floor(2.25 * d0),
			gap = Math.floor(.065 * (aR ? .53 : .36) * aS),
			nC = eV - d1 - gap;
		return {
			hL: eV - d0 - gap,
			hM: gs,
			d0: d0,
			rG: Math.floor(.35 * (1 + .35 * aR) * d0),
			nC: nC,
			d1: d1,
			eU: gap
		}
	}

	function a4K(b8, b9, aQ, aC, a4, lF, u, a4L, i) {
		var fontSize = (i === a3x[0][0].name ? .65 : .5) * aC,
			font = bG.bH.a02(fontSize, 1),
			font = aZ.measureText(i, font);
		.92 * aQ < font && (fontSize *= .92 * aQ / font), ag.font = bG.bH.a02(fontSize, 1), a4L && (a4 += 80, lF += 80, u += 80), ag.fillStyle = "rgba(" + a4 + "," + lF + "," + u + ",0.6)", ag.fillRect(b8, b9, aQ, aC), ag.fillStyle = av.b0, ag
			.fillRect(b8, b9, aQ, ln), ag.fillRect(b8, b9 + aC - ln, aQ, ln), ag.fillRect(b8, b9, ln, aC), ag.fillRect(b8 + aQ - ln, b9, ln, aC), ag.fillText(i, Math.floor(b8 + aQ / 2), Math.floor(b9 + aC / 2 + .1 * fontSize))
	}
	this.eD = null, this.a3z = new Uint8Array(4), this.kF = function() {
		return jZ ? 4 : aR ? 2 : 1
	}, this.aN = function() {
		var a43;
		this.a40(), a3x = [new Array(6), new Array(10), new Array(7)], this.a3z[0] = 10, this.a3z[1] = 5, this.a3z[2] = 2, this.a3z[3] = 1, a3x[0][0] = {
			name: "More",
			id: 0,
			a4: 140,
			lF: 120,
			u: 0
		}, a3x[0][1] = {
			name: "Lobby 1",
			id: 1,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[0][2] = {
			name: "Settings",
			id: 2,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[0][3] = {
			name: "More Information",
			id: 3,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[0][4] = {
			name: "Replay",
			id: 4,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[0][5] = {
			name: a41,
			id: 5,
			a4: 90,
			lF: 0,
			u: 0
		}, a3x[0].push({
			name: "FX Client v" + fx_version + " " + fx_update,
			id: 20,
			a4: 0,
			lF: 0,
			u: 70
		}), a3x[1][0] = a3x[0][0], a3x[1][1] = {
			name: "Hide Usernames",
			id: 1,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[1][2] = {
			name: "Hide Links",
			id: 2,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[1][3] = {
			name: "Hide Zoom Buttons",
			id: 3,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[1][4] = {
			name: "Reverse Name/Balance",
			id: 4,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[1][5] = {
			name: "Resolution",
			id: 5,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[1][6] = {
			name: "Country Minimum Font Size",
			id: 6,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[1][7] = {
			name: "Leaderboard Refresh Rate",
			id: 7,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[1][8] = {
			name: "Reset Settings",
			id: 8,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[1][9] = {
			name: "Back",
			id: 9,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[2][0] = a3x[0][0], a3x[2][1] = {
			name: "Tutorial",
			id: 1,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[2][2] = {
			name: "Player List",
			id: 2,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[2][3] = {
			name: "Clan List",
			id: 3,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[2][4] = {
			name: "Privacy Policy",
			id: 4,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[2][5] = {
			name: "Changelog",
			id: 13,
			a4: 0,
			lF: 0,
			u: 0
		}, a3x[2][6] = {
			name: "Terms of Service",
			id: 14,
			a4: 0,
			lF: 0,
			u: 0
		}, !jZ && ja < 5 && a3x[2].push({
			name: "Cookie Policy",
			id: 5,
			a4: 0,
			lF: 0,
			u: 0
		}), (jZ || 5 <= ja) && (jZ ? !a42.mustShowConsentButton || "0" !== a42.mustShowConsentButton && "1" !== a42.mustShowConsentButton || a3x[2].push({
			name: "Consent Form",
			id: 7,
			a4: 0,
			lF: 0,
			u: 0
		}) : "" !== (a43 = om.loadString(187)) && "1" !== a43 || a3x[2].push({
			name: "Consent Form",
			id: 7,
			a4: 0,
			lF: 0,
			u: 0
		})), 5 <= ja && a3x[2].push({
			name: "Force Restart Game",
			id: 12,
			a4: 0,
			lF: 0,
			u: 0
		}), a3x[2].push({
			name: "Back",
			id: 6,
			a4: 0,
			lF: 0,
			u: 0
		}), this.a44(), this.a45()
	}, this.a40 = function() {
		this.eD = {
			le: 0,
			a46: 0,
			eE: 0,
			vR: 1,
			x2: 2,
			a47: 4,
			a48: 2,
			a49: 2
		}
	}, this.a45 = function() {
		if (settings.hideAllLinks) jX.hv[0] = jX.hv[1] = !this.eD.a46;
		else jX.hv[0] = jX.hv[1] = true;
		jX.hv[2] = jX.hv[3] = jX.hv[4] = !this.eD.a46, a3x[1][1].lF = this.eD.le ? 130 : 0, a3x[1][2].lF = this.eD.a46 ? 130 : 0, a3x[1][3].lF = this.eD.eE ? 130 : 0, a3x[1][4].lF = this.eD.vR ? 130 : 0, this.a4A(5), this.a4A(6), this.a4A(7)
	}, this.a44 = function() {
		var a1F = a4B().split("");
		a1F.length < 14 ? this.a40() : (this.eD.le = parseInt(a1F[6]), this.eD.a46 = parseInt(a1F[7]), this.eD.eE = parseInt(a1F[8]), this.eD.vR = parseInt(a1F[9]), this.eD.x2 = parseInt(a1F[10]), this.eD.a47 = parseInt(a1F[11]), this.eD.a48 =
			parseInt(a1F[12]))
	}, this.a4C = function() {
		var i = tf.a8[2].ky.a4D();
		a4E((i += ~~this.eD.le) + ~~this.eD.a46 + ~~this.eD.eE + ~~this.eD.vR + ~~this.eD.x2 + ~~this.eD.a47 + ~~this.eD.a48 + "0")
	}, this.a4A = function(f) {
		5 === f ? a3x[1][f].name = "Resolution: " + bG.hZ.i5(100 * g8.x0(), 1) : 6 === f ? a3x[1][f].name = "Country Minimum Font Size: " + (this.eD.a47 < 4 ? 1 + this.eD.a47 : 2 * (this.eD.a47 - 1)) : 7 === f && (a3x[1][f].name =
			"Leaderboard Refresh Rate: " + bG.hZ.i5(100 / this.a3z[this.eD.a48], 1))
	}, this.eB = function(b8, b9) {
		var f, a4F, a4I;
		if (!(7 <= fT.fp())) {
			a4F = a4G();
			var gearIconX = a4F.hL - a4F.d0 / 2;
			if (b8 > gearIconX && b8 < (gearIconX + a4F.rG) && b9 > a4F.hM && b9 < (a4F.hM + a4F.rG)) return WindowManager.openWindow("settings");
			if (a3w) {
				for (f = 1; f < a3x[a3y].length; f++)
					if (fk(b8, b9, a4F, f)) return a4I = a3x[a3y][f], 0 === a3y ? 1 === a4I.id ? (eC.a3d = (eC.a3d + 1) % 4, a4I.name = (eC.a3d % 2 ? "Proxy " : "Lobby ") + (1 + (eC.a3d >> 1)), aO.an = !0) : 2 === a4I.id ? (a3y = 1, aO.an = !0) :
						3 === a4I.id ? (a3y = 2, aO.an = !0) : 4 === a4I.id ? ct.show() : 5 === a4I.id && (console.log("try showing ad:"), qq.qr.ok()) : 1 === a3y ? 1 === a4I.id ? (eC.eD.le = !eC.eD.le, a4I.lF = eC.eD.le ? 130 : 0, eC.a4C(),
							aO.an = !0) : 2 === a4I.id ? (eC.eD.a46 = !eC.eD.a46, eC.a45(), eC.a4C(), aO.an = !0) : 3 === a4I.id ? (eC.eD.eE = !eC.eD.eE, a4I.lF = eC.eD.eE ? 130 : 0, eC.a4C(), aO.an = !0) : 4 === a4I.id ? (eC.eD.vR = !eC.eD
							.vR, a4I.lF = eC.eD.vR ? 130 : 0, eC.a4C(), aO.an = !0) : 5 === a4I.id ? (eC.eD.x2++, eC.eD.x2 %= 8, eC.a4A(a4I.id), eC.a4C(), g8.ww(1), aO.an = !0) : 6 === a4I.id ? (eC.eD.a47++, eC.eD.a47 %= 10, eC.a4A(a4I.id),
							eC.a4C(), aO.an = !0) : 7 === a4I.id ? (eC.eD.a48++, eC.eD.a48 %= 4, eC.a4A(a4I.id), eC.a4C(), aO.an = !0) : 8 === a4I.id ? (eC.a40(), eC.a45(), eC.a4C(), g8.ww(1), aO.an = !0) : 9 === a4I.id && (a3y = 0, aO.an = !
							0) : 1 === a4I.id ? (fl.aN(a4J.eo, !0), fl.aN(a4J.eo, !1)) : 2 === a4I.id ? (fl.aN(a4J.ep, !0), fl.aN(a4J.ep, !1)) : 3 === a4I.id ? (fl.aN(a4J.eq, !0), fl.aN(a4J.eq, !1)) : 4 === a4I.id ? (fl.aN(a4J.en, !0), fl.aN(
							a4J.en, !1)) : 5 === a4I.id ? (fl.aN(a4J.em, !0), fl.aN(a4J.em, !1)) : 13 === a4I.id ? (fl.aN(a4J.ek, !0), fl.aN(a4J.ek, !1)) : 14 === a4I.id ? (fl.aN(a4J.el, !0), fl.aN(a4J.el, !1)) : 6 === a4I.id ? (a3y = 0, aO
							.an = !0) : 7 === a4I.id ? jZ ? window.webkit.messageHandlers.iosCommandA.postMessage("showConsentForm") : om.setState(7) : 12 === a4I.id && om.setState(14), !0;
				return a3w = !1, !(aO.an = !0)
			}
			return !!fk(b8, b9, a4F, 0) && (a3w = !(a3y = 0), aO.an = !0)
		}
	}, this.eK = function(b8, b9) {
		var f, a4F, a01, eJ;
		if (!(7 <= fT.fp())) {
			for (a4F = a4G(), a01 = a3m, eJ = a3w ? 0 === a3y ? a3x[a3y].length - 2 : a3x[a3y].length : 1, a3m = -1, f = 0; f < eJ; f++)
				if (fk(b8, b9, a4F, f)) {
					a3m = f;
					break
				} a01 !== a3m && (aO.an = !0)
		}
	}, this.ao = function() {
		var f, eJ, a4F;
		if (!(7 <= fT.fp()) && (a4F = a4G(), ag.textAlign = b1, ag.textBaseline = b2, a4K(a4F.hL, a4F.hM, a4F.d0, a4F.rG, a3x[a3y][0].a4, a3x[a3y][0].lF, a3x[a3y][0].u, 0 === a3m, a3x[a3y][0].name), ag.imageSmoothingEnabled = true, ag.drawImage(
				settingsGearIcon, a4F.hL - a4F.d0 / 2, a4F.hM, a4F.rG, a4F.rG), ag.imageSmoothingEnabled = false, ag.font = "bold " + Math.floor(a4F.rG * 0.4) + "px " + settings.fontName, (!a3w && ag.fillText("Win count: " + wins_counter,
				Math.floor(a4F.hL + a4F.d0 / 2), Math.floor((a4F.hM + a4F.rG / 2) * 2.1))), a3w))
			for (eJ = a3x[a3y].length, f = 1; f < eJ; f++) a4K(a4F.nC, a4F.hM + f * a4F.rG - f * ln, a4F.d1, a4F.rG, a3x[a3y][f].a4, a3x[a3y][f].lF, a3x[a3y][f].u, a3m === f, a3x[a3y][f].name)
	}
}

function zO() {
	function a4R(pR) {
		return pR < 0 ? 0 : 255 < pR ? 255 : Math.floor(pR)
	}
	this.aQ = 0, this.aC = 0, this.fa = !1, this.xj = 0, this.gap = 0, this.a4N = 0, this.tW = 0, this.a4O = 0, this.a4P = 0, this.a4Q = 0, this.colors = null, this.aN = function() {
		this.fa = !0, this.xj = 0, this.resize()
	}, this.resize = function() {
		this.fa && (eV < 1.4 * eY ? this.aQ = Math.floor((aR ? .94 : .43) * eV) : (this.aC = Math.floor((aR ? .88 : .43) * eY), this.aQ = Math.floor(1.4 * this.aC)), this.aC = this.aQ / 1.4, this.gap = this.aQ / 32, this.tW = Math.floor(.25 *
			this.aC), this.a4O = (this.aC - this.tW - 3 * this.gap) / 2, this.a4P = this.aQ - 3 * this.gap - this.a4O, this.a4Q = (this.aC - this.tW - 4 * this.gap) / 3)
	}, this.zP = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var i = a4B().split("");
		if (i.length < 6)
			for (var u = 2; 0 <= u; u--) this.colors[0][u] = a4R(256 * Math.random());
		else
			for (var f = 2; 0 <= f; f--) this.colors[0][f] = a4R(4 * (10 * parseInt(i[2 * f]) + parseInt(i[2 * f + 1])));
		this.a4S()
	}, this.a4T = function() {
		return [a1(this.colors[0][0], 4), a1(this.colors[0][1], 4), a1(this.colors[0][2], 4)]
	}, this.eF = function(eO, eP, deltaY) {
		var hL = (eG - this.aQ) / 2;
		eP -= (eH - this.aC) / 2 + this.tW, (eO -= hL) < 0 || eP < 0 || eO >= this.aQ || eP >= this.aC - this.tW || (hL = Math.floor(3 * eP / (this.aC - this.tW)), this.colors[this.a4N][hL] = a4R(this.colors[this.a4N][hL] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), aO.an = !0)
	}, this.eB = function(eO, eP) {
		this.xj = 0;
		var hL = (eG - this.aQ) / 2;
		return eP -= (eH - this.aC) / 2, (eO -= hL) < 0 || eP < 0 || eO >= this.aQ - 1 || eP >= this.aC - 1 || eO > this.aQ - (.4 * this.tW + 3 * this.gap) && eP < this.tW ? (this.fa = !1, 0 === fT.fp() && fm.lo(!0), !(aO.an = !0)) : eO < this
			.gap || eP < this.gap + this.tW || eO >= this.aQ || eP >= this.aC - this.gap || (eO < this.gap + this.a4O ? (eP < this.gap + this.tW + this.a4O && 0 !== this.a4N && (this.a4N = 0, aO.an = !0), !0) : eO < this.gap + this.a4O || (eO -=
				2 * this.gap + this.a4O, eP < this.gap + this.tW + this.a4Q ? (this.xj = 1, this.colors[this.a4N][0] = a4R(256 * eO / this.a4P), aO.an = !0) : eP < 2 * this.gap + this.tW + this.a4Q || (eP < 2 * this.gap + this.tW + 2 * this
					.a4Q ? (this.xj = 2, this.colors[this.a4N][1] = a4R(256 * eO / this.a4P), aO.an = !0) : !(eP >= 3 * this.gap + this.tW + 2 * this.a4Q) || (this.xj = 3, this.colors[this.a4N][2] = a4R(256 * eO / this.a4P), aO.an = !0))))
	}, this.a4S = function() {
		for (var u = 2; 0 <= u; u--) this.colors[0][u] = a4R(this.colors[0][u])
	}, this.a4D = function() {
		for (var y, i = "", f = 0; f < 3; f++)(y = a1(this.colors[0][f], 4)) < 10 && (i += "0"), i += y.toString();
		return i
	}, this.eK = function(eO) {
		0 !== this.xj && (eO -= 2 * this.gap + this.a4O + (eG - this.aQ) / 2, this.colors[this.a4N][this.xj - 1] = a4R(256 * eO / this.a4P), aO.an = !0)
	}, this.ue = function() {
		0 < this.xj && (this.xj = 0, this.a4S(), eC.a4C(), aO.an = !0)
	}, this.ao = function() {
		var hL = (eG - this.aQ) / 2,
			hM = (eH - this.aC) / 2;
		ag.setTransform(1, 0, 0, 1, hL, hM), ag.fillStyle = av.ax, ag.fillRect(0, this.tW, this.aQ, this.aC - this.tW), ag.fillStyle = av.a4U, ag.fillRect(0, 0, this.aQ, this.tW), ag.fillStyle = av.b0, ag.lineWidth = ln, ag.strokeStyle = av.b0,
			ag.strokeRect(-1, -1, this.aQ + 2, this.aC + 2), ag.fillRect(0, this.tW, this.aQ, ln), ag.font = aT + Math.floor(.31 * this.tW) + aU, ag.textBaseline = b2, ag.textAlign = b1, ag.fillText("Choose Your Nation's Color!", Math.floor((this
				.aQ - this.gap - .4 * this.tW) / 2), Math.floor(.55 * this.tW)), this.a4K(0), ag.lineWidth = ln, this.a4V(0), this.a4V(1), this.a4V(2), cp.hg(Math.floor(hL + this.aQ - .4 * this.tW - this.gap), Math.floor(hM + .3 * this.tW), Math
				.floor(.4 * this.tW)), ag.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a4K = function(f) {
		var a4 = this.colors[f][0],
			lF = this.colors[f][1],
			f = this.colors[f][2];
		ag.fillStyle = "rgb(" + a4 + "," + lF + "," + f + ")", ag.fillRect(this.gap, this.tW + this.gap, this.a4O, 2 * this.a4O + this.gap), ag.lineWidth = ln, ag.strokeStyle = av.b0, ag.strokeRect(this.gap, this.tW + this.gap, this.a4O, 2 * this
			.a4O + this.gap), ag.fillStyle = a4 + lF + f < 306 && lF < 150 ? av.b0 : av.az, ag.font = aT + Math.floor(.32 * this.a4Q) + aU, ag.textAlign = b1, ag.textBaseline = b2, ag.rotate(-Math.PI / 2), ag.fillText("National Color", Math
			.floor(-1.5 * this.gap - this.tW - this.a4O), Math.floor(this.gap + .5 * this.a4O)), ag.rotate(Math.PI / 2)
	}, this.a4V = function(f) {
		ag.fillStyle = "rgb(" + (0 === f ? 150 : 2 === f ? 30 : 0) + "," + (1 === f ? 130 : 2 === f ? 30 : 0) + "," + (2 === f ? 220 : 0) + ")", ag.fillRect(2 * this.gap + this.a4O, this.tW + this.gap + f * (this.gap + this.a4Q), Math.floor(this
				.colors[this.a4N][f] * this.a4P / 255), this.a4Q), ag.strokeStyle = av.b0, ag.strokeRect(2 * this.gap + this.a4O, this.tW + this.gap + f * (this.gap + this.a4Q), this.a4P, this.a4Q), ag.fillStyle = av.b0, ag.font = aT + Math
			.floor(.32 * this.a4Q) + aU, ag.textBaseline = b2, ag.textAlign = hX, ag.fillText((0 === f ? "Red: " : 1 === f ? "Green: " : "Blue: ") + this.colors[0][f].toString(), 3 * this.gap + this.a4O, Math.floor(this.tW + this.gap + f * (this
				.gap + this.a4Q) + .53 * this.a4Q))
	}
}

function a4W() {
	this.u4 = null, this.u5 = null, this.u6 = null, this.u7 = null, this.u9 = null, this.u8 = null;
	var a4X = 0;
	this.ty = null, this.we = "", this.aN = function(ty) {
		this.u4 = [], this.u5 = [], this.u6 = [], this.u7 = [], this.u9 = [0], this.u8 = [0], a4X = 0, this.ty = ty, this.we = ""
	}, this.a3B = function(id, ht, hu, hv) {
		fz || 2 === aY || (0 === this.u9[a4X] && (this.u8[a4X] ? (this.u9.push(1), this.u8.push(0), a4X++) : this.u9[a4X] = 1), this.u4.push(id), this.u5.push(ht), this.u6.push(void 0 === hu ? 0 : hu), this.u7.push(void 0 === hv ? 0 : hv), this
			.u8[a4X]++)
	}, this.aW = function() {
		0 === this.u9[a4X] ? this.u8[a4X]++ : (this.u9.push(0), this.u8.push(0), a4X++)
	}
}

function a4Y(ex, a2y, color, a4Z, a4a) {
	var button = document.createElement("button"),
		scale = 1;

	function a4b() {
		button.style.backgroundColor = color || av.a34
	}

	function a4c() {
		button.style.backgroundColor = a4Z || av.a4e
	}

	function a4d() {
		button.style.backgroundColor = a4a || av.ny
	}
	this.aN = function(ey) {
		button.style.position = "relative", button.innerText = ex, button.style.color = av.b0, button.style.fontSize = "inherit", button.style.wordBreak = "break-word", a4b(), button.onmouseover = a4c, button.onmouseout = a4b, button
			.onmousedown = a4d, button.onmouseup = a4c, button.onclick = () => {
				a4b(), a2y()
			}, this.resize(), ey.appendChild(button)
	}, this.a4f = function(m) {
		scale = m, this.resize()
	}, this.resize = function() {
		var height = bG.bH.rd(.5) * aS / fP * .09;
		button.style.height = (scale * height).toFixed(1) + "px", button.style.border = (.02 * height).toFixed(1) + "px solid " + av.b0
	}, this.a4g = function() {
		button.style.width = "100%"
	}, this.a4h = function() {
		button.style.flexGrow = "1", button.style.flexBasis = "0"
	}, this.a4i = function(a4j) {
		button.prepend(a4j)
	}
}

function a4k(lt) {
	var a4l = document.createElement("div");
	this.aN = function(ey) {
		var f;
		for (a4l.width = "100%", a4l.height = "auto", a4l.style.display = "flex", f = 0; f < lt.length; f++) lt[f].a4h(), lt[f].aN(a4l);
		this.resize(), ey.appendChild(a4l)
	}, this.resize = function() {
		var f, margin = bG.bH.rd(.5) * aS / fP * .3 * .04;
		for (a4l.style.margin = "0 " + margin.toFixed(1) + "px", a4l.style.gap = margin.toFixed(1) + "px", f = 0; f < lt.length; f++) lt[f].resize()
	}
}

function a4m() {
	this.aQ = 0, this.aC = 0, this.d0 = 0, this.d1 = 0, this.a4n = 0, this.a4o = 0, this.rG = 0, this.x5 = 0, this.hn = 0, this.xh = 0, this.a4p = 0, this.a4q = 0, this.aH = 0, this.iT = 0, this.a1F = ["Territory", "Balance", "Interest", "Numbers"],
		this.fa = !1, this.a4r = -1, this.a4s = !1, this.a4t = [0, 0], this.aN = function() {
			this.fa = !1, this.a4r = -1, this.a4s = !1, this.resize()
		}, this.resize = function() {
			this.aQ = eV < 1.369 * eY ? eV : 1.369 * eY;
			var bf = aR && eV < eY ? 1 : aR ? .8 : eV < eY ? .65 : .59;
			this.aQ = Math.floor(bf * this.aQ), this.aQ -= aR && eV < eY ? 2 * aq + 2 : 0, this.aC = Math.floor(this.aQ / 1.369), this.aH = Math.floor(this.aC / 150), this.aH = Math.max(this.aH, 1.5), this.d0 = Math.floor(1 + .02 * this.aQ), this
				.d1 = Math.floor(1 + .04 * this.aQ), this.rG = this.d1, this.x5 = Math.floor(1 + .075 * this.aQ), this.xh = Math.floor(1 + .1125 * this.aQ), this.a4p = Math.floor(this.aQ * (aR ? .03 : .029)), this.a4p = Math.max(this.a4p, 4), this
				.a4q = Math.floor(.035 * this.aQ), this.a4q = Math.max(this.a4q, 4), this.hn = this.aC - 2 * this.rG - this.x5 - this.xh, this.fa && this.a4u()
		}, this.eB = function(eO, eP) {
			var lk, qB;
			return !!this.fa && (qB = eO, lk = eP, eO -= a1(eG - this.aQ, 2), eP -= a1(eH - this.aC, 2), eO < 0 || eP < 0 || eO >= this.aQ || eP >= this.aC || eO >= this.aQ - this.xh && eP < this.xh ? 1 < cp.eB(qB, lk) || this.nG() : eP < this.xh ||
				(eP < this.aC - this.x5 ? (this.a4s = !0, this.a4r = (eO - 2 * this.d0 - this.a4n) / this.a4o, 3 !== this.iT && (aO.an = !0)) : (qB = (qB = Math.floor(eO / (this.aQ / this.a1F.length))) < 0 ? 0 : qB >= this.a1F.length ? this.a1F
					.length - 1 : qB) !== this.iT && (this.iT = qB, this.a4u(), aO.an = !0)), !0)
		}, this.g3 = function() {
			var a4v = Math.floor((this.a4t[0] + ds) / cW),
				a4w = Math.floor((this.a4t[1] + dt) / cW);
			a4v < 1 || a4w < 1 || a4v >= ab.bX - 1 || a4w >= ab.ea - 1 || console.log(a4v + " " + a4w)
		}, this.eK = function(eO, eP) {
			return this.a4t[0] = eO, this.a4t[1] = eP, !(!this.fa || !this.a4s || (eO -= a1(eG - this.aQ, 2), eP = this.a4r, this.a4r = (eO - 2 * this.d0 - this.a4n) / this.a4o, (0 <= this.a4r && this.a4r <= 1 || 0 <= eP && eP <= 1) && (aO.an = !0),
				0))
		}, this.fe = function() {
			this.a4s && (this.a4s = !1)
		}, this.fy = function() {
			this.fa ? this.nG() : this.show()
		}, this.show = function() {
			kP.sl < 2 || (this.fa = !0, this.a4u())
		}, this.nG = function() {
			this.fa = !1, this.a4r = -1, aO.an = !0
		}, this.a4u = function() {
			this.iT < 2 ? this.a4n = aZ.measureText(bG.hZ.ha(kP.max[this.iT]), this.a4p + aU) : 2 === this.iT && (this.a4n = aZ.measureText(bG.hZ.i5(6, 2), this.a4p + aU)), this.a4o = this.aQ - 2 * this.d0 - this.a4n - this.d1
		}, this.jV = function() {
			this.fa && this.a4u()
		}, this.ao = function() {
			this.fa && this.a4x()
		}, this.a4x = function() {
			var b8 = a1(eG - this.aQ, 2),
				b9 = a1(eH - this.aC, 2);
			ag.setTransform(1, 0, 0, 1, b8, b9), ag.fillStyle = av.ax, ag.fillRect(0, this.xh, this.aQ, this.aC - this.xh), this.a4y(), this.a4z(), ag.strokeRect(0, 0, this.aQ, this.aC), ag.textAlign = hY, ag.font = this.a4p + aU, 0 === this.iT ?
				this.a50(kP.p2, b8, b9) : 1 === this.iT ? this.a50(kP.sj, b8, b9) : 2 === this.iT ? this.a51(b8, b9) : 3 === this.iT && (this.a52(b8, b9), this.a53(b8, b9)), cp.hg(Math.floor(b8 + this.aQ - .725 * this.xh), Math.floor(b9 + .275 * this
					.xh), Math.floor(.45 * this.xh)), ag.setTransform(1, 0, 0, 1, 0, 0)
		}, this.a4y = function() {
			var f, cQ;
			for (ag.lineWidth = this.aH, ag.textBaseline = b2, ag.textAlign = b1, ag.strokeStyle = av.b0, ag.font = aT + this.a4q + aU, cQ = this.aQ / this.a1F.length, ag.fillStyle = av.hl, ag.fillRect(this.iT * cQ, this.aC - this.x5, cQ, this.x5),
				ag.fillStyle = av.b0, ag.fillRect(0, this.aC - this.x5 - .5 * this.aH, this.aQ, this.aH), f = 1; f <= 3; f++) ag.fillRect(f * cQ, this.aC - this.x5, this.aH, this.x5);
			for (f = this.a1F.length - 1; 0 <= f; f--) ag.fillText(this.a1F[f], (f + .5) * cQ, this.aC - .46 * this.x5)
		}, this.a4z = function() {
			ag.fillStyle = av.a54, ag.fillRect(0, 0, this.aQ, this.xh), ag.fillStyle = av.b0, ag.fillRect(0, this.xh - .5 * this.aH, this.aQ, this.aH), ag.font = aT + Math.floor(.39 * this.xh) + aU, ag.fillText("Statistics", Math.floor(this.aQ / 2),
				Math.floor(.55 * this.xh))
		}, this.a50 = function(r, b8, b9) {
			var bL = kP.max[this.iT],
				ee = (ag.setTransform(1, 0, 0, 1, b8 + 2 * this.d0 + this.a4n, b9 + this.rG + this.xh), ag.lineWidth = 2, this.hn / Math.sqrt(bL));
			ag.beginPath(), ag.moveTo(this.a4o, this.hn - ee * Math.sqrt(r[kP.sl - 1]));
			for (var f = kP.sl - 2; 0 <= f; f--) ag.lineTo(f * this.a4o / (kP.sl - 1), this.hn - ee * Math.sqrt(r[f]));
			ag.stroke();
			b8 = this.hg(r, ee, .5);
			b8 < .95 && ag.fillText(bG.hZ.ha(bL), -this.d0, 0), .05 < Math.abs(b8 - .5) && ag.fillText(bG.hZ.ha(Math.floor(bL / 4)), -this.d0, Math.floor(this.hn / 2)), .05 < b8 && ag.fillText("0", -this.d0, this.hn)
		}, this.a51 = function(b8, b9) {
			ag.setTransform(1, 0, 0, 1, b8 + 2 * this.d0 + this.a4n, b9 + this.rG + this.xh), ag.lineWidth = 2;
			var ee = this.hn / Math.max(kP.max[this.iT], 1);
			ag.beginPath(), ag.moveTo(this.a4o, this.hn - ee * kP.sk[kP.sl - 1]);
			for (var f = kP.sl - 2; 0 <= f; f--) ag.lineTo(f * this.a4o / (kP.sl - 1), this.hn - ee * kP.sk[f]);
			ag.stroke();
			b8 = this.hg(kP.sk, ee, 1), b9 = kP.max[this.iT] / 100;
			b8 < .95 && ag.fillText(bG.hZ.i5(b9, 2), -this.d0, 0), .05 < Math.abs(b8 - .5) && ag.fillText(bG.hZ.i5(b9 / 2, 2), -this.d0, Math.floor(this.hn / 2)), .05 < b8 && ag.fillText(bG.hZ.i5(0, 2), -this.d0, this.hn)
		}, this.a52 = function(b8, b9) {
			ag.setTransform(1, 0, 0, 1, b8 + .34 * this.aQ, b9 + 2 * this.rG + this.xh), ag.textAlign = hY;
			for (var a55 = this.aC - 4 * this.rG - this.x5 - this.xh, f = 7; 0 <= f; f--) ag.fillText(kP.sn[f], 0, f * a55 / 7);
			ag.setTransform(1, 0, 0, 1, b8 + .39 * this.aQ, b9 + 2 * this.rG + this.xh), ag.textAlign = hX;
			b8 = kP.kQ[1];
			for (ag.fillText(bG.hZ.i5(kP.kQ[0] / (10 * (b8 < 1 ? 1 : b8)), 1), 0, 0), f = 6; 1 <= f; f--) ag.fillText(kP.kQ[f].toString(), 0, f * a55 / 7);
			ag.fillText(bG.hZ.i5(100 * (1 - bx[kY] / kP.kQ[7]), 0), 0, a55)
		}, this.a53 = function(b8, b9) {
			ag.setTransform(1, 0, 0, 1, b8 + .79 * this.aQ, b9 + 2 * this.rG + this.xh), ag.textAlign = hY;
			var f, a55 = this.aC - 4 * this.rG - this.x5 - this.xh;
			for (ag.fillStyle = av.a56, f = 2; 0 <= f; f--) ag.fillText(kP.sn[f + 8], 0, f * a55 / 9);
			for (ag.fillStyle = av.a57, ag.fillText(kP.sn[11], 0, 3 * a55 / 9), ag.fillStyle = av.a58, f = 8; 4 <= f; f--) ag.fillText(kP.sn[f + 8], 0, f * a55 / 9);
			ag.fillStyle = av.a59, ag.fillText(kP.sn[17], 0, 9 * a55 / 9), ag.fillStyle = av.a56;
			var ki = bG.hZ.ha(kP.kQ[8] + kP.kQ[9] + kP.kQ[10] + kP.kQ[11]),
				a5A = ag.measureText(ki).width,
				b8 = (ag.setTransform(1, 0, 0, 1, b8 + .83 * this.aQ + a5A, b9 + 2 * this.rG + this.xh), ag.fillText(bG.hZ.ha(kP.kQ[8]), 0, 0), ag.fillText(bG.hZ.ha(kP.kQ[9]), 0, a55 / 9), ag.fillText(bG.hZ.ha(kP.kQ[10]), 0, 2 * a55 / 9), ag
					.fillStyle = av.a57, ag.fillText(ki, 0, 3 * a55 / 9), ag.fillStyle = av.a58, kP.kQ[13] - cG.oJ(kY)),
				a5A = (ag.fillText(bG.hZ.ha(kP.kQ[12]), 0, 4 * a55 / 9), ag.fillText(bG.hZ.ha(b8), 0, 5 * a55 / 9), ag.fillText(bG.hZ.ha(kP.kQ[14]), 0, 6 * a55 / 9), ag.fillText(bG.hZ.ha(kP.kQ[15]), 0, 7 * a55 / 9), ag.fillText(bG.hZ.ha(kP.kQ[16]),
					0, 8 * a55 / 9), kP.kQ[12] + b8 + kP.kQ[14] + kP.kQ[15] + kP.kQ[16] + kP.kQ[17]);
			ag.fillStyle = av.a59, ag.fillText(bG.hZ.ha(a5A), 0, a55), ag.fillStyle = av.b0
		}, this.hg = function(r, ee, nT) {
			var f, cE, ht;
			return this.a4r < 0 || 1 < this.a4r ? .25 : (f = this.a4r * (kP.sl - 1), ht = r[cE = Math.floor(f)], ht += (f - cE) * (r[cE < kP.sl - 1 ? cE + 1 : cE] - ht), ag.strokeStyle = av.nl, .04 < this.a4r && this.a5D(0, this.hn - ee * Math.pow(
					ht, nT), f * this.a4o / (kP.sl - 1), this.hn - ee * Math.pow(ht, nT)), .04 < ht / kP.max[this.iT] && this.a5D(f * this.a4o / (kP.sl - 1), this.hn, f * this.a4o / (kP.sl - 1), this.hn - ee * Math.pow(ht, nT)), ag.fillStyle = av
				.a5E, ag.beginPath(), ag.arc(f * this.a4o / (kP.sl - 1), this.hn - ee * Math.pow(ht, nT), Math.max(2, .014 * this.aC), 0, 2 * Math.PI), ag.fill(), r = this.a4r * aO.a1i, r = 0 === oO[kY] ? Math.floor(r * cr.a5F) : Math.floor(r *
					aO.lZ()), ag.fillStyle = av.b0, ag.fillText(1 === nT ? bG.hZ.i5(ht / 100, 2) : bG.hZ.ha(Math.floor(ht)), -this.d0, this.hn - ee * Math.pow(ht, nT)), ag.textAlign = b1, ag.fillText(cm.a5G(r), f * this.a4o / (kP.sl - 1), this
					.hn + this.a4p - (aR ? 2 : 0) - this.aH), ag.textAlign = hY, ee * Math.pow(ht, nT) / this.hn)
		}, this.a5D = function(hL, hM, nC, he) {
			ag.beginPath(), ag.moveTo(hL, hM), ag.lineTo(nC, he), ag.stroke()
		}
}

function a5H() {
	this.bS = new a0l, this.ks = new a5I, this.hN = new a5J, this.aN = function() {
		this.bS.aN()
	}
}

function a5K() {
	var d5, a5L, a5M, dP, a5N, a5O, a5P, a5Q, a5R, a5S, a5T, aL, a5U, a5V = !1,
		a5W = !1;

	function a5X(am) {
		aL = aO.aP, a5M = dP = a5L = 0, a5N = (a5U = 33) / am, d5 = 1 / (am / a5U / 4), a5O = (eG / 2 + ds) / cW, a5P = (eH / 2 + dt) / cW, a5Q = cW
	}

	function a5d(a5e) {
		Math.abs(Math.log(a5T / a5Q)) < .125 && (a5T = a5e * a5Q)
	}

	function a5c(hL, hM, nC, he) {
		a5R = (hL + nC + 1) / 2, a5S = (hM + he + 1) / 2;
		nC = eG / (nC - hL + 1), hL = eH / (he - hM + 1);
		a5T = .9 * (nC < hL ? nC : hL)
	}
	this.mI = function() {
		return a5V
	}, this.qw = function() {
		a5X(1), this.t0(0, 0, ab.bX - 1, ab.ea - 1), jt || fz || this.kK(kY, 3e3, !0, .3)
	}, this.kK = function(player, am, a5Y, zoom) {
		cg || a5V && !a5Y && a5W || 0 === bx[player] || (cY.dz = !1, a5W = a5Y, a5X(am), function(player) {
			a5R = (bY[player] + bb[player] + 1) / 2, a5S = (ba[player] + bc[player] + 1) / 2
		}(player), function(zoom, player) {
			var bB = bb[player] - bY[player] + 1,
				player = bc[player] - ba[player] + 1,
				g = eG / bB,
				u = eH / player,
				g = (a5T = g < u ? g : u, 0 !== zoom ? zoom : bB < 20 && player < 20 ? .5 : .9);
			a5T *= g, a5d(7 / 8)
		}(zoom, player), a5V = !0, fs.a5b())
	}, this.kz = function(am) {
		fz || cg || (cY.dz = !1, a5W = !1, a5X(am), a5c(0, 0, ab.bX - 1, ab.ea - 1), a5d(7 / 8), a5V = !0, fs.a5b())
	}, this.t0 = function(hL, hM, nC, he) {
		a5c(hL, hM, nC, he), cW = a5T, cY.e5(a5R, eG / 2), cY.e8(a5S, eH / 2), eb.ec()
	}, this.eJ = function() {
		return !(a5V && a5W || (a5V = !1))
	}, this.aW = function() {
		var a5h, a5i, bf, a5l;
		a5V && (a5L < .5 ? dP < a5N && (dP += a5N * d5, a5M = a5L) : 1 - a5M < a5L && (dP = (dP -= a5N * d5) < a5N * d5 ? a5N * d5 : dP), aL = aL >= aO.aP ? aO.aP - 1 : aL, bf = aO.aP - aL, a5L = 1e3 < bf || 1 < (a5L += dP * bf / a5U) ? 1 : a5L,
			aL = aO.aP, bf = cW, a5h = ds, a5i = dt, bf = (cW = a5Q * Math.pow(a5T / a5Q, a5L)) / bf, a5l = 1 - (a5Q * Math.pow(a5T / a5Q, 1 - a5L) - a5Q) / (a5T - a5Q), cY.e5(a5O + a5l * (a5R - a5O), eG / 2), cY.e8(a5P + a5l * (a5S - a5P),
				eH / 2), ce.zoom(bf, (a5h * bf - ds) / (1 - bf), (a5i * bf - dt) / (1 - bf)), eb.ec(), 1 <= a5L && (a5V = !1, qZ.sa = !0), aO.an = !0)
	}
}

function rL() {
	if (li < 3) return !1;
	if (yP.hp(3 * bx[rO[2]], 2) < bx[rO[0]]) return !1;
	if (bx[rO[0]] + bx[rO[1]] + bx[rO[2]] < qG - yP.hp(qG, 10)) return !1;
	if (8 * Math.min(Math.min(im[rO[0]], im[rO[1]]), im[rO[2]]) < 5 * Math.max(Math.max(im[rO[0]], im[rO[1]]), im[rO[2]])) return !1;
	if (ar) {
		if (cB.cC[rO[0]] === cB.cC[rO[1]]) return !1;
		if (cB.cC[rO[0]] === cB.cC[rO[2]]) return !1;
		if (cB.cC[rO[1]] === cB.cC[rO[2]]) return !1
	}
	return !0
}

function a5o() {
	this.bH = new zx, this.yn = new a1r, this.kI = new a5p, this.hZ = new i0
}

function a5q() {
	this.bS = new x6, this.cc = new a5r, this.aN = function() {
		this.bS.aN()
	}, this.aW = function() {
		0 !== this.bS.jd && this.bS.jd--
	}
}

function qh() {
	for (li = 0, f = cK - 1; 0 <= f; f--) 0 !== oO[f] && li++;
	lj = new Uint16Array(li);
	for (var m = 0, f = 0; f < cK; f++) 0 !== oO[f] && (lj[m++] = f)
}

function xR() {
	a5s(), rn()
}

function rn() {
	for (var f = li - 1; 0 <= f; f--) 0 === oO[lj[f]] && a5t(f)
}

function a5t(f) {
	li--;
	for (var g = f; g < li; g++) lj[g] = lj[g + 1]
}

function a5s() {
	for (var dY, f = li - 1; 0 <= f; f--) bx[lj[f]] <= a1(z3[lj[f]], 4) ? bx[lj[f]] <= 1e3 && (2 !== oO[lj[f]] || 0 === bx[lj[f]]) && rm(lj[f]) : bx[lj[f]] >= z3[lj[f]] ? z3[lj[f]] = bx[lj[f]] : (dY = a1(z3[lj[f]] - bx[lj[f]], 1e3), z3[lj[f]] -= dY <
		1 ? 1 : dY)
}

function xd() {
	for (var uA = 0, f = li - 1; 0 <= f; f--) uA += im[lj[f]];
	return uA % 4096
}

function tS() {
	function a5y(player, it, a60, a61) {
		for (var hL, hM, aQ, aC, a4, a62, nC, he, m = it + a61, f = it; f < m; f += a60)
			if (hL = (hL = bY[player] - f) < 1 ? 1 : hL, hM = ba[player] - f, nC = (nC = bb[player] + f) >= ab.bX - 1 ? ab.bX - 2 : nC, aC = (he = (he = bc[player] + f) >= ab.ea - 1 ? ab.ea - 2 : he) - (hM = hM < 1 ? 1 : hM), nC = (a4 = a1(a6
				.random() * (2 * (nC - hL + he - hM)), a6.value(100))) <= (aQ = nC - hL) ? (a62 = hL + a4, hM) : a4 <= aQ + aC ? (a62 = nC, hM + a4 - aQ) : a4 <= 2 * aQ + aC ? (a62 = hL + a4 - aQ - aC, he) : (a62 = hL, hM + a4 - 2 * aQ - aC), a5z(
					player, he = bh.sO(a62, nC))) return he;
		return -1
	}

	function a5z(cO, cN) {
		return bh.c2(cN) && (bh.bi(cN) || cO !== (cN = bh.bk(cN)) && c9(cO, cN) && 0 < bt[cN].length)
	}
	this.aW = function(player) {
		return !(0 === bt[player].length || im[player] < 100) && bR.bS.wB !== bR.bS.y0 && (bR.bS.wA[player] !== bR.bS.y1 && bG.kI.a3D(player, 203, 32, 16) ? !! function(player) {
			var cN = function(player) {
				var f, a2L, a2K, hL = bY[player],
					hM = ba[player],
					bB = bb[player] - hL + 1,
					bC = bc[player] - hM + 1,
					y = a6.value(100);
				for (f = 0; f < 32; f++)
					if (a2L = hL + yP.hp(a6.random() * bB, y), a2K = hM + yP.hp(a6.random() * bC, y), a2L = bh.sO(a2L, a2K), a5z(player, a2L)) return a2L;
				return -1
			}(player);
			if (0 <= cN) return bR.tT.zW(player, cN >> 2);
			if (0 <= (cN = a5y(player, 1, 4, 40))) return bR.tT.zW(player, cN >> 2);
			if (0 <= (cN = a5y(player, 40, 8, 200))) return bR.tT.zW(player, cN >> 2);
			return
		}(player) && !! function(cO) {
			if (0 === iY.pz[2]) return void console.log("error 325234");
			var wP = iY.pz[1] + bP.wQ[iY.pz[2] - 1] << 2;
			if (bh.bi(wP)) return 1;
			return wP = bh.bk(wP), cO !== wP && !!c9(cO, wP)
		}(player) && function(player) {
			return bG.kI.a3F(player), bR.bS.y6(player), !0
		}(player) : void 0)
	}
}

function a5p() {
	this.a39 = function(m3) {
		return 0 === m3 ? 1 === aY && jt : 1 === m3 ? 1 === aY && !jt : 1 <= aY && !jt
	}, this.a3A = function(player) {
		return 0 !== oO[player] && 2 !== kW[player]
	}, this.a3C = function(cO, cP) {
		return cO !== cP
	}, this.o8 = function(player, y) {
		return y = this.a64(player, y), im[player] += y, y
	}, this.a64 = function(player, y) {
		var sj = im[player];
		return y = Math.min(y, bx[player] * qF - sj), y = Math.min(y, oM - sj), Math.max(y, 0)
	}, this.a3D = function(player, sr, a65, a66) {
		var sj = im[player],
			sr = yP.hp(sj * (sr + 1), 1024),
			a65 = yP.hp(a65 * sj, 1024),
			sr = Math.min(sr, sj - a65);
		return 10 === lW && (sr = qo.zN(player, sr)), iY.ig[0] = sr, iY.ig[1] = a65, a66 <= sr
	}, this.a3H = function(player, wD, ss) {
		var player = im[player],
			a67 = yP.hp(64 * player, 1024);
		return wD = Math.min(wD, player - a67), a67 += player = this.a69(wD), wD = this.a64(ss, wD -= player), iY.ig[0] = wD, iY.ig[1] = a67, 1 <= wD
	}, this.a6A = function(wD, ss) {
		var a68 = this.a69(wD);
		return wD = this.a64(ss, wD -= a68), iY.ig[0] = wD, iY.ig[1] = a68, 1 <= wD
	}, this.a2n = function(player, a6B) {
		return yP.hp(im[player] * (a6B + 1), 1024)
	}, this.a69 = function(a6C) {
		return yP.hp(Math.max(2142 - aO.lZ(), 0) * a6C, 2142)
	}, this.a3I = function(player, a65) {
		im[player] -= yP.hp(a65 * im[player], 1024)
	}, this.a3F = function(player) {
		im[player] -= iY.ig[0] + iY.ig[1]
	}, this.a3E = function(player, cA) {
		return (cA = Math.min(cA, cK)) < cK && 0 === oO[cA] && (cA = cK), (iY.iZ[0] = cA) === cK || c9(player, cA)
	}, this.a3G = function(player, ss) {
		return 0 !== oO[ss] && !c9(player, ss)
	}
}

function a6D() {
	var a6E, r;
	this.aN = function() {
		for (var f = (r = new Uint16Array(101)).length - 1; 0 <= f; f--) r[f] = a1(32768 * f, 100);
		this.mL(0)
	}, this.value = function(s) {
		return r[s]
	}, this.mK = function() {
		return a1(a6E - 1, 2)
	}, this.mL = function(mJ) {
		a6E = 2 * mJ % 32768 + 1
	}, this.random = function() {
		return a6E = 167 * a6E % 32768
	}, this.iu = function(kv) {
		return a1(kv * this.random(), 32768)
	}, this.a6F = function(s) {
		return 0 !== s && this.random() < this.value(s)
	}
}

function a6G() {
	var aD, aQ, b9, a6H, a6I, aJ, aK, r7, sj, a6J, a6K, a6L, a6M;
	this.b8 = 0, this.aC = 0, this.aN = function() {
		a6I = qI, a6K = "rgba(0,100,0,0.8)", a6L = "rgba(150,0,0,0.8)", r7 = !(a6J = !0), sj = im[kY], this.resize()
	}, this.resize = function() {
		aQ = Math.floor((aR ? .305 : .24) * aS), this.aC = Math.floor(.5 + .13 * aQ), aQ = Math.floor(6 * this.aC), aD = aT + Math.floor(.8 * this.aC) + aU, a6M = Math.floor(.5 * this.aC), ab.hE.font = aD, b9 = aq, a6H = Math.floor(1 + .13 * this
			.aC), (aJ = document.createElement("canvas")).width = aQ, aJ.height = this.aC, (aK = aJ.getContext("2d", {
			alpha: !0
		})).font = aD, aK.textBaseline = b2, aK.textAlign = b1, this.a6N()
	}, this.a6O = function() {
		return aR && eV < 1.2 * eY
	}, this.e0 = function() {
		this.a6O() ? this.b8 = eG - aQ - aq : this.b8 = Math.floor(cj.a6P() + (eG - cj.a6P() - cm.aQ - aQ) / 2 - .5 * aq)
	}, this.qx = function() {
		r7 && (r7 = !1, this.a6N())
	}, this.a6N = function() {
		aK.clearRect(0, 0, aQ, this.aC), aK.fillStyle = a6J ? a6K : a6L, aK.fillRect(0, 0, aQ, this.aC), aK.fillStyle = av.hm, this.a6Q(), this.a6R(), aK.fillStyle = im[kY] >= qa.a6S(kY) ? av.a6T : av.b0, aK.fillText(bG.hZ.ha(sj), Math.floor(aQ /
			2), a6M), aK.fillStyle = av.b0, aK.fillRect(0, 0, aQ, 1), aK.fillRect(0, 0, 1, this.aC), aK.fillRect(0, this.aC - 1, aQ, 1), aK.fillRect(aQ - 1, 0, 1, this.aC)
	}, this.a6Q = function() {
		var lk = rN(Math.floor((qa.a5G() - 1) * this.aC / 9), this.aC - a6H);
		aK.fillRect(0, lk, a6H, this.aC - lk), aK.fillRect(aQ - a6H, lk, a6H, this.aC - lk)
	}, this.a6R = function() {
		aK.fillRect(a6H, this.aC - a6H, Math.floor((aQ - 2 * a6H) * im[kY] / a6I), a6H)
	}, this.aW = function() {
		0 !== oO[kY] && 2 !== kW[kY] && sj !== im[kY] && (a6I = gu(im[kY], a6I), a6J = im[kY] > sj && 10 <= im[kY], sj = im[kY], r7 = !0)
	}, this.ao = function() {
		0 === oO[kY] || jt || 2 === kW[kY] || ag.drawImage(aJ, this.b8, b9)
	}
}

function a6U() {
	this.zI = 0, this.zJ = 0, this.zD = 0, this.zE = 0, this.zF = 0, this.zG = 0, this.sb = [0, 0, 0, 0], this.ec = function() {
		this.zI = cY.cZ(), this.zJ = cY.ca(), this.zD = -this.zI, this.zE = -this.zJ, this.zF = eG / cW, this.zG = eH / cW, this.sb[0] = Math.floor(this.zD), this.sb[1] = Math.floor(this.zE), this.sb[2] = Math.floor(this.sb[0] + this.zF + 1),
			this.sb[3] = Math.floor(this.sb[1] + this.zG + 1), qZ.vT = !0
	}
}

function a6V() {
	function a6X(f) {
		return f >= ab.a6a() && f !== ab.a0U()
	}

	function a6W(f) {
		return 1 !== f && !a6X(f) && f !== ab.a0U()
	}
	this.bX = 0, this.ea = 0, this.cX = null, this.hE = null, this.hF = null, this.hG = null, this.ae = 0, this.gy = 0, this.uU = !1, this.n6 = 20, this.hH = new m1, this.ac = new mx, this.aN = function() {
		this.ac.aN()
	}, this.dF = function(xN, h4) {
		((xN %= this.n6) !== this.ae || a6W(this.ae) && h4 !== this.gy) && (this.uU = !1, this.hH.hI(), a6.mL(xN), this.ae = xN, this.gy = h4, a6W(xN) && (ab.ac.ad[xN].mJ = h4), a6X(this.ae) ? a6Y() : (xN = ab.ac.ad[this.ae], this.bX = xN.aQ,
			this.ea = xN.aC, a6.mL(xN.mJ), iQ.dF([this.bX, this.ea, xN.dP, xN.d5]), iB(), lQ.a6Z(), iQ.dM()))
	}, this.a6a = function() {
		return 10
	}, this.a6b = function(f) {
		return 3 === f || 7 === f || 9 === f || f === this.a0U()
	}, this.zB = function(f) {
		return 2 === f || 7 === f || 9 === f
	}, this.a6c = function(f) {
		return 1 === f
	}, this.a0U = function() {
		return this.n6
	}
}

function a6d() {
	var a6e;
	this.mr = null, this.aN = function() {
		a6e = [], 9 === lW && this.a6f()
	}, this.a6f = function() {
		var f, a6g = [50, 74, 95, 150, 190, 333];
		if (this.a6h = 0, this.mr = [0, 0, 0, 0, 0, 0], j3 <= a6g[0]) this.mr[0] = Math.max(yP.hp(j3 * (512 - j3), a6g[0]), 13), mk = this.mr[0];
		else
			for (mk = cK - j3, f = 1; f < 6; f++)
				if (j3 <= a6g[f]) {
					this.mr[f - 1] = 512 - a6g[f - 1] - a1((512 - a6g[f - 1]) * (j3 - a6g[f - 1]), a6g[f] - a6g[f - 1]), this.mr[f] = 512 - j3 - this.mr[f - 1];
					break
				} qE = j3 + mk
	}, this.a6i = function(player) {
		a6e.push({
			player: player,
			gf: 14 + a6.iu(20)
		})
	}, this.aW = function() {
		var f;
		if (9 === lW)
			for (f = a6e.length - 1; 0 <= f; f--) --a6e[f].gf <= 0 && (ce.lD(a6e[f].player, 0, 46), a6e.splice(f))
	}
}

function a6k() {
	this.a6l = function() {
		om || jZ || function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var a6o = window.location.search,
				a6o = new URLSearchParams(a6o).get(key);
			if ("string" != typeof a6o || a6o.length < 1) return null;
			return a6o
		}("replay") && ct.show()
	}, this.o9 = function() {
		var a6n;
		om || jZ || ((a6n = new URL(window.location.href)).search = "", history.replaceState(null, "", a6n.toString()))
	}
}

function a6q() {
	this.aN = function(b8, b9) {
		fT.setState(5), hJ.eK(b8, b9, !1), aO.an = !0
	}, this.ao = function() {
		hJ.a3t()
	}, this.eB = function(b8, b9) {
		var f = hJ.fk(b8, b9, 5, 2);
		5 === f ? a6r() : 6 === f && (ga.aN(), hJ.eK(b8, b9, !1), aO.an = !0)
	}
}

function yb0_0x15a2(_0x578727, _0x4596e0) {
	var _0x89a013 = yb0_0x89a0();
	return (yb0_0x15a2 = function(_0x15a22f, _0x4710ce) {
		return _0x89a013[_0x15a22f -= 124]
	})(_0x578727, _0x4596e0)
}

function a5J() {
	var _0x390d09 = yb0_0x15a2;

	function _0x58364b() {
		var _0xc45a80 = _0x390d09,
			_0x5b3f64 = a3W(),
			_0xc45a80 = Math[_0xc45a80(138)](_0x5b3f64 / 16777216);
		tC.tq(24, _0xc45a80), tC.tq(24, _0x5b3f64 - 16777216 * _0xc45a80)
	}

	function _0x5f4ac1() {
		var _0x19215e = _0x390d09;
		tC.tq(14, a6s), tC.tq(4, jZ ? 2 : 12 <= ja ? 1 : 0 < ja ? 3 : 0), tC.tq(1, a7F ? 1 : 0), tC.tq(1, a7G ? 1 : 0), tC.tq(5, (new Date)[_0x19215e(160)]() % 24)
	}
	this.nc = function() {
		var _0x138efb = yb0_0x15a2;
		tC.dF(18), tC.tq(1, 0), tC.tq(3, 0), tC.tq(14, a6s), fL.bS[_0x138efb(124)](0, tC.t6)
	}, this[_0x390d09(130)] = function(_0x5de550) {
		var _0x13287c = _0x390d09,
			_0x5923cd = t9.q(ga[_0x13287c(145)]()),
			_0x3cd4d = _0x5923cd[_0x13287c(139)],
			_0x5e30d7 = (tC.dF(151 + 10 * _0x3cd4d), tC.tq(1, 0), tC.tq(3, 1), tC.tq(20, a6u), tC.tq(26, a6v.id), tC.tq(10, Math[_0x13287c(133)](a6v.jg, 1023)), tf.a8[2].ky[_0x13287c(159)]());
		tC.tq(6, _0x5e30d7[0]), tC.tq(6, _0x5e30d7[1]), tC.tq(6, _0x5e30d7[2]), _0x58364b(), _0x5f4ac1();
		for (var _0x1e71b8 = 0; _0x1e71b8 < _0x3cd4d; _0x1e71b8++) tC.tq(10, _0x5923cd[_0x1e71b8]);
		fL.bS.a0f = _0x5de550, fL.bS[_0x13287c(124)](_0x5de550, tC.t6)
	}, this.a16 = function(_0x160b18, _0x368559) {
		var _0x53b00e = _0x390d09;
		tC.dF(38), tC.tq(1, 0), tC.tq(3, 7), tC.tq(3, 0), tC.tq(14, a6s), tC.tq(1, _0x368559), tC.tq(16, Math.abs(4096 + ob.position[_0x368559] + ob[_0x53b00e(147)][_0x368559]) % 65536), fL.bS[_0x53b00e(124)](_0x160b18, tC.t6)
	}, this[_0x390d09(157)] = function(_0x2b79b8) {
		var _0x477bbb, _0x3fb94f, _0x5697a7 = _0x390d09;
		if (!(ga[_0x5697a7(134)] + 7e3 > aO.aP)) {
			for (ga[_0x5697a7(134)] = aO.aP, tC.dF(136), tC.tq(1, 0), tC.tq(3, 7), tC.tq(3, 2), _0x58364b(), _0x3fb94f = gu(ga[_0x5697a7(126)][_0x5697a7(139)] - 20, 0), _0x477bbb = ga[_0x5697a7(126)][_0x5697a7(139)] - 1; _0x3fb94f <=
				_0x477bbb; _0x477bbb--) tC.tq(4, Math.abs(ga[_0x5697a7(126)][_0x5697a7(129)](_0x477bbb) - 48) % 10);
			fL.bS.send(_0x2b79b8, tC.t6)
		}
	}, this[_0x390d09(154)] = function(_0x34516c, _0x410fb5) {
		var _0x272259 = _0x390d09;
		tC.dF(13), tC.tq(1, 0), tC.tq(3, 5), tC.tq(9, _0x410fb5 ? 1 : 0), fL.bS[_0x272259(124)](_0x34516c, tC.t6)
	}, this.hO = function(_0x250a14) {
		var _0xab0143 = _0x390d09;
		_0x250a14 <<= 2, tC.dF(72), tC.tq(1, 0), tC.tq(3, 2), tC.iT += 56, tC.tq(12, _0x250a14), fL.bS[_0xab0143(124)](fL.bS.a0f, tC.t6)
	}, this[_0x390d09(156)] = function() {
		var _0x5c4e1f = _0x390d09;
		tC.dF(55), tC.tq(1, 0), tC.tq(3, 6), tC.tq(8, fL.bS.lB()), tC.tq(10, oZ[_0x5c4e1f(128)]), tC.tq(9, oZ[_0x5c4e1f(144)]), tC.tq(10, a6u), tC.tq(14, a6s), fL.bS[_0x5c4e1f(124)](fL.bS.fN, tC.t6)
	}, this[_0x390d09(151)] = function(_0x3b8932) {
		var _0x607567 = _0x390d09;
		tC.dF(27), tC.tq(1, 1), tC.tq(4, 0), tC.tq(22, _0x3b8932), fL.bS[_0x607567(124)](fL.bS.fN, tC.t6)
	}, this[_0x390d09(149)] = function(_0x43a85f, _0xb7824c) {
		var _0x1bb7d3 = _0x390d09;
		tC.dF(25), tC.tq(1, 1), tC.tq(4, 1), tC.tq(10, _0x43a85f), tC.tq(10, _0xb7824c), fL.bS[_0x1bb7d3(124)](fL.bS.fN, tC.t6)
	}, this.a74 = function(_0x45ab47, _0xbf71b9) {
		var _0x184851 = _0x390d09;
		tC.dF(24), tC.tq(1, 1), tC.tq(4, 2), tC.tq(10, _0x45ab47), tC.tq(9, _0xbf71b9), fL.bS[_0x184851(124)](fL.bS.fN, tC.t6)
	}, this[_0x390d09(153)] = function(_0x497ee3, _0x16469c) {
		var _0x54be5e = _0x390d09;
		tC.dF(37), tC.tq(1, 1), tC.tq(4, 3), tC.tq(10, _0x497ee3), tC.tq(22, _0x16469c), fL.bS[_0x54be5e(124)](fL.bS.fN, tC.t6)
	}, this.a76 = function(_0x487402, _0x51f085) {
		tC.dF(37), tC.tq(1, 1), tC.tq(4, 4), tC.tq(10, _0x487402), tC.tq(22, _0x51f085), fL.bS.send(fL.bS.fN, tC.t6)
	}, this[_0x390d09(127)] = function(_0x5b338f) {
		var _0x2b4e5d = _0x390d09;
		tC.dF(15), tC.tq(1, 1), tC.tq(4, 5), tC.tq(10, _0x5b338f), fL.bS[_0x2b4e5d(124)](fL.bS.fN, tC.t6)
	}, this[_0x390d09(142)] = function(_0x1b6a82) {
		var _0xbb2091 = _0x390d09;
		tC.dF(12), tC.tq(1, 1), tC.tq(4, 6), tC.tq(7, _0x1b6a82), fL.bS[_0xbb2091(124)](fL.bS.fN, tC.t6)
	}, this[_0x390d09(141)] = function(_0x4ba129) {
		var _0x45d9f0 = _0x390d09;
		tC.dF(6), tC.tq(1, 1), tC.tq(4, 7), tC.tq(1, _0x4ba129), fL.bS[_0x45d9f0(124)](fL.bS.fN, tC.t6)
	}, this[_0x390d09(125)] = function() {
		var _0x3b27c5 = _0x390d09;
		tC.dF(5), tC.tq(1, 1), tC.tq(4, 8), fL.bS[_0x3b27c5(124)](fL.bS.fN, tC.t6)
	}, this.xc = function(_0x5e1204, _0x3b3f90) {
		var _0x4bdcdd = _0x390d09;
		tC.dF(29), tC.tq(1, 1), tC.tq(4, 10), tC.tq(12, _0x5e1204), tC.tq(2, 0), tC.tq(10, _0x3b3f90), fL.bS[_0x4bdcdd(124)](fL.bS.fN, tC.t6)
	}, this.xe = function(_0x5531e1, _0xd0c617, _0x3f351c, _0x1384aa) {
		var _0x10fe3a = _0x390d09;
		tC.dF(46), tC.tq(1, 1), tC.tq(4, 10), tC.tq(12, _0x5531e1), tC.tq(2, 1), tC.tq(9, _0xd0c617), tC.tq(9, _0x3f351c), tC.tq(9, _0x1384aa), fL.bS[_0x10fe3a(124)](fL.bS.fN, tC.t6)
	}, this.xf = function(_0x3cb320) {
		var _0x3e1b0c, _0x2558a2 = _0x390d09,
			_0x827eab = qc.vv.oq;
		for (tC.dF(47 + 33 * _0x827eab[_0x2558a2(139)]), tC.tq(1, 1), tC.tq(4, 10), tC.tq(12, _0x3cb320), tC.tq(2, 2), tC.tq(24, qc.vv.op), tC.tq(4, _0x827eab.length), _0x3e1b0c = 0; _0x3e1b0c < _0x827eab[_0x2558a2(139)]; _0x3e1b0c++) tC.tq(9,
			_0x827eab[_0x3e1b0c][_0x2558a2(135)]), tC.tq(24, _0x827eab[_0x3e1b0c].p2);
		fL.bS[_0x2558a2(124)](fL.bS.fN, tC.t6)
	}, this.xZ = function(_0x34b8da, _0x153470) {
		var _0x5ee199 = _0x390d09;
		tC.dF(21), tC.tq(1, 1), tC.tq(4, 15), tC.tq(9, _0x153470), tC.tq(7, _0x34b8da), fL.bS[_0x5ee199(124)](fL.bS.fN, tC.t6)
	}, this.xa = function(_0x5d9c19) {
		var _0x366160 = _0x390d09;
		tC.dF(14), tC.tq(1, 1), tC.tq(4, 14), tC.tq(9, _0x5d9c19), fL.bS[_0x366160(124)](fL.bS.fN, tC.t6)
	}, this.xb = function(_0x5f31a4, _0x562e3e) {
		var _0x31fcde, _0x31b979 = _0x390d09,
			_0x4ee8ad = _0x5f31a4[_0x31b979(139)];
		for (tC.dF(14 + 9 * _0x4ee8ad), tC.tq(1, 1), tC.tq(4, 13), tC.tq(9, _0x562e3e), _0x31fcde = 0; _0x31fcde < _0x4ee8ad; _0x31fcde++) tC.tq(9, _0x5f31a4[_0x31fcde]);
		fL.bS[_0x31b979(124)](fL.bS.fN, tC.t6)
	}, this[_0x390d09(131)] = function(_0x5dd475) {
		var _0x6077d3 = _0x390d09;
		tC.dF(29), tC.tq(1, 0), tC.tq(3, 3), _0x5f4ac1(), fL.bS[_0x6077d3(124)](_0x5dd475, tC.t6)
	}
}

function yb0_0x89a0() {
	var _0x2ab8fb = ["3MIqEmk", "a73", "852538kaywSK", "a72", "2VbKmRJ", "a75", "a0y", "920eYKcOA", "a18", "a19", "3269650WWIYDl", "a4T", "getHours", "send", "a7A", "a3N", "a77", "a70", "charCodeAt", "a6t", "a17", "27438rfSRJM", "min", "a3O",
		"player", "168AoVbbW", "48624PDWBCS", "floor", "length", "2312852jJbyKV", "a79", "a78", "5317785JYzdoN", "a71", "a3k", "9993313KTYnSR", "a6z"
	];
	return (yb0_0x89a0 = function() {
		return _0x2ab8fb
	})()
}

function a7H(title, iV, pA, a7I) {
	var a7J;
	this.a7M = function() {
		var a7K;
		return a7J || (a7K = new a4Y("Back", () => wy.show(a7I), av.ke, av.pL, av.lq), a7J = new a7L(title, a7K, [new ew(iV), new a4k(pA)])), a7J
	}, this.a7N = function() {
		return title
	}
}

function qn() {
	bV = 0, a7R = 2048, bW = new Uint32Array(4 * a7R), a7S = 0, a7T = new Uint32Array(a7R), (bg = new Int32Array(4))[0] = -4 * ab.bX, bg[1] = 4, bg[2] = -bg[0], bg[3] = -bg[1], a7U = new Uint8Array(ab.bX * ab.ea)
}

function zt(player) {
	bZ = player, a7V = !1, a7W(), a7X();
	for (var f = cG.cH(bZ) - 1; 0 <= f; f--) 0 === cG.cI(bZ, f) && (a7O = f, a7Y());
	a7V && a7Z()
}

function a7Z() {
	bd(), bm()
}

function a7Y() {
	by = cG.cJ(bZ, a7O), a7P = cG.oH(bZ, a7O), a7a(), (0 !== bV && (a7c(), a7d()) ? a7e : a7b)()
}

function a7d() {
	return a7Q = a1(a7P, bV), qJ < a7Q
}

function a7c() {
	for (var f = bV - 1; 0 <= f; f--) a7U[a1(bW[f], 4)] = 0
}

function a7b() {
	var cQ;
	1 === cG.cH(bZ) && ih.vH(bZ), bZ !== kY ? (im[bZ] += a7P, qa.a7f(bZ)) : (cQ = im[bZ], im[bZ] += a7P, qa.a7f(bZ), kP.kQ[13] -= im[bZ] - cQ), cG.oD(bZ, a7O)
}

function a7W() {
	var f, m = be[bZ].length;
	for (a7S = 0, f = (a7R < m ? a7R : m) - 1; 0 <= f; f--) a7T[a7S++] = be[bZ][f]
}

function a7X() {
	for (var f = be[bZ].length - 1; 0 <= f; f--) bh.c2(be[bZ][f]) && bh.c7(be[bZ][f], bZ);
	be[bZ] = []
}

function a7a() {
	bV = 0, (by === cK ? a7g : a7h)()
}

function a7h() {
	for (var s, cN, f, bf = 3; 0 <= bf; bf--)
		for (f = a7S - 1; 0 <= f; f--) cN = a1(s = a7T[f] + bg[bf], 4), 0 === a7U[cN] && bh.bj(s) && bh.bk(s) === by && (a7U[cN] = 1, bW[bV++] = s)
}

function a7g() {
	for (var s, cN, f, bf = 3; 0 <= bf; bf--)
		for (f = a7S - 1; 0 <= f; f--) cN = a1(s = a7T[f] + bg[bf], 4), 0 === a7U[cN] && bh.bi(s) && (a7U[cN] = 1, bW[bV++] = s)
}

function a7i() {
	document.a7j[0].a7k(".closeIcon {position: absolute; width: 24px; height: 24px; top: calc(50% - 12px);}", 0), document.a7j[0].a7k(
		".closeIcon:before {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(45deg);}", 0), document.a7j[0].a7k(
		".closeIcon:after {content: ' '; position: absolute; left: 50%; top: 0; width: 2px; height: 100%; background-color: #222; transform: translateX(-50%) rotate(-45deg);}", 0), this.a7l = function() {
		var a4j = document.createElement("div");
		return a4j.a7m = "closeIcon", a4j
	}
}

function qs() {
	this.jq = null, this.aN = function(jq) {
		this.jq = jq, ci.l0(this.jq)
	}, this.vs = function(a7n) {
		var dY = (this.jq[a7n].l3 - this.jq[1 - a7n].l3) / 10,
			dY = 8 / (1 + Math.pow(2, dY / 32)),
			dY = Math.floor(10 * dY + .5),
			l8 = this.l2(this.jq[a7n].l3 + dY + 1),
			dY = this.l2(this.jq[1 - a7n].l3 - dY);
		0 === a7n ? ci.l7(this.jq, l8, dY, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : ci.l7(this.jq, dY, l8, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.l2 = function(l3) {
		return 16e3 <= (l3 = l3 < 0 ? 0 : 16e3 < l3 ? 16e3 : l3) ? "Unknown" : (l3 / 10).toFixed(1)
	}
}

function qX() {
	(cd = void 0 === cd ? document.createElement("canvas") : cd).width = ab.bX, cd.height = ab.ea, qk = cd.getContext("2d", {
		alpha: !0
	}), ql = qk.getImageData(0, 0, ab.bX, ab.ea), sR = ql.data, bG.yn.yo(sR)
}

function a7p() {
	ix = 8, iv = 0, iw = new Uint16Array(ix)
}

function qb() {
	id = ar ? new Uint8Array(cK) : null
}

function mw(player, ik) {
	var a7q;
	ar && (id[player] = 0), !cG.oE(player) || ik < 60 || (0 === bn[player].length ? bR.tR.aW(player) || (qd.ms(player - j3, 200), a7r(player, ik, qd.ik[player - j3], qa.a6S(player))) : 0 < bt[player].length && a6.random() < a6.value(bt[player]
		.length > bn[player].length ? 7 : 3) && bR.tR.aW(player) || (a7q = qa.a6S(player), im[player] > a7q && ik < im[player] - a7q && (ik = im[player] - a7q), ar ? a7s(player, ik, qd.ik[player - j3], a7q) : a7t(player, ik, qd.ik[player -
		j3])))
}

function a7s(player, ik, a7u, a7q) {
	var cA;
	iq(player, !1) || iy(player, !1) ? (id[player] = 1, j0(player) || (iz() ? (a7v(player, ik), a7w(player, cK, a7u)) : (a6.a6F(qd.mi[a7u]) ? a7x(player, ik, cA = j5(player)) : (j2() && a6.a6F(qd.mg[a7u]) && j4(), a7x(player, ik, cA = j9(player))),
		a7w(player, cA, a7u)))) : 0 < bt[player].length && a6.random() < a6.value(60) && bR.tR.aW(player) || (qd.ms(player - j3, 200), a7r(player, ik, a7u, a7q))
}

function a7y(player, ik) {
	iq(player, !1) || iy(player, !1) ? (id[player] = 1, iz() ? a7v(player, ik) : a7x(player, ik, jE())) : a7r(player, ik, 0, 0)
}

function a7w(player, cA, a7u) {
	3 <= a7u && 2142 < aO.lZ() && (cA === cK || im[cA] < a1(im[player], 20)) && qd.ms(player - j3, 25)
}

function a7r(player, ik, a7u, a7q) {
	var f, u, o;
	if (0 !== cB.cC[player] && !(5 === a7u && im[player] < a7q || 4 === a7u && im[player] < a1(a7q, 2)))
		for (f = a6.iu(li), u = 0; u < li; u++)
			if (o = lj[(u + f) % li], cB.cC[o] === cB.cC[player] && 1 === id[o]) return void kH.wR.a7z(player, o, ik)
}

function a7t(player, ik, a7u) {
	!iq(player, !0) && !iy(player, !0) || j0(player) || (iz() ? a7v(player, ik) : a6.a6F(qd.mi[a7u]) ? a7x(player, ik, j5(player)) : (j2() && a6.a6F(qd.mg[a7u]) && j4(), a7x(player, ik, j9(player))))
}

function a80(player, ik) {
	(iq(player, !0) || iy(player, !0)) && (iz() ? a7v(player, ik) : a7x(player, ik, jE()))
}

function a7x(player, ik, cA) {
	a1(im[player], 8) > im[cA] && (ik = (oC = a1(11 * im[cA], 5)) < ik ? ik : oC);
	var oC = be[player].length;
	ib(player, cA), ij(player, cA, oC, ik)
}

function a7v(player, ik) {
	var cA = cK,
		m = be[player].length;
	return ia(player), be[player].length !== m && (ij(player, cA, m, ik), !0)
}

function a81() {
	var a82 = document.createElement("div"),
		lt = [];
	this.aN = function(ey) {
		a82.width = "100%", a82.height = "auto", a82.style.display = "grid", a82.style.overflow = "auto", a82.style.maxWidth = "100%", this.resize(), ey.appendChild(a82)
	}, this.resize = function() {
		var f, a83 = bG.bH.rd(.5) * aS / fP * .3;
		for (a82.style.gridTemplateColumns = "repeat(auto-fit, minmax(clamp(64px, " + a83.toFixed(1) + "px, 100%), auto))", a82.style.gap = (.04 * a83).toFixed(1) + "px", f = 0; f < lt.length; f++) lt[f].resize()
	}, this.ly = function(ez) {
		ez.aN(a82), lt.push(ez)
	}
}

function a84() {
	var a7J;
	this.a7M = function() {
		var a7K, a82;
		return a7J || ((a82 = new a81).ly(new a4Y("Account", () => {
			console.log("Account")
		})), a82.ly(new a4Y("Settings", () => wy.show(1))), a82.ly(new a4Y("Links", () => {
			console.log("Links")
		})), a82.ly(new a4Y("Replay", () => {
			console.log("Replay")
		})), a82.ly(new a4Y("Game Version", () => {
			console.log("Game Version")
		})), a7K = new a4Y("Close", wy.nG, av.ke, av.pL, av.lq), a7J = new a7L("Menu", a7K, [a82])), a7J
	}
}

function a85() {
	var aQ, b8, a86, aJ, aK, fa, sr, a87, aD, r7, a88 = 11 / 12;

	function a89() {
		var nU = Math.floor(sr * (aQ - 2 * a86)),
			a8B = 1 + Math.floor(.0625 * ck.aC),
			a8C = 1 + Math.floor(.3 * ck.aC),
			rG = Math.floor(.55 * ck.aC);
		aK.clearRect(0, 0, aQ, ck.aC), aK.fillStyle = av.ra, aK.fillRect(0, 0, a86, ck.aC), aK.fillRect(a86 + nU, 0, aQ - a86 - nU, ck.aC), aK.fillStyle = sr < 1 / 3 ? "rgba(" + Math.floor(3 * sr * 130) + ",130,0,0.85)" : sr < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (sr - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (sr - 2 / 3) * 130) + ",0.85)", aK.fillRect(a86, 0, nU, ck.aC), aK.fillStyle = av.b0, aK.fillRect(0, 0, aQ, 1), aK.fillRect(0, ck.aC - 1, aQ, 1),
			aK.fillRect(0, 0, 1, ck.aC), aK.fillRect(a86, 0, 1, ck.aC), aK.fillRect(a86 + nU, 0, 1, ck.aC), aK.fillRect(aQ - a86, 0, 1, ck.aC), aK.fillRect(aQ - 1, 0, 1, ck.aC), aK.fillRect(Math.floor(.25 * ck.aC) + a8C, Math.floor((ck.aC - a8B) /
				2), ck.aC - 2 * a8C, a8B), aK.fillRect(Math.floor(aQ - 1.25 * ck.aC) + a8C, Math.floor((ck.aC - a8B) / 2), ck.aC - 2 * a8C - a8C % 2, a8B), aK.fillRect(Math.floor(aQ - 1.25 * ck.aC) + Math.floor((ck.aC - a8B) / 2), a8C, a8B, ck.aC -
				2 * a8C - a8C % 2), a87 = bG.kI.a2n(kY, ck.pc()), aK.fillText(bG.hZ.ha(a87) + " (" + bG.hZ.i5(100 * sr, 0) + ")", Math.floor(.5 * aQ), rG)
	}

	function a8G(ee) {
		return !(1 < ee && 1 === sr || (1 < ee && ee * sr - sr < 1 / 1024 ? ee = (sr + 1 / 1024) / sr : ee < 1 && sr - ee * sr < 1 / 1024 && (ee = (sr - 1 / 1024) / sr), sr = yP.hr(sr * ee, 1 / 1024, 1), a89(), 0))
	}

	function a8H(eO) {
		return sr !== (sr = yP.hr((eO - b8 - a86) / (aQ - 2 * a86), 1 / 1024, 1)) && (a89(), !0)
	}
	this.b9 = 0, this.fb = !1, this.aN = function() {
		fa = !jt && !fz, r7 = !1, sr = .5, a87 = 0, this.fb = !1, this.resize()
	}, this.resize = function() {
		aR && eV < .8 * eY ? (this.aC = Math.floor(.0536 * aS), aQ = eV - 4 * aq - this.aC) : (aQ = Math.floor((aR ? .65 : .389) * aS), aQ += 12 - aQ % 12, this.aC = Math.floor(aQ / 12)), a86 = Math.floor(3 * this.aC / 2), aD = aT + Math.floor(
			.5 * this.aC) + aU, (aJ = document.createElement("canvas")).width = aQ, aJ.height = this.aC, (aK = aJ.getContext("2d", {
			alpha: !0
		})).font = aD, aK.textBaseline = b2, bG.bH.textAlign(aK, 1), this.e0(), a89()
	}, this.e0 = function() {
		b8 = aR && eV < .8 * eY ? this.aC + 3 * aq : Math.floor((eG - aQ) / 2), this.b9 = eH - this.aC - eC.kF() * aq
	}, this.qx = function() {
		r7 && (r7 = !1, a89())
	}, this.fa = function() {
		return !(!fa || cp.fx && b8 < Math.floor(aq + 5.5 * this.aC))
	}, this.kE = function(zl) {
		return !!this.fa() && eV - zl - aq < b8 + aQ
	}, this.lo = function() {
		fa = !fz
	}, this.rI = function() {
		fa = !1
	}, this.pc = function() {
		return yP.hr(Math.floor(1024 * sr + .5) - 1, 0, 1023)
	}, this.fk = function(eO, eP) {
		return this.fa() && b8 < eO && eO < b8 + aQ && eP > this.b9
	}, this.eB = function(eO, eP) {
		return !!this.fa() && !!ck.fk(eO, eP) && (cY.dz = !1, function(qA, eO, eP) {
			if (function(eO, eP) {
					return b8 < eO && eO < b8 + a86 && eP > ck.b9
				}(eO, eP)) return a8G(a88);
			if (function(eO, eP) {
					return b8 + aQ - a86 < eO && eO < b8 + aQ && eP > ck.b9
				}(eO, eP)) return a8G(1 / a88);
			return qA.fb = !0, a8H(eO)
		}(this, eO, eP) && (aO.an = !0), !0)
	}, this.g2 = function(eQ) {
		0 !== aY && this.fa() && a8G(eQ) && (aO.an = !0)
	}, this.eF = function(deltaY) {
		var eQ;
		return !(0 === deltaY || !this.fa()) && a8G(eQ = 0 < deltaY ? (eQ = 400 / (400 + deltaY)) < a88 ? a88 : eQ : 1 / a88 < (eQ = (400 - deltaY) / 400) ? 1 / a88 : eQ)
	}, this.eK = function(eO, eP) {
		return !!this.fb && a8H(eO)
	}, this.ff = function() {
		this.fb = !1
	}, this.aW = function() {
		this.fa() && a87 !== bG.kI.a2n(kY, this.pc()) && (r7 = !0)
	}, this.ao = function() {
		this.fa() && ag.drawImage(aJ, b8, this.b9)
	}
}

function a8I() {
	var a7J, a8J;

	function a8L() {
		aR = !aR, tf.a8[0].nz = aR, g8.ww(0), zQ(aR, !1)
	}
	this.show = function() {
		a7J || (a8J = new a8K("Mobile Friendly", "Increase size of user interface to better support mobile devices", a8L), (a7J = new a7L).aN("Accessibility", new a4Y("Back", () => {
			a7J.nG(), wy.eD.show()
		}, av.ke), [a8J])), a8J.setState(aR), a7J.show()
	}, this.resize = function() {
		a7J && (a7J.resize(), a8J.resize())
	}
}

function a8M() {
	var a8N = new z1;
	this.k9 = function(iT, z2, n9) {
		return a8N.k9(iT, z2, n9)
	}
}

function a8O() {
	var a8P, a8Q, hV, rG;
	this.fa = !1, this.fn = !1, this.a1V = function() {
		return !jx.jy && ab.ae !== ab.a0U() && (fz || 2 === aY)
	}, this.show = function() {
		this.fa = !0, a8P || (a8P = new re([.55, .35], [.5, .5]), (a8Q = new a8R).aN()), this.resize(), 0 === aY ? a8Q.a8b("") : (qi.tx.we.length || (qi.tx.we = qi.a8c.q()), a8Q.a8b(qi.a8d(qi.tx.we))), a8Q.show(), aO.an = !0, fm.lo(!1)
	}, this.nG = function() {
		this.fa && (this.fa = !1, this.fn = !1, a8Q.nG(), aO.an = !0, 0 === aY && a8T.o9(), 0 === fT.fp()) && fm.lo(!0)
	}, this.resize = function() {
		this.fa && (a8P.resize(), hV = .03 * a8P.aC, rG = .2 * a8P.aC, a8Q.resize(a8P.b8 + hV, a8P.b9 + rG + hV, a8P.aQ - 2 * hV, a8P.aC - 2 * (rG + hV)))
	}, this.eB = function(b8, b9) {
		return !!this.fa && (b8 < a8P.b8 || b9 < a8P.b9 || b8 > a8P.b8 + a8P.aQ || b9 > a8P.b9 + a8P.aC ? 2 !== cp.eB(b8, b9) && this.nG() : b9 < a8P.b9 + a8P.aC - rG ? b8 > a8P.b8 + a8P.aQ - rG && b9 < a8P.b9 + rG && this.nG() : (b8 -= a8P.b8) <
			.25 * a8P.aQ ? a8Q.a8U() : b8 < .5 * a8P.aQ ? a8Q.a8V() : b8 < .75 * a8P.aQ ? a8Q.o9() : (b9 = this, b8 = qi.a8X(a8Q.a8Y()), b9.nG(), (0 < b8.length && b8 === qi.tx.we || qi.a8a.t(b8)) && qi.a8Z()), !0)
	}, this.ao = function() {
		var f;
		if (this.fa)
			for (bG.bH.textAlign(ag, 1), ag.fillStyle = av.a8e, ag.fillRect(a8P.b8, a8P.b9, a8P.aQ, rG), ag.fillStyle = av.ra, ag.fillRect(a8P.b8, a8P.b9 + rG, a8P.aQ, a8P.aC - rG), ag.fillStyle = av.b0, ag.fillRect(a8P.b8, a8P.b9, 2, a8P.aC), ag
				.fillRect(a8P.b8, a8P.b9, a8P.aQ, 2), ag.fillRect(a8P.b8 + a8P.aQ - 2, a8P.b9, 2, a8P.aC), ag.fillRect(a8P.b8, a8P.b9 + a8P.aC - 2, a8P.aQ, 2), ag.fillRect(a8P.b8 + 1, a8P.b9 + rG, a8P.aQ - 2, 2), ag.fillRect(a8P.b8 + 1, a8P.b9 +
					a8P.aC - rG, a8P.aQ - 2, 2), ag.font = aT + Math.floor(.39 * rG) + aU, ag.fillText("Replay", a8P.b8 + .5 * a8P.aQ, a8P.b9 + .55 * rG), cp.hg(a8P.b8 + a8P.aQ - .725 * rG, a8P.b9 + .275 * rG, .45 * rG), ag.setTransform(1, 0, 0,
					1, 0, 0), ag.font = bG.bH.a02(.3 * rG, 0), ag.fillText("Select All", a8P.b8 + .125 * a8P.aQ, a8P.b9 + a8P.aC - .48 * rG), ag.fillText("Copy", a8P.b8 + .375 * a8P.aQ, a8P.b9 + a8P.aC - .48 * rG), ag.fillText("Clear", a8P.b8 +
					.625 * a8P.aQ, a8P.b9 + a8P.aC - .48 * rG), ag.fillText("Launch", a8P.b8 + .875 * a8P.aQ, a8P.b9 + a8P.aC - .48 * rG), f = 1; f < 4; f++) ag.fillRect(a8P.b8 + .25 * f * a8P.aQ - 1, a8P.b9 + a8P.aC - rG + 1, 2, rG - 2)
	}
}

function a8g() {
	this.qr = new oc, this.a3R = new vz, this.aN = function() {
		this.qr.aN()
	}
}

function tK() {
	this.a8h = function(player) {
		for (var y5 = bR.bS.y5, zc = player << 3, f = zc + bR.bS.wA[player] - 1; zc <= f; f--) this.wN(y5[f])
	}, this.wN = function(a8i) {
		var bS = bR.bS,
			a8j = bS.wB - 1,
			a8k = bS.ko[a8i],
			a8l = bS.y4[a8i],
			a8m = bS.wJ[a8i];
		bS.wB = a8j, bS.ko[a8i] = bS.ko[a8j], bS.y2[a8i] = bS.y2[a8j], bS.wK[a8i] = bS.wK[a8j], bS.wJ[a8i] = bS.wJ[a8j], bS.y3[a8i] = bS.y3[a8j], bS.kp[a8i] = bS.kp[a8j], bS.y4[a8i] = bS.y4[a8j], bS.bT[a8i] = bS.bT[a8j], bS.wI[a8i] = bS.wI[a8j],
			bS.y5[bS.ko[a8i]] = a8i,
			function(gm) {
				var player = gm >> 3,
					bS = bR.bS,
					m = bS.wA[player] - 1,
					a8p = (player << 3) + m;
				bS.wA[player] = m, a8p !== gm && (bS.y5[gm] = bS.y5[a8p], bS.ko[bS.y5[gm]] = gm)
			}(a8k), bR.mB.mB[bP.y9(bS.wJ[a8i])][bS.y4[a8i]] = a8i, a8j = bP.y9(a8m), a8k = a8l, a8j = bR.mB.mB[a8j], bS = a8j.pop(), a8k !== a8j.length && (a8j[a8k] = bS, bR.bS.y4[bS] = a8k)
	}
}

function a8s() {
	var aJ, aK, a8P, font, gq = 0,
		a8t = !1,
		a8u = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a8v = 5;

	function a4x() {
		if (a8t) {
			var f, m = a8u.length,
				rG = Math.floor(.5 * a8P.aC),
				aC = m * rG,
				b8 = Math.floor(Math.floor(a8P.b8) + .3 * a8P.aQ - .5),
				b9 = Math.floor(Math.floor(a8P.b9) - aC),
				aQ = Math.floor(.4 * a8P.aQ + 2.5);
			for (ag.fillStyle = av.ra, ag.fillRect(b8, b9, aQ, aC), ag.fillStyle = av.a97, ag.fillRect(b8, b9 + a8v * rG, aQ, rG), ag.fillStyle = av.b0, ag.fillRect(b8, b9, 2, aC), ag.fillRect(b8, b9, aQ, 2), ag.fillRect(b8 + aQ - 2, b9, 2, aC), f =
				1; f < m; f++) ag.fillRect(b8, b9 + f * rG, aQ, 2);
			for (ag.fillStyle = av.b0, bG.bH.textAlign(ag, 1), bG.bH.textBaseline(ag, 1), ag.font = bG.bH.a02(.6 * rG, 0), b8 += .5 * aQ, f = 0; f < m; f++) ag.fillText(a98(f), b8, b9 + (f + .6) * rG)
		}
		ag.drawImage(aJ, Math.floor(a8P.b8), Math.floor(a8P.b9))
	}

	function jV(qA) {
		var b8, hL, hM, rG;
		aK.clearRect(0, 0, Math.floor(a8P.aQ), Math.floor(a8P.aC)), aK.fillStyle = av.ra, aK.fillRect(0, 0, Math.floor(a8P.aQ), Math.floor(a8P.aC)), cg && (aK.fillStyle = av.a97, aK.fillRect(0, 0, Math.floor(.3 * a8P.aQ), Math.floor(a8P.aC))), aK
			.fillStyle = av.b0, aK.fillText("Hide UI", .15 * a8P.aQ, .5 * a8P.aC), aK.fillRect(Math.floor(.3 * a8P.aQ - .5), 0, 2, Math.floor(a8P.aC)), b8 = .5 * a8P.aQ, aK.fillText("Replay Speed", b8, .31 * a8P.aC), aK.fillText(a98(a8v), b8, .69 *
				a8P.aC), aK.fillRect(Math.floor(.7 * a8P.aQ - .5), 0, 2, Math.floor(a8P.aC)), qA.a1L ? (b8 = Math.floor(.02 * a8P.aQ), qA = Math.floor(.025 * a8P.aQ), hL = Math.floor(.85 * a8P.aQ - b8 - .5 * qA), hM = Math.floor(.25 * a8P.aC), rG =
				Math.floor(a8P.aC) - 2 * hM, aK.fillRect(hL, hM, b8, rG), aK.fillRect(hL + b8 + qA, hM, b8, rG)) : function() {
				var aQ = Math.floor(.46 * a8P.aC),
					aC = Math.floor(.23 * a8P.aC),
					b8 = Math.floor(.85 * a8P.aQ - .5 * aQ + aQ / 12),
					b9 = Math.floor(.5 * a8P.aC - aC);
				aK.beginPath(), aK.moveTo(b8, b9), aK.lineTo(b8 + aQ, b9 + aC), aK.lineTo(b8, b9 + (aC << 1)), aK.fill()
			}(), aK.fillRect(0, 0, Math.floor(a8P.aQ), 2), aK.fillRect(0, 0, 2, Math.floor(a8P.aC)), aK.fillRect(0, Math.floor(a8P.aC) - 2, Math.floor(a8P.aQ), 2), aK.fillRect(Math.floor(a8P.aQ - 2), 0, 2, Math.floor(a8P.aC))
	}

	function a98(f) {
		return 5 === f ? "Normal" : "" + a8u[f]
	}
	this.a1L = !1, this.aN = function() {
		fz && (a8v = 5, this.a1L = !1, a8t = !1, a8P = new re([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a1f = function() {
		return a8u[a8v]
	}, this.ca = function() {
		return a8P.b9
	}, this.kE = function(zl) {
		return !!fz && a8P.b8 + a8P.aQ > eV - zl - aq
	}, this.resize = function() {
		fz && (a8P.resize(), a8P.b9 -= (eC.kF() - 1) * aq, font = bG.bH.a02(.3 * a8P.aC, 0), (aJ = document.createElement("canvas")).width = Math.floor(a8P.aQ), aJ.height = Math.floor(a8P.aC), (aK = aJ.getContext("2d", {
			alpha: !0
		})).font = font, bG.bH.textAlign(aK, 1), bG.bH.textBaseline(aK, 1), jV(this))
	}, this.fu = function(a8w) {
		a8w !== cg && (cg = a8w, as.resize(), aO.an = !0, fz) && (gq = aO.aP + 2e3, jV(this))
	}, this.eB = function(b8, b9) {
		if (!fz) return !1;
		if (b8 < a8P.b8 || b9 < a8P.b9 || b8 > a8P.b8 + a8P.aQ) return a8t && function(qA, b8, b9) {
			var m = a8u.length,
				rG = Math.floor(.5 * a8P.aC),
				aC = m * rG,
				hL = Math.floor(Math.floor(a8P.b8) + .3 * a8P.aQ - .5),
				aC = Math.floor(Math.floor(a8P.b9) - aC),
				aQ = Math.floor(.4 * a8P.aQ + 2.5);
			return a8t = !1, aO.an = !0, b8 < hL || hL + aQ < b8 || b9 < aC || (a8v = a8z(0, Math.floor((b9 - aC) / rG), m - 1), jV(qA)), !0
		}(this, b8, b9);
		if ((b8 -= a8P.b8) < .3 * a8P.aQ) a8t = !1, this.fu(!cg);
		else {
			if (b8 < .7 * a8P.aQ) return a8t = !a8t, aO.an = !0;
			this.g0(!1)
		}
		return !0
	}, this.g0 = function(a8y) {
		2 === aY ? (this.fu(!1), ct.show()) : (a8t = !1, this.a1L = !this.a1L, this.a1L ? cp.fx ? cp.fy() : qv(1) : a8y || cp.a1M(), aO.an = !0, jV(this))
	}, this.fU = function(b8, b9) {
		return !!cg && (cp.eB(b8, b9) || (fz ? ((aO.aP > gq || !this.eB(b8, b9)) && cY.eB(b8, b9), aO.an = !0, gq = aO.aP + 2e3) : cY.eB(b8, b9)), !0)
	}, this.aW = function() {
		fz && cg && aO.aP > gq - 1e3 && aO.aP < gq && (aO.an = !0)
	}, this.vw = function() {
		fz && (this.a1L = !1, aO.an = !0, jV(this))
	}, this.ao = function() {
		if (fz) {
			if (cg) {
				if (aO.aP > gq) return;
				if (aO.aP > gq - 1e3) return ag.globalAlpha = a8z(0, (1e3 - (aO.aP - (gq - 1e3))) / 1e3, 1), a4x(), void(ag.globalAlpha = 1)
			}
			a4x()
		}
	}
}

function a99() {
	var a9A, a2;

	function a9E() {
		var f, aQ = new a9F;
		for (aQ.dF(800), aQ.tq(1, 0), aQ.tq(3, 7), aQ.tq(3, 1), aQ.tq(2, jZ ? 2 : 12 <= ja ? 1 : 0 < ja ? 3 : 0), aQ.tq(1, a7F ? 1 : 0), aQ.tq(1, a7G ? 1 : 0), aQ.tq(1, a9G.a9H), f = 0; f < a2.length && !(aQ.iT + 6 > 8 * aQ.ip); f++) aQ.tq(6, a2[f]);
		a9A.send(aQ.t6), a9A.onopen = null
	}
	window.addEventListener("error", function error(cE) {
		var a9B, a9C;
		window.removeEventListener("error", error), a9B = cE.lineno + " " + cE.colno + " " + cE.message, (a9C = new a9D).aN(), a2 = a9C.wW(a9C.wX(a9B)), (a9A = new WebSocket("wss://territorial.io/s52/")).onopen = a9E, 0 === cE.lineno && 0 ===
			cE.colno || (om ? om.showToast(a9B) : alert(a9B))
	})
}

function a9I() {
	this.id = 0, this.jg = 0;
	var a9J = null,
		a9K = !1;
	this.aN = function() {
		var qA, ht, hu;
		om ? this.id = 1 : jZ ? this.id = 2 : (function() {
			try {
				if (!(a9J = window.localStorage)) return a9J = null;
				a9J.setItem("testLS", "1"), a9J.removeItem("testLS")
			} catch (error) {
				return a9J = null
			}
			a9K = !0
		}(), qA = this, a9K && (ht = Number(a9J.getItem("zt0")), hu = Number(a9J.getItem("zt1")), ht && hu ? (qA.id = ht, qA.jg = Math.floor(Date.now() / 3e5) - hu) : (a9J.setItem("zt0", "" + Math.floor(3 + Math.random() * (Math.pow(2,
			20) - 3))), a9J.setItem("zt1", "" + Math.floor(Date.now() / 3e5)))))
	}
}

function a6Y() {
	var i, a9P = ab.a6a();
	ab.ae === a9P ? i =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		ab.ae === a9P + 1 ? i =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		ab.ae === a9P + 2 ? i =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		ab.ae === a9P + 3 ? i =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		ab.ae === a9P + 4 ? i =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		ab.ae === a9P + 5 ? i =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		ab.ae === a9P + 6 ? i =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		ab.ae === a9P + 7 ? i =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		ab.ae === a9P + 8 ? i =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		ab.ae === a9P + 9 && (i =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new yf).t(i)
}

function a9Q() {
	this.aP = aO.aP, this.iT = 0, this.a1e = 0, this.a1c = 0, this.a9R = null, this.a9S = 7, this.je = 0, this.aN = function() {
		this.a1c = 0, this.a9R = [], this.iT = 0, this.a1e = 0
	}, this.a9T = function(t6) {
		var f;
		if (jt) this.a1n(t6);
		else if (this.a9R.push(t6), 2 === aY) {
			for (f = 0; f < this.a9R.length; f++) kH.qV.aW(this.a9R[f]);
			this.a9R = []
		}
	}, this.a1n = function(t6) {
		kH.qV.aW(t6), qi.aW(), cm.a1n(this.a1c), this.a1c === qM ? (qL.aW(), this.a1c = 0, this.iT = 0, this.a1e = 0, this.aP = aO.aP) : (this.a1c++, ce.t1(), ce.qx(!0), qZ.vV())
	}, this.aW = function() {
		g8.aW(), jt ? (aO.an = cm.a1n(-1) || aO.an, xW()) : (0 !== this.iT || aO.aP >= this.aP && (this.aP += aO.a1i * Math.floor(1 + (aO.aP - this.aP) / aO.a1i), 2 === aY ? xO() : this.a9U(), this.iT++, 27 < aO.aP - this.je)) && this.a9V(),
		xT(), aO.an && (aO.an = !1, cT()), this.je = aO.aP
	}, this.a9V = function() {
		aO.an = !0, xV(), this.iT = 0
	}, this.a9U = function() {
		var a9W, f;
		if (this.a1e !== 7 * this.a1c) xQ(), qZ.vV();
		else {
			for (a9W = !1; this.a9X() && (a9W = !0, xQ(), 0 < this.a9R.length);)
				for (f = this.a9S - 2; 0 <= f; f--) xQ();
			a9W ? qZ.vV() : (xO(), qZ.t4())
		}
	}, this.a9X = function() {
		return 0 < this.a9R.length && (this.a1c++, kH.qV.aW(this.a9R[0]), this.a9R.shift(), !0)
	}
}

function a9Y() {
	var a8, a9Z, aD, aC, no;

	function a9f(f) {
		var aQ = a8[f].aJ.width,
			d0 = (a8[f].aK.clearRect(0, 0, aQ, aC), a8[f].aK.fillStyle = 0 !== a8[f].id ? "rgba(33,33,120,0.83)" : a8[f].cA === cK ? "rgba(88,88,88,0.83)" : a8[f].cA < j3 ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)", a8[f].aK.fillRect(0, 0, aQ,
				aC), xy(a8[f].aK, aQ, aC), a9Z + 2 * aC < aQ && (a8[f].aK.fillRect(aQ - a9Z - aC, 0, 1, aC), a8[f].aK.fillText(aj[a8[f].cA], Math.floor((aQ - a9Z) / 2), Math.floor(.57 * aC))), 0 !== a8[f].id ? 0 : aC);
		a8[f].aK.fillText(bG.hZ.ha(a8[f].ik), Math.floor(aQ - a9Z / 2 - d0), Math.floor(.57 * aC)),
			function(f, aQ, d0) {
				a8[f].aK.fillStyle = av.hm;
				var nU = Math.floor(a9Z * a8[f].ik / a8[f].a9j);
				a8[f].aK.fillRect(Math.floor(aQ - a9Z - d0), aC - no, nU, no)
			}(f, aQ, d0), 0 === a8[f].id ? (a9h(f, aQ), function(f, aQ) {
				a8[f].aK.strokeStyle = av.a9m, a8[f].aK.fillRect(aC, 0, 1, aC);
				aQ -= aC;
				a8[f].aK.beginPath(), a8[f].aK.moveTo(Math.floor(.3 * aC + aQ), Math.floor(aC / 2)), a8[f].aK.lineTo(Math.floor(aC - .3 * aC + 0 + aQ), Math.floor(aC / 2)), a8[f].aK.stroke(), a8[f].aK.beginPath(), a8[f].aK.moveTo(Math.floor(aC /
					2 + aQ), Math.floor(.3 * aC)), a8[f].aK.lineTo(Math.floor(aC / 2 + aQ), Math.floor(aC - .3 * aC + 0)), a8[f].aK.stroke()
			}(f, aQ)) : a9h(f, 2 * aC)
	}

	function a9h(f, aQ) {
		a8[f].aK.strokeStyle = a8[f].a9k ? av.a1X : av.a6T, a8[f].aK.fillStyle = av.b0, a8[f].aK.fillRect(aQ - aC, 0, 1, aC);
		var a9l = Math.floor(aC / 12),
			a9l = (a8[f].aK.lineWidth = a9l < 3 ? 3 : a9l, a8[f].aK.lineCap = "round", .35);
		aQ = aC + 1, a8[f].aK.beginPath(), a8[f].aK.moveTo(Math.floor(aQ - a9l * aC + 0), Math.floor(a9l * aC)), a8[f].aK.lineTo(Math.floor(aQ - aC + a9l * aC), Math.floor(aC - a9l * aC + 0)), a8[f].aK.stroke(), a8[f].aK.beginPath(), a8[f].aK.moveTo(
			Math.floor(aQ - aC + a9l * aC), Math.floor(a9l * aC)), a8[f].aK.lineTo(Math.floor(aQ - a9l * aC + 0), Math.floor(aC - a9l * aC + 0)), a8[f].aK.stroke()
	}

	function a9x(m) {
		for (var ik, f = m - 1; 0 <= f; f--) ik = cG.oH(kY, f), a8[f].ik !== ik && (a8[f].ik = ik, a8[f].a9j = ik > a8[f].a9j ? ik : a8[f].a9j, a8[f].r7 = !0)
	}

	function a9e(a3x) {
		a3x.aJ = document.createElement("canvas"), ab.hE.font = aD;
		var aQ = a9Z;
		a3x.cA < cK && 0 === a3x.id && (aQ += Math.floor(ab.hE.measureText(aj[a3x.cA] + "000").width)), aQ += aC, 0 === a3x.id && (aQ += aC), a3x.aJ.width = aQ, a3x.aJ.height = aC, a3x.aK = a3x.aJ.getContext("2d", {
			alpha: !0
		}), a3x.aK.font = aD, a3x.aK.textBaseline = b2, a3x.aK.textAlign = b1
	}

	function a9t(f) {
		return cn.a6O() ? eG - a8[f].aJ.width - aq : cn.b8
	}

	function a9u(f) {
		return Math.floor(2 * aq + (cn.a6O() ? cm.aC + aq : 0) + cn.aC + f * (1.3 * aC))
	}
	this.aN = function() {
		a8 = [], this.resize()
	}, this.resize = function() {
		aD = ci.aD, aC = ci.fontSize + 5, aC = Math.floor(1.25 * aC), aR && (aC = Math.floor(1.25 * aC)), no = Math.floor(.15 * aC), ab.hE.font = aD, a9Z = Math.floor(ab.hE.measureText("02 000 000 0000").width);
		for (var f = a8.length - 1; 0 <= f; f--) a9e(a8[f]), a9f(f)
	}, this.qx = function() {
		for (var f = a8.length - 1; 0 <= f; f--) a8[f].r7 && (a8[f].r7 = !1, a9f(f))
	}, this.eB = function(eO, b9) {
		if (2 !== aY && 0 !== oO[kY] && !fz && bh.kX(kY))
			for (var a9o, a9p, a9q, a9r = aR ? aC : 0, a9s = aR ? Math.floor(.15 * aC) : 0, f = a8.length - 1; 0 <= f; f--)
				if (a9o = a9t(f), a9p = a9u(f), a9q = a8[f].aJ.width, a9p - a9s <= b9 && b9 <= a9p + aC + a9s) {
					if (a9o - a9r <= eO && eO <= a9o + aC + a9r) return a8[f].a9k || (a8[f].r7 = !0, a8[f].a9k = !0, 0 === a8[f].id && kH.pa.wE(a8[f].cA)), !0;
					if (0 === a8[f].id && a9o + a9q - aC - a9r <= eO && eO <= a9o + a9q + a9r) return kH.pa.pg(ck.pc(), a8[f].cA), !0
				} return !1
	}, this.aW = function() {
		var m;
		2 !== aY && 0 !== oO[kY] && !fz && bh.kX(kY) && (function(m) {
			if (a8.length !== m) return 1;
			for (var f = m - 1; 0 <= f; f--)
				if (a8[f].id !== cG.cI(kY, f) || a8[f].cA !== cG.cJ(kY, f)) return 1;
			return
		}(m = cG.cH(kY)) && function(m) {
			var f, id, cA, u, ik, k1 = [];
			loop: for (f = 0; f < m; f++) {
				for (id = cG.cI(kY, f), cA = cG.cJ(kY, f), u = 0; u < a8.length; u++)
					if (a8[u].id === id && a8[u].cA === cA) {
						k1.push(a8.splice(u, 1)[0]);
						continue loop
					} ik = cG.oH(kY, f), a9e(ik = {
					cA: cA,
					ik: ik,
					a9j: ik,
					id: id,
					r7: !0,
					a9k: !1,
					aJ: null,
					aK: null
				}), k1.push(ik)
			}
			a8 = k1
		}(m), a9x(m))
	}, this.a9z = function(s) {
		for (var m = Math.min(a8.length, cG.cH(kY)), f = 0; f < m; f++)
			if (a8[f].cA === s) return void(a8 = [])
	}, this.ao = function() {
		if (0 !== oO[kY] && bh.kX(kY) && !fz)
			for (var f = a8.length - 1; 0 <= f; f--) ag.drawImage(a8[f].aJ, a9t(f), a9u(f))
	}
}

function aA0() {
	var iT = 0,
		aP = aO.aP;
	this.a1e = 0, this.aW = function() {
		g8.aW(), jt ? xW() : 0 === iT ? aO.aP >= aP && (aP += aO.a1i * Math.floor(1 + (aO.aP - aP) / aO.a1i), 2 === aY || cp.fx ? xO() : (xQ(), qZ.vV()), iT++) : ((cp.fx ? xW : (aO.an = !0, xV))(), iT = 0), xT(), aO.an && (aO.an = !1, cT())
	}
}

function a9F() {
	this.ip = 0, this.iT = 0, this.t6 = null, this.aN = function(t6) {
		this.iT = 0, this.t6 = t6, this.ip = t6.length
	}, this.dF = function(tB) {
		return this.aN(new Uint8Array(this.tD(tB))), this.t6
	}, this.gY = function() {
		this.t6 = null
	}, this.tq = function(ip, dr) {
		for (var t6 = this.t6, eJ = this.iT + ip - 1, f = this.iT; f <= eJ; f++) t6[f >> 3] |= (dr >> eJ - f & 1) << 7 - (7 & f);
		this.iT += ip, this.iT > 8 * this.ip && console.log("error wrapper")
	}, this.aA1 = function(ip) {
		for (var t6 = this.t6, eJ = this.iT + ip, f = this.iT; f < eJ; f++) t6[f >> 3] &= 255 ^ 128 >>> (7 & f)
	}, this.tD = function(tB) {
		return tB + 7 >> 3
	}, this.aA2 = function(r, it, eJ, aA3) {
		for (var f = it; f < eJ; f++) this.tq(aA3, r[f])
	}
}

function aA4() {
	var xJ = [0, 0, 0, 0];

	function aAG(b8, b9, bE, aAI) {
		ag.fillStyle = av.b0;
		var d0 = gu(2, Math.floor((aAI ? .5 : .35) * bE)),
			rG = (d0 -= d0 % 2, gu(2, Math.floor(.1 * bE))),
			bE = (rG -= rG % 2, Math.floor((bE - d0) / 2)),
			nC = Math.floor(bE + (d0 - rG) / 2);
		ag.fillRect(b8 + bE, b9 + nC, d0, rG), aAI && ag.fillRect(b8 + nC, b9 + bE, rG, d0)
	}

	function aAF(b8, b9, aQ, aC, pR, ee, aF, ik, gf) {
		ag.fillStyle = pR, ag.fillRect(b8, b9, aQ, aC), 0 <= ik && function(b8, b9, aQ, aC, ik) {
			ag.fillStyle = "rgba(" + 22 * ik + "," + (110 - 22 * ik) + ",0,0.75)", ag.fillRect(b8, b9, (1 + ik) * aQ / 6, aC)
		}(b8, b9, aQ, aC, ik), 0 < gf && function(b8, b9, aQ, aC, gf) {
			ag.fillStyle = "rgba(255,255,255,0.3)", ag.fillRect(b8, b9, gf * aQ / cK, aC)
		}(b8, b9, aQ, aC, gf), ag.strokeStyle = av.b0, ag.strokeRect(b8, b9, aQ, aC), 0 !== ee && (ag.fillStyle = av.b0, ag.font = aT + Math.floor(ee * aC) + aU, ag.fillText(aF, Math.floor(b8 + aQ / 2), Math.floor(b9 + .52 * aC)))
	}
	this.mo = [{
		bf: 0,
		gf: 512
	}], this.aN = function() {
		aA5.fa = !1, fT.setState(2), this.resize(), aO.an = !0
	}, this.gY = function() {}, this.resize = function() {
		xJ[2] = Math.floor((aR ? .49 : .4) * aS), xJ[1] = Math.floor((eY - xJ[2] / 6 - this.mo.length * (gs + xJ[2] / 10)) / 2), xJ[0] = Math.floor((eV - xJ[2]) / 2), aA5.fa && aA5.resize()
	}, this.aA6 = function(h0) {
		var f;
		if (6 < h0) this.mo = [{
			bf: 0,
			gf: 512
		}];
		else {
			for (this.mo = [], f = 0; f < h0 + 2; f++) this.mo.push({
				bf: 0,
				gf: 0
			});
			this.aA7()
		}
	}, this.aA8 = function(u2, u3) {
		for (var m = u2.length, f = 0; f < m; f++) this.mo[f].bf = u2[f], this.mo[f].gf = u3[f]
	}, this.aA9 = function(lF) {
		var f, m;
		if (1 === lF.jq.length)
			for (m = this.mo.length, lF.u2 = new Array(m), lF.u3 = new Array(m), f = 0; f < m; f++) lF.u2[f] = this.mo[f].bf, lF.u3[f] = this.mo[f].gf
	}, this.uc = function() {
		aO.an = !0, aA5.fa ? aA5.fa = !1 : (this.gY(), ga.aN())
	}, this.qT = function() {
		var f, gf;
		if (jx.jy) return jx.ac.aAA;
		for (gf = 0, f = this.mo.length - 1; 0 <= f; f--) gf += this.mo[f].gf;
		return gf
	}, this.eK = function(b8, b9) {
		return !(!aA5.fa || !aA5.eK(b8, b9)) || -1 !== this.fk(b8, b9)
	}, this.aAB = function() {
		fL.bS.fN = 0, fL.bS.nZ(0, 3) && fL.hN.a17(0)
	}, this.aAC = function() {
		var g;
		this.aAB(), fT.uT(), jx.jy ? jx.aAD() : (g = (g = this.mo.length - 2) < 0 ? 7 : g, qN(Math.floor(16384 * Math.random()), 0, [{
			name: ga.a3k(),
			sN: tf.a8[2].ky.a4T(),
			u1: 0
		}], g, !1, !1))
	}, this.eB = function(b8, b9) {
		if (ob.fa || tf.a8[1].ky.fa || tf.a8[2].ky.fa) return !1;
		if (aA5.fa && !jx.jy) return aA5.eB(b8, b9);
		var f, g, max, d0, b9 = this.fk(b8, b9);
		if (-1 === b9) return !1;
		if (0 === b9) this.uc();
		else if (1 === b9) jx.jy ? (jx.fd(), aO.an = !0) : aA5.show();
		else if (100 === b9) fi.a0M();
		else if (2 === b9) this.gY(), this.aAC();
		else {
			if (jx.jy) return !1;
			if (27 === b9) this.mo.length < 8 && (this.mo.push({
				bf: 0,
				gf: cK
			}), this.aA7(), this.resize(), aO.an = !0);
			else if (f = Math.floor((b9 - 3) / 3), b9 % 3 == 0) 1 < this.mo.length && (this.mo.splice(f, 1), this.resize(), aO.an = !0);
			else if (d0 = (xJ[2] - xJ[2] / 10 - 2 * gs) / 2, b9 % 3 == 1) 0 === f && 1 === this.mo[f].gf || (b8 < xJ[0] + xJ[2] - 1.5 * d0 - gs ? this.mo[f].bf-- : this.mo[f].bf++, this.mo[f].bf < 0 ? this.mo[f].bf = 5 : 5 < this.mo[f].bf && (
				this.mo[f].bf = 0), aO.an = !0);
			else {
				for (aO.an = !0, b9 = (b8 - (xJ[0] + xJ[2] - d0)) / d0 - .5, b9 *= b9 < 0 ? -b9 : b9, b9 = 0 === (b9 = Math.floor(b9 * cK)) ? 1 : b9, max = cK, g = this.mo.length - 1; 0 <= g; g--) f !== g && (max -= this.mo[g].gf);
				if (b9 < 0) {
					if (1 === this.mo[f].gf) return this.mo[f].gf = max, !0
				} else if (this.mo[f].gf === max) return this.mo[f].gf = 1, !0;
				this.mo[f].gf += b9, this.mo[f].gf < 1 ? this.mo[f].gf = 1 : this.mo[f].gf > max && (this.mo[f].gf = max)
			}
		}
		return !0
	}, this.aA7 = function() {
		for (var gf = Math.floor(cK / this.mo.length), aAE = cK % this.mo.length, f = this.mo.length - 1; 0 <= f; f--) this.mo[f].gf = gf;
		this.mo[0].gf += aAE
	}, this.fk = function(b8, b9) {
		var d0 = (xJ[2] - 3 * gs) / 4,
			rG = xJ[2] / 6;
		if (b8 < xJ[0] || b9 < xJ[1] || xJ[0] + xJ[2] <= b8) return -1;
		if (b9 < xJ[1] + rG) return b8 < xJ[0] + d0 ? 0 : b8 < xJ[0] + d0 + gs ? -1 : b8 < xJ[0] + 2 * d0 + gs ? 100 : b8 < xJ[0] + 2 * (d0 + gs) ? -1 : b8 < xJ[0] + 3 * d0 + 2 * gs ? 1 : b8 < xJ[0] + 3 * (d0 + gs) ? -1 : 2;
		for (var hM, x5 = xJ[2] / 10, d0 = (xJ[2] - x5 - 2 * gs) / 2, f = 0; f < this.mo.length; f++) {
			if (b9 < (hM = xJ[1] + rG + gs + f * (x5 + gs))) return -1;
			if (!(hM + x5 < b9)) return b8 < xJ[0] + x5 ? 3 + 3 * f : b8 < xJ[0] + x5 + gs ? -1 : b8 < xJ[0] + xJ[2] - d0 - gs ? 4 + 3 * f : b8 < xJ[0] + xJ[2] - d0 ? -1 : 5 + 3 * f
		}
		return !(this.mo.length < 8) || b9 < (hM = xJ[1] + rG + gs + this.mo.length * (x5 + gs)) || hM + x5 < b9 || xJ[0] + x5 < b8 ? -1 : 27
	}, this.ao = function() {
		ag.lineWidth = ln, ag.textAlign = b1, ag.textBaseline = b2;
		var d0 = (xJ[2] - 3 * gs) / 4,
			rG = xJ[2] / 6;
		if (aAF(xJ[0], xJ[1], d0, rG, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), aAF(xJ[0] + d0 + gs, xJ[1], d0, rG, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), aAF(xJ[0] + 2 * (d0 + gs), xJ[1], d0, rG, "rgba(" + (jx.jy ? 128 : 0) +
				",128,128,0.75)", .34, jx.jy ? "Reset" : "Maps", -1, -1), aAF(xJ[0] + xJ[2] - d0, xJ[1], d0, rG, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !jx.jy) {
			for (var hM, x5 = xJ[2] / 10, d0 = (xJ[2] - x5 - 2 * gs) / 2, f = 0; f < this.mo.length; f++) hM = xJ[1] + rG + gs + f * (x5 + gs), aAF(xJ[0], hM, x5, x5, 1 < this.mo.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)", 0, null, -
				1), 1 < this.mo.length && aAG(xJ[0], hM, x5, !1), aAF(xJ[0] + x5 + gs, hM, d0, x5, av.ax, .4, this.aAH(f), this.mo[f].bf, -1), aAF(xJ[0] + xJ[2] - d0, hM, d0, x5, av.ax, .4, this.kq(f), -1, this.mo[f].gf);
			this.mo.length < 8 && (hM = xJ[1] + rG + gs + this.mo.length * (x5 + gs), aAF(xJ[0], hM, x5, x5, "rgba(0,128,20,0.75)", 0, null, -1, -1), aAG(xJ[0], hM, x5, !0)), aA5.fa && aA5.ao()
		}
	}, this.aAH = function(f) {
		return 0 === f && 1 === this.mo[f].gf ? "You" : qd.me[this.mo[f].bf]
	}, this.kq = function(f) {
		return 1 === this.mo[f].gf ? "1 Player" : this.mo[f].gf + " Players"
	}
}

function aAL() {
	var aAM, aAN, aAO, aAP, aAQ, aAR;
	this.aN = function() {
		aAO = aAM = 10, aAP = aAN = 10
	}, this.aAS = function() {
		aAR = 512, aAQ = new Uint16Array(aAR);
		for (var f = 0; f < aAR; f++) aAQ[f] = 100 + aAT(a1(25600 * f, aAR - 4), 9)
	}, this.a5G = function() {
		return aAP
	}, this.aW = function() {
		if (--aAO <= 0 && (aAO = aAM, function() {
				var f, aAY, cQ = im[kY];
				for (ld && !ar && 0 !== oO[0] && 0 === mn.mo[0].bf && (im[0] += a1(bx[0], 6)), f = li - 1; 0 <= f; f--) aAY = a1(qa.su(lj[f]) * im[lj[f]], 1e4), im[lj[f]] += aAY < 1 ? 1 : aAY, qa.a7f(lj[f]);
				kP.kQ[9] += im[kY] - cQ
			}(), --aAP <= 0)) {
			aAP = aAN;
			for (var cQ = im[kY], f = li - 1; 0 <= f; f--) im[lj[f]] += bx[lj[f]], qa.a7f(lj[f]);
			kP.kQ[8] += im[kY] - cQ
		}
	}, this.su = function(player) {
		var a4 = aAQ[a1((aAR - 1) * bx[player], qG)],
			aAX = (aO.lZ() < 1920 && (a4 = a4 < (aAX = a1(100 * (13440 - 6 * aO.lZ()), 1920)) ? aAX : a4), this.a6S(player));
		return im[player] > aAX && (a4 -= a1(2 * a4 * (im[player] - aAX), aAX)), a4 < 0 ? 0 : 700 < a4 ? 700 : a4
	}, this.a6S = function(player) {
		player = 100 * bx[player];
		return qH < player ? qH : player
	}, this.a7f = function(player) {
		var y = bx[player] * qF;
		im[player] = Math.min(Math.min(im[player], oM), y)
	}, this.pb = function(player, ss) {
		bG.kI.o8(ss, iY.ig[0]), kP.lL(player, ss), ce.aAa(player, iY.ig[0] + iY.ig[1]), ce.vk(ss, iY.ig[0]), bG.kI.a3F(player)
	}
}

function aAb() {
	var aAc = [new a84, new aAd],
		aAe = aAc.length,
		iT = -1;
	this.resize = function() {
		0 <= iT && aAc[iT].a7M().resize()
	}, this.show = function(f) {
		0 <= iT && aAc[iT].a7M().nG(), aAc[iT = f].a7M().show(), aAc[iT].a7M().resize()
	}, this.nG = function() {
		0 <= iT && (aAc[iT].a7M().nG(), iT = -1)
	}, this.aAf = function(title, iV, aAg) {
		for (var f = aAe; f < aAc.length; f++)
			if (aAc[f].a7N() === title) return void this.show(f);
		aAc.push(new a7H(title, iV, aAg, iT)), this.show(aAc.length - 1)
	}
}

function a3S() {
	var username;
	return jZ ? a42.username : (12 <= ja ? "" === (username = om.loadString(20)) && (username = "Android User " + Math.floor(1e3 * Math.random()), om.saveString(20, username)) : 5 <= ja ? "" === (username = om.loadString(0)) && (username =
		"Player " + Math.floor(1e3 * Math.random()), om.saveString(0, username)) : username = v0.uz(0), username)
}

function a3W() {
	var i, max;
	if (jZ) i = a42.password;
	else if (12 <= ja) i = om.loadString(22);
	else {
		if (5 <= ja) return 0;
		i = v0.uz(9)
	}
	return max = Math.floor(Math.pow(2, 48)), 0 < (i = Math.floor(parseInt(t9.z(i)))) && i < max || a3g(i = Math.floor(1 + (max - 1) * Math.random())) ? i : 0
}

function aAh() {
	var cQ;
	jZ ? aR = a42.zoom || eV < eY : 12 <= ja ? -1 === (cQ = om.loadNumber(21)) ? (aR = om.getNumber(0) <= 100 || eV < eY, om.saveNumber(21, aR ? 1 : 0)) : aR = 1 === cQ || eV < eY : 5 <= ja ? 2 === (cQ = om.loadNumber(1)) ? (aR = !0, om.saveNumber(1,
		aR ? 1 : 0)) : aR = 1 === cQ : aR = 0 === v0.uz(4) || eV < eY
}

function aAi() {
	return jZ ? a42.emojis : 5 <= ja ? om.loadString(1) : v0.uz(7)
}

function a4B() {
	return jZ ? a42.colors : 12 <= ja ? om.loadString(21) : 5 <= ja ? om.loadString(2) : v0.uz(8)
}

function a3Z(username) {
	jZ ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + username) : 12 <= ja ? (om.saveString(20, username), om.setState(10)) : 5 <= ja ? om.saveString(0, username) : ((username.length < 3 || 0 <= username.indexOf(";")) && (
		username = "Player 666"), v0.uy(0, username), v0.ut())
}

function a3g(a3V) {
	a3V = t9.x(a3V.toString());
	return jZ ? (a42.password = a3V, window.webkit.messageHandlers.iosCommandA.postMessage("password " + a3V), !0) : 12 <= ja ? (om.saveString(22, a3V), !0) : !(5 <= ja || 2 !== v0.ul() || (v0.uy(9, a3V), v0.ut(), 0))
}

function zQ(zoom, aAj) {
	jZ ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (zoom ? 1 : 0)), window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (aAj ? 1 : 0))) : 12 <= ja ? (om.saveNumber(22, aAj ? 1 : 0), om.saveNumber(21, zoom ? 1 :
		0)) : 5 <= ja ? (om.saveNumber(1, zoom ? 1 : 0), om.saveNumber(11, aAj ? 1 : 0)) : (v0.uy(2, aAj ? 1 : 0), v0.uy(4, zoom ? 0 : 1), v0.ut())
}

function xp() {
	for (var i = "", f = 0; f < ge.a3J; f += 2) i += ge.xn[f] || ge.xn[f + 1] ? ge.xn[f] && !ge.xn[f + 1] ? "1" : !ge.xn[f] && ge.xn[f + 1] ? "2" : "3" : "0";
	jZ ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + i) : 5 <= ja ? om.saveString(1, i) : (v0.uy(7, i), v0.ut())
}

function a4E(i) {
	if (jZ) window.webkit.messageHandlers.iosCommandA.postMessage("colors " + i);
	else {
		if (12 <= ja) om.saveString(21, i);
		else if (5 <= ja) return void om.saveString(2, i);
		v0.uy(8, i), v0.ut()
	}
}

function qv(m3) {
	jZ || 5 <= ja && om.setState(m3)
}

function a6r() {
	!jZ && 7 <= ja ? om.setState(5) : location.reload()
}

function aAk() {
	ja < 17 || om.saveString(23, document.documentElement.outerHTML)
}

function aAm() {
	var aAn, aAo, aAp, aAq, aAr, aAs, aAt, aAu, aAv, aAw, aAx, aAy, aAz, aB0, aB1, aB2, aB3, aB4, aB6, aB7, aB8, aB9, aBA, aBG, aBH, aB5 = null,
		aBC = 0,
		aBD = new Float32Array(4),
		aBE = 0,
		aBF = !0;

	function aBI() {
		aB5.width = eG, aB5.height = eH, (aB6 = aB5.getContext("2d", {
			alpha: !0
		})).textAlign = b1, aB6.textBaseline = b2, aB6.imageSmoothingEnabled = !0
	}

	function aBJ() {
		var f, aBN;
		for (ag.font = aT + Math.floor(100 * aAx) + aU, aBN = 80 / Math.floor(ag.measureText(bG.hZ.ha(oM)).width), ag.font = aT + 100 + aU, f = cK - 1; 0 <= f; f--) aAu[f] = 100 / Math.floor(ag.measureText(aj[f]).width), aAt[f] = Math.min(aBN, aAu[
			f])
	}

	function aBO(f) {
		return !eC.eD.vR || im[f] < 1e6 ? 1 : im[f] < 1e7 ? aBD[0] : aBD[Math.min(Math.floor(Math.log10(im[f])) - 6, 3)]
	}

	function aBM(bI) {
		aB4 = !1, aB3 = 1, aB1 = aB2 = 0, aBF ? (bI.textAlign = b1, bI.textBaseline = b2) : bI.clearRect(0, 0, eG, eH);
		var vN, vO, f, fontSize, vP, hL = ds / cW,
			hM = dt / cW,
			nC = (eG + ds) / cW,
			he = (eH + dt) / cW,
			aBS = 0 !== oO[kY] && bh.kX(kY);
		bI.imageSmoothingEnabled = !0;
		for (var g = li - 1; 0 <= g; g--) f = lj[g], (fontSize = aB0 * cW * aBO(f) * aAt[f] * aAr[f]) < aAz || aAv <= fontSize || aAp[f] + aAr[f] > hL && aAp[f] < nC && aAq[f] + aAs[f] > hM && aAq[f] < he && (vN = eG * (aAp[f] + aAr[f] / 2 - hL) / (
			nC - hL), vO = eH * (aAq[f] + aAs[f] / 2 - hM) / (he - hM) - .1 * fontSize, bI.font = xt[kW[f]] + fontSize + aU, bI.fillStyle = function(fontSize, f) {
			if (aAw <= fontSize && fontSize < aAv) return cB.aBh[bh.mA[f]] + aBc(fontSize).toFixed(3) + ")";
			return cB.aBi[bh.mA[f]]
		}(fontSize, f), eC.eD.vR ? bI.fillText(bG.hZ.ha(im[f]), vN, vO) : aBU(f, fontSize, vN, vO, bI), aB4 = !0, 0 < aB8[f] ? function(vN, vO, fontSize, f, bI) {
			0 === aBW[f] ? ge.aBQ(aB7[f]) ? (function(vN, vO, fontSize, player, kt, bI) {
				for (var a1J = .9 * fontSize / ge.aQ, lk = vO - .5 * a1J * ge.aQ - .05 * fontSize, sg = (bI.globalAlpha = aBc(fontSize), aBO(player) * (eC.eD.vR ? aBE : aAu[player])), qB = vN - .5 * fontSize / sg - .4 * fontSize -
						a1J * ge.aQ, u = 0; u < 2; u++) bI.setTransform(a1J, 0, 0, a1J, qB, lk), bI.drawImage(ge.bF[kt], 0, 0), qB = vN + .5 * fontSize / sg + .4 * fontSize;
				bI.globalAlpha = 1, bI.setTransform(1, 0, 0, 1, 0, 0)
			}(vN, vO, fontSize, f, aB7[f], bI), aBX(vN, vO, fontSize, 0, 0, bI)) : ge.aBf(aB7[f]) ? (aBg(vN, vO, fontSize, aB7[f], 0, bI), aBX(vN, vO, fontSize, 0, 1, bI)) : (aBg(vN, vO, fontSize, aB7[f], 1, bI), aBX(vN, vO, fontSize, 1,
				0, bI)) : aBg(vN, vO, fontSize, aB7[f], 0, bI)
		}(vN, vO, fontSize, f, bI) : 0 === aBW[f] && aBX(vN, vO, fontSize, 0, 0, bI), aBS && (0 < aB8[f + cK] || 0 < aB8[f + 2 * cK] || 0 < aB8[f + 3 * cK] || 0 < aB8[f + 4 * cK]) && function(vN, vO, fontSize, f, bI) {
			var o, gf = -1;
			for (o = 4; 1 <= o; o--) 0 < aB8[f + o * cK] && gf++;
			for (o = 1; o < 5; o++) 0 < aB8[f + o * cK] && (! function(vN, vO, fontSize, o, f, aBa, cQ, bI) {
				var a1J = .8 * fontSize / ge.aQ,
					vN = vN - .5 * a1J * ge.aQ - .534 * aBa * fontSize,
					aBa = vO + 1.4 * a1J * ge.aQ;
				bI.setTransform(a1J, 0, 0, a1J, vN, aBa), bI.globalAlpha = aBc(fontSize), vO = 1 === o ? ge.bF[aB7[f + cK]] : 2 === o ? cq.pI()[4].aJ[cQ < 255 ? 1 : 0] : (3 === o ? cq.pI()[5] : cq.pI()[6]).aJ[0];
				bI.drawImage(vO, 0, 0), bI.globalAlpha = 1, bI.setTransform(1, 0, 0, 1, 0, 0)
			}(vN, vO, fontSize, o, f, gf, aB8[f + o * cK], bI), gf -= 2)
		}(vN, vO, fontSize, f, bI), (vP = aAx * fontSize) < aAz || (bI.font = aT + vP + aU, eC.eD.vR ? aBU(f, vP, vN, vO + .78 * fontSize, bI) : bI.fillText(bG.hZ.ha(im[f]), vN, vO + .78 * fontSize)));
		bI.imageSmoothingEnabled = !1
	}

	function aBU(f, fontSize, b8, b9, bI) {
		bI.fillText(aj[f], b8, b9), f < j3 && 2 !== kW[f] || (f = fontSize / aAu[f], bI.fillRect(b8 - .5 * f, b9 + bG.bH.zy * fontSize, f, Math.max(1, .1 * fontSize)))
	}

	function aBX(vN, vO, fontSize, aBa, aBb, bI) {
		var a1J = .95 * fontSize / aBA,
			vN = vN - .5 * a1J * aB9 + .8 * aBa * fontSize,
			aBa = vO - 1.76 * a1J * aBA - .82 * aBb * fontSize;
		bI.setTransform(a1J, 0, 0, a1J, vN, aBa), bI.globalAlpha = aBc(fontSize), bI.drawImage(gd.get(4), 0, 0), bI.globalAlpha = 1, bI.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aBg(vN, vO, fontSize, kt, aBa, bI) {
		var a1J = 1.2 * fontSize / ge.aQ,
			vN = vN - .5 * a1J * ge.aQ - .8 * aBa * fontSize,
			aBa = vO - 1.5 * a1J * ge.aQ;
		bI.setTransform(a1J, 0, 0, a1J, vN, aBa), bI.globalAlpha = aBc(fontSize), bI.drawImage(ge.bF[kt], 0, 0), bI.globalAlpha = 1, bI.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aBc(fontSize) {
		return aAw <= fontSize && fontSize < aAv ? 1 - (fontSize - aAw) / (aAv - aAw) : 1
	}

	function aBr(sg, aQ) {
		return 1 + Math.floor(aAy * sg * aQ)
	}

	function aBo(f) {
		for (var left = aAp[f], g = aAp[f] - bY[f] - 1; 0 <= g; g--)
			if (!aBs(f, --left, aAq[f], aAs[f])) {
				left++;
				break
			} var right = aAp[f];
		for (g = bb[f] - aAp[f] - aAr[f]; 0 <= g; g--)
			if (!aBs(f, ++right + aAr[f] - 1, aAq[f], aAs[f])) {
				right--;
				break
			} var b8 = Math.floor((left + right) / 2),
			top = aAq[f];
		for (g = aAq[f] - ba[f] - 1; 0 <= g; g--)
			if (!aBt(f, b8, --top, aAr[f])) {
				top++;
				break
			} var bottom = aAq[f];
		for (g = bc[f] - aAq[f] - aAs[f]; 0 <= g; g--)
			if (!aBt(f, b8, ++bottom + aAs[f] - 1, aAr[f])) {
				bottom--;
				break
			} var b9 = Math.floor((top + bottom) / 2);
		aBl(f, b8, b9, aAr[f], aAs[f]) && (aAp[f] = b8, aAq[f] = b9)
	}

	function aBl(player, b8, b9, aQ, aC) {
		bf = Math.floor(.2 * aQ);
		for (var bf, o = b8 + aQ - 1; b8 <= o; o--)
			if (!aBs(player, o, b9, aC)) return;
		for (o = b9 + aC - 1 - (bf = (bf = Math.floor(.25 * aC)) < 1 ? 1 : bf); b9 + bf <= o; o--)
			if (!aBt(player, b8, o, aQ)) return;
		return 1
	}

	function aBs(player, b8, b9, aC) {
		return bh.c0(player, 4 * (b9 * ab.bX + b8)) && bh.c0(player, 4 * ((b9 + aC - 1) * ab.bX + b8))
	}

	function aBt(player, b8, b9, aQ) {
		return bh.c0(player, 4 * (b9 * ab.bX + b8)) && bh.c0(player, 4 * (b9 * ab.bX + b8 + aQ - 1))
	}
	this.aN = function() {
		if (aB4 = !1, aB0 = .88, aAx = .5, aAy = 1.8, aAv = Math.floor(.5 * wt), aAw = Math.floor(.2 * aAv), aAz = eC.eD.a47 < 4 ? 1 + eC.eD.a47 : 2 * (eC.eD.a47 - 1), aAo = aAn = 0, aAp = new Uint16Array(cK), aAq = new Uint16Array(cK), aAr =
			new Uint16Array(cK), aAs = new Uint16Array(cK), aAt = new Float32Array(cK), aAu = new Float32Array(cK), aB7 = new Uint8Array(2 * cK), aB8 = new Uint8Array(5 * cK), aBG = new Uint8Array(cK), aBH = new Uint8Array(cK), aBF || (aB5 =
				aB5 || document.createElement("canvas"), aBI()), aB2 = aB1 = 0, aB3 = 1, eC.eD.vR) {
			var f, aBN;
			for (aBJ(), ag.font = aT + Math.floor(100) + aU, aBN = 100 / Math.floor(ag.measureText("900 000").width), f = cK - 1; 0 <= f; f--) aAt[f] = Math.min(aBN, 2 * aAu[f]);
			aBE = aBN, aBD[0] = 100 / (aBN * Math.floor(ag.measureText("5 000 000").width)), aBD[1] = 100 / (aBN * Math.floor(ag.measureText("50 000 000").width)), aBD[2] = 100 / (aBN * Math.floor(ag.measureText("500 000 000").width)), aBD[3] =
				100 / (aBN * Math.floor(ag.measureText("1 000 000 000").width))
		} else aBJ();
		! function() {
			var f;
			for (f = cK - 1; 0 <= f; f--) bx[f] < 12 ? (aAp[f] = bY[f] + 1, aAq[f] = ba[f] + 1, aAr[f] = 1, aAs[f] = 1) : (aAp[f] = bY[f], aAq[f] = ba[f] + 1, aAr[f] = 4, aAs[f] = 2);
			if (jt)
				for (f = 0; f < j3; f++) aAr[f] = 0;
			aB9 = gd.get(4).width, aBA = gd.get(4).height
		}()
	}, this.aAa = function(s, lM) {
		lM > 18 * bx[s] ? (aBH[s] = 6, bh.mA[s] = 2 + bh.mA[s] % 2) : (aBG[s] = 4, (bh.mA[s] < 2 || 3 < bh.mA[s]) && (bh.mA[s] = 6 + bh.mA[s] % 2))
	}, this.vk = function(s, lM) {
		lM > 6 * bx[s] ? (aBH[s] = 6, bh.mA[s] = 4 + bh.mA[s] % 2) : (aBG[s] = 4, (bh.mA[s] < 4 || 5 < bh.mA[s]) && (bh.mA[s] = 8 + bh.mA[s] % 2))
	}, this.resize = function() {
		aBF || (aBI(), aBM(aB6))
	}, this.t1 = function() {
		for (var f = 0; f < j3; f++) bb[f] - bY[f] != 3 || bc[f] - ba[f] != 3 ? (aAp[f] = bY[f] + (bb[f] !== bY[f] ? 1 : 0), aAq[f] = ba[f], aAr[f] = 1, aAs[f] = 1) : (aAp[f] = bY[f], aAq[f] = ba[f] + 1, aAr[f] = 4, aAs[f] = 2)
	}, this.lD = function(player, iT, aBP) {
		player += iT * cK;
		if (0 === iT) return aB7[player] === aBP && 0 < aB8[player] ? void(aB8[player] = 0) : (aB7[player] = aBP, void(aB8[player] = ge.aBQ(aBP) ? 255 : 64));
		1 === iT ? (aB8[player] = 64, aB7[player] = aBP) : aB8[player] = aBP
	}, this.ao = function() {
		aBF ? aBM(ag) : aB4 && (1 !== aB3 ? (ag.imageSmoothingEnabled = !0, ag.setTransform(aB3, 0, 0, aB3, 0, 0), ag.drawImage(aB5, -aB1 / aB3, -aB2 / aB3), ag.setTransform(1, 0, 0, 1, 0, 0)) : (ag.imageSmoothingEnabled = !1, ag.drawImage(aB5, -
			aB1, -aB2)))
	}, this.ed = function(bB, bC) {
		aB1 += bB, aB2 += bC
	}, this.eK = function(bB, bC) {
		ce.ed(bB, bC)
	}, this.zoom = function(ee, eO, eP) {
		aB3 *= ee, aB1 = (aB1 + eO) * ee - eO, aB2 = (aB2 + eP) * ee - eP
	}, this.qx = function(lY) {
		return !aBF && (lY ? ++aBC % eC.a3z[eC.eD.a49] == 0 : aO.lZ() % eC.a3z[eC.eD.a49] == 0) && (aBC = 0, aBM(aB6), !0)
	}, this.vQ = function(f) {
		return aBO(f) * aAt[f]
	}, this.aBR = function(player) {
		return aAt[player]
	}, this.aW = function() {
		4 <= ++aAo && ! function() {
			var f, g, u;
			for (aAo = 0, u = 4; 1 <= u; u--)
				for (g = li - 1; 0 <= g; g--) f = lj[g] + u * cK, 0 < aB8[f] && aB8[f] < 255 && aB8[f]--;
			if (2 !== aY)
				for (g = li - 1; 0 <= g; g--) f = lj[g], 0 < aB8[f] && aB8[f] < 255 && aB8[f]--
		}();
		for (var m = Math.floor(.1 * li), f = aAn + (m = li < (m = m < 8 ? 8 : m) ? li : m) - 1; aAn <= f; f--) ! function(f) {
			var sg = aBO(f) * aAt[f];
			0 < aAr[f] && aBl(f, aAp[f], aAq[f], aAr[f], aAs[f]) ? ! function(f) {
				for (var b8, b9, aQ, aC, bO = !1, u = 0; u < 8; u++) {
					if (aQ = aAr[f] + 2, aC = aAs[f] + 2, aQ > bb[f] - bY[f] + 1 || aC > bc[f] - ba[f] + 1) return bO;
					if (b8 = aAp[f] - 1, b9 = aAq[f] - 1, !aBl(f, b8, b9, aQ, aC)) return bO;
					aAp[f] = b8, aAq[f] = b9, aAr[f] = aQ, aAs[f] = aC, bO = !0
				}
				return bO
			}(f) && function(f, sg) {
				for (var b8, b9, aQ, aC, bO = !1, tg = aAr[f], eQ = 1 + Math.floor(.02 * tg), u = 1; u < 5; u++) {
					if ((aQ = tg + u * eQ) > bb[f] - bY[f] + 1) return bO;
					if ((aC = aBr(sg, aQ)) > bc[f] - ba[f] + 1) return bO;
					b8 = bY[f] + Math.floor(Math.random() * (bb[f] - bY[f] + 2 - aQ)), b9 = ba[f] + Math.floor(Math.random() * (bc[f] - ba[f] + 2 - aC)), aBl(f, b8, b9, aQ, aC) && (aAp[f] = b8, aAq[f] = b9, aAr[f] = aQ, aAs[f] = aC,
						bO = !0)
				}
				return bO
			}(f, sg) && aBo(f) : ! function(f, sg) {
				var aC, b8 = aAp[f] + 1,
					b9 = aAq[f] + 1,
					aQ = aAr[f] - 2;
				for (;;) {
					if (aQ < 1) {
						aAr[f] = 0;
						break
					}
					if (aC = aBr(sg, aQ), aBl(f, b8, b9, aQ, aC)) return aAp[f] = b8, aAq[f] = b9, aAr[f] = aQ, aAs[f] = aC, 1;
					b8++, b9++, aQ -= 2
				}
				return
			}(f, sg) ? function(f, sg) {
				var b8, b9, aQ, aC, u, eJ, it = bb[f] - bY[f] + 1,
					dX = Math.floor(.02 * it);
				for (eJ = -6 * (dX = dX < 1 ? 1 : dX), u = it; eJ <= u; u -= dX)
					if (aC = aBr(sg, aQ = 0 < u ? u : 1), b8 = bY[f] + Math.floor(Math.random() * (bb[f] - bY[f] + 2 - aQ)), b9 = ba[f] + Math.floor(Math.random() * (bc[f] - ba[f] + 2 - aC)), aBl(f, b8, b9, aQ, aC)) return aAp[f] = b8,
						aAq[f] = b9, aAr[f] = aQ, aAs[f] = aC
			}(f, sg) : aBo(f)
		}(lj[f % li]);
		aAn = (aAn + m) % li
	}, this.xS = function() {
		var f, s, hD, a1u;
		if (aO.lZ() % 4 == 1)
			for (f = li - 1; 0 <= f; f--) s = lj[f], bh.mA[s] < 2 || ((hD = Math.max(aBG[s] - 1, 0)) === (a1u = Math.max(aBH[s] - 1, 0)) ? 0 === hD && (bh.mA[s] %= 2) : 0 === a1u && bh.mA[s] < 6 && (bh.mA[s] += 4), aBG[s] = hD, aBH[s] = a1u)
	}, this.ka = function(player) {
		var f = player + 2 * cK,
			cQ = aB8[f];
		return 0 < cQ && (ci.lJ(50, player), aB8[f] = 0, 255 === cQ)
	}, this.q1 = function(player) {
		return 255 === aB8[player + 2 * cK]
	}
}

function aBv() {
	this.aN = function() {
		aBu = 2, a6s = 15142, tz = 14, a41 = "1.91.9   19 Feb 2024", a7F = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io"), a7G = function() {
			try {
				return window.self !== window.top
			} catch (cE) {
				return !0
			}
		}(), a6u = (new Date).getTime() % 1024
	}, this.a9H = 0
}

function aBx() {
	var fa, aBy, aQ, aC, rG, aBz, aC0, aA, aJ, aL, aC1;

	function ca() {
		return Math.floor((eG - aQ) / 2) < ck.aC + 2 * aq ? eH - aC - 4 * aq - ck.aC : eH - aC - 2 * aq
	}
	this.a5F = -1, this.aN = function() {
		aC1 = fa = !1, rG = .61, aBz = .07, aC0 = .09, aL = aA = aC = 0, this.a5F = -1
	}, this.resize = function() {
		var aK, hL, o, aC6, aC7, a1J;
		fa && (aQ = rN(aQ = aR ? Math.floor(.69 * aS) : Math.floor(.5 * aS), gu(eV - 2 * aq, 10)), aQ = rN(aQ, Math.floor(3.57 * gu(eY - 2 * aq, 3))), aC = Math.floor(.28 * aQ), (aJ = document.createElement("canvas")).width = aQ, aJ.height = aC,
			aK = aJ.getContext("2d", {
				alpha: !0
			}), hL = Math.floor(1 + aC / 40), aK.clearRect(0, 0, aQ, aC), aK.fillStyle = av.ax, aK.fillRect(hL, hL, aQ - 2 * hL, aC - 2 * hL), aK.lineJoin = "bevel", aK.lineWidth = 2 * hL, aK.strokeStyle = av.b0, aK.strokeRect(hL, hL, aQ -
				2 * hL, aC - 2 * hL), aK.imageSmoothingEnabled = !0, o = gd.get(aBy), aC6 = o.width, aC7 = o.height, a1J = (21 === aBy ? .666 : 1) * rG * aC / aC7, aK.setTransform(a1J, 0, 0, a1J, Math.floor((aQ - a1J * aC6) / 2), Math.floor((
				aC - a1J * aC7) / 2)), aK.drawImage(o, 0, 0), aK.setTransform(1, 0, 0, 1, Math.floor(aQ - aC0 * aC - aBz * aC - hL), Math.floor(hL + aBz * aC)),
			function(aK, m) {
				aK.lineWidth = Math.floor(1 + aC / 80), aK.strokeStyle = av.b0, aK.beginPath(), aK.moveTo(0, 0), aK.lineTo(m, m), aK.moveTo(0, m), aK.lineTo(m, 0), aK.stroke()
			}(aK, Math.floor(aC0 * aC)), aK.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(y, aC3, aC4, aC5) {
		fa || aC5 && aC1 || (aBy = aC4 ? 21 : y ? 1 : 2, fa = aC1 = !0, this.resize(), cq.nG(), ck.rI(), aL = aO.aP, -1 === this.a5F && (this.a5F = aO.lZ()), aA = aC3 ? 1 : 0)
	}, this.aW = function() {
		!fa || 1 <= aA || (aA = 1 < (aA += 5e-4 * (aO.aP - aL)) ? 1 : aA, aL = aO.aP, aO.an = !0)
	}, this.eB = function(b8, b9) {
		return !(!fa || aA <= 0 || (b8 -= Math.floor((eG - aQ) / 2), b9 -= ca(), b8 < 0) || b9 < 0 || aQ < b8 || aC < b9 || (aQ - aC / 3 < b8 && b9 < aC / 3 && (fa = !1, aO.an = !0), 0))
	}, this.ao = function() {
		!fa || aA <= 0 || (ag.globalAlpha = aA, ag.drawImage(aJ, Math.floor((eG - aQ) / 2), ca()), ag.globalAlpha = 1)
	}
}

function aC9() {
	var aCA, aCB, no, nU, a86, aCC, aCD, aCE, aCF, aD, fontSize, aL, aCG, a0x, aCH = 0;

	function aCJ() {
		return fL.bS.a0p[(aCG + aCH) % fL.bS.a0o]
	}

	function aCI() {
		aCG++, aL = aO.aP, fL.bS.nZ(aCJ(), 4) && (a0x = !0, fL.hN.a6t(aCJ()))
	}

	function aCK() {
		0 === aCG ? ub.wg(3249) : (aCG === fL.bS.a0o - 1 && (aCG = -1), aCI())
	}

	function aCO(b9, nK, h7) {
		var hL = Math.floor((eG - nU) / 2) + aCD,
			nC = hL + Math.floor(h7 * (nU - 2 * aCD));
		ag.lineWidth = nK, ag.beginPath(), ag.moveTo(hL, b9), ag.lineTo(nC, b9), ag.lineTo(Math.floor(hL - aCD + h7 * nU), b9 + no), ag.lineTo(hL - aCD, b9 + no), ag.closePath()
	}
	this.aN = function() {
		fT.setState(6), aCA = 0, aCB = 1, aCE = "rgba(0,220,120,0.4)", aCF = "rgba(0,0,0,0.8)", this.resize(), aO.an = !0, aCG = 0, a0x = !1, aCI()
	}, this.resize = function() {
		nU = Math.floor((aR ? .5 : .25) * aS), a86 = nU + 12, no = Math.floor(.125 * nU), aCD = 3 * no, aCC = Math.floor(.225 * nU), fontSize = Math.floor(.3 * no), aD = xs + fontSize + aU
	}, this.a3c = function(g) {
		aCH = g
	}, this.a0e = function(a0d) {
		a0d === aCJ() && (a0x = !1, aCK())
	}, this.nb = function(a0d) {
		6 !== fT.fp() || a0x || (aL = aO.aP, a0x = !0, fL.hN.a6t(a0d))
	}, this.eB = function(b8, b9) {
		var hL = Math.floor((eG - a86) / 2),
			hM = Math.floor(.5 * (eH - gs - no - aCC)) + no + gs;
		return hL < b8 && b8 < hL + a86 && hM < b9 && b9 < hM + aCC && (this.ua(), hJ.eK(b8, b9, !1), !0)
	}, this.ua = function() {
		fL.bS.gZ(3260), ga.aN(), aO.an = !0
	}, this.aW = function() {
		6 === fT.fp() && (a0x ? aO.aP > aL + 12e3 && ub.wg(3250) : aO.aP > aL + 12e3 && aCK(), 100 < (aCA += .07 * aCB * (aCA < 16 ? 5 + aCA : 84 < aCA ? 105 - aCA : 17)) ? (aCA = 100, aCB = -1) : aCA < 0 && (aCA = 0, aCB = 1), aCE = "rgba(0," +
			Math.floor(190 - 1.9 * aCA) + "," + Math.floor(120 - 1.2 * aCA) + "," + (.4 + .004 * aCA) + ")", aCF = "rgba(0," + Math.floor(1.9 * aCA) + "," + Math.floor(1.2 * aCA) + "," + (.8 - .004 * aCA) + ")", aO.an = !0)
	}, this.ao = function() {
		var b8 = Math.floor((eG - a86) / 2),
			b9 = Math.floor(.5 * (eH - gs - no - aCC));
		! function(title, b9, nK, h7) {
			ag.fillStyle = aCF, aCO(b9, nK, 1), ag.fill(), ag.fillStyle = aCE, aCO(b9, nK, h7), ag.fill(), ag.strokeStyle = av.b0, aCO(b9, nK, 1), ag.stroke(),
				function(aCQ, b9) {
					ag.textAlign = b1, ag.textBaseline = b2, ag.font = aD, ag.fillStyle = av.b0, ag.fillText(aCQ, Math.floor(.5 * eG), Math.floor(b9 + .58 * no))
				}(title, b9)
		}("Loading", b9, 3, aCA / 100),
		function(b8, b9, aQ, aC, aF) {
			ag.fillStyle = av.hS, ag.fillRect(b8, b9, aQ, aC), ag.lineWidth = 3, ag.strokeStyle = av.b0, ag.strokeRect(b8, b9, aQ, aC);
			var m = Math.floor(.3 * aC);
			ag.textAlign = b1, ag.textBaseline = b2, ag.font = xs + m + aU, ag.fillStyle = av.b0, ag.fillText(aF, Math.floor(b8 + aQ / 2), Math.floor(b9 + aC / 2 + .1 * m))
		}(b8, b9 + no + gs, a86, aCC, "Back")
	}
}

function aCR() {
	this.tx = new a4W, this.a8c = new ti, this.a8a = new wT, this.aN = function(qO, jq, h0, h1) {
		var ty;
		fz || ((ty = {}).qP = kY, ty.qO = qO, ty.jq = jq, ty.h0 = h0, ty.h1 = h1, ty.h3 = ab.ae, ty.h4 = ab.gy, mn.aA9(ty), this.tx.aN(ty))
	}, this.aW = function() {
		fz || this.tx.aW()
	}, this.a8Z = function() {
		var lF = this.tx.ty;
		0 === aY && fT.uT(), ab.dF(lF.h3, lF.h4), 1 === lF.jq.length && (mn.aA6(lF.h0), mn.aA8(lF.u2, lF.u3)), fL.bS.close(fL.bS.fN, 3246), mn.aAB(), qN(lF.qO, lF.qP, lF.jq, lF.h0, lF.h1, !0)
	}, this.a8X = function(i) {
		var f = i.indexOf("=");
		return 0 <= f ? i.substring(f + 1) : i
	}, this.a8d = function(i) {
		return "https://territorial.io/?replay=" + i
	}
}

function aCS() {
	var iT = 0,
		aCT = new Uint16Array(32);

	function remove(dg) {
		var f;
		for (iT -= 2, f = dg; f < iT; f += 2) aCT[f] = aCT[f + 2], aCT[f + 1] = aCT[f + 3]
	}
	this.aN = function() {
		iT = 0
	}, this.aW = function() {
		var f, cA, sr;
		if (0 !== iT)
			if (0 === oO[kY] || cG.oK(kY) === cG.cH(kY)) iT = 0;
			else
				for (f = iT - 2; 0 <= f; f -= 2)(cA = aCT[f]) < cK && 0 === oO[cA] ? remove(f) : (sr = aCT[f + 1], (cK <= cA && cL(kY) || cA < cK && cM(kY, cA)) && (kH.pa.pg(sr, cA), remove(f)))
	}, this.pi = function(cA, sr) {
		! function(cA, sr) {
			var f;
			for (f = 0; f < iT; f += 2)
				if (aCT[f] === cA) return aCT[f + 1] = Math.min(aCT[f + 1] + sr, 1023), 1;
			return
		}(cA, sr) && 32 !== iT && (aCT[iT] = cA, aCT[iT + 1] = sr, iT += 2)
	}
}

function aCW() {
	var aCX = !1,
		jd = 0,
		aQ = 0,
		d0 = 0,
		gap = 0,
		aJ = null,
		aK = null,
		a20 = null;

	function aCZ() {
		for (var gh, aCc = 0, m = 0, o = Math.floor(aQ / 2), a4 = Math.floor(d0 / 2), gg = 1.5 * Math.PI, f = qK; 0 <= f; f--) m += a20[f], 0 === a20[f] && aCc++;
		if (aCX = !1, aK.clearRect(0, 0, aQ, aQ), aK.fillStyle = av.ax, aK.fillRect(0, 0, aQ, aQ), aK.fillStyle = av.b0, aK.fillRect(0, 0, aQ, gap), aK.fillRect(0, 0, gap, aQ), aK.fillRect(aQ - gap, 0, gap, aQ), aK.fillRect(0, aQ - gap, aQ, gap), 0 <
			m)
			if (aCc === qK) {
				for (f = qK; 0 <= f; f--)
					if (0 < a20[f]) {
						! function(f, o, a4) {
							aK.fillStyle = cB.gl[cB.os[f]], aK.beginPath(), aK.arc(o, o, a4, 0, 2 * Math.PI), aK.fill()
						}(f, o, a4);
						break
					}!
				function(o) {
					var fontSize = o / 3;
					aK.font = bG.bH.a02(fontSize, 1), aK.fillStyle = av.b0, aK.fillText("100%", o, o + .1 * fontSize)
				}(o)
			} else {
				for (f = 0; f <= qK; f++) 0 < a20[f] && (! function(f, o, a4, gg, gh) {
					aK.fillStyle = cB.gl[cB.os[f]], aK.beginPath(), aK.arc(o, o, a4, gg, gh), aK.lineTo(o, o), aK.fill()
				}(f, o, a4, gg, gh = gg + 2 * Math.PI * a20[f] / m), function(o, a4, gg, gh) {
					var y = (gh - gg) / (2 * Math.PI),
						fontSize = +a4 * Math.min(y, .37);
					fontSize < 8 || (gg = (gg + gh) / 2, gh = Math.floor(100 * y + .5) + "%", a4 *= .525 - Math.max(.6 * (y - .7), 0), aK.font = bG.bH.a02(fontSize, 1), aK.fillStyle = av.b0, aK.fillText(gh, o + Math.cos(gg) * a4, o + Math
						.cos(gg + 1.5 * Math.PI) * a4))
				}(o, a4, gg, gh), 0 !== f && gj(o, a4, gg), gg = gh);
				gj(o, a4, 1.5 * Math.PI)
			}!
		function(o, a4) {
			aK.beginPath(), aK.arc(o, o, a4, 0, 2 * Math.PI), aK.stroke()
		}(o, a4)
	}

	function gj(o, a4, gm) {
		aK.beginPath(), aK.moveTo(o, o), aK.lineTo(o + Math.cos(gm) * a4, o + Math.cos(gm + 1.5 * Math.PI) * a4), aK.stroke()
	}
	this.aN = function() {
		if (ar) {
			var f;
			for (jd = 0, a20 = new Uint32Array(qK + 1), f = qK; 0 <= f; f--) a20[f] = 0;
			for (f = li - 1; 0 <= f; f--) a20[cB.cC[lj[f]]] += 1;
			this.resize()
		} else a20 = aK = aJ = null
	}, this.at = function() {
		return aQ
	}, this.resize = function() {
		ar && (aQ = Math.floor(aR && !cg ? .18 * wt : .13 * aS), aQ = (aQ *= 1 + (.5 + .2 * aR) * cg) + aQ % 2, d0 = Math.floor(7 * aQ / 8), (aJ = aJ || document.createElement("canvas")).width = aQ, aJ.height = aQ, aK = aJ.getContext("2d", {
			alpha: !0
		}), gap = Math.max(1, .015 * aQ), aK.lineWidth = gap, aK.strokeStyle = av.b0, bG.bH.textAlign(aK, 1), bG.bH.textBaseline(aK, 1), aCZ())
	}, this.ou = function() {
		return a20[this.ot()]
	}, this.vu = function() {
		return jd = 31, this.aW(), this.ot()
	}, this.ot = function() {
		for (var aCa = 0, f = qK; 0 < f; f--) a20[f] > a20[aCa] && (aCa = f);
		return aCa
	}, this.aW = function() {
		if (ar && 32 <= ++jd) {
			var f;
			for (jd = 0, f = qK; 0 <= f; f--) a20[f] = 0;
			for (f = li - 1; 0 <= f; f--) a20[cB.cC[lj[f]]] += bx[lj[f]];
			aCX = !0
		}
	}, this.jV = function() {
		ar && aCX && aCZ()
	}, this.ao = function() {
		ar && (cg ? ag.drawImage(aJ, aq, aq) : ag.drawImage(aJ, aq, au + 2 * aq))
	}
}

function aCg() {
	function aCh() {
		aO.aP = performance.now(), aO.vx.aW(), window.requestAnimationFrame(aCh)
	}

	function aCi() {
		var cQ = performance.now();
		aO.aP + 1500 < cQ && (aO.aP = cQ, aO.vx.aW())
	}
	this.vx = null, this.an = !1, this.aP = 0, this.oU = -1, this.a1i = 56, this.aN = function() {
		this.r0(), window.requestAnimationFrame(aCh), this.aP = performance.now()
	}, this.qt = function() {
		fz ? (this.vx = new a1Y, this.vx.aN()) : ld ? this.vx = new aA0 : (this.vx = new a9Q, this.vx.aN())
	}, this.r0 = function() {
		this.vx = new oW, this.an = !0
	}, this.g4 = function() {
		1 !== aY || !ld || cp.fx || jt || cp.fy(), -1 === this.oU && (this.oU = setInterval(aCi, 2e3))
	}, this.g5 = function() {
		this.an = !0, -1 !== this.oU && (clearInterval(this.oU), this.oU = -1)
	}, this.aW = function() {
		this.vx.a1e++
	}, this.lZ = function() {
		return this.vx.a1e
	}
}

function a8R() {
	var a8Q, aCj = !0;

	function aCk() {
		a8Q.select(), document.execCommand("copy")
	}
	this.fn = !1, this.aN = function() {
		(a8Q = document.createElement("textarea")).setAttribute("name", "replayData"), a8Q.setAttribute("id", "replayDataField"), a8Q.setAttribute("autocomplete", "off"), a8Q.setAttribute("placeholder", "Insert the replay link here!"), a8Q.style
			.position = "absolute", a8Q.style.resize = "none", a8Q.style.borderRadius = "0", a8Q.style.color = av.b0, a8Q.style.backgroundColor = av.eg, a8Q.addEventListener("focus", function() {
				ct.fn = !0
			}), a8Q.addEventListener("blur", function() {
				ct.fn = !1
			})
	}, this.show = function() {
		document.body.appendChild(a8Q)
	}, this.nG = function() {
		document.body.removeChild(a8Q)
	}, this.resize = function(b8, b9, aQ, aC) {
		bG.bH.a00(a8Q.style, b8, b9, aQ, aC), a8Q.style.font = bG.bH.a02(Math.max(5, .1 * aC / fP), 0)
	}, this.a8b = function(ex) {
		a8Q.value = ex
	}, this.a8Y = function() {
		return a8Q.value
	}, this.a8U = function() {
		a8Q.select()
	}, this.o9 = function() {
		a8Q.value = ""
	}, this.a8V = function() {
		aCj && navigator.clipboard ? (a8Q.select(), navigator.clipboard.writeText(a8Q.value).catch(function() {
			aCj = !1, aCk()
		})) : aCk()
	}
}

function aCl() {
	var m2, aCm, aCn, aCo, a0v = !1;

	function aCp() {
		a0v = !0, m2 = -1, aCm = new Array(4);
		for (var f = 3; 0 <= f; f--) aCm[f] = !1;
		var aCq = Math.floor(1 + .02 * wt);
		aCn = new Array(4), (aCo = new Array(4))[1] = aCo[3] = aCn[0] = aCn[2] = 0, aCo[0] = aCn[3] = -aCq, aCn[1] = aCo[2] = aCq
	}

	function aCr() {
		if (-1 !== m2)
			if (0 !== aY && eI.eJ()) {
				for (var aCs = !1, f = 3; 0 <= f; f--) aCm[f] && (aCs = !0, ds += aCn[f], dt += aCo[f], ce.eK(aCn[f], aCo[f]), cY.eN());
				aCs ? aO.an = !0 : fs.a5b()
			} else fs.a5b()
	}
	this.g1 = function(iT) {
		0 !== aY && eI.eJ() && (a0v || aCp(), aCm[iT] = !0, -1 === m2) && (m2 = setInterval(aCr, 20), aCr())
	}, this.ft = function(iT) {
		if (0 !== aY && (a0v || aCp(), aCm[iT] = !1, -1 !== m2)) {
			for (var aCs = !1, f = 3; 0 <= f; f--) aCs = aCs || aCm[f];
			aCs || this.a5b()
		}
	}, this.a5b = function() {
		if (a0v && -1 !== m2) {
			for (var f = 3; 0 <= f; f--) aCm[f] = !1;
			clearInterval(m2), m2 = -1
		}
	}
}

function a5r() {
	this.ao = function() {
		if (0 !== cb.bS.jd && (ag.globalAlpha = Math.min(cb.bS.jd / 580, 1), ag.drawImage(cb.bS.x8, 1 + cY.cZ(), 1 + cY.ca()), ag.globalAlpha = 1, jt)) {
			var f, hL = ds / cW,
				hM = dt / cW,
				nC = (eG + ds) / cW,
				he = (eH + dt) / cW,
				cN = cb.bS.x7 * cW,
				x9 = cb.bS.x9;
			for (f = j3 - 1; 0 <= f; f--) ! function(f, cN, hL, hM, nC, he, x9) {
				0 === oO[f] || 0 === bx[f] || (nC = eG * ((bY[f] + bb[f] + 1) / 2 - hL) / (nC - hL) - .5 * cN, hL = eH * ((ba[f] + bc[f] + 1) / 2 - hM) / (he - hM) - .5 * cN, eG < nC) || eH < hL || nC < -cN || hL < -cN || (ag.setTransform(cW,
					0, 0, cW, nC, hL), ag.drawImage(x9[ar ? cB.cC[f] : 1], 0, 0))
			}(f, cN, hL, hM, nC, he, x9);
			ag.setTransform(cW, 0, 0, cW, 0, 0)
		}
	}
}

function a7L(title, aCw, aCx) {
	var aCy, aCz, aD0, aD1, f, aD2;
	for ((aCy = document.createElement("div")).style.position = "absolute", aCy.style.top = "0", aCy.style.left = "0", aCy.style.width = "100vw", aCy.style.height = "100vh", aCy.style.maxHeight = "100vh", aCy.style.backgroundColor = av.hS, aCy.style
		.backdropFilter = "blur(5px)", (aCz = document.createElement("div")).style.width = "100%", aCz.style.display = "flex", aCz.style.backgroundColor = av.a34, (aD2 = document.createElement("h1")).innerText = title, aD2.style.textAlign = "center",
		aD2.style.width = "70%", aD2.style.margin = "auto", aD2.style.color = av.b0, (aD1 = document.createElement("div")).style.right = "0", aD1.style.width = "30%", (aD0 = document.createElement("div")).style.overflowY = "auto", aD0.style
		.position = "absolute", aD0.style.left = "0", aD0.style.right = "0", aD0.style.bottom = "0", aCz.appendChild(aD2), aCz.appendChild(aD1), aCy.appendChild(aCz), aCy.appendChild(aD0), aCw.aN(aD1), aCw.a4g(), f = 0; f < aCx.length; f++) aCx[f]
		.aN(aD0);
	this.resize = function() {
		var f, aD3 = bG.bH.rd(.5) * aS / fP * .09,
			aD4 = .12 * aD3,
			aD5 = .02 * aD3;
		for (aCz.style.height = (aD3 + 2 * aD4).toFixed(1) + "px", aCz.style.borderBottom = aD5.toFixed(1) + "px solid " + av.b0, aD1.style.padding = aD4.toFixed(1) + "px", aD0.style.top = (aD3 + 2 * aD4 + aD5).toFixed(1) + "px", aD0.style
			.padding = aD4.toFixed(1) + "px", aD0.style.paddingBottom = (2 * aD4).toFixed(1) + "px", aCy.style.font = bG.bH.a02(.23 * aD3, 0), f = 0; f < aCx.length; f++) aCx[f].resize();
		aCw.resize()
	}, this.show = function() {
		document.body.appendChild(aCy)
	}, this.nG = function() {
		document.body.removeChild(aCy)
	}
}

function tU() {
	function zM(yE, aD6) {
		if (function(yE, zU) {
				var a2W = bP.wM(yE),
					aD9 = Math.abs(bP.kj(zU) - bP.kj(a2W)),
					a2W = Math.abs(bP.kk(zU) - bP.kk(a2W));
				return 0 !== Math.max(aD9, a2W) && (function(y7, yE, aD9, aDA) {
					var aDC = bP.a2j(y7),
						y7 = bP.a2l(y7),
						aDE = bP.a2j(yE),
						yE = bP.a2l(yE),
						aDE = aDE - aDC,
						yE = yE - y7,
						aDI = Math.abs(aDE),
						aDJ = Math.abs(yE),
						aDE = 0 < aDE ? 1 : 3,
						yE = 0 < yE ? 2 : 0;
					aDJ < aDI ? aDM(aDC, y7, aDC + aDI, y7 + aDJ, aDE, yE, aD9) : aDM(y7, aDC, y7 + aDJ, aDC + aDI, yE, aDE, aDA)
				}(yE, bP.y8(zU), aD9, a2W), !0)
			}(yE, aD6)) {
			if (0 === iY.a0D[0]) return !!bh.br(aD6 << 2);
			if (function(zU) {
					if (bh.br(zU << 2)) return 1;
					return function(zU) {
						var f, dh, xz = bR.bS.xz,
							aDQ = bP,
							m = iY.a0D[0],
							aDR = 4 * zU;
						for (f = m - 1; 0 <= f; f--)
							if (dh = xz[f], aDR = aDQ.a2r(aDR, dh + 2 & 3), bh.br(aDR)) return iY.a0D[0] = f, iY.pz[1] = aDR >> 2, iY.pz[2] = 1 + dh, 1;
						return
					}(zU)
				}(aD6)) {
				var f, aD6 = bP.wM(yE),
					bK = sR,
					xz = bR.bS.xz,
					m = iY.a0D[0] - 1,
					aDR = 4 * aD6,
					a2T = bP.a2T;
				for (f = 0; f < m; f++)
					if (aDR += a2T[xz[f]], 0 !== bK[aDR + 3] || 2 !== bK[aDR + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aDM(aDC, aDD, aDE, aDF, aDK, aDL, aD9) {
		for (var b9, xz = bR.bS.xz, cN = 0, aDN = 0, aC = aDF - aDD, aQ = aDE - aDC, aDO = aDC % 16, f = 1; f <= aD9; f++) xz[cN++] = aDK, xz[cN] = aDL, cN += (b9 = (aC * (aDO + (f << 4)) + .5) / aQ >> 4) - aDN, aDN = b9;
		iY.a0F(iY.a0D, cN)
	}
	this.zW = function(player, aD6) {
		var dh, a2W, a2V = bP.a2Z(player, aD6);
		return a2V !== aD6 && (dh = bP.a2U(a2V, aD6), a2W = bP.a2q(a2V, dh), !(!bh.br(a2W << 2) && (dh = bP.a2Y(a2V, aD6, dh), a2W = bP.a2q(a2V, dh), bh.bs(a2W << 2) || !bh.br(a2W << 2)) || (iY.pz[0] = a2W, iY.pz[1] = aD6, iY.pz[2] = 0, !zM(bP
			.y8(a2W), aD6)) || 0 !== iY.pz[2] && bP.a2h(player, iY.pz[1] + bP.wQ[iY.pz[2] - 1] << 2)))
	}, this.zb = function(aD6) {
		var y7 = bR.bS.wJ[iY.pz[3]];
		return iY.pz[1] = aD6, iY.pz[2] = 0, zM(y7, aD6)
	}
}

function aDT() {
	this.fa = !1, this.a8 = null, this.a3m = 0, this.aQ = null, this.aC = null, this.aDU = .013, this.aDV = .022, this.aDW = .025;
	this.aDY = 3, this.aDZ = 1.2, this.aDa = .2, this.aDb = .235, this.aDc = .9, this.aDd = .08;
	var aDf, aDe = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		aDg = [-1e6, -1e6];
	this.position = [0, 0], this.a6z = [0, 0], this.aN = function() {
		this.a8 = [null, null], this.fa = !1, this.a3m = 0
	}, this.lo = function(id) {
		this.fa = !0, this.resize(), this.a3m = id, this.jV(), fm.lo(!1), aO.an = !0
	}, this.aW = function() {
		this.fa && this.jV()
	}, this.jV = function() {
		aO.aP - 12e4 >= aDg[this.a3m] && (aDg[this.a3m] = aO.aP, this.a6z = [0, 0], fL.bS.nZ(0, 1 + this.a3m)) && fL.hN.a16(0, this.a3m)
	}, this.resize = function() {
		if (this.fa) {
			var f;
			for (this.aQ = this.aDi(aR ? .85 : .66, .75, eV, eY), this.aC = Math.floor(this.aQ / .75), f = 1; 0 <= f; f--) this.a8[f] && (this.a8[f][4] = aT + Math.floor(this.a8[f][5] * this.aC / 10) + aU);
			aDf = aT + Math.floor(.1 * this.aC) + aU
		}
	}, this.aDi = function(ee, sg, aQ, aC) {
		return aQ < sg * aC ? Math.floor(ee * aQ) : Math.floor(sg * ee * aC)
	}, this.aDj = function(iT, aDk, aDl, i1, aDm, aDn, aDo) {
		this.position[iT] = aDo;
		for (var a3x, ip = aDk.length, aD = aT + Math.floor(aDm * this.aC / 10) + aU, r = (this.aDp(aDk, aD, aDn * this.aQ), [
				[], ip, -1, i1, aD, aDm, 10 * aDo
			]), f = 0; f < ip; f++) a3x = {
			name: aDk[f].name,
			value: aDk[f].l3 / aDl,
			colorIndex: aDk[f].colorIndex
		}, r[0].push(a3x);
		this.a8[iT] = r, this.aDq(iT);
		aDn = this.a8[iT][0][0].name;
		1 === iT && (aDn = "[" + aDn + "]"), 0 === aDo && gt.zk(iT, aDn), aO.an = !0
	}, this.aDq = function(f) {
		this.a8[f][0].sort(function(g, u) {
			return u.value - g.value
		})
	}, this.gv = function(iT, name, aDr, aDs) {
		if (this.a8 && this.a8[iT]) {
			var f, lH = !1;
			if (0 === iT) {
				for (f = 0; f < this.a8[iT][0].length; f++)
					if (name === this.a8[iT][0][f].name && aDr > .99 * this.a8[iT][0][f].value && aDr < 1.01 * this.a8[iT][0][f].value) {
						this.a8[iT][0][f].value = aDs, lH = !0;
						break
					} lH || this.a8[iT][0].push({
					name: name,
					value: aDs
				})
			} else {
				for (f = 0; f < this.a8[iT][0].length; f++)
					if (name === this.a8[iT][0][f].name) {
						this.a8[iT][0][f].value += 32 < this.a8[iT][0][f].value ? (64 - this.a8[iT][0][f].value) / 256 : .25, this.a8[iT][0][f].value *= 1 / (383 / 384), lH = !0;
						break
					} for (f = 0; f < this.a8[iT][0].length; f++) this.a8[iT][0][f].value *= 383 / 384;
				lH || this.a8[iT][0].push({
					name: name,
					value: .25
				})
			}
			this.aDq(iT)
		}
	}, this.aDp = function(aDk, aD, zl) {
		for (var f = aDk.length - 1; 0 <= f; f--)
			for (; 3 < aDk[f].name.length && aZ.measureText(aDk[f].name, aD) > zl;) aDk[f].name = aDk[f].name.substring(0, aDk[f].name.length - 4) + "..."
	}, this.eB = function(e7, eA) {
		return !!this.fa && (e7 -= (eG - this.aQ) / 2, eA -= (eH - this.aC) / 2, e7 < 0 || e7 > this.aQ || eA < 0 || eA > this.aC ? (this.fa = !1, 0 === fT.fp() && fm.lo(!0), aO.an = !0) : (eA = eA < .3 * this.aC ? 1 : eA < .85 * this.aC ? (eA =
				(0 === this.a3m ? 14.1 : 3) * (eA - .3 * this.aC) / (.55 * this.aC), Math.floor(1 + eA * eA)) : 0 === this.a3m ? 200 : 10, e7 < this.aQ / 2 ? this.a6z[this.a3m] = -eA : this.a6z[this.a3m] = eA, aDg[this.a3m] + 50 > aO
			.aP || (aDg[this.a3m] = aO.aP, fL.bS.nZ(0, 1 + this.a3m) && fL.hN.a16(0, this.a3m)), !0))
	}, this.ao = function() {
		var hL, hM, d0, d1, a4n, a4o, hV, hW;
		this.fa && (hL = (eG - this.aQ) / 2, hM = (eH - this.aC) / 2, d0 = this.aDU * this.aQ, d1 = this.aDY * d0, a4n = this.aDV * this.aQ, a4o = this.aDZ * a4n, hV = this.aDW * this.aQ, hW = Math.floor(.25 * this.aC), ag.setTransform(1, 0, 0,
				1, hL, hM), ag.fillStyle = 0 === this.a3m ? av.aDt : av.a8e, ag.fillRect(0, 0, this.aQ, hW), ag.fillStyle = av.ra, ag.fillRect(0, hW, this.aQ, this.aC - hW), ag.fillStyle = av.b0, ag.font = aDf, ag.textBaseline = b2, ag
			.textAlign = b1, ag.fillText(aDe[this.a3m], Math.floor(this.aQ / 2), Math.floor(.135 * this.aC)), ag.font = aT + Math.floor(.025 * this.aC) + aU, ag.fillText(aDe[this.a3m + 2], Math.floor(this.aQ / 2), Math.floor(.2125 * this
			.aC)), ag.beginPath(), ag.moveTo(this.aQ / 4, 0), ag.lineTo(this.aQ / 2 - d0, 0), ag.lineTo(this.aQ / 2, -d1), ag.lineTo(this.aQ / 2 + d0, 0), ag.lineTo(this.aQ - a4n, 0), ag.lineTo(this.aQ + a4o, -a4o), ag.lineTo(this.aQ, a4n),
			ag.lineTo(this.aQ, this.aC / 2 - d0), ag.lineTo(this.aQ + d1, this.aC / 2), ag.lineTo(this.aQ, this.aC / 2 + d0), ag.lineTo(this.aQ, this.aC - a4n), ag.lineTo(this.aQ + a4o, this.aC + a4o), ag.lineTo(this.aQ - a4n, this.aC), ag
			.lineTo(this.aQ / 2 + d0, this.aC), ag.lineTo(this.aQ / 2, this.aC + d1), ag.lineTo(this.aQ / 2 - d0, this.aC), ag.lineTo(a4n, this.aC), ag.lineTo(-a4o, this.aC + a4o), ag.lineTo(0, this.aC - a4n), ag.lineTo(0, this.aC / 2 + d0),
			ag.lineTo(-d1, this.aC / 2), ag.lineTo(0, this.aC / 2 - d0), ag.lineTo(0, a4n), ag.lineTo(-a4o, -a4o), ag.lineTo(a4n, 0), ag.lineTo(this.aQ / 4, 0), ag.lineTo(this.aQ / 4, hV), ag.lineTo(hV, hV), ag.lineTo(hV, this.aC - hV), ag
			.lineTo(this.aQ - hV, this.aC - hV), ag.lineTo(this.aQ - hV, hV), ag.lineTo(this.aQ / 4, hV), ag.fill(), this.a8[this.a3m] && this.aCf(hW), this.aAG(hW), ag.setTransform(1, 0, 0, 1, 0, 0))
	}, this.aAG = function(hW) {
		var d0 = gu(2, Math.floor(.06 * this.aQ)),
			rG = (d0 -= d0 % 2, gu(2, Math.floor(.01 * this.aQ))),
			hW = (rG -= rG % 2, Math.floor(.82 * hW));
		ag.fillRect(d0, hW, d0, rG), ag.fillRect(this.aQ - d0 - d0, hW, d0, rG), ag.fillRect(Math.floor(this.aQ - d0 - d0 + (d0 - rG) / 2), Math.floor(hW - (d0 - rG) / 2), rG, d0)
	}, this.aCf = function(hW) {
		var b9;
		ag.font = this.a8[this.a3m][4];
		for (var f = this.a8[this.a3m][1] - 1; 0 <= f; f--) ag.textAlign = hY, b9 = Math.floor(this.aDd * this.aC + hW + f * ((1 - 2 * this.aDd) * this.aC - hW) / 9), ag.fillText(this.a8[this.a3m][0][f].value.toFixed(this.a8[this.a3m][3]), Math
			.floor(this.aDc * this.aQ), b9), ag.fillText(f + 1 + this.a8[this.a3m][6] + ".", Math.floor(this.aDa * this.aQ), b9), ag.textAlign = hX, ag.fillText(this.a8[this.a3m][0][f].name, Math.floor(this.aDb * this.aQ), b9)
	}
}

function a7e() {
	aDu() ? (aDv(), by !== cK && aDw()) : a7b()
}

function aDw() {
	bw(), bz(bn[by]), bz(bt[by]), c1(be[by]), c3(bt[by]), c3(bu[by]), c4(), c8()
}

function aDv() {
	a7V = !0, cG.oL(bZ, a7O, a7P), bx[bZ] += bV, bU(), aDx()
}

function aDu() {
	return (by === cK ? aDy : aDz)()
}

function aDz() {
	var aE0 = bV * qJ,
		aE1 = aE2(),
		aE3 = aE4(),
		aE1 = aE0 + 2 * aE1 + aE3,
		aE6 = a7Q * bV;
	return aE1 < aE6 ? (a7P -= aE1, aE7(aE1 - aE0, aE3), !0) : (a7P -= aE6, aE7(aE6 - aE0, aE3), !1)
}

function aE7(aE6, aE3) {
	if (0 < aE3) {
		if (!(aE3 <= aE6)) return cG.o7(by, bZ, aE3 - aE6), void(aE6 = 0);
		cG.o7(by, bZ, 0), aE6 -= aE3
	}
	aE6 = a1(aE6, 2), im[by] >= aE6 ? im[by] -= aE6 : im[by] = 0
}

function aE4() {
	return cG.j8(by, bZ)
}

function aE2() {
	return yP.hp(bV * im[by], 1 + yP.hp(10 * bx[by], 16))
}

function aE8() {
	return Math.floor(2 + aAT(a1(bx[by], 100), 8))
}

function aE9() {
	return bn[by].length + a1(bt[by].length + bu[by].length, 50)
}

function aDy() {
	return a7P -= bV * qJ, !0
}

function aDx() {
	for (var f = bV - 1; 0 <= f; f--) be[bZ].push(bW[f]), bn[bZ].push(bW[f]), bh.c7(bW[f], bZ)
}

function a14() {
	var a0d, a0z, a9A;

	function aED() {}

	function a15() {
		fL.bS.a15(a0d, a0z)
	}

	function aEF(cE) {
		fL.ks.aEH(a0d, new Uint8Array(cE.data))
	}

	function aEG() {}

	function a1D(cE) {
		fL.bS.a1D(a0d, cE)
	}
	this.aN = function(iT, aEA) {
		a0d = iT, a0z = aEA, 0;
		iT = xv[0];
		a0d < fL.bS.a0m ? iT += fL.bS.a0r[a0d] + xv[1 + aBu] : iT += fL.bS.a0r[0] + "/i" + (1 + aBu) + (a0d - fL.bS.a0n) + "/", (a9A = new WebSocket(iT)).binaryType = "arraybuffer", a9A.onopen = a15, a9A.onmessage = aEF, a9A.onclose = a1D, a9A
			.onerror = aEG
	}, this.aEC = function() {
		return a9A.readyState === a9A.CONNECTING
	}, this.a0x = function() {
		return a9A.readyState === a9A.OPEN
	}, this.a11 = function() {
		return this.aEC() || this.a0x()
	}, this.a12 = function(aEA) {
		a0z = aEA
	}, this.send = function(t6) {
		this.a0x() && a9A.send(t6)
	}, this.close = function(a1A) {
		this.a11() && (a9A.close(a1A), this.nG())
	}, this.nG = function() {
		a9A.onopen = aED, a9A.onmessage = aED, a9A.onclose = aED, a9A.onerror = aED
	}
}

function ya0_0x32d3(_0x31462c, _0x52c968) {
	var _0x3dbca7 = ya0_0x3dbc();
	return (ya0_0x32d3 = function(_0x32d356, _0x48aa80) {
		return _0x3dbca7[_0x32d356 -= 377]
	})(_0x31462c, _0x52c968)
}

function a5I() {
	var _0x669d8f = ya0_0x32d3;
	this[_0x669d8f(398)] = function(_0x43ec6e, _0x295b34) {
		var _0x34e355 = _0x669d8f;
		if (ts.aN(_0x295b34), 0 === ts.ip) fL.bS[_0x34e355(397)](_0x43ec6e, 3205);
		else {
			_0x295b34 = ts.t7(1);
			if (0 === _0x295b34)
				if (_0x34e355 = _0x43ec6e, 0 === (_0x2652ea = ts.t7(2)))(0 === ts.t7(1) ? function(_0x3c2bb5) {
					var _0x123f2f;
					if (0 === _0x3c2bb5 && 8 !== fT.fp() && !(ts.ip < 4)) {
						gt.zk(0, ts.t8(ts.t7(5))), gt.zk(1, "[" + ts.t8(ts.t7(3)) + "]");
						var _0x36eaab = ts.t7(12),
							_0x7d5c63 = ts.t7(6),
							_0x217268 = new Array(_0x36eaab);
						for (_0x123f2f = 0; _0x123f2f < _0x36eaab; _0x123f2f++) _0x217268[_0x123f2f] = ts.t7(_0x7d5c63);
						fc.nd(_0x217268)
					}
				} : function(_0x1d212d) {
					var _0x34a0db, _0x3033c9 = _0x669d8f;
					if (8 !== fT.fp())
						if (ts.ip < 3) fL.bS[_0x3033c9(397)](_0x1d212d, 3208);
						else {
							var _0x37549a, _0x561218, _0x1d212d = ts.t7(1),
								_0x9cfe80 = ts.t7(16),
								_0x5f1be9 = ts.t7(4),
								_0x3a0e80 = [];
							for (_0x34a0db = 0; _0x34a0db < _0x5f1be9; _0x34a0db++) _0x561218 = ts.t7(14), _0x37549a = ts.t7(5), _0x37549a = ts.t8(_0x37549a), _0x3a0e80[_0x3033c9(393)]({
								name: _0x37549a,
								l3: _0x561218
							});
							0 === _0x1d212d ? ob[_0x3033c9(382)](0, _0x3a0e80, 10, 1, .36, .55, _0x9cfe80) : ob.aDj(1, _0x3a0e80, 100, 2, .47, .5, _0x9cfe80)
						}
				})(_0x34e355);
				else if (1 !== _0x2652ea) 2 !== _0x2652ea && 3 !== _0x2652ea || oZ.aN();
			else {
				var _0x3dca44, _0x20bd5e, _0x6d9727, _0x298906, _0x117c05, _0x51cd09, _0x2652ea = _0x34e355,
					_0x3ca63c = _0x669d8f;
				if (_0x2652ea !== fL.bS[_0x3ca63c(402)]) fL.bS.close(_0x2652ea, 3239);
				else if (6 === fT.fp() && ji.aN(), 7 !== fT.fp()) fL.bS.close(_0x2652ea, 3251);
				else {
					var _0x92b675 = [0, 0, 0, 0],
						_0x488ead = ts.t7(6);
					for (_0x3dca44 = 0; _0x3dca44 < 4; _0x3dca44++) _0x92b675[_0x3dca44] = ts.t7(_0x488ead);
					var _0x5425e3 = ts.t7(5),
						_0x5a6af5 = [];
					for (_0x3dca44 = 0; _0x3dca44 < _0x5425e3; _0x3dca44++) {
						for (_0x5a6af5[_0x3ca63c(393)]({
								id: ts.t7(5),
								h0: ts.t7(4),
								h2: 1 === ts.t7(1),
								ae: ts.t7(6),
								gy: ts.t7(14),
								h5: ts.t7(_0x488ead),
								h8: ts.t7(9) + 1,
								h7: ts.t7(10)
							}), _0x6d9727 = ts.t7(3), _0x298906 = new Array(_0x6d9727), _0x20bd5e = 0; _0x20bd5e < _0x6d9727; _0x20bd5e++) _0x117c05 = ts.t7(9) + 1, _0x51cd09 = ts.t8(ts.t7(3)), _0x298906[_0x20bd5e] = ("" === _0x51cd09 ?
							_0x3ca63c(394) : "[" + _0x51cd09 + _0x3ca63c(399)) + _0x117c05;
						_0x5a6af5[_0x3dca44].h9 = _0x6d9727, _0x5a6af5[_0x3dca44].hA = _0x298906
					}
					ji.gv(_0x92b675, _0x5a6af5)
				}
			} else if (1 === _0x295b34) {
				_0x34e355 = _0x43ec6e, _0x2652ea = _0x669d8f, _0x295b34 = fT.fp();
				if (8 !== _0x295b34) 10 === _0x295b34 && fL.bS.a1B(_0x34e355, 3243);
				else if (_0x34e355 !== fL.bS.fN) fL.bS.a1B(_0x34e355, 3244);
				else if (0 === ts.t7(1)) aO.vx[_0x2652ea(404)](ts.t6);
				else {
					var _0x35a8c6, _0x295b34 = _0x669d8f,
						_0x34e355 = ts.t7(2);
					if (0 === _0x34e355) {
						_0x2652ea = _0x669d8f;
						3 !== ts.ip ? fL.bS[_0x2652ea(397)](fL.bS.fN, 3230) : (_0x2e1540 = ts.t7(9), _0x191299 = ts.t7(7), 0 !== oO[_0x2e1540] && 0 !== oO[kY] && (_0x191299 %= ge[_0x2652ea(400)], ci.kr(_0x2e1540, kY, _0x191299), ce.lD(_0x2e1540,
							1, _0x191299)))
					} else if (1 === _0x34e355) {
						_0x2652ea = _0x669d8f;
						2 !== ts.ip ? fL.bS[_0x2652ea(397)](fL.bS.fN, 3235) : (_0x2652ea = ts.t7(9), 0 !== oO[_0x2652ea] && 0 !== oO[kY] && pX.a09(0, [_0x2652ea], !0) && ci.lC(_0x2652ea, 1))
					} else if (2 === _0x34e355) {
						var _0x191299, _0x2e1540 = _0x669d8f;
						3 !== ts.ip ? fL.bS[_0x2e1540(397)](fL.bS.fN, 3236) : (_0x2e1540 = ts.t7(9), _0x191299 = ts.t7(9), 0 !== oO[_0x2e1540] && 0 !== oO[_0x191299] && 0 !== oO[kY] && pX.a09(1, [_0x2e1540], !0) && (ce.lD(_0x2e1540, 3, 96), ce
							.lD(_0x191299, 4, 96), ci.lG(_0x2e1540, _0x191299)))
					} else if (a7F && !a7G) {
						var _0x2f235f = 720;
						for (tC.dF(14404), tC.tq(1, 0), tC.tq(3, 4), _0x2f235f = Math[_0x295b34(386)](kH.qV.qW[_0x295b34(389)], 720), _0x35a8c6 = 0; _0x35a8c6 < _0x2f235f; _0x35a8c6++) tC.tq(20, kH.qV.qW[_0x35a8c6]);
						fL.bS[_0x295b34(378)](fL.bS.fN, tC.t6)
					}
				}
			}
		}
	}, this[_0x669d8f(385)] = function(_0x41395d) {
		ts.aN(_0x41395d), ts.iT = 1, (2 === ts.t7(2) ? function() {
			for (var _0x2690a4, _0x44e13d, _0x32d1d1, _0x8015b8 = _0x669d8f, _0x5921a1 = (ts.iT += 20, ts.t7(9)), _0x51b57b = ts.t7(14), _0x51a269 = ts.t7(4), _0x1d8378 = 1 === ts.t7(1), _0x579980 = ts.t7(6), _0xf56d71 = ts.t7(14),
					_0xef1303 = ts.t7(9) + 1, _0x43b926 = [], _0x1759ea = 0; _0x1759ea < _0xef1303; _0x1759ea++) _0x2690a4 = ts.t7(1), _0x44e13d = [ts.t7(6), ts.t7(6), ts.t7(6)], _0x32d1d1 = ts.t8(ts.t7(5)), _0x43b926.push({
				name: _0x32d1d1,
				sN: _0x44e13d,
				u1: _0x2690a4
			});
			fT.uT(), ab.dF(_0x579980, _0xf56d71), 1 === _0x43b926[_0x8015b8(389)] && mn.aA6(_0x51a269), qN(_0x51b57b, _0x5921a1, _0x43b926, _0x51a269, _0x1d8378, !1)
		} : function() {
			for (var _0x10e56d, _0x336b71, _0x3c364f, _0x5f4673, _0x11bf04 = _0x669d8f, _0x57a44b = (ts.iT += 20, ts.t7(1)), _0x4e3e34 = ts.t7(14), _0x5d1eaf = ts.t7(4), _0x2720a3 = 1 === ts.t7(1), _0x3fbe7d = ts.t7(6), _0x21349b = ts.t7(
					14), _0x1ee973 = [], _0x583766 = 0; _0x583766 < 2; _0x583766++) _0x10e56d = ts.t7(1), _0x336b71 = [ts.t7(6), ts.t7(6), ts.t7(6)], _0x3c364f = ts.t7(14), _0x5f4673 = ts.t8(ts.t7(5)), _0x1ee973[_0x11bf04(393)]({
				name: _0x5f4673,
				sN: _0x336b71,
				l3: _0x3c364f,
				u1: _0x10e56d
			});
			fT.uT(), ab.dF(_0x3fbe7d, _0x21349b), qN(_0x4e3e34, _0x57a44b, _0x1ee973, _0x5d1eaf, _0x2720a3, !1)
		})()
	}, this[_0x669d8f(401)] = function() {
		var _0x71e9c = _0x669d8f,
			_0x184cee = (ts.iT = 1, ts.t7(2)),
			_0x126feb = ts.t7(10);
		return fL.bS[_0x71e9c(402)] > fL.bS[_0x71e9c(390)] && (_0x126feb += fL.bS[_0x71e9c(390)]), fL.bS[_0x71e9c(402)] === _0x126feb ? (fL.bS.fN = _0x126feb, !1) : (fL.bS[_0x71e9c(403)](fL.bS[_0x71e9c(402)], 3247), fL.bS.fN = _0x126feb, oZ[
			_0x71e9c(388)] = ts.t7(10), oZ[_0x71e9c(395)] = ts.t7(2 === _0x184cee ? 9 : 1), fL.bS.nZ(_0x126feb, 5) && fL.hN[_0x71e9c(391)](), !0)
	}
}

function ya0_0x3dbc() {
	var _0x245e88 = ["send", "5VMWWek", "16698933rTTTog", "709795PdAiLg", "aDj", "4714264xdshhQ", "3896202SCVTbp", "aEX", "min", "421548oEIeLw", "a70", "length", "a0n", "a18", "2389052HmDzUw", "push", "other: ", "a71", "7CHyLlI", "a1B", "aEH", "]: ",
		"a3J", "aEa", "a0f", "close", "a9T", "1061226yEgdQR"
	];
	return (ya0_0x3dbc = function() {
		return _0x245e88
	})()
}

function tL() {
	var aEi, b4 = 8,
		aEj = new Array(2);

	function aEk(iT) {
		var bE = b4 + 4,
			bF = bG.bH.b7(bE, bE),
			bI = bG.bH.getContext(bF, !0),
			bJ = bG.bH.getImageData(bI, bE, bE),
			bK = bJ.data;
		return aEl(bK, bE + 1, iT), aEl(bK, bE + 2, iT), aEl(bK, 2 * bE + 1, iT), aEl(bK, 2 * bE - 3, iT), aEl(bK, 2 * bE - 2, iT), aEl(bK, 3 * bE - 2, iT), aEl(bK, bE * (bE - 3) + 1, iT), aEl(bK, bE * (bE - 2) + 1, iT), aEl(bK, bE * (bE - 2) + 2,
			iT), aEl(bK, bE * (bE - 2) - 2, iT), aEl(bK, bE * (bE - 1) - 3, iT), aEl(bK, bE * (bE - 1) - 2, iT), bI.putImageData(bJ, 0, 0), bF
	}

	function aEl(bK, bA, iT) {
		bA *= 4;
		bK[bA] = 255, bK[1 + bA] = 255, bK[2 + bA] = iT, bK[3 + bA] = 255
	}

	function b7(player) {
		var aEm = b4 >> 1,
			bF = bG.bH.b7(b4, b4);
		return function(bI, player, b8, b9) {
			var bB, bA, aEo, go, bE = b4,
				bJ = bG.bH.getImageData(bI, bE, bE),
				bK = bJ.data,
				bL = (bE >> 1) - .5,
				z7 = bh.sL(player),
				aEq = bG.yn.a1t(z7, .5);
			bG.yn.a1v(z7, aEq, 300) || bG.yn.a1x(z7, 100);
			for (b9 = 0; b9 < bE; b9++)
				for (b8 = 0; b8 < bE; b8++) go = (bE - 1.5) * (bE - 1.5) / 4, aEo = (bB = (bB = b8 - bL) * bB + (bB = b9 - bL) * bB) <= (bE - 4.5) * (bE - 4.5) / 4 ? aEq : z7, bK[bA = 4 * (b9 * bE + b8)] = aEo[0], bK[1 + bA] = aEo[1], bK[2 +
					bA] = aEo[2], bK[3 + bA] = go < bB ? 0 : 255;
			bI.putImageData(bJ, 0, 0)
		}(bG.bH.getContext(bF, !0), player, aEm, aEm), bF
	}
	this.aN = function() {
		aEi = new Array(cK), aEj[0] = aEk(255), aEj[1] = aEk(0)
	}, this.ao = function() {
		var f, player, aEr, ik, aEs, iI, aEv, aEx, aEy, wJ = bR.bS.wJ,
			ko = bR.bS.ko,
			kp = bR.bS.kp,
			aEz = aEi,
			aF0 = kY,
			aF1 = -1,
			m = bR.bS.wB,
			aF2 = eG,
			aF3 = eH,
			yO = ab.bX << 4,
			i9 = cW,
			bO = i9 / b4,
			hL = ds / i9,
			hM = dt / i9,
			bB = (aF2 + ds) / i9 - hL,
			bC = (aF3 + dt) / i9 - hM,
			bI = ag;
		for (bR.pu.za(kY, bR.tO.b6) && (aF1 = iY.pz[3]), bI.fillStyle = av.b0, f = 0; f < m; f++) player = ko[f] >> 3, ik = kp[f], aEr = .625 + .125 * Math.sqrt(Math.sqrt(ik)), aEs = (iI = wJ[f]) % yO / 16 - aEr, iI = aF3 * (Math.floor(iI / yO) /
			16 - aEr - hM) / bC, aEv = -2 * (aEy = i9 * aEr) * (1 + (aEx = +(player === aF0)) / 8), aEx = aEx * aEy / 4, (aEy = aF2 * (aEs - hL) / bB) < aEv || iI < aEv || aF2 + aEx < aEy || aF3 + aEx < iI || (aEs = aEr * i9, bI
			.imageSmoothingEnabled = (aEv = 2 * aEr * bO) < 3, void 0 === (aEx = aEz[player]) && (aEz[player] = aEx = b7(player)), player === aF0 && (bI.setTransform(aEv, 0, 0, aEv, aEy - 2 * aEv, iI - 2 * aEv), bI.drawImage(aEj[+(f ===
				aF1)], 0, 0)), bI.setTransform(aEv, 0, 0, aEv, aEy, iI), bI.drawImage(aEx, 0, 0), (aEr = Math.floor(function(ik) {
				if (ik < 1e3) return .42;
				if (ik < 1e4) return .34;
				if (ik < 1e6) return .26;
				if (ik < 1e8) return .19;
				return .15
			}(ik) * aEs)) < 6) || (bI.setTransform(1, 0, 0, 1, 0, 0), 20 <= aEr ? (bI.font = bG.bH.a02(.85 * aEr, 1), bI.fillText(bG.hZ.ha(ik), aEy + aEs, iI + .93 * aEs + .085 * aEr), (aEr *= ce.aBR(player)) < 6 || (bI.font = bG.bH.a02(aEr,
			1), bI.fillText(aj[player], aEy + aEs, iI + 1.16 * aEs + .1 * aEr))) : (bI.font = bG.bH.a02(aEr, 1), bI.fillText(bG.hZ.ha(ik), aEy + aEs, iI + aEs + .1 * aEr)));
		bI.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a8K(ex, a2x, a2y, aF5) {
	var a32, aF6 = document.createElement("input");
	this.aN = function(ey) {
		var a33 = document.createElement("label");
		a33.innerText = ex, a33.style.color = av.b0, a33.style.marginLeft = "0.5em", aF6.type = "checkbox", aF6.style.marginRight = "1em", aF6.style.aF7 = "middle", aF6.style.position = "relative", aF6.style.bottom = "0.2em", aF6.onchange = a2y,
			aF6.title = a2x, a32 = new rW(a2x), this.resize(), a33.prepend(aF6), a32.aN(a33), ey.appendChild(a33)
	}, this.setState = function(m3) {
		aF6.aF8 = m3
	}, this.resize = function() {
		var ip = bG.bH.rd(.5) * aS / fP * .04;
		aF6.style.width = ip.toFixed(1) + "px", aF6.style.height = ip.toFixed(1) + "px", a32.resize(), aF5 && this.setState(aF5())
	}
}

function rm(player) {
	aF9(player), aFA(player), aFB(player), ih.vH(player), cf.vI(player), cG.o9(player), bR.tJ.a8h(player)
}

function aF9(player) {
	bh.kX(player) && kU++;
	var oQ = cG.oP(player);
	0 === oQ.length ? player === kY && aFC() : (aFD(player, oQ), aFE(player, oQ))
}

function aFC() {
	kP.kQ[17] += im[kY] + cG.oI(kY), cr.show(!1, !1, !1, !0), cm.aFF()
}

function aFD(player, oQ) {
	for (var f = oQ.length - 1; 0 <= f; f--) cG.oA(oQ[f], player)
}

function aFG(oQ) {
	for (var iT = 0, f = oQ.length - 1; 1 <= f; f--) bx[oQ[f]] > bx[oQ[iT]] && (iT = f);
	return iT
}

function aFE(player, oQ) {
	var f, lH, aFH = oQ[aFG(oQ)];
	if (9 === lW && 1 === cB.cC[player] && a6.a6F(8) && mq.a6i(aFH), player === kY) 2 !== kW[player] && ci.ju(aFH, 1), aFC();
	else {
		for (lH = !1, f = oQ.length - 1; 0 <= f; f--)
			if (oQ[f] === kY) return lH = !0, void ci.ju(player, 0);
		!lH && player < j3 && 2 !== kW[player] && ci.kV(0, player, aFH)
	}
}

function aFB(player) {
	oO[player] = im[player] = 0, be[player] = null, bn[player] = null, bt[player] = null, bu[player] = null, qp.aFI(player)
}

function aFA(player) {
	for (var s, b9, b8 = bb[player]; b8 >= bY[player]; b8--)
		for (b9 = bc[player]; b9 >= ba[player]; b9--) s = 4 * (b9 * ab.bX + b8), bh.c0(player, s) && (bh.sU(s), bx[player]--)
}

function aFJ() {
	this.gl = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aFK = [av
		.b0, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", av.b0, "rgb(170,170,170)"
	], this.aFL = [av.b0, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", av.b0, av.az], this.aFM = [av.az, av.b0, av.b0, av.b0, av.az, av.az, av.az, av.az, av.b0];
	var aFN = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aFO = (this.aBh = ["rgba(" + aFN[0] + ",", "rgba(" + aFN[1] + ",", "rgba(" + aFN[2] + ",", "rgba(" + aFN[3] + ",", "rgba(" + aFN[4] + ",", "rgba(" + aFN[5] + ",", "rgba(" + aFN[6] + ",", "rgba(" + aFN[7] + ",", "rgba(" + aFN[8] + ",",
			"rgba(" + aFN[9] + ","
		], this.aBi = ["rgb(" + aFN[0] + ")", "rgb(" + aFN[1] + ")", "rgb(" + aFN[2] + ")", "rgb(" + aFN[3] + ")", "rgb(" + aFN[4] + ")", "rgb(" + aFN[5] + ")", "rgb(" + aFN[6] + ")", "rgb(" + aFN[7] + ")", "rgb(" + aFN[8] + ")", "rgb(" + aFN[
			9] + ")"
		], this.jH = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.xE = [
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
	this.os = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.cC = new Uint8Array(cK), this.hA = null, this.p1 = null, this.aN = function(jq) {
		this.cC.fill(0), this.aFP(), ar && (jx.jy && jx.ac.aFQ ? this.sD() : 9 === lW ? this.aFR() : this.aW(jq))
	}, this.sD = function() {
		var f, m = qE;
		for (this.os = [0, 1, 2, 3, 4, 5, 6, 7, 8], f = 0; f < m; f++) this.cC[f] = jx.ac.aFQ[f]
	}, this.aFP = function() {
		for (var f = this.os.length - 1; 0 <= f; f--) this.os[f] = f;
		this.hA = [], this.p1 = []
	}, this.aFR = function() {
		for (var f = j3 + mq.a6h - 1; 0 <= f; f--) this.cC[f] = 1;
		for (f = j3 + mq.a6h; f < cK; f++) this.cC[f] = 2;
		this.os[1] = 7, this.os[2] = 8
	}, this.aW = function(jq) {
		var hD = new Uint8Array(j3),
			a1u = new Uint8Array(j3),
			aFS = new Uint16Array(8),
			aFT = new Uint16Array(this.os.length);
		this.aFU(jq, hD, a1u, aFS), this.sB(aFS), ld || this.aFV(aFT, hD, a1u), this.aFW(hD, a1u, aFT), ld ? this.aFX() : this.aFY()
	}, this.aFU = function(jq, hD, a1u, aFZ) {
		for (var u, cE, aFa, m = this.os.length - 1, r = new Uint16Array(m), f = j3 - 1; 0 <= f; f--) {
			for (u = m; 1 <= u; u--) r[u - 1] = Math.abs(4 * jq[f].sN[0] - aFO[u][0]) + Math.abs(4 * jq[f].sN[1] - aFO[u][1]) + Math.abs(4 * jq[f].sN[2] - aFO[u][2]);
			for (aFa = 768, u = m - 1; 0 <= u; u--) r[cE = (u + f) % m] < aFa && (aFa = r[cE], hD[f] = cE);
			for (aFZ[hD[f]] += 4, aFa = 768, u = m - 1; 0 <= u; u--) r[cE = (u + f) % m] < aFa && cE !== hD[f] && (aFa = r[cE], a1u[f] = cE);
			aFZ[a1u[f]]++
		}
	}, this.sB = function(aFZ) {
		for (var u, nz, m = this.os.length - 1, f = m; 0 <= f; f--) this.os[f] = f;
		for (f = m - 1; 0 <= f; f--) aFZ[f]++;
		for (f = 1; f <= m; f++) {
			for (nz = 0, u = 1; u < m; u++) aFZ[u] > aFZ[nz] && (nz = u);
			aFZ[nz] = 0, this.os[f] = nz + 1
		}
	}, this.aFV = function(aFT, hD, a1u) {
		var f, u, aFb, o, bf, cE, eQ, lF, aFc = this.os.length - 1,
			aFd = new Uint16Array(aFc),
			aFe = [];
		loop: for (f = j3 - 1; 0 <= f; f--)
			if (null !== (aFb = bG.hZ.i8(lf[f]))) {
				for (u = this.hA.length - 1; 0 <= u; u--)
					if (aFb === this.hA[u]) {
						this.p1[u].push(f);
						continue loop
					} this.hA.push(aFb), aFe.push(!1), this.p1.push([]), this.p1[this.hA.length - 1].push(f)
			}
		for (u = this.hA.length - 1; 0 <= u; u--) {
			for (bf = -1, o = this.hA.length - 1; 0 <= o; o--) !aFe[o] && (-1 === bf || this.p1[o].length > this.p1[bf].length) && (bf = o);
			for (o = aFc - 1; 0 <= o; o--) aFd[o] = 1;
			for (o = this.p1[bf].length - 1; 0 <= o; o--) aFd[hD[this.p1[bf][o]]] += 3, aFd[a1u[this.p1[bf][o]]]++;
			for (f = aFc - 1; 0 <= f; f--) {
				for (cE = bf % aFc, o = aFc - 1; 0 <= o; o--) aFd[o] > aFd[cE] && (cE = o);
				for (eQ = -1, o = qK; 0 < o; o--)
					if (this.os[o] === cE + 1) {
						eQ = o;
						break
					} if (aFd[cE] = 0, -1 !== eQ) {
					for (lF = 0, o = qK; 0 < o; o--) aFT[eQ] > aFT[o] && lF++;
					if (lF !== qK - 1) {
						for (o = this.p1[bf].length - 1; 0 <= o; o--) aFT[eQ]++, this.cC[this.p1[bf][o]] = eQ;
						break
					}
				}
			}
			aFe[bf] = !0
		}
	}, this.aFW = function(hD, a1u, aFT) {
		for (var f, iI, m = this.os.length - 1, border = a1(j3, qK), aFf = (0 < j3 % qK && border++, new Uint8Array(1 + m)), u = m; 1 <= u; u--) aFf[this.os[u]] = u;
		for (f = 0; f < j3; f++) iI = aFf[hD[f] + 1], 0 === this.cC[f] && iI <= qK && aFT[iI] < border && (aFT[iI]++, this.cC[f] = iI);
		for (f = 0; f < j3; f++) iI = aFf[a1u[f] + 1], 0 === this.cC[f] && iI <= qK && aFT[iI] < border && (aFT[iI]++, this.cC[f] = iI);
		for (u = qK; 1 <= u; u--)
			for (f = j3 - 1; 0 <= f && !(aFT[u] >= border); f--) 0 === this.cC[f] && (aFT[u]++, this.cC[f] = u)
	}, this.aFX = function() {
		var f, g, aFZ = new Uint16Array(qK);
		for (aFZ[qK - 1] = cK, f = qK - 2; 0 <= f; f--) aFZ[f] = mn.mo[f].gf;
		for (aFZ[0]--, g = 0 === aFZ[0] ? 1 : 0, f = j3; f < cK; f++) this.cC[f] = g + 1, aFZ[g]--, aFZ[g] <= 0 && g++
	}, this.aFY = function() {
		for (var f = j3; f < cK; f++) this.cC[f] = 1 + f % qK
	}
}

function aFg() {
	var gap, a1F, b8 = [0, 0, 0, 0, 0],
		b9 = [0, 0, 0, 0, 0],
		eQ = [1, 1, 1, 1, 1],
		y = [!0, !0, !0, !0, !0],
		o = (this.hv = [!0, !0, !0, !0, !0], null);
	this.jY = function(bF, aFh) {
		o = bF, y = aFh, a1F = [a4J.er, a4J.es, a4J.et, a4J.eu, a4J.ev], this.aN()
	}, this.aN = function() {
		if (gd.jL()) {
			var f, d0 = Math.floor((aR ? .261 : .195) * aS),
				d1 = Math.floor(.9 * d0),
				rG = Math.floor(.17 * d1);
			if (gap = aR ? 2 * aq : aq, eQ[0] = d0 / o[0].width, eQ[1] = d1 / o[1].width, eQ[2] = rG / o[2].height, eQ[3] = rG / o[3].height, eQ[4] = rG / o[4].height, eQ[3] *= 1.07, b8[0] = gap, b8[1] = gap, b8[2] = gap, b8[3] = gap, b8[4] =
				Math.floor(2 * gap + eQ[3] * o[3].width), b9[0] = gap, b9[1] = b9[0] + gap + eQ[0] * o[0].height, b9[2] = b9[1] + gap + eQ[1] * o[1].height, b9[3] = b9[2] + gap + eQ[2] * o[2].height, b9[4] = b9[3], !y[0])
				for (f = 0; f < 5; f++) b9[f] -= eQ[0] * o[0].height + gap;
			if (!y[1])
				for (f = 2; f < 5; f++) b9[f] -= eQ[1] * o[1].height + gap
		}
	}, this.fa = function() {
		return !(7 === fT.fp() && aR)
	}, this.eB = function(e7, eA, te) {
		if (o && this.fa())
			for (var f = y.length - 1; 0 <= f; f--)
				if (y[f] && this.hv[f] && b8[f] < e7 && b9[f] < eA && e7 < b8[f] + eQ[f] * o[f].width && eA < b9[f] + eQ[f] * o[f].height) return fl.aN(a1F[f], te), !0;
		return !1
	}, this.ao = function() {
		if (o && this.fa()) {
			var f;
			for (ag.imageSmoothingEnabled = !0, f = 0; f < 5; f++) y[f] && this.hv[f] && (ag.setTransform(eQ[f], 0, 0, eQ[f], b8[f], b9[f]), ag.drawImage(o[f], 0, 0));
			ag.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function aFi() {
	"function" != typeof Math.log2 && (Math.log2 = function(b8) {
		return Math.log(b8) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(b8) {
		return Math.log(b8) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(b8) {
		return 0 < b8 ? 1 : b8 < 0 ? -1 : 0
	})
}

function a9D() {
	var aFj = new Uint8Array(78);
	this.aN = function() {
		var f;
		for (aFj[50] = 37, f = 0; f < 10; f++) aFj[f + 3] = f + 1;
		for (f = 0; f < 26; f++) aFj[f + 20] = f + 11, aFj[f + 52] = f + 38
	}, this.wX = function(i) {
		return i.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.wW = function(i, aFk) {
		for (var aFl = aFj, m = i.length, r = new Uint8Array(aFk || m), f = 0; f < m; f++) r[f] = aFl[i.charCodeAt(f) - 45];
		return r
	}, this.wV = function(a2) {
		var f, m = a2.length,
			aQ = tC;
		for (aQ.dF(6 * m), f = 0; f < m; f++) aQ.tq(6, a2[f]);
		ts.aN(aQ.t6)
	}
}

function aFm() {
	this.aQ = 0, this.aC = 0, this.d0 = 0, this.rG = 0, this.x5 = 0, this.fontSize = 0, this.iT = -1, this.a1F = ["Accept Cookies", "More Information", "Decline"], this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"], this
		.fa = !1, this.aN = function() {
			this.resize(), this.fa = ja < 5 && !jZ && 0 === v0.ul()
		}, this.resize = function() {
			this.aQ = Math.floor(2.8 * Math.floor((aR ? .09 : .062) * aS)), this.aC = Math.floor(+this.aQ), this.d0 = Math.floor(.06 * this.aQ), this.d1 = this.aQ - 2 * this.d0, this.rG = this.d0, this.x5 = (this.aC - (this.a1F.length + 1) * this
				.rG) / this.a1F.length, this.fontSize = Math.floor(.3 * this.x5)
		}, this.eB = function(eO, eP) {
			return !!this.fa && -1 !== (eO = this.aFn(eO, eP)) && (0 === eO ? (v0.ux(2), this.fa = !1) : 1 === eO ? fl.aN(a4J.em, !0) : 2 === eO && (v0.ux(1), this.fa = !1), aO.an = !0)
		}, this.eK = function(eO, eP) {
			var cQ;
			return !!this.fa && (cQ = this.iT, this.iT = this.aFn(eO, eP), cQ !== this.iT && (aO.an = !0), -1 !== this.iT)
		}, this.aFn = function(eO, eP) {
			return eO -= gs, eP -= Math.floor(eH - this.aC - gs), eO < 0 || eP < 0 || eO >= this.aQ || eP >= this.aC ? -1 : (eO = Math.floor((eP - .5 * this.rG) / ((this.aC - this.rG) / this.a1F.length))) < 0 ? 0 : eO >= this.a1F.length ? this.a1F
				.length - 1 : eO
		}, this.ao = function() {
			this.fa && this.a4x()
		}, this.a4x = function() {
			var b8 = gs,
				b9 = Math.floor(eH - this.aC - gs);
			ag.setTransform(1, 0, 0, 1, b8, b9), ag.fillStyle = av.ax, ag.fillRect(0, 0, this.aQ, this.aC), ag.textBaseline = b2, ag.textAlign = b1, ag.strokeStyle = av.b0, ag.font = aT + this.fontSize + aU, ag.strokeRect(0, 0, this.aQ, this.aC);
			for (var f = this.a1F.length - 1; 0 <= f; f--) ag.setTransform(1, 0, 0, 1, b8 + this.d0, b9 + this.rG + f * (this.rG + this.x5)), ag.fillStyle = this.colors[f], ag.fillRect(0, 0, this.d1, this.x5), this.iT === f && (ag.fillStyle = av.ny,
				ag.fillRect(0, 0, this.d1, this.x5)), ag.fillStyle = av.b0, ag.fillText(this.a1F[f], this.d1 / 2, .54 * this.x5), ag.strokeRect(0, 0, this.d1, this.x5);
			ag.setTransform(1, 0, 0, 1, 0, 0)
		}
}

function aFo() {
	var t6, aFp, aFq, aFr;
	this.a70 = 0, this.a71 = 0, this.aN = function() {
		var aJ, eQ;
		7 === fT.fp() && (t6 = ts.t6, aFp = 0, aFq = aO.aP + 4500, aFr = fL.ks.aEa() ? 2 : 0, fT.setState(10), ag.imageSmoothingEnabled = !0, fT.cV(), aJ = gd.jK("loading"), eQ = 1, eQ = (aR ? .396 : .25) * aS / aJ.width, ag.setTransform(eQ, 0,
			0, eQ, Math.floor((eV - eQ * aJ.width) / 2), Math.floor((eY - eQ * aJ.height) / 2)), ag.drawImage(aJ, 0, 0), ag.setTransform(1, 0, 0, 1, 0, 0))
	}, this.xU = function() {
		0 < aFr && aO.aP > aFq && (aFr--, aFq += 4500, 0 === aO.a1c) && 0 === aO.lZ() && (0 === aFr && fL.bS.fN < fL.bS.a0m && (fL.bS.fN += fL.bS.a0n), fL.bS.nZ(fL.bS.fN, 5))
	}, this.oa = function() {
		10 === fT.fp() && 2 <= ++aFp && (fL.ks.aEX(t6), t6 = null)
	}
}

function aAl() {
	var aG9;
	a9G || (a99(), aFi(), yP = new ho, a4J = new eh, qd = new mY, ih = new zn, qm = new aFw, cf = new v6, eI = new a5K, qg = new a25, t9 = new a, cq = new p9, cp = new a1E, ci = new jj, oX = new jc, co = new a9Y, aZ = new a7, ck = new a85, cY =
		new du, fc = new nI, cn = new a6G, cj = new aFx, cm = new aFy, cr = new aBx, hJ = new a3l, oY = new aC9, fT = new uQ, (ub = new a0a).dF(), fm = new ll, ud = new a6q, mn = new aA4, ga = new a3L, gd = new jF, bh = new rr, v0 = new uk, cG =
		new o0, qa = new aAL, ce = new aAm, qe = new aFz, mq = new a6d, lQ = new aG0, iQ = new d3, fs = new aCl, fL = new a5H, aFt = new aG1, a6 = new a6D, vF = new vX, cU = new z4, fS = new nB, cu = new tE, g8 = new wq, ji = new gA, aA5 =
		new xI, cl = new r1, oZ = new aFo, ph = new aCS, eC = new a3v, wv = new oR, qp = new aG2, qo = new zK, pX = new a03, fi = new a0K, jx = new aG3, a6v = new a9I, kH = new a2s, qi = new aCR, ct = new a8O, bG = new a5o, av = new aG4, ch =
		new a8s, tC = new a9F, tt = new aG5, ts = new t5, wU = new a9D, a8T = new a6k, fW = new f0, bP = new a2S, bR = new tH, iY = new a0C, cb = new a5q, qj = new ri, qc = new wG, ab = new a6V, fv = new aG6, wy = new aAb, qq = new a8g, k8 =
		new a8M, aFu = new aG7, (a9G = new aBv).aN(), fL.aN(), tt.aN(), wU.aN(), ab.aN(), a7p(), (aG9 = document.getElementById("usernameField")) && document.body.removeChild(aG9), aFu.aN(), v0.aN(), jX = new aFg, eC.aN(), g8.aN(), aAh(), aAk(),
		eb = new a6U, qZ = new vS, ge = new aGA, kP = new si, cs = new a4m, uR = new aFm, (aO = new aCg).aN(), cB = new aFJ, as = new aCW, (gt = new zj).aN(), (ob = new aDT).aN(), fl = new tV, xw(), a6.aN(), qa.aAS(), lQ.aN(), fT.aN(), fi.aN(),
		fL.aN(), fc.aN(), qe.aN(), fW.aN(), gd.aN(), a6v.aN(), qq.aN(), a8T.a6l(), aO.an = !0, setTimeout(function() {
			ab.dF(2, 14071)
		}, 0), a9G.a9H = 1)
}

function aFw() {
	var ip, tR;
	this.aN = function() {
		ip = mk, tR = new Uint16Array(mk);
		for (var f = mk - 1; 0 <= f; f--) tR[f] = f
	}, this.aW = function() {
		for (var f = ip - 1; 0 <= f; f--) 0 === oO[tR[f] + j3] ? function(g) {
			ip--;
			for (var f = g; f < ip; f++) tR[f] = tR[f + 1]
		}(f) : qd.aW(tR[f])
	}
}

function aFy() {
	var aJ, aK, b8, b9, no, aGD, gap, aGE, fontSize, aGF, a1F, kQ, aGG, aGH, aGI, aGJ, aGK, aGL;

	function aGO() {
		aK.clearRect(0, 0, cm.aQ, cm.aC), aK.fillStyle = av.ax, aK.fillRect(0, 0, cm.aQ, cm.aC), aK.fillStyle = av.rE, bO = 0 < aGI ? aGI : Math.sqrt(kQ[4] / 1e4), aK.fillRect(0, cm.aC - no - 1, Math.floor(bO * cm.aQ), no), aK.fillStyle = av.b0, aK
			.fillRect(0, 0, cm.aQ, 1), aK.fillRect(0, 0, 1, cm.aC), aK.fillRect(cm.aQ - 1, 0, 1, cm.aC), aK.fillRect(0, cm.aC - 1, cm.aQ, 1), aK.fillRect(0, cm.aC - no - 1, cm.aQ, 1);
		for (var bO, aGP, cQ = 0, f = 0; f < a1F.length; f++) aGG[f] ? (aK.textAlign = hX, aGP = Math.floor((aGD - no + 2 * aGE) * (f - cQ + 1) / (a1F.length + 1) - .7 * aGE), aK.fillText(a1F[f], gap, aGP), aK.textAlign = hY, 5 === f && 0 !== oO[
			kY] && im[kY] >= qa.a6S(kY) ? (aK.fillStyle = av.aGQ, aK.fillText(aGN(f), cm.aQ - gap, aGP), aK.fillStyle = av.b0) : aK.fillText(aGN(f), cm.aQ - gap, aGP)) : cQ++
	}

	function aGN(f) {
		return f < 3 ? kQ[f].toString() : 3 === f || 4 === f || 5 === f ? bG.hZ.i5(kQ[f] / 100, 2) : f < 7 ? bG.hZ.ha(kQ[f]) : f === 7 ? cm.a5G(kQ[7]) : f === 8 ? utils.getMaxTroops(bx, kY) : utils.getDensity(im, bx, kY)
	}

	function aGM() {
		bx[kY] !== kQ[6] && (kQ[6] = bx[kY], aGF++)
	}
	this.aN = function() {
		aGI = aGJ = 0, (a1F = new Array(8))[0] = "Humans", a1F[1] = ld ? "Players" : "Bots", a1F[2] = "Spectators", a1F[3] = "Threshold", a1F[4] = "Occupation", a1F[5] = "Interest", a1F[6] = "Income", a1F[7] = "Time", a1F.push("Max Troops",
			"Density"), aGL = qG - a1(qG, 100), (kQ = new Array(a1F.length))[0] = ld ? 0 : j3, kQ[1] = ld ? li : mk, kQ[2] = kU, kQ[3] = 0, kQ[4] = a1(1e4 * bx[0], qG), kQ[5] = 700, kQ[6] = 0, aGM(), kQ[7] = 0, aGH = aGN(6), aGG = new Array(
			a1F.length);
		for (var f = a1F.length - 1; 0 <= f; f--) aGG[f] = !0;
		aGK = 0, aGK = ld ? (aGG[0] = !1, aGG[2] = !1, aGG[3] = !1, 3) : (aGG[3] = !1, 1), aGF = 0, this.resize()
	}, this.resize = function() {
		this.aQ = Math.floor((aR ? .1646 : .126) * 1.25 * aS), this.aC = Math.floor(1.18 * this.aQ), no = Math.floor(.04 * this.aQ), gap = Math.floor(.035 * this.aQ), aGE = .04 * this.aQ, aGD = this.aC, this.aC -= Math.floor(aGK * (this.aC - 2 *
			no) / a1F.length), fontSize = Math.floor(.7 * (aGD - no) / a1F.length), fontSize = aT + fontSize + aU, (aJ = document.createElement("canvas")).width = this.aQ, aJ.height = this.aC, (aK = aJ.getContext("2d", {
			alpha: !0
		})).font = fontSize, aK.textBaseline = b2, aK.lineWidth = 1, this.sz(), this.e0(), cn.e0(), aGO()
	}, this.e0 = function() {
		b8 = eG - this.aQ - aq
	}, this.aFF = function() {
		b9 = aq
	}, this.sz = function() {
		b9 = aq + (cn.a6O() && 0 !== oO[kY] && !jt ? cn.aC + aq : 0)
	}, this.qx = function(lY) {
		0 < aGF && (lY || 100 <= aGF) && (aGF = 0, aGO())
	}, this.pf = function() {
		return kQ[7]
	}, this.a5G = function(value) {
		var bL = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * bL) / 1e3);
		return value < 10 ? bL + ":0" + value : bL + ":" + value
	}, this.aW = function() {
		var sk, per;
		aGG[0] && kT - kU !== kQ[0] && (kQ[0] = kT - kU, aGF++), li - kQ[0] !== kQ[1] && (kQ[1] = li - kQ[0], aGF++), this.xP(), (sk = qa.su(kY)) !== kQ[5] && (kQ[5] = sk, aGF++), aGM(), kQ[7] += aO.a1i, sk = aGN(7), aGH !== sk && (aGH = sk,
			aGF += 100), sk = ar ? as.ou() : bx[rO[0]], per = a1(1e4 * sk, qG), kQ[3] = sk, kQ[4] !== per && (aGF++, kQ[4] = per), 8 === lW && function() {
			if (0 === oO[0]) qc.rQ.rS(1);
			else {
				if (0 !== oO[1]) return;
				qc.rQ.rS(0)
			}
			return 1
		}() || kQ[3] < aGL || kQ[3] !== qG && ! function() {
			for (var f = li - 1; 0 <= f; f--)
				if (0 < be[lj[f]].length) return;
			return 1
		}() || qc.rQ.rS(-1)
	}, this.xP = function() {
		aGG[2] && kU !== kQ[2] && (kQ[2] = kU, aGF++)
	}, this.a1n = function(f) {
		var lF, aGa, cQ;
		return 2 !== aY && (f === qM ? (aGI = 0, aGO(), !1) : (-1 !== f || 0 !== aGJ) && (aGa = aGI, aGI = fz ? f / qM : (cQ = performance.now(), 0 <= f && (lF = cQ - 392 * f, aGJ = 0 === f || lF < aGJ ? lF : aGJ), 1 < (aGI = (cQ - aGJ) / (392 *
			qM)) ? 1 : aGI), aGO(), aGI !== aGa))
	}, this.ao = function() {
		ag.drawImage(aJ, b8, b9)
	}
}

function a2t() {
	this.pd = function(bA) {
		ld ? kH.wC.pd(kY, bA) : fL.hN.a72(bA)
	}, this.pg = function(sr, cA) {
		ci.lK(), ld ? kH.wC.pg(kY, sr, cA) : fL.hN.a73(sr, cA)
	}, this.pb = function(sr, ss) {
		ci.lK(), ld ? kH.wC.wD(kY, sr, ss) : fL.hN.a74(sr, ss)
	}, this.pj = function(sr, bA) {
		ld ? kH.wC.pj(kY, sr, bA) : bR.pu.py(kY, bA) && fL.hN.a75(sr, bA)
	}, this.pv = function(zZ, bA) {
		ld ? kH.wC.pv(kY, zZ, bA) : bR.pu.zY(kY, zZ, bA) && fL.hN.a76(zZ, bA)
	}, this.wE = function(cA) {
		ld ? kH.wC.wE(kY, cA) : fL.hN.a77(cA)
	}, this.kr = function(kt) {
		ld ? kH.wC.wF(kY, kt) : fL.hN.a78(kt)
	}, this.rH = function(a3K) {
		ld ? kH.wC.rH(kY, a3K) : fL.hN.a79(a3K)
	}, this.rk = function() {
		ld ? kH.wC.rk(kY) : fL.hN.a7A()
	}
}

function a1(g, u) {
	return Math.floor(g / u + 1 / (2 * u))
}

function iR(g, u) {
	return 0 <= g ? a1(g, u) : -a1(-g, u)
}

function jD(y) {
	return y * y
}

function gu(g, u) {
	return u < g ? g : u
}

function rN(g, u) {
	return g < u ? g : u
}

function a8z(g, y, u) {
	return y < g ? g : u < y ? u : y
}

function aGb(y, m) {
	for (var o = a1(y + 1, 2), f = 0; f < m; f++) o = a1(o + a1(y, o), 2);
	return o
}

function aAT(y, m) {
	return y < 1 ? 0 : aGb(y, m)
}

function zH(hL, hM, d0, rG, nC, he, d1, x5) {
	return !(hL + d0 <= nC || hM + rG <= he || nC + d1 <= hL || he + x5 <= hM)
}

function zC(hL, hM, d0, rG, nC, he, d1, x5) {
	return hL <= nC && hM <= he && nC + d1 <= hL + d0 && he + x5 <= hM + rG
}

function uG(y) {
	return Math.floor(!!y * (1 + Math.log2(y + .5)))
}

function aGc(ex) {
	this.aN = function(ey) {
		var ez, aGd = document.createElement("div");
		aGd.style.height = "max-content", aGd.style.width = "0", (ez = document.createElement("p")).style.color = av.b0, ez.style.margin = "0", ez.style.width = "var(--brick-width)", ez.innerText = ex, aGd.appendChild(ez), ey.appendChild(aGd),
			this.resize()
	}, this.resize = function() {}
}

function aG1() {
	var aGf;

	function aGl(hL, hM, nC, he) {
		return Math.abs(nC - hL) + Math.abs(he - hM)
	}
	this.aGg = function() {
		return aGf
	}, this.j1 = function(player, aGh) {
		var f;
		if (0 !== bt[player].length && bh.c2(aGh) && (bh.bi(aGh) || bh.bk(aGh) !== player))
			for (f = 21; 0 <= f; f--)
				if (function(aGf, aGh) {
						var aGk, f, mU = bh.cZ(aGf),
							mV = bh.ca(aGf),
							mW = bh.cZ(aGh),
							mM = bh.ca(aGh),
							aCq = aGl(mU, mV, mW, mM);
						if (!(aCq < 2))
							for (aGk = aGf, f = 0; f < aCq; f++)
								if (Math.abs(mW - bh.cZ(aGk)) >= Math.abs(mM - bh.ca(aGk)) ? aGk += bg[mU < mW ? 1 : 3] : aGk += bg[mV < mM ? 2 : 0], !bh.br(aGk)) return !!bh.c2(aGk) && !(0 === f || f + 20 < aCq);
						return
					}(aGf = 21 === f ? function(border, aGh) {
						for (var aCq, mW = bh.cZ(aGh), mM = bh.ca(aGh), iT = 0, min = aGl(mW, mM, bh.cZ(border[0]), bh.ca(border[0])), f = border.length - 1; 1 <= f; f--)(aCq = aGl(mW, mM, bh.cZ(border[f]), bh.ca(border[f]))) < min && (min =
							aCq, iT = f);
						return border[iT]
					}(bt[player], aGh) : bt[player][a1(f * bt[player].length, 21)], aGh)) return !0;
		return !1
	}
}

function a2v() {
	this.a7z = function(player, ss, ik) {
		bG.kI.a3H(player, ik, ss) && (qa.pb(player, ss), ss < j3) && a6.random() < a6.value(10) && (id[ss] = 0)
	}, this.wS = function(player, ss, ik) {
		bG.kI.a6A(ik, ss) && (bG.kI.o8(ss, iY.ig[0]), kP.lL(player, ss), ce.vk(ss, iY.ig[0]))
	}
}

function aG0() {
	var aGm;
	this.lR = 0, this.lS = 0, this.lU = 0, this.lV = 0, this.aN = function() {
		(aGm = new Array(ab.a6a()))[0] = {
			aQ: [0, 5e3, 8e3, 1e4],
			a4: [220, 250, 255, 220],
			lF: [190, 220, 0, 0],
			u: [170, 200, 0, 0]
		}, aGm[1] = {
			aQ: [0, 4e3, 5e3, 6e3, 1e4],
			a4: [25, 0, 100, 0, 25],
			lF: [25, 0, 0, 0, 25],
			u: [25, 0, 0, 0, 25]
		}, aGm[2] = {
			aQ: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			a4: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			lF: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			u: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aGm[3] = {
			aQ: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			a4: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			lF: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			u: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aGm[4] = {
			aQ: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			a4: [10, 10, 20, 10, 10, 170, 212],
			lF: [20, 20, 60, 100, 100, 110, 170],
			u: [70, 70, 160, 30, 30, 60, 120]
		}, aGm[5] = {
			aQ: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			a4: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			lF: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			u: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aGm[6] = {
			aQ: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			a4: [10, 10, 60, 255, 255, 200, 200],
			lF: [10, 10, 60, 255, 255, 200, 200],
			u: [80, 80, 255, 255, 255, 200, 200]
		}, aGm[7] = {
			aQ: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			a4: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			lF: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			u: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aGm[8] = {
			aQ: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			a4: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			lF: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			u: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aGm[9] = {
			aQ: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			a4: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			lF: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			u: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}
	}, this.a6Z = function() {
		var f, g, ht, bJ = function() {
				var bJ;
				return ab.cX = document.createElement("canvas"), ab.cX.width = ab.bX, ab.cX.height = ab.ea, ab.hE = ab.cX.getContext("2d", {
					alpha: !1
				}), bJ = ab.hE.getImageData(0, 0, ab.bX, ab.ea), ab.hG = bJ.data, bJ
			}(),
			aQ = aGm[ab.ae].aQ,
			a4 = aGm[ab.ae].a4,
			lF = aGm[ab.ae].lF,
			u = aGm[ab.ae].u,
			y = iQ.dL(),
			m = aQ.length - 2,
			aGq = new Array(1 + m),
			aGr = new Array(1 + m),
			aGs = new Array(1 + m),
			aGt = new Array(1 + m);
		for (g = m; 0 <= g; g--) aGq[g] = aQ[g + 1] - aQ[g], aGr[g] = a4[g + 1] - a4[g], aGs[g] = lF[g + 1] - lF[g], aGt[g] = u[g + 1] - u[g];
		for (f = ab.bX * ab.ea - 1; 0 <= f; f--)
			for (g = m; 0 <= g; g--)
				if (y[f] >= aQ[g]) {
					ht = y[f] - aQ[g], ab.hG[4 * f] = a4[g] + iR(aGr[g] * ht, aGq[g]), ab.hG[4 * f + 1] = lF[g] + iR(aGs[g] * ht, aGq[g]), ab.hG[4 * f + 2] = u[g] + iR(aGt[g] * ht, aGq[g]), ab.hG[4 * f + 3] = 255;
					break
				} ab.hE.putImageData(bJ, 0, 0), ab.a6c(ab.ae) && gd.jL() && ab.a6c(ab.ae) && (bJ = gd.jK("arena"), ab.hE.save(), ab.hE.globalAlpha = 1 === ab.ae ? .1 : 1, ab.hE.imageSmoothingEnabled = !0, ab.hE.scale(2.8, 2.8), ab.hE.drawImage(
				bJ, Math.floor((ab.bX / 2.8 - bJ.width) / 2), Math.floor(.5 * ab.ea / 2.8 - bJ.height / 2)), ab.hE.restore(), bJ = gd.jK("territorial.io"), ab.hE.save(), ab.hE.globalAlpha = 1 === ab.ae ? .1 : 1, ab.hE
			.imageSmoothingEnabled = !0, ab.hE.scale(.87, .87), ab.hE.drawImage(bJ, Math.floor(.745 * (ab.bX / .87 - bJ.width)), Math.floor(.422 * ab.ea / .87 - bJ.height / 2)), ab.hE.restore()), ab.uU = !0, aO.an = !0
	}, this.qY = function() {
		for (var s, b8, b9, aGw, aGx, hu, lS = 0, aQ = ab.bX, aC = ab.ea, ht = aQ * aC * 4, aGy = sR, aGz = ab.hG, f = aQ - 1; 0 <= f; f--) aGy[(s = f << 2) + 2] = aGy[ht - s - 2] = 3;
		for (ht = 4 * aQ, f = aC - 1; 0 <= f; f--) aGy[(s = f * ht) + 2] = aGy[s + ht - 2] = 3;
		for (aGw = aQ - 1, aGx = aC - 1, b9 = 1; b9 < aGx; b9++)
			for (ht = b9 * aQ, b8 = 1; b8 < aGw; b8++) hu = 1 - (aGz[(s = ht + b8 << 2) + 2] > aGz[s + 1] && aGz[s + 2] > aGz[s]), aGy[s + 2] = 2 - hu, lS += hu;
		this.lR = (aQ - 2) * (aC - 2), this.lV = 0, ab.a6b(ab.ae) && function() {
			var s, b8, b9, ht, aGy = sR,
				aGz = ab.hG,
				aQ = ab.bX,
				aGw = aQ - 1,
				aGx = ab.ea - 1,
				gf = 0;
			for (b9 = 1; b9 < aGx; b9++)
				for (ht = b9 * aQ, b8 = 1; b8 < aGw; b8++) aGz[s = ht + b8 << 2] === aGz[1 + s] && aGz[s] === aGz[2 + s] && (gf++, aGy[2 + s] = 3);
			lQ.lV = gf
		}(), this.lS = qG = lS - this.lV, this.lU = this.lR - this.lS - this.lV
	}
}

function aG5() {
	var aH1 = new Uint8Array(64);
	this.aN = function() {
		var f;
		for (aH1[0] = 45, aH1[37] = 95, f = 0; f < 10; f++) aH1[f + 1] = 48 + f;
		for (f = 0; f < 26; f++) aH1[f + 11] = 65 + f, aH1[f + 38] = 97 + f
	}, this.tv = function(aH2) {
		for (var yk = ts, a2 = new Uint8Array(aH2), f = 0; f < aH2; f++) a2[f] = yk.t7(6);
		return a2
	}, this.tu = function(a2) {
		for (var m = a2.length, aH3 = aH1, r = [], f = 0; f < m; f++) r.push(String.fromCharCode(aH3[a2[f]]));
		return r.join("")
	}
}

function aGA() {
	this.xi = 10, this.aH4 = 50, this.aH5 = 50, this.aH6 = 8, this.xm = this.aH4 + this.aH5, this.a3J = this.aH4 + this.aH5 + this.aH6, this.aQ = 72, this.aH7 = 0, this.aH8 = 0, this.bF = new Array(this.a3J), this.aH9 = 8, this.aHA = new Array(this
		.aH4 + this.aH5), this.aHB = new Array(this.aH4 + this.aH5), this.nC = 0, this.he = 0, this.zoom = 1, this.aHC = .2, this.px = 0, this.xn = null, this.a4N = null, this.fa = !1, this.aN = function() {
		var f, aHD, aHE;
		for (this.xn = new Array(this.a3J), this.a4N = new Array(this.a3J), aHD = gd.jK("emojis"), this.aHF(), f = this.px = 0; f < this.aH4; f++) this.a0h(f, f, aHD);
		for (aHE = gd.jK("flags"), f = 0; f < this.aH5; f++) this.a0h(f, this.aH4 + f, aHE);
		this.aHG(), this.bF[26] = this.aHH(25, 2), this.aHI()
	}, this.a0h = function(f, g, o) {
		this.xn[g] = !1, this.a4N[g] = 0;
		var aJ = document.createElement("canvas"),
			aK = (aJ.width = this.aQ, aJ.height = this.aQ, aJ.getContext("2d", {
				alpha: !0
			}));
		aK.clearRect(0, 0, this.aQ, this.aQ), 23 === g ? aK.drawImage(cq.pI()[4].aJ[1], 0, 0) : 36 === g ? aK.drawImage(cq.pI()[0].aJ[2], 0, 0) : 49 === g ? aK.drawImage(cq.pI()[2].aJ[1], 0, 0) : aK.drawImage(o, this.aQ * f % (f === g ? this.xi *
			this.aQ : 4e3), f === g ? a1(f, this.xi) * this.aQ : 0, this.aQ, this.aQ, 0, 0, this.aQ, this.aQ), this.bF[g] = aJ
	}, this.aHG = function() {
		this.bF[this.a3J - 5] = this.bF[26], this.bF[this.a3J - 4] = this.aHH(this.a3J - 5, 2), this.bF[this.a3J - 1] = this.aHH(this.a3J - 5, 1), this.bF[this.a3J - 8] = this.aHH(this.a3J - 4, 1), this.bF[this.a3J - 3] = this.bF[39], this.bF[
			this.a3J - 2] = this.aHH(this.a3J - 3, 1), this.bF[this.a3J - 7] = this.aHH(this.a3J - 2, 1), this.bF[this.a3J - 6] = this.aHH(this.a3J - 7, 1)
	}, this.aHH = function(f, hz) {
		var aJ = document.createElement("canvas"),
			aK = (aJ.width = this.aQ, aJ.height = this.aQ, aJ.getContext("2d", {
				alpha: !0
			}));
		return aK.clearRect(0, 0, this.aQ, this.aQ), aK.rotate(hz * Math.PI / 2), aK.drawImage(this.bF[f], 1 === hz ? 0 : -this.aQ, -this.aQ), aJ
	}, this.aHI = function() {
		var f, y, sd = aAi().split("");
		if (2 * sd.length !== this.a3J) this.px = 0;
		else {
			for (f = 0; f < this.a3J; f += 2) y = parseInt(sd[Math.floor(f / 2)]), this.xn[f] = y % 2 == 1, this.xn[f + 1] = 1 < y;
			this.xo()
		}
	}, this.xo = function() {
		for (var f = this.px = 0; f < this.a3J; f++) this.xn[f] && (this.a4N[this.px++] = f)
	}, this.q8 = function() {
		8 === this.px && this.a4N[0] === this.xm && this.xo()
	}, this.aHJ = function() {
		var f;
		for (this.px = this.aH6, f = 0; f < this.aH6; f++) this.a4N[f] = this.xm + f
	}, this.aHF = function() {
		this.aH7 = Math.floor((aR ? .075 : .0468) * aS), this.zoom = this.aH7 / this.aQ, this.aH8 = (1 + this.aHC) * this.aH7
	}, this.show = function(eO, eP) {
		var f, aHL, aHK, d0, hL, hM;
		if (this.px < 1) this.fa = !1;
		else {
			for (aHK = (aHK = Math.floor(eG / this.aH8)) < 3 ? 3 : aHK > this.aH9 ? this.aH9 : aHK, aHL = this.px > aHK ? aHK : this.px, aHK = 1 + a1(this.px - 1, aHL), d0 = Math.floor(aHL * this.aH8), hL = Math.floor(eO - d0 / 2), hL = (hL =
					eG < hL + d0 ? eG - d0 : hL) < 0 ? 0 : hL, hM = Math.floor(eP - this.aH8 / 2), eO = Math.floor(aHK * this.aH8), hM = (hM = eH < hM + eO ? eH - eO : hM) < 0 ? 0 : hM, this.nC = hL + d0, this.he = hM + eO, f = 0; f < this
				.px; f++) this.aHA[f] = Math.floor(hL + f % aHL * this.aH8), this.aHB[f] = Math.floor(hM + a1(f, aHL) * this.aH8);
			this.fa = !0
		}
	}, this.eB = function(eO, eP, player) {
		return !!this.fa && (this.fa = !1, this.q7(eO, eP) && this.aCU(eO, eP, player) && this.fa || (this.q8(), cq.nG()), !0)
	}, this.q7 = function(eO, eP) {
		return !(eO < this.aHA[0] || eP < this.aHB[0] || eO >= this.nC || eP >= this.he)
	}, this.aCU = function(eO, eP, player) {
		for (var f = this.px - 1; 0 <= f; f--)
			if (eO >= this.aHA[f] && eP >= this.aHB[f] && eO <= this.aHA[f] + this.aH8 && eP <= this.aHB[f] + this.aH8) return 39 === this.a4N[f] ? (this.aHJ(), this.show(eO, eP)) : (player === kY ? kH.pa.kr(this.a4N[f]) : kH.kI.xY(this.a4N[f],
				player), this.xo()), !0;
		return !1
	}, this.aBf = function(f) {
		return f < 16 || 40 <= f && f < 47
	}, this.aBQ = function(f) {
		return f >= this.aH4 && f < this.aH4 + this.aH5
	}, this.ao = function() {
		ag.imageSmoothingEnabled = !0;
		for (var gap = this.aHC * this.aH7 / 2, f = this.px - 1; 0 <= f; f--) ag.setTransform(this.zoom, 0, 0, this.zoom, this.aHA[f] + gap, this.aHB[f] + gap), ag.drawImage(this.bF[this.a4N[f]], 0, 0);
		ag.imageSmoothingEnabled = !1, ag.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aHN = function(b8, b9, kt) {
		ag.imageSmoothingEnabled = !0, ag.setTransform(this.zoom, 0, 0, this.zoom, b8, b9), ag.drawImage(this.bF[kt], 0, 0), ag.imageSmoothingEnabled = !1, ag.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aG4() {
	var o = bG.bH;
	this.az = o.p7(0, 0, 0), this.eg = o.zz(0, 0, 0, .7), this.hS = o.zz(0, 0, 0, .5), this.ra = o.zz(0, 0, 0, .85), this.ax = o.zz(0, 0, 0, .75), this.pM = o.zz(0, 0, 0, .6), this.a34 = o.zz(0, 0, 0, .35), this.b0 = o.p7(255, 255, 255), this.a1K = o
		.zz(255, 255, 255, .3), this.hm = o.zz(255, 255, 255, .6), this.nl = o.zz(255, 255, 255, .4), this.ny = o.zz(255, 255, 255, .25), this.aw = o.zz(255, 255, 255, .85), this.rF = o.zz(255, 255, 255, .75), this.a4e = o.zz(255, 255, 255, .15),
		this.a1X = o.p7(128, 128, 128), this.a4U = o.zz(64, 64, 64, .75), this.a57 = o.p7(30, 255, 30), this.a56 = o.p7(0, 200, 0), this.a9m = o.p7(128, 255, 128), this.xq = o.zz(10, 65, 10, .75), this.rE = o.zz(0, 255, 0, .6), this.hT = o.zz(0, 255,
			0, .5), this.hl = o.zz(0, 200, 0, .5), this.kA = o.zz(0, 100, 0, .75), this.hh = o.zz(0, 60, 0, .8), this.a97 = o.zz(0, 255, 0, .3), this.pK = o.zz(0, 180, 0, .6), this.hk = o.p7(255, 120, 120), this.a6T = o.p7(255, 160, 160), this.a59 =
		o.p7(255, 70, 70), this.a58 = o.p7(230, 0, 0), this.lq = o.zz(220, 0, 0, .6), this.a5E = o.zz(255, 100, 100, .8), this.ke = o.zz(100, 0, 0, .85), this.a8e = o.zz(60, 0, 0, .85), this.pL = o.zz(200, 0, 0, .6), this.aDt = o.zz(0, 60, 60, .85),
		this.a54 = o.zz(10, 60, 60, .9), this.xL = o.zz(0, 96, 96, .75), this.hj = o.p7(160, 160, 255), this.aHO = o.zz(0, 40, 90, .75), this.pO = o.zz(0, 0, 255, .6), this.aGQ = o.p7(255, 120, 100), this.hU = o.zz(255, 255, 0, .5), this.aHP = o.zz(
			255, 255, 150, .2), this.l6 = o.p7(255, 255, 0), this.kb = o.p7(255, 255, 200), this.pN = o.zz(200, 200, 0, .6), this.th = o.zz(255, 140, 0, .75)
}

function aG7() {
	this.aN = function() {
		om = "undefined" != typeof Android ? Android : null, 12 <= (ja = om ? om.getVersion() : 0) && om.prepareAd("1688441405"), jZ = !1, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (jZ = !0,
			window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 4500876070"), a42 = "undefined" != typeof mwIOSdataX ? mwIOSdataX : {
				username: "iOS User " + Math.floor(1e3 * Math.random()),
				id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
				zoom: !0,
				sound: !0,
				emojis: "0",
				colors: "0",
				password: "0",
				freeSpawn: !1,
				unlimitedTime: !1,
				alliances: !1,
				mustShowConsentButton: "0"
			}), om || jZ || (a4J.en += "_browser")
	}
}

function aG6() {
	this.fw = function() {
		fz || cp.fx || bG.kI.a39(1) && bG.kI.a3A(kY) && cG.oE(kY) && (cG.j1(kY, cK) || function(player) {
			var f, dh, aHT = bn[player],
				m = aHT.length;
			for (dh = 0; dh < 4; dh++)
				for (f = 0; f < m; f++)
					if (bh.bi(aHT[f] + bg[dh])) return 1;
			return
		}(kY)) && kH.pa.pg(ck.pc(), cK)
	}
}

function aFx() {
	var aHU, aHV, aHW, aHX, aHY, aHZ, aHa, aHb, aHc, aHd, aHe, aHf, aHg, aHh, aHi, aHj, aHk, aHl, aHm, title, aHn, aHo, aHp, aHq, aHr, position, aHs, aHt, aHu, aHv, aHw = 1;

	function aHy() {
		aHa.clearRect(0, 0, aHU, au), aHa.fillStyle = av.aHO, aHa.fillRect(0, 0, aHU, aHf), aHa.fillStyle = av.ra, aHa.fillRect(0, aHf, aHU, au - aHf), aBW[kY] >= position && aHz(aBW[kY] - position, av.a97), 0 !== aBW[kY] && 0 === position && aHz(0,
				av.aHP), -1 !== aHr && aHz(aHr, av.a1K), aHa.fillStyle = av.b0, aHa.fillRect(0, aHf, aHU, 1), aHa.fillRect(0, 0, aHU, xu), aHa.fillRect(0, 0, xu, au), aHa.fillRect(aHU - xu, 0, xu, au), aHa.fillRect(0, au - xu, aHU, xu), aHa.font =
			aHV, aHa.textBaseline = b2, aHa.textAlign = b1, aHa.fillText(title, Math.floor(aHU / 2), Math.floor(aHd + aHW / 2));
		var g, cN = aBW[kY] < position + aHY - 1 ? 1 : 2;
		for (aHa.font = aHX, aHa.textAlign = hX, g = aHY - cN; 0 <= g; g--) aI0(rO[g + position]), aI1(g, g + position, rO[g + position]);
		for (aHa.textAlign = hY, g = aHY - cN; 0 <= g; g--) aI0(rO[g + position]), aI2(g, rO[g + position]);
		2 == cN && (aI0(kY), aHa.textAlign = hX, aI1(aHY - 1, aBW[kY], kY), aHa.textAlign = hY, aI2(aHY - 1, kY)), 0 === position && (cN = .7 * aHg / gd.get(4).height, aHa.setTransform(cN, 0, 0, cN, Math.floor(aHh + .58 * aHg + .5 * cN * gd.get(4)
			.width), Math.floor(aHd + aHW + .4 * aHg)), aHa.imageSmoothingEnabled = !0, aHa.drawImage(gd.get(4), -Math.floor(gd.get(4).width / 2), -Math.floor(gd.get(4).height / 2)), aHa.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aI0(player) {
		ar && (aHa.fillStyle = cB.aFK[cB.os[cB.cC[player]]])
	}

	function aHz(f, pR) {
		aHa.fillStyle = pR, f = aHY - 1 < f ? aHY - 1 : f;
		pR = Math.floor((f === aHY - 1 ? 2 : 0 === f ? 1.15 : 1) * aHg), pR = f === aHY - 2 ? Math.floor(aHf + 9.15 * aHg) - Math.floor(aHf + 8.15 * aHg) : pR;
		aHa.fillRect(0, Math.floor(aHf + (f + (0 === f ? 0 : .15)) * aHg), aHU, pR)
	}

	function aI1(aDo, aI4, f) {
		aHa.fillText(aHn[aI4], aHh, Math.floor(aHd + aHW + (aDo + .5) * aHg)), 1 === kW[f] && (aHa.font = xr + aHX);
		aI4 = Math.floor(aHd + aHW + (aDo + .5) * aHg);
		aHa.fillText(aHl[f] === f ? aj[f] : aHk[aHl[f] % cK], aHi, aI4), 0 !== kW[f] && (aHa.font = aHX), f < j3 && 2 !== kW[f] || aHa.fillRect(aHi, aI4 + .35 * aHw, aHm[f], Math.max(1, .1 * aHw))
	}

	function aI2(aDo, f) {
		aHa.fillText(bx[f], aHj, Math.floor(aHd + aHW + (aDo + .5) * aHg))
	}

	function aID(b9) {
		return (b9 -= aq + aHf) < 0 ? Math.floor(b9 / aHg) - 1 : b9 < (aHY - 1) * aHg ? Math.floor(b9 / aHg) : b9 < au - aHf ? aHY - 1 : (b9 -= au - aHf, aHY + Math.floor(b9 / aHg))
	}

	function q7(b8, b9) {
		return aq <= b8 && b8 < aq + aHU && aq <= b9 && b9 < aq + au
	}
	this.aN = function() {
		var f, i, g;
		for (aHt = !1, title = "LEADERBOARD", aHY = aR ? 6 : 10, position = aHv = aHu = aHs = 0, aHq = !(aHr = -1), aHo = new Uint16Array(aHY + 1), aHp = new Uint32Array(aHY + 1), aHc = cK, rO = new Uint16Array(aHc), aBW = new Uint16Array(aHc),
			f = aHc - 1; 0 <= f; f--) rO[f] = f, aBW[f] = f;
		this.resize(!0), aHk = [], aHl = new Uint16Array(cK), aHm = new Uint16Array(cK);
		var uM = Math.floor(aHU - aHi - aHh - aHb),
			aHx = 0;
		for (aHn = new Array(cK), aHa.font = aHX, f = cK - 1; 0 <= f; f--)
			if (aHn[f] = f + 1 + ".", aHl[f] = f, aHm[f] = Math.floor(aHa.measureText(aj[f]).width), aHm[f] > uM) {
				for (i = aj[f], g = aj[f].length - 1; 1 <= g && (i = i.substring(0, g), aHm[f] = Math.floor(aHa.measureText(i + "...").width), !(aHm[f] <= uM)); g--);
				i += "...", aHk.push(i), aHl[f] = cK + aHx++
			} aHy()
	}, this.resize = function(aN) {
		if (au = aR ? (aHU = Math.floor(.335 * aS), Math.floor(aHY * aHU / 8)) : (aHU = Math.floor(.27 * aS), Math.floor(aHY * aHU / 10)), aHU = Math.floor(.97 * aHU), (aHZ = document.createElement("canvas")).width = aHU, aHZ.height = au, aHa =
			aHZ.getContext("2d", {
				alpha: !0
			}), aHd = .025 * aHU, aHW = .16 * aHU, aHe = 0 * aHU, aHf = Math.floor(.45 * aHd + aHW), aHg = (au - aHW - 2 * aHd - aHe) / aHY, aHV = aT + Math.floor(.55 * aHW) + aU, aHw = Math.floor((aR ? .67 : .72) * aHg), aHX = aHw + aU, aHa
			.font = aHX, aHh = Math.floor(.04 * aHU), aHi = Math.floor((aR ? .195 : .18) * aHU), aHb = Math.floor(aHa.measureText("00920600").width), aHa.font = aHV, aHj = aHU - aHh, !aN) {
			aHa.font = aHX;
			for (var f = cK - 1; 0 <= f; f--) aHm[f] = Math.floor(aHa.measureText(aHl[f] === f ? aj[f] : aHk[aHl[f] % cK]).width);
			aHy()
		}
	}, this.a6P = function() {
		return aHU
	}, this.qx = function(lY) {
		aHq && (lY || aO.lZ() % eC.a3z[eC.eD.a48] == 0) && (aHq = !1, aHy())
	}, this.aW = function() {
		! function() {
			for (var g = aHc - 1; 0 <= g; g--) 0 === oO[rO[g]] && ! function(g) {
				var aIB = rO[g];
				aHc--;
				for (var f = g; f < aHc; f++) rO[f] = rO[f + 1], aBW[rO[f]] = f;
				rO[aHc] = aIB, aBW[rO[aHc]] = aHc
			}(g)
		}();
		for (var aI9, eJ = aHc - 1, g = 0; g < eJ; g++) bx[rO[g]] < bx[rO[g + 1]] && (aI9 = rO[g], rO[g] = rO[g + 1], rO[g + 1] = aI9, aBW[rO[g]] = g, aBW[rO[g + 1]] = g + 1);
		! function() {
			for (var cQ = aHq, cN = (aHq = !0, aBW[kY] >= aHY - 1 ? aHY - 2 : aHY - 1), f = cN; 0 <= f; f--)
				if (aHo[f] !== rO[f] || aHp[f] !== bx[rO[f]]) return;
			(cN != aHY - 2 || aHo[aHY] === aBW[kY] && aHp[aHY] === bx[kY]) && (aHq = cQ)
		}();
		for (var f = aHY - 1; 0 <= f; f--) aHo[f] = rO[f], aHp[f] = bx[rO[f]];
		aHo[aHY] = aBW[kY], aHp[aHY] = bx[kY]
	}, this.eB = function(b8, b9) {
		return !!q7(b8, b9) && (aHs = aO.aP, aHt = !0, aHu = aHv = aID(b9), fW.g6() && (b8 = a8z(-1, aHv, aHY), aHr !== (b8 = b8 === aHY ? -1 : b8)) && (aHr = b8, aHy(), aO.an = !0), !0)
	}, this.eK = function(b8, b9) {
		var cQ, aIC = aID(b9);
		return aHt ? (cQ = position, (position = a8z(0, position += aHu - aIC, cK - aHY)) !== cQ && (aIC = (aIC = a8z(-1, aHu = aIC, aHY)) !== aHY && q7(b8, b9) ? aIC : -1, aHr = aIC, aHy(), aO.an = !0), !0) : (aIC = (aIC = a8z(-1, aIC, aHY)) ===
			aHY || !q7(b8, b9) || fW.g6() ? -1 : aIC, aHr !== aIC && (aHr = aIC, aHy(), aO.an = !0))
	}, this.fe = function(b8, b9) {
		if (!aHt) return !1;
		aHt = !1;
		var aIC = aID(b9);
		return fW.g6() && -1 !== aHr && (aHr = -1, aHy(), aO.an = !0), aO.aP - aHs < 350 && aHv === aIC && -1 !== (aIC = (aIC = a8z(-1, aIC, aHY)) !== aHY && q7(b8, b9) ? aIC : -1) && (b8 = rO[aIC + position], aIC === aHY - 1 && aBW[kY] >=
			position + aHY - 1 && (b8 = kY), ar && displayDonationsHistory(b8, aj, ld), 0 !== oO[b8]) && eI.kK(b8, 800, !1, 0), !0
	}, this.eF = function(b8, b9, deltaY) {
		var aIE;
		return !(aHt || cg || (aIE = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !q7(b8, b9)) || (b8 = (b8 = a8z(-1, aID(b9), aHY)) === aHY || fW.g6() ? -1 : b8, 0 < deltaY ? position < cK - aHY && (position += Math.min(cK - aHY - position,
			aIE), aHr = b8, aHy(), aO.an = !0) : 0 < position && (position -= Math.min(position, aIE), aHr = b8, aHy(), aO.an = !0), 0))
	}, this.ao = function() {
		ag.drawImage(aHZ, aq, aq)
	}
}

function aAd() {
	var a7J;

	function aN() {
		var f, aIF, aIG, aIH = new uI;
		for (aIH.uP(function() {
				var f, ez, aIF = new lr;
				for (aIF.ly(new iU("Graphics", "Some example text which won't wrap. \n As long as the screen is wide enough ofc ")), aIF.ly(new aGc(
						"Some example text which is marked to wrap (CuiWrappingParagraph), this text does not have any influence on the width of the different sections and fits into the available space.")), ez = new a2w("Resolution",
						"Select the relative resolution to render the game at", iT => console.log(iT), 0), f = 0; f < 10; f++) ez.a37(10 * (f + 1) + "%");
				return aIF.ly(ez), aIF.ly(new a2w("Quality", "Select the quality of the graphics", iT => console.log(iT), 2, ["Low", "Medium", "High", "Very High"])), aIF
			}()), aIH.uP(function() {
				var aIF = new lr;
				return aIF.ly(new iU("Gameplay")), aIF
			}()), aIH.uP(function() {
				var aIF = new lr;
				return aIF.ly(new iU("Accessibility")), aIF.ly(new a8K("Mobile Friendly", "Increase size of user interface to better support mobile devices", a8L, () => aR)), aIF
			}()), aIH.uP(function() {
				var fd, aIF = new lr;
				return aIF.ly(new iU("General")), (fd = new a4Y("Reset Settings", () => wy.aAf("Reset settings",
					"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
					[new a4Y("Confirm", () => console.log("Resetting settings"), av.rE, av.hT, av.hl), new a4Y("Other Button", () => console.log("Other button"), av.ke, av.pL, av.lq), new a4Y("Yet Another Button", () => console.log(
						"Yet another button"), av.hj, av.aHO, av.pO)]))).a4f(.5), aIF.ly(fd), aIF
			}()), f = 0; f < 10; f++)(aIF = new lr).ly(new aGc("Sample Container " + f)), aIF.lu(0, 500 * Math.random() + 100), aIF.lv(f % 2 == 0 ? av.hj : av.ke), aIH.uP(aIF);
		aIG = new a4Y("Back", () => wy.show(0), av.ke, av.pL, av.lq), a7J = new a7L("Settings", aIG, [aIH])
	}

	function a8L() {
		aR = !aR, tf.a8[0].nz = aR, g8.ww(0), zQ(aR, !1)
	}
	this.a7M = function() {
		return a7J || aN(), a7J
	}
}

function aIM() {
	this.aIN = new n7, this.aIO = function(iT, value) {}, this.aIP = function(iT, i) {}, this.aIQ = function(iT) {}, this.k9 = function(iT) {}, this.aIR = function(iT) {
		return 1
	}, this.aIS = function(iT) {
		return 1
	}, this.aIT = function(iT) {}, this.fd = function() {}
}

function aFz() {
	var jH, aIU;
	this.aN = function() {
		jH = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var f, g, a0u = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			aIV = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (aIU =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), f = jH.length - 1; 0 <= f; f--)
			for (g = a0u.length - 1; 0 <= g; g--) jH[f] = jH[f].replace(a0u[g], aIV[g]);
		if (settings.realisticNames) jH = realisticNames;
	}, this.dF = function() {
		var f;
		if (jx.jy && jx.ac.aIW)
			for (f = j3; f < cK; f++) aj[f] = jx.ac.aIW[f % qE];
		else(9 === lW ? function() {
			var f, a4 = a6.random(),
				m = jH.length,
				bL = j3 + mq.a6h;
			for (f = bL - 1; j3 <= f; f--) aj[f] = jH[(f + a4) % m];
			for (m = aIU.length, f = bL; f < cK; f++) aj[f] = aIU[f % m]
		} : ld ? function() {
			var f, a4 = a6.random();
			for (f = j3; f < cK; f++) aj[f] = jH[(f + a4) % cK]
		} : function() {
			var f, m = jH.length,
				a4 = a6.random();
			for (f = j3; f < cK; f++) aj[f] = jH[(f + a4) % m]
		})()
	}, this.qf = function() {
		var f, m, bL, a4;
		if (!ld) {
			for (lf = new Array(j3), m = j3, f = 0; f < m; f++) lf[f] = aj[f];
			if (eC.eD.le) {
				for (bL = jH.length, a4 = a6.mK(), f = 0; f < m; f++) aj[f] = jH[(f + a4) % bL];
				aj[kY] = lf[kY]
			}
		}
	}
}

function aG3() {
	function a0V(cE) {
		jx.jy = !0, jx.aIf(JSON.parse(cE.target.result)), jx.aCU()
	}

	function aIk(i, min, max, aIs) {
		return "string" != typeof i || i.length < min ? aIs : i.length > max ? i.substring(0, max) : i
	}

	function aIg(y, min, max) {
		return y = "number" == typeof y ? Math.floor(y) : min, Math.min(Math.max(y, min), max)
	}

	function aIi(y, nA) {
		return "boolean" == typeof y ? y : nA
	}

	function aIm(y, m, max, aIu) {
		var f, r, bL;
		if (!Array.isArray(y) || y.length < 1) return null;
		for (r = new(8 === aIu ? Uint8Array : Uint16Array)(m), bL = y.length, f = 0; f < m; f++) r[f] = aIg(y[f % bL], 0, max);
		return r
	}
	this.jy = !1, this.ac = null, this.fd = function() {
		this.jy = !1, this.ac = null
	}, this.aAD = function() {
		this.ac.sC && this.ac.aIb && (this.ac.sC[0] = tf.a8[2].ky.a4T()), qN(this.ac.aIc, 0, this.aId(), this.ac.h0, !1, !1)
	}, this.aId = function() {
		return [{
			name: this.ac.aIe ? ga.a3k() : this.ac.aIW[0],
			sN: [0, 0, 0],
			u1: 0
		}]
	}, this.a0T = function(a0Q) {
		var a0S = new FileReader;
		a0S.onload = a0V, a0S.readAsText(a0Q)
	}, this.aIf = function(kM) {
		this.ac = {}, this.ac.aAA = aIg(kM.numberPlayers, 1, 512), this.ac.aIh = aIg(kM.modeID, 0, 1), this.ac.ae = aIg(kM["gMap.mapID"], 0, ab.n6 - 1), this.ac.h4 = aIg(kM.seedMap, 0, 16383), this.ac.aIc = aIg(kM.seedSpawn, 0, 16383), this.ac
			.qR = aIi(kM.selectableSpawn, !1), this.ac.aIe = aIi(kM.selectableName, !1), this.ac.aIb = aIi(kM.selectableColor, !1), ab.ac.ad[ab.a0U()].name = this.ac.aIj = aIk(kM.mapName, 1, 25, "Custom Map"), this.ac.iV = function(y) {
				var f, m;
				if (!Array.isArray(y) || y.length < 1) return [];
				for (m = y.length, f = 0; f < m; f++) y[f] = aIk(y[f], 0, 100, "");
				return y
			}(kM.description), this.ac.a29 = aIm(kM.playerX, this.ac.aAA, 4096, 16), this.ac.a2H = aIm(kM.playerY, this.ac.aAA, 4096, 16), this.ac.aFQ = aIm(kM.playerTeam, this.ac.aAA, 8, 8), this.ac.ml = aIm(kM.playerStrength, this.ac.aAA, 5,
			8), this.ac.sC = function(y, m) {
				var f, r, bL;
				if (!Array.isArray(y) || y.length < 1) return null;
				for (r = new Array(m), bL = y.length, f = 0; f < m; f++) r[f] = aIm(y[f % bL], 3, 63, 8);
				return r
			}(kM.playerColor, this.ac.aAA), this.ac.aIW = function(y, m) {
				var f, r, bL;
				if (!Array.isArray(y) || y.length < 1) return null;
				for (r = new Array(m), bL = y.length, f = 0; f < m; f++) r[f] = aIk(y[f % bL], 3, 26, "Bot");
				return r
			}(kM.playerName, this.ac.aAA), this.ac.aIp = "string" == typeof kM.mapBase64 ? kM.mapBase64 : "", this.ac.aIe = this.ac.aIe || !this.ac.aIW, this.ac.h0 = 0 === this.ac.aIh ? 7 : 2 === this.ac.aIh ? 9 : 6, this.ac.a29 = this.ac.a2H ?
			this.ac.a29 : null
	}, this.aCU = function() {
		! function(i) {
			var aJ, bJ, aIr = "data:image/png;base64,";
			if (i.length <= aIr.length) return;
			jx.ac.ae = 0, jx.ac.h4 = 0, ab.dF(0, 0), i.substring(0, aIr.length) !== aIr && (i = aIr + i);
			return (aJ = new Image).onload = function() {
				ab.bX = aJ.width, ab.ea = aJ.height, 4096 < ab.bX || 4096 < ab.ea || ab.bX < 10 || ab.ea < 10 ? (ab.dF(0, 0), alert("Image w & h must be between 10 and 4096.")) : (ab.ae = ab.a0U(), ab.gy = 0, ab.cX.width = ab.bX, ab.cX
					.height = ab.ea, ab.hE.drawImage(aJ, 0, 0), bJ = ab.hE.getImageData(0, 0, ab.bX, ab.ea), ab.hG = bJ.data)
			}, aJ.src = i, jx.ac.aIp = "", 1
		}(this.ac.aIp) && ab.dF(this.ac.ae, this.ac.h4)
	}, this.aIv = function() {
		for (var max = 0, m = this.ac.aAA, f = 0; f < m; f++) this.ac.aFQ[f] > max && (max = this.ac.aFQ[f]);
		return Math.max(0, max - 1)
	}
}

function tN() {
	this.aIw = 32, this.b8 = 0, this.b9 = 0, this.a2p = 0, this.aIx = 0, this.aIy = 4, this.mB = null, this.yc = new Int16Array(9), this.aN = function() {
		this.a2p = 1 + yP.hp(ab.bX - 1, this.aIw), this.aIx = 1 + yP.hp(ab.ea - 1, this.aIw), this.mB = new Array(this.a2p * this.aIx), bG.yn.a1s(this.mB);
		var b8, b9, yc = this.yc,
			aQ = this.a2p;
		for (b8 = -1; b8 <= 1; b8++)
			for (b9 = -1; b9 <= 1; b9++) yc[3 * (1 + b9) + 1 + b8] = b9 * aQ + b8
	}, this.y6 = function(aJ0, f) {
		return this.mB[f].push(aJ0), this.mB[f].length - 1
	}, this.yQ = function(aJ1, y7, yE) {
		var aJ2, aJ3, y7 = bP.y9(y7),
			yE = bP.y9(yE);
		return y7 === yE ? aJ1 : (aJ2 = this.mB[y7].pop(), this.mB[y7].length === aJ1 ? this.y6(aJ2, yE) : (aJ3 = this.mB[y7][aJ1], this.mB[y7][aJ1] = aJ2, bR.bS.y4[aJ2] = aJ1, this.y6(aJ3, yE)))
	}
}

function aG2() {
	this.jd = 0, this.jq = null, this.aN = function() {
		this.jd = 0, this.jq = []
	}, this.rq = function(player) {
		this.jq.push(player), kU++, kW[player] = 2, player === kY && (cr.show(!1, !1), cm.aFF()), ce.ka(player)
	}, this.aFI = function(player) {
		var f, jq;
		if (2 !== kW[player])
			for (f = (jq = this.jq).length - 1; 0 <= f; f--)
				if (jq[f] === player) return void jq.splice(f, 1)
	}, this.aW = function() {
		ld || (30 === this.jd && 2140 <= aO.lZ() && this.aJ4(), this.jd = (this.jd + 1) % 60)
	}, this.aJ4 = function() {
		for (var jq = this.jq, f = jq.length - 1; 0 <= f; f--) ! function(player, sr) {
			!cG.oE(player) || (sr = Math.max(Math.min(100, im[player]), a1(sr * im[player], 100))) < 100 || (0 === bn[player].length ? !bR.tR.aW(player) && ar && a7r(player, sr, 0, 0) : (ar ? a7y : a80)(player, sr))
		}(jq[f], 12)
	}
}! function() {
	for (var _0x408e05 = yb0_0x15a2, _0x19348d = yb0_0x89a0();;) try {
		if (434100 == +parseInt(_0x408e05(150)) * (parseInt(_0x408e05(152)) / 2) + -parseInt(_0x408e05(148)) / 3 * (-parseInt(_0x408e05(140)) / 4) + -parseInt(_0x408e05(155)) / 5 * (parseInt(_0x408e05(132)) / 6) + parseInt(_0x408e05(136)) / 7 * (
				-parseInt(_0x408e05(137)) / 8) + -parseInt(_0x408e05(143)) / 9 + -parseInt(_0x408e05(158)) / 10 + parseInt(_0x408e05(146)) / 11) break;
		_0x19348d.push(_0x19348d.shift())
	} catch (_0x37909f) {
		_0x19348d.push(_0x19348d.shift())
	}
}(), self.aiCommand746 = function(y) {
		0 === y ? aAl() : 1 !== y || ja < 14 || fT.fr()
	},
	function() {
		for (var _0x664b9b = ya0_0x32d3, _0x5764a5 = ya0_0x3dbc();;) try {
			if (586351 == +parseInt(_0x664b9b(381)) + parseInt(_0x664b9b(387)) / 2 + -parseInt(_0x664b9b(377)) / 3 + -parseInt(_0x664b9b(392)) / 4 + parseInt(_0x664b9b(379)) / 5 * (-parseInt(_0x664b9b(384)) / 6) + parseInt(_0x664b9b(396)) / 7 * (
					-parseInt(_0x664b9b(383)) / 8) + parseInt(_0x664b9b(380)) / 9) break;
			_0x5764a5.push(_0x5764a5.shift())
		} catch (_0x125dc6) {
			_0x5764a5.push(_0x5764a5.shift())
		}
	}(), setTimeout(aAl, 1e4);