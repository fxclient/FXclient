function a() {
	this.b = function(c, d, e) {
		f.g(75), f.h(1, 0), f.h(6, 21), f.h(6, c), f.h(1, +(d < 0)), f.h(1, +(e < 0)), f.h(30, Math.abs(d)), f.h(30, Math.abs(e)), i.j.send(0, f.k)
	}, this.l = function(c, m, n) {
		f.g(18 + 16 * m.length + 30), f.h(1, 0), f.h(6, 22), f.h(6, c), this.o(m), f.h(30, n), i.j.send(0, f.k)
	}, this.p = function(q, r) {
		var s = r.length;
		let t = 0;
		for (let u = 0; u < s; u++) t += r[u].length;
		f.g(21 + 3 * s + 16 * t), f.h(1, 0), f.h(6, 23), f.h(3, q), f.h(4, s), f.h(7, t);
		for (let u = 0; u < s; u++) f.h(3, r[u].length), v.w.x(r[u]);
		i.j.send(0, f.k)
	}, this.y = function(q, d, e) {
		f.g(52), f.h(1, 0), f.h(6, 24), f.h(3, q), f.h(1, +(d < 0)), f.h(1, +(e < 0)), f.h(20, Math.abs(d)), f.h(20, Math.abs(e)), i.j.send(0, f.k)
	}
}

function z() {
	function a6(a8, a9, min, max) {
		return min + (a8 * a9 + 137) % (max - min)
	}
	this.a0 = function(a1, a2) {
		let a4 = 1;
		for (let u = 0; u <= 10; u++) a4 = function(a4, a1, a2, a7) {
			var s = 65536 + (a4 * a7 + 7 & 16383);
			for (let u = 0; u < s; u++) a4 = 1 + a4 * a1 % a2;
			return a4
		}(a4, a1, a2, u), a1 = a6(a1, a4, 16384, 65536), a2 = a6(a2, a4, 1 << 18, 1 << 20);
		return a4 - 1 & 65535
	}
}

function aA() {
	var aB, aC;
	this.aD = function() {
		aB = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var u, aE, aF = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			aG = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (aC =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), u = aB.length - 1; 0 <= u; u--)
			for (aE = aF.length - 1; 0 <= aE; aE--) aB[u] = aB[u].replace(aF[aE], aG[aE]);
		if (settings.realisticNames) aB = realisticNames;
	}, this.g = function() {
		var u;
		if (aH.aI && aH.aJ.aK)
			for (u = aM.aU; u < aM.aV; u++) aW.aX[u] = aW.aY[u] = aH.aJ.aK[u % aM.ac];
		else(9 === aM.aN ? function() {
			var u, aS = aT.random(),
				s = aB.length,
				aZ = aM.aU + aa.ab;
			for (u = aZ - 1; u >= aM.aU; u--) aW.aX[u] = aW.aY[u] = aB[(u + aS) % s];
			for (s = aC.length, u = aZ; u < aM.aV; u++) aW.aX[u] = aW.aY[u] = aC[u % s]
		} : aM.aP ? function() {
			var u, aS = aT.random();
			for (u = aM.aU; u < aM.aV; u++) aW.aX[u] = aW.aY[u] = aB[(u + aS) % aM.aV]
		} : function() {
			var u, s = aB.length,
				aS = aT.random();
			for (u = aM.aU; u < aM.aV; u++) aW.aX[u] = aW.aY[u] = aB[(u + aS) % s]
		})()
	}
}

function ad() {
	function av(af, b2 = !1) {
		b2 ? al.am = "Replay Error: " + af : b3.b4(4, 3, new b5("⚠️ Replay Error", af, !0))
	}
	this.ae = function(af) {
		if (ag.ah.ai(ag.ah.aj(ag.ah.ak(af))), al.am = "", ! function() {
				if (at.size < 10) av("File Too Small");
				else if (at.az(9) !== b0 && av("Incompatible Version Error", !0), at.az(31) !== at.size) av("Size Error");
				else {
					if (function(b6) {
							var u, b7 = at.k,
								s = at.size,
								b8 = 0;
							for (u = 7; u < s; u++) b8 = b8 + b7[u] & 65535;
							return b8 === b6
						}(at.az(16))) return 1;
					av("Hash Error")
				}
				return
			}()) return !1;
		var b9;
		(b9 = {}).bA = at.az(9), b9.bB = at.az(14), b9.bC = at.az(4), b9.bD = 1 === at.az(1), b9.bE = at.az(6), b9.bF = at.az(14), b9.bG = at.az(10), aw.ax.b9 = b9,
			function() {
				var u, bH, bI, name, s = aw.ax.b9.bG,
					bJ = [];
				for (u = 0; u < s; u++) bH = at.az(1), bI = [at.az(6), at.az(6), at.az(6)], name = ag.w.bK(at.az(5)), bJ.push({
					name: name,
					bI: bI,
					bH: bH
				});
				if (aw.ax.b9.bJ = bJ, 8 === aw.ax.b9.bC)
					for (u = 0; u < s; u++) bJ[u].bL = at.az(14)
			}();
		var u, s, bM = aw.ax.b9;
		if (1 === bM.bJ.length)
			for (s = 6 < bM.bC ? 1 : bM.bC + 2, bM.bN = new Array(s), bM.bO = new Array(s), u = 0; u < s; u++) bM.bN[u] = at.az(3), bM.bO[u] = at.az(9) + 1;
		return !! function() {
			var bP = at.az(5),
				bQ = at.az(30),
				bR = at.az(30);
			if (bQ + bR > 8 * at.size) return void av("Corrupted File");
			return function(s) {
					var u, id, bU = new Uint8Array(s),
						bV = new Uint16Array(s),
						bW = new Uint32Array(s),
						bX = new Uint32Array(s);
					for (aw.ax.bY = bU, aw.ax.bZ = bV, aw.ax.ba = bW, aw.ax.bb = bX, u = 0; u < s; u++) bU[u] = id = at.az(4), bV[u] = at.az(9), 0 === id ? bW[u] = at.az(22) : 1 === id ? (bW[u] = at.az(10), bX[u] = at.az(10)) : 2 === id ? (
						bW[u] = at.az(10), bX[u] = at.az(9)) : 3 === id || 4 === id ? (bW[u] = at.az(10), bX[u] = at.az(22)) : 5 === id || 6 === id ? bW[u] = at.az(10) : 7 === id && (bW[u] = at.az(1))
				}(bQ),
				function(s, bP) {
					var u, bc = new Uint8Array(s),
						bd = new Array(s);
					for (bd.fill(0), aw.ax.bc = bc, aw.ax.bd = bd, u = 0; u < s; u++) bc[u] = at.az(1), bd[u] = at.az(bP)
				}(bR, bP), 1
		}() && (at.au < 8 * at.size - 13 || at.au > 8 * at.size ? (av("Out Of Bounds Error: " + at.au + " " + 8 * at.size), !1) : (aw.ax.ay = af, !0))
	}
}

function be() {
	var bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bf = [224, 224, 224],
		bg = [
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
		bh = [
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

	function cp(b7, cr) {
		cb[b7] = 0, cb[b7 + 1] = 0, cb[b7 + 2] = cr, cb[b7 + 3] = 0, cs(b7)
	}

	function cs(b7) {
		var cS;
		cx.cy || (cS = cz.cP(b7), b7 = cz.cQ(b7), cx.cy = cS >= d0.d1[0] && cS <= d0.d1[2] && b7 >= d0.d1[1] && b7 <= d0.d1[3])
	}
	this.aD = function(bJ) {
		if (bi = new Uint8Array(aM.aV), bj = new Uint8Array(aM.aV), bk = new Uint8Array(aM.aV), bl = new Uint8Array(aM.aV), bm = new Uint8Array(aM.aV), bn = new Uint8Array(aM.aV), bo = new Uint8Array(aM.aV), bp = new Uint8Array(aM.aV), bq =
			new Uint8Array(aM.aV), br = new Uint8Array(aM.aV), this.bx = new Uint8Array(aM.aV), (bs = new Int32Array(4))[0] = -4 * cE.cF, bs[1] = 4, bs[2] = -bs[0], bs[3] = -bs[1], aM.bz)
			for (var aZ, cJ, u = aM.aV - 1; 0 <= u; u--) cJ = cK.cL[cK.cM[u]], aZ = cG((bh[cJ][3] + 1) * aT.random(), aT.value(100)), bi[u] = bg[cJ][0] + aZ * bh[cJ][0], bj[u] = bg[cJ][1] + aZ * bh[cJ][1], bk[u] = bg[cJ][2] + aZ * bh[cJ][2];
		else aH.aI && aH.aJ.c1 ? function(cB) {
			var u;
			for (u = aM.ac - 1; 0 <= u; u--) bi[u] = 4 * cB[u][0], bj[u] = 4 * cB[u][1], bk[u] = 4 * cB[u][2]
		}(aH.aJ.c1) : (function() {
			for (var u = aM.aV - 1; u >= aM.aU; u--) bi[u] = 4 * cG(64 * aT.random(), aT.value(100)), bj[u] = 4 * cG(64 * aT.random(), aT.value(100)), bk[u] = 4 * cG(64 * aT.random(), aT.value(100))
		}(), function(bJ) {
			for (var u = aM.aU - 1; 0 <= u; u--) bi[u] = 4 * bJ[u].bI[0], bj[u] = 4 * bJ[u].bI[1], bk[u] = 4 * bJ[u].bI[2]
		}(bJ));
		! function() {
			var u, cH;
			for (u = aM.aV - 1; 0 <= u; u--) cH = cG(bi[u] + bj[u] + bk[u], 3), bi[u] += cI(cH - bi[u], 2), bj[u] += cI(cH - bj[u], 2), bk[u] += cI(cH - bk[u], 2), bi[u] -= bi[u] % 4, bj[u] -= bj[u] % 4, bk[u] -= bk[u] % 4
		}(),
		function() {
			for (var u = aM.aV - 1; 0 <= u; u--) bi[u] += cG(u, 128), bj[u] += cG(u % 128, 32), bk[u] += cG(u % 32, 8), bl[u] = u % 8
		}(), this.c7(),
			function() {
				for (var u = aM.aV - 1; 0 <= u; u--) bm[u] = bi[u] < 32 ? bi[u] + 32 : bi[u] - 32, bn[u] = bj[u] < 32 ? bj[u] + 32 : bj[u] - 32, bo[u] = bk[u] < 32 ? bk[u] + 32 : bk[u] - 32
			}(),
			function() {
				for (var u = aM.aV - 1; 0 <= u; u--) bp[u] = 235 < bi[u] ? bi[u] - 20 : bi[u] + 20, bq[u] = 235 < bj[u] ? bj[u] - 20 : bj[u] + 20, br[u] = 235 < bk[u] ? bk[u] - 20 : bk[u] + 20
			}()
	}, this.cA = function(player) {
		var cB = cC.cD;
		return cB[0] = bi[player], cB[1] = bj[player], cB[2] = bk[player], cB
	}, this.c7 = function() {
		for (var u = aM.aV - 1; 0 <= u; u--) this.bx[u] = bi[u] + bj[u] + bk[u] < 280 ? 0 : 1
	}, this.cP = function(b7) {
		return cG(b7, 4) % cE.cF
	}, this.cQ = function(b7) {
		return cG(b7, 4 * cE.cF)
	}, this.cR = function(cS, cT) {
		return Math.floor(4 * (cT * cE.cF + cS))
	}, this.cU = function(b7) {
		return this.cV(b7 + bs[0]) || this.cV(b7 + bs[1]) || this.cV(b7 + bs[2]) || this.cV(b7 + bs[3])
	}, this.cW = function(b7, player) {
		return this.cX(b7 + bs[0], player) || this.cX(b7 + bs[1], player) || this.cX(b7 + bs[2], player) || this.cX(b7 + bs[3], player)
	}, this.cY = function(player) {
		return player < aM.aU && 2 !== aW.cZ[player]
	}, this.ca = function(b7) {
		return 208 <= cb[b7 + 3]
	}, this.cc = function(player, b7) {
		return this.ca(b7) && this.cd(player, b7)
	}, this.cd = function(player, b7) {
		return player === this.ce(b7)
	}, this.cf = function(b7) {
		return 208 <= cb[b7 + 3] && cb[b7 + 3] < 224
	}, this.cg = function(b7) {
		return 224 <= cb[b7 + 3] && cb[b7 + 3] < 248
	}, this.ch = function(b7) {
		for (var u = 3; 0 <= u; u--)
			if (this.ci(b7 + bs[u])) return !0;
		return !1
	}, this.cj = function(b7) {
		return 192 <= cb[b7 + 3] && cb[b7 + 3] < 208
	}, this.ck = function(b7, player) {
		return this.cj(b7) && player === this.ce(b7)
	}, this.cl = function(b7) {
		return this.ca(b7) || this.cm(b7)
	}, this.ci = function(b7) {
		return 0 === cb[b7 + 3] && 2 === cb[b7 + 2]
	}, this.cm = function(b7) {
		return 0 === cb[b7 + 3] && 1 === cb[b7 + 2]
	}, this.cV = function(b7) {
		return 0 === cb[b7 + 3] && 3 === cb[b7 + 2]
	}, this.cn = function(b7) {
		return this.cV(b7)
	}, this.cX = function(b7, player) {
		return this.cm(b7) || this.ca(b7) && player !== this.ce(b7)
	}, this.ce = function(b7) {
		return cb[b7] % 4 * 128 + cb[b7 + 1] % 4 * 32 + cb[b7 + 2] % 4 * 8 + cb[b7 + 3] % 8
	}, this.co = function(b7) {
		cp(b7, 1)
	}, this.cq = function(b7) {
		cp(b7, 2)
	}, this.ct = function(b7, player) {
		cb[b7] = bi[player], cb[b7 + 1] = bj[player], cb[b7 + 2] = bk[player], cb[b7 + 3] = 208 + bl[player], cs(b7)
	}, this.cu = function(b7, player) {
		cb[b7] = bm[player], cb[b7 + 1] = bn[player], cb[b7 + 2] = bo[player], cb[b7 + 3] = 224 + bl[player], cs(b7)
	}, this.cv = function(b7, player) {
		cb[b7] = bp[player], cb[b7 + 1] = bq[player], cb[b7 + 2] = br[player], cb[b7 + 3] = 248 + bl[player], cs(b7)
	}, this.cw = function(b7, player) {
		cb[b7] = bf[0] + bi[player] % 4, cb[b7 + 1] = bf[1] + bj[player] % 4, cb[b7 + 2] = bf[2] + bk[player] % 4, cb[b7 + 3] = 192 + bl[player], cs(b7)
	}
}

function d2() {
	this.j = new d3, this.d4 = new d5, this.d6 = new d7, this.d8 = new d9, this.dA = new dB, this.dC = new dD, this.dE = new dF, this.dG = new a, this.dH = new dI, this.dJ = new dK, this.dL = new dM, this.dN = new dO, this.dP = new dQ, this.aD =
		function() {
			this.j.aD()
		}
}

function dR(dS, dT) {
	var dU = document.createElement("div");
	this.dV = dU, this.resize = function() {
		dU.style.padding = dW.dX.dY(dZ.da), dU.style.lineHeight = dW.dX.dY(dW.dX.db(.035))
	}, dS.style.overflowX = "hidden", dS.style.overflowY = "auto", dU.innerHTML = dT, dS.appendChild(dU)
}

function dc() {
	this.id = 0, this.dd = 0, this.de = null, this.df = null, this.dg = null, this.dh = null, this.di = new dj, this.aD = function() {
		var self, dd;
		self = this, "undefined" == typeof Android || (dd = Android.getVersion()) < 12 || (self.dd = dd, self.id = 1, self.df = Android),
			function(self) {
				var dd;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.dg = mwIOSdataX, self.dh = window.webkit.messageHandlers.iosCommandA, dd = self
					.dg.version, self.dd = dd ? Number(dd) : 0)
			}(this),
			function(self) {
				var de;
				if (0 === self.id) {
					try {
						if (!(de = window.localStorage)) return;
						de.setItem("tls7", "1"), de.removeItem("tls7")
					} catch (error) {
						return
					}
					self.de = de
				}
			}(this)
	}
}

function dn() {
	this.dp = ["", ""], this.dq = ["Aceptar", "Borraste a {0}.", "Fuiste borrado por {0}.", "Felicidades! Ganaste el juego.", "{0} ganó el juego.", "{0} rompió el pacto de no agresión.", "¡{0} te está atacando!", "Elige tu posición de inicio!",
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

function dr() {
	function eH(player, eV, eW, eX) {
		for (var eK, eM, ea, b6, aS, eb, eY, eZ, s = eV + eX, u = eV; u < s; u += eW)
			if (eK = (eK = aW.eL[player] - u) < 1 ? 1 : eK, eM = aW.eN[player] - u, eY = (eY = aW.eP[player] + u) >= cE.cF - 1 ? cE.cF - 2 : eY, b6 = (eZ = (eZ = aW.eR[player] + u) >= cE.ed - 1 ? cE.ed - 2 : eZ) - (eM = eM < 1 ? 1 : eM), eY = (aS =
					cG(aT.random() * (2 * (eY - eK + eZ - eM)), aT.value(100))) <= (ea = eY - eK) ? (eb = eK + aS, eM) : aS <= ea + b6 ? (eb = eY, eM + aS - ea) : aS <= 2 * ea + b6 ? (eb = eK + aS - ea - b6, eZ) : (eb = eK, eM + aS - 2 * ea - b6),
				eU(player, eZ = cz.cR(eb, eY))) return eZ;
		return -1
	}

	function eU(e6, eD) {
		return cz.cl(eD) && (cz.cm(eD) || e6 !== (eD = cz.ce(eD)) && eC(e6, eD) && 0 < aW.ds[eD].length)
	}
	this.a0 = function(player) {
		return !(0 === aW.ds[player].length || aW.dt[player] < 100) && du.j.dv !== du.j.dw && (du.j.dx[player] !== du.j.dy && dW.dz.e0(player, 203, 32, 16) ? !! function(player) {
			var eD = function(player) {
				var u, eI, eJ, eK = aW.eL[player],
					eM = aW.eN[player],
					eO = aW.eP[player] - eK + 1,
					eQ = aW.eR[player] - eM + 1,
					a8 = aT.value(100);
				for (u = 0; u < 32; u++)
					if (eI = eK + eS.eT(aT.random() * eO, a8), eJ = eM + eS.eT(aT.random() * eQ, a8), eI = cz.cR(eI, eJ), eU(player, eI)) return eI;
				return -1
			}(player);
			if (0 <= eD) return du.eF.eG(player, eD >> 2);
			if (0 <= (eD = eH(player, 1, 4, 40))) return du.eF.eG(player, eD >> 2);
			if (0 <= (eD = eH(player, 40, 8, 200))) return du.eF.eG(player, eD >> 2);
			return
		}(player) && !! function(e6) {
			if (0 === cC.e8[2]) return void console.log("error 325234");
			var e9 = cC.e8[1] + eA.eB[cC.e8[2] - 1] << 2;
			if (cz.cm(e9)) return 1;
			return e9 = cz.ce(e9), e6 !== e9 && !!eC(e6, e9)
		}(player) && function(player) {
			return dW.dz.e4(player), du.j.e5(player), !0
		}(player) : void 0)
	}
}

function ee() {
	var gap, eh, cS = [0, 0, 0, 0, 0],
		cT = [0, 0, 0, 0, 0],
		ef = [1, 1, 1, 1, 1],
		a8 = [!0, !0, !1, !1, !1],
		cJ = (this.eg = [!0, !0, !1, !1, !1], null);
	this.ei = function(ej, ek) {
		cJ = ej, a8 = ek, eh = [el.em, el.en, el.eo, el.ep, el.eq], this.aD()
	}, this.aD = function() {
		if (er.es()) {
			var u, et = Math.floor((eu.di.ev() ? .261 : .195) * ew.ex),
				ey = Math.floor(.9 * et),
				ez = Math.floor(.17 * ey);
			if (gap = eu.di.ev() ? 2 * dZ.gap : dZ.gap, ef[0] = et / cJ[0].width, ef[1] = ey / cJ[1].width, ef[2] = ez / cJ[2].height, ef[3] = ez / cJ[3].height, ef[4] = ez / cJ[4].height, ef[3] *= 1.07, cS[0] = gap, cS[1] = gap, cS[2] = gap, cS[
					3] = gap, cS[4] = Math.floor(2 * gap + ef[3] * cJ[3].width), cT[0] = gap, cT[1] = cT[0] + gap + ef[0] * cJ[0].height, cT[2] = cT[1] + gap + ef[1] * cJ[1].height, cT[3] = cT[2] + gap + ef[2] * cJ[2].height, cT[4] = cT[3], !a8[
					0])
				for (u = 0; u < 5; u++) cT[u] -= ef[0] * cJ[0].height + gap;
			if (!a8[1])
				for (u = 2; u < 5; u++) cT[u] -= ef[1] * cJ[1].height + gap
		}
	}, this.f0 = function() {
		return !(7 === f1.f2() && eu.di.ev())
	}, this.f3 = function(f4, f5, f6) {
		if (cJ && this.f0())
			for (var u = a8.length - 1; 0 <= u; u--)
				if (a8[u] && this.eg[u] && cS[u] < f4 && cT[u] < f5 && f4 < cS[u] + ef[u] * cJ[u].width && f5 < cT[u] + ef[u] * cJ[u].height) return b3.b4(9, b3.f7, new f8("You are leaving Territorial.io.", dW.dX.f9(eh[u]))), !0;
		return !1
	}, this.fA = function() {
		if (cJ && this.f0()) {
			var u;
			for (fB.imageSmoothingEnabled = !0, u = 0; u < 5; u++) a8[u] && this.eg[u] && (fB.setTransform(ef[u], 0, 0, ef[u], cS[u], cT[u]), fB.drawImage(cJ[u], 0, 0));
			fB.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function fC() {
	this.fD = function(au, value) {
		fE.fF.data[au].value !== value && (fE.fF.fG(au, value), 0 === au ? (b3.fH(), fI.aD(), b3.b4(2)) : 1 === au ? ew.fJ(1) : 2 === au ? ew.fJ(0) : 5 === au && (dW.dX.fK(), ew.fJ(0)))
	}, this.fL = function() {
		for (var data = fE.fF.data, u = 0; u < 100; u++) data[u] && fE.fF.fG(u, data[u].fM);
		dW.dX.fK(), ew.fJ(1), fI.aD()
	}, this.fN = function() {
		var data = fE.fF.data;
		for (let u = 0; u < data.length; u++) data[u] && fE.fF.fD(u, data[u].fM)
	}
}

function fO() {
	this.fP = 32, this.cS = 0, this.cT = 0, this.fQ = 0, this.fR = 0, this.fS = 4, this.fT = null, this.fU = new Int16Array(9), this.aD = function() {
		this.fQ = 1 + eS.eT(cE.cF - 1, this.fP), this.fR = 1 + eS.eT(cE.ed - 1, this.fP), this.fT = new Array(this.fQ * this.fR), dW.fV.fW(this.fT);
		var cS, cT, fU = this.fU,
			ea = this.fQ;
		for (cS = -1; cS <= 1; cS++)
			for (cT = -1; cT <= 1; cT++) fU[3 * (1 + cT) + 1 + cS] = cT * ea + cS
	}, this.e5 = function(fY, u) {
		return this.fT[u].push(fY), this.fT[u].length - 1
	}, this.fZ = function(fa, fb, fc) {
		var fd, fe, fb = eA.ff(fb),
			fc = eA.ff(fc);
		return fb === fc ? fa : (fd = this.fT[fb].pop(), this.fT[fb].length === fa ? this.e5(fd, fc) : (fe = this.fT[fb][fa], this.fT[fb][fa] = fd, du.j.fg[fd] = fa, this.e5(fe, fc)))
	}
}

function fh() {
	var fi, fj;

	function fk() {
		var ea = new fm;
		ea.g(1612), ea.h(1, 0), ea.h(6, 7), ea.h(2, eu ? eu.id : 3), ea.h(1, fn ? 1 : 0), ea.h(1, fo ? 1 : 0), ea.h(1, fp ? fp.fq : 0);
		for (let u = 0; u < fj.length && u < 100; u++) ea.h(16, fj.charCodeAt(u));
		fi.send(ea.k), fl()
	}

	function fl() {
		fi && (fi.onclose = null, fi.onopen = null, fi = null)
	}
	window.addEventListener("error", function error(cO) {
		window.removeEventListener("error", error);
		return alert("Error:\n" + cO.filename + " " + cO.lineno + " " + cO.colno + " " + cO.message);
		window.removeEventListener("error", error), fj = cO.lineno + " " + cO.colno + " " + cO.message, (fi = new WebSocket("wss://territorial.io/s52/")).onopen = fk, fi.onclose = function() {
			fl()
		}, 0 === cO.lineno && 0 === cO.colno || (eu && 1 === eu.id ? eu.df.showToast(fj) : alert(fj))
	})
}

function fr() {
	fs() ? (ft(), fu !== aM.aV && fv()) : fw()
}

function fv() {
	fx(), fy(aW.fz[fu]), fy(aW.ds[fu]), g0(aW.g1[fu]), g2(aW.ds[fu]), g2(aW.g3[fu]), g4(), g5()
}

function ft() {
	g6 = !0, g7.g8(g9, gA, gB), aW.gC[g9] += gD, gE(), gF()
}

function fs() {
	return (fu === aM.aV ? gG : gH)()
}

function gH() {
	var gI = gD * aM.gJ,
		gK = gL(),
		gM = gN(),
		gK = gI + 2 * gK + gM,
		gP = gQ * gD;
	return gK < gP ? (gB -= gK, gR(gK - gI, gM), !0) : (gB -= gP, gR(gP - gI, gM), !1)
}

function gR(gP, gM) {
	if (0 < gM) {
		if (!(gM <= gP)) return g7.gS(fu, g9, gM - gP), void(gP = 0);
		g7.gS(fu, g9, 0), gP -= gM
	}
	gP = cG(gP, 2), aW.dt[fu] >= gP ? aW.dt[fu] -= gP : aW.dt[fu] = 0
}

function gN() {
	return g7.gT(fu, g9)
}

function gL() {
	return eS.eT(gD * aW.dt[fu], 1 + eS.eT(10 * aW.gC[fu], 16))
}

function gG() {
	return gB -= gD * aM.gJ, !0
}

function gF() {
	for (var u = gD - 1; 0 <= u; u--) aW.g1[g9].push(gU[u]), aW.fz[g9].push(gU[u]), cz.cu(gU[u], g9)
}

function gV() {
	this.ax = new gW, this.gX = new gY, this.gZ = new ad, this.aD = function(bB, bJ, bC, bD) {
		var b9;
		aM.ga || ((b9 = {}).bA = aM.gb, b9.bB = bB, b9.bJ = bJ, b9.bC = bC, b9.bD = bD, b9.bE = cE.gc, b9.bF = cE.gd, ge.gf(b9), this.ax.aD(b9))
	}, this.a0 = function() {
		aM.ga || (this.ax.a0(), 3 !== b3.f7) || gh.gi() % 15 != 5 && 2 !== aM.gj || b3.gk().gl()
	}, this.gm = function() {
		var gn = this.ax.b9;
		0 === aM.gj && f1.go(), cE.g(gn.bE, gn.bF), 1 === gn.bJ.length && (ge.gp(gn.bC), ge.gq(gn.bN, gn.bO)), i.j.close(i.j.gr, 3257), i.j.gr = 0, aM.gs(gn.bB, gn.bA, gn.bJ, gn.bC, gn.bD, !0)
	}, this.gt = function(af) {
		var u = af.indexOf("=");
		return 0 <= u ? af.substring(u + 1) : af
	}, this.gu = function(af) {
		return "https://territorial.io/?replay=" + af
	}
}
var mL, mM, b0, fn, mN, fo, ug, uh, ui, wj, cb, vG, vH, tF, fB, uo, uq, aEa, ky, aEb, fp, aM, tx, jK, rI, rM, rX, vE, lg, nt, m5, al, sv, rS, iU, ly, mC, mk, rR, rO, rE, rY, tI, iC, f1, ge, er, cz, aCT, g7, rJ, nD, aW, a6n, vD, nd, v9, aEL, a49, wS,
	vC, aDY, rZ, iM, xO, rT, ma, ew, aT, aa, i, rH, tG, rL, rK, nF, io, aH, fI, jx, aw, dW, hk, ra, f, v, ag, at, aHZ, iX, el, eS, eA, du, cC, rQ, rV, ro, cE, aDb, b3, vN, aAb, sw, a6E, mh, d0, cx, dZ, l2, tJ, gh, cK, rU, mn, eu, u6, fE, ls, py, aHa,
	jX, jV, jW, jG, gA, g9, gB, gQ, fu, gD, aIM, gU, aIN, aIO, jQ, aIP, g6, gv = [60, 74, 112, 200, 256, 512];

function gw() {
	var gx, gy, gz, h0, h1, h2;

	function hE(u) {
		gx[u] = 1 + cG(h1[u] * aT.random(), 10 * aT.value(100))
	}
	this.h3 = ["Very Easy", "Easy", "Normal", "Hard", "Harder", "Very Hard"], this.h4 = [97, 95, 93, 90, 87, 84], this.h5 = [98, 95, 70, 40, 20, 0], this.h6 = [85, 70, 50, 30, 7, 3], this.h7 = [0, 0, 5, 25, 50, 90], this.h8 = null, this.aD =
		function() {
			var u, h9;
			if (gx = new Uint8Array(aM.hA), gy = new Uint16Array(aM.hA), gz = new Uint16Array(aM.hA), h0 = new Uint8Array(aM.hA), this.h8 = new Uint8Array(aM.hA), h1 = new Uint16Array(aM.hA), h2 = new Uint16Array(aM.hA), aH.aI) {
				if (aH.aJ.hB)
					for (u = aM.hA - 1; 0 <= u; u--) this.h8[u] = aH.aJ.hB[u + 1]
			} else if (9 === aM.aN) this.hC();
			else if (aM.aP)
				if (aM.bz)
					for (u = aM.hA - 1; 0 <= u; u--) this.h8[u] = ge.hD[cK.cM[u + aM.aU] - 1].cH;
				else
					for (u = aM.hA - 1; 0 <= u; u--) this.h8[u] = ge.hD[0].cH;
			else
				for (h9 = 8 === aM.aN ? 1 : 0, u = aM.hA - 1; 0 <= u; u--) this.h8[u] = h9;
			for (u = aM.hA - 1; 0 <= u; u--) this.h8[u] <= 2 ? (h0[u] = 5, h1[u] = h2[u] = 1040, 0 === this.h8[u] ? (gy[u] = 1e3, gz[u] = 1e3) : 1 === this.h8[u] ? (gy[u] = 1e3, gz[u] = 920, h1[u] = h2[u] = 1100) : (gy[u] = 825, gz[u] = 750)) : this
				.h8[u] <= 4 ? (h0[u] = 1 + aT.hF(20), 3 === this.h8[u] ? (gy[u] = gz[u] = 500, h1[u] = h2[u] = 1e3) : (h2[u] = 250 + aT.hF(1501), h1[u] = 500 + aT.hF(501), gy[u] = 300 + aT.hF(201), gz[u] = 100 + aT.hF(201))) : (h1[u] = 1e3, h2[u] =
					1e3, h0[u] = 35 + aT.hF(16), gy[u] = 300 + aT.hF(201), gz[u] = 50 + aT.hF(101)), hE(u)
		}, this.hC = function() {
			for (var u, a7 = 0, cN = 0; cN < 6; cN++) {
				for (u = a7 + aa.hG[cN] - 1; a7 <= u; u--) this.h8[u] = cN;
				a7 += aa.hG[cN]
			}
		}, this.hH = function(hI, value) {
			0 <= hI && (gx[hI] = value)
		}, this.a0 = function(hI) {
			0 == --gx[hI] && ! function(hI) {
				! function(hI) {
					h1[hI] !== h2[hI] && (h1[hI] += h1[hI] < h2[hI] ? 3 : -3);
					gy[hI] !== gz[hI] && (gy[hI] += gy[hI] < gz[hI] ? h0[hI] : -h0[hI], gy[hI] = (Math.abs(gy[hI] - gz[hI]) <= h0[hI] ? gz : gy)[hI]);
					gx[hI] = cG(h1[hI], 10)
				}(hI);
				var player = hI + aM.aU;
				hL(player, cG(gy[hI] * aW.dt[player], 1e3))
			}(hI)
		}
}

function hM() {
	let hN, hO, hP, hQ, hR, hS, colors = [0, 0, 0],
		hT = -1;

	function hj(u) {
		var aS = 0 === u ? 150 : 2 === u ? 30 : 0,
			gn = 1 === u ? 130 : 2 === u ? 30 : 0,
			cN = 2 === u ? 220 : 0,
			ho = hO.cT + u * (dZ.gap + hS);
		fB.fillStyle = "rgb(" + aS + "," + gn + "," + cN + ")", fB.fillRect(hQ, ho, colors[u] * hR, hS), fB.strokeStyle = hk.hl, fB.strokeRect(hQ, ho, hR, hS), fB.fillStyle = hk.hl, fB.font = dW.dX.hn(0, .32 * hS), dW.dX.textBaseline(fB, 1), dW.dX
			.textAlign(fB, 0), fB.fillText((0 === u ? "Red: " : 1 === u ? "Green: " : "Blue: ") + ha(u), hQ + dZ.gap, ho + .53 * hS)
	}

	function ha(u, hp = 256) {
		return eS.hq(Math.floor(hp * colors[u]), 0, hp - 1)
	}

	function ht(hr, hs) {
		return !(hr < hQ || hs < hO.cT || hr > hO.cS + hO.ea || hs > hO.cT + hO.b6)
	}
	this.show = function() {
		var a8 = fE.fF.data[121].value;
		colors[0] = (a8 >> 12) / 63, colors[1] = (a8 >> 6 & 63) / 63, colors[2] = (63 & a8) / 63, hN.show(), this.resize()
	}, this.hY = function() {
		fE.hZ.fD(121, (ha(0, 64) << 12) + (ha(1, 64) << 6) + ha(2, 64)), hN.hY()
	}, this.resize = function() {
		hN.resize(), hO.resize();
		var cJ = ew.hb,
			hc = hN.hd(),
			hf = (hO.cT = Math.max(hO.cT, cJ * hc.he + dZ.gap), cJ * hc.hg - 2 * dZ.gap);
		hO.b6 = Math.min(hO.b6, hf), hO.ea = 2 * hO.b6, hO.cT = cJ * hc.he + .5 * (cJ * hc.hg - hO.b6), hO.cS = .5 * (ew.ea - hO.ea), hP = .25 * hO.ea, hQ = hO.cS + hP + dZ.gap, hR = hO.ea - hP - dZ.gap, hS = (hO.b6 - 2 * dZ.gap) / 3
	}, this.fA = function() {
		var aS, gn, cN;
		hN.fA(), fB.lineWidth = dZ.hh, aS = ha(0), gn = ha(1), cN = ha(2), fB.fillStyle = "rgb(" + aS + "," + gn + "," + cN + ")", fB.fillRect(hO.cS, hO.cT, hP, hO.b6), fB.strokeStyle = hk.hl, fB.strokeRect(hO.cS, hO.cT, hP, hO.b6), fB
			.fillStyle = aS + gn + cN < 306 && gn < 150 ? hk.hl : hk.hm, dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 1), fB.font = dW.dX.hn(0, .1 * hO.b6), fB.rotate(-Math.PI / 2), fB.fillText("National Color", -hO.cT - .5 * hO.b6, hO.cS +
				.5 * hP), fB.setTransform(1, 0, 0, 1, 0, 0), hj(0), hj(1), hj(2)
	}, this.f3 = function(hr, hs) {
		ht(hr, hs) && (hT = eS.hq(Math.floor((hs - hO.cT) / (hS + .75 * dZ.gap)), 0, 2), colors[hT] = eS.hq((hr - hQ) / hR, 0, 1), gh.hu = !0)
	}, this.hv = function(hr) {
		-1 !== hT && (colors[hT] = eS.hq((hr - hQ) / hR, 0, 1), gh.hu = !0)
	}, this.hw = function(hr, hs, deltaY) {
		ht(hr, hs) && (hr = eS.hq(Math.floor((hs - hO.cT) / (hS + .75 * dZ.gap)), 0, 2), colors[hr] = eS.hq(colors[hr] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), gh.hu = !0)
	}, this.hx = function() {
		0 <= hT && (hT = -1, gh.hu = !0)
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU("Choose Your Nation's Color!", [new hV("❌ " + fI.dq[92], function() {
		b3.j.hW()
	})], !1), hO = new hX([.5, .25], [.5, .5], 1)
}

function i1() {
	function iG(title, iI, cO) {
		i7(cO), b3.b4(4, 5, new b5("⚠️ " + title, iI, !0))
	}

	function i7(cO) {
		! function(cO) {
			var i6 = f1.f2();
			0 !== i6 && (6 === i6 ? i.j.iL(cO) : 7 === i6 ? (iM.iN(), i.j.close(i.j.iE, 3256)) : 8 === i6 && aM.iO(!0))
		}(cO), b3.j.iK()
	}
	this.i2 = function(i3, cO) {
		if (8 === b3.f7 && 0 === i3) b3.b4(4, 0, new b5("⚠️ " + fI.i4(64), fI.i5(cO), !0));
		else {
			var i6 = f1.f2();
			if (6 === i6) {
				if (4211 === cO) return i7(cO), void b3.b4(4, 5, new b5("🚀 " + fI.dq[122], fI.dq[123], !0, [new hV("❌ " + fI.dq[92], function() {
					b3.i8()
				}, hk.i9), new hV("🔄 " + fI.dq[124], function() {
					eu.di.iA()
				}, hk.iB)]));
				if (4214 !== cO) return void iC.iD(i3)
			} else {
				if (7 !== i6) return 8 === i6 ? void(i3 !== i.j.gr || aM.aP || 1 !== aM.gj || al.iF(fI.i5(cO))) : void 0;
				if (i3 !== i.j.iE) return
			}
			iG(fI.i4(64), fI.i5(cO), cO)
		}
	}, this.iH = function(cO) {
		8 === f1.f2() ? aM.aP || 1 !== aM.gj || al.iF(fI.i5(cO)) : iG(fI.i4(64), fI.i5(cO), cO)
	}
}

function iP() {
	var iQ = 1,
		aB = [null, null];
	this.aD = function() {
		iQ = .72 * (eu.di.ev() ? .0011 : .001) * ew.ex;
		for (var u = 1; 0 <= u; u--) aB[u] && this.iR(u, aB[u].af)
	}, this.iR = function(au, af) {
		aB[au] = {
			af: af,
			font: dW.dX.hn(1, 10)
		}, this.iS(au)
	}, this.iS = function(au) {
		var af, fontSize, iT, ea, iV;
		er.es() && aB[au] && (af = aB[au].af, fontSize = Math.floor(.15 * iQ * er.get(13).height), iT = dW.dX.hn(1, fontSize), ea = iU.measureText(af, iT), (iV = .8 * iQ * er.get(13).width) < ea && (fontSize = Math.floor(fontSize * iV / ea), iT =
			dW.dX.hn(1, fontSize)), aB[au] = {
			af: af,
			font: iT
		}, gh.hu = !0)
	}, this.iW = function() {
		return Math.floor(iQ * er.get(13).height)
	}, this.f3 = function(hr, hs) {
		return !!er.es() && !(hr < dZ.gap || hs < ew.b6 - iQ * er.get(13).height - 2 * dZ.gap || hs > ew.b6 - 2 * dZ.gap || (hr < dZ.gap + iQ * er.get(13).width ? (iX.iY = !0, b3.b4(8, 0, new iZ(21, {
			c: 0,
			d: 0,
			e: 9
		})), 0) : hr < 2 * dZ.gap + iQ * er.get(13).width || !(hr < 2 * dZ.gap + 2 * iQ * er.get(13).width) || (iX.iY = !0, b3.b4(8, 0, new iZ(21, {
			c: 1,
			d: 0,
			e: 9
		})), 0)))
	}, this.cQ = function() {
		return Math.floor(ew.b6 - iQ * er.get(13).height - dZ.gap)
	}, this.fA = function() {
		if (er.es()) {
			fB.imageSmoothingEnabled = !0, fB.setTransform(iQ, 0, 0, iQ, dZ.gap, this.cQ()), fB.drawImage(er.get(14), 0, 0), fB.setTransform(iQ, 0, 0, iQ, 2 * dZ.gap + iQ * er.get(13).width, this.cQ()), fB.drawImage(er.get(13), 0, 0);
			for (var u = 1; 0 <= u; u--) aB[u] && (fB.setTransform(1, 0, 0, 1, (1 + u) * dZ.gap + u * iQ * er.get(13).width, this.cQ()), fB.font = aB[u].font, dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 1), fB.fillStyle = hk.hl, fB.fillText(
				aB[u].af, .5 * iQ * er.get(13).width, .86 * iQ * er.get(13).height));
			fB.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function ia() {
	var ib, ic;
	this.aD = function() {
		ib = 1, ic = 0
	}, this.a0 = function() {
		0 < ib && (ic = 0 === ic ? gh.ig + 16 : ic, ib = (ib -= .001 * (gh.ig - ic)) < 0 ? 0 : ib, ic = gh.ig, gh.hu = !0)
	}, this.fA = function() {
		0 < ib && (fB.fillStyle = "rgba(0,0,0," + ib + ")", fB.fillRect(0, 0, ew.ea, ew.b6))
	}
}

function ii() {
	var input;

	function ij(cO) {
		im(cO.target.files)
	}

	function im(files) {
		files && 0 < files.length && io.ip(files[0])
	}

	function iw(cO) {
		var cJ = new Image;
		cJ.onload = ix, cJ.src = cO.target.result
	}

	function ix(cO) {
		var iz, cO = cO.target,
			ea = cO.width,
			b6 = cO.height;
		4096 < ea || 4096 < b6 || ea < 10 || b6 < 10 ? (iz = "Image w & h must be between 10 and 4096.", eu.df ? eu.df.showToast(iz) : alert(iz)) : (aH.j0(), cE.gc = cE.iv(), cE.gd = 0, cE.cF = ea, cE.ed = b6, cE.j1.width = cE.cF, cE.j1.height = cE
			.ed, cE.j2.drawImage(cO, 0, 0), iz = cE.j2.getImageData(0, 0, cE.cF, cE.ed), cE.j3 = iz.data)
	}

	function j4(cO) {
		cO.stopPropagation(), cO.preventDefault()
	}

	function j5() {
		return 0 === f1.f2() || 2 === f1.f2()
	}
	this.aD = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = ij
	}, this.ik = function() {
		input.click()
	}, this.il = function(cO) {
		ij(cO)
	}, this.ip = function(iq) {
		var cB = iq.name.split("."),
			ir = cB[cB.length - 1].toLowerCase();
		"json" === ir ? aH.it(iq) : "gif" !== ir && "jpg" !== ir && "jpeg" !== ir && "png" !== ir || (cE.aJ.iu[cE.iv()].name = cB[0], (ir = new FileReader).onload = iw, ir.readAsDataURL(iq))
	}, this.j6 = function(cO) {
		j5() && (j4(cO), cO.dataTransfer.dropEffect = "copy")
	}, this.j7 = function(cO) {
		j5() && (j4(cO), im(cO.dataTransfer.files))
	}
}

function j8(player, j9) {
	return cC.jA[1] = aW.g1[player].length, cC.jA[0] === aM.aV ? jB(player) : jC(player, cC.jA[0]), (0 !== cC.jA[1] || 0 !== aW.g1[player].length) && !(!j9 && cC.jA[1] === aW.g1[player].length || (cC.jA[0] === aM.aV ? aW.jD[player]++ : aW.jE[
		player]++, 0))
}

function jF(player) {
	aM.bz && (jG[player] = 1), jH(cC.jA[1], player), g7.jI(player, cC.jJ[0], cC.jA[0]), jK.jL(player, !1)
}

function jM(player, jN, s, h8) {
	var jO = cG(3 * aW.dt[player], 256);
	h8 -= h8 >= cG(aW.dt[player], 2) ? jO : 0, jH(s, player), g7.jI(player, h8, jN), aW.dt[player] -= h8 + jO, jK.jL(player, !1)
}

function jC(player, jN) {
	for (var jP, u = aW.fz[player].length - 1; 0 <= u; u--)
		if (cz.cg(aW.fz[player][u]))
			for (jP = 3; 0 <= jP; jP--)
				if (cz.ca(aW.fz[player][u] + jQ[jP]) && cz.ce(aW.fz[player][u] + jQ[jP]) === jN) {
					aW.g1[player].push(aW.fz[player][u]);
					break
				}
}

function jH(size, player) {
	for (var u = aW.g1[player].length - 1; size <= u; u--) cz.cv(aW.g1[player][u], player)
}

function jB(player) {
	for (let u = aW.fz[player].length - 1; 0 <= u; u--)
		if (cz.cg(aW.fz[player][u]))
			for (let jP = 3; 0 <= jP; jP--)
				if (cz.cm(aW.fz[player][u] + jQ[jP])) {
					aW.g1[player].push(aW.fz[player][u]);
					break
				}
}

function jR(player, jS) {
	var u, aE, jP, jT, s = aW.fz[player].length,
		jU = 256 <= s ? 12 : 32 <= s ? 6 : 1,
		eV = s - 1 - aT.hF(jU);
	jV = 0;
	loop: for (u = eV; 0 <= u; u -= jU)
		for (jP = 3; 0 <= jP; jP--)
			if ((jT = cz.cm(aW.fz[player][u] + jQ[jP]) ? aM.aV : cz.ce(aW.fz[player][u] + jQ[jP])) === aM.aV || cz.ca(aW.fz[player][u] + jQ[jP]) && jT !== player && (jS || eC(player, jT))) {
				for (aE = jV - 1; 0 <= aE; aE--)
					if (jW[aE] === jT) continue loop;
				if (jW[jV] = jT, ++jV >= jX) return !0
			}
	return 0 < jV
}

function jY(player, jS) {
	var u, jP, jT;
	for (jV = 0, u = aW.fz[player].length - 1; 0 <= u; u--)
		for (jP = 3; 0 <= jP; jP--)
			if ((jT = cz.cm(aW.fz[player][u] + jQ[jP]) ? aM.aV : cz.ce(aW.fz[player][u] + jQ[jP])) === aM.aV || cz.ca(aW.fz[player][u] + jQ[jP]) && jT !== player && (jS || eC(player, jT))) return jW[jV++] = jT, !0;
	return !1
}

function jZ() {
	for (var cN, u = jV - 1; 0 <= u; u--)
		if (jW[u] === aM.aV) {
			for (jV--, cN = u; cN < jV; cN++) jW[cN] = jW[cN + 1];
			return !0
		} return !1
}

function ja(player) {
	for (var cN, u = jV - 1; 0 <= u; u--)
		if (g7.jb(player, jW[u]))
			for (jV--, cN = u; cN < jV; cN++) jW[cN] = jW[cN + 1];
	return 0 === jV
}

function jc() {
	for (var u = jV - 1; 0 <= u; u--)
		if (jW[u] >= aM.aU) return !0;
	return !1
}

function jd() {
	for (var u = jV - 1; 0 <= u; u--) jW[u] < aM.aU && (jW[u] = jW[--jV]);
	return 0 < jV
}

function je(player) {
	for (var cN, jf = jW[0], jg = aW.dt[jf] + g7.gT(jf, player), u = jV - 1; 1 <= u; u--)(cN = aW.dt[jW[u]] + g7.gT(jW[u], player)) < jg && (jf = jW[u], jg = cN);
	return jf
}

function jh(player) {
	var b6, ji = jW[0];
	if (1 !== jV)
		for (var jj = cG(aW.eP[player] + aW.eL[player], 2), jk = cG(aW.eR[player] + aW.eN[player], 2), jl = jm(jj - cG(aW.eP[ji] + aW.eL[ji], 2)) + jm(jk - cG(aW.eR[ji] + aW.eN[ji], 2)), u = jV - 1; 1 <= u; u--)(b6 = jm(jj - cG(aW.eP[jW[u]] + aW.eL[
			jW[u]], 2)) + jm(jk - cG(aW.eR[jW[u]] + aW.eN[jW[u]], 2))) < jl && (jl = b6, ji = jW[u]);
	return ji
}

function jn() {
	return jW[aT.hF(jV)]
}

function jo() {
	var au = 0,
		jp = new Uint16Array(32);

	function remove(k0) {
		var u;
		for (au -= 2, u = k0; u < au; u += 2) jp[u] = jp[u + 2], jp[u + 1] = jp[u + 3]
	}
	this.aD = function() {
		au = 0
	}, this.a0 = function() {
		var u, jN, ju;
		if (0 !== au)
			if (0 === aW.jq[aM.gb] || g7.jr(aM.gb) === g7.js(aM.gb)) au = 0;
			else
				for (u = au - 2; 0 <= u; u -= 2)(jN = jp[u]) < aM.aV && 0 === aW.jq[jN] ? remove(u) : (ju = jp[u + 1], (jN >= aM.aV && jv(aM.gb) || jN < aM.aV && jw(aM.gb, jN)) && (jx.jy.jz(ju, jN), remove(u)))
	}, this.k1 = function(jN, ju) {
		! function(jN, ju) {
			var u;
			for (u = 0; u < au; u += 2)
				if (jp[u] === jN) return jp[u + 1] = Math.min(jp[u + 1] + ju, 1023), 1;
			return
		}(jN, ju) && 32 !== au && (jp[au] = jN, jp[au + 1] = ju, au += 2)
	}
}

function k3() {
	this.dp = ["", ""], this.dq = ["Kabul Et", "{0} silindi.", "{0} tarafından silindiniz.", "Tebrikler! Oyunu kazandınız.", "{0} oyunu kazandı.", "{0} saldırmazlık paktını bozdu.", "{0} sana saldırıyor!", "Başlangıç pozisyonunuzu seçin!",
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

function k4() {
	var k5 = null;
	this.k6 = 0, this.fK = function() {
		var a8 = fE.fF.data[5].value;
		k5 = "px " + a8, "Trebuchet MS" !== a8 && (k5 += ", Trebuchet MS"), this.k6 = k7(32, 32, ["a", "b", "m"], 200, k5)
	}, this.k8 = function(ea, b6) {
		var cJ = document.createElement("canvas");
		return cJ.width = ea, cJ.height = b6, cJ
	}, this.getContext = function(k9, alpha) {
		return k9.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(kA, ea, b6) {
		return kA.getImageData(0, 0, ea, b6)
	}, this.hn = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + k5 : 1 === type ? "bold " + size + k5 : 2 === type ? "lighter " + size + k5 : 3 === type ? "italic " + size + k5 : 4 === type ? "oblique " + size + k5 : 5 === type ? "small-caps " +
			size + k5 : "small-caps bold " + size + k5
	}, this.textAlign = function(kB, id) {
		kB.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(kB, id) {
		kB.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.kC = function(cO, code = 5, color = hk.hl) {
		color = this.dY(dZ.kD) + " solid " + color;
		5 === code ? cO.style.border = color : 4 === code ? cO.style.borderLeft = color : 2 === code ? cO.style.borderBottom = color : 6 === code ? cO.style.borderRight = color : cO.style.borderTop = color
	}, this.kE = function(cO, cS, cT, ea, b6) {
		cO = cO.style;
		cO.left = this.kG(cS), cO.top = this.kG(cT), cO.width = this.kG(ea), cO.height = this.kG(b6)
	}, this.kH = function(a8) {
		return 1 + a8 * eu.di.ev()
	}, this.db = function(ef, eD = .5) {
		return ef * this.kH(eD) * ew.ex / ew.hb
	}, this.kI = function(ef, eD = .5) {
		return ef * this.kH(eD) * ew.ex
	}, this.dY = function(a8) {
		return a8.toFixed(1) + "px"
	}, this.kG = function(a8) {
		return this.kJ(a8).toFixed(1) + "px"
	}, this.kJ = function(a8) {
		return a8 / ew.hb
	}, this.kK = function(kL, kM) {
		for (var af = "<ul>", s = kL.length, u = 0; u < s; u++) af += "<li>" + kL[u] + ": <a href='" + kM[u] + "' target='_blank'>" + kM[u] + "</a></li>";
		return af += "</ul>"
	}, this.f9 = function(kN) {
		return "<a href='" + kN + "' target='_blank'>" + kN + "</a>"
	}, this.kO = function(cO) {
		navigator.clipboard && navigator.clipboard.writeText(cO.value)
	}, this.kP = function(cO) {
		cO.innerText.startsWith("✅ ") || (cO.innerText = "✅ " + cO.innerText, setTimeout(function() {
			cO.innerText = cO.innerText.substring(cO.innerText.indexOf(" ") + 1)
		}, 500))
	}, this.measureText = function(af) {
		return fB.measureText(af).width
	}
}

function gW() {
	this.bY = null, this.bZ = null, this.ba = null, this.bb = null, this.bc = null, this.bd = null;
	var kQ = 0;
	this.b9 = null, this.ay = "", this.aD = function(b9) {
		this.bY = [], this.bZ = [], this.ba = [], this.bb = [], this.bc = [0], this.bd = [0], kQ = 0, this.b9 = b9, this.ay = ""
	}, this.kR = function(id, kS, kT, eg) {
		aM.ga || 2 === aM.gj || (0 === this.bc[kQ] && (this.bd[kQ] ? (this.bc.push(1), this.bd.push(0), kQ++) : this.bc[kQ] = 1), this.bY.push(id), this.bZ.push(kS), this.ba.push(void 0 === kT ? 0 : kT), this.bb.push(void 0 === eg ? 0 : eg), this
			.bd[kQ]++)
	}, this.a0 = function() {
		0 === this.bc[kQ] ? this.bd[kQ]++ : (this.bc.push(0), this.bd.push(0), kQ++)
	}
}

function kU(dS, kV) {
	var u, dU = document.createElement("div");

	function ka() {
		var u, kF, b6, eD, cH, kY = ew.hb * dU.offsetWidth,
			kb = new Float64Array(function(kY) {
				var ea = .25 * dW.dX.kH(.6) * ew.ex;
				return Math.max(Math.floor(kY / ea), 1)
			}(kY)),
			da = dZ.da,
			kc = (kY - (kb.length + 1) * dZ.gap) / (kb.length * ew.hb);
		for (kb.fill(da), u = 0; u < kV.length; u++) kF = (cH = kV[u].dU).style, b6 = Math.min(...kb), eD = kb.indexOf(b6), kF.top = dW.dX.dY(b6), kF.left = dW.dX.dY(da + eD * (kc + da)), kF.width = dW.dX.dY(kc), dW.dX.kC(cH, 5), kb[eD] += cH
			.offsetHeight + 3 * da;
		dU.style.height = dW.dX.dY(Math.max(...kb) - 2 * da)
	}
	for (this.kW = kV, this.resize = function() {
			var u;
			for (u = 0; u < kV.length; u++) kV[u].resize();
			ka(), ka()
		}, dU.style.width = "100%", dU.style.maxWidth = "100%", dS.style.lineHeight = "1.5em", dS.style.overflowX = "hidden", dS.style.overflowY = "auto", u = 0; u < kV.length; u++) dU.appendChild(kV[u].dU);
	dS.appendChild(dU)
}

function kd() {
	function kh(cB) {
		if (0 === cB.length) fE.hZ.fD(116, "");
		else {
			let km = cB[0];
			for (let u = 1; u < cB.length; u++) km += ";" + cB[u];
			fE.hZ.fD(116, km)
		}
	}
	this.ke = function() {
		fE.fF.data[110].value.length && (fE.fF.data[106].value = fE.fF.data[110], fE.hZ.fD(110, ""), this.kf())
	}, this.kf = function() {
		var cB = fE.fF.data[116].value.split(";");
		cB.length % 2 == 1 && cB.pop(), cB.unshift(fE.fF.data[106].value), cB.unshift(fE.fF.data[105].value);
		for (let u = 2; u < cB.length; u += 2)
			if (cB[u] === cB[0]) {
				cB.splice(u, 2);
				break
			} var kg = [];
		for (let u = 0; u < cB.length; u += 2) kg.push(cB[u]);
		kh(cB), fE.fF.data[117].value = 0, fE.fF.data[117].ki = kg
	}, this.kj = function(au) {
		fE.fF.data[117].ki.splice(au, 1), fE.fF.data[117].value = Math.min(au, fE.fF.data[117].ki.length - 1);
		var cB = fE.fF.data[116].value.split(";");
		cB.splice(2 * au, 2), kh(cB)
	}, this.kk = function(au) {
		var cB = fE.fF.data[116].value.split(";");
		return {
			kl: cB[2 * au],
			password: cB[2 * au + 1]
		}
	}, this.kn = function() {
		let a8 = eS.hq(fE.fF.data[121].value, -1, 262143);
		return a8 = -1 === a8 ? ~~(262144 * Math.random()) : a8
	}
}

function ko() {
	var kp, kq, kr, ks, kt, ku;

	function kz(l1) {
		for (var u = kq - 1; 0 <= u; u--) 0 === ks[kr[u]] && aW.gC[kr[u]] >= l1 && kx(kr[u])
	}

	function kw(player) {
		10 === ks[player] ? ks[player] = kp : aW.gC[player] < 1e3 ? ks[player] = 3 : aW.gC[player] < 1e4 ? ks[player] = 2 : aW.gC[player] < 6e4 ? ks[player] = 1 : ks[player] = 0
	}
	this.aD = function() {
		kt = ku = 0, kp = 6, kq = 0, kr = new Uint16Array(aM.aV), ks = new Uint8Array(aM.aV)
	}, this.a0 = function() {
		var u;
		for (kt = l2.l3[13], ku = aW.dt[aM.gb], u = kq - 1; 0 <= u; u--) 10 === ks[kr[u]] ? kw(kr[u]) : 0 == ks[kr[u]]-- && (kw(kr[u]), kx(kr[u]));
		16e4 <= aW.gC[ky[0]] && (kz(16e4), 3e5 <= aW.gC[ky[0]]) && kz(3e5), aW.gC[aM.gb] > l2.l3[7] && (l2.l3[7] = aW.gC[aM.gb]), l2.l3[14] += ku - aW.dt[aM.gb] + kt - l2.l3[13]
	}, this.l4 = function(player) {
		for (var aE, u = kq - 1; 0 <= u; u--)
			if (player === kr[u]) {
				for (kq--, aE = u; aE < kq; aE++) kr[aE] = kr[aE + 1];
				return
			}
	}, this.jL = function(player, l5) {
		for (var u = kq - 1; 0 <= u; u--)
			if (player === kr[u]) return;
		kr[kq++] = player, ks[player] = l5 ? 2 : 10
	}
}

function l6() {
	let hN, l7;
	var kV;
	this.show = function() {
		hN.show(), this.resize()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), l7.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU("🛠️ Chart Options", [new hV("❌ " + fI.dq[92], function() {
		b3.l8(13)
	})]), l7 = new kU(hN.l9, ((kV = []).push(function() {
		function lO() {
			var lP = .1 + (0 === lL.cO.value.length ? .1 : .01 * Math.min(lL.cO.value.split(",").length, 10));
			lJ.button.innerHTML = dW.lQ.lR(lJ.button.innerHTML, lP)
		}
		let lF = new lG,
			lJ = (lF.lH("Search Terms"), lF.lI("Separate search terms with a comma."), new hV("Go (🧈 0.00)", function() {
				fE.hZ.fD(130, 0), b3.j.lK()
			})),
			lL = new lM(fE.fF.data[126], 0, function() {
				lJ.button.click()
			});
		lF.lN(lL), lL.cO.placeholder = "a,b,c", lL.cO.style.marginTop = "0.5em";
		return lL.cO.addEventListener("input", lO), lO(), lF.lN(new lS([lJ.button])), lF
	}()), kV.push(function() {
		function lO() {
			d = Math.floor(lU.cO.value), e = Math.floor(lT.cO.value);
			var d, e = ((d = {
				lW: Math.min(d, e),
				lX: Math.max(d, e)
			}).lX - d.lW + 1 + 10) / 100;
			lJ.button.innerHTML = dW.lQ.lR(lJ.button.innerHTML, e)
		}
		let lF = new lG,
			lJ = new hV("Go (🧈 0.00)", function() {
				fE.hZ.fD(130, 1), b3.j.lK()
			}),
			lT = new lM(fE.fF.data[129], 1, function() {
				lT.cO.focus()
			}),
			lU = new lM(fE.fF.data[128], 1, function() {
				lJ.button.click()
			});
		lF.lH("Start Index"), lF.lN(lU), lU.cO.style.marginBottom = "0.5em", lF.lH("End Index"), lF.lN(lT);
		return lU.cO.addEventListener("input", lO), lT.cO.addEventListener("input", lO), lO(), lF.lN(new lS([lJ.button])), lF
	}()), kV.push(function() {
		var lF = new lG;
		return lF.lH("Timeframe"), lF.lZ(new la(fE.fF.data[125])), lF
	}()), kV.push(function() {
		var lF = new lG;
		return lF.lH("More Options"), lF.lN(new lb(fE.fF.data[127], fE.fF.data[127].title)), lF
	}()), kV))
}

function lc() {
	this.size = 0, this.au = 0, this.k = null, this.aD = function(k) {
		this.au = 0, this.k = k, this.size = k.length
	}, this.iN = function() {
		this.k = null
	}, this.az = function(size) {
		for (var a8 = 0, k = this.k, ld = this.au + size - 1, u = this.au; u <= ld; u++) a8 |= (k[u >> 3] >> 7 - (7 & u) & 1) << ld - u;
		return this.au += size, this.au > 8 * this.size && console.log("error unwrapper"), a8
	}, this.le = function(size) {
		var cN = size >> 1;
		return (1 << cN) * this.az(size - cN) + this.az(cN)
	}, this.lf = function(size) {
		for (var cB = new Array(size), u = 0; u < size; u++) cB[u] = this.az(10);
		return lg.ae(cB)
	}, this.lh = function(li) {
		return this.size === f.lj(li)
	}
}

function lk() {
	var ea, cS, ll, k9, kA, f0, ju, lP, iT, lm, ln = 11 / 12;

	function lr() {
		var lw = Math.floor(ju * (ea - 2 * ll)),
			lx = 1 + Math.floor(.0625 * ly.b6),
			lz = 1 + Math.floor(.3 * ly.b6),
			ez = Math.floor(.55 * ly.b6);
		kA.clearRect(0, 0, ea, ly.b6), kA.fillStyle = hk.m0, kA.fillRect(0, 0, ll, ly.b6), kA.fillRect(ll + lw, 0, ea - ll - lw, ly.b6), kA.fillStyle = ju < 1 / 3 ? "rgba(" + Math.floor(3 * ju * 130) + ",130,0,0.85)" : ju < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ju - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ju - 2 / 3) * 130) + ",0.85)", kA.fillRect(ll, 0, lw, ly.b6), kA.fillStyle = hk.hl, kA.fillRect(0, 0, ea, 1), kA.fillRect(0, ly.b6 - 1, ea, 1),
			kA.fillRect(0, 0, 1, ly.b6), kA.fillRect(ll, 0, 1, ly.b6), kA.fillRect(ll + lw, 0, 1, ly.b6), kA.fillRect(ea - ll, 0, 1, ly.b6), kA.fillRect(ea - 1, 0, 1, ly.b6), kA.fillRect(Math.floor(.25 * ly.b6) + lz, Math.floor((ly.b6 - lx) / 2), ly
				.b6 - 2 * lz, lx), kA.fillRect(Math.floor(ea - 1.25 * ly.b6) + lz, Math.floor((ly.b6 - lx) / 2), ly.b6 - 2 * lz - lz % 2, lx), kA.fillRect(Math.floor(ea - 1.25 * ly.b6) + Math.floor((ly.b6 - lx) / 2), lz, lx, ly.b6 - 2 * lz - lz % 2),
			lP = dW.dz.m1(aM.gb, ly.m2()), kA.fillText(dW.lQ.m3(lP) + " (" + dW.lQ.m4(100 * ju, +(ju < .1)) + ")", Math.floor(.5 * ea), ez)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ju = newPercentage;
	};
	keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	keybindFunctions.setRelative = (arg1) => ly.mI(arg1);

	function mG(iQ) {
		return !(1 < iQ && 1 === ju || (1 < iQ && iQ * ju - ju < 1 / 1024 ? iQ = (ju + 1 / 1024) / ju : iQ < 1 && ju - iQ * ju < 1 / 1024 && (iQ = (ju - 1 / 1024) / ju), ju = eS.hq(ju * iQ, 1 / 1024, 1), lr(), 0))
	}

	function mH(hr) {
		return ju !== (ju = eS.hq((hr - cS - ll) / (ea - 2 * ll), 1 / 1024, 1)) && (lr(), !0)
	}
	this.cT = 0, this.lo = !1, this.aD = function() {
		f0 = !aM.lp && !aM.ga, lm = !1, ju = .5, lP = 0, this.lo = !1, this.resize()
	}, this.resize = function() {
		eu.di.ev() && ew.ea < .8 * ew.b6 ? (this.b6 = Math.floor(.0536 * ew.ex), ea = ew.ea - 4 * dZ.gap - this.b6) : (ea = Math.floor((eu.di.ev() ? .65 : .389) * ew.ex), ea += 12 - ea % 12, this.b6 = Math.floor(ea / 12)), ll = Math.floor(3 *
			this.b6 / 2), iT = dW.dX.hn(1, Math.floor(.5 * this.b6)), (k9 = document.createElement("canvas")).width = ea, k9.height = this.b6, (kA = k9.getContext("2d", {
			alpha: !0
		})).font = iT, dW.dX.textBaseline(kA, 1), dW.dX.textAlign(kA, 1), this.lq(), lr()
	}, this.lq = function() {
		cS = eu.di.ev() && ew.ea < .8 * ew.b6 ? this.b6 + 3 * dZ.gap : Math.floor((ew.ea - ea) / 2), this.cT = ew.b6 - this.b6 - ls.lt() * dZ.gap
	}, this.lu = function() {
		lm && (lm = !1, lr())
	}, this.f0 = function() {
		return !(!f0 || m5.m6 && cS < Math.floor(dZ.gap + 5.5 * this.b6))
	}, this.m7 = function(iV) {
		return !!this.f0() && cS + ea > ew.ea - iV - dZ.gap
	}, this.m8 = function() {
		f0 = !aM.ga
	}, this.m9 = function() {
		f0 = !1
	}, this.m2 = function() {
		return eS.hq(Math.floor(1024 * ju + .5) - 1, 0, 1023)
	}, this.ht = function(hr, hs) {
		return this.f0() && cS < hr && hr < cS + ea && hs > this.cT
	}, this.f3 = function(hr, hs) {
		return !!this.f0() && !!ly.ht(hr, hs) && (mC.mD = !1, function(mF, hr, hs) {
			if (function(hr, hs) {
					return cS < hr && hr < cS + ll && hs > ly.cT
				}(hr, hs)) return mG(ln);
			if (function(hr, hs) {
					return cS + ea - ll < hr && hr < cS + ea && hs > ly.cT
				}(hr, hs)) return mG(1 / ln);
			return mF.lo = !0, mH(hr)
		}(this, hr, hs) && (gh.hu = !0), !0)
	}, this.mI = function(ef) {
		0 !== aM.gj && this.f0() && mG(ef) && (gh.hu = !0)
	}, this.hw = function(deltaY) {
		var ef;
		return !(0 === deltaY || !this.f0()) && mG(ef = 0 < deltaY ? (ef = 400 / (400 + deltaY)) < ln ? ln : ef : 1 / ln < (ef = (400 - deltaY) / 400) ? 1 / ln : ef)
	}, this.hv = function(hr) {
		return !!this.lo && mH(hr)
	}, this.mK = function() {
		this.lo = !1
	}, this.a0 = function() {
		this.f0() && lP !== dW.dz.m1(aM.gb, this.m2()) && (lm = !0)
	}, this.fA = function() {
		this.f0() && fB.drawImage(k9, cS, this.cT)
	}
}

function mO() {
	this.mP = 1046, this.aD = function() {
		mL = 2, b0 = 23, mM = "8 Jul 2024 [1.96.7]", fn = 0 <= window.location.hostname.toLowerCase().indexOf("territorial.io") || Math.random() >= 0.8, fo = function() {
			try {
				return window.self !== window.top
			} catch (cO) {
				return !0
			}
		}(), mN = (new Date).getTime() % 1024
	}, this.fq = 0
}

function dI() {
	this.mR = function(i3, k) {
		at.aD(k), 0 === at.size ? i.j.mS(i3, 3205) : ((0 === at.az(1) ? function(i3) {
			var mW = at.az(6);
			0 === mW ? function(i3) {
				if (0 === i3 && 8 !== f1.f2()) {
					mh.iR(0, ag.w.bK(at.az(5))), mh.iR(1, "[" + ag.w.bK(at.az(3)) + "]");
					var mi = at.az(12),
						mj = at.az(6),
						cB = new Array(mi);
					for (let u = 0; u < mi; u++) cB[u] = at.az(mj);
					mk.ml(cB)
				}
			}(i3) : 1 === mW ? function() {
				var u;
				if (8 !== f1.f2()) {
					var bL, id = at.az(1),
						position = at.az(16),
						mm = at.az(4),
						cB = [];
					for (u = 0; u < mm; u++) bL = at.az(14), cB.push({
						name: ag.w.bK(at.az(5)),
						bL: bL
					});
					0 === id ? mn.mo(0, cB, 10, 1, .36, .55, position) : mn.mo(1, cB, 100, 2, .47, .5, position)
				}
			}() : 2 === mW ? i.dJ.mZ(i3) : 3 === mW || 4 === mW ? ma.aD() : 5 !== mW && 6 !== mW && 7 !== mW && 8 !== mW && (9 === mW ? i.dL.mb(i3) : 10 === mW ? i.dN.mc() : 11 === mW ? i.dL.md() : 12 === mW ? i.dN.me() : 13 ===
				mW ? i.dP.mf() : 14 === mW && i.dP.mg())
		} : function(i3) {
			if (8 !== f1.f2() && !ma.n1()) return;
			if (i3 !== i.j.gr) i.j.mS(i3, 3244);
			else if (0 === at.az(1)) gh.n2.n3(at.k);
			else {
				var u, nB, i3 = at.az(2);
				if (0 === i3) {
					var d6 = at.az(9);
					0 !== aW.jq[d6] && 0 !== aW.jq[aM.gb] && (nB = at.az(10), al.nC(d6, aM.gb, nB), nD.nE(d6, 1, nB))
				} else if (1 === i3) ! function() {
					var d6 = at.az(9);
					0 !== aW.jq[d6] && 0 !== aW.jq[aM.gb] && nF.nG(0, [d6], !0) && al.nH(d6, 1)
				}();
				else if (2 === i3) ! function() {
					var d6 = at.az(9),
						target = at.az(9);
					0 !== aW.jq[d6] && 0 !== aW.jq[target] && 0 !== aW.jq[aM.gb] && nF.nG(1, [d6], !0) && (nD.nE(d6, 3, 96), nD.nE(target, 4, 96), al.nI(d6, target))
				}();
				else if (fn && !fo) {
					var s = 720;
					for (f.g(14407), f.h(1, 0), f.h(6, 10), s = Math.min(jx.n9.nA.length, 720), u = 0; u < s; u++) f.h(20, jx.n9.nA[u]);
					i.j.send(i.j.gr, f.k)
				}
			}
		})(i3), gh.mV())
	}, this.mp = function(k) {
		if (at.aD(k), at.au = 1, 3 === at.az(6)) {
			at.au += 20;
			for (var bH, bI, name, k = at.az(9), bB = at.az(14), bC = at.az(4), mz = 1 === at.az(1), bE = at.az(6), bF = at.az(14), n0 = at.az(9) + 1, bJ = [], u = 0; u < n0; u++) bH = at.az(1), bI = [at.az(6), at.az(6), at.az(6)], name = ag.w
				.bK(at.az(5)), bJ.push({
					name: name,
					bI: bI,
					bH: bH
				});
			f1.go(), cE.g(bE, bF), 1 === bJ.length && ge.gp(bC), aM.gs(bB, k, bJ, bC, mz, !1)
		} else ! function() {
			at.au += 20;
			for (var bH, bI, bL, name, mw = at.az(1), bB = at.az(14), bC = at.az(4), mz = 1 === at.az(1), bE = at.az(6), bF = at.az(14), bJ = [], u = 0; u < 2; u++) bH = at.az(1), bI = [at.az(6), at.az(6), at.az(6)], bL = at.az(14), name = ag
				.w.bK(at.az(5)), bJ.push({
					name: name,
					bI: bI,
					bL: bL,
					bH: bH
				});
			f1.go(), cE.g(bE, bF), aM.gs(bB, mw, bJ, bC, mz, !1)
		}()
	}, this.ms = function() {
		at.au = 1;
		var mW = at.az(6),
			mt = at.az(10);
		return i.j.iE > i.j.mu && (mt += i.j.mu), i.j.iE === mt ? (i.j.gr = mt, !1) : (i.j.close(i.j.iE, 3247), i.j.gr = mt, ma.mv = at.az(10), ma.mw = at.az(3 === mW ? 9 : 1), i.j.mx(mt, 5) && i.d6.my(), !0)
	}
}

function nJ() {
	this.f0 = !1;
	let eK, eM, gap, nK, zoom, nL, nN;
	this.nO = [], this.nP = 100;
	let nR = 0,
		nS = new Array(9),
		nT = [],
		nU = [],
		nV = 0,
		nW = 0,
		nX = 0,
		nY = 0;

	function no() {
		nS.sort((aE, cN) => cN.gx - aE.gx);
		let af = "" + nS[0].nB;
		for (let u = 1; u < 9; u++) af += "," + nS[u].nB;
		for (let u = 0; u < 9; u++) af += "," + nS[u].gx;
		fE.fF.fG(120, af)
	}
	this.aD = function() {
		var nZ = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6];
		for (let u = 0; u < nZ.length; u++) {
			var color = 6 === nZ[u] ? hk.na : hk.nb;
			this.nO.push(dW.k9.nc(er.get(3), nZ[u], color))
		}
		for (let u = 0; u < nd.ne.nf; u++) nU.push(nd.ne.ng - nd.ne.nf + u);
		for (let u = 0; u < nd.ne.nh; u++) nU.push(nd.ne.ni + u);
		var nj = nd.ne.nk(el.nj);
		for (let u = 0; u < nj.length; u++) nU.push(nj[u]);
		var cB = fE.fF.data[120].value.split(",");
		if (18 !== cB.length)
			for (let u = 0; u < 9; u++) nS[u] = {
				nB: 1015 + u,
				gx: 0
			};
		else
			for (let u = 0; u < 9; u++) {
				var a8 = parseInt(cB[u]),
					cJ = (a8 = 0 <= a8 && a8 < nd.ne.ng ? a8 : 0, parseInt(cB[u + 9]));
				cJ = 0 <= cJ && cJ < 1e3 ? cJ : 0, nS[u] = {
					nB: a8,
					gx: cJ
				}
			}
	}, this.show = function(hr, hs, np = 0) {
		if (nV = hr, nW = hs, nR = np, this.f0 = !0, nT = [], 0 === nR)
			for (let u = 0; u < 9; u++) nT.push(nS[u].nB);
		else {
			let cN = 49 * nR,
				aE = cN - 49;
			aE >= nU.length && (nR = 1, aE = 0, cN = 49), cN = Math.min(cN, nU.length);
			for (let u = aE = cN - 49; u < cN; u++) nT.push(nU[u])
		}
		nT.push(1024);
		np = nT.length, nK = Math.floor((eu.di.ev() ? .075 : .0468) * ew.ex), gap = Math.floor(nK / 3), nL = nK + gap, (nX = 10 * nL) > ew.ea && (nX = ew.ea, nL = nX / 10, nK = 3 * nL / 4, gap = nL - nK), nN = eS.eT(np, 10) + !!(np % 10), (nY =
			nN * nL) > ew.b6 && (nY = ew.b6, nL = nY / nN, nK = 3 * nL / 4, gap = nL - nK), zoom = nK / this.nP, np = .5 * gap;
		eK = Math.min(Math.max(hr - .5 * nX + np, np), ew.ea - nX + np), eM = Math.min(Math.max(hs - .5 * nY + np, np), ew.b6 - nY + np)
	}, this.f3 = function(hr, hs, player) {
		if (!this.f0) return !1;
		if (this.ns(hr, hs)) {
			hr = eS.hq(eS.eT(hr - eK + .5 * gap, nL), 0, 9);
			if ((hr += 10 * eS.hq(eS.eT(hs - eM + .5 * gap, nL), 0, 9)) >= nT.length) return nt.hY(), !0;
			hs = nT[hr];
			if (1024 === hs) return this.show(nV, nW, nR + 1), !0;
			! function(nB) {
				for (let u = 0; u < 9; u++) nS[u].gx = Math.floor(.99 * nS[u].gx);
				for (let u = 0; u < 9; u++)
					if (nB === nS[u].nB) return nS[u].gx = Math.min(nS[u].gx + 30, 999), no();
				nS.splice(5, 0, {
					nB: nB,
					gx: Math.max(nS[4].gx, 30)
				}), nS.pop(), no()
			}(hs), player === aM.gb ? jx.jy.nC(hs) : jx.dz.nu(hs, player)
		}
		return nt.hY(), !0
	}, this.ns = function(hr, hs) {
		return !(hr < eK - .5 * gap || hs < eM - .5 * gap || hr >= eK + nX - .5 * gap || hs >= eM + nY - .5 * gap)
	}, this.fA = function() {
		fB.fillStyle = hk.nv, fB.fillRect(eK - .5 * gap, eM - .5 * gap, nX, nY);
		var nw = .5 * dZ.hh,
			s = (fB.lineWidth = dZ.hh, fB.strokeStyle = fB.fillStyle = hk.hl, fB.strokeRect(eK - .5 * gap + nw, eM - .5 * gap + nw, nX - 2 * nw, nY - 2 * nw), fB.imageSmoothingEnabled = !0, nT.length);
		for (let u = 0; u < s; u++) this.nx(nT[u], fB, eK + u % 10 * nL, eM + eS.eT(u, 10) * nL, nK);
		fB.imageSmoothingEnabled = !1
	}, this.nx = function(nB, kB, cS, cT, nK) {
		var a7;
		nB >= 1024 - nd.ne.nf ? (a7 = nK / this.nP, kB.setTransform(a7, 0, 0, a7, cS, cT), kB.drawImage(this.nO[nB - 1024 + nd.ne.nf], 0, 0), kB.setTransform(1, 0, 0, 1, 0, 0)) : (dW.dX.textAlign(kB, 1), dW.dX.textBaseline(kB, 1), kB.font = dW.dX
			.hn(0, .89 * nK), kB.fillText(nd.ne.ny(nB), cS + .5 * nK, cT + (.35 - dW.dX.k6 + .56) * nK))
	}
}

function dD() {
	this.nz = function() {
		f.g(39), f.h(1, 0), f.h(6, 16), i.dA.o0(), i.j.send(0, f.k)
	}, this.o1 = function(i3) {
		f.g(115), f.h(1, 0), f.h(6, 17), ag.ah.o5(fE.fF.data[105].value, 5), ag.ah.o5(fE.fF.data[106].value, 8), f.h(30, fE.fF.data[109].value), i.j.send(i3, f.k)
	}, this.o3 = function() {
		f.g(55), f.h(1, 0), f.h(6, 18), ag.ah.x(fE.fF.data[110].value), i.j.send(0, f.k)
	}, this.o4 = function(username) {
		f.g(12 + 16 * username.length), f.h(1, 0), f.h(6, 20), i.dA.o(username), i.j.send(0, f.k)
	}
}

function o6() {
	var k, o7, o8, o9;
	this.mv = 0, this.mw = 0, this.aD = function() {
		var k9, ef;
		7 === f1.f2() && (k = at.k, o7 = 0, o8 = gh.ig + 4500, o9 = i.dH.ms() ? 2 : 0, f1.setState(10), fB.imageSmoothingEnabled = !0, f1.oF(), k9 = er.oH("loading"), ef = (eu.di.ev() ? .396 : .25) * ew.ex / k9.width, fB.setTransform(ef, 0, 0,
			ef, Math.floor((ew.ea - ef * k9.width) / 2), Math.floor((ew.b6 - ef * k9.height) / 2)), fB.imageSmoothingEnabled = !1, fB.drawImage(k9, 0, 0), fB.setTransform(1, 0, 0, 1, 0, 0))
	}, this.oA = function() {
		0 < o9 && gh.ig > o8 && (o9--, o8 += 4500, 0 === gh.oC) && 0 === gh.gi() && (0 === o9 && i.j.gr < i.j.oD && (i.j.gr += i.j.mu), i.j.mx(i.j.gr, 5))
	}, this.n1 = function() {
		var b7, u;
		return 10 === f1.f2() && (b7 = at.k, u = at.au, i.dH.mp(k), k = null, at.aD(b7), at.au = u, !0)
	}, this.oE = function() {
		10 === f1.f2() && 2 <= ++o7 && (i.dH.mp(k), k = null)
	}
}

function oI() {
	this.oJ = new oK, this.oL = new oM, this.result = new oN, this.oO = new oP
}

function oQ(data) {
	let hN, oR;

	function oT(jU) {
		let d;
		d = jU < 0 ? parseInt(data.data[0][0]) - 1 + jU : parseInt(data.data[data.data.length - 1][0]), b3.b4(8, 0, new iZ(21, {
			c: data.c,
			d: d,
			e: d + Math.abs(jU) - 1
		}))
	}
	var oS;
	this.show = function() {
		hN.show(), this.resize()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), oR.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, oS = [new hV("❌ " + fI.dq[92], function() {
		b3.i8()
	}), new hV("⬆️ Prev 100 (🧈 1.01)", function() {
		oT(-100)
	}), new hV("⬆️ Prev 10 (🧈 0.11)", function() {
		oT(-10)
	}), new hV("⬇️ Next 10 (🧈 0.11)", function() {
		oT(10)
	}), new hV("⬇️ Next 100 (🧈 1.01)", function() {
		oT(100)
	}), new hV("🛠️ Custom", function() {
		b3.b4(11, 10, new oU({
			c: data.c
		}))
	})], hN = new hU(data.title, oS), oR = new oV(hN.l9, data.data)
}

function oW() {
	this.a0 = function() {
		for (var oX, oY, oZ = du.j.oZ, oa = du.j.oa, ob = du.j.ob, u = du.j.dv - 1; 0 <= u; u--) oX = oa[u], 0 !== (oY = oZ[u]) && oX === ob[u] && (! function(u, oh, jP) {
			var jN, player = du.j.oi[u] >> 3,
				jP = oh + eA.eB[jP] << 2,
				u = du.j.oj[u];
			if (cz.cm(jP)) jN = aM.aV;
			else {
				if ((jN = cz.ce(jP)) === player) return dW.dz.ok(player, u);
				if (!eC(player, jN)) return jx.ol.om(player, jN, u)
			}
			player === aM.gb && (l2.l3[13] += u);
			aW.g1[player].push(oh << 2), g7.jI(player, u, jN), jK.jL(player, !0)
		}(u, eA.od(oX), oY - 1), du.oe.og(u))
	}
}

function on() {
	this.iu = null, this.aD = function() {
		var oo = [120, 105, 92],
			cos = [12, 12, 60],
			op = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			oq = [140, 130, 120],
			or = [12, 12, 76],
			os = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			ot = [130, 117, 106],
			ou = [12, 12, 68],
			ov = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.iu = new Array(cE.ow + 1), this.iu[0] = {
			name: "White Arena",
			ea: 230,
			b6: 230,
			ox: 1e3,
			oy: 2e3,
			a9: 173
		}, this.iu[1] = {
			name: "Black Arena",
			ea: 800,
			b6: 800,
			ox: 100,
			oy: 50,
			a9: 43
		}, this.iu[2] = {
			name: "Island",
			ea: 512,
			b6: 512,
			ox: 128,
			oy: 32,
			a9: 0
		}, this.iu[3] = {
			name: "Mountains",
			ea: 960,
			b6: 960,
			ox: 60,
			oy: 8,
			a9: 0
		}, this.iu[4] = {
			name: "Desert",
			ea: 900,
			b6: 900,
			ox: 100,
			oy: 5,
			a9: 0
		}, this.iu[5] = {
			name: "Swamp",
			ea: 1e3,
			b6: 1e3,
			ox: 100,
			oy: 40,
			a9: 0
		}, this.iu[6] = {
			name: "Snow",
			ea: 1e3,
			b6: 1e3,
			ox: 100,
			oy: 20,
			a9: 0
		}, this.iu[7] = {
			name: "Cliffs",
			ea: 1024,
			b6: 1024,
			ox: 128,
			oy: 32,
			a9: 0
		}, this.iu[8] = {
			name: "Pond",
			ea: 820,
			b6: 820,
			ox: 200,
			oy: 100,
			a9: 0
		}, this.iu[9] = {
			name: "Halo",
			ea: 1024,
			b6: 1024,
			ox: 128,
			oy: 32,
			a9: 0
		}, this.iu[10] = {
			name: "Europe",
			oz: oq,
			p0: or,
			p1: os
		}, this.iu[11] = {
			name: "World",
			oz: ot,
			p0: ou,
			p1: ov
		}, this.iu[12] = {
			name: "Caucasia",
			oz: ot,
			p0: ou,
			p1: ov
		}, this.iu[13] = {
			name: "Africa",
			oz: oo,
			p0: cos,
			p1: op
		}, this.iu[14] = {
			name: "Middle East",
			oz: oo,
			p0: cos,
			p1: op
		}, this.iu[15] = {
			name: "Scandinavia",
			oz: oq,
			p0: or,
			p1: os
		}, this.iu[16] = {
			name: "North America",
			oz: oq,
			p0: or,
			p1: os
		}, this.iu[17] = {
			name: "South America",
			oz: oo,
			p0: cos,
			p1: op
		}, this.iu[18] = {
			name: "Asia",
			oz: ot,
			p0: ou,
			p1: ov
		}, this.iu[19] = {
			name: "Australia",
			oz: oo,
			p0: cos,
			p1: op
		}, this.iu[20] = {
			name: "Island Kingdom",
			ea: 1024,
			b6: 1024,
			ox: 128,
			oy: 32,
			a9: 0
		}, this.iu[cE.ow] = {}
	}
}

function p2() {
	this.ah = new p3, this.w = new p4, this.aD = function() {
		this.ah.aD()
	}
}

function p5() {
	this.p6 = function(cB) {
		cB.fill(0)
	}, this.fW = function(cB) {
		for (var s = cB.length, u = 0; u < s; u++) cB[u] = []
	}, this.p7 = function(p8, iQ) {
		for (var p9 = cC.pA, u = 0; u < 3; u++) p9[u] = iQ * p8[u];
		return p9
	}, this.pB = function(p8, p9, pC) {
		for (var jU = 0, u = 0; u < 3; u++) jU += Math.abs(p8[u] - p9[u]);
		return pC <= jU
	}, this.pD = function(p8, pE) {
		for (var u = 0; u < 3; u++) p8[u] = eS.hq(p8[u] + pE, 0, 255);
		return p8
	}, this.pF = function(cB, d = 0, e = cB.length - 1) {
		for (var pG = 0, u = d; u <= e; u++) pG += cB[u];
		return pG
	}, this.pH = function(cB, pI) {
		for (var u, lW, s = cB.length, pJ = [], aE = s - 1; 0 <= aE; aE--) {
			for (u = lW = 0; u < s; u++) pI(cB[u]) < pI(cB[lW]) && (lW = u);
			s--, pJ.push(cB[lW]), cB[lW] = cB[s], cB.pop()
		}
		return pJ
	}
}

function pK() {
	var cS, cT, b6, pL, pM, pN, pO, pP, pQ, ea, kN, pR;
	this.f0 = !1, this.aD = function(af, f6) {
		if (1 === eu.id && 13 <= eu.dd && eu.dd < 18) return f6 ? void(kN = af) : kN !== af ? void 0 : void eu.df.saveString(200, af);
		f6 && (kN = af, (pR = document.createElement("a")).appendChild(document.createTextNode(kN)), this.f0 = !0, pR.title = kN, pR.target = "_blank", pR.href = kN, pR.style.textAlign = "center", pR.style.color = hk.hl, pR.style.position =
			"absolute", pR.style.padding = "0px", pR.style.margin = "0px", this.resize(), document.body.appendChild(pR), gh.hu = !0)
	}, this.hY = function() {
		return !(!this.f0 || (document.body.removeChild(pR), this.f0 = !1))
	}, this.f3 = function(f4, f5) {
		return !!this.f0 && ((f4 < cS || f5 < cT || cS + ea < f4 || cT + b6 < f5 || cS + ea - pL < f4 && f5 < cT + pL) && (gh.hu = !0, this.f0 = !1, document.body.removeChild(pR)), !0)
	}, this.resize = function() {
		var iT, pS;
		this.f0 && (pP = Math.floor(.8 * (eu.di.ev() ? ew.ea > ew.b6 ? .6 : .55 : .4) * ew.ex), pL = Math.floor(.15 * pP), pM = Math.floor(.35 * pL), pN = Math.floor(.5 * pL), pO = Math.floor(2.5 * pN), b6 = pL + pM + 3 * pN, iT = dW.dX.hn(1,
			pM / ew.hb), pQ = Math.floor(ew.hb * iU.measureText(kN, iT)), pS = ea = (pP < pQ ? pQ : pP) + 2 * pO, ea = Math.min(ea, ew.ea - 2 * (eu.di.ev() ? 2 : 1) * dZ.gap), iT = dW.dX.hn(1, ea / pS * pM / ew.hb), pQ = Math.floor(ew
			.hb * iU.measureText(kN, iT)), cS = Math.floor((ew.ea - ea) / 2), cT = Math.floor((ew.b6 - b6) / 2), pR.style.font = iT, pR.style.top = Math.floor((cT + 1.4 * pN + pL) / ew.hb) + "px", pR.style.left = Math.floor((cS + (ea -
			pQ) / 2) / ew.hb) + "px")
	}, this.fA = function() {
		this.f0 && (fB.fillStyle = hk.nv, fB.fillRect(cS, cT + pL, ea, b6 - pL), fB.fillStyle = hk.pT, fB.fillRect(cS, cT, ea, pL), fB.fillStyle = hk.hl, fB.lineWidth = dZ.hh, fB.strokeStyle = hk.hl, fB.strokeRect(cS, cT, ea, b6), fB.fillRect(cS,
			cT + pL, ea, dZ.hh), fB.font = dW.dX.hn(1, .48 * pL), dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1), fB.fillText("You are leaving Territorial.io!", Math.floor(cS + (ea - .5 * pL) / 2), Math.floor(cT + .55 * pL)), m5.pU(
			Math.floor(cS + ea - .8 * pL), Math.floor(cT + .25 * pL), Math.floor(.5 * pL)), fB.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function k7(nK, size, t, pV, font) {
	var u, pX = .2,
		k9 = document.createElement("canvas"),
		kB = k9.getContext("2d", {
			alpha: !1
		});
	for (k9.width = nK, k9.height = nK, kB.font = size + font, kB.textAlign = "center", kB.textBaseline = "middle", kB.fillStyle = "red", u = 0; u < t.length; u++) kB.fillText(t[u], .5 * nK, .5 * nK);
	return -1 < (k9 = function(iy) {
		var u, aS;
		for (u = iy.data.length - 4; 0 <= u; u -= 4)
			if (aS = iy.data[u], pV <= aS) return Math.floor(u / (4 * nK));
		return -1
	}(kB.getImageData(0, 0, nK, nK))) && (pX = (k9 - .5 * nK + .1 * size) / size), Math.max(pX, 0)
}

function d3() {
	var pb, pd;
	this.oD = 5, this.mu = this.oD - 1, this.pZ = this.oD + this.mu, this.pa = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.pc = null;

	function pq(u) {
		return pd[u].pi && pb[u].pq()
	}

	function ps(i3) {
		pd[i3].ig = gh.ig, pd[i3].pj = !1
	}
	this.gr = 0, this.iE = 0, this.aD = function() {
		this.pc = new Array(this.oD);
		this.pc[0] = "territorial.io";
		var u, a9 = aT.pf(0);
		for (aT.pg(0), u = 1; u < this.oD; u++) this.pc[u] = lg.ph() + ".territorial.io";
		for (aT.pg(a9), pb = new Array(this.pZ), pd = new Array(this.pZ), u = this.pZ - 1; 0 <= u; u--) pd[u] = {
			pi: !1,
			ig: 0,
			pj: !1
		};
		this.mx(0, 0)
	}, this.pk = function(u) {
		return pb[u]
	}, this.pl = function() {
		return this.iE < this.oD ? this.iE : this.iE - this.mu
	}, this.a0 = function() {
		for (let u = this.pZ - 1; 0 <= u; u--) this.pm(u) && gh.ig > pd[u].ig + 15e3 && i.d6.pn(u, pd[u].pj);
		!this.pm(0) && gh.ig > pd[0].ig + 8e3 && (pd[0].ig = gh.ig, this.mx(0, 0))
	}, this.mx = function(i3, po) {
		if (pd[i3].pi) {
			if (pb[i3].pq()) return pb[i3].pr(po), pb[i3].pm();
			pb[i3].hY()
		}
		return this.pp(i3, po), !1
	}, this.pp = function(i3, po) {
		pd[i3].pi = !0, ps(i3), pb[i3] = new pt, pb[i3].aD(i3, po)
	}, this.pr = function(i3, po) {
		pq(i3) && pb[i3].pr(po)
	}, this.pu = function(i3, po) {
		i.dA.pv(i3)
	}, this.pm = function(u) {
		return pd[u].pi && pb[u].pm()
	}, this.send = function(i3, k) {
		ps(i3), pb[i3].send(k)
	}, this.pw = function(i3) {
		8 === f1.f2() && (pd[i3].pj = !0, i.d4.aI = !0)
	}, this.close = function(i3, px) {
		pq(i3) && pb[i3].close(px)
	}, this.mS = function(i3, px) {
		py.iH(px), pq(i3) && pb[i3].close(px)
	}, this.iL = function(px) {
		for (let u = this.pZ - 1; 0 <= u; u--) this.close(u, px)
	}, this.pz = function(i3, px) {
		for (var u = this.pZ - 1; 0 <= u; u--) u !== i3 && this.close(u, px)
	}, this.q0 = function() {
		this.close(this.gr, 3246)
	}, this.q1 = function(i3, cO) {
		pb[i3].hY(), py.i2(i3, cO.code)
	}
}

function q2() {
	var q3, q4, ci, q5;
	this.aD = function() {
		var u, cS, cT, bI, q6, ea, b6, kA, iy, q7, a8, b7, jl, aE, qB;
		if (function() {
				if (ci = !0, q5 = "rgb(" + cE.j3[0] + "," + cE.j3[1] + "," + cE.j3[2] + ")", cE.qA(cE.gc)) return 1;
				return ci = !1, 0
			}()) q4 = null;
		else {
			for (q3 = cG(96, 4), q6 = 1 === cE.gc ? (bI = 0, 160) : (bI = 128, 32), q5 = "rgb(" + bI + "," + bI + "," + bI + ")", q4 = new Array(4), u = 3; 0 <= u; u--) {
				if (q4[u] = document.createElement("canvas"), ea = u % 2 == 0 ? cE.cF : q3, b6 = u % 2 == 0 ? q3 : cE.ed + 2 * q3, q4[u].width = ea, q4[u].height = b6, q7 = (iy = (kA = q4[u].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, ea, b6)).data, u % 2 == 0)
					for (cT = q3 - 1; 0 <= cT; cT--)
						for (a8 = q6 + Math.floor((cT + 1) * (bI - q6) / (q3 + 1)), cS = ea - 1; 0 <= cS; cS--) q7[b7 = 4 * ((0 === u ? q3 - cT - 1 : cT) * ea + cS)] = a8, q7[b7 + 1] = a8, q7[b7 + 2] = a8, q7[b7 + 3] = 255;
				else {
					for (cS = q3 - 1; 0 <= cS; cS--)
						for (a8 = q6 + Math.floor((cS + 1) * (bI - q6) / (q3 + 1)), cT = b6 - 1 - q3; q3 <= cT; cT--) q7[b7 = 4 * (cT * ea + (3 === u ? q3 - cS - 1 : cS))] = a8, q7[b7 + 1] = a8, q7[b7 + 2] = a8, q7[b7 + 3] = 255;
					for (aE = 1; 0 <= aE; aE--)
						for (cS = q3 - 1; 0 <= cS; cS--)
							for (cT = q3 - 1; 0 <= cT; cT--) jl = (Math.pow(cS * cS + cT * cT, .5) + 1) / (q3 + 1), a8 = q6 + Math.floor((1 < jl ? 1 : jl) * (bI - q6)), q7[b7 = 4 * ((0 === aE ? q3 - cT - 1 : cT + aE * (b6 - q3)) * ea + (1 === u ?
								cS : q3 - cS - 1))] = a8, q7[b7 + 1] = a8, q7[b7 + 2] = a8, q7[b7 + 3] = 255
				}
				kA.putImageData(iy, 0, 0)
			}
			qB = q6, cE.j2.fillStyle = "rgb(" + qB + "," + qB + "," + qB + ")", cE.j2.fillRect(0, 0, cE.cF, 1), cE.j2.fillRect(0, cE.ed - 1, cE.cF, 1), cE.j2.fillRect(0, 0, 1, cE.ed), cE.j2.fillRect(cE.cF - 1, 0, 1, cE.ed)
		}
	}, this.oF = function() {
		var aE = ci ? 0 : -q3;
		qC(aE, aE, cE.cF - 2 * aE, cE.ed - 2 * aE, d0.qD, d0.qE, d0.qF, d0.qG) || (fB.fillStyle = q5, fB.fillRect(0, 0, ew.ea, ew.b6))
	}, this.fA = function() {
		ci || (qH(0, -q3, cE.cF, q3, d0.qD, d0.qE, d0.qF, d0.qG) && fB.drawImage(q4[0], d0.qI, d0.qJ - q3), qH(cE.cF, -q3, q3, cE.ed + 2 * q3, d0.qD, d0.qE, d0.qF, d0.qG) && fB.drawImage(q4[1], d0.qI + cE.cF, d0.qJ - q3), qH(0, cE.ed, cE.cF, q3,
			d0.qD, d0.qE, d0.qF, d0.qG) && fB.drawImage(q4[2], d0.qI, d0.qJ + cE.ed), qH(-q3, -q3, q3, cE.ed + 2 * q3, d0.qD, d0.qE, d0.qF, d0.qG) && fB.drawImage(q4[3], d0.qI - q3, d0.qJ - q3))
	}
}

function qK() {
	this.bK = function(size) {
		var qL = at,
			cB = [];
		for (let u = 0; u < size; u++) cB.push(String.fromCharCode(qL.az(16)));
		return cB.join("")
	}, this.qM = function(af) {
		return 20 < (af = af.trim()).length ? af.substring(0, 20) : af
	}
}

function qN() {
	this.f0 = !1, this.qO = null, this.qP = 0, this.ea = null, this.b6 = null, this.qQ = .013, this.qR = .022, this.qS = .025;
	this.qU = 3, this.qV = 1.2, this.qW = .2, this.qX = .235, this.qY = .9, this.qZ = .08;
	var qa, kL = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"],
		qb = [-1e6, -1e6];
	this.position = [0, 0], this.qd = [0, 0], this.aD = function() {
		this.qO = [null, null], this.f0 = !1, this.qP = 0
	}, this.m8 = function(id) {
		this.qP = id, i.d6.qe(0, this.qP)
	}, this.a0 = function() {
		this.f0 && this.iS()
	}, this.iS = function() {
		gh.ig - 12e4 >= qb[this.qP] && (qb[this.qP] = gh.ig, this.qd = [0, 0], i.d6.qe(0, this.qP))
	}, this.resize = function() {
		if (this.f0) {
			var u;
			for (this.ea = this.qf(eu.di.ev() ? .85 : .66, .75, ew.ea, ew.b6), this.b6 = Math.floor(this.ea / .75), u = 1; 0 <= u; u--) this.qO[u] && (this.qO[u][4] = dW.dX.hn(1, this.qO[u][5] * this.b6 / 10));
			qa = dW.dX.hn(1, .1 * this.b6)
		}
	}, this.qf = function(iQ, pX, ea, b6) {
		return ea < pX * b6 ? Math.floor(iQ * ea) : Math.floor(pX * iQ * b6)
	}, this.mo = function(au, qg, qh, qi, qj, qk, ql) {
		this.position[au] = ql;
		var qn, size = qg.length,
			iT = dW.dX.hn(1, qj * this.b6 / 10),
			cB = (this.qm(qg, iT, qk * this.ea), [
				[], size, -1, qi, iT, qj, 10 * ql
			]);
		for (let u = 0; u < size; u++) qn = {
			name: qg[u].name,
			value: qg[u].bL / qh,
			colorIndex: qg[u].colorIndex
		}, cB[0].push(qn);
		this.qO[au] = cB, this.qo(au);
		let name = this.qO[au][0][0].name;
		1 === au && (name = "[" + name + "]"), 0 === ql && mh.iR(au, name);
		var data = [];
		for (let u = 0; u < cB[0].length; u++) data.push([u + 1 + ".", cB[0][u].name, cB[0][u].value.toFixed(1)]);
		b3.b4(10, b3.f7, new oQ(au ? "Clan Ranking" : "1v1 Player Ranking", data))
	}, this.qo = function(u) {
		this.qO[u][0].sort(function(aE, cN) {
			return cN.value - aE.value
		})
	}, this.fD = function(au, name, qp, qq) {
		if (this.qO && this.qO[au]) {
			var u, qr = !1;
			if (0 === au) {
				for (u = 0; u < this.qO[au][0].length; u++)
					if (name === this.qO[au][0][u].name && qp > .99 * this.qO[au][0][u].value && qp < 1.01 * this.qO[au][0][u].value) {
						this.qO[au][0][u].value = qq, qr = !0;
						break
					} qr || this.qO[au][0].push({
					name: name,
					value: qq
				})
			} else {
				for (u = 0; u < this.qO[au][0].length; u++)
					if (name === this.qO[au][0][u].name) {
						this.qO[au][0][u].value += 32 < this.qO[au][0][u].value ? (64 - this.qO[au][0][u].value) / 256 : .25, this.qO[au][0][u].value *= 1 / (383 / 384), qr = !0;
						break
					} for (u = 0; u < this.qO[au][0].length; u++) this.qO[au][0][u].value *= 383 / 384;
				qr || this.qO[au][0].push({
					name: name,
					value: .25
				})
			}
			this.qo(au)
		}
	}, this.qm = function(qg, iT, iV) {
		for (var u = qg.length - 1; 0 <= u; u--)
			for (; 3 < qg[u].name.length && iU.measureText(qg[u].name, iT) > iV;) qg[u].name = qg[u].name.substring(0, qg[u].name.length - 4) + "..."
	}, this.f3 = function(f4, f5) {
		return !!this.f0 && (f4 -= (ew.ea - this.ea) / 2, f5 -= (ew.b6 - this.b6) / 2, f4 < 0 || f4 > this.ea || f5 < 0 || f5 > this.b6 ? (this.f0 = !1, gh.hu = !0) : (f5 = f5 < .3 * this.b6 ? 1 : f5 < .85 * this.b6 ? (f5 = (0 === this.qP ?
			14.1 : 3) * (f5 - .3 * this.b6) / (.55 * this.b6), Math.floor(1 + f5 * f5)) : 0 === this.qP ? 200 : 10, f4 < this.ea / 2 ? this.qd[this.qP] = -f5 : this.qd[this.qP] = f5, qb[this.qP] + 50 > gh.ig || (qb[this.qP] = gh.ig, i
			.d6.qe(0, this.qP)), !0))
	}, this.fA = function() {
		var eK, eM, et, ey, qt, qu, qv, qw;
		this.f0 && (eK = (ew.ea - this.ea) / 2, eM = (ew.b6 - this.b6) / 2, et = this.qQ * this.ea, ey = this.qU * et, qt = this.qR * this.ea, qu = this.qV * qt, qv = this.qS * this.ea, qw = Math.floor(.25 * this.b6), fB.setTransform(1, 0, 0, 1,
				eK, eM), fB.fillStyle = 0 === this.qP ? hk.qx : hk.qy, fB.fillRect(0, 0, this.ea, qw), fB.fillStyle = hk.m0, fB.fillRect(0, qw, this.ea, this.b6 - qw), fB.fillStyle = hk.hl, fB.font = qa, dW.dX.textBaseline(fB, 1), dW.dX
			.textAlign(fB, 1), fB.fillText(kL[this.qP], Math.floor(this.ea / 2), Math.floor(.135 * this.b6)), fB.font = dW.dX.hn(1, .025 * this.b6), fB.fillText(kL[this.qP + 2], Math.floor(this.ea / 2), Math.floor(.2125 * this.b6)), fB
			.beginPath(), fB.moveTo(this.ea / 4, 0), fB.lineTo(this.ea / 2 - et, 0), fB.lineTo(this.ea / 2, -ey), fB.lineTo(this.ea / 2 + et, 0), fB.lineTo(this.ea - qt, 0), fB.lineTo(this.ea + qu, -qu), fB.lineTo(this.ea, qt), fB.lineTo(this
				.ea, this.b6 / 2 - et), fB.lineTo(this.ea + ey, this.b6 / 2), fB.lineTo(this.ea, this.b6 / 2 + et), fB.lineTo(this.ea, this.b6 - qt), fB.lineTo(this.ea + qu, this.b6 + qu), fB.lineTo(this.ea - qt, this.b6), fB.lineTo(this.ea /
				2 + et, this.b6), fB.lineTo(this.ea / 2, this.b6 + ey), fB.lineTo(this.ea / 2 - et, this.b6), fB.lineTo(qt, this.b6), fB.lineTo(-qu, this.b6 + qu), fB.lineTo(0, this.b6 - qt), fB.lineTo(0, this.b6 / 2 + et), fB.lineTo(-ey,
				this.b6 / 2), fB.lineTo(0, this.b6 / 2 - et), fB.lineTo(0, qt), fB.lineTo(-qu, -qu), fB.lineTo(qt, 0), fB.lineTo(this.ea / 4, 0), fB.lineTo(this.ea / 4, qv), fB.lineTo(qv, qv), fB.lineTo(qv, this.b6 - qv), fB.lineTo(this.ea -
				qv, this.b6 - qv), fB.lineTo(this.ea - qv, qv), fB.lineTo(this.ea / 4, qv), fB.fill(), this.qO[this.qP] && this.qz(qw), this.r0(qw), fB.setTransform(1, 0, 0, 1, 0, 0))
	}, this.r0 = function(qw) {
		var et = r1(2, Math.floor(.06 * this.ea)),
			ez = (et -= et % 2, r1(2, Math.floor(.01 * this.ea))),
			qw = (ez -= ez % 2, Math.floor(.82 * qw));
		fB.fillRect(et, qw, et, ez), fB.fillRect(this.ea - et - et, qw, et, ez), fB.fillRect(Math.floor(this.ea - et - et + (et - ez) / 2), Math.floor(qw - (et - ez) / 2), ez, et)
	}, this.qz = function(qw) {
		var cT;
		fB.font = this.qO[this.qP][4];
		for (var u = this.qO[this.qP][1] - 1; 0 <= u; u--) dW.dX.textAlign(fB, 2), cT = Math.floor(this.qZ * this.b6 + qw + u * ((1 - 2 * this.qZ) * this.b6 - qw) / 9), fB.fillText(this.qO[this.qP][0][u].value.toFixed(this.qO[this.qP][3]), Math
			.floor(this.qY * this.ea), cT), fB.fillText(u + 1 + this.qO[this.qP][6] + ".", Math.floor(this.qW * this.ea), cT), dW.dX.textAlign(fB, 0), fB.fillText(this.qO[this.qP][0][u].name, Math.floor(this.qX * this.ea), cT)
	}
}

function r2() {
	this.n2 = null, this.hu = !1, this.ig = 0, this.r3 = 56;
	var r4 = 0;

	function r6() {
		gh.ig = r4 = performance.now(), gh.n2.a0(), window.requestAnimationFrame(r6)
	}
	this.aD = function() {
		this.r5(), window.requestAnimationFrame(r6), this.ig = performance.now()
	}, this.r7 = function() {
		aM.ga ? (this.n2 = new r8, this.n2.aD()) : aM.aP ? this.n2 = new r9 : (this.n2 = new rA, this.n2.aD())
	}, this.r5 = function() {
		this.n2 = new rB, this.hu = !0
	}, this.a0 = function() {
		this.n2.rC++
	}, this.gi = function() {
		return this.n2.rC
	}, this.mV = function() {
		var mJ = performance.now();
		mJ < r4 + 1e3 || (this.ig = mJ, this.n2.a0())
	}
}

function rD() {
	al.a0(), nD.a0(), rE.rF(), i.j.a0()
}

function rG() {
	rH.a0(), rI.a0(), rJ.a0(), rK.a0(), rL.a0(), jK.a0(), rM.a0(), du.j.a0(), rN(), rO.a0(), aa.a0(), nD.a0(), nD.rP(), rE.a0(), rQ.a0(), rR.a0(), rS.a0(), al.a0(), nF.a0(), ly.a0(), rT.a0(), l2.a0(), rU.a0(), rV.a0(), i.j.a0(), i.d4.a0(), b3.a0(),
		aw.a0(), gh.a0()
}

function rW() {
	rX.a0(), rY.a0(), iU.a0(), rZ.a0(), ra.a0(), ma.oA()
}

function rb() {
	rO.lu(!1), rS.lu(), rE.lu(!1), rR.lu(), ly.lu(), rT.lu(), nD.lu(!1), rU.iS()
}

function rc() {
	nD.lu(!1) && (gh.hu = !0), i.j.a0()
}

function rd() {
	this.eT = function(aE, cN) {
		return Math.floor((aE + .5) / cN)
	}, this.re = function(aE, cN) {
		return Math.floor(aE * (cN + .5))
	}, this.sqrt = function(a8) {
		return ~~Math.sqrt(a8 + .5)
	}, this.pow = function(cO) {
		return Math.floor(Math.pow(2, cO) + .5)
	}, this.hq = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.rf = function(kS, kT, eg) {
		return Math.max(Math.min(kS, kT), eg)
	}, this.rg = function(rh, ri, cS, cT) {
		cS -= rh, rh = cT - ri, cT = 0;
		return 0 == cS ? cT = 0 <= rh ? Math.PI : 0 : (cT = Math.atan(rh / cS), cT += 0 < cS ? .5 * Math.PI : 1.5 * Math.PI), cT
	}, this.log2 = function(a8) {
		return Math.floor(!!a8 * (1 + Math.log2(a8 + .5)))
	}
}

function rk() {
	this.aD = function() {
		0 === fE.fF.data[181].value && (fE.fF.fG(180, Math.floor(Math.random() * eS.pow(30))), fE.fF.fG(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function oK() {
	function rm() {
		if (2 === aM.gj) return 1;
		rT.s2(), aM.gj = 2, aM.s3 = aM.s4
	}

	function rs() {
		ro.result.jt(), ro.result.s5(), al.s6(!0), al.s7(247, 0), rO.lu(!0), rE.lu(!0), rT.lu(), ra.s8(), aM.ga && gh.n2.s9(), gh.hu = !0, cx.sA(), eu.di.setState(0)
	}
	this.rl = function() {
		rm() || (aM.rn = 2, ro.result.rp(), al.rq(0, 59), rX.rr(2700), rY.show(!1, !1, !0), rs())
	}, this.rt = function(ru) {
		rm() || (aM.rn = 1, 8 === aM.aN ? (aM.rv = ru < 0 ? aW.gC[0] >= aW.gC[1] ? 0 : 1 : ru, aM.rw = +(aM.rv === aM.gb), aM.rw ? al.rq(aM.rv, 2) : al.rq(1 - aM.gb, 3), aM.rx.ry(aM.rv)) : aM.bz ? (aM.rw = +(cK.cM[aM.gb] === rU.rz()), 9 === aM
			.aN && al.s0()) : (aM.rv = ky[0], aM.rw = +(aM.rv === aM.gb), al.s1(aM.rv)), rY.show(1 === aM.rw, !1), rs())
	}
}

function sB() {
	var sC = 0,
		sD = 0;
	this.sE = function(cS, cT) {
		sC = cS, sD = cT
	}, this.sF = function(sG) {
		aM.ga || m5.m6 || (dW.dz.sH(0) || dW.dz.sH(1)) && dW.dz.sI(aM.gb) && (ly.f3(sC, sD) ? ly.lo = !1 : function(sG) {
			var sK = eA.sL(sC),
				sM = eA.sN(sD),
				sO = eA.sP(sK, sM),
				a7 = eA.sQ(sO);
			eA.sR(sK, sM) && (aM.lp ? cz.cl(a7) && jx.jy.sS(sO) : cz.cn(a7) || (cz.ci(a7) || sG ? du.oO.sT(aM.gb, sO) && jx.jy.sU(ly.m2(), sO) : cz.cm(a7) ? jv(aM.gb) ? jx.jy.jz(ly.m2(), aM.aV) : sV(aM.gb, aM.aV) ? rH.k1(aM.aV, ly.m2()) :
				du.oO.sT(aM.gb, sO) && jx.jy.sU(ly.m2(), sO) : (sK = cz.ce(a7)) !== aM.gb && (eC(sK, aM.gb) ? jw(aM.gb, sK) ? jx.jy.jz(ly.m2(), sK) : sV(aM.gb, sK) ? rH.k1(sK, ly.m2()) : du.oO.sT(aM.gb, sO) && jx.jy.sU(ly.m2(),
					sO) : du.oO.sT(aM.gb, sO) && jx.jy.sU(ly.m2(), sO))))
		}(sG))
	}
}

function sW() {
	var nP = 32,
		nO = new Array(2);

	function k8(cJ) {
		var cS, cT, sO, eQ, eO, nK = nP,
			ej = dW.dX.k8(nK, nK),
			kB = dW.dX.getContext(ej, !0),
			iy = dW.dX.getImageData(kB, nK, nK),
			q7 = iy.data,
			aZ = (nK >> 1) - .5,
			sY = Math.sqrt(aZ * aZ);
		for (q7.fill(255), cT = 0; cT < nK; cT++)
			for (cS = 0; cS < nK; cS++) eO = cS - aZ, eQ = cT - aZ, sO = 4 * (cT * nK + cS), eO = 714 * (sY - Math.sqrt(eO * eO + eQ * eQ)) / sY, q7[2 + sO] = cJ, q7[3 + sO] = 255 < eO ? 0 : eO;
		return kB.putImageData(iy, 0, 0), ej
	}
	this.sX = -1, this.aD = function() {
		this.sX = -1, nO[0] || (nO[0] = k8(255), nO[1] = k8(0))
	}, this.sZ = function(kB, a7, cS, cT, aS, u) {
		dW.dz.sI(aM.gb) && (kB.setTransform(a7 *= 4 / 3 * .625, 0, 0, a7, cS - (aS *= 4 / 3), cT - aS), kB.drawImage(nO[+(du.j.sa[u] === this.sX)], 0, 0))
	}
}

function sb() {
	let sc, sd, hO, lL, se;
	hO = new hX([.45, .27], [.5, .5], 2 / 3), sd = [new hV("⚔️<br>Multiplayer", function() {
			sf(0)
		}, hk.sg), new hV("🗡️<br>Single Player", function() {
			sf(1)
		}, hk.qx), new hV("🔑<br>My Account", function() {
			sf(2)
		}, hk.sh), new hV("⚙️<br>Menu", function() {
			sf(3)
		}, hk.si), new hV("", function() {
			b3.b4(12)
		}, hk.m0, !1),
		new hV("FX Client settings", function() {
			WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5")
	], lL = new lM(fE.fF.data[122]);
	for (let u = 0; u < sd.length; u++) sd[u].button.style.position = "absolute";

	function sf(au) {
		eu.di.setState(10), aH.j0(), er.es() || er.sj(), 0 === au ? b3.j.sk() : 1 === au ? b3.j.sl() : 2 === au ? 0 !== eu.id || fE.fF.data[140].value ? b3.b4(8, b3.f7, new iZ(16)) : b3.j.sm(b3.f7, 16) : 3 === au && b3.b4(1, b3.f7)
	}
	lL.cO.style.position = "absolute", lL.cO.style.textAlign = "center", lL.cO.placeholder = "Your Kingdom's Name", this.show = function() {
		f1.setState(0), eu.di.setState(12), sd[4].sn(dW.color.so(fE.fF.data[121].value)), this.resize(), document.body.appendChild(lL.cO);
		for (let u = 0; u < sd.length; u++) document.body.appendChild(sd[u].button);
		1 !== eu.id || eu.dd < 5 || (se && gh.ig > se + 144e5 ? eu.df.setState(14) : se = gh.ig)
	}, this.hY = function() {
		document.body.removeChild(lL.cO);
		for (let u = 0; u < sd.length; u++) document.body.removeChild(sd[u].button)
	}, this.resize = function() {
		hO.resize();
		var gap = .5 * dZ.gap,
			pL = 10 / 99 * .84 * hO.ea,
			sq = 3 * gap,
			sr = .16 * hO.b6,
			ss = .19 * hO.ea,
			cS = hO.cS + ss,
			pL = hO.cT + pL + sq,
			sq = .5 * (hO.ea - gap) - ss,
			ss = hO.ea - 2 * ss - sr - gap,
			ss = (dW.dX.kE(lL.cO, cS, pL, ss, sr), dW.dX.kE(sd[4].button, cS + ss + gap, pL, sr, sr), pL += sr + gap, .5 * (hO.cT + hO.b6 - pL - gap));
		dW.dX.kE(sd[0].button, cS, pL, sq, ss), dW.dX.kE(sd[1].button, cS + sq + gap, pL, sq, ss), dW.dX.kE(sd[2].button, cS, pL + ss + gap, sq, ss), dW.dX.kE(sd[3].button, cS + sq + gap, pL + ss + gap, sq, ss);
		dW.dX.kE(sd[5].button, cS, pL + ss * 2 + gap * 2, sq * 2 + gap, ss / 3);
		for (let u = 0; u < sd.length; u++) sd[u].button.style.font = dW.dX.hn(0, dW.dX.kJ(.065 * hO.b6)), dW.dX.kC(sd[u].button, 5);
		lL.cO.style.font = dW.dX.hn(0, dW.dX.kJ(.08 * hO.b6)), dW.dX.kC(lL.cO, 5)
	}, this.fA = function() {
		if (f1.su(), mk.fA(), sv.fA(), sw.fA(), mh.fA(), er.es()) {
			if (settings.displayWinCounter) {
				const size = Math.floor(hO.ea * 0.03);
				fB.font = dW.dX.hn(1, size);
				fB.fillStyle = "#ffffff";
				const text = "Win count: " + wins_counter;
				const textLength = fB.measureText(text).width;
				fB.textAlign = "left";
				fB.textBaseline = "middle";
				fB.fillText(text, fB.canvas.width - textLength - size / 2, size);
			};
			fB.imageSmoothingEnabled = !1;
			var cJ = er.oH("territorial.io"),
				ef = .84 * hO.ea / cJ.width;
			fB.setTransform(ef, 0, 0, ef, hO.cS + .08 * hO.ea, hO.cT), sc = sc || dW.sy.sz(cJ, dW.sy.t0, [0, 0, 0]);
			for (let cS = -1; cS <= 1; cS += 2)
				for (let cT = -1; cT <= 1; cT += 2) fB.drawImage(sc, cS, cT);
			fB.drawImage(cJ, 0, 0), fB.imageSmoothingEnabled = !0;
			var p9 = er.oH("logo"),
				t1 = .6666 * ef * cJ.height / p9.height,
				eY = .5 * ew.ea,
				eZ = hO.cT + .5 * ef * cJ.height - .5 * t1 * p9.height;
			fB.setTransform(t1, 0, 0, t1, eY - .6 * ef * cJ.width, eZ), fB.drawImage(p9, 0, 0), fB.setTransform(t1, 0, 0, t1, eY + .6 * ef * cJ.width - t1 * p9.width, eZ), fB.drawImage(p9, 0, 0), fB.setTransform(1, 0, 0, 1, 0, 0), fB
				.imageSmoothingEnabled = !0
		}
	}
}

function t2() {
	this.oB = function() {
		var value, t4;
		0 === eu.id && (value = function(key) {
			if ("undefined" == typeof URLSearchParams) return null;
			var t5 = window.location.search,
				t5 = new URLSearchParams(t5).get(key);
			if ("string" != typeof t5 || t5.length < 1) return null;
			return t5
		}("replay"), (t4 = new URL(window.location.href)).search = "", history.replaceState(null, "", t4.toString()), value) && b3.b4(3, 0, value)
	}
}

function t7() {
	var cJ, t8 = !1,
		t9 = !1,
		tA = -1e4;

	function resize(jU) {
		cJ = 0, er.es() && (tE(jU) || t8) && (t8 = !1, dZ.resize(), mh.aD(), tI.aD(), sw.aD(), iC.resize(), mk.resize(), sv.resize(), mn.resize(), b3.resize(), 1 <= aM.gj ? (rO.resize(!1), rR.resize(), rE.resize(), mC.resize(), ly.resize(), al
			.resize(), m5.resize(), ra.resize(), rT.resize(), rS.resize(), iU.resize(), nt.resize(), tJ.resize(), nD.resize(), rY.resize(), rU.resize(), mC.tK()) : (2 === f1.f2() && ge.resize(), f1.tL(), f1.tM()), gh.hu = !0)
	}

	function tD(a8) {
		return a8 && 128 < a8 ? Math.floor(a8) : 128
	}

	function tE(jU) {
		var ea, b6, tO, et = tD(document.documentElement.clientWidth),
			ez = tD(window.visualViewport && 2 !== eu.id ? window.visualViewport.height : document.documentElement.clientHeight);
		return ea = et, b6 = ez, tO = 0 !== eu.id || ea < b6 ? 700 : 1200, tO = Math.min(tO / ((ea + b6) / 2), 1), tO = 0 === fE.fF.data[1].value ? 2 * tO / 3 : Math.min(tO + (fE.fF.data[1].value - 1) * (1 - tO) / 2, 1), ew.hb = (window
			.devicePixelRatio || 1) * tO, hoveringTooltip.canvasPixelScale = ew.hb, jU && !t9 ? (t9 = !0, document.body.removeChild(tF)) : t9 && (t9 = !1, document.body.appendChild(tF)), ea = Math.floor(.5 + et * ew.hb), b6 = Math.floor(.5 + ez *
			ew.hb), (ea !== ew.ea || b6 !== ew.b6) && (ew.ea = ea, ew.b6 = b6, ew.min = tR(ea, b6), ew.max = r1(ea, b6), ew.ex = cG(ea + b6, 2), ew.tB = ea / b6, tF.width = ea, tF.height = b6, tF.style.width = et + "px", tF.style.height = ez +
			"px", 1)
	}
	this.ea = 0, this.b6 = 0, this.min = 0, this.max = 0, this.ex = 0, this.tB = 1, this.hb = 1, this.tC = function() {
		this.ea = tD(document.documentElement.clientWidth) + 2, this.b6 = tD(document.documentElement.clientHeight) + 2
	}, this.aD = function() {
		cJ = 1, tF = document.getElementById("canvasA"), (fB = tF.getContext("2d", {
			alpha: makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, tE(0)
	}, this.a0 = function() {
		tG.a0(), 50 <= ++cJ && resize(0)
	}, this.fJ = function(jU) {
		t8 = !0, resize(jU)
	}, this.tH = function() {
		tA + 1e3 > gh.ig || (tA = gh.ig, resize(0))
	}
}

function dQ() {
	this.mf = function() {
		if (at.size < f.lj(38)) i.j.mS(0, 3259);
		else {
			var c = at.az(6),
				s = at.az(10),
				t = at.az(15);
			if (at.lh(38 + 51 * s + 16 * t)) {
				var data = [];
				let ef, qi;
				qi = 0 === c ? (ef = .1, 1) : (ef = .001, 3);
				for (let u = 0; u < s; u++) data.push(["" + (at.az(30) + 1), ag.w.bK(at.az(5)), (ef * at.az(16)).toFixed(qi)]);
				8 === b3.f7 && b3.gk().tS(21, !0, {
					c: c,
					title: c ? "Clan Ranking" : "1v1 Player Ranking",
					data: data
				})
			} else i.j.mS(0, 3260)
		}
	}, this.mg = function() {
		if (at.size < f.lj(29)) i.j.mS(0, 3265);
		else {
			var tT = at.az(4),
				tU = at.az(7),
				tV = at.az(11);
			if (at.lh(29 + 16 * tU + 16 * tV + 11 * tT)) {
				var data = [];
				for (let u = 0; u < tT; u++) {
					var tW = ag.w.bK(at.az(3)),
						tX = at.az(8),
						tY = [];
					for (let aE = 0; aE < tX; aE++) tY.push(at.az(16));
					data.push({
						name: "[" + tW + "]",
						tY: tY
					})
				}
				8 === b3.f7 && b3.gk().tS(23, !0, data)
			} else i.j.mS(0, 3266)
		}
	}
}

function tZ() {
	var cS, cT, ea, b6, ta, tb, tc, td, player, cB;

	function tk() {
		return function() {
			var u;
			for (u = 0; u < 8; u++)
				if (cS = cG(ea * aT.random(), aT.value(100)), cT = cG(b6 * aT.random(), aT.value(100)), tr()) return 1;
			return
		}() || function() {
			var eO, eQ, aE, tj, cN, ti;
			for (eO = cG(ea * aT.random(), aT.value(100)), eQ = cG(b6 * aT.random(), aT.value(100)), aE = 40; 1 <= aE; aE--)
				for (tj = b6 - aE; 0 <= tj; tj -= 40)
					for (cT = (tj + eQ) % b6, cN = 40; 1 <= cN; cN--)
						for (ti = ea - cN; 0 <= ti; ti -= 40)
							if (cS = (ti + eO) % ea, tr()) return 1;
			return
		}()
	}

	function tr() {
		for (var b7, eI, gap = cG(ta - td, 2), ts = tc + cT * ta + gap, tt = tb + cS * ta + gap, eJ = ts + td - 1; ts <= eJ; eJ--)
			for (eI = tt + td - 1; tt <= eI; eI--)
				if (b7 = cz.cR(eI, eJ), !cz.cl(b7) || cz.cg(b7)) return;
		return 1
	}

	function tl(ti, tj) {
		te(), tu(ti - 2, tj - 2)
	}

	function te() {
		aW.jq[player] = 0, aW.dt[player] = 0, aW.gC[player] = aW.tv[player] = 0, aW.g1[player] = [], aW.fz[player] = [], aW.ds[player] = [], aW.g3[player] = [], aW.eL[player] = aW.eN[player] = aW.eP[player] = aW.eR[player] = 0
	}

	function tu(ti, tj) {
		var b7, u, ty, tz;
		for (aW.jq[player] = 1, player < aM.aU ? aW.dt[player] = aM.tw : aW.dt[player] = gv[tx.h8[player - aM.aU]], aW.eL[player] = ti + 10, aW.eN[player] = tj + 10, aW.eR[player] = aW.eP[player] = 0, ty = ti; ty < ti + 4; ty++)
			for (tz = tj; tz < tj + 4; tz++)(ti < ty && ty < ti + 3 || tj < tz && tz < tj + 3) && (b7 = cz.cR(ty, tz), cz.cl(b7)) && (aW.eL[player] = ty < aW.eL[player] ? ty : aW.eL[player], aW.eP[player] = ty > aW.eP[player] ? ty : aW.eP[player], aW
				.eN[player] = tz < aW.eN[player] ? tz : aW.eN[player], aW.eR[player] = tz > aW.eR[player] ? tz : aW.eR[player], cB[aW.gC[player]] = b7, aW.gC[player]++, cz.ct(b7, player));
		for (aW.tv[player] = aW.gC[player], u = aW.gC[player] - 1; 0 <= u; u--) cz.cW(cB[u], player) ? (cz.cu(cB[u], player), aW.fz[player].push(cB[u])) : cz.ch(cB[u]) ? (cz.cu(cB[u], player), aW.ds[player].push(cB[u])) : cz.cU(cB[u]) && (cz.cu(cB[
			u], player), aW.g3[player].push(cB[u]))
	}

	function tq(ti, tj) {
		for (var b7, eI, eJ = tj; tj - 6 < eJ; eJ--)
			for (eI = ti; ti - 6 < eI; eI--)
				if (b7 = cz.cR(eI, eJ), cz.cg(b7)) return;
		return 1
	}
	this.aD = function() {
		var u, ti, tj;
		if (cB = new Array(12), td = 6, ta = 10, ea = cG(cE.cF, ta), b6 = cG(cE.ed, ta), tb = cG(cE.cF - ta * ea, 2), tc = cG(cE.ed - ta * b6, 2), aM.lp)
			for (u = 0; u < aM.aU; u++) player = u, te(), aW.jq[player] = 1;
		if (aH.aI && aH.aJ.tf) {
			for (player = 0; player < aM.aV; player++)
				if (1 !== aW.jq[player]) {
					if (player < aM.ac) {
						if (function() {
								var ti = aH.aJ.tf[player] + 1,
									tj = aH.aJ.tp[player] + 1;
								if (3 < ti && ti < cE.cF - 5 && 3 < tj && tj < cE.ed - 5 && cz.cl(cz.cR(ti, tj)) && tq(ti + 3, tj + 3)) return tl(ti + 1, tj + 1), 1;
								return
							}()) continue;
						if (tk()) {
							ti = tb + cS * ta + cG(ta, 2), tj = tc + cT * ta + cG(ta, 2), tl(ti, tj);
							continue
						}
					}
					te()
				}
		} else ! function() {
			var ti, tj;
			for (player = 0; player < aM.aV; player++) 1 !== aW.jq[player] && (player < aM.ac && tk() ? (ti = tb + cS * ta + cG(ta, 2), tj = tc + cT * ta + cG(ta, 2), tl(ti, tj)) : te())
		}();
		l2.l3[7] = aW.gC[aM.gb], l2.l3[8] = aW.dt[aM.gb]
	}, this.u0 = function(jN, u1, u2) {
		var u, ti, tj, b7, cS, cT;
		for (player = jN, u = 0; u < 20; u++)
			for (ti = u1 + u; u1 - u <= ti; ti--)
				for (tj = u2 + u; u2 - u <= tj; tj--)
					if ((ti === u1 + u || ti === u1 - u || tj === u2 + u || tj === u2 - u) && 3 < ti && ti < cE.cF - 5 && 3 < tj && tj < cE.ed - 5 && cz.cl(cz.cR(ti, tj)) && tq(ti + 3, tj + 3)) {
						if (0 < aW.gC[player]) {
							for (cT = cS = b7 = void 0, cS = aW.eP[player]; cS >= aW.eL[player]; cS--)
								for (cT = aW.eR[player]; cT >= aW.eN[player]; cT--) b7 = 4 * (cT * cE.cF + cS), cz.cc(player, b7) && (cz.co(b7), aW.gC[player]--);
							te()
						}
						return tu(ti - 1, tj - 1), !0
					} return !1
	}, this.u4 = function(jN) {
		player = jN, tk() ? tl(tb + cS * ta + cG(ta, 2), tc + cT * ta + cG(ta, 2)) : te()
	}
}

function dM() {
	this.mb = function(i3) {
		var n5 = at.az(3),
			u5 = u6.u7.a0(at.az(16), at.az(20));
		i.dA.u8(i3, u5, n5), 0 < n5 || (0 === i3 && 0 === fE.fF.data[105].value.length ? i.dA.u9(0) : i.dC.o1(i3), 4 === i.j.pk(i3).uA() ? 6 === f1.f2() && i.d8.uB(i3) : 5 !== i.j.pk(i3).uA() || 8 !== f1.f2() && 10 !== f1.f2() || i.d6.my())
	}, this.md = function() {
		var id = at.az(6);
		0 === id ? (mk.uC || i.dA.u9(1), 8 === b3.f7 && b3.gk().uD()) : 21 === id ? 8 === b3.f7 && b3.gk().tS(17) : 22 === id && (fE.hZ.fD(106, fE.fF.data[110].value), fE.hZ.fD(110, ""), 8 === b3.f7) && b3.gk().tS(15)
	}
}

function uE() {
	var uF, nP = 8,
		uG = new Array(2);

	function uH(au) {
		var nK = nP + 4,
			ej = dW.dX.k8(nK, nK),
			kB = dW.dX.getContext(ej, !0),
			iy = dW.dX.getImageData(kB, nK, nK),
			q7 = iy.data;
		return uI(q7, nK + 1, au), uI(q7, nK + 2, au), uI(q7, 2 * nK + 1, au), uI(q7, 2 * nK - 3, au), uI(q7, 2 * nK - 2, au), uI(q7, 3 * nK - 2, au), uI(q7, nK * (nK - 3) + 1, au), uI(q7, nK * (nK - 2) + 1, au), uI(q7, nK * (nK - 2) + 2, au), uI(q7,
			nK * (nK - 2) - 2, au), uI(q7, nK * (nK - 1) - 3, au), uI(q7, nK * (nK - 1) - 2, au), kB.putImageData(iy, 0, 0), ej
	}

	function uI(q7, sO, au) {
		sO *= 4;
		q7[sO] = 255, q7[1 + sO] = 255, q7[2 + sO] = au, q7[3 + sO] = 255
	}

	function k8(player) {
		var ej = dW.dX.k8(nP, nP);
		return function(kB, player) {
			var cS, cT, eO, sO, uK, uL, nK = nP,
				iy = dW.dX.getImageData(kB, nK, nK),
				q7 = iy.data,
				aZ = (nK >> 1) - .5,
				q5 = cz.cA(player),
				uN = dW.fV.p7(q5, .5);
			dW.fV.pB(q5, uN, 300) || dW.fV.pD(q5, 100);
			for (cT = 0; cT < nK; cT++)
				for (cS = 0; cS < nK; cS++) uL = (nK - 1.5) * (nK - 1.5) / 4, uK = (eO = (eO = cS - aZ) * eO + (eO = cT - aZ) * eO) <= (nK - 4.5) * (nK - 4.5) / 4 ? uN : q5, q7[sO = 4 * (cT * nK + cS)] = uK[0], q7[1 + sO] = uK[1], q7[2 + sO] =
					uK[2], q7[3 + sO] = uL < eO ? 0 : 255;
			kB.putImageData(iy, 0, 0)
		}(dW.dX.getContext(ej, !0), player), ej
	}
	this.aD = function() {
		uF = new Array(aM.aV), uG[0] = uH(255), uG[1] = uH(0)
	}, this.fA = function() {
		var u, player, uO, h8, uP, uT, uU, uW, uX, oa = du.j.oa,
			oi = du.j.oi,
			oj = du.j.oj,
			uY = uF,
			uZ = aM.gb,
			ua = -1,
			s = du.j.dv,
			ub = ew.ea,
			uc = ew.b6,
			ud = cE.cF << 4,
			uf = ug,
			a7 = uf / nP,
			eK = uh / uf,
			eM = ui / uf,
			eO = (ub + uh) / uf - eK,
			eQ = (uc + ui) / uf - eM,
			kB = fB;
		for (du.oO.uj(aM.gb, du.qB.sX) && (ua = cC.e8[3]), kB.fillStyle = hk.hl, dW.dX.textAlign(kB, 1), dW.dX.textBaseline(kB, 1), u = 0; u < s; u++) player = oi[u] >> 3, h8 = oj[u], uO = .625 + .125 * Math.sqrt(Math.sqrt(h8)), uP = (uT = oa[
			u]) % ud / 16 - uO, uT = uc * (Math.floor(uT / ud) / 16 - uO - eM) / eQ, uU = -2 * (uX = uf * uO) * (1 + (uW = +(player === uZ)) / 8), uW = uW * uX / 4, (uX = ub * (uP - eK) / eO) < uU || uT < uU || ub + uW < uX || uc + uW < uT || (
				uP = uO * uf, kB.imageSmoothingEnabled = (uU = 2 * uO * a7) < 3, void 0 === (uW = uY[player]) && (uY[player] = uW = k8(player)), player === uZ && (kB.setTransform(uU, 0, 0, uU, uX - 2 * uU, uT - 2 * uU), kB.drawImage(uG[+(u ===
					ua)], 0, 0)), kB.setTransform(uU, 0, 0, uU, uX, uT), kB.drawImage(uW, 0, 0), (uO = Math.floor(function(h8) {
					if (h8 < 1e3) return .42;
					if (h8 < 1e4) return .34;
					if (h8 < 1e6) return .26;
					if (h8 < 1e8) return .19;
					return .15
				}(h8) * uP)) < 6) || (kB.setTransform(1, 0, 0, 1, 0, 0), kB.font = dW.dX.hn(1, uO), kB.fillText(dW.lQ.m3(h8), uX + uP, uT + uP + .1 * uO));
		kB.imageSmoothingEnabled = !1, kB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function ul() {
	this.um = null, this.aD = function() {
		10 !== aM.aN ? this.um = null : this.um = new Uint32Array(aM.aV)
	}, this.a0 = function() {
		10 === aM.aN && this.i7()
	}, this.i7 = function() {
		for (var b7, target, un, um = this.um, bJ = uo, up = aW.dt, u = uq - 1; 0 <= u; u--)(b7 = bJ[u]) >= aM.aU || (target = Math.max(cG(up[b7], 4), 2048), un = Math.max(rJ.ur(b7), 100), um[b7] += cG(un * target, 1e4), um[b7] > target && (um[
			b7] = target))
	}, this.us = function(player, h8) {
		return h8 > this.um[player] ? (h8 = this.um[player], this.um[player] = 0) : this.um[player] -= h8, h8
	}
}

function ut() {
	this.aV = 512, this.uu = 15e8, this.uv = 1e9, this.tw = 512, this.gJ = 2, this.gb = 0, this.aU = 0, this.s4 = 0, this.hA = 0, this.s3 = 0, this.ac = 512, this.uw = 150, this.aP = !0, this.ga = !1, this.gj = 0, this.ux = 0, this.uy = !1, this
		.lp = !1, this.uz = !1, this.bz = !1, this.v0 = 0, this.aN = 0, this.v1 = !1, this.v2 = null, this.rx = null, this.v3 = 30, this.rn = 0, this.rw = 0, this.rv = 0, this.gs = function(bB, bA, bJ, bC, bD, v4) {
			this.uy = !1, this.ga = v4, this.aN = bC, this.v1 = bD, this.bz = this.aN < 7 || 9 === this.aN, this.s4 = this.aU = bJ.length, this.aP = 1 === this.s4, this.aN = 10 === this.aN && this.aP ? 7 : this.aN, this.aN = 8 === this.aN && 2 !==
				this.aU ? 7 : this.aN, this.v0 = 9 === this.aN ? 2 : this.aN + 2, this.v3 = this.aU <= 2 ? 30 : this.aU <= 50 ? 40 : 50, aH.aI && !aH.aJ.v5 ? this.uz = this.lp = !1 : this.uz = this.lp = this.bz || this.aU < 100, this.v2 = this.lp ?
				new v6 : null, 1 === mL ? this.ac = this.aU : this.aP ? this.ac = ge.v7() : this.ac = this.aV, this.hA = this.ac - this.aU, this.s3 = 0, this.gb = bA, this.rn = 0, this.rw = 0, this.rv = 0, aT.pg(bB), aa.aD(), aW.aD(bJ), jx.n9
			.nA = [], cK.aD(bJ), this.gj = 1, l2.aD(), v8(), v9.vA(), cx.aD(), rJ.aD(), vB(), cz.aD(bJ), vC.aD(), eA.aD(), du.aD(), tx.aD(), vD.g(), vE.aD(), vF(), aw.aD(bB, bJ, bC, bD), rU.aD(), rV.aD(), rQ.aD(), tJ.aD(), vG.putImageData(vH, 0, 0),
				rO.aD(), mC.aD(), ly.aD(), ra.aD(), rT.aD(), rR.aD(), rE.aD(), m5.aD(), iU.aD(), al.aD(), rS.aD(), nt.aD(), rY.aD(), rM.aD(), jK.aD(), rI.aD(), vI(), g7.aD(), nD.aD(), rK.aD(), rL.aD(), nF.aD(), rH.aD(), 8 === this.aN ? (this.rx =
					new vJ, this.rx.aD(bJ)) : this.rx = null, gh.r7(), rX.vL(), 0 === aW.jq[aM.gb] && rY.show(!1, !0), nD.lu(!0), rZ.aD(), gh.hu = !0, this.ga || this.aP && this.lp || eu.di.setState(1)
		}, this.iO = function(vM) {
			i.j.q0(), this.gj = 0, gh.r5(), eu.di.setState(0), vM || vN.vO.show(), f1.setState(0), b3.b4(5, 5)
		}, this.vP = function() {
			return this.ga ? m5.m6 || !ra.vQ : this.aP && (m5.m6 || this.lp)
		}, this.vR = function() {
			return 1 === this.gj && !this.lp
		}
}

function vS() {
	var vT, vU, ea, cS, cT, vV, vW;
	this.aD = function() {
		vT = new Array(2), vU = new Array(2), this.mD = !1, vW = vV = ui = uh = 0, ug = 1, this.resize()
	}, this.resize = function() {
		ea = (ea = Math.floor((eu.di.ev() ? .072 : .0502) * ew.ex)) < 8 ? 8 : ea;
		for (var u = 1; 0 <= u; u--) vT[u] = document.createElement("canvas"), vT[u].width = ea, vT[u].height = ea, vU[u] = vT[u].getContext("2d", {
			alpha: !0
		});
		this.lq(),
			function() {
				for (var vp = Math.floor(1 + ea / 20), u = 1; 0 <= u; u--) vU[u].clearRect(0, 0, ea, ea), vU[u].fillStyle = hk.vq, vU[u].beginPath(), vU[u].arc(ea / 2, ea / 2, ea / 2 - vp, 0, 2 * Math.PI), vU[u].fill(), vU[u].lineWidth = vp, vU[
					u].fillStyle = hk.hl, vU[u].strokeStyle = hk.hl, vU[u].beginPath(), vU[u].arc(ea / 2, ea / 2, ea / 2 - vp, 0, 2 * Math.PI), vU[u].stroke(), vr(vU[u], 0, 0, ea, vp, .3, 0 === u)
			}()
	}, this.cP = function() {
		return -uh / ug
	}, this.cQ = function() {
		return -ui / ug
	}, this.vb = function(vc, f4) {
		uh = ug * vc - f4
	}, this.vd = function(ve, f5) {
		ui = ug * ve - f5
	}, this.f3 = function(vZ, va) {
		return aM.uy || ! function(vZ, va) {
			return Math.pow(vZ - (cS + ea / 2), 2) + Math.pow(va - (cT + ea / 2), 2) < ea * ea / 4 || Math.pow(vZ - (cS + ea / 2), 2) + Math.pow(va - (cT + 2 * ea), 2) < ea * ea / 4
		}(vZ, va) || fE.fF.data[8].value ? (rX.ld() && (this.mD = !0, vV = vZ, vW = va), !1) : va < cT + 1.25 * ea ? this.hw(Math.floor(ew.ea / 2), Math.floor(ew.b6 / 2), -200) : this.hw(Math.floor(ew.ea / 2), Math.floor(ew.b6 / 2), 200)
	}, this.hv = function(vZ, va) {
		var vf, vg, eO, eQ;
		return !rX.ld() || (vf = uh, vg = ui, uh += eO = vV - vZ, ui += eQ = vW - va, nD.hv(eO, eQ), this.tK(), vV = vZ, vW = va, vf !== uh) || vg !== ui
	}, this.hw = function(hr, hs, deltaY) {
		var ef;
		if (rX.ld()) {
			if (0 < deltaY) ef = (ef = 500 / (500 + deltaY)) < .5 ? .5 : ef;
			else {
				if (!(deltaY < 0)) return !1;
				ef = 2 < (ef = (500 - deltaY) / 500) ? 2 : ef
			}
			this.vh(hr, hs, ef), gh.hu = !0
		}
		return !0
	}, this.vh = function(cS, cT, a7) {
		var iQ;
		a7 = iQ = (iQ = 1024 < (iQ = a7) * ug ? 1024 / ug : iQ) * ug < .125 ? .125 / ug : iQ, nD.zoom(a7, cS, cT),
			function(iQ, hr, hs) {
				ug *= iQ, uh = (uh + hr) * iQ - hr, ui = (ui + hs) * iQ - hs, mC.tK()
			}(a7, cS, cT)
	}, this.tK = function() {
		var ss = ew.ea / 16,
			vk = 0,
			vl = ew.b6 / 16,
			vm = 0;
		uh < -ew.ea + ss && (vk = -ew.ea + ss - uh), uh > ug * cE.cF - ss && (vk = ug * cE.cF - ss - uh), ui < -ew.b6 + vl && (vm = -ew.b6 + vl - ui), ui > ug * cE.ed - vl && (vm = ug * cE.ed - vl - ui), uh += vk, ui += vm, d0.vn(), nD.vo(vk, vm)
	}, this.lq = function() {
		cS = ew.ea - ea - dZ.gap, cT = Math.floor(ew.b6 / 2 - 1.25 * ea)
	}, this.fA = function() {
		fE.fF.data[8].value || (fB.drawImage(vT[0], cS, cT), fB.drawImage(vT[1], cS, Math.floor(cT + 3 * ea / 2)))
	}
}

function vs() {
	this.vt = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.vu = [hk
		.hl, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", hk.hl, "rgb(170,170,170)"
	], this.vv = [hk.hl, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", hk.hl, hk.hm], this.vw = [hk.hm, hk.hl, hk.hl, hk.hl, hk.hm, hk.hm, hk.hm, hk.hm, hk.hl];
	var vx = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		w1 = (this.vy = ["rgba(" + vx[0] + ",", "rgba(" + vx[1] + ",", "rgba(" + vx[2] + ",", "rgba(" + vx[3] + ",", "rgba(" + vx[4] + ",", "rgba(" + vx[5] + ",", "rgba(" + vx[6] + ",", "rgba(" + vx[7] + ",", "rgba(" + vx[8] + ",", "rgba(" + vx[9] +
				","
			], this.vz = ["rgb(" + vx[0] + ")", "rgb(" + vx[1] + ")", "rgb(" + vx[2] + ")", "rgb(" + vx[3] + ")", "rgb(" + vx[4] + ")", "rgb(" + vx[5] + ")", "rgb(" + vx[6] + ")", "rgb(" + vx[7] + ")", "rgb(" + vx[8] + ")", "rgb(" + vx[9] + ")"],
			this.aB = ["White", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black"], this.w0 = [
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
	this.cL = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.cM = new Uint8Array(aM.aV), this.r = null, this.w2 = null, this.aD = function(bJ) {
		this.cM.fill(0), this.w3(), aM.bz && (aH.aI && aH.aJ.w4 ? this.c2() : 9 === aM.aN ? this.w5() : this.a0(bJ))
	}, this.c2 = function() {
		var u, s = aM.ac;
		for (this.cL = [0, 1, 2, 3, 4, 5, 6, 7, 8], u = 0; u < s; u++) this.cM[u] = aH.aJ.w4[u]
	}, this.w3 = function() {
		for (var u = this.cL.length - 1; 0 <= u; u--) this.cL[u] = u;
		this.r = [], this.w2 = []
	}, this.w5 = function() {
		for (var u = aM.aU + aa.ab - 1; 0 <= u; u--) this.cM[u] = 1;
		for (u = aM.aU + aa.ab; u < aM.aV; u++) this.cM[u] = 2;
		this.cL[1] = 7, this.cL[2] = 8
	}, this.a0 = function(bJ) {
		var p8 = new Uint8Array(aM.aU),
			p9 = new Uint8Array(aM.aU),
			w6 = new Uint16Array(8),
			w7 = new Uint16Array(this.cL.length);
		this.w8(bJ, p8, p9, w6), this.c0(w6), aM.aP || this.w9(w7, p8, p9), this.wA(p8, p9, w7), aM.aP ? this.wB() : this.wC()
	}, this.w8 = function(bJ, p8, p9, wD) {
		for (var cN, cO, wE, s = this.cL.length - 1, cB = new Uint16Array(s), u = aM.aU - 1; 0 <= u; u--) {
			for (cN = s; 1 <= cN; cN--) cB[cN - 1] = Math.abs(4 * bJ[u].bI[0] - w1[cN][0]) + Math.abs(4 * bJ[u].bI[1] - w1[cN][1]) + Math.abs(4 * bJ[u].bI[2] - w1[cN][2]);
			for (wE = 768, cN = s - 1; 0 <= cN; cN--) cB[cO = (cN + u) % s] < wE && (wE = cB[cO], p8[u] = cO);
			for (wD[p8[u]] += 4, wE = 768, cN = s - 1; 0 <= cN; cN--) cB[cO = (cN + u) % s] < wE && cO !== p8[u] && (wE = cB[cO], p9[u] = cO);
			wD[p9[u]]++
		}
	}, this.c0 = function(wD) {
		for (var cN, wF, s = this.cL.length - 1, u = s; 0 <= u; u--) this.cL[u] = u;
		for (u = s - 1; 0 <= u; u--) wD[u]++;
		for (u = 1; u <= s; u++) {
			for (wF = 0, cN = 1; cN < s; cN++) wD[cN] > wD[wF] && (wF = cN);
			wD[wF] = 0, this.cL[u] = wF + 1
		}
	}, this.w9 = function(w7, p8, p9) {
		var u, cN, tW, cJ, cH, cO, ef, gn, wG = this.cL.length - 1,
			wH = new Uint16Array(wG),
			wI = [],
			ez = Math.max(aM.aU + 1 >> 1, 6);
		loop: for (u = 0; u < aM.aU; u++)
			if (null !== (tW = dW.lQ.wJ(aW.aY[u]))) {
				for (cN = this.r.length - 1; 0 <= cN; cN--)
					if (tW === this.r[cN] && this.w2[cN].length < ez) {
						this.w2[cN].push(u);
						continue loop
					} this.r.push(tW), wI.push(!1), this.w2.push([u])
			}
		for (cN = this.r.length - 1; 0 <= cN; cN--) {
			for (cH = -1, cJ = this.r.length - 1; 0 <= cJ; cJ--) !wI[cJ] && (-1 === cH || this.w2[cJ].length > this.w2[cH].length) && (cH = cJ);
			for (cJ = wG - 1; 0 <= cJ; cJ--) wH[cJ] = 1;
			for (cJ = this.w2[cH].length - 1; 0 <= cJ; cJ--) wH[p8[this.w2[cH][cJ]]] += 3, wH[p9[this.w2[cH][cJ]]]++;
			for (u = wG - 1; 0 <= u; u--) {
				for (cO = cH % wG, cJ = wG - 1; 0 <= cJ; cJ--) wH[cJ] > wH[cO] && (cO = cJ);
				for (ef = -1, cJ = aM.v0; 0 < cJ; cJ--)
					if (this.cL[cJ] === cO + 1) {
						ef = cJ;
						break
					} if (wH[cO] = 0, -1 !== ef) {
					for (gn = 0, cJ = aM.v0; 0 < cJ; cJ--) w7[ef] > w7[cJ] && gn++;
					if (gn !== aM.v0 - 1) {
						for (cJ = this.w2[cH].length - 1; 0 <= cJ; cJ--) w7[ef]++, this.cM[this.w2[cH][cJ]] = ef;
						break
					}
				}
			}
			wI[cH] = !0
		}
	}, this.wA = function(p8, p9, w7) {
		for (var u, uT, s = this.cL.length - 1, border = cG(aM.aU, aM.v0), wK = (0 < aM.aU % aM.v0 && border++, new Uint8Array(1 + s)), cN = s; 1 <= cN; cN--) wK[this.cL[cN]] = cN;
		for (u = 0; u < aM.aU; u++) uT = wK[p8[u] + 1], 0 === this.cM[u] && uT <= aM.v0 && w7[uT] < border && (w7[uT]++, this.cM[u] = uT);
		for (u = 0; u < aM.aU; u++) uT = wK[p9[u] + 1], 0 === this.cM[u] && uT <= aM.v0 && w7[uT] < border && (w7[uT]++, this.cM[u] = uT);
		for (cN = aM.v0; 1 <= cN; cN--)
			for (u = aM.aU - 1; 0 <= u && !(w7[cN] >= border); u--) 0 === this.cM[u] && (w7[cN]++, this.cM[u] = cN)
	}, this.wB = function() {
		var u, aE, wD = new Uint16Array(aM.v0);
		for (wD[aM.v0 - 1] = aM.aV, u = aM.v0 - 2; 0 <= u; u--) wD[u] = ge.hD[u].nq;
		for (wD[0]--, aE = 0 === wD[0] ? 1 : 0, u = aM.aU; u < aM.aV; u++) this.cM[u] = aE + 1, wD[aE]--, wD[aE] <= 0 && aE++
	}, this.wC = function() {
		for (var u = aM.aU; u < aM.aV; u++) this.cM[u] = 1 + u % aM.v0
	}
}

function wL() {
	var wM, wN, kq, kr, ks, wO, wP, wQ;

	function wT(u) {
		var aE;
		for (kq--, aE = u; aE < kq; aE++) kr[aE] = kr[aE + 1], ks[aE] = ks[aE + 1], wO[aE] = wO[aE + 1], wP[aE] = wP[aE + 1], wQ[aE] = wQ[aE + 1]
	}
	this.aD = function() {
		wM = 1, kq = 0, wN = 2 * aM.aV, kr = new Uint16Array(wN), ks = new Uint8Array(wN), wO = new Uint16Array(wN), wP = new Uint32Array(wN), wQ = new Uint32Array(wN)
	}, this.wR = function(au, position) {
		wP[au] = position
	}, this.a0 = function() {
		for (var u = kq - 1; 0 <= u; u--) 0 == ks[u]-- && (ks[u] = 2, wS.a0(u, wO[u], kr[u], wP[u], wQ[u]))
	}, this.l4 = function(player, id) {
		for (var u = kq - 1; 0 <= u; u--)
			if (player === kr[u] && id === wO[u]) return void wT(u)
	}, this.wU = function(player) {
		for (var u = kq - 1; 0 <= u; u--) player === kr[u] && (wS.wV(player, wP[u]), wT(u))
	}, this.jL = function(player, eV, wW) {
		if (wN <= kq) return 0;
		kr[kq] = player, ks[kq] = 0, wO[kq] = wM, wP[kq] = eV, wQ[kq] = wW;
		player = wM;
		return kq++, wM = 2 * wN < ++wM ? 1 : wM, player
	}, this.fA = function() {
		if (!(ug < 40 || 0 === kq)) {
			var aE, cS, cT, u, fontSize, wb, h8, eK = uh / ug,
				eM = ui / ug,
				eY = (ew.ea + uh) / ug,
				eZ = (ew.b6 + ui) / ug;
			for (dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1), aE = kq - 1; 0 <= aE; aE--) cS = cz.cP(wP[aE]), cT = cz.cQ(wP[aE]), u = kr[aE], eK - 1 < cS && cS < eY && eM - 1 < cT && cT < eZ && 0 !== aW.jq[u] && ((fontSize = Math.floor(
				.94 * ug * nD.wc(u))) < 6 || (cS = Math.floor(ew.ea * (cS + .5 - eK) / (eY - eK)), cT = Math.floor(ew.b6 * (cT + .48 - eM) / (eZ - eM)), fB.font = dW.dX.hn(1, fontSize), fB.fillStyle = hk.hm, h8 = g7.wd(u, g7.we(u, wO[
				aE])), fB.fillText(fE.fF.data[7].value ? dW.lQ.m3(h8) : aW.aX[u], cS, cT), (wb = Math.floor(.5 * fontSize)) < 6) || (fB.font = dW.dX.hn(1, wb), fB.fillText(fE.fF.data[7].value ? aW.aX[u] : dW.lQ.m3(h8), cS, cT + Math
				.floor(.82 * fontSize))))
		}
	}
}

function lM(wf, type = 0, wg = null) {
	var cO;
	this.cO = document.createElement("input"), (cO = this.cO).type = type ? "number" : "text", cO.id = "input" + wf.title, cO.value = wf.value, cO.style.width = "100%", cO.style.userSelect = "none", cO.style.outline = "none", cO.style.resize =
		"none", cO.style.border = "inherit", cO.style.font = "inherit", cO.style.color = hk.hl, cO.style.backgroundColor = hk.vq, cO.style.fontSize = "1em", cO.style.padding = "0.1em 0.2em", -1 !== wf.au && (cO.addEventListener("blur", function() {
			fE.hZ.fD(wf.au, cO.value)
		}), cO.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), fE.hZ.fD(wf.au, cO.value), wg ? wg() : cO.blur())
		}))
}

function wh() {
	vC.oF(), fB.setTransform(ug, 0, 0, ug, 0, 0), fB.imageSmoothingEnabled = ug < 3, fB.drawImage(cE.j1, mC.cP(), mC.cQ()), rQ.wi.fA(), fB.drawImage(wj, mC.cP(), mC.cQ()), vC.fA(), fB.imageSmoothingEnabled = !1, fB.setTransform(1, 0, 0, 1, 0, 0), du
		.wi.fA(), nD.fA(), rM.fA(), (aM.uy ? (rU.fA(), ra) : (al.fA(), rO.fA(), ly.fA(), ra.fA(), rT.fA(), rE.fA(), mC.fA(), iU.fA(), rU.fA(), rR.fA(), rS.fA(), m5.fA(), nt.fA(), rY.fA(), tJ.fA(), rZ)).fA(), b3.fA()
}

function wk(kA, ea, b6) {
	kA.clearRect(0, 0, ea, b6), kA.fillStyle = hk.nv, kA.fillRect(0, 0, ea, b6)
}

function wl(kA, ea, b6, wm) {
	kA.fillStyle = hk.hl, kA.fillRect(0, 0, ea, wm), kA.fillRect(0, 0, wm, b6), kA.fillRect(ea - wm, 0, wm, b6), kA.fillRect(0, b6 - wm, ea, wm)
}

function vr(kA, cS, cT, nK, wm, b7, wn) {
	kA.fillStyle = hk.hl;
	var b7 = Math.floor(nK * b7),
		ey = (b7 += (b7 - wm) % 2, Math.floor((b7 - wm) / 2)),
		nK = Math.floor((nK - b7) / 2);
	kA.fillRect(cS + nK, cT + nK + ey, b7, wm), wn && kA.fillRect(cS + nK + ey, cT + nK, wm, b7)
}

function wp() {
	this.sS = function(sO) {
		aM.aP ? jx.wq.sS(aM.gb, sO) : i.d6.wr(sO)
	}, this.jz = function(ju, jN) {
		al.ws(), aM.aP ? jx.wq.jz(aM.gb, ju, jN) : i.d6.wt(ju, jN)
	}, this.wu = function(ju, wv) {
		al.ws(), aM.aP ? jx.wq.ww(aM.gb, ju, wv) : i.d6.wx(ju, wv)
	}, this.sU = function(ju, sO) {
		aM.aP ? jx.wq.sU(aM.gb, ju, sO) : du.oO.sT(aM.gb, sO) && i.d6.wy(ju, sO)
	}, this.wz = function(x0, sO) {
		aM.aP ? jx.wq.wz(aM.gb, x0, sO) : du.oO.x1(aM.gb, x0, sO) && i.d6.x2(x0, sO)
	}, this.x3 = function(jN) {
		aM.aP ? jx.wq.x3(aM.gb, jN) : i.d6.x4(jN)
	}, this.nC = function(nB) {
		aM.aP ? jx.wq.x5(aM.gb, nB) : i.d6.x6(nB)
	}, this.x7 = function(x8) {
		aM.aP ? jx.wq.x7(aM.gb, x8) : i.d6.x9(x8)
	}, this.xA = function() {
		aM.aP ? jx.wq.xA(aM.gb) : i.d6.xB()
	}
}

function xC() {
	this.sz = function(k9, xD, xE) {
		var ea = k9.width,
			b6 = k9.height,
			cJ = dW.dX.k8(ea, b6),
			kB = dW.dX.getContext(cJ, !0),
			k9 = (kB.drawImage(k9, 0, 0), kB.getImageData(0, 0, ea, b6));
		return xD(k9.data, ea, b6, xE), kB.putImageData(k9, 0, 0), cJ
	}, this.xF = function(q7, ea, b6) {
		for (let cS = ea - 1; 0 <= cS; cS--)
			for (let cT = b6 - 1; 0 <= cT; cT--) {
				var u = 4 * (cS + cT * ea);
				q7[3 + u] = q7[u], q7[u] = q7[1 + u] = q7[2 + u] = 255
			}
	}, this.xG = function(q7, ea, b6) {
		for (let cS = ea - 1; 0 <= cS; cS--)
			for (let cT = b6 - 1; 0 <= cT; cT--) {
				var u = 4 * (cS + cT * ea);
				q7[1 + u] > q7[2 + u] + 10 && (q7[3 + u] = q7[u], q7[1 + u] = q7[2 + u])
			}
	}, this.xH = function(q7, ea, b6, xE) {
		var u, gap = Math.floor(Math.min(ea, b6) * xE);
		for (let cS = 0; cS < ea; cS++)
			for (let cT = 0; cT < b6; cT++)(cS < gap || cT < gap || cS >= ea - gap || cT >= b6 - gap) && (q7[3 + (u = 4 * (cS + cT * ea))] = 255 - 255 * (q7[1 + u] - q7[u]) / (255 - q7[u]))
	}, this.t0 = function(q7, ea, b6, xE) {
		for (let cS = ea - 1; 0 <= cS; cS--)
			for (let cT = b6 - 1; 0 <= cT; cT--) {
				var u = 4 * (cS + cT * ea);
				q7[u] = xE[0], q7[1 + u] = xE[1], q7[2 + u] = xE[2]
			}
	}, this.xI = function(q7, ea, b6, xE) {
		var u, gap = Math.floor(ea * xE);
		for (let cS = 0; cS < ea; cS++)
			for (let cT = 0; cT < b6; cT++)(cS < gap || cT < gap || cS >= ea - gap || cT >= b6 - gap) && (q7[u = 4 * (cS + cT * ea)] = q7[1 + u] = q7[2 + u] = 0)
	}, this.xJ = function(q7, ea, b6) {
		for (var cT, u, cS = ea - 1; 0 <= cS; cS--)
			for (cT = b6 - 1; 0 <= cT; cT--) 200 < q7[1 + (u = 4 * (cS + cT * ea))] && q7[1 + u] - 20 > q7[u] && q7[1 + u] - 20 > q7[2 + u] ? q7[u] + q7[2 + u] < 40 ? q7[3 + u] = 0 : (q7[3 + u] = q7[u], q7[u] = 255, q7[1 + u] = 255, q7[2 + u] =
				255) : q7[u] < 50 && q7[1 + u] < 50 && q7[2 + u] < 50 && (q7[u] + q7[1 + u] + q7[2 + u] < 50 ? q7[3 + u] = 180 : q7[3 + u] = 180 + Math.floor(75 * (q7[u] + q7[1 + u] + q7[2 + u] - 50) / 100))
	}, this.xK = function(q7, ea, b6) {
		for (var cT, u, cS = ea - 1; 0 <= cS; cS--)
			for (cT = b6 - 1; 0 <= cT; cT--) q7[1 + (u = 4 * (cS + cT * ea))] > q7[u] + 20 && q7[1 + u] > q7[2 + u] + 20 && q7[u] + q7[2] < 40 && (q7[3 + u] = 255 - q7[1 + u], q7[u] = q7[1 + u] = q7[2 + u] = q7[u])
	}, this.xL = function(q7, ea, b6, xE) {
		var aS = ea >> 1;
		for (let cS = 0; cS < ea; cS++)
			for (let cT = 0; cT < b6; cT++) Math.sqrt((cS - aS) * (cS - aS) + (cT - aS) * (cT - aS)) > xE * aS && (q7[4 * (cS + cT * ea) + 3] = 0)
	}
}

function xM() {
	var xN = [0, 0, 0, 0];

	function r0(cS, cT, nK, xZ) {
		fB.fillStyle = hk.hl;
		var et = r1(2, Math.floor((xZ ? .5 : .35) * nK)),
			ez = (et -= et % 2, r1(2, Math.floor(.1 * nK))),
			nK = (ez -= ez % 2, Math.floor((nK - et) / 2)),
			eY = Math.floor(nK + (et - ez) / 2);
		fB.fillRect(cS + nK, cT + eY, et, ez), xZ && fB.fillRect(cS + eY, cT + nK, ez, et)
	}

	function xW(cS, cT, ea, b6, xa, iQ, dq, h8, nq) {
		fB.fillStyle = xa, fB.fillRect(cS, cT, ea, b6), 0 <= h8 && function(cS, cT, ea, b6, h8) {
			fB.fillStyle = "rgba(" + 22 * h8 + "," + (110 - 22 * h8) + ",0,0.75)", fB.fillRect(cS, cT, (1 + h8) * ea / 6, b6)
		}(cS, cT, ea, b6, h8), 0 < nq && function(cS, cT, ea, b6, nq) {
			fB.fillStyle = "rgba(255,255,255,0.3)", fB.fillRect(cS, cT, nq * ea / aM.aV, b6)
		}(cS, cT, ea, b6, nq), fB.strokeStyle = hk.hl, fB.strokeRect(cS, cT, ea, b6), 0 !== iQ && (fB.fillStyle = hk.hl, fB.font = dW.dX.hn(1, iQ * b6), fB.fillText(dq, Math.floor(cS + ea / 2), Math.floor(cT + .52 * b6)))
	}
	this.hD = [{
		cH: 0,
		nq: 512
	}], this.aD = function() {
		xO.f0 = !1, f1.setState(2), this.resize(), gh.hu = !0
	}, this.iN = function() {}, this.resize = function() {
		xN[2] = Math.floor((eu.di.ev() ? .49 : .4) * ew.ex), xN[1] = Math.floor((ew.b6 - xN[2] / 6 - this.hD.length * (dZ.gap + xN[2] / 10)) / 2), xN[0] = Math.floor((ew.ea - xN[2]) / 2), xO.f0 && xO.resize()
	}, this.gp = function(bC) {
		var u;
		if (6 < bC) this.hD = [{
			cH: 0,
			nq: 512
		}];
		else {
			for (this.hD = [], u = 0; u < bC + 2; u++) this.hD.push({
				cH: 0,
				nq: 0
			});
			this.xP()
		}
		i.j.gr = 0
	}, this.gq = function(bN, bO) {
		for (var s = bN.length, u = 0; u < s; u++) this.hD[u].cH = bN[u], this.hD[u].nq = bO[u]
	}, this.gf = function(gn) {
		var u, s;
		if (1 === gn.bJ.length)
			for (s = this.hD.length, gn.bN = new Array(s), gn.bO = new Array(s), u = 0; u < s; u++) gn.bN[u] = this.hD[u].cH, gn.bO[u] = this.hD[u].nq
	}, this.xQ = function() {
		gh.hu = !0, xO.f0 ? xO.f0 = !1 : (this.iN(), f1.setState(0), b3.b4(5, 5))
	}, this.v7 = function() {
		var u, nq;
		if (aH.aI) return aH.aJ.xR;
		for (nq = 0, u = this.hD.length - 1; 0 <= u; u--) nq += this.hD[u].nq;
		return nq
	}, this.hv = function(cS, cT) {
		return !(!xO.f0 || !xO.hv(cS, cT)) || -1 !== this.ht(cS, cT)
	}, this.xS = function() {
		var aE;
		i.j.gr = 0, f1.go(), aH.aI ? aH.xT() : (aE = (aE = this.hD.length - 2) < 0 ? 7 : aE, aM.gs(Math.floor(16384 * Math.random()), 0, [{
			name: fE.fF.data[122].value,
			bI: dW.color.xU(fE.j.kn()),
			bH: 0
		}], aE, !1, !1))
	}, this.f3 = function(cS, cT) {
		if (xO.f0 && !aH.aI) return xO.f3(cS, cT);
		var u, aE, max, et, cT = this.ht(cS, cT);
		if (-1 === cT) return !1;
		if (0 === cT) this.xQ();
		else if (1 === cT) aH.aI ? (aH.j0(), gh.hu = !0) : xO.show();
		else if (100 === cT) io.ik();
		else if (2 === cT) this.iN(), this.xS();
		else {
			if (aH.aI) return !1;
			if (27 === cT) this.hD.length < 8 && (this.hD.push({
				cH: 0,
				nq: aM.aV
			}), this.xP(), this.resize(), gh.hu = !0);
			else if (u = Math.floor((cT - 3) / 3), cT % 3 == 0) 1 < this.hD.length && (this.hD.splice(u, 1), this.resize(), gh.hu = !0);
			else if (et = (xN[2] - xN[2] / 10 - 2 * dZ.gap) / 2, cT % 3 == 1) 0 === u && 1 === this.hD[u].nq || (cS < xN[0] + xN[2] - 1.5 * et - dZ.gap ? this.hD[u].cH-- : this.hD[u].cH++, this.hD[u].cH < 0 ? this.hD[u].cH = 5 : 5 < this.hD[u]
				.cH && (this.hD[u].cH = 0), gh.hu = !0);
			else {
				for (gh.hu = !0, cT = (cS - (xN[0] + xN[2] - et)) / et - .5, cT *= cT < 0 ? -cT : cT, cT = 0 === (cT = Math.floor(cT * aM.aV)) ? 1 : cT, max = aM.aV, aE = this.hD.length - 1; 0 <= aE; aE--) u !== aE && (max -= this.hD[aE].nq);
				if (cT < 0) {
					if (1 === this.hD[u].nq) return this.hD[u].nq = max, !0
				} else if (this.hD[u].nq === max) return this.hD[u].nq = 1, !0;
				this.hD[u].nq += cT, this.hD[u].nq < 1 ? this.hD[u].nq = 1 : this.hD[u].nq > max && (this.hD[u].nq = max)
			}
		}
		return !0
	}, this.xP = function() {
		for (var nq = Math.floor(aM.aV / this.hD.length), xV = aM.aV % this.hD.length, u = this.hD.length - 1; 0 <= u; u--) this.hD[u].nq = nq;
		this.hD[0].nq += xV
	}, this.ht = function(cS, cT) {
		var et = (xN[2] - 3 * dZ.gap) / 4,
			ez = xN[2] / 6;
		if (cS < xN[0] || cT < xN[1] || xN[0] + xN[2] <= cS) return -1;
		if (cT < xN[1] + ez) return cS < xN[0] + et ? 0 : cS < xN[0] + et + dZ.gap ? -1 : cS < xN[0] + 2 * et + dZ.gap ? 100 : cS < xN[0] + 2 * (et + dZ.gap) ? -1 : cS < xN[0] + 3 * et + 2 * dZ.gap ? 1 : cS < xN[0] + 3 * (et + dZ.gap) ? -1 : 2;
		for (var eM, tQ = xN[2] / 10, et = (xN[2] - tQ - 2 * dZ.gap) / 2, u = 0; u < this.hD.length; u++) {
			if (cT < (eM = xN[1] + ez + dZ.gap + u * (tQ + dZ.gap))) return -1;
			if (!(eM + tQ < cT)) return cS < xN[0] + tQ ? 3 + 3 * u : cS < xN[0] + tQ + dZ.gap ? -1 : cS < xN[0] + xN[2] - et - dZ.gap ? 4 + 3 * u : cS < xN[0] + xN[2] - et ? -1 : 5 + 3 * u
		}
		return !(this.hD.length < 8) || cT < (eM = xN[1] + ez + dZ.gap + this.hD.length * (tQ + dZ.gap)) || eM + tQ < cT || xN[0] + tQ < cS ? -1 : 27
	}, this.fA = function() {
		fB.lineWidth = dZ.hh, dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1);
		var et = (xN[2] - 3 * dZ.gap) / 4,
			ez = xN[2] / 6;
		if (xW(xN[0], xN[1], et, ez, "rgba(128,0,0,0.75)", .34, "Back", -1, -1), xW(xN[0] + et + dZ.gap, xN[1], et, ez, "rgba(128,0,128,0.75)", .31, "Custom", -1, -1), xW(xN[0] + 2 * (et + dZ.gap), xN[1], et, ez, "rgba(" + (aH.aI ? 128 : 0) +
				",128,128,0.75)", .34, aH.aI ? "Reset" : "Maps", -1, -1), xW(xN[0] + xN[2] - et, xN[1], et, ez, "rgba(0,128,0,0.75)", .34, "Start", -1, -1), !aH.aI) {
			for (var eM, tQ = xN[2] / 10, et = (xN[2] - tQ - 2 * dZ.gap) / 2, u = 0; u < this.hD.length; u++) eM = xN[1] + ez + dZ.gap + u * (tQ + dZ.gap), xW(xN[0], eM, tQ, tQ, 1 < this.hD.length ? "rgba(128,0,0,0.75)" : "rgba(90,90,90,0.75)",
				0, null, -1), 1 < this.hD.length && r0(xN[0], eM, tQ, !1), xW(xN[0] + tQ + dZ.gap, eM, et, tQ, hk.nv, .4, this.xX(u), this.hD[u].cH, -1), xW(xN[0] + xN[2] - et, eM, et, tQ, hk.nv, .4, this.xY(u), -1, this.hD[u].nq);
			this.hD.length < 8 && (eM = xN[1] + ez + dZ.gap + this.hD.length * (tQ + dZ.gap), xW(xN[0], eM, tQ, tQ, "rgba(0,128,20,0.75)", 0, null, -1, -1), r0(xN[0], eM, tQ, !0)), xO.f0 && xO.fA()
		}
	}, this.xX = function(u) {
		return 0 === u && 1 === this.hD[u].nq ? "You" : tx.h3[this.hD[u].cH]
	}, this.xY = function(u) {
		return 1 === this.hD[u].nq ? "1 Player" : this.hD[u].nq + " Players"
	}
}

function dF() {
	this.xd = function() {
		var s = aM.aU,
			xe = ro.result.xe,
			xf = xe.length,
			xh = (f.g(40 + 16 * s + xf * (33 + 3 * (aM.aN < 7))), f.h(1, 1), f.h(4, 10), f.h(10, xf), f.h(1, +(2 === aM.rn)), f.h(24, ro.result.xg), aW.xh);
		for (let u = 0; u < s; u++) f.h(16, xh[u]);
		var gC = aW.gC;
		for (let u = 0; u < xf; u++) {
			var b7 = xe[u];
			f.h(9, b7), f.h(24, gC[b7])
		}
		if (aM.aN < 7) {
			var cM = cK.cM;
			for (let u = 0; u < xf; u++) f.h(3, 7 & cM[xe[u]])
		}
		i.j.send(i.j.gr, f.k)
	}
}

function xi() {
	this.aD = function() {
		! function() {
			var data = fE.fF.data;
			0 === data[2].dd && (ew.b6 > ew.ea || 0 !== eu.id) && (data[2].value = data[2].fM = 1);
			0 === data[100].dd && (data[100].value = data[100].fM = (0 === eu.id ? "Player " : 1 === eu.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()));
			data[0].value = data[0].fM = fI.xl()
		}();
		var u, a8, data = fE.fF.data,
			s = data.length;
		for (u = 0; u < s; u++) data[u] && data[u].dd === fE.i0.xm(u, !0) && (a8 = fE.i0.it(u), data[u].value = null === a8 ? data[u].fM : 2 === data[u].type ? a8 : Number(a8));
		fE.fF.data[10].value = fE.fF.data[10].fM
	}
}

function b5(title, dT, xn = !1, oS = [new hV("❌ " + fI.dq[92], function() {
	b3.i8()
}, hk.i9)]) {
	let hN, xo;
	this.show = function() {
		hN.show(), this.resize()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), xo.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU(title, oS), xo = new dR(hN.l9, dT), xn && dW.dX.textAlign(hN.l9.style, 1)
}

function xp() {
	var xq, xr, xs, xt, xu, xv;
	this.aD = function() {
		xs = xq = 10, xt = xr = 10
	}, this.xw = function() {
		xv = 512, xu = new Uint16Array(xv);
		for (var u = 0; u < xv; u++) xu[u] = 100 + xx(cG(25600 * u, xv - 4), 9)
	}, this.xy = function() {
		return xt
	}, this.a0 = function() {
		if (--xs <= 0 && (xs = xq, function() {
				var u, y5, mJ = aW.dt[aM.gb];
				for (aM.aP && !aM.bz && 0 !== aW.jq[0] && 0 === ge.hD[0].cH && (aW.dt[0] += cG(aW.gC[0], 6)), u = uq - 1; 0 <= u; u--) y5 = cG(rJ.ur(uo[u]) * aW.dt[uo[u]], 1e4), aW.dt[uo[u]] += y5 < 1 ? 1 : y5, rJ.y7(uo[u]);
				l2.l3[9] += aW.dt[aM.gb] - mJ
			}(), --xt <= 0)) {
			xt = xr;
			for (var mJ = aW.dt[aM.gb], u = uq - 1; 0 <= u; u--) aW.dt[uo[u]] += aW.gC[uo[u]], rJ.y7(uo[u]);
			l2.l3[8] += aW.dt[aM.gb] - mJ
		}
	}, this.ur = function(player) {
		var aS = xu[cG((xv - 1) * aW.gC[player], aM.ux)],
			y2 = (gh.gi() < 1920 && (aS = aS < (y2 = cG(100 * (13440 - 6 * gh.gi()), 1920)) ? y2 : aS), this.y4(player));
		return aW.dt[player] > y2 && (aS -= cG(2 * aS * (aW.dt[player] - y2), y2)), aS < 0 ? 0 : 700 < aS ? 700 : aS
	}, this.y4 = function(player) {
		player = 100 * aW.gC[player];
		return player > aM.uv ? aM.uv : player
	}, this.y7 = function(player) {
		var a8 = aW.gC[player] * aM.uw;
		aW.dt[player] = Math.min(Math.min(aW.dt[player], aM.uu), a8)
	}, this.wu = function(player, wv) {
		dW.dz.ok(wv, cC.jJ[0]), l2.y8(player, wv), nD.y9(player, cC.jJ[0] + cC.jJ[1]), nD.yA(wv, cC.jJ[0]), dW.dz.e4(player)
	}, this.yB = function() {
		var s = uq,
			bJ = uo;
		let aZ = 0;
		var up = aW.dt;
		for (let u = 0; u < s; u++) aZ += up[bJ[u]];
		return aZ
	}, this.yC = function(yD) {
		var s = uq,
			bJ = uo;
		let aZ = 0;
		var b7, up = aW.dt,
			cM = cK.cM;
		for (let u = 0; u < s; u++) cM[b7 = bJ[u]] === yD && (aZ += up[b7]);
		return aZ
	}
}

function yE(player) {
	yF(player), yG(player), yH(player), jK.l4(player), rM.wU(player), g7.clear(player), du.oe.yI(player)
}

function yF(player) {
	cz.cY(player) && (aW.xh[player] = u6.yJ.yK(), aM.s3++);
	var yL = g7.yM(player);
	0 === yL.length ? player === aM.gb && yN() : (yO(player, yL), yP(player, yL))
}

function yN() {
	l2.l3[17] += aW.dt[aM.gb] + g7.yQ(aM.gb), rY.show(!1, !1, !1, !0), rE.yR()
}

function yO(player, yL) {
	for (var u = yL.length - 1; 0 <= u; u--) g7.yS(yL[u], player)
}

function yT(yL) {
	for (var au = 0, u = yL.length - 1; 1 <= u; u--) aW.gC[yL[u]] > aW.gC[yL[au]] && (au = u);
	return au
}

function yP(player, yL) {
	var u, qr, yU = yL[yT(yL)];
	if (9 === aM.aN && 1 === cK.cM[player] && aT.yV(8) && aa.yW(yU), player === aM.gb) 2 !== aW.cZ[player] && al.rq(yU, 1), yN();
	else {
		for (qr = !1, u = yL.length - 1; 0 <= u; u--)
			if (yL[u] === aM.gb) return qr = !0, void al.rq(player, 0);
		!qr && player < aM.aU && 2 !== aW.cZ[player] && al.yX(0, player, yU)
	}
}

function yH(player) {
	aW.jq[player] = aW.dt[player] = 0, aW.g1[player] = null, aW.fz[player] = null, aW.ds[player] = null, aW.g3[player] = null, rL.yY(player)
}

function yG(player) {
	for (var b7, cT, cS = aW.eP[player]; cS >= aW.eL[player]; cS--)
		for (cT = aW.eR[player]; cT >= aW.eN[player]; cT--) b7 = 4 * (cT * cE.cF + cS), cz.cc(player, b7) && (cz.co(b7), aW.gC[player]--)
}

function r9() {
	var au = 0,
		ig = gh.ig;
	this.rC = 0, this.a0 = function() {
		ew.a0(), aM.lp ? rc() : 0 === au ? gh.ig >= ig && (ig += gh.r3 * Math.floor(1 + (gh.ig - ig) / gh.r3), 2 === aM.gj || m5.m6 ? rD() : (rG(), cx.yZ()), au++) : ((m5.m6 ? rc : (gh.hu = !0, rb))(), au = 0), rW(), gh.hu && (gh.hu = !1, wh())
	}
}

function ya() {
	var f0, yb, ea, b6, ez, yc, yd, ib, k9, ic, ye;

	function cQ() {
		return Math.floor((ew.ea - ea) / 2) < ly.b6 + 2 * dZ.gap ? ew.b6 - b6 - 4 * dZ.gap - ly.b6 : ew.b6 - b6 - 2 * dZ.gap
	}
	this.yf = -1, this.aD = function() {
		ye = f0 = !1, ez = .61, yc = .07, yd = .09, ic = ib = b6 = 0, this.yf = -1
	}, this.resize = function() {
		var kA, eK, cJ, yk, yl, ym;
		f0 && (ea = tR(ea = eu.di.ev() ? Math.floor(.69 * ew.ex) : Math.floor(.5 * ew.ex), r1(ew.ea - 2 * dZ.gap, 10)), ea = tR(ea, Math.floor(3.57 * r1(ew.b6 - 2 * dZ.gap, 3))), b6 = Math.floor(.28 * ea), (k9 = document.createElement("canvas"))
			.width = ea, k9.height = b6, kA = k9.getContext("2d", {
				alpha: !0
			}), eK = Math.floor(1 + b6 / 40), kA.clearRect(0, 0, ea, b6), kA.fillStyle = hk.nv, kA.fillRect(eK, eK, ea - 2 * eK, b6 - 2 * eK), kA.lineJoin = "bevel", kA.lineWidth = 2 * eK, kA.strokeStyle = hk.hl, kA.strokeRect(eK, eK, ea -
				2 * eK, b6 - 2 * eK), kA.imageSmoothingEnabled = !1, cJ = er.get(yb), yk = cJ.width, yl = cJ.height, ym = (1 === yb ? .85 : 21 === yb ? .666 : .9) * ez * b6 / yl, kA.setTransform(ym, 0, 0, ym, Math.floor((ea - ym * yk) / 2),
				Math.floor((b6 - ym * yl) / 2)), kA.drawImage(cJ, 0, 0), kA.setTransform(1, 0, 0, 1, Math.floor(ea - yd * b6 - yc * b6 - eK), Math.floor(eK + yc * b6)),
			function(kA, s) {
				kA.lineWidth = Math.floor(1 + b6 / 80), kA.strokeStyle = hk.hl, kA.beginPath(), kA.moveTo(0, 0), kA.lineTo(s, s), kA.moveTo(0, s), kA.lineTo(s, 0), kA.stroke()
			}(kA, Math.floor(yd * b6)), kA.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(a8, yh, yi, yj) {
		f0 || yj && ye || (yb = yi ? 21 : a8 ? 1 : 2, f0 = ye = !0, this.resize(), nt.hY(), ly.m9(), ic = gh.ig, -1 === this.yf && (this.yf = gh.gi()), ib = yh ? 1 : 0)
	}, this.a0 = function() {
		!f0 || 1 <= ib || (ib = 1 < (ib += 5e-4 * (gh.ig - ic)) ? 1 : ib, ic = gh.ig, gh.hu = !0)
	}, this.f3 = function(cS, cT) {
		return !(!f0 || ib <= 0 || (cS -= Math.floor((ew.ea - ea) / 2), cT -= cQ(), cS < 0) || cT < 0 || ea < cS || b6 < cT || (ea - b6 / 3 < cS && cT < b6 / 3 && (f0 = !1, gh.hu = !0), 0))
	}, this.fA = function() {
		!f0 || ib <= 0 || (fB.globalAlpha = ib, fB.drawImage(k9, Math.floor((ew.ea - ea) / 2), cQ()), fB.globalAlpha = 1)
	}
}

function v8() {
	(wj = void 0 === wj ? document.createElement("canvas") : wj).width = cE.cF, wj.height = cE.ed, vG = wj.getContext("2d", {
		alpha: !0
	}), vH = vG.getImageData(0, 0, cE.cF, cE.ed), cb = vH.data, dW.fV.p6(cb)
}

function yo() {
	function yx() {}
	this.aD = function() {}, this.yw = function() {
		return !!yx() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		yx() && aipAPItag.showCMPScreen()
	}
}

function lb(wf, title = fI.dq[121], i0 = function() {}) {
	function click() {
		var value = 1 - wf.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, fE.hZ.fD(wf.au, value), i0(value)
	}
	var cO;
	this.cO = document.createElement("p"), (cO = this.cO).textContent = (wf.value ? "🟢 " : "⚪ ") + title, cO.style.margin = "0", cO.style.marginBottom = "0.5em", cO.style.cursor = "pointer", cO.addEventListener("click", click)
}

function yy() {
	this.aY = new Array(aM.aV), this.aX = new Array(aM.aV), this.cZ = new Uint8Array(aM.aV), this.jq = new Uint8Array(aM.aV), this.eL = new Uint16Array(aM.aV), this.eN = new Uint16Array(aM.aV), this.eP = new Uint16Array(aM.aV), this.eR =
		new Uint16Array(aM.aV), this.gC = new Uint32Array(aM.aV), this.tv = new Uint32Array(aM.aV), this.dt = new Uint32Array(aM.aV), this.g1 = null, this.fz = null, this.ds = null, this.g3 = null, this.yz = new Uint16Array(aM.aV), this.jD =
		new Uint16Array(aM.aV), this.jE = new Uint16Array(aM.aV), this.xh = new Uint16Array(aM.aV), this.z0 = new Uint8Array(aM.aV), this.aD = function(bJ) {
			for (let u = bJ.length - 1; 0 <= u; u--) this.aX[u] = this.aY[u] = bJ[u].name, this.cZ[u] = bJ[u].bH;
			this.jq.fill(0), this.eL.fill(0), this.eN.fill(0), this.eP.fill(0), this.eR.fill(0), this.gC.fill(0), this.tv.fill(0), this.dt.fill(0), donationsTracker.reset(), leaderboardFilter.reset(), this.g1 = new Array(aM.aV), this.fz = new Array(
				aM.aV), this.ds = new Array(aM.aV), this.g3 = new Array(aM.aV), this.yz.fill(0), this.jD.fill(0), this.jE.fill(0), this.xh.fill(0), this.z0.fill(0)
		}
}

function z1() {
	this.dp = ["n", "en", "r"], this.dq = ["Akzeptieren", "Du hast {0} ausgelöscht.", "Du wurdest von {0} ausgelöscht.", "Herzlichen Glückwunsch! Du hast das Spiel gewonnen.", "{0} hat das Spiel gewonnen.", "{0} hat den Nichtangriffspakt gebrochen.",
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

function z2() {
	var z3 = new Uint8Array(78);
	this.aD = function() {
		var u;
		for (z3[50] = 37, u = 0; u < 10; u++) z3[u + 3] = u + 1;
		for (u = 0; u < 26; u++) z3[u + 20] = u + 11, z3[u + 52] = u + 38
	}, this.ak = function(af) {
		return af.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "_")
	}, this.z4 = function(af, size) {
		if ((af = this.ak(af)).length > size) return af.substring(0, size);
		for (; af.length < size;) af += "_";
		return af
	}, this.aj = function(af) {
		for (var z5 = z3, s = af.length, cB = new Uint8Array(s), u = 0; u < s; u++) cB[u] = z5[af.charCodeAt(u) - 45];
		return cB
	}, this.ai = function(z6) {
		f.g(6 * z6.length), this.z7(z6), at.aD(f.k)
	}, this.z7 = function(z6) {
		var s = z6.length,
			ea = f;
		for (let u = 0; u < s; u++) ea.h(6, z6[u])
	}, this.x = function(af) {
		this.z7(this.aj(af))
	}, this.o5 = function(af, size) {
		this.z7(this.aj(this.z4(af, size)))
	}
}

function z8() {
	this.dq = null;
	var z9, zA = new zB;
	this.aD = function() {
		z9 = 1 === fE.fF.data[0].value ? new zC : 2 === fE.fF.data[0].value ? new k3 : 3 === fE.fF.data[0].value ? new dn : 4 === fE.fF.data[0].value ? new z1 : 5 === fE.fF.data[0].value ? new zD : zA;
		var u, s = zA.dq.length,
			aZ = z9.dq.length;
		for (u = 0; u < s; u++) aZ === u ? (z9.dq.push(zA.dq[u]), aZ++) : 0 === z9.dq[u].length && (z9.dq[u] = zA.dq[u]);
		this.dq = z9.dq, fE.fF.translate()
	}, this.xl = function() {
		return navigator.language.startsWith("en") ? 0 : navigator.language.startsWith("ru") ? 1 : navigator.language.startsWith("tr") ? 2 : navigator.language.startsWith("es") ? 3 : navigator.language.startsWith("de") ? 4 : navigator.language
			.startsWith("pl") ? 5 : 0
	}, this.i5 = function(cJ) {
		for (var eD, s = this.dq.length, u = 0; u < s; u++)
			if (this.dq[u].startsWith("{") && (eD = this.dq[u].replace("{" + cJ + "}", "")).length < this.dq[u].length) return eD;
		return cJ
	}, this.i4 = function(au, zF, ki) {
		var u, cN, s, af;
		if (!zF) return this.dq[au];
		for (s = zF.length, af = this.dq[au], u = 0; u < s; u++)
			if (Number.isInteger(zF[u]))
				for (cN = z9.dp.length - 1; 0 <= cN; cN--) af = af.replace("{" + (20 * (cN + 1) + u) + "}", (2 === cN ? 1 !== zF[u] : 1 === zF[u]) ? "" : z9.dp[cN]);
		if (ki) {
			if (ki.xY)
				for (u = 0; u < ki.xY.length; u++) zF[ki.xY[u]] = dW.lQ.m3(zF[ki.xY[u]]);
			if (ki.zG)
				for (u = 0; u < ki.zG.length; u++) zF[ki.zG[u]] = dW.lQ.m4(100 * zF[ki.zG[u]], 1)
		}
		for (u = 0; u < s; u++) af = af.replace("{" + u + "}", zF[u]);
		return af
	}
}

function zH() {
	var ea, b6, zI;

	function zY(zZ, cH, zW, zL, q7) {
		cH = zX(zZ, cH + 1 + 2 * zL & 3);
		! function(zZ, za) {
			return 1 < Math.abs(zZ % ea - za % ea) || 1 < Math.abs(zc(zZ) - zc(za))
		}(zZ, cH) && 0 === q7[cH << 2] && (q7[cH << 2] = zW)
	}

	function zc(b7) {
		return Math.floor((b7 + .5) / ea) % b6
	}

	function zX(b7, cH) {
		return b7 + zI[cH]
	}
	this.ae = function(af) {
		var u, bP, s, zJ, qL = at;
		for (ag.ah.ai(ag.ah.aj(af)), cE.cF = ea = qL.az(12), cE.ed = b6 = qL.az(12), zI = [-ea, -1, ea, 1], cE.j1 = document.createElement("canvas"), cE.j1.width = cE.cF, cE.j1.height = cE.ed, cE.j2 = cE.j1.getContext("2d", {
				alpha: !1
			}), cE.zP = cE.j2.getImageData(0, 0, cE.cF, cE.ed), cE.j3 = cE.zP.data, dW.fV.p6(cE.j3), s = qL.az(12), bP = qL.az(5), zJ = zM(ea * b6 - 1), u = 0; u < s; u++) ! function(aZ, b7, zK, zL) {
			var u, cH, qL = at,
				q7 = cE.j3,
				zS = b7,
				zT = b7,
				zU = 0,
				zV = 1 + zK,
				zW = 2 - zK;
			for (q7[b7 << 2] = zV, u = 0; u < aZ; u++) cH = qL.az(2), b7 = zX(b7, cH), q7[b7 << 2] === zV ? zU % 2 == 1 && zY(zT, zU + 2 * zL + 3, zW, zL, q7) : q7[b7 << 2] = zV, zY(b7, cH, zW, zL, q7), zY(zT, cH, zW, zL, q7), zT = b7, zU =
				cH;
			zX(b7, 0) === zS ? (zY(b7, 0, zW, zL, q7), zY(zS, 0, zW, zL, q7)) : zX(b7, 1) === zS && (zY(b7, 0, zW, zL, q7), zY(zS, 2, zW, zL, q7));
			0 === aZ && (zY(zS, 0, zW, zL, q7), zY(zS, 2, zW, zL, q7))
		}(qL.az(bP), qL.az(zJ), 1 === qL.az(1), 1 === qL.az(1));
		var cS, cT, nw, zd, ze, zf, q7 = cE.j3,
			zg = !0,
			oz = cE.aJ.iu[cE.gc].oz,
			p0 = cE.aJ.iu[cE.gc].p0;
		for (cT = 0; cT < b6; cT++)
			for (zd = !0, ze = zg, cS = zf = 0; cS < ea; cS++) nw = 4 * cT * ea + 4 * cS, zf <= cS && 0 < q7[nw] && (ze = 2 === q7[nw], zd) && (zd = !1, ze !== zg) ? (zg = ze, zf = cS + 1, cS = -1) : (ze ? (q7[nw] = p0[0], q7[1 + nw] = p0[1], q7[
				2 + nw] = p0[2]) : (q7[nw] = oz[0], q7[1 + nw] = oz[1], q7[2 + nw] = oz[2]), q7[3 + nw] = 255);
		cE.j2.putImageData(cE.zP, 0, 0), cE.zQ = !0, cE.zR.aD(), gh.hu = !0
	}
}

function zh() {
	this.i0 = new zi, this.fF = new zj, this.hZ = new fC, this.j = new kd, this.aD = function() {
		this.fF.aD(), (new xi).aD()
	}
}

function zk() {
	this.nc = function(zl, au, zm) {
		var nK = zl.height,
			ej = dW.dX.k8(nK, nK),
			kB = dW.dX.getContext(ej);
		return function(ea, kB, zm) {
			kB.fillStyle = zm, kB.beginPath(), kB.arc(ea / 2, ea / 2, .47 * ea, 0, 2 * Math.PI), kB.fill()
		}(nK, kB, zm), kB.drawImage(zl, -au * nK, 0), ej
	}, this.zo = function(zp) {
		var nK = zp.height,
			kB = dW.dX.getContext(zp, !0),
			iy = kB.getImageData(0, 0, nK, nK);
		return dW.sy.xL(iy.data, nK, nK, .9), kB.putImageData(iy, 0, 0), zp
	}
}

function zq() {
	this.fA = function() {
		if (0 !== rQ.j.zr && (fB.globalAlpha = Math.min(rQ.j.zr / 580, 1), fB.drawImage(rQ.j.zu, 1 + mC.cP(), 1 + mC.cQ()), fB.globalAlpha = 1, aM.lp)) {
			var eK = uh / ug,
				eM = ui / ug,
				eY = (ew.ea + uh) / ug,
				eZ = (ew.b6 + ui) / ug,
				eD = rQ.j.zv * ug,
				zw = rQ.j.zw;
			for (let u = aM.aU - 1; 0 <= u; u--) ! function(u, eD, eK, eM, eY, eZ, zw) {
				0 === aW.jq[u] || 0 === aW.gC[u] || (eY = ew.ea * ((aW.eL[u] + aW.eP[u] + 1) / 2 - eK) / (eY - eK) - .5 * eD, eK = ew.b6 * ((aW.eN[u] + aW.eR[u] + 1) / 2 - eM) / (eZ - eM) - .5 * eD, eY > ew.ea) || eK > ew.b6 || eY < -eD ||
					eK < -eD || (fB.setTransform(ug, 0, 0, ug, eY, eK), fB.drawImage(zw[aM.bz ? cK.cM[u] : 1], 0, 0))
			}(u, eD, eK, eM, eY, eZ, zw);
			fB.setTransform(ug, 0, 0, ug, 0, 0)
		}
	}
}

function hV(title, zy, backgroundColor = hk.m0, zz = !0) {
	let a00 = document.createElement("button");
	this.button = a00, this.i0 = zy;
	let a01;

	function a02() {
		if (zz) {
			var wH = dW.color.a05(a01);
			if (0 < wH[0] && wH[0] < 255 && wH[0] === wH[1] && wH[0] === wH[2]) return
		}
		this.style.backgroundColor = dW.color.a02(a01, 50)
	}

	function a04() {
		this.style.backgroundColor = a01
	}

	function a03() {
		this.style.backgroundColor = a01, this.blur()
	}
	var self;
	this.sn = function(cJ) {
			a01 = cJ, a00.style.backgroundColor = cJ
		}, self = this, a00.innerHTML = title, a00.style.color = hk.hl, a00.style.userSelect = "none", a00.style.outline = "none", a00.style.overflowWrap = "break-word", self.sn(backgroundColor), a00.style.border = "none", a00.style.font = "inherit",
		a00.style.fontSize = "1em", a00.style.padding = "0em 0.3em", a00.onclick = zy, a00.addEventListener("mouseover", a02), a00.addEventListener("mouseout", a03), a00.addEventListener("focus", a02), a00.addEventListener("blur", a04)
}

function d5() {
	this.aI = !1, this.a0 = function() {
		gh.gi() % 250 != 249 || aM.ga || (i.dA.a06(+(this.aI && 0 < aW.jq[aM.gb]), uq + du.j.dv), this.aI = !1)
	}
}

function iZ(id, xE) {
	let hN, xo;

	function a0A() {
		xo.dV.innerHTML += "<br>New Connection..."
	}
	this.a08 = !0, this.show = function() {
		hN.show(), this.resize(), 15 === id ? i.j.mx(0, id) ? this.a09() : a0A() : 16 === id ? i.j.mx(0, id) ? i.dA.u9(2) : a0A() : 17 === id ? i.j.mx(0, id) ? i.dA.u9(3) : a0A() : 18 === id ? (i.j.close(0, 3253), i.j.mx(0, id), a0A()) : 20 ===
			id ? i.j.mx(0, id) ? i.dC.o4(xE) : a0A() : 21 === id ? i.j.mx(0, id) ? i.dG.b(xE.c, xE.d, xE.e) : a0A() : 22 === id ? i.j.mx(0, id) ? i.dG.l(xE.c, xE.m, xE.n) : a0A() : 23 === id ? i.j.mx(0, id) ? i.dG.p(xE.q, xE.r) : a0A() : 24 ===
			id && (i.j.mx(0, id) ? i.dG.y(xE.q, xE.d, xE.e) : a0A())
	}, this.uD = function() {
		15 === id ? this.a09() : 16 === id ? i.dA.u9(2) : 17 === id ? i.dA.u9(3) : 18 === id ? b3.b4(8, this.po, new iZ(16)) : 20 === id ? i.dC.o4(xE) : 21 === id ? i.dG.b(xE.c, xE.d, xE.e) : 22 === id ? i.dG.l(xE.c, xE.m, xE.n) : 23 === id ? i
			.dG.p(xE.q, xE.r) : 24 === id && i.dG.y(xE.q, xE.d, xE.e)
	}, this.tS = function(code, t8 = !1, data) {
		if (t8 || code === id)
			if (15 === code) b3.b4(7, this.po);
			else if (16 === code) b3.b4(7, this.po);
		else if (17 === code)
			if (i.j.close(0, 3252), fE.j.kj(0), 0 < fE.fF.data[117].ki.length) {
				let data = fE.j.kk(0);
				fE.hZ.fD(105, data.kl), fE.hZ.fD(106, data.password), b3.b4(8, this.po, new iZ(16))
			} else fE.hZ.fD(105, ""), b3.j.hW();
		else 20 === code ? b3.b4(7, this.po) : 21 === code ? b3.b4(10, 0, new oQ(data)) : 23 === code && b3.b4(13, 0, new a0B({
			data: data,
			a0C: xE.a0C,
			q: xE.q,
			ig: new Date
		}))
	}, this.a09 = function() {
		f.g(48), f.h(24, Math.floor(eS.pow(24) * Math.random())), f.h(24, Math.floor(eS.pow(24) * Math.random())), at.aD(f.k), fE.hZ.fD(110, v.ah.a0D(v.ah.a0E(8))), i.dC.o3()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), xo.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU("⏳ Connecting...", [new hV("❌ " + fI.dq[92], function() {
		b3.j.hW()
	})]), xo = new dR(hN.l9, "Find Server...")
}

function a0F() {
	var eK, eM, eY, eZ, a0G = 0,
		a0H = 0;

	function a0M() {
		return Math.pow(Math.pow(eY - eK, 2) + Math.pow(eZ - eM, 2), .5)
	}

	function a0J(cO) {
		eK = ew.hb * cO.touches[0].clientX, eM = ew.hb * cO.touches[0].clientY, eY = ew.hb * cO.touches[1].clientX, eZ = ew.hb * cO.touches[1].clientY
	}
	this.a0I = function(cO) {
		return 1 < cO.touches.length ? (a0H = gh.ig, a0G = 3, a0J(cO), nt.hY(), !0) : (a0G = 0, !1)
	}, this.a0K = function(cO) {
		var a0L, f4, f5;
		return 0 !== aM.gj && 1 < cO.touches.length && (a0G = Math.max(a0G - 1, 0), rX.ld() && (a0L = a0M(), a0J(cO), cO = a0M(), f4 = Math.floor((eK + eY) / 2), f5 = Math.floor((eM + eZ) / 2), mC.vh(f4, f5, Math.max(.125, cO) / Math.max(.125,
			a0L)), gh.hu = !0), !0)
	}, this.a0O = function() {
		var cS, cT;
		return !!(a0G && (a0G = 0, gh.ig < a0H + 500)) && (cS = (eK + eY) / 2, cT = (eM + eZ) / 2, nt.a0P(cS, cT), nt.click(cS, cT, !0) && (gh.hu = !0), !0)
	}
}

function a0Q() {
	this.zv = 28, this.zr = 0, this.zu = null;
	var a0R = this.zw = null;

	function a0V(nK, a0W) {
		var cS, cT, sO, eO, ej = dW.dX.k8(nK, nK),
			kB = dW.dX.getContext(ej, !0),
			iy = dW.dX.getImageData(kB, nK, nK),
			q7 = iy.data,
			aZ = (nK >> 1) - .5,
			a0X = .5 + aZ;
		for (a0X *= a0X, cT = 0; cT < nK; cT++)
			for (cS = 0; cS < nK; cS++) eO = (eO = cS - aZ) * eO + (eO = cT - aZ) * eO, q7[sO = 4 * (cT * nK + cS)] = a0W[0], q7[1 + sO] = a0W[1], q7[2 + sO] = a0W[2], q7[3 + sO] = (a0X - eO) * a0W[3] / a0X;
		return kB.putImageData(iy, 0, 0), ej
	}

	function sZ(u, kB, ej, nK) {
		var cS;
		0 !== aW.jq[u] && 0 !== aW.gC[u] && (cS = aW.eL[u] + aW.eP[u] + 1 - nK - 2 >> 1, nK = aW.eN[u] + aW.eR[u] + 1 - nK - 2 >> 1, kB.drawImage(ej[aM.bz ? cK.cM[u] : u < aM.aU ? 1 : 0], cS, nK))
	}
	this.aD = function() {
		var mF;
		this.zr = 700,
			function(mF) {
				var nK = mF.zv;
				if (mF.zw = [], a0R = [], aM.bz)
					for (let u = 0; u <= aM.v0; u++) mF.zw.push(a0V(nK, cK.w0[cK.cL[u]])), a0R.push(a0V(nK >> 1, cK.w0[cK.cL[u]]));
				else mF.zw.push(a0V(nK, cK.w0[0])), mF.zw.push(a0V(nK, cK.w0[4])), a0R.push(a0V(nK >> 1, cK.w0[0]))
			}(this),
			function(mF, a0Y) {
				var u, zu = mF.zu,
					kB = dW.dX.getContext(zu, !0),
					s = aM.aV,
					nK = mF.zv >> 1;
				kB.imageSmoothingEnabled = !1, kB.setTransform(1, 0, 0, 1, 0, 0), a0Y && kB.clearRect(0, 0, zu.width, zu.height);
				for (u = aM.aU; u < s; u++) sZ(u, kB, a0R, nK)
			}(this, null !== (mF = this).zu && mF.zu.width === cE.cF - 2 && mF.zu.height === cE.ed - 2 || (mF.zu = dW.dX.k8(cE.cF - 2, cE.ed - 2), !1)), aM.lp || this.a0U()
	}, this.a0U = function() {
		var s = aM.aU,
			nK = this.zv,
			zw = this.zw,
			kB = dW.dX.getContext(this.zu, !0);
		for (let u = 0; u < s; u++) sZ(u, kB, zw, nK)
	}
}

function a0Z() {
	this.sH = function(i6) {
		return 0 === i6 ? 1 === aM.gj && aM.lp : 1 === i6 ? 1 === aM.gj && !aM.lp : 2 === aM.gj
	}, this.sI = function(player) {
		return 0 !== aW.jq[player] && 2 !== aW.cZ[player]
	}, this.a0a = function(e6, e7) {
		return e6 !== e7
	}, this.ok = function(player, a8) {
		return a8 = this.a0b(player, a8), aW.dt[player] += a8, a8
	}, this.a0b = function(player, a8) {
		var up = aW.dt[player];
		return a8 = Math.min(a8, aW.gC[player] * aM.uw - up), a8 = Math.min(a8, aM.uu - up), Math.max(a8, 0)
	}, this.e0 = function(player, ju, a0c, a0d) {
		var up = aW.dt[player],
			ju = eS.eT(up * (ju + 1), 1024),
			a0c = eS.eT(a0c * up, 1024),
			ju = Math.min(ju, up - a0c);
		return 10 === aM.aN && (ju = rK.us(player, ju)), cC.jJ[0] = ju, cC.jJ[1] = a0c, a0d <= ju
	}, this.a0f = function(player, ww, wv) {
		var player = aW.dt[player],
			a0e = eS.eT(64 * player, 1024);
		return ww = Math.min(ww, player - a0e), a0e += player = this.a0h(ww), ww = this.a0b(wv, ww -= player), cC.jJ[0] = ww, cC.jJ[1] = a0e, 1 <= ww
	}, this.a0i = function(ww, wv) {
		var a0g = this.a0h(ww);
		return ww = this.a0b(wv, ww -= a0g), cC.jJ[0] = ww, cC.jJ[1] = a0g, 1 <= ww
	}, this.m1 = function(player, a0j) {
		return eS.eT(aW.dt[player] * (a0j + 1), 1024)
	}, this.a0h = function(a0k) {
		return eS.eT(Math.max(2142 - gh.gi(), 0) * a0k, 2142)
	}, this.a0l = function(player, a0c) {
		aW.dt[player] -= eS.eT(a0c * aW.dt[player], 1024)
	}, this.e4 = function(player) {
		aW.dt[player] -= cC.jJ[0] + cC.jJ[1]
	}, this.a0m = function(player, jN) {
		return (jN = Math.min(jN, aM.aV)) < aM.aV && 0 === aW.jq[jN] && (jN = aM.aV), (cC.jA[0] = jN) === aM.aV || eC(player, jN)
	}, this.a0n = function(player, wv) {
		return 0 !== aW.jq[wv] && !eC(player, wv)
	}
}

function a0o() {
	this.u7 = new z, this.yJ = new a0p
}

function a0q() {
	var af;
	10 === cE.gc ? af =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === cE.gc ? af =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === cE.gc ? af =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === cE.gc ? af =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === cE.gc ? af =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === cE.gc ? af =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === cE.gc ? af =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === cE.gc ? af =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === cE.gc ? af =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === cE.gc && (af =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new zH).ae(af)
}

function a0r() {
	this.yI = function(player) {
		for (var a0s = du.j.a0s, d = player << 3, u = d + du.j.dx[player] - 1; d <= u; u--) this.og(a0s[u])
	}, this.og = function(a0t) {
		var j = du.j,
			a0u = j.dv - 1,
			a0v = j.oi[a0t],
			a0w = j.fg[a0t],
			a0x = j.oa[a0t];
		j.dv = a0u, j.oi[a0t] = j.oi[a0u], j.a0y[a0t] = j.a0y[a0u], j.ob[a0t] = j.ob[a0u], j.oa[a0t] = j.oa[a0u], j.a0z[a0t] = j.a0z[a0u], j.oj[a0t] = j.oj[a0u], j.fg[a0t] = j.fg[a0u], j.sa[a0t] = j.sa[a0u], j.oZ[a0t] = j.oZ[a0u], j.a0s[j.oi[
				a0t]] = a0t,
			function(a12) {
				var player = a12 >> 3,
					j = du.j,
					s = j.dx[player] - 1,
					a13 = (player << 3) + s;
				j.dx[player] = s, a13 !== a12 && (j.a0s[a12] = j.a0s[a13], j.oi[j.a0s[a12]] = a12)
			}(a0v), du.fT.fT[eA.ff(j.oa[a0t])][j.fg[a0t]] = a0t, a0u = eA.ff(a0x), a0v = a0w, a0u = du.fT.fT[a0u], j = a0u.pop(), a0v !== a0u.length && (a0u[a0v] = j, du.j.fg[j] = a0v)
	}
}

function a15() {
	this.a16 = -1, this.aD = function() {
		this.a16 = -1
	}, this.a0 = function() {
		-1 !== this.a16 && ro.oJ.rt(this.a16)
	}, this.xA = function(player) {
		return !!m5.a17(player) && (1 === uq ? (this.a16 = player, aM.aP && aM.lp && aM.v2.a0()) : (al.rq(player, player === aM.gb ? 21 : 22), 8 === aM.aN ? this.a16 = 1 - player : aM.aP ? (yE(player), a18(), aM.lp && aM.v2.a0()) : this.a19(
			player)), !0)
	}, this.a1A = function(player) {
		1 === aM.gj && 0 !== aW.jq[player] && 2 !== aW.cZ[player] && (8 === aM.aN ? this.a16 = 1 - player : this.a19(player)), aM.s4--, aM.s3--, al.rq(player, 4), dW.dz.sH(2) && rE.lu(!0)
	}, this.a19 = function(player) {
		aM.lp ? (yE(player), a18()) : rL.a1B(player)
	}
}

function a1C() {
	function a1F(map, cS, cT, ea, b6) {
		map >= cE.ow || (cE.gc === map && (fB.fillStyle = hk.a1E, fB.fillRect(cS, cT, ea, b6), fB.fillStyle = hk.hl), fB.strokeRect(cS, cT, ea, b6), fB.fillText(cE.aJ.iu[map].name, Math.floor(cS + .5 * ea), Math.floor(cT + .55 * b6)))
	}
	this.f0 = !1, this.xN = [0, 0, 0, 0], this.show = function() {
		this.f0 = !0, this.resize(), gh.hu = !0
	}, this.resize = function() {
		var a1D = cG(cE.ow + cE.ow % 2, 2),
			a1D = ew.b6 - a1D * dZ.gap;
		eu.di.ev() ? this.xN[2] = Math.floor(.75 * ew.min) : this.xN[2] = Math.floor(.5 * ew.min), this.xN[3] = Math.floor(1.25 * this.xN[2]), this.xN[3] > a1D && (this.xN[3] = a1D, this.xN[2] = Math.floor(a1D / 1.2)), this.xN[0] = Math.floor((ew
			.ea - this.xN[2]) / 2), this.xN[1] = Math.floor((ew.b6 - this.xN[3]) / 2)
	}, this.hv = function(cS, cT) {
		return !(cS < this.xN[0] || cT < this.xN[1] || cS > this.xN[0] + this.xN[2] || cT > this.xN[1] + this.xN[3])
	}, this.f3 = function(cS, cT) {
		var ez, a1D = cG(cE.ow + cE.ow % 2, 2);
		return gh.hu = !0, cS < this.xN[0] || cT < this.xN[1] || cS > this.xN[0] + this.xN[2] || cT > this.xN[1] + this.xN[3] ? !(this.f0 = !1) : (ez = Math.floor(.17 * this.xN[3]), cT < this.xN[1] + ez ? cS > this.xN[0] + this.xN[2] - ez && (
			this.f0 = !1) : (cT = (cT = Math.floor(a1D * (cT - this.xN[1] - ez - .00576 * ew.ex) / (this.xN[3] - ez - .01152 * ew.ex))) < 0 ? 0 : a1D - 1 < cT ? a1D - 1 : cT, cS > this.xN[0] + this.xN[2] / 2 && (cT += a1D), cT >= cE.ow ||
			cE.g(cT, Math.floor(16384 * Math.random()))), !0)
	}, this.fA = function() {
		var u, eM, ez = Math.floor(.17 * this.xN[3]),
			a1D = cG(cE.ow + cE.ow % 2, 2),
			gap = .6 * .01152 * ew.ex,
			tQ = (this.xN[3] - ez - (a1D + 1) * gap) / a1D,
			et = Math.floor((this.xN[2] - 3 * gap) / 2);
		for (fB.lineWidth = dZ.hh, dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1), fB.fillStyle = hk.nv, fB.fillRect(this.xN[0], this.xN[1] + ez, this.xN[2], this.xN[3] - ez), fB.fillStyle = hk.a1E, fB.fillRect(this.xN[0], this.xN[1], this.xN[
				2], ez), fB.strokeStyle = hk.hl, fB.strokeRect(this.xN[0], this.xN[1], this.xN[2], this.xN[3]), fB.fillStyle = hk.hl, fB.fillRect(this.xN[0], this.xN[1] + ez, this.xN[2], 2), fB.font = dW.dX.hn(1, .48 * ez), fB.fillText("Maps",
				Math.floor(this.xN[0] + this.xN[2] / 2), Math.floor(this.xN[1] + .55 * ez)), fB.font = dW.dX.hn(1, .48 * tQ), u = a1D - 1; 0 <= u; u--) eM = Math.floor(this.xN[1] + ez + gap + u * (tQ + gap)), a1F(u, this.xN[0] + gap, eM, et, tQ),
			a1F(u + a1D, this.xN[0] + et + 2 * gap, eM, et, tQ);
		m5.pU(Math.floor(this.xN[0] + this.xN[2] - .7 * ez), Math.floor(this.xN[1] + .3 * ez), Math.floor(.4 * ez)), fB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function dO() {
	this.mc = function() {
		fE.j.ke(), fE.hZ.fD(105, v.ah.a0D(v.ah.a0E(5))), fE.hZ.fD(106, v.ah.a0D(v.ah.a0E(8))), fE.hZ.fD(109, at.az(30)), fE.hZ.fD(108, fE.fF.data[109].value), fE.hZ.fD(111, fE.fF.data[109].value + 1), fE.hZ.fD(107, 0), fE.hZ.fD(110, "")
	}, this.me = function() {
		var a1G, a1H, a1I;
		at.size < f.lj(18) ? i.j.mS(0, 3254) : (a1G = at.az(5), a1H = at.az(3), a1I = at.az(3), at.lh(186 + 16 * (a1G + a1H + a1I) + 32 + 32 + 30) ? (fE.hZ.fD(109, at.az(30)), fE.hZ.fD(107, at.az(16)), fE.hZ.fD(108, at.az(30)), fE.hZ.fD(112, at
			.az(30)), fE.hZ.fD(111, at.az(30)), fE.hZ.fD(113, at.le(32)), fE.hZ.fD(122, ag.w.bK(a1G)), fE.hZ.fD(135, ag.w.bK(a1H)), fE.hZ.fD(136, ag.w.bK(a1I)), fE.hZ.fD(137, at.le(32)), fE.hZ.fD(138, at.le(32)), fE.hZ.fD(139, at.az(
			30)), 8 === b3.f7 && b3.gk().tS(16, !0)) : i.j.mS(0, 3267))
	}
}

function a1J() {
	this.a1K = function(player, wv, h8) {
		dW.dz.a0f(player, h8, wv) && (rJ.wu(player, wv), wv < aM.aU) && aT.random() < aT.value(10) && (jG[wv] = 0)
	}, this.om = function(player, wv, h8) {
		dW.dz.a0i(h8, wv) && (dW.dz.ok(wv, cC.jJ[0]), l2.y8(player, wv), nD.yA(wv, cC.jJ[0]))
	}
}

function a1L() {
	let hN, a1M;

	function a1P() {
		vN.a1W.hideCMPButton(), b3.b4(0);
		var af = aw.gt(a1M.a1T());
		(0 < af.length && af === aw.ax.ay || aw.gZ.ae(af)) && aw.gm()
	}
	this.show = function(t5) {
		this.gl(t5), hN.show(), this.resize()
	}, this.gl = function(t5) {
		0 === aM.gj ? (t5 = t5 || a1M.a1T(), a1M.a1U(t5)) : (aM.ga || (aw.ax.ay = aw.gX.a1V()), a1M.a1U(aw.gu(aw.ax.ay)))
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), a1M.resize()
	}, this.hy = function(cJ) {
		2 === cJ ? hN.hz[0].i0() : a1P()
	}, hN = new hU("▶️ " + fI.dq[82], [new hV("❌ " + fI.dq[92], function() {
		b3.i8()
	}, hk.i9), new hV("🔲 " + fI.dq[93], function() {
		a1M.a1N()
	}), new hV("📋 " + fI.dq[94], function() {
		a1M.a1O()
	}), new hV("🗑️ " + fI.dq[95], function() {
		a1M.clear()
	}), new hV("▶️ " + fI.dq[96], function() {
		a1P()
	}, hk.a1Q)]), a1M = new a1R("replayData", "Insert the replay link here!"), hN.l9.appendChild(a1M.a1S)
}

function a1X() {
	var cB, tb, a1Y, a1Z, gap, a1a, a1b, a1c, a1d, a1e, iT, a1f, sC, a1g, lw, a1h, a1i, a1j;

	function a1m() {
		a1Z = Math.floor(.2 * (eu.di.ev() ? .07 : .035) * ew.ex), a1Z = r1(eu.di.ev() ? 3 : 1, a1Z);
		var a1o = ew.ea / (cB.length + gap);
		a1Z = a1Z < a1o ? a1o : a1Z, lw = Math.floor((1 - gap) * a1Z), tb = 0, a1p()
	}

	function a1p() {
		tb = (tb = tb < -20 ? -20 : tb) > (cB.length - 15) * a1Z ? (cB.length - 15) * a1Z : tb, a1b = Math.floor(tb / a1Z), a1c = (a1c = a1b + Math.floor(ew.ea / a1Z)) > cB.length - 1 ? cB.length - 1 : a1c, a1b = (a1b = a1c < a1b ? a1c : a1b) < 0 ?
			0 : a1b;
		var aZ = a1c;
		a1a = a1Y / cB[aZ];
		for (var u = a1c - 1; a1b <= u; u--) cB[u] > cB[aZ] && (aZ = u, a1a = a1Y / Math.pow(cB[u], a1g))
	}

	function a1s(cS) {
		cS = Math.floor((tb + ew.ea - cS - gap * a1Z) / a1Z);
		return (cS = cS < -1 ? -1 : -1 === cS ? 0 : cS > cB.length - 1 ? -1 : cS) !== a1d && (a1d = cS, -1 === a1h && 0 === a1d && mk.uC && (a1h = setInterval(a1t, 100)), 1)
	}

	function a1w(u) {
		var a20 = Math.floor(a1a * Math.pow(cB[u], a1g));
		fB.fillRect(tb + ew.ea - (u + 1) * a1Z, ew.b6 - a20, lw, a20)
	}

	function a1t() {
		var b7;
		0 !== (a1d = 8 === f1.f2() ? -1 : a1d) ? (a1i = (new Date).getTime(), clearInterval(a1h), a1h = -1) : (b7 = cB[1] / 864e3, -1 !== a1i && (b7 += ((new Date).getTime() - a1i) * cB[1] / 864e5, a1i = -1), 0 < b7 && (cB[0] += Math.floor(b7), gh
			.hu = !0))
	}
	this.uC = !1, this.aD = function() {
		a1i = a1h = -1, a1d = -(a1g = 1), this.a1k = !1, sC = 0, a1f = new Date, tb = 0, gap = .3, (a1j = []).push({
			nq: "Plateau A",
			s: 0,
			cO: 57
		}), a1j.push({
			nq: "Max A",
			s: 1,
			cO: 1
		}), a1j.push({
			nq: "Black Friday",
			s: 15,
			cO: 15
		}), a1j.push({
			nq: "Max B",
			s: 19,
			cO: 19
		}), a1j.push({
			nq: "Max C",
			s: 44,
			cO: 44
		}), a1j.push({
			nq: "First Android Version",
			s: 58,
			cO: 58
		}), a1j.push({
			nq: "Max D",
			s: 67,
			cO: 67
		}), a1j.push({
			nq: "The iFrame Explosion",
			s: 98,
			cO: 99
		}), a1j.push({
			nq: "The 155-Day Uptrend",
			s: 58,
			cO: 213
		}), a1j.push({
			nq: "Max E",
			s: 213,
			cO: 213
		}), a1j.push({
			nq: "Plateau B",
			s: 214,
			cO: 259
		}), a1j.push({
			nq: "Turbulent Times",
			s: 260,
			cO: 344
		}), a1j.push({
			nq: "Max F",
			s: 262,
			cO: 262
		}), a1j.push({
			nq: "Max G",
			s: 282,
			cO: 282
		}), a1j.push({
			nq: "Max H",
			s: 333,
			cO: 333
		}), a1j.push({
			nq: "The 19-Day Downtrend",
			s: 283,
			cO: 301
		}), a1j.push({
			nq: "Plateau C",
			s: 345,
			cO: 385
		}), a1j.push({
			nq: "The Alliance Ascent",
			s: 386,
			cO: 395
		}), a1j.push({
			nq: "Max I",
			s: 395,
			cO: 395
		}), a1j.push({
			nq: "First iOS Version",
			s: 411,
			cO: 411
		}), a1j.push({
			nq: "Plateau D",
			s: 396,
			cO: 453
		}), a1j.push({
			nq: "The TikTok Revolution",
			s: 454,
			cO: 470
		}), a1j.push({
			nq: "Max J",
			s: 456,
			cO: 456
		}), a1j.push({
			nq: "Max K",
			s: 472,
			cO: 472
		}), a1j.push({
			nq: "Max L",
			s: 478,
			cO: 478
		}), a1j.push({
			nq: "YT Drew",
			s: 471,
			cO: 485
		}), a1j.push({
			nq: "Plateau E",
			s: 485,
			cO: 600
		}), a1j.push({
			nq: "Uptrend A",
			s: 600,
			cO: 613
		}), a1j.push({
			nq: "Max M",
			s: 613,
			cO: 613
		}), a1j.push({
			nq: "Downtrend A",
			s: 614,
			cO: 635
		}), a1j.push({
			nq: "Plateau F",
			s: 636,
			cO: 737
		}), a1j.push({
			nq: "End of Record",
			s: 738,
			cO: 738
		}), cB = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		a1Y = Math.floor(.15 * ew.b6), a1e = (a1e = Math.floor((eu.di.ev() ? .018 : .0137) * ew.ex)) < 2 ? 2 : a1e, iT = dW.dX.hn(1, a1e), a1m()
	}, this.ml = function(a1n) {
		var u;
		for (this.uC = !0, u = 0; u < a1n.length; u++) cB.unshift(a1n[u]);
		a1m(), gh.hu = !0
	}, this.a1q = function() {
		a1p()
	}, this.hv = function(cS, cT) {
		cT > ew.b6 - .6 * a1Y ? this.a1k ? cS !== sC && (tb += cS - sC, sC = cS, a1p(), a1s(cS), this.a1k = -1 !== a1d, gh.hu = !0) : a1s(cS) && (gh.hu = !0) : this.j0()
	}, this.j0 = function() {
		-1 !== a1d && (this.a1k = !1, a1d = -1, gh.hu = !0)
	}, this.hw = function(cS, deltaY) {
		-1 !== a1d && (tb += Math.floor(deltaY), a1p(), a1s(cS), gh.hu = !0)
	}, this.f3 = function(cS, cT) {
		this.hv(cS, cT), -1 !== a1d && (sC = cS, this.a1k = !0)
	}, this.a1u = function() {
		-1 !== a1d && (this.a1k = !1)
	}, this.fA = function() {
		fB.fillStyle = hk.a1v;
		for (var a21, month, mJ, ey, a24, a25, eM, a26, a27, u = a1c; a1b <= u; u--) a1w(u);
		this.uC && 0 === a1b && (fB.fillStyle = hk.a1x, a1w(0)), -1 !== a1d && (fB.fillStyle = hk.a1y, a1w(a1d)), -1 !== a1d && (fB.font = iT, dW.dX.textBaseline(fB, 2), (mJ = new Date).setTime(a1f.getTime() - 1e3 * a1d * 60 * 60 * 24), month =
			"month", a21 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(mJ), a21 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(mJ)), a21 = a21 + ", " + mJ.getUTCDate() + " " + month + " " + mJ.getFullYear(), month = 1 === cB[a1d] ? " second played" : " seconds played", month = dW.lQ.m3(cB[a1d]) + month, mJ = Math.floor(fB.measureText(a21)
			.width), ey = Math.floor(fB.measureText(month).width), a24 = Math.floor(.5 * (mJ + a1e)), a25 = (a25 = tb + ew.ea - (a1d + 1) * a1Z) < a24 ? a24 : a25 > ew.ea - a24 ? ew.ea - a24 : a25, eM = ew.b6 - Math.floor(a1a * Math.pow(cB[
				a1d], a1g)), a26 = Math.floor(1.1 * a1e), a27 = eM > ew.b6 - a26 ? ew.b6 - a26 : eM, fB.fillStyle = hk.nv, fB.fillRect(ew.ea - ey - a1e, a27 - a26, ey + a1e, a26), fB.fillRect(a25 - a24, ew.b6 - a26, mJ + a1e, a26), fB
			.fillStyle = hk.hl, dW.dX.textAlign(fB, 2), fB.fillText(month, Math.floor(ew.ea - .5 * a1e), a27),
			function(eM, a26) {
				for (var et, wF = -1, au = cB.length - a1d - 1, u = a1j.length - 1; 0 <= u; u--) au >= a1j[u].s && au <= a1j[u].cO && (-1 === wF || a1j[u].cO - a1j[u].s < a1j[wF].cO - a1j[wF].s) && (wF = u); - 1 !== wF && (et = Math.floor(fB
					.measureText(a1j[wF].nq).width), fB.fillStyle = hk.nv, fB.fillRect(ew.ea - et - a1e, eM, et + a1e, a26), fB.fillStyle = hk.hl, fB.fillText(a1j[wF].nq, Math.floor(ew.ea - .5 * a1e), eM + a26))
			}(a27 - 2 * a26, a26), dW.dX.textAlign(fB, 1), fB.fillText(a21, a25, ew.b6), fB.strokeStyle = hk.a29, fB.lineWidth = 1, fB.beginPath(), fB.moveTo(0, eM), fB.lineTo(ew.ea, eM), fB.closePath(), fB.stroke())
	}
}

function p3() {
	var a2A = new Uint8Array(64);
	this.aD = function() {
		var u;
		for (a2A[0] = 45, a2A[37] = 95, u = 0; u < 10; u++) a2A[u + 1] = 48 + u;
		for (u = 0; u < 26; u++) a2A[u + 11] = 65 + u, a2A[u + 38] = 97 + u
	}, this.a0E = function(a2B) {
		for (var qL = at, z6 = new Uint8Array(a2B), u = 0; u < a2B; u++) z6[u] = qL.az(6);
		return z6
	}, this.a0D = function(z6) {
		for (var s = z6.length, a2C = a2A, cB = [], u = 0; u < s; u++) cB.push(String.fromCharCode(a2C[z6[u]]));
		return cB.join("")
	}
}

function a0p() {
	this.a2D = function() {
		let s = uq;
		var bJ = uo,
			xh = aW.xh,
			o7 = this.yK();
		for (let u = 0; u < s; u++) {
			var b7 = bJ[u];
			cz.cY(b7) && (xh[b7] = o7)
		}
		var yz = aW.yz,
			jD = aW.jD,
			jE = aW.jE,
			z0 = aW.z0;
		s = aM.aU;
		for (let u = 0; u < s; u++)(0 === z0[u] || jE[u] < 1 || 2 * yz[u] > 3 * (jD[u] + jE[u])) && (xh[u] = 0);
		let a2E = 0;
		for (let u = 0; u < s; u++) a2E += 0 < xh[u];
		return a2E
	}, this.yK = function() {
		return Math.min(65535, gh.gi())
	}
}

function a2F() {
	this.sS = function(player, sO) {
		dW.dz.sH(0) && dW.dz.sI(player) && eA.a2G(sO) && (aw.ax.kR(0, player, sO), aM.v2.jI(player, sO))
	}, this.jz = function(player, ju, jN) {
		aW.yz[player]++, dW.dz.sH(1) && dW.dz.sI(player) && dW.dz.a0a(player, jN) && dW.dz.e0(player, ju, 12, aM.gJ) && dW.dz.a0m(player, jN) && ((jN = g7.jb(player, cC.jA[0])) || g7.a2H(player)) && j8(player, jN) && (aw.ax.kR(1, player, ju, cC
			.jA[0]), dW.dz.e4(player), l2.a2I(player, ju), jF(player))
	}, this.ww = function(player, ju, wv) {
		dW.dz.sH(1) && dW.dz.sI(player) && aM.bz && dW.dz.a0a(player, wv) && dW.dz.a0n(player, wv) && dW.dz.a0f(player, dW.dz.m1(player, ju), wv) && (aw.ax.kR(2, player, ju, wv), rJ.wu(player, wv))
	}, this.sU = function(player, ju, sO) {
		dW.dz.sH(1) && dW.dz.sI(player) && eA.a2G(sO) && du.j.dv !== du.j.dw && du.j.dx[player] !== du.j.dy && 0 !== aW.ds[player].length && dW.dz.e0(player, ju, 32, 16) && du.eF.eG(player, sO) && (aw.ax.kR(3, player, ju, sO), dW.dz.e4(player),
			du.j.e5(player))
	}, this.wz = function(player, x0, sO) {
		dW.dz.sH(1) && dW.dz.sI(player) && eA.a2G(sO) && du.oO.uj(player, x0) && du.eF.a2J(sO) && (aw.ax.kR(4, player, x0, sO), dW.dz.a0l(player, 8), du.j.wz())
	}, this.x3 = function(player, jN) {
		dW.dz.sH(1) && dW.dz.sI(player) && (jN = Math.min(jN, aM.aV), g7.jb(player, jN)) && (aw.ax.kR(5, player, jN), g7.a2K(player, jN))
	}, this.x5 = function(player, nB) {
		(dW.dz.sH(1) || dW.dz.sH(2)) && dW.dz.sI(player) && (nB = eS.hq(nB, 0, 1023), aw.ax.kR(6, player, nB), nD.nE(player, 0, nB))
	}, this.x7 = function(player, x8) {
		dW.dz.sH(1) && dW.dz.sI(player) && (aw.ax.kR(7, player, x8), rT.a2L(player, x8))
	}, this.xA = function(player) {
		(dW.dz.sH(0) || dW.dz.sH(1)) && dW.dz.sI(player) && rV.xA(player) && aw.ax.kR(8, player)
	}, this.a1A = function(player) {
		rV.a1A(player), aw.ax.kR(9, player)
	}
}

function p4() {
	this.x = function(af) {
		var s = af.length,
			ea = f;
		for (let u = 0; u < s; u++) ea.h(16, af.charCodeAt(u))
	}
}

function d7() {
	this.qe = function(i3, id) {
		f.g(24), f.h(1, 0), f.h(6, 6), f.h(1, id), f.h(16, Math.abs(4096 + mn.position[id] + mn.qd[id]) % 65536), i.j.send(i3, f.k)
	}, this.pn = function(i3, pj) {
		f.g(8), f.h(1, 0), f.h(6, 4), f.h(1, pj ? 1 : 0), i.j.send(i3, f.k)
	}, this.my = function() {
		f.g(58), f.h(1, 0), f.h(6, 5), f.h(8, i.j.pl()), f.h(10, ma.mv), f.h(9, ma.mw), f.h(10, mN), f.h(14, fp.mP), i.j.send(i.j.gr, f.k)
	}, this.wr = function(sO) {
		f.g(27), f.h(1, 1), f.h(4, 0), f.h(22, sO), i.j.send(i.j.gr, f.k)
	}, this.wt = function(ju, jN) {
		f.g(25), f.h(1, 1), f.h(4, 1), f.h(10, ju), f.h(10, jN), i.j.send(i.j.gr, f.k)
	}, this.wx = function(ju, wv) {
		f.g(24), f.h(1, 1), f.h(4, 2), f.h(10, ju), f.h(9, wv), i.j.send(i.j.gr, f.k)
	}, this.wy = function(ju, sO) {
		f.g(37), f.h(1, 1), f.h(4, 3), f.h(10, ju), f.h(22, sO), i.j.send(i.j.gr, f.k)
	}, this.x2 = function(x0, sO) {
		f.g(37), f.h(1, 1), f.h(4, 4), f.h(10, x0), f.h(22, sO), i.j.send(i.j.gr, f.k)
	}, this.x4 = function(jN) {
		f.g(15), f.h(1, 1), f.h(4, 5), f.h(10, jN), i.j.send(i.j.gr, f.k)
	}, this.x6 = function(au) {
		f.g(15), f.h(1, 1), f.h(4, 6), f.h(10, au), i.j.send(i.j.gr, f.k)
	}, this.x9 = function(x8) {
		f.g(6), f.h(1, 1), f.h(4, 7), f.h(1, x8), i.j.send(i.j.gr, f.k)
	}, this.xB = function() {
		f.g(5), f.h(1, 1), f.h(4, 8), i.j.send(i.j.gr, f.k)
	}, this.a2M = function(a2N, a2O) {
		f.g(24), f.h(1, 1), f.h(4, 15), f.h(9, a2O), f.h(10, a2N), i.j.send(i.j.gr, f.k)
	}, this.a2P = function(dH) {
		f.g(14), f.h(1, 1), f.h(4, 14), f.h(9, dH), i.j.send(i.j.gr, f.k)
	}, this.a2Q = function(a2R, target) {
		var u, s = a2R.length;
		for (f.g(14 + 9 * s), f.h(1, 1), f.h(4, 13), f.h(9, target), u = 0; u < s; u++) f.h(9, a2R[u]);
		i.j.send(i.j.gr, f.k)
	}
}

function a2S() {
	this.qI = 0, this.qJ = 0, this.qD = 0, this.qE = 0, this.qF = 0, this.qG = 0, this.d1 = [0, 0, 0, 0], this.vn = function() {
		this.qI = mC.cP(), this.qJ = mC.cQ(), this.qD = -this.qI, this.qE = -this.qJ, this.qF = ew.ea / ug, this.qG = ew.b6 / ug, this.d1[0] = Math.floor(this.qD), this.d1[1] = Math.floor(this.qE), this.d1[2] = Math.floor(this.d1[0] + this.qF +
			1), this.d1[3] = Math.floor(this.d1[1] + this.qG + 1), cx.a2T = !0
	}
}

function v6() {
	this.jI = function(player, sO) {
		vE.u0(player, eA.a2U(sO), eA.a2V(sO)) && (gh.hu = !0), aM.aP && this.a0()
	}, this.a0 = function() {
		aM.lp = !1;
		for (let u = 0; u < aM.aU; u++) 0 !== aW.jq[u] && 0 === aW.gC[u] && vE.u4(u);
		0 !== aW.jq[aM.gb] ? (l2.l3[7] = aW.gC[aM.gb], l2.l3[8] = aW.dt[aM.gb], ly.m8(), rE.a2W(), aM.ga || rX.a2X(aW.eL[aM.gb] - 5, aW.eN[aM.gb] - 5, aW.eP[aM.gb] + 5, aW.eR[aM.gb] + 5), rZ.aD()) : rY.show(!1, !1, !1, !0), al.a2Y(18), nD.a2Z(),
			nD.lu(!0), rQ.j.a0U(), aM.v2 = null, cx.a2a = !0, cx.a2b(), aM.aP && eu.di.setState(1)
	}
}

function a2c() {
	let a2d = [0, 0],
		a2e = [0, 0];

	function a2g(au) {
		return 3 !== a2d[au] && 1 !== a2e[au] && (a2e[au] = 1, a2d[au]++, fE.hZ.fD(119, (a2d[0] << 2) + a2d[1]), 1)
	}
	this.aD = function() {
		var a8 = fE.fF.data[119].value;
		a2d[0] = a8 >> 2, a2d[1] = 3 & a8
	}, this.a2f = function() {
		a2g(0) && al.a2h(fI.i4(130))
	}, this.a2i = function() {
		a2g(1) && al.a2h(fI.i4(131))
	}
}

function a2j() {
	let hN, l7;
	var kV;
	this.show = function() {
		hN.show(), this.resize()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), l7.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU("Login", [new hV("❌ " + fI.dq[92], function() {
		b3.b4(7, b3.a2k(7).po)
	}, hk.i9), new hV("➡️ Login", function() {
		fE.hZ.fD(105, ag.ah.z4(l7.kW[0].a2m[0].cO.value, 5)), fE.hZ.fD(106, ag.ah.z4(l7.kW[1].a2m[0].cO.value, 8)), b3.b4(8, b3.a2k(7).po, new iZ(18))
	}, hk.iB)]), l7 = new kU(hN.l9, ((kV = []).push(function() {
		var lF = new lG;
		return lF.lH("Account Name"), lF.lN(new lM({
			title: "AccountName",
			value: "",
			au: -1
		})), lF
	}()), kV.push(function() {
		let lF = new lG,
			a2p = (lF.lH("Password"), new lM({
				title: "Password",
				value: "",
				au: -1
			}));
		return a2p.cO.type = "password", lF.lN(a2p), lF.lN(new lS([new hV("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", a2p.cO.type = "text") : (this.innerText = "Show", a2p.cO.type = "password")
		}).button])), lF
	}()), kV))
}

function a2q() {
	var qO, a2r, iT, b6, a20;

	function a2t(u) {
		let a2u = !0,
			p8 = hk.hl;
		qO[u].jN === aM.aV ? qO[u].kA.fillStyle = hk.a2v : (cz.cA(qO[u].jN), qO[u].kA.fillStyle = dW.color.a2w(cC.cD[0], cC.cD[1], cC.cD[2], .87), 400 < dW.fV.pF(cC.cD, 0, 2) && (a2u = !1, p8 = hk.hm));
		var ea = qO[u].k9.width,
			et = (qO[u].kA.clearRect(0, 0, ea, b6), qO[u].kA.fillRect(0, 0, ea, b6), qO[u].kA.fillStyle = p8, ! function(kA, ea, b6) {
				kA.fillRect(0, 0, ea, 1), kA.fillRect(0, b6 - 1, ea, 1), kA.fillRect(0, 0, 1, b6), kA.fillRect(ea - 1, 0, 1, b6)
			}(qO[u].kA, ea, b6), a2r + 2 * b6 < ea && (qO[u].kA.fillRect(ea - a2r - b6, 0, 1, b6), qO[u].kA.fillText(aW.aX[qO[u].jN], Math.floor((ea - a2r) / 2), Math.floor(.57 * b6))), 0 !== qO[u].id ? 0 : b6);
		qO[u].kA.fillText(dW.lQ.m3(qO[u].h8), Math.floor(ea - a2r / 2 - et), Math.floor(.57 * b6)),
			function(u, ea, et, a2u) {
				qO[u].kA.fillStyle = a2u ? hk.a1y : hk.nb;
				a2u = Math.floor(a2r * qO[u].h8 / qO[u].a31);
				qO[u].kA.fillRect(Math.floor(ea - a2r - et), b6 - a20, a2u, a20)
			}(u, ea, et, a2u), 0 === qO[u].id ? (a2z(u, ea, a2u, p8), function(u, ea, a2u) {
				qO[u].kA.strokeStyle = a2u ? hk.a36 : hk.a37, qO[u].kA.fillRect(b6, 0, 1, b6);
				a2u = ea - b6;
				qO[u].kA.beginPath(), qO[u].kA.moveTo(Math.floor(.3 * b6 + a2u), Math.floor(b6 / 2)), qO[u].kA.lineTo(Math.floor(b6 - .3 * b6 + 0 + a2u), Math.floor(b6 / 2)), qO[u].kA.stroke(), qO[u].kA.beginPath(), qO[u].kA.moveTo(Math.floor(
					b6 / 2 + a2u), Math.floor(.3 * b6)), qO[u].kA.lineTo(Math.floor(b6 / 2 + a2u), Math.floor(b6 - .3 * b6 + 0)), qO[u].kA.stroke()
			}(u, ea, a2u)) : a2z(u, 2 * b6, a2u, p8)
	}

	function a2z(u, ea, a2u, p8) {
		qO[u].kA.strokeStyle = qO[u].a32 ? hk.a33 : a2u ? hk.a34 : hk.a35, qO[u].kA.fillStyle = p8, qO[u].kA.fillRect(ea - b6, 0, 1, b6), qO[u].kA.lineWidth = Math.max(Math.floor(b6 / 12), 3), qO[u].kA.lineCap = "round";
		a2u = .35;
		ea = b6 + 1, qO[u].kA.beginPath(), qO[u].kA.moveTo(Math.floor(ea - a2u * b6 + 0), Math.floor(a2u * b6)), qO[u].kA.lineTo(Math.floor(ea - b6 + a2u * b6), Math.floor(b6 - a2u * b6 + 0)), qO[u].kA.stroke(), qO[u].kA.beginPath(), qO[u].kA.moveTo(
			Math.floor(ea - b6 + a2u * b6), Math.floor(a2u * b6)), qO[u].kA.lineTo(Math.floor(ea - a2u * b6 + 0), Math.floor(b6 - a2u * b6 + 0)), qO[u].kA.stroke()
	}

	function a3I(s) {
		for (var h8, u = s - 1; 0 <= u; u--) h8 = g7.wd(aM.gb, u), qO[u].h8 !== h8 && (qO[u].h8 = h8, qO[u].a31 = h8 > qO[u].a31 ? h8 : qO[u].a31, qO[u].lm = !0)
	}

	function a2s(qn) {
		qn.k9 = document.createElement("canvas"), cE.j2.font = iT;
		var ea = a2r;
		qn.jN < aM.aV && 0 === qn.id && (ea += Math.floor(cE.j2.measureText(aW.aX[qn.jN] + "000").width)), ea += b6, 0 === qn.id && (ea += b6), qn.k9.width = ea, qn.k9.height = b6, qn.kA = qn.k9.getContext("2d", {
			alpha: !0
		}), qn.kA.font = iT, dW.dX.textBaseline(qn.kA, 1), dW.dX.textAlign(qn.kA, 1)
	}

	function a3E(u) {
		return rR.a3O() ? ew.ea - qO[u].k9.width - dZ.gap : rR.cS
	}

	function a3F(u) {
		return Math.floor(2 * dZ.gap + (rR.a3O() ? rE.b6 + dZ.gap : 0) + rR.b6 + u * (1.3 * b6))
	}
	this.aD = function() {
		qO = [], this.resize()
	}, this.resize = function() {
		iT = al.iT, b6 = al.fontSize + 5, b6 = Math.floor(1.25 * b6), eu.di.ev() && (b6 = Math.floor(1.25 * b6)), a20 = Math.floor(.15 * b6), cE.j2.font = iT, a2r = Math.floor(cE.j2.measureText("02 000 000 0000").width);
		for (var u = qO.length - 1; 0 <= u; u--) a2s(qO[u]), a2t(u)
	}, this.lu = function() {
		for (var u = qO.length - 1; 0 <= u; u--) qO[u].lm && (qO[u].lm = !1, a2t(u))
	}, this.f3 = function(hr, cT) {
		if (2 !== aM.gj && 0 !== aW.jq[aM.gb] && !aM.ga && cz.cY(aM.gb))
			for (var a39, a3A, a3B, a3C = eu.di.ev() ? b6 : 0, a3D = eu.di.ev() ? Math.floor(.15 * b6) : 0, u = qO.length - 1; 0 <= u; u--)
				if (a39 = a3E(u), a3A = a3F(u), a3B = qO[u].k9.width, a3A - a3D <= cT && cT <= a3A + b6 + a3D) {
					if (a39 - a3C <= hr && hr <= a39 + b6 + a3C) return qO[u].a32 || (qO[u].lm = !0, qO[u].a32 = !0, 0 === qO[u].id && jx.jy.x3(qO[u].jN)), !0;
					if (0 === qO[u].id && a39 + a3B - b6 - a3C <= hr && hr <= a39 + a3B + a3C) return jx.jy.jz(ly.m2(), qO[u].jN), !0
				} return !1
	}, this.a0 = function() {
		var s;
		2 !== aM.gj && 0 !== aW.jq[aM.gb] && !aM.ga && cz.cY(aM.gb) && (function(s) {
			if (qO.length !== s) return 1;
			for (var u = s - 1; 0 <= u; u--)
				if (qO[u].id !== g7.a3K(aM.gb, u) || qO[u].jN !== g7.a3L(aM.gb, u)) return 1;
			return
		}(s = g7.js(aM.gb)) && function(s) {
			var u, id, jN, cN, h8, a3M = [];
			loop: for (u = 0; u < s; u++) {
				for (id = g7.a3K(aM.gb, u), jN = g7.a3L(aM.gb, u), cN = 0; cN < qO.length; cN++)
					if (qO[cN].id === id && qO[cN].jN === jN) {
						a3M.push(qO.splice(cN, 1)[0]);
						continue loop
					} h8 = g7.wd(aM.gb, u), a2s(h8 = {
					jN: jN,
					h8: h8,
					a31: h8,
					id: id,
					lm: !0,
					a32: !1,
					k9: null,
					kA: null
				}), a3M.push(h8)
			}
			qO = a3M
		}(s), a3I(s))
	}, this.a3N = function(b7) {
		for (var s = Math.min(qO.length, g7.js(aM.gb)), u = 0; u < s; u++)
			if (qO[u].jN === b7) return void(qO = [])
	}, this.fA = function() {
		if (0 !== aW.jq[aM.gb] && cz.cY(aM.gb) && !aM.ga)
			for (var u = qO.length - 1; 0 <= u; u--) fB.drawImage(qO[u].k9, a3E(u), a3F(u))
	}
}

function a0B(data) {
	let hN, a3P, a3Q, hP, a3R, a3S, a3T, colors, a3U = 0,
		a3V = 0,
		a3W = !1,
		a3X = [1, 5, 60, 1440, 10080, 43200];

	function a3x(hr, hs) {
		! function(hr, hs) {
			return hr > a3P && hr < a3P + hP && hs > a3Q && hs < a3Q + a3R
		}(a3U = hr, a3V = hs) ? (a3W && (gh.hu = !0), a3W = !1) : (a3W = !0, gh.hu = !0)
	}
	var cJ;
	this.show = function() {
			hN.show(), this.resize()
		}, this.hY = function() {
			hN.hY()
		}, this.resize = function() {
			hN.resize();
			var cJ = ew.hb,
				hc = hN.hd(),
				a3b = cJ * hc.hg,
				cJ = cJ * hc.he;
			a3S = dW.dX.kI(.06), a3T = dW.dX.kI(.04), a3P = dW.dX.kI(.06), a3Q = cJ + a3S, hP = ew.ea - a3P - a3T, a3R = a3b + cJ - a3Q - a3T
		}, this.fA = function() {
			hN.fA(),
				function() {
					let cB = data.data,
						a3e = 1,
						a3f = .125,
						a3g = data.a0C ? 65536 : 0;
					for (let u = 0; u < cB.length; u++) {
						var tY = cB[u].tY,
							nq = tY.length;
						a3e = Math.max(nq, a3e);
						for (let aE = 0; aE < nq; aE++) a3f = Math.max(tY[aE], a3f), a3g = Math.min(tY[aE], a3g)
					}
					var eM = a3Q + a3R,
						u2 = a3R / (a3f - a3g),
						u1 = 1 / (a3e - 1);
					fB.lineWidth = dZ.hh;
					for (let u = 0; u < cB.length; u++) {
						var tY = cB[u].tY,
							nq = tY.length,
							cS = a3P;
						fB.beginPath(), fB.moveTo(cS + hP, eM - u2 * (tY[nq - 1] - a3g));
						for (let aE = nq - 2; 0 <= aE; aE--) fB.lineTo(cS + u1 * aE * hP, eM - u2 * (tY[aE] - a3g));
						fB.strokeStyle = colors[u], fB.stroke()
					}(function(a3g, a3f, eM, u2) {
						fB.font = dW.dX.hn(0, .25 * a3P), dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 2), fB.fillStyle = colors[0];
						var cS = .92 * a3P;
						for (let u = 0; u < 3; u++) {
							var a8 = a3g + u * (a3f - a3g) / 2;
							fB.fillText((a8 / 1e3).toFixed(3), cS, eM - u2 * (a8 - a3g))
						}
					})(a3g, a3f, eM, u2),
					function(a3e) {
						fB.font = dW.dX.hn(0, .4 * a3T), dW.dX.textBaseline(fB, 0), dW.dX.textAlign(fB, 2), fB.fillStyle = colors[0];
						var cT = a3Q + a3R + .15 * a3T,
							mJ = (fB.fillText(dW.lQ.a3j(data.ig), a3P + hP, cT), dW.dX.textAlign(fB, 0), new Date(data.ig));
						mJ.setMinutes(mJ.getMinutes() - (a3e - 1) * a3X[data.q]), fB.fillText(dW.lQ.a3j(mJ), a3P, cT)
					}(a3e),
					function(a3e, a3g, a3f) {
						if (a3W && !(a3e < 2)) {
							var au = (a3U - a3P) / hP * (a3e - 1),
								a3k = Math.floor(au),
								a3l = Math.floor(1 + au),
								a3m = au - a3k;
							let a3n = 1e5,
								a3o = -1,
								a3p = -1;
							var mJ, a3q = a3f - (a3f - a3g) * (a3V - a3Q) / a3R,
								cB = data.data;
							for (let u = 0; u < cB.length; u++) {
								var a3r, tY = cB[u].tY;
								tY.length <= a3l || (tY = tY[a3k] + a3m * (tY[a3l] - tY[a3k]), (a3r = Math.abs(a3q - tY)) < a3n && (a3n = a3r, a3o = u, a3p = tY))
							} - 1 !== a3o && (a3f = a3Q + a3R - (a3p - a3g) / (a3f - a3g) * a3R, fB.lineWidth = .5 * dZ.hh, fB.strokeStyle = colors[a3o], fB.beginPath(), fB.moveTo(a3P, a3f), fB.lineTo(a3U, a3f), fB.lineTo(a3U, a3Q + a3R), fB
							.stroke(), fB.beginPath(), fB.arc(a3U, a3f, .1 * a3P, 0, 2 * Math.PI), fB.fillStyle = colors[a3o], fB.fill(), a3g = a3Q + a3R + .15 * a3T, dW.dX.textAlign(fB, 1), (mJ = new Date(data.ig)).setSeconds(mJ.getSeconds() -
									60 * (a3e - au - 1) * a3X[data.q]), a3e = dW.lQ.a3j(mJ), au = dW.dX.measureText(a3e), mJ = eS.hq(a3U, a3P + .5 * au, a3P + hP - .5 * au), fB.fillStyle = dW.color.a3a(70, 50, 20), fB.fillRect(mJ - .52 * au,
									a3Q + a3R, 1.04 * au, .55 * a3T), fB.fillStyle = colors[0], fB.fillText(a3e, mJ, a3g), fB.font = dW.dX.hn(0, .25 * a3P), dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 2), mJ = .92 * a3P, a3e = (a3p / 1e3)
								.toFixed(3), au = dW.dX.measureText(a3e), a3g = mJ - 1.04 * au, fB.fillStyle = dW.color.a3a(70, 50, 20), fB.fillRect(a3g, a3f - .1625 * a3P, a3P - a3g, .275 * a3P), fB.fillStyle = colors[a3o], fB.fillText(a3e, mJ,
									a3f))
						}
					}(a3e, a3g, a3f)
				}(), fB.lineWidth = dZ.hh, fB.strokeStyle = hk.hl, fB.beginPath(), fB.moveTo(a3P, a3Q), fB.lineTo(a3P, a3Q + a3R), fB.lineTo(a3P + hP, a3Q + a3R), fB.stroke();
			{
				let fontSize = .5 * a3S,
					cB = (fB.font = dW.dX.hn(0, fontSize), dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 0), data.data),
					s = cB.length,
					cT = a3Q - .5 * a3S,
					af = "";
				for (let u = 0; u < s; u++) cB[u].name = cB[u].name, af += cB[u].name + "  ";
				af = af.trim();
				let a3u = dW.dX.measureText(af),
					cS = .5 * (ew.ea - a3u);
				a3u > ew.ea && (cS = 0, fB.font = dW.dX.hn(0, ew.ea / a3u * fontSize));
				for (let u = 0; u < s; u++) fB.fillStyle = colors[u], fB.fillText(cB[u].name, cS, cT), cS += dW.dX.measureText(cB[u].name + "  ")
			}
		}, this.f3 = function(hr, hs) {
			a3x(hr, hs)
		}, this.hv = function(hr, hs) {
			a3x(hr, hs)
		}, this.hy = function(cJ) {
			2 === cJ && hN.hz[0].i0()
		}, hN = new hU("Clan Chart, " + fE.fF.data[125].ki[data.q] + ", " + dW.lQ.a3Y(data.ig), [new hV("❌ " + fI.dq[92], function() {
			b3.j.hW()
		}), new hV("🛠️ Custom", function() {
			b3.b4(14)
		})], !1), cJ = dW.color, colors = [hk.hl, cJ.a3a(255, 0, 0), cJ.a3a(0, 200, 0), cJ.a3a(80, 80, 255), cJ.a3a(255, 255, 0), cJ.a3a(255, 0, 255), cJ.a3a(0, 255, 255), cJ.a3a(255, 140, 0), cJ.a3a(128, 128, 128), cJ.a3a(0, 255, 140)], cJ = 6e4 *
		a3X[data.q], data.ig = new Date(data.ig.getTime() + (cJ - data.ig.getTime() % cJ) - 6e4 * data.ig.getTimezoneOffset())
}

function a3y() {
	var a1h, a3z, a40, a41, pi = !1;

	function a42() {
		pi = !0, a1h = -1, a3z = new Array(4);
		for (var u = 3; 0 <= u; u--) a3z[u] = !1;
		var a43 = Math.floor(1 + .02 * ew.min);
		a40 = new Array(4), (a41 = new Array(4))[1] = a41[3] = a40[0] = a40[2] = 0, a41[0] = a40[3] = -a43, a40[1] = a41[2] = a43
	}

	function a45() {
		if (-1 !== a1h)
			if (0 !== aM.gj && rX.ld()) {
				for (var a47 = !1, u = 3; 0 <= u; u--) a3z[u] && (a47 = !0, uh += a40[u], ui += a41[u], nD.hv(a40[u], a41[u]), mC.tK());
				a47 ? gh.hu = !0 : a49.a48()
			} else a49.a48()
	}
	this.a44 = function(au) {
		0 !== aM.gj && rX.ld() && (pi || a42(), a3z[au] = !0, -1 === a1h) && (a1h = setInterval(a45, 20), a45())
	}, this.a46 = function(au) {
		if (0 !== aM.gj && (pi || a42(), a3z[au] = !1, -1 !== a1h)) {
			for (var a47 = !1, u = 3; 0 <= u; u--) a47 = a47 || a3z[u];
			a47 || this.a48()
		}
	}, this.a48 = function() {
		if (pi && -1 !== a1h) {
			for (var u = 3; 0 <= u; u--) a3z[u] = !1;
			clearInterval(a1h), a1h = -1
		}
	}
}

function d9() {
	this.uB = function(i3) {
		var username = fE.fF.data[122].value.slice(0, 20),
			username = (f.g(22 + 16 * username.length + 18), f.h(1, 0), f.h(6, 1), f.h(10, mN), i.dA.o(username), dW.color.xU(fE.j.kn()));
		f.h(6, username[0]), f.h(6, username[1]), f.h(6, username[2]), i.j.iE = i3, i.j.send(i3, f.k)
	}, this.a4A = function(a4B) {
		return f.g(11), f.h(1, 0), f.h(6, 2), f.h(4, a4B), i.j.send(i.j.iE, f.k), !0
	}
}

function a4C() {
	function i7(fc, a4D) {
		if (function(fc, a4P) {
				var a4E = eA.od(fc),
					a4Q = Math.abs(eA.a2U(a4P) - eA.a2U(a4E)),
					a4E = Math.abs(eA.a2V(a4P) - eA.a2V(a4E));
				return 0 !== Math.max(a4Q, a4E) && (function(fb, fc, a4Q, a4R) {
					var a4T = eA.a4U(fb),
						fb = eA.a4W(fb),
						a4X = eA.a4U(fc),
						fc = eA.a4W(fc),
						a4X = a4X - a4T,
						fc = fc - fb,
						a4b = Math.abs(a4X),
						a4c = Math.abs(fc),
						a4X = 0 < a4X ? 1 : 3,
						fc = 0 < fc ? 2 : 0;
					a4c < a4b ? a4f(a4T, fb, a4T + a4b, fb + a4c, a4X, fc, a4Q) : a4f(fb, a4T, fb + a4c, a4T + a4b, fc, a4X, a4R)
				}(fc, eA.a4K(a4P), a4Q, a4E), !0)
			}(fc, a4D)) {
			if (0 === cC.a4N[0]) return !!cz.ci(a4D << 2);
			if (function(a4P) {
					if (cz.ci(a4P << 2)) return 1;
					return function(a4P) {
						var u, jP, a4g = du.j.a4g,
							a4l = eA,
							s = cC.a4N[0],
							a4m = 4 * a4P;
						for (u = s - 1; 0 <= u; u--)
							if (jP = a4g[u], a4m = a4l.a4n(a4m, jP + 2 & 3), cz.ci(a4m)) return cC.a4N[0] = u, cC.e8[1] = a4m >> 2, cC.e8[2] = 1 + jP, 1;
						return
					}(a4P)
				}(a4D)) {
				var u, a4D = eA.od(fc),
					q7 = cb,
					a4g = du.j.a4g,
					s = cC.a4N[0] - 1,
					a4m = 4 * a4D,
					a4p = eA.a4p;
				for (u = 0; u < s; u++)
					if (a4m += a4p[a4g[u]], 0 !== q7[a4m + 3] || 2 !== q7[a4m + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function a4f(a4T, a4V, a4X, a4Y, a4d, a4e, a4Q) {
		for (var cT, a4g = du.j.a4g, eD = 0, a4h = 0, b6 = a4Y - a4V, ea = a4X - a4T, a4i = a4T % 16, u = 1; u <= a4Q; u++) a4g[eD++] = a4d, a4g[eD] = a4e, eD += (cT = (b6 * (a4i + (u << 4)) + .5) / ea >> 4) - a4h, a4h = cT;
		cC.a4j(cC.a4N, eD)
	}
	this.eG = function(player, a4D) {
		var jP, a4E, a4F = eA.a4G(player, a4D);
		return a4F !== a4D && (jP = eA.a4H(a4F, a4D), a4E = eA.a4I(a4F, jP), !(!cz.ci(a4E << 2) && (jP = eA.a4J(a4F, a4D, jP), a4E = eA.a4I(a4F, jP), cz.cV(a4E << 2) || !cz.ci(a4E << 2)) || (cC.e8[0] = a4E, cC.e8[1] = a4D, cC.e8[2] = 0, !i7(eA
			.a4K(a4E), a4D)) || 0 !== cC.e8[2] && eA.a4L(player, cC.e8[1] + eA.eB[cC.e8[2] - 1] << 2)))
	}, this.a2J = function(a4D) {
		var fb = du.j.oa[cC.e8[3]];
		return cC.e8[1] = a4D, cC.e8[2] = 0, i7(fb, a4D)
	}
}

function a4q() {
	this.yi = function() {
		var a4t, a4u;
		return !(uq < 3 || aW.gC[ky[0]] >= aM.ux >> 1) && (aM.bz ? (a4t = rJ.yB(), a4u = rJ.yC(rU.a4v()), !(a4t <= 2 * a4u)) : function() {
			var a4t = rJ.yB();
			if (2 * aW.dt[ky[0]] >= a4t) return !1;
			return !0
		}())
	}
}

function a4w() {
	this.j = new a4x, this.f7 = 0;
	let map = new Map;
	this.b4 = function(au, po = this.f7, xE = void 0) {
		gh.hu = !0, 0 === au && (0 === f1.f2() ? au = 5 : eu.di.setState(13)), this.hY(), this.f7 = au;
		let aZ = map.get(au);
		if (!aZ || 4 === au || 7 === au || 8 === au || 9 === au || 10 === au || 11 === au || 13 === au) {
			if (0 === au) return void map.clear();
			1 === au ? aZ = new a4y : 2 === au ? aZ = new a4z : 3 === au ? aZ = new a1L : 4 === au || 9 === au || 10 === au || 11 === au || 13 === au ? aZ = xE : 5 === au ? aZ = new sb : 6 === au ? aZ = new a2j : 7 === au ? aZ = new a50 : 8 ===
				au ? aZ = xE : 12 === au ? aZ = new hM : 14 === au && (aZ = new l6), aZ.po = po, map.set(au, aZ)
		}
		aZ.show(xE)
	}, this.i8 = function() {
		this.f0() && this.b4(map.get(this.f7).po)
	}, this.l8 = function(au) {
		this.f0() && (this.hY(), gh.hu = !0, this.f7 = au, map.get(au).show())
	}, this.hY = function() {
		this.f0() && map.get(this.f7).hY()
	}, this.fH = function() {
		this.f0() && (map.get(this.f7).hY(), map.clear(), this.f7 = 0, eu.di.setState(13))
	}, this.fA = function() {
		var aZ;
		this.f0() && (aZ = map.get(this.f7)).fA && aZ.fA()
	}, this.resize = function() {
		if (!this.f0()) return !1;
		map.get(this.f7).resize()
	}, this.f3 = function(cS, cT) {
		var aZ;
		this.f0() && (aZ = map.get(this.f7)).f3 && aZ.f3(cS, cT)
	}, this.hv = function(cS, cT) {
		var aZ;
		this.f0() && (aZ = map.get(this.f7)).hv && aZ.hv(cS, cT)
	}, this.hx = function() {
		var aZ;
		this.f0() && (aZ = map.get(this.f7)).hx && aZ.hx()
	}, this.hw = function(hr, hs, deltaY) {
		var aZ;
		this.f0() && (aZ = map.get(this.f7)).hw && aZ.hw(hr, hs, deltaY)
	}, this.hy = function(code) {
		var aZ;
		return !!this.f0() && ((aZ = map.get(this.f7)).hy && aZ.hy(code), !0)
	}, this.a0 = function() {
		var aZ;
		this.f0() && (aZ = map.get(this.f7)) && aZ.a0 && aZ.a0()
	}, this.f0 = function() {
		return 0 < this.f7
	}, this.gk = function() {
		return map.get(this.f7)
	}, this.a2k = function(au) {
		return map.get(au)
	}
}

function a51() {
	var a52, a53, a20, lw, ll, a54, a55, a56, a57, iT, fontSize, ic, a58, pm, a59 = 0;

	function a5C() {
		return i.j.pa[(a58 + a59) % i.j.pZ]
	}

	function a5A() {
		a58++, ic = gh.ig, i.j.mx(a5C(), 4) && (pm = !0, i.d8.uB(a5C()))
	}

	function a5D() {
		0 === a58 ? py.iH(3249) : (a58 === i.j.pZ - 1 && (a58 = -1), a5A())
	}

	function a5L(cT, a1Z, a5K) {
		var eK = Math.floor((ew.ea - lw) / 2) + a55,
			eY = eK + Math.floor(a5K * (lw - 2 * a55));
		fB.lineWidth = a1Z, fB.beginPath(), fB.moveTo(eK, cT), fB.lineTo(eY, cT), fB.lineTo(Math.floor(eK - a55 + a5K * lw), cT + a20), fB.lineTo(eK - a55, cT + a20), fB.closePath()
	}
	this.aD = function() {
		f1.setState(6), a52 = 0, a53 = 1, a56 = "rgba(0,220,120,0.4)", a57 = "rgba(0,0,0,0.8)", this.resize(), gh.hu = !0, a58 = 0, pm = !1, a5A()
	}, this.resize = function() {
		lw = Math.floor((eu.di.ev() ? .5 : .25) * ew.ex), ll = lw + 12, a20 = Math.floor(.125 * lw), a55 = 3 * a20, a54 = Math.floor(.225 * lw), fontSize = Math.floor(.3 * a20), iT = dW.dX.hn(0, fontSize)
	}, this.a5B = function(aE) {
		a59 = aE
	}, this.iD = function(i3) {
		i3 === a5C() && (pm = !1, a5D())
	}, this.a5E = function(i3) {
		6 !== f1.f2() || pm || (ic = gh.ig, pm = !0)
	}, this.f3 = function(cS, cT) {
		var eK = Math.floor((ew.ea - ll) / 2),
			eM = Math.floor(.5 * (ew.b6 - dZ.gap - a20 - a54)) + a20 + dZ.gap;
		return eK < cS && cS < eK + ll && eM < cT && cT < eM + a54 && (this.a5G(), tI.hv(cS, cT, !1), !0)
	}, this.a5G = function() {
		i.j.iL(3260), b3.j.iK()
	}, this.a0 = function() {
		6 === f1.f2() && (pm ? gh.ig > ic + 12e3 && py.iH(3250) : gh.ig > ic + 12e3 && a5D(), 100 < (a52 += .07 * a53 * (a52 < 16 ? 5 + a52 : 84 < a52 ? 105 - a52 : 17)) ? (a52 = 100, a53 = -1) : a52 < 0 && (a52 = 0, a53 = 1), a56 = "rgba(0," +
			Math.floor(190 - 1.9 * a52) + "," + Math.floor(120 - 1.2 * a52) + "," + (.4 + .004 * a52) + ")", a57 = "rgba(0," + Math.floor(1.9 * a52) + "," + Math.floor(1.2 * a52) + "," + (.8 - .004 * a52) + ")", gh.hu = !0)
	}, this.fA = function() {
		var cS = Math.floor((ew.ea - ll) / 2),
			cT = Math.floor(.5 * (ew.b6 - dZ.gap - a20 - a54));
		! function(title, cT, a1Z, a5K) {
			fB.fillStyle = a57, a5L(cT, a1Z, 1), fB.fill(), fB.fillStyle = a56, a5L(cT, a1Z, a5K), fB.fill(), fB.strokeStyle = hk.hl, a5L(cT, a1Z, 1), fB.stroke(),
				function(a5N, cT) {
					dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1), fB.font = iT, fB.fillStyle = hk.hl, fB.fillText(a5N, Math.floor(.5 * ew.ea), Math.floor(cT + .58 * a20))
				}(title, cT)
		}("Loading", cT, 3, a52 / 100),
		function(cS, cT, ea, b6, dq) {
			fB.fillStyle = hk.a5J, fB.fillRect(cS, cT, ea, b6), fB.lineWidth = 3, fB.strokeStyle = hk.hl, fB.strokeRect(cS, cT, ea, b6);
			var s = Math.floor(.3 * b6);
			dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1), fB.font = dW.dX.hn(0, s), fB.fillStyle = hk.hl, fB.fillText(dq, Math.floor(cS + ea / 2), Math.floor(cT + b6 / 2 + .1 * s))
		}(cS, cT + a20 + dZ.gap, ll, a54, "Back")
	}
}

function lG() {
	var dU;
	this.a2m = [], this.dU = document.createElement("div"), this.lH = function(af) {
		var title = document.createElement("h2");
		title.textContent = af, title.style.margin = "0", title.style.marginBottom = "0.6em", title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.dU.appendChild(title)
	}, this.lI = function(af) {
		var a5O = document.createElement("p");
		return a5O.textContent = af, a5O.style.fontSize = "0.75em", a5O.style.lineHeight = "1.2em", a5O.style.marginBottom = "0", this.dU.appendChild(a5O), a5O
	}, this.a5P = function(dT, fontSize = "1em") {
		var dU = document.createElement("div");
		dU.innerHTML = dT, dU.style.fontSize = fontSize, dU.style.lineHeight = "1.2em", this.dU.appendChild(dU)
	}, this.lZ = function(a5Q) {
		for (var a5R = a5Q.a5R, s = a5R.length, u = 0; u < s; u++) this.dU.appendChild(a5R[u])
	}, this.lN = function(lY) {
		this.a2m.push(lY), this.dU.appendChild(lY.cO)
	}, this.resize = function() {
		for (var s = this.a2m.length, u = 0; u < s; u++) this.a2m[u].resize && this.a2m[u].resize()
	}, (dU = this.dU).style.position = "absolute", dU.style.height = "auto", dU.style.padding = "0.5em"
}

function a5S() {
	var player, h8, zZ, zT, eK, eM, eY, eZ, au, a5T, id;

	function a5a() {
		var jN;
		if (cz.cm(zZ)) jN = aM.aV;
		else {
			if ((jN = cz.ce(zZ)) === player) return void a5c(!0);
			if (!eC(player, jN)) return function(jN) {
				var max = aW.gC[jN] * aM.uw - aW.dt[jN];
				max <= 0 || (h8 -= max = max < h8 ? max : h8, player === aM.gb && (al.y8(max, 0, jN), l2.l3[16] += max), jN === aM.gb && (al.a5g(max, player), l2.l3[10] += max), aW.dt[jN] += max, nD.yA(jN, max))
			}(jN), void a5c(!0)
		}
		player === aM.gb && (l2.l3[13] += h8), rM.l4(player, id), g7.a5e(player, a5T), aW.g1[player].push(zT), g7.jI(player, h8, jN), jK.jL(player, !0)
	}

	function a5c(a5h) {
		rM.l4(player, id), g7.a5e(player, a5T), a5h && (aW.dt[player] += h8)
	}

	function a5W() {
		cz.ck(zZ, player) && cz.cq(zZ)
	}

	function a5V(u, a5j, a5U, eV, ld) {
		if (au = u, id = a5j, player = a5U, eK = cz.cP(eV), eM = cz.cQ(eV), eY = cz.cP(ld), eZ = cz.cQ(ld), zT = zZ = cz.cR(eK, eM), -1 !== (a5T = g7.we(player, id))) return h8 = g7.wd(player, a5T), 1;
		a5W(), rM.l4(player, id)
	}
	this.a0 = function(u, id, a5U, eV, ld) {
		a5V(u, id, a5U, eV, ld) && (a5W(), function() {
			var a5i = cG(h8, 128);
			h8 -= a5i = a5i < 1 ? 1 : a5i, player === aM.gb && (l2.l3[15] += a5i);
			if (h8 <= aM.gJ) return player === aM.gb && (l2.l3[15] += h8), void a5c(!1);
			return g7.g8(player, a5T, h8), 1
		}()) && (u = cz.cR(eK, eM), zZ = Math.abs(eY - eK) >= Math.abs(eZ - eM) ? u + jQ[eK < eY ? 1 : 3] : u + jQ[eM < eZ ? 2 : 0], eK = cz.cP(zZ), eM = cz.cQ(zZ), rM.wR(au, zZ), ! function() {
			if (cz.cl(zZ)) return;
			return 1
		}() ? a5a() : cz.ci(zZ) && cz.cw(zZ, player))
	}, this.wV = function(a5U, eV) {
		player = a5U, zZ = cz.cR(cz.cP(eV), cz.cQ(eV)), a5W()
	}
}

function a5k() {
	var k9, kA, a5l, font, a5m = 0,
		a5n = !1,
		a5o = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a5p = 5;

	function a61() {
		if (a5n) {
			var u, s = a5o.length,
				ez = Math.floor(.5 * a5l.b6),
				b6 = s * ez,
				cS = Math.floor(Math.floor(a5l.cS) + .3 * a5l.ea - .5),
				cT = Math.floor(Math.floor(a5l.cT) - b6),
				ea = Math.floor(.4 * a5l.ea + 2.5);
			for (fB.fillStyle = hk.m0, fB.fillRect(cS, cT, ea, b6), fB.fillStyle = hk.a69, fB.fillRect(cS, cT + a5p * ez, ea, ez), fB.fillStyle = hk.hl, fB.fillRect(cS, cT, 2, b6), fB.fillRect(cS, cT, ea, 2), fB.fillRect(cS + ea - 2, cT, 2, b6), u =
				1; u < s; u++) fB.fillRect(cS, cT + u * ez, ea, 2);
			for (fB.fillStyle = hk.hl, dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1), fB.font = dW.dX.hn(0, .6 * ez), cS += .5 * ea, u = 0; u < s; u++) fB.fillText(a6A(u), cS, cT + (u + .6) * ez)
		}
		fB.drawImage(k9, Math.floor(a5l.cS), Math.floor(a5l.cT))
	}

	function iS(mF) {
		var cS, eK, eM, ez;
		kA.clearRect(0, 0, Math.floor(a5l.ea), Math.floor(a5l.b6)), kA.fillStyle = hk.m0, kA.fillRect(0, 0, Math.floor(a5l.ea), Math.floor(a5l.b6)), aM.uy && (kA.fillStyle = hk.a69, kA.fillRect(0, 0, Math.floor(.3 * a5l.ea), Math.floor(a5l.b6))), kA
			.fillStyle = hk.hl, kA.fillText("Hide UI", .15 * a5l.ea, .5 * a5l.b6), kA.fillRect(Math.floor(.3 * a5l.ea - .5), 0, 2, Math.floor(a5l.b6)), cS = .5 * a5l.ea, kA.fillText("Replay Speed", cS, .31 * a5l.b6), kA.fillText(a6A(a5p), cS, .69 *
				a5l.b6), kA.fillRect(Math.floor(.7 * a5l.ea - .5), 0, 2, Math.floor(a5l.b6)), mF.vQ ? (cS = Math.floor(.02 * a5l.ea), mF = Math.floor(.025 * a5l.ea), eK = Math.floor(.85 * a5l.ea - cS - .5 * mF), eM = Math.floor(.25 * a5l.b6), ez =
				Math.floor(a5l.b6) - 2 * eM, kA.fillRect(eK, eM, cS, ez), kA.fillRect(eK + cS + mF, eM, cS, ez)) : function() {
				var ea = Math.floor(.46 * a5l.b6),
					b6 = Math.floor(.23 * a5l.b6),
					cS = Math.floor(.85 * a5l.ea - .5 * ea + ea / 12),
					cT = Math.floor(.5 * a5l.b6 - b6);
				kA.beginPath(), kA.moveTo(cS, cT), kA.lineTo(cS + ea, cT + b6), kA.lineTo(cS, cT + (b6 << 1)), kA.fill()
			}(), kA.fillRect(0, 0, Math.floor(a5l.ea), 2), kA.fillRect(0, 0, 2, Math.floor(a5l.b6)), kA.fillRect(0, Math.floor(a5l.b6) - 2, Math.floor(a5l.ea), 2), kA.fillRect(Math.floor(a5l.ea - 2), 0, 2, Math.floor(a5l.b6))
	}

	function a6A(u) {
		return 5 === u ? "Normal" : "" + a5o[u]
	}
	this.vQ = !1, this.aD = function() {
		aM.ga && (a5p = 5, this.vQ = !1, a5n = !1, a5l = new hX([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a5q = function() {
		return a5o[a5p]
	}, this.cQ = function() {
		return a5l.cT
	}, this.m7 = function(iV) {
		return !!aM.ga && a5l.cS + a5l.ea > ew.ea - iV - dZ.gap
	}, this.resize = function() {
		aM.ga && (a5l.resize(), a5l.cT -= (ls.lt() - 1) * dZ.gap, font = dW.dX.hn(0, .3 * a5l.b6), (k9 = document.createElement("canvas")).width = Math.floor(a5l.ea), k9.height = Math.floor(a5l.b6), (kA = k9.getContext("2d", {
			alpha: !0
		})).font = font, dW.dX.textAlign(kA, 1), dW.dX.textBaseline(kA, 1), iS(this))
	}, this.a5r = function(a5s) {
		a5s !== aM.uy && (aM.uy = a5s, rU.resize(), gh.hu = !0, aM.ga) && (a5m = gh.ig + 2e3, iS(this))
	}, this.f3 = function(cS, cT) {
		if (!aM.ga) return !1;
		if (cS < a5l.cS || cT < a5l.cT || cS > a5l.cS + a5l.ea) return a5n && function(mF, cS, cT) {
			var s = a5o.length,
				ez = Math.floor(.5 * a5l.b6),
				b6 = s * ez,
				eK = Math.floor(Math.floor(a5l.cS) + .3 * a5l.ea - .5),
				b6 = Math.floor(Math.floor(a5l.cT) - b6),
				ea = Math.floor(.4 * a5l.ea + 2.5);
			return a5n = !1, gh.hu = !0, cS < eK || eK + ea < cS || cT < b6 || (a5p = a60(0, Math.floor((cT - b6) / ez), s - 1), iS(mF)), !0
		}(this, cS, cT);
		if ((cS -= a5l.cS) < .3 * a5l.ea) a5n = !1, this.a5r(!aM.uy);
		else {
			if (cS < .7 * a5l.ea) return a5n = !a5n, gh.hu = !0;
			this.a5u(!1)
		}
		return !0
	}, this.a5u = function(a5v) {
		2 === aM.gj ? (this.a5r(!1), b3.b4(3)) : (a5n = !1, this.vQ = !this.vQ, this.vQ ? (m5.m6 && m5.a5w(), eu.di.setState(1)) : a5v || m5.a5x(), gh.hu = !0, iS(this))
	}, this.a5y = function() {
		this.vQ = !1, m5.a5x(), gh.hu = !0, iS(this)
	}, this.a5z = function(cS, cT) {
		return !!aM.uy && (m5.f3(cS, cT) || (aM.ga ? ((gh.ig > a5m || !this.f3(cS, cT)) && mC.f3(cS, cT), gh.hu = !0, a5m = gh.ig + 2e3) : mC.f3(cS, cT)), !0)
	}, this.a0 = function() {
		aM.ga && aM.uy && gh.ig > a5m - 1e3 && gh.ig < a5m && (gh.hu = !0)
	}, this.s8 = function() {
		aM.ga && (this.vQ = !1, gh.hu = !0, iS(this))
	}, this.fA = function() {
		if (aM.ga) {
			if (aM.uy) {
				if (gh.ig > a5m) return;
				if (gh.ig > a5m - 1e3) return fB.globalAlpha = a60(0, (1e3 - (gh.ig - (a5m - 1e3))) / 1e3, 1), a61(), void(fB.globalAlpha = 1)
			}
			a61()
		}
	}
}

function a6B() {
	var i6 = 0;
	this.aD = function() {
		tI.aD(), i6 = 0
	}, this.setState = function(a6C) {
		i6 = a6C
	}, this.f2 = function() {
		return i6
	}, this.go = function() {
		this.setState(8), iM.iN(), b3.fH()
	}, this.hy = function(cO) {
		if (!cE.zQ) return !1;
		if (!(gh.ig < 400)) {
			if ("Enter" === cO.key || "Escape" === cO.key) {
				if (this.a6D()) return !0;
				if ("Enter" === cO.key) {
					if (0 === i6) return !0;
					if (7 === i6) return !0
				}
			}
			return !1
		}
	}, this.tL = function() {
		a6E.resize()
	}, this.a6D = function() {
		return !!a6E.hY()
	}, this.f3 = function(cS, cT) {
		!cE.zQ || a6E.f3(cS, cT) || 6 === i6 && iC.f3(cS, cT) || 2 === i6 && ge.f3(cS, cT) || (mk.f3(cS, cT), 0 !== i6 && 7 === i6 && iM.f3(cS, cT))
	}, this.hv = function(cS, cT) {
		if (!mk.a1k) {
			if (2 === i6 && ge.hv(cS, cT)) return void mk.j0();
			if (tI.hv(cS, cT, !0)) return
		}
		mk.hv(cS, cT)
	}, this.click = function(cS, cT) {
		mk.a1u(), sw.f3(cS, cT, !1) || mh.f3(cS, cT)
	}, this.hw = function(cS, cT, deltaY) {}, this.tM = function() {
		tI.a1q(), 0 !== i6 && 7 === i6 && iM.resize(), gh.hu = !0
	}, this.fA = function() {
		8 !== i6 && 10 !== i6 && (fB.imageSmoothingEnabled = !0, this.oF(), 0 !== i6 && (mk.fA(), sv.fA(), this.su(), sw.fA(), mh.fA()), 0 !== i6 && (2 === i6 ? ge.fA() : 6 === i6 ? iC.fA() : 7 === i6 && iM.fA()), a6E.fA(), b3.fA())
	}, this.oF = function() {
		var a6G, a6F;
		if (makeMainMenuTransparent) fB.clearRect(0, 0, ew.ea, ew.b6);
		else cE.zQ ? (a6F = ew.ea / cE.cF, a6G = ew.b6 / cE.ed, fB.setTransform(a6F = a6G < a6F ? a6F : a6G, 0, 0, a6F, Math.floor((ew.ea - a6F * cE.cF) / 2), Math.floor((ew.b6 - a6F * cE.ed) / 2)), fB.drawImage(cE.j1, 0, 0), fB.setTransform(1,
			0, 0, 1, 0, 0), fB.fillStyle = hk.a5J) : fB.fillStyle = hk.hm, fB.fillRect(0, 0, ew.ea, ew.b6)
	}, this.su = function() {
		var cT = Math.floor(.3 * ew.b6),
			k9 = er.oH("territorial.io"),
			pX = (pX = 1.75 * ew.b6 / k9.width) * k9.width < .98 * ew.ea ? .98 * ew.ea / k9.width : pX,
			cS = (fB.globalAlpha = .15, fB.imageSmoothingEnabled = !1, Math.floor(.5 * (ew.ea - pX * k9.width))),
			cS = Math.floor(cS / pX),
			cT = Math.floor(cT - .5 * k9.height * pX),
			cT = Math.floor(cT / pX);
		fB.setTransform(pX, 0, 0, pX, cS, cT), fB.drawImage(k9, cS, cT), fB.setTransform(1, 0, 0, 1, 0, 0), fB.globalAlpha = 1, fB.imageSmoothingEnabled = !0
	}
}

function a6H() {
	var a6I;
	this.hG = null, this.aD = function() {
		a6I = [], 9 === aM.aN && this.a6J()
	}, this.a6J = function() {
		var u, a6K = [50, 74, 95, 150, 190, 333];
		if (this.ab = 0, this.hG = [0, 0, 0, 0, 0, 0], aM.aU <= a6K[0]) this.hG[0] = Math.max(eS.eT(aM.aU * (512 - aM.aU), a6K[0]), 13), aM.hA = this.hG[0];
		else
			for (aM.hA = aM.aV - aM.aU, u = 1; u < 6; u++)
				if (aM.aU <= a6K[u]) {
					this.hG[u - 1] = 512 - a6K[u - 1] - cG((512 - a6K[u - 1]) * (aM.aU - a6K[u - 1]), a6K[u] - a6K[u - 1]), this.hG[u] = 512 - aM.aU - this.hG[u - 1];
					break
				} aM.ac = aM.aU + aM.hA
	}, this.yW = function(player) {
		a6I.push({
			player: player,
			nq: 14 + aT.hF(20)
		})
	}, this.a0 = function() {
		var u;
		if (9 === aM.aN)
			for (u = a6I.length - 1; 0 <= u; u--) --a6I[u].nq <= 0 && (nD.nE(a6I[u].player, 0, nd.ne.ni + nd.ne.a6M), a6I.splice(u))
	}
}

function a6N() {
	this.a1W = new yo, this.vO = new a6O, this.aD = function() {
		eu.di.a6P()
	}
}

function a6Q() {
	this.a4N = new Uint16Array(2), this.jJ = new Uint32Array(2), this.a6R = new Uint32Array(2), this.cD = new Uint8Array(4), this.pA = new Uint8Array(4), this.e8 = new Uint32Array(5), this.jA = new Uint32Array(8), this.a6S = new Uint16Array(512),
		this.a4j = function(cB, kS) {
			return cB[0] = kS, cB
		}, this.a6T = function(cB, kS, kT) {
			return cB[0] = kS, cB[1] = kT, cB
		}, this.a6U = function(cB, kS, kT, eg) {
			return cB[0] = kS, cB[1] = kT, cB[2] = eg, cB
		}, this.a6V = function(cB, kS, kT, eg, a6W) {
			return cB[0] = kS, cB[1] = kT, cB[2] = eg, cB[3] = a6W, cB
		}
}

function a6X() {
	var b6, k9, kA, a6Y, a6Z, a6a, a6b, lm, a6c, a6d, a6e, a6f, a6g = !1,
		ej = (this.f0 = !1, this.ea = 0, new Array(2));

	function iS() {
		var ea = rT.ea,
			aZ = (lm = !1, wk(kA, ea, b6), Math.floor(ea / 2));
		1 === a6Y ? (kA.fillStyle = hk.a6i, kA.fillRect(aZ, 0, aZ, b6)) : -1 === a6Y && (kA.fillStyle = hk.a1x, kA.fillRect(0, 0, aZ, b6)), wl(kA, ea, b6, 2);
		var aZ = (aZ = Math.floor(.25 * b6)) < 2 ? 2 : aZ,
			a6k = (kA.fillStyle = hk.a6j, Math.floor((b6 - 4) * a6Z[1] / a6a[1]));
		0 < a6k && kA.fillRect(2, b6 - 2 - a6k, aZ, a6k), 0 < (a6k = Math.floor((b6 - 4) * a6Z[0] / a6a[0])) && kA.fillRect(ea - 2 - aZ, b6 - 2 - a6k, aZ, a6k);
		aZ = (aZ = Math.floor(b6 / 8)) < 2 ? 2 : aZ, vr(kA, Math.floor(.4 * b6), 0, b6, aZ, .5, !1), vr(kA, Math.floor(ea - 1.4 * b6), 0, b6, aZ, .5, !0), a6k = 1.1 * b6 / ej[0].width;
		kA.imageSmoothingEnabled = !0, kA.setTransform(a6k, 0, 0, a6k, (ea - a6k * ej[0].width) / 2, -.05 * b6), kA.drawImage(ej[+a6g], 0, 0), kA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function m9() {
		lm = !0, a6c = 140, a6Y = 0, a6b = [], rT.f0 = !1, al.s7(247, 0), a6Z[0] = a6Z[1] = 0
	}

	function cQ() {
		return ly.m7(al.a6v()) ? ly.cT - b6 - dZ.gap : ra.m7(al.a6w()) ? ra.cQ() - b6 - dZ.gap : ew.b6 - b6 - ls.lt() * dZ.gap
	}
	this.tC = function() {
		for (let u = 0; u < 2; u++) ej[u] = dW.k9.nc(er.get(3), 8 - u, hk.a6h), ej[u] = dW.k9.zo(ej[u])
	}, this.aD = function() {
		a6e = a6f = 0, this.f0 = !1, lm = a6g = !1, a6c = 140, a6Z = [a6Y = 0, 0], a6a = [1, 1], a6b = [], a6d = new Uint32Array(10), this.resize()
	}, this.resize = function() {
		b6 = ly.b6, this.ea = 4 * b6, (k9 = document.createElement("canvas")).width = this.ea, k9.height = b6, kA = k9.getContext("2d", {
			alpha: !0
		}), iS()
	}, this.lu = function() {
		lm && iS()
	}, this.f3 = function(cS, cT) {
		var eM;
		return !!this.f0 && !(cS < ew.ea - this.ea - dZ.gap || cT < (eM = cQ()) || eM + b6 < cT || (aM.ga || jx.jy.x7(cS > ew.ea - dZ.gap - this.ea / 2 ? 1 : 0), 0))
	}, this.a0 = function() {
		if (0 < a6f) 0 === --a6f && m9();
		else if (this.f0) 270 == --a6c && 2 <= a6e && function() {
			var u;
			for (u = uq - 1; 0 <= u; u--)
				if (cz.cY(uo[u])) return;
			return 1
		}() && (lm = !0, a6Z[0] += a6a[0]), 180 === a6c && 3 * a6Z[0] < a6a[0] ? m9() : a6Z[0] >= a6a[0] ? a6g ? ro.oJ.rl() : ro.oJ.rt(-1) : a6Z[1] >= a6a[1] ? a6f = 4 : a6c <= 0 && m9();
		else if (function() {
				var u;
				for (u = 9; 0 <= u; u--) 12 < Math.abs(a6d[u] - aW.gC[ky[u]]) && (a6c = 140), a6d[u] = aW.gC[ky[u]];
				if (--a6c <= 0) return 1;
				return
			}()) {
			a6g = a6n.yi(), al.a6o(a6g), this.f0 = !0, lm = !0, a6c = 360;
			{
				let mJ = 0;
				for (let u = uq - 1; 0 <= u; u--) cz.cY(uo[u]) && (mJ += aW.gC[uo[u]]);
				{
					var a8;
					a6g ? a6a[0] = Math.max(cG(3 * mJ, 4), 1) : aM.bz ? (a8 = eS.eT(100 * rU.a6q(), aM.ux), a8 += 2 * Math.max(a8 - 75, 0), a8 = eS.hq(a8 = 150 - a8, 0, 100), a8 = eS.eT(a8 * mJ, 100), a6a[0] = Math.max(a8, 1)) : a6a[0] = Math
						.max(cG(3 * mJ, 5), 1)
				}
				a6a[1] = Math.max(mJ - a6a[0], 1)
			}
			a6e++
		}
	}, this.s2 = function() {
		this.f0 && a6Z[0] < a6a[0] && m9()
	}, this.a2L = function(player, a6s) {
		var u, mJ;
		if (this.f0) {
			for (u = a6b.length - 1; 0 <= u; u--)
				if (a6b[u] === player) return;
			al.a6t(200, aW.aX[player] + (a6s ? " voted for" : " rejected") + " peace.", 257, player, a6s ? hk.a36 : hk.a6u, hk.nv, -1, !0), a6b.push(player), lm = !0, mJ = aM.aP ? a6a[0] : aW.gC[player], a6s ? a6Z[0] += mJ : a6Z[1] += mJ,
				player === aM.gb && (a6Y = a6s ? 1 : -1)
		}
	}, this.fA = function() {
		var cT;
		this.f0 && (cT = cQ(), fB.drawImage(k9, ew.ea - this.ea - dZ.gap, cT))
	}
}

function gY() {
	this.a1V = function() {
		var bM, bP = function() {
				var u, bd = aw.ax.bd,
					s = bd.length,
					max = 0;
				for (u = 0; u < s; u++) max = Math.max(max, bd[u]);
				return zM(Math.max(max, 1))
			}(),
			li = function(bP) {
				return 179 + function() {
					var u, bJ = aw.ax.b9.bJ,
						s = bJ.length,
						li = 24 * s;
					for (u = 0; u < s; u++) li += 16 * bJ[u].name.length;
					8 === aw.ax.b9.bC && (li += 14 * s);
					return li
				}() + (1 === aw.ax.b9.bJ.length ? 12 * aw.ax.b9.bN.length : 0) + function() {
					var u, bY = aw.ax.bY,
						s = bY.length,
						li = 13 * s,
						a78 = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0];
					for (u = 0; u < s; u++) li += a78[bY[u]];
					return li
				}() + function(bP) {
					return aw.ax.bd.length * (1 + bP)
				}(bP)
			}(bP);
		f.g(li + (6 - li % 6) % 6), bM = aw.ax.b9, f.h(9, b0), f.h(31, f.size), f.au += 16, f.h(9, bM.bA), f.h(14, bM.bB), f.h(4, bM.bC), f.h(1, bM.bD), f.h(6, bM.bE), f.h(14, bM.bF), f.h(10, bM.bJ.length);
		var u, bJ = aw.ax.b9.bJ,
			s = bJ.length;
		for (u = 0; u < s; u++) f.h(1, bJ[u].bH), f.h(18, (bJ[u].bI[0] << 12) + (bJ[u].bI[1] << 6) + bJ[u].bI[2]), f.h(5, bJ[u].name.length), v.w.x(bJ[u].name);
		if (8 === aw.ax.b9.bC)
			for (u = 0; u < s; u++) f.h(14, bJ[u].bL);
		return function() {
				var u, bM = aw.ax.b9;
				if (1 === bM.bJ.length)
					for (u = 0; u < bM.bN.length; u++) f.h(3, bM.bN[u]), f.h(9, bM.bO[u] - 1)
			}(),
			function(bP) {
				var u, bY = aw.ax.bY,
					kS = aw.ax.bZ,
					kT = aw.ax.ba,
					eg = aw.ax.bb,
					s = bY.length;
				for (f.h(5, bP), f.h(30, s), f.h(30, aw.ax.bd.length), u = 0; u < s; u++) f.h(4, bY[u]), f.h(9, kS[u]), 0 === bY[u] ? f.h(22, kT[u]) : 1 === bY[u] ? (f.h(10, kT[u]), f.h(10, eg[u])) : 2 === bY[u] ? (f.h(10, kT[u]), f.h(9, eg[
					u])) : 3 === bY[u] || 4 === bY[u] ? (f.h(10, kT[u]), f.h(22, eg[u])) : 5 === bY[u] || 6 === bY[u] ? f.h(10, kT[u]) : 7 === bY[u] && f.h(1, kT[u])
			}(bP),
			function(bP) {
				var u, bc = aw.ax.bc,
					bd = aw.ax.bd,
					s = bc.length;
				for (u = 0; u < s; u++) f.h(1, bc[u]), f.h(bP, bd[u])
			}(bP), f.au !== li && al.iF("Encoder Index Error: " + f.au + " " + li), f.au = 40, f.h(16, function() {
				var u, b7 = f.k,
					s = f.size,
					b8 = 0;
				for (u = 7; u < s; u++) b8 = b8 + b7[u] & 65535;
				return b8
			}()), at.aD(f.k), v.ah.a0D(v.ah.a0E(cG(li - 1, 6) + 1))
	}
}

function a79() {
	this.ea = 0, this.b6 = 0, this.et = 0, this.ey = 0, this.qt = 0, this.qu = 0, this.ez = 0, this.tQ = 0, this.a7A = 0, this.a7B = 0, this.a7C = 0, this.a7D = 0, this.a7E = 0, this.au = 0, this.eh = ["Territory", "Balance", "Interest", "Numbers"],
		this.f0 = !1, this.a7F = -1, this.a7G = !1, this.a7H = [0, 0], this.aD = function() {
			this.f0 = !1, this.a7F = -1, this.a7G = !1, this.resize()
		}, this.resize = function() {
			this.ea = ew.ea < 1.369 * ew.b6 ? ew.ea : 1.369 * ew.b6;
			var cH = eu.di.ev() && ew.ea < ew.b6 ? 1 : eu.di.ev() ? .8 : ew.ea < ew.b6 ? .65 : .59;
			this.ea = Math.floor(cH * this.ea), this.ea -= eu.di.ev() && ew.ea < ew.b6 ? 2 * dZ.gap + 2 : 0, this.b6 = Math.floor(this.ea / 1.369), this.a7E = Math.floor(this.b6 / 150), this.a7E = Math.max(this.a7E, 1.5), this.et = Math.floor(1 +
					.02 * this.ea), this.ey = Math.floor(1 + .04 * this.ea), this.ez = this.ey, this.tQ = Math.floor(1 + .075 * this.ea), this.a7B = Math.floor(1 + .1125 * this.ea), this.a7C = Math.floor(this.ea * (eu.di.ev() ? .03 : .029)), this
				.a7C = Math.max(this.a7C, 4), this.a7D = Math.floor(.035 * this.ea), this.a7D = Math.max(this.a7D, 4), this.a7A = this.b6 - 2 * this.ez - this.tQ - this.a7B, this.f0 && this.a7I()
		}, this.f3 = function(hr, hs) {
			var tj, ti;
			return !!this.f0 && (ti = hr, tj = hs, hr -= cG(ew.ea - this.ea, 2), hs -= cG(ew.b6 - this.b6, 2), hr < 0 || hs < 0 || hr >= this.ea || hs >= this.b6 || hr >= this.ea - this.a7B && hs < this.a7B ? 1 < m5.f3(ti, tj) || this.hY() : hs <
				this.a7B || (hs < this.b6 - this.tQ ? (this.a7G = !0, this.a7F = (hr - 2 * this.et - this.qt) / this.qu, 3 !== this.au && (gh.hu = !0)) : (ti = (ti = Math.floor(hr / (this.ea / this.eh.length))) < 0 ? 0 : ti >= this.eh.length ?
					this.eh.length - 1 : ti) !== this.au && (this.au = ti, this.a7I(), gh.hu = !0)), !0)
		}, this.a7J = function() {
			var a7K = Math.floor((this.a7H[0] + uh) / ug),
				a7L = Math.floor((this.a7H[1] + ui) / ug);
			a7K < 1 || a7L < 1 || a7K >= cE.cF - 1 || a7L >= cE.ed - 1 || console.log(a7K + " " + a7L)
		}, this.hv = function(hr, hs) {
			return this.a7H[0] = hr, this.a7H[1] = hs, !(!this.f0 || !this.a7G || (hr -= cG(ew.ea - this.ea, 2), hs = this.a7F, this.a7F = (hr - 2 * this.et - this.qt) / this.qu, (0 <= this.a7F && this.a7F <= 1 || 0 <= hs && hs <= 1) && (gh.hu = !0),
				0))
		}, this.a1u = function() {
			this.a7G && (this.a7G = !1)
		}, this.a5w = function() {
			this.f0 ? this.hY() : this.show()
		}, this.show = function() {
			l2.a7M < 2 || (this.f0 = !0, this.a7I())
		}, this.hY = function() {
			this.f0 = !1, this.a7F = -1, gh.hu = !0
		}, this.a7I = function() {
			this.au < 2 ? this.qt = iU.measureText(dW.lQ.m3(l2.max[this.au]), dW.dX.hn(0, this.a7C)) : 2 === this.au && (this.qt = iU.measureText(dW.lQ.m4(6, 2), dW.dX.hn(0, this.a7C))), this.qu = this.ea - 2 * this.et - this.qt - this.ey
		}, this.iS = function() {
			this.f0 && this.a7I()
		}, this.fA = function() {
			this.f0 && this.a61()
		}, this.a61 = function() {
			var cS = cG(ew.ea - this.ea, 2),
				cT = cG(ew.b6 - this.b6, 2);
			fB.setTransform(1, 0, 0, 1, cS, cT), fB.fillStyle = hk.nv, fB.fillRect(0, this.a7B, this.ea, this.b6 - this.a7B), this.a7N(), this.sx(), fB.strokeRect(0, 0, this.ea, this.b6), dW.dX.textAlign(fB, 2), fB.font = dW.dX.hn(0, this.a7C), 0 ===
				this.au ? this.a7O(l2.a7P, cS, cT) : 1 === this.au ? this.a7O(l2.up, cS, cT) : 2 === this.au ? this.a7Q(cS, cT) : 3 === this.au && (this.a7R(cS, cT), this.a7S(cS, cT)), m5.pU(Math.floor(cS + this.ea - .725 * this.a7B), Math.floor(cT +
					.275 * this.a7B), Math.floor(.45 * this.a7B)), fB.setTransform(1, 0, 0, 1, 0, 0)
		}, this.a7N = function() {
			var u, mJ;
			for (fB.lineWidth = this.a7E, dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 1), fB.strokeStyle = hk.hl, fB.font = dW.dX.hn(1, this.a7D), mJ = this.ea / this.eh.length, fB.fillStyle = hk.a7T, fB.fillRect(this.au * mJ, this.b6 - this.tQ,
					mJ, this.tQ), fB.fillStyle = hk.hl, fB.fillRect(0, this.b6 - this.tQ - .5 * this.a7E, this.ea, this.a7E), u = 1; u <= 3; u++) fB.fillRect(u * mJ, this.b6 - this.tQ, this.a7E, this.tQ);
			for (u = this.eh.length - 1; 0 <= u; u--) fB.fillText(this.eh[u], (u + .5) * mJ, this.b6 - .46 * this.tQ)
		}, this.sx = function() {
			fB.fillStyle = hk.a7U, fB.fillRect(0, 0, this.ea, this.a7B), fB.fillStyle = hk.hl, fB.fillRect(0, this.a7B - .5 * this.a7E, this.ea, this.a7E), fB.font = dW.dX.hn(1, .39 * this.a7B), fB.fillText("Statistics", Math.floor(this.ea / 2), Math
				.floor(.55 * this.a7B))
		}, this.a7O = function(cB, cS, cT) {
			var aZ = l2.max[this.au],
				iQ = (fB.setTransform(1, 0, 0, 1, cS + 2 * this.et + this.qt, cT + this.ez + this.a7B), fB.lineWidth = 2, this.a7A / Math.sqrt(aZ));
			fB.beginPath(), fB.moveTo(this.qu, this.a7A - iQ * Math.sqrt(cB[l2.a7M - 1]));
			for (var u = l2.a7M - 2; 0 <= u; u--) fB.lineTo(u * this.qu / (l2.a7M - 1), this.a7A - iQ * Math.sqrt(cB[u]));
			fB.stroke();
			cS = this.pU(cB, iQ, .5);
			cS < .95 && fB.fillText(dW.lQ.m3(aZ), -this.et, 0), .05 < Math.abs(cS - .5) && fB.fillText(dW.lQ.m3(Math.floor(aZ / 4)), -this.et, Math.floor(this.a7A / 2)), .05 < cS && fB.fillText("0", -this.et, this.a7A)
		}, this.a7Q = function(cS, cT) {
			fB.setTransform(1, 0, 0, 1, cS + 2 * this.et + this.qt, cT + this.ez + this.a7B), fB.lineWidth = 2;
			var iQ = this.a7A / Math.max(l2.max[this.au], 1);
			fB.beginPath(), fB.moveTo(this.qu, this.a7A - iQ * l2.un[l2.a7M - 1]);
			for (var u = l2.a7M - 2; 0 <= u; u--) fB.lineTo(u * this.qu / (l2.a7M - 1), this.a7A - iQ * l2.un[u]);
			fB.stroke();
			cS = this.pU(l2.un, iQ, 1), cT = l2.max[this.au] / 100;
			cS < .95 && fB.fillText(dW.lQ.m4(cT, 2), -this.et, 0), .05 < Math.abs(cS - .5) && fB.fillText(dW.lQ.m4(cT / 2, 2), -this.et, Math.floor(this.a7A / 2)), .05 < cS && fB.fillText(dW.lQ.m4(0, 2), -this.et, this.a7A)
		}, this.a7R = function(cS, cT) {
			fB.setTransform(1, 0, 0, 1, cS + .34 * this.ea, cT + 2 * this.ez + this.a7B), dW.dX.textAlign(fB, 2);
			for (var a7V = this.b6 - 4 * this.ez - this.tQ - this.a7B, u = 7; 0 <= u; u--) fB.fillText(l2.a7W[u], 0, u * a7V / 7);
			fB.setTransform(1, 0, 0, 1, cS + .39 * this.ea, cT + 2 * this.ez + this.a7B), dW.dX.textAlign(fB, 0);
			cS = l2.l3[1];
			for (fB.fillText(dW.lQ.m4(l2.l3[0] / (10 * (cS < 1 ? 1 : cS)), 1), 0, 0), u = 6; 1 <= u; u--) fB.fillText(l2.l3[u].toString(), 0, u * a7V / 7);
			fB.fillText(dW.lQ.m4(100 * (1 - aW.gC[aM.gb] / l2.l3[7]), 0), 0, a7V)
		}, this.a7S = function(cS, cT) {
			fB.setTransform(1, 0, 0, 1, cS + .79 * this.ea, cT + 2 * this.ez + this.a7B), dW.dX.textAlign(fB, 2);
			var u, a7V = this.b6 - 4 * this.ez - this.tQ - this.a7B;
			for (fB.fillStyle = hk.a7X, u = 2; 0 <= u; u--) fB.fillText(l2.a7W[u + 8], 0, u * a7V / 9);
			for (fB.fillStyle = hk.a7Y, fB.fillText(l2.a7W[11], 0, 3 * a7V / 9), fB.fillStyle = hk.a35, u = 8; 4 <= u; u--) fB.fillText(l2.a7W[u + 8], 0, u * a7V / 9);
			fB.fillStyle = hk.a34, fB.fillText(l2.a7W[17], 0, 9 * a7V / 9), fB.fillStyle = hk.a7X;
			var a7Z = dW.lQ.m3(l2.l3[8] + l2.l3[9] + l2.l3[10] + l2.l3[11]),
				a3u = fB.measureText(a7Z).width,
				cS = (fB.setTransform(1, 0, 0, 1, cS + .83 * this.ea + a3u, cT + 2 * this.ez + this.a7B), fB.fillText(dW.lQ.m3(l2.l3[8]), 0, 0), fB.fillText(dW.lQ.m3(l2.l3[9]), 0, a7V / 9), fB.fillText(dW.lQ.m3(l2.l3[10]), 0, 2 * a7V / 9), fB
					.fillStyle = hk.a7Y, fB.fillText(a7Z, 0, 3 * a7V / 9), fB.fillStyle = hk.a35, l2.l3[13] - g7.a7b(aM.gb)),
				a3u = (fB.fillText(dW.lQ.m3(l2.l3[12]), 0, 4 * a7V / 9), fB.fillText(dW.lQ.m3(cS), 0, 5 * a7V / 9), fB.fillText(dW.lQ.m3(l2.l3[14]), 0, 6 * a7V / 9), fB.fillText(dW.lQ.m3(l2.l3[15]), 0, 7 * a7V / 9), fB.fillText(dW.lQ.m3(l2.l3[16]),
					0, 8 * a7V / 9), l2.l3[12] + cS + l2.l3[14] + l2.l3[15] + l2.l3[16] + l2.l3[17]);
			fB.fillStyle = hk.a34, fB.fillText(dW.lQ.m3(a3u), 0, a7V), fB.fillStyle = hk.hl
		}, this.pU = function(cB, iQ, a1g) {
			var u, cO, kS;
			return this.a7F < 0 || 1 < this.a7F ? .25 : (u = this.a7F * (l2.a7M - 1), kS = cB[cO = Math.floor(u)], kS += (u - cO) * (cB[cO < l2.a7M - 1 ? cO + 1 : cO] - kS), fB.strokeStyle = hk.a1v, .04 < this.a7F && this.a7d(0, this.a7A - iQ * Math
					.pow(kS, a1g), u * this.qu / (l2.a7M - 1), this.a7A - iQ * Math.pow(kS, a1g)), .04 < kS / l2.max[this.au] && this.a7d(u * this.qu / (l2.a7M - 1), this.a7A, u * this.qu / (l2.a7M - 1), this.a7A - iQ * Math.pow(kS, a1g)), fB
				.fillStyle = hk.a7e, fB.beginPath(), fB.arc(u * this.qu / (l2.a7M - 1), this.a7A - iQ * Math.pow(kS, a1g), Math.max(2, .014 * this.b6), 0, 2 * Math.PI), fB.fill(), cB = this.a7F * gh.r3, cB = 0 === aW.jq[aM.gb] ? Math.floor(cB *
					rY.yf) : Math.floor(cB * gh.gi()), fB.fillStyle = hk.hl, fB.fillText(1 === a1g ? dW.lQ.m4(kS / 100, 2) : dW.lQ.m3(Math.floor(kS)), -this.et, this.a7A - iQ * Math.pow(kS, a1g)), dW.dX.textAlign(fB, 1), fB.fillText(rE.xy(cB),
					u * this.qu / (l2.a7M - 1), this.a7A + this.a7C - (eu.di.ev() ? 2 : 0) - this.a7E), dW.dX.textAlign(fB, 2), iQ * Math.pow(kS, a1g) / this.a7A)
		}, this.a7d = function(eK, eM, eY, eZ) {
			fB.beginPath(), fB.moveTo(eK, eM), fB.lineTo(eY, eZ), fB.stroke()
		}
}

function a7f() {
	this.a2T = !1, this.cy = !1, this.a2a = !1, this.a7g = [0, 0, 0, 0], this.yZ = function() {
		var eK, eM, eY, eZ;
		this.a2a = this.a2a || this.cy, (this.cy || this.a2T && this.a2a) && (eK = d0.d1[0], eM = d0.d1[1], eY = d0.d1[2], eZ = d0.d1[3], eK = eK < this.a7g[0] ? this.a7g[0] : eK, eM = eM < this.a7g[1] ? this.a7g[1] : eM, eY = eY > this.a7g[2] ?
			this.a7g[2] : eY, eZ = eZ > this.a7g[3] ? this.a7g[3] : eZ, this.cy = !1, this.a2T = !1, eK === this.a7g[0] && eM === this.a7g[1] && eY === this.a7g[2] && eZ === this.a7g[3] ? this.a2b() : eK <= eY && eM <= eZ && vG.putImageData(
				vH, 0, 0, eK, eM, eY - eK + 1, eZ - eM + 1))
	}, this.a2b = function() {
		this.a2a && this.a7g[2] >= this.a7g[0] && this.a7g[3] >= this.a7g[1] && vG.putImageData(vH, 0, 0, this.a7g[0], this.a7g[1], this.a7g[2] - this.a7g[0] + 1, this.a7g[3] - this.a7g[1] + 1), this.a2a = !1
	}, this.sA = function() {
		this.a7g[2] >= this.a7g[0] && this.a7g[3] >= this.a7g[1] && vG.putImageData(vH, 0, 0, this.a7g[0], this.a7g[1], this.a7g[2] - this.a7g[0] + 1, this.a7g[3] - this.a7g[1] + 1), this.a2a = !1
	}, this.aD = function() {
		var cS, cT;
		this.a2T = !1, this.cy = !1, this.a2a = !1, this.a7g[0] = cE.cF, this.a7g[1] = cE.ed, this.a7g[2] = this.a7g[3] = 0;
		loop: for (cS = 1; cS < cE.cF - 1; cS++)
			for (cT = cE.ed - 2; 1 < cT; cT--)
				if (1 === cb[cz.cR(cS, cT) + 2]) {
					this.a7g[0] = cS;
					break loop
				} loop: for (cT = 1; cT < cE.ed - 1; cT++)
			for (cS = cE.cF - 2; 1 < cS; cS--)
				if (1 === cb[cz.cR(cS, cT) + 2]) {
					this.a7g[1] = cT;
					break loop
				} loop: for (cS = cE.cF - 2; 0 < cS; cS--)
			for (cT = cE.ed - 2; 1 < cT; cT--)
				if (1 === cb[cz.cR(cS, cT) + 2]) {
					this.a7g[2] = cS;
					break loop
				} loop: for (cT = cE.ed - 2; 0 < cT; cT--)
			for (cS = cE.cF - 2; 1 < cS; cS--)
				if (1 === cb[cz.cR(cS, cT) + 2]) {
					this.a7g[3] = cT;
					break loop
				}
	}
}

function a7h() {
	var a7i, k9, aB, a7j;

	function a7n(au, name, a7o, af) {
		aB[au] = name, k9[au] = new Image, k9[au].onload = function() {
			! function(au, a7o) {
				let xE = null,
					xD;
				7 === a7o ? xD = dW.sy.xG : 8 === a7o ? (xD = dW.sy.xI, xE = .1) : 3 === a7o ? (xD = dW.sy.xH, xE = .06) : 5 === a7o ? xD = dW.sy.xJ : 6 === a7o ? xD = dW.sy.xF : 4 === a7o && (xD = dW.sy.xK);
				k9[au] = dW.sy.sz(k9[au], xD, xE)
			}(au, a7o), a7q()
		}, k9[au].onerror = function(cO) {
			console.error("Error loading image at index", au, "Error:", cO), a7q()
		}, k9[au].src = "data:image/png;base64," + af
	}

	function a7q() {
		a7i--, a7l()
	}

	function a7l() {
		0 === a7i && (a7i = -1, mh.iS(), nt.a7r(), sw.ei([k9[8], k9[16], k9[7], k9[9], k9[10]], [2 !== eu.id, 1 !== eu.id, !0, !0, !0]), nd.q7.aD(), rT.tC(), gh.hu = !0, k9[7] = a7j, k9[8] = a7j, k9[9] = a7j, k9[10] = a7j)
	}
	this.aD = function() {
		if (void 0 === k9) {
			a7i = 23, k9 = new Array(a7i), aB = new Array(a7i), (a7j = document.createElement("canvas")).width = 1, a7j.height = 1;
			for (var u = a7i - 1; 0 <= u; u--) k9[u] = a7j;
			a7n(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a7n(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a7n(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a7n(3, "orders", 6,
					"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"
					), a7n(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), a7n(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a7n(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), a7n(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a7n(8,
					"googleplay", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg=="
					), a7n(9, "discord", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a7n(10, "insta",
					3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a7n(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a7n(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a7n(13, "bestTeam", 5,
					"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"
					), a7n(14, "bestPlayer", 5,
					"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"
					), a7n(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a7n(16, "apple", 3,
					"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"
					), a7n(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a7n(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a7n(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a7n(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a7n(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a7n(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(au) {
		return k9[au]
	}, this.oH = function(name) {
		for (var u = aB.length - 1; 0 <= u; u--)
			if (aB[u] === name) return k9[u];
		return a7j
	}, this.es = function() {
		return a7i <= 0
	}, this.sj = function() {
		a7i = 0, a7l()
	}
}

function a7t() {
	let cJ = dW.color;
	this.hm = cJ.a3a(0, 0, 0), this.vq = cJ.a2w(0, 0, 0, .7), this.a5J = cJ.a2w(0, 0, 0, .5), this.m0 = cJ.a2w(0, 0, 0, .85), this.nv = cJ.a2w(0, 0, 0, .75), this.nb = cJ.a2w(0, 0, 0, .6), this.a7u = cJ.a2w(0, 0, 0, .35), this.hl = cJ.a3a(255, 255,
			255), this.a7v = cJ.a2w(255, 255, 255, .3), this.a1y = cJ.a2w(255, 255, 255, .6), this.a1v = cJ.a2w(255, 255, 255, .4), this.a29 = cJ.a2w(255, 255, 255, .25), this.a7w = cJ.a2w(255, 255, 255, .85), this.a6j = cJ.a2w(255, 255, 255, .75),
		this.a7x = cJ.a2w(255, 255, 255, .15), this.a33 = cJ.a3a(128, 128, 128), this.a7y = cJ.a2w(64, 64, 64, .75), this.a2v = cJ.a2w(88, 88, 88, .83), this.a7z = cJ.a2w(60, 60, 60, .85), this.si = cJ.a2w(80, 60, 60, .85), this.a7Y = cJ.a3a(30, 255,
			30), this.a7X = cJ.a3a(0, 200, 0), this.a36 = cJ.a3a(128, 255, 128), this.a80 = cJ.a2w(10, 65, 10, .75), this.a6i = cJ.a2w(0, 255, 0, .6), this.a81 = cJ.a2w(0, 255, 0, .5), this.a7T = cJ.a2w(0, 200, 0, .5), this.iB = cJ.a2w(0, 100, 0,
			.75), this.a82 = cJ.a2w(0, 60, 0, .8), this.a69 = cJ.a2w(0, 255, 0, .3), this.na = cJ.a2w(0, 180, 0, .6), this.a1Q = cJ.a2w(0, 120, 0, .85), this.a37 = cJ.a3a(0, 120, 0), this.sg = cJ.a2w(0, 70, 0, .85), this.a83 = cJ.a3a(255, 120, 120),
		this.a6u = cJ.a3a(255, 160, 160), this.a34 = cJ.a3a(255, 70, 70), this.a35 = cJ.a3a(230, 0, 0), this.a1x = cJ.a2w(220, 0, 0, .6), this.a7e = cJ.a2w(255, 100, 100, .8), this.a84 = cJ.a2w(100, 0, 0, .85), this.qy = cJ.a2w(60, 0, 0, .85), this
		.a85 = cJ.a2w(200, 0, 0, .6), this.i9 = cJ.a2w(120, 0, 0, .85), this.a86 = cJ.a3a(255, 70, 10), this.qx = cJ.a2w(0, 60, 60, .85), this.a7U = cJ.a2w(10, 60, 60, .9), this.a1E = cJ.a2w(0, 96, 96, .75), this.a87 = cJ.a3a(160, 160, 255), this
		.a88 = cJ.a2w(0, 40, 90, .75), this.a89 = cJ.a2w(0, 0, 255, .6), this.a8A = cJ.a3a(200, 200, 255), this.a8B = cJ.a3a(255, 120, 100), this.a8C = cJ.a2w(255, 255, 0, .5), this.a8D = cJ.a2w(255, 255, 150, .2), this.a8E = cJ.a3a(255, 255, 0),
		this.a8F = cJ.a3a(255, 255, 200), this.a8G = cJ.a2w(200, 200, 0, .6), this.a8H = cJ.a2w(140, 120, 0, .75), this.a8I = cJ.a2w(180, 160, 40, .75), this.sh = cJ.a2w(70, 50, 20, .85), this.pT = cJ.a2w(255, 140, 0, .75), this.a6h = cJ.a2w(0, 0, 0,
			0), cJ = null
}

function a6O() {
	var ig = 2e4;
	this.show = function() {
		if (gh.ig < ig) return !1;
		ig = gh.ig + 135e4, eu.di.a8J(Math.floor(135e4))
	}
}

function a8K() {
	this.oO = new a8L, this.oe = new a0r, this.wi = new uE, this.j = new a8M, this.fT = new fO, this.qB = new sW, this.oY = new oW, this.a8N = new dr, this.eF = new a4C, this.aD = function() {
		this.wi.aD(), this.j.aD(), this.fT.aD(), this.qB.aD()
	}
}

function a1R(name, placeholder) {
	var a1M = document.createElement("textarea"),
		a8O = (this.a1S = a1M, !0);

	function a8Q() {
		a1M.select(), document.execCommand("copy")
	}
	this.resize = function() {
			a1M.style.padding = dW.dX.dY(dZ.da)
		}, this.a1U = function(a8P) {
			a1M.value = a8P
		}, this.a1T = function() {
			return a1M.value
		}, this.a1N = function() {
			a1M.select()
		}, this.clear = function() {
			a1M.value = ""
		}, this.a1O = function() {
			a8O && navigator.clipboard ? (a1M.select(), navigator.clipboard.writeText(a1M.value).catch(function() {
				a8O = !1, a8Q()
			})) : a8Q()
		}, a1M.setAttribute("name", name), a1M.setAttribute("id", name + "Field"), a1M.setAttribute("autocomplete", "off"), a1M.setAttribute("placeholder", placeholder), a1M.style.top = "0", a1M.style.left = "0", a1M.style.width = "100%", a1M.style
		.height = "100%", a1M.style.userSelect = "none", a1M.style.outline = "none", a1M.style.resize = "none", a1M.style.border = "none", a1M.style.color = hk.hl, a1M.style.backgroundColor = hk.vq, a1M.style.fontSize = "1.2em"
}

function dB() {
	this.pv = function(i3) {
		f.g(39), f.h(1, 0), f.h(6, 13), f.h(14, fp.mP), f.h(4, eu.id), f.h(7, eu.dd), f.h(1, +fn), f.h(1, +fo), f.h(5, (new Date).getHours() % 24), i.j.send(i3, f.k)
	}, this.u8 = function(i3, u5, n5) {
		f.g(26), f.h(1, 0), f.h(6, 14), f.h(3, n5), f.h(16, u5), i.j.send(i3, f.k)
	}, this.u9 = function(id) {
		f.g(13), f.h(1, 0), f.h(6, 15), f.h(6, id), i.j.send(0, f.k)
	}, this.a8R = function(mt, lY) {
		f.g(7 + 26 * lY.length), f.h(1, 0), f.h(6, 9);
		for (let u = 0; u < lY.length; u++) f.h(16, lY[u][0]), f.h(10, lY[u][1]);
		i.j.send(mt, f.k)
	}, this.a06 = function(a8S, b8) {
		f.g(20), f.h(1, 0), f.h(6, 19), f.h(1, a8S), f.h(12, b8), i.j.send(i.j.gr, f.k)
	}, this.o = function(username) {
		f.h(5, username.length), v.w.x(username)
	}
}

function a8T() {
	var a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, kV, a8c, a8e, a8f, a8g, a8j, a8k, a8l, a8m, a8n, a8b = 48,
		a8h = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
		a8i = [0, 0, 0, 0];

	function a8s(u, nB) {
		u = a8a[u].getContext("2d", {
			alpha: !0
		});
		u.clearRect(0, 0, a8b, a8b), nd.q7.nx(nB, u, 0, 0, a8b)
	}

	function a8r(u, ej) {
		var u = a8a[u].getContext("2d", {
				alpha: !0
			}),
			zoom = (u.clearRect(0, 0, a8b, a8b), a8b / ej.width),
			mJ = a8b / ej.height,
			zoom = mJ < zoom ? mJ : zoom;
		u.imageSmoothingEnabled = !0, u.setTransform(zoom, 0, 0, zoom, Math.floor((a8b - zoom * ej.width) / 2), Math.floor((a8b - zoom * ej.height) / 2)), u.drawImage(ej, 0, 0), u.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8x(cJ, aS, a12, kB) {
		kB.beginPath(), kB.moveTo(cJ, cJ), kB.lineTo(cJ + Math.cos(a12) * aS, cJ + Math.cos(a12 + 1.5 * Math.PI) * aS), kB.stroke()
	}

	function a9A() {
		if (7 === f1.f2()) {
			for (var p8, ej, kB, zoom, mJ, aE = -1, u = kV.length - 1; 0 <= u; u--)
				if (null === kV[u].k9) {
					aE = u;
					break
				} - 1 !== aE && (null !== (p8 = a92(kV[aE].bE, kV[aE].bF)) ? kV[aE].k9 = p8 : (p8 = {
					cF: cE.cF,
					ed: cE.ed,
					j1: cE.j1,
					j2: cE.j2,
					zP: cE.zP,
					j3: cE.j3,
					gc: cE.gc,
					gd: cE.gd
				}, cE.g(kV[aE].bE, kV[aE].bF), cE.zR.a9B(), (ej = document.createElement("canvas")).width = 128, ej.height = 128, kB = ej.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / cE.cF) < (mJ = 128 / cE.ed) && (zoom = mJ), kB.imageSmoothingEnabled = !0, kB.setTransform(zoom, 0, 0, zoom, (128 - zoom * cE.cF) / 2, (128 - zoom * cE.ed) / 2), kB.drawImage(cE.j1, 0, 0), cE.cF = p8.cF, cE
				.ed = p8.ed, cE.j1 = p8.j1, cE.j2 = p8.j2, cE.zP = p8.zP, cE.j3 = p8.j3, cE.gc = p8.gc, cE.gd = p8.gd, kV[aE].k9 = ej), gh.hu = !0)
		}
	}

	function a92(bE, bF) {
		for (var u = kV.length - 1; 0 <= u; u--)
			if (null !== kV[u].k9 && kV[u].bE === bE && kV[u].bF === bF) return kV[u].k9;
		return null
	}
	this.aD = function() {
		var u;
		for (a8n = 0, a8e = -1, f1.setState(7), kV = [], this.resize(), a8a = new Array(13), u = a8a.length; 0 <= u; u--) a8a[u] = document.createElement("canvas"), a8a[u].width = a8b, a8a[u].height = a8b;
		for (u = 0; u < 7; u++) ! function(nq) {
			var a8v, kB = a8a[nq - 2].getContext("2d", {
					alpha: !0
				}),
				a8u = 1.5 * Math.PI,
				cJ = Math.floor(.5 * a8b),
				aS = Math.floor(.48 * a8b);
			kB.lineWidth = 2, kB.strokeStyle = hk.hl, kB.clearRect(0, 0, a8b, a8b);
			for (var u = 0; u < nq; u++) a8v = a8u + 2 * Math.PI / nq,
				function(u, cJ, aS, a8u, a8v, kB) {
					kB.fillStyle = cK.vt[u], kB.beginPath(), kB.arc(cJ, cJ, aS, a8u, a8v), kB.lineTo(cJ, cJ), kB.fill()
				}(u + 1, cJ, aS, a8u, a8v, kB), 0 !== u && a8x(cJ, aS, a8u, kB), a8u = a8v;
			a8x(cJ, aS, 1.5 * Math.PI, kB),
				function(cJ, aS, kB) {
					kB.beginPath(), kB.arc(cJ, cJ, aS, 0, 2 * Math.PI), kB.stroke()
				}(cJ, aS, kB)
		}(u + 2);
		a8r(7, er.get(4)), a8s(8, nd.ne.ni + nd.ne.a8t), a8s(9, nd.ne.ni + nd.ne.a6M), a8s(10, 1024 - nd.ne.nf), a8r(11, er.get(19)), a8r(12, er.get(20)), gh.hu = !0
	}, this.a8p = function() {
		this.iN(), i.j.iL(3240), f1.setState(0), b3.b4(5, 5)
	}, this.iN = function() {
		kV = [], a8a = []
	}, this.a8z = function() {
		return a8g
	}, this.resize = function() {
		var uL, bP, a5m, a90;
		for (a8W = [0, 0], a8c = [0, 0, 0, 0], a8m = eu.di.ev() ? (a8f = Math.floor(.8 * .4 * ew.ex), a8g = Math.floor(.56 * a8f), a8c[0] = dZ.gap, ew.ea < ew.b6 ? (a8c[1] = a8g + 2 * dZ.gap, a8c[2] = ew.ea - 3 * a8c[0], a8c[3] = mh.cQ() - 3 * dZ
				.gap - a8g, a8k = Math.floor(.95 * a8g), a8l = Math.floor((ew.ea - a8f - dZ.gap) / 2), Math.floor(dZ.gap + a8g / 2)) : (a8c[1] = dZ.gap, a8c[2] = ew.ea - 3 * dZ.gap - a8f, a8c[3] = mh.cQ() - 2 * dZ.gap, a8k = Math.floor(.8 *
				a8f), a8c[3] - a8g < a8f && (a8k = Math.floor(.8 * (a8c[3] - a8g)), a8k = r1(a8g, a8k)), a8l = Math.floor(ew.ea - a8f / 2 - dZ.gap), r1(a8m = Math.floor(dZ.gap + a8g + (a8c[3] - a8g) / 2), Math.floor(a8g + 2 * dZ.gap +
				a8k / 2)))) : (a8f = Math.floor(.2016 * ew.ex), a8g = Math.floor(.56 * a8f), a8c[2] = Math.floor(.5 * ew.ea), a8c[3] = Math.floor(.5 * ew.b6), a8c[1] = Math.floor(.45 * (ew.b6 - a8c[3])), a8c[0] = Math.floor((ew.ea - a8c[2]) / 2),
				a8k = Math.floor(.75 * a8g), a8l = Math.floor(ew.ea / 2), Math.floor(a8c[1] + a8c[3] + (ew.b6 - a8c[3] - a8c[1]) / 2)), a8j = dW.dX.hn(1, .65 * a8g / 4), uL = bP = 1; uL * bP < kV.length;) a8c[3] / (bP + 1) < a8c[2] / (uL + 1) ?
			uL++ : bP++;
		a5m = (a8c[2] - (uL - 1) * dZ.gap) / uL, a90 = (a8c[3] - (bP - 1) * dZ.gap) / bP, a8U = a5m < a90 ? a5m : a90, a8V = Math.floor(a8U), a8Z = dW.dX.hn(1, .5 * a8U / 5), a8W[0] = uL, a8W[1] = bP, a8X = a8c[0] + Math.floor((a8c[2] - a8W[0] *
			a8U - (a8W[0] - 1) * dZ.gap) / 2), a8Y = a8c[1] + Math.floor((a8c[3] - a8W[1] * a8U - (a8W[1] - 1) * dZ.gap) / 2)
	}, this.fD = function(a91, b7) {
		var u, mJ, k9, s = kV.length;
		for (a8i = a91, u = 0; u < b7.length; u++) k9 = a92(b7[u].gc, b7[u].gd), kV.push({
			a4B: b7[u].id,
			bC: b7[u].bC,
			bD: b7[u].mz,
			bE: b7[u].gc,
			bF: b7[u].gd,
			joined: b7[u].a93,
			a94: b7[u].a5K,
			a95: b7[u].a95,
			k9: k9,
			a96: b7[u].a96,
			a97: b7[u].a97,
			a98: b7[u].a98
		});
		for (u = s - 1; 0 <= u; u--) kV.shift();
		if (-1 !== a8e)
			for (mJ = a8e, a8e = -1, u = kV.length - 1; 0 <= u; u--)
				if (kV[u].a4B === mJ) {
					a8e = mJ;
					break
				}(kV.length > a8n || kV.length < a8n) && (a8n = kV.length, this.resize()), this.a99(), gh.hu = !0
	}, this.a99 = function() {
		for (var u = kV.length - 1; 0 <= u; u--) null === kV[u].k9 && setTimeout(a9A, 0)
	}, this.f3 = function(cS, cT) {
		return 4 * ((cS - a8l) * (cS - a8l) + (cT - a8m) * (cT - a8m)) <= a8k * a8k ? (this.a8p(), tI.hv(cS, cT, !1), !0) : function(cS, cT) {
			var aE, cN, eK, eM;
			if (0 !== kV.length) {
				var u = 0;
				for (eM = a8Y, cN = 0; cN < a8W[1]; cN++) {
					for (eK = a8X, aE = 0; aE < a8W[0]; aE++) {
						if (eK < cS && cS < eK + a8U && eM < cT && cT < eM + a8U) return i.d8.a4A(kV[u].a4B), a8e = kV[u].a4B !== a8e ? kV[u].a4B : -1, gh.hu = !0;
						if (++u >= kV.length) return !1;
						eK += a8U + dZ.gap
					}
					eM += a8U + dZ.gap
				}
			}
			return !1
		}(cS, cT)
	}, this.fA = function() {
		var aE, cN, cS, aS, zoom, u = 0,
			cT = a8Y;
		if (fB.imageSmoothingEnabled = !0, fB.lineWidth = 3, aS = Math.floor(.5 * a8k), fB.fillStyle = hk.a5J, fB.beginPath(), fB.arc(a8l, a8m, aS, 0, 2 * Math.PI), fB.fill(), fB.strokeStyle = hk.hl, fB.beginPath(), fB.arc(a8l, a8m, aS, 0, 2 *
				Math.PI), fB.stroke(), aS = er.get(0).height, zoom = .6 * a8k / aS, fB.setTransform(zoom, 0, 0, zoom, Math.floor(a8l - .56 * zoom * er.get(0).width), Math.floor(a8m - .5 * zoom * aS)), fB.drawImage(er.get(0), 0, 0), fB
			.setTransform(1, 0, 0, 1, 0, 0),
			function() {
				fB.fillStyle = hk.a5J, fB.fillRect(ew.ea - a8f - dZ.gap, dZ.gap, a8f, a8g), 0 <= a8e ? (fB.fillStyle = hk.a81, fB.fillRect(ew.ea - a8f - dZ.gap, dZ.gap, a8f, Math.floor(.25 * a8g))) : (fB.fillStyle = hk.a8C, fB.fillRect(ew.ea -
					a8f - dZ.gap, dZ.gap + Math.floor(.25 * a8g), a8f, Math.floor(.25 * a8g)));
				fB.strokeStyle = hk.hl, fB.strokeRect(ew.ea - a8f - dZ.gap, dZ.gap, a8f, a8g), fB.fillStyle = hk.hl, fB.font = a8j, dW.dX.textBaseline(fB, 1);
				for (var cT, qv = Math.floor(.04 * a8f), qw = Math.floor(.08 * a8g), u = 3; 0 <= u; u--) cT = Math.floor(dZ.gap + (u + 1) * (a8g + 2 * qw) / 5 - qw), dW.dX.textAlign(fB, 0), fB.fillText(a8h[u], ew.ea - a8f - dZ.gap + qv, cT), dW
					.dX.textAlign(fB, 2), fB.fillText(dW.lQ.m3(a8i[u]), ew.ea - dZ.gap - qv, cT)
			}(), 0 !== kV.length)
			for (cN = 0; cN < a8W[1]; cN++) {
				for (cS = a8X, aE = 0; aE < a8W[0]; aE++) {
					if (! function(u, cS, cT) {
							var zoom, cN, a9G, a9I, a9J;
							null === kV[u].k9 ? (fB.fillStyle = hk.a5J, fB.fillRect(cS, cT, a8V, a8V)) : (zoom = a8V / 128, fB.setTransform(zoom, 0, 0, zoom, cS, cT), fB.drawImage(kV[u].k9, 0, 0), fB.setTransform(1, 0, 0, 1, 0, 0));
							a8e === kV[u].a4B ? (function(cS, cT) {
								var et = Math.floor(.2 * a8V),
									ey = Math.floor(.3 * et);
								fB.fillStyle = hk.a82, fB.fillRect(cS + a8V - et, cT, et, et), fB.fillStyle = hk.hm, fB.fillRect(cS + a8V - et, cT, 2, et), fB.fillRect(cS + a8V - et, cT + et - 2, et, 2), m5.pU(cS + a8V - et + ey, cT + ey,
									et - 2 * ey), fB.setTransform(1, 0, 0, 1, 0, 0)
							}(cS, cT), fB.lineWidth = 3, fB.fillStyle = hk.a82) : fB.fillStyle = hk.vq;
							a9I = Math.floor(a8U / 4), fB.fillRect(cS, cT, a9I, a9I), a9J = Math.floor(cT + .8 * a8U), fB.fillRect(cS, a9J, a8V, Math.floor(a8U / 5)),
								function(u, cS, cT) {
									var zoom;
									kV[u].bD && (u = er.get(4), zoom = .5 * a8U / u.width, fB.setTransform(zoom, 0, 0, zoom, Math.floor(cS + (a8U - zoom * u.width) / 2), Math.floor(cT + (a8U - zoom * u.height) / 2)), fB.globalAlpha = .6, fB
										.drawImage(u, 0, 0), fB.globalAlpha = 1, fB.setTransform(1, 0, 0, 1, 0, 0))
								}(u, cS, cT);
							var a9L = new Array(kV[u].a96);
							if (kV[u].a96) {
								for (cN = a9G = 0; cN < kV[u].a96; cN++) kV[u].a97[cN] = dW.kA.a9M(kV[u].a97[cN], a8Z, .4 * a8U), a9L[cN] = ("" === kV[u].a97[cN] ? "other: " : "[" + kV[u].a97[cN] + "]: ") + kV[u].a98[cN];
								for (cN = 0; cN < kV[u].a96; cN++) a9G = Math.max(a9G, iU.measureText(a9L[cN], a8Z));
								a9G += .05 * a8U, cN = 5 === kV[u].a96, a9I = cN ? cT + a9I : Math.max(cT + .8 * a8U - .11 * kV[u].a96 * a8U, cT + a9I), a9J = cN ? a9J : Math.min(a9I + .11 * kV[u].a96 * a8U + .05 * a8U, a9J), fB.fillRect(cS, a9I,
									a9G, a9J - a9I)
							}
							for (fB.font = a8Z, dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 0), fB.fillStyle = hk.a87, fB.fillText(kV[u].joined.toString(), Math.floor(cS + .22 * a8U), Math.floor(cT + .9 * a8U)), fB.fillStyle = hk.hl, cN =
								0; cN < kV[u].a96; cN++) fB.fillText(a9L[kV[u].a96 - cN - 1], Math.floor(cS + .03 * a8U), Math.floor(cT + .77 * a8U - .11 * cN * a8U));
							dW.dX.textAlign(fB, 2), fB.fillStyle = hk.a83, fB.fillText(kV[u].a94.toString(), Math.floor(cS + .81 * a8U), Math.floor(cT + .9 * a8U)), fB.strokeStyle = a8e === kV[u].a4B ? hk.a7T : hk.a1y, fB.strokeRect(cS, cT, a8V,
								a8V), a9J = Math.floor(.16 * a8U), zoom = a9J / a8b, fB.setTransform(zoom, 0, 0, zoom, Math.floor(cS + .33 * a9J), Math.floor(cT + .33 * a9J)), a8a.length > kV[u].bC && fB.drawImage(a8a[kV[u].bC], 0, 0);
							fB.setTransform(zoom, 0, 0, zoom, Math.floor(cS + .15 * a9J), Math.floor(cT + a8U - 1.08 * a9J)), fB.drawImage(a8a[11], 0, 0), fB.setTransform(zoom, 0, 0, zoom, Math.floor(cS + a8U - 1.05 * a9J), Math.floor(cT + a8U -
								1.15 * a9J)), fB.drawImage(a8a[12], 0, 0), fB.setTransform(1, 0, 0, 1, 0, 0)
						}(u, Math.floor(cS), Math.floor(cT)), ++u >= kV.length) return;
					cS += a8U + dZ.gap
				}
				cT += a8U + dZ.gap
			}
	}
}

function a9N(wf) {
	var cO;
	this.cO = document.createElement("input"), (cO = this.cO).type = "color", cO.id = "input" + wf.title, cO.value = dW.color.a9O(dW.color.a9P(fE.j.kn())), cO.style.width = "100%", cO.style.userSelect = "none", cO.style.outline = "none", cO.style
		.resize = "none", cO.style.border = "inherit", cO.style.font = "inherit", cO.style.color = hk.hl, cO.style.backgroundColor = hk.vq, cO.style.fontSize = "2em", cO.style.height = "1em", cO.style.padding = "0", cO.addEventListener("input",
			function() {
				fE.hZ.fD(wf.au, dW.color.a9Q(dW.color.a05(dW.color.a9R(cO.value))))
			})
}

function a9S() {
	var size, a8N;
	this.aD = function() {
		size = aM.hA, a8N = new Uint16Array(aM.hA);
		for (var u = aM.hA - 1; 0 <= u; u--) a8N[u] = u
	}, this.a0 = function() {
		for (var u = size - 1; 0 <= u; u--) 0 === aW.jq[a8N[u] + aM.aU] ? function(aE) {
			size--;
			for (var u = aE; u < size; u++) a8N[u] = a8N[u + 1]
		}(u) : tx.a0(a8N[u])
	}
}

function a9V() {
	var qP, a9W, a9X;

	function a9d(u) {
		var button = tI.a9Y[u],
			cS = button.cS,
			cT = button.cT,
			ea = button.ea,
			b6 = button.b6;
		fB.fillStyle = button.a9b, fB.fillRect(cS, cT, ea, b6), u === qP && (fB.fillStyle = a9X, fB.fillRect(cS, cT, ea, b6)), fB.lineWidth = dZ.hh, fB.strokeStyle = a9W, fB.strokeRect(cS, cT, ea, b6),
			function(button) {
				var cS = button.cS,
					cT = button.cT,
					ea = button.ea,
					b6 = button.b6;
				dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1), fB.font = button.font, fB.fillStyle = a9W, fB.fillText(button.dq, Math.floor(cS + ea / 2), Math.floor(cT + b6 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.ea = 0, this.b6 = 0, this.cT = 0, this.gap = 0, this.aD = function() {
		qP = -1, a9W = hk.hl, a9X = "rgba(255,255,255,0.16)", this.a9Y = new Array(7), this.b6 = Math.floor((eu.di.ev() ? .123 : .093) * ew.ex), this.ea = Math.floor((eu.di.ev() ? 3.96 : 4.2) * this.b6), this.gap = Math.floor(.025 * this.ea);
		var a9Z = Math.floor(.26 * this.b6),
			a9a = dW.dX.hn(1, a9Z);
		this.a9Y[0] = {
			cS: 0,
			cT: 0,
			ea: Math.floor(.6 * this.ea - this.gap / 2),
			b6: this.b6,
			dq: "Multiplayer",
			font: a9a,
			a9b: "rgba(22,88,22,0.8)",
			fontSize: a9Z
		}, a9Z = Math.floor(.18 * this.b6), a9a = dW.dX.hn(1, a9Z), this.a9Y[1] = {
			cS: 0,
			cT: 0,
			ea: this.ea - this.a9Y[0].ea - this.gap,
			b6: this.b6,
			dq: "Single Player",
			font: a9a,
			a9b: "rgba(22,88,88,0.8)",
			fontSize: a9Z
		}, this.a9Y[2] = {
			cS: 0,
			cT: 0,
			ea: this.ea,
			b6: Math.floor(.3 * this.b6),
			dq: "",
			font: this.a9Y[1].font,
			a9b: "rgba(100,0,0,0.8)",
			fontSize: this.a9Y[1].fontSize
		}, this.a9Y[3] = {
			cS: 0,
			cT: 0,
			ea: this.ea,
			b6: this.b6,
			dq: "Back",
			font: this.a9Y[0].font,
			a9b: "rgba(0,0,0,0.8)",
			fontSize: this.a9Y[0].fontSize
		}, this.a9Y[4] = {
			cS: 0,
			cT: 0,
			ea: this.ea,
			b6: Math.floor(.3 * this.b6),
			dq: "The game was updated!",
			font: this.a9Y[1].font,
			a9b: "rgba(100,0,0,0.8)",
			fontSize: this.a9Y[1].fontSize
		}, this.a9Y[5] = {
			cS: 0,
			cT: 0,
			ea: this.a9Y[0].ea,
			b6: Math.floor(.8 * this.b6),
			dq: "Reload",
			font: this.a9Y[0].font,
			a9b: "rgba(0,100,0,0.8)",
			fontSize: this.a9Y[0].fontSize
		}, this.a9Y[6] = {
			cS: 0,
			cT: 0,
			ea: this.a9Y[1].ea,
			b6: this.a9Y[5].b6,
			dq: "Back",
			font: this.a9Y[0].font,
			a9b: "rgba(0,0,0,0.8)",
			fontSize: this.a9Y[0].fontSize
		}, this.a1q()
	}, this.a1q = function() {
		this.cT = Math.floor(.54 * ew.b6), this.a9Y[0].cS = Math.floor(.5 * ew.ea - .5 * this.ea), this.a9Y[1].cS = this.a9Y[0].cS + this.a9Y[0].ea + this.gap, this.a9Y[2].cS = this.a9Y[3].cS = this.a9Y[0].cS, this.a9Y[4].cS = this.a9Y[5].cS =
			this.a9Y[0].cS, this.a9Y[6].cS = this.a9Y[1].cS, this.a9Y[0].cT = Math.floor(.54 * ew.b6), this.a9Y[1].cT = this.a9Y[0].cT, this.a9Y[2].cT = Math.floor((ew.b6 - this.a9Y[2].b6 - this.a9Y[3].b6 - this.gap) / 2), this.a9Y[3].cT = this
			.a9Y[2].cT + this.a9Y[2].b6 + this.gap, this.a9Y[4].cT = Math.floor((ew.b6 - this.a9Y[4].b6 - this.a9Y[5].b6 - this.gap) / 2), this.a9Y[5].cT = this.a9Y[6].cT = this.a9Y[4].cT + this.a9Y[4].b6 + this.gap
	}, this.a9c = function() {
		a9d(0), a9d(1)
	}, this.a9e = function() {
		a9d(2), a9d(3)
	}, this.a9f = function() {
		a9d(4), a9d(5), a9d(6)
	}, this.hv = function(cS, cT, lu) {
		var u = -1;
		return 0 === f1.f2() ? u = this.ht(cS, cT, 0, 2) : 3 === f1.f2() ? u = this.ht(cS, cT, 3, 1) : 5 === f1.f2() && (u = this.ht(cS, cT, 5, 2)), qP !== u && (qP = u, lu) && (gh.hu = !0), -1 !== u && (mk.j0(), !0)
	}, this.ht = function(cS, cT, a9g, size) {
		for (var u = a9g; u < a9g + size; u++)
			if (cS >= this.a9Y[u].cS && cT >= this.a9Y[u].cT && cS <= this.a9Y[u].cS + this.a9Y[u].ea && cT <= this.a9Y[u].cT + this.a9Y[u].b6) return u;
		return -1
	}
}

function a8M() {
	this.a4g = null, this.dw = 512, this.dy = 8, this.dv = 0, this.wM = 0, this.oi = new Uint16Array(this.dw), this.a0y = new Uint32Array(this.dw), this.ob = new Uint32Array(this.dw), this.oa = new Uint32Array(this.dw), this.a0z = new Uint16Array(
			this.dw), this.oj = new Uint32Array(this.dw), this.fg = new Uint16Array(this.dw), this.sa = new Uint16Array(this.dw), this.oZ = new Uint8Array(this.dw), this.dx = new Uint8Array(aM.aV), this.a0s = new Uint16Array(this.dy * aM.aV), this
		.aD = function() {
			this.wM = 0, this.dv = 0, this.a4g = new Uint8Array(cE.cF + cE.ed), this.dx.fill(0)
		}, this.e5 = function(player) {
			var s = this.dv,
				fb = eA.a4K(cC.e8[0]),
				a1D = this.dx[player],
				a9i = (player << 3) + a1D;
			aW.jq[player] = 2, this.oi[s] = a9i, this.a0y[s] = fb, this.oa[s] = fb, this.ob[s] = eA.a4K(cC.e8[1]), this.a0z[s] = 0, this.oj[s] = cC.jJ[0], this.fg[s] = du.fT.e5(s, eA.ff(fb)), this.sa[s] = this.wM, this.oZ[s] = cC.e8[2], this.wM =
				this.wM + 1 & 1023, this.a0s[a9i] = s, this.dx[player] = a1D + 1, this.dv++
		}, this.wz = function() {
			var a9j = cC.e8[3];
			this.a0y[a9j] = this.oa[a9j], this.ob[a9j] = eA.a4K(cC.e8[1]), this.a0z[a9j] = 0, this.oZ[a9j] = cC.e8[2]
		}, this.a0 = function() {
			if (gh.gi() % 5 == 3) {
				du.oY.a0(), ! function(mF) {
					var u, fc, a9n, a9o, a9p, fb, a9t, a9u, cH, eD, a0y = mF.a0y,
						ob = mF.ob,
						oa = mF.oa,
						oj = mF.oj,
						a0z = mF.a0z,
						fg = mF.fg,
						mF = mF.dv,
						ud = cE.cF << 4;
					for (u = mF - 1; 0 <= u; u--) a9n = oa[u], fc = ob[u], a9n !== fc && (fb = a0y[u], a9t = fc % ud - (a9p = fb % ud), a9u = ~~((fc + .5) / ud) - (fb = ~~((fb + .5) / ud)), cH = ~~Math.sqrt(a9t * a9t + a9u * a9u + .5), eD = 4e5 +
						2e4 * ~~Math.sqrt(.5 + (Math.sqrt(oj[u] + .5) << 4)), 65535 <= (eD = a0z[u] + Math.max(~~((.5 + eD) / cH), 1)) ? oa[u] = a9o = fc : (a0z[u] = eD, oa[u] = a9o = a9p + eS.eT(eD * a9t, 65536) + ud * (fb + eS.eT(eD * a9u,
							65536))), fg[u] = du.fT.fZ(fg[u], a9n, a9o))
				}(this), ! function(mF) {
					var u, nw, aZ, cN, cJ, a9w, np, a9x, zZ, vk, eK, eM, a9y, a9z, aA0, za, fb, aA3, s = mF.dv,
						oa = mF.oa,
						oi = mF.oi,
						oj = mF.oj,
						fT = du.fT.fT,
						aA4 = fT.length,
						fU = du.fT.fU,
						ud = cE.cF << 4,
						aA5 = aM.bz,
						aA6 = cK.cM,
						eD = (s - 1) * (gh.gi() % 2);
					for (u = 0; u < s; u++) {
						for (nw = Math.abs(u - eD), fb = oa[nw], aZ = eA.ff(fb), zZ = oi[nw] >> 3, eK = fb % ud, eM = ~~((fb + .5) / ud), fb = oj[nw], aA3 = 80 + ~~Math.sqrt(.5 + (Math.sqrt(fb + .5) << 8)), a9z = Math.min(aA3 * aA3, 262144),
							aA0 = -1, cN = 0; cN < 9; cN++)
							if (!((a9w = aZ + fU[cN]) < 0 || aA4 <= a9w))
								for (a9x = fT[a9w], np = a9x.length, cJ = 0; cJ < np; cJ++) a9y = a9x[cJ], za = oi[a9y] >> 3, zZ == za || aA5 && aA6[zZ] === aA6[za] || (za = oa[a9y], (za = (vk = eK - za % ud) * vk + (vk = eM - ~~((za + .5) /
									ud)) * vk) < a9z && (aA0 = a9y, a9z = za)); - 1 !== aA0 && (fb = Math.min(Math.max(1, eS.eT(fb * (aA3 - Math.floor(Math.sqrt(a9z + .5))), 5 * aA3)), oj[aA0]), oj[nw] -= fb >> 4, oj[aA0] -= fb)
					}
				}(this);
				var u, h8, oj = (mF = this).oj,
					mF = mF.dv;
				for (u = mF - 1; 0 <= u; u--) h8 = oj[u], 0 < (h8 -= Math.max(1, h8 >> 7)) ? oj[u] = h8 : du.oe.og(u)
			}
		}
}

function la(wf, aA7 = function() {}) {
	this.a5R = [];
	let aA8 = this.a5R;

	function click() {
		for (let u = 0; u < aA8.length; u++) aA8[u].textContent = aA8[u].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var au = parseInt(this.name);
		fE.hZ.fD(wf.au, au), aA7(au)
	}
	var aA9, s = wf.ki.length;
	for (let u = 0; u < s; u++)(aA9 = document.createElement("p")).textContent = "⚪ " + wf.ki[u], aA9.style.margin = "0", aA9.name = "" + u, aA9.style.cursor = "pointer", aA9.style.fontSize = "1em", aA9.addEventListener("click", click), aA8.push(
	aA9);
	aA8[wf.value].textContent = aA8[wf.value].textContent.replace("⚪", "🟢")
}

function aAA() {
	this.zr = 0, this.bJ = null, this.aD = function() {
		this.zr = 0, this.bJ = []
	}, this.a1B = function(player) {
		this.bJ.push(player), aM.s3++, aW.cZ[player] = 2, aW.xh[player] = u6.yJ.yK(), player === aM.gb && (rY.show(!1, !1), rE.yR()), nD.aAB(player)
	}, this.yY = function(player) {
		var u, bJ;
		if (2 !== aW.cZ[player])
			for (u = (bJ = this.bJ).length - 1; 0 <= u; u--)
				if (bJ[u] === player) return void bJ.splice(u, 1)
	}, this.a0 = function() {
		aM.aP || (30 === this.zr && 2140 <= gh.gi() && this.aAC(), this.zr = (this.zr + 1) % 60)
	}, this.aAC = function() {
		for (var bJ = this.bJ, u = bJ.length - 1; 0 <= u; u--) ! function(player, ju) {
			!g7.a2H(player) || (ju = Math.max(Math.min(100, aW.dt[player]), cG(ju * aW.dt[player], 100))) < 100 || (0 === aW.fz[player].length ? !du.a8N.a0(player) && aM.bz && aAE(player, ju, 0, 0) : (aM.bz ? aAF : aAG)(player, ju))
		}(bJ[u], 12)
	}
}

function aAH() {
	var cS, cT, aAI, aAJ, aAK, ig, player, aAL, gap, zoom, aAM, aAN, a9Y = new Array(10);

	function aAX(player) {
		for (var u = aAM.length - 1; 0 <= u; u--)
			if (aAM[u] === player) return 1
	}

	function aAV(k0) {
		var u, s;
		if (-1 !== k0)
			for (s = a9Y.length, u = 0; u < s; u++)
				if (a9Y[u].f0 && a9Y[u].cS + 1 === k0 % 4 && a9Y[u].cT + 1 === k0 >> 2) return u;
		return -1
	}

	function aAT(hr, hs) {
		var gn = gap / 2;
		return hr < cS - aAI - 3 * gn || cS + 3 * aAI + 5 * gn < hr || hs < cT - aAI - 3 * gn || cT + 2 * aAI + 3 * gn < hs ? -1 : 4 * (hs < cT - gn ? 0 : hs < cT + aAI + gn ? 1 : 2) + (hr < cS - gn ? 0 : hr < cS + aAI + gn ? 1 : hr < cS + 2 * aAI +
			3 * gn ? 2 : 3)
	}
	this.a7r = function() {
		var u, cN, aAQ = [hk.na, hk.a85, hk.nb, hk.a8G, hk.a89];
		for (a9Y = new Array(8), u = 0; u < 8; u++) a9Y[u] = {
			id: u,
			f0: !1,
			wF: 0,
			k9: [],
			cS: 0,
			cT: 0
		};
		for (a9Y[0].colors = [0, 1, 2, 3], a9Y[0].cS = 0, a9Y[0].cT = 0, a9Y[1].colors = [0, 1, 4], a9Y[1].cS = 1, a9Y[1].cT = 0, a9Y[2].colors = [0, 2], a9Y[2].cS = -1, a9Y[2].cT = 0, a9Y[3].colors = [0], a9Y[3].cS = 0, a9Y[3].cT = 0, a9Y[4]
			.colors = [0, 2], a9Y[4].cS = 1, a9Y[4].cT = 1, a9Y[5].colors = [3], a9Y[5].cS = 0, a9Y[5].cT = -1, a9Y[6].id = 20, a9Y[6].colors = [0], a9Y[6].cS = 1, a9Y[6].cT = -1, a9Y[7].id = 21, a9Y[7].colors = [0], a9Y[7].cS = 0, a9Y[7].cT = 1,
			u = 0; u < 8; u++)
			for (cN = 0; cN < a9Y[u].colors.length; cN++) a9Y[u].k9.push(function(id, zm) {
				if (id < 20) return dW.k9.nc(er.get(3), id, zm);
				var zm = er.get(3).height,
					ej = dW.dX.k8(zm, zm),
					kB = dW.dX.getContext(ej);
				20 === id ? kB.drawImage(er.get(18), 0, 0) : 21 === id && nd.q7.nx(nd.ne.ni + nd.ne.aAR, kB, 0, 0, zm);
				return ej
			}(a9Y[u].id, aAQ[a9Y[u].colors[cN]]))
	}, this.aAP = function() {
		return a9Y
	}, this.aD = function() {
		aAM = [], cS = cT = ig = 0, aAJ = aAK = -1e3, this.resize()
	}, this.resize = function() {
		aAI = Math.floor((eu.di.ev() ? .075 : .0468) * ew.ex), zoom = aAI / er.get(3).height, gap = Math.floor(aAI / 3)
	}, this.aAS = function(hr, hs) {
		return !!this.f0() && (gh.hu = !0, !!nd.q7.f3(hr, hs, player) || (hr = function(hr, hs) {
			aAK = aAJ = -1e3;
			var k0 = aAT(hr, hs),
				k0 = aAV(k0);
			if (-1 === k0) return 0;
			if (1 !== a9Y[k0].colors[a9Y[k0].wF])
				if (5 === k0) {
					if (! function() {
							var mJ = performance.now();
							aAN + 4e3 < mJ && (aAM = []);
							aAN = mJ
						}(), aAX(player)) return 1;
					aAM.push(player), 16 < aAM.length && aAM.shift()
				} else if (6 === k0) {
				for (let u = aAM.length - 1; 0 <= u; u--) 0 === aW.jq[aAM[u]] && aAM.splice(u, 1);
				0 < aAM.length && (nF.aAY(1, aAM, !0) && jx.dz.aAZ(aAM, player), aAM = [])
			} else if (2 === k0) jx.jy.wu(ly.m2(), player);
			else if (3 === k0) aM.lp && jx.jy.sS(aAL);
			else if (0 === k0)
				if (0 === a9Y[0].wF) {
					if (aM.uz && rE.aAa() < 300) return 1;
					jx.jy.jz(ly.m2(), player)
				} else rH.k1(player, ly.m2());
			else if (1 === k0) aAb.a2f(), jx.jy.sU(ly.m2(), aAL);
			else {
				if (7 === k0) return aAb.a2i(), nd.q7.show(hr, hs), 2;
				if (4 !== k0) return 0;
				nF.aAY(0, [player], !0) && jx.dz.aAc(player)
			}
			return 1
		}(hr, hs), this.hY(), 2 === hr && (nd.q7.f0 = !0), 0 < hr))
	}, this.a0P = function(hr, hs) {
		this.f0() || (aAJ = hr, aAK = hs, ig = performance.now())
	}, hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = eA.sL(mouseX),
			coordY = eA.sN(mouseY),
			coord = eA.sP(coordX, coordY),
			point = eA.sQ(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(hr, hs, a7) {
			cz.cl(a7) || -1 === (hr = du.oO.aAo(hr, hs)) ? al.aAn(a7) : al.aAp(hr)
		}(mouseX, mouseY, point))
	}
	this.click = function(hr, hs, aAd) {
		var sK = eA.sL(hr),
			sM = eA.sN(hs),
			sO = eA.sP(sK, sM),
			a7 = eA.sQ(sO);
		return !(!eA.sR(sK, sM) || (sK = (eu.di.ev() ? .025 : .0144) * ew.ex, sM = performance.now(), Math.abs(hr - aAJ) > sK) || Math.abs(hs - aAK) > sK || ig + 500 < sM) && (ig = sM, aAd ? (function(hr, hs, a7) {
			cz.cl(a7) || -1 === (hr = du.oO.aAo(hr, hs)) ? al.aAn(a7) : al.aAp(hr)
		}(hr, hs, a7), !1) : m5.m6 || this.f0() || !dW.dz.sI(aM.gb) || aM.ga ? (this.hY(), !1) : aM.lp ? !!cz.cl(a7) && (aAL = sO, a9Y[3].f0 = !0, this.aAg(hr, hs)) : (du.oO.wz(sO) ? du.qB.sX = -1 : du.oO.aAh(hr, hs) || (2 === aM.gj ? cz
			.ca(a7) && (player = cz.ce(a7), cz.cY(player)) && (a9Y[0].f0 = !0, a9Y[0].wF = 1, a9Y[7].f0 = !0) : cz.cn(a7) || (aAL = sO, du.oO.sT(aM.gb, sO) && (a9Y[0].f0 = !0, a9Y[0].wF = 1, a9Y[1].f0 = !0, a9Y[1].wF = cC.e8[2] ? 0 :
				2), cz.ci(a7)) || (cz.cm(a7) ? (player = aM.aV, jv(aM.gb) ? (a9Y[0].f0 = !0, a9Y[0].wF = 0) : sV(aM.gb, player) && (a9Y[0].f0 = !0, a9Y[0].wF = 3)) : (player = cz.ce(a7)) === aM.gb ? (a9Y[0].f0 = !0, a9Y[0].wF = 1,
				a9Y[7].f0 = !0) : (a9Y[0].wF = 1, a9Y[5].f0 = function(player) {
				return cz.cY(player) && !aAX(player) && nF.aAY(1, [player], !1)
			}(player), a9Y[7].f0 = cz.cY(player), eC(player, aM.gb) ? (a9Y[4].f0 = cz.cY(player) && !nD.aAj(player) && nF.aAY(0, [player], !1), a9Y[6].f0 = function(player) {
				if (0 === aAM.length) return !1;
				if (performance.now() > aAN + 4e3) return !(aAM = []);
				return !aAX(player) && ! function(player) {
					var u;
					if (aM.bz)
						for (u = aAM.length - 1; 0 <= u; u--)
							if (!eC(player, aAM[u])) return 1;
					return
				}(player)
			}(player), jw(aM.gb, player) ? (a9Y[0].wF = 0, a9Y[0].f0 = !0) : sV(aM.gb, player) && (a9Y[0].wF = 3, a9Y[0].f0 = !0), a9Y[0].f0 = this.aAl()) : (a9Y[2].f0 = !0, a9Y[0].f0 = !0)))), this.aAg(hr, hs)))
	}, this.aAg = function(hr, hs) {
		return cS = hr - Math.floor(aAI / 2), cT = hs - Math.floor(aAI / 2), !!this.f0()
	}, this.hv = function(hr, hs) {
		return !!this.f0() && (nd.q7.f0 ? !nd.q7.ns(hr, hs) && (nd.q7.f0 = !1, gh.hu = !0) : function(mF, hr, hs) {
			hr = aAT(hr, hs);
			if (0 <= aAV(hr)) return !1;
			if ((1 === hr || 6 === hr) && 0 <= aAV(2)) return !1;
			if ((6 === hr || 9 === hr) && 0 <= aAV(10)) return !1;
			return mF.hY(), gh.hu = !0
		}(this, hr, hs))
	}, this.hY = function() {
		for (let u = a9Y.length - 1; 0 <= u; u--) a9Y[u].f0 = !1, a9Y[u].wF = 0;
		nd.q7.f0 = !1
	}, this.f0 = function() {
		return this.aAl() || nd.q7.f0
	}, this.aAl = function() {
		for (var s = a9Y.length, u = 0; u < s; u++)
			if (a9Y[u].f0) return !0;
		return !1
	}, this.fA = function() {
		if (this.f0())
			if (nd.q7.f0) nd.q7.fA();
			else {
				var u, kB = fB,
					cN = a9Y,
					s = cN.length,
					aAt = (aAI + gap) / zoom;
				for (kB.imageSmoothingEnabled = !0, kB.setTransform(zoom, 0, 0, zoom, cS, cT), u = 0; u < s; u++) cN[u].f0 && fB.drawImage(cN[u].k9[cN[u].wF], cN[u].cS * aAt, cN[u].cT * aAt);
				kB.imageSmoothingEnabled = !1, kB.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function aAu() {
	var dq, zr, aAv, ea, b6, font;

	function aAy(mm) {
		return mm < 10 ? "0" + mm : String(mm)
	}
	this.aD = function() {
		void 0 === ea && this.resize(), this.setTime()
	}, this.resize = function() {
		ea = Math.floor((eu.di.ev() ? .53 : .36) * ew.ex), b6 = Math.floor(.065 * ea), font = dW.dX.hn(1, Math.floor(.9 * b6)), aAv--, this.setTime()
	}, this.a0 = function() {
		this.setTime() && (gh.hu = !0)
	}, this.setTime = function() {
		var mJ = new Date,
			aAx = mJ.getUTCMinutes(),
			mJ = mJ.getUTCSeconds();
		return zr = 3600 - 60 * aAx - mJ, zr %= 900, dq = "Next Contest: " + aAy(Math.floor(zr / 60)) + ":" + aAy(zr % 60), aAv !== (aAv = 60 * aAx + mJ) && (ea = iU.measureText(dq, font), ea += Math.floor(.4 * b6), !0)
	}, this.fA = function() {
		fB.lineWidth = 1 + Math.floor(b6 / 15), 7 === f1.f2() && iM.a8z() + 2 * dZ.gap > .5 * (ew.b6 - ea) ? fB.translate(ew.ea - b6, Math.floor(iM.a8z() + 2 * dZ.gap + ea)) : fB.translate(ew.ea - b6, Math.floor(.5 * (ew.b6 + ea))), fB.rotate(-
			Math.PI / 2), fB.fillStyle = hk.hl, fB.fillRect(0, 0, ea, b6), fB.strokeStyle = hk.hm, fB.strokeRect(0, 0, ea, b6 + 10), fB.fillStyle = hk.hm, fB.font = font, dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 1), fB.fillText(dq, Math
			.floor(ea / 2), Math.floor(.59 * b6)), fB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aAz() {
	var k9, kA, cS, cT, a20, aB0, gap, aB1, fontSize, aB2, eh, l3, aB3, aB4, aB5, aB6, aB7, aB8;

	function aBB() {
		kA.clearRect(0, 0, rE.ea, rE.b6), kA.fillStyle = hk.nv, kA.fillRect(0, 0, rE.ea, rE.b6), kA.fillStyle = hk.a6i, a7 = 0 < aB5 ? aB5 : Math.sqrt(l3[4] / 1e4), kA.fillRect(0, rE.b6 - a20 - 1, Math.floor(a7 * rE.ea), a20), kA.fillStyle = hk.hl,
			kA.fillRect(0, 0, rE.ea, 1), kA.fillRect(0, 0, 1, rE.b6), kA.fillRect(rE.ea - 1, 0, 1, rE.b6), kA.fillRect(0, rE.b6 - 1, rE.ea, 1), kA.fillRect(0, rE.b6 - a20 - 1, rE.ea, 1);
		for (var a7, aBC, mJ = 0, u = 0; u < eh.length; u++) aB3[u] ? (dW.dX.textAlign(kA, 0), aBC = Math.floor((aB0 - a20 + 2 * aB1) * (u - mJ + 1) / (eh.length + 1) - .7 * aB1), kA.fillText(eh[u], gap, aBC), dW.dX.textAlign(kA, 2), 5 === u && 0 !==
			aW.jq[aM.gb] && aW.dt[aM.gb] >= rJ.y4(aM.gb) ? (kA.fillStyle = hk.a8B, kA.fillText(aBA(u), rE.ea - gap, aBC), kA.fillStyle = hk.hl) : kA.fillText(aBA(u), rE.ea - gap, aBC)) : mJ++
	}

	function aBA(u) {
		return u < 3 ? l3[u].toString() : 3 === u || 4 === u || 5 === u ? dW.lQ.m4(l3[u] / 100, 2) : u < 7 ? dW.lQ.m3(l3[u]) : u === 7 ? rE.xy(l3[7]) : u === 8 ? utils.getMaxTroops(aW.gC, aM.gb) : utils.getDensity(aM.gb)
	}

	function aB9() {
		aW.gC[aM.gb] !== l3[6] && (l3[6] = aW.gC[aM.gb], aB2++)
	}
	this.aD = function() {
		aB5 = aB6 = 0, (eh = new Array(8))[0] = fI.dq[70], eh[1] = aM.aP ? fI.dq[71] : fI.dq[72], eh[2] = fI.dq[73], eh[3] = fI.dq[74], eh[4] = fI.dq[75], eh[5] = fI.dq[76], eh[6] = fI.dq[77], eh[7] = fI.dq[78],
			eh.push("Max Troops", "Density"), // add eh
			aB8 = aM.ux - cG(aM.ux, 100), (l3 = new Array(eh.length))[0] = aM.aP ? 0 : aM.aU, l3[1] = aM.aP ? uq : aM.hA, l3[2] = aM.s3, l3[3] = 0, l3[4] = cG(1e4 * aW.gC[0], aM.ux), l3[5] = 700, l3[6] = 0, aB9(), l3[7] = 0, aB4 = aBA(6), aB3 =
			new Array(eh.length);
		for (var u = eh.length - 1; 0 <= u; u--) aB3[u] = !0;
		aB7 = 0, aB7 = aM.aP ? (aB3[0] = !1, aB3[2] = !1, aB3[3] = !1, 3) : (aB3[3] = !1, 1), aB2 = 0, this.resize()
	}, this.resize = function() {
		this.ea = Math.floor((eu.di.ev() ? .1646 : .126) * 1.25 * ew.ex), this.b6 = Math.floor(1.18 * this.ea), a20 = Math.floor(.04 * this.ea), gap = Math.floor(.035 * this.ea), aB1 = .04 * this.ea, aB0 = this.b6, this.b6 -= Math.floor(aB7 * (
			this.b6 - 2 * a20) / eh.length), fontSize = Math.floor(.7 * (aB0 - a20) / eh.length), fontSize = dW.dX.hn(1, fontSize), (k9 = document.createElement("canvas")).width = this.ea, k9.height = this.b6, (kA = k9.getContext("2d", {
			alpha: !0
		})).font = fontSize, dW.dX.textBaseline(kA, 1), kA.lineWidth = 1, this.a2W(), this.lq(), rR.lq(), aBB()
	}, this.lq = function() {
		cS = ew.ea - this.ea - dZ.gap
	}, this.yR = function() {
		cT = dZ.gap
	}, this.a2W = function() {
		cT = dZ.gap + (rR.a3O() && 0 !== aW.jq[aM.gb] && !aM.lp ? rR.b6 + dZ.gap : 0)
	}, this.lu = function(t8) {
		(t8 || 100 <= aB2) && (aB2 = 0, aBB())
	}, this.aAa = function() {
		return l3[7]
	}, this.xy = function(value) {
		var aZ = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * aZ) / 1e3);
		return value < 10 ? aZ + ":0" + value : aZ + ":" + value
	}, this.a0 = function() {
		var un, per;
		aB3[0] && aM.s4 - aM.s3 !== l3[0] && (l3[0] = aM.s4 - aM.s3, aB2++), uq - l3[0] !== l3[1] && (l3[1] = uq - l3[0], aB2++), this.rF(), (un = rJ.ur(aM.gb)) !== l3[5] && (l3[5] = un, aB2++), aB9(), l3[7] += gh.r3, un = aBA(7), aB4 !== un && (
			aB4 = un, aB2 += 100), un = aM.bz ? rU.a6q() : aW.gC[ky[0]], per = cG(1e4 * un, aM.ux), l3[3] = un, l3[4] !== per && (aB2++, l3[4] = per), 8 === aM.aN && function() {
			if (0 === aW.jq[0]) ro.oJ.rt(1);
			else {
				if (0 !== aW.jq[1]) return;
				ro.oJ.rt(0)
			}
			return 1
		}() || l3[3] < aB8 || l3[3] !== aM.ux && ! function() {
			for (var u = uq - 1; 0 <= u; u--)
				if (0 < aW.g1[uo[u]].length) return;
			return 1
		}() || ro.oJ.rt(-1)
	}, this.rF = function() {
		aB3[2] && aM.s3 !== l3[2] && (l3[2] = aM.s3, aB2++)
	}, this.aBM = function(u) {
		var gn, aBN, mJ;
		return 2 !== aM.gj && (u === aM.v3 ? (aB5 = 0, aBB(), !1) : (-1 !== u || 0 !== aB6) && (aBN = aB5, aB5 = aM.ga ? u / aM.v3 : (mJ = performance.now(), 0 <= u && (gn = mJ - 392 * u, aB6 = 0 === u || gn < aB6 ? gn : aB6), 1 < (aB5 = (mJ -
			aB6) / (392 * aM.v3)) ? 1 : aB5), aBB(), aB5 !== aBN))
	}, this.fA = function() {
		fB.drawImage(k9, cS, cT)
	}
}

function aBO() {
	this.jy = new wp, this.dz = new aBP, this.wq = new a2F, this.n9 = new aBQ, this.ol = new a1J
}

function aBR() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.nf = 13, this.nh = this.emojis.length, this.ni = 676, this.ng = 1024, this.a6M = this.emojis.indexOf("💀"), this.aBS = this.a6M + 1, this.a8t = this.emojis.indexOf("🥇"), this.aAR = this.emojis.indexOf("😊"), this.ny = function(a8) {
		return a8 < this.ni ? String.fromCharCode(55356, 56806 + eS.eT(a8, 26), 55356, 56806 + a8 % 26) : this.emojis[Math.min(a8 - this.ni, this.nh - 1)]
	}, this.nk = function(af) {
		var s = af.length - 2,
			cB = [];
		for (let u = 0; u < s; u++) {
			var p8 = af.charCodeAt(u) - 56806,
				p9 = af.charCodeAt(u + 2) - 56806;
			0 <= p8 && p8 < 26 && 0 <= p9 && p9 < 26 && (cB.push(26 * p8 + p9), u += 3)
		}
		return cB
	}, this.aBT = function(a8) {
		return a8 < this.ni
	}, this.aBU = function(a8) {
		return a8 >= 1024 - this.nf
	}, this.aBV = function(a8) {
		return a8 >= this.ni && a8 < this.ni + this.aBS
	}
}

function aBW() {
	this.m3 = function(a8) {
		var u, qi, aBX, aBY, aBZ;
		if (a8 < 0) return "-" + this.m3(Math.abs(a8));
		if (a8 < 1e3) return a8.toString();
		for (qi = Math.floor(Math.log(a8 + .5) / Math.log(10)) + 1, aBX = Math.floor((qi - 1) / 3), aBZ = (aBY = a8.toString()).substring(qi - 3, qi), u = 1; u < aBX; u++) aBZ = aBY.substring(qi - 3 * (u + 1), qi - 3 * u) + " " + aBZ;
		return aBY.substring(0, qi - 3 * aBX) + " " + aBZ
	}, this.m4 = function(b7, qi) {
		return b7.toFixed(qi) + "%"
	}, this.aBa = function(a8, aBb = 3) {
		return a8.toFixed(eS.hq(Math.floor(aBb - Math.log10(Math.max(a8, 1))), 0, 8))
	}, this.aBc = function(a8, ef, qi) {
		return (a8 * ef).toFixed(qi)
	}, this.wJ = function(username) {
		var uR, uf = username.indexOf("[");
		return !(uf < 0) && 1 < (uR = username.indexOf("]")) - uf && uR - uf <= 8 ? username.substring(uf + 1, uR).toUpperCase().trim() : null
	}, leaderboardFilter.parseClanFromPlayerName = this.wJ;
	this.aBd = function(af) {
		var aE = Math.floor(.5 * af.length + .5),
			ld = Math.floor(.5 * (aE - 1));
		for (let u = 0; u < ld; u++)
			for (let cN = -1; cN < 2; cN += 2) {
				var cJ = aE + cN * u;
				if (" " === af[cJ]) return [this.aBe(af.substring(0, cJ)), this.aBf(af.substring(cJ))]
			}
		return [af.substring(0, aE), af.substring(aE)]
	}, this.aBf = function(af) {
		var s = af.length;
		for (let u = 0; u < s; u++)
			if (" " !== af[u]) return af.substring(u);
		return af
	}, this.aBe = function(af) {
		for (let u = af.length - 1; 0 <= u; u--)
			if (" " !== af[u]) return af.substring(0, u + 1);
		return af
	}, this.lR = function(af, lP) {
		return af.split("(")[0] + "(🧈 " + lP.toFixed(2) + ")"
	}, this.a3Y = function(ig) {
		ig = ig.toUTCString();
		return ig.length < 12 ? ig : ig.substring(5, ig.length)
	}, this.a3j = function(ig) {
		ig = ig.toUTCString();
		return ig.length < 12 ? ig : ig.substring(5, ig.length - 4)
	}
}

function aBg() {
	this.a9M = function(af, font, maxWidth) {
		if (fB.font = font, fB.measureText(af).width <= maxWidth) return af;
		for (let u = af.length - 1; 1 <= u; u--)
			if (af = af.substring(0, u), fB.measureText(af + "...").width <= maxWidth) return af + "...";
		return "..."
	}
}

function aBh() {
	var aBi, cB;
	this.aD = function() {
		for (var u = (cB = new Uint16Array(101)).length - 1; 0 <= u; u--) cB[u] = cG(32768 * u, 100);
		this.pg(0)
	}, this.value = function(b7) {
		return cB[b7]
	}, this.pf = function() {
		return cG(aBi - 1, 2)
	}, this.pg = function(a9) {
		aBi = 2 * a9 % 32768 + 1
	}, this.random = function() {
		return aBi = 167 * aBi % 32768
	}, this.hF = function(l1) {
		return cG(l1 * this.random(), 32768)
	}, this.yV = function(b7) {
		return 0 !== b7 && this.random() < this.value(b7)
	}
}

function fm() {
	this.size = 0, this.au = 0, this.k = null, this.aD = function(k) {
		this.au = 0, this.k = k, this.size = k.length
	}, this.g = function(li) {
		return this.aD(new Uint8Array(this.lj(li))), this.k
	}, this.iN = function() {
		this.k = null
	}, this.h = function(size, mm) {
		for (var k = this.k, ld = this.au + size - 1, u = this.au; u <= ld; u++) k[u >> 3] |= (mm >> ld - u & 1) << 7 - (7 & u);
		this.au += size, this.au > 8 * this.size && console.log("error wrapper")
	}, this.aBj = function(size, mm) {
		var cN = size >> 1,
			cH = 1 << cN;
		this.h(size - cN, eS.eT(mm, cH)), this.h(cN, mm % cH)
	}, this.aBk = function(size) {
		for (var k = this.k, ld = this.au + size, u = this.au; u < ld; u++) k[u >> 3] &= 255 ^ 128 >>> (7 & u)
	}, this.lj = function(li) {
		return li + 7 >> 3
	}, this.aBl = function(cB, eV, ld, aBm) {
		for (var u = eV; u < ld; u++) this.h(aBm, cB[u])
	}
}

function vF() {
	for (uq = 0, u = aM.aV - 1; 0 <= u; u--) 0 !== aW.jq[u] && uq++;
	uo = new Uint16Array(uq);
	for (var s = 0, u = 0; u < aM.aV; u++) 0 !== aW.jq[u] && (uo[s++] = u)
}

function rN() {
	aBn(), a18()
}

function a18() {
	for (var u = uq - 1; 0 <= u; u--) 0 === aW.jq[uo[u]] && aBo(u)
}

function aBo(u) {
	uq--;
	for (var aE = u; aE < uq; aE++) uo[aE] = uo[aE + 1]
}

function aBn() {
	for (let u = uq - 1; 0 <= u; u--) {
		var mJ, b7 = uo[u];
		aW.gC[b7] <= cG(aW.tv[b7], 4) ? aW.gC[b7] <= 1e3 && (2 !== aW.jq[b7] || 0 === aW.gC[b7]) && yE(b7) : aW.gC[b7] >= aW.tv[b7] ? (mJ = aW.gC[b7], 250 <= (aW.tv[b7] = mJ) && (aW.z0[b7] = 1)) : aW.tv[b7] -= Math.max(1, cG(aW.tv[b7] - aW.gC[b7],
			1e3))
	}
}

function aBp() {
	for (var b8 = 0, u = uq - 1; 0 <= u; u--) b8 += aW.dt[uo[u]];
	return b8 % 4096
}

function zj() {
	function aBq(u, title, type = 0, ki = null, fM = 0, dd = 0) {
		fE.fF.data.push({
			au: u,
			title: title,
			type: type,
			ki: ki,
			value: fM,
			fM: fM,
			dd: dd
		})
	}

	function aBr(u, title, type, ki = null, fM = "", dd = 0) {
		fE.fF.data.push({
			au: u,
			title: title,
			type: type,
			ki: ki,
			value: fM,
			fM: fM,
			dd: dd
		})
	}

	function aBs(ld) {
		for (var u = fE.fF.data.length; u < ld; u++) fE.fF.data.push(null)
	}
	this.data = [], this.aD = function() {
		aBq(0, "", 1, ["English", "Русский", "Türkçe", "Española", "Deutsch", "Polski"], 0, 5), aBq(1, "", 1, null, 1), aBq(2, "", 0, [0, 1]), aBr(3, "Username", 2), aBq(4, "Font5", 1, ["Default", "Custom"]), aBr(5, "", 2, null, "Trebuchet MS",
				1), aBq(6, "", 0, [0, 1]), aBq(7, "", 0, [0, 1], 1), aBq(8, "", 0, [0, 1]), aBq(9, "", 1, null, 1), aBq(10, "", 1, null), aBq(11, "", 1, null, 1), aBs(100), aBr(100, "Username", 2), aBr(101, "Password", 2), aBr(102, "Emojis", 2),
			aBr(103, "Colors", 2), aBr(104, "Clan", 2), aBr(105, "AccountName", 2), aBr(106, "Password", 2), aBq(107), aBq(108), aBq(109), aBr(110, null, 2), aBq(111), aBq(112), aBq(113), aBr(114, null, 2), aBq(115), aBr(116, null, 2), aBq(117,
				null, 1), aBr(118, null, 2, null, "", 2), aBq(119, null, 1, null, 0, 1), aBr(120, null, 2), aBq(121, "CountryColor", 1, null, ~~(262144 * Math.random())), aBr(122, "Username", 2), aBq(123), aBr(124), aBq(125, null, 1, ["M1", "M5",
				"H1", "H4", "D1", "W1", "MN"
			]), aBr(126, null, 2), aBq(127, "Y-Axis Compression", 0, [0, 1], 1), aBq(128), aBq(129), aBq(130), aBq(131), aBq(132), aBr(133, null, 2), aBq(134, null, 0, null, 5), aBr(135, null, 2), aBr(136, null, 2), aBq(137), aBq(138), aBq(139),
			aBq(140), aBs(180), aBq(180, "R0", 0), aBq(181, "R1", 0)
	}, this.translate = function() {
		this.data[0].title = "🌐 " + fI.dq[101], this.data[1].title = fI.dq[102], this.data[2].title = fI.dq[103], this.data[5].title = fI.dq[104], this.data[6].title = fI.dq[105], this.data[7].title = fI.dq[106], this.data[8].title = fI.dq[107],
			this.data[9].title = fI.dq[108], this.data[10].title = fI.dq[109], this.data[11].title = fI.dq[110], this.data[1].ki = [fI.dq[111], fI.dq[112], fI.dq[113], fI.dq[114]], this.data[9].ki = [fI.dq[112], fI.dq[115], fI.dq[116]], this
			.data[10].ki = [fI.dq[109] + " 1", fI.dq[117] + " 1", fI.dq[109] + " 2", fI.dq[117] + " 2"], this.data[11].ki = [fI.dq[118], fI.dq[119], fI.dq[120]]
	}, this.fD = function(au, value) {
		this.data[au].value = value
	}, this.fG = function(au, value) {
		this.fD(au, value), fE.i0.save(au, String(value)), fE.i0.save(au, String(this.data[au].dd), !0)
	}, this.aBt = function() {
		for (var u = 0; u < this.data.length; u++) this.data[u] && (fE.i0.save(u, String(this.data[u].value)), fE.i0.save(u, String(this.data[u].dd), !0))
	}, this.aBu = function(au) {
		return Number(this.data[au].value)
	}, this.aBv = function(au) {
		return String(this.data[au].value)
	}
}

function hX(aBw, aBx, aBy = .5) {
	this.cS = 0, this.cT = 0, this.ea = 0, this.b6 = 0, this.resize = function() {
		this.b6 = Math.min(dW.dX.kH(aBy) * aBw[1] * ew.ex, ew.b6 - 2 * dZ.gap), this.ea = Math.min(this.b6 * (aBw[0] / aBw[1]), ew.ea - 2 * dZ.gap), this.b6 = aBw[1] * this.ea / aBw[0], this.cS = dZ.gap + aBx[0] * (ew.ea - this.ea - 2 * dZ.gap),
			this.cT = dZ.gap + aBx[1] * (ew.b6 - this.b6 - 2 * dZ.gap)
	}, this.aBz = function() {
		return this.cS + .5 * this.ea
	}
}

function zB() {
	this.dp = ["s"], this.dq = ["Accept", "You conquered {0}.", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
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

function oV(dS, aC0, ju) {
	var aC1, u, aC2 = new Array(aC0.length),
		kV = new Array(aC0.length);
	for (this.resize = function() {
			for (var s = aC0.length, u = 0; u < s; u++) 0 < u && dW.dX.kC(aC2[u], 8)
		}, aC1 = document.createElement("div"), dS.style.overflowX = "hidden", dS.style.overflowY = "auto", ! function() {
			var u, cH, s = aC0.length;
			for (u = 0; u < s; u++) {
				aC2[u] = document.createElement("div"), aC2[u].style.display = "flex", aC2[u].style.width = "100%", aC2[u].style.height = "2.5em", aC2[u].style.backgroundColor = u % 2 == 0 ? hk.a7y : hk.a7u, kV[u] = new Array(aC0[0].length);
				for (let aE = 0; aE < aC0[0].length; aE++) kV[u][aE] = cH = document.createElement("div"), cH.style.display = "flex", cH.style.width = "100%", cH.style.height = "100%", cH.style.justifyContent = "center", cH.style.alignItems =
					"center", cH.innerHTML = aC0[u][aE], 0 < aE && dW.dX.kC(cH, 4), aC2[u].appendChild(cH)
			}
		}(), u = 0; u < aC0.length; u++) aC1.appendChild(aC2[u]);
	dS.appendChild(aC1)
}

function aC5() {
	"function" != typeof Math.log2 && (Math.log2 = function(cS) {
		return Math.log(cS) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(cS) {
		return Math.log(cS) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(cS) {
		return 0 < cS ? 1 : cS < 0 ? -1 : 0
	})
}

function zi() {
	this.xm = function(au, dd = !1) {
		return Number(this.it(au, dd))
	}, this.it = function(au, dd = !1) {
		var a8 = null;
		return 0 === eu.id ? eu.de && (a8 = eu.de.getItem((dd ? "v" : "d") + au)) : 1 === eu.id ? a8 = eu.df.loadString((dd ? 1e3 : 2e3) + au) : 2 === eu.id && (a8 = eu.dg[(dd ? "v" : "d") + au]), a8 && 0 !== a8.length ? a8 : null
	}, this.save = function(au, value, dd = !1) {
		0 === eu.id ? eu.de && fE.fF.data[140].value && eu.de.setItem((dd ? "v" : "d") + au, value) : 1 === eu.id ? eu.df.saveString((dd ? 1e3 : 2e3) + au, value) : 2 === eu.id && (eu.dg["d" + au] = value, eu.dh.postMessage((dd ? "v" : "d") +
			au + " " + value))
	}
}

function aC6() {
	this.jt = function() {}
}

function aC7() {
	this.ah = new z2, this.w = new qK, this.aD = function() {
		this.ah.aD()
	}
}

function aC8() {
	this.eB = new Int16Array(4), this.a4p = new Int16Array(4), this.aD = function() {
		var u;
		for (this.eB[0] = -cE.cF, this.eB[1] = 1, this.eB[2] = cE.cF, this.eB[3] = -1, u = 0; u < 4; u++) this.a4p[u] = 4 * this.eB[u]
	}, this.a4H = function(a4F, a4E) {
		var vk = this.a2U(a4E) - this.a2U(a4F),
			a4E = this.a2V(a4E) - this.a2V(a4F),
			a4F = vk >>> 31 << 1;
		return 5 + a4F + (1 - a4F) * (1 - (a4E >>> 31 << 1)) * (Math.abs(vk) - Math.abs(a4E) >>> 31) & 3
	}, this.a4J = function(a4F, a4E, jP) {
		return jP % 2 == 0 ? jP + (1 - jP) * (1 - (this.a2U(a4E) - this.a2U(a4F) >>> 31 << 1)) + 4 & 3 : jP + (2 - jP) * (1 - (this.a2V(a4E) - this.a2V(a4F) >>> 31 << 1)) + 4 & 3
	}, this.a4G = function(b7, sO) {
		for (var a4E, aCA, aCC = aW.ds[b7], s = aCC.length, ea = cE.cF, aCD = this.a2U(sO), aCE = this.a2V(sO), aCF = aCC[0] >> 2, min = this.aCG(aCD, aCE, aCF), u = 1; u < s; u++)(aCA = (aCA = aCD - (a4E = aCC[u] >> 2) % ea) * aCA + (aCA = aCE -
			~~((.5 + a4E) / ea)) * aCA) < min && (min = aCA, aCF = a4E);
		return aCF
	}, this.a4L = function(player, a7) {
		return !cz.cm(a7) && player === cz.ce(a7)
	}, this.aCG = function(sK, sM, sO) {
		return (sK -= this.a2U(sO)) * sK + (sM -= this.a2V(sO)) * sM
	}, this.aCH = function(f4, f5, uT) {
		f4 = this.aCI(f4) - this.a4U(uT), f5 = this.aCJ(f5) - this.a4W(uT);
		return Math.sqrt(f4 * f4 + f5 * f5)
	}, this.aCK = function(a4F, a4E) {
		var eO = this.a2U(a4F) - this.a2U(a4E),
			a4F = this.a2V(a4F) - this.a2V(a4E);
		return Math.sqrt(eO * eO + a4F * a4F)
	}, this.m1 = function(b7, ju) {
		return eS.eT(ju * aW.dt[b7], 1e3)
	}, this.aCI = function(f4) {
		return 16 * (f4 + uh) / ug
	}, this.aCJ = function(f5) {
		return 16 * (f5 + ui) / ug
	}, this.sL = function(f4) {
		return Math.floor((f4 + uh) / ug)
	}, this.sN = function(f5) {
		return Math.floor((f5 + ui) / ug)
	}, this.sR = function(sK, sM) {
		return 1 <= sK && 1 <= sM && sK < cE.cF - 1 && sM < cE.ed - 1
	}, this.a2U = function(sO) {
		return sO % cE.cF
	}, this.a2V = function(sO) {
		return eS.eT(sO, cE.cF)
	}, this.sP = function(sK, sM) {
		return sM * cE.cF + sK
	}, this.a2G = function(sO) {
		var sK = this.a2U(sO),
			sO = this.a2V(sO);
		return 0 < sK && sK < cE.cF - 1 && 0 < sO && sO < cE.ed - 1
	}, this.sQ = function(sO) {
		return sO << 2
	}, this.aCL = function(sO) {
		return cE.cF * this.a2V(sO) * 256 + (this.a2U(sO) << 4)
	}, this.a4K = function(sO) {
		return this.aCL(sO) + 8 + (cE.cF << 7)
	}, this.od = function(uT) {
		return cE.cF * (this.a4W(uT) >> 4) + (this.a4U(uT) >> 4)
	}, this.ff = function(uT) {
		uT = this.od(uT);
		return (this.a2U(uT) >> 5) + du.fT.fQ * (this.a2V(uT) >> 5)
	}, this.a4U = function(uT) {
		return uT % (cE.cF << 4)
	}, this.a4W = function(uT) {
		return eS.eT(uT, cE.cF << 4)
	}, this.a4I = function(sO, jP) {
		return sO + this.eB[jP]
	}, this.a4n = function(a7, jP) {
		return a7 + this.a4p[jP]
	}
}

function dj() {
	this.aCM = function() {
		fE.hZ.fL(), fE.hZ.fN(), i.j.close(0, 3255), 0 === eu.id ? eu.de && eu.de.clear() : 1 === eu.id ? eu.df.saveString(199, "") : 2 === eu.id && eu.dh.postMessage("clear")
	}, this.aCN = function() {
		2 === eu.id ? eu.dh.postMessage("showConsentForm") : 1 === eu.id ? eu.df.setState(7) : vN.a1W.showCMPScreen()
	}, this.aCO = function() {
		this.setState(14)
	}, this.aCP = function() {
		var af = fE.fF.aBv(101),
			max = ("string" != typeof(af = "" === af ? function() {
				{
					if (2 === eu.id) return eu.dg.password;
					if (1 === eu.id) return 12 <= eu.dd ? eu.df.loadString(22) : ""
				}
				return aCT.aCU(9)
			}() : af) && (af = ""), Math.floor(Math.pow(2, 48))),
			aCR = Math.floor(parseInt(lg.aCS(af)));
		return 0 < aCR && aCR < max ? fE.fF.fG(101, af) : (aCR = Math.floor(1 + (max - 1) * Math.random()), fE.fF.fG(101, af)), aCR
	}, this.ev = function() {
		return 1 === fE.fF.aBu(2)
	}, this.aCV = function() {
		fE.fF.fG(102, "")
	}, this.setState = function(i6) {
		1 === eu.id && 5 <= eu.dd && eu.df.setState(i6)
	}, this.iA = function() {
		var t4;
		1 === eu.id && 7 <= eu.dd ? eu.df.setState(5) : ((t4 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = t4.toString())
	}, this.aCW = function() {
		1 !== eu.id || eu.dd < 17 || eu.df.saveString(23, document.documentElement.outerHTML)
	}, this.a6P = function() {
		0 === eu.id ? vN.a1W.aD() : 1 === eu.id ? eu.df.prepareAd("1688441405") : 2 === eu.id && (0 === eu.dd ? eu.dh.postMessage("prepare ad 4500876070") : eu.dh.postMessage("loadAds 4500876070"))
	}, this.a8J = function(mJ) {
		return 0 === eu.id ? !!vN.a1W.yw() : 1 === eu.id ? 12 <= eu.dd && (eu.df.presentAd(mJ), !0) : 2 === eu.id && (0 === eu.dd ? eu.dh.postMessage("show ad " + mJ) : eu.dh.postMessage("showAd"), !0)
	}, this.aCX = function() {
		2 === eu.id && eu.dd < 23 && b3.b4(4, 1, new b5("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + el.en + "' target='_blank'>" +
			el.en + "</a>", !0, [new hV("❌ " + fI.dq[92], function() {
				b3.b4(0)
			}, hk.i9)]))
	}
}

function aCY() {
	function iw(cO) {
		aH.aI = !0, aH.aCd(JSON.parse(cO.target.result)), aH.jt()
	}

	function aCi(af, min, max, aCr) {
		return "string" != typeof af || af.length < min ? aCr : af.length > max ? af.substring(0, max) : af
	}

	function aCe(a8, min, max) {
		return a8 = "number" == typeof a8 ? Math.floor(a8) : min, Math.min(Math.max(a8, min), max)
	}

	function aCg(a8, fM) {
		return "boolean" == typeof a8 ? a8 : fM
	}

	function aCl(a8, s, max, aCt) {
		var u, cB, aZ;
		if (!Array.isArray(a8) || a8.length < 1) return null;
		for (cB = new(8 === aCt ? Uint8Array : Uint16Array)(s), aZ = a8.length, u = 0; u < s; u++) cB[u] = aCe(a8[u % aZ], 0, max);
		return cB
	}
	this.aI = !1, this.aJ = null, this.j0 = function() {
		this.aI = !1, this.aJ = null
	}, this.xT = function() {
		this.aJ.c1 && this.aJ.aCZ && (this.aJ.c1[0] = dW.color.xU(fE.j.kn())), aM.gs(this.aJ.aCa, 0, this.aCb(), this.aJ.bC, !1, !1)
	}, this.aCb = function() {
		return [{
			name: this.aJ.aCc ? fE.fF.data[122].value : this.aJ.aK[0],
			bI: [0, 0, 0],
			bH: 0
		}]
	}, this.it = function(iq) {
		var is = new FileReader;
		is.onload = iw, is.readAsText(iq)
	}, this.aCd = function(lY) {
		this.aJ = {}, this.aJ.xR = aCe(lY.numberPlayers, 1, 512), this.aJ.aCf = aCe(lY.modeID, 0, 1), this.aJ.gc = aCe(lY["gMap.mapID"], 0, cE.ow - 1), this.aJ.bF = aCe(lY.seedMap, 0, 16383), this.aJ.aCa = aCe(lY.seedSpawn, 0, 16383), this.aJ
			.v5 = aCg(lY.selectableSpawn, !1), this.aJ.aCc = aCg(lY.selectableName, !1), this.aJ.aCZ = aCg(lY.selectableColor, !1), cE.aJ.iu[cE.iv()].name = this.aJ.aCh = aCi(lY.mapName, 1, 25, "Custom Map"), this.aJ.aCj = function(a8) {
				var u, s;
				if (!Array.isArray(a8) || a8.length < 1) return [];
				for (s = a8.length, u = 0; u < s; u++) a8[u] = aCi(a8[u], 0, 100, "");
				return a8
			}(lY.description), this.aJ.tf = aCl(lY.playerX, this.aJ.xR, 4096, 16), this.aJ.tp = aCl(lY.playerY, this.aJ.xR, 4096, 16), this.aJ.w4 = aCl(lY.playerTeam, this.aJ.xR, 8, 8), this.aJ.hB = aCl(lY.playerStrength, this.aJ.xR, 5, 8), this
			.aJ.c1 = function(a8, s) {
				var u, cB, aZ;
				if (!Array.isArray(a8) || a8.length < 1) return null;
				for (cB = new Array(s), aZ = a8.length, u = 0; u < s; u++) cB[u] = aCl(a8[u % aZ], 3, 63, 8);
				return cB
			}(lY.playerColor, this.aJ.xR), this.aJ.aK = function(a8, s) {
				var u, cB, aZ;
				if (!Array.isArray(a8) || a8.length < 1) return null;
				for (cB = new Array(s), aZ = a8.length, u = 0; u < s; u++) cB[u] = aCi(a8[u % aZ], 3, 26, "Bot");
				return cB
			}(lY.playerName, this.aJ.xR), this.aJ.aCo = "string" == typeof lY.mapBase64 ? lY.mapBase64 : "", this.aJ.aCc = this.aJ.aCc || !this.aJ.aK, this.aJ.bC = 0 === this.aJ.aCf ? 7 : 2 === this.aJ.aCf ? 9 : 6, this.aJ.tf = this.aJ.tp ? this
			.aJ.tf : null
	}, this.jt = function() {
		! function(af) {
			var k9, iy, aCq = "data:image/png;base64,";
			if (af.length <= aCq.length) return;
			aH.aJ.gc = 0, aH.aJ.bF = 0, cE.g(0, 0), af.substring(0, aCq.length) !== aCq && (af = aCq + af);
			return (k9 = new Image).onload = function() {
				cE.cF = k9.width, cE.ed = k9.height, 4096 < cE.cF || 4096 < cE.ed || cE.cF < 10 || cE.ed < 10 ? (cE.g(0, 0), alert("Image w & h must be between 10 and 4096.")) : (cE.gc = cE.iv(), cE.gd = 0, cE.j1.width = cE.cF, cE.j1.height =
					cE.ed, cE.j2.drawImage(k9, 0, 0), iy = cE.j2.getImageData(0, 0, cE.cF, cE.ed), cE.j3 = iy.data)
			}, k9.src = af, aH.aJ.aCo = "", 1
		}(this.aJ.aCo) && cE.g(this.aJ.gc, this.aJ.bF)
	}, this.aCu = function() {
		for (var max = 0, s = this.aJ.xR, u = 0; u < s; u++) this.aJ.w4[u] > max && (max = this.aJ.w4[u]);
		return Math.max(0, max - 1)
	}
}

function aBQ() {
	this.a0 = function(k) {
		var id, kS, ld;
		for (at.aD(k), at.au += 2, ld = 8 * at.size; at.au + 8 <= ld;) id = at.az(4), kS = at.az(9), 0 === id ? this.aCv(id, kS, at.az(22)) : 1 === id ? this.aCv(id, kS, at.az(10), at.az(10)) : 2 === id ? this.aCv(id, kS, at.az(10), at.az(9)) :
			3 === id || 4 === id ? this.aCv(id, kS, at.az(10), at.az(22)) : 5 === id || 6 === id ? this.aCv(id, kS, at.az(10)) : 7 === id ? this.aCv(id, kS, at.az(1)) : this.aCv(id, kS)
	}, this.nA = [], this.aCw = function() {
		for (var aCy = 0, aCz = 0, aD0 = 0, aD1 = 0, aD2 = 0, aD3 = 0, u = 0; u < 512; u++) aCy += aW.jq[u], aCz += aW.gC[u], aD0 += aW.dt[u], aD1 += du.j.dx[u];
		aD2 += du.j.dv, aD3 += uq, this.nA.push(((255 & aCy + aCz + aD0 + aD1 + aD2 + aD3) << 12) + ((3 & aCy) << 10) + ((3 & aCz) << 8) + ((3 & aD0) << 6) + ((3 & aD1) << 4) + ((3 & aD2) << 2) + (3 & aD3))
	}, this.aCv = function(id, kS, kT, eg) {
		0 === id ? jx.wq.sS(kS, kT) : 1 === id ? jx.wq.jz(kS, kT, eg) : 2 === id ? jx.wq.ww(kS, kT, eg) : 3 === id ? jx.wq.sU(kS, kT, eg) : 4 === id ? jx.wq.wz(kS, kT, eg) : 5 === id ? jx.wq.x3(kS, kT) : 6 === id ? jx.wq.x5(kS, kT) : 7 === id ?
			jx.wq.x7(kS, kT) : 8 === id ? jx.wq.xA(kS) : jx.wq.a1A(kS)
	}
}

function aD4() {
	var iT, ea, cT, aD5, aD6, k9, kA, lm, up, aD7, aD8, aD9, aDA;
	this.cS = 0, this.b6 = 0, this.aD = function() {
		aD6 = aM.tw, aD8 = "rgba(0,100,0,0.8)", aD9 = "rgba(150,0,0,0.8)", lm = !(aD7 = !0), up = aW.dt[aM.gb], this.resize()
	}, this.resize = function() {
		ea = Math.floor((eu.di.ev() ? .305 : .24) * ew.ex), this.b6 = Math.floor(.5 + .13 * ea), ea = Math.floor(6 * this.b6), iT = dW.dX.hn(1, Math.floor(.8 * this.b6)), aDA = Math.floor(.5 * this.b6), cE.j2.font = iT, cT = dZ.gap, aD5 = Math
			.floor(1 + .13 * this.b6), (k9 = document.createElement("canvas")).width = ea, k9.height = this.b6, (kA = k9.getContext("2d", {
				alpha: !0
			})).font = iT, dW.dX.textBaseline(kA, 1), dW.dX.textAlign(kA, 1), this.aDB()
	}, this.a3O = function() {
		return eu.di.ev() && ew.ea < 1.2 * ew.b6
	}, this.lq = function() {
		this.a3O() ? this.cS = ew.ea - ea - dZ.gap : this.cS = Math.floor(rO.aDC() + (ew.ea - rO.aDC() - rE.ea - ea) / 2 - .5 * dZ.gap)
	}, this.lu = function() {
		lm && (lm = !1, this.aDB())
	}, this.aDB = function() {
		kA.clearRect(0, 0, ea, this.b6), kA.fillStyle = aD7 ? aD8 : aD9, kA.fillRect(0, 0, ea, this.b6), kA.fillStyle = hk.a1y, this.aDD(), this.aDE(), kA.fillStyle = aW.dt[aM.gb] >= rJ.y4(aM.gb) ? hk.a6u : hk.hl, kA.fillText(dW.lQ.m3(up), Math
			.floor(ea / 2), aDA), kA.fillStyle = hk.hl, kA.fillRect(0, 0, ea, 1), kA.fillRect(0, 0, 1, this.b6), kA.fillRect(0, this.b6 - 1, ea, 1), kA.fillRect(ea - 1, 0, 1, this.b6)
	}, this.aDD = function() {
		var tj = tR(Math.floor((rJ.xy() - 1) * this.b6 / 9), this.b6 - aD5);
		kA.fillRect(0, tj, aD5, this.b6 - tj), kA.fillRect(ea - aD5, tj, aD5, this.b6 - tj)
	}, this.aDE = function() {
		kA.fillRect(aD5, this.b6 - aD5, Math.floor((ea - 2 * aD5) * aW.dt[aM.gb] / aD6), aD5)
	}, this.a0 = function() {
		0 !== aW.jq[aM.gb] && 2 !== aW.cZ[aM.gb] && up !== aW.dt[aM.gb] && (aD6 = r1(aW.dt[aM.gb], aD6), aD7 = aW.dt[aM.gb] > up && 10 <= aW.dt[aM.gb], up = aW.dt[aM.gb], lm = !0)
	}, this.fA = function() {
		0 === aW.jq[aM.gb] || aM.lp || 2 === aW.cZ[aM.gb] || fB.drawImage(k9, this.cS, cT)
	}
}

function rB() {
	this.a0 = function() {
		sv.a0(), iC.a0(), ew.a0(), i.j.a0(), ma.oE(), gh.hu && (gh.hu = !1, f1.fA())
	}
}

function aDF() {
	var aDG, aDH, aDI = -15e3,
		aDJ = !1;

	function f3(cO) {
		aDV() || (aDJ = !0, aDW(cO, 1), i.j.pw(i.j.gr), aDX(Math.floor(ew.hb * cO.clientX), Math.floor(ew.hb * cO.clientY)))
	}

	function a0I(cO) {
		aDI = gh.ig, aDW(cO, 1), i.j.pw(i.j.gr), 0 < cO.touches.length && (aDG = Math.floor(ew.hb * cO.touches[0].clientX), aDH = Math.floor(ew.hb * cO.touches[0].clientY), aDY.a0I(cO) || aDX(aDG, aDH))
	}

	function aDX(cS, cT) {
		b3.f3(cS, cT), 0 === aM.gj ? f1.f3(cS, cT) : ra.a5z(cS, cT) || tJ.f3(cS, cT) || rY.f3(cS, cT) || nt.aAS(cS, cT) || rS.f3(cS, cT) || m5.f3(cS, cT) || iX.aDZ(cS, cT) || rT.f3(cS, cT) || nt.a0P(cS, cT)
	}

	function hv(cO) {
		aDV() || (aDJ = !0, aDW(cO, 1), aDa(Math.floor(ew.hb * cO.clientX), Math.floor(ew.hb * cO.clientY)))
	}

	function a0K(cO) {
		aDI = gh.ig, aDW(cO, 1), 0 < cO.touches.length && (aDG = Math.floor(ew.hb * cO.touches[0].clientX), aDH = Math.floor(ew.hb * cO.touches[0].clientY), aDY.a0K(cO) || aDa(aDG, aDH))
	}

	function aDa(cS, cT) {
		b3.hv(cS, cT), 0 === aM.gj ? f1.hv(cS, cT) : (aDb.sE(cS, cT), tJ.hv(cS, cT) || (m5.hv(cS, cT), nt.f0() ? nt.hv(cS, cT) : ly.lo ? ly.hv(cS) && (gh.hu = !0) : (rO.hv(cS, cT), mC.mD && mC.hv(cS, cT) && (gh.hu = !0))))
	}

	function aDN(cO) {
		aDV() || (aDW(cO, 1), hx(), 0 === aM.gj ? (f1.click(-1024, -1024), mk.j0()) : (rO.a1u(-1024, -1024), m5.hv(-1024, -1024), ly.mK(), mC.mD && (mC.mD = !1)))
	}

	function aDM(cO) {
		aDV() || (aDW(cO, 1), aDc(Math.floor(ew.hb * cO.clientX), Math.floor(ew.hb * cO.clientY), 2 === cO.button), iX.iY && (iX.iY = !1, cO.preventDefault()))
	}

	function click(cO) {
		aDV() || aDW(cO, 1)
	}

	function aDO(cO) {
		aDI = gh.ig, aDW(cO, 1), cO && cO.touches && 0 < cO.touches.length && 0 !== aM.gj ? mC.mD = !1 : aDY.a0O() || (aDc(aDG, aDH, !1), iX.iY && (iX.iY = !1, cO.preventDefault()))
	}

	function aDP(cO) {
		aDI = gh.ig, aDW(cO, 1), aDc(aDG, aDH, !1), iX.iY && (iX.iY = !1, cO.preventDefault())
	}

	function j6(cO) {
		io.j6(cO)
	}

	function j7(cO) {
		io.j7(cO)
	}

	function aDQ(cO) {
		aDV() || aDW(cO, 0)
	}

	function aDc(cS, cT, aAd) {
		hx(), 0 === aM.gj ? f1.click(cS, cT) : (rO.a1u(cS, cT), tJ.a1u(), ly.mK(), mC.mD = !1, nt.click(cS, cT, aAd) ? gh.hu = !0 : m5.aDM(cS, cT))
	}

	function hx() {
		b3.hx()
	}

	function hw(cO) {
		var cS, cT, deltaY;
		aDV() || (aDW(cO, 1), i.j.pw(i.j.gr), cS = Math.floor(ew.hb * cO.clientX), cT = Math.floor(ew.hb * cO.clientY), deltaY = cO.deltaY, 1 === cO.deltaMode && (deltaY *= 16), b3.hw(cS, cT, deltaY), 0 === aM.gj ? f1.hw(cS, cT, deltaY) : rO.hw(cS,
			cT, deltaY) || (ly.ht(cS, cT) ? ly.hw(deltaY) && (gh.hu = !0) : mC.hw(cS, cT, deltaY)))
	}

	function aDR(cO) {
		aDW(cO, 0)
	}

	function aDW(cO, id) {
		0 === id && b3.f0() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== f1.f2() && cO.preventDefault()
	}

	function aDT(cO) {
		if (keybindHandler(cO.key)) return;
		aDV() || ("ArrowLeft" === cO.key ? a49.a44(3) : "ArrowUp" === cO.key ? a49.a44(0) : "ArrowRight" === cO.key ? a49.a44(1) : "ArrowDown" === cO.key ? a49.a44(2) : "a" === cO.key ? ly.mI(.9375) : "d" === cO.key ? ly.mI(16 / 15) : "s" === cO
			.key ? ly.mI(7 / 8) : "w" === cO.key ? ly.mI(8 / 7) : "1" === cO.key ? ly.mI(.75) : "2" === cO.key ? ly.mI(7 / 8) : "3" === cO.key ? ly.mI(.9375) : "4" === cO.key ? ly.mI(31 / 32) : "5" === cO.key ? ly.mI(32 / 31) : "6" === cO.key ?
			ly.mI(16 / 15) : "7" === cO.key ? ly.mI(8 / 7) : "8" === cO.key ? ly.mI(4 / 3) : "+" === cO.key ? 0 !== aM.gj && mC.hw(Math.floor(ew.ea / 2), Math.floor(ew.b6 / 2), -200) : "-" === cO.key ? 0 !== aM.gj && mC.hw(Math.floor(ew.ea / 2),
				Math.floor(ew.b6 / 2), 200) : "c" === cO.key ? 0 !== aM.gj && tJ.a7J() : " " === cO.key ? aM.gj && aDb.sF(!1) : "b" === cO.key && aM.gj && aDb.sF(!0))
	}

	function aDS(cO) {
		aDV() || gh.ig < 400 || "Enter" === cO.key && b3.hy(1) || (8 !== f1.f2() && f1.hy(cO) ? gh.hu = !0 : "Escape" === cO.key ? iX.aDe() : "ArrowLeft" === cO.key || "a" === cO.key ? a49.a46(3) : "ArrowUp" === cO.key || "w" === cO.key ? a49.a46(
			0) : "ArrowRight" === cO.key || "d" === cO.key ? a49.a46(1) : "ArrowDown" === cO.key || "s" === cO.key ? a49.a46(2) : "h" === cO.key ? 1 <= aM.gj && ra.a5r(!aM.uy) : " " === cO.key && aM.gj && (m5.m6 && m5.a5w(), aM.ga) && ra.a5u(!1))
	}

	function aDU() {
		"hidden" === document.visibilityState ? 1 === aM.gj && (aM.ga ? ra.a5y() : !aM.aP || m5.m6 || aM.lp || m5.a5w()) : gh.hu = !0
	}

	function aDV() {
		return aDI + 15e3 > gh.ig
	}

	function resize() {
		ew.tH()
	}
	this.aDK = 0, this.aDL = "", this.iY = !1, this.aD = function() {
		tF.addEventListener("mousedown", f3, {
			passive: !1
		}), tF.addEventListener("mousemove", hv, {
			passive: !1
		}), tF.addEventListener("mouseup", aDM, {
			passive: !1
		}), tF.addEventListener("click", click, {
			passive: !1
		}), tF.addEventListener("mouseleave", aDN, {
			passive: !1
		}), tF.addEventListener("wheel", hw, {
			passive: !1
		}), tF.addEventListener("touchstart", a0I, {
			passive: !1
		}), tF.addEventListener("touchmove", a0K, {
			passive: !1
		}), tF.addEventListener("touchend", aDO, {
			passive: !1
		}), tF.addEventListener("touchcancel", aDP, {
			passive: !1
		}), tF.addEventListener("dragover", j6), tF.addEventListener("drop", j7), tF.addEventListener("dblclick", aDQ), document.addEventListener("contextmenu", aDR), document.addEventListener("keyup", aDS), document.addEventListener(
			"keydown", aDT), document.addEventListener("visibilitychange", aDU), window.addEventListener("resize", resize)
	}, this.aDZ = function(cS, cT) {
		return !!ra.f3(cS, cT) || !!(rO.f3(cS, cT) || mC.f3(cS, cT) || ly.f3(cS, cT) || al.f3(cS, cT))
	}, this.aDf = aDV, this.aDg = function() {
		return !aDJ || 0 < aDI
	}, this.aDe = function() {
		if (!b3.f0()) return 8 === f1.f2() ? aM.uy ? void ra.a5r(!1) : tJ.f0 ? void tJ.a5w() : void m5.a5w() : void(7 === f1.f2() ? iM.a8p() : 6 === f1.f2() ? iC.a5G() : 2 === f1.f2() && ge.xQ());
		b3.hy(2)
	}
}

function aDh() {
	this.aDi = "https://", this.aDj = this.aDi + "territorial.io/", this.aDk = this.aDj + "changelog", this.aDl = this.aDj + "terms", this.aDm = this.aDj + "cookie_policy", this.aDn = this.aDj + "privacy", this.aDo = this.aDj + "tutorial", this.aDp =
		this.aDj + "players", this.aDq = this.aDj + "clans", this.aDr = this.aDj + "clan-results", this.em = this.aDi + "play.google.com/store/apps/details?id=territorial.io", this.en = this.aDi + "apps.apple.com/app/id1581110913", this.eo = this
		.aDi + "www.youtube.com/watch?v=toZTQ8aRdFc", this.ep = this.aDi + "discord.gg/pthqvpTXmh", this.eq = this.aDi + "www.instagram.com/davidtschacher/", this.nj =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dK() {
	this.mZ = function(i3) {
		var u, a8i, aDt, aDu, aDv;
		if (i3 !== i.j.iE) i.j.close(i3, 3239);
		else if (6 === f1.f2() && iM.aD(), 7 !== f1.f2()) i.j.close(i3, 3251);
		else {
			for (a8i = [0, 0, 0, 0], aDt = at.az(6), u = 0; u < 4; u++) a8i[u] = at.az(aDt);
			for (aDu = at.az(4), aDv = [], u = 0; u < aDu; u++) {
				aDv.push({
					id: at.az(5),
					bC: at.az(4),
					mz: 1 === at.az(1),
					gc: at.az(6),
					gd: at.az(14),
					a93: at.az(aDt),
					a95: at.az(9) + 1,
					a5K: at.az(10)
				});
				for (var a96 = at.az(3), a97 = new Array(a96), a98 = new Array(a96), aE = 0; aE < a96; aE++) a98[aE] = at.az(9) + 1, a97[aE] = ag.w.bK(at.az(3));
				aDv[u].a96 = a96, aDv[u].a97 = a97, aDv[u].a98 = a98
			}
			iM.fD(a8i, aDv)
		}
	}
}

function pt() {
	var i3, po, fi, aDw = ["wss://", "/s50/", "/s51/", "/s52/"];

	function pu() {
		i.j.pu(i3, po)
	}

	function aE1(cO) {
		i.dH.mR(i3, new Uint8Array(cO.data))
	}

	function aE2() {}

	function q1(cO) {
		i.j.q1(i3, cO)
	}
	this.aD = function(au, aDx) {
		i3 = au, po = aDx;
		au = aDw[0];
		i3 < i.j.oD ? au += i.j.pc[i3] + aDw[1 + mL] : au += i.j.pc[0] + "/i" + (1 + mL) + (i3 - i.j.mu) + "/", (fi = new WebSocket(au)).binaryType = "arraybuffer", fi.onopen = pu, fi.onmessage = aE1, fi.onclose = q1, fi.onerror = aE2
	}, this.aDz = function() {
		return fi.readyState === fi.CONNECTING
	}, this.pm = function() {
		return fi.readyState === fi.OPEN
	}, this.pq = function() {
		return this.aDz() || this.pm()
	}, this.pr = function(aDx) {
		po = aDx
	}, this.uA = function() {
		return po
	}, this.send = function(k) {
		this.pm() && fi.send(k)
	}, this.close = function(px) {
		this.pq() && (fi.close(px), this.hY())
	}, this.hY = function() {
		fi.onopen = null, fi.onmessage = null, fi.onclose = null, fi.onerror = null
	}
}

function oN() {
	this.a2E = 0, this.xe = null;
	let aE3 = this.xg = 0;
	this.aE4 = 0, this.rp = function() {
		0 !== aW.jq[aM.gb] && cz.cY(aM.gb) && 2 === aM.rn && (aM.rw = 2)
	}, this.jt = function() {
		var eD, mJ;
		this.xe = ro.oO.aE5(), this.a2E = u6.yJ.a2D(), aM.aN < 7 && 2 !== aM.rn ? this.xg = rU.a6q() : this.xg = ro.oO.aE6(), 8 === aM.aN && 1 === aM.rn ? (eD = 1 - aM.rv, mJ = aW.gC[eD], aW.gC[eD] = 0, jx.dz.xd(), aW.gC[eD] = mJ) : jx.dz.xd(),
			aE3 = .01 * aW.xh[aM.gb] / 50, this.aE4 = 0, aM.aN < 7 ? ro.oL.jt(this.xe) : 7 === aM.aN || 10 === aM.aN ? dW.dz.sI(aM.gb) && (eD = ro.result.a2E * (1 + aM.v1), 2 === aM.rn ? ro.result.aE4 += eD * aW.gC[aM.gb] / ro.result.xg : ky[
				0] === aM.gb && (ro.result.aE4 += eD)) : 8 !== aM.aN || 1 !== aM.rw || 0 === fE.fF.data[107].value || 100 <= (mJ = fE.fF.data[108].value) || (ro.result.aE4 += .01 * (100 - mJ) * 10)
	}, this.s5 = function() {
		0 !== aE3 && 0 !== ro.result.aE4 && al.a6t(0, "🏆 You earned prize money of 🧈 " + ro.result.aE4.toFixed(2) + ".", 40, 0, hk.hl, hk.nv, -1, !1)
	}
}

function aEC() {
	function aEN() {
		cE.zR.a0()
	}

	function aET(b7, aES) {
		0 < aES && (cE.j3[b7] += aES, cE.j3[b7 + 1] += aES, cE.j3[b7 + 2] += aES)
	}

	function ci(b7) {
		return cE.j3[b7 + 2] > cE.j3[b7] && cE.j3[b7 + 2] > cE.j3[b7 + 1]
	}
	this.a1h = -1, this.i6 = 0, this.aED = 0, this.aEE = 8, this.aEF = 32, this.aEG = 8, this.aEH = 32, this.aEI = [0, 0], this.bx = [0, 0, 0, 0], this.fT = null, this.aEJ = !0, this.aEK = !1, this.a9B = function() {
		-1 !== this.a1h && clearTimeout(this.a1h), this.a1h = -1, this.fT = null, aEL.aEM()
	}, this.aD = function() {
		7 === f1.f2() || this.aEK || (this.aEJ = !0, this.i6 = 0, this.aED = 1, this.aEI = [cE.aJ.iu[cE.gc].oz[0], cE.aJ.iu[cE.gc].p0[0]], this.bx = [cE.aJ.iu[cE.gc].p1[3], cE.aJ.iu[cE.gc].p1[4], cE.aJ.iu[cE.gc].p1[5], cE.aJ.iu[cE.gc].p1[6]],
			this.aEE = cE.aJ.iu[cE.gc].p1[7], this.aEF = cE.aJ.iu[cE.gc].p1[8], this.aEG = cE.aJ.iu[cE.gc].p1[9], this.aEH = cE.aJ.iu[cE.gc].p1[10], this.aEJ ? this.a1h = setTimeout(aEN, 16) : this.a0())
	}, this.a0 = function() {
		if (8 === f1.f2() && rX.aEO()) this.a1h = setTimeout(aEN, 16);
		else {
			if (0 === this.i6) {
				var a9 = aT.pf();
				if (aT.pg(cE.aJ.iu[cE.gc].p1[2]), aEL.g([cE.cF, cE.ed, cE.aJ.iu[cE.gc].p1[0], cE.aJ.iu[cE.gc].p1[1]]), aT.pg(a9), this.fT = aEL.aEP(), this.i6++, this.aEJ) return void(this.a1h = setTimeout(aEN, 16))
			}
			for (var b7, sO, a9 = this.aEJ ? 10 : 1e6, a9 = cE.ed - this.aED - 1 < a9 ? cE.ed - this.aED - 1 : a9, ts = this.aED + a9, cT = this.aED; cT < ts; cT++)
				for (var cS = 1; cS < cE.cF - 1; cS++) ci(b7 = 4 * (sO = cS + cT * cE.cF)) ? this.aEQ(b7, sO, 1) : (this.aEQ(b7, sO, 0), function(cS, cT, b7) {
					return 1 < cS && ci(b7 - 4) || cS < cE.cF - 2 && ci(b7 + 4) || 1 < cT && ci(b7 - 4 * cE.cF) || cT < cE.ed - 2 && ci(b7 + 4 * cE.cF)
				}(cS, cT, b7) && this.aER(cS, cT));
			this.aED = ts, this.aED >= cE.ed - 1 ? (cE.j2.putImageData(cE.zP, 0, 0, 1, 1, cE.cF - 2, cE.ed - 2), gh.hu = !0, this.a9B()) : this.aEJ && (this.a1h = setTimeout(aEN, 16))
		}
	}, this.aEQ = function(b7, sO, au) {
		aET(b7, Math.floor(this.aEI[au] + this.bx[au] * this.fT[sO] / 1e4) - cE.j3[b7])
	}, this.aEU = function(b7, aS, aEV, au, bx) {
		aET(b7, Math.floor(this.aEI[au] + (1 - aS / aEV) * bx) - cE.j3[b7])
	}, this.aER = function(hr, hs) {
		for (var b7, aS, aEV, tb = hr - this.aEF, tc = hs - this.aEF, tt = hr + this.aEF, ts = hs + this.aEF, tb = tb < 1 ? 1 : tb, tt = tt > cE.cF - 2 ? cE.cF - 2 : tt, ts = ts > cE.ed - 2 ? cE.ed - 2 : ts, cT = tc < 1 ? 1 : tc; cT <= ts; cT++)
			for (var cS = tb; cS <= tt; cS++) ci(b7 = 4 * (cS + cT * cE.cF)) ? (aEV = this.aEE + (this.aEF - this.aEE) * this.fT[cS + cE.cF * cT] / 1e4, Math.abs(hr - cS) > aEV || Math.abs(hs - cT) > aEV || aEV <= (aS = Math.sqrt((hr - cS) * (
				hr - cS) + (hs - cT) * (hs - cT))) || this.aEU(b7, aS, aEV, 1, this.bx[3])) : (aEV = this.aEG + (this.aEH - this.aEG) * this.fT[cS + cE.cF * cT] / 1e4, Math.abs(hr - cS) > aEV || Math.abs(hs - cT) > aEV || aEV <= (aS = Math
				.sqrt((hr - cS) * (hr - cS) + (hs - cT) * (hs - cT))) || this.aEU(b7, aS, aEV, 0, this.bx[2]))
	}
}

function cG(aE, cN) {
	return Math.floor(aE / cN + 1 / (2 * cN))
}

function cI(aE, cN) {
	return 0 <= aE ? cG(aE, cN) : -cG(-aE, cN)
}

function jm(a8) {
	return a8 * a8
}

function r1(aE, cN) {
	return cN < aE ? aE : cN
}

function tR(aE, cN) {
	return aE < cN ? aE : cN
}

function a60(aE, a8, cN) {
	return a8 < aE ? aE : cN < a8 ? cN : a8
}

function aEW(a8, s) {
	for (var cJ = cG(a8 + 1, 2), u = 0; u < s; u++) cJ = cG(cJ + cG(a8, cJ), 2);
	return cJ
}

function xx(a8, s) {
	return a8 < 1 ? 0 : aEW(a8, s)
}

function qH(eK, eM, et, ez, eY, eZ, ey, tQ) {
	return !(eK + et <= eY || eM + ez <= eZ || eY + ey <= eK || eZ + tQ <= eM)
}

function qC(eK, eM, et, ez, eY, eZ, ey, tQ) {
	return eK <= eY && eM <= eZ && eY + ey <= eK + et && eZ + tQ <= eM + ez
}

function zM(a8) {
	return Math.floor(!!a8 * (1 + Math.log2(a8 + .5)))
}

function aEX() {
	this.xU = function(a8) {
		return [a8 >> 12 & 63, a8 >> 6 & 63, 63 & a8]
	}, this.a9P = function(a8) {
		var cB = this.xU(a8);
		for (let u = 0; u < 3; u++) cB[u] = ~~(4.05 * cB[u]);
		return cB
	}, this.so = function(a8) {
		a8 = this.a9P(a8);
		return dW.color.a3a(a8[0], a8[1], a8[2])
	}, this.a9Q = function(cB) {
		for (let u = 0; u < 3; u++) cB[u] = ~~(cB[u] / 4.04);
		return (cB[0] << 12) + (cB[1] << 6) + cB[2]
	}, this.a3a = function(aS, gn, cN) {
		return "rgb(" + aS + "," + gn + "," + cN + ")"
	}, this.a2w = function(aS, gn, cN, aE) {
		return "rgba(" + aS + "," + gn + "," + cN + "," + aE.toFixed(3) + ")"
	}, this.a05 = function(cJ) {
		var cB = cJ.split("(")[1].split(","),
			cD = (cB.length, cC.cD);
		for (let u = 0; u < 3; u++) cD[u] = parseInt(cB[u]);
		return cD
	}, this.a02 = function(aEY, cH) {
		var cB = aEY.slice(aEY.indexOf("(") + 1, aEY.indexOf(")")).split(","),
			cD = cC.cD;
		for (let u = 0; u < 3; u++) cD[u] = eS.hq(parseInt(cB[u].trim(), 10) + cH, 0, 255);
		return 3 === cB.length ? this.a3a(cD[0], cD[1], cD[2]) : this.a2w(cD[0], cD[1], cD[2], parseFloat(cB[3].trim()))
	}, this.a9O = function(cB) {
		let af = "#";
		for (let u = 0; u < 3; u++) {
			var aS = cB[u].toString(16);
			af += 1 === aS.length ? "0" + aS : aS
		}
		return af
	}, this.a9R = function(af) {
		var aS, gn;
		return af.length < 7 ? hk.hm : (aS = parseInt(af.slice(1, 3), 16), gn = parseInt(af.slice(3, 5), 16), af = parseInt(af.slice(5, 7), 16), this.a3a(aS, gn, af))
	}
}

function aBP() {
	this.nu = function(nB, player) {
		al.nC(aM.gb, player, nB), i.d6.a2M(nB, player)
	}, this.aAc = function(player) {
		al.nH(player, 0), i.d6.a2P(player)
	}, this.aAZ = function(aAM, player) {
		al.aEZ(aAM, player), i.d6.a2Q(aAM, player)
	}, this.xd = function() {
		aM.aP || aM.ga || i.dE.xd()
	}
}

function aEc() {
	var aEd, aEe, aEf, aEg, aEh, aEi, aEj, aEk, aEl, aEm, aEn, aEo, aEp, aEq, aEr, aEs, aEt, aEu, aEv, aEw, aEx, aEy, position, aEz, aF0, aF1, aF2, aF3 = 1,
		aF4 = 1;
	var leaderboardHasChanged = true;
	this.playerPos = aM.gb;
	leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		leaderboardFilter.filteredLeaderboard = leaderboardFilter.playersToInclude
			.map(id => aEb[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = leaderboardFilter.filteredLeaderboard.indexOf(aEb[aM.gb]);
	}

	function aF6() {
		aEj.clearRect(0, 0, aEd, aEa),
			aEj.fillStyle = hk.a88,
			aEj.fillRect(0, 0, aEd, aEo),
			aEj.fillStyle = hk.m0,
			aEj.fillRect(0, aEo, aEd, aEa - aEo);
		if (leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (leaderboardFilter.enabled ?
			this.playerPos :
			aEb[aM.gb]
		);
		if (leaderboardFilter.hoveringOverTabs) aEy = -1;
		if (leaderboardFilter.enabled && aEy >= leaderboardFilter.filteredLeaderboard.length) aEy = -1;
		playerPos >= position && aF7(playerPos - position, hk.a69),
			0 !== aEb[aM.gb] && 0 === position && aF7(0, hk.a8D),
			-1 !== aEy && aF7(aEy, hk.a7v),
			aEj.fillStyle = hk.m0,
			//console.log("drawing", aEy),
			aEj.clearRect(0, aEa - leaderboardFilter.tabBarOffset, aEd, leaderboardFilter.tabBarOffset);
		aEj.fillRect(0, aEa - leaderboardFilter.tabBarOffset, aEd, leaderboardFilter.tabBarOffset);
		aEj.fillStyle = hk.hl,
			aEj.fillRect(0, aEo, aEd, 1),
			aEj.fillRect(0, aEa - leaderboardFilter.tabBarOffset, aEd, 1),
			leaderboardFilter.drawTabs(aEj, aEd, aEa - leaderboardFilter.tabBarOffset, hk.a69),
			aEj.fillRect(0, 0, aEd, dZ.hh),
			aEj.fillRect(0, 0, dZ.hh, aEa),
			aEj.fillRect(aEd - dZ.hh, 0, dZ.hh, aEa),
			aEj.fillRect(0, aEa - dZ.hh, aEd, dZ.hh), aEj.font = aEe, dW.dX.textBaseline(aEj, 1), dW.dX.textAlign(aEj, 1), aEj.fillText(fI.dq[65], Math.floor((aEd + aEo - 22) / 2), Math.floor(aEm + aEf / 2));
		playerList.drawButton(aEj, 12, 12, aEo - 22);
		var aE, eD = playerPos < position + aEh - 1 ? 1 : 2;

		if (leaderboardFilter.enabled) {
			let result = leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aEh)
				position = (result.length > aEh ? result.length : aEh) - aEh;
			//if (position >= result.length) position = result.length - 1;
			for (aEj.font = aEg, dW.dX.textAlign(aEj, 0), aE = aEh - eD; 0 <= aE; aE--) {
				const pos = result[aE + position];
				if (pos !== undefined)
					aF8(ky[pos]), aF9(aE, pos, ky[pos]);
			}
			for (dW.dX.textAlign(aEj, 2), aE = aEh - eD; 0 <= aE; aE--) {
				const pos = result[aE + position];
				if (pos !== undefined)
					aF8(ky[pos]), aFA(aE, ky[pos]);
			}
		} else {
			for (aEj.font = aEg, dW.dX.textAlign(aEj, 0), aE = aEh - eD; 0 <= aE; aE--)
				aF8(ky[aE + position]), aF9(aE, aE + position, ky[aE + position]);
			for (dW.dX.textAlign(aEj, 2), aE = aEh - eD; 0 <= aE; aE--)
				aF8(ky[aE + position]), aFA(aE, ky[aE + position]);
		}
		2 == eD && (aF8(aM.gb), dW.dX.textAlign(aEj, 0), aF9(aEh - 1, aEb[aM.gb], aM.gb), dW.dX.textAlign(aEj, 2), aFA(aEh - 1, aM.gb)), 0 === position && (eD = .7 * aEp / er.get(4).height, aEj.setTransform(eD, 0, 0, eD, Math.floor(aEq + .58 * aEp +
			.5 * eD * er.get(4).width), Math.floor(aEm + aEf + .4 * aEp)), aEj.imageSmoothingEnabled = !0, aEj.drawImage(er.get(4), -Math.floor(er.get(4).width / 2), -Math.floor(er.get(4).height / 2)), aEj.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aF8(player) {
		aM.bz && (aEj.fillStyle = cK.vu[cK.cL[cK.cM[player]]])
	}

	function aF7(u, xa) {
		aEj.fillStyle = xa, u = aEh - 1 < u ? aEh - 1 : u;
		xa = Math.floor((u === aEh - 1 ? 2 : 0 === u ? 1.15 : 1) * aEp), xa = u === aEh - 2 ? Math.floor(aEo + 9.15 * aEp) - Math.floor(aEo + 8.15 * aEp) : xa;
		aEj.fillRect(0, Math.floor(aEo + (u + (0 === u ? 0 : .15)) * aEp), aEd, xa)
	}

	function aF9(ql, aEA, u) {
		aEj.fillText(aEu[aEA], aEq, Math.floor(aEm + aEf + (ql + .5) * aEp)), 1 === aW.cZ[u] && (aEj.font = "italic " + aEg);
		aEA = Math.floor(aEm + aEf + (ql + .5) * aEp);
		aEj.fillText(aW.aX[u], aEr, aEA), 0 !== aW.cZ[u] && (aEj.font = aEg), u < aM.aU && 2 !== aW.cZ[u] || aEj.fillRect(aEr, aEA + .35 * aF3, aEt[u], Math.max(1, .1 * aF3))
	}

	function aFA(ql, u) {
		aEj.fillText(aW.gC[u], aEs, Math.floor(aEm + aEf + (ql + .5) * aEp))
	}

	function aFK(cT) {
		return (cT -= dZ.gap + aEo) < 0 ? Math.floor(cT / aEp) - 1 : cT < (aEh - 1) * aEp ? Math.floor(cT / aEp) : cT < aEa - aEo ? aEh - 1 : (cT -= aEa - aEo, aEh + Math.floor(cT / aEp))
	}

	function ns(cS, cT) {
		return cS >= dZ.gap && cS < dZ.gap + aEd && cT >= dZ.gap && cT < dZ.gap + aEa
	}
	this.aD = function() {
			var u;
			for (aF0 = !1, aF2 = aF1 = aEz = 0, aEy = -1, aEh = eu.di.ev() ? 6 : 10, aF4 = (position = 0) === (aF4 = fE.fF.data[11].value) ? 10 : 1 === aF4 ? 5 : 1, aEx = !1, aEv = new Uint16Array(aEh + 1), aEw = new Uint32Array(aEh + 1), aEl = aM
				.aV, ky = new Uint16Array(aEl), aEb = new Uint16Array(aEl), u = aEl - 1; 0 <= u; u--) ky[u] = u, aEb[u] = u;
			this.resize(!0), aEt = new Uint16Array(aM.aV);
			var aF5 = Math.floor(aEd - aEr - aEq - aEk);
			for (aEu = new Array(aM.aV), aEj.font = aEg, u = aM.aV - 1; 0 <= u; u--) aEu[u] = u + 1 + ".", aW.aX[u] = dW.kA.a9M(aW.aY[u], aEg, aF5), aEt[u] = Math.floor(aEj.measureText(aW.aX[u]).width);
			aF6()
		}, this.resize = function(aD) {
			if (aEa = eu.di.ev() ? (aEd = Math.floor(.335 * ew.ex), Math.floor(aEh * aEd / 8)) : (aEd = Math.floor(.27 * ew.ex), Math.floor(aEh * aEd / 10)), aEd = Math.floor(.97 * aEd), (aEi = document.createElement("canvas")).width = aEd, aEi
				.height = aEa, aEj = aEi.getContext("2d", {
					alpha: !0
				}), aEm = .025 * aEd, aEf = .16 * aEd, aEn = 0 * aEd, aEo = Math.floor(.45 * aEm + aEf), aEp = (aEa - aEf - 2 * aEm - aEn) / aEh,
				aEi.height = aEa += aEp, leaderboardFilter.tabBarOffset = Math.floor(aEp * 1.3), leaderboardFilter.verticalClickThreshold = aEa - leaderboardFilter.tabBarOffset, leaderboardFilter.windowWidth = aEd,
				aEe = dW.dX.hn(1, Math.floor(.55 * aEf)), aF3 = Math.floor((eu.di.ev() ? .67 : .72) * aEp), aEg = dW.dX.hn(0, aF3), aEj.font = aEg, aEq = Math.floor(.04 * aEd), aEr = Math.floor((eu.di.ev() ? .195 : .18) * aEd), aEk = Math.floor(aEj
					.measureText("00920600").width), aEj.font = aEe, aEs = aEd - aEq, !aD) {
				aEj.font = aEg;
				for (var u = aM.aV - 1; 0 <= u; u--) aEt[u] = Math.floor(aEj.measureText(aW.aX[u]).width);
				aF6()
			}
		}, this.aDC = function() {
			return aEd
		}, this.lu = function(t8) {
			aEx && (t8 || gh.gi() % aF4 == 0) && (aEx = !1, aF6())
		}, this.a0 = function() {
			! function() {
				for (var aE = aEl - 1; 0 <= aE; aE--) 0 === aW.jq[ky[aE]] && ! function(aE) {
					var aFI = ky[aE];
					aEl--;
					for (var u = aE; u < aEl; u++) ky[u] = ky[u + 1], aEb[ky[u]] = u;
					ky[aEl] = aFI, aEb[ky[aEl]] = aEl
				}(aE)
			}();
			for (var aFG, ld = aEl - 1, aE = 0; aE < ld; aE++) aW.gC[ky[aE]] < aW.gC[ky[aE + 1]] && (aFG = ky[aE], ky[aE] = ky[aE + 1], ky[aE + 1] = aFG, aEb[ky[aE]] = aE, aEb[ky[aE + 1]] = aE + 1);
			! function() {
				for (var mJ = aEx, eD = (aEx = !0, aEb[aM.gb] >= aEh - 1 ? aEh - 2 : aEh - 1), u = eD; 0 <= u; u--)
					if (aEv[u] !== ky[u] || aEw[u] !== aW.gC[ky[u]]) return;
				(eD != aEh - 2 || aEv[aEh] === aEb[aM.gb] && aEw[aEh] === aW.gC[aM.gb]) && (aEx = mJ)
			}();
			for (var u = aEh - 1; 0 <= u; u--) aEv[u] = ky[u], aEw[u] = aW.gC[ky[u]];
			aEv[aEh] = aEb[aM.gb], aEw[aEh] = aW.gC[aM.gb];
			leaderboardHasChanged = true;
		}, leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.f3 = function(cS, cT) {
			return !!ns(cS, cT) && ((utils.isPointInRectangle(cS, cT, dZ.gap + 12, dZ.gap + 12, aEo - 22, aEo - 22) && playerList.display(aW.aY), true) &&
				!(cT - dZ.gap > leaderboardFilter.verticalClickThreshold && leaderboardFilter.handleMouseDown(cS - dZ.gap)) && (aEz = gh.ig, aF0 = !0, aF1 = aF2 = aFK(cT), iX.aDf() && (cS = a60(-1, aF2, aEh), aEy !== (cS = cS === aEh ? -1 :
					cS)) && (aEy = cS, aF6(), gh.hu = !0)), !0)
		}, leaderboardFilter.repaintLeaderboard = function() {
			aF6(), gh.hu = !0;
		},
		this.hv = function(cS, cT) {
			if (utils.isPointInRectangle(cS, cT, dZ.gap + 12, dZ.gap + 12, aEo - 22, aEo - 22)) {
				playerList.hoveringOverButton === false && (playerList.hoveringOverButton = true, aF6(), gh.hu = !0);
			} else {
				playerList.hoveringOverButton === true && (playerList.hoveringOverButton = false, aF6(), gh.hu = !0);
			}
			if (leaderboardFilter.setHovering(
					utils.isPointInRectangle(cS, cT, dZ.gap, dZ.gap + leaderboardFilter.verticalClickThreshold, leaderboardFilter.windowWidth, leaderboardFilter.tabBarOffset), cS - dZ.gap
				)) return;
			var mJ, aFJ = aFK(cT);
			return aF0 ? (mJ = position, (position = a60(0, position += aF1 - aFJ, aM.aV - aEh)) !== mJ && (aFJ = (aFJ = a60(-1, aF1 = aFJ, aEh)) !== aEh && ns(cS, cT) ? aFJ : -1, aEy = aFJ, aF6(), gh.hu = !0), !0) : (aFJ = (aFJ = a60(-1, aFJ,
				aEh)) === aEh || !ns(cS, cT) || iX.aDf() ? -1 : aFJ, aEy !== aFJ && (aEy = aFJ, aF6(), gh.hu = !0))
		}, this.a1u = function(cS, cT) {
			if (!aF0) return !1;
			aF0 = !1;
			var aFJ = aFK(cT);
			var isEmptySpace = false;
			return iX.aDf() && -1 !== aEy && (aEy = -1, aF6(), gh.hu = !0), gh.ig - aEz < 350 && aF2 === aFJ && -1 !== (aFJ = (aFJ = a60(-1, aFJ, aEh)) !== aEh && ns(cS, cT) ? aFJ : -1) && (cS = (leaderboardFilter.enabled ? (updateFilteredLb(), ky[
					leaderboardFilter.filteredLeaderboard[aFJ + position] ?? (isEmptySpace = true, aEb[aM.gb])]) : ky[aFJ + position]), aFJ === aEh - 1 && (leaderboardFilter.enabled ? this.playerPos : aEb[aM.gb]) >=
				position + aEh - 1 && (cS = aM.gb), !isEmptySpace && aM.bz && donationsTracker.displayHistory(cS, aW.aY, aM.aP), 0 !== aW.jq[cS] && !isEmptySpace) && rX.aFL(cS, 800, !1, 0), !0
		}, this.hw = function(cS, cT, deltaY) {
			var aFM;
			return !(aF0 || aM.uy || (aFM = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !ns(cS, cT)) || (cS = (cS = a60(-1, aFK(cT), aEh)) === aEh || iX.aDf() ? -1 : cS, 0 < deltaY ? position < aM.aV - aEh && (position += Math.min(aM.aV - aEh -
				position, aFM), aEy = cS, aF6(), gh.hu = !0) : 0 < position && (position -= Math.min(position, aFM), aEy = cS, aF6(), gh.hu = !0), 0))
		}, this.fA = function() {
			fB.drawImage(aEi, dZ.gap, dZ.gap)
		}
}

function aFN() {
	var b6, k9, iT, aFO, aFP, aFQ = -1;

	function aFR() {
		var ym, kA = k9.getContext("2d", {
			alpha: !0
		});
		kA.clearRect(0, 0, b6, b6), kA.fillStyle = hk.a5J, kA.fillRect(0, 0, b6, b6), 0 === aFO && (kA.fillStyle = hk.a7v, kA.fillRect(0, 0, b6, b6)), kA.fillStyle = hk.hl, kA.fillRect(0, 0, b6, 1), kA.fillRect(0, 0, 1, b6), kA.fillRect(0, b6 - 1,
				b6, 1), kA.fillRect(b6 - 1, 0, 1, b6), ym = .9 * b6 / er.get(0).width, kA.imageSmoothingEnabled = !0, kA.setTransform(ym, 0, 0, ym, Math.floor((b6 - ym * er.get(0).width) / 2), Math.floor((b6 - ym * er.get(0).height) / 2)), kA
			.drawImage(er.get(0), 0, 0), kA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aFS(hr, hs) {
		if (!m5.m6) return hr <= b6 + dZ.gap && hs >= ly.cT ? 0 : -1;
		if (hr <= 4 * b6 + dZ.gap) {
			if (hs >= ly.cT) return 0;
			if (hs >= ly.cT - b6 - aFP * dZ.gap) return 2
		} else if (hr <= 7 * b6 + dZ.gap && hs >= ly.cT - b6 - aFP * dZ.gap) return 1;
		return -1
	}
	this.m6 = !1, this.aD = function() {
		aFO = -1, this.m6 = !1, aFP = eu.di.ev() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		b6 = ly.b6, (k9 = document.createElement("canvas")).width = b6, k9.height = b6, iT = dW.dX.hn(1, (eu.di.ev() ? .5 : .45) * b6), aFR()
	}, this.a5w = function() {
		this.m6 = !this.m6, this.m6 ? (vN.a1W.hideCMPButton(), ra.a5r(!1), aM.ga && ra.vQ && ra.a5u(!0), this.a5x()) : (aFO = -1, aFR(), !aM.aP || 1 !== aM.gj || aM.lp || aM.ga || eu.di.setState(1)), gh.hu = !0
	}, this.a5x = function() {
		(aM.aP || aM.ga) && 1 === aM.gj && (rO.lu(!0), aM.lp || setTimeout(function() {
			cx.sA()
		}, 0), eu.di.setState(0))
	}, this.f3 = function(hr, hs) {
		return 0 <= (aFQ = aFS(hr, hs))
	}, this.hv = function(hr, hs) {
		hr = aFS(hr, hs);
		hr !== aFO && (aFO = hr, this.m6 || aFR(), gh.hu = !0)
	}, this.aDM = function(hr, hs) {
		var wF = aFS(hr, hs);
		if (aFQ !== wF) return !1;
		if (this.m6) {
			if (aM.uy) return 0 <= wF && ra.a5r(!1), !aM.ga;
			if (0 === wF) aM.iO();
			else if (1 === wF) this.a5w();
			else if (2 === wF) b3.b4(1, 0);
			else {
				if (! function() {
						if (aM.aP || 1 !== aM.gj || aM.ga || tJ.f0) return 1;
						m5.a5w()
					}()) return !1;
				iX.aDZ(hr, hs) || nt.a0P(hr, hs)
			}
			return !0
		}
		return 0 === wF && (this.a5w(), !0)
	}, this.fA = function() {
		var ea;
		this.m6 ? (ea = Math.floor(5.5 * b6), fB.setTransform(1, 0, 0, 1, dZ.gap, ly.cT), fB.fillStyle = hk.a5J, fB.fillRect(0, 0, ea, b6), 0 === aFO ? (fB.fillStyle = hk.a7v, fB.fillRect(0, 0, 4 * b6, b6)) : 1 === aFO && (fB.fillStyle = hk.a7v,
				fB.fillRect(4 * b6, 0, Math.floor(1.5 * b6), b6)), fB.fillStyle = hk.hl, fB.fillRect(0, 0, ea, 1), fB.fillRect(0, 0, 1, b6), fB.fillRect(4 * b6, 0, 1, b6), fB.fillRect(0, b6 - 1, ea, 1), fB.fillRect(ea - 1, 0, 1, b6), fB
			.font = iT, dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 1), fB.fillText(fI.dq[79], 2 * b6, .54 * b6), ea = .4 * b6, m5.pU(dZ.gap + 4 * b6 + (1.5 * b6 - ea) / 2, ly.cT + .3 * b6, ea), ea = 1, fB.setTransform(1, 0, 0, 1, dZ.gap,
				ly.cT - ea * aFP * dZ.gap - ea * b6), fB.fillStyle = hk.a5J, fB.fillRect(0, 0, 4 * b6, b6), aFO === ea + 1 && (fB.fillStyle = hk.a7v, fB.fillRect(0, 0, 4 * b6, b6)), fB.fillStyle = hk.hl, fB.fillRect(0, 0, 4 * b6, 1), fB
			.fillRect(0, 0, 1, b6), fB.fillRect(4 * b6, 0, 1, b6), fB.fillRect(0, b6 - 1, 4 * b6, 1), fB.fillText(fI.dq[79 + ea], 2 * b6, .54 * b6), fB.setTransform(1, 0, 0, 1, 0, 0)) : fB.drawImage(k9, dZ.gap, ly.cT)
	}, this.a17 = function(player) {
		return 0 !== aW.jq[player] && 2 !== aM.gj && cz.cY(player)
	}, this.pU = function(cS, cT, s) {
		fB.setTransform(1, 0, 0, 1, cS, cT), fB.lineWidth = dZ.hh, fB.strokeStyle = hk.hl, fB.beginPath(), fB.moveTo(0, 0), fB.lineTo(s, s), fB.moveTo(0, s), fB.lineTo(s, 0), fB.stroke()
	}
}

function aFX() {
	var oy, aFY, aFZ, ox, aFa, aFb, aFc, aFd, aFe, aFf, aFg, ic, aFh, aFi = !1,
		aFj = !1;

	function aFk(aFl) {
		ic = gh.ig, aFZ = ox = aFY = 0, aFa = (aFh = 33) / aFl, oy = 1 / (aFl / aFh / 4), aFb = (ew.ea / 2 + uh) / ug, aFc = (ew.b6 / 2 + ui) / ug, aFd = ug
	}

	function aFq(aFr) {
		Math.abs(Math.log(aFg / aFd)) < .125 && (aFg = aFr * aFd)
	}

	function aFp(eK, eM, eY, eZ) {
		aFe = (eK + eY + 1) / 2, aFf = (eM + eZ + 1) / 2;
		eY = ew.ea / (eY - eK + 1), eK = ew.b6 / (eZ - eM + 1);
		aFg = .9 * (eY < eK ? eY : eK)
	}
	this.aEO = function() {
		return aFi
	}, this.vL = function() {
		aFk(1), this.a2X(0, 0, cE.cF - 1, cE.ed - 1), aM.lp || aM.ga || this.aFL(aM.gb, 3e3, !0, .3)
	}, this.aFL = function(player, aFl, aFm, zoom) {
		aM.uy || aFi && !aFm && aFj || 0 === aW.gC[player] || (mC.mD = !1, aFj = aFm, aFk(aFl), function(player) {
			aFe = (aW.eL[player] + aW.eP[player] + 1) / 2, aFf = (aW.eN[player] + aW.eR[player] + 1) / 2
		}(player), function(zoom, player) {
			var eO = aW.eP[player] - aW.eL[player] + 1,
				player = aW.eR[player] - aW.eN[player] + 1,
				aE = ew.ea / eO,
				cN = ew.b6 / player,
				aE = (aFg = aE < cN ? aE : cN, 0 !== zoom ? zoom : eO < 20 && player < 20 ? .5 : .9);
			aFg *= aE, aFq(7 / 8)
		}(zoom, player), aFi = !0, a49.a48())
	}, this.rr = function(aFl) {
		aM.ga || aM.uy || (mC.mD = !1, aFj = !1, aFk(aFl), aFp(0, 0, cE.cF - 1, cE.ed - 1), aFq(7 / 8), aFi = !0, a49.a48())
	}, this.a2X = function(eK, eM, eY, eZ) {
		aFp(eK, eM, eY, eZ), ug = aFg, mC.vb(aFe, ew.ea / 2), mC.vd(aFf, ew.b6 / 2), d0.vn()
	}, this.ld = function() {
		return !(aFi && aFj || (aFi = !1))
	}, this.a0 = function() {
		var aFu, aFv, cH, aFy;
		aFi && (aFY < .5 ? ox < aFa && (ox += aFa * oy, aFZ = aFY) : 1 - aFZ < aFY && (ox = (ox -= aFa * oy) < aFa * oy ? aFa * oy : ox), ic = ic >= gh.ig ? gh.ig - 1 : ic, cH = gh.ig - ic, aFY = 1e3 < cH || 1 < (aFY += ox * cH / aFh) ? 1 : aFY,
			ic = gh.ig, cH = ug, aFu = uh, aFv = ui, cH = (ug = aFd * Math.pow(aFg / aFd, aFY)) / cH, aFy = 1 - (aFd * Math.pow(aFg / aFd, 1 - aFY) - aFd) / (aFg - aFd), mC.vb(aFb + aFy * (aFe - aFb), ew.ea / 2), mC.vd(aFc + aFy * (aFf -
				aFc), ew.b6 / 2), nD.zoom(cH, (aFu * cH - uh) / (1 - cH), (aFv * cH - ui) / (1 - cH)), d0.vn(), 1 <= aFY && (aFi = !1, cx.cy = !0), gh.hu = !0)
	}
}

function aFz() {
	var ic = 0,
		aG0 = !0;

	function aG2(af) {
		8 !== f1.f2() || 2 !== aW.cZ[aM.gb] && (0 !== aW.jq[aM.gb] || aM.lp) || al.aG3(af)
	}
	this.a0 = function() {
		var mJ, a94;
		gh.ig > ic && (ic = gh.ig + 2500, mJ = new Date, a94 = mJ.getUTCSeconds(), aG0 ? a94 < 45 && (aG0 = !1) : a94 < 45 || (aG0 = !0, (a94 = mJ.getUTCMinutes() + 1) % 15 == 0 && aG2(30 === a94 ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function aG4() {
	this.s = 0, this.ea = 0, this.qO = null, this.aD = function() {
		this.qO = [], this.qO.push({
			cS: 0,
			cT: 0,
			wF: eu.di.ev(),
			aG5: null
		}), this.qO.push({
			cS: 0,
			cT: 0,
			wF: !1,
			aG5: new aG6
		}), this.qO[1].aG5.aG7(), this.s = this.qO.length, this.ea = 0
	}, this.a1q = function() {
		this.ea = Math.floor((eu.di.ev() ? .063 : .04) * ew.ex), this.ea += 4 - this.ea % 4, this.qO[0].cS = dZ.gap, this.qO[0].cT = ew.b6 - this.ea - dZ.gap;
		for (var u = 1; u < this.s; u++) this.qO[u].cS = this.qO[u - 1].cS + Math.floor(eu.di.ev() ? 1.5 * dZ.gap : 3.7 * dZ.gap) + this.ea, this.qO[u].cT = this.qO[0].cT
	}, this.ht = function(hr, hs) {
		if (er.es())
			for (var u = this.s - 1; 0 <= u; u--)
				if (hr >= this.qO[u].cS && hs >= this.qO[u].cT && hr < this.qO[u].cS + this.ea && hs < this.qO[u].cT + this.ea) return u;
		return -1
	}, this.aG8 = function() {
		for (var u = 1; 1 <= u; u--)
			if (this.qO[u].aG5.f0) return !0;
		return !1
	}, this.resize = function() {
		for (var u = 1; 1 <= u; u--) this.qO[u].aG5.resize()
	}, this.hy = function() {
		return !!this.qO[1].aG5.f0 && (this.qO[1].aG5.f3(-5e3, -5e3), !0)
	}, this.f3 = function(hr, hs, f6) {
		if (f6 && this.qO[1].aG5.f0) return this.qO[1].aG5.f3(hr, hs), !0;
		hr = this.ht(hr, hs);
		if (f6) {
			if (0 === hr) return this.qO[hr].wF = !this.qO[hr].wF, fE.fF.fG(2, this.qO[hr].wF ? 1 : 0), ew.fJ(0), !0;
			if (1 <= hr && hr < 2) return this.qO[hr].aG5.aD(), gh.hu = !0
		}
		return !1
	}, this.hv = function(hr, hs) {
		return !!this.qO[1].aG5.f0 && (this.qO[1].aG5.hv(hr), !0)
	}, this.hx = function() {
		for (var u = 1; 1 <= u; u--)
			if (this.qO[u].aG5.f0) return this.qO[u].aG5.hx(), !0;
		return !1
	}, this.fA = function() {
		if (er.es()) {
			fB.imageSmoothingEnabled = !0;
			for (var u = this.s - 1; 0 <= u; u--) fB.fillStyle = this.qO[u].wF ? hk.iB : hk.nv, fB.fillRect(this.qO[u].cS, this.qO[u].cT, this.ea, this.ea), 0 === u ? this.aG9(u, er.get(15)) : 1 === u && this.aGA(), fB.setTransform(1, 0, 0, 1, 0,
				0), fB.lineWidth = dZ.hh, fB.strokeStyle = hk.hl, fB.strokeRect(this.qO[u].cS, this.qO[u].cT, this.ea, this.ea);
			fB.imageSmoothingEnabled = !1
		}
	}, this.aG9 = function(u, ej) {
		var gap = .08 * this.ea,
			zoom = (this.ea - 2 * gap) / ej.width;
		fB.setTransform(zoom, 0, 0, zoom, this.qO[u].cS + gap, this.qO[u].cT + (this.ea - zoom * ej.height) / 2), fB.drawImage(ej, 0, 0)
	}, this.aGA = function() {
		fB.setTransform(1, 0, 0, 1, this.qO[1].cS, this.qO[1].cT);
		for (var cH = this.ea / 4, cS = 3; 0 <= cS; cS--)
			for (var cT = 3; 0 <= cT; cT--) {
				var aS = Math.floor(367 * (cS + 1) * (cT + 1) % 256),
					gn = Math.floor(687 * (cS + 1) * (cT + 1) % 256),
					cN = Math.floor(651 * (cS + 1) * (cT + 1) % 256);
				fB.fillStyle = "rgb(" + aS + "," + gn + "," + cN + ")", fB.fillRect(cS * cH, cT * cH, cH, cH)
			}
	}, this.aGB = function() {
		for (var u = 1; 1 <= u; u--)
			if (this.qO[u].aG5.f0) return void this.qO[u].aG5.fA()
	}
}

function aGC() {
	this.aGD = [], this.aGE = [], this.aD = function() {
		this.aGD = [], this.aGE = []
	}, this.a0 = function() {
		0 <= this.aGD.length && this.aGF(this.aGD), 0 <= this.aGE.length && this.aGF(this.aGE)
	}, this.aGF = function(cB) {
		for (var cN = -1, u = cB.length - 1; 0 <= u; u--)
			if (cB[u].ig--, cB[u].ig <= 0) {
				cN = u;
				break
			} for (u = cN; 0 <= u; u--) cB.shift()
	}, this.aAY = function(id, bJ, aGG) {
		return this.aGH(this.aGD, id, bJ, aGG)
	}, this.nG = function(id, bJ, aGG) {
		return this.aGH(this.aGE, id, bJ, aGG)
	}, this.aGH = function(cB, id, bJ, aGG) {
		return ! function(cB, id, bJ) {
			var u, nw;
			for (u = bJ.length - 1; 0 <= u; u--)
				for (nw = cB.length - 1; 0 <= nw; nw--)
					if (cB[nw].player === bJ[u] && id === cB[nw].id) return 1;
			return
		}(cB, id, bJ) && (aGG && function(cB, id, bJ) {
			var u;
			for (u = bJ.length - 1; 0 <= u; u--) cB.push({
				player: bJ[u],
				id: id,
				ig: 384
			})
		}(cB, id, bJ), !0)
	}
}

function hU(title, aGK, aGL = !0) {
	let aC1 = document.createElement("div"),
		aGM = document.createElement("div"),
		aGN = document.createElement("div"),
		aGO = document.createElement("div");
	this.l9 = aGN, this.hz = aGK, this.show = function() {
			aGL ? document.body.appendChild(aC1) : (document.body.appendChild(aGM), document.body.appendChild(aGO))
		}, this.hY = function() {
			aGL ? document.body.removeChild(aC1) : (document.body.removeChild(aGM), document.body.removeChild(aGO))
		}, this.hd = function() {
			var he = dW.dX.db(.1),
				aGS = dW.dX.db(.08 + .04 * (ew.tB < 1));
			return {
				he: he,
				aGS: aGS,
				hg: ew.b6 / ew.hb - he - aGS
			}
		}, this.resize = function() {
			let u, cO;
			var s = aGK.length,
				hc = this.hd(),
				he = hc.he,
				aGS = hc.aGS;
			for (aGM.style.height = dW.dX.dY(he), dW.dX.kC(aGM, 2), aGO.style.top = dW.dX.dY(ew.b6 / ew.hb - aGS), aGO.style.height = dW.dX.dY(aGS), dW.dX.kC(aGO, 8), aGN.style.top = dW.dX.dY(he), aGN.style.height = aGN.style.maxHeight = dW.dX.dY(hc
					.hg), aGO.style.font = aGM.style.font = dW.dX.hn(0, dW.dX.db(.02, .25)), aGN.style.font = dW.dX.hn(0, dW.dX.db(.02, .4)), u = 0; u < s; u++)(cO = aGK[u].button).style.top = "0", cO.style.left = (100 * u / s).toFixed(2) + "%", cO
				.style.width = (100 / s).toFixed(2) + "%", cO.style.height = "100%", 0 < u && dW.dX.kC(cO, 4)
		}, this.fA = function() {
			var hc = this.hd(),
				cJ = ew.hb;
			fB.fillStyle = hk.m0, fB.fillRect(0, cJ * hc.he, ew.ea, cJ * hc.hg)
		}, aC1.style.position = "absolute", aC1.style.top = "0", aC1.style.left = "0", aC1.style.width = "100%", aC1.style.height = "100%", aGM.style.position = "absolute", aGM.style.top = "0", aGM.style.left = "0", aGM.style.width = "100%", aGM
		.style.display = "flex", aGM.style.backgroundColor = hk.m0, aGO.style.position = "absolute", aGO.style.left = "0", aGO.style.width = "100%", aGN.style.position = "absolute", aGN.style.width = "100%", aGN.style.backgroundColor = hk.m0;
	for (let u = 0; u < aGK.length; u++) aGK[u].button.style.position = "absolute", aGK[u].button.style.fontSize = "1.2em";
	for (let u = 0; u < aGK.length; u++) aGO.appendChild(aGK[u].button);
	aGM.appendChild(function() {
		var aGR = document.createElement("h1");
		return aGR.textContent = title, aGR.style.margin = "auto", aGR.style.fontSize = "2.3em", aGR
	}()), aGL && (aC1.appendChild(aGN), aC1.appendChild(aGM), aC1.appendChild(aGO))
}

function zC() {
	this.dp = [], this.dq = ["Принять", "Вы стерли {0}.", "Вас уничтожил {0}.", "Поздравляем! Вы выиграли игру.", "{0} выиграл игру.", "{0} нарушил пакт о ненападении.", "{0} атакует вас!", "Выберите вашу начальную позицию!", "Вы сдались!",
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

function oM() {
	function aGY(r) {
		var jU = (1 + aM.v1) * ro.result.a2E / (1e5 * ro.result.xg);
		let iI = "";
		for (let u = 0; u < r.length; u++) {
			var aGa = r[u].a7P * jU;
			iI += "  " + r[u].name + ": " + dW.lQ.aBa(1e5 * aGa)
		}
		iI.length && (al.a6t(0, "The following clans have won these glorious points:", 45, 0, dW.color.a3a(225, 240, 255), hk.nv, -1, !1), al.a6t(0, iI.trim(), 45, 0, dW.color.a3a(225, 240, 255), hk.nv, -1, !1))
	}
	this.jt = function(xe) {
		var aGT = cK.cL[rU.a4v()],
			aGU = cK.aB[aGT],
			aGU = (iU.aGV("Team " + aGU, 2, 1, 12), al.a6t(0, "Team " + aGU + " won the game!", 40, 0, hk.hl, hk.nv, -1, !1), aM.rw && dW.dz.sI(aM.gb) && (ro.result.aE4 += (dW.lQ.wJ(aW.aY[aM.gb]) ? 2 : 1) * ro.result.a2E * (1 + aM.v1) * aW.gC[aM
				.gb] / ro.result.xg), function(bJ) {
				var r = [],
					username = aW.aY,
					s = bJ.length;
				loop: for (let u = 0; u < s; u++) {
					var b7 = bJ[u],
						aGb = dW.lQ.wJ(username[b7]);
					if (aGb) {
						for (let aE = r.length - 1; 0 <= aE; aE--)
							if (r[aE].name === aGb) {
								r[aE].a7P += aW.gC[b7];
								continue loop
							} r.push({
							name: aGb,
							a7P: aW.gC[b7],
							yD: cK.cM[b7]
						})
					}
				}
				return r.sort(function(aE, cN) {
					return cN.a7P - aE.a7P
				}), r
			}(xe));
		aGU.length && (2 === aM.rn ? aGY(aGU) : aGY(function(r, aGT) {
			for (let u = r.length - 1; 0 <= u; u--) cK.cL[r[u].yD] !== aGT && r.splice(u, 1);
			return r
		}(aGU, aGT)))
	}
}

function rA() {
	this.ig = gh.ig, this.au = 0, this.rC = 0, this.oC = 0, this.aGc = null, this.aGd = 7, this.aAv = 0, this.aD = function() {
		this.oC = 0, this.aGc = [], this.au = 0, this.rC = 0
	}, this.n3 = function(k) {
		var u;
		if (aM.lp) this.aBM(k);
		else if (this.aGc.push(k), 2 === aM.gj) {
			for (u = 0; u < this.aGc.length; u++) jx.n9.a0(this.aGc[u]);
			this.aGc = []
		}
	}, this.aBM = function(k) {
		jx.n9.a0(k), aw.a0(), rE.aBM(this.oC), this.oC === aM.v3 ? (aM.v2.a0(), this.oC = 0, this.au = 0, this.rC = 0, this.ig = gh.ig) : (this.oC++, nD.a2Z(), nD.lu(!0), cx.yZ())
	}, this.a0 = function() {
		ew.a0(), aM.lp ? (gh.hu = rE.aBM(-1) || gh.hu, rc()) : (0 !== this.au || gh.ig >= this.ig && (this.ig += gh.r3 * Math.floor(1 + (gh.ig - this.ig) / gh.r3), 2 === aM.gj ? rD() : this.aGe(), this.au++, 27 < gh.ig - this.aAv)) && this.aGf(),
			rW(), gh.hu && (gh.hu = !1, wh()), this.aAv = gh.ig
	}, this.aGf = function() {
		gh.hu = !0, rb(), this.au = 0
	}, this.aGe = function() {
		var aGg, u;
		if (this.rC !== 7 * this.oC) rG(), cx.yZ();
		else {
			for (aGg = !1; this.aGh() && (aGg = !0, rG(), 0 < this.aGc.length);)
				for (u = this.aGd - 2; 0 <= u; u--) rG();
			aGg ? cx.yZ() : (rD(), cx.a2b())
		}
	}, this.aGh = function() {
		return 0 < this.aGc.length && (this.oC++, jx.n9.a0(this.aGc[0]), this.aGc.shift(), !0)
	}
}

function aGi() {
	var aB, l3, s, aGj, aGk;

	function aGp() {
		for (var b8 = 0, u = 1; u < 5; u++) b8 += l3[u] % 1024;
		return b8
	}

	function aGo() {
		for (var u = 1; u < s - aGk; u++) l3[u] = parseInt(l3[u])
	}

	function aGq() {
		l3[0] = "Player " + Math.floor(1e3 * Math.random()), l3[1] = ew.ea < ew.b6 ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0, l3[2] = 1, l3[3] = 1, l3[4] = ew.ea < ew.b6 ? 0 : 1, l3[5] = 0, l3[6] = "000", l3[7] = "0", l3[8] = "0",
			l3[9] = "0", aCT.aGr()
	}

	function aGn() {
		for (var u = s - aGk - 1; 0 <= u; u--) l3[u] = lg.aCS(l3[u]);
		l3[0] = lg.aGz(l3[0])
	}

	function aH2(name, value, aH3) {
		var aH4 = new Date,
			aH3 = (aH4.setTime(aH4.getTime() + Math.floor(31536e6 * aH3)), name + "=" + value + ";expires=" + aH4.toUTCString() + ";SameSite=Strict;Secure;path=/");
		document.cookie = aH3
	}
	this.aD = function() {
		if (0 === eu.id) {
			aGk = 4, aB = [], s = 10;
			for (var u = aGj = 0; u < s; u++) aB.push("u" + u);
			l3 = new Array(s), ! function(aH0) {
				for (var aE, b7, aH1 = aH0.split(";"), u = aH1.length - 1; 0 <= u; u--) {
					for (aH1[u] = aH1[u].trim(), aE = 2; 0 <= aE; aE--) aH1[u] = aH1[u].replace(" ", "");
					3 < aH1[u].length && (aE = aB.indexOf(aH1[u].substring(0, 2)), b7 = aH1[u].indexOf("="), 0 <= aE && 2 === b7 ? l3[aE] = aH1[u].substring(b7 + 1, aH1[u].length) : 0 < b7 && aH2(aH1[u].substring(0, b7), "0", 0))
				}
			}(document.cookie), l3[9] || (l3[9] = "0"), (! function() {
				for (var u = s - 1; 0 <= u; u--)
					if (void 0 === l3[u]) return;
				return 1
			}() || (aGj = 2, aGn(), aGo(), aGp() !== l3[5])) && aGq()
		}
	}, this.aGr = function() {
		if (2 === aGj) {
			l3[1] = 0 === l3[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : l3[1], l3[5] = aGp(), ! function() {
				for (var u = 1; u < s - aGk; u++) l3[u] = l3[u].toString()
			}(), ! function() {
				l3[0] = lg.aGx(l3[0]);
				for (var u = s - aGk - 1; 0 <= u; u--) l3[u] = lg.aGy(l3[u])
			}();
			for (var u = s - 1; 0 <= u; u--) aH2(aB[u], l3[u], 1);
			aGn(), aGo()
		}
	}, this.aGj = function() {
		return aGj
	}, this.aGv = function(aE) {
		aGj = aE, this.aGr()
	}, this.aGw = function(u, value) {
		0 === eu.id && (l3[u] = value)
	}, this.aCU = function(u) {
		return 0 !== eu.id ? 0 : l3[u]
	}
}

function aH5() {
	2 === cE.gc ? aH6([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === cE.gc ? aH6([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === cE.gc ? aH6([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === cE.gc && aH6([
		512
	], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
}

function aH6(aH7, aH8, aH9, aHA, aHB) {
	for (var cS, cT, a0L, a0N, iQ, aHD, uT = aH7.length - 1, aHC = cE.cF + cE.ed, s = (aHC *= aHC, aH9.length), u = s - 1; 0 <= u; u--) aH9[u] *= aH9[u];
	var aHE = new Array(s),
		a3r = new Array(s),
		aHF = new Array(s),
		a8 = aEL.aEP();
	if (void 0 === aHB)
		for (aHB = new Array(s), u = s - 1; 0 <= u; u--) aHB[u] = 0;
	for (u = 1; u < s; u++) aHE[u] = aH9[u] - aH9[u - 1], a3r[u] = aHA[u] - aHA[u - 1], aHF[u] = aHB[u] - aHB[u - 1];
	for (cS = cE.cF - 1; 0 <= cS; cS--)
		for (cT = cE.ed - 1; 0 <= cT; cT--) {
			for (a0L = aHC, u = uT; 0 <= u; u--) a0L = (a0N = (cS - aH7[u]) * (cS - aH7[u]) + (cT - aH8[u]) * (cT - aH8[u])) < a0L ? a0N : a0L;
			for (iQ = aHA[s - 1], aHD = aHB[s - 1], u = 1; u < s; u++)
				if (a0L < aH9[u]) {
					iQ = aHA[u - 1] + cI((a0L - aH9[u - 1]) * a3r[u], aHE[u]), aHD = aHB[u - 1] + cI((a0L - aH9[u - 1]) * aHF[u], aHE[u]);
					break
				} aHG(cE.cF * cT + cS, iQ, aHD, a8)
		}
}

function aHG(au, iQ, aHD, a8) {
	iQ < 500 ? a8[au] = cG(a8[au] * iQ * 2, 1e3) : 500 < iQ && (a8[au] += cG(2 * (1e4 - a8[au]) * (iQ - 500), 1e3)), a8[au] += cG(aHD * (10 * iQ - a8[au]), 1e3)
}

function aG6() {
	function aHJ(xa) {
		return xa < 0 ? 0 : 255 < xa ? 255 : Math.floor(xa)
	}
	this.ea = 0, this.b6 = 0, this.f0 = !1, this.aHH = 0, this.gap = 0, this.aHI = 0, this.pL = 0, this.hP = 0, this.hR = 0, this.hS = 0, this.colors = null, this.aD = function() {
		this.f0 = !0, this.aHH = 0, this.resize()
	}, this.resize = function() {
		this.f0 && (ew.ea < 1.4 * ew.b6 ? this.ea = Math.floor((eu.di.ev() ? .94 : .43) * ew.ea) : (this.b6 = Math.floor((eu.di.ev() ? .88 : .43) * ew.b6), this.ea = Math.floor(1.4 * this.b6)), this.b6 = this.ea / 1.4, this.gap = this.ea / 32,
			this.pL = Math.floor(.25 * this.b6), this.hP = (this.b6 - this.pL - 3 * this.gap) / 2, this.hR = this.ea - 3 * this.gap - this.hP, this.hS = (this.b6 - this.pL - 4 * this.gap) / 3)
	}, this.aG7 = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var af = fE.fF.data[103].value.split("");
		if (af.length < 6)
			for (var cN = 2; 0 <= cN; cN--) this.colors[0][cN] = aHJ(256 * Math.random());
		else
			for (var u = 2; 0 <= u; u--) this.colors[0][u] = aHJ(4 * (10 * parseInt(af[2 * u]) + parseInt(af[2 * u + 1])));
		this.aHK()
	}, this.aHL = function() {
		return [cG(this.colors[0][0], 4), cG(this.colors[0][1], 4), cG(this.colors[0][2], 4)]
	}, this.hw = function(hr, hs, deltaY) {
		var eK = (ew.ea - this.ea) / 2;
		hs -= (ew.b6 - this.b6) / 2 + this.pL, (hr -= eK) < 0 || hs < 0 || hr >= this.ea || hs >= this.b6 - this.pL || (eK = Math.floor(3 * hs / (this.b6 - this.pL)), this.colors[this.aHI][eK] = aHJ(this.colors[this.aHI][eK] + (deltaY < 0 ? 1 : -
			1) * Math.max(Math.abs(.05 * deltaY), 1)), gh.hu = !0)
	}, this.f3 = function(hr, hs) {
		this.aHH = 0;
		var eK = (ew.ea - this.ea) / 2;
		return hs -= (ew.b6 - this.b6) / 2, (hr -= eK) < 0 || hs < 0 || hr >= this.ea - 1 || hs >= this.b6 - 1 || hr > this.ea - (.4 * this.pL + 3 * this.gap) && hs < this.pL ? (this.f0 = !1, !(gh.hu = !0)) : hr < this.gap || hs < this.gap + this
			.pL || hr >= this.ea || hs >= this.b6 - this.gap || (hr < this.gap + this.hP ? (hs < this.gap + this.pL + this.hP && 0 !== this.aHI && (this.aHI = 0, gh.hu = !0), !0) : hr < this.gap + this.hP || (hr -= 2 * this.gap + this.hP, hs <
				this.gap + this.pL + this.hS ? (this.aHH = 1, this.colors[this.aHI][0] = aHJ(256 * hr / this.hR), gh.hu = !0) : hs < 2 * this.gap + this.pL + this.hS || (hs < 2 * this.gap + this.pL + 2 * this.hS ? (this.aHH = 2, this.colors[
					this.aHI][1] = aHJ(256 * hr / this.hR), gh.hu = !0) : !(hs >= 3 * this.gap + this.pL + 2 * this.hS) || (this.aHH = 3, this.colors[this.aHI][2] = aHJ(256 * hr / this.hR), gh.hu = !0))))
	}, this.aHK = function() {
		for (var cN = 2; 0 <= cN; cN--) this.colors[0][cN] = aHJ(this.colors[0][cN])
	}, this.aHM = function() {
		for (var a8, af = "", u = 0; u < 3; u++)(a8 = cG(this.colors[0][u], 4)) < 10 && (af += "0"), af += a8.toString();
		return af
	}, this.hv = function(hr) {
		0 !== this.aHH && (hr -= 2 * this.gap + this.hP + (ew.ea - this.ea) / 2, this.colors[this.aHI][this.aHH - 1] = aHJ(256 * hr / this.hR), gh.hu = !0)
	}, this.hx = function() {
		0 < this.aHH && (this.aHH = 0, this.aHK(), fE.hZ.fD(103, this.aHM()), gh.hu = !0)
	}, this.fA = function() {
		var eK = (ew.ea - this.ea) / 2,
			eM = (ew.b6 - this.b6) / 2;
		fB.setTransform(1, 0, 0, 1, eK, eM), fB.fillStyle = hk.nv, fB.fillRect(0, this.pL, this.ea, this.b6 - this.pL), fB.fillStyle = hk.a7y, fB.fillRect(0, 0, this.ea, this.pL), fB.fillStyle = hk.hl, fB.lineWidth = dZ.hh, fB.strokeStyle = hk
			.hl, fB.strokeRect(-1, -1, this.ea + 2, this.b6 + 2), fB.fillRect(0, this.pL, this.ea, dZ.hh), fB.font = dW.dX.hn(1, .31 * this.pL), dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 1), fB.fillText("Choose Your Nation's Color!", Math
				.floor((this.ea - this.gap - .4 * this.pL) / 2), Math.floor(.55 * this.pL)), this.hi(0), fB.lineWidth = dZ.hh, this.hj(0), this.hj(1), this.hj(2), m5.pU(Math.floor(eK + this.ea - .4 * this.pL - this.gap), Math.floor(eM + .3 * this
				.pL), Math.floor(.4 * this.pL)), fB.setTransform(1, 0, 0, 1, 0, 0)
	}, this.hi = function(u) {
		var aS = this.colors[u][0],
			gn = this.colors[u][1],
			u = this.colors[u][2];
		fB.fillStyle = "rgb(" + aS + "," + gn + "," + u + ")", fB.fillRect(this.gap, this.pL + this.gap, this.hP, 2 * this.hP + this.gap), fB.lineWidth = dZ.hh, fB.strokeStyle = hk.hl, fB.strokeRect(this.gap, this.pL + this.gap, this.hP, 2 * this
			.hP + this.gap), fB.fillStyle = aS + gn + u < 306 && gn < 150 ? hk.hl : hk.hm, fB.font = dW.dX.hn(1, .32 * this.hS), dW.dX.textAlign(fB, 1), dW.dX.textBaseline(fB, 1), fB.rotate(-Math.PI / 2), fB.fillText("National Color", Math
			.floor(-1.5 * this.gap - this.pL - this.hP), Math.floor(this.gap + .5 * this.hP)), fB.rotate(Math.PI / 2)
	}, this.hj = function(u) {
		fB.fillStyle = "rgb(" + (0 === u ? 150 : 2 === u ? 30 : 0) + "," + (1 === u ? 130 : 2 === u ? 30 : 0) + "," + (2 === u ? 220 : 0) + ")", fB.fillRect(2 * this.gap + this.hP, this.pL + this.gap + u * (this.gap + this.hS), Math.floor(this
			.colors[this.aHI][u] * this.hR / 255), this.hS), fB.strokeStyle = hk.hl, fB.strokeRect(2 * this.gap + this.hP, this.pL + this.gap + u * (this.gap + this.hS), this.hR, this.hS), fB.fillStyle = hk.hl, fB.font = dW.dX.hn(1, .32 *
			this.hS), dW.dX.textBaseline(fB, 1), dW.dX.textAlign(fB, 0), fB.fillText((0 === u ? "Red: " : 1 === u ? "Green: " : "Blue: ") + this.colors[0][u].toString(), 3 * this.gap + this.hP, Math.floor(this.pL + this.gap + u * (this.gap +
			this.hS) + .53 * this.hS))
	}
}

function aHN() {
	var aHO, aHP, aHQ;
	aHO = [32, 65, 191, 913, 931], aHP = [64, 127, 688, 930, 1155], aHQ = new Array(aHO.length + 1);
	for (var u = 0; u < aHQ.length; u++) {
		aHQ[u] = 0;
		for (var aE = u - 1; 0 <= aE; aE--) aHQ[u] += aHP[aE] - aHO[aE]
	}

	function aHW(cJ) {
		for (var u = aHO.length - 1; 0 <= u; u--)
			if (cJ >= aHO[u] && cJ < aHP[u]) return u;
		return -1
	}
	this.qM = function(af) {
		return 0 !== (af = af.trim()).indexOf("Bot ") && 0 !== af.indexOf("[Bot] ") && function(af, aHT, aHU) {
			var s = (af = af.trim()).length;
			if (s < aHT || aHU < s) return !1;
			for (var cJ, aHV = 0, u = 0; u < s; u++)
				if (cJ = af.charCodeAt(u), aHV += 65 <= cJ && cJ <= 90 || 1040 <= cJ && cJ <= 1071 ? 1 : 0, -1 === aHW(cJ)) return !1;
			if (3 < aHV && aHV > Math.floor(s / 2)) return !1;
			return !0
		}(af, 3, 20)
	}, this.a1V = function(af) {
		for (var s = (af = af.trim()).length, cB = [], u = 0; u < s; u++) {
			var cJ, b7 = aHW(cJ = af.charCodeAt(u));
			cB.push(aHQ[b7] + cJ - aHO[b7])
		}
		return cB
	}, this.ae = function(cB) {
		for (var cJ, cN, af = "", s = cB.length, u = 0; u < s; u++)
			for (cN = 1; cN < aHQ.length; cN++)
				if (cB[u] < aHQ[cN]) {
					cJ = aHO[cN - 1] + cB[u] - aHQ[cN - 1], af += String.fromCharCode(cJ);
					break
				} return af
	}, this.aGx = function(af) {
		for (var cB = this.a1V(af), result = "", u = 0; u < cB.length; u++) result = (result += cB[u] < 10 ? "00" : cB[u] < 100 ? "0" : "") + cB[u].toString(10);
		return result
	}, this.aGz = function(af) {
		for (var cB = new Array(Math.floor(af.length / 3)), u = 0; u < af.length; u += 3) cB[Math.floor(u / 3)] = parseInt(af.substring(u, u + 3));
		return this.ae(cB)
	}, this.aGy = function(af) {
		for (var a8, cB = [af.length], u = 0; u < af.length; u++) cB[u] = af.charCodeAt(u) - 48;
		var result = "";
		for (u = 0; u < af.length; u++) u === af.length - 1 || 51 < 10 * cB[u] + cB[u + 1] ? result += cB[u].toString() : (a8 = 10 * cB[u] + cB[u + 1], result += String.fromCharCode(a8 + (a8 < 26 ? 65 : 71)), u++);
		return result
	}, this.aCS = function(af) {
		for (var cJ, result = "", u = 0; u < af.length; u++) 48 <= (cJ = af.charCodeAt(u)) && cJ < 58 ? result += String.fromCharCode(cJ) : 65 <= cJ && cJ < 75 ? result += "0" + (cJ - 65).toString() : 75 <= cJ && cJ < 91 ? result += (cJ - 65)
			.toString() : 97 <= cJ && cJ < 123 && (result += (cJ - 71).toString());
		return result
	}, this.aHX = function(af) {
		for (var s = af.length, cB = [], u = 0; u < s; u++)(cJ = af.charCodeAt(u)) < 58 ? cB.push(af[u]) : (cJ -= cJ < 91 ? 65 : 71, cB.push(String(cG(cJ, 10))), cB.push(String(cJ - 10 * cG(cJ, 10))));
		var s = cB.length - 2,
			cJ = 0,
			z6 = [];
		for (u = 0; u < s; u += 3) z6[cJ++] = parseInt(cB[u] + cB[u + 1] + cB[u + 2]);
		return z6
	}, this.ph = function() {
		for (var aS, aHY = "", u = 0; u < 6; u++) aS = 48 + aT.random() % 36, aS += 58 <= aS ? 39 : 0, aHY += String.fromCharCode(aS);
		return aHY
	}
}

function aHb() {
	var aHu;
	fp || (fh(), aC5(), eS = new rd, el = new aDh, dW = new aHd, hk = new a7t, aM = new ut, v = new p2, ag = new aC7, tx = new gw, jK = new ko, rI = new a9S, rM = new wL, rX = new aFX, vE = new tZ, lg = new aHN, nt = new aAH, m5 = new aFN, al =
		new aHe, sv = new aAu, rS = new a2q, iU = new aHf, ly = new lk, mC = new vS, mk = new a1X, rR = new aD4, rO = new aEc, rE = new aAz, rY = new ya, tI = new a9V, iC = new a51, f1 = new a6B, ge = new xM, er = new a7h, cz = new be, aCT =
		new aGi, g7 = new aHg, rJ = new xp, a6n = new a4q, nD = new aHh, aW = new yy, vD = new aA, aa = new a6H, nd = new aHi, v9 = new aHj, aEL = new aHk, a49 = new a3y, i = new d2, aT = new aBh, wS = new a5S, vC = new q2, aDY = new a0F, rZ =
		new ia, ew = new t7, iM = new a8T, xO = new a1C, rT = new a6X, ma = new o6, rH = new jo, tG = new aFz, rL = new aAA, rK = new ul, nF = new aGC, io = new ii, aH = new aCY, jx = new aBO, aw = new gV, ra = new a5k, f = new fm, at = new lc,
		aHZ = new t2, iX = new aDF, eA = new aC8, du = new a8K, cC = new a6Q, rQ = new aHl, rV = new a15, ro = new oI, cE = new aHm, aDb = new sB, b3 = new a4w, vN = new a6N, fI = new z8, eu = new dc, fp = new mO, u6 = new a0o, fE = new zh, cK =
		new vs, rU = new aHn, mh = new iP, d0 = new a2S, cx = new a7f, aAb = new a2c, l2 = new aHo, tJ = new a79, gh = new r2, ls = new aHp, dZ = new aHq, py = new i1, aHa = new aHr, fp.aD(), eu.aD(), ew.tC(), fE.aD(), fI.aD(), aHa.aD(), dW.aD(),
		aCT.aD(), aAb.aD(), i.aD(), v.aD(), ag.aD(), cE.aD(), aHt(), (aHu = document.getElementById("usernameField")) && document.body.removeChild(aHu), sw = new ee, ew.aD(), eu.di.aCW(), gh.aD(), dZ.aD(), mh.aD(), (mn = new qN).aD(), a6E =
		new pK, aT.aD(), rJ.xw(), vN.aD(), v9.aD(), f1.aD(), io.aD(), mk.aD(), vD.aD(), iX.aD(), er.aD(), gh.hu = !0, setTimeout(function() {
			cE.g(2, 14071)
		}, 0), b3.b4(5, 5), aHZ.oB(), eu.di.aCX(), ew.fJ(), fp.fq = 1)
}

function aHf() {
	var qO, gx, ib, aHv, b6, iT, fontSize, aHw, aHx, a7E, aHy, k9, kA, ic, aHz;

	function aI5() {
		fB.drawImage(k9, dZ.gap + (aM.bz ? dZ.gap + rU.aI6() : 0), aEa + 2 * dZ.gap)
	}

	function aI0() {
		k9.width = qO[0].width + a7E, k9.height = b6 + a7E, (kA = k9.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, qO[0].width + a7E, b6 + a7E), kA.translate(Math.floor(a7E / 2), Math.floor(a7E / 2)), kA.lineWidth = a7E, kA.fillStyle = 1 === qO[0].aI4 ? hk.a7w : hk.nv, aI7(), kA.fill(), kA.strokeStyle = 1 === qO[0].aI4 ? hk.hm : hk
			.hl, aI7(), kA.stroke(), dW.dX.textAlign(kA, 1), dW.dX.textBaseline(kA, 1), kA.fillStyle = 1 === qO[0].aI4 ? hk.hm : hk.hl, kA.font = iT[0], kA.fillText(fI.dq[66 + qO[0].aI3], Math.floor(qO[0].width / 2), Math.floor(.72 * aHw[0] * b6)),
			kA.font = iT[1], kA.fillText(qO[0].af, Math.floor(qO[0].width / 2), Math.floor((aHw[0] + .48 * aHw[1]) * b6))
	}

	function aI7() {
		kA.beginPath(), kA.moveTo(aHy, 0), kA.lineTo(qO[0].width - aHy, 0), kA.lineTo(qO[0].width, aHy), kA.lineTo(qO[0].width, b6 - aHy), kA.lineTo(qO[0].width - aHy, b6), kA.lineTo(aHy, b6), kA.lineTo(0, b6 - aHy), kA.lineTo(0, aHy), kA.closePath()
	}
	this.aD = function() {
		gx = 4, ib = aHv = ic = 0, qO = [], iT = new Array(2), fontSize = new Array(2), (aHw = new Array(2))[0] = .3, aHw[1] = .7, aHx = new Array(4), k9 = document.createElement("canvas"), aHz = gh.ig + 2e3, this.resize()
	}, this.resize = function() {
		var u, ea;
		for (b6 = Math.floor((eu.di.ev() ? .0725 : .058) * ew.ex), fontSize[0] = Math.floor(.85 * aHw[0] * b6), fontSize[1] = Math.floor(.85 * aHw[1] * b6), iT[0] = dW.dX.hn(1, fontSize[0]), iT[1] = dW.dX.hn(1, fontSize[1]), u = aHx.length -
			1; 0 <= u; u--) aHx[u] = this.measureText(fI.dq[66 + u] + "000", iT[0]);
		if (a7E = Math.floor(1 + .05 * b6), aHy = Math.floor(.2 * b6), 0 < qO.length) {
			for (u = qO.length - 1; 0 <= u; u--) ea = this.measureText(qO[u].af + "00", iT[1]), qO[u].width = ea < aHx[u] ? aHx[u] : ea;
			aI0()
		}
	}, this.a0 = function() {
		0 !== gx && (4 === gx ? gh.ig > aHz && (gx = 0, 1 === aM.gj) && iU.aGV(cE.aJ.iu[cE.gc].name, 3, 1, 9) : (1 === gx ? (0 === ib && (aI0(), ib = 1e-4), 1 <= (ib += .002 * (gh.ig - ic)) && (aHv = 0, gx = 2, ib = 1), gh.hu = !0) : 2 === gx ? (
			(aHv += (gh.ig - ic) / 1e3) > qO[0].aFl || 1 < aHv && 1 < qO.length) && (gx = 3) : 3 === gx && ((ib -= .002 * (gh.ig - ic)) <= 0 && (ib = 0, qO.shift(), gx = 0 < qO.length ? 1 : 0), gh.hu = !0), ic = gh.ig))
	}, this.measureText = function(af, iT) {
		return fB.font = iT, Math.floor(fB.measureText(af).width)
	}, this.jI = function(a5U, u) {
		this.aGV(aW.aX[a5U], u, 1, 0 === u ? 3 : 7)
	}, this.aGV = function(af, aI3, aI4, aFl) {
		var ea = (ea = this.measureText(af + "00", iT[1])) < aHx[aI3] ? aHx[aI3] : ea;
		qO.push({
			af: af,
			width: ea,
			aI3: aI3,
			aI4: aI4,
			aFl: aFl
		}), 0 === gx && (ib = 0, gx = 1, ic = gh.ig)
	}, this.fA = function() {
		0 !== gx && 0 !== ib && (ib < 1 ? (fB.globalAlpha = ib, aI5(), fB.globalAlpha = 1) : aI5())
	}
}

function aHt() {
	jX = 8, jV = 0, jW = new Uint16Array(jX)
}

function vB() {
	jG = aM.bz ? new Uint8Array(aM.aV) : null
}

function hL(player, h8) {
	var y3;
	aM.bz && (jG[player] = 0), !g7.a2H(player) || h8 < 60 || (0 === aW.fz[player].length ? du.a8N.a0(player) || (tx.hH(player - aM.aU, 200), aAE(player, h8, tx.h8[player - aM.aU], rJ.y4(player))) : 0 < aW.ds[player].length && aT.random() < aT.value(
		aW.ds[player].length > aW.fz[player].length ? 7 : 3) && du.a8N.a0(player) || (y3 = rJ.y4(player), aW.dt[player] > y3 && h8 < aW.dt[player] - y3 && (h8 = aW.dt[player] - y3), aM.bz ? aI8(player, h8, tx.h8[player - aM.aU], y3) : aI9(
		player, h8, tx.h8[player - aM.aU])))
}

function aI8(player, h8, aIA, y3) {
	var jN;
	jR(player, !1) || jY(player, !1) ? (jG[player] = 1, ja(player) || (jZ() ? (aIB(player, h8), aIC(player, aM.aV, aIA)) : (aT.yV(tx.h7[aIA]) ? aID(player, h8, jN = je(player)) : (jc() && aT.yV(tx.h5[aIA]) && jd(), aID(player, h8, jN = jh(player))),
		aIC(player, jN, aIA)))) : 0 < aW.ds[player].length && aT.random() < aT.value(60) && du.a8N.a0(player) || (tx.hH(player - aM.aU, 200), aAE(player, h8, aIA, y3))
}

function aAF(player, h8) {
	jR(player, !1) || jY(player, !1) ? (jG[player] = 1, jZ() ? aIB(player, h8) : aID(player, h8, jn())) : aAE(player, h8, 0, 0)
}

function aIC(player, jN, aIA) {
	3 <= aIA && 2142 < gh.gi() && (jN === aM.aV || aW.dt[jN] < cG(aW.dt[player], 20)) && tx.hH(player - aM.aU, 25)
}

function aAE(player, h8, aIA, y3) {
	var u, cN, cJ;
	if (0 !== cK.cM[player] && !(5 === aIA && aW.dt[player] < y3 || 4 === aIA && aW.dt[player] < cG(y3, 2)))
		for (u = aT.hF(uq), cN = 0; cN < uq; cN++)
			if (cJ = uo[(cN + u) % uq], cK.cM[cJ] === cK.cM[player] && 1 === jG[cJ]) return void jx.ol.a1K(player, cJ, h8)
}

function aI9(player, h8, aIA) {
	!jR(player, !0) && !jY(player, !0) || ja(player) || (jZ() ? aIB(player, h8) : aT.yV(tx.h7[aIA]) ? aID(player, h8, je(player)) : (jc() && aT.yV(tx.h5[aIA]) && jd(), aID(player, h8, jh(player))))
}

function aAG(player, h8) {
	(jR(player, !0) || jY(player, !0)) && (jZ() ? aIB(player, h8) : aID(player, h8, jn()))
}

function aID(player, h8, jN) {
	cG(aW.dt[player], 8) > aW.dt[jN] && (h8 = (aIE = cG(11 * aW.dt[jN], 5)) < h8 ? h8 : aIE);
	var aIE = aW.g1[player].length;
	jC(player, jN), jM(player, jN, aIE, h8)
}

function aIB(player, h8) {
	var jN = aM.aV,
		s = aW.g1[player].length;
	return jB(player), aW.g1[player].length !== s && (jM(player, jN, s, h8), !0)
}

function aHg() {
	var aIF, aIG, size, jN, h8, id;

	function aIH(player) {
		return player < aM.aU ? aIF * player : aIF * aM.aU + aIG * (player - aM.aU)
	}
	this.aD = function() {
		aIF = aM.aU < 16 ? 12 : 8, aIG = 4;
		var s = aIH(aM.aV);
		size = new Uint8Array(aM.aV), jN = new Uint16Array(s), h8 = new Uint32Array(s), id = new Uint16Array(s)
	}, this.a2K = function(a5U, aII) {
		var aIJ = this.gT(a5U, aII);
		this.gS(a5U, aII, 0), aIJ = dW.dz.ok(a5U, aIJ), a5U === aM.gb && (l2.l3[13] -= aIJ)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.yS = function(player, aII) {
		var aIE, aII = function(player, aII) {
			var u, aZ = aIH(player);
			for (u = size[player] - 1; 0 <= u; u--)
				if (0 === id[aZ + u] && jN[aZ + u] === aII) return u;
			return size[player]
		}(player, aII);
		aII !== size[player] && (aIE = h8[aIH(player) + aII], this.a5e(player, aII), this.jI(player, aIE, aM.aV))
	}, this.jb = function(player, aII) {
		for (var aZ = aIH(player), u = size[player] - 1; 0 <= u; u--)
			if (0 === id[aZ + u] && jN[aZ + u] === aII) return !0;
		return !1
	}, this.a2H = function(player) {
		return player < aM.aU ? size[player] < aIF : size[player] < aIG
	}, this.js = function(player) {
		return size[player]
	}, this.a3L = function(player, u) {
		return jN[aIH(player) + u]
	}, this.a3K = function(player, u) {
		return id[aIH(player) + u]
	}, this.we = function(player, a5j) {
		for (var aZ = aIH(player), u = size[player] - 1; 0 <= u; u--)
			if (id[aZ + u] === a5j) return u;
		return -1
	}, this.wd = function(player, u) {
		return h8[aIH(player) + u]
	}, this.gT = function(player, aII) {
		for (var aZ = aIH(player), u = size[player] - 1; 0 <= u; u--)
			if (0 === id[aZ + u] && jN[aZ + u] === aII) return h8[aZ + u];
		return 0
	}, this.yQ = function(player) {
		for (var aZ = aIH(player), a8 = 0, u = size[player] - 1; 0 <= u; u--) a8 += h8[aZ + u];
		return a8
	}, this.a7b = function(player) {
		for (var aZ = aIH(player), a8 = 0, u = size[player] - 1; 0 <= u; u--) 0 === id[aZ + u] && (a8 += h8[aZ + u]);
		return a8
	}, this.jr = function(player) {
		for (var aZ = aIH(player), nq = 0, u = size[player] - 1; 0 <= u; u--) 0 < id[aZ + u] && nq++;
		return nq
	}, this.gS = function(player, aII, aIE) {
		for (var aZ = aIH(player), u = size[player] - 1; 0 <= u; u--) 0 === id[aZ + u] && jN[aZ + u] === aII && (h8[aZ + u] = aIE)
	}, this.g8 = function(player, u, aIE) {
		h8[aIH(player) + u] = aIE
	}, this.jI = function(player, aIE, aII) {
		var u, aZ = aIH(player);
		for (aII === aM.gb && l2.l3[player < aM.aU ? 6 : 5]++, u = size[player] - 1; 0 <= u; u--)
			if (0 === id[aZ + u] && jN[aZ + u] === aII) return h8[aZ + u] += aIE, void(h8[aZ + u] = h8[aZ + u] > aM.uu ? aM.uu : h8[aZ + u]);
		jN[aZ + size[player]] = aII, h8[aZ + size[player]] = aIE, id[aZ + size[player]] = 0, size[player]++, player < aM.aU && (aII === aM.gb ? al.rq(player, 5) : player === aM.gb && nD.aAB(aII))
	}, this.aIL = function(player, aIE, a5j) {
		var aZ = aIH(player);
		aW.jq[player] = 2, jN[aZ + size[player]] = 0, h8[aZ + size[player]] = aIE, id[aZ + size[player]] = a5j, size[player]++
	}, this.a5e = function(player, au) {
		var aE, aZ;
		if (0 !== size[player])
			for (aZ = aIH(player), size[player]--, aE = au; aE < size[player]; aE++) jN[aZ + aE] = jN[aZ + aE + 1], h8[aZ + aE] = h8[aZ + aE + 1], id[aZ + aE] = id[aZ + aE + 1]
	}, this.yM = function(player) {
		for (var aE, aZ, yL = [], u = uq - 1; 0 <= u; u--)
			for (aZ = aIH(uo[u]), aE = size[uo[u]] - 1; 0 <= aE; aE--)
				if (0 === id[aZ + aE] && jN[aZ + aE] === player) {
					yL.push(uo[u]);
					break
				} return yL
	}
}

function vI() {
	gD = 0, aIM = 2048, gU = new Uint32Array(4 * aIM), aIN = 0, aIO = new Uint32Array(aIM), (jQ = new Int32Array(4))[0] = -4 * cE.cF, jQ[1] = 4, jQ[2] = -jQ[0], jQ[3] = -jQ[1], aIP = new Uint8Array(cE.cF * cE.ed)
}

function kx(player) {
	g9 = player, g6 = !1, aIQ(), aIR();
	for (var u = g7.js(g9) - 1; 0 <= u; u--) 0 === g7.a3K(g9, u) && (gA = u, aIS());
	g6 && aIT()
}

function aIT() {
	aIU(), aIV()
}

function aIS() {
	fu = g7.a3L(g9, gA), gB = g7.wd(g9, gA), aIW(), (0 !== gD && (aIX(), aIY()) ? fr : fw)()
}

function aIY() {
	return (gQ = cG(gB, gD)) > aM.gJ
}

function aIX() {
	for (var u = gD - 1; 0 <= u; u--) aIP[cG(gU[u], 4)] = 0
}

function fw() {
	var mJ;
	1 === g7.js(g9) && jK.l4(g9), g9 !== aM.gb ? (aW.dt[g9] += gB, rJ.y7(g9)) : (mJ = aW.dt[g9], aW.dt[g9] += gB, rJ.y7(g9), l2.l3[13] -= aW.dt[g9] - mJ), g7.a5e(g9, gA)
}

function aIQ() {
	var u, s = aW.g1[g9].length;
	for (aIN = 0, u = (aIM < s ? aIM : s) - 1; 0 <= u; u--) aIO[aIN++] = aW.g1[g9][u]
}

function aIR() {
	for (var u = aW.g1[g9].length - 1; 0 <= u; u--) cz.cl(aW.g1[g9][u]) && cz.cu(aW.g1[g9][u], g9);
	aW.g1[g9] = []
}

function aIW() {
	gD = 0, (fu === aM.aV ? aIZ : aIa)()
}

function aIa() {
	for (var b7, eD, u, cH = 3; 0 <= cH; cH--)
		for (u = aIN - 1; 0 <= u; u--) eD = cG(b7 = aIO[u] + jQ[cH], 4), 0 === aIP[eD] && cz.ca(b7) && cz.ce(b7) === fu && (aIP[eD] = 1, gU[gD++] = b7)
}

function aIZ() {
	for (var b7, eD, u, cH = 3; 0 <= cH; cH--)
		for (u = aIN - 1; 0 <= u; u--) eD = cG(b7 = aIO[u] + jQ[cH], 4), 0 === aIP[eD] && cz.cm(b7) && (aIP[eD] = 1, gU[gD++] = b7)
}

function a50() {
	let hN, l7;
	var kV;
	this.show = function() {
		hN.show(), this.resize()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), l7.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU("🔑 " + fI.dq[125], [new hV("💾 " + fI.dq[97], function() {
		b3.i8()
	}, hk.iB)]), l7 = new kU(hN.l9, ((kV = []).push(function() {
		var lF = new lG;
		return lF.lH("🧈 Gold"), lF.a5P("Balance: " + dW.lQ.aBc(fE.fF.data[113].value, .01, 2)), lF.lI(
			"Play more multiplayer games to earn gold. Accounts without gold will be deleted. Each day, you will lose 🧈 0.50 or 0.01% of your balance, whichever amount is higher."), lF
	}()), kV.push(function() {
		var lF = new lG;
		return lF.lH("1v1 Rating"), lF.a5P("Elo: " + dW.lQ.aBc(fE.fF.data[107].value, .1, 1) + "<br>Rank: " + (fE.fF.data[108].value + 1) + " / " + fE.fF.data[111].value + "<br>Played Games: " + fE.fF.data[112].value), lF
	}()), kV.push(function() {
		let lF = new lG,
			lL = (lF.lH("Account Name"), new lM(fE.fF.data[105]));
		return lL.cO.readOnly = !0, lF.lN(lL), lF.lN(new lS([new hV("Copy", function() {
			dW.dX.kO(lL.cO), dW.dX.kP(this)
		}).button])), lF
	}()), kV.push(function() {
		let lF = new lG,
			a2p = (lF.lH("Password"), new lM(fE.fF.data[106]));
		return a2p.cO.readOnly = !0, a2p.cO.type = "password", lF.lN(a2p), lF.lN(new lS([new hV("Show", function() {
			"Show" === this.innerText ? (this.innerText = "Hide", a2p.cO.type = "text") : (this.innerText = "Show", a2p.cO.type = "password")
		}).button, new hV("Copy", function() {
			dW.dX.kO(a2p.cO), dW.dX.kP(this)
		}).button])), lF.lN(new lS([new hV("Request New Password", function() {
			b3.b4(8, b3.gk().po, new iZ(15))
		}).button])), lF
	}()), kV.push(function() {
		var lF = new lG;
		return lF.lH("Account Options"), lF.lN(new lS([new hV("Log in to a Different Account", function() {
			b3.b4(6, b3.gk().po)
		}).button])), lF.lN(new lS([new hV("Create New Account", function() {
			fE.hZ.fD(105, ""), b3.b4(8, b3.gk().po, new iZ(18))
		}).button])), lF.lN(new lS([new hV("Delete Account: " + fE.fF.data[105].value, function() {
			b3.b4(4, 0, new b5("🗑️ Account Deletion", "Your account will start the deletion process but may be restored if you log in within 3 weeks.", !0, [new hV("❌ " + fI.dq[92], function() {
				b3.b4(7, b3.a2k(7).po)
			}), new hV("🗑️ Delete Account", function() {
				b3.b4(8, b3.a2k(7).po, new iZ(17))
			}, hk.i9)]))
		}, hk.i9).button])), lF
	}()), kV.push(function() {
		var lF = new lG;
		lF.lH("Saved Accounts"), lF.lI("Listed accounts may have been removed in the meantime due to insufficient funds."), fE.j.kf();

		function aIi(au) {
			for (let u = 0; u < 2; u++) aIh[u].sn(0 === au ? hk.a7z : 0 === u ? hk.i9 : hk.iB)
		}
		let a5Q, aIh;
		return aIh = [new hV("🗑️ Remove From List", function() {
			var au = Math.min(fE.fF.data[117].value, a5Q.a5R.length - 1);
			if (!(au < 1)) {
				a5Q.a5R[au].remove(), a5Q.a5R.splice(au, 1);
				for (let u = au; u < a5Q.a5R.length; u++) a5Q.a5R[u].name = "" + u;
				fE.j.kj(au), au = fE.fF.data[117].value, a5Q.a5R[au].textContent = a5Q.a5R[au].textContent.replace("⚪", "🟢"), aIi(au)
			}
		}, hk.a7z), new hV("➡️ Login", function() {
			var au = Math.min(fE.fF.data[117].value, a5Q.a5R.length - 1);
			au < 1 || (au = fE.j.kk(au), fE.hZ.fD(105, au.kl), fE.hZ.fD(106, au.password), b3.b4(8, b3.gk().po, new iZ(18)))
		}, hk.a7z)], a5Q = new la(fE.fF.data[117], aIi), lF.lZ(a5Q), lF.lN(new lS([aIh[1].button])), lF.lN(new lS([aIh[0].button])), lF
	}()), function(kV) {
		var aGa = fE.fF.data[137].value;
		var lF;
		0 !== aGa && ((lF = new lG).lH("Primary Clan Stats"), lF.a5P("Clan: " + fE.fF.data[135].value), lF.a5P("Collected Points: " + dW.lQ.aBc(aGa, .001, 3)), lF.a5P("Rank: " + (fE.fF.data[139].value + 1) + " / " + fE.fF.data[111]
			.value), kV.push(lF))
	}(kV), function(kV) {
		var aGa = fE.fF.data[138].value;
		var lF;
		0 !== aGa && ((lF = new lG).lH("Secondary Clan Stats"), lF.a5P("Clan: " + fE.fF.data[136].value), lF.a5P("Points: " + dW.lQ.aBc(aGa, .001, 3)), kV.push(lF))
	}(kV), kV))
}

function vJ() {
	this.bJ = null, this.aD = function(bJ) {
		this.bJ = bJ, al.aIm(this.bJ)
	}, this.ry = function(aIn) {
		var jU = (this.bJ[aIn].bL - this.bJ[1 - aIn].bL) / 10,
			jU = 8 / (1 + Math.pow(2, jU / 32)),
			jU = Math.floor(10 * jU + .5),
			aIo = this.aIp(this.bJ[aIn].bL + jU + 1),
			jU = this.aIp(this.bJ[1 - aIn].bL - jU);
		0 === aIn ? al.aIr(this.bJ, aIo, jU, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : al.aIr(this.bJ, jU, aIo, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.aIp = function(bL) {
		return 16e3 <= (bL = bL < 0 ? 0 : 16e3 < bL ? 16e3 : bL) ? "Unknown" : (bL / 10).toFixed(1)
	}
}

function oU(xE) {
	let hN, l7;
	var kV;
	this.show = function() {
		hN.show(), this.resize()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), l7.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU("🛠️ List Options", [new hV("❌ " + fI.dq[92], function() {
		b3.l8(10)
	})]), l7 = new kU(hN.l9, ((kV = []).push(function() {
		function lV() {
			var d = Math.floor(lU.cO.value),
				e = Math.floor(lT.cO.value);
			return {
				lW: Math.min(d, e),
				lX: Math.max(d, e)
			}
		}

		function lO() {
			var lY = ((lY = lV()).lX - lY.lW + 2) / 100;
			lJ.button.innerHTML = dW.lQ.lR(lJ.button.innerHTML, lY)
		}
		let lF = new lG,
			lJ, lT = new lM(fE.fF.data[132], 1, function() {
				lJ.button.click()
			}),
			lU = new lM(fE.fF.data[131], 1, function() {
				lT.cO.focus()
			});
		lF.lH("Start Index"), lF.lN(lU), lU.cO.style.marginBottom = "0.5em", lF.lH("End Index"), lF.lN(lT), lJ = new hV("Go (🧈 2.01)", function() {
			var lY = lV();
			b3.b4(8, b3.gk().po, new iZ(21, {
				c: xE.c,
				d: lY.lW,
				e: lY.lX
			}))
		});
		return lU.cO.addEventListener("input", lO), lT.cO.addEventListener("input", lO), lO(), lF.lN(new lS([lJ.button])), lF
	}()), kV.push(function() {
		function lO() {
			var lP = (5 + Math.max(Math.abs(Math.floor(lT.cO.value)), 1)) / 100;
			lJ.button.innerHTML = dW.lQ.lR(lJ.button.innerHTML, lP)
		}
		let lF = new lG,
			lJ, lT = new lM(fE.fF.data[134], 1, function() {
				lJ.button.click()
			}),
			lU = new lM(fE.fF.data[133], 0, function() {
				lT.cO.focus()
			});
		lF.lH("Search"), lF.lN(lU), lU.cO.style.marginBottom = "0.5em", lF.lH("Matches"), lF.lN(lT), lJ = new hV("Go (🧈 0.10)", function() {
			var m = lU.cO.value.slice(0, 20),
				n = Math.abs(Math.floor(lT.cO.value));
			b3.b4(8, b3.gk().po, new iZ(22, {
				c: xE.c,
				m: m,
				n: n
			}))
		});
		return lT.cO.addEventListener("input", lO), lO(), lF.lN(new lS([lJ.button])), lF
	}()), kV))
}

function a4x() {
	this.fF = {}, this.iK = function() {
		b3.b4(5, 5)
	}, this.sl = function() {
		b3.fH(), ge.aD()
	}, this.sk = function() {
		b3.fH(), iC.a5B(fE.fF.data[10].value), iC.aD()
	}, this.hW = function() {
		b3.b4(0 === f1.f2() ? 5 : 0)
	}, this.lK = function() {
		if (1 === fE.fF.data[130].value) b3.b4(8, b3.gk().po, new iZ(24, {
			q: fE.fF.data[125].value,
			d: fE.fF.data[128].value,
			e: fE.fF.data[129].value,
			a0C: fE.fF.data[127].value
		}));
		else {
			let cB = fE.fF.data[126].value.split(",");
			cB = cB.slice(0, 10);
			for (let u = 0; u < cB.length; u++) cB[u] = cB[u].trim().slice(0, 7).toUpperCase();
			1 === cB.length && 0 === cB[0].length && (cB = []), b3.b4(8, b3.gk().po, new iZ(23, {
				q: fE.fF.data[125].value,
				r: cB,
				a0C: fE.fF.data[127].value
			}))
		}
	}, this.sm = function(po, target) {
		b3.b4(4, po, new b5("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + el.aDn +
			"' target='_blank'>" + el.aDn + "</a>", !1, [new hV("❌ " + fI.dq[92], function() {
				b3.b4(po)
			}), new hV("✅ " + fI.dq[0], function() {
				fE.hZ.fD(140, 1), 0 === target ? b3.b4(2, po) : b3.b4(8, po, new iZ(target))
			})]))
	}
}

function aHr() {
	this.id = new rk, this.aD = function() {
		this.id.aD()
	}
}

function aHh() {
	var aIt, aIu, aIv, aIw, aIx, aIy, aIz, aJ0, aJ1, aJ2, aJ3, aJ4, aJ5, aJ6, aJ7, aJ8, aJ9, aJA, aJC, aJD, aJE, aJF, aJG, aJM, aJN, aJB = null,
		aJI = 0,
		aJJ = !1,
		aJK = new Float32Array(4),
		aJL = 0,
		aF4 = 400;

	function ka() {
		aJ1 = Math.floor(+ew.ex), aJ2 = Math.floor(.5 * aJ1), aJB.width = ew.ea, aJB.height = ew.b6, aJC = aJB.getContext("2d", {
			alpha: !0
		}), dW.dX.textAlign(aJC, 1), dW.dX.textBaseline(aJC, 1), aJC.imageSmoothingEnabled = !0
	}

	function aJO() {
		var u, aJU;
		for (fB.font = dW.dX.hn(1, 100 * aJ3), aJU = 80 / Math.floor(fB.measureText(dW.lQ.m3(aM.uu)).width), fB.font = dW.dX.hn(1, 100), u = aM.aV - 1; 0 <= u; u--) aJ0[u] = 100 / Math.floor(fB.measureText(aW.aX[u]).width), aIz[u] = Math.min(aJU,
			aJ0[u])
	}

	function aJV(u) {
		return !fE.fF.data[7].value || aW.dt[u] < 1e6 ? 1 : aW.dt[u] < 1e7 ? aJK[0] : aJK[Math.min(Math.floor(Math.log10(aW.dt[u])) - 6, 3)]
	}

	function aJT(kB) {
		aJA = !1, aJ9 = 1, aJ7 = aJ8 = 0, kB.clearRect(0, 0, ew.ea, ew.b6);
		for (var wZ, wa, u, aJa, fontSize, wb, eK = uh / ug, eM = ui / ug, eY = (ew.ea + uh) / ug, eZ = (ew.b6 + ui) / ug, aJb = 0 !== aW.jq[aM.gb] && cz.cY(aM.gb), aE = uq - 1; 0 <= aE; aE--) u = uo[aE], (fontSize = Math.floor(aJ6 * ug * aJV(u) *
			aIz[u] * aIx[u])) < aJ5 || aJ1 <= fontSize || aIv[u] + aIx[u] > eK && aIv[u] < eY && aIw[u] + aIy[u] > eM && aIw[u] < eZ && (wZ = Math.floor(ew.ea * (aIv[u] + aIx[u] / 2 - eK) / (eY - eK)), wa = Math.floor(ew.b6 * (aIw[u] + aIy[u] /
			2 - eM) / (eZ - eM) - .1 * fontSize), aJa = cz.bx[u], kB.font = dW.dX.hn(1 === aW.cZ[u] ? 4 : 1, fontSize), kB.fillStyle = aJc(fontSize, aJa % 2), fE.fF.data[7].value ? aJd(kB, u, fontSize, wZ, wa, aJa) : aJe(u, fontSize, wZ, wa,
			kB), aJA = !0, 0 < aJE[u] ? function(wZ, wa, fontSize, u, kB) {
			0 === aEb[u] ? nd.ne.aBT(aJD[u]) ? (function(wZ, wa, fontSize, player, nB, kB) {
				for (var tj = wa, pX = (kB.globalAlpha = aJm(fontSize), aJV(player) * (fE.fF.data[7].value ? aJL : aJ0[player])), ti = wZ - .5 * fontSize / pX - .9 * fontSize, cN = 0; cN < 2; cN++) kB.fillText(nd.ne.ny(nB), ti, tj),
					ti = wZ + .5 * fontSize / pX + .9 * fontSize;
				kB.globalAlpha = 1
			}(wZ, wa, fontSize, u, aJD[u], kB), aJg(wZ, wa, fontSize, 0, 0, kB)) : nd.ne.aBV(aJD[u]) ? (aJp(wZ, wa, fontSize, aJD[u], 0, kB), aJg(wZ, wa, fontSize, 0, 1, kB)) : (aJp(wZ, wa, fontSize, aJD[u], 1, kB), aJg(wZ, wa, fontSize,
				1, 0, kB)) : aJp(wZ, wa, fontSize, aJD[u], 0, kB)
		}(wZ, wa, fontSize, u, kB) : 0 === aEb[u] && aJg(wZ, wa, fontSize, 0, 0, kB), aJb && (0 < aJE[u + aM.aV] || 0 < aJE[u + 2 * aM.aV] || 0 < aJE[u + 3 * aM.aV] || 0 < aJE[u + 4 * aM.aV]) && function(wZ, wa, fontSize, u, kB) {
			var cJ, nq = -1;
			for (cJ = 4; 1 <= cJ; cJ--) 0 < aJE[u + cJ * aM.aV] && nq++;
			for (cJ = 1; cJ < 5; cJ++) 0 < aJE[u + cJ * aM.aV] && (! function(wZ, wa, fontSize, cJ, u, aJk, mJ, kB) {
				let ej;
				if (1 === cJ) {
					u = aJD[u + aM.aV];
					if (!nd.ne.aBU(u)) return function(wZ, wa, fontSize, nB, aJk, kB) {
						kB.globalAlpha = aJm(fontSize);
						wZ -= .534 * aJk * fontSize, aJk = wa + 1.59 * fontSize;
						kB.font = dW.dX.hn(0, .785 * fontSize), kB.fillText(nd.ne.ny(nB), wZ, aJk), kB.globalAlpha = 1
					}(wZ, wa, fontSize, u, aJk, kB);
					ej = nd.q7.nO[u - 1024 + nd.ne.nf]
				} else ej = 2 === cJ ? nt.aAP()[4].k9[+(mJ < 255)] : (3 === cJ ? nt.aAP()[5] : nt.aAP()[6]).k9[0];
				u = nd.q7.nP, mJ = .8 * fontSize / u, cJ = wZ - .5 * mJ * u - .534 * aJk * fontSize, wZ = wa + 1.4 * mJ * u;
				kB.setTransform(mJ, 0, 0, mJ, cJ, wZ), kB.globalAlpha = aJm(fontSize), kB.drawImage(ej, 0, 0), kB.globalAlpha = 1, kB.setTransform(1, 0, 0, 1, 0, 0)
			}(wZ, wa, fontSize, cJ, u, nq, aJE[u + cJ * aM.aV], kB), nq -= 2)
		}(wZ, wa, fontSize, u, kB), (wb = aJ3 * fontSize) < aJ5 || (kB.font = dW.dX.hn(1, wb), wa += Math.floor(.78 * fontSize), fE.fF.data[7].value ? aJe(u, wb, wZ, wa, kB) : aJd(kB, u, wb, wZ, wa, aJa)))
	}

	function aJe(u, fontSize, cS, cT, kB) {
		var ___id = u;
		kB.fillText(aW.aX[u], cS, cT), u < aM.aU && 2 !== aW.cZ[u] || (u = fontSize / aJ0[u], kB.fillRect(cS - .5 * u, cT + dW.dX.k6 * fontSize, u, Math.max(1, .1 * fontSize)));
		fE.fF.data[7].value && settings.showPlayerDensity && (settings.coloredDensity && (kB.fillStyle = utils.textStyleBasedOnDensity(___id)), kB.fillText(utils.getDensity(___id), cS, cT + fontSize));
	}

	function aJd(kB, u, fontSize, wZ, wa, aJa) {
		var ___id = u;
		u = dW.lQ.m3(aW.dt[u]);
		aJa >> 1 & 1 ? (kB.lineWidth = .05 * fontSize, kB.strokeStyle = aJc(fontSize, aJa % 2), kB.strokeText(u, wZ, wa)) : (1 < aJa && (kB.lineWidth = .12 * fontSize, kB.strokeStyle = aJc(fontSize, aJa), kB.strokeText(u, wZ, wa)), kB.fillText(u, wZ,
			wa));
		fE.fF.data[7].value || settings.showPlayerDensity && (settings.coloredDensity && (kB.fillStyle = utils.textStyleBasedOnDensity(___id)), kB.fillText(utils.getDensity(___id), wZ, wa + fontSize))
	}

	function aJg(wZ, wa, fontSize, aJk, aJl, kB) {
		var ym = .95 * fontSize / aJG,
			wZ = wZ - .5 * ym * aJF + .8 * aJk * fontSize,
			aJk = wa - 1.76 * ym * aJG - (.35 - dW.dX.k6 + .7) * aJl * fontSize;
		kB.setTransform(ym, 0, 0, ym, wZ, aJk), kB.globalAlpha = aJm(fontSize), kB.drawImage(er.get(4), 0, 0), kB.globalAlpha = 1, kB.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJp(wZ, wa, fontSize, nB, aJk, kB) {
		if (kB.globalAlpha = aJm(fontSize), nd.ne.aBU(nB)) {
			var nK = nd.q7.nP,
				ym = 1.1 * fontSize / nK;
			kB.setTransform(ym, 0, 0, ym, wZ - .5 * ym * nK - .8 * aJk * fontSize, wa - 1.55 * ym * nK), kB.drawImage(nd.q7.nO[nB - 1024 + nd.ne.nf], 0, 0), kB.setTransform(1, 0, 0, 1, 0, 0)
		} else {
			let ti = wZ - .8 * aJk * fontSize,
				tj = wa - (.35 - dW.dX.k6 + 1) * fontSize;
			kB.fillText(nd.ne.ny(nB), ti, tj)
		}
		kB.globalAlpha = 1
	}

	function aJc(fontSize, aJa) {
		return aJ2 <= fontSize && fontSize < aJ1 ? cK.vy[aJa] + aJm(fontSize).toFixed(3) + ")" : cK.vz[aJa]
	}

	function aJm(fontSize) {
		return aJ2 <= fontSize && fontSize < aJ1 ? 1 - (fontSize - aJ2) / (aJ1 - aJ2) : 1
	}

	function aJz(pX, ea) {
		return 1 + Math.floor(aJ4 * pX * ea)
	}

	function aJw(u) {
		for (var left = aIv[u], aE = aIv[u] - aW.eL[u] - 1; 0 <= aE; aE--)
			if (!aK1(u, --left, aIw[u], aIy[u])) {
				left++;
				break
			} var right = aIv[u];
		for (aE = aW.eP[u] - aIv[u] - aIx[u]; 0 <= aE; aE--)
			if (!aK1(u, ++right + aIx[u] - 1, aIw[u], aIy[u])) {
				right--;
				break
			} var cS = Math.floor((left + right) / 2),
			top = aIw[u];
		for (aE = aIw[u] - aW.eN[u] - 1; 0 <= aE; aE--)
			if (!aK2(u, cS, --top, aIx[u])) {
				top++;
				break
			} var bottom = aIw[u];
		for (aE = aW.eR[u] - aIw[u] - aIy[u]; 0 <= aE; aE--)
			if (!aK2(u, cS, ++bottom + aIy[u] - 1, aIx[u])) {
				bottom--;
				break
			} var cT = Math.floor((top + bottom) / 2);
		aJt(u, cS, cT, aIx[u], aIy[u]) && (aIv[u] = cS, aIw[u] = cT)
	}

	function aJt(player, cS, cT, ea, b6) {
		cH = Math.floor(.2 * ea);
		for (var cH, cJ = cS + ea - 1; cS <= cJ; cJ--)
			if (!aK1(player, cJ, cT, b6)) return;
		for (cJ = cT + b6 - 1 - (cH = (cH = Math.floor(.25 * b6)) < 1 ? 1 : cH); cT + cH <= cJ; cJ--)
			if (!aK2(player, cS, cJ, ea)) return;
		return 1
	}

	function aK1(player, cS, cT, b6) {
		return cz.cc(player, 4 * (cT * cE.cF + cS)) && cz.cc(player, 4 * ((cT + b6 - 1) * cE.cF + cS))
	}

	function aK2(player, cS, cT, ea) {
		return cz.cc(player, 4 * (cT * cE.cF + cS)) && cz.cc(player, 4 * (cT * cE.cF + cS + ea - 1))
	}
	this.aD = function() {
		if (aF4 = 0 === (aF4 = fE.fF.data[11].value) ? 280 : 1 === aF4 ? 187 : 112, aJA = !1, aJ6 = .88, aJ3 = .5, aJ4 = 1.8, aJ5 = 12 - 3 * fE.fF.data[9].value, aIu = aIt = 0, aIv = new Uint16Array(aM.aV), aIw = new Uint16Array(aM.aV), aIx =
			new Uint16Array(aM.aV), aIy = new Uint16Array(aM.aV), aIz = new Float32Array(aM.aV), aJ0 = new Float32Array(aM.aV), aJD = new Uint16Array(2 * aM.aV), aJE = new Uint8Array(5 * aM.aV), aJM = new Uint8Array(aM.aV), aJN = new Uint8Array(
				aM.aV), aJB = aJB || document.createElement("canvas"), ka(), aJ8 = aJ7 = 0, aJ9 = 1, fE.fF.data[7].value) {
			var u, aJU;
			for (aJO(), fB.font = dW.dX.hn(1, 100), aJU = 100 / Math.floor(fB.measureText("900 000").width), u = aM.aV - 1; 0 <= u; u--) aIz[u] = Math.min(aJU, 2 * aJ0[u]);
			aJL = aJU, aJK[0] = 100 / (aJU * Math.floor(fB.measureText("5 000 000").width)), aJK[1] = 100 / (aJU * Math.floor(fB.measureText("50 000 000").width)), aJK[2] = 100 / (aJU * Math.floor(fB.measureText("500 000 000").width)), aJK[3] =
				100 / (aJU * Math.floor(fB.measureText("1 000 000 000").width))
		} else aJO();
		! function() {
			var u;
			for (u = aM.aV - 1; 0 <= u; u--) aW.gC[u] < 12 ? (aIv[u] = aW.eL[u] + 1, aIw[u] = aW.eN[u] + 1, aIx[u] = 1, aIy[u] = 1) : (aIv[u] = aW.eL[u], aIw[u] = aW.eN[u] + 1, aIx[u] = 4, aIy[u] = 2);
			if (aM.lp)
				for (u = 0; u < aM.aU; u++) aIx[u] = 0;
			aJF = er.get(4).width, aJG = er.get(4).height
		}()
	}, this.y9 = function(b7, aJR) {
		aJR > 18 * aW.gC[b7] ? (aJN[b7] = 6, cz.bx[b7] = 2 + cz.bx[b7] % 2) : (aJM[b7] = 4, (cz.bx[b7] < 2 || 3 < cz.bx[b7]) && (cz.bx[b7] = 6 + cz.bx[b7] % 2))
	}, this.yA = function(b7, aJR) {
		aJR > 6 * aW.gC[b7] ? (aJN[b7] = 6, cz.bx[b7] = 4 + cz.bx[b7] % 2) : (aJM[b7] = 4, (cz.bx[b7] < 4 || 5 < cz.bx[b7]) && (cz.bx[b7] = 8 + cz.bx[b7] % 2))
	}, this.resize = function() {
		ka(), aJT(aJC)
	}, this.a2Z = function() {
		for (var u = 0; u < aM.aU; u++) aW.eP[u] - aW.eL[u] != 3 || aW.eR[u] - aW.eN[u] != 3 ? (aIv[u] = aW.eL[u] + (aW.eP[u] !== aW.eL[u] ? 1 : 0), aIw[u] = aW.eN[u], aIx[u] = 1, aIy[u] = 1) : (aIv[u] = aW.eL[u], aIw[u] = aW.eN[u] + 1, aIx[u] =
			4, aIy[u] = 2)
	}, this.nE = function(player, au, aJW) {
		! function(player, au, aJW) {
			player += au * aM.aV;
			0 === au ? aJD[player] === aJW && 0 < aJE[player] ? aJE[player] = 0 : (aJD[player] = aJW, aJE[player] = nd.ne.aBT(aJW) ? 255 : 64) : 1 === au ? (aJE[player] = 64, aJD[player] = aJW) : aJE[player] = aJW
		}(player, au, aJW), 2 === aM.gj && this.lu(!0)
	}, this.fA = function() {
		aJA && (1 !== aJ9 ? (fB.imageSmoothingEnabled = !0, fB.setTransform(aJ9, 0, 0, aJ9, 0, 0), fB.drawImage(aJB, -aJ7 / aJ9, -aJ8 / aJ9), fB.setTransform(1, 0, 0, 1, 0, 0), fB.imageSmoothingEnabled = !1) : fB.drawImage(aJB, -aJ7, -aJ8))
	}, this.vo = function(eO, eQ) {
		aJ7 += eO, aJ8 += eQ
	}, this.hv = function(eO, eQ) {
		nD.vo(eO, eQ)
	}, this.zoom = function(iQ, hr, hs) {
		aJ9 *= iQ, aJ7 = (aJ7 + hr) * iQ - hr, aJ8 = (aJ8 + hs) * iQ - hs
	}, this.lu = function(t8) {
		return !(!aJJ && !t8 && gh.ig < aJI + (1 === aJ9 && 0 === aJ7 && 0 === aJ8 && (aM.vP() || aM.lp || 2 === aM.gj) ? 1e3 : aF4) || (aJJ = !1, aJI = gh.ig, aJT(aJC), 0))
	}, this.wc = function(u) {
		return aJV(u) * aIz[u]
	}, this.aJZ = function(player) {
		return aIz[player]
	}, this.a0 = function() {
		gh.gi() % 10 == 9 && (aJJ = aM.vR() && !aM.vP()), !aM.vP() && 4 <= ++aIu && function() {
			var u, aE, cN;
			for (aIu = 0, cN = 4; 1 <= cN; cN--)
				for (aE = uq - 1; 0 <= aE; aE--) u = uo[aE] + cN * aM.aV, 0 < aJE[u] && aJE[u] < 255 && aJE[u]--;
			if (2 !== aM.gj)
				for (aE = uq - 1; 0 <= aE; aE--) u = uo[aE], 0 < aJE[u] && aJE[u] < 255 && aJE[u]--
		}();
		for (var s = Math.floor(.1 * uq), u = aIt + (s = uq < (s = s < 8 ? 8 : s) ? uq : s) - 1; aIt <= u; u--) ! function(u) {
			var pX = aJV(u) * aIz[u];
			0 < aIx[u] && aJt(u, aIv[u], aIw[u], aIx[u], aIy[u]) ? ! function(u) {
				for (var cS, cT, ea, b6, a7 = !1, cN = 0; cN < 8; cN++) {
					if (ea = aIx[u] + 2, b6 = aIy[u] + 2, ea > aW.eP[u] - aW.eL[u] + 1 || b6 > aW.eR[u] - aW.eN[u] + 1) return a7;
					if (cS = aIv[u] - 1, cT = aIw[u] - 1, !aJt(u, cS, cT, ea, b6)) return a7;
					aIv[u] = cS, aIw[u] = cT, aIx[u] = ea, aIy[u] = b6, a7 = !0
				}
				return a7
			}(u) && function(u, pX) {
				for (var cS, cT, ea, b6, a7 = !1, pS = aIx[u], ef = 1 + Math.floor(.02 * pS), cN = 1; cN < 5; cN++) {
					if ((ea = pS + cN * ef) > aW.eP[u] - aW.eL[u] + 1) return a7;
					if ((b6 = aJz(pX, ea)) > aW.eR[u] - aW.eN[u] + 1) return a7;
					cS = aW.eL[u] + Math.floor(Math.random() * (aW.eP[u] - aW.eL[u] + 2 - ea)), cT = aW.eN[u] + Math.floor(Math.random() * (aW.eR[u] - aW.eN[u] + 2 - b6)), aJt(u, cS, cT, ea, b6) && (aIv[u] = cS, aIw[u] = cT, aIx[u] = ea,
						aIy[u] = b6, a7 = !0)
				}
				return a7
			}(u, pX) && aJw(u) : ! function(u, pX) {
				var b6, cS = aIv[u] + 1,
					cT = aIw[u] + 1,
					ea = aIx[u] - 2;
				for (;;) {
					if (ea < 1) {
						aIx[u] = 0;
						break
					}
					if (b6 = aJz(pX, ea), aJt(u, cS, cT, ea, b6)) return aIv[u] = cS, aIw[u] = cT, aIx[u] = ea, aIy[u] = b6, 1;
					cS++, cT++, ea -= 2
				}
				return
			}(u, pX) ? function(u, pX) {
				var cS, cT, ea, b6, cN, ld, eV = aW.eP[u] - aW.eL[u] + 1,
					aK0 = Math.floor(.02 * eV);
				for (ld = -6 * (aK0 = aK0 < 1 ? 1 : aK0), cN = eV; ld <= cN; cN -= aK0)
					if (b6 = aJz(pX, ea = 0 < cN ? cN : 1), cS = aW.eL[u] + Math.floor(Math.random() * (aW.eP[u] - aW.eL[u] + 2 - ea)), cT = aW.eN[u] + Math.floor(Math.random() * (aW.eR[u] - aW.eN[u] + 2 - b6)), aJt(u, cS, cT, ea, b6))
						return aIv[u] = cS, aIw[u] = cT, aIx[u] = ea, aIy[u] = b6
			}(u, pX) : aJw(u)
		}(uo[u % uq]);
		aIt = (aIt + s) % uq
	}, this.rP = function() {
		var u, b7, p8, p9;
		if (gh.gi() % 4 == 1)
			for (u = uq - 1; 0 <= u; u--) b7 = uo[u], cz.bx[b7] < 2 || ((p8 = Math.max(aJM[b7] - 1, 0)) === (p9 = Math.max(aJN[b7] - 1, 0)) ? 0 === p8 && (cz.bx[b7] %= 2) : 0 === p9 && cz.bx[b7] < 6 && (cz.bx[b7] += 4), aJM[b7] = p8, aJN[b7] =
				p9)
	}, this.aAB = function(player) {
		var u = player + 2 * aM.aV,
			mJ = aJE[u];
		return 0 < mJ && (al.s7(50, player), aJE[u] = 0, 255 === mJ)
	}, this.aAj = function(player) {
		return 255 === aJE[player + 2 * aM.aV]
	}
}

function lS(aK3) {
	var dU = document.createElement("div");
	this.cO = dU, this.aK4 = aK3, this.resize = function() {
		for (var s = aK3.length, u = 1; u < s; u++) dW.dX.kC(aK3[u], 4)
	};
	var u, s = aK3.length;
	for (dU.style.width = "100%", dU.style.height = "2.7em", dU.style.marginTop = "0.6em", dU.style.border = "inherit", u = 0; u < s; u++) aK3[u].style.verticalAlign = "top", aK3[u].style.width = (100 / s).toFixed(2) + "%", aK3[u].style.height =
		"100%", aK3[u].style.fontSize = "0.75em", dU.appendChild(aK3[u])
}

function aHl() {
	this.j = new a0Q, this.wi = new zq, this.aD = function() {
		this.j.aD()
	}, this.a0 = function() {
		0 !== this.j.zr && this.j.zr--
	}
}

function a8L() {
	function aK5(a4P) {
		var aK9 = 4 + .03 * (1 + 1.5 * eu.di.ev()) * ew.ex / ug;
		return eA.aCK(a4P, cC.e8[1]) < aK9
	}
	this.sT = function(player, a4P) {
		return !!eA.a2G(a4P) && du.j.dv !== du.j.dw && du.j.dx[player] !== du.j.dy && 0 !== aW.ds[player].length && !!du.eF.eG(player, a4P) && !!aK5(a4P)
	}, this.x1 = function(player, x0, a4P) {
		return !!(eA.a2G(a4P) && this.uj(player, x0) && du.eF.a2J(a4P) && aK5(a4P))
	}, this.uj = function(player, id) {
		for (var a9j, d = player << 3, e = d + du.j.dx[player], a0s = du.j.a0s, sa = du.j.sa, u = d; u < e; u++)
			if (id === sa[a9j = a0s[u]]) return cC.e8[3] = a9j, !0;
		return !1
	}, this.wz = function(sO) {
		var sX = du.qB.sX;
		return !!this.uj(aM.gb, sX) && (jx.jy.wz(sX, sO), !0)
	}, this.aAh = function(hr, hs, aK6 = !1) {
		var u, e, a3o, a0s, a9z, oa, aK7, jl, oj, aK8, player = aM.gb,
			s = du.j.dx[player];
		if (0 === s) return !1;
		for (a0s = du.j.a0s, oa = du.j.oa, oj = du.j.oj, e = (player = player << 3) + s, a9z = .4 * dW.dX.kH(.5) * ew.ex / ug, a3o = -1, u = player; u < e; u++) aK8 = a0s[u], aK7 = 16 * (.625 + .125 * Math.sqrt(Math.sqrt(oj[aK8]))), (jl = eA.aCH(
			hr, hs, oa[aK8])) - aK7 < a9z && (a9z = jl, a3o = aK8);
		return !(a3o < 0 || (aK6 ? cC.a6R[0] = du.j.sa[a3o] : du.qB.sX = du.j.sa[a3o], 0))
	}, this.aAo = function(hr, hs) {
		var u, a3o, a9z, oa, aK7, jl, oj, s = du.j.dv;
		if (s < 1) return -1;
		for (oa = du.j.oa, oj = du.j.oj, a9z = 1e3, a3o = -1, u = 0; u < s; u++) aK7 = 16 * dW.dX.kH(.5) * (.625 + .125 * Math.sqrt(Math.sqrt(oj[u]))), (jl = eA.aCH(hr, hs, oa[u])) < a9z && jl < aK7 && (a9z = jl, a3o = u);
		return a3o
	}
}

function aHd() {
	this.dX = new k4, this.fV = new p5, this.dz = new a0Z, this.lQ = new aBW, this.kA = new aBg, this.sy = new xC, this.k9 = new zk, this.color = new aEX, this.aD = function() {
		this.dX.fK()
	}
}

function oP() {
	this.aE5 = function() {
		var s = uq,
			bJ = uo,
			xe = [];
		for (let u = 0; u < s; u++) {
			var b7 = bJ[u];
			cz.cY(b7) && xe.push(b7)
		}
		return xe
	}, this.aE6 = function() {
		var s = uq,
			bJ = uo;
		let mJ = 0;
		var gC = aW.gC;
		for (let u = 0; u < s; u++) mJ += gC[bJ[u]];
		return mJ
	}
}

function a4y() {
	let hN, aKA, aKB = !1;

	function aKD(id) {
		0 !== eu.id || fE.fF.data[140].value ? 0 === id ? b3.b4(8, 1, new iZ(16)) : b3.b4(2) : b3.j.sm(b3.f7, 0 === id ? 16 : 0)
	}
	var aKC, aGK;
	this.show = function() {
		eu.di.setState(12), hN.show(), this.resize(), this.a0()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), aKA.resize()
	}, this.a0 = function() {
		!aKB || m5.a17(aM.gb) || (b3.fH(), b3.b4(1))
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, aKC = [new hV("🔑 " + fI.dq[125], function() {
		aKD(0)
	}), new hV("⚙️ " + fI.dq[81], function() {
		aKD(1)
	}), new hV("▶️ " + fI.dq[82], function() {
		b3.b4(3, 1, "")
	}), new hV("📈 Charts", function() {
		b3.j.lK()
	}), new hV("🔗 " + fI.dq[83], function() {
		b3.b4(4, 1, new b5("🔗 " + fI.dq[83], dW.dX.kK(["Android App", "iOS App", "Discord", "Changelog", "Clans", "Clan Results", "Players", "Tutorial", "Terms", "Privacy"], [el.em, el.en, el.ep, el.aDk, el.aDq, el.aDr, el.aDp, el.aDo,
			el.aDl, el.aDn
		]), !1, [new hV("❌ " + fI.dq[92], function() {
			b3.b4(1)
		}, hk.i9)]))
	}), new hV("ℹ️ " + fI.dq[84], function() {
		b3.b4(4, 1, new b5("ℹ️ " + fI.dq[84], mM + "<br><a href='" + el.aDk + "' target='_blank'>" + el.aDk + "</a>" +
			"<br><br><b>" + "FX Client v" + fx_version + " " + fx_update + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new hV("❌ " + fI.dq[92], function() {
				b3.b4(1)
			}, hk.i9)]))
	}), new hV("🗑️ " + fI.dq[85], function() {
		b3.b4(4, 1, new b5("🗑️ " + fI.dq[85],
			"Do you want to delete all locally stored data, like usernames, account data and setting data? Your account will be deleted automatically after 3 months of inactivity. To prevent the storage of new data, it is recommended to close the game after deletion.",
			!1, [new hV("❌ " + fI.dq[92], function() {
				b3.b4(1)
			}), new hV("🗑️ Delete", function() {
				eu.di.aCM(), b3.b4(1)
			})]))
	}), new hV(fI.dq[86], function() {
		eu.di.aCN(), b3.b4(4, 1, new b5("User Privacy", "If the privacy window doesn't open, please deactivate all your adblockers.<br>Additionally, check out our Privacy Policy: <a href='" + el.aDn + "' target='_blank'>" + el.aDn +
			"</a>", !1, [new hV("❌ " + fI.dq[92], function() {
				b3.b4(1)
			}, hk.i9)]))
	})], aGK = [new hV("❌ " + fI.dq[87], function() {
		b3.j.hW()
	})], 8 === f1.f2() && aKC.unshift(new hV("📈 " + fI.dq[88], function() {
		b3.fH(), 2 <= l2.a7M && (tJ.a5w(), gh.hu = !0)
	})), 8 === f1.f2() && !aM.ga && m5.a17(aM.gb) && (aKB = !0, aKC.unshift(new hV("🏳️ " + fI.dq[89], function() {
		jx.jy.xA(), b3.fH(), m5.m6 && m5.a5w()
	}))), 1 === eu.id && 5 <= eu.dd && aKC.push(new hV(fI.dq[90], function() {
		eu.di.aCO()
	})), hN = new hU("📙 " + fI.dq[91], aGK), aKA = new aKH(aKC, hN.l9)
}

function aKH(a9Y, dS) {
	var dU, u;
	for (this.resize = function() {
			for (var u = 0; u < a9Y.length; u++) dW.dX.kC(a9Y[u].button);
			dU.style.gap = dU.style.padding = dW.dX.dY(dZ.da)
		}, (dU = document.createElement("div")).style.display = "grid", dU.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", dU.style.overflowY = "auto", dU.style.gridAutoRows = "5.3em", dU.style.maxHeight = "100%", u = 0; u < a9Y
		.length; u++) a9Y[u].button.style.fontSize = "1.2em", dU.appendChild(a9Y[u].button);
	dS.appendChild(dU)
}

function zD() {
	this.dp = [], this.dq = ["Zaakceptuj", "Usunąłeś {0}.", "Zostałeś usunięty przez {0}.", "Gratulacje! Wygrałeś grę.", "{0} wygrał grę.", "{0} złamał pakt o nieagresji.", "{0} atakuje Cię!", "Wybierz swoją pozycję startową!", "Poddałeś się!",
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

function a4z() {
	let hN, l7, kV;
	this.show = function() {
		hN.show(), this.resize()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), l7.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU("⚙️ " + fI.dq[81], [new hV("💾 " + fI.dq[97], function() {
		b3.b4(1)
	}, hk.iB), new hV("🔄 " + fI.dq[98], function() {
		b3.fH(), fE.hZ.fL(), b3.b4(2)
	})]);
	{
		let lF;
		kV = [], (lF = new lG).lH(fI.dq[99]), lF.lI(fI.dq[100]), kV.push(lF), (lF = new lG).lH(fE.fF.data[0].title), lF.lZ(new la(fE.fF.data[0])), kV.push(lF), (lF = new lG).lH(fE.fF.data[10].title), lF.lZ(new la(fE.fF.data[10])), kV.push(lF), (lF =
				new lG).lH(fE.fF.data[1].title), lF.lZ(new la(fE.fF.data[1])), kV.push(lF), (lF = new lG).lH(fE.fF.data[9].title), lF.lZ(new la(fE.fF.data[9])), kV.push(lF), (lF = new lG).lH(fE.fF.data[11].title), lF.lZ(new la(fE.fF.data[11])), kV
			.push(lF), (lF = new lG).lH(fE.fF.data[2].title), lF.lN(new lb(fE.fF.data[2])), kV.push(lF), (lF = new lG).lH(fE.fF.data[7].title), lF.lN(new lb(fE.fF.data[7])), kV.push(lF), (lF = new lG).lH(fE.fF.data[8].title), lF.lN(new lb(fE.fF.data[
				8])), kV.push(lF), (lF = new lG).lH(fE.fF.data[5].title), lF.lN(new lM(fE.fF.data[5])), kV.push(lF)
	}
	l7 = new kU(hN.l9, kV)
}

function r8() {
	var aKI, aKJ, aKK, oC, aKL, au = 0,
		ig = gh.ig;

	function aKO() {
		! function() {
			if (!aM.lp) return;
			if (aM.aP) return;
			return aKL % 7 != 0 ? aKL++ : oC === aM.v3 ? (aKR(), rE.aBM(oC), aM.v2.a0()) : (aKR(), aKL++, oC++, nD.a2Z(), nD.lu(!0)), 1
		}() && (aKR(), rG())
	}

	function aKP() {
		au = 0, (aM.lp ? (gh.hu = rE.aBM(oC - (aKL % 7 == 0 ? 0 : 1) + aKL % 7 / 7) || gh.hu, rc) : m5.m6 || !ra.vQ ? rc : (gh.hu = !0, rb))()
	}

	function aKR() {
		var u, s, aKS = aw.ax.bY,
			kS = aw.ax.bZ,
			kT = aw.ax.ba,
			eg = aw.ax.bb,
			aKT = aw.ax.bc,
			aKU = aw.ax.bd;
		if (aKI >= aKU.length) al.iF("Replay file smaller than expected."), ro.oJ.rt(-1);
		else if (aKU = aKU[aKI], aKT[aKI]) {
			for (s = aKJ + aKU, u = aKJ; u < s; u++) jx.n9.aCv(aKS[u], kS[u], kT[u], eg[u]);
			aKJ += aKU, aKI++
		} else ++aKK >= aKU && (aKI++, aKK = 0)
	}
	this.rC = 0, this.aD = function() {
		aKL = oC = aKK = aKJ = aKI = 0
	}, this.a0 = function() {
		var aA4;
		ew.a0(), ra.a5q() < 1.7 ? 0 === au ? gh.ig >= ig && (aA4 = gh.r3 / ra.a5q(), ig += aA4 * Math.floor(1 + (gh.ig - ig) / aA4), 2 === aM.gj || m5.m6 || !ra.vQ ? rD() : (aKO(), cx.yZ()), au++) : aKP() : function() {
			var aA4;
			if (gh.ig >= ig)
				if (2 === aM.gj || m5.m6 || !ra.vQ) rD(), ig = gh.ig;
				else {
					for (aA4 = gh.r3 / ra.a5q(), 16 < (gh.ig - ig) / aA4 && (ig = gh.ig - 16 * aA4); gh.ig >= ig && 2 !== aM.gj;) ig += aA4, aKO();
					cx.yZ()
				} aKP()
		}(), rW(), gh.hu && (gh.hu = !1, wh())
	}, this.s9 = function() {
		aKI !== aw.ax.bd.length && aKI + 1 !== aw.ax.bd.length && al.iF("Replay file larger than expected.")
	}
}

function aHi() {
	this.ne = new aBR, this.q7 = new nJ
}

function aHq() {
	this.hh = 0, this.gap = 0, this.kD = 0, this.da = 0, this.aD = function() {
		this.resize()
	}, this.resize = function() {
		this.hh = .0022 * dW.dX.kH(.5) * ew.ex, this.kD = this.hh / ew.hb, this.gap = Math.max(Math.floor((eu.di.ev() ? .0114 : .01296) * ew.ex), 2), this.da = this.gap / ew.hb
	}
}

function aHe() {
	var qO, b6, qw, aKV, aKW, aKX, aKY, aKZ, aKa;

	function cQ() {
		return ly.m7(al.a6v()) ? rT.f0 ? ly.cT - ly.b6 - 2 * qw : ly.cT - qw : ra.m7(al.a6w()) ? rT.f0 ? ra.cQ() - ly.b6 - 2 * qw : ra.cQ() - qw : rT.f0 ? ew.b6 - ly.b6 - (ls.lt() + 1) * qw : ew.b6 - ls.lt() * dZ.gap
	}

	function aKf(mJ, af, id, b7, aKh, aKi, za, aKj, aKk) {
		var u, kA, ej, lY, cB, aKo = void 0 !== aKk,
			ea = Math.floor(iU.measureText(af, al.iT) + 1.5 * aKV + (aKo ? b6 : 1.5 * aKV));
		if (gh.hu = !0, ea + qw > ew.ea && !aKo && 50 !== id && 20 < af.length) aKf(mJ, (cB = dW.lQ.aBd(af))[0], id, b7, aKh, aKi, za, aKj, aKk), aKf(mJ, cB[1], id, b7, aKh, aKi, za, aKj, aKk);
		else if (cB = ea + (50 === id ? aKW : 0), (ej = document.createElement("canvas")).width = ea, ej.height = b6, (kA = ej.getContext("2d", {
				alpha: !0
			})).font = al.iT, dW.dX.textBaseline(kA, 1), dW.dX.textAlign(kA, 0), kA.clearRect(0, 0, ea, b6), kA.fillStyle = aKi, kA.fillRect(0, 0, ea, b6), kA.fillStyle = aKh, kA.fillText(af, Math.floor(1.5 * aKV), Math.floor(b6 / 2)), aKo && (kA
				.imageSmoothingEnabled = !0, nd.q7.nx(aKk, kA, ea - b6, 0, b6)), 0 === (lY = {
				ig: mJ,
				af: af,
				id: id,
				player: b7,
				k9: ej,
				aKh: aKh,
				aKi: aKi,
				ea: ea,
				aKm: cB,
				za: za,
				aKj: aKj,
				aKk: aKk
			}).ig || 0 < qO.length && 0 < qO[0].ig) qO.unshift(lY);
		else {
			for (u = 1; u < qO.length; u++)
				if (0 < qO[u].ig) return void qO.splice(u, 0, lY);
			qO.push(lY)
		}
	}

	function aKg(aS, gn, cN) {
		return "rgb(" + aS + "," + gn + "," + cN + ")"
	}

	function aKp(id, nq) {
		for (var s = qO.length, u = 0; u < s; u++) qO[u].id === id && nq-- <= 0 && (qO.splice(u, 1), u--, s--)
	}

	function aKq(id, player) {
		for (var qr = !1, u = qO.length - 1; 0 <= u; u--) qO[u].id !== id || player !== aM.aV && qO[u].player !== player || (qO.splice(u, 1), qr = !0);
		return qr
	}

	function aKy(af) {
		aKf(340, af, 6, 0, aKg(215, 245, 255), hk.nv, -1, !1)
	}
	this.am = "", this.aD = function() {
		var self;
		aKZ = 0, aKY = eu.di.ev() ? 7 : 12, aKX = {
			bJ: [0, 0, 0],
			aKb: [0, 0, 0],
			aFl: [220, 180, 180],
			hc: [0, 0, 0],
			cJ: [0, 0, 0]
		}, qO = [], this.resize(), aM.lp && this.rq(0, 18), aKy(fI.i4(37, [cE.aJ.iu[cE.gc].name])), aKy(fI.i4(38, [cE.cF - 2, cE.ed - 2])), aKy(fI.i4(39, [v9.a6k], {
			xY: [0]
		})), v9.a6k !== v9.aKz && aKy(fI.i4(40, [v9.aKz, v9.aKz / v9.a6k], {
			xY: [0],
			zG: [1]
		})), 0 < v9.aL0 && aKy(fI.i4(41, [v9.aL0, v9.aL0 / v9.a6k], {
			xY: [0],
			zG: [1]
		})), 0 < v9.aL1 && aKy(fI.i4(42, [v9.aL1, v9.aL1 / v9.a6k], {
			xY: [0],
			zG: [1]
		})), 10 === aM.aN && aKf(120, fI.i4(43), 6, 0, aKg(235, 255, 120), hk.nv, -1, !1), 0 !== (self = this).am.length && (aKf(200, self.am, 0, 0, hk.hl, hk.nv, -1, !1), self.am = ""), this.aKe()
	}, this.aKe = function() {
		var u, s;
		if (aH.aI)
			for (s = aH.aJ.aCj.length, u = 0; u < s; u++) aKf(400, aH.aJ.aCj[u], 6, 0, aKg(255, 255, 255), hk.nv, -1, !1)
	}, this.resize = function() {
		var a3M, u;
		if (b6 = (b6 = Math.floor((eu.di.ev() ? .031 : .0249) * ew.ex)) < 10 ? 10 : b6, this.fontSize = Math.floor(2 * b6 / 3), this.iT = dW.dX.hn(1, this.fontSize), qw = dZ.gap, aKV = Math.floor(b6 / 5), 0 < qO.length)
			for (a3M = qO, qO = [], u = a3M.length - 1; 0 <= u; u--) aKf(a3M[u].ig, a3M[u].af, a3M[u].id, a3M[u].player, a3M[u].aKh, a3M[u].aKi, a3M[u].za, a3M[u].aKj, a3M[u].aKk);
		this.aKl()
	}, this.aKl = function() {
		aKa = document.createElement("canvas");
		var af = fI.i4(0),
			kA = (aKW = iU.measureText(af, this.iT) + 5 * aKV, aKa.height = b6, aKa.width = aKW, aKa.getContext("2d", {
				alpha: !0
			}));
		kA.font = this.iT, dW.dX.textBaseline(kA, 1), dW.dX.textAlign(kA, 1), kA.clearRect(0, 0, aKW, b6), kA.fillStyle = hk.iB, kA.fillRect(0, 0, aKW, b6), kA.fillStyle = hk.hl, kA.fillText(af, Math.floor(aKW / 2), Math.floor(b6 / 2))
	}, this.a6v = function() {
		var s;
		return rT.f0 ? rT.ea : 0 === (s = qO.length) ? 0 : 1 === s ? qO[0].aKm : r1(qO[0].aKm, qO[1].aKm)
	}, this.a6w = function() {
		var s = qO.length;
		return rT.f0 ? s ? r1(rT.ea, qO[0].aKm) : rT.ea : 0 === s ? 0 : 1 === s ? qO[0].aKm : 2 === s ? r1(qO[0].aKm, qO[1].aKm) : r1(r1(qO[0].aKm, qO[1].aKm), qO[2].aKm)
	}, this.f3 = function(cS, cT) {
		for (var va, aKn = cQ(), u = qO.length - 1; 0 <= u; u--)
			if ((va = aKn - (u + 1) * b6) <= cT && cT < va + b6) return 50 === qO[u].id ? cS >= ew.ea - aKW - qw - qO[u].ea && (cS >= ew.ea - aKW - qw ? jx.dz.aAc(qO[u].player) : rX.aFL(qO[u].player, 800, !1, 0), !0) : cS >= ew.ea - qO[u].ea -
				qw && (736 === qO[u].id ? window.open("https://" + qO[u].af, "_blank") : qO[u].aKj && (rX.aFL(qO[u].player, 800, !1, 0), 0 <= qO[u].za) && (va = qO[u].za, qO[u].za = qO[u].player, qO[u].player = va), !0);
		return !1
	}, this.a6t = function(mJ, af, id, b7, aKh, aKi, za, aKj, aKk) {
		aKf(mJ, af, id, b7, aKh, aKi, za, aKj, aKk)
	}, this.a2h = function(iI) {
		aKf(300, iI, 252, 0, hk.hl, hk.nv, -1, !1)
	}, this.a2Y = function(id) {
		for (var u = qO.length - 1; 0 <= u; u--) qO[u].id === id && (qO[u].ig = 1)
	}, this.rq = function(player, id) {
		0 === id ? (l2.l3[player < aM.aU ? 4 : 3]++, iU.jI(player, 0), aKp(423, 0), aKf(160, fI.i4(1, [aW.aX[player]]), 423, player, "rgb(10,220,10)", hk.nv, -1, !1)) : 1 === id ? (aKq(50, aM.aV), iU.jI(player, 1), aKf(360, fI.i4(2, [aW.aX[
			player]]), 0, player, hk.a86, hk.nv, -1, !0), rX.aFL(player, 2700, !1, 0)) : 2 === id ? (iU.jI(player, 2), aKf(0, fI.i4(3), 0, player, "rgb(10,255,255)", hk.nv, -1, !0), rX.aFL(player, 2700, !1, 0)) : 3 === id ? (iU.jI(player, 2),
			aKf(0, fI.i4(4, [aW.aX[player]]), 0, player, hk.hl, hk.nv, -1, !0), rX.aFL(player, 2700, !1, 0)) : 4 === id ? this.yX(1, player, player) : 5 === id ? 2 !== aW.cZ[player] && cz.cY(aM.gb) && (function(id, l1) {
			var u, aKu = 0,
				s = qO.length;
			for (u = 0; u < s; u++)
				if (qO[u].id === id && l1 <= ++aKu) return qO.splice(u, 1)
		}(1, 5), nD.aAB(player) ? aKf(180, fI.i4(5, [aW.aX[player]]), 1, player, aKg(255, 200, 180), hk.nv, -1, !0) : (aKp(573, 0), aKf(180, fI.i4(6, [aW.aX[player]]), 573, player, hk.a86, hk.nv, -1, !0))) : 18 === id ? aKf(255, fI.i4(7), 18,
			0, hk.hl, hk.nv, -1, !1) : 21 === id ? aKf(220, fI.i4(8), id, 0, hk.hl, hk.nv, -1, !1) : 22 === id ? this.yX(2, player, player) : 59 === id && aKf(0, fI.i4(9), id, 0, hk.a8F, hk.nv, 0, !1)
	}, this.iF = function(iI) {
		aKf(200, fI.i4(10, [iI]), 94, 0, hk.hl, hk.a84, -1, !1)
	}, this.s1 = function(ru) {
		if (aM.gb === ru && !aM.aP)
			wins_counter++, window.localStorage.setItem("fx_winCount", wins_counter),
			aKf(0, "Your Win Count is now " + wins_counter, 3, ru, hk.hl, hk.nv, -1, !0);
		iU.jI(ru, 2), aM.aU < 100 ? aKf(0, fI.i4(4, [aW.aX[ru]]), 3, ru, hk.hl, hk.nv, -1, !0) : aKf(0, fI.i4(12, [aW.aX[ru]]), 3, ru, hk.hl, hk.nv, -1, !0), rX.aFL(ru, 2700, !1, 0)
	}, this.aAn = function(a7) {
		var a7Z = "(" + eA.a2U(a7 >> 2) + ", " + eA.a2V(a7 >> 2) + ")",
			aKj = !1,
			player = 0;
		cz.cl(a7) ? cz.cm(a7) ? a7Z = fI.i4(13, [a7Z]) : (player = cz.ce(a7), a7Z = fI.i4(14, [dW.kA.a9M(aW.aY[player], dW.dX.hn(0, 10), 150), dW.lQ.m3(aW.dt[player]), dW.lQ.m3(aW.gC[player]), a7Z]), aKj = !0) : a7Z = cz.cn(a7) ? fI.i4(15, [
			a7Z]) : fI.i4(16, [a7Z]), gh.hu = !0, aKp(55, 0), aKf(220, a7Z, 55, player, hk.hl, hk.nv, -1, aKj)
	}, this.aAp = function(aKs) {
		var aZ = du.j,
			player = aZ.oi[aKs] >> 3;
		gh.hu = !0, aKp(55, 0), aKf(220, fI.i4(17, [aW.aX[player], aZ.oj[aKs]], {
			xY: [1]
		}), 55, player, hk.hl, hk.nv, -1, !0)
	}, this.nC = function(d6, dH, nB) {
		d6 === aM.gb ? aKf(175, fI.i4(18, [aW.aX[dH]]), 1001, dH, aKg(200, 255, 210), hk.nv, -1, !0, nB) : this.aKt(d6, nB)
	}, this.aKt = function(d6, nB) {
		aKp(1e3, 0), aKf(175, fI.i4(19, [aW.aX[d6]]), 1e3, d6, hk.hl, "rgba(5,60,25,0.9)", -1, !0, nB)
	}, this.s0 = function() {
		var iI;
		aM.rw ? (iI = fI.i4(20), iU.aGV(fI.i4(21), 2, 1, 12), aKf(0, iI, 40, 0, "rgb(10,220,10)", hk.nv, -1, !1)) : (iI = fI.i4(22), iU.aGV(fI.i4(23), 2, 0, 16), aKf(0, iI, 41, 0, hk.hl, hk.nv, -1, !1)), rX.rr(2700)
	}, this.aIm = function(bJ) {
		aKf(300, bJ[0].name + " [" + aM.rx.aIp(bJ[0].bL) + "] vs " + bJ[1].name + " [" + aM.rx.aIp(bJ[1].bL) + "]", 65, 0, hk.hm, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aG3 = function(iI) {
		aKf(200, iI, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6o = function(a6g) {
		aKf(0, fI.i4(a6g ? 24 : 129), 247, 0, hk.a8E, hk.nv, -1, !1)
	}, this.aIr = function(bJ, aIo, aIq, aKv) {
		aKf(0, bJ[0].name + ": " + aM.rx.aIp(bJ[0].bL) + " -> " + aIo, 66, 0, hk.hl, aKv[0], -1, !1), aKf(0, bJ[1].name + ": " + aM.rx.aIp(bJ[1].bL) + " -> " + aIq, 66, 1, hk.hl, aKv[1], -1, !1)
	}, this.nH = function(player, id) {
		0 === id ? aKq(50, player) ? (aKf(128, fI.i4(25, [aW.aX[player]]), 52, player, aKg(180, 255, 180), hk.nv, -1, !0), nD.nE(player, 2, 255)) : aKf(384, fI.i4(26, [aW.aX[player]]), 51, player, aKg(210, 210, 255), hk.nv, -1, !0) : aKq(51,
			player) ? (aKf(128, fI.i4(27, [aW.aX[player]]), 52, player, hk.hl, "rgba(60,120,10,0.9)", -1, !0), nD.nE(player, 2, 255)) : (aKf(384, fI.i4(28, [aW.aX[player]]), 50, player, hk.hl, "rgba(90,90,90,0.9)", -1, !0), nD.nE(player, 2,
			96))
	}, this.aEZ = function(bJ, target) {
		var color = aKg(210, 255, 210);
		1 < bJ.length ? aKf(230, fI.i4(29, [bJ.length, aW.aX[target]]), 66, target, color, hk.nv, -1, !0) : aKf(230, fI.i4(30, [aW.aX[bJ[0]], aW.aX[target]]), 66, bJ[0], color, hk.nv, target, !0)
	}, this.nI = function(player, target) {
		aKf(230, fI.i4(31, [aW.aX[player], aW.aX[target]]), 66, player, hk.hl, "rgba(75,65,5,0.9)", target, !0)
	}, this.s7 = function(id, player) {
		aKq(id, player)
	}, this.ws = function() {
		var au;
		100 <= aW.dt[aM.gb] || (-1 === (au = function(id) {
			for (var u = qO.length - 1; 0 <= u; u--)
				if (qO[u].id === id) return u;
			return -1
		}(143)) ? aKf(80, fI.i4(32), 143, 0, hk.hl, hk.nv, -1, !1) : qO[au].ig = 80)
	}, this.y8 = function(aJR, aKx, player) {
		2 !== aW.cZ[aM.gb] && (aKf(200, fI.i4(33, [aJR, aW.aX[player]], {
			xY: [0]
		}), 30, player, "rgb(190,255,190)", hk.nv, -1, !0), aKx) && aKf(30, fI.i4(34, [aKx], {
			xY: [0]
		}), 30, 0, hk.hl, hk.nv, -1, !1)
	}, this.a5g = function(aJR, player) {
		2 !== aW.cZ[aM.gb] && (aKp(31, 0), 2 === aW.cZ[player] || player >= aM.aU ? aKf(150, fI.i4(36, [aW.aX[player], aJR], {
			xY: [1]
		}), 31, player, hk.hm, "rgba(205,205,205,0.9)", -1, !0) : aKf(150, fI.i4(35, [aW.aX[player], aJR], {
			xY: [1]
		}), 31, player, hk.hm, "rgba(205,255,205,0.9)", -1, !0))
	}, this.s6 = function(t8) {
		for (var cJ = gh.gi(), u = 2; 0 <= u; u--) 0 < aKX.hc[u] && (t8 || aKX.cJ[u] < cJ - 220) && this.aL2(u)
	}, this.aL2 = function(id) {
		var af, s = aKX.hc[id],
			player = aKX.bJ[id];
		aKX.hc[id] = 0, 1 === s ? (af = 0 === id ? fI.i4(47, [aW.aX[player], aW.aX[aKX.aKb[0]]]) : fI.i4(47 + id, [aW.aX[player]]), aKp(7, 0), aKf(aKX.aFl[id], af, 7, aKX.aKb[id], hk.hl, hk.nv, -1, !0)) : 2 <= s && (af = fI.i4(44 + id, [aW.aX[
			player], s - 1]), aKp(7, 0), aKf(aKX.aFl[id], af, 7, player, hk.hl, hk.nv, -1, !1))
	}, this.yX = function(id, zZ, za) {
		var cJ = gh.gi(),
			s = aKX.hc[id] + 1;
		aKX.hc[id]++, aKX.bJ[id] = zZ, aKX.aKb[id] = za, 1 === s && (aKX.cJ[id] = cJ), (1 === s && (aM.s4 < 32 || 2 === aM.gj) || 1 < s && (aKX.cJ[id] < cJ - 140 || 2 === aM.gj)) && this.aL2(id)
	}, this.a0 = function() {
		for (var jU = (jU = qO.length - aKY) <= 1 ? 1 : jU * jU, u = qO.length - 1; 0 <= u; u--) 0 < qO[u].ig && (qO[u].ig -= jU, qO[u].ig <= 0) && (gh.hu = !0, qO.splice(u, 1));
		! function() {
			var nq, u;
			if (128 !== aKZ && !(++aKZ < 128))
				for (nq = 5, u = uq - 1; 0 <= u; u--) 1 === aW.cZ[uo[u]] && 0 < nq-- && aKf(240, fI.i4(50, [aW.aX[uo[u]]]), 1, uo[u], hk.hm, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.s6(!1)
	}, this.fA = function() {
		for (var tj, cT = cQ(), u = qO.length - 1; 0 <= u; u--) tj = cT - (u + 1) * b6, 50 === qO[u].id ? (fB.drawImage(qO[u].k9, ew.ea - qO[u].ea - aKW - qw, tj), fB.drawImage(aKa, ew.ea - aKW - qw, tj)) : fB.drawImage(qO[u].k9, ew.ea - qO[u]
			.ea - qw, tj)
	}
}

function aHo() {
	this.size = 501, this.a7P = new Uint32Array(this.size), this.up = new Uint32Array(this.size), this.un = new Uint16Array(this.size), this.a7M = 0, this.aL4 = 1, this.cJ = 0, this.max = [0, 0, 0], this.l3 = 0, this.a7W = ["Avg. Attack Strength",
		"Number Attacks", "Ships sent", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income", "Commanding Costs",
		"Attack Losses", "Defense Losses", "Shipping Losses", "Transmitted Support", "Overall Expenses"
	], this.aD = function() {
		this.a7M = 0, this.aL4 = 1, this.cJ = 0, this.aL5(), this.aL6()
	}, this.a2I = function(player, ju) {
		player === aM.gb && (this.l3[0] += ju, this.l3[1]++, this.l3[12] += cC.jJ[1], this.l3[13] += cC.jJ[0])
	}, this.y8 = function(player, wv) {
		donationsTracker.logDonation(player, wv, cC.jJ[0]);
		player === aM.gb && (al.y8(cC.jJ[0], cC.jJ[1], wv), this.l3[12] += cC.jJ[1], this.l3[16] += cC.jJ[0]), wv === aM.gb && (al.a5g(cC.jJ[0], player), this.l3[10] += cC.jJ[0])
	}, this.a0 = function() {
		0 < this.cJ-- || this.aL7()
	}, this.aL7 = function() {
		0 !== aW.jq[aM.gb] && (this.a7P[this.a7M] = aW.gC[aM.gb], this.up[this.a7M] = aW.dt[aM.gb], this.un[this.a7M] = rJ.ur(aM.gb), this.aL8(this.a7M), this.a7M++, this.a7M === this.size && this.aL9(), this.cJ = this.aL4 - 1, tJ.iS())
	}, this.aL9 = function() {
		this.aL5(), this.aL8(0), this.a7M = 1 + cG(this.size, 2);
		for (var u = 1; u < this.a7M; u++) this.a7P[u] = this.a7P[2 * u], this.up[u] = this.up[2 * u], this.un[u] = this.un[2 * u], this.aL8(u);
		this.aL4 *= 2
	}, this.aL5 = function() {
		this.max[0] = this.max[1] = this.max[2] = 0
	}, this.aL6 = function() {
		this.l3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	}, this.aL8 = function(u) {
		this.max[0] = this.a7P[u] > this.max[0] ? this.a7P[u] : this.max[0], this.max[1] = this.up[u] > this.max[1] ? this.up[u] : this.max[1], this.max[2] = this.un[u] > this.max[2] ? this.un[u] : this.max[2]
	}
}

function f8(title, dT, oS = [new hV("❌ " + fI.dq[92], function() {
	b3.i8()
}, hk.i9)]) {
	let hN, xo;
	this.show = function() {
		hN.show(), this.resize()
	}, this.hY = function() {
		hN.hY()
	}, this.resize = function() {
		hN.resize(), xo.resize()
	}, this.hy = function(cJ) {
		2 === cJ && hN.hz[0].i0()
	}, hN = new hU(title, oS), xo = new dR(hN.l9, dT), dW.dX.textAlign(hN.l9.style, 1)
}

function aHm() {
	function aLB(u) {
		return void 0 !== cE.aJ.iu[u].p1
	}

	function aLA(u) {
		return 1 !== u && !aLB(u) && u !== cE.iv()
	}
	this.ow = 21, this.cF = 0, this.ed = 0, this.j1 = null, this.j2 = null, this.zP = null, this.j3 = null, this.gc = 0, this.gd = 0, this.zQ = !1, this.zR = new aEC, this.aJ = new on, this.aD = function() {
		this.aJ.aD()
	}, this.g = function(map, bF) {
		((map %= this.ow) !== this.gc || aLA(this.gc) && bF !== this.gd) && (this.zQ = !1, this.zR.a9B(), aT.pg(map), this.gc = map, this.gd = bF, aLA(map) && (cE.aJ.iu[map].a9 = bF), aLB(this.gc) ? a0q() : (map = cE.aJ.iu[this.gc], this.cF = map
			.ea, this.ed = map.b6, aT.pg(map.a9), aEL.g([this.cF, this.ed, map.ox, map.oy]), aH5(), v9.aLC(), aEL.aEM()))
	}, this.aLD = function(u) {
		return 3 === u || 7 === u || 9 === u || u === this.iv()
	}, this.qA = function(u) {
		return 2 === u || 7 === u || 9 === u
	}, this.aLE = function(u) {
		return 1 === u
	}, this.iv = function() {
		return this.ow
	}
}

function aHp() {
	this.lt = function() {
		return 2 === eu.id ? 4 : eu.di.ev() ? 2 : 1
	}
}

function aHk() {
	var a8, ea, b6, max, aLF, oy, aLH, aLI, aLJ, aLK, aLL, aLM, aLN, aLO, aLG = 1e4;

	function aLV(aLU, ox, s) {
		var u;
		for (aLH[0] = aLU, u = 1; u < s; u++) aLH[u] = aLH[u - 1] + ox, ox = aLH[u] >= aLG ? (aLH[u] = aLG - 1, -ox) : aLH[u] < 0 ? (aLH[u] = 0, -ox) : (ox += 16384 <= aT.random() ? oy : -oy) < -aLF ? -aLF : aLF < ox ? aLF : ox
	}

	function aLX(cS, cT, aLY, s) {
		(aLY ? function(cS, cT, s) {
			var u;
			for (u = 0; u < s; u++) a8[cT * ea + cS + u] = aLH[u]
		} : function(cS, cT, s) {
			var u;
			for (u = 0; u < s; u++) a8[cT * ea + cS + u * ea] = aLH[u]
		})(cS, cT, s)
	}

	function aLb(value, s) {
		var u, aK0, a7, jU = value - aLH[s - 1];
		if (0 != jU) {
			for (aK0 = 1 + cG(Math.abs(jU), s - 1), aK0 = jU < 0 ? -aK0 : aK0, aLH[s - 1] = value, a7 = (a7 = s - 1 - cG(Math.abs(jU), Math.abs(aK0))) < 1 ? 1 : s - 2 < a7 ? s - 2 : a7, u = s - 2; a7 <= u; u--) aLH[u] += jU - (s - 1 - u) * aK0;
			(jU < 0 ? function(s) {
				var u;
				for (u = s - 2; 1 <= u; u--) aLH[u] < 0 && (aLH[u] = -aLH[u] - 1)
			} : function(s) {
				var u;
				for (u = s - 2; 1 <= u; u--) aLH[u] >= aLG && (aLH[u] = 2 * aLG - aLH[u] - 1)
			})(s)
		}
	}

	function aLe(aLf, aLg, s) {
		for (var u = 0; u < s; u++) aLf[u] = aLg[u]
	}

	function aLh(cB) {
		for (var u = 0; u < cB.length - 1; u++) cB[u] = cB[u + 1] - cB[u];
		cB[cB.length - 1] = cB[cB.length - 3]
	}

	function aLi(k0, gap, jP) {
		aLI.push(k0), aLJ.push(gap), aLK.push(jP)
	}
	this.g = function(xE) {
		! function(xE) {
			var u;
			for (ea = xE[0], b6 = xE[1], aLF = xE[2], oy = xE[3], a8 = new Int16Array(ea * b6), max = b6 < ea ? ea : b6, aLH = new Int16Array(max), aLI = [], aLJ = [], aLK = [], aLL = new Array(ea), aLM = new Array(b6), u = ea - 1; 0 <= u; u--)
				aLL[u] = !1;
			for (u = b6 - 1; 0 <= u; u--) aLM[u] = !1;
			aLN = new Int16Array(ea), aLO = new Int16Array(b6)
		}(xE),
		function(s) {
			var aLU = aT.random() % aLG,
				ox = aT.random() % (2 * aLF + 1) - aLF;
			aLV(aLU, ox, s)
		}(max), aLe(aLO, aLH, b6), aLX(0, 0, !0, ea);
		var cS, cT, xE = a8[0],
			s = max,
			ox = aT.random() % (2 * aLF + 1) - aLF;
		for (aLV(xE, ox, s), aLe(aLN, aLH, ea), aLX(0, 0, !1, b6), aLh(aLN), aLh(aLO), aLV(a8[ea - 1], aLN[ea - 1], b6), aLX(ea - 1, 0, !1, b6), aLV(a8[ea * (b6 - 1)], aLO[b6 - 1], ea), aLb(a8[ea * b6 - 1], ea), aLX(0, b6 - 1, !0, ea), aLL[ea -
				1] = aLL[0] = !0, aLM[b6 - 1] = aLM[0] = !0, aLi(0, ea, !0), aLi(0, b6, !1), ! function() {
				var lX, k0;
				for (;;) {
					if (lX = function() {
							var u, lX = aLI.length - 1;
							for (u = lX - 1; 0 <= u; u--) aLJ[u] > aLJ[lX] && (lX = u);
							return lX
						}(), aLJ[lX] < 5) return;
					k0 = aLI[lX] + cG(aLJ[lX], 2), (aLK[lX] ? function(cS) {
						var s, aLm, u, a9g = 0,
							aLn = 0;
						for (; aLn < b6 - 1;) {
							for (u = a9g + 1; u < b6; u++)
								if (aLM[u]) {
									aLn = u;
									break
								} s = aLn - a9g + 1, aLV(a8[cS + ea * a9g], 0 === a9g ? aLN[cS] : aLH[aLm - 1] - aLH[aLm - 2], s), aLb(a8[aLn * ea + cS], s), aLX(cS, a9g, !1, s), aLm = s, a9g = aLn
						}
						aLL[cS] = !0
					} : function(cT) {
						var s, aLm, u, a9g = 0,
							aLn = 0;
						for (; aLn < ea - 1;) {
							for (u = a9g + 1; u < ea; u++)
								if (aLL[u]) {
									aLn = u;
									break
								} s = aLn - a9g + 1, aLV(a8[cT * ea + a9g], 0 === a9g ? aLO[cT] : aLH[aLm - 1] - aLH[aLm - 2], s), aLb(a8[cT * ea + aLn], s), aLX(a9g, cT, !0, s), aLm = s, a9g = aLn
						}
						aLM[cT] = !0
					})(k0), aLi(k0, aLI[lX] + aLJ[lX] - k0, aLK[lX]), aLJ[lX] = k0 - aLI[lX] + 1
				}
			}(), cS = 0; cS < ea; cS++)
			if (!aLL[cS])
				for (cT = 0; cT < b6; cT++) aLM[cT] || ! function(cS, cT) {
					var value = a8[cT * ea + cS - 1] + a8[(cT - 1) * ea + cS],
						mm = 2;
					aLL[cS + 1] && (mm++, value += a8[cT * ea + cS + 1]);
					aLM[cT + 1] && (mm++, value += a8[(cT + 1) * ea + cS]);
					a8[cT * ea + cS] = cG(value, mm)
				}(cS, cT)
	}, this.aEP = function() {
		return a8
	}, this.aEM = function() {
		a8 = null
	}
}

function aHn() {
	var aLp = !1,
		zr = 0,
		ea = 0,
		et = 0,
		gap = 0,
		k9 = null,
		kA = null,
		pG = null;

	function aLr() {
		for (var a8v, aLu = 0, s = 0, cJ = Math.floor(ea / 2), aS = Math.floor(et / 2), a8u = 1.5 * Math.PI, u = aM.v0; 0 <= u; u--) s += pG[u], 0 === pG[u] && aLu++;
		if (aLp = !1, kA.clearRect(0, 0, ea, ea), kA.fillStyle = hk.nv, kA.fillRect(0, 0, ea, ea), kA.fillStyle = hk.hl, kA.fillRect(0, 0, ea, gap), kA.fillRect(0, 0, gap, ea), kA.fillRect(ea - gap, 0, gap, ea), kA.fillRect(0, ea - gap, ea, gap), 0 <
			s)
			if (aLu === aM.v0) {
				for (u = aM.v0; 0 <= u; u--)
					if (0 < pG[u]) {
						! function(u, cJ, aS) {
							kA.fillStyle = cK.vt[cK.cL[u]], kA.beginPath(), kA.arc(cJ, cJ, aS, 0, 2 * Math.PI), kA.fill()
						}(u, cJ, aS);
						break
					}!
				function(cJ) {
					var fontSize = cJ / 3;
					kA.font = dW.dX.hn(1, fontSize), kA.fillStyle = hk.hl, kA.fillText("100%", cJ, cJ + .1 * fontSize)
				}(cJ)
			} else {
				for (u = 0; u <= aM.v0; u++) 0 < pG[u] && (! function(u, cJ, aS, a8u, a8v) {
					kA.fillStyle = cK.vt[cK.cL[u]], kA.beginPath(), kA.arc(cJ, cJ, aS, a8u, a8v), kA.lineTo(cJ, cJ), kA.fill()
				}(u, cJ, aS, a8u, a8v = a8u + 2 * Math.PI * pG[u] / s), function(cJ, aS, a8u, a8v) {
					var a8 = (a8v - a8u) / (2 * Math.PI),
						fontSize = +aS * Math.min(a8, .37);
					fontSize < 8 || (a8u = (a8u + a8v) / 2, a8v = Math.floor(100 * a8 + .5) + "%", aS *= .525 - Math.max(.6 * (a8 - .7), 0), kA.font = dW.dX.hn(1, fontSize), kA.fillStyle = hk.hl, kA.fillText(a8v, cJ + Math.cos(a8u) * aS, cJ +
						Math.cos(a8u + 1.5 * Math.PI) * aS))
				}(cJ, aS, a8u, a8v), 0 !== u && a8x(cJ, aS, a8u), a8u = a8v);
				a8x(cJ, aS, 1.5 * Math.PI)
			}!
		function(cJ, aS) {
			kA.beginPath(), kA.arc(cJ, cJ, aS, 0, 2 * Math.PI), kA.stroke()
		}(cJ, aS)
	}

	function a8x(cJ, aS, a12) {
		kA.beginPath(), kA.moveTo(cJ, cJ), kA.lineTo(cJ + Math.cos(a12) * aS, cJ + Math.cos(a12 + 1.5 * Math.PI) * aS), kA.stroke()
	}
	this.aD = function() {
		if (aM.bz) {
			var u;
			for (zr = 0, pG = new Uint32Array(aM.v0 + 1), u = aM.v0; 0 <= u; u--) pG[u] = 0;
			for (u = uq - 1; 0 <= u; u--) pG[cK.cM[uo[u]]] += 1;
			this.resize()
		} else pG = kA = k9 = null
	}, this.aI6 = function() {
		return ea
	}, this.resize = function() {
		aM.bz && (ea = Math.floor(eu.di.ev() && !aM.uy ? .18 * ew.min : .13 * ew.ex), ea = (ea *= 1 + (.5 + .2 * eu.di.ev()) * aM.uy) + ea % 2, et = Math.floor(7 * ea / 8), (k9 = k9 || document.createElement("canvas")).width = ea, k9.height = ea,
			kA = k9.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * ea), kA.lineWidth = gap, kA.strokeStyle = hk.hl, dW.dX.textAlign(kA, 1), dW.dX.textBaseline(kA, 1), aLr())
	}, this.a6q = function() {
		return pG[this.a4v()]
	}, this.rz = function() {
		return zr = 31, this.a0(), this.a4v()
	}, this.a4v = function() {
		let aLs = 0;
		for (let u = aM.v0; 0 < u; u--) pG[u] > pG[aLs] && (aLs = u);
		return aLs
	}, this.a0 = function() {
		if (aM.bz && 32 <= ++zr) {
			var u;
			for (zr = 0, u = aM.v0; 0 <= u; u--) pG[u] = 0;
			for (u = uq - 1; 0 <= u; u--) pG[cK.cM[uo[u]]] += aW.gC[uo[u]];
			aLp = !0
		}
	}, this.iS = function() {
		aM.bz && aLp && aLr()
	}, this.fA = function() {
		aM.bz && (aM.uy ? fB.drawImage(k9, dZ.gap, dZ.gap) : fB.drawImage(k9, dZ.gap, aEa + 2 * dZ.gap))
	}
}

function aHj() {
	var aLx;

	function aM7(ej, pX, cS, cT, globalAlpha) {
		cE.j2.save(), cE.j2.globalAlpha = globalAlpha, cE.j2.imageSmoothingEnabled = !1, cE.j2.scale(pX, pX), cE.j2.drawImage(ej, Math.floor(cS * (cE.cF / pX - ej.width)), Math.floor(cT * (cE.ed / pX - ej.height))), cE.j2.restore()
	}
	this.a6k = 0, this.aKz = 0, this.aL0 = 0, this.aL1 = 0, this.aD = function() {
		(aLx = new Array(cE.ow))[0] = {
			ea: [0, 5e3, 8e3, 1e4],
			aS: [220, 250, 255, 220],
			gn: [190, 220, 0, 0],
			cN: [170, 200, 0, 0]
		}, aLx[1] = {
			ea: [0, 4e3, 5e3, 6e3, 1e4],
			aS: [25, 0, 100, 0, 25],
			gn: [25, 0, 0, 0, 25],
			cN: [25, 0, 0, 0, 25]
		}, aLx[2] = {
			ea: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			aS: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			gn: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			cN: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aLx[3] = {
			ea: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
			aS: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
			gn: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
			cN: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
		}, aLx[4] = {
			ea: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			aS: [10, 10, 20, 10, 10, 170, 212],
			gn: [20, 20, 60, 100, 100, 110, 170],
			cN: [70, 70, 160, 30, 30, 60, 120]
		}, aLx[5] = {
			ea: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			aS: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			gn: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			cN: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aLx[6] = {
			ea: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			aS: [10, 10, 60, 255, 255, 200, 200],
			gn: [10, 10, 60, 255, 255, 200, 200],
			cN: [80, 80, 255, 255, 255, 200, 200]
		}, aLx[7] = {
			ea: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			aS: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			gn: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			cN: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aLx[8] = {
			ea: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			aS: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			gn: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			cN: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aLx[9] = {
			ea: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			aS: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			gn: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			cN: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aLx[20] = {
			ea: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			aS: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			gn: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			cN: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}
	}, this.aLC = function() {
		var aM6, u, aE, kS, iy = function() {
				var iy;
				return cE.j1 = document.createElement("canvas"), cE.j1.width = cE.cF, cE.j1.height = cE.ed, cE.j2 = cE.j1.getContext("2d", {
					alpha: !1
				}), iy = cE.j2.getImageData(0, 0, cE.cF, cE.ed), cE.j3 = iy.data, iy
			}(),
			ea = aLx[cE.gc].ea,
			aS = aLx[cE.gc].aS,
			gn = aLx[cE.gc].gn,
			cN = aLx[cE.gc].cN,
			a8 = aEL.aEP(),
			s = ea.length - 2,
			aM1 = new Array(1 + s),
			aM2 = new Array(1 + s),
			aM3 = new Array(1 + s),
			aM4 = new Array(1 + s);
		for (aE = s; 0 <= aE; aE--) aM1[aE] = ea[aE + 1] - ea[aE], aM2[aE] = aS[aE + 1] - aS[aE], aM3[aE] = gn[aE + 1] - gn[aE], aM4[aE] = cN[aE + 1] - cN[aE];
		for (u = cE.cF * cE.ed - 1; 0 <= u; u--)
			for (aE = s; 0 <= aE; aE--)
				if (a8[u] >= ea[aE]) {
					kS = a8[u] - ea[aE], cE.j3[4 * u] = aS[aE] + cI(aM2[aE] * kS, aM1[aE]), cE.j3[4 * u + 1] = gn[aE] + cI(aM3[aE] * kS, aM1[aE]), cE.j3[4 * u + 2] = cN[aE] + cI(aM4[aE] * kS, aM1[aE]), cE.j3[4 * u + 3] = 255;
					break
				} cE.j2.putImageData(iy, 0, 0), cE.aLE(cE.gc) && er.es() && cE.aLE(cE.gc) && (iy = er.oH("arena"), aM6 = er.oH("territorial.io"), aM7(iy, 5, .5, .5, .1), aM7(aM6, 2, .5, .45, .1)), cE.zQ = !0, gh.hu = !0
	}, this.vA = function() {
		for (var b7, cS, cT, aM8, aM9, kT, aKz = 0, ea = cE.cF, b6 = cE.ed, kS = ea * b6 * 4, aMA = cb, aMB = cE.j3, u = ea - 1; 0 <= u; u--) aMA[(b7 = u << 2) + 2] = aMA[kS - b7 - 2] = 3;
		for (kS = 4 * ea, u = b6 - 1; 0 <= u; u--) aMA[(b7 = u * kS) + 2] = aMA[b7 + kS - 2] = 3;
		for (aM8 = ea - 1, aM9 = b6 - 1, cT = 1; cT < aM9; cT++)
			for (kS = cT * ea, cS = 1; cS < aM8; cS++) kT = 1 - (aMB[(b7 = kS + cS << 2) + 2] > aMB[b7 + 1] && aMB[b7 + 2] > aMB[b7]), aMA[b7 + 2] = 2 - kT, aKz += kT;
		this.a6k = (ea - 2) * (b6 - 2), this.aL1 = 0, cE.aLD(cE.gc) && function() {
			var b7, cS, cT, kS, aMA = cb,
				aMB = cE.j3,
				ea = cE.cF,
				aM8 = ea - 1,
				aM9 = cE.ed - 1,
				nq = 0;
			for (cT = 1; cT < aM9; cT++)
				for (kS = cT * ea, cS = 1; cS < aM8; cS++) aMB[b7 = kS + cS << 2] === aMB[1 + b7] && aMB[b7] === aMB[2 + b7] && (nq++, aMA[2 + b7] = 3);
			v9.aL1 = nq
		}(), this.aKz = aM.ux = aKz - this.aL1, this.aL0 = this.a6k - this.aKz - this.aL1
	}
}

function gE() {
	for (var cS, cT, u = gD - 1; 0 <= u; u--) cS = cG(gU[u], 4) % cE.cF, cT = cG(gU[u], 4 * cE.cF), aW.eL[g9] = aW.eL[g9] > cS ? cS : aW.eL[g9], aW.eN[g9] = aW.eN[g9] > cT ? cT : aW.eN[g9], aW.eP[g9] = aW.eP[g9] < cS ? cS : aW.eP[g9], aW.eR[g9] = aW
		.eR[g9] < cT ? cT : aW.eR[g9]
}

function aIU() {
	var cH, b7, u, s = aW.g1[g9].length;
	loop: for (u = s - 1; 0 <= u; u--) {
		for (cH = 3; 0 <= cH; cH--)
			if (b7 = aW.g1[g9][u] + jQ[cH], cz.cm(b7) || cz.ca(b7) && cz.ce(b7) !== g9) {
				cz.cv(aW.g1[g9][u], g9);
				continue loop
			} aW.g1[g9][u] = aW.g1[g9][s - 1], aW.g1[g9].pop(), s--
	}
}

function aIV() {
	var cH, b7, aMD, aME, s = aW.fz[g9].length;
	loop: for (var u = s - 1; 0 <= u; u--) {
		for (aMD = aME = !1, cH = 3; 0 <= cH; cH--) {
			if (b7 = aW.fz[g9][u] + jQ[cH], cz.cX(b7, g9)) continue loop;
			aMD = aMD || cz.ci(b7), aME = aME || cz.cV(b7)
		}
		aMD ? aW.ds[g9].push(aW.fz[g9][u]) : aME ? aW.g3[g9].push(aW.fz[g9][u]) : cz.ct(aW.fz[g9][u], g9), aW.fz[g9][u] = aW.fz[g9][s - 1], aW.fz[g9].pop(), s--
	}
}

function fx() {
	aW.gC[fu] -= gD
}

function fy(border) {
	for (var s = border.length, u = s - 1; 0 <= u; u--) cz.cc(fu, border[u]) || (border[u] = border[s - 1], border.pop(), s--)
}

function g0(border) {
	for (var s = border.length, u = s - 1; 0 <= u; u--) !cz.cc(fu, border[u]) && cz.cl(border[u]) && (border[u] = border[s - 1], border.pop(), s--)
}

function g2(border) {
	for (var cH, b7, s = border.length, u = s - 1; 0 <= u; u--)
		for (cH = 3; 0 <= cH; cH--)
			if (b7 = border[u] + jQ[cH], cz.cX(b7, fu)) {
				aW.fz[fu].push(border[u]), border[u] = border[s - 1], border.pop(), s--;
				break
			}
}

function g4() {
	for (var cH, b7, u = gD - 1; 0 <= u; u--)
		for (cH = 3; 0 <= cH; cH--) b7 = gU[u] + jQ[cH], cz.cd(fu, b7) && cz.cf(b7) && (aW.fz[fu].push(b7), cz.cu(b7, fu))
}

function g5() {
	var cS, cT;
	loop: for (; aW.eN[fu] < aW.eR[fu];) {
		for (cS = aW.eP[fu]; cS >= aW.eL[fu]; cS--)
			if (cz.cc(fu, 4 * (aW.eN[fu] * cE.cF + cS))) break loop;
		aW.eN[fu]++
	}
	loop: for (; aW.eN[fu] < aW.eR[fu];) {
		for (cS = aW.eP[fu]; cS >= aW.eL[fu]; cS--)
			if (cz.cc(fu, 4 * (aW.eR[fu] * cE.cF + cS))) break loop;
		aW.eR[fu]--
	}
	loop: for (; aW.eL[fu] < aW.eP[fu];) {
		for (cT = aW.eR[fu]; cT >= aW.eN[fu]; cT--)
			if (cz.cc(fu, 4 * (cT * cE.cF + aW.eL[fu]))) break loop;
		aW.eL[fu]++
	}
	loop: for (; aW.eL[fu] < aW.eP[fu];) {
		for (cT = aW.eR[fu]; cT >= aW.eN[fu]; cT--)
			if (cz.cc(fu, 4 * (cT * cE.cF + aW.eP[fu]))) break loop;
		aW.eP[fu]--
	}
}

function eC(player, jN) {
	return 0 === cK.cM[player] || cK.cM[player] !== cK.cM[jN]
}

function sV(player, jN) {
	for (var cO, aMF = g7.js(player), u = 0; u < aMF; u++)
		if (0 === g7.a3K(player, u))
			if ((cO = g7.a3L(player, u)) === aM.aV) {
				if (jN === aM.aV) return !1;
				if (jv(jN)) return !0
			} else if (jN === aM.aV) {
		if (jv(cO)) return !0
	} else if (jw(jN, cO)) return !0;
	return !1
}

function jv(player) {
	for (var u, eD, s = aW.fz[player].length, cH = 3; 0 <= cH; cH--)
		for (eD = jQ[cH], u = 0; u < s; u++)
			if (cz.cm(aW.fz[player][u] + eD)) return !0;
	return !1
}

function jw(e6, e7) {
	var u, mJ, cH, eD, b7, a1D = aW.fz[e6].length,
		a9i = aW.fz[e7].length;
	for (a9i < a1D && (mJ = e6, e6 = e7, e7 = mJ, mJ = a1D, a1D = a9i, 0), cH = 3; 0 <= cH; cH--)
		for (eD = jQ[cH], u = 0; u < a1D; u++)
			if (b7 = aW.fz[e6][u] + eD, cz.ca(b7) && cz.ce(b7) === e7) return !0;
	return !1
}
self.aiCommand746 = function(a8) {
	0 === a8 ? aHb() : 1 !== a8 || 1 !== eu.id || eu.dd < 14 || iX.aDe()
}, setTimeout(aHb, 1e4), window.onload = function() {
	aHb()
};