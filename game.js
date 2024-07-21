function a() {
	var b;
	this.c = null, this.d = function() {
		b = [], 9 === e.f && this.g()
	}, this.g = function() {
		var h, i = [50, 74, 95, 150, 190, 333];
		if (this.j = 0, this.c = [0, 0, 0, 0, 0, 0], e.k <= i[0]) this.c[0] = Math.max(l.m(e.k * (512 - e.k), i[0]), 13), e.n = this.c[0];
		else
			for (e.n = e.o - e.k, h = 1; h < 6; h++)
				if (e.k <= i[h]) {
					this.c[h - 1] = 512 - i[h - 1] - p((512 - i[h - 1]) * (e.k - i[h - 1]), i[h] - i[h - 1]), this.c[h] = 512 - e.k - this.c[h - 1];
					break
				} e.q = e.k + e.n
	}, this.r = function(player) {
		b.push({
			player: player,
			s: 14 + t.u(20)
		})
	}, this.v = function() {
		var h;
		if (9 === e.f)
			for (h = b.length - 1; 0 <= h; h--) --b[h].s <= 0 && (x.y(b[h].player, 0, z.a0.a1 + z.a0.a2), b.splice(h))
	}
}

function a3(a4, type, a5) {
	var a6;
	this.a6 = document.createElement("input"), (a6 = this.a6).type = type ? "number" : "text", a6.id = "input" + a4.title, a6.value = a4.value, a6.style.width = "100%", a6.style.userSelect = "none", a6.style.outline = "none", a6.style.resize =
		"none", a6.style.border = "inherit", a6.style.font = "inherit", a6.style.color = a7.a8, a6.style.backgroundColor = a7.a9, a6.style.fontSize = "1em", a6.style.padding = "0.1em 0.2em", -1 !== a4.aA && (a6.addEventListener("blur", function() {
			aB.aC.aD(a4.aA, a6.value)
		}), a6.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), aB.aC.aD(a4.aA, a6.value), a5 ? a5() : a6.blur())
		}))
}

function aE() {
	var aF = new Uint8Array(78);
	this.d = function() {
		var h;
		for (aF[50] = 37, h = 0; h < 10; h++) aF[h + 3] = h + 1;
		for (h = 0; h < 26; h++) aF[h + 20] = h + 11, aF[h + 52] = h + 38
	}, this.aG = function(aH) {
		return aH.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.aI = function(aH, size) {
		if ((aH = this.aG(aH)).length > size) return aH.substring(0, size);
		for (; aH.length < size;) aH += "_";
		return aH
	}, this.aJ = function(aH) {
		for (var aK = aF, aL = aH.length, aM = new Uint8Array(aL), h = 0; h < aL; h++) aM[h] = aK[aH.charCodeAt(h) - 45];
		return aM
	}, this.aN = function(aO) {
		aP.aQ(6 * aO.length), this.aR(aO), aS.d(aP.aT)
	}, this.aR = function(aO) {
		for (var aL = aO.length, aU = aP, h = 0; h < aL; h++) aU.aV(6, aO[h])
	}, this.aW = function(aH) {
		this.aR(this.aJ(aH))
	}, this.aX = function(aH, size) {
		this.aR(this.aJ(this.aI(aH, size)))
	}
}

function aY(aZ, aa) {
	var ab = document.createElement("div");
	this.ac = ab, this.resize = function() {
		ab.style.padding = ad.ae.af(ag.ah), ab.style.lineHeight = ad.ae.af(ad.ae.ai(.035))
	}, aZ.style.overflowX = "hidden", aZ.style.overflowY = "auto", ab.innerHTML = aa, aZ.appendChild(ab)
}

function aj() {
	this.ak = ["", ""], this.al = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
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

function am() {
	this.an = new Int16Array(4), this.ao = new Int16Array(4), this.d = function() {
		var h;
		for (this.an[0] = -ap.aq, this.an[1] = 1, this.an[2] = ap.aq, this.an[3] = -1, h = 0; h < 4; h++) this.ao[h] = 4 * this.an[h]
	}, this.ar = function(at, au) {
		var av = this.aw(au) - this.aw(at),
			au = this.ay(au) - this.ay(at),
			at = av >>> 31 << 1;
		return 5 + at + (1 - at) * (1 - (au >>> 31 << 1)) * (Math.abs(av) - Math.abs(au) >>> 31) & 3
	}, this.b2 = function(at, au, b3) {
		return b3 % 2 == 0 ? b3 + (1 - b3) * (1 - (this.aw(au) - this.aw(at) >>> 31 << 1)) + 4 & 3 : b3 + (2 - b3) * (1 - (this.ay(au) - this.ay(at) >>> 31 << 1)) + 4 & 3
	}, this.b5 = function(b6, b7) {
		for (var au, b9, bB = bC.bD[b6], aL = bB.length, aU = ap.aq, bE = this.aw(b7), bF = this.ay(b7), bG = bB[0] >> 2, min = this.bH(bE, bF, bG), h = 1; h < aL; h++)(b9 = (b9 = bE - (au = bB[h] >> 2) % aU) * b9 + (b9 = bF - ~~((.5 + au) /
			aU)) * b9) < min && (min = b9, bG = au);
		return bG
	}, this.bI = function(player, bJ) {
		return !bK.bL(bJ) && player === bK.bM(bJ)
	}, this.bH = function(bN, bO, b7) {
		return (bN -= this.aw(b7)) * bN + (bO -= this.ay(b7)) * bO
	}, this.bP = function(bQ, bR, bS) {
		bQ = this.bU(bQ) - this.bV(bS), bR = this.bX(bR) - this.bY(bS);
		return Math.sqrt(bQ * bQ + bR * bR)
	}, this.bZ = function(at, au) {
		var bT = this.aw(at) - this.aw(au),
			at = this.ay(at) - this.ay(au);
		return Math.sqrt(bT * bT + at * at)
	}, this.ba = function(b6, bb) {
		return l.m(bb * bC.bc[b6], 1e3)
	}, this.bU = function(bQ) {
		return 16 * (bQ + bd) / be
	}, this.bX = function(bR) {
		return 16 * (bR + bf) / be
	}, this.bg = function(bQ) {
		return Math.floor((bQ + bd) / be)
	}, this.bh = function(bR) {
		return Math.floor((bR + bf) / be)
	}, this.bi = function(bN, bO) {
		return 1 <= bN && 1 <= bO && bN < ap.aq - 1 && bO < ap.bj - 1
	}, this.aw = function(b7) {
		return b7 % ap.aq
	}, this.ay = function(b7) {
		return l.m(b7, ap.aq)
	}, this.bk = function(bN, bO) {
		return bO * ap.aq + bN
	}, this.bl = function(b7) {
		var bN = this.aw(b7),
			b7 = this.ay(b7);
		return 0 < bN && bN < ap.aq - 1 && 0 < b7 && b7 < ap.bj - 1
	}, this.bm = function(b7) {
		return b7 << 2
	}, this.bn = function(b7) {
		return ap.aq * this.ay(b7) * 256 + (this.aw(b7) << 4)
	}, this.bo = function(b7) {
		return this.bn(b7) + 8 + (ap.aq << 7)
	}, this.bp = function(bS) {
		return ap.aq * (this.bY(bS) >> 4) + (this.bV(bS) >> 4)
	}, this.bq = function(bS) {
		bS = this.bp(bS);
		return (this.aw(bS) >> 5) + br.bs.bt * (this.ay(bS) >> 5)
	}, this.bV = function(bS) {
		return bS % (ap.aq << 4)
	}, this.bY = function(bS) {
		return l.m(bS, ap.aq << 4)
	}, this.bu = function(b7, b3) {
		return b7 + this.an[b3]
	}, this.bv = function(bJ, b3) {
		return bJ + this.ao[b3]
	}
}

function bw() {
	bx() ? (by(), bz !== e.o && c0()) : c1()
}

function c0() {
	c2(), c3(bC.c4[bz]), c3(bC.bD[bz]), c5(bC.c6[bz]), c7(bC.bD[bz]), c7(bC.c8[bz]), c9(), cA()
}

function by() {
	cB = !0, cC.cD(cE, cF, cG), bC.cH[cE] += cI, cJ(), cK()
}

function bx() {
	return (bz === e.o ? cL : cM)()
}

function cM() {
	var cN = cI * e.cO,
		cP = cQ(),
		cR = cS(),
		cP = cN + 2 * cP + cR,
		cU = cV * cI;
	return cP < cU ? (cG -= cP, cW(cP - cN, cR), !0) : (cG -= cU, cW(cU - cN, cR), !1)
}

function cW(cU, cR) {
	if (0 < cR) {
		if (!(cR <= cU)) return cC.cX(bz, cE, cR - cU), void(cU = 0);
		cC.cX(bz, cE, 0), cU -= cR
	}
	cU = p(cU, 2), bC.bc[bz] >= cU ? bC.bc[bz] -= cU : bC.bc[bz] = 0
}

function cS() {
	return cC.cY(bz, cE)
}

function cQ() {
	return l.m(cI * bC.bc[bz], 1 + l.m(10 * bC.cH[bz], 16))
}

function cL() {
	return cG -= cI * e.cO, !0
}

function cK() {
	for (var h = cI - 1; 0 <= h; h--) bC.c6[cE].push(cZ[h]), bC.c4[cE].push(cZ[h]), bK.ca(cZ[h], cE)
}

function cb() {
	this.cc = function() {
		if (aS.size < aP.cd(38)) ce.cf.cg(0, 3259);
		else {
			var ch = aS.ci(6),
				aL = aS.ci(10),
				cj = aS.ci(15);
			if (aS.ck(38 + 51 * aL + 16 * cj)) {
				for (var cl, data = [], cm = 0 === ch ? (cl = .1, 1) : (cl = .001, 3), h = 0; h < aL; h++) data.push(["" + (aS.ci(30) + 1), cn.co.cp(aS.ci(5)), (cl * aS.ci(16)).toFixed(cm)]);
				8 === cq.cr && cq.cs().ct(21, !0, {
					ch: ch,
					title: ch ? "Clan Ranking" : "1v1 Player Ranking",
					data: data
				})
			} else ce.cf.cg(0, 3260)
		}
	}, this.cu = function() {
		if (aS.size < aP.cd(29)) ce.cf.cg(0, 3265);
		else {
			var cv = aS.ci(4),
				cw = aS.ci(7),
				cx = aS.ci(11);
			if (aS.ck(29 + 16 * cw + 16 * cx + 11 * cv)) {
				for (var data = [], h = 0; h < cv; h++) {
					for (var cy = cn.co.cp(aS.ci(3)), cz = aS.ci(8), d0 = [], d1 = 0; d1 < cz; d1++) d0.push(aS.ci(16));
					data.push({
						name: "[" + cy + "]",
						d0: d0
					})
				}
				8 === cq.cr && cq.cs().ct(23, !0, data)
			} else ce.cf.cg(0, 3266)
		}
	}
}
var d2, d3, d4, d5, d6, d7, jA, jB, xj, xk, xl;

function d8() {
	this.d9 = 1048, this.d = function() {
		d2 = 2, d4 = 23, d3 = "19 Jul 2024 [1.97.1]", d5 = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io") || Math.random() >= 0.8, d7 = function() {
			try {
				return window.self !== window.top
			} catch (a6) {
				return !0
			}
		}(), d6 = (new Date).getTime() % 1024
	}, this.dB = 0
}

function dC() {
	this.d = function() {
		! function() {
			var data = aB.dF.data;
			0 === data[2].dH && (dI.dJ > dI.aU || 0 !== dK.id) && (data[2].value = data[2].dG = 1);
			0 === data[100].dH && (data[100].value = data[100].dG = (0 === dK.id ? "Player " : 1 === dK.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].dG = dL.dM()
		}();
		var h, b8, data = aB.dF.data,
			aL = data.length;
		for (h = 0; h < aL; h++) data[h] && data[h].dH === aB.dN.dO(h, !0) && (b8 = aB.dN.dP(h), data[h].value = null === b8 ? data[h].dG : 2 === data[h].type ? b8 : Number(b8));
		aB.dF.data[10].value = aB.dF.data[10].dG
	}
}

function dQ() {
	this.dR = new dS, this.dT = new dU
}

function dV() {
	this.dW = 28, this.dX = 0, this.dY = null;
	var da = this.dZ = null;

	function dl(di, dq) {
		var dr, ds, b7, bT, du = ad.ae.dh(di, di),
			dv = ad.ae.getContext(du, !0),
			dw = ad.ae.getImageData(dv, di, di),
			dx = dw.data,
			dy = (di >> 1) - .5,
			dz = .5 + dy;
		for (dz *= dz, ds = 0; ds < di; ds++)
			for (dr = 0; dr < di; dr++) bT = (bT = dr - dy) * bT + (bT = ds - dy) * bT, dx[b7 = 4 * (ds * di + dr)] = dq[0], dx[1 + b7] = dq[1], dx[2 + b7] = dq[2], dx[3 + b7] = (dz - bT) * dq[3] / dz;
		return dv.putImageData(dw, 0, 0), du
	}

	function e1(h, dv, du, di) {
		var dr, y, highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[h];
		if (highlight) di *= 2;
		0 !== bC.e2[h] && 0 !== bC.cH[h] && (dr = bC.e3[h] + bC.e4[h] + 1 - di - 2 >> 1, y = bC.e5[h] + bC.e6[h] + 1 - di - 2 >> 1,
			highlight ? dv.drawImage(du[e.dj ? dm.e7[h] : h < e.k ? 1 : 0], dr, y, di, di) :
			dv.drawImage(du[e.dj ? dm.e7[h] : h < e.k ? 1 : 0], dr, y))
	}
	this.d = function() {
		var dg;
		this.dX = 700,
			function(dg) {
				var di = dg.dW;
				if (dg.dZ = [], da = [], e.dj)
					for (var h = 0; h <= e.dk; h++) dg.dZ.push(dl(di, dm.dn[dm.dp[h]])), da.push(dl(di >> 1, dm.dn[dm.dp[h]]));
				else dg.dZ.push(dl(di, dm.dn[0])), dg.dZ.push(dl(di, dm.dn[4])), da.push(dl(di >> 1, dm.dn[0]))
			}(this),
			function(dg, e0) {
				var h, dY = dg.dY,
					dv = ad.ae.getContext(dY, !0),
					aL = e.o,
					di = dg.dW >> 1;
				dv.imageSmoothingEnabled = !1, dv.setTransform(1, 0, 0, 1, 0, 0), e0 && dv.clearRect(0, 0, dY.width, dY.height);
				for (h = e.k; h < aL; h++) e1(h, dv, da, di)
			}(this, null !== (dg = this).dY && dg.dY.width === ap.aq - 2 && dg.dY.height === ap.bj - 2 || (dg.dY = ad.ae.dh(ap.aq - 2, ap.bj - 2), !1)), e.de || this.df()
	}, this.df = function() {
		for (var aL = e.k, di = this.dW, dZ = this.dZ, dv = ad.ae.getContext(this.dY, !0), h = 0; h < aL; h++) e1(h, dv, dZ, di)
	}
}

function e8() {
	this.e9 = 0, this.gap = 0, this.eA = 0, this.ah = 0, this.d = function() {
		this.resize()
	}, this.resize = function() {
		this.e9 = .0022 * ad.ae.eB(.5) * dI.eC, this.eA = this.e9 / dI.eD, this.gap = Math.max(Math.floor((dK.eE.eF() ? .0114 : .01296) * dI.eC), 2), this.ah = this.gap / dI.eD
	}
}

function eG(aZ, eH) {
	var h, ab = document.createElement("div");

	function eM() {
		var h, eN, dJ, eO, eP, eK = dI.eD * ab.offsetWidth,
			eQ = new Float64Array(function(eK) {
				var aU = .25 * ad.ae.eB(.6) * dI.eC;
				return Math.max(Math.floor(eK / aU), 1)
			}(eK)),
			ah = ag.ah,
			eR = (eK - (eQ.length + 1) * ag.gap) / (eQ.length * dI.eD);
		for (eQ.fill(ah), h = 0; h < eH.length; h++) eN = (eP = eH[h].ab).style, dJ = ad.eS.min(eQ), eO = eQ.indexOf(dJ), eN.top = ad.ae.af(dJ), eN.left = ad.ae.af(ah + eO * (eR + ah)), eN.width = ad.ae.af(eR), ad.ae.eT(eP, 5), eQ[eO] += eP
			.offsetHeight + 3 * ah;
		ab.style.height = ad.ae.af(ad.eS.max(eQ) - 2 * ah)
	}
	for (this.eI = eH, this.resize = function() {
			var h;
			for (h = 0; h < eH.length; h++) eH[h].resize();
			eM(), eM()
		}, ab.style.width = "100%", ab.style.maxWidth = "100%", aZ.style.lineHeight = "1.5em", aZ.style.overflowX = "hidden", aZ.style.overflowY = "auto", h = 0; h < eH.length; h++) ab.appendChild(eH[h].ab);
	aZ.appendChild(ab)
}

function eU() {
	function en(a6) {
		eo.eV = !0, eo.ep(JSON.parse(a6.target.result)), eo.eq()
	}

	function f3(aH, min, max, fL) {
		return "string" != typeof aH || aH.length < min ? fL : aH.length > max ? aH.substring(0, max) : aH
	}

	function et(b8, min, max) {
		return b8 = "number" == typeof b8 ? Math.floor(b8) : min, Math.min(Math.max(b8, min), max)
	}

	function ez(b8, dG) {
		return "boolean" == typeof b8 ? b8 : dG
	}

	function f7(b8, aL, max, fN) {
		var h, aM, dy;
		if (!Array.isArray(b8) || b8.length < 1) return null;
		for (aM = new(8 === fN ? Uint8Array : Uint16Array)(aL), dy = b8.length, h = 0; h < aL; h++) aM[h] = et(b8[h % dy], 0, max);
		return aM
	}
	this.eV = !1, this.eW = null, this.eX = function() {
		this.eV = !1, this.eW = null
	}, this.eY = function() {
		this.eW.eZ && this.eW.ea && (this.eW.eZ[0] = ad.color.eb(aB.cf.ec())), e.ed(this.eW.ee, 0, this.ef(), this.eW.eg, !1, !1)
	}, this.ef = function() {
		return [{
			name: this.eW.eh ? aB.dF.data[122].value : this.eW.ei[0],
			ej: [0, 0, 0],
			ek: 0
		}]
	}, this.dP = function(el) {
		var em = new FileReader;
		em.onload = en, em.readAsText(el)
	}, this.ep = function(er) {
		this.eW = {}, this.eW.es = et(er.numberPlayers, 1, 512), this.eW.eu = et(er.modeID, 0, 1), this.eW.ev = et(er["gMap.mapID"], 0, ap.ew - 1), this.eW.ex = et(er.seedMap, 0, 16383), this.eW.ee = et(er.seedSpawn, 0, 16383), this.eW.ey = ez(er
				.selectableSpawn, !1), this.eW.eh = ez(er.selectableName, !1), this.eW.ea = ez(er.selectableColor, !1), ap.eW.f0[ap.f1()].name = this.eW.f2 = f3(er.mapName, 1, 25, "Custom Map"), this.eW.f4 = function(b8) {
				var h, aL;
				if (!Array.isArray(b8) || b8.length < 1) return [];
				for (aL = b8.length, h = 0; h < aL; h++) b8[h] = f3(b8[h], 0, 100, "");
				return b8
			}(er.description), this.eW.f6 = f7(er.playerX, this.eW.es, 4096, 16), this.eW.f8 = f7(er.playerY, this.eW.es, 4096, 16), this.eW.f9 = f7(er.playerTeam, this.eW.es, 8, 8), this.eW.fA = f7(er.playerStrength, this.eW.es, 5, 8), this.eW
			.eZ = function(b8, aL) {
				var h, aM, dy;
				if (!Array.isArray(b8) || b8.length < 1) return null;
				for (aM = new Array(aL), dy = b8.length, h = 0; h < aL; h++) aM[h] = f7(b8[h % dy], 3, 63, 8);
				return aM
			}(er.playerColor, this.eW.es), this.eW.ei = function(b8, aL) {
				var h, aM, dy;
				if (!Array.isArray(b8) || b8.length < 1) return null;
				for (aM = new Array(aL), dy = b8.length, h = 0; h < aL; h++) aM[h] = f3(b8[h % dy], 3, 26, "Bot");
				return aM
			}(er.playerName, this.eW.es), this.eW.fD = "string" == typeof er.mapBase64 ? er.mapBase64 : "", this.eW.eh = this.eW.eh || !this.eW.ei, this.eW.eg = 0 === this.eW.eu ? 7 : 2 === this.eW.eu ? 9 : 6, this.eW.f6 = this.eW.f8 ? this.eW
			.f6 : null
	}, this.eq = function() {
		! function(aH) {
			var fF, dw, fG = "data:image/png;base64,";
			if (aH.length <= fG.length) return;
			eo.eW.ev = 0, eo.eW.ex = 0, ap.aQ(0, 0), aH.substring(0, fG.length) !== fG && (aH = fG + aH);
			return (fF = new Image).onload = function() {
				ap.aq = fF.width, ap.bj = fF.height, 4096 < ap.aq || 4096 < ap.bj || ap.aq < 10 || ap.bj < 10 ? (ap.aQ(0, 0), alert("Image w & h must be between 10 and 4096.")) : (ap.ev = ap.f1(), ap.fH = 0, ap.fI.width = ap.aq, ap.fI
					.height = ap.bj, ap.fJ.drawImage(fF, 0, 0), dw = ap.fJ.getImageData(0, 0, ap.aq, ap.bj), ap.fK = dw.data)
			}, fF.src = aH, eo.eW.fD = "", 1
		}(this.eW.fD) && ap.aQ(this.eW.ev, this.eW.ex)
	}, this.fO = function() {
		for (var max = 0, aL = this.eW.es, h = 0; h < aL; h++) this.eW.f9[h] > max && (max = this.eW.f9[h]);
		return Math.max(0, max - 1)
	}
}

function fP() {
	this.fQ = function() {
		aP.aQ(39), aP.aV(1, 0), aP.aV(6, 16), ce.fR.fS(), ce.cf.send(0, aP.aT)
	}, this.fT = function(fU) {
		aP.aQ(115), aP.aV(1, 0), aP.aV(6, 17), cn.fX.aX(aB.dF.data[105].value, 5), cn.fX.aX(aB.dF.data[106].value, 8), aP.aV(30, aB.dF.data[109].value), ce.cf.send(fU, aP.aT)
	}, this.fW = function() {
		aP.aQ(55), aP.aV(1, 0), aP.aV(6, 18), cn.fX.aW(aB.dF.data[110].value), ce.cf.send(0, aP.aT)
	}, this.fY = function(username) {
		aP.aQ(12 + 16 * username.length), aP.aV(1, 0), aP.aV(6, 20), ce.fR.fZ(username), ce.cf.send(0, aP.aT)
	}
}

function fa() {
	this.al = null;
	var fb, fc = new fd;
	this.d = function() {
		fb = 1 === aB.dF.data[0].value ? new fe : 2 === aB.dF.data[0].value ? new aj : 3 === aB.dF.data[0].value ? new ff : 4 === aB.dF.data[0].value ? new fg : 5 === aB.dF.data[0].value ? new fh : fc;
		var h, aL = fc.al.length,
			dy = fb.al.length;
		for (h = 0; h < aL; h++) dy === h ? (fb.al.push(fc.al[h]), dy++) : 0 === fb.al[h].length && (fb.al[h] = fc.al[h]);
		this.al = fb.al, aB.dF.translate()
	}, this.dM = function() {
		var fj = navigator.language;
		return ad.fk.startsWith(fj, "en") ? 0 : ad.fk.startsWith(fj, "ru") ? 1 : ad.fk.startsWith(fj, "tr") ? 2 : ad.fk.startsWith(fj, "es") ? 3 : ad.fk.startsWith(fj, "de") ? 4 : ad.fk.startsWith(fj, "pl") ? 5 : 0
	}, this.fl = function(fm) {
		for (var eO, aL = this.al.length, h = 0; h < aL; h++)
			if (ad.fk.startsWith(this.al[h], "{") && (eO = this.al[h].replace("{" + fm + "}", "")).length < this.al[h].length) return eO;
		return fm
	}, this.fn = function(aA, fo, fp) {
		var h, fq, aL, aH;
		if (!fo) return this.al[aA];
		for (aL = fo.length, aH = this.al[aA], h = 0; h < aL; h++)
			if ("number" == typeof fo[h])
				for (fq = fb.ak.length - 1; 0 <= fq; fq--) aH = aH.replace("{" + (20 * (fq + 1) + h) + "}", (2 === fq ? 1 !== fo[h] : 1 === fo[h]) ? "" : fb.ak[fq]);
		if (fp) {
			if (fp.fr)
				for (h = 0; h < fp.fr.length; h++) fo[fp.fr[h]] = ad.fk.fs(fo[fp.fr[h]]);
			if (fp.ft)
				for (h = 0; h < fp.ft.length; h++) fo[fp.ft[h]] = ad.fk.fu(100 * fo[fp.ft[h]], 1)
		}
		for (h = 0; h < aL; h++) aH = aH.replace("{" + h + "}", fo[h]);
		return aH
	}
}

function fv() {
	this.fw = function() {
		aB.cf.fx(), aB.aC.aD(105, fy.fX.fz(fy.fX.g0(5))), aB.aC.aD(106, fy.fX.fz(fy.fX.g0(8))), aB.aC.aD(109, aS.ci(30)), aB.aC.aD(108, aB.dF.data[109].value), aB.aC.aD(111, aB.dF.data[109].value + 1), aB.aC.aD(107, 0), aB.aC.aD(110, "")
	}, this.g1 = function() {
		var g2, g3, g4;
		aS.size < aP.cd(18) ? ce.cf.cg(0, 3254) : (g2 = aS.ci(5), g3 = aS.ci(3), g4 = aS.ci(3), aS.ck(186 + 16 * (g2 + g3 + g4) + 32 + 32 + 30 + 128) ? (aB.aC.aD(109, aS.ci(30)), aB.aC.aD(107, aS.ci(16)), aB.aC.aD(108, aS.ci(30)), aB.aC.aD(112,
			aS.ci(30)), aB.aC.aD(111, aS.ci(30)), aB.aC.aD(113, aS.g5(32)), aB.aC.aD(122, cn.co.cp(g2)), aB.aC.aD(135, cn.co.cp(g3)), aB.aC.aD(136, cn.co.cp(g4)), aB.aC.aD(137, aS.g5(32)), aB.aC.aD(138, aS.g5(32)), aB.aC.aD(139, aS
			.ci(30)), aB.aC.aD(141, aS.g5(32)), aB.aC.aD(142, aS.g5(32)), aB.aC.aD(143, aS.g5(32)), aB.aC.aD(144, aS.g5(32)), 8 === cq.cr && cq.cs().ct(16, !0)) : ce.cf.cg(0, 3267))
	}
}

function g6() {
	this.g7 = null, this.d = function(g7) {
		this.g7 = g7, g8.g9(this.g7)
	}, this.gA = function(gB) {
		var b4 = (this.g7[gB].gC - this.g7[1 - gB].gC) / 10,
			b4 = 8 / (1 + Math.pow(2, b4 / 32)),
			b4 = Math.floor(10 * b4 + .5),
			gE = this.gF(this.g7[gB].gC + b4 + 1),
			b4 = this.gF(this.g7[1 - gB].gC - b4);
		0 === gB ? g8.gH(this.g7, gE, b4, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : g8.gH(this.g7, b4, gE, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.gF = function(gC) {
		return 16e3 <= (gC = gC < 0 ? 0 : 16e3 < gC ? 16e3 : gC) ? "Unknown" : (gC / 10).toFixed(1)
	}
}

function gI() {
	this.gJ = 0, this.gK = 0, this.gL = 0, this.gM = 0, this.gN = 0, this.gO = 0, this.gP = [0, 0, 0, 0], this.gQ = function() {
		this.gJ = gR.gS(), this.gK = gR.gT(), this.gL = -this.gJ, this.gM = -this.gK, this.gN = dI.aU / be, this.gO = dI.dJ / be, this.gP[0] = Math.floor(this.gL), this.gP[1] = Math.floor(this.gM), this.gP[2] = Math.floor(this.gP[0] + this.gN +
			1), this.gP[3] = Math.floor(this.gP[1] + this.gO + 1), gU.gV = !0
	}
}

function gW() {
	this.v = function() {
		gX.v(), gY.v(), dI.v(), ce.cf.v(), gZ.ga(), gb.gc && (gb.gc = !1, gd.ge())
	}
}

function cJ() {
	for (var dr, ds, h = cI - 1; 0 <= h; h--) dr = p(cZ[h], 4) % ap.aq, ds = p(cZ[h], 4 * ap.aq), bC.e3[cE] = bC.e3[cE] > dr ? dr : bC.e3[cE], bC.e5[cE] = bC.e5[cE] > ds ? ds : bC.e5[cE], bC.e4[cE] = bC.e4[cE] < dr ? dr : bC.e4[cE], bC.e6[cE] = bC
		.e6[cE] < ds ? ds : bC.e6[cE]
}

function gf() {
	var eP, b6, h, aL = bC.c6[cE].length;
	loop: for (h = aL - 1; 0 <= h; h--) {
		for (eP = 3; 0 <= eP; eP--)
			if (b6 = bC.c6[cE][h] + gg[eP], bK.bL(b6) || bK.gh(b6) && bK.bM(b6) !== cE) {
				bK.gi(bC.c6[cE][h], cE);
				continue loop
			} bC.c6[cE][h] = bC.c6[cE][aL - 1], bC.c6[cE].pop(), aL--
	}
}

function gj() {
	var eP, b6, gk, gl, aL = bC.c4[cE].length;
	loop: for (var h = aL - 1; 0 <= h; h--) {
		for (gk = gl = !1, eP = 3; 0 <= eP; eP--) {
			if (b6 = bC.c4[cE][h] + gg[eP], bK.gm(b6, cE)) continue loop;
			gk = gk || bK.gn(b6), gl = gl || bK.go(b6)
		}
		gk ? bC.bD[cE].push(bC.c4[cE][h]) : gl ? bC.c8[cE].push(bC.c4[cE][h]) : bK.gp(bC.c4[cE][h], cE), bC.c4[cE][h] = bC.c4[cE][aL - 1], bC.c4[cE].pop(), aL--
	}
}

function c2() {
	bC.cH[bz] -= cI
}

function c3(border) {
	for (var aL = border.length, h = aL - 1; 0 <= h; h--) bK.gq(bz, border[h]) || (border[h] = border[aL - 1], border.pop(), aL--)
}

function c5(border) {
	for (var aL = border.length, h = aL - 1; 0 <= h; h--) !bK.gq(bz, border[h]) && bK.gr(border[h]) && (border[h] = border[aL - 1], border.pop(), aL--)
}

function c7(border) {
	for (var eP, b6, aL = border.length, h = aL - 1; 0 <= h; h--)
		for (eP = 3; 0 <= eP; eP--)
			if (b6 = border[h] + gg[eP], bK.gm(b6, bz)) {
				bC.c4[bz].push(border[h]), border[h] = border[aL - 1], border.pop(), aL--;
				break
			}
}

function c9() {
	for (var eP, b6, h = cI - 1; 0 <= h; h--)
		for (eP = 3; 0 <= eP; eP--) b6 = cZ[h] + gg[eP], bK.gs(bz, b6) && bK.gt(b6) && (bC.c4[bz].push(b6), bK.ca(b6, bz))
}

function cA() {
	var dr, ds;
	loop: for (; bC.e5[bz] < bC.e6[bz];) {
		for (dr = bC.e4[bz]; dr >= bC.e3[bz]; dr--)
			if (bK.gq(bz, 4 * (bC.e5[bz] * ap.aq + dr))) break loop;
		bC.e5[bz]++
	}
	loop: for (; bC.e5[bz] < bC.e6[bz];) {
		for (dr = bC.e4[bz]; dr >= bC.e3[bz]; dr--)
			if (bK.gq(bz, 4 * (bC.e6[bz] * ap.aq + dr))) break loop;
		bC.e6[bz]--
	}
	loop: for (; bC.e3[bz] < bC.e4[bz];) {
		for (ds = bC.e6[bz]; ds >= bC.e5[bz]; ds--)
			if (bK.gq(bz, 4 * (ds * ap.aq + bC.e3[bz]))) break loop;
		bC.e3[bz]++
	}
	loop: for (; bC.e3[bz] < bC.e4[bz];) {
		for (ds = bC.e6[bz]; ds >= bC.e5[bz]; ds--)
			if (bK.gq(bz, 4 * (ds * ap.aq + bC.e4[bz]))) break loop;
		bC.e4[bz]--
	}
}

function gu(player, gv) {
	return 0 === dm.e7[player] || dm.e7[player] !== dm.e7[gv]
}

function gw(player, gv) {
	for (var a6, gx = cC.gy(player), h = 0; h < gx; h++)
		if (0 === cC.gz(player, h))
			if ((a6 = cC.h0(player, h)) === e.o) {
				if (gv === e.o) return !1;
				if (h1(gv)) return !0
			} else if (gv === e.o) {
		if (h1(a6)) return !0
	} else if (h2(gv, a6)) return !0;
	return !1
}

function h1(player) {
	for (var h, eO, aL = bC.c4[player].length, eP = 3; 0 <= eP; eP--)
		for (eO = gg[eP], h = 0; h < aL; h++)
			if (bK.bL(bC.c4[player][h] + eO)) return !0;
	return !1
}

function h2(h3, h4) {
	var h, h5, eP, eO, b6, h6 = bC.c4[h3].length,
		h7 = bC.c4[h4].length;
	for (h7 < h6 && (h5 = h3, h3 = h4, h4 = h5, h5 = h6, h6 = h7, 0), eP = 3; 0 <= eP; eP--)
		for (eO = gg[eP], h = 0; h < h6; h++)
			if (b6 = bC.c4[h3][h] + eO, bK.gh(b6) && bK.bM(b6) === h4) return !0;
	return !1
}

function h8() {
	var h9, aU, ds, hA, hB, fF, hC, hD, hE, hF, hG, hH, hI;
	this.dr = 0, this.dJ = 0, this.d = function() {
		hB = e.hJ, hG = "rgba(0,100,0,0.8)", hH = "rgba(150,0,0,0.8)", hD = !(hF = !0), hE = bC.bc[e.hK], this.resize()
	}, this.resize = function() {
		aU = Math.floor((dK.eE.eF() ? .305 : .24) * dI.eC), this.dJ = Math.floor(.5 + .13 * aU), aU = Math.floor(6 * this.dJ), h9 = ad.ae.hL(1, Math.floor(.8 * this.dJ)), hI = Math.floor(.5 * this.dJ), ap.fJ.font = h9, ds = ag.gap, hA = Math
			.floor(1 + .13 * this.dJ), (fF = document.createElement("canvas")).width = aU, fF.height = this.dJ, (hC = fF.getContext("2d", {
				alpha: !0
			})).font = h9, ad.ae.textBaseline(hC, 1), ad.ae.textAlign(hC, 1), this.hM()
	}, this.hN = function() {
		return dK.eE.eF() && dI.aU < 1.2 * dI.dJ
	}, this.hO = function() {
		this.hN() ? this.dr = dI.aU - aU - ag.gap : this.dr = Math.floor(hP.hQ() + (dI.aU - hP.hQ() - hR.aU - aU) / 2 - .5 * ag.gap)
	}, this.hS = function() {
		hD && (hD = !1, this.hM())
	}, this.hM = function() {
		hC.clearRect(0, 0, aU, this.dJ), hC.fillStyle = hF ? hG : hH, hC.fillRect(0, 0, aU, this.dJ), hC.fillStyle = a7.hT, this.hU(), this.hV(), hC.fillStyle = bC.bc[e.hK] >= hW.hX(e.hK) ? a7.hY : a7.a8, hC.fillText(ad.fk.fs(hE), Math.floor(aU /
			2), hI), hC.fillStyle = a7.a8, hC.fillRect(0, 0, aU, 1), hC.fillRect(0, 0, 1, this.dJ), hC.fillRect(0, this.dJ - 1, aU, 1), hC.fillRect(aU - 1, 0, 1, this.dJ)
	}, this.hU = function() {
		var hZ = hb(Math.floor((hW.ha() - 1) * this.dJ / 9), this.dJ - hA);
		hC.fillRect(0, hZ, hA, this.dJ - hZ), hC.fillRect(aU - hA, hZ, hA, this.dJ - hZ)
	}, this.hV = function() {
		hC.fillRect(hA, this.dJ - hA, Math.floor((aU - 2 * hA) * bC.bc[e.hK] / hB), hA)
	}, this.v = function() {
		0 !== bC.e2[e.hK] && 2 !== bC.hc[e.hK] && hE !== bC.bc[e.hK] && (hB = hd(bC.bc[e.hK], hB), hF = bC.bc[e.hK] > hE && 10 <= bC.bc[e.hK], hE = bC.bc[e.hK], hD = !0)
	}, this.ge = function() {
		0 === bC.e2[e.hK] || e.de || 2 === bC.hc[e.hK] || he.drawImage(fF, this.dr, ds)
	}
}

function hf() {
	this.hg = function(player, hh, hi) {
		ad.hj.hk(player, hi, hh) && (hW.hl(player, hh), hh < e.k) && t.random() < t.value(10) && (hm[hh] = 0)
	}, this.hn = function(player, hh, hi) {
		ad.hj.ho(hi, hh) && (ad.hj.hp(hh, hq.hr[0]), hs.ht(player, hh), x.hu(hh, hq.hr[0]))
	}
}

function hv() {
	this.hw = function(fU, id) {
		aP.aQ(24), aP.aV(1, 0), aP.aV(6, 6), aP.aV(1, id), aP.aV(16, Math.abs(4096 + hx.position[id] + hx.hy[id]) % 65536), ce.cf.send(fU, aP.aT)
	}, this.hz = function(fU, i0) {
		aP.aQ(8), aP.aV(1, 0), aP.aV(6, 4), aP.aV(1, i0 ? 1 : 0), ce.cf.send(fU, aP.aT)
	}, this.i1 = function() {
		aP.aQ(58), aP.aV(1, 0), aP.aV(6, 5), aP.aV(8, ce.cf.i2()), aP.aV(10, gZ.i3), aP.aV(9, gZ.i4), aP.aV(10, d6), aP.aV(14, i5.d9), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.i7 = function(b7) {
		aP.aQ(27), aP.aV(1, 1), aP.aV(4, 0), aP.aV(22, b7), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.i8 = function(bb, gv) {
		aP.aQ(25), aP.aV(1, 1), aP.aV(4, 1), aP.aV(10, bb), aP.aV(10, gv), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.i9 = function(bb, hh) {
		aP.aQ(24), aP.aV(1, 1), aP.aV(4, 2), aP.aV(10, bb), aP.aV(9, hh), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iA = function(bb, b7) {
		aP.aQ(37), aP.aV(1, 1), aP.aV(4, 3), aP.aV(10, bb), aP.aV(22, b7), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iB = function(iC, b7) {
		aP.aQ(37), aP.aV(1, 1), aP.aV(4, 4), aP.aV(10, iC), aP.aV(22, b7), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iD = function(gv) {
		aP.aQ(15), aP.aV(1, 1), aP.aV(4, 5), aP.aV(10, gv), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iE = function(aA) {
		aP.aQ(15), aP.aV(1, 1), aP.aV(4, 6), aP.aV(10, aA), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iF = function(iG) {
		aP.aQ(6), aP.aV(1, 1), aP.aV(4, 7), aP.aV(1, iG), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iH = function() {
		aP.aQ(5), aP.aV(1, 1), aP.aV(4, 8), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iI = function(iJ, iK) {
		aP.aQ(24), aP.aV(1, 1), aP.aV(4, 15), aP.aV(9, iK), aP.aV(10, iJ), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iL = function(iM) {
		aP.aQ(14), aP.aV(1, 1), aP.aV(4, 14), aP.aV(9, iM), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.iN = function(iO, target) {
		var h, aL = iO.length;
		for (aP.aQ(14 + 9 * aL), aP.aV(1, 1), aP.aV(4, 13), aP.aV(9, target), h = 0; h < aL; h++) aP.aV(9, iO[h]);
		ce.cf.send(ce.cf.i6, aP.aT)
	}
}

function iP() {
	var iQ, iR, iS;
	iQ = [32, 65, 191, 913, 931], iR = [64, 127, 688, 930, 1155], iS = new Array(iQ.length + 1);
	for (var h = 0; h < iS.length; h++) {
		iS[h] = 0;
		for (var d1 = h - 1; 0 <= d1; d1--) iS[h] += iR[d1] - iQ[d1]
	}

	function iZ(fm) {
		for (var h = iQ.length - 1; 0 <= h; h--)
			if (fm >= iQ[h] && fm < iR[h]) return h;
		return -1
	}
	this.iU = function(aH) {
		return 0 !== (aH = aH.trim()).indexOf("Bot ") && 0 !== aH.indexOf("[Bot] ") && function(aH, iW, iX) {
			var aL = (aH = aH.trim()).length;
			if (aL < iW || iX < aL) return !1;
			for (var fm, iY = 0, h = 0; h < aL; h++)
				if (fm = aH.charCodeAt(h), iY += 65 <= fm && fm <= 90 || 1040 <= fm && fm <= 1071 ? 1 : 0, -1 === iZ(fm)) return !1;
			if (3 < iY && iY > Math.floor(aL / 2)) return !1;
			return !0
		}(aH, 3, 20)
	}, this.ia = function(aH) {
		for (var aL = (aH = aH.trim()).length, aM = [], h = 0; h < aL; h++) {
			var fm, b6 = iZ(fm = aH.charCodeAt(h));
			aM.push(iS[b6] + fm - iQ[b6])
		}
		return aM
	}, this.ib = function(aM) {
		for (var fm, fq, aH = "", aL = aM.length, h = 0; h < aL; h++)
			for (fq = 1; fq < iS.length; fq++)
				if (aM[h] < iS[fq]) {
					fm = iQ[fq - 1] + aM[h] - iS[fq - 1], aH += String.fromCharCode(fm);
					break
				} return aH
	}, this.ic = function(aH) {
		for (var aM = this.ia(aH), result = "", h = 0; h < aM.length; h++) result = (result += aM[h] < 10 ? "00" : aM[h] < 100 ? "0" : "") + aM[h].toString(10);
		return result
	}, this.ie = function(aH) {
		for (var aM = new Array(Math.floor(aH.length / 3)), h = 0; h < aH.length; h += 3) aM[Math.floor(h / 3)] = parseInt(aH.substring(h, h + 3));
		return this.ib(aM)
	}, this.ig = function(aH) {
		for (var b8, aM = [aH.length], h = 0; h < aH.length; h++) aM[h] = aH.charCodeAt(h) - 48;
		var result = "";
		for (h = 0; h < aH.length; h++) h === aH.length - 1 || 51 < 10 * aM[h] + aM[h + 1] ? result += aM[h].toString() : (b8 = 10 * aM[h] + aM[h + 1], result += String.fromCharCode(b8 + (b8 < 26 ? 65 : 71)), h++);
		return result
	}, this.ih = function(aH) {
		for (var fm, result = "", h = 0; h < aH.length; h++) 48 <= (fm = aH.charCodeAt(h)) && fm < 58 ? result += String.fromCharCode(fm) : 65 <= fm && fm < 75 ? result += "0" + (fm - 65).toString() : 75 <= fm && fm < 91 ? result += (fm - 65)
			.toString() : 97 <= fm && fm < 123 && (result += (fm - 71).toString());
		return result
	}, this.ii = function(aH) {
		for (var aL = aH.length, aM = [], h = 0; h < aL; h++)(fm = aH.charCodeAt(h)) < 58 ? aM.push(aH[h]) : (fm -= fm < 91 ? 65 : 71, aM.push(String(p(fm, 10))), aM.push(String(fm - 10 * p(fm, 10))));
		var aL = aM.length - 2,
			fm = 0,
			aO = [];
		for (h = 0; h < aL; h += 3) aO[fm++] = parseInt(aM[h] + aM[h + 1] + aM[h + 2]);
		return aO
	}, this.ij = function() {
		for (var ik, il = "", h = 0; h < 6; h++) ik = 48 + t.random() % 36, ik += 58 <= ik ? 39 : 0, il += String.fromCharCode(ik);
		return il
	}
}

function im() {
	this.io = 32, this.dr = 0, this.ds = 0, this.bt = 0, this.ip = 0, this.iq = 4, this.bs = null, this.ir = new Int16Array(9), this.d = function() {
		this.bt = 1 + l.m(ap.aq - 1, this.io), this.ip = 1 + l.m(ap.bj - 1, this.io), this.bs = new Array(this.bt * this.ip), ad.eS.is(this.bs);
		var dr, ds, ir = this.ir,
			aU = this.bt;
		for (dr = -1; dr <= 1; dr++)
			for (ds = -1; ds <= 1; ds++) ir[3 * (1 + ds) + 1 + dr] = ds * aU + dr
	}, this.iu = function(iv, h) {
		return this.bs[h].push(iv), this.bs[h].length - 1
	}, this.iw = function(ix, iy, iz) {
		var j0, j1, iy = j3.bq(iy),
			iz = j3.bq(iz);
		return iy === iz ? ix : (j0 = this.bs[iy].pop(), this.bs[iy].length === ix ? this.iu(j0, iz) : (j1 = this.bs[iy][ix], this.bs[iy][ix] = j0, br.cf.j5[j0] = ix, this.iu(j1, iz)))
	}
}

function j6() {
	this.j7 = null, this.d = function() {
		10 !== e.f ? this.j7 = null : this.j7 = new Uint32Array(e.o)
	}, this.v = function() {
		10 === e.f && this.j8()
	}, this.j8 = function() {
		for (var b6, target, j9, j7 = this.j7, g7 = jA, hE = bC.bc, h = jB - 1; 0 <= h; h--)(b6 = g7[h]) >= e.k || (target = Math.max(p(hE[b6], 4), 2048), j9 = Math.max(hW.jC(b6), 100), j7[b6] += p(j9 * target, 1e4), j7[b6] > target && (j7[b6] =
			target))
	}, this.jD = function(player, hi) {
		return hi > this.j7[player] ? (hi = this.j7[player], this.j7[player] = 0) : this.j7[player] -= hi, hi
	}
}

function jE() {
	this.aU = 0, this.dJ = 0, this.jF = 0, this.jG = 0, this.jH = 0, this.jI = 0, this.jJ = 0, this.jK = 0, this.jL = 0, this.jM = 0, this.jN = 0, this.jO = 0, this.jP = 0, this.aA = 0, this.jQ = ["Territory", "Balance", "Interest", "Numbers"], this
		.jR = !1, this.jS = -1, this.jT = !1, this.jU = [0, 0], this.d = function() {
			this.jR = !1, this.jS = -1, this.jT = !1, this.resize()
		}, this.resize = function() {
			this.aU = dI.aU < 1.369 * dI.dJ ? dI.aU : 1.369 * dI.dJ;
			var eP = dK.eE.eF() && dI.aU < dI.dJ ? 1 : dK.eE.eF() ? .8 : dI.aU < dI.dJ ? .65 : .59;
			this.aU = Math.floor(eP * this.aU), this.aU -= dK.eE.eF() && dI.aU < dI.dJ ? 2 * ag.gap + 2 : 0, this.dJ = Math.floor(this.aU / 1.369), this.jP = Math.floor(this.dJ / 150), this.jP = Math.max(this.jP, 1.5), this.jF = Math.floor(1 + .02 *
					this.aU), this.jG = Math.floor(1 + .04 * this.aU), this.jJ = this.jG, this.jK = Math.floor(1 + .075 * this.aU), this.jM = Math.floor(1 + .1125 * this.aU), this.jN = Math.floor(this.aU * (dK.eE.eF() ? .03 : .029)), this.jN = Math
				.max(this.jN, 4), this.jO = Math.floor(.035 * this.aU), this.jO = Math.max(this.jO, 4), this.jL = this.dJ - 2 * this.jJ - this.jK - this.jM, this.jR && this.jW()
		}, this.jX = function(jY, jZ) {
			var hZ, ja;
			return !!this.jR && (ja = jY, hZ = jZ, jY -= p(dI.aU - this.aU, 2), jZ -= p(dI.dJ - this.dJ, 2), jY < 0 || jZ < 0 || jY >= this.aU || jZ >= this.dJ || jY >= this.aU - this.jM && jZ < this.jM ? 1 < jb.jX(ja, hZ) || this.jc() : jZ < this
				.jM || (jZ < this.dJ - this.jK ? (this.jT = !0, this.jS = (jY - 2 * this.jF - this.jH) / this.jI, 3 !== this.aA && (gb.gc = !0)) : (ja = (ja = Math.floor(jY / (this.aU / this.jQ.length))) < 0 ? 0 : ja >= this.jQ.length ? this.jQ
					.length - 1 : ja) !== this.aA && (this.aA = ja, this.jW(), gb.gc = !0)), !0)
		}, this.jd = function() {
			var je = Math.floor((this.jU[0] + bd) / be),
				jf = Math.floor((this.jU[1] + bf) / be);
			je < 1 || jf < 1 || je >= ap.aq - 1 || jf >= ap.bj - 1 || console.log(je + " " + jf)
		}, this.jg = function(jY, jZ) {
			return this.jU[0] = jY, this.jU[1] = jZ, !(!this.jR || !this.jT || (jY -= p(dI.aU - this.aU, 2), jZ = this.jS, this.jS = (jY - 2 * this.jF - this.jH) / this.jI, (0 <= this.jS && this.jS <= 1 || 0 <= jZ && jZ <= 1) && (gb.gc = !0), 0))
		}, this.jh = function() {
			this.jT && (this.jT = !1)
		}, this.ji = function() {
			this.jR ? this.jc() : this.show()
		}, this.show = function() {
			hs.jj < 2 || (this.jR = !0, this.jW())
		}, this.jc = function() {
			this.jR = !1, this.jS = -1, gb.gc = !0
		}, this.jW = function() {
			this.aA < 2 ? this.jH = jk.measureText(ad.fk.fs(hs.max[this.aA]), ad.ae.hL(0, this.jN)) : 2 === this.aA && (this.jH = jk.measureText(ad.fk.fu(6, 2), ad.ae.hL(0, this.jN))), this.jI = this.aU - 2 * this.jF - this.jH - this.jG
		}, this.jl = function() {
			this.jR && this.jW()
		}, this.ge = function() {
			this.jR && this.jm()
		}, this.jm = function() {
			var dr = p(dI.aU - this.aU, 2),
				ds = p(dI.dJ - this.dJ, 2);
			he.setTransform(1, 0, 0, 1, dr, ds), he.fillStyle = a7.jn, he.fillRect(0, this.jM, this.aU, this.dJ - this.jM), this.jo(), this.jp(), he.strokeRect(0, 0, this.aU, this.dJ), ad.ae.textAlign(he, 2), he.font = ad.ae.hL(0, this.jN), 0 ===
				this.aA ? this.jq(hs.jr, dr, ds) : 1 === this.aA ? this.jq(hs.hE, dr, ds) : 2 === this.aA ? this.js(dr, ds) : 3 === this.aA && (this.jt(dr, ds), this.ju(dr, ds)), jb.jv(Math.floor(dr + this.aU - .725 * this.jM), Math.floor(ds + .275 *
					this.jM), Math.floor(.45 * this.jM)), he.setTransform(1, 0, 0, 1, 0, 0)
		}, this.jo = function() {
			var h, h5;
			for (he.lineWidth = this.jP, ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 1), he.strokeStyle = a7.a8, he.font = ad.ae.hL(1, this.jO), h5 = this.aU / this.jQ.length, he.fillStyle = a7.jw, he.fillRect(this.aA * h5, this.dJ - this.jK, h5,
					this.jK), he.fillStyle = a7.a8, he.fillRect(0, this.dJ - this.jK - .5 * this.jP, this.aU, this.jP), h = 1; h <= 3; h++) he.fillRect(h * h5, this.dJ - this.jK, this.jP, this.jK);
			for (h = this.jQ.length - 1; 0 <= h; h--) he.fillText(this.jQ[h], (h + .5) * h5, this.dJ - .46 * this.jK)
		}, this.jp = function() {
			he.fillStyle = a7.jx, he.fillRect(0, 0, this.aU, this.jM), he.fillStyle = a7.a8, he.fillRect(0, this.jM - .5 * this.jP, this.aU, this.jP), he.font = ad.ae.hL(1, .39 * this.jM), he.fillText("Statistics", Math.floor(this.aU / 2), Math
				.floor(.55 * this.jM))
		}, this.jq = function(aM, dr, ds) {
			var dy = hs.max[this.aA],
				jy = (he.setTransform(1, 0, 0, 1, dr + 2 * this.jF + this.jH, ds + this.jJ + this.jM), he.lineWidth = 2, this.jL / Math.sqrt(dy));
			he.beginPath(), he.moveTo(this.jI, this.jL - jy * Math.sqrt(aM[hs.jj - 1]));
			for (var h = hs.jj - 2; 0 <= h; h--) he.lineTo(h * this.jI / (hs.jj - 1), this.jL - jy * Math.sqrt(aM[h]));
			he.stroke();
			dr = this.jv(aM, jy, .5);
			dr < .95 && he.fillText(ad.fk.fs(dy), -this.jF, 0), .05 < Math.abs(dr - .5) && he.fillText(ad.fk.fs(Math.floor(dy / 4)), -this.jF, Math.floor(this.jL / 2)), .05 < dr && he.fillText("0", -this.jF, this.jL)
		}, this.js = function(dr, ds) {
			he.setTransform(1, 0, 0, 1, dr + 2 * this.jF + this.jH, ds + this.jJ + this.jM), he.lineWidth = 2;
			var jy = this.jL / Math.max(hs.max[this.aA], 1);
			he.beginPath(), he.moveTo(this.jI, this.jL - jy * hs.j9[hs.jj - 1]);
			for (var h = hs.jj - 2; 0 <= h; h--) he.lineTo(h * this.jI / (hs.jj - 1), this.jL - jy * hs.j9[h]);
			he.stroke();
			dr = this.jv(hs.j9, jy, 1), ds = hs.max[this.aA] / 100;
			dr < .95 && he.fillText(ad.fk.fu(ds, 2), -this.jF, 0), .05 < Math.abs(dr - .5) && he.fillText(ad.fk.fu(ds / 2, 2), -this.jF, Math.floor(this.jL / 2)), .05 < dr && he.fillText(ad.fk.fu(0, 2), -this.jF, this.jL)
		}, this.jt = function(dr, ds) {
			he.setTransform(1, 0, 0, 1, dr + .34 * this.aU, ds + 2 * this.jJ + this.jM), ad.ae.textAlign(he, 2);
			for (var jz = this.dJ - 4 * this.jJ - this.jK - this.jM, h = 7; 0 <= h; h--) he.fillText(hs.k0[h], 0, h * jz / 7);
			he.setTransform(1, 0, 0, 1, dr + .39 * this.aU, ds + 2 * this.jJ + this.jM), ad.ae.textAlign(he, 0);
			dr = hs.k1[1];
			for (he.fillText(ad.fk.fu(hs.k1[0] / (10 * (dr < 1 ? 1 : dr)), 1), 0, 0), h = 6; 1 <= h; h--) he.fillText(hs.k1[h].toString(), 0, h * jz / 7);
			he.fillText(ad.fk.fu(100 * (1 - bC.cH[e.hK] / hs.k1[7]), 0), 0, jz)
		}, this.ju = function(dr, ds) {
			he.setTransform(1, 0, 0, 1, dr + .79 * this.aU, ds + 2 * this.jJ + this.jM), ad.ae.textAlign(he, 2);
			var h, jz = this.dJ - 4 * this.jJ - this.jK - this.jM;
			for (he.fillStyle = a7.k2, h = 2; 0 <= h; h--) he.fillText(hs.k0[h + 8], 0, h * jz / 9);
			for (he.fillStyle = a7.k3, he.fillText(hs.k0[11], 0, 3 * jz / 9), he.fillStyle = a7.k4, h = 8; 4 <= h; h--) he.fillText(hs.k0[h + 8], 0, h * jz / 9);
			he.fillStyle = a7.k5, he.fillText(hs.k0[17], 0, 9 * jz / 9), he.fillStyle = a7.k2;
			var k6 = ad.fk.fs(hs.k1[8] + hs.k1[9] + hs.k1[10] + hs.k1[11]),
				k7 = he.measureText(k6).width,
				dr = (he.setTransform(1, 0, 0, 1, dr + .83 * this.aU + k7, ds + 2 * this.jJ + this.jM), he.fillText(ad.fk.fs(hs.k1[8]), 0, 0), he.fillText(ad.fk.fs(hs.k1[9]), 0, jz / 9), he.fillText(ad.fk.fs(hs.k1[10]), 0, 2 * jz / 9), he.fillStyle =
					a7.k3, he.fillText(k6, 0, 3 * jz / 9), he.fillStyle = a7.k4, hs.k1[13] - cC.k9(e.hK)),
				k7 = (he.fillText(ad.fk.fs(hs.k1[12]), 0, 4 * jz / 9), he.fillText(ad.fk.fs(dr), 0, 5 * jz / 9), he.fillText(ad.fk.fs(hs.k1[14]), 0, 6 * jz / 9), he.fillText(ad.fk.fs(hs.k1[15]), 0, 7 * jz / 9), he.fillText(ad.fk.fs(hs.k1[16]), 0, 8 *
					jz / 9), hs.k1[12] + dr + hs.k1[14] + hs.k1[15] + hs.k1[16] + hs.k1[17]);
			he.fillStyle = a7.k5, he.fillText(ad.fk.fs(k7), 0, jz), he.fillStyle = a7.a8
		}, this.jv = function(aM, jy, kB) {
			var h, a6, kC;
			return this.jS < 0 || 1 < this.jS ? .25 : (h = this.jS * (hs.jj - 1), kC = aM[a6 = Math.floor(h)], kC += (h - a6) * (aM[a6 < hs.jj - 1 ? a6 + 1 : a6] - kC), he.strokeStyle = a7.kE, .04 < this.jS && this.kF(0, this.jL - jy * Math.pow(kC,
					kB), h * this.jI / (hs.jj - 1), this.jL - jy * Math.pow(kC, kB)), .04 < kC / hs.max[this.aA] && this.kF(h * this.jI / (hs.jj - 1), this.jL, h * this.jI / (hs.jj - 1), this.jL - jy * Math.pow(kC, kB)), he.fillStyle = a7.kG, he
				.beginPath(), he.arc(h * this.jI / (hs.jj - 1), this.jL - jy * Math.pow(kC, kB), Math.max(2, .014 * this.dJ), 0, 2 * Math.PI), he.fill(), aM = this.jS * gb.kI, aM = 0 === bC.e2[e.hK] ? Math.floor(aM * kJ.kK) : Math.floor(aM * gb
					.kL()), he.fillStyle = a7.a8, he.fillText(1 === kB ? ad.fk.fu(kC / 100, 2) : ad.fk.fs(Math.floor(kC)), -this.jF, this.jL - jy * Math.pow(kC, kB)), ad.ae.textAlign(he, 1), he.fillText(hR.ha(aM), h * this.jI / (hs.jj - 1), this
					.jL + this.jN - (dK.eE.eF() ? 2 : 0) - this.jP), ad.ae.textAlign(he, 2), jy * Math.pow(kC, kB) / this.jL)
		}, this.kF = function(kM, kN, kO, kP) {
			he.beginPath(), he.moveTo(kM, kN), he.lineTo(kO, kP), he.stroke()
		}
}

function kQ(data) {
	var kR, kS, kT, kU, kV, kW, kX, colors, kY, kZ, h5, ko, kp, ka = 0,
		kb = 0,
		kc = !1,
		kd = !1,
		ke = [1, 5, 60, 240, 1440, 10080, 43200];

	function lO(jY, jZ) {
		! function(jY, jZ) {
			return kS < jY && jY < kS + kU && kT < jZ && jZ < kT + kV
		}(ka = jY, kb = jZ) ? (kc && (gb.gc = !0), kc = !1) : (kc = !0, gb.gc = !0)
	}
	this.show = function() {
		kd = aB.dF.data[127].value, kR.show(), this.resize()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize();
		var fm = dI.eD,
			kt = kR.ku(),
			kv = fm * kt.kw,
			fm = fm * kt.kx;
		kW = ad.ae.ky(.06), kX = ad.ae.ky(.04), kS = ad.ae.ky(.06), kT = fm + kW, kU = dI.aU - kS - kX, kV = kv + fm - kT - kX
	}, this.ge = function() {
		kR.ge(),
			function() {
				var h, d0, s, dr, d1, aM = data.data,
					l2 = 1,
					l3 = .125,
					l4 = kd ? 65536 : 0;
				for (h = 0; h < aM.length; h++)
					for (d0 = aM[h].d0, s = d0.length, l2 = Math.max(s, l2), d1 = 0; d1 < s; d1++) l3 = Math.max(d0[d1], l3), l4 = Math.min(d0[d1], l4);
				var kN = kT + kV,
					l5 = kV / (l3 - l4),
					l6 = 1 / (l2 - 1);
				for (he.lineWidth = ag.e9, h = 0; h < aM.length; h++) {
					for (d0 = aM[h].d0, s = d0.length, dr = kS, he.beginPath(), he.moveTo(dr + kU, kN - l5 * (d0[s - 1] - l4)), d1 = s - 2; 0 <= d1; d1--) he.lineTo(dr + l6 * d1 * kU, kN - l5 * (d0[d1] - l4));
					he.strokeStyle = colors[h], he.stroke()
				}(function(l4, l3, kN, l5) {
					he.font = ad.ae.hL(0, .25 * kS), ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 2), he.fillStyle = colors[0];
					for (var dr = .92 * kS, h = 0; h < 3; h++) {
						var b8 = l4 + h * (l3 - l4) / 2;
						he.fillText((b8 / 1e3).toFixed(3), dr, kN - l5 * (b8 - l4))
					}
				})(l4, l3, kN, l5),
				function(l2) {
					var ds = kT + kV + .15 * kX;
					he.font = ad.ae.hL(0, .4 * kX), ad.ae.textBaseline(he, 0), ad.ae.textAlign(he, 2), he.fillStyle = colors[0], he.fillText(ad.kj.l9(kY), kS + kU, ds), ad.ae.textAlign(he, 0), he.fillText(ad.kj.l9(new Date(kZ.getTime() - 6e4 * (
						l2 - 1) * ke[data.ki])), kS, ds)
				}(l2),
				function(l2, l4, l3) {
					if (kc && !(l2 < 2)) {
						for (var lK, aA = (ka - kS) / kU * (l2 - 1), lA = Math.floor(aA), lB = Math.floor(1 + aA), lC = aA - lA, lD = 1e5, lE = -1, lF = -1, lG = l3 - (l3 - l4) * (kb - kT) / kV, aM = data.data, h = 0; h < aM.length; h++) {
							var lH, d0 = aM[h].d0;
							d0.length <= lB || (d0 = d0[lA] + lC * (d0[lB] - d0[lA]), (lH = Math.abs(lG - d0)) < lD && (lD = lH, lE = h, lF = d0))
						} - 1 !== lE && (l3 = kT + kV - (lF - l4) / (l3 - l4) * kV, he.lineWidth = .5 * ag.e9, he.strokeStyle = colors[lE], he.beginPath(), he.moveTo(kS, l3), he.lineTo(ka, l3), he.lineTo(ka, kT + kV), he.stroke(), he.beginPath(),
							he.arc(ka, l3, .1 * kS, 0, 2 * Math.PI), he.fillStyle = colors[lE], he.fill(), l4 = kT + kV + .15 * kX, ad.ae.textAlign(he, 1), lK = l2 - 2 < aA ? (lK = kZ.getTime() - 6e4 * ke[data.ki], new Date(lK + (aA - (l2 -
								2)) * (kY.getTime() - lK))) : new Date(kZ.getTime() - 6e4 * (l2 - aA - 1) * ke[data.ki]), l2 = ad.kj.l9(lK), aA = ad.ae.measureText(l2), lK = l.lM(ka, kS + .5 * aA, kS + kU - .5 * aA), he.fillStyle = ad.color
							.ks(70, 50, 20), he.fillRect(lK - .52 * aA, kT + kV, 1.04 * aA, .55 * kX), he.fillStyle = colors[0], he.fillText(l2, lK, l4), he.font = ad.ae.hL(0, .25 * kS), ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 2), lK =
							.92 * kS, l2 = (lF / 1e3).toFixed(3), aA = ad.ae.measureText(l2), l4 = lK - 1.04 * aA, he.fillStyle = ad.color.ks(70, 50, 20), he.fillRect(l4, l3 - .1625 * kS, kS - l4, .275 * kS), he.fillStyle = colors[lE], he
							.fillText(l2, lK, l3))
					}
				}(l2, l4, l3)
			}(), he.lineWidth = ag.e9, he.strokeStyle = a7.a8, he.beginPath(), he.moveTo(kS, kT), he.lineTo(kS, kT + kV), he.lineTo(kS + kU, kT + kV), he.stroke();
		var h, fontSize = .5 * kW,
			aM = (he.font = ad.ae.hL(0, fontSize), ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 0), data.data),
			aL = aM.length,
			ds = kT - .5 * kW,
			aH = "";
		for (h = 0; h < aL; h++) aH += aM[h].name + "  ";
		aH = aH.trim();
		var k7 = ad.ae.measureText(aH),
			dr = .5 * (dI.aU - k7);
		for (k7 > dI.aU && (dr = 0, he.font = ad.ae.hL(0, dI.aU / k7 * fontSize)), h = 0; h < aL; h++) he.fillStyle = colors[h], he.fillText(aM[h].name, dr, ds), dr += ad.ae.measureText(aM[h].name + "  ")
	}, this.jX = function(jY, jZ) {
		lO(jY, jZ)
	}, this.jg = function(jY, jZ) {
		lO(jY, jZ)
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, h5 = new Date, ko = 6e4 * h5.getTimezoneOffset(), kp = h5.getTime() - ko, kY = new Date(kp), 6 === data.ki ? function(h5, ko) {
		var kr = h5.getUTCFullYear(),
			h5 = h5.getUTCMonth() + 1;
		kZ = h5 < 12 ? new Date(Date.UTC(kr, h5) - ko) : new Date(Date.UTC(kr + 1, 0) - ko)
	}(h5, ko) : (ko = 6e4 * ke[data.ki], kZ = data.ki <= 4 ? new Date(kp + ko - h5.getTime() % ko) : new Date(kp + ko - (h5.getTime() + 2592e5) % ko)), kp = ad.color, colors = [a7.a8, kp.ks(255, 0, 0), kp.ks(0, 200, 0), kp.ks(80, 80, 255), kp.ks(
		255, 255, 0), kp.ks(255, 0, 255), kp.ks(0, 255, 255), kp.ks(255, 140, 0), kp.ks(128, 128, 128), kp.ks(0, 255, 140)], kR = new kh("Clan Chart, " + aB.dF.data[125].fp[data.ki] + ", " + ad.kj.kk(kY), [new kl("❌ " + dL.al[92], function() {
		cq.cf.km()
	}), new kl("🛠️ Custom", function() {
		cq.kn(14)
	})], !1)
}

function lS() {
	var lT = null;
	this.lU = 0, this.lV = function() {
		var b8 = aB.dF.data[5].value;
		lT = "px " + b8, "Trebuchet MS" !== b8 && (lT += ", Trebuchet MS"), this.lU = lW(32, 32, ["a", "b", "m"], 200, lT)
	}, this.dh = function(aU, dJ) {
		var fm = document.createElement("canvas");
		return fm.width = aU, fm.height = dJ, fm
	}, this.getContext = function(fF, alpha) {
		return fF.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(hC, aU, dJ) {
		return hC.getImageData(0, 0, aU, dJ)
	}, this.hL = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + lT : 1 === type ? "bold " + size + lT : 2 === type ? "lighter " + size + lT : 3 === type ? "italic " + size + lT : 4 === type ? "oblique " + size + lT : 5 === type ? "small-caps " +
			size + lT : "small-caps bold " + size + lT
	}, this.textAlign = function(dv, id) {
		dv.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(dv, id) {
		dv.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.eT = function(a6, code, color) {
		color = this.af(ag.eA) + " solid " + (color || a7.a8);
		5 === (code = code || 5) ? a6.style.border = color : 4 === code ? a6.style.borderLeft = color : 2 === code ? a6.style.borderBottom = color : 6 === code ? a6.style.borderRight = color : a6.style.borderTop = color
	}, this.lX = function(a6, dr, ds, aU, dJ) {
		a6 = a6.style;
		a6.left = this.lY(dr), a6.top = this.lY(ds), a6.width = this.lY(aU), a6.height = this.lY(dJ)
	}, this.eB = function(b8) {
		return 1 + b8 * dK.eE.eF()
	}, this.ai = function(cl, eO) {
		return cl * this.eB(void 0 === eO ? .5 : eO) * dI.eC / dI.eD
	}, this.ky = function(cl, eO) {
		return cl * this.eB(void 0 === eO ? .5 : eO) * dI.eC
	}, this.af = function(b8) {
		return b8.toFixed(1) + "px"
	}, this.lY = function(b8) {
		return this.lZ(b8).toFixed(1) + "px"
	}, this.lZ = function(b8) {
		return b8 / dI.eD
	}, this.la = function(lb, lc) {
		for (var aH = "<ul>", aL = lb.length, h = 0; h < aL; h++) aH += "<li>" + lb[h] + ": <a href='" + lc[h] + "' target='_blank'>" + lc[h] + "</a></li>";
		return aH += "</ul>"
	}, this.ld = function(le) {
		return "<a href='" + le + "' target='_blank'>" + le + "</a>"
	}, this.lf = function(a6) {
		navigator.clipboard && navigator.clipboard.writeText(a6.value)
	}, this.lg = function(a6) {
		ad.fk.startsWith(a6.innerText, "✅ ") || (a6.innerText = "✅ " + a6.innerText, setTimeout(function() {
			a6.innerText = a6.innerText.substring(a6.innerText.indexOf(" ") + 1)
		}, 500))
	}, this.measureText = function(aH) {
		return he.measureText(aH).width
	}
}

function lh() {
	this.li = [], this.lj = [], this.d = function() {
		this.li = [], this.lj = []
	}, this.v = function() {
		0 <= this.li.length && this.lk(this.li), 0 <= this.lj.length && this.lk(this.lj)
	}, this.lk = function(aM) {
		for (var fq = -1, h = aM.length - 1; 0 <= h; h--)
			if (aM[h].kH--, aM[h].kH <= 0) {
				fq = h;
				break
			} for (h = fq; 0 <= h; h--) aM.shift()
	}, this.ll = function(id, g7, lm) {
		return this.ln(this.li, id, g7, lm)
	}, this.lo = function(id, g7, lm) {
		return this.ln(this.lj, id, g7, lm)
	}, this.ln = function(aM, id, g7, lm) {
		return ! function(aM, id, g7) {
			var h, kp;
			for (h = g7.length - 1; 0 <= h; h--)
				for (kp = aM.length - 1; 0 <= kp; kp--)
					if (aM[kp].player === g7[h] && id === aM[kp].id) return 1;
			return
		}(aM, id, g7) && (lm && function(aM, id, g7) {
			var h;
			for (h = g7.length - 1; 0 <= h; h--) aM.push({
				player: g7[h],
				id: id,
				kH: 384
			})
		}(aM, id, g7), !0)
	}
}

function lr() {
	this.ls = function(fF, lt, lu) {
		var aU = fF.width,
			dJ = fF.height,
			fm = ad.ae.dh(aU, dJ),
			dv = ad.ae.getContext(fm, !0),
			fF = (dv.drawImage(fF, 0, 0), dv.getImageData(0, 0, aU, dJ));
		return lt(fF.data, aU, dJ, lu), dv.putImageData(fF, 0, 0), fm
	}, this.lv = function(dx, aU, dJ) {
		for (var dr = aU - 1; 0 <= dr; dr--)
			for (var ds = dJ - 1; 0 <= ds; ds--) {
				var h = 4 * (dr + ds * aU);
				dx[3 + h] = dx[h], dx[h] = dx[1 + h] = dx[2 + h] = 255
			}
	}, this.lw = function(dx, aU, dJ) {
		for (var dr = aU - 1; 0 <= dr; dr--)
			for (var ds = dJ - 1; 0 <= ds; ds--) {
				var h = 4 * (dr + ds * aU);
				dx[1 + h] > dx[2 + h] + 10 && (dx[3 + h] = dx[h], dx[1 + h] = dx[2 + h])
			}
	}, this.lx = function(dx, aU, dJ, lu) {
		for (var gap = Math.floor(Math.min(aU, dJ) * lu), dr = 0; dr < aU; dr++)
			for (var h, ds = 0; ds < dJ; ds++)(dr < gap || ds < gap || aU - gap <= dr || dJ - gap <= ds) && (dx[3 + (h = 4 * (dr + ds * aU))] = 255 - 255 * (dx[1 + h] - dx[h]) / (255 - dx[h]))
	}, this.ly = function(dx, aU, dJ, lu) {
		for (var dr = aU - 1; 0 <= dr; dr--)
			for (var ds = dJ - 1; 0 <= ds; ds--) {
				var h = 4 * (dr + ds * aU);
				dx[h] = lu[0], dx[1 + h] = lu[1], dx[2 + h] = lu[2]
			}
	}, this.lz = function(dx, aU, dJ, lu) {
		for (var gap = Math.floor(aU * lu), dr = 0; dr < aU; dr++)
			for (var h, ds = 0; ds < dJ; ds++)(dr < gap || ds < gap || aU - gap <= dr || dJ - gap <= ds) && (dx[h = 4 * (dr + ds * aU)] = dx[1 + h] = dx[2 + h] = 0)
	}, this.m0 = function(dx, aU, dJ) {
		for (var ds, h, dr = aU - 1; 0 <= dr; dr--)
			for (ds = dJ - 1; 0 <= ds; ds--) 200 < dx[1 + (h = 4 * (dr + ds * aU))] && dx[1 + h] - 20 > dx[h] && dx[1 + h] - 20 > dx[2 + h] ? dx[h] + dx[2 + h] < 40 ? dx[3 + h] = 0 : (dx[3 + h] = dx[h], dx[h] = 255, dx[1 + h] = 255, dx[2 + h] =
				255) : dx[h] < 50 && dx[1 + h] < 50 && dx[2 + h] < 50 && (dx[h] + dx[1 + h] + dx[2 + h] < 50 ? dx[3 + h] = 180 : dx[3 + h] = 180 + Math.floor(75 * (dx[h] + dx[1 + h] + dx[2 + h] - 50) / 100))
	}, this.m1 = function(dx, aU, dJ) {
		for (var ds, h, dr = aU - 1; 0 <= dr; dr--)
			for (ds = dJ - 1; 0 <= ds; ds--) dx[1 + (h = 4 * (dr + ds * aU))] > dx[h] + 20 && dx[1 + h] > dx[2 + h] + 20 && dx[h] + dx[2] < 40 && (dx[3 + h] = 255 - dx[1 + h], dx[h] = dx[1 + h] = dx[2 + h] = dx[h])
	}, this.m2 = function(dx, aU, dJ, lu) {
		for (var ik = aU >> 1, dr = 0; dr < aU; dr++)
			for (var ds = 0; ds < dJ; ds++) Math.sqrt((dr - ik) * (dr - ik) + (ds - ik) * (ds - ik)) > lu * ik && (dx[4 * (dr + ds * aU) + 3] = 0)
	}
}

function m3() {
	var m4 = 32,
		m5 = new Array(2);

	function dh(fm) {
		var dr, ds, b7, bW, bT, di = m4,
			du = ad.ae.dh(di, di),
			dv = ad.ae.getContext(du, !0),
			dw = ad.ae.getImageData(dv, di, di),
			dx = dw.data,
			dy = (di >> 1) - .5,
			m7 = Math.sqrt(dy * dy);
		for (dx.fill(255), ds = 0; ds < di; ds++)
			for (dr = 0; dr < di; dr++) bT = dr - dy, bW = ds - dy, b7 = 4 * (ds * di + dr), bT = 714 * (m7 - Math.sqrt(bT * bT + bW * bW)) / m7, dx[2 + b7] = fm, dx[3 + b7] = 255 < bT ? 0 : bT;
		return dv.putImageData(dw, 0, 0), du
	}
	this.m6 = -1, this.d = function() {
		this.m6 = -1, m5[0] || (m5[0] = dh(255), m5[1] = dh(0))
	}, this.e1 = function(dv, bJ, dr, ds, ik, h) {
		ad.hj.m8(e.hK) && (dv.setTransform(bJ *= 4 / 3 * .625, 0, 0, bJ, dr - (ik *= 4 / 3), ds - ik), dv.drawImage(m5[+(br.cf.m9[h] === this.m6)], 0, 0))
	}
}

function mA() {
	this.id = 0, this.dH = 0, this.mB = null, this.mC = null, this.mD = null, this.mE = null, this.eE = new mF, this.d = function() {
		var self, dH;
		self = this, "undefined" == typeof Android || (dH = Android.getVersion()) < 12 || (self.dH = dH, self.id = 1, self.mC = Android),
			function(self) {
				var dH;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.mD = mwIOSdataX, self.mE = window.webkit.messageHandlers.iosCommandA, dH = self
					.mD.version, self.dH = dH ? Number(dH) : 0)
			}(this),
			function(self) {
				var mB;
				if (0 === self.id) {
					try {
						if (!(mB = window.localStorage)) return;
						mB.setItem("tls7", "1"), mB.removeItem("tls7")
					} catch (error) {
						return
					}
					self.mB = mB
				}
			}(this)
	}
}

function mJ() {
	var mK, mL, gn, mM;
	this.d = function() {
		var h, dr, ds, ej, mN, aU, dJ, hC, dw, dx, b8, b6, dt, d1, mR;
		if (function() {
				if (gn = !0, mM = "rgb(" + ap.fK[0] + "," + ap.fK[1] + "," + ap.fK[2] + ")", ap.mQ(ap.ev)) return 1;
				return gn = !1, 0
			}()) mL = null;
		else {
			for (mK = p(96, 4), mN = 1 === ap.ev ? (ej = 0, 160) : (ej = 128, 32), mM = "rgb(" + ej + "," + ej + "," + ej + ")", mL = new Array(4), h = 3; 0 <= h; h--) {
				if (mL[h] = document.createElement("canvas"), aU = h % 2 == 0 ? ap.aq : mK, dJ = h % 2 == 0 ? mK : ap.bj + 2 * mK, mL[h].width = aU, mL[h].height = dJ, dx = (dw = (hC = mL[h].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, aU, dJ)).data, h % 2 == 0)
					for (ds = mK - 1; 0 <= ds; ds--)
						for (b8 = mN + Math.floor((ds + 1) * (ej - mN) / (mK + 1)), dr = aU - 1; 0 <= dr; dr--) dx[b6 = 4 * ((0 === h ? mK - ds - 1 : ds) * aU + dr)] = b8, dx[b6 + 1] = b8, dx[b6 + 2] = b8, dx[b6 + 3] = 255;
				else {
					for (dr = mK - 1; 0 <= dr; dr--)
						for (b8 = mN + Math.floor((dr + 1) * (ej - mN) / (mK + 1)), ds = dJ - 1 - mK; mK <= ds; ds--) dx[b6 = 4 * (ds * aU + (3 === h ? mK - dr - 1 : dr))] = b8, dx[b6 + 1] = b8, dx[b6 + 2] = b8, dx[b6 + 3] = 255;
					for (d1 = 1; 0 <= d1; d1--)
						for (dr = mK - 1; 0 <= dr; dr--)
							for (ds = mK - 1; 0 <= ds; ds--) dt = (Math.pow(dr * dr + ds * ds, .5) + 1) / (mK + 1), b8 = mN + Math.floor((1 < dt ? 1 : dt) * (ej - mN)), dx[b6 = 4 * ((0 === d1 ? mK - ds - 1 : ds + d1 * (dJ - mK)) * aU + (1 === h ?
								dr : mK - dr - 1))] = b8, dx[b6 + 1] = b8, dx[b6 + 2] = b8, dx[b6 + 3] = 255
				}
				hC.putImageData(dw, 0, 0)
			}
			mR = mN, ap.fJ.fillStyle = "rgb(" + mR + "," + mR + "," + mR + ")", ap.fJ.fillRect(0, 0, ap.aq, 1), ap.fJ.fillRect(0, ap.bj - 1, ap.aq, 1), ap.fJ.fillRect(0, 0, 1, ap.bj), ap.fJ.fillRect(ap.aq - 1, 0, 1, ap.bj)
		}
	}, this.mS = function() {
		var d1 = gn ? 0 : -mK;
		mT(d1, d1, ap.aq - 2 * d1, ap.bj - 2 * d1, mU.gL, mU.gM, mU.gN, mU.gO) || (he.fillStyle = mM, he.fillRect(0, 0, dI.aU, dI.dJ))
	}, this.ge = function() {
		gn || (mV(0, -mK, ap.aq, mK, mU.gL, mU.gM, mU.gN, mU.gO) && he.drawImage(mL[0], mU.gJ, mU.gK - mK), mV(ap.aq, -mK, mK, ap.bj + 2 * mK, mU.gL, mU.gM, mU.gN, mU.gO) && he.drawImage(mL[1], mU.gJ + ap.aq, mU.gK - mK), mV(0, ap.bj, ap.aq, mK,
			mU.gL, mU.gM, mU.gN, mU.gO) && he.drawImage(mL[2], mU.gJ, mU.gK + ap.bj), mV(-mK, -mK, mK, ap.bj + 2 * mK, mU.gL, mU.gM, mU.gN, mU.gO) && he.drawImage(mL[3], mU.gJ - mK, mU.gK - mK))
	}
}

function mW() {
	this.dO = function(aA, dH) {
		return Number(this.dP(aA, dH))
	}, this.dP = function(aA, dH) {
		var b8 = null;
		return 0 === dK.id ? dK.mB && (b8 = dK.mB.getItem((dH ? "v" : "d") + aA)) : 1 === dK.id ? b8 = dK.mC.loadString((dH ? 1e3 : 2e3) + aA) : 2 === dK.id && (b8 = dK.mD[(dH ? "v" : "d") + aA]), b8 && 0 !== b8.length ? b8 : null
	}, this.save = function(aA, value, dH) {
		0 === dK.id ? dK.mB && aB.dF.data[140].value && dK.mB.setItem((dH ? "v" : "d") + aA, value) : 1 === dK.id ? dK.mC.saveString((dH ? 1e3 : 2e3) + aA, value) : 2 === dK.id && (dK.mD["d" + aA] = value, dK.mE.postMessage((dH ? "v" : "d") +
			aA + " " + value))
	}
}

function mX() {
	var mY, mZ, ma, mb, mc, md, me, mf, mg, h9, fontSize, mh, mi, mk, mj = 0;

	function mn() {
		return ce.cf.mo[(mi + mj) % ce.cf.mp]
	}

	function ml() {
		mi++, mh = gb.kH, ce.cf.mq(mn(), 4) && (mk = !0, ce.mr.ms(mn()))
	}

	function mu() {
		0 === mi ? my.mz(3249) : (mi === ce.cf.mp - 1 && (mi = -1), ml())
	}

	function nA(ds, n8, n9) {
		var kM = Math.floor((dI.aU - mb) / 2) + me,
			kO = kM + Math.floor(n9 * (mb - 2 * me));
		he.lineWidth = n8, he.beginPath(), he.moveTo(kM, ds), he.lineTo(kO, ds), he.lineTo(Math.floor(kM - me + n9 * mb), ds + ma), he.lineTo(kM - me, ds + ma), he.closePath()
	}
	this.d = function() {
		gd.setState(6), mY = 0, mZ = 1, mf = "rgba(0,220,120,0.4)", mg = "rgba(0,0,0,0.8)", this.resize(), gb.gc = !0, mi = 0, mk = !1, ml()
	}, this.resize = function() {
		mb = Math.floor((dK.eE.eF() ? .5 : .25) * dI.eC), mc = mb + 12, ma = Math.floor(.125 * mb), me = 3 * ma, md = Math.floor(.225 * mb), fontSize = Math.floor(.3 * ma), h9 = ad.ae.hL(0, fontSize)
	}, this.mm = function(d1) {
		mj = d1
	}, this.mt = function(fU) {
		fU === mn() && (mk = !1, mu())
	}, this.mv = function(fU) {
		6 !== gd.mw() || mk || (mh = gb.kH, mk = !0)
	}, this.jX = function(dr, ds) {
		var kM = Math.floor((dI.aU - mc) / 2),
			kN = Math.floor(.5 * (dI.dJ - ag.gap - ma - md)) + ma + ag.gap;
		return kM < dr && dr < kM + mc && kN < ds && ds < kN + md && (this.n0(), n1.jg(dr, ds, !1), !0)
	}, this.n0 = function() {
		ce.cf.n2(3260), cq.cf.n3()
	}, this.v = function() {
		6 === gd.mw() && (mk ? gb.kH > mh + 12e3 && my.mz(3250) : gb.kH > mh + 12e3 && mu(), 100 < (mY += .07 * mZ * (mY < 16 ? 5 + mY : 84 < mY ? 105 - mY : 17)) ? (mY = 100, mZ = -1) : mY < 0 && (mY = 0, mZ = 1), mf = "rgba(0," + Math.floor(
			190 - 1.9 * mY) + "," + Math.floor(120 - 1.2 * mY) + "," + (.4 + .004 * mY) + ")", mg = "rgba(0," + Math.floor(1.9 * mY) + "," + Math.floor(1.2 * mY) + "," + (.8 - .004 * mY) + ")", gb.gc = !0)
	}, this.ge = function() {
		var dr = Math.floor((dI.aU - mc) / 2),
			ds = Math.floor(.5 * (dI.dJ - ag.gap - ma - md));
		! function(title, ds, n8, n9) {
			he.fillStyle = mg, nA(ds, n8, 1), he.fill(), he.fillStyle = mf, nA(ds, n8, n9), he.fill(), he.strokeStyle = a7.a8, nA(ds, n8, 1), he.stroke(),
				function(nC, ds) {
					ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1), he.font = h9, he.fillStyle = a7.a8, he.fillText(nC, Math.floor(.5 * dI.aU), Math.floor(ds + .58 * ma))
				}(title, ds)
		}("Loading", ds, 3, mY / 100),
		function(dr, ds, aU, dJ, al) {
			he.fillStyle = a7.n7, he.fillRect(dr, ds, aU, dJ), he.lineWidth = 3, he.strokeStyle = a7.a8, he.strokeRect(dr, ds, aU, dJ);
			var aL = Math.floor(.3 * dJ);
			ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1), he.font = ad.ae.hL(0, aL), he.fillStyle = a7.a8, he.fillText(al, Math.floor(dr + aU / 2), Math.floor(ds + dJ / 2 + .1 * aL))
		}(dr, ds + ma + ag.gap, mc, md, "Back")
	}
}

function nD(name, placeholder) {
	var nE = document.createElement("textarea"),
		nG = (this.nF = nE, !0);

	function nM() {
		nE.select(), document.execCommand("copy")
	}
	this.resize = function() {
			nE.style.padding = ad.ae.af(ag.ah)
		}, this.nH = function(nI) {
			nE.value = nI
		}, this.nJ = function() {
			return nE.value
		}, this.nK = function() {
			nE.select()
		}, this.clear = function() {
			nE.value = ""
		}, this.nL = function() {
			nG && navigator.clipboard ? (nE.select(), navigator.clipboard.writeText(nE.value).catch(function() {
				nG = !1, nM()
			})) : nM()
		}, nE.setAttribute("name", name), nE.setAttribute("id", name + "Field"), nE.setAttribute("autocomplete", "off"), nE.setAttribute("placeholder", placeholder), nE.style.top = "0", nE.style.left = "0", nE.style.width = "100%", nE.style.height =
		"100%", nE.style.userSelect = "none", nE.style.outline = "none", nE.style.resize = "none", nE.style.border = "none", nE.style.color = a7.a8, nE.style.backgroundColor = a7.a9, nE.style.fontSize = "1.2em"
}

function nN() {
	var aH;
	10 === ap.ev ? aH =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === ap.ev ? aH =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === ap.ev ? aH =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === ap.ev ? aH =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === ap.ev ? aH =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === ap.ev ? aH =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === ap.ev ? aH =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === ap.ev ? aH =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === ap.ev ? aH =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === ap.ev && (aH =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new nO).ib(aH)
}

function nP() {
	var nQ, k1, aL, nR, nS;

	function nX() {
		for (var ng = 0, h = 1; h < 5; h++) ng += k1[h] % 1024;
		return ng
	}

	function nW() {
		for (var h = 1; h < aL - nS; h++) k1[h] = parseInt(k1[h])
	}

	function nY() {
		k1[0] = "Player " + Math.floor(1e3 * Math.random()), k1[1] = dI.aU < dI.dJ ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, k1[2] = 1, k1[3] = 1, k1[4] = dI.aU < dI.dJ ? 0 : 1, k1[5] = 0, k1[6] = "000", k1[7] = "0", k1[8] = "0",
			k1[9] = "0", nh.nZ()
	}

	function nV() {
		for (var h = aL - nS - 1; 0 <= h; h--) k1[h] = ni.ih(k1[h]);
		k1[0] = ni.ie(k1[0])
	}

	function nl(name, value, nm) {
		var kj = new Date,
			nm = (kj.setTime(kj.getTime() + Math.floor(31536e6 * nm)), name + "=" + value + ";expires=" + kj.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = nm
	}
	this.d = function() {
		if (0 === dK.id) {
			nS = 4, nQ = [], aL = 10;
			for (var h = nR = 0; h < aL; h++) nQ.push("u" + h);
			k1 = new Array(aL), ! function(nj) {
				for (var d1, b6, nk = nj.split(";"), h = nk.length - 1; 0 <= h; h--) {
					for (nk[h] = nk[h].trim(), d1 = 2; 0 <= d1; d1--) nk[h] = nk[h].replace(" ", "");
					3 < nk[h].length && (d1 = nQ.indexOf(nk[h].substring(0, 2)), b6 = nk[h].indexOf("="), 0 <= d1 && 2 === b6 ? k1[d1] = nk[h].substring(b6 + 1, nk[h].length) : 0 < b6 && nl(nk[h].substring(0, b6), "0", 0))
				}
			}(document.cookie), k1[9] || (k1[9] = "0"), (! function() {
				for (var h = aL - 1; 0 <= h; h--)
					if (void 0 === k1[h]) return;
				return 1
			}() || (nR = 2, nV(), nW(), nX() !== k1[5])) && nY()
		}
	}, this.nZ = function() {
		if (2 === nR) {
			k1[1] = 0 === k1[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : k1[1], k1[5] = nX(), ! function() {
				for (var h = 1; h < aL - nS; h++) k1[h] = k1[h].toString()
			}(), ! function() {
				k1[0] = ni.ic(k1[0]);
				for (var h = aL - nS - 1; 0 <= h; h--) k1[h] = ni.ig(k1[h])
			}();
			for (var h = aL - 1; 0 <= h; h--) nl(nQ[h], k1[h], 1);
			nV(), nW()
		}
	}, this.nR = function() {
		return nR
	}, this.nd = function(d1) {
		nR = d1, this.nZ()
	}, this.ne = function(h, value) {
		0 === dK.id && (k1[h] = value)
	}, this.nf = function(h) {
		return 0 !== dK.id ? 0 : k1[h]
	}
}

function nn() {
	var jR, no, aU, dJ, jJ, np, nq, nr, fF, mh, ns;

	function gT() {
		return Math.floor((dI.aU - aU) / 2) < ny.dJ + 2 * ag.gap ? dI.dJ - dJ - 4 * ag.gap - ny.dJ : dI.dJ - dJ - 2 * ag.gap
	}
	this.kK = -1, this.d = function() {
		ns = jR = !1, jJ = .61, np = .07, nq = .09, mh = nr = dJ = 0, this.kK = -1
	}, this.resize = function() {
		var hC, kM, fm, o1, o2, o3;
		jR && (aU = hb(aU = dK.eE.eF() ? Math.floor(.69 * dI.eC) : Math.floor(.5 * dI.eC), hd(dI.aU - 2 * ag.gap, 10)), aU = hb(aU, Math.floor(3.57 * hd(dI.dJ - 2 * ag.gap, 3))), dJ = Math.floor(.28 * aU), (fF = document.createElement("canvas"))
			.width = aU, fF.height = dJ, hC = fF.getContext("2d", {
				alpha: !0
			}), kM = Math.floor(1 + dJ / 40), hC.clearRect(0, 0, aU, dJ), hC.fillStyle = a7.jn, hC.fillRect(kM, kM, aU - 2 * kM, dJ - 2 * kM), hC.lineJoin = "bevel", hC.lineWidth = 2 * kM, hC.strokeStyle = a7.a8, hC.strokeRect(kM, kM, aU -
				2 * kM, dJ - 2 * kM), hC.imageSmoothingEnabled = !1, fm = o0.get(no), o1 = fm.width, o2 = fm.height, o3 = (1 === no ? .85 : 21 === no ? .666 : .9) * jJ * dJ / o2, hC.setTransform(o3, 0, 0, o3, Math.floor((aU - o3 * o1) / 2),
				Math.floor((dJ - o3 * o2) / 2)), hC.drawImage(fm, 0, 0), hC.setTransform(1, 0, 0, 1, Math.floor(aU - nq * dJ - np * dJ - kM), Math.floor(kM + np * dJ)),
			function(hC, aL) {
				hC.lineWidth = Math.floor(1 + dJ / 80), hC.strokeStyle = a7.a8, hC.beginPath(), hC.moveTo(0, 0), hC.lineTo(aL, aL), hC.moveTo(0, aL), hC.lineTo(aL, 0), hC.stroke()
			}(hC, Math.floor(nq * dJ)), hC.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(b8, nu, nv, nw) {
		jR || nw && ns || (no = nv ? 21 : b8 ? 1 : 2, jR = ns = !0, this.resize(), nx.jc(), ny.nz(), mh = gb.kH, -1 === this.kK && (this.kK = gb.kL()), nr = nu ? 1 : 0)
	}, this.v = function() {
		!jR || 1 <= nr || (nr = 1 < (nr += 5e-4 * (gb.kH - mh)) ? 1 : nr, mh = gb.kH, gb.gc = !0)
	}, this.jX = function(dr, ds) {
		return !(!jR || nr <= 0 || (dr -= Math.floor((dI.aU - aU) / 2), ds -= gT(), dr < 0) || ds < 0 || aU < dr || dJ < ds || (aU - dJ / 3 < dr && ds < dJ / 3 && (jR = !1, gb.gc = !0), 0))
	}, this.ge = function() {
		!jR || nr <= 0 || (he.globalAlpha = nr, he.drawImage(fF, Math.floor((dI.aU - aU) / 2), gT()), he.globalAlpha = 1)
	}
}

function o5() {
	var o6 = [0, 0, 0, 0];

	function oO(dr, ds, di, oS) {
		he.fillStyle = a7.a8;
		var jF = hd(2, Math.floor((oS ? .5 : .35) * di)),
			jJ = (jF -= jF % 2, hd(2, Math.floor(.1 * di))),
			di = (jJ -= jJ % 2, Math.floor((di - jF) / 2)),
			kO = Math.floor(di + (jF - jJ) / 2);
		he.fillRect(dr + di, ds + kO, jF, jJ), oS && he.fillRect(dr + kO, ds + di, jJ, jF)
	}

	function n6(dr, ds, aU, dJ, oT, jy, al, hi, s) {
		he.fillStyle = oT, he.fillRect(dr, ds, aU, dJ), 0 <= hi && function(dr, ds, aU, dJ, hi) {
			he.fillStyle = "rgba(" + 22 * hi + "," + (110 - 22 * hi) + ",0,0.75)", he.fillRect(dr, ds, (1 + hi) * aU / 6, dJ)
		}(dr, ds, aU, dJ, hi), 0 < s && function(dr, ds, aU, dJ, s) {
			he.fillStyle = "rgba(255,255,255,0.3)", he.fillRect(dr, ds, s * aU / e.o, dJ)
		}(dr, ds, aU, dJ, s), he.strokeStyle = a7.a8, he.strokeRect(dr, ds, aU, dJ), 0 !== jy && (he.fillStyle = a7.a8, he.font = ad.ae.hL(1, jy * dJ), he.fillText(al, Math.floor(dr + aU / 2), Math.floor(ds + .52 * dJ)))
	}
	this.o7 = [{
		eP: 0,
		s: 512
	}], this.d = function() {
		o8.jR = !1, gd.setState(2), this.resize(), gb.gc = !0
	}, this.o9 = function() {}, this.resize = function() {
		o6[2] = Math.floor((dK.eE.eF() ? .49 : .4) * dI.eC), o6[1] = Math.floor((dI.dJ - o6[2] / 6 - this.o7.length * (ag.gap + o6[2] / 10)) / 2), o6[0] = Math.floor((dI.aU - o6[2]) / 2), o8.jR && o8.resize()
	}, this.oA = function(eg) {
		var h;
		if (6 < eg) this.o7 = [{
			eP: 0,
			s: 512
		}];
		else {
			for (this.o7 = [], h = 0; h < eg + 2; h++) this.o7.push({
				eP: 0,
				s: 0
			});
			this.oB()
		}
		ce.cf.i6 = 0
	}, this.oC = function(oD, oE) {
		for (var aL = oD.length, h = 0; h < aL; h++) this.o7[h].eP = oD[h], this.o7[h].s = oE[h]
	}, this.oF = function(oG) {
		var h, aL;
		if (1 === oG.g7.length)
			for (aL = this.o7.length, oG.oD = new Array(aL), oG.oE = new Array(aL), h = 0; h < aL; h++) oG.oD[h] = this.o7[h].eP, oG.oE[h] = this.o7[h].s
	}, this.oH = function() {
		gb.gc = !0, o8.jR ? o8.jR = !1 : (this.o9(), gd.setState(0), cq.kn(5, 5))
	}, this.oI = function() {
		var h, s;
		if (eo.eV) return eo.eW.es;
		for (s = 0, h = this.o7.length - 1; 0 <= h; h--) s += this.o7[h].s;
		return s
	}, this.jg = function(dr, ds) {
		return !(!o8.jR || !o8.jg(dr, ds)) || -1 !== this.lP(dr, ds)
	}, this.oJ = function() {
		var d1;
		ce.cf.i6 = 0, gd.oK(), eo.eV ? eo.eY() : (d1 = (d1 = this.o7.length - 2) < 0 ? 7 : d1, e.ed(Math.floor(16384 * Math.random()), 0, [{
			name: aB.dF.data[122].value,
			ej: ad.color.eb(aB.cf.ec()),
			ek: 0
		}], d1, !1, !1))
	}, this.jX = function(dr, ds) {
		if (o8.jR && !eo.eV) return o8.jX(dr, ds);
		var h, d1, max, jF, ds = this.lP(dr, ds);
		if (-1 === ds) return !1;
		if (0 === ds) this.oH();
		else if (1 === ds) eo.eV ? (eo.eX(), gb.gc = !0) : o8.show();
		else if (100 === ds) oL.oM();
		else if (2 === ds) this.o9(), this.oJ();
		else {
			if (eo.eV) return !1;
			if (27 === ds) this.o7.length < 8 && (this.o7.push({
				eP: 0,
				s: e.o
			}), this.oB(), this.resize(), gb.gc = !0);
			else if (h = Math.floor((ds - 3) / 3), ds % 3 == 0) 1 < this.o7.length && (this.o7.splice(h, 1), this.resize(), gb.gc = !0);
			else if (jF = (o6[2] - o6[2] / 10 - 2 * ag.gap) / 2, ds % 3 == 1) 0 === h && 1 === this.o7[h].s || (dr < o6[0] + o6[2] - 1.5 * jF - ag.gap ? this.o7[h].eP-- : this.o7[h].eP++, this.o7[h].eP < 0 ? this.o7[h].eP = 5 : 5 < this.o7[h]
				.eP && (this.o7[h].eP = 0), gb.gc = !0);
			else {
				for (gb.gc = !0, ds = (dr - (o6[0] + o6[2] - jF)) / jF - .5, ds *= ds < 0 ? -ds : ds, ds = 0 === (ds = Math.floor(ds * e.o)) ? 1 : ds, max = e.o, d1 = this.o7.length - 1; 0 <= d1; d1--) h !== d1 && (max -= this.o7[d1].s);
				if (ds < 0) {
					if (1 === this.o7[h].s) return this.o7[h].s = max, !0
				} else if (this.o7[h].s === max) return this.o7[h].s = 1, !0;
				this.o7[h].s += ds, this.o7[h].s < 1 ? this.o7[h].s = 1 : this.o7[h].s > max && (this.o7[h].s = max)
			}
		}
		return !0
	}, this.oB = function() {
		for (var s = Math.floor(e.o / this.o7.length), oN = e.o % this.o7.length, h = this.o7.length - 1; 0 <= h; h--) this.o7[h].s = s;
		this.o7[0].s += oN
	}, this.lP = function(dr, ds) {
		var jF = (o6[2] - 3 * ag.gap) / 4,
			jJ = o6[2] / 6;
		if (dr < o6[0] || ds < o6[1] || o6[0] + o6[2] <= dr) return -1;
		if (ds < o6[1] + jJ) return dr < o6[0] + jF ? 0 : dr < o6[0] + jF + ag.gap ? -1 : dr < o6[0] + 2 * jF + ag.gap ? 100 : dr < o6[0] + 2 * (jF + ag.gap) ? -1 : dr < o6[0] + 3 * jF + 2 * ag.gap ? 1 : dr < o6[0] + 3 * (jF + ag.gap) ? -1 : 2;
		for (var kN, jK = o6[2] / 10, jF = (o6[2] - jK - 2 * ag.gap) / 2, h = 0; h < this.o7.length; h++) {
			if (ds < (kN = o6[1] + jJ + ag.gap + h * (jK + ag.gap))) return -1;
			if (!(kN + jK < ds)) return dr < o6[0] + jK ? 3 + 3 * h : dr < o6[0] + jK + ag.gap ? -1 : dr < o6[0] + o6[2] - jF - ag.gap ? 4 + 3 * h : dr < o6[0] + o6[2] - jF ? -1 : 5 + 3 * h
		}
		return !(this.o7.length < 8) || ds < (kN = o6[1] + jJ + ag.gap + this.o7.length * (jK + ag.gap)) || kN + jK < ds || o6[0] + jK < dr ? -1 : 27
	}, this.ge = function() {
		he.lineWidth = ag.e9, ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1);
		var jF = (o6[2] - 3 * ag.gap) / 4,
			jJ = o6[2] / 6;
		if (n6(o6[0], o6[1], jF, jJ, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), n6(o6[0] + jF + ag.gap, o6[1], jF, jJ, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), n6(o6[0] + 2 * (jF + ag.gap), o6[1], jF, jJ, "rgba(" + (eo.eV ? 128 : 0) +
				",128,128,0.75)", .34, eo.eV ? "Reset" : "Maps", -1, -1), n6(o6[0] + o6[2] - jF, o6[1], jF, jJ, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !eo.eV) {
			for (var kN, jK = o6[2] / 10, jF = (o6[2] - jK - 2 * ag.gap) / 2, h = 0; h < this.o7.length; h++) kN = o6[1] + jJ + ag.gap + h * (jK + ag.gap), n6(o6[0], kN, jK, jK, 1 < this.o7.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)",
				0, null, -1), 1 < this.o7.length && oO(o6[0], kN, jK, !1), n6(o6[0] + jK + ag.gap, kN, jF, jK, a7.jn, .4, this.oP(h), this.o7[h].eP, -1), n6(o6[0] + o6[2] - jF, kN, jF, jK, a7.jn, .4, this.fr(h), -1, this.o7[h].s);
			this.o7.length < 8 && (kN = o6[1] + jJ + ag.gap + this.o7.length * (jK + ag.gap), n6(o6[0], kN, jK, jK, "rgba(0,128,20,0.75)", 0, null, -1, -1), oO(o6[0], kN, jK, !0)), o8.jR && o8.ge()
		}
	}, this.oP = function(h) {
		return 0 === h && 1 === this.o7[h].s ? "You" : oQ.oR[this.o7[h].eP]
	}, this.fr = function(h) {
		return 1 === this.o7[h].s ? "1 Player" : this.o7[h].s + " Players"
	}
}

function oW() {
	var kR, oX, eH;
	this.show = function() {
		kR.show(), this.resize()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), oX.resize()
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, kR = new kh("🛠️ Chart Options", [new kl("❌ " + dL.al[92], function() {
		cq.oY(13)
	})]), oX = new eG(kR.oZ, ((eH = []).push(function() {
		function oo() {
			var op = .1 + (0 === om.a6.value.length ? .1 : .01 * Math.min(om.a6.value.split(",").length, 10));
			ok.button.innerHTML = ad.fk.oq(ok.button.innerHTML, op)
		}
		var og = new oh,
			ok = (og.oi("Search Terms"), og.oj("Separate search terms with a comma."), new kl("Go (🧈 0.00)", function() {
				aB.aC.aD(130, 0), cq.cf.ol()
			})),
			om = new a3(aB.dF.data[126], 0, function() {
				ok.button.click()
			});
		og.on(om), om.a6.placeholder = "a,b,c", om.a6.style.marginTop = "0.5em";
		return om.a6.addEventListener("input", oo), oo(), og.on(new or([ok.button])), og
	}()), eH.push(function() {
		function oo() {
			j2 = Math.floor(ot.a6.value), j4 = Math.floor(os.a6.value);
			var j4, j2 = {
				ov: Math.min(j2, j4),
				ow: Math.max(j2, j4)
			};
			ok.button.innerHTML = ad.fk.oq(ok.button.innerHTML, (j2.ow - j2.ov + 1 + 10) / 100)
		}
		var og = new oh,
			ok = new kl("Go (🧈 0.00)", function() {
				aB.aC.aD(130, 1), cq.cf.ol()
			}),
			os = new a3(aB.dF.data[129], 1, function() {
				os.a6.focus()
			}),
			ot = new a3(aB.dF.data[128], 1, function() {
				ok.button.click()
			});
		og.oi("Start Index"), og.on(ot), ot.a6.style.marginBottom = "0.5em", og.oi("End Index"), og.on(os);
		return ot.a6.addEventListener("input", oo), os.a6.addEventListener("input", oo), oo(), og.on(new or([ok.button])), og
	}()), eH.push(function() {
		var og = new oh;
		return og.oi("Timeframe"), og.ox(new oy(aB.dF.data[125])), og
	}()), eH.push(function() {
		var og = new oh;
		return og.oi("More Options"), og.on(new oz(aB.dF.data[127], aB.dF.data[127].title)), og
	}()), eH))
}

function ff() {
	this.ak = ["", ""], this.al = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
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

function p0() {
	for (jB = 0, h = e.o - 1; 0 <= h; h--) 0 !== bC.e2[h] && jB++;
	jA = new Uint16Array(jB);
	for (var aL = 0, h = 0; h < e.o; h++) 0 !== bC.e2[h] && (jA[aL++] = h)
}

function p1() {
	p2(), p3()
}

function p3() {
	for (var h = jB - 1; 0 <= h; h--) 0 === bC.e2[jA[h]] && p4(h)
}

function p4(h) {
	jB--;
	for (var d1 = h; d1 < jB; d1++) jA[d1] = jA[d1 + 1]
}

function p2() {
	for (var h = jB - 1; 0 <= h; h--) {
		var h5, b6 = jA[h];
		bC.cH[b6] <= p(bC.p5[b6], 4) ? bC.cH[b6] <= 1e3 && (2 !== bC.e2[b6] || 0 === bC.cH[b6]) && p6(b6) : bC.cH[b6] >= bC.p5[b6] ? (h5 = bC.cH[b6], 250 <= (bC.p5[b6] = h5) && (bC.p7[b6] = 1)) : bC.p5[b6] -= Math.max(1, p(bC.p5[b6] - bC.cH[b6],
			1e3))
	}
}

function p8() {
	for (var ng = 0, h = jB - 1; 0 <= h; h--) ng += bC.bc[jA[h]];
	return ng % 4096
}

function kh(title, p9, pA) {
	var pB = document.createElement("div"),
		pC = document.createElement("div"),
		pD = document.createElement("div"),
		pE = document.createElement("div");
	this.oZ = pD, this.lR = p9, this.show = function() {
			!1 !== pA ? document.body.appendChild(pB) : (document.body.appendChild(pC), document.body.appendChild(pE))
		}, this.jc = function() {
			!1 !== pA ? document.body.removeChild(pB) : (document.body.removeChild(pC), document.body.removeChild(pE))
		}, this.ku = function() {
			var kx = ad.ae.ai(.1),
				pK = ad.ae.ai(.08 + .04 * (dI.pL < 1));
			return {
				kx: kx,
				pK: pK,
				kw: dI.dJ / dI.eD - kx - pK
			}
		}, this.resize = function() {
			var h, a6, aL = p9.length,
				kt = this.ku(),
				kx = kt.kx,
				pK = kt.pK;
			for (pC.style.height = ad.ae.af(kx), ad.ae.eT(pC, 2), pE.style.top = ad.ae.af(dI.dJ / dI.eD - pK), pE.style.height = ad.ae.af(pK), ad.ae.eT(pE, 8), pD.style.top = ad.ae.af(kx), pD.style.height = pD.style.maxHeight = ad.ae.af(kt.kw), pE
				.style.font = pC.style.font = ad.ae.hL(0, ad.ae.ai(.02, .25)), pD.style.font = ad.ae.hL(0, ad.ae.ai(.02, .4)), h = 0; h < aL; h++)(a6 = p9[h].button).style.top = "0", a6.style.left = (100 * h / aL).toFixed(2) + "%", a6.style.width = (
				100 / aL).toFixed(2) + "%", a6.style.height = "100%", 0 < h && ad.ae.eT(a6, 4)
		}, this.ge = function() {
			var kt = this.ku(),
				fm = dI.eD;
			he.fillStyle = a7.pF, he.fillRect(0, fm * kt.kx, dI.aU, fm * kt.kw)
		}, pB.style.position = "absolute", pB.style.top = "0", pB.style.left = "0", pB.style.width = "100%", pB.style.height = "100%", pC.style.position = "absolute", pC.style.top = "0", pC.style.left = "0", pC.style.width = "100%", pC.style
		.display = "flex", pC.style.backgroundColor = a7.pF, pE.style.position = "absolute", pE.style.left = "0", pE.style.width = "100%", pD.style.position = "absolute", pD.style.width = "100%", pD.style.backgroundColor = a7.pF,
		function() {
			for (var h = 0; h < p9.length; h++) p9[h].button.style.position = "absolute", p9[h].button.style.fontSize = "1.2em"
		}();
	for (var h = 0; h < p9.length; h++) pE.appendChild(p9[h].button);
	pC.appendChild(function() {
		var pJ = document.createElement("h1");
		return pJ.textContent = title, pJ.style.margin = "auto", pJ.style.fontSize = "2.3em", pJ
	}()), !1 !== pA && (pB.appendChild(pD), pB.appendChild(pC), pB.appendChild(pE))
}

function pM() {
	var aA = 0,
		pN = new Uint16Array(32);

	function remove(pS) {
		var h;
		for (aA -= 2, h = pS; h < aA; h += 2) pN[h] = pN[h + 2], pN[h + 1] = pN[h + 3]
	}
	this.d = function() {
		aA = 0
	}, this.v = function() {
		var h, gv, bb;
		if (0 !== aA)
			if (0 === bC.e2[e.hK] || cC.pO(e.hK) === cC.gy(e.hK)) aA = 0;
			else
				for (h = aA - 2; 0 <= h; h -= 2)(gv = pN[h]) < e.o && 0 === bC.e2[gv] ? remove(h) : (bb = pN[h + 1], (gv >= e.o && h1(e.hK) || gv < e.o && h2(e.hK, gv)) && (pP.pQ.pR(bb, gv), remove(h)))
	}, this.pT = function(gv, bb) {
		! function(gv, bb) {
			var h;
			for (h = 0; h < aA; h += 2)
				if (pN[h] === gv) return pN[h + 1] = Math.min(pN[h + 1] + bb, 1023), 1;
			return
		}(gv, bb) && 32 !== aA && (pN[aA] = gv, pN[aA + 1] = bb, aA += 2)
	}
}

function pV() {
	this.v = function() {
		for (var pW, pX, pY = br.cf.pY, pZ = br.cf.pZ, pa = br.cf.pa, h = br.cf.pb - 1; 0 <= h; h--) pW = pZ[h], 0 !== (pX = pY[h]) && pW === pa[h] && (! function(h, pf, b3) {
			var gv, player = br.cf.pg[h] >> 3,
				b3 = pf + j3.an[b3] << 2,
				h = br.cf.pi[h];
			if (bK.bL(b3)) gv = e.o;
			else {
				if ((gv = bK.bM(b3)) === player) return ad.hj.hp(player, h);
				if (!gu(player, gv)) return pP.pj.hn(player, gv, h)
			}
			player === e.hK && (hs.k1[13] += h);
			bC.c6[player].push(pf << 2), cC.pk(player, h, gv), pl.pm(player, !0)
		}(h, j3.bp(pW), pX - 1), br.pd.pe(h))
	}
}

function pn() {
	var aA = 0,
		kH = gb.kH;
	this.po = 0, this.v = function() {
		dI.v(), e.de ? pp() : 0 === aA ? gb.kH >= kH && (kH += gb.kI * Math.floor(1 + (gb.kH - kH) / gb.kI), 2 === e.pq || jb.pr ? ps() : (pt(), gU.pu()), aA++) : ((jb.pr ? pp : (gb.gc = !0, pv))(), aA = 0), pw(), gb.gc && (gb.gc = !1, px())
	}
}

function py() {
	this.a0 = new pz, this.dx = new q0
}

function fg() {
	this.ak = ["n", "en", "r"], this.al = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.", "{0} hat den Nichtangriffspakt gebrochen.",
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

function q1() {
	this.dN = new mW, this.dF = new q2, this.aC = new q3, this.cf = new q4, this.d = function() {
		this.dF.d(), (new dC).d()
	}
}

function q5() {
	function qI(player, qN, qO, qP) {
		for (var kM, kN, aU, dJ, ik, qQ, kO, kP, aL = qN + qP, h = qN; h < aL; h += qO)
			if (kM = (kM = bC.e3[player] - h) < 1 ? 1 : kM, kN = bC.e5[player] - h, kO = (kO = bC.e4[player] + h) >= ap.aq - 1 ? ap.aq - 2 : kO, dJ = (kP = (kP = bC.e6[player] + h) >= ap.bj - 1 ? ap.bj - 2 : kP) - (kN = kN < 1 ? 1 : kN), kO = (ik =
					p(t.random() * (2 * (kO - kM + kP - kN)), t.value(100))) <= (aU = kO - kM) ? (qQ = kM + ik, kN) : ik <= aU + dJ ? (qQ = kO, kN + ik - aU) : ik <= 2 * aU + dJ ? (qQ = kM + ik - aU - dJ, kP) : (qQ = kM, kN + ik - 2 * aU - dJ), qM(
					player, kP = bK.qL(qQ, kO))) return kP;
		return -1
	}

	function qM(h3, eO) {
		return bK.gr(eO) && (bK.bL(eO) || h3 !== (eO = bK.bM(eO)) && gu(h3, eO) && 0 < bC.bD[eO].length)
	}
	this.v = function(player) {
		return !(0 === bC.bD[player].length || bC.bc[player] < 100) && br.cf.pb !== br.cf.q6 && (br.cf.q7[player] !== br.cf.q8 && ad.hj.q9(player, 203, 32, 16) ? !! function(player) {
			var eO = function(player) {
				var h, qJ, qK, kM = bC.e3[player],
					kN = bC.e5[player],
					bT = bC.e4[player] - kM + 1,
					bW = bC.e6[player] - kN + 1,
					b8 = t.value(100);
				for (h = 0; h < 32; h++)
					if (qJ = kM + l.m(t.random() * bT, b8), qK = kN + l.m(t.random() * bW, b8), qJ = bK.qL(qJ, qK), qM(player, qJ)) return qJ;
				return -1
			}(player);
			if (0 <= eO) return br.qG.qH(player, eO >> 2);
			if (0 <= (eO = qI(player, 1, 4, 40))) return br.qG.qH(player, eO >> 2);
			if (0 <= (eO = qI(player, 40, 8, 200))) return br.qG.qH(player, eO >> 2);
			return
		}(player) && !! function(h3) {
			if (0 === hq.qE[2]) return void console.log("error 325234");
			var ph = hq.qE[1] + j3.an[hq.qE[2] - 1] << 2;
			if (bK.bL(ph)) return 1;
			return ph = bK.bM(ph), h3 !== ph && !!gu(h3, ph)
		}(player) && function(player) {
			return ad.hj.qD(player), br.cf.iu(player), !0
		}(player) : void 0)
	}
}

function qS() {
	2 === ap.ev ? qT([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === ap.ev ? qT([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === ap.ev ? qT([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === ap.ev && qT([512],
		[512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function qT(qU, qV, qW, qX, qY) {
	for (var dr, ds, qa, qb, jy, qc, bS = qU.length - 1, qZ = ap.aq + ap.bj, aL = (qZ *= qZ, qW.length), h = aL - 1; 0 <= h; h--) qW[h] *= qW[h];
	var qd = new Array(aL),
		lH = new Array(aL),
		qe = new Array(aL),
		b8 = qf.qg();
	if (void 0 === qY)
		for (qY = new Array(aL), h = aL - 1; 0 <= h; h--) qY[h] = 0;
	for (h = 1; h < aL; h++) qd[h] = qW[h] - qW[h - 1], lH[h] = qX[h] - qX[h - 1], qe[h] = qY[h] - qY[h - 1];
	for (dr = ap.aq - 1; 0 <= dr; dr--)
		for (ds = ap.bj - 1; 0 <= ds; ds--) {
			for (qa = qZ, h = bS; 0 <= h; h--) qa = (qb = (dr - qU[h]) * (dr - qU[h]) + (ds - qV[h]) * (ds - qV[h])) < qa ? qb : qa;
			for (jy = qX[aL - 1], qc = qY[aL - 1], h = 1; h < aL; h++)
				if (qa < qW[h]) {
					jy = qX[h - 1] + qh((qa - qW[h - 1]) * lH[h], qd[h]), qc = qY[h - 1] + qh((qa - qW[h - 1]) * qe[h], qd[h]);
					break
				} qi(ap.aq * ds + dr, jy, qc, b8)
		}
}

function qi(aA, jy, qc, b8) {
	jy < 500 ? b8[aA] = p(b8[aA] * jy * 2, 1e3) : 500 < jy && (b8[aA] += p(2 * (1e4 - b8[aA]) * (jy - 500), 1e3)), b8[aA] += p(qc * (10 * jy - b8[aA]), 1e3)
}

function qj() {
	this.qk = function(fU) {
		aP.aQ(39), aP.aV(1, 0), aP.aV(6, 13), aP.aV(14, i5.d9), aP.aV(4, dK.id), aP.aV(7, dK.dH), aP.aV(1, +d5), aP.aV(1, +d7), aP.aV(5, (new Date).getHours() % 24), ce.cf.send(fU, aP.aT)
	}, this.ql = function(fU, qm, qn) {
		aP.aQ(26), aP.aV(1, 0), aP.aV(6, 14), aP.aV(3, qn), aP.aV(16, qm), ce.cf.send(fU, aP.aT)
	}, this.qo = function(id) {
		aP.aQ(13), aP.aV(1, 0), aP.aV(6, 15), aP.aV(6, id), ce.cf.send(0, aP.aT)
	}, this.qp = function(qq, er) {
		aP.aQ(7 + 26 * er.length), aP.aV(1, 0), aP.aV(6, 9);
		for (var h = 0; h < er.length; h++) aP.aV(16, er[h][0]), aP.aV(10, er[h][1]);
		ce.cf.send(qq, aP.aT)
	}, this.qr = function(qs, ng) {
		aP.aQ(20), aP.aV(1, 0), aP.aV(6, 19), aP.aV(1, qs), aP.aV(12, ng), ce.cf.send(ce.cf.i6, aP.aT)
	}, this.fZ = function(username) {
		aP.aV(5, username.length), fy.co.aW(username)
	}
}

function qt() {
	var aM, qu, qv, n8, gap, qw, qx, qy, qz, r0, h9, r1, r2, kB, mb, r3, r4, r5;

	function r9() {
		n8 = Math.floor(.2 * (dK.eE.eF() ? .07 : .035) * dI.eC), n8 = hd(dK.eE.eF() ? 3 : 1, n8);
		var rC = dI.aU / (aM.length + gap);
		n8 = n8 < rC ? rC : n8, mb = Math.floor((1 - gap) * n8), qu = 0, rD()
	}

	function rD() {
		qu = (qu = qu < -20 ? -20 : qu) > (aM.length - 15) * n8 ? (aM.length - 15) * n8 : qu, qx = Math.floor(qu / n8), qy = (qy = qx + Math.floor(dI.aU / n8)) > aM.length - 1 ? aM.length - 1 : qy, qx = (qx = qy < qx ? qy : qx) < 0 ? 0 : qx;
		var dy = qy;
		qw = qv / aM[dy];
		for (var h = qy - 1; qx <= h; h--) aM[h] > aM[dy] && (dy = h, qw = qv / Math.pow(aM[h], kB))
	}

	function rG(dr) {
		dr = Math.floor((qu + dI.aU - dr - gap * n8) / n8);
		return (dr = dr < -1 ? -1 : -1 === dr ? 0 : dr > aM.length - 1 ? -1 : dr) !== qz && (qz = dr, -1 === r3 && 0 === qz && rH.r6 && (r3 = setInterval(rI, 100)), 1)
	}

	function rK(h) {
		var ma = Math.floor(qw * Math.pow(aM[h], kB));
		he.fillRect(qu + dI.aU - (h + 1) * n8, dI.dJ - ma, mb, ma)
	}

	function rI() {
		var b6;
		0 !== (qz = 8 === gd.mw() ? -1 : qz) ? (r4 = (new Date).getTime(), clearInterval(r3), r3 = -1) : (b6 = aM[1] / 864e3, -1 !== r4 && (b6 += ((new Date).getTime() - r4) * aM[1] / 864e5, r4 = -1), 0 < b6 && (aM[0] += Math.floor(b6), gb.gc = !0))
	}
	this.r6 = !1, this.d = function() {
		r4 = r3 = -1, qz = -(kB = 1), this.r7 = !1, r2 = 0, r1 = new Date, qu = 0, gap = .3, (r5 = []).push({
			s: "Plateau A",
			aL: 0,
			a6: 57
		}), r5.push({
			s: "Max A",
			aL: 1,
			a6: 1
		}), r5.push({
			s: "Black Friday",
			aL: 15,
			a6: 15
		}), r5.push({
			s: "Max B",
			aL: 19,
			a6: 19
		}), r5.push({
			s: "Max C",
			aL: 44,
			a6: 44
		}), r5.push({
			s: "First Android Version",
			aL: 58,
			a6: 58
		}), r5.push({
			s: "Max D",
			aL: 67,
			a6: 67
		}), r5.push({
			s: "The iFrame Explosion",
			aL: 98,
			a6: 99
		}), r5.push({
			s: "The 155-Day Uptrend",
			aL: 58,
			a6: 213
		}), r5.push({
			s: "Max E",
			aL: 213,
			a6: 213
		}), r5.push({
			s: "Plateau B",
			aL: 214,
			a6: 259
		}), r5.push({
			s: "Turbulent Times",
			aL: 260,
			a6: 344
		}), r5.push({
			s: "Max F",
			aL: 262,
			a6: 262
		}), r5.push({
			s: "Max G",
			aL: 282,
			a6: 282
		}), r5.push({
			s: "Max H",
			aL: 333,
			a6: 333
		}), r5.push({
			s: "The 19-Day Downtrend",
			aL: 283,
			a6: 301
		}), r5.push({
			s: "Plateau C",
			aL: 345,
			a6: 385
		}), r5.push({
			s: "The Alliance Ascent",
			aL: 386,
			a6: 395
		}), r5.push({
			s: "Max I",
			aL: 395,
			a6: 395
		}), r5.push({
			s: "First iOS Version",
			aL: 411,
			a6: 411
		}), r5.push({
			s: "Plateau D",
			aL: 396,
			a6: 453
		}), r5.push({
			s: "The TikTok Revolution",
			aL: 454,
			a6: 470
		}), r5.push({
			s: "Max J",
			aL: 456,
			a6: 456
		}), r5.push({
			s: "Max K",
			aL: 472,
			a6: 472
		}), r5.push({
			s: "Max L",
			aL: 478,
			a6: 478
		}), r5.push({
			s: "YT Drew",
			aL: 471,
			a6: 485
		}), r5.push({
			s: "Plateau E",
			aL: 485,
			a6: 600
		}), r5.push({
			s: "Uptrend A",
			aL: 600,
			a6: 613
		}), r5.push({
			s: "Max M",
			aL: 613,
			a6: 613
		}), r5.push({
			s: "Downtrend A",
			aL: 614,
			a6: 635
		}), r5.push({
			s: "Plateau F",
			aL: 636,
			a6: 737
		}), r5.push({
			s: "End of Record",
			aL: 738,
			a6: 738
		}), aM = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		qv = Math.floor(.15 * dI.dJ), r0 = (r0 = Math.floor((dK.eE.eF() ? .018 : .0137) * dI.eC)) < 2 ? 2 : r0, h9 = ad.ae.hL(1, r0), r9()
	}, this.rA = function(rB) {
		var h;
		for (this.r6 = !0, h = 0; h < rB.length; h++) aM.unshift(rB[h]);
		r9(), gb.gc = !0
	}, this.rE = function() {
		rD()
	}, this.jg = function(dr, ds) {
		ds > dI.dJ - .6 * qv ? this.r7 ? dr !== r2 && (qu += dr - r2, r2 = dr, rD(), rG(dr), this.r7 = -1 !== qz, gb.gc = !0) : rG(dr) && (gb.gc = !0) : this.eX()
	}, this.eX = function() {
		-1 !== qz && (this.r7 = !1, qz = -1, gb.gc = !0)
	}, this.rJ = function(dr, deltaY) {
		-1 !== qz && (qu += Math.floor(deltaY), rD(), rG(dr), gb.gc = !0)
	}, this.jX = function(dr, ds) {
		this.jg(dr, ds), -1 !== qz && (r2 = dr, this.r7 = !0)
	}, this.jh = function() {
		-1 !== qz && (this.r7 = !1)
	}, this.ge = function() {
		he.fillStyle = a7.kE;
		for (var rN, month, h5, jG, rQ, rR, kN, rS, rT, h = qy; qx <= h; h--) rK(h);
		this.r6 && 0 === qx && (he.fillStyle = a7.rL, rK(0)), -1 !== qz && (he.fillStyle = a7.hT, rK(qz)), -1 !== qz && (he.font = h9, ad.ae.textBaseline(he, 2), (h5 = new Date).setTime(r1.getTime() - 1e3 * qz * 60 * 60 * 24), month = "month",
			rN = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(h5), rN = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(h5)), rN = rN + ", " + h5.getUTCDate() + " " + month + " " + h5.getFullYear(), month = 1 === aM[qz] ? " second played" : " seconds played", month = ad.fk.fs(aM[qz]) + month, h5 = Math.floor(he.measureText(rN).width),
			jG = Math.floor(he.measureText(month).width), rQ = Math.floor(.5 * (h5 + r0)), rR = (rR = qu + dI.aU - (qz + 1) * n8) < rQ ? rQ : rR > dI.aU - rQ ? dI.aU - rQ : rR, kN = dI.dJ - Math.floor(qw * Math.pow(aM[qz], kB)), rS = Math
			.floor(1.1 * r0), rT = kN > dI.dJ - rS ? dI.dJ - rS : kN, he.fillStyle = a7.jn, he.fillRect(dI.aU - jG - r0, rT - rS, jG + r0, rS), he.fillRect(rR - rQ, dI.dJ - rS, h5 + r0, rS), he.fillStyle = a7.a8, ad.ae.textAlign(he, 2), he
			.fillText(month, Math.floor(dI.aU - .5 * r0), rT),
			function(kN, rS) {
				for (var jF, rW = -1, aA = aM.length - qz - 1, h = r5.length - 1; 0 <= h; h--) aA >= r5[h].aL && aA <= r5[h].a6 && (-1 === rW || r5[h].a6 - r5[h].aL < r5[rW].a6 - r5[rW].aL) && (rW = h); - 1 !== rW && (jF = Math.floor(he
					.measureText(r5[rW].s).width), he.fillStyle = a7.jn, he.fillRect(dI.aU - jF - r0, kN, jF + r0, rS), he.fillStyle = a7.a8, he.fillText(r5[rW].s, Math.floor(dI.aU - .5 * r0), kN + rS))
			}(rT - 2 * rS, rS), ad.ae.textAlign(he, 1), he.fillText(rN, rR, dI.dJ), he.strokeStyle = a7.rV, he.lineWidth = 1, he.beginPath(), he.moveTo(0, kN), he.lineTo(dI.aU, kN), he.closePath(), he.stroke())
	}
}

function rX() {
	this.v = function(aT) {
		var id, kC, rY;
		for (aS.d(aT), aS.aA += 2, rY = 8 * aS.size; aS.aA + 8 <= rY;) id = aS.ci(4), kC = aS.ci(9), 0 === id ? this.rZ(id, kC, aS.ci(22)) : 1 === id ? this.rZ(id, kC, aS.ci(10), aS.ci(10)) : 2 === id ? this.rZ(id, kC, aS.ci(10), aS.ci(9)) :
			3 === id || 4 === id ? this.rZ(id, kC, aS.ci(10), aS.ci(22)) : 5 === id || 6 === id ? this.rZ(id, kC, aS.ci(10)) : 7 === id ? this.rZ(id, kC, aS.ci(1)) : this.rZ(id, kC)
	}, this.ra = [], this.rb = function() {
		for (var rd = 0, re = 0, rf = 0, rg = 0, rh = 0, ri = 0, h = 0; h < 512; h++) rd += bC.e2[h], re += bC.cH[h], rf += bC.bc[h], rg += br.cf.q7[h];
		rh += br.cf.pb, ri += jB, this.ra.push(((255 & rd + re + rf + rg + rh + ri) << 12) + ((3 & rd) << 10) + ((3 & re) << 8) + ((3 & rf) << 6) + ((3 & rg) << 4) + ((3 & rh) << 2) + (3 & ri))
	}, this.rZ = function(id, kC, kD, rj) {
		0 === id ? pP.rk.rl(kC, kD) : 1 === id ? pP.rk.pR(kC, kD, rj) : 2 === id ? pP.rk.rm(kC, kD, rj) : 3 === id ? pP.rk.rn(kC, kD, rj) : 4 === id ? pP.rk.ro(kC, kD, rj) : 5 === id ? pP.rk.rp(kC, kD) : 6 === id ? pP.rk.rq(kC, kD) : 7 === id ?
			pP.rk.rr(kC, kD) : 8 === id ? pP.rk.rs(kC) : pP.rk.rt(kC)
	}
}

function ru() {
	var kR, rv, rx, p9, rw = !1;

	function ry(id) {
		0 !== dK.id || aB.dF.data[140].value ? 0 === id ? cq.kn(8, 1, new sA(16)) : cq.kn(2) : cq.cf.s9(cq.cr, 0 === id ? 16 : 0)
	}
	this.show = function() {
		dK.eE.setState(12), kR.show(), this.resize(), this.v()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), rv.resize()
	}, this.v = function() {
		!rw || jb.s6(e.hK) || (cq.s3(), cq.kn(1))
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, rx = [new kl("🔑 " + dL.al[125], function() {
		ry(0)
	}), new kl("⚙️ " + dL.al[81], function() {
		ry(1)
	}), new kl("▶️ " + dL.al[82], function() {
		cq.kn(3, 1, "")
	}), new kl("📈 Charts", function() {
		cq.cf.ol()
	}), new kl("🔗 " + dL.al[83], function() {
		cq.kn(4, 1, new sB("🔗 " + dL.al[83], ad.ae.la(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [sC.sD, sC.sE, sC.sF, sC.sG, sC.sH, sC.sI, sC.sJ, sC.sK, sC.sL,
			sC.sM
		]), !1, [new kl("❌ " + dL.al[92], function() {
			cq.kn(1)
		}, a7.sN)]))
	}), new kl("ℹ️ " + dL.al[84], function() {
		cq.kn(4, 1, new sB("ℹ️ " + dL.al[84], d3 + "<br><a href='" + sC.sG + "' target='_blank'>" + sC.sG + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new kl("❌ " + dL.al[92], function() {
				cq.kn(1)
			}, a7.sN)]))
	}), new kl("🗑️ " + dL.al[85], function() {
		cq.kn(4, 1, new sB("🗑️ " + dL.al[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new kl("❌ " + dL.al[92], function() {
				cq.kn(1)
			}), new kl("🗑️ Delete", function() {
				dK.eE.sO(), cq.kn(1)
			})]))
	}), new kl(dL.al[86], function() {
		dK.eE.s2(), cq.kn(4, 1, new sB("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + sC.sM + "' target='_blank'>" + sC.sM + "</a>",
			!1, [new kl("❌ " + dL.al[92], function() {
				cq.kn(1)
			}, a7.sN)]))
	})], p9 = [new kl("❌ " + dL.al[87], function() {
		cq.cf.km()
	})], 8 === gd.mw() && rx.unshift(new kl("📈 " + dL.al[88], function() {
		cq.s3(), 2 <= hs.jj && (s4.ji(), gb.gc = !0)
	})), 8 === gd.mw() && !e.s5 && jb.s6(e.hK) && (rw = !0, rx.unshift(new kl("🏳️ " + dL.al[89], function() {
		pP.pQ.rs(), cq.s3(), jb.pr && jb.ji()
	}))), 1 === dK.id && 5 <= dK.dH && rx.push(new kl(dL.al[90], function() {
		dK.eE.s7()
	})), kR = new kh("📙 " + dL.al[91], p9), rv = new s8(rx, kR.oZ)
}

function sP() {
	this.eV = !1, this.v = function() {
		gb.kL() % 250 != 249 || e.s5 || (ce.fR.qr(+(this.eV && 0 < bC.e2[e.hK]), jB + br.cf.pb), this.eV = !1)
	}
}

function sR() {
	this.pk = function(player, b7) {
		sS.sT(player, j3.aw(b7), j3.ay(b7)) && (gb.gc = !0), e.sU && this.v()
	}, this.v = function() {
		e.de = !1;
		for (var h = 0; h < e.k; h++) 0 !== bC.e2[h] && 0 === bC.cH[h] && sS.sV(h);
		0 !== bC.e2[e.hK] ? (hs.k1[7] = bC.cH[e.hK], hs.k1[8] = bC.bc[e.hK], ny.sW(), hR.sX(), e.s5 || sY.sZ(bC.e3[e.hK] - 5, bC.e5[e.hK] - 5, bC.e4[e.hK] + 5, bC.e6[e.hK] + 5), sa.d()) : kJ.show(!1, !1, !1, !0), g8.sb(18), x.sc(), x.hS(!0), sd
			.cf.df(), e.se = null, gU.sf = !0, gU.sg(), e.sU && dK.eE.setState(1)
	}
}

function sh() {
	this.dF = {}, this.n3 = function() {
		cq.kn(5, 5)
	}, this.si = function() {
		cq.s3(), sj.d()
	}, this.sk = function() {
		cq.s3(), gY.mm(aB.dF.data[10].value), gY.d()
	}, this.km = function() {
		cq.kn(0 === gd.mw() ? 5 : 0)
	}, this.ol = function() {
		if (1 === aB.dF.data[130].value) cq.kn(8, cq.cs().sl, new sA(24, {
			ki: aB.dF.data[125].value,
			j2: aB.dF.data[128].value,
			j4: aB.dF.data[129].value
		}));
		else {
			for (var aM = (aM = aB.dF.data[126].value.split(",")).slice(0, 10), h = 0; h < aM.length; h++) aM[h] = aM[h].trim().slice(0, 7).toUpperCase();
			1 === aM.length && 0 === aM[0].length && (aM = []), cq.kn(8, cq.cs().sl, new sA(23, {
				ki: aB.dF.data[125].value,
				sm: aM
			}))
		}
	}, this.s9 = function(sl, target) {
		cq.kn(4, sl, new sB("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + sC.sM +
			"' target='_blank'>" + sC.sM + "</a>", !1, [new kl("❌ " + dL.al[92], function() {
				cq.kn(sl)
			}), new kl("✅ " + dL.al[0], function() {
				aB.aC.aD(140, 1), 0 === target ? cq.kn(2, sl) : cq.kn(8, sl, new sA(target))
			})]))
	}
}

function sn() {
	this.so = function(sp, aA, sq) {
		var di = sp.height,
			du = ad.ae.dh(di, di),
			dv = ad.ae.getContext(du);
		return function(aU, dv, sq) {
			dv.fillStyle = sq, dv.beginPath(), dv.arc(aU / 2, aU / 2, .47 * aU, 0, 2 * Math.PI), dv.fill()
		}(di, dv, sq), dv.drawImage(sp, -aA * di, 0), du
	}, this.ss = function(st) {
		var di = st.height,
			dv = ad.ae.getContext(st, !0),
			dw = dv.getImageData(0, 0, di, di);
		return ad.su.m2(dw.data, di, di, .9), dv.putImageData(dw, 0, 0), st
	}
}

function sv() {
	var dr, ds, aU, dJ, sw, qu, sx, sy, player, aM;

	function t2() {
		return function() {
			var h;
			for (h = 0; h < 8; h++)
				if (dr = p(aU * t.random(), t.value(100)), ds = p(dJ * t.random(), t.value(100)), t8()) return 1;
			return
		}() || function() {
			var bT, bW, d1, hZ, fq, ja;
			for (bT = p(aU * t.random(), t.value(100)), bW = p(dJ * t.random(), t.value(100)), d1 = 40; 1 <= d1; d1--)
				for (hZ = dJ - d1; 0 <= hZ; hZ -= 40)
					for (ds = (hZ + bW) % dJ, fq = 40; 1 <= fq; fq--)
						for (ja = aU - fq; 0 <= ja; ja -= 40)
							if (dr = (ja + bT) % aU, t8()) return 1;
			return
		}()
	}

	function t8() {
		for (var b6, qJ, gap = p(sw - sy, 2), t9 = sx + ds * sw + gap, tA = qu + dr * sw + gap, qK = t9 + sy - 1; t9 <= qK; qK--)
			for (qJ = tA + sy - 1; tA <= qJ; qJ--)
				if (b6 = bK.qL(qJ, qK), !bK.gr(b6) || bK.tB(b6)) return;
		return 1
	}

	function t3(ja, hZ) {
		sz(), tC(ja - 2, hZ - 2)
	}

	function sz() {
		bC.e2[player] = 0, bC.bc[player] = 0, bC.cH[player] = bC.p5[player] = 0, bC.c6[player] = [], bC.c4[player] = [], bC.bD[player] = [], bC.c8[player] = [], bC.e3[player] = bC.e5[player] = bC.e4[player] = bC.e6[player] = 0
	}

	function tC(ja, hZ) {
		var b6, h, tE, tF;
		for (bC.e2[player] = 1, player < e.k ? bC.bc[player] = e.hJ : bC.bc[player] = tD[oQ.hi[player - e.k]], bC.e3[player] = ja + 10, bC.e5[player] = hZ + 10, bC.e6[player] = bC.e4[player] = 0, tE = ja; tE < ja + 4; tE++)
			for (tF = hZ; tF < hZ + 4; tF++)(ja < tE && tE < ja + 3 || hZ < tF && tF < hZ + 3) && (b6 = bK.qL(tE, tF), bK.gr(b6)) && (bC.e3[player] = tE < bC.e3[player] ? tE : bC.e3[player], bC.e4[player] = tE > bC.e4[player] ? tE : bC.e4[player], bC
				.e5[player] = tF < bC.e5[player] ? tF : bC.e5[player], bC.e6[player] = tF > bC.e6[player] ? tF : bC.e6[player], aM[bC.cH[player]] = b6, bC.cH[player]++, bK.gp(b6, player));
		for (bC.p5[player] = bC.cH[player], h = bC.cH[player] - 1; 0 <= h; h--) bK.tG(aM[h], player) ? (bK.ca(aM[h], player), bC.c4[player].push(aM[h])) : bK.tH(aM[h]) ? (bK.ca(aM[h], player), bC.bD[player].push(aM[h])) : bK.tI(aM[h]) && (bK.ca(aM[
			h], player), bC.c8[player].push(aM[h]))
	}

	function t7(ja, hZ) {
		for (var b6, qJ, qK = hZ; hZ - 6 < qK; qK--)
			for (qJ = ja; ja - 6 < qJ; qJ--)
				if (b6 = bK.qL(qJ, qK), bK.tB(b6)) return;
		return 1
	}
	this.d = function() {
		var h, ja, hZ;
		if (aM = new Array(12), sy = 6, sw = 10, aU = p(ap.aq, sw), dJ = p(ap.bj, sw), qu = p(ap.aq - sw * aU, 2), sx = p(ap.bj - sw * dJ, 2), e.de)
			for (h = 0; h < e.k; h++) player = h, sz(), bC.e2[player] = 1;
		if (eo.eV && eo.eW.f6) {
			for (player = 0; player < e.o; player++)
				if (1 !== bC.e2[player]) {
					if (player < e.q) {
						if (function() {
								var ja = eo.eW.f6[player] + 1,
									hZ = eo.eW.f8[player] + 1;
								if (3 < ja && ja < ap.aq - 5 && 3 < hZ && hZ < ap.bj - 5 && bK.gr(bK.qL(ja, hZ)) && t7(ja + 3, hZ + 3)) return t3(ja + 1, hZ + 1), 1;
								return
							}()) continue;
						if (t2()) {
							ja = qu + dr * sw + p(sw, 2), hZ = sx + ds * sw + p(sw, 2), t3(ja, hZ);
							continue
						}
					}
					sz()
				}
		} else ! function() {
			var ja, hZ;
			for (player = 0; player < e.o; player++) 1 !== bC.e2[player] && (player < e.q && t2() ? (ja = qu + dr * sw + p(sw, 2), hZ = sx + ds * sw + p(sw, 2), t3(ja, hZ)) : sz())
		}();
		hs.k1[7] = bC.cH[e.hK], hs.k1[8] = bC.bc[e.hK]
	}, this.sT = function(gv, l6, l5) {
		var h, ja, hZ, b6, dr, ds;
		for (player = gv, h = 0; h < 20; h++)
			for (ja = l6 + h; l6 - h <= ja; ja--)
				for (hZ = l5 + h; l5 - h <= hZ; hZ--)
					if ((ja === l6 + h || ja === l6 - h || hZ === l5 + h || hZ === l5 - h) && 3 < ja && ja < ap.aq - 5 && 3 < hZ && hZ < ap.bj - 5 && bK.gr(bK.qL(ja, hZ)) && t7(ja + 3, hZ + 3)) {
						if (0 < bC.cH[player]) {
							for (ds = dr = b6 = void 0, dr = bC.e4[player]; dr >= bC.e3[player]; dr--)
								for (ds = bC.e6[player]; ds >= bC.e5[player]; ds--) b6 = 4 * (ds * ap.aq + dr), bK.gq(player, b6) && (bK.tK(b6), bC.cH[player]--);
							sz()
						}
						return tC(ja - 1, hZ - 1), !0
					} return !1
	}, this.sV = function(gv) {
		player = gv, t2() ? t3(qu + dr * sw + p(sw, 2), sx + ds * sw + p(sw, 2)) : sz()
	}
}

function tL() {
	var tM = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.kk = function(kH) {
		var tN, aH = new Date(kH.getTime() - 6e4 * kH.getTimezoneOffset()).toUTCString();
		return aH.length < 12 || (aH = aH.substring(5, aH.length), 0 === (kH = kH.getTimezoneOffset())) ? aH : (tN = (kH < 0 ? "+" : "-") + l.m(Math.abs(kH), 60), 0 == (kH = Math.abs(kH) % 60) ? aH + tN : aH + tN + ":" + (kH < 10 ? "0" : "") +
			kH)
	}, this.l9 = function(kH) {
		var aH = kH.toUTCString();
		return aH.length < 12 ? aH : function(kH) {
			return tM[kH.getUTCDay()]
		}(kH) + ", " + aH.substring(5, aH.length - 4)
	}
}

function tP() {
	this.tQ = new Array(e.o), this.tR = new Array(e.o), this.hc = new Uint8Array(e.o), this.e2 = new Uint8Array(e.o), this.e3 = new Uint16Array(e.o), this.e5 = new Uint16Array(e.o), this.e4 = new Uint16Array(e.o), this.e6 = new Uint16Array(e.o), this
		.cH = new Uint32Array(e.o), this.p5 = new Uint32Array(e.o), this.bc = new Uint32Array(e.o), this.c6 = null, this.c4 = null, this.bD = null, this.c8 = null, this.tS = new Uint16Array(e.o), this.tT = new Uint16Array(e.o), this.tU =
		new Uint16Array(e.o), this.tV = new Uint16Array(e.o), this.p7 = new Uint8Array(e.o), this.d = function(g7) {
			for (var h = g7.length - 1; 0 <= h; h--) this.tR[h] = this.tQ[h] = g7[h].name, this.hc[h] = g7[h].ek;
			this.e2.fill(0), this.e3.fill(0), this.e5.fill(0), this.e4.fill(0), this.e6.fill(0), this.cH.fill(0), this.p5.fill(0), this.bc.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.c6 = new Array(e.o), this.c4 = new Array(e
				.o), this.bD = new Array(e.o), this.c8 = new Array(e.o), this.tS.fill(0), this.tT.fill(0), this.tU.fill(0), this.tV.fill(0), this.p7.fill(0)
		}
}

function tW() {
	var tX, tY;

	function tZ() {
		var aU = new tb;
		aU.aQ(1612), aU.aV(1, 0), aU.aV(6, 7), aU.aV(2, dK ? dK.id : 3), aU.aV(1, d5 ? 1 : 0), aU.aV(1, d7 ? 1 : 0), aU.aV(1, i5 ? i5.dB : 0);
		for (var h = 0; h < tY.length && h < 100; h++) aU.aV(16, tY.charCodeAt(h));
		tX.send(aU.aT), ta()
	}

	function ta() {
		tX && (tX.onclose = null, tX.onopen = null, tX = null)
	}
	window.addEventListener("error", function error(a6) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + a6.filename + " " + a6.lineno + " " + a6.colno + " " + a6.message);
		window.removeEventListener("error", error), tY = a6.lineno + " " + a6.colno + " " + a6.message, (tX = new WebSocket("wss://territorial.io/s52/")).onopen = tZ, tX.onclose = function() {
			ta()
		}, 0 === a6.lineno && 0 === a6.colno || (dK && 1 === dK.id ? dK.mC.showToast(tY) : alert(tY))
	})
}

function tc() {
	var b8, aU, dJ, max, td, te, tg, th, ti, tj, tk, tl, tm, tn, tf = 1e4;

	function tw(tu, tv, aL) {
		var h;
		for (tg[0] = tu, h = 1; h < aL; h++) tg[h] = tg[h - 1] + tv, tv = tg[h] >= tf ? (tg[h] = tf - 1, -tv) : tg[h] < 0 ? (tg[h] = 0, -tv) : (tv += 16384 <= t.random() ? te : -te) < -td ? -td : td < tv ? td : tv
	}

	function ty(dr, ds, tz, aL) {
		(tz ? function(dr, ds, aL) {
			var h;
			for (h = 0; h < aL; h++) b8[ds * aU + dr + h] = tg[h]
		} : function(dr, ds, aL) {
			var h;
			for (h = 0; h < aL; h++) b8[ds * aU + dr + h * aU] = tg[h]
		})(dr, ds, aL)
	}

	function u2(value, aL) {
		var h, u3, bJ, b4 = value - tg[aL - 1];
		if (0 != b4) {
			for (u3 = 1 + p(Math.abs(b4), aL - 1), u3 = b4 < 0 ? -u3 : u3, tg[aL - 1] = value, bJ = (bJ = aL - 1 - p(Math.abs(b4), Math.abs(u3))) < 1 ? 1 : aL - 2 < bJ ? aL - 2 : bJ, h = aL - 2; bJ <= h; h--) tg[h] += b4 - (aL - 1 - h) * u3;
			(b4 < 0 ? function(aL) {
				var h;
				for (h = aL - 2; 1 <= h; h--) tg[h] < 0 && (tg[h] = -tg[h] - 1)
			} : function(aL) {
				var h;
				for (h = aL - 2; 1 <= h; h--) tg[h] >= tf && (tg[h] = 2 * tf - tg[h] - 1)
			})(aL)
		}
	}

	function u6(u7, u8, aL) {
		for (var h = 0; h < aL; h++) u7[h] = u8[h]
	}

	function u9(aM) {
		for (var h = 0; h < aM.length - 1; h++) aM[h] = aM[h + 1] - aM[h];
		aM[aM.length - 1] = aM[aM.length - 3]
	}

	function uA(pS, gap, b3) {
		th.push(pS), ti.push(gap), tj.push(b3)
	}
	this.aQ = function(lu) {
		! function(lu) {
			var h;
			for (aU = lu[0], dJ = lu[1], td = lu[2], te = lu[3], b8 = new Int16Array(aU * dJ), max = dJ < aU ? aU : dJ, tg = new Int16Array(max), th = [], ti = [], tj = [], tk = new Array(aU), tl = new Array(dJ), h = aU - 1; 0 <= h; h--) tk[
				h] = !1;
			for (h = dJ - 1; 0 <= h; h--) tl[h] = !1;
			tm = new Int16Array(aU), tn = new Int16Array(dJ)
		}(lu),
		function(aL) {
			var tu = t.random() % tf,
				tv = t.random() % (2 * td + 1) - td;
			tw(tu, tv, aL)
		}(max), u6(tn, tg, dJ), ty(0, 0, !0, aU);
		var dr, ds, lu = b8[0],
			aL = max,
			tv = t.random() % (2 * td + 1) - td;
		for (tw(lu, tv, aL), u6(tm, tg, aU), ty(0, 0, !1, dJ), u9(tm), u9(tn), tw(b8[aU - 1], tm[aU - 1], dJ), ty(aU - 1, 0, !1, dJ), tw(b8[aU * (dJ - 1)], tn[dJ - 1], aU), u2(b8[aU * dJ - 1], aU), ty(0, dJ - 1, !0, aU), tk[aU - 1] = tk[0] = !0,
			tl[dJ - 1] = tl[0] = !0, uA(0, aU, !0), uA(0, dJ, !1), ! function() {
				var ow, pS;
				for (;;) {
					if (ow = function() {
							var h, ow = th.length - 1;
							for (h = ow - 1; 0 <= h; h--) ti[h] > ti[ow] && (ow = h);
							return ow
						}(), ti[ow] < 5) return;
					pS = th[ow] + p(ti[ow], 2), (tj[ow] ? function(dr) {
						var aL, uE, h, uF = 0,
							uG = 0;
						for (; uG < dJ - 1;) {
							for (h = uF + 1; h < dJ; h++)
								if (tl[h]) {
									uG = h;
									break
								} aL = uG - uF + 1, tw(b8[dr + aU * uF], 0 === uF ? tm[dr] : tg[uE - 1] - tg[uE - 2], aL), u2(b8[uG * aU + dr], aL), ty(dr, uF, !1, aL), uE = aL, uF = uG
						}
						tk[dr] = !0
					} : function(ds) {
						var aL, uE, h, uF = 0,
							uG = 0;
						for (; uG < aU - 1;) {
							for (h = uF + 1; h < aU; h++)
								if (tk[h]) {
									uG = h;
									break
								} aL = uG - uF + 1, tw(b8[ds * aU + uF], 0 === uF ? tn[ds] : tg[uE - 1] - tg[uE - 2], aL), u2(b8[ds * aU + uG], aL), ty(uF, ds, !0, aL), uE = aL, uF = uG
						}
						tl[ds] = !0
					})(pS), uA(pS, th[ow] + ti[ow] - pS, tj[ow]), ti[ow] = pS - th[ow] + 1
				}
			}(), dr = 0; dr < aU; dr++)
			if (!tk[dr])
				for (ds = 0; ds < dJ; ds++) tl[ds] || ! function(dr, ds) {
					var value = b8[ds * aU + dr - 1] + b8[(ds - 1) * aU + dr],
						uI = 2;
					tk[dr + 1] && (uI++, value += b8[ds * aU + dr + 1]);
					tl[ds + 1] && (uI++, value += b8[(ds + 1) * aU + dr]);
					b8[ds * aU + dr] = p(value, uI)
				}(dr, ds)
	}, this.qg = function() {
		return b8
	}, this.ts = function() {
		b8 = null
	}
}

function uJ() {
	this.uL = function(fU) {
		var h, uN, uO, uP, uQ;
		if (fU !== ce.cf.uR) ce.cf.close(fU, 3239);
		else if (6 === gd.mw() && uS.d(), 7 !== gd.mw()) ce.cf.close(fU, 3251);
		else {
			for (uN = [0, 0, 0, 0], uO = aS.ci(6), h = 0; h < 4; h++) uN[h] = aS.ci(uO);
			for (uP = aS.ci(4), uQ = [], h = 0; h < uP; h++) {
				uQ.push({
					id: aS.ci(5),
					eg: aS.ci(4),
					uT: 1 === aS.ci(1),
					ev: aS.ci(6),
					fH: aS.ci(14),
					uU: aS.ci(uO),
					uV: aS.ci(9) + 1,
					n9: aS.ci(10)
				});
				for (var uM = aS.ci(3), uW = new Array(uM), uX = new Array(uM), d1 = 0; d1 < uM; d1++) uX[d1] = aS.ci(9) + 1, uW[d1] = cn.co.cp(aS.ci(3));
				uQ[h].uM = uM, uQ[h].uW = uW, uQ[h].uX = uX
			}
			uS.aD(uN, uQ)
		}
	}
}

function fe() {
	this.ak = [], this.al = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
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

function uY() {
	var nQ, uZ;
	this.d = function() {
		nQ = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var h, d1, ua = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			ub = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (uZ =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), h = nQ.length - 1; 0 <= h; h--)
			for (d1 = ua.length - 1; 0 <= d1; d1--) nQ[h] = nQ[h].replace(ua[d1], ub[d1]);
		if (settings.realisticNames) nQ = realisticNames;
	}, this.aQ = function() {
		var h;
		if (eo.eV && eo.eW.ei)
			for (h = e.k; h < e.o; h++) bC.tR[h] = bC.tQ[h] = eo.eW.ei[h % e.q];
		else(9 === e.f ? function() {
			var h, ik = t.random(),
				aL = nQ.length,
				dy = e.k + ug.j;
			for (h = dy - 1; h >= e.k; h--) bC.tR[h] = bC.tQ[h] = nQ[(h + ik) % aL];
			for (aL = uZ.length, h = dy; h < e.o; h++) bC.tR[h] = bC.tQ[h] = uZ[h % aL]
		} : e.sU ? function() {
			var h, ik = t.random();
			for (h = e.k; h < e.o; h++) bC.tR[h] = bC.tQ[h] = nQ[(h + ik) % e.o]
		} : function() {
			var h, aL = nQ.length,
				ik = t.random();
			for (h = e.k; h < e.o; h++) bC.tR[h] = bC.tQ[h] = nQ[(h + ik) % aL]
		})()
	}
}

function uh() {
	var ul, um, un, uo, up, uq, ur, us, ut, uu, uv, ui = [224, 224, 224],
		uj = [
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
		uk = [
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

	function vI(b6, vK) {
		vE[b6] = 0, vE[b6 + 1] = 0, vE[b6 + 2] = vK, vE[b6 + 3] = 0, vL(b6)
	}

	function vL(b6) {
		var dr;
		gU.vN || (dr = bK.gS(b6), b6 = bK.gT(b6), gU.vN = dr >= mU.gP[0] && dr <= mU.gP[2] && b6 >= mU.gP[1] && b6 <= mU.gP[3])
	}
	this.d = function(g7) {
		if (ul = new Uint8Array(e.o), um = new Uint8Array(e.o), un = new Uint8Array(e.o), uo = new Uint8Array(e.o), up = new Uint8Array(e.o), uq = new Uint8Array(e.o), ur = new Uint8Array(e.o), us = new Uint8Array(e.o), ut = new Uint8Array(e.o),
			uu = new Uint8Array(e.o), this.v0 = new Uint8Array(e.o), (uv = new Int32Array(4))[0] = -4 * ap.aq, uv[1] = 4, uv[2] = -uv[0], uv[3] = -uv[1], e.dj)
			for (var dy, fm, h = e.o - 1; 0 <= h; h--) fm = dm.dp[dm.e7[h]], dy = p((uk[fm][3] + 1) * t.random(), t.value(100)), ul[h] = uj[fm][0] + dy * uk[fm][0], um[h] = uj[fm][1] + dy * uk[fm][1], un[h] = uj[fm][2] + dy * uk[fm][2];
		else eo.eV && eo.eW.eZ ? function(aM) {
			var h;
			for (h = e.q - 1; 0 <= h; h--) ul[h] = 4 * aM[h][0], um[h] = 4 * aM[h][1], un[h] = 4 * aM[h][2]
		}(eo.eW.eZ) : (function() {
			for (var h = e.o - 1; h >= e.k; h--) ul[h] = 4 * p(64 * t.random(), t.value(100)), um[h] = 4 * p(64 * t.random(), t.value(100)), un[h] = 4 * p(64 * t.random(), t.value(100))
		}(), function(g7) {
			for (var h = e.k - 1; 0 <= h; h--) ul[h] = 4 * g7[h].ej[0], um[h] = 4 * g7[h].ej[1], un[h] = 4 * g7[h].ej[2]
		}(g7));
		! function() {
			var h, eP;
			for (h = e.o - 1; 0 <= h; h--) eP = p(ul[h] + um[h] + un[h], 3), ul[h] += qh(eP - ul[h], 2), um[h] += qh(eP - um[h], 2), un[h] += qh(eP - un[h], 2), ul[h] -= ul[h] % 4, um[h] -= um[h] % 4, un[h] -= un[h] % 4
		}(),
		function() {
			for (var h = e.o - 1; 0 <= h; h--) ul[h] += p(h, 128), um[h] += p(h % 128, 32), un[h] += p(h % 32, 8), uo[h] = h % 8
		}(), this.v8(),
			function() {
				for (var h = e.o - 1; 0 <= h; h--) up[h] = ul[h] < 32 ? ul[h] + 32 : ul[h] - 32, uq[h] = um[h] < 32 ? um[h] + 32 : um[h] - 32, ur[h] = un[h] < 32 ? un[h] + 32 : un[h] - 32
			}(),
			function() {
				for (var h = e.o - 1; 0 <= h; h--) us[h] = 235 < ul[h] ? ul[h] - 20 : ul[h] + 20, ut[h] = 235 < um[h] ? um[h] - 20 : um[h] + 20, uu[h] = 235 < un[h] ? un[h] - 20 : un[h] + 20
			}()
	}, this.vB = function(player) {
		var aM = hq.vC;
		return aM[0] = ul[player], aM[1] = um[player], aM[2] = un[player], aM
	}, this.v8 = function() {
		for (var h = e.o - 1; 0 <= h; h--) this.v0[h] = ul[h] + um[h] + un[h] < 280 ? 0 : 1
	}, this.gS = function(b6) {
		return p(b6, 4) % ap.aq
	}, this.gT = function(b6) {
		return p(b6, 4 * ap.aq)
	}, this.qL = function(dr, ds) {
		return Math.floor(4 * (ds * ap.aq + dr))
	}, this.tI = function(b6) {
		return this.go(b6 + uv[0]) || this.go(b6 + uv[1]) || this.go(b6 + uv[2]) || this.go(b6 + uv[3])
	}, this.tG = function(b6, player) {
		return this.gm(b6 + uv[0], player) || this.gm(b6 + uv[1], player) || this.gm(b6 + uv[2], player) || this.gm(b6 + uv[3], player)
	}, this.vD = function(player) {
		return player < e.k && 2 !== bC.hc[player]
	}, this.gh = function(b6) {
		return 208 <= vE[b6 + 3]
	}, this.gq = function(player, b6) {
		return this.gh(b6) && this.gs(player, b6)
	}, this.gs = function(player, b6) {
		return player === this.bM(b6)
	}, this.gt = function(b6) {
		return 208 <= vE[b6 + 3] && vE[b6 + 3] < 224
	}, this.tB = function(b6) {
		return 224 <= vE[b6 + 3] && vE[b6 + 3] < 248
	}, this.tH = function(b6) {
		for (var h = 3; 0 <= h; h--)
			if (this.gn(b6 + uv[h])) return !0;
		return !1
	}, this.vF = function(b6) {
		return 192 <= vE[b6 + 3] && vE[b6 + 3] < 208
	}, this.vG = function(b6, player) {
		return this.vF(b6) && player === this.bM(b6)
	}, this.gr = function(b6) {
		return this.gh(b6) || this.bL(b6)
	}, this.gn = function(b6) {
		return 0 === vE[b6 + 3] && 2 === vE[b6 + 2]
	}, this.bL = function(b6) {
		return 0 === vE[b6 + 3] && 1 === vE[b6 + 2]
	}, this.go = function(b6) {
		return 0 === vE[b6 + 3] && 3 === vE[b6 + 2]
	}, this.vH = function(b6) {
		return this.go(b6)
	}, this.gm = function(b6, player) {
		return this.bL(b6) || this.gh(b6) && player !== this.bM(b6)
	}, this.bM = function(b6) {
		return vE[b6] % 4 * 128 + vE[b6 + 1] % 4 * 32 + vE[b6 + 2] % 4 * 8 + vE[b6 + 3] % 8
	}, this.tK = function(b6) {
		vI(b6, 1)
	}, this.vJ = function(b6) {
		vI(b6, 2)
	}, this.gp = function(b6, player) {
		vE[b6] = ul[player], vE[b6 + 1] = um[player], vE[b6 + 2] = un[player], vE[b6 + 3] = 208 + uo[player], vL(b6)
	}, this.ca = function(b6, player) {
		vE[b6] = up[player], vE[b6 + 1] = uq[player], vE[b6 + 2] = ur[player], vE[b6 + 3] = 224 + uo[player], vL(b6)
	}, this.gi = function(b6, player) {
		vE[b6] = us[player], vE[b6 + 1] = ut[player], vE[b6 + 2] = uu[player], vE[b6 + 3] = 248 + uo[player], vL(b6)
	}, this.vM = function(b6, player) {
		vE[b6] = ui[0] + ul[player] % 4, vE[b6 + 1] = ui[1] + um[player] % 4, vE[b6 + 2] = ui[2] + un[player] % 4, vE[b6 + 3] = 192 + uo[player], vL(b6)
	}
}

function ps() {
	g8.v(), x.v(), hR.vO(), ce.cf.v()
}

function pt() {
	vP.v(), vQ.v(), hW.v(), vR.v(), vS.v(), pl.v(), vT.v(), br.cf.v(), p1(), hP.v(), ug.v(), x.v(), x.vU(), hR.v(), sd.v(), vV.v(), vW.v(), g8.v(), vX.v(), ny.v(), vY.v(), hs.v(), vZ.v(), va.v(), ce.cf.v(), ce.vb.v(), cq.v(), vc.v(), gb.v()
}

function pw() {
	sY.v(), kJ.v(), jk.v(), sa.v(), vd.v(), gZ.ve()
}

function pv() {
	hP.hS(!1), vW.hS(), hR.hS(!1), vV.hS(), ny.hS(), vY.hS(), x.hS(!1), vZ.jl()
}

function pp() {
	x.hS(!1) && (gb.gc = !0), ce.cf.v()
}

function vf() {
	var vg, dJ, vh, vi, vj, vk, vl, vm, vn;

	function gT() {
		return ny.w8(g8.w5()) ? vY.jR ? ny.ds - ny.dJ - 2 * vh : ny.ds - vh : vd.w8(g8.w7()) ? vY.jR ? vd.gT() - ny.dJ - 2 * vh : vd.gT() - vh : vY.jR ? dI.dJ - ny.dJ - (w9.wA() + 1) * vh : dI.dJ - w9.wA() * ag.gap
	}

	function vv(h5, aH, id, b6, vy, vz, w0, w1, w2) {
		var h, hC, du, er, aM, wI = void 0 !== w2,
			aU = Math.floor(jk.measureText(aH, g8.h9) + 1.5 * vi + (wI ? dJ : 1.5 * vi));
		if (gb.gc = !0, aU + vh > dI.aU && !wI && 50 !== id && 20 < aH.length) vv(h5, (aM = ad.fk.wJ(aH))[0], id, b6, vy, vz, w0, w1, w2), vv(h5, aM[1], id, b6, vy, vz, w0, w1, w2);
		else if (aM = aU + (50 === id ? vj : 0), (du = document.createElement("canvas")).width = aU, du.height = dJ, (hC = du.getContext("2d", {
				alpha: !0
			})).font = g8.h9, ad.ae.textBaseline(hC, 1), ad.ae.textAlign(hC, 0), hC.clearRect(0, 0, aU, dJ), hC.fillStyle = vz, hC.fillRect(0, 0, aU, dJ), hC.fillStyle = vy, hC.fillText(aH, Math.floor(1.5 * vi), Math.floor(dJ / 2)), wI && (hC
				.imageSmoothingEnabled = !0, z.dx.wK(w2, hC, aU - dJ, 0, dJ)), 0 === (er = {
				kH: h5,
				aH: aH,
				id: id,
				player: b6,
				fF: du,
				vy: vy,
				vz: vz,
				aU: aU,
				w6: aM,
				w0: w0,
				w1: w1,
				w2: w2
			}).kH || 0 < vg.length && 0 < vg[0].kH) vg.unshift(er);
		else {
			for (h = 1; h < vg.length; h++)
				if (0 < vg[h].kH) return void vg.splice(h, 0, er);
			vg.push(er)
		}
	}

	function vw(ik, oG, fq) {
		return "rgb(" + ik + "," + oG + "," + fq + ")"
	}

	function wL(id, s) {
		for (var aL = vg.length, h = 0; h < aL; h++) vg[h].id === id && s-- <= 0 && (vg.splice(h, 1), h--, aL--)
	}

	function wM(id, player) {
		for (var wu = !1, h = vg.length - 1; 0 <= h; h--) vg[h].id !== id || player !== e.o && vg[h].player !== player || (vg.splice(h, 1), wu = !0);
		return wu
	}

	function x1(aH) {
		vv(340, aH, 6, 0, vw(215, 245, 255), a7.jn, -1, !1)
	}
	this.vo = "", this.d = function() {
		var self;
		vm = 0, vl = dK.eE.eF() ? 7 : 12, vk = {
			g7: [0, 0, 0],
			vp: [0, 0, 0],
			vq: [220, 180, 180],
			kt: [0, 0, 0],
			fm: [0, 0, 0]
		}, vg = [], this.resize(), e.de && this.vr(0, 18), x1(dL.fn(37, [ap.eW.f0[ap.ev].name])), x1(dL.fn(38, [ap.aq - 2, ap.bj - 2])), x1(dL.fn(39, [x2.x3], {
			fr: [0]
		})), x2.x3 !== x2.x4 && x1(dL.fn(40, [x2.x4, x2.x4 / x2.x3], {
			fr: [0],
			ft: [1]
		})), 0 < x2.x5 && x1(dL.fn(41, [x2.x5, x2.x5 / x2.x3], {
			fr: [0],
			ft: [1]
		})), 0 < x2.x6 && x1(dL.fn(42, [x2.x6, x2.x6 / x2.x3], {
			fr: [0],
			ft: [1]
		})), 10 === e.f && vv(120, dL.fn(43), 6, 0, vw(235, 255, 120), a7.jn, -1, !1), 0 !== (self = this).vo.length && (vv(200, self.vo, 0, 0, a7.a8, a7.jn, -1, !1), self.vo = ""), this.vu()
	}, this.vu = function() {
		var h, aL;
		if (eo.eV)
			for (aL = eo.eW.f4.length, h = 0; h < aL; h++) vv(400, eo.eW.f4[h], 6, 0, vw(255, 255, 255), a7.jn, -1, !1)
	}, this.resize = function() {
		var vx, h;
		if (dJ = (dJ = Math.floor((dK.eE.eF() ? .031 : .0249) * dI.eC)) < 10 ? 10 : dJ, this.fontSize = Math.floor(2 * dJ / 3), this.h9 = ad.ae.hL(1, this.fontSize), vh = ag.gap, vi = Math.floor(dJ / 5), 0 < vg.length)
			for (vx = vg, vg = [], h = vx.length - 1; 0 <= h; h--) vv(vx[h].kH, vx[h].aH, vx[h].id, vx[h].player, vx[h].vy, vx[h].vz, vx[h].w0, vx[h].w1, vx[h].w2);
		this.w3()
	}, this.w3 = function() {
		vn = document.createElement("canvas");
		var aH = dL.fn(0),
			hC = (vj = jk.measureText(aH, this.h9) + 5 * vi, vn.height = dJ, vn.width = vj, vn.getContext("2d", {
				alpha: !0
			}));
		hC.font = this.h9, ad.ae.textBaseline(hC, 1), ad.ae.textAlign(hC, 1), hC.clearRect(0, 0, vj, dJ), hC.fillStyle = a7.w4, hC.fillRect(0, 0, vj, dJ), hC.fillStyle = a7.a8, hC.fillText(aH, Math.floor(vj / 2), Math.floor(dJ / 2))
	}, this.w5 = function() {
		var aL;
		return vY.jR ? vY.aU : 0 === (aL = vg.length) ? 0 : 1 === aL ? vg[0].w6 : hd(vg[0].w6, vg[1].w6)
	}, this.w7 = function() {
		var aL = vg.length;
		return vY.jR ? aL ? hd(vY.aU, vg[0].w6) : vY.aU : 0 === aL ? 0 : 1 === aL ? vg[0].w6 : 2 === aL ? hd(vg[0].w6, vg[1].w6) : hd(hd(vg[0].w6, vg[1].w6), vg[2].w6)
	}, this.jX = function(dr, ds) {
		for (var wB, wC = gT(), h = vg.length - 1; 0 <= h; h--)
			if ((wB = wC - (h + 1) * dJ) <= ds && ds < wB + dJ) return 50 === vg[h].id ? dr >= dI.aU - vj - vh - vg[h].aU && (dr >= dI.aU - vj - vh ? pP.hj.wD(vg[h].player) : sY.wE(vg[h].player, 800, !1, 0), !0) : dr >= dI.aU - vg[h].aU - vh && (
				736 === vg[h].id ? window.open("https://" + vg[h].aH, "_blank") : vg[h].w1 && (sY.wE(vg[h].player, 800, !1, 0), 0 <= vg[h].w0) && (wB = vg[h].w0, vg[h].w0 = vg[h].player, vg[h].player = wB), !0);
		return !1
	}, this.wF = function(h5, aH, id, b6, vy, vz, w0, w1, w2) {
		vv(h5, aH, id, b6, vy, vz, w0, w1, w2)
	}, this.wG = function(wH) {
		vv(300, wH, 252, 0, a7.a8, a7.jn, -1, !1)
	}, this.sb = function(id) {
		for (var h = vg.length - 1; 0 <= h; h--) vg[h].id === id && (vg[h].kH = 1)
	}, this.vr = function(player, id) {
		0 === id ? (hs.k1[player < e.k ? 4 : 3]++, jk.pk(player, 0), wL(423, 0), vv(160, dL.fn(1, [bC.tR[player]]), 423, player, "rgb(10,220,10)", a7.jn, -1, !1)) : 1 === id ? (wM(50, e.o), jk.pk(player, 1), vv(360, dL.fn(2, [bC.tR[player]]), 0,
			player, a7.wN, a7.jn, -1, !0), sY.wE(player, 2700, !1, 0)) : 2 === id ? (jk.pk(player, 2), vv(0, dL.fn(3), 0, player, "rgb(10,255,255)", a7.jn, -1, !0), sY.wE(player, 2700, !1, 0)) : 3 === id ? (jk.pk(player, 2), vv(0, dL.fn(4, [
			bC.tR[player]
		]), 0, player, a7.a8, a7.jn, -1, !0), sY.wE(player, 2700, !1, 0)) : 4 === id ? this.wO(1, player, player) : 5 === id ? 2 !== bC.hc[player] && bK.vD(e.hK) && (function(id, we) {
			var h, wf = 0,
				aL = vg.length;
			for (h = 0; h < aL; h++)
				if (vg[h].id === id && we <= ++wf) return vg.splice(h, 1)
		}(1, 5), x.wQ(player) ? vv(180, dL.fn(5, [bC.tR[player]]), 1, player, vw(255, 200, 180), a7.jn, -1, !0) : (wL(573, 0), vv(180, dL.fn(6, [bC.tR[player]]), 573, player, a7.wN, a7.jn, -1, !0))) : 18 === id ? vv(255, dL.fn(7), 18, 0, a7
			.a8, a7.jn, -1, !1) : 21 === id ? vv(220, dL.fn(8), id, 0, a7.a8, a7.jn, -1, !1) : 22 === id ? this.wO(2, player, player) : 59 === id && vv(0, dL.fn(9), id, 0, a7.wR, a7.jn, 0, !1)
	}, this.wS = function(wH) {
		vv(200, dL.fn(10, [wH]), 94, 0, a7.a8, a7.wT, -1, !1)
	}, this.wU = function(wV) {
		if (e.hK === wV && !e.sU)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			vv(0, "Your Win Count is now " + wins_counter, 3, wV, a7.a8, a7.jn, -1, !0);
		jk.pk(wV, 2), e.k < 100 ? vv(0, dL.fn(4, [bC.tR[wV]]), 3, wV, a7.a8, a7.jn, -1, !0) : vv(0, dL.fn(12, [bC.tR[wV]]), 3, wV, a7.a8, a7.jn, -1, !0), sY.wE(wV, 2700, !1, 0)
	}, this.wW = function(bJ) {
		var k6 = "(" + j3.aw(bJ >> 2) + ", " + j3.ay(bJ >> 2) + ")",
			w1 = !1,
			player = 0;
		bK.gr(bJ) ? bK.bL(bJ) ? k6 = dL.fn(13, [k6]) : (player = bK.bM(bJ), k6 = dL.fn(14, [ad.hC.wX(bC.tQ[player], ad.ae.hL(0, 10), 150), ad.fk.fs(bC.bc[player]), ad.fk.fs(bC.cH[player]), k6]), w1 = !0) : k6 = bK.vH(bJ) ? dL.fn(15, [k6]) : dL
			.fn(16, [k6]), gb.gc = !0, wL(55, 0), vv(220, k6, 55, player, a7.a8, a7.jn, -1, w1)
	}, this.wY = function(wZ) {
		var dy = br.cf,
			player = dy.pg[wZ] >> 3;
		gb.gc = !0, wL(55, 0), vv(220, dL.fn(17, [bC.tR[player], dy.pi[wZ]], {
			fr: [1]
		}), 55, player, a7.a8, a7.jn, -1, !0)
	}, this.wa = function(wb, iM, wc) {
		wb === e.hK ? vv(175, dL.fn(18, [bC.tR[iM]]), 1001, iM, vw(200, 255, 210), a7.jn, -1, !0, wc) : this.wd(wb, wc)
	}, this.wd = function(wb, wc) {
		wL(1e3, 0), vv(175, dL.fn(19, [bC.tR[wb]]), 1e3, wb, a7.a8, "rgba(5,60,25,0.9)", -1, !0, wc)
	}, this.wg = function() {
		var wH;
		e.wh ? (wH = dL.fn(20), jk.wi(dL.fn(21), 2, 1, 12), vv(0, wH, 40, 0, "rgb(10,220,10)", a7.jn, -1, !1)) : (wH = dL.fn(22), jk.wi(dL.fn(23), 2, 0, 16), vv(0, wH, 41, 0, a7.a8, a7.jn, -1, !1)), sY.wj(2700)
	}, this.g9 = function(g7) {
		vv(300, g7[0].name + " [" + e.wk.gF(g7[0].gC) + "] vs " + g7[1].name + " [" + e.wk.gF(g7[1].gC) + "]", 65, 0, a7.wl, "rgba(100,255,255,0.75)", -1, !1)
	}, this.wm = function(wH) {
		vv(200, wH, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.wn = function(wo) {
		vv(0, dL.fn(wo ? 24 : 129), 247, 0, a7.wp, a7.jn, -1, !1)
	}, this.gH = function(g7, gE, gG, wq) {
		vv(0, g7[0].name + ": " + e.wk.gF(g7[0].gC) + " -> " + gE, 66, 0, a7.a8, wq[0], -1, !1), vv(0, g7[1].name + ": " + e.wk.gF(g7[1].gC) + " -> " + gG, 66, 1, a7.a8, wq[1], -1, !1)
	}, this.wr = function(player, id) {
		0 === id ? wM(50, player) ? (vv(128, dL.fn(25, [bC.tR[player]]), 52, player, vw(180, 255, 180), a7.jn, -1, !0), x.y(player, 2, 255)) : vv(384, dL.fn(26, [bC.tR[player]]), 51, player, vw(210, 210, 255), a7.jn, -1, !0) : wM(51, player) ? (
			vv(128, dL.fn(27, [bC.tR[player]]), 52, player, a7.a8, "rgba(60,120,10,0.9)", -1, !0), x.y(player, 2, 255)) : (vv(384, dL.fn(28, [bC.tR[player]]), 50, player, a7.a8, "rgba(90,90,90,0.9)", -1, !0), x.y(player, 2, 96))
	}, this.ws = function(g7, target) {
		var color = vw(210, 255, 210);
		1 < g7.length ? vv(230, dL.fn(29, [g7.length, bC.tR[target]]), 66, target, color, a7.jn, -1, !0) : vv(230, dL.fn(30, [bC.tR[g7[0]], bC.tR[target]]), 66, g7[0], color, a7.jn, target, !0)
	}, this.wt = function(player, target) {
		vv(230, dL.fn(31, [bC.tR[player], bC.tR[target]]), 66, player, a7.a8, "rgba(75,65,5,0.9)", target, !0)
	}, this.ww = function(id, player) {
		wM(id, player)
	}, this.wx = function() {
		var aA;
		100 <= bC.bc[e.hK] || (-1 === (aA = function(id) {
			for (var h = vg.length - 1; 0 <= h; h--)
				if (vg[h].id === id) return h;
			return -1
		}(143)) ? vv(80, dL.fn(32), 143, 0, a7.a8, a7.jn, -1, !1) : vg[aA].kH = 80)
	}, this.ht = function(wy, wz, player) {
		2 !== bC.hc[e.hK] && (vv(200, dL.fn(33, [wy, bC.tR[player]], {
			fr: [0]
		}), 30, player, "rgb(190,255,190)", a7.jn, -1, !0), wz) && vv(30, dL.fn(34, [wz], {
			fr: [0]
		}), 30, 0, a7.a8, a7.jn, -1, !1)
	}, this.x0 = function(wy, player) {
		2 !== bC.hc[e.hK] && (wL(31, 0), 2 === bC.hc[player] || player >= e.k ? vv(150, dL.fn(36, [bC.tR[player], wy], {
			fr: [1]
		}), 31, player, a7.wl, "rgba(205,205,205,0.9)", -1, !0) : vv(150, dL.fn(35, [bC.tR[player], wy], {
			fr: [1]
		}), 31, player, a7.wl, "rgba(205,255,205,0.9)", -1, !0))
	}, this.x7 = function(x8) {
		for (var fm = gb.kL(), h = 2; 0 <= h; h--) 0 < vk.kt[h] && (x8 || vk.fm[h] < fm - 220) && this.x9(h)
	}, this.x9 = function(id) {
		var aH, aL = vk.kt[id],
			player = vk.g7[id];
		vk.kt[id] = 0, 1 === aL ? (aH = 0 === id ? dL.fn(47, [bC.tR[player], bC.tR[vk.vp[0]]]) : dL.fn(47 + id, [bC.tR[player]]), wL(7, 0), vv(vk.vq[id], aH, 7, vk.vp[id], a7.a8, a7.jn, -1, !0)) : 2 <= aL && (aH = dL.fn(44 + id, [bC.tR[player],
			aL - 1
		]), wL(7, 0), vv(vk.vq[id], aH, 7, player, a7.a8, a7.jn, -1, !1))
	}, this.wO = function(id, xA, w0) {
		var fm = gb.kL(),
			aL = vk.kt[id] + 1;
		vk.kt[id]++, vk.g7[id] = xA, vk.vp[id] = w0, 1 === aL && (vk.fm[id] = fm), (1 === aL && (e.xB < 32 || 2 === e.pq) || 1 < aL && (vk.fm[id] < fm - 140 || 2 === e.pq)) && this.x9(id)
	}, this.v = function() {
		for (var b4 = (b4 = vg.length - vl) <= 1 ? 1 : b4 * b4, h = vg.length - 1; 0 <= h; h--) 0 < vg[h].kH && (vg[h].kH -= b4, vg[h].kH <= 0) && (gb.gc = !0, vg.splice(h, 1));
		! function() {
			var s, h;
			if (128 !== vm && !(++vm < 128))
				for (s = 5, h = jB - 1; 0 <= h; h--) 1 === bC.hc[jA[h]] && 0 < s-- && vv(240, dL.fn(50, [bC.tR[jA[h]]]), 1, jA[h], a7.wl, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.x7(!1)
	}, this.ge = function() {
		for (var hZ, ds = gT(), h = vg.length - 1; 0 <= h; h--) hZ = ds - (h + 1) * dJ, 50 === vg[h].id ? (he.drawImage(vg[h].fF, dI.aU - vg[h].aU - vj - vh, hZ), he.drawImage(vn, dI.aU - vj - vh, hZ)) : he.drawImage(vg[h].fF, dI.aU - vg[h].aU -
			vh, hZ)
	}
}

function xD() {
	this.xE = null, this.q6 = 512, this.q8 = 8, this.pb = 0, this.xF = 0, this.pg = new Uint16Array(this.q6), this.xG = new Uint32Array(this.q6), this.pa = new Uint32Array(this.q6), this.pZ = new Uint32Array(this.q6), this.xH = new Uint16Array(this
			.q6), this.pi = new Uint32Array(this.q6), this.j5 = new Uint16Array(this.q6), this.m9 = new Uint16Array(this.q6), this.pY = new Uint8Array(this.q6), this.q7 = new Uint8Array(e.o), this.xI = new Uint16Array(this.q8 * e.o), this.d =
		function() {
			this.xF = 0, this.pb = 0, this.xE = new Uint8Array(ap.aq + ap.bj), this.q7.fill(0)
		}, this.iu = function(player) {
			var aL = this.pb,
				iy = j3.bo(hq.qE[0]),
				h6 = this.q7[player],
				h7 = (player << 3) + h6;
			bC.e2[player] = 2, this.pg[aL] = h7, this.xG[aL] = iy, this.pZ[aL] = iy, this.pa[aL] = j3.bo(hq.qE[1]), this.xH[aL] = 0, this.pi[aL] = hq.hr[0], this.j5[aL] = br.bs.iu(aL, j3.bq(iy)), this.m9[aL] = this.xF, this.pY[aL] = hq.qE[2], this
				.xF = this.xF + 1 & 1023, this.xI[h7] = aL, this.q7[player] = h6 + 1, this.pb++
		}, this.ro = function() {
			var xJ = hq.qE[3];
			this.xG[xJ] = this.pZ[xJ], this.pa[xJ] = j3.bo(hq.qE[1]), this.xH[xJ] = 0, this.pY[xJ] = hq.qE[2]
		}, this.v = function() {
			if (gb.kL() % 5 == 3) {
				br.pX.v(), ! function(dg) {
					var h, iz, xN, xO, xP, iy, xT, xU, eP, eO, xG = dg.xG,
						pa = dg.pa,
						pZ = dg.pZ,
						pi = dg.pi,
						xH = dg.xH,
						j5 = dg.j5,
						dg = dg.pb,
						xW = ap.aq << 4;
					for (h = dg - 1; 0 <= h; h--) xN = pZ[h], iz = pa[h], xN !== iz && (iy = xG[h], xT = iz % xW - (xP = iy % xW), xU = ~~((iz + .5) / xW) - (iy = ~~((iy + .5) / xW)), eP = ~~Math.sqrt(xT * xT + xU * xU + .5), eO = 4e5 + 2e4 * ~~
						Math.sqrt(.5 + (Math.sqrt(pi[h] + .5) << 4)), 65535 <= (eO = xH[h] + Math.max(~~((.5 + eO) / eP), 1)) ? pZ[h] = xO = iz : (xH[h] = eO, pZ[h] = xO = xP + l.m(eO * xT, 65536) + xW * (iy + l.m(eO * xU, 65536))), j5[h] =
						br.bs.iw(j5[h], xN, xO))
				}(this), ! function(dg) {
					var h, kp, dy, fq, fm, xX, xY, xZ, xA, av, kM, kN, xa, xb, xc, w0, iy, xf, aL = dg.pb,
						pZ = dg.pZ,
						pg = dg.pg,
						pi = dg.pi,
						bs = br.bs.bs,
						xg = bs.length,
						ir = br.bs.ir,
						xW = ap.aq << 4,
						xh = e.dj,
						xi = dm.e7,
						eO = (aL - 1) * (gb.kL() % 2);
					for (h = 0; h < aL; h++) {
						for (kp = Math.abs(h - eO), iy = pZ[kp], dy = j3.bq(iy), xA = pg[kp] >> 3, kM = iy % xW, kN = ~~((iy + .5) / xW), iy = pi[kp], xf = 80 + ~~Math.sqrt(.5 + (Math.sqrt(iy + .5) << 8)), xb = Math.min(xf * xf, 262144), xc = -1,
							fq = 0; fq < 9; fq++)
							if (!((xX = dy + ir[fq]) < 0 || xg <= xX))
								for (xZ = bs[xX], xY = xZ.length, fm = 0; fm < xY; fm++) xa = xZ[fm], w0 = pg[xa] >> 3, xA == w0 || xh && xi[xA] === xi[w0] || (w0 = pZ[xa], (w0 = (av = kM - w0 % xW) * av + (av = kN - ~~((w0 + .5) / xW)) * av) <
									xb && (xc = xa, xb = w0)); - 1 !== xc && (iy = Math.min(Math.max(1, l.m(iy * (xf - Math.floor(Math.sqrt(xb + .5))), 5 * xf)), pi[xc]), pi[kp] -= iy >> 4, pi[xc] -= iy)
					}
				}(this);
				var h, hi, pi = (dg = this).pi,
					dg = dg.pb;
				for (h = dg - 1; 0 <= h; h--) hi = pi[h], 0 < (hi -= Math.max(1, hi >> 7)) ? pi[h] = hi : br.pd.pe(h)
			}
		}
}

function xm() {
	var xn, xo, xp, xq, xr, xs, xt, xu, xv, xw, xx, xy, xz, y0, y1, y2, y3, y4, y5, y6, y7, y8, position, y9, yA, yB, yC, yD = 1,
		yE = 1;
	var leaderboardHasChanged = true;
	this.playerPos = e.hK;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => xl[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(xl[e.hK]);
	}

	function yG() {
		xt.clearRect(0, 0, xn, xj),
			xt.fillStyle = a7.yH,
			xt.fillRect(0, 0, xn, xy),
			xt.fillStyle = a7.pF,
			xt.fillRect(0, xy, xn, xj - xy);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			xl[e.hK]
		);
		if (leaderboardFilter.hoveringOverTabs) y8 = -1;
		if (leaderboardFilter.enabled && y8 >= leaderboardFilter.filteredLeaderboard.length) y8 = -1;
		playerPos >= position && yI(playerPos - position, a7.yJ),
			0 !== xl[e.hK] && 0 === position && yI(0, a7.yK),
			-1 !== y8 && yI(y8, a7.yL),
			xt.fillStyle = a7.pF,
			//console.log("drawing", y8),
			xt.clearRect(0, xj - leaderboardFilter.tabBarOffset, xn, leaderboardFilter.tabBarOffset);
		xt.fillRect(0, xj - leaderboardFilter.tabBarOffset, xn, leaderboardFilter.tabBarOffset);
		xt.fillStyle = a7.a8,
			xt.fillRect(0, xy, xn, 1),
			xt.fillRect(0, xj - leaderboardFilter.tabBarOffset, xn, 1),
			leaderboardFilter.drawTabs(xt, xn, xj - leaderboardFilter.tabBarOffset, a7.yJ),
			xt.fillRect(0, 0, xn, ag.e9),
			xt.fillRect(0, 0, ag.e9, xj),
			xt.fillRect(xn - ag.e9, 0, ag.e9, xj),
			xt.fillRect(0, xj - ag.e9, xn, ag.e9), xt.font = xo, ad.ae.textBaseline(xt, 1), ad.ae.textAlign(xt, 1), xt.fillText(dL.al[65], Math.floor((xn + xy - 22) / 2), Math.floor(xw + xp / 2));
		playerList.drawButton(xt, 12, 12, xy - 22);
		var d1, eO = playerPos < position + xr - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - xr)
				position = (result.length > xr ? result.length : xr) - xr;
			//if (position >= result.length) position = result.length - 1;
			for (xt.font = xq, ad.ae.textAlign(xt, 0), d1 = xr - eO; 0 <= d1; d1--) {
				const pos = result[d1 + position];
				if (pos !== undefined)
					yM(xk[pos]), yN(d1, pos, xk[pos]);
			}
			for (ad.ae.textAlign(xt, 2), d1 = xr - eO; 0 <= d1; d1--) {
				const pos = result[d1 + position];
				if (pos !== undefined)
					yM(xk[pos]), yO(d1, xk[pos]);
			}
		} else {
			for (xt.font = xq, ad.ae.textAlign(xt, 0), d1 = xr - eO; 0 <= d1; d1--)
				yM(xk[d1 + position]), yN(d1, d1 + position, xk[d1 + position]);
			for (ad.ae.textAlign(xt, 2), d1 = xr - eO; 0 <= d1; d1--)
				yM(xk[d1 + position]), yO(d1, xk[d1 + position]);
		}
		2 == eO && (yM(e.hK), ad.ae.textAlign(xt, 0), yN(xr - 1, xl[e.hK], e.hK), ad.ae.textAlign(xt, 2), yO(xr - 1, e.hK)), 0 === position && (eO = .7 * xz / o0.get(4).height, xt.setTransform(eO, 0, 0, eO, Math.floor(y0 + .58 * xz + .5 * eO * o0
			.get(4).width), Math.floor(xw + xp + .4 * xz)), xt.imageSmoothingEnabled = !0, xt.drawImage(o0.get(4), -Math.floor(o0.get(4).width / 2), -Math.floor(o0.get(4).height / 2)), xt.setTransform(1, 0, 0, 1, 0, 0))
	}

	function yM(player) {
		e.dj && (xt.fillStyle = dm.yQ[dm.dp[dm.e7[player]]])
	}

	function yI(h, oT) {
		xt.fillStyle = oT, h = xr - 1 < h ? xr - 1 : h;
		oT = Math.floor((h === xr - 1 ? 2 : 0 === h ? 1.15 : 1) * xz), oT = h === xr - 2 ? Math.floor(xy + 9.15 * xz) - Math.floor(xy + 8.15 * xz) : oT;
		xt.fillRect(0, Math.floor(xy + (h + (0 === h ? 0 : .15)) * xz), xn, oT)
	}

	function yN(yR, yS, h) {
		xt.fillText(y4[yS], y0, Math.floor(xw + xp + (yR + .5) * xz)), 1 === bC.hc[h] && (xt.font = "italic " + xq);
		yS = Math.floor(xw + xp + (yR + .5) * xz);
		xt.fillText(bC.tR[h], y1, yS), 0 !== bC.hc[h] && (xt.font = xq), h < e.k && 2 !== bC.hc[h] || xt.fillRect(y1, yS + .35 * yD, y3[h], Math.max(1, .1 * yD))
	}

	function yO(yR, h) {
		xt.fillText(bC.cH[h], y2, Math.floor(xw + xp + (yR + .5) * xz))
	}

	function yc(ds) {
		return (ds -= ag.gap + xy) < 0 ? Math.floor(ds / xz) - 1 : ds < (xr - 1) * xz ? Math.floor(ds / xz) : ds < xj - xy ? xr - 1 : (ds -= xj - xy, xr + Math.floor(ds / xz))
	}

	function yb(dr, ds) {
		return dr >= ag.gap && dr < ag.gap + xn && ds >= ag.gap && ds < ag.gap + xj
	}
	this.d = function() {
			var h;
			for (yA = !1, yC = yB = y9 = 0, y8 = -1, xr = dK.eE.eF() ? 6 : 10, yE = (position = 0) === (yE = aB.dF.data[11].value) ? 10 : 1 === yE ? 5 : 1, y7 = !1, y5 = new Uint16Array(xr + 1), y6 = new Uint32Array(xr + 1), xv = e.o, xk =
				new Uint16Array(xv), xl = new Uint16Array(xv), h = xv - 1; 0 <= h; h--) xk[h] = h, xl[h] = h;
			this.resize(!0), y3 = new Uint16Array(e.o);
			var yF = Math.floor(xn - y1 - y0 - xu);
			for (y4 = new Array(e.o), xt.font = xq, h = e.o - 1; 0 <= h; h--) y4[h] = h + 1 + ".", bC.tR[h] = ad.hC.wX(bC.tQ[h], xq, yF), y3[h] = Math.floor(xt.measureText(bC.tR[h]).width);
			yG()
		}, this.resize = function(d) {
			if (xj = dK.eE.eF() ? (xn = Math.floor(.335 * dI.eC), Math.floor(xr * xn / 8)) : (xn = Math.floor(.27 * dI.eC), Math.floor(xr * xn / 10)), xn = Math.floor(.97 * xn), (xs = document.createElement("canvas")).width = xn, xs.height = xj, xt =
				xs.getContext("2d", {
					alpha: !0
				}), xw = .025 * xn, xp = .16 * xn, xx = 0 * xn, xy = Math.floor(.45 * xw + xp), xz = (xj - xp - 2 * xw - xx) / xr,
				xs.height = xj += xz, leaderboardFilter.tabBarOffset = Math.floor(xz * 1.3), leaderboardFilter.verticalClickThreshold = xj - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = xn,
				xo = ad.ae.hL(1, Math.floor(.55 * xp)), yD = Math.floor((dK.eE.eF() ? .67 : .72) * xz), xq = ad.ae.hL(0, yD), xt.font = xq, y0 = Math.floor(.04 * xn), y1 = Math.floor((dK.eE.eF() ? .195 : .18) * xn), xu = Math.floor(xt.measureText(
					"00920600").width), xt.font = xo, y2 = xn - y0, !d) {
				xt.font = xq;
				for (var h = e.o - 1; 0 <= h; h--) y3[h] = Math.floor(xt.measureText(bC.tR[h]).width);
				yG()
			}
		}, this.hQ = function() {
			return xn
		}, this.hS = function(x8) {
			y7 && (x8 || gb.kL() % yE == 0) && (y7 = !1, yG())
		}, this.v = function() {
			! function() {
				for (var d1 = xv - 1; 0 <= d1; d1--) 0 === bC.e2[xk[d1]] && ! function(d1) {
					var yZ = xk[d1];
					xv--;
					for (var h = d1; h < xv; h++) xk[h] = xk[h + 1], xl[xk[h]] = h;
					xk[xv] = yZ, xl[xk[xv]] = xv
				}(d1)
			}();
			for (var yX, rY = xv - 1, d1 = 0; d1 < rY; d1++) bC.cH[xk[d1]] < bC.cH[xk[d1 + 1]] && (yX = xk[d1], xk[d1] = xk[d1 + 1], xk[d1 + 1] = yX, xl[xk[d1]] = d1, xl[xk[d1 + 1]] = d1 + 1);
			! function() {
				for (var h5 = y7, eO = (y7 = !0, xl[e.hK] >= xr - 1 ? xr - 2 : xr - 1), h = eO; 0 <= h; h--)
					if (y5[h] !== xk[h] || y6[h] !== bC.cH[xk[h]]) return;
				(eO != xr - 2 || y5[xr] === xl[e.hK] && y6[xr] === bC.cH[e.hK]) && (y7 = h5)
			}();
			for (var h = xr - 1; 0 <= h; h--) y5[h] = xk[h], y6[h] = bC.cH[xk[h]];
			y5[xr] = xl[e.hK], y6[xr] = bC.cH[e.hK];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.jX = function(dr, ds) {
			return !!yb(dr, ds) && ((utils.isPointInRectangle(dr, ds, ag.gap + 12, ag.gap + 12, xy - 22, xy - 22) && playerList.display(bC.tQ), true) &&
				!(ds - ag.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(dr - ag.gap)) && (y9 = gb.kH, yA = !0, yB = yC = yc(ds), yd.ye() && (dr = yf(-1, yC, xr), y8 !== (dr = dr === xr ? -1 : dr)) && (y8 =
					dr, yG(), gb.gc = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			yG(), gb.gc = !0;
		},
		this.jg = function(dr, ds) {
			if (utils.isPointInRectangle(dr, ds, ag.gap + 12, ag.gap + 12, xy - 22, xy - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, yG(), gb.gc = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, yG(), gb.gc = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(dr, ds, ag.gap, ag.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), dr - ag.gap
				)) return;
			var h5, ya = yc(ds);
			return yA ? (h5 = position, (position = yf(0, position += yB - ya, e.o - xr)) !== h5 && (ya = (ya = yf(-1, yB = ya, xr)) !== xr && yb(dr, ds) ? ya : -1, y8 = ya, yG(), gb.gc = !0), !0) : (ya = (ya = yf(-1, ya, xr)) === xr || !yb(dr,
				ds) || yd.ye() ? -1 : ya, y8 !== ya && (y8 = ya, yG(), gb.gc = !0))
		}, this.jh = function(dr, ds) {
			if (!yA) return !1;
			yA = !1;
			var ya = yc(ds);
			var isEmptySpace = false;
			return yd.ye() && -1 !== y8 && (y8 = -1, yG(), gb.gc = !0), gb.kH - y9 < 350 && yC === ya && -1 !== (ya = (ya = yf(-1, ya, xr)) !== xr && yb(dr, ds) ? ya : -1) && (dr = (leaderboardFilter.enabled ? (updateFilteredLb(), xk[
					leaderboardFilter.filteredLeaderboard[ya + position] ?? (isEmptySpace = true, xl[e.hK])]) : xk[ya + position]), ya === xr - 1 && (leaderboardFilter.enabled ? this.playerPos : xl[e.hK]) >=
				position + xr - 1 && (dr = e.hK), !isEmptySpace && e.dj && donationsTracker.displayHistory(dr, bC.tQ, e.sU), 0 !== bC.e2[dr] && !isEmptySpace) && sY.wE(dr, 800, !1, 0), !0
		}, this.rJ = function(dr, ds, deltaY) {
			var yh;
			return !(yA || e.yg || (yh = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !yb(dr, ds)) || (dr = (dr = yf(-1, yc(ds), xr)) === xr || yd.ye() ? -1 : dr, 0 < deltaY ? position < e.o - xr && (position += Math.min(e.o - xr - position, yh),
				y8 = dr, yG(), gb.gc = !0) : 0 < position && (position -= Math.min(position, yh), y8 = dr, yG(), gb.gc = !0), 0))
		}, this.ge = function() {
			he.drawImage(xs, ag.gap, ag.gap)
		}
}

function yi() {
	this.pQ = new yj, this.hj = new yk, this.rk = new yl, this.ym = new rX, this.pj = new hf
}

function yn() {
	var vg, yo, h9, dJ, ma;

	function yq(h) {
		var yr = !0,
			az = a7.a8,
			aU = (vg[h].gv === e.o ? vg[h].hC.fillStyle = a7.ys : (bK.vB(vg[h].gv), vg[h].hC.fillStyle = ad.color.yt(hq.vC[0], hq.vC[1], hq.vC[2], .87), 400 < ad.eS.yu(hq.vC, 0, 2) && (yr = !1, az = a7.wl)), vg[h].fF.width),
			jF = (vg[h].hC.clearRect(0, 0, aU, dJ), vg[h].hC.fillRect(0, 0, aU, dJ), vg[h].hC.fillStyle = az, ! function(hC, aU, dJ) {
				hC.fillRect(0, 0, aU, 1), hC.fillRect(0, dJ - 1, aU, 1), hC.fillRect(0, 0, 1, dJ), hC.fillRect(aU - 1, 0, 1, dJ)
			}(vg[h].hC, aU, dJ), yo + 2 * dJ < aU && (vg[h].hC.fillRect(aU - yo - dJ, 0, 1, dJ), vg[h].hC.fillText(bC.tR[vg[h].gv], Math.floor((aU - yo) / 2), Math.floor(.57 * dJ))), 0 !== vg[h].id ? 0 : dJ);
		vg[h].hC.fillText(ad.fk.fs(vg[h].hi), Math.floor(aU - yo / 2 - jF), Math.floor(.57 * dJ)),
			function(h, aU, jF, yr) {
				vg[h].hC.fillStyle = yr ? a7.hT : a7.yz;
				yr = Math.floor(yo * vg[h].hi / vg[h].z0);
				vg[h].hC.fillRect(Math.floor(aU - yo - jF), dJ - ma, yr, ma)
			}(h, aU, jF, yr), 0 === vg[h].id ? (yx(h, aU, yr, az), function(h, aU, yr) {
				vg[h].hC.strokeStyle = yr ? a7.z3 : a7.z4, vg[h].hC.fillRect(dJ, 0, 1, dJ);
				yr = aU - dJ;
				vg[h].hC.beginPath(), vg[h].hC.moveTo(Math.floor(.3 * dJ + yr), Math.floor(dJ / 2)), vg[h].hC.lineTo(Math.floor(dJ - .3 * dJ + 0 + yr), Math.floor(dJ / 2)), vg[h].hC.stroke(), vg[h].hC.beginPath(), vg[h].hC.moveTo(Math.floor(dJ /
					2 + yr), Math.floor(.3 * dJ)), vg[h].hC.lineTo(Math.floor(dJ / 2 + yr), Math.floor(dJ - .3 * dJ + 0)), vg[h].hC.stroke()
			}(h, aU, yr)) : yx(h, 2 * dJ, yr, az)
	}

	function yx(h, aU, yr, az) {
		vg[h].hC.strokeStyle = vg[h].z1 ? a7.z2 : yr ? a7.k5 : a7.k4, vg[h].hC.fillStyle = az, vg[h].hC.fillRect(aU - dJ, 0, 1, dJ), vg[h].hC.lineWidth = Math.max(Math.floor(dJ / 12), 3), vg[h].hC.lineCap = "round";
		yr = .35;
		aU = dJ + 1, vg[h].hC.beginPath(), vg[h].hC.moveTo(Math.floor(aU - yr * dJ + 0), Math.floor(yr * dJ)), vg[h].hC.lineTo(Math.floor(aU - dJ + yr * dJ), Math.floor(dJ - yr * dJ + 0)), vg[h].hC.stroke(), vg[h].hC.beginPath(), vg[h].hC.moveTo(Math
			.floor(aU - dJ + yr * dJ), Math.floor(yr * dJ)), vg[h].hC.lineTo(Math.floor(aU - yr * dJ + 0), Math.floor(dJ - yr * dJ + 0)), vg[h].hC.stroke()
	}

	function zG(aL) {
		for (var hi, h = aL - 1; 0 <= h; h--) hi = cC.zI(e.hK, h), vg[h].hi !== hi && (vg[h].hi = hi, vg[h].z0 = hi > vg[h].z0 ? hi : vg[h].z0, vg[h].hD = !0)
	}

	function yp(zJ) {
		zJ.fF = document.createElement("canvas"), ap.fJ.font = h9;
		var aU = yo;
		zJ.gv < e.o && 0 === zJ.id && (aU += Math.floor(ap.fJ.measureText(bC.tR[zJ.gv] + "000").width)), aU += dJ, 0 === zJ.id && (aU += dJ), zJ.fF.width = aU, zJ.fF.height = dJ, zJ.hC = zJ.fF.getContext("2d", {
			alpha: !0
		}), zJ.hC.font = h9, ad.ae.textBaseline(zJ.hC, 1), ad.ae.textAlign(zJ.hC, 1)
	}

	function zB(h) {
		return vV.hN() ? dI.aU - vg[h].fF.width - ag.gap : vV.dr
	}

	function zC(h) {
		return Math.floor(2 * ag.gap + (vV.hN() ? hR.dJ + ag.gap : 0) + vV.dJ + h * (1.3 * dJ))
	}
	this.d = function() {
		vg = [], this.resize()
	}, this.resize = function() {
		h9 = g8.h9, dJ = g8.fontSize + 5, dJ = Math.floor(1.25 * dJ), dK.eE.eF() && (dJ = Math.floor(1.25 * dJ)), ma = Math.floor(.15 * dJ), ap.fJ.font = h9, yo = Math.floor(ap.fJ.measureText("02 000 000 0000").width);
		for (var h = vg.length - 1; 0 <= h; h--) yp(vg[h]), yq(h)
	}, this.hS = function() {
		for (var h = vg.length - 1; 0 <= h; h--) vg[h].hD && (vg[h].hD = !1, yq(h))
	}, this.jX = function(jY, ds) {
		if (2 !== e.pq && 0 !== bC.e2[e.hK] && !e.s5 && bK.vD(e.hK))
			for (var z6, z7, z8, z9 = dK.eE.eF() ? dJ : 0, zA = dK.eE.eF() ? Math.floor(.15 * dJ) : 0, h = vg.length - 1; 0 <= h; h--)
				if (z6 = zB(h), z7 = zC(h), z8 = vg[h].fF.width, z7 - zA <= ds && ds <= z7 + dJ + zA) {
					if (z6 - z9 <= jY && jY <= z6 + dJ + z9) return vg[h].z1 || (vg[h].hD = !0, vg[h].z1 = !0, 0 === vg[h].id && pP.pQ.rp(vg[h].gv)), !0;
					if (0 === vg[h].id && z6 + z8 - dJ - z9 <= jY && jY <= z6 + z8 + z9) return pP.pQ.pR(ny.zD(), vg[h].gv), !0
				} return !1
	}, this.v = function() {
		var aL;
		2 !== e.pq && 0 !== bC.e2[e.hK] && !e.s5 && bK.vD(e.hK) && (function(aL) {
			if (vg.length !== aL) return 1;
			for (var h = aL - 1; 0 <= h; h--)
				if (vg[h].id !== cC.gz(e.hK, h) || vg[h].gv !== cC.h0(e.hK, h)) return 1;
			return
		}(aL = cC.gy(e.hK)) && function(aL) {
			var h, id, gv, fq, hi, vx = [];
			loop: for (h = 0; h < aL; h++) {
				for (id = cC.gz(e.hK, h), gv = cC.h0(e.hK, h), fq = 0; fq < vg.length; fq++)
					if (vg[fq].id === id && vg[fq].gv === gv) {
						vx.push(vg.splice(fq, 1)[0]);
						continue loop
					} hi = cC.zI(e.hK, h), yp(hi = {
					gv: gv,
					hi: hi,
					z0: hi,
					id: id,
					hD: !0,
					z1: !1,
					fF: null,
					hC: null
				}), vx.push(hi)
			}
			vg = vx
		}(aL), zG(aL))
	}, this.zK = function(b6) {
		for (var aL = Math.min(vg.length, cC.gy(e.hK)), h = 0; h < aL; h++)
			if (vg[h].gv === b6) return void(vg = [])
	}, this.ge = function() {
		if (0 !== bC.e2[e.hK] && bK.vD(e.hK) && !e.s5)
			for (var h = vg.length - 1; 0 <= h; h--) he.drawImage(vg[h].fF, zB(h), zC(h))
	}
}
var cF, cE, cG, cV, bz, cI, a6C, cZ, a6D, a6E, gg, a6F, cB, be, bd, bf, aD5, he, i5, e, oQ, pl, vQ, vT, sY, sS, ni, nx, jb, g8, gX, vW, jk, ny, gR, rH, vV, hP, hR, kJ, n1, gY, gd, sj, o0, bK, nh, cC, hW, x, bC, a2f, aJP, z, x2, qf, a5V, aHI, aE8,
	aDJ, sa, uS, o8, vY, gZ, dI, t, ug, ce, vP, aLP, vS, vR, vX, oL, eo, dL, pP, vc, ad, a7, vd, aP, fy, cn, aS, aLQ, yd, sC, l, j3, br, hq, sd, va, a2j, ap, aDM, cq, a0r, aCh, a1f, aC8, a1d, mU, gU, ag, hs, s4, gb, dm, vZ, hx, dK, a6l, aB, w9, my,
	aLR, aEA, vE, aJQ, aJR, a9c, a9a, a9b, hm, tD = [60, 74, 112, 200, 256, 512];

function zL() {
	var zM, zN, zO, zP, zQ, zR;

	function zY(h) {
		zM[h] = 1 + p(zQ[h] * t.random(), 10 * t.value(100))
	}
	this.oR = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.zS = [97, 95, 93, 90, 87, 84], this.zT = [98, 95, 70, 40, 20, 0], this.zU = [85, 70, 50, 30, 7, 3], this.zV = [0, 0, 5, 25, 50, 90], this.hi = null, this.d =
	function() {
		var h, zW;
		if (zM = new Uint8Array(e.n), zN = new Uint16Array(e.n), zO = new Uint16Array(e.n), zP = new Uint8Array(e.n), this.hi = new Uint8Array(e.n), zQ = new Uint16Array(e.n), zR = new Uint16Array(e.n), eo.eV) {
			if (eo.eW.fA)
				for (h = e.n - 1; 0 <= h; h--) this.hi[h] = eo.eW.fA[h + 1]
		} else if (9 === e.f) this.zX();
		else if (e.sU)
			if (e.dj)
				for (h = e.n - 1; 0 <= h; h--) this.hi[h] = sj.o7[dm.e7[h + e.k] - 1].eP;
			else
				for (h = e.n - 1; 0 <= h; h--) this.hi[h] = sj.o7[0].eP;
		else
			for (zW = 8 === e.f ? 1 : 0, h = e.n - 1; 0 <= h; h--) this.hi[h] = zW;
		for (h = e.n - 1; 0 <= h; h--) this.hi[h] <= 2 ? (zP[h] = 5, zQ[h] = zR[h] = 1040, 0 === this.hi[h] ? (zN[h] = 1e3, zO[h] = 1e3) : 1 === this.hi[h] ? (zN[h] = 1e3, zO[h] = 920, zQ[h] = zR[h] = 1100) : (zN[h] = 825, zO[h] = 750)) : this
			.hi[h] <= 4 ? (zP[h] = 1 + t.u(20), 3 === this.hi[h] ? (zN[h] = zO[h] = 500, zQ[h] = zR[h] = 1e3) : (zR[h] = 250 + t.u(1501), zQ[h] = 500 + t.u(501), zN[h] = 300 + t.u(201), zO[h] = 100 + t.u(201))) : (zQ[h] = 1e3, zR[h] = 1e3, zP[
				h] = 35 + t.u(16), zN[h] = 300 + t.u(201), zO[h] = 50 + t.u(101)), zY(h)
	}, this.zX = function() {
		for (var h, bJ = 0, fq = 0; fq < 6; fq++) {
			for (h = bJ + ug.c[fq] - 1; bJ <= h; h--) this.hi[h] = fq;
			bJ += ug.c[fq]
		}
	}, this.zZ = function(za, value) {
		0 <= za && (zM[za] = value)
	}, this.v = function(za) {
		0 == --zM[za] && ! function(za) {
			! function(za) {
				zQ[za] !== zR[za] && (zQ[za] += zQ[za] < zR[za] ? 3 : -3);
				zN[za] !== zO[za] && (zN[za] += zN[za] < zO[za] ? zP[za] : -zP[za], zN[za] = (Math.abs(zN[za] - zO[za]) <= zP[za] ? zO : zN)[za]);
				zM[za] = p(zQ[za], 10)
			}(za);
			var player = za + e.k;
			zd(player, p(zN[za] * bC.bc[player], 1e3))
		}(za)
	}
}

function ze() {
	this.size = 501, this.jr = new Uint32Array(this.size), this.hE = new Uint32Array(this.size), this.j9 = new Uint16Array(this.size), this.jj = 0, this.zf = 1, this.fm = 0, this.max = [0, 0, 0], this.k1 = 0, this.k0 = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.d = function() {
		this.jj = 0, this.zf = 1, this.fm = 0, this.zg(), this.zh()
	}, this.zi = function(player, bb) {
		player === e.hK && (this.k1[0] += bb, this.k1[1]++, this.k1[12] += hq.hr[1], this.k1[13] += hq.hr[0])
	}, this.ht = function(player, hh) {
		donationsTracker.logDonation(player, hh, hq.hr[0]);
		player === e.hK && (g8.ht(hq.hr[0], hq.hr[1], hh), this.k1[12] += hq.hr[1], this.k1[16] += hq.hr[0]), hh === e.hK && (g8.x0(hq.hr[0], player), this.k1[10] += hq.hr[0])
	}, this.v = function() {
		0 < this.fm-- || this.zj()
	}, this.zj = function() {
		0 !== bC.e2[e.hK] && (this.jr[this.jj] = bC.cH[e.hK], this.hE[this.jj] = bC.bc[e.hK], this.j9[this.jj] = hW.jC(e.hK), this.zk(this.jj), this.jj++, this.jj === this.size && this.zl(), this.fm = this.zf - 1, s4.jl())
	}, this.zl = function() {
		this.zg(), this.zk(0), this.jj = 1 + p(this.size, 2);
		for (var h = 1; h < this.jj; h++) this.jr[h] = this.jr[2 * h], this.hE[h] = this.hE[2 * h], this.j9[h] = this.j9[2 * h], this.zk(h);
		this.zf *= 2
	}, this.zg = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.zh = function() {
		this.k1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.zk = function(h) {
		this.max[0] = this.jr[h] > this.max[0] ? this.jr[h] : this.max[0], this.max[1] = this.hE[h] > this.max[1] ? this.hE[h] : this.max[1], this.max[2] = this.j9[h] > this.max[2] ? this.j9[h] : this.max[2]
	}
}

function zm() {
	this.m = function(d1, fq) {
		return Math.floor((d1 + .5) / fq)
	}, this.zn = function(d1, fq) {
		return Math.floor(d1 * (fq + .5))
	}, this.sqrt = function(b8) {
		return ~~Math.sqrt(b8 + .5)
	}, this.pow = function(a6) {
		return Math.floor(Math.pow(2, a6) + .5)
	}, this.lM = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.zo = function(kC, kD, rj) {
		return Math.max(Math.min(kC, kD), rj)
	}, this.zp = function(zq, zr, dr, ds) {
		dr -= zq, zq = ds - zr, ds = 0;
		return 0 == dr ? ds = 0 <= zq ? Math.PI : 0 : (ds = Math.atan(zq / dr), ds += 0 < dr ? .5 * Math.PI : 1.5 * Math.PI), ds
	}, this.log2 = function(b8) {
		return Math.floor(!!b8 * (1 + Math.log2(b8 + .5)))
	}
}

function zt() {
	var kH = 2e4;
	this.show = function() {
		if (gb.kH < kH) return !1;
		kH = gb.kH + 135e4, 2 === d2 && dK.eE.zu(Math.floor(135e4))
	}
}

function zv() {
	var nr, mh;
	this.d = function() {
		nr = 1, mh = 0
	}, this.v = function() {
		0 < nr && (mh = 0 === mh ? gb.kH + 16 : mh, nr = (nr -= .001 * (gb.kH - mh)) < 0 ? 0 : nr, mh = gb.kH, gb.gc = !0)
	}, this.ge = function() {
		0 < nr && (he.fillStyle = "rgba(0,0,0," + nr + ")", he.fillRect(0, 0, dI.aU, dI.dJ))
	}
}

function zy() {
	var zz, m4 = 8,
		a00 = new Array(2);

	function a01(aA) {
		var di = m4 + 4,
			du = ad.ae.dh(di, di),
			dv = ad.ae.getContext(du, !0),
			dw = ad.ae.getImageData(dv, di, di),
			dx = dw.data;
		return a02(dx, di + 1, aA), a02(dx, di + 2, aA), a02(dx, 2 * di + 1, aA), a02(dx, 2 * di - 3, aA), a02(dx, 2 * di - 2, aA), a02(dx, 3 * di - 2, aA), a02(dx, di * (di - 3) + 1, aA), a02(dx, di * (di - 2) + 1, aA), a02(dx, di * (di - 2) + 2,
			aA), a02(dx, di * (di - 2) - 2, aA), a02(dx, di * (di - 1) - 3, aA), a02(dx, di * (di - 1) - 2, aA), dv.putImageData(dw, 0, 0), du
	}

	function a02(dx, b7, aA) {
		b7 *= 4;
		dx[b7] = 255, dx[1 + b7] = 255, dx[2 + b7] = aA, dx[3 + b7] = 255
	}

	function dh(player) {
		var du = ad.ae.dh(m4, m4);
		return function(dv, player) {
			var dr, ds, bT, b7, a04, a05, di = m4,
				dw = ad.ae.getImageData(dv, di, di),
				dx = dw.data,
				dy = (di >> 1) - .5,
				mM = bK.vB(player),
				a07 = ad.eS.a08(mM, .5);
			ad.eS.a09(mM, a07, 300) || ad.eS.a0A(mM, 100);
			for (ds = 0; ds < di; ds++)
				for (dr = 0; dr < di; dr++) a05 = (di - 1.5) * (di - 1.5) / 4, a04 = (bT = (bT = dr - dy) * bT + (bT = ds - dy) * bT) <= (di - 4.5) * (di - 4.5) / 4 ? a07 : mM, dx[b7 = 4 * (ds * di + dr)] = a04[0], dx[1 + b7] = a04[1], dx[2 +
					b7] = a04[2], dx[3 + b7] = a05 < bT ? 0 : 255;
			dv.putImageData(dw, 0, 0)
		}(ad.ae.getContext(du, !0), player), du
	}
	this.d = function() {
		zz = new Array(e.o), a00[0] = a01(255), a00[1] = a01(0)
	}, this.ge = function() {
		var h, player, a0B, hi, a0C, bS, a0G, a0I, a0J, pZ = br.cf.pZ,
			pg = br.cf.pg,
			pi = br.cf.pi,
			a0K = zz,
			a0L = e.hK,
			a0M = -1,
			aL = br.cf.pb,
			a0N = dI.aU,
			a0O = dI.dJ,
			xW = ap.aq << 4,
			a0Q = be,
			bJ = a0Q / m4,
			kM = bd / a0Q,
			kN = bf / a0Q,
			bT = (a0N + bd) / a0Q - kM,
			bW = (a0O + bf) / a0Q - kN,
			dv = he;
		for (br.a0R.a0S(e.hK, br.mR.m6) && (a0M = hq.qE[3]), dv.fillStyle = a7.a8, ad.ae.textAlign(dv, 1), ad.ae.textBaseline(dv, 1), h = 0; h < aL; h++) player = pg[h] >> 3, hi = pi[h], a0B = .625 + .125 * Math.sqrt(Math.sqrt(hi)), a0C = (bS =
				pZ[h]) % xW / 16 - a0B, bS = a0O * (Math.floor(bS / xW) / 16 - a0B - kN) / bW, a0G = -2 * (a0J = a0Q * a0B) * (1 + (a0I = +(player === a0L)) / 8), a0I = a0I * a0J / 4, (a0J = a0N * (a0C - kM) / bT) < a0G || bS < a0G || a0N + a0I <
			a0J || a0O + a0I < bS || (a0C = a0B * a0Q, dv.imageSmoothingEnabled = (a0G = 2 * a0B * bJ) < 3, void 0 === (a0I = a0K[player]) && (a0K[player] = a0I = dh(player)), player === a0L && (dv.setTransform(a0G, 0, 0, a0G, a0J - 2 * a0G, bS -
				2 * a0G), dv.drawImage(a00[+(h === a0M)], 0, 0)), dv.setTransform(a0G, 0, 0, a0G, a0J, bS), dv.drawImage(a0I, 0, 0), (a0B = Math.floor(function(hi) {
				if (hi < 1e3) return .42;
				if (hi < 1e4) return .34;
				if (hi < 1e6) return .26;
				if (hi < 1e8) return .19;
				return .15
			}(hi) * a0C)) < 6) || (dv.setTransform(1, 0, 0, 1, 0, 0), dv.font = ad.ae.hL(1, a0B), dv.fillText(ad.fk.fs(hi), a0J + a0C, bS + a0C + .1 * a0B));
		dv.imageSmoothingEnabled = !1, dv.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a0U() {
	this.a0V = new a0W, this.a0X = new a0Y, this.a0Z = new a0a, this.d = function(a0b, g7, eg, a0c) {
		var a0d;
		e.s5 || ((a0d = {}).a0e = e.hK, a0d.a0b = a0b, a0d.g7 = g7, a0d.eg = eg, a0d.a0c = a0c, a0d.a0f = ap.ev, a0d.ex = ap.fH, sj.oF(a0d), this.a0V.d(a0d))
	}, this.v = function() {
		e.s5 || (this.a0V.v(), 3 !== cq.cr) || gb.kL() % 15 != 5 && 2 !== e.pq || cq.cs().a0h()
	}, this.a0i = function() {
		var oG = this.a0V.a0d;
		0 === e.pq && gd.oK(), ap.aQ(oG.a0f, oG.ex), 1 === oG.g7.length && (sj.oA(oG.eg), sj.oC(oG.oD, oG.oE)), ce.cf.close(ce.cf.i6, 3257), ce.cf.i6 = 0, e.ed(oG.a0b, oG.a0e, oG.g7, oG.eg, oG.a0c, !0)
	}, this.a0j = function(aH) {
		var h = aH.indexOf("=");
		return 0 <= h ? aH.substring(h + 1) : aH
	}, this.a0k = function(aH) {
		return "https://territorial.io/?replay=" + aH
	}
}

function a0l() {
	var kR, nE;

	function a0n() {
		a0r.a0s.hideCMPButton(), cq.kn(0);
		var aH = vc.a0j(nE.nJ());
		(0 < aH.length && aH === vc.a0V.a0q || vc.a0Z.ib(aH)) && vc.a0i()
	}
	this.show = function(a0p) {
		this.a0h(a0p), kR.show(), this.resize()
	}, this.a0h = function(a0p) {
		0 === e.pq ? (a0p = a0p || nE.nJ(), nE.nH(a0p)) : (e.s5 || (vc.a0V.a0q = vc.a0X.ia()), nE.nH(vc.a0k(vc.a0V.a0q)))
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), nE.resize()
	}, this.lQ = function(fm) {
		2 === fm ? kR.lR[0].dN() : a0n()
	}, kR = new kh("▶️ " + dL.al[82], [new kl("❌ " + dL.al[92], function() {
		cq.a0m()
	}, a7.sN), new kl("🔲 " + dL.al[93], function() {
		nE.nK()
	}), new kl("📋 " + dL.al[94], function() {
		nE.nL()
	}), new kl("🗑️ " + dL.al[95], function() {
		nE.clear()
	}), new kl("▶️ " + dL.al[96], function() {
		a0n()
	}, a7.a0o)]), nE = new nD("replayData", "Insert the replay link here!"), kR.oZ.appendChild(nE.nF)
}

function kl(title, a0t, backgroundColor, a0u) {
	var a0w, self, a0v = document.createElement("button");

	function a0y() {
		if (!1 !== a0u) {
			var a11 = ad.color.a12(a0w);
			if (0 < a11[0] && a11[0] < 255 && a11[0] === a11[1] && a11[0] === a11[2]) return
		}
		this.style.backgroundColor = ad.color.a0y(a0w, 50)
	}

	function a10() {
		this.style.backgroundColor = a0w
	}

	function a0z() {
		this.style.backgroundColor = a0w, this.blur()
	}
	this.button = a0v, this.dN = a0t, this.a0x = function(fm) {
			a0w = fm, a0v.style.backgroundColor = fm
		}, self = this, a0v.innerHTML = title, a0v.style.color = a7.a8, a0v.style.userSelect = "none", a0v.style.outline = "none", a0v.style.overflowWrap = "break-word", self.a0x(backgroundColor || a7.pF), a0v.style.border = "none", a0v.style.font =
		"inherit", a0v.style.fontSize = "1em", a0v.style.padding = "0em 0.3em", a0v.onclick = a0t, a0v.addEventListener("mouseover", a0y), a0v.addEventListener("mouseout", a0z), a0v.addEventListener("focus", a0y), a0v.addEventListener("blur", a10)
}

function a13() {
	var a14;

	function a1J(du, jV, dr, ds, globalAlpha) {
		ap.fJ.save(), ap.fJ.globalAlpha = globalAlpha, ap.fJ.imageSmoothingEnabled = !1, ap.fJ.scale(jV, jV), ap.fJ.drawImage(du, Math.floor(dr * (ap.aq / jV - du.width)), Math.floor(ds * (ap.bj / jV - du.height))), ap.fJ.restore()
	}
	this.x3 = 0, this.x4 = 0, this.x5 = 0, this.x6 = 0, this.d = function() {
		(a14 = new Array(ap.ew))[0] = {
			aU: [0, 5e3, 8e3, 1e4],
			ik: [220, 250, 255, 220],
			oG: [190, 220, 0, 0],
			fq: [170, 200, 0, 0]
		}, a14[1] = {
			aU: [0, 4e3, 5e3, 6e3, 1e4],
			ik: [25, 0, 100, 0, 25],
			oG: [25, 0, 0, 0, 25],
			fq: [25, 0, 0, 0, 25]
		}, a14[2] = {
			aU: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			ik: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			oG: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fq: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, a14[3] = {
			aU: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			ik: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			oG: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			fq: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, a14[4] = {
			aU: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			ik: [10, 10, 20, 10, 10, 170, 212],
			oG: [20, 20, 60, 100, 100, 110, 170],
			fq: [70, 70, 160, 30, 30, 60, 120]
		}, a14[5] = {
			aU: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			ik: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			oG: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fq: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, a14[6] = {
			aU: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			ik: [10, 10, 60, 255, 255, 200, 200],
			oG: [10, 10, 60, 255, 255, 200, 200],
			fq: [80, 80, 255, 255, 255, 200, 200]
		}, a14[7] = {
			aU: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			ik: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			oG: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fq: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, a14[8] = {
			aU: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			ik: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			oG: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fq: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, a14[9] = {
			aU: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			ik: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			oG: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fq: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, a14[20] = {
			aU: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			ik: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			oG: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fq: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.a15 = function() {
		var a1I, h, d1, kC, dw = function() {
				var dw;
				return ap.fI = document.createElement("canvas"), ap.fI.width = ap.aq, ap.fI.height = ap.bj, ap.fJ = ap.fI.getContext("2d", {
					alpha: !1
				}), dw = ap.fJ.getImageData(0, 0, ap.aq, ap.bj), ap.fK = dw.data, dw
			}(),
			aU = a14[ap.ev].aU,
			ik = a14[ap.ev].ik,
			oG = a14[ap.ev].oG,
			fq = a14[ap.ev].fq,
			b8 = qf.qg(),
			aL = aU.length - 2,
			a1B = new Array(1 + aL),
			a1C = new Array(1 + aL),
			a1D = new Array(1 + aL),
			a1E = new Array(1 + aL);
		for (d1 = aL; 0 <= d1; d1--) a1B[d1] = aU[d1 + 1] - aU[d1], a1C[d1] = ik[d1 + 1] - ik[d1], a1D[d1] = oG[d1 + 1] - oG[d1], a1E[d1] = fq[d1 + 1] - fq[d1];
		for (h = ap.aq * ap.bj - 1; 0 <= h; h--)
			for (d1 = aL; 0 <= d1; d1--)
				if (b8[h] >= aU[d1]) {
					kC = b8[h] - aU[d1], ap.fK[4 * h] = ik[d1] + qh(a1C[d1] * kC, a1B[d1]), ap.fK[4 * h + 1] = oG[d1] + qh(a1D[d1] * kC, a1B[d1]), ap.fK[4 * h + 2] = fq[d1] + qh(a1E[d1] * kC, a1B[d1]), ap.fK[4 * h + 3] = 255;
					break
				} ap.fJ.putImageData(dw, 0, 0), ap.a18(ap.ev) && o0.a1F() && ap.a18(ap.ev) && (dw = o0.a1H("arena"), a1I = o0.a1H("territorial.io"), a1J(dw, 5, .5, .5, .1), a1J(a1I, 2, .5, .45, .1)), ap.a1A = !0, gb.gc = !0
	}, this.a1K = function() {
		for (var b6, dr, ds, a1L, a1M, kD, x4 = 0, aU = ap.aq, dJ = ap.bj, kC = aU * dJ * 4, a1N = vE, a1O = ap.fK, h = aU - 1; 0 <= h; h--) a1N[(b6 = h << 2) + 2] = a1N[kC - b6 - 2] = 3;
		for (kC = 4 * aU, h = dJ - 1; 0 <= h; h--) a1N[(b6 = h * kC) + 2] = a1N[b6 + kC - 2] = 3;
		for (a1L = aU - 1, a1M = dJ - 1, ds = 1; ds < a1M; ds++)
			for (kC = ds * aU, dr = 1; dr < a1L; dr++) kD = 1 - (a1O[(b6 = kC + dr << 2) + 2] > a1O[b6 + 1] && a1O[b6 + 2] > a1O[b6]), a1N[b6 + 2] = 2 - kD, x4 += kD;
		this.x3 = (aU - 2) * (dJ - 2), this.x6 = 0, ap.a1P(ap.ev) && function() {
			var b6, dr, ds, kC, a1N = vE,
				a1O = ap.fK,
				aU = ap.aq,
				a1L = aU - 1,
				a1M = ap.bj - 1,
				s = 0;
			for (ds = 1; ds < a1M; ds++)
				for (kC = ds * aU, dr = 1; dr < a1L; dr++) a1O[b6 = kC + dr << 2] === a1O[1 + b6] && a1O[b6] === a1O[2 + b6] && (s++, a1N[2 + b6] = 3);
			x2.x6 = s
		}(), this.x4 = e.a1R = x4 - this.x6, this.x5 = this.x3 - this.x4 - this.x6
	}
}

function a1S() {
	var a1T, fF, nQ, a1U;

	function a1Z(aA, name, a1a, aH) {
		nQ[aA] = name, fF[aA] = new Image, fF[aA].onload = function() {
			! function(aA, a1a) {
				var lt, lu = null;
				7 === a1a ? lt = ad.su.lw : 8 === a1a ? (lt = ad.su.lz, lu = .1) : 3 === a1a ? (lt = ad.su.lx, lu = .06) : 5 === a1a ? lt = ad.su.m0 : 6 === a1a ? lt = ad.su.lv : 4 === a1a && (lt = ad.su.m1);
				fF[aA] = ad.su.ls(fF[aA], lt, lu)
			}(aA, a1a), a1c()
		}, fF[aA].onerror = function(a6) {
			console.error("Error loading image at index", aA, "Error:", a6), a1c()
		}, fF[aA].src = "data:image/png;base64," + aH
	}

	function a1c() {
		a1T--, a1X()
	}

	function a1X() {
		0 === a1T && (a1T = -1, a1d.jl(), nx.a1e(), a1f.dc([fF[8], fF[16], fF[7], fF[9], fF[10]], [2 !== dK.id, 1 !== dK.id, !0, !0, !0]), z.dx.d(), vY.a1g(), gb.gc = !0, fF[7] = a1U, fF[8] = a1U, fF[9] = a1U, fF[10] = a1U)
	}
	this.d = function() {
		if (void 0 === fF) {
			a1T = 23, fF = new Array(a1T), nQ = new Array(a1T), (a1U = document.createElement("canvas")).width = 1, a1U.height = 1;
			for (var h = a1T - 1; 0 <= h; h--) fF[h] = a1U;
			a1Z(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a1Z(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a1Z(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a1Z(3, "orders", 6,
					"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"
					), a1Z(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), a1Z(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a1Z(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), a1Z(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a1Z(8,
					"googleplay", 3,
					"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"
					), a1Z(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a1Z(10, "insta",
					3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a1Z(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a1Z(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a1Z(13, "bestTeam", 5,
					"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"
					), a1Z(14, "bestPlayer", 5,
					"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"
					), a1Z(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a1Z(16, "apple", 3,
					"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"
					), a1Z(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a1Z(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a1Z(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a1Z(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a1Z(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a1Z(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(aA) {
		return fF[aA]
	}, this.a1H = function(name) {
		for (var h = nQ.length - 1; 0 <= h; h--)
			if (nQ[h] === name) return fF[h];
		return a1U
	}, this.a1F = function() {
		return a1T <= 0
	}, this.a1W = function() {
		a1T = 0, a1X()
	}
}

function or(a1i) {
	var ab = document.createElement("div");
	this.a6 = ab, this.a1j = a1i, this.resize = function() {
		for (var aL = a1i.length, h = 1; h < aL; h++) ad.ae.eT(a1i[h], 4)
	};
	var h, aL = a1i.length;
	for (ab.style.width = "100%", ab.style.height = "2.7em", ab.style.marginTop = "0.6em", ab.style.border = "inherit", h = 0; h < aL; h++) a1i[h].style.verticalAlign = "top", a1i[h].style.width = (100 / aL).toFixed(2) + "%", a1i[h].style.height =
		"100%", a1i[h].style.fontSize = "0.75em", ab.appendChild(a1i[h])
}

function sB(title, aa, a1k = !1, a1l = [new kl("❌ " + dL.al[92], function() {
	cq.a0m()
}, a7.sN)]) {
	var kR, a1m;
	this.show = function() {
		kR.show(), this.resize()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), a1m.resize()
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, kR = new kh(title, a1l), a1m = new aY(kR.oZ, aa), a1k && ad.ae.textAlign(kR.oZ.style, 1)
}

function a1n() {
	function a21() {
		ap.a22.v()
	}

	function a2B(b6, a2A) {
		0 < a2A && (ap.fK[b6] += a2A, ap.fK[b6 + 1] += a2A, ap.fK[b6 + 2] += a2A)
	}

	function gn(b6) {
		return ap.fK[b6 + 2] > ap.fK[b6] && ap.fK[b6 + 2] > ap.fK[b6 + 1]
	}
	this.r3 = -1, this.a1o = 0, this.a1p = 0, this.a1q = 8, this.a1r = 32, this.a1s = 8, this.a1t = 32, this.a1u = [0, 0], this.v0 = [0, 0, 0, 0], this.bs = null, this.a1v = !0, this.a1w = !1, this.a1x = function() {
		-1 !== this.r3 && clearTimeout(this.r3), this.r3 = -1, this.bs = null, qf.ts()
	}, this.d = function() {
		7 === gd.mw() || this.a1w || (this.a1v = !0, this.a1o = 0, this.a1p = 1, this.a1u = [ap.eW.f0[ap.ev].a1y[0], ap.eW.f0[ap.ev].a1z[0]], this.v0 = [ap.eW.f0[ap.ev].a20[3], ap.eW.f0[ap.ev].a20[4], ap.eW.f0[ap.ev].a20[5], ap.eW.f0[ap.ev].a20[
			6]], this.a1q = ap.eW.f0[ap.ev].a20[7], this.a1r = ap.eW.f0[ap.ev].a20[8], this.a1s = ap.eW.f0[ap.ev].a20[9], this.a1t = ap.eW.f0[ap.ev].a20[10], this.a1v ? this.r3 = setTimeout(a21, 16) : this.v())
	}, this.v = function() {
		if (8 === gd.mw() && sY.a23()) this.r3 = setTimeout(a21, 16);
		else {
			if (0 === this.a1o) {
				var a24 = t.a25();
				if (t.a26(ap.eW.f0[ap.ev].a20[2]), qf.aQ([ap.aq, ap.bj, ap.eW.f0[ap.ev].a20[0], ap.eW.f0[ap.ev].a20[1]]), t.a26(a24), this.bs = qf.qg(), this.a1o++, this.a1v) return void(this.r3 = setTimeout(a21, 16))
			}
			for (var b6, b7, a24 = this.a1v ? 10 : 1e6, a24 = ap.bj - this.a1p - 1 < a24 ? ap.bj - this.a1p - 1 : a24, t9 = this.a1p + a24, ds = this.a1p; ds < t9; ds++)
				for (var dr = 1; dr < ap.aq - 1; dr++) gn(b6 = 4 * (b7 = dr + ds * ap.aq)) ? this.a27(b6, b7, 1) : (this.a27(b6, b7, 0), function(dr, ds, b6) {
					return 1 < dr && gn(b6 - 4) || dr < ap.aq - 2 && gn(b6 + 4) || 1 < ds && gn(b6 - 4 * ap.aq) || ds < ap.bj - 2 && gn(b6 + 4 * ap.aq)
				}(dr, ds, b6) && this.a28(dr, ds));
			this.a1p = t9, this.a1p >= ap.bj - 1 ? (ap.fJ.putImageData(ap.a29, 0, 0, 1, 1, ap.aq - 2, ap.bj - 2), gb.gc = !0, this.a1x()) : this.a1v && (this.r3 = setTimeout(a21, 16))
		}
	}, this.a27 = function(b6, b7, aA) {
		a2B(b6, Math.floor(this.a1u[aA] + this.v0[aA] * this.bs[b7] / 1e4) - ap.fK[b6])
	}, this.a2C = function(b6, ik, a2D, aA, v0) {
		a2B(b6, Math.floor(this.a1u[aA] + (1 - ik / a2D) * v0) - ap.fK[b6])
	}, this.a28 = function(jY, jZ) {
		for (var b6, ik, a2D, qu = jY - this.a1r, sx = jZ - this.a1r, tA = jY + this.a1r, t9 = jZ + this.a1r, qu = qu < 1 ? 1 : qu, tA = tA > ap.aq - 2 ? ap.aq - 2 : tA, t9 = t9 > ap.bj - 2 ? ap.bj - 2 : t9, ds = sx < 1 ? 1 : sx; ds <= t9; ds++)
			for (var dr = qu; dr <= tA; dr++) gn(b6 = 4 * (dr + ds * ap.aq)) ? (a2D = this.a1q + (this.a1r - this.a1q) * this.bs[dr + ap.aq * ds] / 1e4, Math.abs(jY - dr) > a2D || Math.abs(jZ - ds) > a2D || a2D <= (ik = Math.sqrt((jY - dr) * (
				jY - dr) + (jZ - ds) * (jZ - ds))) || this.a2C(b6, ik, a2D, 1, this.v0[3])) : (a2D = this.a1s + (this.a1t - this.a1s) * this.bs[dr + ap.aq * ds] / 1e4, Math.abs(jY - dr) > a2D || Math.abs(jZ - ds) > a2D || a2D <= (ik = Math
				.sqrt((jY - dr) * (jY - dr) + (jZ - ds) * (jZ - ds))) || this.a2C(b6, ik, a2D, 0, this.v0[2]))
	}
}

function a2E() {
	this.a2F = function(aM) {
		aM.fill(0)
	}, this.is = function(aM) {
		for (var aL = aM.length, h = 0; h < aL; h++) aM[h] = []
	}, this.a08 = function(az, jy) {
		for (var b0 = hq.a2G, h = 0; h < 3; h++) b0[h] = jy * az[h];
		return b0
	}, this.a09 = function(az, b0, a2H) {
		for (var b4 = 0, h = 0; h < 3; h++) b4 += Math.abs(az[h] - b0[h]);
		return a2H <= b4
	}, this.a0A = function(az, a2I) {
		for (var h = 0; h < 3; h++) az[h] = l.lM(az[h] + a2I, 0, 255);
		return az
	}, this.yu = function(aM, j2, j4) {
		var h, a2J = 0;
		for (j4 = j4 || aM.length - 1, h = j2 = j2 || 0; h <= j4; h++) a2J += aM[h];
		return a2J
	}, this.a2K = function(aM, a2L) {
		for (var h, ov, aL = aM.length, a2M = [], d1 = aL - 1; 0 <= d1; d1--) {
			for (h = ov = 0; h < aL; h++) a2L(aM[h]) < a2L(aM[ov]) && (ov = h);
			aL--, a2M.push(aM[ov]), aM[ov] = aM[aL], aM.pop()
		}
		return a2M
	}, this.min = function(aM) {
		var h, b8, aL = aM.length;
		if (0 === aL) return 0;
		for (b8 = aM[0], h = 1; h < aL; h++) b8 = Math.min(b8, aM[h]);
		return b8
	}, this.max = function(aM) {
		var h, b8, aL = aM.length;
		if (0 === aL) return 0;
		for (b8 = aM[0], h = 1; h < aL; h++) b8 = Math.max(b8, aM[h]);
		return b8
	}
}

function a2N() {
	var dJ, fF, hC, a2O, a2P, a2Q, a2R, hD, a2S, a2T, a2U, a2V, wo = !1,
		du = (this.jR = !1, this.aU = 0, new Array(2));

	function jl() {
		var aU = vY.aU,
			dy = (hD = !1, a2X(hC, aU, dJ), Math.floor(aU / 2));
		1 === a2O ? (hC.fillStyle = a7.a2Y, hC.fillRect(dy, 0, dy, dJ)) : -1 === a2O && (hC.fillStyle = a7.rL, hC.fillRect(0, 0, dy, dJ)), a2Z(hC, aU, dJ, 2);
		var dy = (dy = Math.floor(.25 * dJ)) < 2 ? 2 : dy,
			x3 = (hC.fillStyle = a7.a2a, Math.floor((dJ - 4) * a2P[1] / a2Q[1]));
		0 < x3 && hC.fillRect(2, dJ - 2 - x3, dy, x3), 0 < (x3 = Math.floor((dJ - 4) * a2P[0] / a2Q[0])) && hC.fillRect(aU - 2 - dy, dJ - 2 - x3, dy, x3);
		dy = (dy = Math.floor(dJ / 8)) < 2 ? 2 : dy, a2c(hC, Math.floor(.4 * dJ), 0, dJ, dy, .5, !1), a2c(hC, Math.floor(aU - 1.4 * dJ), 0, dJ, dy, .5, !0), x3 = 1.1 * dJ / du[0].width;
		hC.imageSmoothingEnabled = !0, hC.setTransform(x3, 0, 0, x3, (aU - x3 * du[0].width) / 2, -.05 * dJ), hC.drawImage(du[+wo], 0, 0), hC.setTransform(1, 0, 0, 1, 0, 0)
	}

	function nz() {
		hD = !0, a2S = 140, a2O = 0, a2R = [], vY.jR = !1, g8.ww(247, 0), a2P[0] = a2P[1] = 0
	}

	function gT() {
		return ny.w8(g8.w5()) ? ny.ds - dJ - ag.gap : vd.w8(g8.w7()) ? vd.gT() - dJ - ag.gap : dI.dJ - dJ - w9.wA() * ag.gap
	}
	this.a1g = function() {
		for (var h = 0; h < 2; h++) du[h] = ad.fF.so(o0.get(3), 8 - h, a7.a2W), du[h] = ad.fF.ss(du[h])
	}, this.d = function() {
		a2U = a2V = 0, this.jR = !1, hD = wo = !1, a2S = 140, a2P = [a2O = 0, 0], a2Q = [1, 1], a2R = [], a2T = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		dJ = ny.dJ, this.aU = 4 * dJ, (fF = document.createElement("canvas")).width = this.aU, fF.height = dJ, hC = fF.getContext("2d", {
			alpha: !0
		}), jl()
	}, this.hS = function() {
		hD && jl()
	}, this.jX = function(dr, ds) {
		var kN;
		return !!this.jR && !(dr < dI.aU - this.aU - ag.gap || ds < (kN = gT()) || kN + dJ < ds || (e.s5 || pP.pQ.rr(dr > dI.aU - ag.gap - this.aU / 2 ? 1 : 0), 0))
	}, this.v = function() {
		if (0 < a2V) 0 === --a2V && nz();
		else if (this.jR) 270 == --a2S && 2 <= a2U && function() {
			var h;
			for (h = jB - 1; 0 <= h; h--)
				if (bK.vD(jA[h])) return;
			return 1
		}() && (hD = !0, a2P[0] += a2Q[0]), 180 === a2S && 3 * a2P[0] < a2Q[0] ? nz() : a2P[0] >= a2Q[0] ? wo ? a2j.a2k.a2l() : a2j.a2k.a2m(-1) : a2P[1] >= a2Q[1] ? a2V = 4 : a2S <= 0 && nz();
		else if (function() {
				var h;
				for (h = 9; 0 <= h; h--) 12 < Math.abs(a2T[h] - bC.cH[xk[h]]) && (a2S = 140), a2T[h] = bC.cH[xk[h]];
				if (--a2S <= 0) return 1;
				return
			}()) {
			wo = a2f.nv(), g8.wn(wo), this.jR = !0, hD = !0, a2S = 360;
			for (var b8, h5 = 0, h = jB - 1; 0 <= h; h--) bK.vD(jA[h]) && (h5 += bC.cH[jA[h]]);
			wo ? a2Q[0] = Math.max(p(3 * h5, 4), 1) : e.dj ? (b8 = l.m(100 * vZ.a2h(), e.a1R), b8 = 150 - (b8 += 2 * Math.max(b8 - 75, 0)), b8 = l.lM(b8, 0, 100), b8 = l.m(b8 * h5, 100), a2Q[0] = Math.max(b8, 1)) : a2Q[0] = Math.max(p(3 * h5, 5),
				1), a2Q[1] = Math.max(h5 - a2Q[0], 1), a2U++
		}
	}, this.a2n = function() {
		this.jR && a2P[0] < a2Q[0] && nz()
	}, this.a2o = function(player, a2p) {
		var h, h5;
		if (this.jR) {
			for (h = a2R.length - 1; 0 <= h; h--)
				if (a2R[h] === player) return;
			g8.wF(200, bC.tR[player] + (a2p ? " voted for" : " rejected") + " peace.", 257, player, a2p ? a7.z3 : a7.hY, a7.jn, -1, !0), a2R.push(player), hD = !0, h5 = e.sU ? a2Q[0] : bC.cH[player], a2p ? a2P[0] += h5 : a2P[1] += h5, player ===
				e.hK && (a2O = a2p ? 1 : -1)
		}
	}, this.ge = function() {
		var ds;
		this.jR && (ds = gT(), he.drawImage(fF, dI.aU - this.aU - ag.gap, ds))
	}
}

function a2q() {
	var player, hi, xA, a2r, kM, kN, kO, kP, aA, a2s, id;

	function a2z() {
		var gv;
		if (bK.bL(xA)) gv = e.o;
		else {
			if ((gv = bK.bM(xA)) === player) return void a31(!0);
			if (!gu(player, gv)) return function(gv) {
				var max = bC.cH[gv] * e.a35 - bC.bc[gv];
				max <= 0 || (hi -= max = max < hi ? max : hi, player === e.hK && (g8.ht(max, 0, gv), hs.k1[16] += max), gv === e.hK && (g8.x0(max, player), hs.k1[10] += max), bC.bc[gv] += max, x.hu(gv, max))
			}(gv), void a31(!0)
		}
		player === e.hK && (hs.k1[13] += hi), vT.a33(player, id), cC.a34(player, a2s), bC.c6[player].push(a2r), cC.pk(player, hi, gv), pl.pm(player, !0)
	}

	function a31(a37) {
		vT.a33(player, id), cC.a34(player, a2s), a37 && (bC.bc[player] += hi)
	}

	function a2v() {
		bK.vG(xA, player) && bK.vJ(xA)
	}

	function a2u(h, a3A, a2t, qN, rY) {
		if (aA = h, id = a3A, player = a2t, kM = bK.gS(qN), kN = bK.gT(qN), kO = bK.gS(rY), kP = bK.gT(rY), a2r = xA = bK.qL(kM, kN), -1 !== (a2s = cC.a3B(player, id))) return hi = cC.zI(player, a2s), 1;
		a2v(), vT.a33(player, id)
	}
	this.v = function(h, id, a2t, qN, rY) {
		a2u(h, id, a2t, qN, rY) && (a2v(), function() {
			var a39 = p(hi, 128);
			hi -= a39 = a39 < 1 ? 1 : a39, player === e.hK && (hs.k1[15] += a39);
			if (hi <= e.cO) return player === e.hK && (hs.k1[15] += hi), void a31(!1);
			return cC.cD(player, a2s, hi), 1
		}()) && (h = bK.qL(kM, kN), xA = Math.abs(kO - kM) >= Math.abs(kP - kN) ? h + gg[kM < kO ? 1 : 3] : h + gg[kN < kP ? 2 : 0], kM = bK.gS(xA), kN = bK.gT(xA), vT.a3C(aA, xA), ! function() {
			if (bK.gr(xA)) return;
			return 1
		}() ? a2z() : bK.gn(xA) && bK.vM(xA, player))
	}, this.a38 = function(a2t, qN) {
		player = a2t, xA = bK.qL(bK.gS(qN), bK.gT(qN)), a2v()
	}
}

function a3D() {
	this.eb = function(b8) {
		return [b8 >> 12 & 63, b8 >> 6 & 63, 63 & b8]
	}, this.a3E = function(b8) {
		for (var aM = this.eb(b8), h = 0; h < 3; h++) aM[h] = ~~(4.05 * aM[h]);
		return aM
	}, this.a3F = function(b8) {
		b8 = this.a3E(b8);
		return ad.color.ks(b8[0], b8[1], b8[2])
	}, this.a3G = function(aM) {
		for (var h = 0; h < 3; h++) aM[h] = ~~(aM[h] / 4.04);
		return (aM[0] << 12) + (aM[1] << 6) + aM[2]
	}, this.ks = function(ik, oG, fq) {
		return "rgb(" + ik + "," + oG + "," + fq + ")"
	}, this.yt = function(ik, oG, fq, d1) {
		return "rgba(" + ik + "," + oG + "," + fq + "," + d1.toFixed(3) + ")"
	}, this.a12 = function(fm) {
		for (var aM = fm.split("(")[1].split(","), vC = (aM.length, hq.vC), h = 0; h < 3; h++) vC[h] = parseInt(aM[h]);
		return vC
	}, this.a0y = function(a3H, eP) {
		for (var aM = a3H.slice(a3H.indexOf("(") + 1, a3H.indexOf(")")).split(","), vC = hq.vC, h = 0; h < 3; h++) vC[h] = l.lM(parseInt(aM[h].trim(), 10) + eP, 0, 255);
		return 3 === aM.length ? this.ks(vC[0], vC[1], vC[2]) : this.yt(vC[0], vC[1], vC[2], parseFloat(aM[3].trim()))
	}, this.a3I = function(aM) {
		for (var aH = "#", h = 0; h < 3; h++) {
			var ik = aM[h].toString(16);
			aH += 1 === ik.length ? "0" + ik : ik
		}
		return aH
	}, this.a3J = function(aH) {
		var ik, oG;
		return aH.length < 7 ? a7.wl : (ik = parseInt(aH.slice(1, 3), 16), oG = parseInt(aH.slice(3, 5), 16), aH = parseInt(aH.slice(5, 7), 16), this.ks(ik, oG, aH))
	}
}

function a3K() {
	function a3R(oT) {
		return oT < 0 ? 0 : 255 < oT ? 255 : Math.floor(oT)
	}
	this.aU = 0, this.dJ = 0, this.jR = !1, this.a3L = 0, this.gap = 0, this.a3M = 0, this.a3N = 0, this.kU = 0, this.a3O = 0, this.a3P = 0, this.colors = null, this.d = function() {
		this.jR = !0, this.a3L = 0, this.resize()
	}, this.resize = function() {
		this.jR && (dI.aU < 1.4 * dI.dJ ? this.aU = Math.floor((dK.eE.eF() ? .94 : .43) * dI.aU) : (this.dJ = Math.floor((dK.eE.eF() ? .88 : .43) * dI.dJ), this.aU = Math.floor(1.4 * this.dJ)), this.dJ = this.aU / 1.4, this.gap = this.aU / 32,
			this.a3N = Math.floor(.25 * this.dJ), this.kU = (this.dJ - this.a3N - 3 * this.gap) / 2, this.a3O = this.aU - 3 * this.gap - this.kU, this.a3P = (this.dJ - this.a3N - 4 * this.gap) / 3)
	}, this.a3Q = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var aH = aB.dF.data[103].value.split("");
		if (aH.length < 6)
			for (var fq = 2; 0 <= fq; fq--) this.colors[0][fq] = a3R(256 * Math.random());
		else
			for (var h = 2; 0 <= h; h--) this.colors[0][h] = a3R(4 * (10 * parseInt(aH[2 * h]) + parseInt(aH[2 * h + 1])));
		this.a3S()
	}, this.a3T = function() {
		return [p(this.colors[0][0], 4), p(this.colors[0][1], 4), p(this.colors[0][2], 4)]
	}, this.rJ = function(jY, jZ, deltaY) {
		var kM = (dI.aU - this.aU) / 2;
		jZ -= (dI.dJ - this.dJ) / 2 + this.a3N, (jY -= kM) < 0 || jZ < 0 || jY >= this.aU || jZ >= this.dJ - this.a3N || (kM = Math.floor(3 * jZ / (this.dJ - this.a3N)), this.colors[this.a3M][kM] = a3R(this.colors[this.a3M][kM] + (deltaY < 0 ?
			1 : -1) * Math.max(Math.abs(.05 * deltaY), 1)), gb.gc = !0)
	}, this.jX = function(jY, jZ) {
		this.a3L = 0;
		var kM = (dI.aU - this.aU) / 2;
		return jZ -= (dI.dJ - this.dJ) / 2, (jY -= kM) < 0 || jZ < 0 || jY >= this.aU - 1 || jZ >= this.dJ - 1 || jY > this.aU - (.4 * this.a3N + 3 * this.gap) && jZ < this.a3N ? (this.jR = !1, !(gb.gc = !0)) : jY < this.gap || jZ < this.gap +
			this.a3N || jY >= this.aU || jZ >= this.dJ - this.gap || (jY < this.gap + this.kU ? (jZ < this.gap + this.a3N + this.kU && 0 !== this.a3M && (this.a3M = 0, gb.gc = !0), !0) : jY < this.gap + this.kU || (jY -= 2 * this.gap + this.kU,
				jZ < this.gap + this.a3N + this.a3P ? (this.a3L = 1, this.colors[this.a3M][0] = a3R(256 * jY / this.a3O), gb.gc = !0) : jZ < 2 * this.gap + this.a3N + this.a3P || (jZ < 2 * this.gap + this.a3N + 2 * this.a3P ? (this.a3L = 2,
					this.colors[this.a3M][1] = a3R(256 * jY / this.a3O), gb.gc = !0) : !(jZ >= 3 * this.gap + this.a3N + 2 * this.a3P) || (this.a3L = 3, this.colors[this.a3M][2] = a3R(256 * jY / this.a3O), gb.gc = !0))))
	}, this.a3S = function() {
		for (var fq = 2; 0 <= fq; fq--) this.colors[0][fq] = a3R(this.colors[0][fq])
	}, this.a3U = function() {
		for (var b8, aH = "", h = 0; h < 3; h++)(b8 = p(this.colors[0][h], 4)) < 10 && (aH += "0"), aH += b8.toString();
		return aH
	}, this.jg = function(jY) {
		0 !== this.a3L && (jY -= 2 * this.gap + this.kU + (dI.aU - this.aU) / 2, this.colors[this.a3M][this.a3L - 1] = a3R(256 * jY / this.a3O), gb.gc = !0)
	}, this.a3V = function() {
		0 < this.a3L && (this.a3L = 0, this.a3S(), aB.aC.aD(103, this.a3U()), gb.gc = !0)
	}, this.ge = function() {
		var kM = (dI.aU - this.aU) / 2,
			kN = (dI.dJ - this.dJ) / 2;
		he.setTransform(1, 0, 0, 1, kM, kN), he.fillStyle = a7.jn, he.fillRect(0, this.a3N, this.aU, this.dJ - this.a3N), he.fillStyle = a7.a3W, he.fillRect(0, 0, this.aU, this.a3N), he.fillStyle = a7.a8, he.lineWidth = ag.e9, he.strokeStyle = a7
			.a8, he.strokeRect(-1, -1, this.aU + 2, this.dJ + 2), he.fillRect(0, this.a3N, this.aU, ag.e9), he.font = ad.ae.hL(1, .31 * this.a3N), ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 1), he.fillText("Choose Your Nation's Color!", Math
				.floor((this.aU - this.gap - .4 * this.a3N) / 2), Math.floor(.55 * this.a3N)), this.l0(0), he.lineWidth = ag.e9, this.a3X(0), this.a3X(1), this.a3X(2), jb.jv(Math.floor(kM + this.aU - .4 * this.a3N - this.gap), Math.floor(kN +
				.3 * this.a3N), Math.floor(.4 * this.a3N)), he.setTransform(1, 0, 0, 1, 0, 0)
	}, this.l0 = function(h) {
		var ik = this.colors[h][0],
			oG = this.colors[h][1],
			h = this.colors[h][2];
		he.fillStyle = "rgb(" + ik + "," + oG + "," + h + ")", he.fillRect(this.gap, this.a3N + this.gap, this.kU, 2 * this.kU + this.gap), he.lineWidth = ag.e9, he.strokeStyle = a7.a8, he.strokeRect(this.gap, this.a3N + this.gap, this.kU, 2 *
			this.kU + this.gap), he.fillStyle = ik + oG + h < 306 && oG < 150 ? a7.a8 : a7.wl, he.font = ad.ae.hL(1, .32 * this.a3P), ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1), he.rotate(-Math.PI / 2), he.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a3N - this.kU), Math.floor(this.gap + .5 * this.kU)), he.rotate(Math.PI / 2)
	}, this.a3X = function(h) {
		he.fillStyle = "rgb(" + (0 === h ? 150 : 2 === h ? 30 : 0) + "," + (1 === h ? 130 : 2 === h ? 30 : 0) + "," + (2 === h ? 220 : 0) + ")", he.fillRect(2 * this.gap + this.kU, this.a3N + this.gap + h * (this.gap + this.a3P), Math.floor(this
			.colors[this.a3M][h] * this.a3O / 255), this.a3P), he.strokeStyle = a7.a8, he.strokeRect(2 * this.gap + this.kU, this.a3N + this.gap + h * (this.gap + this.a3P), this.a3O, this.a3P), he.fillStyle = a7.a8, he.font = ad.ae.hL(1,
			.32 * this.a3P), ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 0), he.fillText((0 === h ? "Red: " : 1 === h ? "Green: " : "Blue: ") + this.colors[0][h].toString(), 3 * this.gap + this.kU, Math.floor(this.a3N + this.gap + h * (
			this.gap + this.a3P) + .53 * this.a3P))
	}
}

function a3Y() {
	var dJ, fF, h9, a3Z, a3a, a3b = -1;

	function a3c() {
		var o3, hC = fF.getContext("2d", {
			alpha: !0
		});
		hC.clearRect(0, 0, dJ, dJ), hC.fillStyle = a7.n7, hC.fillRect(0, 0, dJ, dJ), 0 === a3Z && (hC.fillStyle = a7.yL, hC.fillRect(0, 0, dJ, dJ)), hC.fillStyle = a7.a8, hC.fillRect(0, 0, dJ, 1), hC.fillRect(0, 0, 1, dJ), hC.fillRect(0, dJ - 1, dJ,
			1), hC.fillRect(dJ - 1, 0, 1, dJ), o3 = .9 * dJ / o0.get(0).width, hC.imageSmoothingEnabled = !0, hC.setTransform(o3, 0, 0, o3, Math.floor((dJ - o3 * o0.get(0).width) / 2), Math.floor((dJ - o3 * o0.get(0).height) / 2)), hC.drawImage(
			o0.get(0), 0, 0), hC.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3i(jY, jZ) {
		if (!jb.pr) return jY <= dJ + ag.gap && jZ >= ny.ds ? 0 : -1;
		if (jY <= 4 * dJ + ag.gap) {
			if (jZ >= ny.ds) return 0;
			if (jZ >= ny.ds - dJ - a3a * ag.gap) return 2
		} else if (jY <= 7 * dJ + ag.gap && jZ >= ny.ds - dJ - a3a * ag.gap) return 1;
		return -1
	}
	this.pr = !1, this.d = function() {
		a3Z = -1, this.pr = !1, a3a = dK.eE.eF() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		dJ = ny.dJ, (fF = document.createElement("canvas")).width = dJ, fF.height = dJ, h9 = ad.ae.hL(1, (dK.eE.eF() ? .5 : .45) * dJ), a3c()
	}, this.ji = function() {
		this.pr = !this.pr, this.pr ? (a0r.a0s.hideCMPButton(), vd.a3d(!1), e.s5 && vd.a3e && vd.a3f(!0), this.a3g()) : (a3Z = -1, a3c(), !e.sU || 1 !== e.pq || e.de || e.s5 || dK.eE.setState(1)), gb.gc = !0
	}, this.a3g = function() {
		(e.sU || e.s5) && 1 === e.pq && (hP.hS(!0), e.de || setTimeout(function() {
			gU.a3h()
		}, 0), dK.eE.setState(0))
	}, this.jX = function(jY, jZ) {
		return 0 <= (a3b = a3i(jY, jZ))
	}, this.jg = function(jY, jZ) {
		jY = a3i(jY, jZ);
		jY !== a3Z && (a3Z = jY, this.pr || a3c(), gb.gc = !0)
	}, this.a3k = function(jY, jZ) {
		var rW = a3i(jY, jZ);
		if (a3b !== rW) return !1;
		if (this.pr) {
			if (e.yg) return 0 <= rW && vd.a3d(!1), !e.s5;
			if (0 === rW) e.a3l();
			else if (1 === rW) this.ji();
			else if (2 === rW) cq.kn(1, 0);
			else {
				if (! function() {
						if (e.sU || 1 !== e.pq || e.s5 || s4.jR) return 1;
						jb.ji()
					}()) return !1;
				yd.a3m(jY, jZ) || nx.a3n(jY, jZ)
			}
			return !0
		}
		return 0 === rW && (this.ji(), !0)
	}, this.ge = function() {
		var aU;
		this.pr ? (aU = Math.floor(5.5 * dJ), he.setTransform(1, 0, 0, 1, ag.gap, ny.ds), he.fillStyle = a7.n7, he.fillRect(0, 0, aU, dJ), 0 === a3Z ? (he.fillStyle = a7.yL, he.fillRect(0, 0, 4 * dJ, dJ)) : 1 === a3Z && (he.fillStyle = a7.yL, he
				.fillRect(4 * dJ, 0, Math.floor(1.5 * dJ), dJ)), he.fillStyle = a7.a8, he.fillRect(0, 0, aU, 1), he.fillRect(0, 0, 1, dJ), he.fillRect(4 * dJ, 0, 1, dJ), he.fillRect(0, dJ - 1, aU, 1), he.fillRect(aU - 1, 0, 1, dJ), he.font =
			h9, ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 1), he.fillText(dL.al[79], 2 * dJ, .54 * dJ), aU = .4 * dJ, jb.jv(ag.gap + 4 * dJ + (1.5 * dJ - aU) / 2, ny.ds + .3 * dJ, aU), aU = 1, he.setTransform(1, 0, 0, 1, ag.gap, ny.ds -
				aU * a3a * ag.gap - aU * dJ), he.fillStyle = a7.n7, he.fillRect(0, 0, 4 * dJ, dJ), a3Z === aU + 1 && (he.fillStyle = a7.yL, he.fillRect(0, 0, 4 * dJ, dJ)), he.fillStyle = a7.a8, he.fillRect(0, 0, 4 * dJ, 1), he.fillRect(0, 0,
				1, dJ), he.fillRect(4 * dJ, 0, 1, dJ), he.fillRect(0, dJ - 1, 4 * dJ, 1), he.fillText(dL.al[79 + aU], 2 * dJ, .54 * dJ), he.setTransform(1, 0, 0, 1, 0, 0)) : he.drawImage(fF, ag.gap, ny.ds)
	}, this.s6 = function(player) {
		return 0 !== bC.e2[player] && 2 !== e.pq && bK.vD(player)
	}, this.jv = function(dr, ds, aL) {
		he.setTransform(1, 0, 0, 1, dr, ds), he.lineWidth = ag.e9, he.strokeStyle = a7.a8, he.beginPath(), he.moveTo(0, 0), he.lineTo(aL, aL), he.moveTo(0, aL), he.lineTo(aL, 0), he.stroke()
	}
}

function a3r() {
	function a3u(a3t) {
		var a43 = 4 + .03 * (1 + 1.5 * dK.eE.eF()) * dI.eC / be;
		return j3.bZ(a3t, hq.qE[1]) < a43
	}
	this.a3s = function(player, a3t) {
		return !!j3.bl(a3t) && br.cf.pb !== br.cf.q6 && br.cf.q7[player] !== br.cf.q8 && 0 !== bC.bD[player].length && !!br.qG.qH(player, a3t) && !!a3u(a3t)
	}, this.a3v = function(player, iC, a3t) {
		return !!(j3.bl(a3t) && this.a0S(player, iC) && br.qG.a3w(a3t) && a3u(a3t))
	}, this.a0S = function(player, id) {
		for (var xJ, j2 = player << 3, j4 = j2 + br.cf.q7[player], xI = br.cf.xI, m9 = br.cf.m9, h = j2; h < j4; h++)
			if (id === m9[xJ = xI[h]]) return hq.qE[3] = xJ, !0;
		return !1
	}, this.ro = function(b7) {
		var m6 = br.mR.m6;
		return !!this.a0S(e.hK, m6) && (pP.pQ.ro(m6, b7), !0)
	}, this.a3x = function(jY, jZ, a3y) {
		var h, j4, lE, xI, xb, pZ, a3z, dt, pi, a40, player = e.hK,
			aL = br.cf.q7[player];
		if (0 === aL) return !1;
		for (xI = br.cf.xI, pZ = br.cf.pZ, pi = br.cf.pi, j4 = (player = player << 3) + aL, xb = .4 * ad.ae.eB(.5) * dI.eC / be, lE = -1, h = player; h < j4; h++) a40 = xI[h], a3z = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(pi[a40]))), (dt = j3.bP(
			jY, jZ, pZ[a40])) - a3z < xb && (xb = dt, lE = a40);
		return !(lE < 0 || (a3y ? hq.a41[0] = br.cf.m9[lE] : br.mR.m6 = br.cf.m9[lE], 0))
	}, this.a42 = function(jY, jZ) {
		var h, lE, xb, pZ, a3z, dt, pi, aL = br.cf.pb;
		if (aL < 1) return -1;
		for (pZ = br.cf.pZ, pi = br.cf.pi, xb = 1e3, lE = -1, h = 0; h < aL; h++) a3z = 16 * ad.ae.eB(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(pi[h]))), (dt = j3.bP(jY, jZ, pZ[h])) < xb && dt < a3z && (xb = dt, lE = h);
		return lE
	}
}

function a44() {
	var fm = ad.color;
	this.wl = fm.ks(0, 0, 0), this.a9 = fm.yt(0, 0, 0, .7), this.n7 = fm.yt(0, 0, 0, .5), this.pF = fm.yt(0, 0, 0, .85), this.jn = fm.yt(0, 0, 0, .75), this.yz = fm.yt(0, 0, 0, .6), this.a45 = fm.yt(0, 0, 0, .35), this.a8 = fm.ks(255, 255, 255), this
		.yL = fm.yt(255, 255, 255, .3), this.hT = fm.yt(255, 255, 255, .6), this.kE = fm.yt(255, 255, 255, .4), this.rV = fm.yt(255, 255, 255, .25), this.a46 = fm.yt(255, 255, 255, .85), this.a2a = fm.yt(255, 255, 255, .75), this.a47 = fm.yt(255,
			255, 255, .15), this.z2 = fm.ks(128, 128, 128), this.a3W = fm.yt(64, 64, 64, .75), this.ys = fm.yt(88, 88, 88, .83), this.a48 = fm.yt(60, 60, 60, .85), this.a49 = fm.yt(80, 60, 60, .85), this.k3 = fm.ks(30, 255, 30), this.k2 = fm.ks(0,
			200, 0), this.z3 = fm.ks(128, 255, 128), this.a4A = fm.yt(10, 65, 10, .75), this.a2Y = fm.yt(0, 255, 0, .6), this.a4B = fm.yt(0, 255, 0, .5), this.jw = fm.yt(0, 200, 0, .5), this.w4 = fm.yt(0, 100, 0, .75), this.a4C = fm.yt(0, 60, 0, .8),
		this.yJ = fm.yt(0, 255, 0, .3), this.a4D = fm.yt(0, 180, 0, .6), this.a0o = fm.yt(0, 120, 0, .85), this.z4 = fm.ks(0, 120, 0), this.a4E = fm.yt(0, 70, 0, .85), this.a4F = fm.ks(255, 120, 120), this.hY = fm.ks(255, 160, 160), this.k5 = fm.ks(
			255, 70, 70), this.k4 = fm.ks(230, 0, 0), this.rL = fm.yt(220, 0, 0, .6), this.kG = fm.yt(255, 100, 100, .8), this.wT = fm.yt(100, 0, 0, .85), this.a4G = fm.yt(60, 0, 0, .85), this.a4H = fm.yt(200, 0, 0, .6), this.sN = fm.yt(120, 0, 0,
			.85), this.wN = fm.ks(255, 70, 10), this.a4I = fm.yt(0, 60, 60, .85), this.jx = fm.yt(10, 60, 60, .9), this.a4J = fm.yt(0, 96, 96, .75), this.a4K = fm.ks(160, 160, 255), this.yH = fm.yt(0, 40, 90, .75), this.a4L = fm.yt(0, 0, 255, .6),
		this.a4M = fm.ks(200, 200, 255), this.a4N = fm.ks(255, 120, 100), this.a4O = fm.yt(255, 255, 0, .5), this.yK = fm.yt(255, 255, 150, .2), this.wp = fm.ks(255, 255, 0), this.wR = fm.ks(255, 255, 200), this.a4P = fm.yt(200, 200, 0, .6), this
		.a4Q = fm.yt(140, 120, 0, .75), this.a4R = fm.yt(180, 160, 40, .75), this.a4S = fm.yt(70, 50, 20, .85), this.a4T = fm.yt(255, 140, 0, .75), this.a2W = fm.yt(0, 0, 0, 0)
}

function oz(a4, title, dN) {
	function click() {
		var value = 1 - a4.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, aB.aC.aD(a4.aA, value), dN(value)
	}
	var a6;
	title = title || dL.al[121], dN = dN || function() {}, this.a6 = document.createElement("p"), (a6 = this.a6).textContent = (a4.value ? "🟢 " : "⚪ ") + title, a6.style.margin = "0", a6.style.marginBottom = "0.5em", a6.style.cursor = "pointer", a6
		.addEventListener("click", click)
}

function a0W() {
	this.a4U = null, this.a4V = null, this.a4W = null, this.a4X = null, this.a4Y = null, this.a4Z = null;
	var a4a = 0;
	this.a0d = null, this.a0q = "", this.d = function(a0d) {
		this.a4U = [], this.a4V = [], this.a4W = [], this.a4X = [], this.a4Y = [0], this.a4Z = [0], a4a = 0, this.a0d = a0d, this.a0q = ""
	}, this.a4b = function(id, kC, kD, rj) {
		e.s5 || 2 === e.pq || (0 === this.a4Y[a4a] && (this.a4Z[a4a] ? (this.a4Y.push(1), this.a4Z.push(0), a4a++) : this.a4Y[a4a] = 1), this.a4U.push(id), this.a4V.push(kC), this.a4W.push(void 0 === kD ? 0 : kD), this.a4X.push(void 0 === rj ?
			0 : rj), this.a4Z[a4a]++)
	}, this.v = function() {
		0 === this.a4Y[a4a] ? this.a4Z[a4a]++ : (this.a4Y.push(0), this.a4Z.push(0), a4a++)
	}
}

function lW(di, size, cj, a4c, font) {
	var h, jV = .2,
		fF = document.createElement("canvas"),
		dv = fF.getContext("2d", {
			alpha: !1
		});
	for (fF.width = di, fF.height = di, dv.font = size + font, dv.textAlign = "center", dv.textBaseline = "middle", dv.fillStyle = "red", h = 0; h < cj.length; h++) dv.fillText(cj[h], .5 * di, .5 * di);
	return -1 < (fF = function(dw) {
		var h, ik;
		for (h = dw.data.length - 4; 0 <= h; h -= 4)
			if (ik = dw.data[h], a4c <= ik) return Math.floor(h / (4 * di));
		return -1
	}(dv.getImageData(0, 0, di, di))) && (jV = (fF - .5 * di + .1 * size) / size), Math.max(jV, 0)
}

function a4f() {
	var a4g, a4h, a4i, om, a4j;
	a4i = new a4k([.45, .27], [.5, .5], 2 / 3), a4h = [new kl("⚔️<br>Multiplayer", function() {
			a4l(0)
		}, a7.a4E), new kl("🗡️<br>Single Player", function() {
			a4l(1)
		}, a7.a4I), new kl("🔑<br>My Account", function() {
			a4l(2)
		}, a7.a4S), new kl("⚙️<br>Menu", function() {
			a4l(3)
		}, a7.a49), new kl("", function() {
			cq.kn(12)
		}, a7.pF, !1),
		new kl("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], om = new a3(aB.dF.data[122]);
	for (var h = 0; h < a4h.length; h++) a4h[h].button.style.position = "absolute";

	function a4l(aA) {
		dK.eE.setState(10), eo.eX(), o0.a1F() || o0.a1W(), 0 === aA ? cq.cf.sk() : 1 === aA ? cq.cf.si() : 2 === aA ? 0 !== dK.id || aB.dF.data[140].value ? cq.kn(8, cq.cr, new sA(16)) : cq.cf.s9(cq.cr, 16) : 3 === aA && cq.kn(1, cq.cr)
	}
	om.a6.style.position = "absolute", om.a6.style.textAlign = "center", om.a6.placeholder = "Your Kingdom's Name", this.show = function() {
		gd.setState(0), dK.eE.setState(12), a4h[4].a0x(ad.color.a3F(aB.dF.data[121].value)), this.resize(), document.body.appendChild(om.a6);
		for (var h = 0; h < a4h.length; h++) document.body.appendChild(a4h[h].button);
		1 !== dK.id || dK.dH < 5 || (a4j && gb.kH > a4j + 144e5 ? dK.mC.setState(14) : a4j = gb.kH)
	}, this.jc = function() {
		document.body.removeChild(om.a6);
		for (var h = 0; h < a4h.length; h++) document.body.removeChild(a4h[h].button)
	}, this.resize = function() {
		a4i.resize();
		var gap = .5 * ag.gap,
			a3N = 10 / 99 * .84 * a4i.aU,
			a4o = .16 * a4i.dJ,
			a4p = .19 * a4i.aU,
			dr = a4i.dr + a4p,
			a3N = a4i.ds + a3N + 3 * gap,
			aU = .5 * (a4i.aU - gap) - a4p,
			a4p = a4i.aU - 2 * a4p - a4o - gap,
			a4p = (ad.ae.lX(om.a6, dr, a3N, a4p, a4o), ad.ae.lX(a4h[4].button, dr + a4p + gap, a3N, a4o, a4o), .5 * (a4i.ds + a4i.dJ - (a3N += a4o + gap) - gap));
		ad.ae.lX(a4h[0].button, dr, a3N, aU, a4p), ad.ae.lX(a4h[1].button, dr + aU + gap, a3N, aU, a4p), ad.ae.lX(a4h[2].button, dr, a3N + a4p + gap, aU, a4p), ad.ae.lX(a4h[3].button, dr + aU + gap, a3N + a4p + gap, aU, a4p);
		ad.ae.lX(a4h[5].button, dr, a3N + a4p * 2 + gap * 2, aU * 2 + gap, a4p / 3);
		for (var h = 0; h < a4h.length; h++) a4h[h].button.style.font = ad.ae.hL(0, ad.ae.lZ(.065 * a4i.dJ)), ad.ae.eT(a4h[h].button, 5);
		om.a6.style.font = ad.ae.hL(0, ad.ae.lZ(.08 * a4i.dJ)), ad.ae.eT(om.a6, 5)
	}, this.ge = function() {
		if (gd.a4r(), rH.ge(), gX.ge(), a1f.ge(), a1d.ge(), o0.a1F()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(a4i.aU * 0.03);
				he.font = ad.ae.hL(1, size);
				he.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = he.measureText(text).width;
				he.textAlign = "left";
				he.textBaseline = "middle";
				he.fillText(text, he.canvas.width - textLength - size / 2, size);
			};
			he.imageSmoothingEnabled = !1;
			var fm = o0.a1H("territorial.io"),
				cl = .84 * a4i.aU / fm.width;
			he.setTransform(cl, 0, 0, cl, a4i.dr + .08 * a4i.aU, a4i.ds), a4g = a4g || ad.su.ls(fm, ad.su.ly, [0, 0, 0]);
			for (var dr = -1; dr <= 1; dr += 2)
				for (var ds = -1; ds <= 1; ds += 2) he.drawImage(a4g, dr, ds);
			he.drawImage(fm, 0, 0), he.imageSmoothingEnabled = !0;
			var b0 = o0.a1H("logo"),
				a4s = .6666 * cl * fm.height / b0.height,
				kO = .5 * dI.aU,
				kP = a4i.ds + .5 * cl * fm.height - .5 * a4s * b0.height;
			he.setTransform(a4s, 0, 0, a4s, kO - .6 * cl * fm.width, kP), he.drawImage(b0, 0, 0), he.setTransform(a4s, 0, 0, a4s, kO + .6 * cl * fm.width - a4s * b0.width, kP), he.drawImage(b0, 0, 0), he.setTransform(1, 0, 0, 1, 0, 0), he
				.imageSmoothingEnabled = !0
		}
	}
}

function nO() {
	var aU, dJ, a4t;

	function a57(xA, eP, a55, a4x, dx) {
		eP = a56(xA, eP + 1 + 2 * a4x & 3);
		! function(xA, w0) {
			return 1 < Math.abs(xA % aU - w0 % aU) || 1 < Math.abs(a59(xA) - a59(w0))
		}(xA, eP) && 0 === dx[eP << 2] && (dx[eP << 2] = a55)
	}

	function a59(b6) {
		return Math.floor((b6 + .5) / aU) % dJ
	}

	function a56(b6, eP) {
		return b6 + a4t[eP]
	}
	this.ib = function(aH) {
		var h, a4u, aL, a4v, a4y = aS;
		for (cn.fX.aN(cn.fX.aJ(aH)), ap.aq = aU = a4y.ci(12), ap.bj = dJ = a4y.ci(12), a4t = [-aU, -1, aU, 1], ap.fI = document.createElement("canvas"), ap.fI.width = ap.aq, ap.fI.height = ap.bj, ap.fJ = ap.fI.getContext("2d", {
				alpha: !1
			}), ap.a29 = ap.fJ.getImageData(0, 0, ap.aq, ap.bj), ap.fK = ap.a29.data, ad.eS.a2F(ap.fK), aL = a4y.ci(12), a4u = a4y.ci(5), a4v = a4z(aU * dJ - 1), h = 0; h < aL; h++) ! function(dy, b6, a4w, a4x) {
			var h, eP, a4y = aS,
				dx = ap.fK,
				a52 = b6,
				a2r = b6,
				a53 = 0,
				a54 = 1 + a4w,
				a55 = 2 - a4w;
			for (dx[b6 << 2] = a54, h = 0; h < dy; h++) eP = a4y.ci(2), b6 = a56(b6, eP), dx[b6 << 2] === a54 ? a53 % 2 == 1 && a57(a2r, a53 + 2 * a4x + 3, a55, a4x, dx) : dx[b6 << 2] = a54, a57(b6, eP, a55, a4x, dx), a57(a2r, eP, a55, a4x,
				dx), a2r = b6, a53 = eP;
			a56(b6, 0) === a52 ? (a57(b6, 0, a55, a4x, dx), a57(a52, 0, a55, a4x, dx)) : a56(b6, 1) === a52 && (a57(b6, 0, a55, a4x, dx), a57(a52, 2, a55, a4x, dx));
			0 === dy && (a57(a52, 0, a55, a4x, dx), a57(a52, 2, a55, a4x, dx))
		}(a4y.ci(a4u), a4y.ci(a4v), 1 === a4y.ci(1), 1 === a4y.ci(1));
		var dr, ds, kp, a5A, a5B, a5C, dx = ap.fK,
			a5D = !0,
			a1y = ap.eW.f0[ap.ev].a1y,
			a1z = ap.eW.f0[ap.ev].a1z;
		for (ds = 0; ds < dJ; ds++)
			for (a5A = !0, a5B = a5D, dr = a5C = 0; dr < aU; dr++) kp = 4 * ds * aU + 4 * dr, a5C <= dr && 0 < dx[kp] && (a5B = 2 === dx[kp], a5A) && (a5A = !1, a5B !== a5D) ? (a5D = a5B, a5C = dr + 1, dr = -1) : (a5B ? (dx[kp] = a1z[0], dx[1 +
				kp] = a1z[1], dx[2 + kp] = a1z[2]) : (dx[kp] = a1y[0], dx[1 + kp] = a1y[1], dx[2 + kp] = a1y[2]), dx[3 + kp] = 255);
		ap.fJ.putImageData(ap.a29, 0, 0), ap.a1A = !0, ap.a22.d(), gb.gc = !0
	}
}

function oh() {
	var ab;
	this.a5E = [], this.ab = document.createElement("div"), this.oi = function(aH, marginTop) {
		var title = document.createElement("h2");
		title.textContent = aH, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.ab.appendChild(title)
	}, this.oj = function(aH) {
		var a5F = document.createElement("p");
		return a5F.textContent = aH, a5F.style.fontSize = "0.75em", a5F.style.lineHeight = "1.2em", a5F.style.marginBottom = "0", this.ab.appendChild(a5F), a5F
	}, this.a5G = function(aa, fontSize) {
		var ab = document.createElement("div");
		ab.innerHTML = aa, ab.style.fontSize = fontSize || "1em", ab.style.lineHeight = "1.2em", this.ab.appendChild(ab)
	}, this.ox = function(a5H) {
		for (var a5I = a5H.a5I, aL = a5I.length, h = 0; h < aL; h++) this.ab.appendChild(a5I[h])
	}, this.on = function(er) {
		this.a5E.push(er), this.ab.appendChild(er.a6)
	}, this.resize = function() {
		for (var aL = this.a5E.length, h = 0; h < aL; h++) this.a5E[h].resize && this.a5E[h].resize()
	}, (ab = this.ab).style.position = "absolute", ab.style.height = "auto", ab.style.padding = "0.5em"
}

function a5J() {
	var r3, a5L, a5M, a5N, a5K = !1;

	function a5O() {
		a5K = !0, r3 = -1, a5L = new Array(4);
		for (var h = 3; 0 <= h; h--) a5L[h] = !1;
		var a5P = Math.floor(1 + .02 * dI.min);
		a5M = new Array(4), (a5N = new Array(4))[1] = a5N[3] = a5M[0] = a5M[2] = 0, a5N[0] = a5M[3] = -a5P, a5M[1] = a5N[2] = a5P
	}

	function a5R() {
		if (-1 !== r3)
			if (0 !== e.pq && sY.rY()) {
				for (var a5T = !1, h = 3; 0 <= h; h--) a5L[h] && (a5T = !0, bd += a5M[h], bf += a5N[h], x.jg(a5M[h], a5N[h]), gR.a5W());
				a5T ? gb.gc = !0 : a5V.a5U()
			} else a5V.a5U()
	}
	this.a5Q = function(aA) {
		0 !== e.pq && sY.rY() && (a5K || a5O(), a5L[aA] = !0, -1 === r3) && (r3 = setInterval(a5R, 20), a5R())
	}, this.a5S = function(aA) {
		if (0 !== e.pq && (a5K || a5O(), a5L[aA] = !1, -1 !== r3)) {
			for (var a5T = !1, h = 3; 0 <= h; h--) a5T = a5T || a5L[h];
			a5T || this.a5U()
		}
	}, this.a5U = function() {
		if (a5K && -1 !== r3) {
			for (var h = 3; 0 <= h; h--) a5L[h] = !1;
			clearInterval(r3), r3 = -1
		}
	}
}

function a5X() {
	this.a5Y = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.yQ = [a7
		.a8, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", a7.a8, "rgb(170,170,170)"
	], this.a5Z = [a7.a8, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", a7.a8, a7.wl], this.a5a = [a7.wl, a7.a8, a7.a8, a7.a8, a7.wl, a7.wl, a7.wl, a7.wl, a7.a8];
	var a5b = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		a5e = (this.a5c = ["rgba(" + a5b[0] + ",", "rgba(" + a5b[1] + ",", "rgba(" + a5b[2] + ",", "rgba(" + a5b[3] + ",", "rgba(" + a5b[4] + ",", "rgba(" + a5b[5] + ",", "rgba(" + a5b[6] + ",", "rgba(" + a5b[7] + ",", "rgba(" + a5b[8] + ",",
			"rgba(" + a5b[9] + ","
		], this.a5d = ["rgb(" + a5b[0] + ")", "rgb(" + a5b[1] + ")", "rgb(" + a5b[2] + ")", "rgb(" + a5b[3] + ")", "rgb(" + a5b[4] + ")", "rgb(" + a5b[5] + ")", "rgb(" + a5b[6] + ")", "rgb(" + a5b[7] + ")", "rgb(" + a5b[8] + ")", "rgb(" + a5b[
			9] + ")"
		], this.nQ = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.dn = [
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
	this.dp = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.e7 = new Uint8Array(e.o), this.sm = null, this.a5f = null, this.d = function(g7) {
		this.e7.fill(0), this.a5g(), e.dj && (eo.eV && eo.eW.f9 ? this.v3() : 9 === e.f ? this.a5h() : this.v(g7))
	}, this.v3 = function() {
		var h, aL = e.q;
		for (this.dp = [0, 1, 2, 3, 4, 5, 6, 7, 8], h = 0; h < aL; h++) this.e7[h] = eo.eW.f9[h]
	}, this.a5g = function() {
		for (var h = this.dp.length - 1; 0 <= h; h--) this.dp[h] = h;
		this.sm = [], this.a5f = []
	}, this.a5h = function() {
		for (var h = e.k + ug.j - 1; 0 <= h; h--) this.e7[h] = 1;
		for (h = e.k + ug.j; h < e.o; h++) this.e7[h] = 2;
		this.dp[1] = 7, this.dp[2] = 8
	}, this.v = function(g7) {
		var az = new Uint8Array(e.k),
			b0 = new Uint8Array(e.k),
			a5i = new Uint16Array(8),
			a5j = new Uint16Array(this.dp.length);
		this.a5k(g7, az, b0, a5i), this.v2(a5i), e.sU || this.a5l(a5j, az, b0), this.a5m(az, b0, a5j), e.sU ? this.a5n() : this.a5o()
	}, this.a5k = function(g7, az, b0, a5p) {
		for (var fq, a6, a5q, aL = this.dp.length - 1, aM = new Uint16Array(aL), h = e.k - 1; 0 <= h; h--) {
			for (fq = aL; 1 <= fq; fq--) aM[fq - 1] = Math.abs(4 * g7[h].ej[0] - a5e[fq][0]) + Math.abs(4 * g7[h].ej[1] - a5e[fq][1]) + Math.abs(4 * g7[h].ej[2] - a5e[fq][2]);
			for (a5q = 768, fq = aL - 1; 0 <= fq; fq--) aM[a6 = (fq + h) % aL] < a5q && (a5q = aM[a6], az[h] = a6);
			for (a5p[az[h]] += 4, a5q = 768, fq = aL - 1; 0 <= fq; fq--) aM[a6 = (fq + h) % aL] < a5q && a6 !== az[h] && (a5q = aM[a6], b0[h] = a6);
			a5p[b0[h]]++
		}
	}, this.v2 = function(a5p) {
		for (var fq, rW, aL = this.dp.length - 1, h = aL; 0 <= h; h--) this.dp[h] = h;
		for (h = aL - 1; 0 <= h; h--) a5p[h]++;
		for (h = 1; h <= aL; h++) {
			for (rW = 0, fq = 1; fq < aL; fq++) a5p[fq] > a5p[rW] && (rW = fq);
			a5p[rW] = 0, this.dp[h] = rW + 1
		}
	}, this.a5l = function(a5j, az, b0) {
		var h, fq, cy, fm, eP, a6, cl, oG, a5r = this.dp.length - 1,
			a11 = new Uint16Array(a5r),
			a5s = [],
			jJ = Math.max(e.k + 1 >> 1, 6);
		loop: for (h = 0; h < e.k; h++)
			if (null !== (cy = ad.fk.a5t(bC.tQ[h]))) {
				for (fq = this.sm.length - 1; 0 <= fq; fq--)
					if (cy === this.sm[fq] && this.a5f[fq].length < jJ) {
						this.a5f[fq].push(h);
						continue loop
					} this.sm.push(cy), a5s.push(!1), this.a5f.push([h])
			}
		for (fq = this.sm.length - 1; 0 <= fq; fq--) {
			for (eP = -1, fm = this.sm.length - 1; 0 <= fm; fm--) !a5s[fm] && (-1 === eP || this.a5f[fm].length > this.a5f[eP].length) && (eP = fm);
			for (fm = a5r - 1; 0 <= fm; fm--) a11[fm] = 1;
			for (fm = this.a5f[eP].length - 1; 0 <= fm; fm--) a11[az[this.a5f[eP][fm]]] += 3, a11[b0[this.a5f[eP][fm]]]++;
			for (h = a5r - 1; 0 <= h; h--) {
				for (a6 = eP % a5r, fm = a5r - 1; 0 <= fm; fm--) a11[fm] > a11[a6] && (a6 = fm);
				for (cl = -1, fm = e.dk; 0 < fm; fm--)
					if (this.dp[fm] === a6 + 1) {
						cl = fm;
						break
					} if (a11[a6] = 0, -1 !== cl) {
					for (oG = 0, fm = e.dk; 0 < fm; fm--) a5j[cl] > a5j[fm] && oG++;
					if (oG !== e.dk - 1) {
						for (fm = this.a5f[eP].length - 1; 0 <= fm; fm--) a5j[cl]++, this.e7[this.a5f[eP][fm]] = cl;
						break
					}
				}
			}
			a5s[eP] = !0
		}
	}, this.a5m = function(az, b0, a5j) {
		for (var h, bS, aL = this.dp.length - 1, border = p(e.k, e.dk), a5u = (0 < e.k % e.dk && border++, new Uint8Array(1 + aL)), fq = aL; 1 <= fq; fq--) a5u[this.dp[fq]] = fq;
		for (h = 0; h < e.k; h++) bS = a5u[az[h] + 1], 0 === this.e7[h] && bS <= e.dk && a5j[bS] < border && (a5j[bS]++, this.e7[h] = bS);
		for (h = 0; h < e.k; h++) bS = a5u[b0[h] + 1], 0 === this.e7[h] && bS <= e.dk && a5j[bS] < border && (a5j[bS]++, this.e7[h] = bS);
		for (fq = e.dk; 1 <= fq; fq--)
			for (h = e.k - 1; 0 <= h && !(a5j[fq] >= border); h--) 0 === this.e7[h] && (a5j[fq]++, this.e7[h] = fq)
	}, this.a5n = function() {
		var h, d1, a5p = new Uint16Array(e.dk);
		for (a5p[e.dk - 1] = e.o, h = e.dk - 2; 0 <= h; h--) a5p[h] = sj.o7[h].s;
		for (a5p[0]--, d1 = 0 === a5p[0] ? 1 : 0, h = e.k; h < e.o; h++) this.e7[h] = d1 + 1, a5p[d1]--, a5p[d1] <= 0 && d1++
	}, this.a5o = function() {
		for (var h = e.k; h < e.o; h++) this.e7[h] = 1 + h % e.dk
	}
}

function q2() {
	function a5v(h, title, type, fp, dG, dH) {
		aB.dF.data.push({
			aA: h,
			title: title,
			type: type || 0,
			fp: fp,
			value: dG || 0,
			dG: dG || 0,
			dH: dH || 0
		})
	}

	function a5w(h, title, type, fp, dG, dH) {
		aB.dF.data.push({
			aA: h,
			title: title,
			type: type,
			fp: fp,
			value: dG || "",
			dG: dG || "",
			dH: dH || 0
		})
	}

	function a5x(rY) {
		for (var h = aB.dF.data.length; h < rY; h++) aB.dF.data.push(null)
	}
	this.data = [], this.d = function() {
		a5v(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch", "Polski"], 0, 5), a5v(1, "", 1, null, 1), a5v(2, "", 0, [0, 1]), a5w(3, "Username", 2), a5v(4, "Font5", 1, ["Default", "Custom"]), a5w(5, "", 2, null, "Trebuchet MS",
				1), a5v(6, "", 0, [0, 1]), a5v(7, "", 0, [0, 1], 1), a5v(8, "", 0, [0, 1]), a5v(9, "", 1, null, 1), a5v(10, "", 1, null), a5v(11, "", 1, null, 1), a5x(100), a5w(100, "Username", 2), a5w(101, "Password", 2), a5w(102, "Emojis", 2),
			a5w(103, "Colors", 2), a5w(104, "Clan", 2), a5w(105, "AccountName", 2), a5w(106, "Password", 2), a5v(107), a5v(108), a5v(109), a5w(110, null, 2), a5v(111), a5v(112), a5v(113), a5w(114, null, 2), a5v(115), a5w(116, null, 2), a5v(117,
				null, 1), a5w(118, null, 2, null, "", 2), a5v(119, null, 1, null, 0, 1), a5w(120, null, 2), a5v(121, "CountryColor", 1, null, ~~(262144 * Math.random())), a5w(122, "Username", 2), a5v(123), a5w(124), a5v(125, null, 1, ["M1", "M5",
				"H1", "H4", "D1", "W1", "MN"
			]), a5w(126, null, 2), a5v(127, "Y-Axis Compression", 0, [0, 1], 1), a5v(128), a5v(129), a5v(130), a5v(131), a5v(132), a5w(133, null, 2), a5v(134, null, 0, null, 5), a5w(135, null, 2), a5w(136, null, 2), a5v(137), a5v(138), a5v(139),
			a5v(140), a5v(141), a5v(142), a5v(143), a5v(144), a5x(180), a5v(180, "R0", 0), a5v(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + dL.al[101], this.data[1].title = dL.al[102], this.data[2].title = dL.al[103], this.data[5].title = dL.al[104], this.data[6].title = dL.al[105], this.data[7].title = dL.al[106], this.data[8].title = dL.al[107],
			this.data[9].title = dL.al[108], this.data[10].title = dL.al[109], this.data[11].title = dL.al[110], this.data[1].fp = [dL.al[111], dL.al[112], dL.al[113], dL.al[114]], this.data[9].fp = [dL.al[112], dL.al[115], dL.al[116]], this
			.data[10].fp = [dL.al[109] + " 1", dL.al[117] + " 1", dL.al[109] + " 2", dL.al[117] + " 2"], this.data[11].fp = [dL.al[118], dL.al[119], dL.al[120]]
	}, this.aD = function(aA, value) {
		this.data[aA].value = value
	}, this.a5y = function(aA, value) {
		this.aD(aA, value), aB.dN.save(aA, String(value)), aB.dN.save(aA, String(this.data[aA].dH), !0)
	}, this.a5z = function() {
		for (var h = 0; h < this.data.length; h++) this.data[h] && (aB.dN.save(h, String(this.data[h].value)), aB.dN.save(h, String(this.data[h].dH), !0))
	}, this.a60 = function(aA) {
		return Number(this.data[aA].value)
	}, this.a61 = function(aA) {
		return String(this.data[aA].value)
	}
}

function a62() {
	this.fs = function(b8) {
		var h, cm, a63, a64, a65;
		if (b8 < 0) return "-" + this.fs(Math.abs(b8));
		if (b8 < 1e3) return b8.toString();
		for (cm = Math.floor(Math.log(b8 + .5) / Math.log(10)) + 1, a63 = Math.floor((cm - 1) / 3), a65 = (a64 = b8.toString()).substring(cm - 3, cm), h = 1; h < a63; h++) a65 = a64.substring(cm - 3 * (h + 1), cm - 3 * h) + " " + a65;
		return a64.substring(0, cm - 3 * a63) + " " + a65
	}, this.fu = function(b6, cm) {
		return b6.toFixed(cm) + "%"
	}, this.a66 = function(b8, a67) {
		return b8.toFixed(l.lM(Math.floor((void 0 === a67 ? 3 : a67) - Math.log10(Math.max(b8, 1))), 0, 8))
	}, this.a68 = function(b8, cl, cm) {
		return (b8 * cl).toFixed(cm)
	}, this.a5t = function(username) {
		var a0E, a0Q = username.indexOf("[");
		return !(a0Q < 0) && 1 < (a0E = username.indexOf("]")) - a0Q && a0E - a0Q <= 8 ? username.substring(a0Q + 1, a0E).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.a5t;
	this.wJ = function(aH) {
		for (var d1 = Math.floor(.5 * aH.length + .5), rY = Math.floor(.5 * (d1 - 1)), h = 0; h < rY; h++)
			for (var fq = -1; fq < 2; fq += 2) {
				var fm = d1 + fq * h;
				if (" " === aH[fm]) return [this.a69(aH.substring(0, fm)), this.a6A(aH.substring(fm))]
			}
		return [aH.substring(0, d1), aH.substring(d1)]
	}, this.a6A = function(aH) {
		for (var aL = aH.length, h = 0; h < aL; h++)
			if (" " !== aH[h]) return aH.substring(h);
		return aH
	}, this.a69 = function(aH) {
		for (var h = aH.length - 1; 0 <= h; h--)
			if (" " !== aH[h]) return aH.substring(0, h + 1);
		return aH
	}, this.oq = function(aH, op) {
		return aH.split("(")[0] + "(🧈 " + op.toFixed(2) + ")"
	}, this.startsWith = function(aH, a6B) {
		return aH.substring(0, a6B.length) === a6B
	}
}

function a6G() {
	cI = 0, a6C = 2048, cZ = new Uint32Array(4 * a6C), a6D = 0, a6E = new Uint32Array(a6C), (gg = new Int32Array(4))[0] = -4 * ap.aq, gg[1] = 4, gg[2] = -gg[0], gg[3] = -gg[1], a6F = new Uint8Array(ap.aq * ap.bj)
}

function a6H(player) {
	cE = player, cB = !1, a6I(), a6J();
	for (var h = cC.gy(cE) - 1; 0 <= h; h--) 0 === cC.gz(cE, h) && (cF = h, a6K());
	cB && a6L()
}

function a6L() {
	gf(), gj()
}

function a6K() {
	bz = cC.h0(cE, cF), cG = cC.zI(cE, cF), a6M(), (0 !== cI && (a6N(), a6O()) ? bw : c1)()
}

function a6O() {
	return (cV = p(cG, cI)) > e.cO
}

function a6N() {
	for (var h = cI - 1; 0 <= h; h--) a6F[p(cZ[h], 4)] = 0
}

function c1() {
	var h5;
	1 === cC.gy(cE) && pl.a33(cE), cE !== e.hK ? (bC.bc[cE] += cG, hW.a6P(cE)) : (h5 = bC.bc[cE], bC.bc[cE] += cG, hW.a6P(cE), hs.k1[13] -= bC.bc[cE] - h5), cC.a34(cE, cF)
}

function a6I() {
	var h, aL = bC.c6[cE].length;
	for (a6D = 0, h = (a6C < aL ? a6C : aL) - 1; 0 <= h; h--) a6E[a6D++] = bC.c6[cE][h]
}

function a6J() {
	for (var h = bC.c6[cE].length - 1; 0 <= h; h--) bK.gr(bC.c6[cE][h]) && bK.ca(bC.c6[cE][h], cE);
	bC.c6[cE] = []
}

function a6M() {
	cI = 0, (bz === e.o ? a6Q : a6R)()
}

function a6R() {
	for (var b6, eO, h, eP = 3; 0 <= eP; eP--)
		for (h = a6D - 1; 0 <= h; h--) eO = p(b6 = a6E[h] + gg[eP], 4), 0 === a6F[eO] && bK.gh(b6) && bK.bM(b6) === bz && (a6F[eO] = 1, cZ[cI++] = b6)
}

function a6Q() {
	for (var b6, eO, h, eP = 3; 0 <= eP; eP--)
		for (h = a6D - 1; 0 <= h; h--) eO = p(b6 = a6E[h] + gg[eP], 4), 0 === a6F[eO] && bK.bL(b6) && (a6F[eO] = 1, cZ[cI++] = b6)
}

function a6S() {
	this.a6T = function() {
		for (var b6, e7, aL = e.k, a6U = a2j.result.a6U, a6V = a6U.length, tV = (aP.aQ(40 + 16 * aL + a6V * (33 + 3 * (e.f < 7))), aP.aV(1, 1), aP.aV(4, 10), aP.aV(10, a6V), aP.aV(1, +(2 === e.a6W)), aP.aV(24, a2j.result.a6X), bC.tV), h = 0; h <
			aL; h++) aP.aV(16, tV[h]);
		var cH = bC.cH;
		for (h = 0; h < a6V; h++) b6 = a6U[h], aP.aV(9, b6), aP.aV(24, cH[b6]);
		if (e.f < 7)
			for (e7 = dm.e7, h = 0; h < a6V; h++) aP.aV(3, 7 & e7[a6U[h]]);
		ce.cf.send(ce.cf.i6, aP.aT)
	}
}

function a6Y() {
	this.id = new a6Z, this.d = function() {
		this.id.d()
	}
}

function a6a() {
	var kR, oX, eH, og;
	this.show = function() {
			kR.show(), this.resize()
		}, this.jc = function() {
			kR.jc()
		}, this.resize = function() {
			kR.resize(), oX.resize()
		}, this.lQ = function(fm) {
			2 === fm && kR.lR[0].dN()
		}, kR = new kh("⚙️ " + dL.al[81], [new kl("💾 " + dL.al[97], function() {
			cq.kn(1)
		}, a7.w4), new kl("🔄 " + dL.al[98], function() {
			cq.s3(), aB.aC.a6b(), cq.kn(2)
		})]), eH = [], (og = new oh).oi(dL.al[99]), og.oj(dL.al[100]), eH.push(og), (og = new oh).oi(aB.dF.data[0].title), og.ox(new oy(aB.dF.data[0])), eH.push(og), (og = new oh).oi(aB.dF.data[10].title), og.ox(new oy(aB.dF.data[10])), eH.push(og),
		(og = new oh).oi(aB.dF.data[1].title), og.ox(new oy(aB.dF.data[1])), eH.push(og), (og = new oh).oi(aB.dF.data[9].title), og.ox(new oy(aB.dF.data[9])), eH.push(og), (og = new oh).oi(aB.dF.data[11].title), og.ox(new oy(aB.dF.data[11])), eH
		.push(og), (og = new oh).oi(aB.dF.data[2].title), og.on(new oz(aB.dF.data[2])), eH.push(og), (og = new oh).oi(aB.dF.data[7].title), og.on(new oz(aB.dF.data[7])), eH.push(og), (og = new oh).oi(aB.dF.data[8].title), og.on(new oz(aB.dF.data[
		8])), eH.push(og), (og = new oh).oi(aB.dF.data[5].title), og.on(new a3(aB.dF.data[5])), eH.push(og), oX = new eG(kR.oZ, eH)
}

function a6c() {
	this.ge = function() {
		if (0 !== sd.cf.dX && (he.globalAlpha = Math.min(sd.cf.dX / 580, 1), he.drawImage(sd.cf.dY, 1 + gR.gS(), 1 + gR.gT()), he.globalAlpha = 1, e.de)) {
			for (var kM = bd / be, kN = bf / be, kO = (dI.aU + bd) / be, kP = (dI.dJ + bf) / be, eO = sd.cf.dW * be, dZ = sd.cf.dZ, h = e.k - 1; 0 <= h; h--) ! function(h, eO, kM, kN, kO, kP, dZ) {
				var highlight = settings.highlightClanSpawns && clanFilter.inOwnClan[h];
				if (highlight) eO *= 2;
				0 === bC.e2[h] || 0 === bC.cH[h] || (kO = dI.aU * ((bC.e3[h] + bC.e4[h] + 1) / 2 - kM) / (kO - kM) - .5 * eO, kM = dI.dJ * ((bC.e5[h] + bC.e6[h] + 1) / 2 - kN) / (kP - kN) - .5 * eO, kO > dI.aU) || kM > dI.dJ || kO < -eO ||
					kM < -eO || (he.setTransform(highlight ? be * 2 : be, 0, 0, highlight ? be * 2 : be, kO, kM), he.drawImage(dZ[e.dj ? dm.e7[h] : 1], 0, 0))
			}(h, eO, kM, kN, kO, kP, dZ);
			he.setTransform(be, 0, 0, be, 0, 0)
		}
	}
}

function p6(player) {
	a6g(player), a6h(player), a6i(player), pl.a33(player), vT.a6j(player), cC.clear(player), br.pd.a6k(player)
}

function a6g(player) {
	bK.vD(player) && (bC.tV[player] = a6l.dT.a6m(), e.a6n++);
	var a6o = cC.a6p(player);
	0 === a6o.length ? player === e.hK && a6q() : (a6r(player, a6o), a6s(player, a6o))
}

function a6q() {
	hs.k1[17] += bC.bc[e.hK] + cC.a6t(e.hK), kJ.show(!1, !1, !1, !0), hR.a6u()
}

function a6r(player, a6o) {
	for (var h = a6o.length - 1; 0 <= h; h--) cC.a6v(a6o[h], player)
}

function a6w(a6o) {
	for (var aA = 0, h = a6o.length - 1; 1 <= h; h--) bC.cH[a6o[h]] > bC.cH[a6o[aA]] && (aA = h);
	return aA
}

function a6s(player, a6o) {
	var h, wu, a6x = a6o[a6w(a6o)];
	if (9 === e.f && 1 === dm.e7[player] && t.a6y(8) && ug.r(a6x), player === e.hK) 2 !== bC.hc[player] && g8.vr(a6x, 1), a6q();
	else {
		for (wu = !1, h = a6o.length - 1; 0 <= h; h--)
			if (a6o[h] === e.hK) return wu = !0, void g8.vr(player, 0);
		!wu && player < e.k && 2 !== bC.hc[player] && g8.wO(0, player, a6x)
	}
}

function a6i(player) {
	bC.e2[player] = bC.bc[player] = 0, bC.c6[player] = null, bC.c4[player] = null, bC.bD[player] = null, bC.c8[player] = null, vS.a6z(player)
}

function a6h(player) {
	for (var b6, ds, dr = bC.e4[player]; dr >= bC.e3[player]; dr--)
		for (ds = bC.e6[player]; ds >= bC.e5[player]; ds--) b6 = 4 * (ds * ap.aq + dr), bK.gq(player, b6) && (bK.tK(b6), bC.cH[player]--)
}

function a70(aZ, a71, bb) {
	var pB, h, a72 = new Array(a71.length),
		eH = new Array(a71.length);
	for (this.resize = function() {
			for (var aL = a71.length, h = 0; h < aL; h++) 0 < h && ad.ae.eT(a72[h], 8)
		}, pB = document.createElement("div"), aZ.style.overflowX = "hidden", aZ.style.overflowY = "auto", ! function() {
			var h, eP, aL = a71.length;
			for (h = 0; h < aL; h++) {
				a72[h] = document.createElement("div"), a72[h].style.display = "flex", a72[h].style.width = "100%", a72[h].style.height = "2.5em", a72[h].style.backgroundColor = h % 2 == 0 ? a7.a3W : a7.a45, eH[h] = new Array(a71[0].length);
				for (var d1 = 0; d1 < a71[0].length; d1++) eH[h][d1] = eP = document.createElement("div"), eP.style.display = "flex", eP.style.width = "100%", eP.style.height = "100%", eP.style.justifyContent = "center", eP.style.alignItems =
					"center", eP.innerHTML = a71[h][d1], 0 < d1 && ad.ae.eT(eP, 4), a72[h].appendChild(eP)
			}
		}(), h = 0; h < a71.length; h++) pB.appendChild(a72[h]);
	aZ.appendChild(pB)
}

function a74() {
	var r2 = 0,
		a75 = 0;
	this.a76 = function(dr, ds) {
		r2 = dr, a75 = ds
	}, this.a77 = function(a78) {
		e.s5 || jb.pr || (ad.hj.a79(0) || ad.hj.a79(1)) && ad.hj.m8(e.hK) && (ny.jX(r2, a75) ? ny.a7A = !1 : function(a78) {
			var bN = j3.bg(r2),
				bO = j3.bh(a75),
				b7 = j3.bk(bN, bO),
				bJ = j3.bm(b7);
			j3.bi(bN, bO) && (e.de ? bK.gr(bJ) && pP.pQ.rl(b7) : bK.vH(bJ) || (bK.gn(bJ) || a78 ? br.a0R.a3s(e.hK, b7) && pP.pQ.rn(ny.zD(), b7) : bK.bL(bJ) ? h1(e.hK) ? pP.pQ.pR(ny.zD(), e.o) : gw(e.hK, e.o) ? vP.pT(e.o, ny.zD()) : br.a0R
				.a3s(e.hK, b7) && pP.pQ.rn(ny.zD(), b7) : (bN = bK.bM(bJ)) !== e.hK && (gu(bN, e.hK) ? h2(e.hK, bN) ? pP.pQ.pR(ny.zD(), bN) : gw(e.hK, bN) ? vP.pT(bN, ny.zD()) : br.a0R.a3s(e.hK, b7) && pP.pQ.rn(ny.zD(), b7) : br
					.a0R.a3s(e.hK, b7) && pP.pQ.rn(ny.zD(), b7))))
		}(a78))
	}
}

function a7C() {
	function a7E(map, dr, ds, aU, dJ) {
		map >= ap.ew || (ap.ev === map && (he.fillStyle = a7.a4J, he.fillRect(dr, ds, aU, dJ), he.fillStyle = a7.a8), he.strokeRect(dr, ds, aU, dJ), he.fillText(ap.eW.f0[map].name, Math.floor(dr + .5 * aU), Math.floor(ds + .55 * dJ)))
	}
	this.jR = !1, this.o6 = [0, 0, 0, 0], this.show = function() {
		this.jR = !0, this.resize(), gb.gc = !0
	}, this.resize = function() {
		var h6 = p(ap.ew + ap.ew % 2, 2),
			h6 = dI.dJ - h6 * ag.gap;
		dK.eE.eF() ? this.o6[2] = Math.floor(.75 * dI.min) : this.o6[2] = Math.floor(.5 * dI.min), this.o6[3] = Math.floor(1.25 * this.o6[2]), this.o6[3] > h6 && (this.o6[3] = h6, this.o6[2] = Math.floor(h6 / 1.2)), this.o6[0] = Math.floor((dI
			.aU - this.o6[2]) / 2), this.o6[1] = Math.floor((dI.dJ - this.o6[3]) / 2)
	}, this.jg = function(dr, ds) {
		return !(dr < this.o6[0] || ds < this.o6[1] || dr > this.o6[0] + this.o6[2] || ds > this.o6[1] + this.o6[3])
	}, this.jX = function(dr, ds) {
		var jJ, h6 = p(ap.ew + ap.ew % 2, 2);
		return gb.gc = !0, dr < this.o6[0] || ds < this.o6[1] || dr > this.o6[0] + this.o6[2] || ds > this.o6[1] + this.o6[3] ? !(this.jR = !1) : (jJ = Math.floor(.17 * this.o6[3]), ds < this.o6[1] + jJ ? dr > this.o6[0] + this.o6[2] - jJ && (
			this.jR = !1) : (ds = (ds = Math.floor(h6 * (ds - this.o6[1] - jJ - .00576 * dI.eC) / (this.o6[3] - jJ - .01152 * dI.eC))) < 0 ? 0 : h6 - 1 < ds ? h6 - 1 : ds, dr > this.o6[0] + this.o6[2] / 2 && (ds += h6), ds >= ap.ew || ap
			.aQ(ds, Math.floor(16384 * Math.random()))), !0)
	}, this.ge = function() {
		var h, kN, jJ = Math.floor(.17 * this.o6[3]),
			h6 = p(ap.ew + ap.ew % 2, 2),
			gap = .6 * .01152 * dI.eC,
			jK = (this.o6[3] - jJ - (h6 + 1) * gap) / h6,
			jF = Math.floor((this.o6[2] - 3 * gap) / 2);
		for (he.lineWidth = ag.e9, ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1), he.fillStyle = a7.jn, he.fillRect(this.o6[0], this.o6[1] + jJ, this.o6[2], this.o6[3] - jJ), he.fillStyle = a7.a4J, he.fillRect(this.o6[0], this.o6[1], this.o6[
				2], jJ), he.strokeStyle = a7.a8, he.strokeRect(this.o6[0], this.o6[1], this.o6[2], this.o6[3]), he.fillStyle = a7.a8, he.fillRect(this.o6[0], this.o6[1] + jJ, this.o6[2], 2), he.font = ad.ae.hL(1, .48 * jJ), he.fillText("Maps",
				Math.floor(this.o6[0] + this.o6[2] / 2), Math.floor(this.o6[1] + .55 * jJ)), he.font = ad.ae.hL(1, .48 * jK), h = h6 - 1; 0 <= h; h--) kN = Math.floor(this.o6[1] + jJ + gap + h * (jK + gap)), a7E(h, this.o6[0] + gap, kN, jF, jK),
			a7E(h + h6, this.o6[0] + jF + 2 * gap, kN, jF, jK);
		jb.jv(Math.floor(this.o6[0] + this.o6[2] - .7 * jJ), Math.floor(this.o6[1] + .3 * jJ), Math.floor(.4 * jJ)), he.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function a7F() {
	this.fX = new a7G, this.co = new a7H, this.d = function() {
		this.fX.d()
	}
}

function a7I() {
	var a7J, a7K, a7L, a7M, a7N, a7O, a7P, eH, a7R, a7T, a7U, a7V, a7X, a7Y, a7Z, a7a, a7b, a7Q = 48,
		a7W = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		uN = [0, 0, 0, 0];

	function a7g(h, wc) {
		h = a7P[h].getContext("2d", {
			alpha: !0
		});
		h.clearRect(0, 0, a7Q, a7Q), z.dx.wK(wc, h, 0, 0, a7Q)
	}

	function a7f(h, du) {
		var h = a7P[h].getContext("2d", {
				alpha: !0
			}),
			zoom = (h.clearRect(0, 0, a7Q, a7Q), a7Q / du.width),
			h5 = a7Q / du.height,
			zoom = h5 < zoom ? h5 : zoom;
		h.imageSmoothingEnabled = !0, h.setTransform(zoom, 0, 0, zoom, Math.floor((a7Q - zoom * du.width) / 2), Math.floor((a7Q - zoom * du.height) / 2)), h.drawImage(du, 0, 0), h.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7m(fm, ik, a7o, dv) {
		dv.beginPath(), dv.moveTo(fm, fm), dv.lineTo(fm + Math.cos(a7o) * ik, fm + Math.cos(a7o + 1.5 * Math.PI) * ik), dv.stroke()
	}

	function a7w() {
		if (7 === gd.mw()) {
			for (var az, du, dv, zoom, h5, d1 = -1, h = eH.length - 1; 0 <= h; h--)
				if (null === eH[h].fF) {
					d1 = h;
					break
				} - 1 !== d1 && (null !== (az = a7s(eH[d1].a0f, eH[d1].ex)) ? eH[d1].fF = az : (az = {
					aq: ap.aq,
					bj: ap.bj,
					fI: ap.fI,
					fJ: ap.fJ,
					a29: ap.a29,
					fK: ap.fK,
					ev: ap.ev,
					fH: ap.fH
				}, ap.aQ(eH[d1].a0f, eH[d1].ex), ap.a22.a1x(), (du = document.createElement("canvas")).width = 128, du.height = 128, dv = du.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / ap.aq) < (h5 = 128 / ap.bj) && (zoom = h5), dv.imageSmoothingEnabled = !0, dv.setTransform(zoom, 0, 0, zoom, (128 - zoom * ap.aq) / 2, (128 - zoom * ap.bj) / 2), dv.drawImage(ap.fI, 0, 0), ap.aq = az.aq, ap
				.bj = az.bj, ap.fI = az.fI, ap.fJ = az.fJ, ap.a29 = az.a29, ap.fK = az.fK, ap.ev = az.ev, ap.fH = az.fH, eH[d1].fF = du), gb.gc = !0)
		}
	}

	function a7s(a0f, ex) {
		for (var h = eH.length - 1; 0 <= h; h--)
			if (null !== eH[h].fF && eH[h].a0f === a0f && eH[h].ex === ex) return eH[h].fF;
		return null
	}
	this.d = function() {
		var h;
		for (a7b = 0, a7T = -1, gd.setState(7), eH = [], this.resize(), a7P = new Array(13), h = a7P.length; 0 <= h; h--) a7P[h] = document.createElement("canvas"), a7P[h].width = a7Q, a7P[h].height = a7Q;
		for (h = 0; h < 7; h++) ! function(s) {
			var a7k, dv = a7P[s - 2].getContext("2d", {
					alpha: !0
				}),
				a7j = 1.5 * Math.PI,
				fm = Math.floor(.5 * a7Q),
				ik = Math.floor(.48 * a7Q);
			dv.lineWidth = 2, dv.strokeStyle = a7.a8, dv.clearRect(0, 0, a7Q, a7Q);
			for (var h = 0; h < s; h++) a7k = a7j + 2 * Math.PI / s,
				function(h, fm, ik, a7j, a7k, dv) {
					dv.fillStyle = dm.a5Y[h], dv.beginPath(), dv.arc(fm, fm, ik, a7j, a7k), dv.lineTo(fm, fm), dv.fill()
				}(h + 1, fm, ik, a7j, a7k, dv), 0 !== h && a7m(fm, ik, a7j, dv), a7j = a7k;
			a7m(fm, ik, 1.5 * Math.PI, dv),
				function(fm, ik, dv) {
					dv.beginPath(), dv.arc(fm, fm, ik, 0, 2 * Math.PI), dv.stroke()
				}(fm, ik, dv)
		}(h + 2);
		a7f(7, o0.get(4)), a7g(8, z.a0.a1 + z.a0.a7h), a7g(9, z.a0.a1 + z.a0.a2), a7g(10, 1024 - z.a0.a7i), a7f(11, o0.get(19)), a7f(12, o0.get(20)), gb.gc = !0
	}, this.a7d = function() {
		this.o9(), ce.cf.n2(3240), gd.setState(0), cq.kn(5, 5)
	}, this.o9 = function() {
		eH = [], a7P = []
	}, this.a7p = function() {
		return a7V
	}, this.resize = function() {
		var a05, a4u, lK, a7q;
		for (a7L = [0, 0], a7R = [0, 0, 0, 0], a7a = dK.eE.eF() ? (a7U = Math.floor(.8 * .4 * dI.eC), a7V = Math.floor(.56 * a7U), a7R[0] = ag.gap, dI.aU < dI.dJ ? (a7R[1] = a7V + 2 * ag.gap, a7R[2] = dI.aU - 3 * a7R[0], a7R[3] = a1d.gT() - 3 *
				ag.gap - a7V, a7Y = Math.floor(.95 * a7V), a7Z = Math.floor((dI.aU - a7U - ag.gap) / 2), Math.floor(ag.gap + a7V / 2)) : (a7R[1] = ag.gap, a7R[2] = dI.aU - 3 * ag.gap - a7U, a7R[3] = a1d.gT() - 2 * ag.gap, a7Y = Math.floor(
				.8 * a7U), a7R[3] - a7V < a7U && (a7Y = Math.floor(.8 * (a7R[3] - a7V)), a7Y = hd(a7V, a7Y)), a7Z = Math.floor(dI.aU - a7U / 2 - ag.gap), hd(a7a = Math.floor(ag.gap + a7V + (a7R[3] - a7V) / 2), Math.floor(a7V + 2 * ag
				.gap + a7Y / 2)))) : (a7U = Math.floor(.2016 * dI.eC), a7V = Math.floor(.56 * a7U), a7R[2] = Math.floor(.5 * dI.aU), a7R[3] = Math.floor(.5 * dI.dJ), a7R[1] = Math.floor(.45 * (dI.dJ - a7R[3])), a7R[0] = Math.floor((dI.aU - a7R[
				2]) / 2), a7Y = Math.floor(.75 * a7V), a7Z = Math.floor(dI.aU / 2), Math.floor(a7R[1] + a7R[3] + (dI.dJ - a7R[3] - a7R[1]) / 2)), a7X = ad.ae.hL(1, .65 * a7V / 4), a05 = a4u = 1; a05 * a4u < eH.length;) a7R[3] / (a4u + 1) < a7R[
			2] / (a05 + 1) ? a05++ : a4u++;
		lK = (a7R[2] - (a05 - 1) * ag.gap) / a05, a7q = (a7R[3] - (a4u - 1) * ag.gap) / a4u, a7J = lK < a7q ? lK : a7q, a7K = Math.floor(a7J), a7O = ad.ae.hL(1, .5 * a7J / 5), a7L[0] = a05, a7L[1] = a4u, a7M = a7R[0] + Math.floor((a7R[2] - a7L[
			0] * a7J - (a7L[0] - 1) * ag.gap) / 2), a7N = a7R[1] + Math.floor((a7R[3] - a7L[1] * a7J - (a7L[1] - 1) * ag.gap) / 2)
	}, this.aD = function(a7r, b6) {
		var h, h5, fF, aL = eH.length;
		for (uN = a7r, h = 0; h < b6.length; h++) fF = a7s(b6[h].ev, b6[h].fH), eH.push({
			a7t: b6[h].id,
			eg: b6[h].eg,
			a0c: b6[h].uT,
			a0f: b6[h].ev,
			ex: b6[h].fH,
			joined: b6[h].uU,
			a7u: b6[h].n9,
			uV: b6[h].uV,
			fF: fF,
			uM: b6[h].uM,
			uW: b6[h].uW,
			uX: b6[h].uX
		});
		for (h = aL - 1; 0 <= h; h--) eH.shift();
		if (-1 !== a7T)
			for (h5 = a7T, a7T = -1, h = eH.length - 1; 0 <= h; h--)
				if (eH[h].a7t === h5) {
					a7T = h5;
					break
				}(eH.length > a7b || eH.length < a7b) && (a7b = eH.length, this.resize()), this.a7v(), gb.gc = !0
	}, this.a7v = function() {
		for (var h = eH.length - 1; 0 <= h; h--) null === eH[h].fF && setTimeout(a7w, 0)
	}, this.jX = function(dr, ds) {
		return 4 * ((dr - a7Z) * (dr - a7Z) + (ds - a7a) * (ds - a7a)) <= a7Y * a7Y ? (this.a7d(), n1.jg(dr, ds, !1), !0) : function(dr, ds) {
			var d1, fq, kM, kN;
			if (0 !== eH.length) {
				var h = 0;
				for (kN = a7N, fq = 0; fq < a7L[1]; fq++) {
					for (kM = a7M, d1 = 0; d1 < a7L[0]; d1++) {
						if (kM < dr && dr < kM + a7J && kN < ds && ds < kN + a7J) return ce.mr.a7y(eH[h].a7t), a7T = eH[h].a7t !== a7T ? eH[h].a7t : -1, gb.gc = !0;
						if (++h >= eH.length) return !1;
						kM += a7J + ag.gap
					}
					kN += a7J + ag.gap
				}
			}
			return !1
		}(dr, ds)
	}, this.ge = function() {
		var d1, fq, dr, ik, zoom, h = 0,
			ds = a7N;
		if (he.imageSmoothingEnabled = !0, he.lineWidth = 3, ik = Math.floor(.5 * a7Y), he.fillStyle = a7.n7, he.beginPath(), he.arc(a7Z, a7a, ik, 0, 2 * Math.PI), he.fill(), he.strokeStyle = a7.a8, he.beginPath(), he.arc(a7Z, a7a, ik, 0, 2 *
				Math.PI), he.stroke(), ik = o0.get(0).height, zoom = .6 * a7Y / ik, he.setTransform(zoom, 0, 0, zoom, Math.floor(a7Z - .56 * zoom * o0.get(0).width), Math.floor(a7a - .5 * zoom * ik)), he.drawImage(o0.get(0), 0, 0), he
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				he.fillStyle = a7.n7, he.fillRect(dI.aU - a7U - ag.gap, ag.gap, a7U, a7V), 0 <= a7T ? (he.fillStyle = a7.a4B, he.fillRect(dI.aU - a7U - ag.gap, ag.gap, a7U, Math.floor(.25 * a7V))) : (he.fillStyle = a7.a4O, he.fillRect(dI.aU -
					a7U - ag.gap, ag.gap + Math.floor(.25 * a7V), a7U, Math.floor(.25 * a7V)));
				he.strokeStyle = a7.a8, he.strokeRect(dI.aU - a7U - ag.gap, ag.gap, a7U, a7V), he.fillStyle = a7.a8, he.font = a7X, ad.ae.textBaseline(he, 1);
				for (var ds, a82 = Math.floor(.04 * a7U), vh = Math.floor(.08 * a7V), h = 3; 0 <= h; h--) ds = Math.floor(ag.gap + (h + 1) * (a7V + 2 * vh) / 5 - vh), ad.ae.textAlign(he, 0), he.fillText(a7W[h], dI.aU - a7U - ag.gap + a82, ds), ad
					.ae.textAlign(he, 2), he.fillText(ad.fk.fs(uN[h]), dI.aU - ag.gap - a82, ds)
			}(), 0 !== eH.length)
			for (fq = 0; fq < a7L[1]; fq++) {
				for (dr = a7M, d1 = 0; d1 < a7L[0]; d1++) {
					if (! function(h, dr, ds) {
							var zoom, fq, a83, a85, a86;
							null === eH[h].fF ? (he.fillStyle = a7.n7, he.fillRect(dr, ds, a7K, a7K)) : (zoom = a7K / 128, he.setTransform(zoom, 0, 0, zoom, dr, ds), he.drawImage(eH[h].fF, 0, 0), he.setTransform(1, 0, 0, 1, 0, 0));
							a7T === eH[h].a7t ? (function(dr, ds) {
								var jF = Math.floor(.2 * a7K),
									jG = Math.floor(.3 * jF);
								he.fillStyle = a7.a4C, he.fillRect(dr + a7K - jF, ds, jF, jF), he.fillStyle = a7.wl, he.fillRect(dr + a7K - jF, ds, 2, jF), he.fillRect(dr + a7K - jF, ds + jF - 2, jF, 2), jb.jv(dr + a7K - jF + jG, ds + jG,
									jF - 2 * jG), he.setTransform(1, 0, 0, 1, 0, 0)
							}(dr, ds), he.lineWidth = 3, he.fillStyle = a7.a4C) : he.fillStyle = a7.a9;
							a85 = Math.floor(a7J / 4), he.fillRect(dr, ds, a85, a85), a86 = Math.floor(ds + .8 * a7J), he.fillRect(dr, a86, a7K, Math.floor(a7J / 5)),
								function(h, dr, ds) {
									var zoom;
									eH[h].a0c && (h = o0.get(4), zoom = .5 * a7J / h.width, he.setTransform(zoom, 0, 0, zoom, Math.floor(dr + (a7J - zoom * h.width) / 2), Math.floor(ds + (a7J - zoom * h.height) / 2)), he.globalAlpha = .6, he
										.drawImage(h, 0, 0), he.globalAlpha = 1, he.setTransform(1, 0, 0, 1, 0, 0))
								}(h, dr, ds);
							var a88 = new Array(eH[h].uM);
							if (eH[h].uM) {
								for (fq = a83 = 0; fq < eH[h].uM; fq++) eH[h].uW[fq] = ad.hC.wX(eH[h].uW[fq], a7O, .4 * a7J), a88[fq] = ("" === eH[h].uW[fq] ? "other: " : "[" + eH[h].uW[fq] + "]: ") + eH[h].uX[fq];
								for (fq = 0; fq < eH[h].uM; fq++) a83 = Math.max(a83, jk.measureText(a88[fq], a7O));
								a83 += .05 * a7J, fq = 5 === eH[h].uM, a85 = fq ? ds + a85 : Math.max(ds + .8 * a7J - .11 * eH[h].uM * a7J, ds + a85), a86 = fq ? a86 : Math.min(a85 + .11 * eH[h].uM * a7J + .05 * a7J, a86), he.fillRect(dr, a85,
									a83, a86 - a85)
							}
							for (he.font = a7O, ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 0), he.fillStyle = a7.a4K, he.fillText(eH[h].joined.toString(), Math.floor(dr + .22 * a7J), Math.floor(ds + .9 * a7J)), he.fillStyle = a7.a8, fq =
								0; fq < eH[h].uM; fq++) he.fillText(a88[eH[h].uM - fq - 1], Math.floor(dr + .03 * a7J), Math.floor(ds + .77 * a7J - .11 * fq * a7J));
							ad.ae.textAlign(he, 2), he.fillStyle = a7.a4F, he.fillText(eH[h].a7u.toString(), Math.floor(dr + .81 * a7J), Math.floor(ds + .9 * a7J)), he.strokeStyle = a7T === eH[h].a7t ? a7.jw : a7.hT, he.strokeRect(dr, ds, a7K,
								a7K), a86 = Math.floor(.16 * a7J), zoom = a86 / a7Q, he.setTransform(zoom, 0, 0, zoom, Math.floor(dr + .33 * a86), Math.floor(ds + .33 * a86)), a7P.length > eH[h].eg && he.drawImage(a7P[eH[h].eg], 0, 0);
							he.setTransform(zoom, 0, 0, zoom, Math.floor(dr + .15 * a86), Math.floor(ds + a7J - 1.08 * a86)), he.drawImage(a7P[11], 0, 0), he.setTransform(zoom, 0, 0, zoom, Math.floor(dr + a7J - 1.05 * a86), Math.floor(ds + a7J -
								1.15 * a86)), he.drawImage(a7P[12], 0, 0), he.setTransform(1, 0, 0, 1, 0, 0)
						}(h, Math.floor(dr), Math.floor(ds)), ++h >= eH.length) return;
					dr += a7J + ag.gap
				}
				ds += a7J + ag.gap
			}
	}
}

function a89() {
	var gap, jQ, dr = [0, 0, 0, 0, 0],
		ds = [0, 0, 0, 0, 0],
		cl = [1, 1, 1, 1, 1],
		b8 = [!0, !0, !1, !1, !1],
		fm = (this.rj = [!0, !0, !1, !1, !1], null);
	this.dc = function(du, a8A) {
		fm = du, b8 = a8A, jQ = [sC.sD, sC.sE, sC.a8B, sC.sF, sC.a8C], this.d()
	}, this.d = function() {
		if (o0.a1F()) {
			var h, jF = Math.floor((dK.eE.eF() ? .261 : .195) * dI.eC),
				jG = Math.floor(.9 * jF),
				jJ = Math.floor(.17 * jG);
			if (gap = dK.eE.eF() ? 2 * ag.gap : ag.gap, cl[0] = jF / fm[0].width, cl[1] = jG / fm[1].width, cl[2] = jJ / fm[2].height, cl[3] = jJ / fm[3].height, cl[4] = jJ / fm[4].height, cl[3] *= 1.07, dr[0] = gap, dr[1] = gap, dr[2] = gap, dr[
					3] = gap, dr[4] = Math.floor(2 * gap + cl[3] * fm[3].width), ds[0] = gap, ds[1] = ds[0] + gap + cl[0] * fm[0].height, ds[2] = ds[1] + gap + cl[1] * fm[1].height, ds[3] = ds[2] + gap + cl[2] * fm[2].height, ds[4] = ds[3], !b8[
					0])
				for (h = 0; h < 5; h++) ds[h] -= cl[0] * fm[0].height + gap;
			if (!b8[1])
				for (h = 2; h < 5; h++) ds[h] -= cl[1] * fm[1].height + gap
		}
	}, this.jR = function() {
		return !(7 === gd.mw() && dK.eE.eF())
	}, this.jX = function(bQ, bR, a8D) {
		if (fm && this.jR())
			for (var h = b8.length - 1; 0 <= h; h--)
				if (b8[h] && this.rj[h] && dr[h] < bQ && ds[h] < bR && bQ < dr[h] + cl[h] * fm[h].width && bR < ds[h] + cl[h] * fm[h].height) return cq.kn(9, cq.cr, new a8E("You are leaving Territorial.io.", ad.ae.ld(jQ[h]))), !0;
		return !1
	}, this.ge = function() {
		if (fm && this.jR()) {
			var h;
			for (he.imageSmoothingEnabled = !0, h = 0; h < 5; h++) b8[h] && this.rj[h] && (he.setTransform(cl[h], 0, 0, cl[h], dr[h], ds[h]), he.drawImage(fm[h], 0, 0));
			he.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function a8F() {
	var a8I, a8K;
	this.a8G = 5, this.a8H = this.a8G - 1, this.mp = this.a8G + this.a8H, this.mo = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.a8J = null;

	function a8O(h) {
		return a8K[h].a5K && a8I[h].a8O()
	}

	function a8Q(fU) {
		a8K[fU].kH = gb.kH, a8K[fU].i0 = !1
	}
	this.i6 = 0, this.uR = 0, this.d = function() {
		this.a8J = new Array(this.a8G);
		this.a8J[0] = "territorial.io";
		var h, a24 = t.a25(0);
		for (t.a26(0), h = 1; h < this.a8G; h++) this.a8J[h] = ni.ij() + ".territorial.io";
		for (t.a26(a24), a8I = new Array(this.mp), a8K = new Array(this.mp), h = this.mp - 1; 0 <= h; h--) a8K[h] = {
			a5K: !1,
			kH: 0,
			i0: !1
		};
		this.mq(0, 0)
	}, this.a8M = function(h) {
		return a8I[h]
	}, this.i2 = function() {
		return this.uR < this.a8G ? this.uR : this.uR - this.a8H
	}, this.v = function() {
		for (var h = this.mp - 1; 0 <= h; h--) this.mk(h) && gb.kH > a8K[h].kH + 15e3 && ce.wb.hz(h, a8K[h].i0);
		!this.mk(0) && gb.kH > a8K[0].kH + 8e3 && (a8K[0].kH = gb.kH, this.mq(0, 0))
	}, this.mq = function(fU, sl) {
		if (a8K[fU].a5K) {
			if (a8I[fU].a8O()) return a8I[fU].a8P(sl), a8I[fU].mk();
			a8I[fU].jc()
		}
		return this.a8N(fU, sl), !1
	}, this.a8N = function(fU, sl) {
		a8K[fU].a5K = !0, a8Q(fU), a8I[fU] = new a8R, a8I[fU].d(fU, sl)
	}, this.a8P = function(fU, sl) {
		a8O(fU) && a8I[fU].a8P(sl)
	}, this.a8S = function(fU, sl) {
		ce.fR.qk(fU)
	}, this.mk = function(h) {
		return a8K[h].a5K && a8I[h].mk()
	}, this.send = function(fU, aT) {
		a8Q(fU), a8I[fU].send(aT)
	}, this.a8T = function(fU) {
		8 === gd.mw() && (a8K[fU].i0 = !0, ce.vb.eV = !0)
	}, this.close = function(fU, a8U) {
		a8O(fU) && a8I[fU].close(a8U)
	}, this.cg = function(fU, a8U) {
		my.mz(a8U), a8O(fU) && a8I[fU].close(a8U)
	}, this.n2 = function(a8U) {
		for (var h = this.mp - 1; 0 <= h; h--) this.close(h, a8U)
	}, this.a8V = function(fU, a8U) {
		for (var h = this.mp - 1; 0 <= h; h--) h !== fU && this.close(h, a8U)
	}, this.a8W = function() {
		this.close(this.i6, 3246)
	}, this.a8X = function(fU, a6) {
		a8I[fU].jc(), my.a8Y(fU, a6.code)
	}
}

function a8Z(data) {
	var kR, a8a, a1l;

	function a8b(b4) {
		var j2 = b4 < 0 ? parseInt(data.data[0][0]) - 1 + b4 : parseInt(data.data[data.data.length - 1][0]);
		cq.kn(8, 0, new sA(21, {
			ch: data.ch,
			j2: j2,
			j4: j2 + Math.abs(b4) - 1
		}))
	}
	this.show = function() {
		kR.show(), this.resize()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), a8a.resize()
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, a1l = [new kl("❌ " + dL.al[92], function() {
		cq.a0m()
	}), new kl("⬆️ Prev 100 (🧈 1.01)", function() {
		a8b(-100)
	}), new kl("⬆️ Prev 10 (🧈 0.11)", function() {
		a8b(-10)
	}), new kl("⬇️ Next 10 (🧈 0.11)", function() {
		a8b(10)
	}), new kl("⬇️ Next 100 (🧈 1.01)", function() {
		a8b(100)
	}), new kl("🛠️ Custom", function() {
		cq.kn(11, 10, new a8c({
			ch: data.ch
		}))
	})], kR = new kh(data.title, a1l), a8a = new a70(kR.oZ, data.data)
}

function a8d() {
	var aT, a8e, a8f, a8g;
	this.i3 = 0, this.i4 = 0, this.d = function() {
		var fF, cl;
		7 === gd.mw() && (aT = aS.aT, a8e = 0, a8f = gb.kH + 4500, a8g = ce.iM.a8h() ? 2 : 0, gd.setState(10), he.imageSmoothingEnabled = !0, gd.mS(), fF = o0.a1H("loading"), cl = (dK.eE.eF() ? .396 : .25) * dI.eC / fF.width, he.setTransform(cl,
			0, 0, cl, Math.floor((dI.aU - cl * fF.width) / 2), Math.floor((dI.dJ - cl * fF.height) / 2)), he.imageSmoothingEnabled = !1, he.drawImage(fF, 0, 0), he.setTransform(1, 0, 0, 1, 0, 0))
	}, this.ve = function() {
		0 < a8g && gb.kH > a8f && (a8g--, a8f += 4500, 0 === gb.a8j) && 0 === gb.kL() && (0 === a8g && ce.cf.i6 < ce.cf.a8G && (ce.cf.i6 += ce.cf.a8H), ce.cf.mq(ce.cf.i6, 5))
	}, this.a8k = function() {
		var b6, h;
		return 10 === gd.mw() && (b6 = aS.aT, h = aS.aA, ce.iM.a8l(aT), aT = null, aS.d(b6), aS.aA = h, !0)
	}, this.ga = function() {
		10 === gd.mw() && 2 <= ++a8e && (ce.iM.a8l(aT), aT = null)
	}
}

function a8n() {
	function a8t(sm) {
		for (var b4 = (1 + e.a8x) * a2j.result.a8w / (1e5 * a2j.result.a6X), wH = "", h = 0; h < sm.length; h++) {
			var a8y = sm[h].jr * b4;
			wH += "  " + sm[h].name + ": " + ad.fk.a66(1e5 * a8y)
		}
		wH.length && (g8.wF(0, "The following clans have won these glorious points:", 45, 0, ad.color.ks(225, 240, 255), a7.jn, -1, !1), g8.wF(0, wH.trim(), 45, 0, ad.color.ks(225, 240, 255), a7.jn, -1, !1))
	}
	this.eq = function(a6U) {
		var a8o = dm.dp[vZ.a8p()],
			a8q = dm.nQ[a8o],
			a8q = (jk.wi("Team " + a8q, 2, 1, 12), g8.wF(0, "Team " + a8q + " won the game!", 40, 0, a7.a8, a7.jn, -1, !1), e.wh && ad.hj.m8(e.hK) && (a2j.result.a8v += (ad.fk.a5t(bC.tQ[e.hK]) ? 2 : 1) * a2j.result.a8w * (1 + e.a8x) * bC.cH[e
				.hK] / a2j.result.a6X), function(g7) {
				var sm = [],
					username = bC.tQ,
					aL = g7.length;
				loop: for (var h = 0; h < aL; h++) {
					var b6 = g7[h],
						a8z = ad.fk.a5t(username[b6]);
					if (a8z) {
						for (var d1 = sm.length - 1; 0 <= d1; d1--)
							if (sm[d1].name === a8z) {
								sm[d1].jr += bC.cH[b6];
								continue loop
							} sm.push({
							name: a8z,
							jr: bC.cH[b6],
							a90: dm.e7[b6]
						})
					}
				}
				return sm.sort(function(d1, fq) {
					return fq.jr - d1.jr
				}), sm
			}(a6U));
		a8q.length && (2 === e.a6W ? a8t(a8q) : a8t(function(sm, a8o) {
			for (var h = sm.length - 1; 0 <= h; h--) dm.dp[sm[h].a90] !== a8o && sm.splice(h, 1);
			return sm
		}(a8q, a8o)))
	}
}

function a91() {
	this.a92 = function() {
		for (var aL = jB, g7 = jA, a6U = [], h = 0; h < aL; h++) {
			var b6 = g7[h];
			bK.vD(b6) && a6U.push(b6)
		}
		return a6U
	}, this.a93 = function() {
		for (var aL = jB, g7 = jA, h5 = 0, cH = bC.cH, h = 0; h < aL; h++) h5 += cH[g7[h]];
		return h5
	}
}

function a94() {
	function a9D() {}
	this.d = function() {}, this.a9C = function() {
		return !!a9D() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		a9D() && aipAPItag.showCMPScreen()
	}
}

function mF() {
	this.sO = function() {
		aB.aC.a6b(), aB.aC.a9E(), ce.cf.close(0, 3255), 0 === dK.id ? dK.mB && dK.mB.clear() : 1 === dK.id ? dK.mC.saveString(199, "") : 2 === dK.id && dK.mE.postMessage("clear")
	}, this.s2 = function() {
		2 === dK.id ? dK.mE.postMessage("showConsentForm") : 1 === dK.id ? dK.mC.setState(7) : a0r.a0s.showCMPScreen()
	}, this.s7 = function() {
		this.setState(14)
	}, this.a9F = function() {
		var aH = aB.dF.a61(101),
			max = ("string" != typeof(aH = "" === aH ? function() {
				{
					if (2 === dK.id) return dK.mD.password;
					if (1 === dK.id) return 12 <= dK.dH ? dK.mC.loadString(22) : ""
				}
				return nh.nf(9)
			}() : aH) && (aH = ""), Math.floor(Math.pow(2, 48))),
			a9H = Math.floor(parseInt(ni.ih(aH)));
		return 0 < a9H && a9H < max ? aB.dF.a5y(101, aH) : (a9H = Math.floor(1 + (max - 1) * Math.random()), aB.dF.a5y(101, aH)), a9H
	}, this.eF = function() {
		return 1 === aB.dF.a60(2)
	}, this.a9I = function() {
		aB.dF.a5y(102, "")
	}, this.setState = function(a1o) {
		1 === dK.id && 5 <= dK.dH && dK.mC.setState(a1o)
	}, this.a9J = function() {
		var a9K;
		1 === dK.id && 7 <= dK.dH ? dK.mC.setState(5) : ((a9K = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a9K.toString())
	}, this.a9L = function() {
		1 !== dK.id || dK.dH < 17 || dK.mC.saveString(23, document.documentElement.outerHTML)
	}, this.a9M = function() {
		0 === dK.id ? a0r.a0s.d() : 1 === dK.id ? dK.mC.prepareAd("1688441405") : 2 === dK.id && (0 === dK.dH ? dK.mE.postMessage("prepare ad 4500876070") : dK.mE.postMessage("loadAds 4500876070"))
	}, this.zu = function(h5) {
		return 0 === dK.id ? !!a0r.a0s.a9C() : 1 === dK.id ? 12 <= dK.dH && (dK.mC.presentAd(h5), !0) : 2 === dK.id && (0 === dK.dH ? dK.mE.postMessage("show ad " + h5) : dK.mE.postMessage("showAd"), !0)
	}, this.a9N = function() {
		2 === dK.id && dK.dH < 23 && cq.kn(4, 1, new sB("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + sC.sE + "' target='_blank'>" +
			sC.sE + "</a>", !0, [new kl("❌ " + dL.al[92], function() {
				cq.kn(0)
			}, a7.sN)]))
	}
}

function a9O(player, a9P) {
	return hq.a9Q[1] = bC.c6[player].length, hq.a9Q[0] === e.o ? a9R(player) : a9S(player, hq.a9Q[0]), (0 !== hq.a9Q[1] || 0 !== bC.c6[player].length) && !(!a9P && hq.a9Q[1] === bC.c6[player].length || (hq.a9Q[0] === e.o ? bC.tT[player]++ : bC.tU[
		player]++, 0))
}

function a9T(player) {
	e.dj && (hm[player] = 1), a9U(hq.a9Q[1], player), cC.pk(player, hq.hr[0], hq.a9Q[0]), pl.pm(player, !1)
}

function a9V(player, gv, aL, hi) {
	var a9W = p(3 * bC.bc[player], 256);
	hi -= hi >= p(bC.bc[player], 2) ? a9W : 0, a9U(aL, player), cC.pk(player, hi, gv), bC.bc[player] -= hi + a9W, pl.pm(player, !1)
}

function a9S(player, gv) {
	for (var b3, h = bC.c4[player].length - 1; 0 <= h; h--)
		if (bK.tB(bC.c4[player][h]))
			for (b3 = 3; 0 <= b3; b3--)
				if (bK.gh(bC.c4[player][h] + gg[b3]) && bK.bM(bC.c4[player][h] + gg[b3]) === gv) {
					bC.c6[player].push(bC.c4[player][h]);
					break
				}
}

function a9U(size, player) {
	for (var h = bC.c6[player].length - 1; size <= h; h--) bK.gi(bC.c6[player][h], player)
}

function a9R(player) {
	for (var h = bC.c4[player].length - 1; 0 <= h; h--)
		if (bK.tB(bC.c4[player][h]))
			for (var b3 = 3; 0 <= b3; b3--)
				if (bK.bL(bC.c4[player][h] + gg[b3])) {
					bC.c6[player].push(bC.c4[player][h]);
					break
				}
}

function a9X(player, a9Y) {
	var h, d1, b3, a9Z, aL = bC.c4[player].length,
		b4 = 256 <= aL ? 12 : 32 <= aL ? 6 : 1,
		qN = aL - 1 - t.u(b4);
	a9a = 0;
	loop: for (h = qN; 0 <= h; h -= b4)
		for (b3 = 3; 0 <= b3; b3--)
			if ((a9Z = bK.bL(bC.c4[player][h] + gg[b3]) ? e.o : bK.bM(bC.c4[player][h] + gg[b3])) === e.o || bK.gh(bC.c4[player][h] + gg[b3]) && a9Z !== player && (a9Y || gu(player, a9Z))) {
				for (d1 = a9a - 1; 0 <= d1; d1--)
					if (a9b[d1] === a9Z) continue loop;
				if (a9b[a9a] = a9Z, ++a9a >= a9c) return !0
			}
	return 0 < a9a
}

function a9d(player, a9Y) {
	var h, b3, a9Z;
	for (a9a = 0, h = bC.c4[player].length - 1; 0 <= h; h--)
		for (b3 = 3; 0 <= b3; b3--)
			if ((a9Z = bK.bL(bC.c4[player][h] + gg[b3]) ? e.o : bK.bM(bC.c4[player][h] + gg[b3])) === e.o || bK.gh(bC.c4[player][h] + gg[b3]) && a9Z !== player && (a9Y || gu(player, a9Z))) return a9b[a9a++] = a9Z, !0;
	return !1
}

function a9e() {
	for (var fq, h = a9a - 1; 0 <= h; h--)
		if (a9b[h] === e.o) {
			for (a9a--, fq = h; fq < a9a; fq++) a9b[fq] = a9b[fq + 1];
			return !0
		} return !1
}

function a9f(player) {
	for (var fq, h = a9a - 1; 0 <= h; h--)
		if (cC.a9g(player, a9b[h]))
			for (a9a--, fq = h; fq < a9a; fq++) a9b[fq] = a9b[fq + 1];
	return 0 === a9a
}

function a9h() {
	for (var h = a9a - 1; 0 <= h; h--)
		if (a9b[h] >= e.k) return !0;
	return !1
}

function a9i() {
	for (var h = a9a - 1; 0 <= h; h--) a9b[h] < e.k && (a9b[h] = a9b[--a9a]);
	return 0 < a9a
}

function a9j(player) {
	for (var fq, a9k = a9b[0], a9l = bC.bc[a9k] + cC.cY(a9k, player), h = a9a - 1; 1 <= h; h--)(fq = bC.bc[a9b[h]] + cC.cY(a9b[h], player)) < a9l && (a9k = a9b[h], a9l = fq);
	return a9k
}

function a9m(player) {
	var dJ, a9n = a9b[0];
	if (1 !== a9a)
		for (var a9o = p(bC.e4[player] + bC.e3[player], 2), a9p = p(bC.e6[player] + bC.e5[player], 2), dt = a9q(a9o - p(bC.e4[a9n] + bC.e3[a9n], 2)) + a9q(a9p - p(bC.e6[a9n] + bC.e5[a9n], 2)), h = a9a - 1; 1 <= h; h--)(dJ = a9q(a9o - p(bC.e4[a9b[
			h]] + bC.e3[a9b[h]], 2)) + a9q(a9p - p(bC.e6[a9b[h]] + bC.e5[a9b[h]], 2))) < dt && (dt = dJ, a9n = a9b[h]);
	return a9n
}

function a9r() {
	return a9b[t.u(a9a)]
}

function a9s() {
	this.eq = function() {}
}

function a9t() {
	var a9u, a9v, a9w, a9x, a9y, a9z;

	function aA2(we) {
		for (var h = a9v - 1; 0 <= h; h--) 0 === a9x[a9w[h]] && bC.cH[a9w[h]] >= we && a6H(a9w[h])
	}

	function aA1(player) {
		10 === a9x[player] ? a9x[player] = a9u : bC.cH[player] < 1e3 ? a9x[player] = 3 : bC.cH[player] < 1e4 ? a9x[player] = 2 : bC.cH[player] < 6e4 ? a9x[player] = 1 : a9x[player] = 0
	}
	this.d = function() {
		a9y = a9z = 0, a9u = 6, a9v = 0, a9w = new Uint16Array(e.o), a9x = new Uint8Array(e.o)
	}, this.v = function() {
		var h;
		for (a9y = hs.k1[13], a9z = bC.bc[e.hK], h = a9v - 1; 0 <= h; h--) 10 === a9x[a9w[h]] ? aA1(a9w[h]) : 0 == a9x[a9w[h]]-- && (aA1(a9w[h]), a6H(a9w[h]));
		16e4 <= bC.cH[xk[0]] && (aA2(16e4), 3e5 <= bC.cH[xk[0]]) && aA2(3e5), bC.cH[e.hK] > hs.k1[7] && (hs.k1[7] = bC.cH[e.hK]), hs.k1[14] += a9z - bC.bc[e.hK] + a9y - hs.k1[13]
	}, this.a33 = function(player) {
		for (var d1, h = a9v - 1; 0 <= h; h--)
			if (player === a9w[h]) {
				for (a9v--, d1 = h; d1 < a9v; d1++) a9w[d1] = a9w[d1 + 1];
				return
			}
	}, this.pm = function(player, aA4) {
		for (var h = a9v - 1; 0 <= h; h--)
			if (player === a9w[h]) return;
		a9w[a9v++] = player, a9x[player] = aA4 ? 2 : 10
	}
}

function aA5() {
	var mh = 0,
		aA6 = !0;

	function aA9(aH) {
		8 !== gd.mw() || 2 !== bC.hc[e.hK] && (0 !== bC.e2[e.hK] || e.de) || g8.wm(aH)
	}
	this.v = function() {
		var h5, a7u;
		gb.kH > mh && (mh = gb.kH + 2500, h5 = new Date, a7u = h5.getUTCSeconds(), aA6 ? a7u < 45 && (aA6 = !1) : a7u < 45 || (aA6 = !0, (a7u = h5.getUTCMinutes() + 1) % 15 == 0 && aA9(30 === a7u ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function aAA() {
	this.wA = function() {
		return 2 === dK.id ? 4 : dK.eE.eF() ? 2 : 1
	}
}

function fh() {
	this.ak = [], this.al = ["Zaakceptuj", "Usunąłeś {0}.", "Zostałeś usunięty przez {0}.", "Gratulacje! Wygrałeś grę.", "{0} wygrał grę.", "{0} złamał pakt o nieagresji.", "{0} atakuje Cię!", "Wybierz swoją pozycję startową!", "Poddałeś się!",
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

function aAB() {
	this.aAC = null, this.gc = !1, this.kH = 0, this.kI = 56;
	var aAD = 0;

	function aAF() {
		gb.kH = aAD = performance.now(), gb.aAC.v(), window.requestAnimationFrame(aAF)
	}
	this.d = function() {
		this.aAE(), window.requestAnimationFrame(aAF), this.kH = performance.now()
	}, this.aAG = function() {
		e.s5 ? (this.aAC = new aAH, this.aAC.d()) : e.sU ? this.aAC = new pn : (this.aAC = new aAI, this.aAC.d())
	}, this.aAE = function() {
		this.aAC = new gW, this.gc = !0
	}, this.v = function() {
		this.aAC.po++
	}, this.kL = function() {
		return this.aAC.po
	}, this.aAJ = function() {
		var h5 = performance.now();
		h5 < aAD + 1e3 || (this.kH = h5, this.aAC.v())
	}
}

function aAK() {
	this.jR = !1, this.vg = null, this.aAL = 0, this.aU = null, this.dJ = null, this.aAM = .013, this.aAN = .022, this.aAO = .025;
	this.aAQ = 3, this.aAR = 1.2, this.aAS = .2, this.aAT = .235, this.aAU = .9, this.aAV = .08;
	var aAW, lb = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		aAX = [-1e6, -1e6];
	this.position = [0, 0], this.hy = [0, 0], this.d = function() {
		this.vg = [null, null], this.jR = !1, this.aAL = 0
	}, this.sW = function(id) {
		this.aAL = id, ce.wb.hw(0, this.aAL)
	}, this.v = function() {
		this.jR && this.jl()
	}, this.jl = function() {
		gb.kH - 12e4 >= aAX[this.aAL] && (aAX[this.aAL] = gb.kH, this.hy = [0, 0], ce.wb.hw(0, this.aAL))
	}, this.resize = function() {
		if (this.jR) {
			var h;
			for (this.aU = this.aAZ(dK.eE.eF() ? .85 : .66, .75, dI.aU, dI.dJ), this.dJ = Math.floor(this.aU / .75), h = 1; 0 <= h; h--) this.vg[h] && (this.vg[h][4] = ad.ae.hL(1, this.vg[h][5] * this.dJ / 10));
			aAW = ad.ae.hL(1, .1 * this.dJ)
		}
	}, this.aAZ = function(jy, jV, aU, dJ) {
		return aU < jV * dJ ? Math.floor(jy * aU) : Math.floor(jV * jy * dJ)
	}, this.aAa = function(aA, aAb, aAc, cm, aAd, aAe, yR) {
		this.position[aA] = yR;
		for (var zJ, size = aAb.length, h9 = ad.ae.hL(1, aAd * this.dJ / 10), aM = (this.aAf(aAb, h9, aAe * this.aU), [
				[], size, -1, cm, h9, aAd, 10 * yR
			]), h = 0; h < size; h++) zJ = {
			name: aAb[h].name,
			value: aAb[h].gC / aAc,
			colorIndex: aAb[h].colorIndex
		}, aM[0].push(zJ);
		this.vg[aA] = aM, this.aAg(aA);
		var aAe = this.vg[aA][0][0].name,
			data = (1 === aA && (aAe = "[" + aAe + "]"), 0 === yR && a1d.aAh(aA, aAe), []);
		for (h = 0; h < aM[0].length; h++) data.push([h + 1 + ".", aM[0][h].name, aM[0][h].value.toFixed(1)]);
		cq.kn(10, cq.cr, new a8Z(aA ? "Clan Ranking" : "1v1 Player Ranking", data))
	}, this.aAg = function(h) {
		this.vg[h][0].sort(function(d1, fq) {
			return fq.value - d1.value
		})
	}, this.aD = function(aA, name, aAi, aAj) {
		if (this.vg && this.vg[aA]) {
			var h, wu = !1;
			if (0 === aA) {
				for (h = 0; h < this.vg[aA][0].length; h++)
					if (name === this.vg[aA][0][h].name && aAi > .99 * this.vg[aA][0][h].value && aAi < 1.01 * this.vg[aA][0][h].value) {
						this.vg[aA][0][h].value = aAj, wu = !0;
						break
					} wu || this.vg[aA][0].push({
					name: name,
					value: aAj
				})
			} else {
				for (h = 0; h < this.vg[aA][0].length; h++)
					if (name === this.vg[aA][0][h].name) {
						this.vg[aA][0][h].value += 32 < this.vg[aA][0][h].value ? (64 - this.vg[aA][0][h].value) / 256 : .25, this.vg[aA][0][h].value *= 1 / (383 / 384), wu = !0;
						break
					} for (h = 0; h < this.vg[aA][0].length; h++) this.vg[aA][0][h].value *= 383 / 384;
				wu || this.vg[aA][0].push({
					name: name,
					value: .25
				})
			}
			this.aAg(aA)
		}
	}, this.aAf = function(aAb, h9, aAk) {
		for (var h = aAb.length - 1; 0 <= h; h--)
			for (; 3 < aAb[h].name.length && jk.measureText(aAb[h].name, h9) > aAk;) aAb[h].name = aAb[h].name.substring(0, aAb[h].name.length - 4) + "..."
	}, this.jX = function(bQ, bR) {
		return !!this.jR && (bQ -= (dI.aU - this.aU) / 2, bR -= (dI.dJ - this.dJ) / 2, bQ < 0 || bQ > this.aU || bR < 0 || bR > this.dJ ? (this.jR = !1, gb.gc = !0) : (bR = bR < .3 * this.dJ ? 1 : bR < .85 * this.dJ ? (bR = (0 === this.aAL ?
			14.1 : 3) * (bR - .3 * this.dJ) / (.55 * this.dJ), Math.floor(1 + bR * bR)) : 0 === this.aAL ? 200 : 10, bQ < this.aU / 2 ? this.hy[this.aAL] = -bR : this.hy[this.aAL] = bR, aAX[this.aAL] + 50 > gb.kH || (aAX[this.aAL] =
			gb.kH, ce.wb.hw(0, this.aAL)), !0))
	}, this.ge = function() {
		var kM, kN, jF, jG, jH, jI, a82, vh;
		this.jR && (kM = (dI.aU - this.aU) / 2, kN = (dI.dJ - this.dJ) / 2, jF = this.aAM * this.aU, jG = this.aAQ * jF, jH = this.aAN * this.aU, jI = this.aAR * jH, a82 = this.aAO * this.aU, vh = Math.floor(.25 * this.dJ), he.setTransform(1, 0,
				0, 1, kM, kN), he.fillStyle = 0 === this.aAL ? a7.a4I : a7.a4G, he.fillRect(0, 0, this.aU, vh), he.fillStyle = a7.pF, he.fillRect(0, vh, this.aU, this.dJ - vh), he.fillStyle = a7.a8, he.font = aAW, ad.ae.textBaseline(he, 1),
			ad.ae.textAlign(he, 1), he.fillText(lb[this.aAL], Math.floor(this.aU / 2), Math.floor(.135 * this.dJ)), he.font = ad.ae.hL(1, .025 * this.dJ), he.fillText(lb[this.aAL + 2], Math.floor(this.aU / 2), Math.floor(.2125 * this.dJ)), he
			.beginPath(), he.moveTo(this.aU / 4, 0), he.lineTo(this.aU / 2 - jF, 0), he.lineTo(this.aU / 2, -jG), he.lineTo(this.aU / 2 + jF, 0), he.lineTo(this.aU - jH, 0), he.lineTo(this.aU + jI, -jI), he.lineTo(this.aU, jH), he.lineTo(this
				.aU, this.dJ / 2 - jF), he.lineTo(this.aU + jG, this.dJ / 2), he.lineTo(this.aU, this.dJ / 2 + jF), he.lineTo(this.aU, this.dJ - jH), he.lineTo(this.aU + jI, this.dJ + jI), he.lineTo(this.aU - jH, this.dJ), he.lineTo(this.aU /
				2 + jF, this.dJ), he.lineTo(this.aU / 2, this.dJ + jG), he.lineTo(this.aU / 2 - jF, this.dJ), he.lineTo(jH, this.dJ), he.lineTo(-jI, this.dJ + jI), he.lineTo(0, this.dJ - jH), he.lineTo(0, this.dJ / 2 + jF), he.lineTo(-jG,
				this.dJ / 2), he.lineTo(0, this.dJ / 2 - jF), he.lineTo(0, jH), he.lineTo(-jI, -jI), he.lineTo(jH, 0), he.lineTo(this.aU / 4, 0), he.lineTo(this.aU / 4, a82), he.lineTo(a82, a82), he.lineTo(a82, this.dJ - a82), he.lineTo(this
				.aU - a82, this.dJ - a82), he.lineTo(this.aU - a82, a82), he.lineTo(this.aU / 4, a82), he.fill(), this.vg[this.aAL] && this.aAl(vh), this.oO(vh), he.setTransform(1, 0, 0, 1, 0, 0))
	}, this.oO = function(vh) {
		var jF = hd(2, Math.floor(.06 * this.aU)),
			jJ = (jF -= jF % 2, hd(2, Math.floor(.01 * this.aU))),
			vh = (jJ -= jJ % 2, Math.floor(.82 * vh));
		he.fillRect(jF, vh, jF, jJ), he.fillRect(this.aU - jF - jF, vh, jF, jJ), he.fillRect(Math.floor(this.aU - jF - jF + (jF - jJ) / 2), Math.floor(vh - (jF - jJ) / 2), jJ, jF)
	}, this.aAl = function(vh) {
		var ds;
		he.font = this.vg[this.aAL][4];
		for (var h = this.vg[this.aAL][1] - 1; 0 <= h; h--) ad.ae.textAlign(he, 2), ds = Math.floor(this.aAV * this.dJ + vh + h * ((1 - 2 * this.aAV) * this.dJ - vh) / 9), he.fillText(this.vg[this.aAL][0][h].value.toFixed(this.vg[this.aAL][3]),
			Math.floor(this.aAU * this.aU), ds), he.fillText(h + 1 + this.vg[this.aAL][6] + ".", Math.floor(this.aAS * this.aU), ds), ad.ae.textAlign(he, 0), he.fillText(this.vg[this.aAL][0][h].name, Math.floor(this.aAT * this.aU), ds)
	}
}

function aAm() {
	var al, dX, aAn, aU, dJ, font;

	function aAp(uI) {
		return uI < 10 ? "0" + uI : String(uI)
	}
	this.d = function() {
		void 0 === aU && this.resize(), this.setTime()
	}, this.resize = function() {
		aU = Math.floor((dK.eE.eF() ? .53 : .36) * dI.eC), dJ = Math.floor(.065 * aU), font = ad.ae.hL(1, Math.floor(.9 * dJ)), aAn--, this.setTime()
	}, this.v = function() {
		this.setTime() && (gb.gc = !0)
	}, this.setTime = function() {
		var h5 = new Date,
			aA8 = h5.getUTCMinutes(),
			h5 = h5.getUTCSeconds();
		return dX = 3600 - 60 * aA8 - h5, dX %= 900, al = "Next Contest: " + aAp(Math.floor(dX / 60)) + ":" + aAp(dX % 60), aAn !== (aAn = 60 * aA8 + h5) && (aU = jk.measureText(al, font), aU += Math.floor(.4 * dJ), !0)
	}, this.ge = function() {
		he.lineWidth = 1 + Math.floor(dJ / 15), 7 === gd.mw() && uS.a7p() + 2 * ag.gap > .5 * (dI.dJ - aU) ? he.translate(dI.aU - dJ, Math.floor(uS.a7p() + 2 * ag.gap + aU)) : he.translate(dI.aU - dJ, Math.floor(.5 * (dI.dJ + aU))), he.rotate(-
			Math.PI / 2), he.fillStyle = a7.a8, he.fillRect(0, 0, aU, dJ), he.strokeStyle = a7.wl, he.strokeRect(0, 0, aU, dJ + 10), he.fillStyle = a7.wl, he.font = font, ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 1), he.fillText(al, Math
			.floor(aU / 2), Math.floor(.59 * dJ)), he.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aAq() {
	function aAr(title, wH, a6) {
		j8(a6), cq.kn(4, 5, new sB("⚠️ " + title, wH, !0))
	}

	function j8(a6) {
		! function(a6) {
			var a1o = gd.mw();
			0 !== a1o && (6 === a1o ? ce.cf.n2(a6) : 7 === a1o ? (uS.o9(), ce.cf.close(ce.cf.uR, 3256)) : 8 === a1o && e.a3l(!0))
		}(a6), cq.cf.n3()
	}
	this.a8Y = function(fU, a6) {
		if (8 === cq.cr && 0 === fU) cq.kn(4, 0, new sB("⚠️ " + dL.fn(64), dL.fl(a6), !0));
		else {
			var a1o = gd.mw();
			if (6 === a1o) {
				if (4211 === a6) return j8(a6), void cq.kn(4, 5, new sB("🚀 " + dL.al[122], dL.al[123], !0, [new kl("❌ " + dL.al[92], function() {
					cq.a0m()
				}, a7.sN), new kl("🔄 " + dL.al[124], function() {
					dK.eE.a9J()
				}, a7.w4)]));
				if (4214 !== a6) return void gY.mt(fU)
			} else {
				if (7 !== a1o) return 8 === a1o ? void(fU !== ce.cf.i6 || e.sU || 1 !== e.pq || g8.wS(dL.fl(a6))) : void 0;
				if (fU !== ce.cf.uR) return
			}
			aAr(dL.fn(64), dL.fl(a6), a6)
		}
	}, this.mz = function(a6) {
		8 === gd.mw() ? e.sU || 1 !== e.pq || g8.wS(dL.fl(a6)) : aAr(dL.fn(64), dL.fl(a6), a6)
	}
}

function yj() {
	this.rl = function(b7) {
		e.sU ? pP.rk.rl(e.hK, b7) : ce.wb.i7(b7)
	}, this.pR = function(bb, gv) {
		g8.wx(), e.sU ? pP.rk.pR(e.hK, bb, gv) : ce.wb.i8(bb, gv)
	}, this.hl = function(bb, hh) {
		g8.wx(), e.sU ? pP.rk.rm(e.hK, bb, hh) : ce.wb.i9(bb, hh)
	}, this.rn = function(bb, b7) {
		e.sU ? pP.rk.rn(e.hK, bb, b7) : br.a0R.a3s(e.hK, b7) && ce.wb.iA(bb, b7)
	}, this.ro = function(iC, b7) {
		e.sU ? pP.rk.ro(e.hK, iC, b7) : br.a0R.a3v(e.hK, iC, b7) && ce.wb.iB(iC, b7)
	}, this.rp = function(gv) {
		e.sU ? pP.rk.rp(e.hK, gv) : ce.wb.iD(gv)
	}, this.wa = function(wc) {
		e.sU ? pP.rk.rq(e.hK, wc) : ce.wb.iE(wc)
	}, this.rr = function(iG) {
		e.sU ? pP.rk.rr(e.hK, iG) : ce.wb.iF(iG)
	}, this.rs = function() {
		e.sU ? pP.rk.rs(e.hK) : ce.wb.iH()
	}
}

function q4() {
	function aAv(aM) {
		if (0 === aM.length) aB.aC.aD(116, "");
		else {
			for (var aAz = aM[0], h = 1; h < aM.length; h++) aAz += ";" + aM[h];
			aB.aC.aD(116, aAz)
		}
	}
	this.fx = function() {
		aB.dF.data[110].value.length && (aB.dF.data[106].value = aB.dF.data[110], aB.aC.aD(110, ""), this.aAt())
	}, this.aAt = function() {
		var aM = aB.dF.data[116].value.split(";");
		for (aM.length % 2 == 1 && aM.pop(), aM.unshift(aB.dF.data[106].value), aM.unshift(aB.dF.data[105].value), h = 2; h < aM.length; h += 2)
			if (aM[h] === aM[0]) {
				aM.splice(h, 2);
				break
			} for (var aAu = [], h = 0; h < aM.length; h += 2) aAu.push(aM[h]);
		aAv(aM), aB.dF.data[117].value = 0, aB.dF.data[117].fp = aAu
	}, this.aAw = function(aA) {
		aB.dF.data[117].fp.splice(aA, 1), aB.dF.data[117].value = Math.min(aA, aB.dF.data[117].fp.length - 1);
		var aM = aB.dF.data[116].value.split(";");
		aM.splice(2 * aA, 2), aAv(aM)
	}, this.aAx = function(aA) {
		var aM = aB.dF.data[116].value.split(";");
		return {
			aAy: aM[2 * aA],
			password: aM[2 * aA + 1]
		}
	}, this.ec = function() {
		var b8 = l.lM(aB.dF.data[121].value, -1, 262143);
		return b8 = -1 === b8 ? ~~(262144 * Math.random()) : b8
	}
}

function aB0() {
	this.a79 = function(a1o) {
		return 0 === a1o ? 1 === e.pq && e.de : 1 === a1o ? 1 === e.pq && !e.de : 2 === e.pq
	}, this.m8 = function(player) {
		return 0 !== bC.e2[player] && 2 !== bC.hc[player]
	}, this.aB1 = function(h3, h4) {
		return h3 !== h4
	}, this.hp = function(player, b8) {
		return b8 = this.aB2(player, b8), bC.bc[player] += b8, b8
	}, this.aB2 = function(player, b8) {
		var hE = bC.bc[player];
		return b8 = Math.min(b8, bC.cH[player] * e.a35 - hE), b8 = Math.min(b8, e.aB3 - hE), Math.max(b8, 0)
	}, this.q9 = function(player, bb, aB4, aB5) {
		var hE = bC.bc[player],
			bb = l.m(hE * (bb + 1), 1024),
			aB4 = l.m(aB4 * hE, 1024),
			bb = Math.min(bb, hE - aB4);
		return 10 === e.f && (bb = vR.jD(player, bb)), hq.hr[0] = bb, hq.hr[1] = aB4, aB5 <= bb
	}, this.hk = function(player, rm, hh) {
		var player = bC.bc[player],
			aB6 = l.m(64 * player, 1024);
		return rm = Math.min(rm, player - aB6), aB6 += player = this.aB8(rm), rm = this.aB2(hh, rm -= player), hq.hr[0] = rm, hq.hr[1] = aB6, 1 <= rm
	}, this.ho = function(rm, hh) {
		var aB7 = this.aB8(rm);
		return rm = this.aB2(hh, rm -= aB7), hq.hr[0] = rm, hq.hr[1] = aB7, 1 <= rm
	}, this.ba = function(player, aB9) {
		return l.m(bC.bc[player] * (aB9 + 1), 1024)
	}, this.aB8 = function(aBA) {
		return l.m(Math.max(2142 - gb.kL(), 0) * aBA, 2142)
	}, this.aBB = function(player, aB4) {
		bC.bc[player] -= l.m(aB4 * bC.bc[player], 1024)
	}, this.qD = function(player) {
		bC.bc[player] -= hq.hr[0] + hq.hr[1]
	}, this.aBC = function(player, gv) {
		return (gv = Math.min(gv, e.o)) < e.o && 0 === bC.e2[gv] && (gv = e.o), (hq.a9Q[0] = gv) === e.o || gu(player, gv)
	}, this.aBD = function(player, hh) {
		return 0 !== bC.e2[hh] && !gu(player, hh)
	}
}

function aBE() {
	this.aBF = function(fU, aT) {
		aS.d(aT), 0 === aS.size ? ce.cf.cg(fU, 3205) : ((0 === aS.ci(1) ? function(fU) {
			var aBI = aS.ci(6);
			0 === aBI ? function(fU) {
				if (0 === fU && 8 !== gd.mw()) {
					a1d.aAh(0, cn.co.cp(aS.ci(5))), a1d.aAh(1, "[" + cn.co.cp(aS.ci(3)) + "]");
					for (var aBR = aS.ci(12), aBS = aS.ci(6), aM = new Array(aBR), h = 0; h < aBR; h++) aM[h] = aS.ci(aBS);
					rH.rA(aM)
				}
			}(fU) : 1 === aBI ? function() {
				var h;
				if (8 !== gd.mw()) {
					var gC, id = aS.ci(1),
						position = aS.ci(16),
						uI = aS.ci(4),
						aM = [];
					for (h = 0; h < uI; h++) gC = aS.ci(14), aM.push({
						name: cn.co.cp(aS.ci(5)),
						gC: gC
					});
					0 === id ? hx.aAa(0, aM, 10, 1, .36, .55, position) : hx.aAa(1, aM, 100, 2, .47, .5, position)
				}
			}() : 2 === aBI ? ce.aBL.uL(fU) : 3 === aBI || 4 === aBI ? gZ.d() : 5 !== aBI && 6 !== aBI && 7 !== aBI && 8 !== aBI && (9 === aBI ? ce.aBM.aBN(fU) : 10 === aBI ? ce.aBO.fw() : 11 === aBI ? ce.aBM.aBP() : 12 === aBI ?
				ce.aBO.g1() : 13 === aBI ? ce.aBQ.cc() : 14 === aBI && ce.aBQ.cu())
		} : function(fU) {
			if (8 !== gd.mw() && !gZ.a8k()) return;
			if (fU !== ce.cf.i6) ce.cf.cg(fU, 3244);
			else if (0 === aS.ci(1)) gb.aAC.aBW(aS.aT);
			else {
				var h, fU = aS.ci(2);
				if (0 === fU) {
					var wc, wb = aS.ci(9);
					0 !== bC.e2[wb] && 0 !== bC.e2[e.hK] && (wc = aS.ci(10), g8.wa(wb, e.hK, wc), x.y(wb, 1, wc))
				} else if (1 === fU) ! function() {
					var wb = aS.ci(9);
					0 !== bC.e2[wb] && 0 !== bC.e2[e.hK] && vX.lo(0, [wb], !0) && g8.wr(wb, 1)
				}();
				else if (2 === fU) ! function() {
					var wb = aS.ci(9),
						target = aS.ci(9);
					0 !== bC.e2[wb] && 0 !== bC.e2[target] && 0 !== bC.e2[e.hK] && vX.lo(1, [wb], !0) && (x.y(wb, 3, 96), x.y(target, 4, 96), g8.wt(wb, target))
				}();
				else if (d5 && !d7) {
					var aL = 720;
					for (aP.aQ(14407), aP.aV(1, 0), aP.aV(6, 10), aL = Math.min(pP.ym.ra.length, 720), h = 0; h < aL; h++) aP.aV(20, pP.ym.ra[h]);
					ce.cf.send(ce.cf.i6, aP.aT)
				}
			}
		})(fU), gb.aAJ())
	}, this.a8l = function(aT) {
		if (aS.d(aT), aS.aA = 1, 3 === aS.ci(6)) {
			aS.aA += 20;
			for (var ek, ej, name, aT = aS.ci(9), a0b = aS.ci(14), eg = aS.ci(4), uT = 1 === aS.ci(1), a0f = aS.ci(6), ex = aS.ci(14), aBV = aS.ci(9) + 1, g7 = [], h = 0; h < aBV; h++) ek = aS.ci(1), ej = [aS.ci(6), aS.ci(6), aS.ci(6)], name = cn
				.co.cp(aS.ci(5)), g7.push({
					name: name,
					ej: ej,
					ek: ek
				});
			gd.oK(), ap.aQ(a0f, ex), 1 === g7.length && sj.oA(eg), e.ed(a0b, aT, g7, eg, uT, !1)
		} else ! function() {
			aS.aA += 20;
			for (var ek, ej, gC, name, i4 = aS.ci(1), a0b = aS.ci(14), eg = aS.ci(4), uT = 1 === aS.ci(1), a0f = aS.ci(6), ex = aS.ci(14), g7 = [], h = 0; h < 2; h++) ek = aS.ci(1), ej = [aS.ci(6), aS.ci(6), aS.ci(6)], gC = aS.ci(14), name =
				cn.co.cp(aS.ci(5)), g7.push({
					name: name,
					ej: ej,
					gC: gC,
					ek: ek
				});
			gd.oK(), ap.aQ(a0f, ex), e.ed(a0b, i4, g7, eg, uT, !1)
		}()
	}, this.a8h = function() {
		aS.aA = 1;
		var aBI = aS.ci(6),
			qq = aS.ci(10);
		return ce.cf.uR > ce.cf.a8H && (qq += ce.cf.a8H), ce.cf.uR === qq ? (ce.cf.i6 = qq, !1) : (ce.cf.close(ce.cf.uR, 3247), ce.cf.i6 = qq, gZ.i3 = aS.ci(10), gZ.i4 = aS.ci(3 === aBI ? 9 : 1), ce.cf.mq(qq, 5) && ce.wb.i1(), !0)
	}
}

function a7G() {
	var aBb = new Uint8Array(64);
	this.d = function() {
		var h;
		for (aBb[0] = 45, aBb[37] = 95, h = 0; h < 10; h++) aBb[h + 1] = 48 + h;
		for (h = 0; h < 26; h++) aBb[h + 11] = 65 + h, aBb[h + 38] = 97 + h
	}, this.g0 = function(aBc) {
		for (var a4y = aS, aO = new Uint8Array(aBc), h = 0; h < aBc; h++) aO[h] = a4y.ci(6);
		return aO
	}, this.fz = function(aO) {
		for (var aL = aO.length, aBd = aBb, aM = [], h = 0; h < aL; h++) aM.push(String.fromCharCode(aBd[aO[h]]));
		return aM.join("")
	}
}

function aBe() {
	this.aL = 0, this.aU = 0, this.vg = null, this.d = function() {
		this.vg = [], this.vg.push({
			dr: 0,
			ds: 0,
			rW: dK.eE.eF(),
			aBf: null
		}), this.vg.push({
			dr: 0,
			ds: 0,
			rW: !1,
			aBf: new a3K
		}), this.vg[1].aBf.a3Q(), this.aL = this.vg.length, this.aU = 0
	}, this.rE = function() {
		this.aU = Math.floor((dK.eE.eF() ? .063 : .04) * dI.eC), this.aU += 4 - this.aU % 4, this.vg[0].dr = ag.gap, this.vg[0].ds = dI.dJ - this.aU - ag.gap;
		for (var h = 1; h < this.aL; h++) this.vg[h].dr = this.vg[h - 1].dr + Math.floor(dK.eE.eF() ? 1.5 * ag.gap : 3.7 * ag.gap) + this.aU, this.vg[h].ds = this.vg[0].ds
	}, this.lP = function(jY, jZ) {
		if (o0.a1F())
			for (var h = this.aL - 1; 0 <= h; h--)
				if (jY >= this.vg[h].dr && jZ >= this.vg[h].ds && jY < this.vg[h].dr + this.aU && jZ < this.vg[h].ds + this.aU) return h;
		return -1
	}, this.aBg = function() {
		for (var h = 1; 1 <= h; h--)
			if (this.vg[h].aBf.jR) return !0;
		return !1
	}, this.resize = function() {
		for (var h = 1; 1 <= h; h--) this.vg[h].aBf.resize()
	}, this.lQ = function() {
		return !!this.vg[1].aBf.jR && (this.vg[1].aBf.jX(-5e3, -5e3), !0)
	}, this.jX = function(jY, jZ, a8D) {
		if (a8D && this.vg[1].aBf.jR) return this.vg[1].aBf.jX(jY, jZ), !0;
		jY = this.lP(jY, jZ);
		if (a8D) {
			if (0 === jY) return this.vg[jY].rW = !this.vg[jY].rW, aB.dF.a5y(2, this.vg[jY].rW ? 1 : 0), dI.aBh(0), !0;
			if (1 <= jY && jY < 2) return this.vg[jY].aBf.d(), gb.gc = !0
		}
		return !1
	}, this.jg = function(jY, jZ) {
		return !!this.vg[1].aBf.jR && (this.vg[1].aBf.jg(jY), !0)
	}, this.a3V = function() {
		for (var h = 1; 1 <= h; h--)
			if (this.vg[h].aBf.jR) return this.vg[h].aBf.a3V(), !0;
		return !1
	}, this.ge = function() {
		if (o0.a1F()) {
			he.imageSmoothingEnabled = !0;
			for (var h = this.aL - 1; 0 <= h; h--) he.fillStyle = this.vg[h].rW ? a7.w4 : a7.jn, he.fillRect(this.vg[h].dr, this.vg[h].ds, this.aU, this.aU), 0 === h ? this.aBi(h, o0.get(15)) : 1 === h && this.aBj(), he.setTransform(1, 0, 0, 1,
				0, 0), he.lineWidth = ag.e9, he.strokeStyle = a7.a8, he.strokeRect(this.vg[h].dr, this.vg[h].ds, this.aU, this.aU);
			he.imageSmoothingEnabled = !1
		}
	}, this.aBi = function(h, du) {
		var gap = .08 * this.aU,
			zoom = (this.aU - 2 * gap) / du.width;
		he.setTransform(zoom, 0, 0, zoom, this.vg[h].dr + gap, this.vg[h].ds + (this.aU - zoom * du.height) / 2), he.drawImage(du, 0, 0)
	}, this.aBj = function() {
		he.setTransform(1, 0, 0, 1, this.vg[1].dr, this.vg[1].ds);
		for (var eP = this.aU / 4, dr = 3; 0 <= dr; dr--)
			for (var ds = 3; 0 <= ds; ds--) {
				var ik = Math.floor(367 * (dr + 1) * (ds + 1) % 256),
					oG = Math.floor(687 * (dr + 1) * (ds + 1) % 256),
					fq = Math.floor(651 * (dr + 1) * (ds + 1) % 256);
				he.fillStyle = "rgb(" + ik + "," + oG + "," + fq + ")", he.fillRect(dr * eP, ds * eP, eP, eP)
			}
	}, this.aBk = function() {
		for (var h = 1; 1 <= h; h--)
			if (this.vg[h].aBf.jR) return void this.vg[h].aBf.ge()
	}
}

function a8R() {
	var fU, sl, tX, aBl = ["wss://", "/s50/", "/s51/", "/s52/"];

	function a8S() {
		ce.cf.a8S(fU, sl)
	}

	function aBr(a6) {
		ce.iM.aBF(fU, new Uint8Array(a6.data))
	}

	function aBs() {}

	function a8X(a6) {
		ce.cf.a8X(fU, a6)
	}
	this.d = function(aA, aBm) {
		fU = aA, sl = aBm;
		aA = aBl[0];
		fU < ce.cf.a8G ? aA += ce.cf.a8J[fU] + aBl[1 + d2] : aA += ce.cf.a8J[0] + "/i" + (1 + d2) + (fU - ce.cf.a8H) + "/", (tX = new WebSocket(aA)).binaryType = "arraybuffer", tX.onopen = a8S, tX.onmessage = aBr, tX.onclose = a8X, tX.onerror =
			aBs
	}, this.aBo = function() {
		return tX.readyState === tX.CONNECTING
	}, this.mk = function() {
		return tX.readyState === tX.OPEN
	}, this.a8O = function() {
		return this.aBo() || this.mk()
	}, this.a8P = function(aBm) {
		sl = aBm
	}, this.aBp = function() {
		return sl
	}, this.send = function(aT) {
		this.mk() && tX.send(aT)
	}, this.close = function(a8U) {
		this.a8O() && (tX.close(a8U), this.jc())
	}, this.jc = function() {
		tX.onopen = null, tX.onmessage = null, tX.onclose = null, tX.onerror = null
	}
}

function aBt() {
	var kM, kN, kO, kP, aBu = 0,
		aBv = 0;

	function aBz() {
		return Math.pow(Math.pow(kO - kM, 2) + Math.pow(kP - kN, 2), .5)
	}

	function aBx(a6) {
		kM = dI.eD * a6.touches[0].clientX, kN = dI.eD * a6.touches[0].clientY, kO = dI.eD * a6.touches[1].clientX, kP = dI.eD * a6.touches[1].clientY
	}
	this.aBw = function(a6) {
		return 1 < a6.touches.length ? (aBv = gb.kH, aBu = 3, aBx(a6), nx.jc(), !0) : (aBu = 0, !1)
	}, this.aBy = function(a6) {
		var qa, bQ, bR;
		return 0 !== e.pq && 1 < a6.touches.length && (aBu = Math.max(aBu - 1, 0), sY.rY() && (qa = aBz(), aBx(a6), a6 = aBz(), bQ = Math.floor((kM + kO) / 2), bR = Math.floor((kN + kP) / 2), gR.aC0(bQ, bR, Math.max(.125, a6) / Math.max(.125,
			qa)), gb.gc = !0), !0)
	}, this.aC1 = function() {
		var dr, ds;
		return !!(aBu && (aBu = 0, gb.kH < aBv + 500)) && (dr = (kM + kO) / 2, ds = (kN + kP) / 2, nx.a3n(dr, ds), nx.click(dr, ds, !0) && (gb.gc = !0), !0)
	}
}

function aC2() {
	var aC3, aM;
	this.d = function() {
		for (var h = (aM = new Uint16Array(101)).length - 1; 0 <= h; h--) aM[h] = p(32768 * h, 100);
		this.a26(0)
	}, this.value = function(b6) {
		return aM[b6]
	}, this.a25 = function() {
		return p(aC3 - 1, 2)
	}, this.a26 = function(a24) {
		aC3 = 2 * a24 % 32768 + 1
	}, this.random = function() {
		return aC3 = 167 * aC3 % 32768
	}, this.u = function(we) {
		return p(we * this.random(), 32768)
	}, this.a6y = function(b6) {
		return 0 !== b6 && this.random() < this.value(b6)
	}
}

function aC4() {
	var a1o = 0;
	this.d = function() {
		n1.d(), a1o = 0
	}, this.setState = function(aC5) {
		a1o = aC5
	}, this.mw = function() {
		return a1o
	}, this.oK = function() {
		this.setState(8), uS.o9(), cq.s3()
	}, this.lQ = function(a6) {
		if (!ap.a1A) return !1;
		if (!(gb.kH < 400)) {
			if ("Enter" === a6.key || "Escape" === a6.key) {
				if (this.aC6()) return !0;
				if ("Enter" === a6.key) {
					if (0 === a1o) return !0;
					if (7 === a1o) return !0
				}
			}
			return !1
		}
	}, this.aC7 = function() {
		aC8.resize()
	}, this.aC6 = function() {
		return !!aC8.jc()
	}, this.jX = function(dr, ds) {
		!ap.a1A || aC8.jX(dr, ds) || 6 === a1o && gY.jX(dr, ds) || 2 === a1o && sj.jX(dr, ds) || (rH.jX(dr, ds), 0 !== a1o && 7 === a1o && uS.jX(dr, ds))
	}, this.jg = function(dr, ds) {
		if (!rH.r7) {
			if (2 === a1o && sj.jg(dr, ds)) return void rH.eX();
			if (n1.jg(dr, ds, !0)) return
		}
		rH.jg(dr, ds)
	}, this.click = function(dr, ds) {
		rH.jh(), a1f.jX(dr, ds, !1) || a1d.jX(dr, ds)
	}, this.rJ = function(dr, ds, deltaY) {}, this.aC9 = function() {
		n1.rE(), 0 !== a1o && 7 === a1o && uS.resize(), gb.gc = !0
	}, this.ge = function() {
		8 !== a1o && 10 !== a1o && (he.imageSmoothingEnabled = !0, this.mS(), 0 !== a1o && (rH.ge(), gX.ge(), this.a4r(), a1f.ge(), a1d.ge()), 0 !== a1o && (2 === a1o ? sj.ge() : 6 === a1o ? gY.ge() : 7 === a1o && uS.ge()), aC8.ge(), cq.ge())
	}, this.mS = function() {
		var aCB, aCA;
		if (makeMainMenuTransparent) he.clearRect(0, 0, dI.aU, dI.dJ);
		else ap.a1A ? (aCA = dI.aU / ap.aq, aCB = dI.dJ / ap.bj, he.setTransform(aCA = aCB < aCA ? aCA : aCB, 0, 0, aCA, Math.floor((dI.aU - aCA * ap.aq) / 2), Math.floor((dI.dJ - aCA * ap.bj) / 2)), he.drawImage(ap.fI, 0, 0), he.setTransform(1,
			0, 0, 1, 0, 0), he.fillStyle = a7.n7) : he.fillStyle = a7.wl, he.fillRect(0, 0, dI.aU, dI.dJ)
	}, this.a4r = function() {
		var ds = Math.floor(.3 * dI.dJ),
			fF = o0.a1H("territorial.io"),
			jV = (jV = 1.75 * dI.dJ / fF.width) * fF.width < .98 * dI.aU ? .98 * dI.aU / fF.width : jV,
			dr = (he.globalAlpha = .15, he.imageSmoothingEnabled = !1, Math.floor(.5 * (dI.aU - jV * fF.width))),
			dr = Math.floor(dr / jV),
			ds = Math.floor(ds - .5 * fF.height * jV),
			ds = Math.floor(ds / jV);
		he.setTransform(jV, 0, 0, jV, dr, ds), he.drawImage(fF, dr, ds), he.setTransform(1, 0, 0, 1, 0, 0), he.globalAlpha = 1, he.imageSmoothingEnabled = !0
	}
}

function aCC() {
	function aCD() {
		if (2 === e.pq) return 1;
		vY.a2n(), e.pq = 2, e.a6n = e.xB
	}

	function aCF() {
		a2j.result.eq(), a2j.result.aCI(), g8.x7(!0), g8.ww(247, 0), hP.hS(!0), hR.hS(!0), vY.hS(), vd.aCJ(), e.s5 && gb.aAC.aCK(), gb.gc = !0, gU.a3h(), dK.eE.setState(0)
	}
	this.a2l = function() {
		aCD() || (e.a6W = 2, a2j.result.aCE(), g8.vr(0, 59), sY.wj(2700), kJ.show(!1, !1, !0), aCF())
	}, this.a2m = function(wV) {
		aCD() || (e.a6W = 1, 8 === e.f ? (e.aCG = wV < 0 ? bC.cH[0] >= bC.cH[1] ? 0 : 1 : wV, e.wh = +(e.aCG === e.hK), e.wh ? g8.vr(e.aCG, 2) : g8.vr(1 - e.hK, 3), e.wk.gA(e.aCG)) : e.dj ? (e.wh = +(dm.e7[e.hK] === vZ.aCH()), 9 === e.f && g8
		.wg()) : (e.aCG = xk[0], e.wh = +(e.aCG === e.hK), g8.wU(e.aCG)), kJ.show(1 === e.wh, !1), aCF())
	}
}

function aCL() {
	"function" != typeof Math.log2 && (Math.log2 = function(dr) {
		return Math.log(dr) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(dr) {
		return Math.log(dr) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(dr) {
		return 0 < dr ? 1 : dr < 0 ? -1 : 0
	})
}

function aCM() {
	var dr, ds, aCO, aCP, aCQ, kH, player, aCR, gap, zoom, aCS, aCT, aCN = new Array(10);

	function aCd(player) {
		for (var h = aCS.length - 1; 0 <= h; h--)
			if (aCS[h] === player) return 1
	}

	function aCb(pS) {
		var h, aL;
		if (-1 !== pS)
			for (aL = aCN.length, h = 0; h < aL; h++)
				if (aCN[h].jR && aCN[h].dr + 1 === pS % 4 && aCN[h].ds + 1 === pS >> 2) return h;
		return -1
	}

	function aCZ(jY, jZ) {
		var oG = gap / 2;
		return jY < dr - aCO - 3 * oG || dr + 3 * aCO + 5 * oG < jY || jZ < ds - aCO - 3 * oG || ds + 2 * aCO + 3 * oG < jZ ? -1 : 4 * (jZ < ds - oG ? 0 : jZ < ds + aCO + oG ? 1 : 2) + (jY < dr - oG ? 0 : jY < dr + aCO + oG ? 1 : jY < dr + 2 * aCO +
			3 * oG ? 2 : 3)
	}
	this.a1e = function() {
		var h, fq, aCW = [a7.a4D, a7.a4H, a7.yz, a7.a4P, a7.a4L];
		for (aCN = new Array(8), h = 0; h < 8; h++) aCN[h] = {
			id: h,
			jR: !1,
			rW: 0,
			fF: [],
			dr: 0,
			ds: 0
		};
		for (aCN[0].colors = [0, 1, 2, 3], aCN[0].dr = 0, aCN[0].ds = 0, aCN[1].colors = [0, 1, 4], aCN[1].dr = 1, aCN[1].ds = 0, aCN[2].colors = [0, 2], aCN[2].dr = -1, aCN[2].ds = 0, aCN[3].colors = [0], aCN[3].dr = 0, aCN[3].ds = 0, aCN[4]
			.colors = [0, 2], aCN[4].dr = 1, aCN[4].ds = 1, aCN[5].colors = [3], aCN[5].dr = 0, aCN[5].ds = -1, aCN[6].id = 20, aCN[6].colors = [0], aCN[6].dr = 1, aCN[6].ds = -1, aCN[7].id = 21, aCN[7].colors = [0], aCN[7].dr = 0, aCN[7].ds = 1,
			h = 0; h < 8; h++)
			for (fq = 0; fq < aCN[h].colors.length; fq++) aCN[h].fF.push(function(id, sq) {
				if (id < 20) return ad.fF.so(o0.get(3), id, sq);
				var sq = o0.get(3).height,
					du = ad.ae.dh(sq, sq),
					dv = ad.ae.getContext(du);
				20 === id ? dv.drawImage(o0.get(18), 0, 0) : 21 === id && z.dx.wK(z.a0.a1 + z.a0.aCX, dv, 0, 0, sq);
				return du
			}(aCN[h].id, aCW[aCN[h].colors[fq]]))
	}, this.aCV = function() {
		return aCN
	}, this.d = function() {
		aCS = [], dr = ds = kH = 0, aCP = aCQ = -1e3, this.resize()
	}, this.resize = function() {
		aCO = Math.floor((dK.eE.eF() ? .075 : .0468) * dI.eC), zoom = aCO / o0.get(3).height, gap = Math.floor(aCO / 3)
	}, this.aCY = function(jY, jZ) {
		return !!this.jR() && (gb.gc = !0, !!z.dx.jX(jY, jZ, player) || (jY = function(jY, jZ) {
			aCQ = aCP = -1e3;
			var aCa = aCb(aCZ(jY, jZ));
			if (-1 === aCa) return 0;
			if (1 !== aCN[aCa].colors[aCN[aCa].rW])
				if (5 === aCa) {
					if (! function() {
							var h5 = performance.now();
							aCT + 4e3 < h5 && (aCS = []);
							aCT = h5
						}(), aCd(player)) return 1;
					aCS.push(player), 16 < aCS.length && aCS.shift()
				} else if (6 === aCa) {
				for (var h = aCS.length - 1; 0 <= h; h--) 0 === bC.e2[aCS[h]] && aCS.splice(h, 1);
				0 < aCS.length && (vX.ll(1, aCS, !0) && pP.hj.aCe(aCS, player), aCS = [])
			} else if (2 === aCa) pP.pQ.hl(ny.zD(), player);
			else if (3 === aCa) e.de && pP.pQ.rl(aCR);
			else if (0 === aCa)
				if (0 === aCN[0].rW) {
					if (e.aCf && hR.aCg() < 300) return 1;
					pP.pQ.pR(ny.zD(), player)
				} else vP.pT(player, ny.zD());
			else if (1 === aCa) aCh.aCi(), pP.pQ.rn(ny.zD(), aCR);
			else {
				if (7 === aCa) return aCh.aCj(), z.dx.show(jY, jZ), 2;
				if (4 !== aCa) return 0;
				vX.ll(0, [player], !0) && pP.hj.wD(player)
			}
			return 1
		}(jY, jZ), this.jc(), 2 === jY && (z.dx.jR = !0), 0 < jY))
	}, this.a3n = function(jY, jZ) {
		this.jR() || (aCP = jY, aCQ = jZ, kH = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = j3.bg(mouseX),
			coordY = j3.bh(mouseY),
			coord = j3.bk(coordX, coordY),
			point = j3.bm(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(jY, jZ, bJ) {
			bK.gr(bJ) || -1 === (jY = br.a0R.a42(jY, jZ)) ? g8.wW(bJ) : g8.wY(jY)
		}(mouseX, mouseY, point))
	}
	this.click = function(jY, jZ, aCk) {
		var bN = j3.bg(jY),
			bO = j3.bh(jZ),
			b7 = j3.bk(bN, bO),
			bJ = j3.bm(b7);
		return !(!j3.bi(bN, bO) || (bN = (dK.eE.eF() ? .025 : .0144) * dI.eC, bO = performance.now(), Math.abs(jY - aCP) > bN) || Math.abs(jZ - aCQ) > bN || kH + 500 < bO) && (kH = bO, aCk ? (function(jY, jZ, bJ) {
			bK.gr(bJ) || -1 === (jY = br.a0R.a42(jY, jZ)) ? g8.wW(bJ) : g8.wY(jY)
		}(jY, jZ, bJ), !1) : jb.pr || this.jR() || !ad.hj.m8(e.hK) || e.s5 ? (this.jc(), !1) : e.de ? !!bK.gr(bJ) && (aCR = b7, aCN[3].jR = !0, this.aCn(jY, jZ)) : (br.a0R.ro(b7) ? br.mR.m6 = -1 : br.a0R.a3x(jY, jZ) || (2 === e.pq ? bK
			.gh(bJ) && (player = bK.bM(bJ), bK.vD(player)) && (aCN[0].jR = !0, aCN[0].rW = 1, aCN[7].jR = !0) : bK.vH(bJ) || (aCR = b7, br.a0R.a3s(e.hK, b7) && (aCN[0].jR = !0, aCN[0].rW = 1, aCN[1].jR = !0, aCN[1].rW = hq.qE[2] ? 0 :
				2), bK.gn(bJ)) || (bK.bL(bJ) ? (player = e.o, h1(e.hK) ? (aCN[0].jR = !0, aCN[0].rW = 0) : gw(e.hK, player) && (aCN[0].jR = !0, aCN[0].rW = 3)) : (player = bK.bM(bJ)) === e.hK ? (aCN[0].jR = !0, aCN[0].rW = 1, aCN[7]
				.jR = !0) : (aCN[0].rW = 1, aCN[5].jR = function(player) {
				return bK.vD(player) && !aCd(player) && vX.ll(1, [player], !1)
			}(player), aCN[7].jR = bK.vD(player), gu(player, e.hK) ? (aCN[4].jR = bK.vD(player) && !x.aCp(player) && vX.ll(0, [player], !1), aCN[6].jR = function(player) {
				if (0 === aCS.length) return !1;
				if (performance.now() > aCT + 4e3) return !(aCS = []);
				return !aCd(player) && ! function(player) {
					var h;
					if (e.dj)
						for (h = aCS.length - 1; 0 <= h; h--)
							if (!gu(player, aCS[h])) return 1;
					return
				}(player)
			}(player), h2(e.hK, player) ? (aCN[0].rW = 0, aCN[0].jR = !0) : gw(e.hK, player) && (aCN[0].rW = 3, aCN[0].jR = !0), aCN[0].jR = this.aCr()) : (aCN[2].jR = !0, aCN[0].jR = !0)))), this.aCn(jY, jZ)))
	}, this.aCn = function(jY, jZ) {
		return dr = jY - Math.floor(aCO / 2), ds = jZ - Math.floor(aCO / 2), !!this.jR()
	}, this.jg = function(jY, jZ) {
		return !!this.jR() && (z.dx.jR ? !z.dx.yb(jY, jZ) && (z.dx.jR = !1, gb.gc = !0) : function(dg, jY, jZ) {
			jY = aCZ(jY, jZ);
			if (0 <= aCb(jY)) return !1;
			if ((1 === jY || 6 === jY) && 0 <= aCb(2)) return !1;
			if ((6 === jY || 9 === jY) && 0 <= aCb(10)) return !1;
			return dg.jc(), gb.gc = !0
		}(this, jY, jZ))
	}, this.jc = function() {
		for (var h = aCN.length - 1; 0 <= h; h--) aCN[h].jR = !1, aCN[h].rW = 0;
		z.dx.jR = !1
	}, this.jR = function() {
		return this.aCr() || z.dx.jR
	}, this.aCr = function() {
		for (var aL = aCN.length, h = 0; h < aL; h++)
			if (aCN[h].jR) return !0;
		return !1
	}, this.ge = function() {
		if (this.jR())
			if (z.dx.jR) z.dx.ge();
			else {
				var h, dv = he,
					fq = aCN,
					aL = fq.length,
					aCw = (aCO + gap) / zoom;
				for (dv.imageSmoothingEnabled = !0, dv.setTransform(zoom, 0, 0, zoom, dr, ds), h = 0; h < aL; h++) fq[h].jR && he.drawImage(fq[h].fF[fq[h].rW], fq[h].dr * aCw, fq[h].ds * aCw);
				dv.imageSmoothingEnabled = !1, dv.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aCx() {
	var aCy, aCz, aD0 = -15e3,
		aD1 = !1;

	function jX(a6) {
		aDG() || (aD1 = !0, aDH(a6, 1), ce.cf.a8T(ce.cf.i6), aDI(Math.floor(dI.eD * a6.clientX), Math.floor(dI.eD * a6.clientY)))
	}

	function aBw(a6) {
		aD0 = gb.kH, aDH(a6, 1), ce.cf.a8T(ce.cf.i6), 0 < a6.touches.length && (aCy = Math.floor(dI.eD * a6.touches[0].clientX), aCz = Math.floor(dI.eD * a6.touches[0].clientY), aDJ.aBw(a6) || aDI(aCy, aCz))
	}

	function aDI(dr, ds) {
		cq.jX(dr, ds), 0 === e.pq ? gd.jX(dr, ds) : vd.aDK(dr, ds) || s4.jX(dr, ds) || kJ.jX(dr, ds) || nx.aCY(dr, ds) || vW.jX(dr, ds) || jb.jX(dr, ds) || yd.a3m(dr, ds) || vY.jX(dr, ds) || nx.a3n(dr, ds)
	}

	function jg(a6) {
		aDG() || (aD1 = !0, aDH(a6, 1), aDL(Math.floor(dI.eD * a6.clientX), Math.floor(dI.eD * a6.clientY)))
	}

	function aBy(a6) {
		aD0 = gb.kH, aDH(a6, 1), 0 < a6.touches.length && (aCy = Math.floor(dI.eD * a6.touches[0].clientX), aCz = Math.floor(dI.eD * a6.touches[0].clientY), aDJ.aBy(a6) || aDL(aCy, aCz))
	}

	function aDL(dr, ds) {
		cq.jg(dr, ds), 0 === e.pq ? gd.jg(dr, ds) : (aDM.a76(dr, ds), s4.jg(dr, ds) || (jb.jg(dr, ds), nx.jR() ? nx.jg(dr, ds) : ny.a7A ? ny.jg(dr) && (gb.gc = !0) : (hP.jg(dr, ds), gR.aDN && gR.jg(dr, ds) && (gb.gc = !0))))
	}

	function aD6(a6) {
		aDG() || (aDH(a6, 1), a3V(), 0 === e.pq ? (gd.click(-1024, -1024), rH.eX()) : (hP.jh(-1024, -1024), jb.jg(-1024, -1024), ny.aDO(), gR.aDN && (gR.aDN = !1)))
	}

	function a3k(a6) {
		aDG() || (aDH(a6, 1), aDP(Math.floor(dI.eD * a6.clientX), Math.floor(dI.eD * a6.clientY), 2 === a6.button), yd.aD4 && (yd.aD4 = !1, a6.preventDefault()))
	}

	function click(a6) {
		aDG() || aDH(a6, 1)
	}

	function aD7(a6) {
		aD0 = gb.kH, aDH(a6, 1), a6 && a6.touches && 0 < a6.touches.length && 0 !== e.pq ? gR.aDN = !1 : aDJ.aC1() || (aDP(aCy, aCz, !1), yd.aD4 && (yd.aD4 = !1, a6.preventDefault()))
	}

	function aD8(a6) {
		aD0 = gb.kH, aDH(a6, 1), aDP(aCy, aCz, !1), yd.aD4 && (yd.aD4 = !1, a6.preventDefault())
	}

	function aD9(a6) {
		oL.aD9(a6)
	}

	function aDA(a6) {
		oL.aDA(a6)
	}

	function aDB(a6) {
		aDG() || aDH(a6, 0)
	}

	function aDP(dr, ds, aCk) {
		a3V(), 0 === e.pq ? gd.click(dr, ds) : (hP.jh(dr, ds), s4.jh(), ny.aDO(), gR.aDN = !1, nx.click(dr, ds, aCk) ? gb.gc = !0 : jb.a3k(dr, ds))
	}

	function a3V() {
		cq.a3V()
	}

	function rJ(a6) {
		var dr, ds, deltaY;
		aDG() || (aDH(a6, 1), ce.cf.a8T(ce.cf.i6), dr = Math.floor(dI.eD * a6.clientX), ds = Math.floor(dI.eD * a6.clientY), deltaY = a6.deltaY, 1 === a6.deltaMode && (deltaY *= 16), cq.rJ(dr, ds, deltaY), 0 === e.pq ? gd.rJ(dr, ds, deltaY) : hP.rJ(
			dr, ds, deltaY) || (ny.lP(dr, ds) ? ny.rJ(deltaY) && (gb.gc = !0) : gR.rJ(dr, ds, deltaY)))
	}

	function aDC(a6) {
		aDH(a6, 0)
	}

	function aDH(a6, id) {
		0 === id && cq.jR() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== gd.mw() && a6.preventDefault()
	}

	function aDE(a6) {
		if (keybindHandler(a6.key)) return;
		aDG() || ("ArrowLeft" === a6.key ? a5V.a5Q(3) : "ArrowUp" === a6.key ? a5V.a5Q(0) : "ArrowRight" === a6.key ? a5V.a5Q(1) : "ArrowDown" === a6.key ? a5V.a5Q(2) : "a" === a6.key ? ny.aDR(.9375) : "d" === a6.key ? ny.aDR(16 / 15) : "s" === a6
			.key ? ny.aDR(7 / 8) : "w" === a6.key ? ny.aDR(8 / 7) : "1" === a6.key ? ny.aDR(.75) : "2" === a6.key ? ny.aDR(7 / 8) : "3" === a6.key ? ny.aDR(.9375) : "4" === a6.key ? ny.aDR(31 / 32) : "5" === a6.key ? ny.aDR(32 / 31) : "6" === a6
			.key ? ny.aDR(16 / 15) : "7" === a6.key ? ny.aDR(8 / 7) : "8" === a6.key ? ny.aDR(4 / 3) : "+" === a6.key ? 0 !== e.pq && gR.rJ(Math.floor(dI.aU / 2), Math.floor(dI.dJ / 2), -200) : "-" === a6.key ? 0 !== e.pq && gR.rJ(Math.floor(dI
				.aU / 2), Math.floor(dI.dJ / 2), 200) : "c" === a6.key ? 0 !== e.pq && s4.jd() : " " === a6.key ? e.pq && aDM.a77(!1) : "b" === a6.key && e.pq && aDM.a77(!0))
	}

	function aDD(a6) {
		aDG() || gb.kH < 400 || "Enter" === a6.key && cq.lQ(1) || (8 !== gd.mw() && gd.lQ(a6) ? gb.gc = !0 : "Escape" === a6.key ? yd.aDS() : "ArrowLeft" === a6.key || "a" === a6.key ? a5V.a5S(3) : "ArrowUp" === a6.key || "w" === a6.key ? a5V.a5S(
			0) : "ArrowRight" === a6.key || "d" === a6.key ? a5V.a5S(1) : "ArrowDown" === a6.key || "s" === a6.key ? a5V.a5S(2) : "h" === a6.key ? vd.a3d(!e.yg) : " " === a6.key && e.pq && (jb.pr && jb.ji(), e.s5) && vd.a3f(!1))
	}

	function aDF() {
		"hidden" === document.visibilityState ? 1 === e.pq && (e.s5 ? vd.aDT() : !e.sU || jb.pr || e.de || jb.ji()) : gb.gc = !0
	}

	function aDG() {
		return aD0 + 15e3 > gb.kH
	}

	function resize() {
		dI.aDV()
	}
	this.aD2 = 0, this.aD3 = "", this.aD4 = !1, this.d = function() {
		aD5.addEventListener("mousedown", jX, {
			passive: !1
		}), aD5.addEventListener("mousemove", jg, {
			passive: !1
		}), aD5.addEventListener("mouseup", a3k, {
			passive: !1
		}), aD5.addEventListener("click", click, {
			passive: !1
		}), aD5.addEventListener("mouseleave", aD6, {
			passive: !1
		}), aD5.addEventListener("wheel", rJ, {
			passive: !1
		}), aD5.addEventListener("touchstart", aBw, {
			passive: !1
		}), aD5.addEventListener("touchmove", aBy, {
			passive: !1
		}), aD5.addEventListener("touchend", aD7, {
			passive: !1
		}), aD5.addEventListener("touchcancel", aD8, {
			passive: !1
		}), aD5.addEventListener("dragover", aD9), aD5.addEventListener("drop", aDA), aD5.addEventListener("dblclick", aDB), document.addEventListener("contextmenu", aDC), document.addEventListener("keyup", aDD), document.addEventListener(
			"keydown", aDE), document.addEventListener("visibilitychange", aDF), window.addEventListener("resize", resize)
	}, this.a3m = function(dr, ds) {
		return !!vd.jX(dr, ds) || !!(hP.jX(dr, ds) || gR.jX(dr, ds) || ny.jX(dr, ds) || g8.jX(dr, ds))
	}, this.ye = aDG, this.aDU = function() {
		return !aD1 || 0 < aD0
	}, this.aDS = function() {
		if (!cq.jR()) return 8 === gd.mw() ? e.yg ? void vd.a3d(!1) : s4.jR ? void s4.ji() : void jb.ji() : void(7 === gd.mw() ? uS.a7d() : 6 === gd.mw() ? gY.n0() : 2 === gd.mw() && sj.oH());
		cq.lQ(2)
	}
}

function a6Z() {
	this.d = function() {
		0 === aB.dF.data[181].value && (aB.dF.a5y(180, Math.floor(Math.random() * l.pow(30))), aB.dF.a5y(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function aDW() {
	this.size = 0, this.aA = 0, this.aT = null, this.d = function(aT) {
		this.aA = 0, this.aT = aT, this.size = aT.length
	}, this.o9 = function() {
		this.aT = null
	}, this.ci = function(size) {
		for (var b8 = 0, aT = this.aT, rY = this.aA + size - 1, h = this.aA; h <= rY; h++) b8 |= (aT[h >> 3] >> 7 - (7 & h) & 1) << rY - h;
		return this.aA += size, this.aA > 8 * this.size && console.log("error unwrapper"), b8
	}, this.g5 = function(size) {
		var fq = size >> 1;
		return (1 << fq) * this.ci(size - fq) + this.ci(fq)
	}, this.aDX = function(size) {
		for (var aM = new Array(size), h = 0; h < size; h++) aM[h] = this.ci(10);
		return ni.ib(aM)
	}, this.ck = function(aDY) {
		return this.size === aP.cd(aDY)
	}
}

function aDZ() {
	this.a2k = new aCC, this.aDa = new a8n, this.result = new aDb, this.a0R = new a91
}

function aDc() {
	this.ms = function(fU) {
		var username = aB.dF.data[122].value.slice(0, 20),
			username = (aP.aQ(22 + 16 * username.length + 18), aP.aV(1, 0), aP.aV(6, 1), aP.aV(10, d6), ce.fR.fZ(username), ad.color.eb(aB.cf.ec()));
		aP.aV(6, username[0]), aP.aV(6, username[1]), aP.aV(6, username[2]), ce.cf.uR = fU, ce.cf.send(fU, aP.aT)
	}, this.a7y = function(a7t) {
		return aP.aQ(11), aP.aV(1, 0), aP.aV(6, 2), aP.aV(4, a7t), ce.cf.send(ce.cf.uR, aP.aT), !0
	}
}

function aDd() {
	this.nv = function() {
		var aDg;
		return !(jB < 3 || bC.cH[xk[0]] >= e.a1R >> 1) && (e.dj ? (aDg = hW.aDh(), !(2 * hW.aDj(vZ.a8p()) >= aDg)) : function() {
			var aDg = hW.aDh();
			if (2 * bC.bc[xk[0]] >= aDg) return !1;
			return !0
		}())
	}
}

function q0() {
	this.jR = !1;
	this.m5 = [], this.m4 = 100;
	var kM, kN, gap, di, aDk, aDm, aDo = 0,
		aDp = new Array(9),
		aDq = [],
		aDr = [],
		aDs = 0,
		aDt = 0,
		aDu = 0,
		aDv = 0;

	function aE4() {
		aDp.sort(function(d1, fq) {
			return fq.zM - d1.zM
		});
		for (var aH = "" + aDp[0].wc, h = 1; h < 9; h++) aH += "," + aDp[h].wc;
		for (h = 0; h < 9; h++) aH += "," + aDp[h].zM;
		aB.dF.a5y(120, aH)
	}
	this.d = function() {
		for (var aDw = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], h = 0; h < aDw.length; h++) {
			var color = 6 === aDw[h] ? a7.a4D : a7.yz;
			this.m5.push(ad.fF.so(o0.get(3), aDw[h], color))
		}
		for (h = 0; h < z.a0.a7i; h++) aDr.push(z.a0.aDx - z.a0.a7i + h);
		for (h = 0; h < z.a0.aDy; h++) aDr.push(z.a0.a1 + h);
		var aDz = z.a0.aE0(sC.aDz);
		for (h = 0; h < aDz.length; h++) aDr.push(aDz[h]);
		! function() {
			var h, aM = aB.dF.data[120].value.split(",");
			if (18 !== aM.length)
				for (h = 0; h < 9; h++) aDp[h] = {
					wc: 1015 + h,
					zM: 0
				};
			else
				for (h = 0; h < 9; h++) {
					var b8 = parseInt(aM[h]),
						fm = (b8 = 0 <= b8 && b8 < z.a0.aDx ? b8 : 0, parseInt(aM[h + 9]));
					fm = 0 <= fm && fm < 1e3 ? fm : 0, aDp[h] = {
						wc: b8,
						zM: fm
					}
				}
		}()
	}, this.show = function(jY, jZ, xY = 0) {
		var h;
		if (aDs = jY, aDt = jZ, aDo = xY, this.jR = !0, aDq = [], 0 === aDo)
			for (h = 0; h < 9; h++) aDq.push(aDp[h].wc);
		else {
			var fq = 49 * aDo,
				xY = fq - 49;
			for (xY >= aDr.length && (aDo = 1, xY = 0, fq = 49), h = xY = (fq = Math.min(fq, aDr.length)) - 49; h < fq; h++) aDq.push(aDr[h])
		}
		aDq.push(1024);
		xY = aDq.length, di = Math.floor((dK.eE.eF() ? .075 : .0468) * dI.eC), gap = Math.floor(di / 3), (aDu = 10 * (aDk = di + gap)) > dI.aU && (aDu = dI.aU, gap = (aDk = aDu / 10) - (di = 3 * aDk / 4)), aDm = l.m(xY, 10) + !!(xY % 10), (aDv =
			aDm * aDk) > dI.dJ && (aDv = dI.dJ, gap = (aDk = aDv / aDm) - (di = 3 * aDk / 4)), this.m4, xY = .5 * gap;
		kM = Math.min(Math.max(jY - .5 * aDu + xY, xY), dI.aU - aDu + xY), kN = Math.min(Math.max(jZ - .5 * aDv + xY, xY), dI.dJ - aDv + xY)
	}, this.jX = function(jY, jZ, player) {
		if (!this.jR) return !1;
		if (this.yb(jY, jZ)) {
			jY = l.lM(l.m(jY - kM + .5 * gap, aDk), 0, 9);
			if ((jY += 10 * l.lM(l.m(jZ - kN + .5 * gap, aDk), 0, 9)) >= aDq.length) return nx.jc(), !0;
			jZ = aDq[jY];
			if (1024 === jZ) return this.show(aDs, aDt, aDo + 1), !0;
			! function(wc) {
				for (var h = 0; h < 9; h++) aDp[h].zM = Math.floor(.99 * aDp[h].zM);
				for (h = 0; h < 9; h++)
					if (wc === aDp[h].wc) return aDp[h].zM = Math.min(aDp[h].zM + 30, 999), aE4();
				aDp.splice(5, 0, {
					wc: wc,
					zM: Math.max(aDp[4].zM, 30)
				}), aDp.pop(), aE4()
			}(jZ), player === e.hK ? pP.pQ.wa(jZ) : pP.hj.aE6(jZ, player)
		}
		return nx.jc(), !0
	}, this.yb = function(jY, jZ) {
		return !(jY < kM - .5 * gap || jZ < kN - .5 * gap || kM + aDu - .5 * gap <= jY || kN + aDv - .5 * gap <= jZ)
	}, this.ge = function() {
		he.fillStyle = a7.jn, he.fillRect(kM - .5 * gap, kN - .5 * gap, aDu, aDv);
		for (var kp = .5 * ag.e9, aL = (he.lineWidth = ag.e9, he.strokeStyle = he.fillStyle = a7.a8, he.strokeRect(kM - .5 * gap + kp, kN - .5 * gap + kp, aDu - 2 * kp, aDv - 2 * kp), he.imageSmoothingEnabled = !0, aDq.length), h = 0; h <
			aL; h++) this.wK(aDq[h], he, kM + h % 10 * aDk, kN + l.m(h, 10) * aDk, di);
		he.imageSmoothingEnabled = !1
	}, this.wK = function(wc, dv, dr, ds, di) {
		var bJ;
		wc >= 1024 - z.a0.a7i ? (bJ = di / this.m4, dv.setTransform(bJ, 0, 0, bJ, dr, ds), dv.drawImage(this.m5[wc - 1024 + z.a0.a7i], 0, 0), dv.setTransform(1, 0, 0, 1, 0, 0)) : (ad.ae.textAlign(dv, 1), ad.ae.textBaseline(dv, 1), dv.font = ad.ae
			.hL(0, .89 * di), dv.fillText(z.a0.aE7(wc), dr + .5 * di, ds + (.35 - ad.ae.lU + .56) * di))
	}
}

function px() {
	aE8.mS(), he.setTransform(be, 0, 0, be, 0, 0), he.imageSmoothingEnabled = be < 3, he.drawImage(ap.fI, gR.gS(), gR.gT()), sd.aE9.ge(), he.drawImage(aEA, gR.gS(), gR.gT()), aE8.ge(), he.imageSmoothingEnabled = !1, he.setTransform(1, 0, 0, 1, 0, 0),
		br.aE9.ge(), x.ge(), vT.ge(), (e.yg ? (vZ.ge(), vd) : (g8.ge(), hP.ge(), ny.ge(), vd.ge(), vY.ge(), hR.ge(), gR.ge(), jk.ge(), vZ.ge(), vV.ge(), vW.ge(), jb.ge(), nx.ge(), kJ.ge(), s4.ge(), sa)).ge(), cq.ge()
}

function a2X(hC, aU, dJ) {
	hC.clearRect(0, 0, aU, dJ), hC.fillStyle = a7.jn, hC.fillRect(0, 0, aU, dJ)
}

function a2Z(hC, aU, dJ, a2b) {
	hC.fillStyle = a7.a8, hC.fillRect(0, 0, aU, a2b), hC.fillRect(0, 0, a2b, dJ), hC.fillRect(aU - a2b, 0, a2b, dJ), hC.fillRect(0, dJ - a2b, aU, a2b)
}

function a2c(hC, dr, ds, di, a2b, b6, aEB) {
	hC.fillStyle = a7.a8;
	var b6 = Math.floor(di * b6),
		jG = (b6 += (b6 - a2b) % 2, Math.floor((b6 - a2b) / 2)),
		di = Math.floor((di - b6) / 2);
	hC.fillRect(dr + di, ds + di + jG, b6, a2b), aEB && hC.fillRect(dr + di + jG, ds + di, a2b, b6)
}

function aED() {
	this.a6k = function(player) {
		for (var xI = br.cf.xI, j2 = player << 3, h = j2 + br.cf.q7[player] - 1; j2 <= h; h--) this.pe(xI[h])
	}, this.pe = function(aEE) {
		var cf = br.cf,
			aEF = cf.pb - 1,
			aEG = cf.pg[aEE],
			aEH = cf.j5[aEE],
			aEI = cf.pZ[aEE];
		cf.pb = aEF, cf.pg[aEE] = cf.pg[aEF], cf.xG[aEE] = cf.xG[aEF], cf.pa[aEE] = cf.pa[aEF], cf.pZ[aEE] = cf.pZ[aEF], cf.xH[aEE] = cf.xH[aEF], cf.pi[aEE] = cf.pi[aEF], cf.j5[aEE] = cf.j5[aEF], cf.m9[aEE] = cf.m9[aEF], cf.pY[aEE] = cf.pY[aEF],
			cf.xI[cf.pg[aEE]] = aEE,
			function(a7o) {
				var player = a7o >> 3,
					cf = br.cf,
					aL = cf.q7[player] - 1,
					aEL = (player << 3) + aL;
				cf.q7[player] = aL, aEL !== a7o && (cf.xI[a7o] = cf.xI[aEL], cf.pg[cf.xI[a7o]] = a7o)
			}(aEG), br.bs.bs[j3.bq(cf.pZ[aEE])][cf.j5[aEE]] = aEE, aEF = j3.bq(aEI), aEG = aEH, aEF = br.bs.bs[aEF], cf = aEF.pop(), aEG !== aEF.length && (aEF[aEG] = cf, br.cf.j5[cf] = aEG)
	}
}

function a8E(title, aa, a1l = [new kl("❌ " + dL.al[92], function() {
	cq.a0m()
}, a7.sN)]) {
	var kR, a1m;
	this.show = function() {
		kR.show(), this.resize()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), a1m.resize()
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, kR = new kh(title, a1l), a1m = new aY(kR.oZ, aa), ad.ae.textAlign(kR.oZ.style, 1)
}

function aEN() {
	this.aBN = function(fU) {
		var qn = aS.ci(3),
			qm = a6l.dR.v(aS.ci(16), aS.ci(20));
		ce.fR.ql(fU, qm, qn), 0 < qn || (0 === fU && 0 === aB.dF.data[105].value.length ? ce.fR.qo(0) : ce.aEO.fT(fU), 4 === ce.cf.a8M(fU).aBp() ? 6 === gd.mw() && ce.mr.ms(fU) : 5 !== ce.cf.a8M(fU).aBp() || 8 !== gd.mw() && 10 !== gd.mw() || ce
			.wb.i1())
	}, this.aBP = function() {
		var id = aS.ci(6);
		0 === id ? (rH.r6 || ce.fR.qo(1), 8 === cq.cr && cq.cs().aEP()) : 21 === id ? 8 === cq.cr && cq.cs().ct(17) : 22 === id && (aB.aC.aD(106, aB.dF.data[110].value), aB.aC.aD(110, ""), 8 === cq.cr) && cq.cs().ct(15)
	}
}

function aEQ() {
	var fF, hC, aER, font, lK = 0,
		aES = !1,
		aET = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aEU = 5;

	function jm() {
		if (aES) {
			var h, aL = aET.length,
				jJ = Math.floor(.5 * aER.dJ),
				dJ = aL * jJ,
				dr = Math.floor(Math.floor(aER.dr) + .3 * aER.aU - .5),
				ds = Math.floor(Math.floor(aER.ds) - dJ),
				aU = Math.floor(.4 * aER.aU + 2.5);
			for (he.fillStyle = a7.pF, he.fillRect(dr, ds, aU, dJ), he.fillStyle = a7.yJ, he.fillRect(dr, ds + aEU * jJ, aU, jJ), he.fillStyle = a7.a8, he.fillRect(dr, ds, 2, dJ), he.fillRect(dr, ds, aU, 2), he.fillRect(dr + aU - 2, ds, 2, dJ), h =
				1; h < aL; h++) he.fillRect(dr, ds + h * jJ, aU, 2);
			for (he.fillStyle = a7.a8, ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1), he.font = ad.ae.hL(0, .6 * jJ), dr += .5 * aU, h = 0; h < aL; h++) he.fillText(aEg(h), dr, ds + (h + .6) * jJ)
		}
		he.drawImage(fF, Math.floor(aER.dr), Math.floor(aER.ds))
	}

	function jl(dg) {
		var dr, kM, kN, jJ;
		hC.clearRect(0, 0, Math.floor(aER.aU), Math.floor(aER.dJ)), hC.fillStyle = a7.pF, hC.fillRect(0, 0, Math.floor(aER.aU), Math.floor(aER.dJ)), e.yg && (hC.fillStyle = a7.yJ, hC.fillRect(0, 0, Math.floor(.3 * aER.aU), Math.floor(aER.dJ))), hC
			.fillStyle = a7.a8, hC.fillText("Hide UI", .15 * aER.aU, .5 * aER.dJ), hC.fillRect(Math.floor(.3 * aER.aU - .5), 0, 2, Math.floor(aER.dJ)), dr = .5 * aER.aU, hC.fillText("Replay Speed", dr, .31 * aER.dJ), hC.fillText(aEg(aEU), dr, .69 *
				aER.dJ), hC.fillRect(Math.floor(.7 * aER.aU - .5), 0, 2, Math.floor(aER.dJ)), dg.a3e ? (dr = Math.floor(.02 * aER.aU), dg = Math.floor(.025 * aER.aU), kM = Math.floor(.85 * aER.aU - dr - .5 * dg), kN = Math.floor(.25 * aER.dJ), jJ =
				Math.floor(aER.dJ) - 2 * kN, hC.fillRect(kM, kN, dr, jJ), hC.fillRect(kM + dr + dg, kN, dr, jJ)) : function() {
				var aU = Math.floor(.46 * aER.dJ),
					dJ = Math.floor(.23 * aER.dJ),
					dr = Math.floor(.85 * aER.aU - .5 * aU + aU / 12),
					ds = Math.floor(.5 * aER.dJ - dJ);
				hC.beginPath(), hC.moveTo(dr, ds), hC.lineTo(dr + aU, ds + dJ), hC.lineTo(dr, ds + (dJ << 1)), hC.fill()
			}(), hC.fillRect(0, 0, Math.floor(aER.aU), 2), hC.fillRect(0, 0, 2, Math.floor(aER.dJ)), hC.fillRect(0, Math.floor(aER.dJ) - 2, Math.floor(aER.aU), 2), hC.fillRect(Math.floor(aER.aU - 2), 0, 2, Math.floor(aER.dJ))
	}

	function aEg(h) {
		return 5 === h ? "Normal" : "" + aET[h]
	}
	this.a3e = !1, this.d = function() {
		e.s5 && (aEU = 5, this.a3e = !1, aES = !1, aER = new a4k([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aEV = function() {
		return aET[aEU]
	}, this.gT = function() {
		return aER.ds
	}, this.w8 = function(aAk) {
		return !!e.s5 && aER.dr + aER.aU > dI.aU - aAk - ag.gap
	}, this.resize = function() {
		e.s5 && (aER.resize(), aER.ds -= (w9.wA() - 1) * ag.gap, font = ad.ae.hL(0, .3 * aER.dJ), (fF = document.createElement("canvas")).width = Math.floor(aER.aU), fF.height = Math.floor(aER.dJ), (hC = fF.getContext("2d", {
			alpha: !0
		})).font = font, ad.ae.textAlign(hC, 1), ad.ae.textBaseline(hC, 1), jl(this))
	}, this.a3d = function(aEW) {
		0 === e.pq || cq.jR() || aEW !== e.yg && (e.yg = aEW, vZ.resize(), gb.gc = !0, e.s5) && (lK = gb.kH + 2e3, jl(this))
	}, this.jX = function(dr, ds) {
		if (!e.s5) return !1;
		if (dr < aER.dr || ds < aER.ds || dr > aER.dr + aER.aU) return aES && function(dg, dr, ds) {
			var aL = aET.length,
				jJ = Math.floor(.5 * aER.dJ),
				dJ = aL * jJ,
				kM = Math.floor(Math.floor(aER.dr) + .3 * aER.aU - .5),
				dJ = Math.floor(Math.floor(aER.ds) - dJ),
				aU = Math.floor(.4 * aER.aU + 2.5);
			return aES = !1, gb.gc = !0, dr < kM || kM + aU < dr || ds < dJ || (aEU = yf(0, Math.floor((ds - dJ) / jJ), aL - 1), jl(dg)), !0
		}(this, dr, ds);
		if ((dr -= aER.dr) < .3 * aER.aU) aES = !1, this.a3d(!e.yg);
		else {
			if (dr < .7 * aER.aU) return aES = !aES, gb.gc = !0;
			this.a3f(!1)
		}
		return !0
	}, this.a3f = function(aEY) {
		2 === e.pq ? (this.a3d(!1), cq.kn(3)) : (aES = !1, this.a3e = !this.a3e, this.a3e ? (jb.pr && jb.ji(), dK.eE.setState(1)) : aEY || jb.a3g(), gb.gc = !0, jl(this))
	}, this.aDT = function() {
		this.a3e = !1, jb.a3g(), gb.gc = !0, jl(this)
	}, this.aDK = function(dr, ds) {
		return !!e.yg && (jb.jX(dr, ds) || (e.s5 ? ((gb.kH > lK || !this.jX(dr, ds)) && gR.jX(dr, ds), gb.gc = !0, lK = gb.kH + 2e3) : gR.jX(dr, ds)), !0)
	}, this.v = function() {
		e.s5 && e.yg && gb.kH > lK - 1e3 && gb.kH < lK && (gb.gc = !0)
	}, this.aCJ = function() {
		e.s5 && (this.a3e = !1, gb.gc = !0, jl(this))
	}, this.ge = function() {
		if (e.s5) {
			if (e.yg) {
				if (gb.kH > lK) return;
				if (gb.kH > lK - 1e3) return he.globalAlpha = yf(0, (1e3 - (gb.kH - (lK - 1e3))) / 1e3, 1), jm(), void(he.globalAlpha = 1)
			}
			jm()
		}
	}
}

function dS() {
	function aEm(b8, a24, min, max) {
		return min + (b8 * a24 + 137) % (max - min)
	}
	this.v = function(aEh, aEi) {
		for (var aEk = 1, h = 0; h <= 10; h++) aEk = function(aEk, aEh, aEi, bJ) {
			for (var aL = 65536 + (aEk * bJ + 7 & 16383), h = 0; h < aL; h++) aEk = 1 + aEk * aEh % aEi;
			return aEk
		}(aEk, aEh, aEi, h), aEh = aEm(aEh, aEk, 16384, 65536), aEi = aEm(aEi, aEk, 1 << 18, 1 << 20);
		return aEk - 1 & 65535
	}
}

function aEn() {
	function j8(iz, aEo) {
		if (function(iz, a3t) {
				var au = j3.bp(iz),
					aEs = Math.abs(j3.aw(a3t) - j3.aw(au)),
					au = Math.abs(j3.ay(a3t) - j3.ay(au));
				return 0 !== Math.max(aEs, au) && (function(iy, iz, aEs, aEt) {
					var aEv = j3.bV(iy),
						iy = j3.bY(iy),
						aEx = j3.bV(iz),
						iz = j3.bY(iz),
						aEx = aEx - aEv,
						iz = iz - iy,
						aF1 = Math.abs(aEx),
						aF2 = Math.abs(iz),
						aEx = 0 < aEx ? 1 : 3,
						iz = 0 < iz ? 2 : 0;
					aF2 < aF1 ? aF5(aEv, iy, aEv + aF1, iy + aF2, aEx, iz, aEs) : aF5(iy, aEv, iy + aF2, aEv + aF1, iz, aEx, aEt)
				}(iz, j3.bo(a3t), aEs, au), !0)
			}(iz, aEo)) {
			if (0 === hq.aEq[0]) return !!bK.gn(aEo << 2);
			if (function(a3t) {
					if (bK.gn(a3t << 2)) return 1;
					return function(a3t) {
						var h, b3, xE = br.cf.xE,
							aFA = j3,
							aL = hq.aEq[0],
							aFB = 4 * a3t;
						for (h = aL - 1; 0 <= h; h--)
							if (b3 = xE[h], aFB = aFA.bv(aFB, b3 + 2 & 3), bK.gn(aFB)) return hq.aEq[0] = h, hq.qE[1] = aFB >> 2, hq.qE[2] = 1 + b3, 1;
						return
					}(a3t)
				}(aEo)) {
				var h, aEo = j3.bp(iz),
					dx = vE,
					xE = br.cf.xE,
					aL = hq.aEq[0] - 1,
					aFB = 4 * aEo,
					ao = j3.ao;
				for (h = 0; h < aL; h++)
					if (aFB += ao[xE[h]], 0 !== dx[aFB + 3] || 2 !== dx[aFB + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aF5(aEv, aEw, aEx, aEy, aF3, aF4, aEs) {
		for (var ds, xE = br.cf.xE, eO = 0, aF6 = 0, dJ = aEy - aEw, aU = aEx - aEv, aF7 = aEv % 16, h = 1; h <= aEs; h++) xE[eO++] = aF3, xE[eO] = aF4, eO += (ds = (dJ * (aF7 + (h << 4)) + .5) / aU >> 4) - aF6, aF6 = ds;
		hq.aF8(hq.aEq, eO)
	}
	this.qH = function(player, aEo) {
		var b3, au, at = j3.b5(player, aEo);
		return at !== aEo && (b3 = j3.ar(at, aEo), au = j3.bu(at, b3), !(!bK.gn(au << 2) && (b3 = j3.b2(at, aEo, b3), au = j3.bu(at, b3), bK.go(au << 2) || !bK.gn(au << 2)) || (hq.qE[0] = au, hq.qE[1] = aEo, hq.qE[2] = 0, !j8(j3.bo(au), aEo)) ||
			0 !== hq.qE[2] && j3.bI(player, hq.qE[1] + j3.an[hq.qE[2] - 1] << 2)))
	}, this.a3w = function(aEo) {
		var iy = br.cf.pZ[hq.qE[3]];
		return hq.qE[1] = aEo, hq.qE[2] = 0, j8(iy, aEo)
	}
}

function sA(id, lu) {
	var kR, a1m;

	function aFF() {
		a1m.ac.innerHTML += "<br>New Connection..."
	}
	this.aFD = !0, this.show = function() {
		kR.show(), this.resize(), 15 === id ? ce.cf.mq(0, id) ? this.aFE() : aFF() : 16 === id ? ce.cf.mq(0, id) ? ce.fR.qo(2) : aFF() : 17 === id ? ce.cf.mq(0, id) ? ce.fR.qo(3) : aFF() : 18 === id ? (ce.cf.close(0, 3253), ce.cf.mq(0, id),
		aFF()) : 20 === id ? ce.cf.mq(0, id) ? ce.aEO.fY(lu) : aFF() : 21 === id ? ce.cf.mq(0, id) ? ce.aFG.aFH(lu.ch, lu.j2, lu.j4) : aFF() : 22 === id ? ce.cf.mq(0, id) ? ce.aFG.aFI(lu.ch, lu.aFJ, lu.aFK) : aFF() : 23 === id ? ce.cf.mq(0,
			id) ? ce.aFG.aFL(lu.ki, lu.sm) : aFF() : 24 === id && (ce.cf.mq(0, id) ? ce.aFG.aFM(lu.ki, lu.j2, lu.j4) : aFF())
	}, this.aEP = function() {
		15 === id ? this.aFE() : 16 === id ? ce.fR.qo(2) : 17 === id ? ce.fR.qo(3) : 18 === id ? cq.kn(8, this.sl, new sA(16)) : 20 === id ? ce.aEO.fY(lu) : 21 === id ? ce.aFG.aFH(lu.ch, lu.j2, lu.j4) : 22 === id ? ce.aFG.aFI(lu.ch, lu.aFJ, lu
			.aFK) : 23 === id ? ce.aFG.aFL(lu.ki, lu.sm) : 24 === id && ce.aFG.aFM(lu.ki, lu.j2, lu.j4)
	}, this.ct = function(code, x8, data) {
		!x8 && code !== id || (15 === code || 16 === code ? cq.kn(7, this.sl) : 17 === code ? (ce.cf.close(0, 3252), aB.cf.aAw(0), 0 < aB.dF.data[117].fp.length ? (x8 = aB.cf.aAx(0), aB.aC.aD(105, x8.aAy), aB.aC.aD(106, x8.password), cq.kn(8,
			this.sl, new sA(16))) : (aB.aC.aD(105, ""), cq.cf.km())) : 20 === code ? cq.kn(7, this.sl) : 21 === code ? cq.kn(10, 0, new a8Z(data)) : 23 === code && cq.kn(13, 0, new kQ({
			data: data,
			ki: lu.ki
		})))
	}, this.aFE = function() {
		aP.aQ(48), aP.aV(24, Math.floor(l.pow(24) * Math.random())), aP.aV(24, Math.floor(l.pow(24) * Math.random())), aS.d(aP.aT), aB.aC.aD(110, fy.fX.fz(fy.fX.g0(8))), ce.aEO.fW()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), a1m.resize()
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, kR = new kh("⏳ Connecting...", [new kl("❌ " + dL.al[92], function() {
		cq.cf.km()
	})]), a1m = new aY(kR.oZ, "Find Server...")
}

function aFN() {
	this.aFH = function(ch, j2, j4) {
		aP.aQ(75), aP.aV(1, 0), aP.aV(6, 21), aP.aV(6, ch), aP.aV(1, +(j2 < 0)), aP.aV(1, +(j4 < 0)), aP.aV(30, Math.abs(j2)), aP.aV(30, Math.abs(j4)), ce.cf.send(0, aP.aT)
	}, this.aFI = function(ch, aFJ, aFK) {
		aP.aQ(18 + 16 * aFJ.length + 30), aP.aV(1, 0), aP.aV(6, 22), aP.aV(6, ch), ce.fR.fZ(aFJ), aP.aV(30, aFK), ce.cf.send(0, aP.aT)
	}, this.aFL = function(ki, sm) {
		for (var aL = sm.length, cj = 0, h = 0; h < aL; h++) cj += sm[h].length;
		for (aP.aQ(21 + 3 * aL + 16 * cj), aP.aV(1, 0), aP.aV(6, 23), aP.aV(3, ki), aP.aV(4, aL), aP.aV(7, cj), h = 0; h < aL; h++) aP.aV(3, sm[h].length), fy.co.aW(sm[h]);
		ce.cf.send(0, aP.aT)
	}, this.aFM = function(ki, j2, j4) {
		aP.aQ(52), aP.aV(1, 0), aP.aV(6, 24), aP.aV(3, ki), aP.aV(1, +(j2 < 0)), aP.aV(1, +(j4 < 0)), aP.aV(20, Math.abs(j2)), aP.aV(20, Math.abs(j4)), ce.cf.send(0, aP.aT)
	}
}

function aFO() {
	var aAL, aFP, aFQ;

	function aFV(h) {
		var button = n1.aCN[h],
			dr = button.dr,
			ds = button.ds,
			aU = button.aU,
			dJ = button.dJ;
		he.fillStyle = button.aFT, he.fillRect(dr, ds, aU, dJ), h === aAL && (he.fillStyle = aFQ, he.fillRect(dr, ds, aU, dJ)), he.lineWidth = ag.e9, he.strokeStyle = aFP, he.strokeRect(dr, ds, aU, dJ),
			function(button) {
				var dr = button.dr,
					ds = button.ds,
					aU = button.aU,
					dJ = button.dJ;
				ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1), he.font = button.font, he.fillStyle = aFP, he.fillText(button.al, Math.floor(dr + aU / 2), Math.floor(ds + dJ / 2 + .1 * button.fontSize))
			}(button)
	}
	this.aU = 0, this.dJ = 0, this.ds = 0, this.gap = 0, this.d = function() {
		aAL = -1, aFP = a7.a8, aFQ = "rgba(255,255,255,0.16)", this.aCN = new Array(7), this.dJ = Math.floor((dK.eE.eF() ? .123 : .093) * dI.eC), this.aU = Math.floor((dK.eE.eF() ? 3.96 : 4.2) * this.dJ), this.gap = Math.floor(.025 * this.aU);
		var aFR = Math.floor(.26 * this.dJ),
			aFS = ad.ae.hL(1, aFR);
		this.aCN[0] = {
			dr: 0,
			ds: 0,
			aU: Math.floor(.6 * this.aU - this.gap / 2),
			dJ: this.dJ,
			al: "Multiplayer",
			font: aFS,
			aFT: "rgba(22,88,22,0.8)",
			fontSize: aFR
		}, aFR = Math.floor(.18 * this.dJ), aFS = ad.ae.hL(1, aFR), this.aCN[1] = {
			dr: 0,
			ds: 0,
			aU: this.aU - this.aCN[0].aU - this.gap,
			dJ: this.dJ,
			al: "Single Player",
			font: aFS,
			aFT: "rgba(22,88,88,0.8)",
			fontSize: aFR
		}, this.aCN[2] = {
			dr: 0,
			ds: 0,
			aU: this.aU,
			dJ: Math.floor(.3 * this.dJ),
			al: "",
			font: this.aCN[1].font,
			aFT: "rgba(100,0,0,0.8)",
			fontSize: this.aCN[1].fontSize
		}, this.aCN[3] = {
			dr: 0,
			ds: 0,
			aU: this.aU,
			dJ: this.dJ,
			al: "Back",
			font: this.aCN[0].font,
			aFT: "rgba(0,0,0,0.8)",
			fontSize: this.aCN[0].fontSize
		}, this.aCN[4] = {
			dr: 0,
			ds: 0,
			aU: this.aU,
			dJ: Math.floor(.3 * this.dJ),
			al: "The game was updated!",
			font: this.aCN[1].font,
			aFT: "rgba(100,0,0,0.8)",
			fontSize: this.aCN[1].fontSize
		}, this.aCN[5] = {
			dr: 0,
			ds: 0,
			aU: this.aCN[0].aU,
			dJ: Math.floor(.8 * this.dJ),
			al: "Reload",
			font: this.aCN[0].font,
			aFT: "rgba(0,100,0,0.8)",
			fontSize: this.aCN[0].fontSize
		}, this.aCN[6] = {
			dr: 0,
			ds: 0,
			aU: this.aCN[1].aU,
			dJ: this.aCN[5].dJ,
			al: "Back",
			font: this.aCN[0].font,
			aFT: "rgba(0,0,0,0.8)",
			fontSize: this.aCN[0].fontSize
		}, this.rE()
	}, this.rE = function() {
		this.ds = Math.floor(.54 * dI.dJ), this.aCN[0].dr = Math.floor(.5 * dI.aU - .5 * this.aU), this.aCN[1].dr = this.aCN[0].dr + this.aCN[0].aU + this.gap, this.aCN[2].dr = this.aCN[3].dr = this.aCN[0].dr, this.aCN[4].dr = this.aCN[5].dr =
			this.aCN[0].dr, this.aCN[6].dr = this.aCN[1].dr, this.aCN[0].ds = Math.floor(.54 * dI.dJ), this.aCN[1].ds = this.aCN[0].ds, this.aCN[2].ds = Math.floor((dI.dJ - this.aCN[2].dJ - this.aCN[3].dJ - this.gap) / 2), this.aCN[3].ds = this
			.aCN[2].ds + this.aCN[2].dJ + this.gap, this.aCN[4].ds = Math.floor((dI.dJ - this.aCN[4].dJ - this.aCN[5].dJ - this.gap) / 2), this.aCN[5].ds = this.aCN[6].ds = this.aCN[4].ds + this.aCN[4].dJ + this.gap
	}, this.aFU = function() {
		aFV(0), aFV(1)
	}, this.aFW = function() {
		aFV(2), aFV(3)
	}, this.aFX = function() {
		aFV(4), aFV(5), aFV(6)
	}, this.jg = function(dr, ds, hS) {
		var h = -1;
		return 0 === gd.mw() ? h = this.lP(dr, ds, 0, 2) : 3 === gd.mw() ? h = this.lP(dr, ds, 3, 1) : 5 === gd.mw() && (h = this.lP(dr, ds, 5, 2)), aAL !== h && (aAL = h, hS) && (gb.gc = !0), -1 !== h && (rH.eX(), !0)
	}, this.lP = function(dr, ds, uF, size) {
		for (var h = uF; h < uF + size; h++)
			if (dr >= this.aCN[h].dr && ds >= this.aCN[h].ds && dr <= this.aCN[h].dr + this.aCN[h].aU && ds <= this.aCN[h].ds + this.aCN[h].dJ) return h;
		return -1
	}
}

function aFZ() {
	this.a8i = function() {
		var value, a9K;
		0 === dK.id && (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var a0p = window.location.search,
				a0p = new URLSearchParams(a0p).get(key);
			if ("string" != typeof a0p || a0p.length < 1) return null;
			return a0p
		}("replay"), (a9K = new URL(window.location.href)).search = "", history.replaceState(null, "", a9K.toString()), value) && cq.kn(3, 0, value)
	}
}

function aFc() {
	function aFf(h) {
		return void 0 !== ap.eW.f0[h].a20
	}

	function aFe(h) {
		return 1 !== h && !aFf(h) && h !== ap.f1()
	}
	this.ew = 21, this.aq = 0, this.bj = 0, this.fI = null, this.fJ = null, this.a29 = null, this.fK = null, this.ev = 0, this.fH = 0, this.a1A = !1, this.a22 = new a1n, this.eW = new aFd, this.d = function() {
		this.eW.d()
	}, this.aQ = function(map, ex) {
		((map %= this.ew) !== this.ev || aFe(this.ev) && ex !== this.fH) && (this.a1A = !1, this.a22.a1x(), t.a26(map), this.ev = map, this.fH = ex, aFe(map) && (ap.eW.f0[map].a24 = ex), aFf(this.ev) ? nN() : (map = ap.eW.f0[this.ev], this.aq =
			map.aU, this.bj = map.dJ, t.a26(map.a24), qf.aQ([this.aq, this.bj, map.tv, map.te]), qS(), x2.a15(), qf.ts()))
	}, this.a1P = function(h) {
		return 3 === h || 7 === h || 9 === h || h === this.f1()
	}, this.mQ = function(h) {
		return 2 === h || 7 === h || 9 === h
	}, this.a18 = function(h) {
		return 1 === h
	}, this.f1 = function() {
		return this.ew
	}
}

function a0a() {
	function aFl(aH, aFn) {
		aFn ? g8.vo = "Replay Error: " + aH : cq.kn(4, 3, new sB("⚠️ Replay Error", aH, !0))
	}
	this.ib = function(aH) {
		if (cn.fX.aN(cn.fX.aJ(cn.fX.aG(aH))), g8.vo = "", ! function() {
				if (aS.size < 10) aFl("File Too Small");
				else if (aS.ci(9) !== d4 && aFl("Incompatible Version Error", !0), aS.ci(31) !== aS.size) aFl("Size Error");
				else {
					if (function(dJ) {
							var h, b6 = aS.aT,
								aL = aS.size,
								ng = 0;
							for (h = 7; h < aL; h++) ng = ng + b6[h] & 65535;
							return ng === dJ
						}(aS.ci(16))) return 1;
					aFl("Hash Error")
				}
				return
			}()) return !1;
		var a0d;
		(a0d = {}).a0e = aS.ci(9), a0d.a0b = aS.ci(14), a0d.eg = aS.ci(4), a0d.a0c = 1 === aS.ci(1), a0d.a0f = aS.ci(6), a0d.ex = aS.ci(14), a0d.aFo = aS.ci(10), vc.a0V.a0d = a0d,
			function() {
				var h, ek, ej, name, aL = vc.a0V.a0d.aFo,
					g7 = [];
				for (h = 0; h < aL; h++) ek = aS.ci(1), ej = [aS.ci(6), aS.ci(6), aS.ci(6)], name = cn.co.cp(aS.ci(5)), g7.push({
					name: name,
					ej: ej,
					ek: ek
				});
				if (vc.a0V.a0d.g7 = g7, 8 === vc.a0V.a0d.eg)
					for (h = 0; h < aL; h++) g7[h].gC = aS.ci(14)
			}();
		var h, aL, aFp = vc.a0V.a0d;
		if (1 === aFp.g7.length)
			for (aL = 6 < aFp.eg ? 1 : aFp.eg + 2, aFp.oD = new Array(aL), aFp.oE = new Array(aL), h = 0; h < aL; h++) aFp.oD[h] = aS.ci(3), aFp.oE[h] = aS.ci(9) + 1;
		return !! function() {
			var a4u = aS.ci(5),
				aFq = aS.ci(30),
				aFr = aS.ci(30);
			if (aFq + aFr > 8 * aS.size) return void aFl("Corrupted File");
			return function(aL) {
					var h, id, aFu = new Uint8Array(aL),
						aFv = new Uint16Array(aL),
						aFw = new Uint32Array(aL),
						aFx = new Uint32Array(aL);
					for (vc.a0V.a4U = aFu, vc.a0V.a4V = aFv, vc.a0V.a4W = aFw, vc.a0V.a4X = aFx, h = 0; h < aL; h++) aFu[h] = id = aS.ci(4), aFv[h] = aS.ci(9), 0 === id ? aFw[h] = aS.ci(22) : 1 === id ? (aFw[h] = aS.ci(10), aFx[h] = aS.ci(
						10)) : 2 === id ? (aFw[h] = aS.ci(10), aFx[h] = aS.ci(9)) : 3 === id || 4 === id ? (aFw[h] = aS.ci(10), aFx[h] = aS.ci(22)) : 5 === id || 6 === id ? aFw[h] = aS.ci(10) : 7 === id && (aFw[h] = aS.ci(1))
				}(aFq),
				function(aL, a4u) {
					var h, a4Y = new Uint8Array(aL),
						a4Z = new Array(aL);
					for (a4Z.fill(0), vc.a0V.a4Y = a4Y, vc.a0V.a4Z = a4Z, h = 0; h < aL; h++) a4Y[h] = aS.ci(1), a4Z[h] = aS.ci(a4u)
				}(aFr, a4u), 1
		}() && (aS.aA < 8 * aS.size - 13 || aS.aA > 8 * aS.size ? (aFl("Out Of Bounds Error: " + aS.aA + " " + 8 * aS.size), !1) : (vc.a0V.a0q = aH, !0))
	}
}

function aAH() {
	var aFy, aFz, aG0, a8j, aG1, aA = 0,
		kH = gb.kH;

	function aG4() {
		! function() {
			if (!e.de) return;
			if (e.sU) return;
			return aG1 % 7 != 0 ? aG1++ : a8j === e.aG8 ? (aG7(), hR.aG9(a8j), e.se.v()) : (aG7(), aG1++, a8j++, x.sc(), x.hS(!0)), 1
		}() && (aG7(), pt())
	}

	function aG5() {
		aA = 0, (e.de ? (gb.gc = hR.aG9(a8j - (aG1 % 7 == 0 ? 0 : 1) + aG1 % 7 / 7) || gb.gc, pp) : jb.pr || !vd.a3e ? pp : (gb.gc = !0, pv))()
	}

	function aG7() {
		var h, aL, aGA = vc.a0V.a4U,
			kC = vc.a0V.a4V,
			kD = vc.a0V.a4W,
			rj = vc.a0V.a4X,
			aGB = vc.a0V.a4Y,
			aGC = vc.a0V.a4Z;
		if (aFy >= aGC.length) g8.wS("Replay file smaller than expected."), a2j.a2k.a2m(-1);
		else if (aGC = aGC[aFy], aGB[aFy]) {
			for (aL = aFz + aGC, h = aFz; h < aL; h++) pP.ym.rZ(aGA[h], kC[h], kD[h], rj[h]);
			aFz += aGC, aFy++
		} else ++aG0 >= aGC && (aFy++, aG0 = 0)
	}
	this.po = 0, this.d = function() {
		aG1 = a8j = aG0 = aFz = aFy = 0
	}, this.v = function() {
		var xg;
		dI.v(), vd.aEV() < 1.7 ? 0 === aA ? gb.kH >= kH && (xg = gb.kI / vd.aEV(), kH += xg * Math.floor(1 + (gb.kH - kH) / xg), 2 === e.pq || jb.pr || !vd.a3e ? ps() : (aG4(), gU.pu()), aA++) : aG5() : function() {
			var xg;
			if (gb.kH >= kH)
				if (2 === e.pq || jb.pr || !vd.a3e) ps(), kH = gb.kH;
				else {
					for (xg = gb.kI / vd.aEV(), 16 < (gb.kH - kH) / xg && (kH = gb.kH - 16 * xg); gb.kH >= kH && 2 !== e.pq;) kH += xg, aG4();
					gU.pu()
				} aG5()
		}(), pw(), gb.gc && (gb.gc = !1, px())
	}, this.aCK = function() {
		aFy !== vc.a0V.a4Z.length && aFy + 1 !== vc.a0V.a4Z.length && g8.wS("Replay file larger than expected.")
	}
}

function aGD() {
	var aGE, aGF, aU, dr, ds, aGG, aGH;
	this.d = function() {
		aGE = new Array(2), aGF = new Array(2), this.aDN = !1, aGH = aGG = bf = bd = 0, be = 1, this.resize()
	}, this.resize = function() {
		aU = (aU = Math.floor((dK.eE.eF() ? .072 : .0502) * dI.eC)) < 8 ? 8 : aU;
		for (var h = 1; 0 <= h; h--) aGE[h] = document.createElement("canvas"), aGE[h].width = aU, aGE[h].height = aU, aGF[h] = aGE[h].getContext("2d", {
			alpha: !0
		});
		this.hO(),
			function() {
				for (var aGV = Math.floor(1 + aU / 20), h = 1; 0 <= h; h--) aGF[h].clearRect(0, 0, aU, aU), aGF[h].fillStyle = a7.a9, aGF[h].beginPath(), aGF[h].arc(aU / 2, aU / 2, aU / 2 - aGV, 0, 2 * Math.PI), aGF[h].fill(), aGF[h].lineWidth =
					aGV, aGF[h].fillStyle = a7.a8, aGF[h].strokeStyle = a7.a8, aGF[h].beginPath(), aGF[h].arc(aU / 2, aU / 2, aU / 2 - aGV, 0, 2 * Math.PI), aGF[h].stroke(), a2c(aGF[h], 0, 0, aU, aGV, .3, 0 === h)
			}()
	}, this.gS = function() {
		return -bd / be
	}, this.gT = function() {
		return -bf / be
	}, this.aGL = function(aGM, bQ) {
		bd = be * aGM - bQ
	}, this.aGN = function(aGO, bR) {
		bf = be * aGO - bR
	}, this.jX = function(aGK, wB) {
		return e.yg || ! function(aGK, wB) {
			return Math.pow(aGK - (dr + aU / 2), 2) + Math.pow(wB - (ds + aU / 2), 2) < aU * aU / 4 || Math.pow(aGK - (dr + aU / 2), 2) + Math.pow(wB - (ds + 2 * aU), 2) < aU * aU / 4
		}(aGK, wB) || aB.dF.data[8].value ? (sY.rY() && (this.aDN = !0, aGG = aGK, aGH = wB), !1) : wB < ds + 1.25 * aU ? this.rJ(Math.floor(dI.aU / 2), Math.floor(dI.dJ / 2), -200) : this.rJ(Math.floor(dI.aU / 2), Math.floor(dI.dJ / 2), 200)
	}, this.jg = function(aGK, wB) {
		var aGP, aGQ, bT, bW;
		return !sY.rY() || (aGP = bd, aGQ = bf, bd += bT = aGG - aGK, bf += bW = aGH - wB, x.jg(bT, bW), this.a5W(), aGG = aGK, aGH = wB, aGP !== bd) || aGQ !== bf
	}, this.rJ = function(jY, jZ, deltaY) {
		var cl;
		if (sY.rY()) {
			if (0 < deltaY) cl = (cl = 500 / (500 + deltaY)) < .5 ? .5 : cl;
			else {
				if (!(deltaY < 0)) return !1;
				cl = 2 < (cl = (500 - deltaY) / 500) ? 2 : cl
			}
			this.aC0(jY, jZ, cl), gb.gc = !0
		}
		return !0
	}, this.aC0 = function(dr, ds, bJ) {
		var jy;
		bJ = jy = (jy = 1024 < (jy = bJ) * be ? 1024 / be : jy) * be < .125 ? .125 / be : jy, x.zoom(bJ, dr, ds),
			function(jy, jY, jZ) {
				be *= jy, bd = (bd + jY) * jy - jY, bf = (bf + jZ) * jy - jZ, gR.a5W()
			}(bJ, dr, ds)
	}, this.a5W = function() {
		var a4p = dI.aU / 16,
			av = 0,
			aGT = dI.dJ / 16,
			ax = 0;
		bd < -dI.aU + a4p && (av = -dI.aU + a4p - bd), bd > be * ap.aq - a4p && (av = be * ap.aq - a4p - bd), bf < -dI.dJ + aGT && (ax = -dI.dJ + aGT - bf), bf > be * ap.bj - aGT && (ax = be * ap.bj - aGT - bf), bd += av, bf += ax, mU.gQ(), x
			.aGU(av, ax)
	}, this.hO = function() {
		dr = dI.aU - aU - ag.gap, ds = Math.floor(dI.dJ / 2 - 1.25 * aU)
	}, this.ge = function() {
		aB.dF.data[8].value || (he.drawImage(aGE[0], dr, ds), he.drawImage(aGE[1], dr, Math.floor(ds + 3 * aU / 2)))
	}
}

function aGW() {
	var aGX, aGY, size, gv, hi, id;

	function aGZ(player) {
		return player < e.k ? aGX * player : aGX * e.k + aGY * (player - e.k)
	}
	this.d = function() {
		aGX = e.k < 16 ? 12 : 8, aGY = 4;
		var aL = aGZ(e.o);
		size = new Uint8Array(e.o), gv = new Uint16Array(aL), hi = new Uint32Array(aL), id = new Uint16Array(aL)
	}, this.aGa = function(a2t, aGb) {
		var aGc = this.cY(a2t, aGb);
		this.cX(a2t, aGb, 0), aGc = ad.hj.hp(a2t, aGc), a2t === e.hK && (hs.k1[13] -= aGc)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a6v = function(player, aGb) {
		var aGe, aGb = function(player, aGb) {
			var h, dy = aGZ(player);
			for (h = size[player] - 1; 0 <= h; h--)
				if (0 === id[dy + h] && gv[dy + h] === aGb) return h;
			return size[player]
		}(player, aGb);
		aGb !== size[player] && (aGe = hi[aGZ(player) + aGb], this.a34(player, aGb), this.pk(player, aGe, e.o))
	}, this.a9g = function(player, aGb) {
		for (var dy = aGZ(player), h = size[player] - 1; 0 <= h; h--)
			if (0 === id[dy + h] && gv[dy + h] === aGb) return !0;
		return !1
	}, this.aGf = function(player) {
		return player < e.k ? size[player] < aGX : size[player] < aGY
	}, this.gy = function(player) {
		return size[player]
	}, this.h0 = function(player, h) {
		return gv[aGZ(player) + h]
	}, this.gz = function(player, h) {
		return id[aGZ(player) + h]
	}, this.a3B = function(player, a3A) {
		for (var dy = aGZ(player), h = size[player] - 1; 0 <= h; h--)
			if (id[dy + h] === a3A) return h;
		return -1
	}, this.zI = function(player, h) {
		return hi[aGZ(player) + h]
	}, this.cY = function(player, aGb) {
		for (var dy = aGZ(player), h = size[player] - 1; 0 <= h; h--)
			if (0 === id[dy + h] && gv[dy + h] === aGb) return hi[dy + h];
		return 0
	}, this.a6t = function(player) {
		for (var dy = aGZ(player), b8 = 0, h = size[player] - 1; 0 <= h; h--) b8 += hi[dy + h];
		return b8
	}, this.k9 = function(player) {
		for (var dy = aGZ(player), b8 = 0, h = size[player] - 1; 0 <= h; h--) 0 === id[dy + h] && (b8 += hi[dy + h]);
		return b8
	}, this.pO = function(player) {
		for (var dy = aGZ(player), s = 0, h = size[player] - 1; 0 <= h; h--) 0 < id[dy + h] && s++;
		return s
	}, this.cX = function(player, aGb, aGe) {
		for (var dy = aGZ(player), h = size[player] - 1; 0 <= h; h--) 0 === id[dy + h] && gv[dy + h] === aGb && (hi[dy + h] = aGe)
	}, this.cD = function(player, h, aGe) {
		hi[aGZ(player) + h] = aGe
	}, this.pk = function(player, aGe, aGb) {
		var h, dy = aGZ(player);
		for (aGb === e.hK && hs.k1[player < e.k ? 6 : 5]++, h = size[player] - 1; 0 <= h; h--)
			if (0 === id[dy + h] && gv[dy + h] === aGb) return hi[dy + h] += aGe, void(hi[dy + h] = hi[dy + h] > e.aB3 ? e.aB3 : hi[dy + h]);
		gv[dy + size[player]] = aGb, hi[dy + size[player]] = aGe, id[dy + size[player]] = 0, size[player]++, player < e.k && (aGb === e.hK ? g8.vr(player, 5) : player === e.hK && x.wQ(aGb))
	}, this.aGg = function(player, aGe, a3A) {
		var dy = aGZ(player);
		bC.e2[player] = 2, gv[dy + size[player]] = 0, hi[dy + size[player]] = aGe, id[dy + size[player]] = a3A, size[player]++
	}, this.a34 = function(player, aA) {
		var d1, dy;
		if (0 !== size[player])
			for (dy = aGZ(player), size[player]--, d1 = aA; d1 < size[player]; d1++) gv[dy + d1] = gv[dy + d1 + 1], hi[dy + d1] = hi[dy + d1 + 1], id[dy + d1] = id[dy + d1 + 1]
	}, this.a6p = function(player) {
		for (var d1, dy, a6o = [], h = jB - 1; 0 <= h; h--)
			for (dy = aGZ(jA[h]), d1 = size[jA[h]] - 1; 0 <= d1; d1--)
				if (0 === id[dy + d1] && gv[dy + d1] === player) {
					a6o.push(jA[h]);
					break
				} return a6o
	}
}

function aGh() {
	var kR, oX, eH;
	this.show = function() {
		kR.show(), this.resize()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), oX.resize()
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, kR = new kh("Login", [new kl("❌ " + dL.al[92], function() {
		cq.kn(7, cq.aGi(7).sl)
	}, a7.sN), new kl("➡️ Login", function() {
		aB.aC.aD(105, cn.fX.aI(oX.eI[0].a5E[0].a6.value, 5)), aB.aC.aD(106, cn.fX.aI(oX.eI[1].a5E[0].a6.value, 8)), cq.kn(8, cq.aGi(7).sl, new sA(18))
	}, a7.w4)]), oX = new eG(kR.oZ, ((eH = []).push(function() {
		var og = new oh;
		return og.oi("Account Name"), og.on(new a3({
			title: "AccountName",
			value: "",
			aA: -1
		})), og
	}()), eH.push(function() {
		var og = new oh,
			aGm = (og.oi("Password"), new a3({
				title: "Password",
				value: "",
				aA: -1
			}));
		return aGm.a6.type = "password", og.on(aGm), og.on(new or([new kl("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", aGm.a6.type = "text") : (this.innerText = "Show", aGm.a6.type = "password")
		}).button])), og
	}()), eH))
}

function a0Y() {
	this.ia = function() {
		var aFp, a4u = function() {
				var h, a4Z = vc.a0V.a4Z,
					aL = a4Z.length,
					max = 0;
				for (h = 0; h < aL; h++) max = Math.max(max, a4Z[h]);
				return a4z(Math.max(max, 1))
			}(),
			aDY = function(a4u) {
				return 179 + function() {
					var h, g7 = vc.a0V.a0d.g7,
						aL = g7.length,
						aDY = 24 * aL;
					for (h = 0; h < aL; h++) aDY += 16 * g7[h].name.length;
					8 === vc.a0V.a0d.eg && (aDY += 14 * aL);
					return aDY
				}() + (1 === vc.a0V.a0d.g7.length ? 12 * vc.a0V.a0d.oD.length : 0) + function() {
					var h, a4U = vc.a0V.a4U,
						aL = a4U.length,
						aDY = 13 * aL,
						aGy = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (h = 0; h < aL; h++) aDY += aGy[a4U[h]];
					return aDY
				}() + function(a4u) {
					return vc.a0V.a4Z.length * (1 + a4u)
				}(a4u)
			}(a4u);
		aP.aQ(aDY + (6 - aDY % 6) % 6), aFp = vc.a0V.a0d, aP.aV(9, d4), aP.aV(31, aP.size), aP.aA += 16, aP.aV(9, aFp.a0e), aP.aV(14, aFp.a0b), aP.aV(4, aFp.eg), aP.aV(1, aFp.a0c), aP.aV(6, aFp.a0f), aP.aV(14, aFp.ex), aP.aV(10, aFp.g7.length);
		var h, g7 = vc.a0V.a0d.g7,
			aL = g7.length;
		for (h = 0; h < aL; h++) aP.aV(1, g7[h].ek), aP.aV(18, (g7[h].ej[0] << 12) + (g7[h].ej[1] << 6) + g7[h].ej[2]), aP.aV(5, g7[h].name.length), fy.co.aW(g7[h].name);
		if (8 === vc.a0V.a0d.eg)
			for (h = 0; h < aL; h++) aP.aV(14, g7[h].gC);
		return function() {
				var h, aFp = vc.a0V.a0d;
				if (1 === aFp.g7.length)
					for (h = 0; h < aFp.oD.length; h++) aP.aV(3, aFp.oD[h]), aP.aV(9, aFp.oE[h] - 1)
			}(),
			function(a4u) {
				var h, a4U = vc.a0V.a4U,
					kC = vc.a0V.a4V,
					kD = vc.a0V.a4W,
					rj = vc.a0V.a4X,
					aL = a4U.length;
				for (aP.aV(5, a4u), aP.aV(30, aL), aP.aV(30, vc.a0V.a4Z.length), h = 0; h < aL; h++) aP.aV(4, a4U[h]), aP.aV(9, kC[h]), 0 === a4U[h] ? aP.aV(22, kD[h]) : 1 === a4U[h] ? (aP.aV(10, kD[h]), aP.aV(10, rj[h])) : 2 === a4U[h] ? (aP.aV(
					10, kD[h]), aP.aV(9, rj[h])) : 3 === a4U[h] || 4 === a4U[h] ? (aP.aV(10, kD[h]), aP.aV(22, rj[h])) : 5 === a4U[h] || 6 === a4U[h] ? aP.aV(10, kD[h]) : 7 === a4U[h] && aP.aV(1, kD[h])
			}(a4u),
			function(a4u) {
				var h, a4Y = vc.a0V.a4Y,
					a4Z = vc.a0V.a4Z,
					aL = a4Y.length;
				for (h = 0; h < aL; h++) aP.aV(1, a4Y[h]), aP.aV(a4u, a4Z[h])
			}(a4u), aP.aA !== aDY && g8.wS("Encoder Index Error: " + aP.aA + " " + aDY), aP.aA = 40, aP.aV(16, function() {
				var h, b6 = aP.aT,
					aL = aP.size,
					ng = 0;
				for (h = 7; h < aL; h++) ng = ng + b6[h] & 65535;
				return ng
			}()), aS.d(aP.aT), fy.fX.fz(fy.fX.g0(p(aDY - 1, 6) + 1))
	}
}

function tb() {
	this.size = 0, this.aA = 0, this.aT = null, this.d = function(aT) {
		this.aA = 0, this.aT = aT, this.size = aT.length
	}, this.aQ = function(aDY) {
		return this.d(new Uint8Array(this.cd(aDY))), this.aT
	}, this.o9 = function() {
		this.aT = null
	}, this.aV = function(size, uI) {
		for (var aT = this.aT, rY = this.aA + size - 1, h = this.aA; h <= rY; h++) aT[h >> 3] |= (uI >> rY - h & 1) << 7 - (7 & h);
		this.aA += size, this.aA > 8 * this.size && console.log("error wrapper")
	}, this.aGz = function(size, uI) {
		var fq = size >> 1,
			eP = 1 << fq;
		this.aV(size - fq, l.m(uI, eP)), this.aV(fq, uI % eP)
	}, this.aH0 = function(size) {
		for (var aT = this.aT, rY = this.aA + size, h = this.aA; h < rY; h++) aT[h >> 3] &= 255 ^ 128 >>> (7 & h)
	}, this.cd = function(aDY) {
		return aDY + 7 >> 3
	}, this.aH1 = function(aM, qN, rY, aH2) {
		for (var h = qN; h < rY; h++) this.aV(aH2, aM[h])
	}
}

function aH3() {
	this.aH4 = "https://", this.aH5 = this.aH4 + "territorial.io/", this.sG = this.aH5 + "changelog", this.sL = this.aH5 + "terms", this.aH6 = this.aH5 + "cookie_policy", this.sM = this.aH5 + "privacy", this.sK = this.aH5 + "tutorial", this.sJ = this
		.aH5 + "players", this.sH = this.aH5 + "clans", this.sI = this.aH5 + "clan-results", this.sD = this.aH4 + "play.google.com/store/apps/details?id=territorial.io", this.sE = this.aH4 + "apps.apple.com/app/id1581110913", this.a8B = this.aH4 +
		"www.youtube.com/watch?v=toZTQ8aRdFc", this.sF = this.aH4 + "discord.gg/pthqvpTXmh", this.a8C = this.aH4 + "www.instagram.com/davidtschacher/", this.aDz =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aH7() {
	this.aEq = new Uint16Array(2), this.hr = new Uint32Array(2), this.a41 = new Uint32Array(2), this.vC = new Uint8Array(4), this.a2G = new Uint8Array(4), this.qE = new Uint32Array(5), this.a9Q = new Uint32Array(8), this.aH8 = new Uint16Array(512),
		this.aF8 = function(aM, kC) {
			return aM[0] = kC, aM
		}, this.aH9 = function(aM, kC, kD) {
			return aM[0] = kC, aM[1] = kD, aM
		}, this.aHA = function(aM, kC, kD, rj) {
			return aM[0] = kC, aM[1] = kD, aM[2] = rj, aM
		}, this.aHB = function(aM, kC, kD, rj, aHC) {
			return aM[0] = kC, aM[1] = kD, aM[2] = rj, aM[3] = aHC, aM
		}
}

function aHD() {
	var xF, aHE, a9v, a9w, a9x, aHF, aHG, aHH;

	function aHJ(h) {
		var d1;
		for (a9v--, d1 = h; d1 < a9v; d1++) a9w[d1] = a9w[d1 + 1], a9x[d1] = a9x[d1 + 1], aHF[d1] = aHF[d1 + 1], aHG[d1] = aHG[d1 + 1], aHH[d1] = aHH[d1 + 1]
	}
	this.d = function() {
		xF = 1, a9v = 0, aHE = 2 * e.o, a9w = new Uint16Array(aHE), a9x = new Uint8Array(aHE), aHF = new Uint16Array(aHE), aHG = new Uint32Array(aHE), aHH = new Uint32Array(aHE)
	}, this.a3C = function(aA, position) {
		aHG[aA] = position
	}, this.v = function() {
		for (var h = a9v - 1; 0 <= h; h--) 0 == a9x[h]-- && (a9x[h] = 2, aHI.v(h, aHF[h], a9w[h], aHG[h], aHH[h]))
	}, this.a33 = function(player, id) {
		for (var h = a9v - 1; 0 <= h; h--)
			if (player === a9w[h] && id === aHF[h]) return void aHJ(h)
	}, this.a6j = function(player) {
		for (var h = a9v - 1; 0 <= h; h--) player === a9w[h] && (aHI.a38(player, aHG[h]), aHJ(h))
	}, this.pm = function(player, qN, aHK) {
		if (aHE <= a9v) return 0;
		a9w[a9v] = player, a9x[a9v] = 0, aHF[a9v] = xF, aHG[a9v] = qN, aHH[a9v] = aHK;
		player = xF;
		return a9v++, xF = 2 * aHE < ++xF ? 1 : xF, player
	}, this.ge = function() {
		if (!(be < 40 || 0 === a9v)) {
			var d1, dr, ds, h, fontSize, aHP, hi, kM = bd / be,
				kN = bf / be,
				kO = (dI.aU + bd) / be,
				kP = (dI.dJ + bf) / be;
			for (ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1), d1 = a9v - 1; 0 <= d1; d1--) dr = bK.gS(aHG[d1]), ds = bK.gT(aHG[d1]), h = a9w[d1], kM - 1 < dr && dr < kO && kN - 1 < ds && ds < kP && 0 !== bC.e2[h] && ((fontSize = Math.floor(
				.94 * be * x.aHQ(h))) < 6 || (dr = Math.floor(dI.aU * (dr + .5 - kM) / (kO - kM)), ds = Math.floor(dI.dJ * (ds + .48 - kN) / (kP - kN)), he.font = ad.ae.hL(1, fontSize), he.fillStyle = a7.wl, hi = cC.zI(h, cC.a3B(h, aHF[
				d1])), he.fillText(aB.dF.data[7].value ? ad.fk.fs(hi) : bC.tR[h], dr, ds), (aHP = Math.floor(.5 * fontSize)) < 6) || (he.font = ad.ae.hL(1, aHP), he.fillText(aB.dF.data[7].value ? bC.tR[h] : ad.fk.fs(hi), dr, ds + Math
				.floor(.82 * fontSize))))
		}
	}
}

function aHR() {
	this.cp = function(size) {
		for (var a4y = aS, aM = [], h = 0; h < size; h++) aM.push(String.fromCharCode(a4y.ci(16)));
		return aM.join("")
	}, this.iU = function(aH) {
		return 20 < (aH = aH.trim()).length ? aH.substring(0, 20) : aH
	}
}

function aHS() {
	var fF, hC, dr, ds, ma, aHT, gap, aHU, fontSize, aHV, jQ, k1, aHW, aHX, aHY, aHZ, aHa, aHb;

	function aHe() {
		hC.clearRect(0, 0, hR.aU, hR.dJ), hC.fillStyle = a7.jn, hC.fillRect(0, 0, hR.aU, hR.dJ), hC.fillStyle = a7.a2Y, bJ = 0 < aHY ? aHY : Math.sqrt(k1[4] / 1e4), hC.fillRect(0, hR.dJ - ma - 1, Math.floor(bJ * hR.aU), ma), hC.fillStyle = a7.a8, hC
			.fillRect(0, 0, hR.aU, 1), hC.fillRect(0, 0, 1, hR.dJ), hC.fillRect(hR.aU - 1, 0, 1, hR.dJ), hC.fillRect(0, hR.dJ - 1, hR.aU, 1), hC.fillRect(0, hR.dJ - ma - 1, hR.aU, 1);
		for (var bJ, aHf, h5 = 0, h = 0; h < jQ.length; h++) aHW[h] ? (ad.ae.textAlign(hC, 0), aHf = Math.floor((aHT - ma + 2 * aHU) * (h - h5 + 1) / (jQ.length + 1) - .7 * aHU), hC.fillText(jQ[h], gap, aHf), ad.ae.textAlign(hC, 2), 5 === h && 0 !==
			bC.e2[e.hK] && bC.bc[e.hK] >= hW.hX(e.hK) ? (hC.fillStyle = a7.a4N, hC.fillText(aHd(h), hR.aU - gap, aHf), hC.fillStyle = a7.a8) : hC.fillText(aHd(h), hR.aU - gap, aHf)) : h5++
	}

	function aHd(h) {
		return h < 3 ? k1[h].toString() : 3 === h || 4 === h || 5 === h ? ad.fk.fu(k1[h] / 100, 2) : h < 7 ? ad.fk.fs(k1[h]) : h === 7 ? hR.ha(k1[7]) : h === 8 ? utils.getMaxTroops(bC.cH, e.hK) : utils.getDensity(e.hK)
	}

	function aHc() {
		bC.cH[e.hK] !== k1[6] && (k1[6] = bC.cH[e.hK], aHV++)
	}
	this.d = function() {
		aHY = aHZ = 0, (jQ = new Array(8))[0] = dL.al[70], jQ[1] = e.sU ? dL.al[71] : dL.al[72], jQ[2] = dL.al[73], jQ[3] = dL.al[74], jQ[4] = dL.al[75], jQ[5] = dL.al[76], jQ[6] = dL.al[77], jQ[7] = dL.al[78],
			jQ.push("Max Troops", "Density"), // add jQ
			aHb = e.a1R - p(e.a1R, 100), (k1 = new Array(jQ.length))[0] = e.sU ? 0 : e.k, k1[1] = e.sU ? jB : e.n, k1[2] = e.a6n, k1[3] = 0, k1[4] = p(1e4 * bC.cH[0], e.a1R), k1[5] = 700, k1[6] = 0, aHc(), k1[7] = 0, aHX = aHd(6), aHW =
			new Array(jQ.length);
		for (var h = jQ.length - 1; 0 <= h; h--) aHW[h] = !0;
		aHa = 0, aHa = e.sU ? (aHW[0] = !1, aHW[2] = !1, aHW[3] = !1, 3) : (aHW[3] = !1, 1), aHV = 0, this.resize()
	}, this.resize = function() {
		this.aU = Math.floor((dK.eE.eF() ? .1646 : .126) * 1.25 * dI.eC), this.dJ = Math.floor(1.18 * this.aU), ma = Math.floor(.04 * this.aU), gap = Math.floor(.035 * this.aU), aHU = .04 * this.aU, aHT = this.dJ, this.dJ -= Math.floor(aHa * (
			this.dJ - 2 * ma) / jQ.length), fontSize = Math.floor(.7 * (aHT - ma) / jQ.length), fontSize = ad.ae.hL(1, fontSize), (fF = document.createElement("canvas")).width = this.aU, fF.height = this.dJ, (hC = fF.getContext("2d", {
			alpha: !0
		})).font = fontSize, ad.ae.textBaseline(hC, 1), hC.lineWidth = 1, this.sX(), this.hO(), vV.hO(), aHe()
	}, this.hO = function() {
		dr = dI.aU - this.aU - ag.gap
	}, this.a6u = function() {
		ds = ag.gap
	}, this.sX = function() {
		ds = ag.gap + (vV.hN() && 0 !== bC.e2[e.hK] && !e.de ? vV.dJ + ag.gap : 0)
	}, this.hS = function(x8) {
		(x8 || 100 <= aHV) && (aHV = 0, aHe())
	}, this.aCg = function() {
		return k1[7]
	}, this.ha = function(value) {
		var dy = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * dy) / 1e3);
		return value < 10 ? dy + ":0" + value : dy + ":" + value
	}, this.v = function() {
		var j9, per;
		aHW[0] && e.xB - e.a6n !== k1[0] && (k1[0] = e.xB - e.a6n, aHV++), jB - k1[0] !== k1[1] && (k1[1] = jB - k1[0], aHV++), this.vO(), (j9 = hW.jC(e.hK)) !== k1[5] && (k1[5] = j9, aHV++), aHc(), k1[7] += gb.kI, j9 = aHd(7), aHX !== j9 && (
			aHX = j9, aHV += 100), j9 = e.dj ? vZ.a2h() : bC.cH[xk[0]], per = p(1e4 * j9, e.a1R), k1[3] = j9, k1[4] !== per && (aHV++, k1[4] = per), 8 === e.f && function() {
			if (0 === bC.e2[0]) a2j.a2k.a2m(1);
			else {
				if (0 !== bC.e2[1]) return;
				a2j.a2k.a2m(0)
			}
			return 1
		}() || k1[3] < aHb || k1[3] !== e.a1R && ! function() {
			for (var h = jB - 1; 0 <= h; h--)
				if (0 < bC.c6[jA[h]].length) return;
			return 1
		}() || a2j.a2k.a2m(-1)
	}, this.vO = function() {
		aHW[2] && e.a6n !== k1[2] && (k1[2] = e.a6n, aHV++)
	}, this.aG9 = function(h) {
		var oG, fj, h5;
		return 2 !== e.pq && (h === e.aG8 ? (aHY = 0, aHe(), !1) : (-1 !== h || 0 !== aHZ) && (fj = aHY, aHY = e.s5 ? h / e.aG8 : (h5 = performance.now(), 0 <= h && (oG = h5 - 392 * h, aHZ = 0 === h || oG < aHZ ? oG : aHZ), 1 < (aHY = (h5 -
			aHZ) / (392 * e.aG8)) ? 1 : aHY), aHe(), aHY !== fj))
	}, this.ge = function() {
		he.drawImage(fF, dr, ds)
	}
}

function aHp() {
	this.cf = new sh, this.cr = 0;
	var aHq = new Array(15);

	function aHt() {
		for (var aL = aHq.length, h = 0; h < aL; h++) aHq[h] = null
	}
	this.d = function() {
		for (var aHr, aHs = document.body.firstChild; aHs;) aHr = aHs.nextSibling, "DIV" !== aHs.tagName && "INPUT" !== aHs.tagName && "BUTTON" !== aHs.tagName || document.body.removeChild(aHs), aHs = aHr
	}, this.kn = function(aA, sl, lu) {
		void 0 === sl && (sl = this.cr), gb.gc = !0, 0 === aA && (0 === gd.mw() ? aA = 5 : dK.eE.setState(13)), this.jc(), this.cr = aA;
		var dy = aHq[aA];
		if (!dy || 4 === aA || 7 === aA || 8 === aA || 9 === aA || 10 === aA || 11 === aA || 13 === aA) {
			if (0 === aA) return void aHt();
			1 === aA ? dy = new ru : 2 === aA ? dy = new a6a : 3 === aA ? dy = new a0l : 4 === aA || 9 === aA || 10 === aA || 11 === aA || 13 === aA ? dy = lu : 5 === aA ? dy = new a4f : 6 === aA ? dy = new aGh : 7 === aA ? dy = new aHu : 8 ===
				aA ? dy = lu : 12 === aA ? dy = new aHv : 14 === aA && (dy = new oW), dy.sl = sl, aHq[aA] = dy
		}
		dy.show(lu)
	}, this.a0m = function() {
		this.jR() && this.kn(aHq[this.cr].sl)
	}, this.oY = function(aA) {
		this.jR() && (this.jc(), gb.gc = !0, this.cr = aA, aHq[aA].show())
	}, this.jc = function() {
		this.jR() && aHq[this.cr].jc()
	}, this.s3 = function() {
		this.jR() && (aHq[this.cr].jc(), aHt(), this.cr = 0, dK.eE.setState(13))
	}, this.ge = function() {
		var dy;
		this.jR() && (dy = aHq[this.cr]).ge && dy.ge()
	}, this.resize = function() {
		if (!this.jR()) return !1;
		aHq[this.cr].resize()
	}, this.jX = function(dr, ds) {
		var dy;
		this.jR() && (dy = aHq[this.cr]).jX && dy.jX(dr, ds)
	}, this.jg = function(dr, ds) {
		var dy;
		this.jR() && (dy = aHq[this.cr]).jg && dy.jg(dr, ds)
	}, this.a3V = function() {
		var dy;
		this.jR() && (dy = aHq[this.cr]).a3V && dy.a3V()
	}, this.rJ = function(jY, jZ, deltaY) {
		var dy;
		this.jR() && (dy = aHq[this.cr]).rJ && dy.rJ(jY, jZ, deltaY)
	}, this.lQ = function(code) {
		var dy;
		return !!this.jR() && ((dy = aHq[this.cr]).lQ && dy.lQ(code), !0)
	}, this.v = function() {
		var dy;
		this.jR() && (dy = aHq[this.cr]) && dy.v && dy.v()
	}, this.jR = function() {
		return 0 < this.cr
	}, this.cs = function() {
		return aHq[this.cr]
	}, this.aGi = function(aA) {
		return aHq[aA]
	}
}

function aHw() {
	var te, aHx, aHy, tv, aHz, aI0, aI1, aI2, aI3, aI4, aI5, mh, aI6, aI7 = !1,
		aI8 = !1;

	function aI9(vq) {
		mh = gb.kH, aHy = tv = aHx = 0, aHz = (aI6 = 33) / vq, te = 1 / (vq / aI6 / 4), aI0 = (dI.aU / 2 + bd) / be, aI1 = (dI.dJ / 2 + bf) / be, aI2 = be
	}

	function aIF(aIG) {
		Math.abs(Math.log(aI5 / aI2)) < .125 && (aI5 = aIG * aI2)
	}

	function aIE(kM, kN, kO, kP) {
		aI3 = (kM + kO + 1) / 2, aI4 = (kN + kP + 1) / 2;
		kO = dI.aU / (kO - kM + 1), kM = dI.dJ / (kP - kN + 1);
		aI5 = .9 * (kO < kM ? kO : kM)
	}
	this.a23 = function() {
		return aI7
	}, this.aIA = function() {
		aI9(1), this.sZ(0, 0, ap.aq - 1, ap.bj - 1), e.de || e.s5 || this.wE(e.hK, 3e3, !0, .3)
	}, this.wE = function(player, vq, aIB, zoom) {
		e.yg || aI7 && !aIB && aI8 || 0 === bC.cH[player] || (gR.aDN = !1, aI8 = aIB, aI9(vq), function(player) {
			aI3 = (bC.e3[player] + bC.e4[player] + 1) / 2, aI4 = (bC.e5[player] + bC.e6[player] + 1) / 2
		}(player), function(zoom, player) {
			var bT = bC.e4[player] - bC.e3[player] + 1,
				player = bC.e6[player] - bC.e5[player] + 1,
				d1 = dI.aU / bT,
				fq = dI.dJ / player,
				d1 = (aI5 = d1 < fq ? d1 : fq, 0 !== zoom ? zoom : bT < 20 && player < 20 ? .5 : .9);
			aI5 *= d1, aIF(7 / 8)
		}(zoom, player), aI7 = !0, a5V.a5U())
	}, this.wj = function(vq) {
		e.s5 || e.yg || (gR.aDN = !1, aI8 = !1, aI9(vq), aIE(0, 0, ap.aq - 1, ap.bj - 1), aIF(7 / 8), aI7 = !0, a5V.a5U())
	}, this.sZ = function(kM, kN, kO, kP) {
		aIE(kM, kN, kO, kP), be = aI5, gR.aGL(aI3, dI.aU / 2), gR.aGN(aI4, dI.dJ / 2), mU.gQ()
	}, this.rY = function() {
		return !(aI7 && aI8 || (aI7 = !1))
	}, this.v = function() {
		var aIJ, aIK, eP, aIN;
		aI7 && (aHx < .5 ? tv < aHz && (tv += aHz * te, aHy = aHx) : 1 - aHy < aHx && (tv = (tv -= aHz * te) < aHz * te ? aHz * te : tv), mh = mh >= gb.kH ? gb.kH - 1 : mh, eP = gb.kH - mh, aHx = 1e3 < eP || 1 < (aHx += tv * eP / aI6) ? 1 : aHx,
			mh = gb.kH, eP = be, aIJ = bd, aIK = bf, eP = (be = aI2 * Math.pow(aI5 / aI2, aHx)) / eP, aIN = 1 - (aI2 * Math.pow(aI5 / aI2, 1 - aHx) - aI2) / (aI5 - aI2), gR.aGL(aI0 + aIN * (aI3 - aI0), dI.aU / 2), gR.aGN(aI1 + aIN * (aI4 -
				aI1), dI.dJ / 2), x.zoom(eP, (aIJ * eP - bd) / (1 - eP), (aIK * eP - bf) / (1 - eP)), mU.gQ(), 1 <= aHx && (aI7 = !1, gU.vN = !0), gb.gc = !0)
	}
}

function aAI() {
	this.kH = gb.kH, this.aA = 0, this.po = 0, this.a8j = 0, this.aIO = null, this.aIP = 7, this.aAn = 0, this.d = function() {
		this.a8j = 0, this.aIO = [], this.aA = 0, this.po = 0
	}, this.aBW = function(aT) {
		var h;
		if (e.de) this.aG9(aT);
		else if (this.aIO.push(aT), 2 === e.pq) {
			for (h = 0; h < this.aIO.length; h++) pP.ym.v(this.aIO[h]);
			this.aIO = []
		}
	}, this.aG9 = function(aT) {
		pP.ym.v(aT), vc.v(), hR.aG9(this.a8j), this.a8j === e.aG8 ? (e.se.v(), this.a8j = 0, this.aA = 0, this.po = 0, this.kH = gb.kH) : (this.a8j++, x.sc(), x.hS(!0), gU.pu())
	}, this.v = function() {
		dI.v(), e.de ? (gb.gc = hR.aG9(-1) || gb.gc, pp()) : (0 !== this.aA || gb.kH >= this.kH && (this.kH += gb.kI * Math.floor(1 + (gb.kH - this.kH) / gb.kI), 2 === e.pq ? ps() : this.aIQ(), this.aA++, 27 < gb.kH - this.aAn)) && this.aIR(),
			pw(), gb.gc && (gb.gc = !1, px()), this.aAn = gb.kH
	}, this.aIR = function() {
		gb.gc = !0, pv(), this.aA = 0
	}, this.aIQ = function() {
		var aIS, h;
		if (this.po !== 7 * this.a8j) pt(), gU.pu();
		else {
			for (aIS = !1; this.aIT() && (aIS = !0, pt(), 0 < this.aIO.length);)
				for (h = this.aIP - 2; 0 <= h; h--) pt();
			aIS ? gU.pu() : (ps(), gU.sg())
		}
	}, this.aIT = function() {
		return 0 < this.aIO.length && (this.a8j++, pP.ym.v(this.aIO[0]), this.aIO.shift(), !0)
	}
}

function aIU() {
	var aIV = !1,
		dX = 0,
		aU = 0,
		jF = 0,
		gap = 0,
		fF = null,
		hC = null,
		a2J = null;

	function aIY() {
		for (var a7k, aIb = 0, aL = 0, fm = Math.floor(aU / 2), ik = Math.floor(jF / 2), a7j = 1.5 * Math.PI, h = e.dk; 0 <= h; h--) aL += a2J[h], 0 === a2J[h] && aIb++;
		if (aIV = !1, hC.clearRect(0, 0, aU, aU), hC.fillStyle = a7.jn, hC.fillRect(0, 0, aU, aU), hC.fillStyle = a7.a8, hC.fillRect(0, 0, aU, gap), hC.fillRect(0, 0, gap, aU), hC.fillRect(aU - gap, 0, gap, aU), hC.fillRect(0, aU - gap, aU, gap), 0 <
			aL)
			if (aIb === e.dk) {
				for (h = e.dk; 0 <= h; h--)
					if (0 < a2J[h]) {
						! function(h, fm, ik) {
							hC.fillStyle = dm.a5Y[dm.dp[h]], hC.beginPath(), hC.arc(fm, fm, ik, 0, 2 * Math.PI), hC.fill()
						}(h, fm, ik);
						break
					}!
				function(fm) {
					var fontSize = fm / 3;
					hC.font = ad.ae.hL(1, fontSize), hC.fillStyle = a7.a8, hC.fillText("100%", fm, fm + .1 * fontSize)
				}(fm)
			} else {
				for (h = 0; h <= e.dk; h++) 0 < a2J[h] && (! function(h, fm, ik, a7j, a7k) {
					hC.fillStyle = dm.a5Y[dm.dp[h]], hC.beginPath(), hC.arc(fm, fm, ik, a7j, a7k), hC.lineTo(fm, fm), hC.fill()
				}(h, fm, ik, a7j, a7k = a7j + 2 * Math.PI * a2J[h] / aL), function(fm, ik, a7j, a7k) {
					var b8 = (a7k - a7j) / (2 * Math.PI),
						fontSize = +ik * Math.min(b8, .37);
					fontSize < 8 || (a7j = (a7j + a7k) / 2, a7k = Math.floor(100 * b8 + .5) + "%", ik *= .525 - Math.max(.6 * (b8 - .7), 0), hC.font = ad.ae.hL(1, fontSize), hC.fillStyle = a7.a8, hC.fillText(a7k, fm + Math.cos(a7j) * ik, fm +
						Math.cos(a7j + 1.5 * Math.PI) * ik))
				}(fm, ik, a7j, a7k), 0 !== h && a7m(fm, ik, a7j), a7j = a7k);
				a7m(fm, ik, 1.5 * Math.PI)
			}!
		function(fm, ik) {
			hC.beginPath(), hC.arc(fm, fm, ik, 0, 2 * Math.PI), hC.stroke()
		}(fm, ik)
	}

	function a7m(fm, ik, a7o) {
		hC.beginPath(), hC.moveTo(fm, fm), hC.lineTo(fm + Math.cos(a7o) * ik, fm + Math.cos(a7o + 1.5 * Math.PI) * ik), hC.stroke()
	}
	this.d = function() {
		if (e.dj) {
			var h;
			for (dX = 0, a2J = new Uint32Array(e.dk + 1), h = e.dk; 0 <= h; h--) a2J[h] = 0;
			for (h = jB - 1; 0 <= h; h--) a2J[dm.e7[jA[h]]] += 1;
			this.resize()
		} else a2J = hC = fF = null
	}, this.aIX = function() {
		return aU
	}, this.resize = function() {
		e.dj && (aU = Math.floor(dK.eE.eF() && !e.yg ? .18 * dI.min : .13 * dI.eC), aU = (aU *= 1 + (.5 + .2 * dK.eE.eF()) * e.yg) + aU % 2, jF = Math.floor(7 * aU / 8), (fF = fF || document.createElement("canvas")).width = aU, fF.height = aU,
			hC = fF.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * aU), hC.lineWidth = gap, hC.strokeStyle = a7.a8, ad.ae.textAlign(hC, 1), ad.ae.textBaseline(hC, 1), aIY())
	}, this.a2h = function() {
		return a2J[this.a8p()]
	}, this.aCH = function() {
		return dX = 31, this.v(), this.a8p()
	}, this.a8p = function() {
		for (var aIZ = 0, h = e.dk; 0 < h; h--) a2J[h] > a2J[aIZ] && (aIZ = h);
		return aIZ
	}, this.v = function() {
		if (e.dj && 32 <= ++dX) {
			var h;
			for (dX = 0, h = e.dk; 0 <= h; h--) a2J[h] = 0;
			for (h = jB - 1; 0 <= h; h--) a2J[dm.e7[jA[h]]] += bC.cH[jA[h]];
			aIV = !0
		}
	}, this.jl = function() {
		e.dj && aIV && aIY()
	}, this.ge = function() {
		e.dj && (e.yg ? he.drawImage(fF, ag.gap, ag.gap) : he.drawImage(fF, ag.gap, xj + 2 * ag.gap))
	}
}

function aIe() {
	this.ae = new lS, this.eS = new a2E, this.hj = new aB0, this.fk = new a62, this.hC = new aIf, this.su = new lr, this.fF = new sn, this.color = new a3D, this.kj = new tL, this.d = function() {
		this.ae.lV()
	}
}

function oy(a4, aIg) {
	this.a5I = [];
	var aIh = this.a5I;

	function click() {
		for (var h = 0; h < aIh.length; h++) aIh[h].textContent = aIh[h].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var aA = parseInt(this.name);
		aB.aC.aD(a4.aA, aA), aIg && aIg(aA)
	}
	for (var aIi, aL = a4.fp.length, h = 0; h < aL; h++)(aIi = document.createElement("p")).textContent = "⚪ " + a4.fp[h], aIi.style.margin = "0", aIi.name = "" + h, aIi.style.cursor = "pointer", aIi.style.fontSize = "1em", aIi.addEventListener(
		"click", click), aIh.push(aIi);
	aIh[a4.value].textContent = aIh[a4.value].textContent.replace("⚪", "🟢")
}

function aDb() {
	this.a8w = 0, this.a6U = null;
	var aIj = this.a6X = 0;
	this.a8v = 0, this.aCE = function() {
		0 !== bC.e2[e.hK] && bK.vD(e.hK) && 2 === e.a6W && (e.wh = 2)
	}, this.eq = function() {
		var eO, h5;
		this.a6U = a2j.a0R.a92(), this.a8w = a6l.dT.aIk(), e.f < 7 && 2 !== e.a6W ? this.a6X = vZ.a2h() : this.a6X = a2j.a0R.a93(), 8 === e.f && 1 === e.a6W ? (eO = 1 - e.aCG, h5 = bC.cH[eO], bC.cH[eO] = 0, pP.hj.a6T(), bC.cH[eO] = h5) : pP.hj
			.a6T(), aIj = .01 * bC.tV[e.hK] / 50, this.a8v = 0, e.f < 7 ? a2j.aDa.eq(this.a6U) : 7 === e.f || 10 === e.f ? ad.hj.m8(e.hK) && (eO = a2j.result.a8w * (1 + e.a8x), 2 === e.a6W ? a2j.result.a8v += eO * bC.cH[e.hK] / a2j.result.a6X :
				xk[0] === e.hK && (a2j.result.a8v += eO)) : 8 !== e.f || 1 !== e.wh || 0 === aB.dF.data[107].value || 100 <= (h5 = aB.dF.data[108].value) || (a2j.result.a8v += .01 * (100 - h5) * 10)
	}, this.aCI = function() {
		0 !== aIj && 0 !== a2j.result.a8v && g8.wF(0, "🏆 You earned prize money of 🧈 " + a2j.result.a8v.toFixed(2) + ".", 40, 0, a7.a8, a7.jn, -1, !1)
	}
}

function aIp() {
	var aIq = [0, 0],
		aIr = [0, 0];

	function aIs(aA) {
		return 3 !== aIq[aA] && 1 !== aIr[aA] && (aIr[aA] = 1, aIq[aA]++, aB.aC.aD(119, (aIq[0] << 2) + aIq[1]), 1)
	}
	this.d = function() {
		var b8 = aB.dF.data[119].value;
		aIq[0] = b8 >> 2, aIq[1] = 3 & b8
	}, this.aCi = function() {
		aIs(0) && g8.wG(dL.fn(130))
	}, this.aCj = function() {
		aIs(1) && g8.wG(dL.fn(131))
	}
}

function a7H() {
	this.aW = function(aH) {
		for (var aL = aH.length, aU = aP, h = 0; h < aL; h++) aU.aV(16, aH.charCodeAt(h))
	}
}

function aIt() {
	this.cf = new dV, this.aE9 = new a6c, this.d = function() {
		this.cf.d()
	}, this.v = function() {
		0 !== this.cf.dX && this.cf.dX--
	}
}

function aHu() {
	var kR, oX, eH;
	this.show = function() {
		kR.show(), this.resize()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), oX.resize()
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, kR = new kh("🔑 " + dL.al[125], [new kl("💾 " + dL.al[97], function() {
		cq.a0m()
	}, a7.w4)]), oX = new eG(kR.oZ, ((eH = []).push(function() {
		var og = new oh;
		return og.oi("🧈 Gold"), og.a5G("Balance: " + ad.fk.a68(aB.dF.data[113].value, .01, 2)), og.oj(
			"Play more multiplayer games to earn gold. Accounts without gold will be deleted. Each day, you will lose 🧈 0.50 or 0.01% of your balance, whichever amount is higher."), og
	}()), eH.push(function() {
		var og = new oh;
		return og.oi("1v1 Rating"), og.a5G("Elo: " + ad.fk.a68(aB.dF.data[107].value, .1, 1) + "<br>Rank: " + (aB.dF.data[108].value + 1) + " / " + aB.dF.data[111].value + "<br>Played Games: " + aB.dF.data[112].value), og
	}()), eH.push(function() {
		var og = new oh,
			om = (og.oi("Account Name"), new a3(aB.dF.data[105]));
		return om.a6.readOnly = !0, og.on(om), og.on(new or([new kl("Copy", function() {
			ad.ae.lf(om.a6), ad.ae.lg(this)
		}).button])), og
	}()), eH.push(function() {
		var og = new oh,
			aGm = (og.oi("Password"), new a3(aB.dF.data[106]));
		return aGm.a6.readOnly = !0, aGm.a6.type = "password", og.on(aGm), og.on(new or([new kl("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", aGm.a6.type = "text") : (this.innerText = "Show", aGm.a6.type = "password")
		}).button, new kl("Copy", function() {
			ad.ae.lf(aGm.a6), ad.ae.lg(this)
		}).button])), og.on(new or([new kl("Request New Password", function() {
			cq.kn(8, cq.cs().sl, new sA(15))
		}).button])), og
	}()), eH.push(function() {
		var og = new oh;
		return og.oi("Account Options"), og.on(new or([new kl("Log in to a Different Account", function() {
			cq.kn(6, cq.cs().sl)
		}).button])), og.on(new or([new kl("Create New Account", function() {
			aB.aC.aD(105, ""), cq.kn(8, cq.cs().sl, new sA(18))
		}).button])), og.on(new or([new kl("Delete Account: " + aB.dF.data[105].value, function() {
			cq.kn(4, 0, new sB("🗑️ Account Deletion", "Your account will start the deletion process but may be restored if you log in within 3 weeks.", !0, [new kl("❌ " + dL.al[92], function() {
				cq.kn(7, cq.aGi(7).sl)
			}), new kl("🗑️ Delete Account", function() {
				cq.kn(8, cq.aGi(7).sl, new sA(17))
			}, a7.sN)]))
		}, a7.sN).button])), og
	}()), eH.push(function() {
		function aJ0(aA) {
			for (var h = 0; h < 2; h++) aIz[h].a0x(0 === aA ? a7.a48 : 0 === h ? a7.sN : a7.w4)
		}
		var a5H, aIz, og = new oh;
		og.oi("Saved Accounts"), og.oj("Listed accounts may have been removed in the meantime due to insufficient funds."), aB.cf.aAt();
		return aIz = [new kl("🗑️ Remove From List", function() {
			var aA = Math.min(aB.dF.data[117].value, a5H.a5I.length - 1);
			if (!(aA < 1)) {
				a5H.a5I[aA].remove(), a5H.a5I.splice(aA, 1);
				for (var h = aA; h < a5H.a5I.length; h++) a5H.a5I[h].name = "" + h;
				aB.cf.aAw(aA), aA = aB.dF.data[117].value, a5H.a5I[aA].textContent = a5H.a5I[aA].textContent.replace("⚪", "🟢"), aJ0(aA)
			}
		}, a7.a48), new kl("➡️ Login", function() {
			var aA = Math.min(aB.dF.data[117].value, a5H.a5I.length - 1);
			aA < 1 || (aA = aB.cf.aAx(aA), aB.aC.aD(105, aA.aAy), aB.aC.aD(106, aA.password), cq.kn(8, cq.cs().sl, new sA(18)))
		}, a7.a48)], (a5H = new oy(aB.dF.data[117], aJ0)).a5I[0].style.marginTop = "0.5em", og.ox(a5H), og.on(new or([aIz[1].button])), og.on(new or([aIz[0].button])), og
	}()), function(eH) {
		var og = new oh,
			a8y = aB.dF.data[137].value,
			aJ4 = (og.oi("Primary Clan Stats"), og.a5G("Clan: " + (a8y ? "[" + aB.dF.data[135].value + "]" : "-")), og.a5G("Monthly Points: " + ad.fk.a68(a8y, .001, 3)), og.a5G("Rank: " + (aB.dF.data[139].value + 1) + " / " + aB.dF.data[
				111].value), aB.dF.data[141].value),
			aJ5 = (og.a5G("Total Points: " + ad.fk.a68(aJ4, .01, 2)), aB.dF.data[143].value);
		og.a5G("Won Games: " + aJ5), og.a5G("Avg. Points per Game: " + ad.fk.a68(aJ4 / Math.max(aJ5, 1), .01, 3)), a8y = aB.dF.data[138].value, og.oi("Secondary Clan Stats", "0.8em"), og.a5G("Clan: " + (a8y ? "[" + aB.dF.data[136].value +
			"]" : "-")), og.a5G("Monthly Points: " + ad.fk.a68(a8y, .001, 3)), aJ4 = aB.dF.data[142].value, og.a5G("Total Points: " + ad.fk.a68(aJ4, .01, 2)), aJ5 = aB.dF.data[144].value, og.a5G("Won Games: " + aJ5), og.a5G(
			"Avg. Points per Game: " + ad.fk.a68(aJ4 / Math.max(aJ5, 1), .01, 3)), eH.push(og)
	}(eH), eH))
}

function aHv() {
	var kR, a4i, kU, aJ6, a3O, a3P, colors = [0, 0, 0],
		aJ7 = -1;

	function a3X(h) {
		var aJ9 = a4i.ds + h * (ag.gap + a3P);
		he.fillStyle = "rgb(" + (0 === h ? 150 : 2 === h ? 30 : 0) + "," + (1 === h ? 130 : 2 === h ? 30 : 0) + "," + (2 === h ? 220 : 0) + ")", he.fillRect(aJ6, aJ9, colors[h] * a3O, a3P), he.strokeStyle = a7.a8, he.strokeRect(aJ6, aJ9, a3O, a3P),
			he.fillStyle = a7.a8, he.font = ad.ae.hL(0, .32 * a3P), ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 0), he.fillText((0 === h ? "Red: " : 1 === h ? "Green: " : "Blue: ") + aJ8(h), aJ6 + ag.gap, aJ9 + .53 * a3P)
	}

	function aJ8(h, aJA) {
		return aJA = aJA || 256, l.lM(Math.floor(aJA * colors[h]), 0, aJA - 1)
	}

	function lP(jY, jZ) {
		return !(jY < aJ6 || jZ < a4i.ds || jY > a4i.dr + a4i.aU || jZ > a4i.ds + a4i.dJ)
	}
	this.show = function() {
		var b8 = aB.dF.data[121].value;
		colors[0] = (b8 >> 12) / 63, colors[1] = (b8 >> 6 & 63) / 63, colors[2] = (63 & b8) / 63, kR.show(), this.resize()
	}, this.jc = function() {
		aB.aC.aD(121, (aJ8(0, 64) << 12) + (aJ8(1, 64) << 6) + aJ8(2, 64)), kR.jc()
	}, this.resize = function() {
		kR.resize(), a4i.resize();
		var fm = dI.eD,
			kt = kR.ku(),
			a7D = (a4i.ds = Math.max(a4i.ds, fm * kt.kx + ag.gap), fm * kt.kw - 2 * ag.gap);
		a4i.dJ = Math.min(a4i.dJ, a7D), a4i.aU = 2 * a4i.dJ, a4i.ds = fm * kt.kx + .5 * (fm * kt.kw - a4i.dJ), a4i.dr = .5 * (dI.aU - a4i.aU), kU = .25 * a4i.aU, aJ6 = a4i.dr + kU + ag.gap, a3O = a4i.aU - kU - ag.gap, a3P = (a4i.dJ - 2 * ag
			.gap) / 3
	}, this.ge = function() {
		var ik, oG, fq;
		kR.ge(), he.lineWidth = ag.e9, ik = aJ8(0), oG = aJ8(1), fq = aJ8(2), he.fillStyle = "rgb(" + ik + "," + oG + "," + fq + ")", he.fillRect(a4i.dr, a4i.ds, kU, a4i.dJ), he.strokeStyle = a7.a8, he.strokeRect(a4i.dr, a4i.ds, kU, a4i.dJ), he
			.fillStyle = ik + oG + fq < 306 && oG < 150 ? a7.a8 : a7.wl, ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 1), he.font = ad.ae.hL(0, .1 * a4i.dJ), he.rotate(-Math.PI / 2), he.fillText("National Color", -a4i.ds - .5 * a4i.dJ, a4i.dr +
				.5 * kU), he.setTransform(1, 0, 0, 1, 0, 0), a3X(0), a3X(1), a3X(2)
	}, this.jX = function(jY, jZ) {
		lP(jY, jZ) && (aJ7 = l.lM(Math.floor((jZ - a4i.ds) / (a3P + .75 * ag.gap)), 0, 2), colors[aJ7] = l.lM((jY - aJ6) / a3O, 0, 1), gb.gc = !0)
	}, this.jg = function(jY) {
		-1 !== aJ7 && (colors[aJ7] = l.lM((jY - aJ6) / a3O, 0, 1), gb.gc = !0)
	}, this.rJ = function(jY, jZ, deltaY) {
		lP(jY, jZ) && (jY = l.lM(Math.floor((jZ - a4i.ds) / (a3P + .75 * ag.gap)), 0, 2), colors[jY] = l.lM(colors[jY] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), gb.gc = !0)
	}, this.a3V = function() {
		0 <= aJ7 && (aJ7 = -1, gb.gc = !0)
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, kR = new kh("Choose Your Nation's Color!", [new kl("❌ " + dL.al[92], function() {
		cq.cf.km()
	})], !1), a4i = new a4k([.5, .25], [.5, .5], 1)
}

function aJB() {
	this.a0R = new a3r, this.pd = new aED, this.aE9 = new zy, this.cf = new xD, this.bs = new im, this.mR = new m3, this.pX = new pV, this.aJC = new q5, this.qG = new aEn, this.d = function() {
		this.aE9.d(), this.cf.d(), this.bs.d(), this.mR.d()
	}
}

function aJD() {
	this.aJE = -1, this.d = function() {
		this.aJE = -1
	}, this.v = function() {
		-1 !== this.aJE && a2j.a2k.a2m(this.aJE)
	}, this.rs = function(player) {
		return !!jb.s6(player) && (1 === jB ? (this.aJE = player, e.sU && e.de && e.se.v()) : (g8.vr(player, player === e.hK ? 21 : 22), 8 === e.f ? this.aJE = 1 - player : e.sU ? (p6(player), p3(), e.de && e.se.v()) : this.aJF(player)), !0)
	}, this.rt = function(player) {
		1 === e.pq && 0 !== bC.e2[player] && 2 !== bC.hc[player] && (8 === e.f ? this.aJE = 1 - player : this.aJF(player)), e.xB--, e.a6n--, g8.vr(player, 4), ad.hj.a79(2) && hR.hS(!0)
	}, this.aJF = function(player) {
		e.de ? (p6(player), p3()) : vS.aJG(player)
	}
}

function s8(aCN, aZ) {
	var ab, h;
	for (this.resize = function() {
			for (var h = 0; h < aCN.length; h++) ad.ae.eT(aCN[h].button);
			ab.style.gap = ab.style.padding = ad.ae.af(ag.ah)
		}, (ab = document.createElement("div")).style.display = "grid", ab.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", ab.style.overflowY = "auto", ab.style.gridAutoRows = "5.3em", ab.style.maxHeight = "100%", h = 0; h < aCN
		.length; h++) aCN[h].button.style.fontSize = "1.2em", ab.appendChild(aCN[h].button);
	aZ.appendChild(ab)
}

function yl() {
	this.rl = function(player, b7) {
		ad.hj.a79(0) && ad.hj.m8(player) && j3.bl(b7) && (vc.a0V.a4b(0, player, b7), e.se.pk(player, b7))
	}, this.pR = function(player, bb, gv) {
		bC.tS[player]++, ad.hj.a79(1) && ad.hj.m8(player) && ad.hj.aB1(player, gv) && ad.hj.q9(player, bb, 12, e.cO) && ad.hj.aBC(player, gv) && ((gv = cC.a9g(player, hq.a9Q[0])) || cC.aGf(player)) && a9O(player, gv) && (vc.a0V.a4b(1, player, bb,
			hq.a9Q[0]), ad.hj.qD(player), hs.zi(player, bb), a9T(player))
	}, this.rm = function(player, bb, hh) {
		ad.hj.a79(1) && ad.hj.m8(player) && e.dj && ad.hj.aB1(player, hh) && ad.hj.aBD(player, hh) && ad.hj.hk(player, ad.hj.ba(player, bb), hh) && (vc.a0V.a4b(2, player, bb, hh), hW.hl(player, hh))
	}, this.rn = function(player, bb, b7) {
		ad.hj.a79(1) && ad.hj.m8(player) && j3.bl(b7) && br.cf.pb !== br.cf.q6 && br.cf.q7[player] !== br.cf.q8 && 0 !== bC.bD[player].length && ad.hj.q9(player, bb, 32, 16) && br.qG.qH(player, b7) && (vc.a0V.a4b(3, player, bb, b7), ad.hj.qD(
			player), br.cf.iu(player))
	}, this.ro = function(player, iC, b7) {
		ad.hj.a79(1) && ad.hj.m8(player) && j3.bl(b7) && br.a0R.a0S(player, iC) && br.qG.a3w(b7) && (vc.a0V.a4b(4, player, iC, b7), ad.hj.aBB(player, 8), br.cf.ro())
	}, this.rp = function(player, gv) {
		ad.hj.a79(1) && ad.hj.m8(player) && (gv = Math.min(gv, e.o), cC.a9g(player, gv)) && (vc.a0V.a4b(5, player, gv), cC.aGa(player, gv))
	}, this.rq = function(player, wc) {
		(ad.hj.a79(1) || ad.hj.a79(2)) && ad.hj.m8(player) && (wc = l.lM(wc, 0, 1023), vc.a0V.a4b(6, player, wc), x.y(player, 0, wc))
	}, this.rr = function(player, iG) {
		ad.hj.a79(1) && ad.hj.m8(player) && (vc.a0V.a4b(7, player, iG), vY.a2o(player, iG))
	}, this.rs = function(player) {
		(ad.hj.a79(0) || ad.hj.a79(1)) && ad.hj.m8(player) && va.rs(player) && vc.a0V.a4b(8, player)
	}, this.rt = function(player) {
		va.rt(player), vc.a0V.a4b(9, player)
	}
}

function aJH() {
	var size, aJC;
	this.d = function() {
		size = e.n, aJC = new Uint16Array(e.n);
		for (var h = e.n - 1; 0 <= h; h--) aJC[h] = h
	}, this.v = function() {
		for (var h = size - 1; 0 <= h; h--) 0 === bC.e2[aJC[h] + e.k] ? function(d1) {
			size--;
			for (var h = d1; h < size; h++) aJC[h] = aJC[h + 1]
		}(h) : oQ.v(aJC[h])
	}
}

function aJK() {
	this.o = 512, this.aB3 = 15e8, this.aJL = 1e9, this.hJ = 512, this.cO = 2, this.hK = 0, this.k = 0, this.xB = 0, this.n = 0, this.a6n = 0, this.q = 512, this.a35 = 150, this.sU = !0, this.s5 = !1, this.pq = 0, this.a1R = 0, this.yg = !1, this
		.de = !1, this.aCf = !1, this.dj = !1, this.dk = 0, this.f = 0, this.a8x = !1, this.se = null, this.wk = null, this.aG8 = 30, this.a6W = 0, this.wh = 0, this.aCG = 0, this.ed = function(a0b, a0e, g7, eg, a0c, aJM) {
			this.yg = !1, this.s5 = aJM, this.f = eg, this.a8x = a0c, this.dj = this.f < 7 || 9 === this.f, this.xB = this.k = g7.length, this.sU = 1 === this.xB, this.f = 10 === this.f && this.sU ? 7 : this.f, this.f = 8 === this.f && 2 !== this.k ?
				7 : this.f, this.dk = 9 === this.f ? 2 : this.f + 2, this.aG8 = this.k <= 2 ? 30 : this.k <= 50 ? 40 : 50, eo.eV && !eo.eW.ey ? this.aCf = this.de = !1 : this.aCf = this.de = this.dj || this.k < 100, this.se = this.de ? new sR : null,
				1 === d2 ? this.q = this.k : this.sU ? this.q = sj.oI() : this.q = this.o, this.n = this.q - this.k, this.a6n = 0, this.hK = a0e, this.a6W = 0, this.wh = 0, this.aCG = 0, t.a26(a0b), ug.d(), bC.d(g7), pP.ym.ra = [], dm.d(g7), this
				.pq = 1, hs.d(), aJN(), x2.a1K(), gU.d(), hW.d(), aJO(), bK.d(g7), aE8.d(), j3.d(), br.d(), oQ.d(), aJP.aQ(), sS.d(), p0(), vc.d(a0b, g7, eg, a0c), vZ.d(), va.d(), sd.d(), s4.d(), aJQ.putImageData(aJR, 0, 0), hP.d(), gR.d(), ny.d(),
				vd.d(), vY.d(), vV.d(), hR.d(), jb.d(), jk.d(), g8.d(), vW.d(), nx.d(), kJ.d(), vT.d(), pl.d(), vQ.d(), a6G(), cC.d(), x.d(), vR.d(), vS.d(), vX.d(), vP.d(), 8 === this.f ? (this.wk = new g6, this.wk.d(g7)) : this.wk = null, gb.aAG(),
				sY.aIA(), 0 === bC.e2[e.hK] && kJ.show(!1, !0), x.hS(!0), sa.d(), gb.gc = !0, this.s5 || this.sU && this.de || dK.eE.setState(1)
		}, this.a3l = function(aJT) {
			ce.cf.a8W(), this.pq = 0, gb.aAE(), dK.eE.setState(0), aJT || a0r.aJU.show(), gd.setState(0), cq.kn(5, 5)
		}, this.aJV = function() {
			return this.s5 ? jb.pr || !vd.a3e : this.sU && (jb.pr || this.de)
		}, this.aJW = function() {
			return 1 === this.pq && !this.de
		}
}

function aJY() {
	var aJZ, aJa, aJb, aJc, aJd, aJe;
	this.d = function() {
		aJb = aJZ = 10, aJc = aJa = 10
	}, this.aJf = function() {
		aJe = 512, aJd = new Uint16Array(aJe);
		for (var h = 0; h < aJe; h++) aJd[h] = 100 + aJg(p(25600 * h, aJe - 4), 9)
	}, this.ha = function() {
		return aJc
	}, this.v = function() {
		if (--aJb <= 0 && (aJb = aJZ, function() {
				var h, aJm, h5 = bC.bc[e.hK];
				for (e.sU && !e.dj && 0 !== bC.e2[0] && 0 === sj.o7[0].eP && (bC.bc[0] += p(bC.cH[0], 6)), h = jB - 1; 0 <= h; h--) aJm = p(hW.jC(jA[h]) * bC.bc[jA[h]], 1e4), bC.bc[jA[h]] += aJm < 1 ? 1 : aJm, hW.a6P(jA[h]);
				hs.k1[9] += bC.bc[e.hK] - h5
			}(), --aJc <= 0)) {
			aJc = aJa;
			for (var h5 = bC.bc[e.hK], h = jB - 1; 0 <= h; h--) bC.bc[jA[h]] += bC.cH[jA[h]], hW.a6P(jA[h]);
			hs.k1[8] += bC.bc[e.hK] - h5
		}
	}, this.jC = function(player) {
		var ik = aJd[p((aJe - 1) * bC.cH[player], e.a1R)],
			aJk = (gb.kL() < 1920 && (ik = ik < (aJk = p(100 * (13440 - 6 * gb.kL()), 1920)) ? aJk : ik), this.hX(player));
		return bC.bc[player] > aJk && (ik -= p(2 * ik * (bC.bc[player] - aJk), aJk)), ik < 0 ? 0 : 700 < ik ? 700 : ik
	}, this.hX = function(player) {
		player = 100 * bC.cH[player];
		return player > e.aJL ? e.aJL : player
	}, this.a6P = function(player) {
		var b8 = bC.cH[player] * e.a35;
		bC.bc[player] = Math.min(Math.min(bC.bc[player], e.aB3), b8)
	}, this.hl = function(player, hh) {
		ad.hj.hp(hh, hq.hr[0]), hs.ht(player, hh), x.aJo(player, hq.hr[0] + hq.hr[1]), x.hu(hh, hq.hr[0]), ad.hj.qD(player)
	}, this.aDh = function() {
		for (var aL = jB, g7 = jA, dy = 0, hE = bC.bc, h = 0; h < aL; h++) dy += hE[g7[h]];
		return dy
	}, this.aDj = function(a90) {
		for (var b6, aL = jB, g7 = jA, dy = 0, hE = bC.bc, e7 = dm.e7, h = 0; h < aL; h++) e7[b6 = g7[h]] === a90 && (dy += hE[b6]);
		return dy
	}
}

function aJp() {
	this.fX = new aE, this.co = new aHR, this.d = function() {
		this.fX.d()
	}
}

function aIf() {
	this.wX = function(aH, font, maxWidth) {
		if (he.font = font, he.measureText(aH).width <= maxWidth) return aH;
		for (var h = aH.length - 1; 1 <= h; h--)
			if (aH = aH.substring(0, h), he.measureText(aH + "...").width <= maxWidth) return aH + "...";
		return "..."
	}
}

function pz() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a7i = 13, this.aDy = this.emojis.length, this.a1 = 676, this.aDx = 1024, this.a2 = this.emojis.indexOf("💀"), this.aJq = this.a2 + 1, this.a7h = this.emojis.indexOf("🥇"), this.aCX = this.emojis.indexOf("😊"), this.aE7 = function(
	b8) {
		return b8 < this.a1 ? String.fromCharCode(55356, 56806 + l.m(b8, 26), 55356, 56806 + b8 % 26) : this.emojis[Math.min(b8 - this.a1, this.aDy - 1)]
	}, this.aE0 = function(aH) {
		for (var aL = aH.length - 2, aM = [], h = 0; h < aL; h++) {
			var az = aH.charCodeAt(h) - 56806,
				b0 = aH.charCodeAt(h + 2) - 56806;
			0 <= az && az < 26 && 0 <= b0 && b0 < 26 && (aM.push(26 * az + b0), h += 3)
		}
		return aM
	}, this.aJr = function(b8) {
		return b8 < this.a1
	}, this.aJs = function(b8) {
		return b8 >= 1024 - this.a7i
	}, this.aJt = function(b8) {
		return b8 >= this.a1 && b8 < this.a1 + this.aJq
	}
}

function aJu() {
	var aJv, aJw, aJx, aJy, aJz, aK0, aK1, aK2, aK3, aK4, aK5, aK6, aK7, aK8, aK9, aKA, aKB, aKC, aKE, aKF, aKG, aKH, aKI, aKO, aKP, aKD = null,
		aKK = 0,
		aKL = !1,
		aKM = new Float32Array(4),
		aKN = 0,
		yE = 400;

	function eM() {
		aK3 = Math.floor(+dI.eC), aK4 = Math.floor(.5 * aK3), aKD.width = dI.aU, aKD.height = dI.dJ, aKE = aKD.getContext("2d", {
			alpha: !0
		}), ad.ae.textAlign(aKE, 1), ad.ae.textBaseline(aKE, 1), aKE.imageSmoothingEnabled = !0
	}

	function aKQ() {
		var h, aKV;
		for (he.font = ad.ae.hL(1, 100 * aK5), aKV = 80 / Math.floor(he.measureText(ad.fk.fs(e.aB3)).width), he.font = ad.ae.hL(1, 100), h = e.o - 1; 0 <= h; h--) aK2[h] = 100 / Math.floor(he.measureText(bC.tR[h]).width), aK1[h] = Math.min(aKV, aK2[
			h])
	}

	function aKW(h) {
		return !aB.dF.data[7].value || bC.bc[h] < 1e6 ? 1 : bC.bc[h] < 1e7 ? aKM[0] : aKM[Math.min(Math.floor(Math.log10(bC.bc[h])) - 6, 3)]
	}

	function aKU(dv) {
		aKC = !1, aKB = 1, aK9 = aKA = 0, dv.clearRect(0, 0, dI.aU, dI.dJ);
		for (var aHN, aHO, h, aKb, fontSize, aHP, kM = bd / be, kN = bf / be, kO = (dI.aU + bd) / be, kP = (dI.dJ + bf) / be, aKc = 0 !== bC.e2[e.hK] && bK.vD(e.hK), d1 = jB - 1; 0 <= d1; d1--) h = jA[d1], (fontSize = Math.floor(aK8 * be * aKW(h) *
			aK1[h] * aJz[h])) < aK7 || aK3 <= fontSize || aJx[h] + aJz[h] > kM && aJx[h] < kO && aJy[h] + aK0[h] > kN && aJy[h] < kP && (aHN = Math.floor(dI.aU * (aJx[h] + aJz[h] / 2 - kM) / (kO - kM)), aHO = Math.floor(dI.dJ * (aJy[h] + aK0[h] /
			2 - kN) / (kP - kN) - .1 * fontSize), aKb = bK.v0[h], dv.font = ad.ae.hL(1 === bC.hc[h] ? 4 : 1, fontSize), dv.fillStyle = aKd(fontSize, aKb % 2), aB.dF.data[7].value ? aKe(dv, h, fontSize, aHN, aHO, aKb) : aKf(h, fontSize, aHN,
			aHO, dv), aKC = !0, 0 < aKG[h] ? function(aHN, aHO, fontSize, h, dv) {
			0 === xl[h] ? z.a0.aJr(aKF[h]) ? (function(aHN, aHO, fontSize, player, wc, dv) {
				for (var hZ = aHO, jV = (dv.globalAlpha = aKn(fontSize), aKW(player) * (aB.dF.data[7].value ? aKN : aK2[player])), ja = aHN - .5 * fontSize / jV - .9 * fontSize, fq = 0; fq < 2; fq++) dv.fillText(z.a0.aE7(wc), ja, hZ),
					ja = aHN + .5 * fontSize / jV + .9 * fontSize;
				dv.globalAlpha = 1
			}(aHN, aHO, fontSize, h, aKF[h], dv), aKh(aHN, aHO, fontSize, 0, 0, dv)) : z.a0.aJt(aKF[h]) ? (aKq(aHN, aHO, fontSize, aKF[h], 0, dv), aKh(aHN, aHO, fontSize, 0, 1, dv)) : (aKq(aHN, aHO, fontSize, aKF[h], 1, dv), aKh(aHN, aHO,
				fontSize, 1, 0, dv)) : aKq(aHN, aHO, fontSize, aKF[h], 0, dv)
		}(aHN, aHO, fontSize, h, dv) : 0 === xl[h] && aKh(aHN, aHO, fontSize, 0, 0, dv), aKc && (0 < aKG[h + e.o] || 0 < aKG[h + 2 * e.o] || 0 < aKG[h + 3 * e.o] || 0 < aKG[h + 4 * e.o]) && function(aHN, aHO, fontSize, h, dv) {
			var fm, s = -1;
			for (fm = 4; 1 <= fm; fm--) 0 < aKG[h + fm * e.o] && s++;
			for (fm = 1; fm < 5; fm++) 0 < aKG[h + fm * e.o] && (! function(aHN, aHO, fontSize, fm, h, aKl, h5, dv) {
				var du;
				if (1 === fm) {
					h = aKF[h + e.o];
					if (!z.a0.aJs(h)) return function(aHN, aHO, fontSize, wc, aKl, dv) {
						dv.globalAlpha = aKn(fontSize);
						aHN -= .534 * aKl * fontSize, aKl = aHO + 1.59 * fontSize;
						dv.font = ad.ae.hL(0, .785 * fontSize), dv.fillText(z.a0.aE7(wc), aHN, aKl), dv.globalAlpha = 1
					}(aHN, aHO, fontSize, h, aKl, dv);
					du = z.dx.m5[h - 1024 + z.a0.a7i]
				} else du = 2 === fm ? nx.aCV()[4].fF[+(h5 < 255)] : (3 === fm ? nx.aCV()[5] : nx.aCV()[6]).fF[0];
				h = z.dx.m4, h5 = .8 * fontSize / h, fm = aHN - .5 * h5 * h - .534 * aKl * fontSize, aHN = aHO + 1.4 * h5 * h;
				dv.setTransform(h5, 0, 0, h5, fm, aHN), dv.globalAlpha = aKn(fontSize), dv.drawImage(du, 0, 0), dv.globalAlpha = 1, dv.setTransform(1, 0, 0, 1, 0, 0)
			}(aHN, aHO, fontSize, fm, h, s, aKG[h + fm * e.o], dv), s -= 2)
		}(aHN, aHO, fontSize, h, dv), (aHP = aK5 * fontSize) < aK7 || (dv.font = ad.ae.hL(1, aHP), aHO += Math.floor(.78 * fontSize), aB.dF.data[7].value ? aKf(h, aHP, aHN, aHO, dv) : aKe(dv, h, aHP, aHN, aHO, aKb)))
	}

	function aKf(h, fontSize, dr, ds, dv) {
		var ___id = h;
		dv.fillText(bC.tR[h], dr, ds), h < e.k && 2 !== bC.hc[h] || (h = fontSize / aK2[h], dv.fillRect(dr - .5 * h, ds + ad.ae.lU * fontSize, h, Math.max(1, .1 * fontSize)));
		aB.dF.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (dv.fillStyle = utils.textStyleBasedOnDensity(___id)), dv.fillText(utils.getDensity(___id), dr, ds + fontSize));
	}

	function aKe(dv, h, fontSize, aHN, aHO, aKb) {
		var ___id = h;
		h = ad.fk.fs(bC.bc[h]);
		aKb >> 1 & 1 ? (dv.lineWidth = .05 * fontSize, dv.strokeStyle = aKd(fontSize, aKb % 2), dv.strokeText(h, aHN, aHO)) : (1 < aKb && (dv.lineWidth = .12 * fontSize, dv.strokeStyle = aKd(fontSize, aKb), dv.strokeText(h, aHN, aHO)), dv.fillText(h,
			aHN, aHO));
		aB.dF.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (dv.fillStyle = utils.textStyleBasedOnDensity(___id)), dv.fillText(utils.getDensity(___id), aHN, aHO + fontSize))
	}

	function aKh(aHN, aHO, fontSize, aKl, aKm, dv) {
		var o3 = .95 * fontSize / aKI,
			aHN = aHN - .5 * o3 * aKH + .8 * aKl * fontSize,
			aKl = aHO - 1.76 * o3 * aKI - (.35 - ad.ae.lU + .7) * aKm * fontSize;
		dv.setTransform(o3, 0, 0, o3, aHN, aKl), dv.globalAlpha = aKn(fontSize), dv.drawImage(o0.get(4), 0, 0), dv.globalAlpha = 1, dv.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aKq(aHN, aHO, fontSize, wc, aKl, dv) {
		var di, ja, o3;
		dv.globalAlpha = aKn(fontSize), z.a0.aJs(wc) ? (di = z.dx.m4, dv.setTransform(o3 = 1.1 * fontSize / di, 0, 0, o3, ja = aHN - .5 * o3 * di - .8 * aKl * fontSize, o3 = aHO - 1.55 * o3 * di), dv.drawImage(z.dx.m5[wc - 1024 + z.a0.a7i], 0, 0), dv
			.setTransform(1, 0, 0, 1, 0, 0)) : (ja = aHN - .8 * aKl * fontSize, o3 = aHO - (.35 - ad.ae.lU + 1) * fontSize, dv.fillText(z.a0.aE7(wc), ja, o3)), dv.globalAlpha = 1
	}

	function aKd(fontSize, aKb) {
		return aK4 <= fontSize && fontSize < aK3 ? dm.a5c[aKb] + aKn(fontSize).toFixed(3) + ")" : dm.a5d[aKb]
	}

	function aKn(fontSize) {
		return aK4 <= fontSize && fontSize < aK3 ? 1 - (fontSize - aK4) / (aK3 - aK4) : 1
	}

	function aL0(jV, aU) {
		return 1 + Math.floor(aK6 * jV * aU)
	}

	function aKx(h) {
		for (var left = aJx[h], d1 = aJx[h] - bC.e3[h] - 1; 0 <= d1; d1--)
			if (!aL2(h, --left, aJy[h], aK0[h])) {
				left++;
				break
			} var right = aJx[h];
		for (d1 = bC.e4[h] - aJx[h] - aJz[h]; 0 <= d1; d1--)
			if (!aL2(h, ++right + aJz[h] - 1, aJy[h], aK0[h])) {
				right--;
				break
			} var dr = Math.floor((left + right) / 2),
			top = aJy[h];
		for (d1 = aJy[h] - bC.e5[h] - 1; 0 <= d1; d1--)
			if (!aL3(h, dr, --top, aJz[h])) {
				top++;
				break
			} var bottom = aJy[h];
		for (d1 = bC.e6[h] - aJy[h] - aK0[h]; 0 <= d1; d1--)
			if (!aL3(h, dr, ++bottom + aK0[h] - 1, aJz[h])) {
				bottom--;
				break
			} var ds = Math.floor((top + bottom) / 2);
		aKu(h, dr, ds, aJz[h], aK0[h]) && (aJx[h] = dr, aJy[h] = ds)
	}

	function aKu(player, dr, ds, aU, dJ) {
		eP = Math.floor(.2 * aU);
		for (var eP, fm = dr + aU - 1; dr <= fm; fm--)
			if (!aL2(player, fm, ds, dJ)) return;
		for (fm = ds + dJ - 1 - (eP = (eP = Math.floor(.25 * dJ)) < 1 ? 1 : eP); ds + eP <= fm; fm--)
			if (!aL3(player, dr, fm, aU)) return;
		return 1
	}

	function aL2(player, dr, ds, dJ) {
		return bK.gq(player, 4 * (ds * ap.aq + dr)) && bK.gq(player, 4 * ((ds + dJ - 1) * ap.aq + dr))
	}

	function aL3(player, dr, ds, aU) {
		return bK.gq(player, 4 * (ds * ap.aq + dr)) && bK.gq(player, 4 * (ds * ap.aq + dr + aU - 1))
	}
	this.d = function() {
		if (yE = 0 === (yE = aB.dF.data[11].value) ? 280 : 1 === yE ? 187 : 112, aKC = !1, aK8 = .88, aK5 = .5, aK6 = 1.8, aK7 = 12 - 3 * aB.dF.data[9].value, aJw = aJv = 0, aJx = new Uint16Array(e.o), aJy = new Uint16Array(e.o), aJz =
			new Uint16Array(e.o), aK0 = new Uint16Array(e.o), aK1 = new Float32Array(e.o), aK2 = new Float32Array(e.o), aKF = new Uint16Array(2 * e.o), aKG = new Uint8Array(5 * e.o), aKO = new Uint8Array(e.o), aKP = new Uint8Array(e.o), aKD =
			aKD || document.createElement("canvas"), eM(), aKA = aK9 = 0, aKB = 1, aB.dF.data[7].value) {
			var h, aKV;
			for (aKQ(), he.font = ad.ae.hL(1, 100), aKV = 100 / Math.floor(he.measureText("900 000").width), h = e.o - 1; 0 <= h; h--) aK1[h] = Math.min(aKV, 2 * aK2[h]);
			aKN = aKV, aKM[0] = 100 / (aKV * Math.floor(he.measureText("5 000 000").width)), aKM[1] = 100 / (aKV * Math.floor(he.measureText("50 000 000").width)), aKM[2] = 100 / (aKV * Math.floor(he.measureText("500 000 000").width)), aKM[3] =
				100 / (aKV * Math.floor(he.measureText("1 000 000 000").width))
		} else aKQ();
		! function() {
			var h;
			for (h = e.o - 1; 0 <= h; h--) bC.cH[h] < 12 ? (aJx[h] = bC.e3[h] + 1, aJy[h] = bC.e5[h] + 1, aJz[h] = 1, aK0[h] = 1) : (aJx[h] = bC.e3[h], aJy[h] = bC.e5[h] + 1, aJz[h] = 4, aK0[h] = 2);
			if (e.de)
				for (h = 0; h < e.k; h++) aJz[h] = 0;
			aKH = o0.get(4).width, aKI = o0.get(4).height
		}()
	}, this.aJo = function(b6, wy) {
		wy > 18 * bC.cH[b6] ? (aKP[b6] = 6, bK.v0[b6] = 2 + bK.v0[b6] % 2) : (aKO[b6] = 4, (bK.v0[b6] < 2 || 3 < bK.v0[b6]) && (bK.v0[b6] = 6 + bK.v0[b6] % 2))
	}, this.hu = function(b6, wy) {
		wy > 6 * bC.cH[b6] ? (aKP[b6] = 6, bK.v0[b6] = 4 + bK.v0[b6] % 2) : (aKO[b6] = 4, (bK.v0[b6] < 4 || 5 < bK.v0[b6]) && (bK.v0[b6] = 8 + bK.v0[b6] % 2))
	}, this.resize = function() {
		eM(), aKU(aKE)
	}, this.sc = function() {
		for (var h = 0; h < e.k; h++) bC.e4[h] - bC.e3[h] != 3 || bC.e6[h] - bC.e5[h] != 3 ? (aJx[h] = bC.e3[h] + (bC.e4[h] !== bC.e3[h] ? 1 : 0), aJy[h] = bC.e5[h], aJz[h] = 1, aK0[h] = 1) : (aJx[h] = bC.e3[h], aJy[h] = bC.e5[h] + 1, aJz[h] = 4,
			aK0[h] = 2)
	}, this.y = function(player, aA, aKX) {
		! function(player, aA, aKX) {
			player += aA * e.o;
			0 === aA ? aKF[player] === aKX && 0 < aKG[player] ? aKG[player] = 0 : (aKF[player] = aKX, aKG[player] = z.a0.aJr(aKX) ? 255 : 64) : 1 === aA ? (aKG[player] = 64, aKF[player] = aKX) : aKG[player] = aKX
		}(player, aA, aKX), 2 === e.pq && this.hS(!0)
	}, this.ge = function() {
		aKC && (1 !== aKB ? (he.imageSmoothingEnabled = !0, he.setTransform(aKB, 0, 0, aKB, 0, 0), he.drawImage(aKD, -aK9 / aKB, -aKA / aKB), he.setTransform(1, 0, 0, 1, 0, 0), he.imageSmoothingEnabled = !1) : he.drawImage(aKD, -aK9, -aKA))
	}, this.aGU = function(bT, bW) {
		aK9 += bT, aKA += bW
	}, this.jg = function(bT, bW) {
		x.aGU(bT, bW)
	}, this.zoom = function(jy, jY, jZ) {
		aKB *= jy, aK9 = (aK9 + jY) * jy - jY, aKA = (aKA + jZ) * jy - jZ
	}, this.hS = function(x8) {
		return !(!aKL && !x8 && gb.kH < aKK + (1 === aKB && 0 === aK9 && 0 === aKA && (e.aJV() || e.de || 2 === e.pq) ? 1e3 : yE) || (aKL = !1, aKK = gb.kH, aKU(aKE), 0))
	}, this.aHQ = function(h) {
		return aKW(h) * aK1[h]
	}, this.aKa = function(player) {
		return aK1[player]
	}, this.v = function() {
		gb.kL() % 10 == 9 && (aKL = e.aJW() && !e.aJV()), !e.aJV() && 4 <= ++aJw && function() {
			var h, d1, fq;
			for (aJw = 0, fq = 4; 1 <= fq; fq--)
				for (d1 = jB - 1; 0 <= d1; d1--) h = jA[d1] + fq * e.o, 0 < aKG[h] && aKG[h] < 255 && aKG[h]--;
			if (2 !== e.pq)
				for (d1 = jB - 1; 0 <= d1; d1--) h = jA[d1], 0 < aKG[h] && aKG[h] < 255 && aKG[h]--
		}();
		for (var aL = Math.floor(.1 * jB), h = aJv + (aL = jB < (aL = aL < 8 ? 8 : aL) ? jB : aL) - 1; aJv <= h; h--) ! function(h) {
			var jV = aKW(h) * aK1[h];
			0 < aJz[h] && aKu(h, aJx[h], aJy[h], aJz[h], aK0[h]) ? ! function(h) {
				for (var dr, ds, aU, dJ, bJ = !1, fq = 0; fq < 8; fq++) {
					if (aU = aJz[h] + 2, dJ = aK0[h] + 2, aU > bC.e4[h] - bC.e3[h] + 1 || dJ > bC.e6[h] - bC.e5[h] + 1) return bJ;
					if (dr = aJx[h] - 1, ds = aJy[h] - 1, !aKu(h, dr, ds, aU, dJ)) return bJ;
					aJx[h] = dr, aJy[h] = ds, aJz[h] = aU, aK0[h] = dJ, bJ = !0
				}
				return bJ
			}(h) && function(h, jV) {
				for (var dr, ds, aU, dJ, bJ = !1, aL1 = aJz[h], cl = 1 + Math.floor(.02 * aL1), fq = 1; fq < 5; fq++) {
					if ((aU = aL1 + fq * cl) > bC.e4[h] - bC.e3[h] + 1) return bJ;
					if ((dJ = aL0(jV, aU)) > bC.e6[h] - bC.e5[h] + 1) return bJ;
					dr = bC.e3[h] + Math.floor(Math.random() * (bC.e4[h] - bC.e3[h] + 2 - aU)), ds = bC.e5[h] + Math.floor(Math.random() * (bC.e6[h] - bC.e5[h] + 2 - dJ)), aKu(h, dr, ds, aU, dJ) && (aJx[h] = dr, aJy[h] = ds, aJz[h] = aU,
						aK0[h] = dJ, bJ = !0)
				}
				return bJ
			}(h, jV) && aKx(h) : ! function(h, jV) {
				var dJ, dr = aJx[h] + 1,
					ds = aJy[h] + 1,
					aU = aJz[h] - 2;
				for (;;) {
					if (aU < 1) {
						aJz[h] = 0;
						break
					}
					if (dJ = aL0(jV, aU), aKu(h, dr, ds, aU, dJ)) return aJx[h] = dr, aJy[h] = ds, aJz[h] = aU, aK0[h] = dJ, 1;
					dr++, ds++, aU -= 2
				}
				return
			}(h, jV) ? function(h, jV) {
				var dr, ds, aU, dJ, fq, rY, qN = bC.e4[h] - bC.e3[h] + 1,
					u3 = Math.floor(.02 * qN);
				for (rY = -6 * (u3 = u3 < 1 ? 1 : u3), fq = qN; rY <= fq; fq -= u3)
					if (dJ = aL0(jV, aU = 0 < fq ? fq : 1), dr = bC.e3[h] + Math.floor(Math.random() * (bC.e4[h] - bC.e3[h] + 2 - aU)), ds = bC.e5[h] + Math.floor(Math.random() * (bC.e6[h] - bC.e5[h] + 2 - dJ)), aKu(h, dr, ds, aU, dJ))
						return aJx[h] = dr, aJy[h] = ds, aJz[h] = aU, aK0[h] = dJ
			}(h, jV) : aKx(h)
		}(jA[h % jB]);
		aJv = (aJv + aL) % jB
	}, this.vU = function() {
		var h, b6, az, b0;
		if (gb.kL() % 4 == 1)
			for (h = jB - 1; 0 <= h; h--) b6 = jA[h], bK.v0[b6] < 2 || ((az = Math.max(aKO[b6] - 1, 0)) === (b0 = Math.max(aKP[b6] - 1, 0)) ? 0 === az && (bK.v0[b6] %= 2) : 0 === b0 && bK.v0[b6] < 6 && (bK.v0[b6] += 4), aKO[b6] = az, aKP[b6] =
				b0)
	}, this.wQ = function(player) {
		var h = player + 2 * e.o,
			h5 = aKG[h];
		return 0 < h5 && (g8.ww(50, player), aKG[h] = 0, 255 === h5)
	}, this.aCp = function(player) {
		return 255 === aKG[player + 2 * e.o]
	}
}

function p(d1, fq) {
	return Math.floor(d1 / fq + 1 / (2 * fq))
}

function qh(d1, fq) {
	return 0 <= d1 ? p(d1, fq) : -p(-d1, fq)
}

function a9q(b8) {
	return b8 * b8
}

function hd(d1, fq) {
	return fq < d1 ? d1 : fq
}

function hb(d1, fq) {
	return d1 < fq ? d1 : fq
}

function yf(d1, b8, fq) {
	return b8 < d1 ? d1 : fq < b8 ? fq : b8
}

function aL4(b8, aL) {
	for (var fm = p(b8 + 1, 2), h = 0; h < aL; h++) fm = p(fm + p(b8, fm), 2);
	return fm
}

function aJg(b8, aL) {
	return b8 < 1 ? 0 : aL4(b8, aL)
}

function mV(kM, kN, jF, jJ, kO, kP, jG, jK) {
	return !(kM + jF <= kO || kN + jJ <= kP || kO + jG <= kM || kP + jK <= kN)
}

function mT(kM, kN, jF, jJ, kO, kP, jG, jK) {
	return kM <= kO && kN <= kP && kO + jG <= kM + jF && kP + jK <= kN + jJ
}

function a4z(b8) {
	return Math.floor(!!b8 * (1 + Math.log2(b8 + .5)))
}

function yk() {
	this.aE6 = function(wc, player) {
		g8.wa(e.hK, player, wc), ce.wb.iI(wc, player)
	}, this.wD = function(player) {
		g8.wr(player, 0), ce.wb.iL(player)
	}, this.aCe = function(aCS, player) {
		g8.ws(aCS, player), ce.wb.iN(aCS, player)
	}, this.a6T = function() {
		e.sU || e.s5 || ce.aL5.a6T()
	}
}

function aL6() {
	var aU, dr, mc, fF, hC, jR, bb, op, h9, hD, aL7 = 11 / 12;

	function aL8() {
		var mb = Math.floor(bb * (aU - 2 * mc)),
			aLA = 1 + Math.floor(.0625 * ny.dJ),
			aLB = 1 + Math.floor(.3 * ny.dJ),
			jJ = Math.floor(.55 * ny.dJ);
		hC.clearRect(0, 0, aU, ny.dJ), hC.fillStyle = a7.pF, hC.fillRect(0, 0, mc, ny.dJ), hC.fillRect(mc + mb, 0, aU - mc - mb, ny.dJ), hC.fillStyle = bb < 1 / 3 ? "rgba(" + Math.floor(3 * bb * 130) + ",130,0,0.85)" : bb < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (bb - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (bb - 2 / 3) * 130) + ",0.85)", hC.fillRect(mc, 0, mb, ny.dJ), hC.fillStyle = a7.a8, hC.fillRect(0, 0, aU, 1), hC.fillRect(0, ny.dJ - 1, aU, 1),
			hC.fillRect(0, 0, 1, ny.dJ), hC.fillRect(mc, 0, 1, ny.dJ), hC.fillRect(mc + mb, 0, 1, ny.dJ), hC.fillRect(aU - mc, 0, 1, ny.dJ), hC.fillRect(aU - 1, 0, 1, ny.dJ), hC.fillRect(Math.floor(.25 * ny.dJ) + aLB, Math.floor((ny.dJ - aLA) / 2),
				ny.dJ - 2 * aLB, aLA), hC.fillRect(Math.floor(aU - 1.25 * ny.dJ) + aLB, Math.floor((ny.dJ - aLA) / 2), ny.dJ - 2 * aLB - aLB % 2, aLA), hC.fillRect(Math.floor(aU - 1.25 * ny.dJ) + Math.floor((ny.dJ - aLA) / 2), aLB, aLA, ny.dJ - 2 *
				aLB - aLB % 2), op = ad.hj.ba(e.hK, ny.zD()), hC.fillText(ad.fk.fs(op) + " (" + ad.fk.fu(100 * bb, +(bb < .1)) + ")", Math.floor(.5 * aU), jJ)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		bb = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => ny.aDR(arg1);

	function aLF(jy) {
		return !(1 < jy && 1 === bb || (1 < jy && jy * bb - bb < 1 / 1024 ? jy = (bb + 1 / 1024) / bb : jy < 1 && bb - jy * bb < 1 / 1024 && (jy = (bb - 1 / 1024) / bb), bb = l.lM(bb * jy, 1 / 1024, 1), aL8(), 0))
	}

	function aLG(jY) {
		return bb !== (bb = l.lM((jY - dr - mc) / (aU - 2 * mc), 1 / 1024, 1)) && (aL8(), !0)
	}
	this.ds = 0, this.a7A = !1, this.d = function() {
		jR = !e.de && !e.s5, hD = !1, bb = .5, op = 0, this.a7A = !1, this.resize()
	}, this.resize = function() {
		dK.eE.eF() && dI.aU < .8 * dI.dJ ? (this.dJ = Math.floor(.0536 * dI.eC), aU = dI.aU - 4 * ag.gap - this.dJ) : (aU = Math.floor((dK.eE.eF() ? .65 : .389) * dI.eC), aU += 12 - aU % 12, this.dJ = Math.floor(aU / 12)), mc = Math.floor(3 *
			this.dJ / 2), h9 = ad.ae.hL(1, Math.floor(.5 * this.dJ)), (fF = document.createElement("canvas")).width = aU, fF.height = this.dJ, (hC = fF.getContext("2d", {
			alpha: !0
		})).font = h9, ad.ae.textBaseline(hC, 1), ad.ae.textAlign(hC, 1), this.hO(), aL8()
	}, this.hO = function() {
		dr = dK.eE.eF() && dI.aU < .8 * dI.dJ ? this.dJ + 3 * ag.gap : Math.floor((dI.aU - aU) / 2), this.ds = dI.dJ - this.dJ - w9.wA() * ag.gap
	}, this.hS = function() {
		hD && (hD = !1, aL8())
	}, this.jR = function() {
		return !(!jR || jb.pr && dr < Math.floor(ag.gap + 5.5 * this.dJ))
	}, this.w8 = function(aAk) {
		return !!this.jR() && dr + aU > dI.aU - aAk - ag.gap
	}, this.sW = function() {
		jR = !e.s5
	}, this.nz = function() {
		jR = !1
	}, this.zD = function() {
		return l.lM(Math.floor(1024 * bb + .5) - 1, 0, 1023)
	}, this.lP = function(jY, jZ) {
		return this.jR() && dr < jY && jY < dr + aU && jZ > this.ds
	}, this.jX = function(jY, jZ) {
		return !!this.jR() && !!ny.lP(jY, jZ) && (gR.aDN = !1, function(dg, jY, jZ) {
			if (function(jY, jZ) {
					return dr < jY && jY < dr + mc && jZ > ny.ds
				}(jY, jZ)) return aLF(aL7);
			if (function(jY, jZ) {
					return dr + aU - mc < jY && jY < dr + aU && jZ > ny.ds
				}(jY, jZ)) return aLF(1 / aL7);
			return dg.a7A = !0, aLG(jY)
		}(this, jY, jZ) && (gb.gc = !0), !0)
	}, this.aDR = function(cl) {
		0 !== e.pq && this.jR() && aLF(cl) && (gb.gc = !0)
	}, this.rJ = function(deltaY) {
		var cl;
		return !(0 === deltaY || !this.jR()) && aLF(cl = 0 < deltaY ? (cl = 400 / (400 + deltaY)) < aL7 ? aL7 : cl : 1 / aL7 < (cl = (400 - deltaY) / 400) ? 1 / aL7 : cl)
	}, this.jg = function(jY) {
		return !!this.a7A && aLG(jY)
	}, this.aDO = function() {
		this.a7A = !1
	}, this.v = function() {
		this.jR() && op !== ad.hj.ba(e.hK, this.zD()) && (hD = !0)
	}, this.ge = function() {
		this.jR() && he.drawImage(fF, dr, this.ds)
	}
}

function fd() {
	this.ak = ["s"], this.al = ["Accept", "You conquered {0}.", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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

function aFd() {
	this.f0 = null, this.d = function() {
		var aLH = [120, 105, 92],
			cos = [12, 12, 60],
			aLI = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aLJ = [140, 130, 120],
			aLK = [12, 12, 76],
			aLL = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aLM = [130, 117, 106],
			aLN = [12, 12, 68],
			aLO = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.f0 = new Array(ap.ew + 1), this.f0[0] = {
			name: "White Arena",
			aU: 230,
			dJ: 230,
			tv: 1e3,
			te: 2e3,
			a24: 173
		}, this.f0[1] = {
			name: "Black Arena",
			aU: 800,
			dJ: 800,
			tv: 100,
			te: 50,
			a24: 43
		}, this.f0[2] = {
			name: "Island",
			aU: 512,
			dJ: 512,
			tv: 128,
			te: 32,
			a24: 0
		}, this.f0[3] = {
			name: "Mountains",
			aU: 960,
			dJ: 960,
			tv: 60,
			te: 8,
			a24: 0
		}, this.f0[4] = {
			name: "Desert",
			aU: 900,
			dJ: 900,
			tv: 100,
			te: 5,
			a24: 0
		}, this.f0[5] = {
			name: "Swamp",
			aU: 1e3,
			dJ: 1e3,
			tv: 100,
			te: 40,
			a24: 0
		}, this.f0[6] = {
			name: "Snow",
			aU: 1e3,
			dJ: 1e3,
			tv: 100,
			te: 20,
			a24: 0
		}, this.f0[7] = {
			name: "Cliffs",
			aU: 1024,
			dJ: 1024,
			tv: 128,
			te: 32,
			a24: 0
		}, this.f0[8] = {
			name: "Pond",
			aU: 820,
			dJ: 820,
			tv: 200,
			te: 100,
			a24: 0
		}, this.f0[9] = {
			name: "Halo",
			aU: 1024,
			dJ: 1024,
			tv: 128,
			te: 32,
			a24: 0
		}, this.f0[10] = {
			name: "Europe",
			a1y: aLJ,
			a1z: aLK,
			a20: aLL
		}, this.f0[11] = {
			name: "World",
			a1y: aLM,
			a1z: aLN,
			a20: aLO
		}, this.f0[12] = {
			name: "Caucasia",
			a1y: aLM,
			a1z: aLN,
			a20: aLO
		}, this.f0[13] = {
			name: "Africa",
			a1y: aLH,
			a1z: cos,
			a20: aLI
		}, this.f0[14] = {
			name: "Middle East",
			a1y: aLH,
			a1z: cos,
			a20: aLI
		}, this.f0[15] = {
			name: "Scandinavia",
			a1y: aLJ,
			a1z: aLK,
			a20: aLL
		}, this.f0[16] = {
			name: "North America",
			a1y: aLJ,
			a1z: aLK,
			a20: aLL
		}, this.f0[17] = {
			name: "South America",
			a1y: aLH,
			a1z: cos,
			a20: aLI
		}, this.f0[18] = {
			name: "Asia",
			a1y: aLM,
			a1z: aLN,
			a20: aLO
		}, this.f0[19] = {
			name: "Australia",
			a1y: aLH,
			a1z: cos,
			a20: aLI
		}, this.f0[20] = {
			name: "Island Kingdom",
			aU: 1024,
			dJ: 1024,
			tv: 128,
			te: 32,
			a24: 0
		}, this.f0[ap.ew] = {}
	}
}

function aJX() {
	i5 || (tW(), aCL(), l = new zm, sC = new aH3, ad = new aIe, a7 = new a44, e = new aJK, fy = new a7F, cn = new aJp, oQ = new zL, pl = new a9t, vQ = new aJH, vT = new aHD, sY = new aHw, sS = new sv, ni = new iP, nx = new aCM, jb = new a3Y, g8 =
		new vf, gX = new aAm, vW = new yn, jk = new aLT, ny = new aL6, gR = new aGD, rH = new qt, vV = new h8, hP = new xm, hR = new aHS, kJ = new nn, n1 = new aFO, gY = new mX, gd = new aC4, sj = new o5, o0 = new a1S, bK = new uh, nh = new nP,
		cC = new aGW, hW = new aJY, a2f = new aDd, x = new aJu, bC = new tP, aJP = new uY, ug = new a, z = new py, x2 = new a13, qf = new tc, a5V = new a5J, ce = new aLU, t = new aC2, aHI = new a2q, aE8 = new mJ, aDJ = new aBt, sa = new zv, dI =
		new aLV, uS = new a7I, o8 = new a7C, vY = new a2N, gZ = new a8d, vP = new pM, aLP = new aA5, vS = new aLW, vR = new j6, vX = new lh, oL = new aLX, eo = new eU, pP = new yi, vc = new a0U, vd = new aEQ, aP = new tb, aS = new aDW, aLQ =
		new aFZ, yd = new aCx, j3 = new am, br = new aJB, hq = new aH7, sd = new aIt, va = new aJD, a2j = new aDZ, ap = new aFc, aDM = new a74, cq = new aHp, a0r = new aLY, dL = new fa, dK = new mA, i5 = new d8, a6l = new dQ, aB = new q1, dm =
		new a5X, vZ = new aIU, a1d = new aLZ, mU = new gI, gU = new aLa, aCh = new aIp, hs = new ze, s4 = new jE, gb = new aAB, w9 = new aAA, ag = new e8, my = new aAq, aLR = new a6Y, i5.d(), dK.d(), dI.a1g(), aB.d(), dL.d(), aLR.d(), ad.d(), nh
		.d(), aCh.d(), ce.d(), fy.d(), cn.d(), ap.d(), aLc(), cq.d(), a1f = new a89, dI.d(), dK.eE.a9L(), gb.d(), ag.d(), a1d.d(), (hx = new aAK).d(), aC8 = new aLd, t.d(), hW.aJf(), a0r.d(), x2.d(), gd.d(), oL.d(), rH.d(), aJP.d(), yd.d(), o0
		.d(), gb.gc = !0, setTimeout(function() {
			ap.aQ(2, 14071)
		}, 0), cq.kn(5, 5), aLQ.a8i(), dK.eE.a9N(), dI.aBh(), i5.dB = 1)
}

function aJN() {
	(aEA = void 0 === aEA ? document.createElement("canvas") : aEA).width = ap.aq, aEA.height = ap.bj, aJQ = aEA.getContext("2d", {
		alpha: !0
	}), aJR = aJQ.getImageData(0, 0, ap.aq, ap.bj), vE = aJR.data, ad.eS.a2F(vE)
}

function aLd() {
	var dr, ds, dJ, a3N, aLe, aLf, aLg, aLh, aLi, aU, le, aLj;
	this.jR = !1, this.d = function(aH, a8D) {
		if (1 === dK.id && 13 <= dK.dH && dK.dH < 18) return a8D ? void(le = aH) : le !== aH ? void 0 : void dK.mC.saveString(200, aH);
		a8D && (le = aH, (aLj = document.createElement("a")).appendChild(document.createTextNode(le)), this.jR = !0, aLj.title = le, aLj.target = "_blank", aLj.href = le, aLj.style.textAlign = "center", aLj.style.color = a7.a8, aLj.style
			.position = "absolute", aLj.style.padding = "0px", aLj.style.margin = "0px", this.resize(), document.body.appendChild(aLj), gb.gc = !0)
	}, this.jc = function() {
		return !(!this.jR || (document.body.removeChild(aLj), this.jR = !1))
	}, this.jX = function(bQ, bR) {
		return !!this.jR && ((bQ < dr || bR < ds || dr + aU < bQ || ds + dJ < bR || dr + aU - a3N < bQ && bR < ds + a3N) && (gb.gc = !0, this.jR = !1, document.body.removeChild(aLj)), !0)
	}, this.resize = function() {
		var h9, aL1;
		this.jR && (aLh = Math.floor(.8 * (dK.eE.eF() ? dI.aU > dI.dJ ? .6 : .55 : .4) * dI.eC), a3N = Math.floor(.15 * aLh), aLe = Math.floor(.35 * a3N), aLf = Math.floor(.5 * a3N), aLg = Math.floor(2.5 * aLf), dJ = a3N + aLe + 3 * aLf, h9 = ad
			.ae.hL(1, aLe / dI.eD), aLi = Math.floor(dI.eD * jk.measureText(le, h9)), aL1 = aU = (aLh < aLi ? aLi : aLh) + 2 * aLg, aU = Math.min(aU, dI.aU - 2 * (dK.eE.eF() ? 2 : 1) * ag.gap), h9 = ad.ae.hL(1, aU / aL1 * aLe / dI.eD), aLi =
			Math.floor(dI.eD * jk.measureText(le, h9)), dr = Math.floor((dI.aU - aU) / 2), ds = Math.floor((dI.dJ - dJ) / 2), aLj.style.font = h9, aLj.style.top = Math.floor((ds + 1.4 * aLf + a3N) / dI.eD) + "px", aLj.style.left = Math.floor(
				(dr + (aU - aLi) / 2) / dI.eD) + "px")
	}, this.ge = function() {
		this.jR && (he.fillStyle = a7.jn, he.fillRect(dr, ds + a3N, aU, dJ - a3N), he.fillStyle = a7.a4T, he.fillRect(dr, ds, aU, a3N), he.fillStyle = a7.a8, he.lineWidth = ag.e9, he.strokeStyle = a7.a8, he.strokeRect(dr, ds, aU, dJ), he
			.fillRect(dr, ds + a3N, aU, ag.e9), he.font = ad.ae.hL(1, .48 * a3N), ad.ae.textAlign(he, 1), ad.ae.textBaseline(he, 1), he.fillText("You are leaving Territorial.io!", Math.floor(dr + (aU - .5 * a3N) / 2), Math.floor(ds + .55 *
				a3N)), jb.jv(Math.floor(dr + aU - .8 * a3N), Math.floor(ds + .25 * a3N), Math.floor(.5 * a3N)), he.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aLY() {
	this.a0s = new a94, this.aJU = new zt, this.d = function() {
		dK.eE.a9M()
	}
}

function aLW() {
	this.dX = 0, this.g7 = null, this.d = function() {
		this.dX = 0, this.g7 = []
	}, this.aJG = function(player) {
		this.g7.push(player), e.a6n++, bC.hc[player] = 2, bC.tV[player] = a6l.dT.a6m(), player === e.hK && (kJ.show(!1, !1), hR.a6u()), x.wQ(player)
	}, this.a6z = function(player) {
		var h, g7;
		if (2 !== bC.hc[player])
			for (h = (g7 = this.g7).length - 1; 0 <= h; h--)
				if (g7[h] === player) return void g7.splice(h, 1)
	}, this.v = function() {
		e.sU || (30 === this.dX && 2140 <= gb.kL() && this.aLk(), this.dX = (this.dX + 1) % 60)
	}, this.aLk = function() {
		for (var g7 = this.g7, h = g7.length - 1; 0 <= h; h--) ! function(player, bb) {
			!cC.aGf(player) || (bb = Math.max(Math.min(100, bC.bc[player]), p(bb * bC.bc[player], 100))) < 100 || (0 === bC.c4[player].length ? !br.aJC.v(player) && e.dj && aLm(player, bb, 0, 0) : (e.dj ? aLn : aLo)(player, bb))
		}(g7[h], 12)
	}
}

function q3() {
	this.aD = function(aA, value) {
		aB.dF.data[aA].value !== value && (aB.dF.a5y(aA, value), 0 === aA ? (cq.s3(), dL.d(), cq.kn(2)) : 1 === aA ? dI.aBh(1) : 2 === aA ? dI.aBh(0) : 5 === aA && (ad.ae.lV(), dI.aBh(0)))
	}, this.a6b = function() {
		for (var data = aB.dF.data, h = 0; h < 100; h++) data[h] && aB.dF.a5y(h, data[h].dG);
		ad.ae.lV(), dI.aBh(1), dL.d()
	}, this.a9E = function() {
		for (var data = aB.dF.data, h = 0; h < data.length; h++) data[h] && aB.dF.aD(h, data[h].dG)
	}
}

function aLc() {
	a9c = 8, a9a = 0, a9b = new Uint16Array(a9c)
}

function aJO() {
	hm = e.dj ? new Uint8Array(e.o) : null
}

function zd(player, hi) {
	var aJl;
	e.dj && (hm[player] = 0), !cC.aGf(player) || hi < 60 || (0 === bC.c4[player].length ? br.aJC.v(player) || (oQ.zZ(player - e.k, 200), aLm(player, hi, oQ.hi[player - e.k], hW.hX(player))) : 0 < bC.bD[player].length && t.random() < t.value(bC.bD[
		player].length > bC.c4[player].length ? 7 : 3) && br.aJC.v(player) || (aJl = hW.hX(player), bC.bc[player] > aJl && hi < bC.bc[player] - aJl && (hi = bC.bc[player] - aJl), e.dj ? aLp(player, hi, oQ.hi[player - e.k], aJl) : aLq(player,
		hi, oQ.hi[player - e.k])))
}

function aLp(player, hi, aLr, aJl) {
	var gv;
	a9X(player, !1) || a9d(player, !1) ? (hm[player] = 1, a9f(player) || (a9e() ? (aLs(player, hi), aLt(player, e.o, aLr)) : (t.a6y(oQ.zV[aLr]) ? aLu(player, hi, gv = a9j(player)) : (a9h() && t.a6y(oQ.zT[aLr]) && a9i(), aLu(player, hi, gv = a9m(
		player))), aLt(player, gv, aLr)))) : 0 < bC.bD[player].length && t.random() < t.value(60) && br.aJC.v(player) || (oQ.zZ(player - e.k, 200), aLm(player, hi, aLr, aJl))
}

function aLn(player, hi) {
	a9X(player, !1) || a9d(player, !1) ? (hm[player] = 1, a9e() ? aLs(player, hi) : aLu(player, hi, a9r())) : aLm(player, hi, 0, 0)
}

function aLt(player, gv, aLr) {
	3 <= aLr && 2142 < gb.kL() && (gv === e.o || bC.bc[gv] < p(bC.bc[player], 20)) && oQ.zZ(player - e.k, 25)
}

function aLm(player, hi, aLr, aJl) {
	var h, fq, fm;
	if (0 !== dm.e7[player] && !(5 === aLr && bC.bc[player] < aJl || 4 === aLr && bC.bc[player] < p(aJl, 2)))
		for (h = t.u(jB), fq = 0; fq < jB; fq++)
			if (fm = jA[(fq + h) % jB], dm.e7[fm] === dm.e7[player] && 1 === hm[fm]) return void pP.pj.hg(player, fm, hi)
}

function aLq(player, hi, aLr) {
	!a9X(player, !0) && !a9d(player, !0) || a9f(player) || (a9e() ? aLs(player, hi) : t.a6y(oQ.zV[aLr]) ? aLu(player, hi, a9j(player)) : (a9h() && t.a6y(oQ.zT[aLr]) && a9i(), aLu(player, hi, a9m(player))))
}

function aLo(player, hi) {
	(a9X(player, !0) || a9d(player, !0)) && (a9e() ? aLs(player, hi) : aLu(player, hi, a9r()))
}

function aLu(player, hi, gv) {
	p(bC.bc[player], 8) > bC.bc[gv] && (hi = (aGe = p(11 * bC.bc[gv], 5)) < hi ? hi : aGe);
	var aGe = bC.c6[player].length;
	a9S(player, gv), a9V(player, gv, aGe, hi)
}

function aLs(player, hi) {
	var gv = e.o,
		aL = bC.c6[player].length;
	return a9R(player), bC.c6[player].length !== aL && (a9V(player, gv, aL, hi), !0)
}

function dU() {
	this.aIk = function() {
		for (var b6, aL = jB, g7 = jA, tV = bC.tV, a8e = this.a6m(), h = 0; h < aL; h++) b6 = g7[h], bK.vD(b6) && (tV[b6] = a8e);
		var tS = bC.tS,
			tT = bC.tT,
			tU = bC.tU,
			p7 = bC.p7,
			aL = e.k;
		for (h = 0; h < aL; h++)(0 === p7[h] || tU[h] < 1 || 2 * tS[h] > 3 * (tT[h] + tU[h])) && (tV[h] = 0);
		var a8w = 0;
		for (h = 0; h < aL; h++) a8w += 0 < tV[h];
		return a8w
	}, this.a6m = function() {
		return Math.min(65535, gb.kL())
	}
}

function aLV() {
	var fm, x8 = !1,
		aLv = !1,
		aLw = -1e4,
		aLx = -1,
		aLy = 0;

	function resize(b4) {
		fm = 0, o0.a1F() && (aM0(b4) || x8) && (x8 = !1, ag.resize(), a1d.d(), n1.d(), a1f.d(), gY.resize(), rH.resize(), gX.resize(), hx.resize(), cq.resize(), 1 <= e.pq ? (hP.resize(!1), vV.resize(), hR.resize(), gR.resize(), ny.resize(), g8
			.resize(), jb.resize(), vd.resize(), vY.resize(), vW.resize(), jk.resize(), nx.resize(), s4.resize(), x.resize(), kJ.resize(), vZ.resize(), gR.a5W()) : (2 === gd.mw() && sj.resize(), gd.aC7(), gd.aC9()), gb.gc = !0)
	}

	function aLz(b8) {
		return b8 && 128 < b8 ? Math.floor(b8) : 128
	}

	function aM0(b4) {
		var aU, dJ, aM3, jF = aLz(document.documentElement.clientWidth),
			jJ = aLz(window.visualViewport && 2 !== dK.id ? window.visualViewport.height : document.documentElement.clientHeight);
		return aU = jF, dJ = jJ, aM3 = 0 !== dK.id || aU < dJ ? 700 : 1200, aM3 = Math.min(aM3 / ((aU + dJ) / 2), 1), aM3 = 0 === aB.dF.data[1].value ? 2 * aM3 / 3 : Math.min(aM3 + (aB.dF.data[1].value - 1) * (1 - aM3) / 2, 1), dI.eD = (window
			.devicePixelRatio || 1) * aM3, hoveringTooltip.canvasPixelScale = dI.eD, b4 && !aLv ? (aLv = !0, document.body.removeChild(aD5)) : aLv && (aLv = !1, document.body.appendChild(aD5)), aU = Math.floor(.5 + jF * dI.eD), dJ = Math.floor(
			.5 + jJ * dI.eD), (aU !== dI.aU || dJ !== dI.dJ) && (dI.aU = aU, dI.dJ = dJ, dI.min = hb(aU, dJ), dI.max = hd(aU, dJ), dI.eC = p(aU + dJ, 2), dI.pL = aU / dJ, aD5.width = aU, aD5.height = dJ, aD5.style.width = jF + "px", aD5.style
			.height = jJ + "px", aLx = gb.kH + 1e3, 1)
	}
	this.aU = 0, this.dJ = 0, this.min = 0, this.max = 0, this.eC = 0, this.pL = 1, this.eD = 1, this.a1g = function() {
		this.aU = aLz(document.documentElement.clientWidth) + 2, this.dJ = aLz(document.documentElement.clientHeight) + 2
	}, this.d = function() {
		fm = 1, aD5 = document.getElementById("canvasA"), (he = aD5.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aM0(0)
	}, this.v = function() {
		aLP.v(), 50 <= ++fm && resize(0), -1 === aLx || gb.kH < aLx || (aLx = -1, 2e3 * ++aLy >= gb.kH + 8e3 ? console.log("error 3748") : dK.eE.setState(15))
	}, this.aBh = function(b4) {
		x8 = !0, resize(b4)
	}, this.aDV = function() {
		aLw + 1e3 > gb.kH || (aLw = gb.kH, resize(0))
	}
}

function aLT() {
	var vg, zM, nr, aM5, dJ, h9, fontSize, aM6, aM7, jP, aM8, fF, hC, mh, aM9;

	function aMF() {
		he.drawImage(fF, ag.gap + (e.dj ? ag.gap + vZ.aIX() : 0), xj + 2 * ag.gap)
	}

	function aMA() {
		fF.width = vg[0].width + jP, fF.height = dJ + jP, (hC = fF.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, vg[0].width + jP, dJ + jP), hC.translate(Math.floor(jP / 2), Math.floor(jP / 2)), hC.lineWidth = jP, hC.fillStyle = 1 === vg[0].aME ? a7.a46 : a7.jn, aMG(), hC.fill(), hC.strokeStyle = 1 === vg[0].aME ? a7.wl : a7.a8,
			aMG(), hC.stroke(), ad.ae.textAlign(hC, 1), ad.ae.textBaseline(hC, 1), hC.fillStyle = 1 === vg[0].aME ? a7.wl : a7.a8, hC.font = h9[0], hC.fillText(dL.al[66 + vg[0].aMD], Math.floor(vg[0].width / 2), Math.floor(.72 * aM6[0] * dJ)), hC
			.font = h9[1], hC.fillText(vg[0].aH, Math.floor(vg[0].width / 2), Math.floor((aM6[0] + .48 * aM6[1]) * dJ))
	}

	function aMG() {
		hC.beginPath(), hC.moveTo(aM8, 0), hC.lineTo(vg[0].width - aM8, 0), hC.lineTo(vg[0].width, aM8), hC.lineTo(vg[0].width, dJ - aM8), hC.lineTo(vg[0].width - aM8, dJ), hC.lineTo(aM8, dJ), hC.lineTo(0, dJ - aM8), hC.lineTo(0, aM8), hC.closePath()
	}
	this.d = function() {
		zM = 4, nr = aM5 = mh = 0, vg = [], h9 = new Array(2), fontSize = new Array(2), (aM6 = new Array(2))[0] = .3, aM6[1] = .7, aM7 = new Array(4), fF = document.createElement("canvas"), aM9 = gb.kH + 2e3, this.resize()
	}, this.resize = function() {
		var h, aU;
		for (dJ = Math.floor((dK.eE.eF() ? .0725 : .058) * dI.eC), fontSize[0] = Math.floor(.85 * aM6[0] * dJ), fontSize[1] = Math.floor(.85 * aM6[1] * dJ), h9[0] = ad.ae.hL(1, fontSize[0]), h9[1] = ad.ae.hL(1, fontSize[1]), h = aM7.length -
			1; 0 <= h; h--) aM7[h] = this.measureText(dL.al[66 + h] + "000", h9[0]);
		if (jP = Math.floor(1 + .05 * dJ), aM8 = Math.floor(.2 * dJ), 0 < vg.length) {
			for (h = vg.length - 1; 0 <= h; h--) aU = this.measureText(vg[h].aH + "00", h9[1]), vg[h].width = aU < aM7[h] ? aM7[h] : aU;
			aMA()
		}
	}, this.v = function() {
		0 !== zM && (4 === zM ? gb.kH > aM9 && (zM = 0, 1 === e.pq) && jk.wi(ap.eW.f0[ap.ev].name, 3, 1, 9) : (1 === zM ? (0 === nr && (aMA(), nr = 1e-4), 1 <= (nr += .002 * (gb.kH - mh)) && (aM5 = 0, zM = 2, nr = 1), gb.gc = !0) : 2 === zM ? ((
			aM5 += (gb.kH - mh) / 1e3) > vg[0].vq || 1 < aM5 && 1 < vg.length) && (zM = 3) : 3 === zM && ((nr -= .002 * (gb.kH - mh)) <= 0 && (nr = 0, vg.shift(), zM = 0 < vg.length ? 1 : 0), gb.gc = !0), mh = gb.kH))
	}, this.measureText = function(aH, h9) {
		return he.font = h9, Math.floor(he.measureText(aH).width)
	}, this.pk = function(a2t, h) {
		this.wi(bC.tR[a2t], h, 1, 0 === h ? 3 : 7)
	}, this.wi = function(aH, aMD, aME, vq) {
		var aU = (aU = this.measureText(aH + "00", h9[1])) < aM7[aMD] ? aM7[aMD] : aU;
		vg.push({
			aH: aH,
			width: aU,
			aMD: aMD,
			aME: aME,
			vq: vq
		}), 0 === zM && (nr = 0, zM = 1, mh = gb.kH)
	}, this.ge = function() {
		0 !== zM && 0 !== nr && (nr < 1 ? (he.globalAlpha = nr, aMF(), he.globalAlpha = 1) : aMF())
	}
}

function a8c(lu) {
	var kR, oX, eH;
	this.show = function() {
		kR.show(), this.resize()
	}, this.jc = function() {
		kR.jc()
	}, this.resize = function() {
		kR.resize(), oX.resize()
	}, this.lQ = function(fm) {
		2 === fm && kR.lR[0].dN()
	}, kR = new kh("🛠️ List Options", [new kl("❌ " + dL.al[92], function() {
		cq.oY(10)
	})]), oX = new eG(kR.oZ, ((eH = []).push(function() {
		function ou() {
			var j2 = Math.floor(ot.a6.value),
				j4 = Math.floor(os.a6.value);
			return {
				ov: Math.min(j2, j4),
				ow: Math.max(j2, j4)
			}
		}

		function oo() {
			var er = ((er = ou()).ow - er.ov + 2) / 100;
			ok.button.innerHTML = ad.fk.oq(ok.button.innerHTML, er)
		}
		var ok, og = new oh,
			os = new a3(aB.dF.data[132], 1, function() {
				ok.button.click()
			}),
			ot = new a3(aB.dF.data[131], 1, function() {
				os.a6.focus()
			});
		og.oi("Start Index"), og.on(ot), ot.a6.style.marginBottom = "0.5em", og.oi("End Index"), og.on(os), ok = new kl("Go (🧈 2.01)", function() {
			var er = ou();
			cq.kn(8, cq.cs().sl, new sA(21, {
				ch: lu.ch,
				j2: er.ov,
				j4: er.ow
			}))
		});
		return ot.a6.addEventListener("input", oo), os.a6.addEventListener("input", oo), oo(), og.on(new or([ok.button])), og
	}()), eH.push(function() {
		function oo() {
			var op = (5 + Math.max(Math.abs(Math.floor(os.a6.value)), 1)) / 100;
			ok.button.innerHTML = ad.fk.oq(ok.button.innerHTML, op)
		}
		var ok, og = new oh,
			os = new a3(aB.dF.data[134], 1, function() {
				ok.button.click()
			}),
			ot = new a3(aB.dF.data[133], 0, function() {
				os.a6.focus()
			});
		og.oi("Search"), og.on(ot), ot.a6.style.marginBottom = "0.5em", og.oi("Matches"), og.on(os), ok = new kl("Go (🧈 0.10)", function() {
			var aFJ = ot.a6.value.slice(0, 20),
				aFK = Math.abs(Math.floor(os.a6.value));
			cq.kn(8, cq.cs().sl, new sA(22, {
				ch: lu.ch,
				aFJ: aFJ,
				aFK: aFK
			}))
		});
		return os.a6.addEventListener("input", oo), oo(), og.on(new or([ok.button])), og
	}()), eH))
}

function aMI(a4) {
	var a6;
	this.a6 = document.createElement("input"), (a6 = this.a6).type = "color", a6.id = "input" + a4.title, a6.value = ad.color.a3I(ad.color.a3E(aB.cf.ec())), a6.style.width = "100%", a6.style.userSelect = "none", a6.style.outline = "none", a6.style
		.resize = "none", a6.style.border = "inherit", a6.style.font = "inherit", a6.style.color = a7.a8, a6.style.backgroundColor = a7.a9, a6.style.fontSize = "2em", a6.style.height = "1em", a6.style.padding = "0", a6.addEventListener("input",
			function() {
				aB.aC.aD(a4.aA, ad.color.a3G(ad.color.a12(ad.color.a3J(a6.value))))
			})
}

function aLU() {
	this.cf = new a8F, this.vb = new sP, this.wb = new hv, this.mr = new aDc, this.fR = new qj, this.aEO = new fP, this.aL5 = new a6S, this.aFG = new aFN, this.iM = new aBE, this.aBL = new uJ, this.aBM = new aEN, this.aBO = new fv, this.aBQ = new cb,
		this.d = function() {
			this.cf.d()
		}
}

function a4k(aMJ, aMK, aML) {
	this.dr = 0, this.ds = 0, this.aU = 0, this.dJ = 0, this.resize = function() {
		this.dJ = Math.min(ad.ae.eB(aML || .5) * aMJ[1] * dI.eC, dI.dJ - 2 * ag.gap), this.aU = Math.min(this.dJ * (aMJ[0] / aMJ[1]), dI.aU - 2 * ag.gap), this.dJ = aMJ[1] * this.aU / aMJ[0], this.dr = ag.gap + aMK[0] * (dI.aU - this.aU - 2 * ag
			.gap), this.ds = ag.gap + aMK[1] * (dI.dJ - this.dJ - 2 * ag.gap)
	}, this.aMM = function() {
		return this.dr + .5 * this.aU
	}
}

function aLX() {
	var input;

	function aMN(a6) {
		aMP(a6.target.files)
	}

	function aMP(files) {
		files && 0 < files.length && oL.aMQ(files[0])
	}

	function en(a6) {
		var fm = new Image;
		fm.onload = aMS, fm.src = a6.target.result
	}

	function aMS(a6) {
		var aMT, a6 = a6.target,
			aU = a6.width,
			dJ = a6.height;
		4096 < aU || 4096 < dJ || aU < 10 || dJ < 10 ? (aMT = "Image w & h must be between 10 and 4096.", dK.mC ? dK.mC.showToast(aMT) : alert(aMT)) : (eo.eX(), ap.ev = ap.f1(), ap.fH = 0, ap.aq = aU, ap.bj = dJ, ap.fI.width = ap.aq, ap.fI.height =
			ap.bj, ap.fJ.drawImage(a6, 0, 0), aMT = ap.fJ.getImageData(0, 0, ap.aq, ap.bj), ap.fK = aMT.data)
	}

	function aMU(a6) {
		a6.stopPropagation(), a6.preventDefault()
	}

	function aMV() {
		return 0 === gd.mw() || 2 === gd.mw()
	}
	this.d = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = aMN
	}, this.oM = function() {
		input.click()
	}, this.aMO = function(a6) {
		aMN(a6)
	}, this.aMQ = function(el) {
		var aM = el.name.split("."),
			aMR = aM[aM.length - 1].toLowerCase();
		"json" === aMR ? eo.dP(el) : "gif" !== aMR && "jpg" !== aMR && "jpeg" !== aMR && "png" !== aMR || (ap.eW.f0[ap.f1()].name = aM[0], (aMR = new FileReader).onload = en, aMR.readAsDataURL(el))
	}, this.aD9 = function(a6) {
		aMV() && (aMU(a6), a6.dataTransfer.dropEffect = "copy")
	}, this.aDA = function(a6) {
		aMV() && (aMU(a6), aMP(a6.dataTransfer.files))
	}
}

function aLa() {
	this.gV = !1, this.vN = !1, this.sf = !1, this.aMW = [0, 0, 0, 0], this.pu = function() {
		var kM, kN, kO, kP;
		this.sf = this.sf || this.vN, (this.vN || this.gV && this.sf) && (kM = mU.gP[0], kN = mU.gP[1], kO = mU.gP[2], kP = mU.gP[3], kM = kM < this.aMW[0] ? this.aMW[0] : kM, kN = kN < this.aMW[1] ? this.aMW[1] : kN, kO = kO > this.aMW[2] ? this
			.aMW[2] : kO, kP = kP > this.aMW[3] ? this.aMW[3] : kP, this.vN = !1, this.gV = !1, kM === this.aMW[0] && kN === this.aMW[1] && kO === this.aMW[2] && kP === this.aMW[3] ? this.sg() : kM <= kO && kN <= kP && aJQ.putImageData(aJR,
				0, 0, kM, kN, kO - kM + 1, kP - kN + 1))
	}, this.sg = function() {
		this.sf && this.aMW[2] >= this.aMW[0] && this.aMW[3] >= this.aMW[1] && aJQ.putImageData(aJR, 0, 0, this.aMW[0], this.aMW[1], this.aMW[2] - this.aMW[0] + 1, this.aMW[3] - this.aMW[1] + 1), this.sf = !1
	}, this.a3h = function() {
		this.aMW[2] >= this.aMW[0] && this.aMW[3] >= this.aMW[1] && aJQ.putImageData(aJR, 0, 0, this.aMW[0], this.aMW[1], this.aMW[2] - this.aMW[0] + 1, this.aMW[3] - this.aMW[1] + 1), this.sf = !1
	}, this.d = function() {
		var dr, ds;
		this.gV = !1, this.vN = !1, this.sf = !1, this.aMW[0] = ap.aq, this.aMW[1] = ap.bj, this.aMW[2] = this.aMW[3] = 0;
		loop: for (dr = 1; dr < ap.aq - 1; dr++)
			for (ds = ap.bj - 2; 1 < ds; ds--)
				if (1 === vE[bK.qL(dr, ds) + 2]) {
					this.aMW[0] = dr;
					break loop
				} loop: for (ds = 1; ds < ap.bj - 1; ds++)
			for (dr = ap.aq - 2; 1 < dr; dr--)
				if (1 === vE[bK.qL(dr, ds) + 2]) {
					this.aMW[1] = ds;
					break loop
				} loop: for (dr = ap.aq - 2; 0 < dr; dr--)
			for (ds = ap.bj - 2; 1 < ds; ds--)
				if (1 === vE[bK.qL(dr, ds) + 2]) {
					this.aMW[2] = dr;
					break loop
				} loop: for (ds = ap.bj - 2; 0 < ds; ds--)
			for (dr = ap.aq - 2; 1 < dr; dr--)
				if (1 === vE[bK.qL(dr, ds) + 2]) {
					this.aMW[3] = ds;
					break loop
				}
	}
}

function aLZ() {
	var jy = 1,
		nQ = [null, null];
	this.d = function() {
		jy = .72 * (dK.eE.eF() ? .0011 : .001) * dI.eC;
		for (var h = 1; 0 <= h; h--) nQ[h] && this.aAh(h, nQ[h].aH)
	}, this.aAh = function(aA, aH) {
		nQ[aA] = {
			aH: aH,
			font: ad.ae.hL(1, 10)
		}, this.jl(aA)
	}, this.jl = function(aA) {
		var aH, fontSize, h9, aU, aAk;
		o0.a1F() && nQ[aA] && (aH = nQ[aA].aH, fontSize = Math.floor(.15 * jy * o0.get(13).height), h9 = ad.ae.hL(1, fontSize), aU = jk.measureText(aH, h9), (aAk = .8 * jy * o0.get(13).width) < aU && (fontSize = Math.floor(fontSize * aAk / aU),
			h9 = ad.ae.hL(1, fontSize)), nQ[aA] = {
			aH: aH,
			font: h9
		}, gb.gc = !0)
	}, this.aMX = function() {
		return Math.floor(jy * o0.get(13).height)
	}, this.jX = function(jY, jZ) {
		return !!o0.a1F() && !(jY < ag.gap || jZ < dI.dJ - jy * o0.get(13).height - 2 * ag.gap || jZ > dI.dJ - 2 * ag.gap || (jY < ag.gap + jy * o0.get(13).width ? (yd.aD4 = !0, cq.kn(8, 0, new sA(21, {
			ch: 0,
			j2: 0,
			j4: 9
		})), 0) : jY < 2 * ag.gap + jy * o0.get(13).width || !(jY < 2 * ag.gap + 2 * jy * o0.get(13).width) || (yd.aD4 = !0, cq.kn(8, 0, new sA(21, {
			ch: 1,
			j2: 0,
			j4: 9
		})), 0)))
	}, this.gT = function() {
		return Math.floor(dI.dJ - jy * o0.get(13).height - ag.gap)
	}, this.ge = function() {
		if (o0.a1F()) {
			he.imageSmoothingEnabled = !0, he.setTransform(jy, 0, 0, jy, ag.gap, this.gT()), he.drawImage(o0.get(14), 0, 0), he.setTransform(jy, 0, 0, jy, 2 * ag.gap + jy * o0.get(13).width, this.gT()), he.drawImage(o0.get(13), 0, 0);
			for (var h = 1; 0 <= h; h--) nQ[h] && (he.setTransform(1, 0, 0, 1, (1 + h) * ag.gap + h * jy * o0.get(13).width, this.gT()), he.font = nQ[h].font, ad.ae.textBaseline(he, 1), ad.ae.textAlign(he, 1), he.fillStyle = a7.a8, he.fillText(
				nQ[h].aH, .5 * jy * o0.get(13).width, .86 * jy * o0.get(13).height));
			he.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}
self.aiCommand746 = function(b8) {
	0 === b8 ? aJX() : 1 !== b8 || 1 !== dK.id || dK.dH < 14 || yd.aDS()
}, setTimeout(aJX, 1e4), window.onload = function() {
	aJX()
};