const fx_version = '0.5.3.4'; // FX Client Version
const fx_update = 'Jan 9'; // FX Client Last Updated

const ter_version = '1.83.0'; // Territorial Version
const ter_update = '8 January 2023'; // Territorial Last Updated


if (localStorage.getItem("win_count") == undefined || localStorage.getItem("win_count") == null) {
    var wins_counter = 0;
    console.log('Couldn\'t find a saved win data. creating one...');
} else if (localStorage.getItem("win_count") != undefined || localStorage.getItem("win_count") != null) {
    var wins_counter = localStorage.getItem("win_count");
}

var settings = {
    "fontName": "Trebuchet MS",
    "showBotDonations": false,
    "hideAllLinks": false,
    "realisticNames": false,
    "customMapFileBtn": true
};
var settingsManager = new (function() {
    var inputFields = {
        fontName: document.getElementById("settings_fontname")
    };
    var checkboxFields = {
        showBotDonations: document.getElementById("settings_donations_bots"),
        hideAllLinks: document.getElementById("settings_hidealllinks"),
        realisticNames: document.getElementById("settings_realisticnames"),
        customMapFileBtn: document.getElementById("settings_custommapfileinput")
    };
    this.save = function() {
        Object.keys(inputFields).forEach(function(key) { settings[key] = inputFields[key].value.trim(); });
        Object.keys(checkboxFields).forEach(function(key) { settings[key] = checkboxFields[key].checked; });
        this.applySettings();
        WindowManager.closeWindow("settings");
        localStorage.setItem("settings", JSON.stringify(settings));
        // should probably firgure out a way to do this without reloading - // You can't do it, localstorages REQUIRE you to reload
        window.location.reload();
    };
    this.syncFields = function() {
        Object.keys(inputFields).forEach(function(key) { inputFields[key].value = settings[key]; });
        Object.keys(checkboxFields).forEach(function(key) { checkboxFields[key].checked = settings[key]; });
    };
    this.resetAll = function() {
        if (!confirm("Are you Really SURE you want to RESET ALL SETTINGS back to the default?")) return;
        localStorage.removeItem("settings");
        window.location.reload();
    };
    this.applySettings = function() {
        setVarByName("bu", "px " + settings.fontName);
    };
});
function removeWins() {
    var confirm1 = confirm('Do you really want to reset your Wins?');
    if (confirm1) {
        wins_counter = 0;
        localStorage.removeItem('win_count');
        alert("Successfully reset wins");
    }
}
var WindowManager = new (function() {
    var windows = {};
    this.add = function(newWindow) {
        windows[newWindow.name] = newWindow;
        windows[newWindow.name].isOpen = false;
    };
    this.openWindow = function(windowName) {
        if (windows[windowName].isOpen === true) return;
        if (windows[windowName].beforeOpen !== undefined) windows[windowName].beforeOpen();
        windows[windowName].isOpen = true;
        windows[windowName].element.style.display = null;
    };
    this.closeWindow = function(windowName) {
        if (windows[windowName].isOpen === false) return;
        windows[windowName].isOpen = false;
        windows[windowName].element.style.display = "none";
    };
    this.closeAll = function() {
        Object.values(windows).forEach(function(windowObj) {
            WindowManager.closeWindow(windowObj.name);
        });
    };
});
WindowManager.add({
    name: "settings",
    element: document.querySelector(".settings"),
    beforeOpen: function() { settingsManager.syncFields(); }
});
WindowManager.add({
    name: "donationHistory",
    element: document.querySelector("#donationhistory"),
    beforeOpen: function() {
        document.getElementById("donationhistory_note").style.display = ((settings.showBotDonations || getVarByName("dt")) ? "none" : "block");
    }
});
document.getElementById("canvasA").addEventListener("mousedown", WindowManager.closeAll);
document.getElementById("canvasA").addEventListener("touchstart", WindowManager.closeAll);
//var tfxc = document.createElement('div');
//tfxc.setAttribute('class', 'settingsd');
var settingsGearIcon = document.createElement('img');
settingsGearIcon.setAttribute('src', 'assets/geari_white.png');
//gear.setAttribute('id', 'optionsimg');
//tfxc.appendChild(gear);

var donationsTracker = new (function(){
    this.donationHistory = Array();
    // fill the array with empty arrays with length of 3
    for (var i = 0; i < 512; i++) this.donationHistory.push([]);
    // from inside of game:
    // ((!gE[g].startsWith("[Bot] ") || settings.showBotDonations) && donationsTracker.logDonation(g,k,x))
    this.logDonation = function(senderID, receiverID, amount) {
        this.donationHistory[receiverID].push([senderID,amount]);
    };
    this.getRecipientHistoryOf = function(playerID) {
        return this.donationHistory[playerID];
    };
});
// usage from inside: displayDonationsHistory(Y, gE);
function displayDonationsHistory(playerID, playerNames) {
    var history = donationsTracker.getRecipientHistoryOf(playerID);
    console.log("History for " + playerNames[playerID] + ":");
    console.log(history);
    document.querySelector("#donationhistory h1").innerHTML = "Donation history for " + playerNames[playerID];
    var historyText = "";
    history.reverse();
    if (history.length > 0) history.forEach(function(historyItem, index) {
        historyText += (history.length - index) + ". Received " + historyItem[1] + " resources from " + playerNames[historyItem[0]] + "<br>";
    });
    else historyText = "Nothing to display";
    document.querySelector("#donationhistory p#donationhistory_text").innerHTML = historyText;
    WindowManager.openWindow("donationHistory");
}

var utils = new (function() {
    this.getMaxTroops = function(playerTerritories, playerID) { return playerTerritories[playerID]*150; };
    this.getDensity = function(playerBalances, playerTerritories, playerID) {
        return (Math.floor((playerBalances[playerID] / ((playerTerritories[playerID] === 0 ? 1 : playerTerritories[playerID]) * 150)) * 100) + "%");
    };
});


var setVarByName, getVarByName;


(function () {

    setVarByName = function(varName, newValue) { return eval(varName + ' = "' + newValue + '"'); }
    getVarByName = function(varName) { return eval(varName); }

    function a() {
        if (b)
            return c.username;
        if (12 <= d) {
            var g = e.loadString(20);
            "" === g && (g = "[FX] " + "Android User " + Math.floor(1E3 * Math.random()),
                e.saveString(20, g))
        } else
            5 <= d ? (g = e.loadString(0),
                "" === g && (g = "[FX] " + "Player " + Math.floor(1E3 * Math.random()),
                    e.saveString(0, g))) : g = f.g(0);
        return g
    }
    function h() {
        i = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1));
        if (b)
            i = c.id;
        else if (12 <= d) {
            var g = e.loadNumber(20);
            -1 === g ? e.saveNumber(20, i) : i = g
        } else
            5 <= d ? (g = e.loadNumber(2),
                2 === g ? e.saveNumber(2, i + 3) : i = g - 3) : i = f.g(1)
    }
    function j() {
        var g = 0;
        if (b)
            g = c.password;
        else if (12 <= d)
            g = e.loadString(22);
        else {
            if (5 <= d)
                return g;
            g = f.g(9)
        }
        var k = Math.floor(Math.pow(2, 48));
        g = Math.floor(parseInt(m.n(g)));
        if (0 < g && g < k)
            return g;
        g = Math.floor(1 + (k - 1) * Math.random());
        return o(g) ? g : 0
    }
    function p() {
        if (b)
            q = c.zoom || r < s;
        else if (12 <= d) {
            var g = e.loadNumber(21);
            -1 === g ? (q = 100 >= e.getNumber(0) || r < s,
                e.saveNumber(21, q ? 1 : 0)) : q = 1 === g || r < s
        } else
            5 <= d ? (g = e.loadNumber(1),
                2 === g ? (q = !0,
                    e.saveNumber(1, q ? 1 : 0)) : q = 1 === g) : q = 0 === f.g(4) || r < s
    }
    function u() {
        return b ? c.emojis : 5 <= d ? e.loadString(1) : f.g(7)
    }
    function v() {
        return b ? c.colors : 12 <= d ? e.loadString(21) : 5 <= d ? e.loadString(2) : f.g(8)
    }
    function w(g) {
        if (b)
            window.webkit.messageHandlers.iosCommandA.postMessage("username " + g);
        else if (12 <= d)
            e.saveString(20, g),
                e.setState(10);
        else if (5 <= d)
            e.saveString(0, g);
        else {
            if (3 > g.length || 0 <= g.indexOf(";"))
                g = "Player 666";
            f.x(0, g);
            f.y()
        }
    }
    function o(g) {
        g = m.z(g.toString());
        return b ? (c.password = g,
            window.webkit.messageHandlers.iosCommandA.postMessage("password " + g),
            !0) : 12 <= d ? (e.saveString(22, g),
                !0) : 5 <= d ? !1 : 2 === f.a0() ? (f.x(9, g),
                    f.y(),
                    !0) : !1
    }
    function a1(g, k) {
        b ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (g ? 1 : 0)),
            window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (k ? 1 : 0))) : 12 <= d ? (e.saveNumber(22, k ? 1 : 0),
                e.saveNumber(21, g ? 1 : 0)) : 5 <= d ? (e.saveNumber(1, g ? 1 : 0),
                    e.saveNumber(11, k ? 1 : 0)) : (f.x(2, k ? 1 : 0),
                        f.x(4, g ? 0 : 1),
                        f.y())
    }
    function a3() {
        for (var g = "", k = 0; k < a5.a6; k += 2)
            g += a5.a7[k] || a5.a7[k + 1] ? a5.a7[k] && !a5.a7[k + 1] ? "1" : !a5.a7[k] && a5.a7[k + 1] ? "2" : "3" : "0";
        b ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + g) : 5 <= d ? e.saveString(1, g) : (f.x(7, g),
            f.y())
    }
    function a8(g) {
        if (b)
            window.webkit.messageHandlers.iosCommandA.postMessage("colors " + g);
        else {
            if (12 <= d)
                e.saveString(21, g);
            else if (5 <= d) {
                e.saveString(2, g);
                return
            }
            f.x(8, g);
            f.y()
        }
    }
    function a9(g) {
        b || 5 <= d && e.setState(g)
    }
    function aB() {
        /* b ? window.webkit.messageHandlers.iosCommandA.postMessage("show ad 1800000") : 12 <= d && e.presentAd(18E5) */
        console.log('Game tried to display an ad, but we prevented it.');
    }
    function aC() {
        b ? location.reload() : 7 <= d ? e.setState(5) : location.reload()
    }
    function aD() {
        14 > d || e.saveString(23, '<!DOCTYPE html>\n<html lang="aG">\n' + document.getElementsByTagName("html")[0].innerHTML + "\n</html>")
    }
    self.aiCommand746 = function (g) {
        0 === g ? aI() : 1 !== g || 14 > d || aJ.aK()
    }
        ;
    var aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX;
    function aY() {
        aQ = 0;
        aR = 2048;
        aS = new Uint32Array(4 * aR);
        aT = 0;
        aU = new Uint32Array(aR);
        aV = new Int32Array(4);
        aV[0] = -4 * aZ;
        aV[1] = 4;
        aV[2] = -aV[0];
        aV[3] = -aV[1];
        aW = new Uint8Array(aZ * aa)
    }
    function ab(g) {
        aM = g;
        aX = !1;
        ac();
        ad();
        for (g = ae.af(aM) - 1; 0 <= g; g--)
            0 === ae.ag(aM, g) && (aL = g,
                ah());
        aX && ai()
    }
    function ai() {
        aj();
        ak()
    }
    function ah() {
        aP = ae.al(aM, aL);
        aN = ae.am(aM, aL);
        an();
        0 === aQ ? ao() : (ap(),
            aq() ? ar() : ao())
    }
    function aq() {
        aO = as(aN, aQ);
        return aO > at
    }
    function ap() {
        var g;
        for (g = aQ - 1; 0 <= g; g--)
            aW[as(aS[g], 4)] = 0
    }
    function ao() {
        1 === ae.af(aM) && au.av(aM);
        if (aM !== aw)
            ax[aM] += aN,
                ay.az(aM);
        else {
            var g = ax[aM];
            ax[aM] += aN;
            ay.az(aM);
            b0.b1[13] -= ax[aM] - g
        }
        ae.b2(aM, aL)
    }
    function ac() {
        var g = b4[aM].length;
        g = g > aR ? aR : g;
        aT = 0;
        for (--g; 0 <= g; g--)
            aU[aT++] = b4[aM][g]
    }
    function ad() {
        var g;
        for (g = b4[aM].length - 1; 0 <= g; g--)
            b5.b6(b4[aM][g]) && b5.b7(b4[aM][g], aM);
        b4[aM] = []
    }
    function an() {
        aQ = 0;
        aP === b8 ? b9() : bA()
    }
    function bA() {
        var g, k;
        for (g = 3; 0 <= g; g--)
            for (k = aT - 1; 0 <= k; k--) {
                var x = aU[k] + aV[g];
                var l = as(x, 4);
                0 === aW[l] && b5.bE(x) && b5.bF(x) === aP && (aW[l] = 1,
                    aS[aQ++] = x)
            }
    }
    function b9() {
        var g, k;
        for (g = 3; 0 <= g; g--)
            for (k = aT - 1; 0 <= k; k--) {
                var x = aU[k] + aV[g];
                var l = as(x, 4);
                0 === aW[l] && b5.bG(x) && (aW[l] = 1,
                    aS[aQ++] = x)
            }
    }
    function ar() {
        bH() ? (bI(),
            aP !== b8 && bJ()) : ao()
    }
    function bJ() {
        bK();
        bL(bM[aP]);
        bL(bN[aP]);
        bO(b4[aP]);
        bP(bN[aP]);
        bP(bQ[aP]);
        bR();
        bS()
    }
    function bI() {
        aX = !0;
        ae.bT(aM, aL, aN);
        bU[aM] += aQ;
        bV();
        bW()
    }
    function bH() {
        return aP === b8 ? bX() : bY()
    }
    function bY() {
        var g = aQ * at
            , k = bb()
            , x = bd();
        k = g + 2 * k + x;
        var l = aO * aQ;
        if (l > k)
            return aN -= k,
                bg(k - g, x),
                !0;
        aN -= l;
        bg(l - g, x);
        return !1
    }
    function bg(g, k) {
        if (0 < k)
            if (g >= k)
                ae.bh(aP, aM, 0),
                    g -= k;
            else {
                ae.bh(aP, aM, k - g);
                return
            }
        g = as(g, 2);
        ax[aP] = ax[aP] >= g ? ax[aP] - g : 0
    }
    function bd() {
        return ae.bi(aP, aM)
    }
    function bb() {
        return as(aQ * ax[aP], 1 + bj() * bk())
    }
    function bj() {
        return Math.floor(2 + bl(as(bU[aP], 100), 8))
    }
    function bk() {
        return bM[aP].length + as(bN[aP].length + bQ[aP].length, 50)
    }
    function bX() {
        aN -= aQ * at;
        return !0
    }
    function bW() {
        for (var g = aQ - 1; 0 <= g; g--)
            b4[aM].push(aS[g]),
                bM[aM].push(aS[g]),
                b5.b7(aS[g], aM)
    }
    function bm() {
        var g = 1
            , k = [null, null];
        this.bp = function () {
            g = .72 * (q ? .0011 : .001) * bq;
            for (var x = 1; 0 <= x; x--)
                k[x] && this.br(x, k[x].l)
        }
            ;
        this.br = function (x, l) {
            k[x] = {
                l: l,
                font: bt + 10 + bu
            };
            this.bv(x)
        }
            ;
        this.bv = function (x) {
            if (bw.bx() && k[x]) {
                var l = k[x].l
                    , t = Math.floor(.15 * g * bw.bz(13).height)
                    , n = bt + t + bu
                    , z = c2.measureText(l, n)
                    , y = .8 * g * bw.bz(13).width;
                z > y && (t = Math.floor(t * y / z),
                    n = bt + t + bu);
                k[x] = {
                    l: l,
                    font: n
                };
                c4.c5 = !0
            }
        }
            ;
        this.c6 = function () {
            return Math.floor(g * bw.bz(13).height)
        }
            ;
        this.c7 = function (x, l) {
            return !bw.bx() || x < cA || l < cB - cC.c1 - g * bw.bz(13).height - 2 * cA || l > cB - cC.c1 - 2 * cA ? !1 : x < cA + g * bw.bz(13).width ? (cD.cE(0),
                !0) : x < 2 * cA + g * bw.bz(13).width ? !1 : x < 2 * cA + 2 * g * bw.bz(13).width ? (cD.cE(1),
                    !0) : !1
        }
            ;
        this.cF = function () {
            return Math.floor(cB - cC.c1 - g * bw.bz(13).height - 2 * cA)
        }
            ;
        this.cG = function () {
            if (bw.bx()) {
                cH.imageSmoothingEnabled = !0;
                cH.setTransform(g, 0, 0, g, cA, this.cF());
                cH.drawImage(bw.bz(14), 0, 0);
                cH.setTransform(g, 0, 0, g, 2 * cA + g * bw.bz(13).width, this.cF());
                cH.drawImage(bw.bz(13), 0, 0);
                for (var x = 1; 0 <= x; x--)
                    k[x] && (cH.setTransform(1, 0, 0, 1, (1 + x) * cA + x * g * bw.bz(13).width, this.cF()),
                        cH.font = k[x].font,
                        cH.textBaseline = cI,
                        cH.textAlign = cJ,
                        cH.fillStyle = cK,
                        cH.fillText(k[x].l, .5 * g * bw.bz(13).width, .86 * g * bw.bz(13).height));
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
    }
    function cL(g, k, x, l) {
        var t = as(3 * ax[g], 256);
        l -= l >= as(ax[g], 2) ? t : 0;
        cP(x, g);
        ae.cQ(g, l, k);
        ax[g] -= l + t;
        au.cR(g, !1)
    }
    function cS(g, k) {
        var x, l;
        for (x = bM[g].length - 1; 0 <= x; x--)
            if (b5.cU(bM[g][x]))
                for (l = 3; 0 <= l; l--)
                    if (b5.bE(bM[g][x] + aV[l]) && b5.bF(bM[g][x] + aV[l]) === k) {
                        b4[g].push(bM[g][x]);
                        break
                    }
    }
    function cP(g, k) {
        for (var x = b4[k].length - 1; x >= g; x--)
            b5.cW(b4[k][x], k)
    }
    function cX(g) {
        for (var k, x = bM[g].length - 1; 0 <= x; x--)
            if (b5.cU(bM[g][x]))
                for (k = 3; 0 <= k; k--)
                    if (b5.bG(bM[g][x] + aV[k])) {
                        b4[g].push(bM[g][x]);
                        break
                    }
    }
    function cY(g, k) {
        var x, l;
        var t = bM[g].length;
        var n = 256 <= t ? 12 : 32 <= t ? 6 : 1;
        t = t - 1 - ce.cf(n);
        cg = 0;
        a: for (; 0 <= t; t -= n)
            for (l = 3; 0 <= l; l--) {
                var z = b5.bG(bM[g][t] + aV[l]) ? b8 : b5.bF(bM[g][t] + aV[l]);
                if (z === b8 || b5.bE(bM[g][t] + aV[l]) && z !== g && (k || ch(g, z))) {
                    for (x = cg - 1; 0 <= x; x--)
                        if (ci[x] === z)
                            continue a;
                    ci[cg] = z;
                    if (++cg >= cj)
                        return !0
                }
            }
        return 0 < cg
    }
    function ck(g, k) {
        var x, l;
        cg = 0;
        for (x = bM[g].length - 1; 0 <= x; x--)
            for (l = 3; 0 <= l; l--) {
                var t = b5.bG(bM[g][x] + aV[l]) ? b8 : b5.bF(bM[g][x] + aV[l]);
                if (t === b8 || b5.bE(bM[g][x] + aV[l]) && t !== g && (k || ch(g, t))) {
                    ci[cg++] = t;
                    return
                }
            }
    }
    function cl() {
        var g;
        for (g = cg - 1; 0 <= g; g--)
            if (ci[g] === b8) {
                for (cg--; g < cg; g++)
                    ci[g] = ci[g + 1];
                return !0
            }
        return !1
    }
    function cn(g) {
        var k, x;
        for (k = cg - 1; 0 <= k; k--)
            if (ae.co(g, ci[k]))
                for (cg--,
                    x = k; x < cg; x++)
                    ci[x] = ci[x + 1];
        return 0 === cg
    }
    function cp() {
        var g;
        for (g = cg - 1; 0 <= g; g--)
            if (ci[g] >= cq)
                return !0;
        return !1
    }
    function cr() {
        var g, k;
        for (g = cg - 1; 0 <= g; g--)
            if (ci[g] < cq)
                for (cg--,
                    k = g; k < cg; k++)
                    ci[k] = ci[k + 1];
        return 0 < cg
    }
    function cs(g) {
        var k, x = ci[0], l = ax[x] + ae.bi(x, g);
        for (k = cg - 1; 1 <= k; k--) {
            var t = ax[ci[k]] + ae.bi(ci[k], g);
            t < l && (x = ci[k],
                l = t)
        }
        return x
    }
    function cv(g) {
        var k = ci[0];
        if (1 === cg)
            return k;
        var x = as(cz[g] + d0[g], 2)
            , l = as(d2[g] + d3[g], 2)
            , t = d5(x - as(cz[k] + d0[k], 2)) + d5(l - as(d2[k] + d3[k], 2));
        for (g = cg - 1; 1 <= g; g--) {
            var n = d5(x - as(cz[ci[g]] + d0[ci[g]], 2)) + d5(l - as(d2[ci[g]] + d3[ci[g]], 2));
            n < t && (t = n,
                k = ci[g])
        }
        return k
    }
    function d6() {
        return ci[ce.cf(cg)]
    }
    var cj, cg, ci, d7;
    function d8() {
        cj = 8;
        cg = 0;
        ci = new Uint16Array(cj)
    }
    function d9() {
        d7 = dA ? new Uint8Array(b8) : null
    }
    function dB(g, k) {
        dA && (d7[g] = 0);
        if (ae.dD(g) && !(60 > k))
            if (0 === bM[g].length)
                dE.dF(g, dG.cN[g - cq]) || (dG.dH(g - cq, 200),
                    dI(g, k, dG.cN[g - cq], ay.dJ(g)));
            else if (!(0 < bN[g].length && ce.random() < ce.value(bN[g].length > bM[g].length ? 7 : 3) && dE.dF(g, dG.cN[g - cq]))) {
                var x = ay.dJ(g);
                ax[g] > x && k < ax[g] - x && (k = ax[g] - x);
                dA ? dK(g, k, dG.cN[g - cq], x) : dL(g, k, dG.cN[g - cq])
            }
    }
    function dK(g, k, x, l) {
        cY(g, !1) || ck(g, !1) ? (d7[g] = 1,
            cn(g) || (cl() ? (dN(g, k),
                dO(g, b8, x)) : (ce.dP(dG.dQ[x]) ? l = cs(g) : (cp() && ce.dP(dG.dS[x]) && cr(),
                    l = cv(g)),
                    dR(g, k, l),
                    dO(g, l, x)))) : 0 < bN[g].length && ce.random() < ce.value(60) && dE.dF(g, x) || (dG.dH(g - cq, 200),
                        dI(g, k, x, l))
    }
    function dT(g, k) {
        cY(g, !1) || ck(g, !1) ? (d7[g] = 1,
            cl() ? dN(g, k) : dR(g, k, d6())) : dI(g, k, 0, 0)
    }
    function dO(g, k, x) {
        3 <= x && 2142 < c4.dU() && (k === b8 || ax[k] < as(ax[g], 20)) && dG.dH(g - cq, 25)
    }
    function dI(g, k, x, l) {
        if (0 !== dW.dX[g] && !(5 === x && ax[g] < l || 4 === x && ax[g] < as(l, 2)))
            for (x = ce.cf(dY),
                l = 0; l < dY; l++) {
                var t = dZ[(l + x) % dY];
                if (dW.dX[t] === dW.dX[g] && 1 === d7[t]) {
                    da(g, t, k);
                    t < cq && ce.random() < ce.value(10) && (d7[t] = 0);
                    break
                }
            }
    }
    function dL(g, k, x) {
        !cY(g, !0) && !ck(g, !0) || cn(g) || (cl() ? dN(g, k) : ce.dP(dG.dQ[x]) ? dR(g, k, cs(g)) : (cp() && ce.dP(dG.dS[x]) && cr(),
            dR(g, k, cv(g))))
    }
    function db(g, k) {
        if (cY(g, !0) || ck(g, !0))
            cl() ? dN(g, k) : dR(g, k, d6())
    }
    function dR(g, k, x) {
        if (as(ax[g], 8) > ax[x]) {
            var l = as(11 * ax[x], 5);
            k = k > l ? k : l
        }
        l = b4[g].length;
        cS(g, x);
        cL(g, x, l, k)
    }
    function dN(g, k) {
        var x = b8
            , l = b4[g].length;
        cX(g);
        return b4[g].length !== l ? (cL(g, x, l, k),
            !0) : !1
    }
    var dd = [60, 74, 112, 200, 256, 512];
    function de() {
        var g, k, x, l, t, n;
        this.dl = "Very Easy;Easy;Normal;Hard;Harder;Very Hard".split(";");
        this.dm = [97, 95, 93, 90, 87, 84];
        this.dS = [98, 95, 90, 40, 20, 0];
        this.dn = [85, 70, 65, 30, 7, 3];
        this.dQ = [0, 0, 0, 0, 50, 90];
        this.bp = function () {
            var z;
            g = new Uint8Array(dq);
            k = new Uint16Array(dq);
            x = new Uint16Array(dq);
            l = new Uint8Array(dq);
            this.cN = new Uint8Array(dq);
            t = new Uint16Array(dq);
            n = new Uint16Array(dq);
            if (9 === dr)
                this.ds();
            else if (dt)
                if (dA)
                    for (z = dq - 1; 0 <= z; z--)
                        this.cN[z] = du.dv[dW.dX[z + cq] - 1].bD;
                else
                    for (z = dq - 1; 0 <= z; z--)
                        this.cN[z] = du.dv[0].bD;
            else {
                var y = 8 === dr ? 1 : 0;
                for (z = dq - 1; 0 <= z; z--)
                    this.cN[z] = y
            }
            for (z = dq - 1; 0 <= z; z--)
                2 >= this.cN[z] ? (l[z] = 5,
                    t[z] = n[z] = 1040,
                    0 === this.cN[z] ? (k[z] = 1E3,
                        x[z] = 1E3) : 1 === this.cN[z] ? (k[z] = 1E3,
                            x[z] = 920,
                            t[z] = n[z] = 1100) : (k[z] = 1E3,
                                x[z] = 870)) : 4 >= this.cN[z] ? (l[z] = 1 + ce.cf(20),
                                    n[z] = 250 + ce.cf(1501),
                                    t[z] = 500 + ce.cf(501),
                                    3 === this.cN[z] ? (k[z] = 600 + ce.cf(101),
                                        x[z] = 300 + ce.cf(401)) : (k[z] = 300 + ce.cf(201),
                                            x[z] = 100 + ce.cf(201))) : (t[z] = 1E3,
                                                n[z] = 1E3,
                                                l[z] = 35 + ce.cf(16),
                                                k[z] = 400 + ce.cf(101),
                                                x[z] = 50 + ce.cf(101)),
                    g[z] = 1 + as(t[z] * ce.random(), 10 * ce.value(100))
        }
            ;
        this.ds = function () {
            var z, y;
            var A = dy.dz;
            for (z = A - 1; 0 <= z; z--)
                this.cN[z] = 5;
            for (y = 0; 6 > y; y++)
                if (0 < dy.e0[y]) {
                    for (z = A + dy.e0[y] - 1; z >= A; z--)
                        this.cN[z] = y;
                    A += dy.e0[y]
                }
        }
            ;
        this.dH = function (z, y) {
            0 <= z && (g[z] = y)
        }
            ;
        this.dF = function (z) {
            if (0 === --g[z]) {
                t[z] !== n[z] && (t[z] += t[z] < n[z] ? 3 : -3);
                k[z] !== x[z] && (k[z] += k[z] < x[z] ? l[z] : -l[z],
                    k[z] = Math.abs(k[z] - x[z]) <= l[z] ? x[z] : k[z]);
                g[z] = as(t[z], 10);
                var y = z + cq;
                dB(y, as(k[z] * ax[y], 1E3))
            }
        }
    }
    function e4() {
        e5.dF();
        e6.dF();
        e7.e8();
        e9.dF()
    }
    function eA() {
        ay.dF();
        eB.dF();
        eC.dF();
        eD.dF();
        eE.dF();
        eF.dF();
        au.dF();
        eG.dF();
        eH();
        eI.dF();
        dy.dF();
        e6.dF();
        e7.dF();
        eJ.dF();
        eK.dF();
        eL.dF();
        e5.dF();
        eM.dF();
        eN.dF();
        eO.dF();
        b0.dF();
        eP.dF();
        e9.dF()
    }
    function eQ() {
        eR.dF();
        eS.dF();
        c2.dF();
        eT.dF();
        eU.eV()
    }
    function eW() {
        eI.eX(!1);
        eL.eX();
        e7.eX(!1);
        eK.eX();
        eN.eX();
        eO.eX();
        e6.eX();
        eP.bv()
    }
    function eY() {
        e6.eX() && (c4.c5 = !0);
        e9.dF()
    }
    function eZ() {
        function g(A) {
            var B;
            for (B = l - 1; 0 <= B; B--)
                0 === n[t[B]] && bU[t[B]] >= A && ab(t[B])
        }
        function k(A) {
            n[A] = 10 === n[A] ? x : 1E3 > bU[A] ? 3 : 1E4 > bU[A] ? 2 : 6E4 > bU[A] ? 1 : 0
        }
        var x, l, t, n, z, y;
        this.bp = function () {
            z = y = 0;
            x = 6;
            l = 0;
            t = new Uint16Array(b8);
            n = new Uint8Array(b8)
        }
            ;
        this.dF = function () {
            var A;
            z = b0.b1[13];
            y = ax[aw];
            for (A = l - 1; 0 <= A; A--)
                10 === n[t[A]] ? k(t[A]) : 0 === n[t[A]]-- && (k(t[A]),
                    ab(t[A]));
            16E4 <= bU[ei[0]] && (g(16E4),
                3E5 <= bU[ei[0]] && g(3E5));
            bU[aw] > b0.b1[7] && (b0.b1[7] = bU[aw]);
            b0.b1[14] += y - ax[aw] + z - b0.b1[13]
        }
            ;
        this.av = function (A) {
            var B;
            for (B = l - 1; 0 <= B; B--)
                if (A === t[B]) {
                    l--;
                    for (A = B; A < l; A++)
                        t[A] = t[A + 1];
                    break
                }
        }
            ;
        this.cR = function (A, B) {
            var C;
            for (C = l - 1; 0 <= C; C--)
                if (A === t[C])
                    return;
            t[l++] = A;
            n[A] = B ? 2 : 10
        }
    }
    function en() {
        function g() {
            l = 3;
            a: {
                for (var y = 40; 1 <= y; y--) {
                    t = d0[z] + as(ce.random() * (cz[z] - d0[z] + 1), ce.value(100));
                    n = d3[z] + as(ce.random() * (d2[z] - d3[z] + 1), ce.value(100));
                    var A = k(b5.ex(t, n));
                    if (1 !== A)
                        break a
                }
                A = 1
            }
            if (0 === A)
                return !1;
            if (2 === A)
                return !0;
            A = x(1, 1);
            return 0 === A ? !1 : 2 === A ? !0 : 2 === x(54, 4)
        }
        function k(y) {
            if (b5.b6(y) && (b5.bG(y) || b5.bF(y) !== z && ch(z, b5.bF(y)))) {
                if (ev.co(z, y))
                    return 2;
                if (0 === l--)
                    return 0
            }
            return 1
        }
        function x(y, A) {
            for (var B, C, F, E, H, J, K, D = y; D < y + 50 * A; D += A)
                if (B = d0[z] - D,
                    B = 1 > B ? 1 : B,
                    C = d3[z] - D,
                    C = 1 > C ? 1 : C,
                    F = cz[z] + D,
                    F = F >= aZ - 1 ? aZ - 2 : F,
                    E = d2[z] + D,
                    E = E >= aa - 1 ? aa - 2 : E,
                    K = as(2 * ce.random() * (F - B + E - C), ce.value(100)),
                    H = F - B,
                    J = E - C,
                    K <= H ? (t = B + K,
                        n = C) : K <= H + J ? (t = F,
                            n = C + K - H) : K <= 2 * H + J ? (t = B + K - H - J,
                                n = E) : (t = B,
                                    n = C + K - 2 * H - J),
                    B = k(b5.ex(t, n)),
                    1 !== B)
                    return B;
            return 1
        }
        var l, t, n, z;
        this.dF = function (y, A) {
            z = y;
            if (0 === bN[z].length)
                return !1;
            if (g()) {
                var B = as(dG.dn[A] * ax[z], 100);
                100 > B && 100 <= ax[z] && (B = 100);
                if (100 <= B)
                    return eu(z, ev.ew(), b5.ex(t, n), B)
            }
            return !1
        }
    }
    function f8() {
        var g, k;
        this.bp = function () {
            g = dq;
            k = new Uint16Array(dq);
            for (var x = dq - 1; 0 <= x; x--)
                k[x] = x
        }
            ;
        this.dF = function () {
            for (var x = g - 1; 0 <= x; x--)
                if (0 === fB[k[x] + cq]) {
                    var l = x;
                    for (g--; l < g; l++)
                        k[l] = k[l + 1]
                } else
                    dG.dF(k[x])
        }
    }
    function fD() {
        function g(y, A, B, C, F, E) {
            0 < B && 1E3 >= B && (k.push(y),
                x.push(A),
                l.push(B),
                t.push(C),
                n.push(F),
                z.push(E))
        }
        var k, x, l, t, n, z;
        this.bp = function () {
            k = [];
            x = [];
            l = [];
            t = [];
            n = [];
            z = []
        }
            ;
        this.dF = function () {
            var y, A = k.length;
            for (y = 0; y < A; y++)
                if (0 === x[y])
                    fH(k[y], t[y], l[y]);
                else if (1 === x[y])
                    this.fI(k[y], l[y], n[y], z[y]);
                else if (2 === x[y])
                    this.fJ(k[y], t[y]);
                else if (6 === x[y]) {
                    var B = k[y];
                    0 !== fB[B] && 2 !== fP[k] && eO.fT(B, 1 === t[y])
                } else
                    7 === x[y] && this.fL(k[y], t[y]);
            0 < A && this.bp()
        }
            ;
        this.fI = function (y, A, B, C) {
            0 !== fB[y] && 2 !== fP[k] && ev.co(y, b5.ex(B, C)) && eu(y, ev.ew(), b5.ex(B, C), as(A * ax[y], 1E3)) && y === aw && (b0.b1[0] += A,
                b0.b1[1]++,
                b0.b1[2]++)
        }
            ;
        this.fJ = function (y, A) {
            if (0 !== fB[y] && 2 !== fP[k] && ae.co(y, A)) {
                var B = ae.bi(y, A);
                ae.bh(y, A, 0);
                if (y !== aw)
                    ax[y] += B,
                        ay.az(y);
                else {
                    var C = ax[y];
                    ax[y] += B;
                    ay.az(y);
                    b0.b1[13] -= ax[y] - C
                }
            }
        }
            ;
        this.fL = function (y, A) {
            if (0 !== fB[y] && 2 !== fP[k]) {
                var B = ae.fR(y, A);
                if (-1 !== B) {
                    var C = ae.am(y, B);
                    ae.bT(y, B, 0);
                    ax[y] += C;
                    ay.az(y)
                }
            }
        }
            ;
        this.fU = function (y, A, B) {
            1 === fV && g(y, 0, A, B, 0, 0)
        }
            ;
        this.fX = function (y, A, B, C) {
            1 === fV && (fY ? fZ.cQ(y, B, C) : g(y, 1, A, 0, B, C))
        }
            ;
        this.fa = function (y, A) {
            1 === fV && g(y, 2, 1, A, 0, 0)
        }
            ;
        this.fb = function (y, A) {
            1 === fV && g(y, 7, 1, A, 0, 0)
        }
            ;
        this.fc = function (y, A) {
            1 === fV && g(y, 6, 1, A, 0, 0)
        }
            ;
        this.fd = function (y) {
            1 === fV && 0 !== fB[y] && 2 !== fP[y] && (8 === dr ? fe.ff(1 - y) : this.fg(y));
            e5.fh(y, 4)
        }
            ;
        this.fg = function (y) {
            fY ? (fi(y),
                fj()) : eE.fk(y)
        }
            ;
        this.fl = function (y) {
            0 !== fB[y] && 2 !== fP[y] && fm.fn(y) && (1 === dY ? fe.ff(y) : (e5.fh(y, y === aw ? 21 : 22),
                8 === dr ? fe.ff(1 - y) : dt ? (fi(y),
                    fj(),
                    fY && fZ.dF()) : this.fg(y)))
        }
    }
    function fq() {
        function g(B) {
            for (l--; B < l; B++)
                t[B] = t[B + 1],
                    n[B] = n[B + 1],
                    z[B] = z[B + 1],
                    y[B] = y[B + 1],
                    A[B] = A[B + 1]
        }
        var k, x, l, t, n, z, y, A;
        this.bp = function () {
            k = 1;
            l = 0;
            x = 2 * b8;
            t = new Uint16Array(x);
            n = new Uint8Array(x);
            z = new Uint16Array(x);
            y = new Uint32Array(x);
            A = new Uint32Array(x)
        }
            ;
        this.fw = function (B, C) {
            y[B] = C
        }
            ;
        this.dF = function () {
            for (var B = l - 1; 0 <= B; B--)
                0 === n[B]-- && (n[B] = 2,
                    fx.dF(B, z[B], t[B], y[B], A[B]))
        }
            ;
        this.av = function (B, C) {
            var F;
            for (F = l - 1; 0 <= F; F--)
                if (B === t[F] && C === z[F]) {
                    g(F);
                    break
                }
        }
            ;
        this.fz = function (B) {
            var C;
            for (C = l - 1; 0 <= C; C--)
                B === t[C] && (fx.g0(B, y[C]),
                    g(C))
        }
            ;
        this.cR = function (B, C, F) {
            if (l >= x)
                return 0;
            t[l] = B;
            n[l] = 0;
            z[l] = k;
            y[l] = C;
            A[l] = F;
            B = k;
            k++;
            l++;
            k = k > 2 * x ? 1 : k;
            return B
        }
            ;
        this.cG = function () {
            if (!(40 > g3 || 0 === l)) {
                var B, C = g8 / g3, F = g9 / g3, E = (gA + g8) / g3, H = (cB + g9) / g3;
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                for (B = l - 1; 0 <= B; B--) {
                    var J = b5.gB(y[B]);
                    var K = b5.cF(y[B]);
                    var D = t[B];
                    if (J > C - 1 && J < E && K > F - 1 && K < H && 0 !== fB[D]) {
                        var L = Math.floor(.94 * g3 * e6.gC(D));
                        if (!(6 > L)) {
                            J = Math.floor(gA * (J + .5 - C) / (E - C));
                            K = Math.floor(cB * (K + .48 - F) / (H - F));
                            cH.font = bt + L + bu;
                            cH.fillStyle = gD;
                            cH.fillText(gE[D], J, K);
                            var I = Math.floor(.57 * L);
                            6 > I || (D = ae.am(D, ae.fR(D, z[B])),
                                cH.font = bt + I + bu,
                                cH.fillText(eL.gF(D), J, K + Math.floor(.82 * L)))
                        }
                    }
                }
            }
        }
    }
    function gG() {
        function g(I) {
            J = c4.gY;
            K = 33;
            n = z = t = 0;
            y = K / I;
            l = 1 / (I / K / 4);
            A = (gA / 2 + g8) / g3;
            B = (cB / 2 + g9) / g3;
            C = g3
        }
        function k(I) {
            .125 > Math.abs(Math.log(H / C)) && (H = I * C)
        }
        function x(I, N, G, M) {
            F = (I + G + 1) / 2;
            E = (N + M + 1) / 2;
            I = gA / (G - I + 1);
            N = cB / (M - N + 1);
            H = .9 * (I < N ? I : N)
        }
        var l, t, n, z, y, A, B, C, F, E, H, J, K, D = !1, L = !1;
        this.gZ = function () {
            return D
        }
            ;
        this.ga = function () {
            g(1);
            this.gb(0, 0, aZ - 1, aa - 1);
            fY || this.gc(aw, 3E3, !0, .3)
        }
            ;
        this.gc = function (I, N, G, M) {
            if (!(ge || D && !G && L || 0 === bU[I])) {
                gf.gg = !1;
                L = G;
                g(N);
                F = (d0[I] + cz[I] + 1) / 2;
                E = (d3[I] + d2[I] + 1) / 2;
                N = cz[I] - d0[I] + 1;
                I = d2[I] - d3[I] + 1;
                G = gA / N;
                var Q = cB / I;
                H = G < Q ? G : Q;
                H *= 0 !== M ? M : 20 > N && 20 > I ? .5 : .9;
                k(.875);
                D = !0;
                gj.gk()
            }
        }
            ;
        this.gl = function (I) {
            gf.gg = !1;
            L = !0;
            g(I);
            x(0, 0, aZ - 1, aa - 1);
            k(.875);
            D = !0;
            gj.gk()
        }
            ;
        this.gb = function (I, N, G, M) {
            x(I, N, G, M);
            g3 = H;
            gf.gs(F, gA / 2);
            gf.gt(E, cB / 2);
            gu.gv()
        }
            ;
        this.gw = function () {
            if (D && L)
                return !1;
            D = !1;
            return !0
        }
            ;
        this.dF = function () {
            if (D) {
                .5 > t ? z < y && (z += y * l,
                    n = t) : t > 1 - n && (z -= y * l,
                        z = z < y * l ? y * l : z);
                J = J >= c4.gY ? c4.gY - 1 : J;
                var I = c4.gY - J;
                1E3 < I ? t = 1 : (t += z * I / K,
                    t = 1 < t ? 1 : t);
                J = c4.gY;
                var N = g3;
                I = g8;
                var G = g9;
                g3 = C * Math.pow(H / C, t);
                N = g3 / N;
                var M = 1 - (C * Math.pow(H / C, 1 - t) - C) / (H - C);
                gf.gs(A + M * (F - A), gA / 2);
                gf.gt(B + M * (E - B), cB / 2);
                e6.zoom(N, (I * N - g8) / (1 - N), (G * N - g9) / (1 - N));
                gu.gv();
                1 <= t && (D = !1,
                    h4.h5 = !0);
                c4.c5 = !0
            }
        }
    }
    function h6() {
        function g() {
            var J;
            a: {
                for (J = 0; 8 > J; J++)
                    if (t = as(z * ce.random(), ce.value(100)),
                        n = as(y * ce.random(), ce.value(100)),
                        k()) {
                        J = !0;
                        break a
                    }
                J = !1
            }
            if (!J)
                a: {
                    var K, D, L, I;
                    J = as(z * ce.random(), ce.value(100));
                    var N = as(y * ce.random(), ce.value(100));
                    for (K = 40; 1 <= K; K--)
                        for (D = y - K; 0 <= D; D -= 40)
                            for (n = (D + N) % y,
                                L = 40; 1 <= L; L--)
                                for (I = z - L; 0 <= I; I -= 40)
                                    if (t = (I + J) % z,
                                        k()) {
                                        J = !0;
                                        break a
                                    }
                    J = !1
                }
            return J
        }
        function k() {
            var J, K;
            var D = as(A - F, 2);
            var L = C + n * A + D
                , I = B + t * A + D;
            for (J = L + F - 1; J >= L; J--)
                for (K = I + F - 1; K >= I; K--)
                    if (D = b5.ex(K, J),
                        !b5.b6(D) || b5.cU(D))
                        return !1;
            return !0
        }
        function x() {
            fB[E] = 0;
            ax[E] = 0;
            bU[E] = hR[E] = 0;
            b4[E] = [];
            bM[E] = [];
            bN[E] = [];
            bQ[E] = [];
            d0[E] = d3[E] = cz[E] = d2[E] = 0
        }
        function l(J, K) {
            fB[E] = 1;
            ax[E] = E < cq ? hS : dd[dG.cN[E - cq]];
            d0[E] = J + 10;
            d3[E] = K + 10;
            d2[E] = cz[E] = 0;
            var D, L;
            for (D = J; D < J + 4; D++)
                for (L = K; L < K + 4; L++)
                    if (D > J && D < J + 3 || L > K && L < K + 3) {
                        var I = b5.ex(D, L);
                        b5.b6(I) && (d0[E] = D < d0[E] ? D : d0[E],
                            cz[E] = D > cz[E] ? D : cz[E],
                            d3[E] = L < d3[E] ? L : d3[E],
                            d2[E] = L > d2[E] ? L : d2[E],
                            H[bU[E]] = I,
                            bU[E]++,
                            b5.hV(I, E))
                    }
            hR[E] = bU[E];
            for (I = bU[E] - 1; 0 <= I; I--)
                b5.hW(H[I], E) ? (b5.b7(H[I], E),
                    bM[E].push(H[I])) : b5.hX(H[I]) ? (b5.b7(H[I], E),
                        bN[E].push(H[I])) : b5.hY(H[I]) && (b5.b7(H[I], E),
                            bQ[E].push(H[I]))
        }
        var t, n, z, y, A, B, C, F, E, H;
        this.bp = function () {
            var J;
            H = Array(12);
            F = 6;
            A = 10;
            z = as(aZ, A);
            y = as(aa, A);
            B = as(aZ - A * z, 2);
            C = as(aa - A * y, 2);
            if (fY)
                for (J = 0; J < cq; J++)
                    E = J,
                        x(),
                        fB[E] = 1;
            for (E = 0; E < b8; E++)
                if (1 !== fB[E])
                    if (E < hG && g()) {
                        var K = B + t * A + as(A, 2);
                        J = C + n * A + as(A, 2);
                        x();
                        l(K - 2, J - 2)
                    } else
                        x();
            b0.b1[7] = bU[aw];
            b0.b1[8] = ax[aw]
        }
            ;
        this.hZ = function (J, K, D) {
            var L, I;
            E = J;
            for (L = 0; 20 > L; L++)
                for (J = K + L; J >= K - L; J--)
                    for (I = D + L; I >= D - L; I--)
                        if ((J === K + L || J === K - L || I === D + L || I === D - L) && 3 < J && J < aZ - 5 && 3 < I && I < aa - 5) {
                            var N;
                            if (N = b5.b6(b5.ex(J, I)))
                                a: {
                                    var G, M = J + 3, Q = I + 3;
                                    for (N = Q; N > Q - 6; N--)
                                        for (G = M; G > M - 6; G--) {
                                            var R = b5.ex(G, N);
                                            if (b5.cU(R)) {
                                                N = !1;
                                                break a
                                            }
                                        }
                                    N = !0
                                }
                            if (N) {
                                if (0 < bU[E]) {
                                    for (D = cz[E]; D >= d0[E]; D--)
                                        for (K = d2[E]; K >= d3[E]; K--)
                                            L = 4 * (K * aZ + D),
                                                b5.he(E, L) && (b5.hf(L),
                                                    bU[E]--);
                                    x()
                                }
                                l(J - 1, I - 1);
                                return !0
                            }
                        }
            return !1
        }
            ;
        this.hg = function (J) {
            E = J;
            if (g()) {
                J = B + t * A + as(A, 2);
                var K = C + n * A + as(A, 2);
                x();
                l(J - 2, K - 2)
            } else
                x()
        }
    }
    function hh() {
        hi.hj();
        cH.setTransform(g3, 0, 0, g3, 0, 0);
        cH.imageSmoothingEnabled = 3 > g3;
        cH.drawImage(hk, gf.gB(), gf.cF());
        eJ.cG();
        cH.drawImage(hl, gf.gB(), gf.cF());
        cH.imageSmoothingEnabled = !1;
        hi.cG();
        cH.setTransform(1, 0, 0, 1, 0, 0);
        e6.cG();
        eG.cG();
        ge || (cH.imageSmoothingEnabled = !1,
            e5.cG(),
            eI.cG(),
            eN.cG(),
            eO.cG(),
            e7.cG(),
            gf.cG(),
            c2.cG(),
            eP.cG(),
            eK.cG(),
            eL.cG(),
            fm.cG(),
            eS.cG(),
            hm.cG(),
            hn.cG(),
            eT.cG())
    }
    function ho(g, k, x) {
        g.clearRect(0, 0, k, x);
        g.fillStyle = hq;
        g.fillRect(0, 0, k, x)
    }
    function hr(g, k, x, l) {
        g.fillStyle = cK;
        g.fillRect(0, 0, k, l);
        g.fillRect(0, 0, l, x);
        g.fillRect(k - l, 0, l, x);
        g.fillRect(0, x - l, k, l)
    }
    function ht(g, k, x, l, t, n, z) {
        g.fillStyle = cK;
        n = Math.floor(l * n);
        n += (n - t) % 2;
        var y = Math.floor((n - t) / 2);
        l = Math.floor((l - n) / 2);
        g.fillRect(k + l, x + l + y, n, t);
        z && g.fillRect(k + l + y, x + l, t, n)
    }
    function hz() {
        this.i0 = null;
        this.bp = function (g) {
            this.i0 = g;
            e5.i1(this.i0)
        }
            ;
        this.i2 = function (g) {
            var k = 8 / (1 + Math.pow(2, (this.i0[g].i4 - this.i0[1 - g].i4) / 10 / 32));
            k = Math.floor(10 * k + .5);
            var x = this.i7(this.i0[g].i4 + k);
            k = this.i7(this.i0[1 - g].i4 - k);
            0 === g ? e5.i9(this.i0, x, k, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : e5.i9(this.i0, k, x, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
        }
            ;
        this.i7 = function (g) {
            g = 0 > g ? 0 : 16E3 < g ? 16E3 : g;
            return 16E3 <= g ? "Unknown" : (g / 10).toFixed(1)
        }
    }
    function iA() {
        function g(t) {
            for (var n = k.length - 1; 0 <= n; n--)
                if (t >= k[n] && t < x[n])
                    return n;
            return -1
        }
        var k, x, l;
        (function () {
            k = [32, 65, 191, 913, 931];
            x = [64, 127, 688, 930, 1155];
            l = Array(k.length + 1);
            for (var t = 0; t < l.length; t++) {
                l[t] = 0;
                for (var n = t - 1; 0 <= n; n--)
                    l[t] += x[n] - k[n]
            }
        }
        )();
        this.iF = function (t) {
            t = t.trim();
            if (0 === t.indexOf("Bot ") || 0 === t.indexOf("[Bot] "))
                t = !1;
            else
                a: {
                    t = t.trim();
                    var n = t.length;
                    if (3 > n || 20 < n)
                        t = !1;
                    else {
                        for (var z = 0, y, A = 0; A < n; A++)
                            if (y = t.charCodeAt(A),
                                z += 65 <= y && 90 >= y || 1040 <= y && 1071 >= y ? 1 : 0,
                                -1 === g(y)) {
                                t = !1;
                                break a
                            }
                        t = 3 < z && z > Math.floor(n / 2) ? !1 : !0
                    }
                }
            return t
        }
            ;
        this.iL = function (t) {
            t = t.trim();
            for (var n = t.length, z = [], y, A = 0; A < n; A++) {
                y = t.charCodeAt(A);
                var B = g(y);
                z.push(l[B] + y - k[B])
            }
            return z
        }
            ;
        this.iM = function (t) {
            for (var n = "", z = t.length, y, A = 0; A < z; A++)
                for (y = 1; y < l.length; y++)
                    if (t[A] < l[y]) {
                        y = k[y - 1] + t[A] - l[y - 1];
                        n += String.fromCharCode(y);
                        break
                    }
            return n
        }
            ;
        this.iN = function (t) {
            t = this.iL(t);
            for (var n = "", z = 0; z < t.length; z++)
                n += 10 > t[z] ? "00" : 100 > t[z] ? "0" : "",
                    n += t[z].toString(10);
            return n
        }
            ;
        this.iO = function (t) {
            for (var n = Array(Math.floor(t.length / 3)), z = 0; z < t.length; z += 3)
                n[Math.floor(z / 3)] = parseInt(t.substring(z, z + 3));
            return this.iM(n)
        }
            ;
        this.z = function (t) {
            var n, z = [t.length];
            for (n = 0; n < t.length; n++)
                z[n] = t.charCodeAt(n) - 48;
            var y = "";
            for (n = 0; n < t.length; n++)
                if (n === t.length - 1 || 51 < 10 * z[n] + z[n + 1])
                    y += z[n].toString();
                else {
                    var A = 10 * z[n] + z[n + 1];
                    y += String.fromCharCode(A + (26 > A ? 65 : 71));
                    n++
                }
            return y
        }
            ;
        this.n = function (t) {
            for (var n = "", z, y = 0; y < t.length; y++)
                z = t.charCodeAt(y),
                    48 <= z && 58 > z ? n += String.fromCharCode(z) : 65 <= z && 75 > z ? n += "0" + (z - 65).toString() : 75 <= z && 91 > z ? n += (z - 65).toString() : 97 <= z && 123 > z && (n += (z - 71).toString());
            return n
        }
            ;
        this.iP = function (t) {
            var n = t.length, z, y = [];
            for (z = 0; z < n; z++) {
                var A = t.charCodeAt(z);
                58 > A ? y.push(t[z]) : (A = 91 > A ? A - 65 : A - 71,
                    y.push(String(as(A, 10))),
                    y.push(String(A - 10 * as(A, 10))))
            }
            n = y.length - 2;
            A = 0;
            t = [];
            for (z = 0; z < n; z += 3)
                t[A++] = parseInt(y[z] + y[z + 1] + y[z + 2]);
            return t
        }
            ;
        this.iR = function () {
            var t, n = "";
            for (t = 0; 6 > t; t++) {
                var z = 48 + ce.random() % 36;
                z += 58 <= z ? 39 : 0;
                n += String.fromCharCode(z)
            }
            return n
        }
    }
    function iT() {
        this.ff = function (g) {
            if (2 === fV)
                var k = !0;
            else
                eO.im(),
                    fV = 2,
                    io = ip,
                    k = !1;
            if (!k) {
                if (8 === dr) {
                    var x = g = 0 > g ? bU[0] >= bU[1] ? 0 : 1 : g;
                    (k = g === aw) ? e5.fh(g, 2) : e5.fh(1 - aw, 3);
                    ia.i2(g)
                } else
                    // if the game is team game
                    dA ? (
                        g = eP.ib(), k = dW.dX[aw] === g,
                        9 === dr ? (x = (k ? ei[0] : 512))
                        : (g = dW.ic(dW.id[g]), x = g[0], 512 !== x && e5.ie(g[1])),
                        e5.ig(k)
                    ) : (
                        x = ei[0], k = (x === aw), e5.ih(x)
                    );
                dt || ii.ij(ik(), x);
                eS.show(k, !1);
                e5.iq(!0);
                eI.eX(!0);
                e7.eX(!0);
                c4.c5 = !0;
                h4.ir();
                a9(0)
            }
        }
    }
    function is() {
        this.cQ = function (g, k, x) {
            0 !== fB[g] && it.hZ(g, k, x) && (c4.c5 = !0)
        }
            ;
        this.dF = function () {
            fY = !1;
            for (var g = 0; g < cq; g++)
                0 !== fB[g] && 0 === bU[g] && it.hg(g);
            0 !== fB[aw] ? (b0.b1[7] = bU[aw],
                b0.b1[8] = ax[aw],
                eN.cE(),
                e7.iu(),
                eR.gb(d0[aw] - 5, d3[aw] - 5, cz[aw] + 5, d2[aw] + 5),
                eT.bp()) : eS.show(!1, !1);
            e5.iv(18);
            e6.iw();
            e6.eX();
            fZ = null;
            h4.ix = !0;
            h4.iy();
            dt && a9(1)
        }
    }
    var cq, ip, dq, io, b8 = 512, hG = 512, iz = 150, dt, j0, fV = 0, j1, j2, j3, hS = 512, at = 2, aw, ge, fY, j4, dA, j5, dr, j6, fZ, ia, j7;
    function j8(g, k, x, l, t) {
        j0 = ge = !1;
        dr = l;
        j6 = t;
        dA = 7 > dr || 9 === dr;
        ip = cq = x.length;
        dt = 1 === ip;
        dr = 10 === dr && dt ? 7 : dr;
        dr = 8 === dr && 2 !== cq ? 7 : dr;
        j5 = 9 === dr ? 2 : dr + 2;
        j7 = 2 >= cq ? 30 : 50 >= cq ? 40 : 50;
        fZ = (j4 = fY = jD.jE ? jD.jE.customSpawn : dA || 100 > cq) ? new is : null;
        hS = 512;
        hG = b8;
        dt && (hG = du.jF());
        dq = hG - cq;
        io = 0;
        aw = k;
        ce.jG(jD.jE ? jD.jE.seedSpawn : g);
        jH(x);
        dy.bp();
        dW.bp(x);
        fV = 1;
        j2 = 15E8;
        j3 = 1E9;
        b0.bp();
        jI();
        jJ.jK();
        h4.bp();
        ay.bp();
        d9();
        b5.bp(x);
        hi.bp();
        eP.bp();
        dG.bp();
        jL.jM();
        jL.jN();
        it.bp();
        jO();
        eJ.bp();
        hn.bp();
        jP.putImageData(jQ, 0, 0);
        eI.bp();
        gf.bp();
        eN.bp();
        eO.bp();
        eK.bp();
        e7.bp();
        fm.bp();
        c2.bp();
        e5.bp();
        eL.bp();
        hm.bp();
        eS.bp();
        eC.bp();
        eG.bp();
        au.bp();
        eF.bp();
        aY();
        ae.bp();
        e6.bp();
        eB.bp();
        eE.bp();
        eM.bp();
        eD.bp();
        8 === dr ? (ia = new hz,
            ia.bp(x)) : ia = null;
        jR();
        eT.bp();
        dt ? c4.jS() : c4.jT();
        c4.c5 = !0;
        dt && fY || a9(1)
    }
    function jR() {
        eR.ga();
        0 === fB[aw] && eS.show(!1, !0);
        e6.eX()
    }
    function jU() {
        e9.close(e9.jV, 3246);
        fV = 0;
        c4.jW();
        jX.bp();
        a9(0);
        aB()
    }
    var dG, au, dE, eF, eC, eG, eR, it, m, hm, fm, e5, jY, eL, c2, eN, gf, jZ, eK, eI, e7, eS, ja, jb, aJ, jc, jd, je, du, jX, bw, b5, f, ae, ay, e6, jL, dy, jJ, jf, jg, gj, ev, ce, fx, hi, jh, ji, eT, ii, jj, eJ, jk, jl, eO, eU, e9, eD, jm, jn, eE, eB, eM, jo, jp, jD;
    function jq() {
        dG = new de;
        au = new eZ;
        dE = new en;
        eF = new f8;
        eC = new fD;
        eG = new fq;
        eR = new gG;
        it = new h6;
        m = new iA;
        hm = new jr;
        fm = new js;
        e5 = new jt;
        jY = new ju;
        eL = new jv;
        c2 = new jw;
        eN = new jx;
        gf = new jy;
        jZ = new jz;
        eK = new k0;
        eI = new k1;
        e7 = new k2;
        eS = new k3;
        ja = new k4;
        jb = new k5;
        aJ = new k6;
        jc = new k7;
        jc.jM();
        jd = new k8;
        je = new k9;
        du = new kA;
        jX = new kB;
        bw = new kC;
        b5 = new kD;
        f = new kE;
        ae = new kF;
        ay = new kG;
        e6 = new kH;
        jL = new kI;
        dy = new kJ;
        jJ = new kK;
        jf = new kL;
        jg = new kM;
        gj = new kN;
        ev = new kO;
        ce = new kP;
        fx = new kQ;
        hi = new kR;
        jh = new kS;
        ji = new kT;
        eT = new kU;
        ii = new kV;
        jj = new kW;
        eJ = new kX;
        jk = new kY;
        jl = new kZ;
        eO = new ka;
        eU = new kb;
        e9 = new kc;
        eD = new kd;
        jm = new ke;
        jn = new kf;
        eE = new kg;
        eB = new kh;
        eM = new ki;
        jo = new kj;
        jp = new kk;
        jD = new kl
    }
    function jr() {
        function g(N, G, M, Q) {
            for (var R, P = 0; P < N.length; P++) {
                G.push(document.createElement("canvas"));
                G[P].width = M;
                G[P].height = M;
                R = G[P].getContext("2d", {
                    alpha: !0
                });
                var U = M
                    , W = R;
                W.fillStyle = Q;
                W.beginPath();
                W.arc(Math.floor(U / 2), Math.floor(U / 2), Math.floor(.47 * U), 0, 2 * Math.PI);
                W.fill();
                6 === N[P] ? R.drawImage(bw.bz(19), 0, 0) : 7 === N[P] ? R.drawImage(bw.l4("emojis"), -4 * M, 0) : R.drawImage(bw.bz(3), -N[P] * M, 0)
            }
        }
        function k(N) {
            for (var G = L.length - 1; 0 <= G; G--)
                if (L[G] === N)
                    return !0;
            return !1
        }
        function x(N) {
            return -1 === N || 0 === N || 6 === N || !t[5] && (8 === N || !t[4] && 7 === N) || !t[7] && (2 === N || !t[6] && 1 === N) || 3 === N && !t[2] || 5 === N && !t[1] && !t[5] && !t[7] ? !1 : !0
        }
        function l(N, G) {
            return N < z - A - J || N > z + 2 * A + J || G < y - A - J || G > y + 2 * A + J ? -1 : 3 * (G < y - J / 2 ? 0 : G < y + A + J / 2 ? 1 : 2) + (N < z - J / 2 ? 0 : N < z + A + J / 2 ? 1 : 2)
        }
        var t = [], n, z, y, A, B, C, F, E, H, J, K, D, L, I;
        this.kv = [];
        this.bp = function () {
            L = [];
            t = [];
            n = !1;
            B = C = z = y = F = 0;
            this.kw();
            for (var N = this.kx.length - 1; 0 <= N; N--)
                t.push(!1);
            t.push(!1)
        }
            ;
        this.kw = function () {
            this.kx = [];
            K = [];
            this.ky = [];
            var N = bw.bz(3).height;
            A = Math.floor((q ? .075 : .0468) * bq);
            D = A / N;
            J = Math.floor(A / 3);
            g([0, 1, 2, 3, 7, 4, 5, 6], this.kx, N, "rgba(0,180,0,0.6)");
            g([0, 4, 5], K, N, "rgba(200,0,0,0.6)");
            g([0, 2, 4], this.ky, N, "rgba(0,0,0,0.6)");
            g([0, 5], this.kv, N, "rgba(200,200,0,0.6)");
            this.kx[6] = this.kv[1]
        }
            ;
        this.l6 = function (N, G) {
            if (this.l7()) {
                var M = this.c7(N, G);
                c4.c5 = 0 < M;
                return 2 > M
            }
            return !1
        }
            ;
        this.l8 = function (N, G) {
            this.l7() || (B = N,
                C = G,
                F = (new Date).getTime())
        }
            ;
        this.l9 = function (N) {
            return N < cq && 2 !== fP[N]
        }
            ;
        this.c7 = function (N, G) {
            C = B = -1E3;
            if (2 === fP[aw] || 0 === fB[aw] && !fY)
                return this.lA(),
                    1;
            if (n) {
                this.lA();
                if (a5.lB(N, G))
                    a5.lC(N, G, E) && (n = !0);
                else
                    return a5.lD(),
                        2;
                return 1
            }
            var M = l(N, G);
            if (!x(M) || 0 === M || 6 === M || !t[2] && 3 === M)
                return this.lA(),
                    2;
            if (1 === M) {
                if (t[6]) {
                    M = (new Date).getTime();
                    M > I + 4E3 && (L = []);
                    I = M;
                    if (k(E))
                        return this.lA(),
                            1;
                    L.push(E);
                    16 < L.length && L.shift();
                    this.lA();
                    return 1
                }
                return 0
            }
            if (2 === M) {
                if (t[7]) {
                    for (M = L.length - 1; 0 <= M; M--)
                        0 === fB[L[M]] && L.splice(M, 1);
                    0 < L.length && (eM.lJ(1, L, !0) && (e5.lK(L, E),
                        ii.lL(L, E)),
                        L = []);
                    this.lA();
                    return 1
                }
                return 0
            }
            if (3 === M) {
                this.lA();
                if (this.l9(E) && 7 > dr && 1071 > c4.dU())
                    return e5.lM(),
                        1;
                e5.lN();
                dt ? da(aw, E, as(eN.lO() * ax[aw], 1E3)) : ii.lP(eN.lO(), E === b8 ? aw : E);
                return 1
            }
            if (4 === M)
                return t[0] ? fY ? (this.lA(),
                    dt ? (fZ.cQ(0, b5.gB(H), b5.cF(H)),
                        fZ.dF()) : ii.lR(1E3, b5.gB(H), b5.cF(H))) : (this.lA(),
                            e5.lN(),
                            dt ? fH(aw, E, eN.lO()) : (!j4 || 300 < e7.lQ()) && ii.lP(eN.lO(), E === b8 ? aw : E)) : t[8] ? (this.lA(),
                                eD.lS(E, eN.lO())) : this.lA(),
                    1;
            if (5 === M)
                return t[1] ? (this.lA(),
                    e5.lN(),
                    dt ? eC.fI(aw, eN.lO(), b5.gB(H), b5.cF(H)) : ii.lR(eN.lO(), b5.gB(H), b5.cF(H)),
                    1) : 0;
            if (7 === M && t[4])
                return this.lA(),
                    n = a5.show(N, G),
                    1;
            if (8 === M)
                return t[5] ? (eM.lJ(0, [E], !0) && (e5.lT(E, 0),
                    ii.lU(E)),
                    this.lA(),
                    1) : 0;
            this.lA();
            return 2
        }
            ;
        this.click = function (N, G) {
            if (this.l7() || 2 === fP[aw] || 0 === fB[aw] && !fY)
                return !1;
            var M = (q ? .0288 : .0144) * bq;
            if (Math.abs(N - B) > M || Math.abs(G - C) > M || (new Date).getTime() > F + 425)
                return !1;
            M = Math.floor((N + g8) / g3);
            var Q = Math.floor((G + g9) / g3);
            if (1 > M || 1 > Q || M >= aZ - 1 || Q >= aa - 1)
                return !1;
            var R = Q * aZ * 4 + 4 * M;
            if (!b5.b6(R))
                return !1;
            if (2 === fV)
                return 1 <= a5.lY && (E = b5.bF(R),
                    this.l9(E)) ? (E === aw && this.lA(),
                        t[4] = !0,
                        this.lZ(N, G)) : !1;
            H = b5.ex(M, Q);
            if (fY)
                return t[0] = !0,
                    this.lZ(N, G);
            t[1] = ev.co(aw, H);
            if (b5.bG(R))
                return E = b8,
                    la(aw) ? t[0] = !0 : lb(aw, E) && (t[8] = !0),
                    this.lZ(N, G);
            E = b5.bF(R);
            if (E === aw) {
                this.lA();
                if (0 === a5.lY)
                    return !1;
                t[4] = !0;
                return this.lZ(N, G)
            }
            M = t;
            Q = E;
            Q = hm.l9(Q) && !k(Q) && eM.lJ(1, [Q], !1);
            M[6] = Q;
            t[4] = 1 <= a5.lY && this.l9(E);
            if (ch(E, aw)) {
                t[5] = this.l9(E) && !e6.ld(E) && eM.lJ(0, [E], !1);
                M = t;
                Q = E;
                if (0 === L.length)
                    Q = !1;
                else if ((new Date).getTime() > I + 4E3)
                    L = [],
                        Q = !1;
                else {
                    if (R = !k(Q)) {
                        b: {
                            if (dA)
                                for (R = L.length - 1; 0 <= R; R--)
                                    if (!ch(Q, L[R])) {
                                        Q = !0;
                                        break b
                                    }
                            Q = !1
                        }
                        R = !Q
                    }
                    Q = R
                }
                M[7] = Q;
                lf(aw, E) ? t[0] = !0 : lb(aw, E) && (t[8] = !0);
                return this.lZ(N, G)
            }
            t[2] = dA;
            return this.lZ(N, G)
        }
            ;
        this.lZ = function (N, G) {
            z = N - Math.floor(A / 2);
            y = G - Math.floor(A / 2);
            return this.l7()
        }
            ;
        this.lh = function (N, G) {
            if (!this.l7())
                return !1;
            if (n) {
                if (a5.lB(N, G))
                    return !1;
                a5.lD();
                n = !1;
                return c4.c5 = !0
            }
            return x(l(N, G)) ? !1 : (this.lA(),
                c4.c5 = !0)
        }
            ;
        this.lA = function () {
            var N;
            for (N = t.length - 1; 0 <= N; N--)
                t[N] = !1;
            n = !1
        }
            ;
        this.li = function () {
            this.lA()
        }
            ;
        this.l7 = function () {
            var N;
            for (N = t.length - 1; 0 <= N; N--)
                if (t[N])
                    return !0;
            return n
        }
            ;
        this.cG = function () {
            this.l7() && this.lj()
        }
            ;
        this.lj = function () {
            if (n)
                a5.cG();
            else {
                // draw order buttons
                var N = (A + J) / D;
                cH.imageSmoothingEnabled = !0;
                cH.setTransform(D, 0, 0, D, z, y);
                t[0] ? fY ? cH.drawImage(this.kx[3], 0, 0) : cH.drawImage(this.kx[0], 0, 0) : t[8] ? cH.drawImage(this.kv[0], 0, 0) : cH.drawImage(K[0], 0, 0);
                t[1] && cH.drawImage(this.kx[1], N, 0);
                // donation
                t[2] && cH.drawImage(this.kx[2], -N, 0);
                t[4] && cH.drawImage(this.kx[4], 0, N);
                // non-agression pact
                t[5] && cH.drawImage(this.kx[5], N, N);
                // point
                t[6] && cH.drawImage(this.kx[6], 0, -N);
                // target
                t[7] && cH.drawImage(this.kx[7], N, -N);
                cH.imageSmoothingEnabled = !1;
                cH.setTransform(1, 0, 0, 1, 0, 0);
            }
        }
    }
    function js() {
        function g() {
            var B = t.getContext("2d", {
                alpha: !0
            });
            B.clearRect(0, 0, l, l);
            B.fillStyle = ls;
            B.fillRect(0, 0, l, l);
            0 === y && (B.fillStyle = lt,
                B.fillRect(0, 0, l, l));
            B.fillStyle = cK;
            B.fillRect(0, 0, l, 1);
            B.fillRect(0, 0, 1, l);
            B.fillRect(0, l - 1, l, 1);
            B.fillRect(l - 1, 0, 1, l);
            var C = .9 * l / bw.bz(0).width;
            B.imageSmoothingEnabled = !0;
            B.setTransform(C, 0, 0, C, Math.floor((l - C * bw.bz(0).width) / 2), Math.floor((l - C * bw.bz(0).height) / 2));
            B.drawImage(bw.bz(0), 0, 0);
            B.setTransform(1, 0, 0, 1, 0, 0)
        }
        function k(B, C) {
            if (!fm.lp)
                return B <= l + m0 && C >= eN.fG ? 0 : -1;
            if (B <= 4 * l + m0) {
                if (C >= eN.fG)
                    return 0;
                if (C >= eN.fG - l - A * m0)
                    return 2;
                if (C >= eN.fG - 2 * (l + A * m0))
                    return 3
            } else if (B <= 7 * l + m0 && C >= eN.fG - l - A * m0)
                return 1;
            return -1
        }
        function x(B, C) {
            cH.setTransform(1, 0, 0, 1, m0, eN.fG - B * A * m0 - B * l);
            cH.fillStyle = ls;
            cH.fillRect(0, 0, 4 * l, l);
            y === B + 1 && C === cK && (cH.fillStyle = lt,
                cH.fillRect(0, 0, 4 * l, l));
            cH.fillStyle = C;
            cH.fillRect(0, 0, 4 * l, 1);
            cH.fillRect(0, 0, 1, l);
            cH.fillRect(4 * l, 0, 1, l);
            cH.fillRect(0, l - 1, 4 * l, 1);
            cH.fillText(z[B], 2 * l, .54 * l)
        }
        var l, t, n, z = ["Quit Game", "Surrender", "Statistics"], y, A;
        this.bp = function () {
            y = -1;
            this.lp = !1;
            A = q ? 1.2 : .6;
            this.lq()
        }
            ;
        this.lq = function () {
            l = eN.cw;
            t = document.createElement("canvas");
            t.width = l;
            t.height = l;
            n = bt + Math.floor((q ? .5 : .45) * l) + bu;
            g()
        }
            ;
        this.lv = function () {
            (this.lp = !this.lp) ? (ge = !1,
                dt && 1 === fV && !fY && (setTimeout(function () {
                    h4.ir()
                }, 0),
                    a9(0))) : (y = -1,
                        g(),
                        dt && a9(1));
            c4.c5 = !0
        }
            ;
        this.c7 = function (B, C) {
            var F = k(B, C);
            return this.lp ? 0 === F ? (jU(),
                2) : 1 === F ? (this.lv(),
                    2) : 2 === F ? (this.fn(aw) && (dt ? eC.fl(aw) : ii.ly(),
                        this.lv()),
                        2) : 3 === F && 2 <= b0.lz ? (hn.lv(),
                            c4.c5 = !0,
                            2) : hn.l7 || dt && !fY ? 1 : (this.lv(),
                                2) : 0 === F ? (this.lv(),
                                    2) : 0
        }
            ;
        this.lh = function (B, C) {
            var F = k(B, C);
            if (F === y)
                return -1 !== y;
            y = F;
            this.lp || g();
            c4.c5 = !0;
            return -1 !== y
        }
            ;
        this.cG = function () {
            if (this.lp) {
                var B = Math.floor(5.5 * l);
                cH.setTransform(1, 0, 0, 1, m0, eN.fG);
                cH.fillStyle = ls;
                cH.fillRect(0, 0, B, l);
                0 === y ? (cH.fillStyle = lt,
                    cH.fillRect(0, 0, 4 * l, l)) : 1 === y && (cH.fillStyle = lt,
                        cH.fillRect(4 * l, 0, Math.floor(1.5 * l), l));
                cH.fillStyle = cK;
                cH.fillRect(0, 0, B, 1);
                cH.fillRect(0, 0, 1, l);
                cH.fillRect(4 * l, 0, 1, l);
                cH.fillRect(0, l - 1, B, 1);
                cH.fillRect(B - 1, 0, 1, l);
                cH.font = n;
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                cH.fillText(z[0], 2 * l, .54 * l);
                B = .4 * l;
                fm.m4(m0 + 4 * l + (1.5 * l - B) / 2, eN.fG + .3 * l, B);
                x(1, fm.fn(aw) ? cK : m6);
                2 <= b0.lz && x(2, cK);
                cH.setTransform(1, 0, 0, 1, 0, 0)
            } else
                cH.drawImage(t, m0, eN.fG)
        }
            ;
        this.fn = function (B) {
            return 0 !== fB[B] && 2 !== fV && hm.l9(B)
        }
            ;
        this.m4 = function (B, C, F) {
            cH.setTransform(1, 0, 0, 1, B, C);
            cH.lineWidth = 2;
            cH.strokeStyle = cK;
            cH.beginPath();
            cH.moveTo(0, 0);
            cH.lineTo(F, F);
            cH.moveTo(0, F);
            cH.lineTo(F, 0);
            cH.stroke()
        }
    }
    function jt() {
        var g, k, x, l, t, n, z;
        function y() {
            return eN.mV(e5.mS()) ? eO.l7 ? eN.fG - eN.cw - 2 * J : eN.fG - J : eO.l7 ? s - eN.cw - (q ? 3 : 2) * J : s - J
        }
        function A(G, M, Q, R, P, U, W, X) {
            var V = 1E3 <= Q;
            var na = Math.floor(c2.measureText(M, e5.c0) + 1.5 * K + (V ? H : 1.5 * K));
            if (na + J > r && !V && 50 !== Q && 20 < M.length) {
                var ba = Math.floor(.5 * M.length);
                A(G, M.substring(0, ba), Q, R, P, U, W, X);
                A(G, M.substring(ba), Q, R, P, U, W, X)
            } else {
                var ca = Q - 1E3;
                ba = na + (50 === Q ? D : 0);
                var pa = document.createElement("canvas");
                pa.width = na;
                pa.height = H;
                var S = pa.getContext("2d", {
                    alpha: !0
                });
                S.font = e5.c0;
                S.textBaseline = cI;
                S.textAlign = mZ;
                S.clearRect(0, 0, na, H);
                S.fillStyle = U;
                S.fillRect(0, 0, na, H);
                S.fillStyle = P;
                S.fillText(M, Math.floor(1.5 * K), Math.floor(H / 2));
                V && (V = H / a5.c1,
                    S.imageSmoothingEnabled = !0,
                    S.setTransform(V, 0, 0, V, na - H, 0),
                    S.drawImage(a5.l0[ca], 0, 0));
                E.unshift({
                    gY: G,
                    l: M,
                    id: Q,
                    player: R,
                    ll: pa,
                    mM: P,
                    mN: U,
                    c1: na,
                    mT: ba,
                    mO: W,
                    mP: X
                })
            }
        }
        function B(G, M) {
            var Q, R = 0, P = E.length;
            for (Q = 0; Q < P; Q++)
                if (E[Q].id === G && (R++,
                    R >= M)) {
                    E.splice(Q, 1);
                    break
                }
        }
        function C(G, M, Q) {
            return "rgb(" + G + "," + M + "," + Q + ")"
        }
        function F(G, M) {
            var Q, R = !1;
            for (Q = E.length - 1; 0 <= Q; Q--)
                E[Q].id !== G || M !== b8 && E[Q].player !== M || (E.splice(Q, 1),
                    R = !0);
            return R
        }
        var E, H, J, K, D, L, I, N;
        this.bp = function () {
            I = 0;
            L = q ? 7 : 12;
            g = [0, 0, 0];
            k = [0, 0, 0];
            x = [220, 180, 180];
            l = [0, 0, 0];
            t = [0, 0, 0];
            n = [" were conquered.", " left the game.", " surrendered."];
            z = [" was conquered by ", " left the game.", " surrendered."];
            E = [];
            this.lq();
            fY && this.fh(0, 18);
            var G = "Map: " + jf.n6() + "   Pixels: " + eL.gF(jJ.n7) + "   Land: " + eL.gF(jJ.n8) + " (" + e7.n9(100 * jJ.n8 / jJ.n7, 1) + ")"
                , M = "";
            0 < jJ.nB && (M += "Water: " + eL.gF(jJ.nB) + " (" + e7.n9(100 * jJ.nB / jJ.n7, 1) + ")");
            0 < jJ.nC && (M += 0 < jJ.nB ? "   " : "",
                M += "Mountains: " + eL.gF(jJ.nC) + " (" + e7.n9(100 * jJ.nC / jJ.n7, 1) + ")");
            A(340, G, 6, 0, C(215, 245, 255), hq, -1, !1);
            0 < M.length && A(340, M, 6, 0, C(215, 245, 255), hq, -1, !1);
            10 === dr && A(120, "Full sending against human players is disabled.", 6, 0, C(235, 255, 120), hq, -1, !1)
        }
            ;
        this.lq = function () {
            var G;
            H = Math.floor((q ? .031 : .0249) * bq);
            H = 10 > H ? 10 : H;
            this.by = Math.floor(2 * H / 3);
            this.c0 = bt + this.by + bu;
            J = m0;
            K = Math.floor(H / 5);
            if (0 < E.length) {
                var M = E;
                E = [];
                for (G = M.length - 1; 0 <= G; G--)
                    A(M[G].gY, M[G].l, M[G].id, M[G].player, M[G].mM, M[G].mN, M[G].mO, M[G].mP)
            }
            this.mQ()
        }
            ;
        this.mQ = function () {
            N = document.createElement("canvas");
            D = c2.measureText("Accept", this.c0) + 5 * K;
            N.height = H;
            N.width = D;
            var G = N.getContext("2d", {
                alpha: !0
            });
            G.font = this.c0;
            G.textBaseline = cI;
            G.textAlign = cJ;
            G.clearRect(0, 0, D, H);
            G.fillStyle = mR;
            G.fillRect(0, 0, D, H);
            G.fillStyle = cK;
            G.fillText("Accept", Math.floor(D / 2), Math.floor(H / 2))
        }
            ;
        this.mS = function () {
            if (eO.l7)
                return eO.c1;
            var G = E.length;
            return 0 === G ? 0 : 1 === G ? E[0].mT : mU(E[0].mT, E[1].mT)
        }
            ;
        this.c7 = function (G, M) {
            for (var Q = y(), R, P = E.length - 1; 0 <= P; P--)
                if (R = Q - (P + 1) * H,
                    M >= R && M < R + H) {
                    if (50 === E[P].id) {
                        if (G >= gA - D - J - E[P].c1)
                            return G >= gA - D - J ? (P = E[P].player,
                                this.lT(P, 0),
                                ii.lU(P)) : eR.gc(E[P].player, 800, !1, 0),
                                !0;
                        break
                    }
                    if (G >= gA - E[P].c1 - J)
                        return E[P].mP && (eR.gc(E[P].player, 800, !1, 0),
                            0 <= E[P].mO && (Q = E[P].mO,
                                E[P].mO = E[P].player,
                                E[P].player = Q)),
                            !0;
                    break
                }
            return !1
        }
            ;
        this.iv = function (G) {
            for (var M = E.length - 1; 0 <= M; M--)
                E[M].id === G && (E[M].gY = 1)
        }
            ;
        this.fh = function (G, M) {
            0 === M ? (b0.b1[G < cq ? 4 : 3]++, c2.cQ(G, 0), A(q ? 100 : 160, "You conquered " + gE[G] + ".", 0, G, "rgb(10,220,10)", hq, -1, !1)) :
                1 === M ? (F(50, b8), c2.cQ(G, 1), A(360, "You were conquered by " + gE[G] + ".", 0, G, "rgb(255,40,40)", hq, -1, !0), eR.gc(G, 2700, !0, 0)) :
                    2 === M ? (c2.cQ(G, 2), A(0, "Congratulations! You won the game.", 0, G, "rgb(10,255,255)", hq, -1, !0), // i don't think this is the right part for win counter
                        eR.gc(G, 2700, !0, 0)) :
                        3 === M ? (c2.cQ(G, 2), A(0, gE[G] + " won the game.", 0, G, cK, hq, -1, !0), eR.gc(G, 2700, !0, 0)) :
                            4 === M ? (ip--, io--, this.mb(1, G, G)) :
                                5 === M ? 2 !== fP[G] && hm.l9(aw) && (B(1, 5), e6.md(G) ? A(180, gE[G] + " has broken the non-aggression pact and invades you!", 1, G, C(255, 200, 180), hq, -1, !0) : A(180, gE[G] + " is attacking you!", 1, G, "rgb(255,70,10)", hq, -1, !0)) :
                                    18 === M ? A(255, "Choose your start position!", 18, 0, cK, hq, -1, !1) :
                                        21 === M ? A(220, "You surrendered!", M, 0, "rgb(255,40,40)", hq, -1, !1) :
                                            22 === M && this.mb(2, G, G)
        };
        this.mf = function (G) {
            A(200, "Error [" + G + "]", 94, 0, cK, mh, -1, !1)
        }
            ;
        this.ih = function (G) {
            c2.cQ(G, 2);
            100 > cq ? A(0, gE[G] + " won the game.", 3, G, cK, hq, -1, !0) : A(0, gE[G] + " has been immortalized!", 3, G, cK, hq, -1, !0);
            eR.gc(G, 2700, !0, 0)
            if (aw === G) {
                console.log(`${gE[aw]} Won the Game!`);
                wins_counter++;
                A(0, "Your Current Win Count is Now " + wins_counter + " !", 3, aw, cK, hq, -1, true)
                window.localStorage.setItem("win_count", wins_counter);
            }
        }
            ;
        this.mi = function (G, M, Q) {
            G === aw ? A(175, " Message to " + gE[M] + ": ", 1E3 + Q, M, C(200, 255, 210), hq, -1, !0) : this.ml(G, Q)
        }
            ;
        this.ml = function (G, M) {
            var Q, R = 0;
            A(175, gE[G] + ": ", 1E3 + M, G, cK, "rgba(5,60,25,0.9)", -1, !0);
            for (Q = 0; Q < E.length; Q++)
                if (1E3 <= E[Q].id && E[Q].player === G && (R++,
                    3 < R)) {
                    E.splice(Q, 1);
                    break
                }
        }
            ;
        // End of team game
        this.ig = function (G) {
            var M = dW.id[eP.mp()];
            G ? (
                9 === dr ? (G = "The Resistance defeated the virus.", c2.mq("The Resistance", 2, 1, 12))
                : G = "Congratulations! Team " + dW.bo[M] + " has won the game!",
                A(0, G, 40, 0, "rgb(10,220,10)", hq, -1, !1)
            ) : (
                9 === dr ? (G = "Mankind lost the war against the virus.", c2.mq("The Virus", 2, 0, 16))
                : G = "Our alliance has been defeated!",
                A(0, G, 41, 0, "rgb(200,80,80)", hq, -1, !1)
            );
            9 !== dr && c2.mq("Team " + dW.bo[M], 2, 1, 12);
            eR.gl(2700)
        }
            ;
        // 1v1
        this.i1 = function (G) {
            A(300, G[0].name + " [" + ia.i7(G[0].i4) + "] vs " + G[1].name + " [" + ia.i7(G[1].i4) + "]", 65, 0, gD, "rgba(100,255,255,0.75)", -1, !1)
        }
            ;
        this.mr = function (G) {
            A(200, G, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
        }
            ;
        this.i9 = function (G, M, Q, R) {
            1 === e9.mt() && (A(0, G[0].name + ": " + ia.i7(G[0].i4) + " -> " + M, 66, 0, cK, R[0], -1, !1),
                A(0, G[1].name + ": " + ia.i7(G[1].i4) + " -> " + Q, 66, 1, cK, R[1], -1, !1))
        }
            ;
        this.ie = function (G) {
            1 === e9.mt() && A(0, "[" + G + "] has won " + cq + (j6 ? " x 2" : "") + " points!", 45, 0, "rgb(225,240,255)", hq, -1, !1)
        }
            ;
        this.lT = function (G, M) {
            0 === M ? F(50, G) ? (A(128, "You signed a non-aggression pact with " + gE[G] + ".", 52, G, C(180, 255, 180), hq, -1, !0),
                e6.mv(G, 2, 255)) : A(384, "You asked " + gE[G] + " to sign a non-aggression pact.", 51, G, C(210, 210, 255), hq, -1, !0) : F(51, G) ? (A(128, gE[G] + " accepted the non-aggression pact.", 52, G, cK, "rgba(60,120,10,0.9)", -1, !0),
                    e6.mv(G, 2, 255)) : (A(384, gE[G] + " requests a non-aggression pact.", 50, G, cK, "rgba(90,90,90,0.9)", -1, !0),
                        e6.mv(G, 2, 96))
        }
            ;
        this.lK = function (G, M) {
            var Q = "You ", R;
            a: {
                for (R = G.length - 1; 0 <= R; R--)
                    if (2 * bU[G[R]] > bU[aw]) {
                        R = !1;
                        break a
                    }
                R = !0
            }
            R ? (Q += "ordered ",
                R = C(255, 235, 210)) : (Q += "asked ",
                    R = C(210, 255, 210));
            1 < G.length ? A(230, Q + G.length + " players to attack " + gE[M] + ".", 66, M, R, hq, -1, !0) : A(230, Q + gE[G[0]] + " to attack " + gE[M] + ".", 66, G[0], R, hq, M, !0)
        }
            ;
        this.my = function (G, M) {
            bU[G] > 2 * bU[aw] ? A(230, gE[G] + " orders you to attack " + gE[M] + "!", 66, G, cK, "rgba(90,50,5,0.9)", M, !0) : A(230, gE[G] + " asks you to attack " + gE[M] + ".", 66, G, cK, "rgba(75,65,5,0.9)", M, !0)
        }
            ;
        this.n0 = function (G, M) {
            F(G, M)
        }
            ;
        this.lN = function () {
            100 <= ax[aw] || A(80, "Your balance is too low!", 9, 0, cK, hq, -1, !1)
        };
        this.lM = function () {
            A(80, "Boosting is disallowed in the first minute!", 9, 0, cK, hq, -1, !1)
        };
        // Sending donation
        this.n1 = function (G, M) {
            2 !== fP[aw] && A(200, "You exported " + eL.gF(G) + " resource" + (1 === G ? "" : "s") + " to " + gE[M] + ".", 30, M, "rgb(190,255,190)", hq, -1, !0)
        };
        // Receiving donation
        this.n3 = function (G, M) {
            if (2 !== fP[aw]) {
                var Q = 2 === fP[M] || M >= cq;
                var R = 200 - 20 * E.length;
                A(80 > R ? 80 : R, (Q ? "A bot" : gE[M]) + " supported you with " + eL.gF(G) + " resource" + (1 === G ? "" : "s") + ".", 31, M, gD, Q ? "rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, !0);
                B(31, q ? 4 : 6)
            }
        };
        this.iq = function (G) {
            var M, Q = c4.dU();
            for (M = 2; 0 <= M; M--)
                0 < l[M] && (G || t[M] < Q - 220) && this.nE(M)
        }
            ;
        this.nE = function (G) {
            var M = l[G];
            var Q = g[G];
            l[G] = 0;
            1 === M ? (M = gE[Q] + z[G],
                0 === G && (M += gE[k[G]] + "."),
                A(x[G], M, 7, k[G], cK, hq, -1, !0)) : 2 <= M && (M = gE[Q] + " and " + (M - 1) + " other player" + (2 === M ? "" : "s") + n[G],
                    A(x[G], M, 7, Q, cK, hq, -1, !1))
        }
            ;
        this.mb = function (G, M, Q) {
            var R = c4.dU()
                , P = l[G] + 1;
            l[G]++;
            g[G] = M;
            k[G] = Q;
            1 === P && (t[G] = R);
            1 === P && (32 > ip || 2 === fV) ? this.nE(G) : 1 < P && (t[G] < R - 140 || 2 === fV) && this.nE(G)
        }
            ;
        this.dF = function () {
            var G, M = E.length - L;
            M = 1 >= M ? 1 : M * M;
            for (G = E.length - 1; 0 <= G; G--)
                0 < E[G].gY && (E[G].gY -= M,
                    0 >= E[G].gY && E.splice(G, 1));
            if (128 !== I && (I++,
                !(128 > I)))
                for (G = 5,
                    M = dY - 1; 0 <= M; M--)
                    1 === fP[dZ[M]] && 0 < G-- && A(240, gE[dZ[M]] + " joined the game.", 1, dZ[M], gD, "rgba(255,255,255,0.75)", -1, !0);
            this.iq(!1)
        }
            ;
        this.cG = function () {
            for (var G = y(), M, Q = E.length - 1; 0 <= Q; Q--)
                M = G - (Q + 1) * H,
                    50 === E[Q].id ? (cH.drawImage(E[Q].ll, gA - E[Q].c1 - D - J, M),
                        cH.drawImage(N, gA - D - J, M)) : cH.drawImage(E[Q].ll, gA - E[Q].c1 - J, M)
        }
    }
    function nH() {
        this.by = this.nJ = this.nI = this.hw = this.cw = this.c1 = 0;
        this.bs = -1;
        this.lm = ["Accept Cookies", "More Information", "Decline"];
        this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"];
        this.l7 = !1;
        this.bp = function () {
            this.lq();
            this.l7 = 5 > d && !b && 0 === f.a0()
        }
            ;
        this.lq = function () {
            this.c1 = Math.floor(2.8 * Math.floor((q ? .09 : .062) * bq));
            this.cw = Math.floor(1 * this.c1);
            this.hw = Math.floor(.06 * this.c1);
            this.hx = this.c1 - 2 * this.hw;
            this.nI = this.hw;
            this.nJ = (this.cw - (this.lm.length + 1) * this.nI) / this.lm.length;
            this.by = Math.floor(.3 * this.nJ)
        }
            ;
        this.c7 = function (g, k) {
            if (!this.l7)
                return !1;
            var x = this.nL(g, k);
            if (-1 === x)
                return !1;
            0 === x ? (f.nM(2),
                this.l7 = !1) : 1 === x ? nN.bp(nO, !0) : 2 === x && (f.nM(1),
                    this.l7 = !1);
            return c4.c5 = !0
        }
            ;
        this.lh = function (g, k) {
            if (!this.l7)
                return !1;
            var x = this.bs;
            this.bs = this.nL(g, k);
            x !== this.bs && (c4.c5 = !0);
            return -1 !== this.bs
        }
            ;
        this.nL = function (g, k) {
            g -= cA;
            k -= Math.floor(cB - this.cw - cA);
            if (0 > g || 0 > k || g >= this.c1 || k >= this.cw)
                return -1;
            var x = Math.floor((k - .5 * this.nI) / ((this.cw - this.nI) / this.lm.length));
            return 0 > x ? 0 : x >= this.lm.length ? this.lm.length - 1 : x
        }
            ;
        this.cG = function () {
            this.l7 && this.nP()
        }
            ;
        this.nP = function () {
            var g = cA
                , k = Math.floor(cB - this.cw - cA);
            cH.setTransform(1, 0, 0, 1, g, k);
            cH.fillStyle = hq;
            cH.fillRect(0, 0, this.c1, this.cw);
            cH.textBaseline = cI;
            cH.textAlign = cJ;
            cH.strokeStyle = cK;
            cH.font = bt + this.by + bu;
            cH.strokeRect(0, 0, this.c1, this.cw);
            for (var x = this.lm.length - 1; 0 <= x; x--)
                cH.setTransform(1, 0, 0, 1, g + this.hw, k + this.nI + x * (this.nI + this.nJ)),
                    cH.fillStyle = this.colors[x],
                    cH.fillRect(0, 0, this.hx, this.nJ),
                    this.bs === x && (cH.fillStyle = nQ,
                        cH.fillRect(0, 0, this.hx, this.nJ)),
                    cH.fillStyle = cK,
                    cH.fillText(this.lm[x], this.hx / 2, .54 * this.nJ),
                    cH.strokeRect(0, 0, this.hx, this.nJ);
            cH.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function ju() {
        function g(y) {
            return 10 > y ? "0" + y : String(y)
        }
        var k, x, l, t, n, z;
        this.bp = function () {
            void 0 === t && this.lq();
            this.setTime()
        }
            ;
        this.lq = function () {
            t = Math.floor((q ? .53 : .36) * bq);
            n = Math.floor(.065 * t);
            z = bt + Math.floor(.9 * n) + bu;
            l--;
            this.setTime()
        }
            ;
        this.dF = function () {
            this.setTime() && (c4.c5 = !0)
        }
            ;
        this.setTime = function () {
            var y = new Date;
            var A = y.getUTCMinutes()
                , B = y.getUTCSeconds();
            x = 3600 - 60 * A - B;
            x %= 900;
            k = "Next Contest: " + g(Math.floor(x / 60)) + ":" + g(x % 60);
            y = l;
            l = 60 * A + B;
            if (y === l)
                return !1;
            t = c2.measureText(k, z);
            t += Math.floor(.4 * n);
            return !0
        }
            ;
        this.cG = function () {
            cH.lineWidth = 1 + Math.floor(n / 15);
            cH.translate(gA - n, Math.floor(.5 * (cB + t)));
            cH.rotate(-Math.PI / 2);
            cH.fillStyle = cK;
            cH.fillRect(0, 0, t, n);
            cH.strokeStyle = gD;
            cH.strokeRect(0, 0, t, n + 10);
            cH.fillStyle = gD;
            cH.font = z;
            cH.textBaseline = cI;
            cH.textAlign = cJ;
            cH.fillText(k, Math.floor(t / 2), Math.floor(.59 * n));
            cH.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function nZ() {
        this.na = 10;
        this.nc = this.nb = 50;
        this.nd = 8;
        this.ne = this.nb + this.nc;
        this.a6 = this.nb + this.nc + this.nd;
        this.c1 = 72;
        this.ng = this.nf = 0;
        this.l0 = Array(this.a6);
        this.nh = 8;
        this.ni = Array(this.nb + this.nc);
        this.nj = Array(this.nb + this.nc);
        this.f6 = this.f5 = 0;
        this.zoom = 1;
        this.nk = .2;
        this.lY = 0;
        this.nl = this.a7 = null;
        this.nm = 0;
        this.bp = function () {
            var g;
            this.a7 = Array(this.a6);
            this.nl = Array(this.a6);
            var k = bw.l4("emojis");
            this.no();
            for (g = this.lY = 0; g < this.nb; g++)
                this.np(g, g, k);
            k = bw.l4("flags");
            for (g = 0; g < this.nc; g++)
                this.np(g, this.nb + g, k);
            this.nr();
            this.l0[26] = this.ns(25, 2);
            this.nt()
        }
            ;
        this.np = function (g, k, x) {
            this.a7[k] = !1;
            this.nl[k] = 0;
            var l = document.createElement("canvas");
            l.width = this.c1;
            l.height = this.c1;
            var t = l.getContext("2d", {
                alpha: !0
            });
            t.clearRect(0, 0, this.c1, this.c1);
            23 === k ? t.drawImage(hm.ky[2], 0, 0) : 36 === k ? t.drawImage(hm.ky[0], 0, 0) : 49 === k ? t.drawImage(hm.ky[1], 0, 0) : t.drawImage(x, this.c1 * g % (g === k ? this.na * this.c1 : 4E3), g === k ? as(g, this.na) * this.c1 : 0, this.c1, this.c1, 0, 0, this.c1, this.c1);
            this.l0[k] = l
        };
        this.nr = function () {
            this.l0[this.a6 - 5] = this.l0[26];
            this.l0[this.a6 - 4] = this.ns(this.a6 - 5, 2);
            this.l0[this.a6 - 1] = this.ns(this.a6 - 5, 1);
            this.l0[this.a6 - 8] = this.ns(this.a6 - 4, 1);
            this.l0[this.a6 - 3] = this.l0[39];
            this.l0[this.a6 - 2] = this.ns(this.a6 - 3, 1);
            this.l0[this.a6 - 7] = this.ns(this.a6 - 2, 1);
            this.l0[this.a6 - 6] = this.ns(this.a6 - 7, 1)
        }
            ;
        this.ns = function (g, k) {
            var x = document.createElement("canvas");
            x.width = this.c1;
            x.height = this.c1;
            var l = x.getContext("2d", {
                alpha: !0
            });
            l.clearRect(0, 0, this.c1, this.c1);
            l.rotate(k * Math.PI / 2);
            l.drawImage(this.l0[g], 1 === k ? 0 : -this.c1, -this.c1);
            return x
        }
            ;
        this.nt = function () {
            var g = u().split("");
            if (2 * g.length !== this.a6)
                this.lY = 0;
            else {
                for (var k = 0; k < this.a6; k += 2) {
                    var x = parseInt(g[Math.floor(k / 2)]);
                    this.a7[k] = 1 === x % 2;
                    this.a7[k + 1] = 1 < x
                }
                this.nw()
            }
        }
            ;
        this.nw = function () {
            for (var g = this.lY = 0; g < this.a6; g++)
                this.a7[g] && (this.nl[this.lY++] = g)
        }
            ;
        this.lD = function () {
            8 === this.lY && this.nl[0] === this.ne && this.nw()
        }
            ;
        this.nx = function () {
            this.lY = this.nd;
            for (var g = 0; g < this.nd; g++)
                this.nl[g] = this.ne + g
        }
            ;
        this.no = function () {
            this.nf = Math.floor((q ? .075 : .0468) * bq);
            this.zoom = this.nf / this.c1;
            this.ng = (1 + this.nk) * this.nf
        }
            ;
        this.show = function (g, k) {
            if (1 > this.lY)
                return !1;
            this.nm = c4.gY;
            var x = Math.floor(gA / this.ng);
            x = 3 > x ? 3 : x > this.nh ? this.nh : x;
            x = this.lY > x ? x : this.lY;
            var l = 1 + as(this.lY - 1, x)
                , t = Math.floor(x * this.ng)
                , n = Math.floor(g - t / 2);
            n = n + t > gA ? gA - t : n;
            n = 0 > n ? 0 : n;
            var z = Math.floor(k - this.ng / 2);
            l = Math.floor(l * this.ng);
            z = z + l > cB ? cB - l : z;
            z = 0 > z ? 0 : z;
            this.f5 = n + t;
            this.f6 = z + l;
            for (t = 0; t < this.lY; t++)
                this.ni[t] = Math.floor(n + t % x * this.ng),
                    this.nj[t] = Math.floor(z + as(t, x) * this.ng);
            return !0
        }
            ;
        this.lB = function (g, k) {
            return !(g < this.ni[0] || k < this.nj[0] || g >= this.f5 || k >= this.f6)
        }
            ;
        this.lC = function (g, k, x) {
            if (x === aw && this.nm + 190 > c4.gY)
                return !1;
            for (var l = this.lY - 1; 0 <= l; l--)
                if (g >= this.ni[l] && k >= this.nj[l]) {
                    if (39 === this.nl[l])
                        return this.nx(),
                            this.show(g, k),
                            !0;
                    dt ? e6.mv(aw, 0, this.nl[l]) : x === aw ? ii.o1(this.nl[l]) : ii.o2(this.nl[l], x);
                    this.nw();
                    break
                }
            return !1
        }
            ;
        this.o3 = function (g) {
            return 16 > g || 40 <= g && 47 > g
        }
            ;
        this.o4 = function (g) {
            return g >= this.nb && g < this.nb + this.nc
        }
            ;
        this.cG = function () {
            cH.imageSmoothingEnabled = !0;
            for (var g = this.nk * this.nf / 2, k = this.lY - 1; 0 <= k; k--)
                cH.setTransform(this.zoom, 0, 0, this.zoom, this.ni[k] + g, this.nj[k] + g),
                    cH.drawImage(this.l0[this.nl[k]], 0, 0);
            cH.imageSmoothingEnabled = !1;
            cH.setTransform(1, 0, 0, 1, 0, 0)
        }
            ;
        this.o5 = function (g, k, x) {
            cH.imageSmoothingEnabled = !0;
            cH.setTransform(this.zoom, 0, 0, this.zoom, g, k);
            cH.drawImage(this.l0[x], 0, 0);
            cH.imageSmoothingEnabled = !1;
            cH.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    var gD = "rgb(0,0,0)", o6 = "rgba(0,0,0,0.7)", o7 = "rgba(0,0,0,0.5)", ls = "rgba(0,0,0,0.5)", hq = "rgba(0,0,0,0.75)", o8 = "rgba(0,0,0,0.85)", o9 = "rgba(0,96,96,0.75)", oA = "rgb(255,255,255)", m6 = "rgb(128,128,128)", oB = "rgb(30,255,30)", oC = "rgb(0,200,0)", oD = "rgb(0,255,0)", oE = "rgba(0,255,0,0.6)", oF = "rgba(0,255,0,0.5)", oG = "rgba(0,200,0,0.5)", mR = "rgba(0,100,0,0.75)", oH = "rgba(0,40,0,0.8)", oI = "rgb(128,255,128)", oJ = "rgba(255,255,150,0.2)", oK = "rgba(0,255,0,0.3)", lt = "rgba(255,255,255,0.3)", oL = "rgba(0,40,90,0.75)", oM = "rgba(220,0,0,0.6)", oN = "rgba(255,100,100,0.8)", mh = "rgba(100,0,0,0.85)", oO = "rgba(60,0,0,0.85)", oP = "rgb(255,120,120)", oQ = "rgb(255,160,160)", oR = "rgb(255,70,70)", oS = "rgb(230,0,0)", oT = "rgba(0,60,60,0.85)", oU = "rgb(160,160,255)", cK = "rgb(255,255,255)", oV = "rgba(255,255,255,0.6)", oW = "rgba(255,255,255,0.4)", nQ = "rgba(255,255,255,0.25)", oX = "rgba(255,255,255,0.85)", oY = "rgba(255,255,255,0.75)", oZ = "rgb(255,120,100)", oa = "rgba(255,255,0,0.5)", cI = "middle", ob = "bottom", cJ = "center", mZ = "left", oc = "right", bt = "bold ", od = "italic ", oe = "normal ", bu = "px Arial", of = [bt, od + bt, bt], og = "https://play.google.com/store/apps/details?id=territorial.io", oh = "https://apps.apple.com/app/id1581110913", oi = "https://www.youtube.com/watch?v=toZTQ8aRdFc", oj = "https://discord.gg/pthqvpTXmh", ok = "https://www.instagram.com/davidtschacher/", nO = "https://fxclient.cf/cookie_policy", ol = "https://fxclient.cf/privacy_policy", om = "https://territorial.io/tutorial", on = ["https://territorial.io/players", "https://territorial.io/clans"], m0, oo, cA, op, oq, or, os, cC, ot = ["wss://", "/s50/", "/s51/", "/s52/"];
    function ou() {
        ov();
        op = 3;
        cC = new ow;
        cC.bp()
    }
    function ox() {
        oy.addEventListener("mousedown", oz);
        oy.addEventListener("mousemove", p0);
        oy.addEventListener("mouseup", p1);
        oy.addEventListener("click", p2);
        oy.addEventListener("mouseleave", p3);
        oy.addEventListener("wheel", p4);
        oy.addEventListener("touchstart", p5);
        oy.addEventListener("touchmove", p6);
        oy.addEventListener("touchend", p7);
        oy.addEventListener("touchcancel", p8);
        oy.addEventListener("dragover", p9);
        oy.addEventListener("drop", pA);
        oq = !1
    }
    function ov() {
        cA = Math.floor((q ? .02 : .01152) * bq);
        cA = 2 > cA ? 2 : cA;
        m0 = Math.floor((q ? .0114 : .01296) * bq);
        m0 = 2 > m0 ? 2 : m0;
        oo = Math.floor(.005 * pB);
        oo = 1 > oo ? 1 : oo
    }
    function oz(g) {
        g.preventDefault();
        oq || (e9.pD(e9.jV),
            pE(Math.floor(pF * g.clientX), Math.floor(pF * g.clientY)))
    }
    function p5(g) {
        g.preventDefault();
        e9.pD(e9.jV);
        oq = !0;
        0 < g.touches.length && (or = Math.floor(pF * g.touches[0].clientX),
            os = Math.floor(pF * g.touches[0].clientY),
            jh.pG(g) || pE(or, os))
    }
    function pE(g, k) {
        if (0 === fV)
            aJ.c7(g, k);
        else if (!(hn.c7(g, k) || hm.l6(g, k) || eS.c7(g, k) || eL.c7(g, k))) {
            var x = fm.c7(g, k);
            2 === x || eI.c7(g, k) || (gf.c7(g, k) ? c4.c5 = !0 : eN.pI(g, k) ? (gf.gg = !1,
                eN.pJ(g, k) && (c4.c5 = !0)) : e5.c7(g, k) || eO.c7(g, k) || 0 === x && hm.l8(g, k))
        }
    }
    function p0(g) {
        oq = !1;
        g.preventDefault();
        pK(Math.floor(pF * g.clientX), Math.floor(pF * g.clientY))
    }
    function p6(g) {
        g.preventDefault();
        0 < g.touches.length && (or = Math.floor(pF * g.touches[0].clientX),
            os = Math.floor(pF * g.touches[0].clientY),
            jh.pL(g) || pK(or, os))
    }
    function pK(g, k) {
        0 === fV ? aJ.lh(g, k) : hn.lh(g) || (hm.l7() ? hm.lh(g, k) : fm.lh(g, k) || (eN.pM ? eN.lh(g, k) && (c4.c5 = !0) : (eI.lh(g, k),
            gf.gg && gf.lh(g, k) && (c4.c5 = !0))))
    }
    function p3(g) {
        g.preventDefault();
        0 === fV ? (aJ.click(-1024, -1024),
            jZ.pN()) : (eI.pO(-1024, -1024),
                fm.lh(-1024, -1024),
                eN.pP(),
                gf.gg && (gf.gg = !1))
    }
    function p1(g) {
        g.preventDefault();
        oq || pQ(Math.floor(pF * g.clientX), Math.floor(pF * g.clientY))
    }
    function p2(g) {
        2 === aJ.pR() && du.click(g.clientX, g.clientY)
    }
    function p7(g) {
        g.preventDefault();
        g && g.touches && 0 < g.touches.length && 0 !== fV ? gf.gg = !1 : pQ(or, os)
    }
    function p8(g) {
        g.preventDefault();
        pQ(or, os)
    }
    function p9(g) {
        jo.pS(g)
    }
    function pA(g) {
        jo.pT(g)
    }
    function pQ(g, k) {
        0 === fV ? aJ.click(g, k) : (eI.pO(g, k),
            hn.pO(),
            eN.pP(),
            gf.gg = !1,
            hm.click(g, k) && (c4.c5 = !0))
    }
    function p4(g) {
        g.preventDefault();
        e9.pD(e9.jV);
        var k = Math.floor(pF * g.clientX)
            , x = Math.floor(pF * g.clientY)
            , l = g.deltaY;
        1 === g.deltaMode && (l *= 20);
        0 === fV ? aJ.pU(k, x, l) : eI.pU(k, x, l) || (eN.pI(k, x) ? eN.pU(l) && (c4.c5 = !0) : gf.pU(k, x, 2 * l) && (c4.c5 = !0))
    }
    function pV(g, k, x) {
        g.fillStyle = cK;
        g.fillRect(0, 0, k, 1);
        g.fillRect(0, x - 1, k, 1);
        g.fillRect(0, 0, 1, x);
        g.fillRect(k - 1, 0, 1, x)
    }
    function jv() {
        function g(C) {
            var F = n[C].ll.width;
            n[C].hp.clearRect(0, 0, F, A);
            n[C].hp.fillStyle = 0 !== n[C].id ? "rgba(33,33,120,0.83)" : n[C].cM === b8 ? "rgba(88,88,88,0.83)" : n[C].cM < cq ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)";
            n[C].hp.fillRect(0, 0, F, A);
            pV(n[C].hp, F, A);
            F > z + 2 * A && (n[C].hp.fillRect(F - z - A, 0, 1, A),
                n[C].hp.fillText(gE[n[C].cM], Math.floor((F - z) / 2), Math.floor(.57 * A)));
            var E = 0 !== n[C].id ? 0 : A;
            n[C].hp.fillText(eL.gF(n[C].cN), Math.floor(F - z / 2 - E), Math.floor(.57 * A));
            n[C].hp.fillStyle = oV;
            n[C].hp.fillRect(Math.floor(F - z - E), A - B, Math.floor(z * n[C].cN / n[C].pk), B);
            0 === n[C].id ? (k(C, F),
                n[C].hp.strokeStyle = oI,
                n[C].hp.fillRect(A, 0, 1, A),
                F -= A,
                n[C].hp.beginPath(),
                n[C].hp.moveTo(Math.floor(.3 * A + F), Math.floor(A / 2)),
                n[C].hp.lineTo(Math.floor(A - .3 * A + F), Math.floor(A / 2)),
                n[C].hp.stroke(),
                n[C].hp.beginPath(),
                n[C].hp.moveTo(Math.floor(A / 2 + F), Math.floor(.3 * A)),
                n[C].hp.lineTo(Math.floor(A / 2 + F), Math.floor(A - .3 * A)),
                n[C].hp.stroke()) : k(C, 2 * A)
        }
        function k(C, F) {
            n[C].hp.strokeStyle = n[C].pl ? m6 : oQ;
            n[C].hp.fillStyle = cK;
            n[C].hp.fillRect(F - A, 0, 1, A);
            var E = Math.floor(A / 12);
            n[C].hp.lineWidth = 3 > E ? 3 : E;
            n[C].hp.lineCap = "round";
            F = A + 1;
            n[C].hp.beginPath();
            n[C].hp.moveTo(Math.floor(F - .35 * A), Math.floor(.35 * A));
            n[C].hp.lineTo(Math.floor(F - A + .35 * A), Math.floor(A - .35 * A));
            n[C].hp.stroke();
            n[C].hp.beginPath();
            n[C].hp.moveTo(Math.floor(F - A + .35 * A), Math.floor(.35 * A));
            n[C].hp.lineTo(Math.floor(F - .35 * A), Math.floor(A - .35 * A));
            n[C].hp.stroke()
        }
        function x(C) {
            C.ll = document.createElement("canvas");
            pc.font = y;
            var F = z;
            C.cM < b8 && 0 === C.id && (F += Math.floor(pc.measureText(gE[C.cM] + "000").width));
            F += A;
            0 === C.id && (F += A);
            C.ll.width = F;
            C.ll.height = A;
            C.hp = C.ll.getContext("2d", {
                alpha: !0
            });
            C.hp.font = y;
            C.hp.textBaseline = cI;
            C.hp.textAlign = cJ
        }
        function l(C) {
            return eK.q6() ? gA - n[C].ll.width - m0 : eK.fF
        }
        function t(C) {
            return Math.floor(2 * m0 + (eK.q6() ? e7.cw + m0 : 0) + eK.cw + 1.3 * C * A)
        }
        var n, z, y, A, B;
        this.bp = function () {
            n = [];
            this.lq()
        }
            ;
        this.lq = function () {
            y = e5.c0;
            A = e5.by + 5;
            A = Math.floor(1.25 * A);
            q && (A = Math.floor(1.25 * A));
            B = Math.floor(.15 * A);
            pc.font = y;
            z = Math.floor(pc.measureText("02 000 000 0000").width);
            for (var C = n.length - 1; 0 <= C; C--)
                x(n[C]),
                    g(C)
        }
            ;
        this.eX = function () {
            for (var C = n.length - 1; 0 <= C; C--)
                n[C].pf && (n[C].pf = !1,
                    g(C))
        }
            ;
        this.gF = function (C) {
            if (1E3 > C)
                return 0 > C ? "-" + this.gF(Math.abs(C)) : C.toString();
            var F = Math.floor(Math.log(C + .5) / Math.log(10)) + 1
                , E = Math.floor((F - 1) / 3);
            C = C.toString();
            for (var H = C.substring(F - 3, F), J = 1; J < E; J++)
                H = C.substring(F - 3 * (J + 1), F - 3 * J) + " " + H;
            return C.substring(0, F - 3 * E) + " " + H
        }
            ;
        this.c7 = function (C, F) {
            if (2 === fV || 0 === fB[aw] || j0 || !hm.l9(aw))
                return !1;
            var E, H = q ? A : 0, J = q ? Math.floor(.15 * A) : 0;
            for (E = n.length - 1; 0 <= E; E--) {
                var K = l(E);
                var D = t(E);
                var L = n[E].ll.width;
                if (F >= D - J && F <= D + A + J) {
                    if (C >= K - H && C <= K + A + H)
                        return n[E].pl || (n[E].pf = !0,
                            n[E].pl = !0,
                            0 === n[E].id ? dt ? eC.fJ(aw, n[E].cM) : ii.pz(n[E].cM === b8 ? aw : n[E].cM) : dt ? eC.fL(aw, n[E].id) : ii.q0(n[E].id)),
                            !0;
                    if (0 === n[E].id && C >= K + L - A - H && C <= K + L + H)
                        return dt ? fH(aw, n[E].cM, eN.lO()) : ii.lP(eN.lO(), n[E].cM === b8 ? aw : n[E].cM),
                            !0
                }
            }
            return !1
        }
            ;
        this.dF = function () {
            if (2 !== fV && 0 !== fB[aw] && !j0 && hm.l9(aw)) {
                var C = ae.af(aw);
                b: if (n.length !== C)
                    var F = !0;
                else {
                    for (F = C - 1; 0 <= F; F--)
                        if (n[F].id !== ae.ag(aw, F) || n[F].cM !== ae.al(aw, F)) {
                            F = !0;
                            break b
                        }
                    F = !1
                }
                if (F) {
                    var E, H = [];
                    F = 0;
                    b: for (; F < C; F++) {
                        var J = ae.ag(aw, F);
                        var K = ae.al(aw, F);
                        for (E = 0; E < n.length; E++)
                            if (n[E].id === J && n[E].cM === K) {
                                H.push(n.splice(E, 1)[0]);
                                continue b
                            }
                        E = ae.am(aw, F);
                        J = {
                            cM: K,
                            cN: E,
                            pk: E,
                            id: J,
                            pf: !0,
                            pl: !1,
                            ll: null,
                            hp: null
                        };
                        x(J);
                        H.push(J)
                    }
                    n = H
                }
                for (--C; 0 <= C; C--)
                    F = ae.am(aw, C),
                        n[C].cN !== F && (n[C].cN = F,
                            n[C].pk = F > n[C].pk ? F : n[C].pk,
                            n[C].pf = !0)
            }
        }
            ;
        this.cG = function () {
            if (0 !== fB[aw] && hm.l9(aw) && !j0)
                for (var C = n.length - 1; 0 <= C; C--)
                    cH.drawImage(n[C].ll, l(C), t(C))
        }
    }
    function jw() {
        function g() {
            cH.drawImage(K, m0 + (dA ? m0 + eP.qK() : 0), qL + 2 * m0)
        }
        function k() {
            K.width = l[0].width + H;
            K.height = y + H;
            D = K.getContext("2d", {
                alpha: !0
            });
            D.clearRect(0, 0, l[0].width + H, y + H);
            D.translate(Math.floor(H / 2), Math.floor(H / 2));
            D.lineWidth = H;
            D.fillStyle = 1 === l[0].qI ? oX : hq;
            x();
            D.fill();
            D.strokeStyle = 1 === l[0].qI ? gD : cK;
            x();
            D.stroke();
            D.textAlign = cJ;
            D.textBaseline = cI;
            D.fillStyle = 1 === l[0].qI ? gD : cK;
            D.font = A[0];
            D.fillText(F[l[0].qH], Math.floor(l[0].width / 2), Math.floor(.72 * C[0] * y));
            D.font = A[1];
            D.fillText(l[0].l, Math.floor(l[0].width / 2), Math.floor((C[0] + .48 * C[1]) * y))
        }
        function x() {
            D.beginPath();
            D.moveTo(J, 0);
            D.lineTo(l[0].width - J, 0);
            D.lineTo(l[0].width, J);
            D.lineTo(l[0].width, y - J);
            D.lineTo(l[0].width - J, y);
            D.lineTo(J, y);
            D.lineTo(0, y - J);
            D.lineTo(0, J);
            D.closePath()
        }
        var l, t, n, z, y, A, B, C, F, E, H, J, K, D, L, I;
        this.bp = function () {
            L = 0;
            t = 4;
            n = z = 0;
            l = [];
            A = Array(2);
            B = Array(2);
            C = Array(2);
            F = ["YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:"];
            C[0] = .3;
            C[1] = .7;
            E = Array(4);
            K = document.createElement("canvas");
            I = c4.gY + 2E3;
            this.lq()
        }
            ;
        this.lq = function () {
            var N;
            y = Math.floor((q ? .0725 : .058) * bq);
            B[0] = Math.floor(.85 * C[0] * y);
            B[1] = Math.floor(.85 * C[1] * y);
            A[0] = bt + B[0] + bu;
            A[1] = bt + B[1] + bu;
            for (N = E.length - 1; 0 <= N; N--)
                E[N] = this.measureText(F[N] + "000", A[0]);
            H = Math.floor(1 + .05 * y);
            J = Math.floor(.2 * y);
            if (0 < l.length) {
                for (N = l.length - 1; 0 <= N; N--) {
                    var G = this.measureText(l[N].l + "00", A[1]);
                    l[N].width = G < E[N] ? E[N] : G
                }
                k()
            }
        }
            ;
        this.dF = function () {
            if (0 !== t)
                if (4 === t)
                    c4.gY > I && (t = 0,
                        1 === fV && c2.mq(jf.n6(), 3, 1, 9));
                else {
                    if (1 === t)
                        0 === n && (k(),
                            n = 1E-4),
                            n += .002 * (c4.gY - L),
                            1 <= n && (z = 0,
                                t = 2,
                                n = 1),
                            c4.c5 = !0;
                    else if (2 === t) {
                        if (z += (c4.gY - L) / 1E3,
                            z > l[0].gX || 1 < z && 1 < l.length)
                            t = 3
                    } else
                        3 === t && (n -= .002 * (c4.gY - L),
                            0 >= n && (n = 0,
                                l.shift(),
                                t = 0 < l.length ? 1 : 0),
                            c4.c5 = !0);
                    L = c4.gY
                }
        }
            ;
        this.measureText = function (N, G) {
            cH.font = G;
            return Math.floor(cH.measureText(N).width)
        }
            ;
        this.cQ = function (N, G) {
            this.mq(gE[N], G, 1, 0 === G ? 3 : 7)
        }
            ;
        this.mq = function (N, G, M, Q) {
            var R = this.measureText(N + "00", A[1]);
            R = R < E[G] ? E[G] : R;
            l.push({
                l: N,
                width: R,
                qH: G,
                qI: M,
                gX: Q
            });
            0 === t && (n = 0,
                t = 1,
                L = c4.gY)
        }
            ;
        this.cG = function () {
            0 !== t && 0 !== n && (1 > n ? (cH.globalAlpha = n,
                g(),
                cH.globalAlpha = 1) : g())
        }
    }
    function ka() {
        function g() {
            var D = eO.c1;
            F = !1;
            ho(n, D, l);
            var L = Math.floor(D / 2);
            1 === y ? (n.fillStyle = oE,
                n.fillRect(L, 0, L, l)) : -1 === y && (n.fillStyle = oM,
                    n.fillRect(0, 0, L, l));
            hr(n, D, l, 2);
            L = Math.floor(.25 * l);
            L = 2 > L ? 2 : L;
            n.fillStyle = oY;
            var I = Math.floor((l - 4) * A[1] / B[1]);
            0 < I && n.fillRect(2, l - 2 - I, L, I);
            I = Math.floor((l - 4) * A[0] / B[0]);
            0 < I && n.fillRect(D - 2 - L, l - 2 - I, L, I);
            L = Math.floor(l / 8);
            L = 2 > L ? 2 : L;
            ht(n, Math.floor(.4 * l), 0, l, L, .5, !1);
            ht(n, Math.floor(D - 1.4 * l), 0, l, L, .5, !0);
            n.drawImage(z, Math.floor((D - z.width) / 2), 3)
        }
        function k() {
            F = !0;
            E = 140;
            y = 0;
            C = [];
            eO.l7 = !1;
            A[0] = A[1] = 0
        }
        function x() {
            return eN.mV(e5.mS()) ? eN.fG - l - m0 : s - l - (q ? 2 : 1) * m0
        }
        var l, t, n, z, y, A, B, C, F, E, H, J, K;
        this.bp = function () {
            J = K = 0;
            F = this.l7 = !1;
            E = 140;
            y = 0;
            A = [0, 0];
            B = [1, 1];
            C = [];
            H = new Uint32Array(10);
            this.lq()
        }
            ;
        this.lq = function () {
            l = eN.cw;
            this.c1 = 4 * l;
            this.qW();
            t = document.createElement("canvas");
            t.width = this.c1;
            t.height = l;
            n = t.getContext("2d", {
                alpha: !0
            });
            g()
        }
            ;
        this.eX = function () {
            F && g()
        }
            ;
        this.qW = function () {
            var D = l - 6;
            D = 6 > D ? 6 : D;
            if (void 0 === z || z.width !== D) {
                z = document.createElement("canvas");
                z.width = D;
                z.height = D;
                var L = z.getContext("2d", {
                    alpha: !0
                });
                L.clearRect(0, 0, D, D);
                var I = Math.floor(D / 8);
                I = 1 > I ? 1 : I;
                L.lineWidth = I;
                L.strokeStyle = cK;
                var N = Math.floor(D / 2);
                D = Math.floor((D - I) / 2);
                L.beginPath();
                L.arc(N, N, D, 0, 2 * Math.PI);
                L.moveTo(N, N - D);
                L.lineTo(N, N + D);
                L.moveTo(N + Math.cos(.78 * Math.PI) * D, N + Math.cos(.28 * Math.PI) * D);
                L.lineTo(N, N);
                L.lineTo(N + Math.cos(.22 * Math.PI) * D, N + Math.cos(1.72 * Math.PI) * D);
                L.stroke()
            }
        }
            ;
        this.c7 = function (D, L) {
            if (D < r - this.c1 - m0)
                return !1;
            var I = x();
            if (L < I || L > I + l)
                return !1;
            I = D > r - m0 - this.c1 / 2;
            dt ? this.fT(0, I) : hm.l9(aw) && 0 !== fB[aw] && ii.qZ(I);
            return !0
        }
            ;
        this.dF = function () {
            if (0 < K)
                K--,
                    0 === K && k();
            else if (this.l7) {
                E--;
                var D;
                if (D = 270 === E && 2 <= J)
                    a: {
                        for (D = dY - 1; 0 <= D; D--)
                            if (hm.l9(dZ[D])) {
                                D = !1;
                                break a
                            }
                        D = !0
                    }
                D && (F = !0,
                    A[0] += B[0]);
                180 === E && 3 * A[0] < B[0] ? k() : A[0] >= B[0] ? fe.ff(-1) : A[1] >= B[1] ? K = 4 : 0 >= E && k()
            } else {
                for (D = 9; 0 <= D; D--)
                    12 < Math.abs(H[D] - bU[ei[D]]) && (E = 140),
                        H[D] = bU[ei[D]];
                D = 0 >= --E ? !0 : !1;
                if (D) {
                    this.l7 = !0;
                    E = 360;
                    var L = 0;
                    for (D = dY - 1; 0 <= D; D--)
                        hm.l9(dZ[D]) && (L += bU[dZ[D]]);
                    B[0] = mU(as(3 * L, 5), 1);
                    dA && 9 !== dr && (B[0] = qe(mU(as(L * (100 - as(100 * eP.qf(), j1)), 100), 1), B[0]));
                    B[1] = mU(L - B[0], 1);
                    J++
                }
            }
        }
            ;
        this.im = function () {
            this.l7 && A[0] < B[0] && k()
        }
            ;
        this.fT = function (D, L) {
            var I;
            if (this.l7) {
                for (I = C.length - 1; 0 <= I; I--)
                    if (C[I] === D)
                        return;
                C.push(D);
                F = !0;
                I = dt ? B[0] : bU[D];
                L ? A[0] += I : A[1] += I;
                D === aw && (y = L ? 1 : -1)
            }
        }
            ;
        this.cG = function () {
            if (this.l7) {
                var D = x();
                cH.drawImage(t, r - this.c1 - m0, D)
            }
        }
    }
    function jx() {
        function g() {
            if (C < 1 / 3) {
                var K = Math.floor(540 * C);
                return "rgba(" + K + ",180,0,0.75)"
            }
            if (C < 2 / 3)
                return K = Math.floor(540 * (C - 1 / 3)),
                    "rgba(180," + (180 - K) + ",0,0.75)";
            K = Math.floor(540 * (C - 2 / 3));
            return "rgba(180,0," + K + ",0.75)"
        }
        function k() {
            A.clearRect(0, 0, t, eN.cw);
            var K = Math.floor(C * (t - 2 * z));
            A.fillStyle = hq;
            A.fillRect(0, 0, z, eN.cw);
            A.fillRect(z + K, 0, t - z - K, eN.cw);
            A.fillStyle = g();
            A.fillRect(z, 0, K, eN.cw);
            A.fillStyle = cK;
            A.fillRect(0, 0, t, 1);
            A.fillRect(0, eN.cw - 1, t, 1);
            A.fillRect(0, 0, 1, eN.cw);
            A.fillRect(z, 0, 1, eN.cw);
            A.fillRect(z + K, 0, 1, eN.cw);
            A.fillRect(t - z, 0, 1, eN.cw);
            A.fillRect(t - 1, 0, 1, eN.cw);
            K = 1 + Math.floor(.0625 * eN.cw);
            var D = 1 + Math.floor(.3 * eN.cw);
            A.fillRect(Math.floor(.25 * eN.cw) + D, Math.floor((eN.cw - K) / 2), eN.cw - 2 * D, K);
            A.fillRect(Math.floor(t - 1.25 * eN.cw) + D, Math.floor((eN.cw - K) / 2), eN.cw - 2 * D - D % 2, K);
            A.fillRect(Math.floor(t - 1.25 * eN.cw) + Math.floor((eN.cw - K) / 2), D, K, eN.cw - 2 * D - D % 2);
            F = Math.floor(ax[aw] * C);
            A.fillText(eL.gF(F), Math.floor(t / 2), Math.floor(.55 * eN.cw))
        }
        function x(K) {
            if (1 < K && 0 === C)
                return C = .01,
                    k(),
                    !0;
            if (1 < K && 1 === C || 0 === C)
                return !1;
            C *= K;
            C = 1 < C ? 1 : 0 > C ? 0 : C;
            k();
            return !0
        }
        function l(K) {
            var D = C;
            C = (K - n - z) / (t - 2 * z);
            C = 0 > C ? 0 : C;
            C = 1 < C ? 1 : C;
            return D !== C ? (k(),
                !0) : !1
        }
        var t, n, z, y, A, B, C, F, E, H, J = 11 / 12;
        this.bp = function () {
            B = !fY;
            H = !1;
            C = .5;
            F = 0;
            this.pM = !1;
            this.lq()
        }
            ;
        this.lq = function () {
            q && r < .8 * s ? (this.cw = Math.floor(.0536 * bq),
                t = r - 4 * m0 - this.cw) : (t = Math.floor((q ? .65 : .389) * bq),
                    t += 12 - t % 12,
                    this.cw = Math.floor(t / 12));
            z = Math.floor(3 * this.cw / 2);
            E = bt + Math.floor(.5 * this.cw) + bu;
            y = document.createElement("canvas");
            y.width = t;
            y.height = this.cw;
            A = y.getContext("2d", {
                alpha: !0
            });
            A.font = E;
            A.textBaseline = cI;
            A.textAlign = cJ;
            this.ql();
            k()
        }
            ;
        this.ql = function () {
            n = q && r < .8 * s ? this.cw + 3 * m0 : Math.floor((gA - t) / 2);
            this.fG = cB - this.cw - (q ? 2 : 1) * m0
        }
            ;
        this.eX = function () {
            H && (H = !1,
                k())
        }
            ;
        this.l7 = function () {
            return !(!B || fm.lp && n < Math.floor(m0 + 5.5 * this.cw))
        }
            ;
        this.mV = function (K) {
            return this.l7() ? n + t > r - K - m0 : !1
        }
            ;
        this.cE = function () {
            B = !0
        }
            ;
        this.qa = function () {
            B = !1
        }
            ;
        this.lO = function () {
            var K = Math.floor(1E3 * C);
            return 0 >= K ? 1 : 1E3 < K ? 1E3 : K
        }
            ;
        this.pI = function (K, D) {
            return this.l7() && K > n && K < n + t && D > this.fG
        }
            ;
        this.pJ = function (K, D) {
            if (!this.l7())
                return !1;
            if (K > n && K < n + z && D > eN.fG)
                return x(J);
            if (K > n + t - z && K < n + t && D > eN.fG)
                return x(1 / J);
            this.pM = !0;
            return l(K)
        }
            ;
        this.qw = function (K) {
            0 !== fV && this.l7() && x(K) && (c4.c5 = !0)
        }
            ;
        this.pU = function (K) {
            if (0 === K || !this.l7())
                return !1;
            0 < K ? (K = 400 / (400 + K),
                K = K < J ? J : K) : (K = (400 - K) / 400,
                    K = K > 1 / J ? 1 / J : K);
            return x(K)
        }
            ;
        this.lh = function (K, D) {
            return this.pM ? l(K, D) : !1
        }
            ;
        this.pP = function () {
            this.pM = !1
        }
            ;
        this.dF = function () {
            this.l7() && Math.floor(ax[aw] * C) !== F && (H = !0)
        }
            ;
        this.cG = function () {
            this.l7() && cH.drawImage(y, n, this.fG)
        }
    }
    var g3, g8, g9;
    function jy() {
        var g, k, x, l, t, n, z;
        this.bp = function () {
            g = Array(2);
            k = Array(2);
            this.gg = !1;
            z = n = g9 = g8 = 0;
            g3 = 1;
            this.lq()
        }
            ;
        this.lq = function () {
            x = Math.floor((q ? .072 : .0502) * bq);
            x = 8 > x ? 8 : x;
            for (var y = 1; 0 <= y; y--)
                g[y] = document.createElement("canvas"),
                    g[y].width = x,
                    g[y].height = x,
                    k[y] = g[y].getContext("2d", {
                        alpha: !0
                    });
            this.ql();
            y = Math.floor(1 + x / 20);
            for (var A = 1; 0 <= A; A--)
                k[A].clearRect(0, 0, x, x),
                    k[A].fillStyle = o6,
                    k[A].beginPath(),
                    k[A].arc(x / 2, x / 2, x / 2 - y, 0, 2 * Math.PI),
                    k[A].fill(),
                    k[A].lineWidth = y,
                    k[A].fillStyle = oA,
                    k[A].strokeStyle = oA,
                    k[A].beginPath(),
                    k[A].arc(x / 2, x / 2, x / 2 - y, 0, 2 * Math.PI),
                    k[A].stroke(),
                    ht(k[A], 0, 0, x, y, .3, 0 === A)
        }
            ;
        this.gB = function () {
            return -g8 / g3
        }
            ;
        this.cF = function () {
            return -g9 / g3
        }
            ;
        this.gs = function (y, A) {
            g8 = g3 * y - A
        }
            ;
        this.gt = function (y, A) {
            g9 = g3 * y - A
        }
            ;
        this.c7 = function (y, A) {
            if (Math.pow(y - (l + x / 2), 2) + Math.pow(A - (t + x / 2), 2) < x * x / 4 || Math.pow(y - (l + x / 2), 2) + Math.pow(A - (t + 2 * x), 2) < x * x / 4)
                return A < t + 1.25 * x ? this.pU(Math.floor(gA / 2), Math.floor(cB / 2), -200) : this.pU(Math.floor(gA / 2), Math.floor(cB / 2), 200);
            eR.gw() && (this.gg = !0,
                n = y,
                z = A);
            return !1
        }
            ;
        this.lh = function (y, A) {
            if (!eR.gw())
                return !0;
            var B = g8
                , C = g9
                , F = n - y
                , E = z - A;
            g8 += F;
            g9 += E;
            e6.lh(F, E);
            this.rB();
            n = y;
            z = A;
            return B !== g8 || C !== g9
        }
            ;
        this.pU = function (y, A, B) {
            if (!eR.gw())
                return !0;
            if (0 < B)
                B = 450 / (450 + B),
                    B = .5 > B ? .5 : B;
            else if (0 > B)
                B = (450 - B) / 450,
                    B = 2 < B ? 2 : B;
            else
                return !1;
            this.rC(y, A, B);
            return !0
        }
            ;
        this.rC = function (y, A, B) {
            B = 1024 < B * g3 ? 1024 / g3 : B;
            B = .125 > B * g3 ? .125 / g3 : B;
            e6.zoom(B, y, A);
            g3 *= B;
            g8 = (g8 + y) * B - y;
            g9 = (g9 + A) * B - A;
            gf.rB()
        }
            ;
        this.rB = function () {
            var y = r / 16
                , A = 0
                , B = s / 16
                , C = 0;
            g8 < -r + y && (A = -r + y - g8);
            g8 > g3 * aZ - y && (A = g3 * aZ - y - g8);
            g9 < -s + B && (C = -s + B - g9);
            g9 > g3 * aa - B && (C = g3 * aa - B - g9);
            g8 += A;
            g9 += C;
            gu.gv();
            e6.rJ(A, C)
        }
            ;
        this.ql = function () {
            l = gA - x - m0;
            t = Math.floor(cB / 2 - 1.25 * x)
        }
            ;
        this.cG = function () {
            cH.drawImage(g[0], l, t);
            cH.drawImage(g[1], l, Math.floor(t + 3 * x / 2))
        }
    }
    function jz() {
        function g() {
            A = Math.floor(.2 * (q ? .07 : .035) * bq);
            A = mU(q ? 3 : 1, A);
            var P = r / (n.length + B);
            A = P > A ? P : A;
            G = Math.floor((1 - B) * A);
            z = 0;
            k()
        }
        function k() {
            z = -20 > z ? -20 : z;
            z = z > (n.length - 15) * A ? (n.length - 15) * A : z;
            F = Math.floor(z / A);
            E = F + Math.floor(gA / A);
            E = E > n.length - 1 ? n.length - 1 : E;
            F = E < F ? E : F;
            F = 0 > F ? 0 : F;
            var P = E;
            C = y / n[P];
            for (var U = E - 1; U >= F; U--)
                n[U] > n[P] && (P = U,
                    C = y / Math.pow(n[U], N))
        }
        function x(P) {
            P = Math.floor((z + gA - P - B * A) / A);
            P = -1 > P ? -1 : -1 === P ? 0 : P > n.length - 1 ? -1 : P;
            return P !== H ? (H = P,
                -1 === M && 0 === H && I && (M = setInterval(t, 100)),
                !0) : !1
        }
        function l(P) {
            var U = Math.floor(C * Math.pow(n[P], N));
            cH.fillRect(z + gA - (P + 1) * A, cB - U, G, U)
        }
        function t() {
            8 === aJ.pR() && (H = -1);
            if (0 !== H)
                Q = (new Date).getTime(),
                    clearInterval(M),
                    M = -1;
            else {
                var P = n[1] / 864E3;
                if (-1 !== Q) {
                    var U = (new Date).getTime();
                    P += (U - Q) * n[1] / 864E5;
                    Q = -1
                }
                0 < P && (n[0] += Math.floor(P),
                    c4.c5 = !0)
            }
        }
        var n, z, y, A, B, C, F, E, H, J, K, D, L, I, N, G, M, Q, R;
        this.bp = function () {
            Q = M = -1;
            I = !1;
            N = 1;
            H = -1;
            this.rZ = !1;
            L = 0;
            D = new Date;
            z = 0;
            B = .3;
            R = [];
            R.push({
                mm: "Plateau A",
                b3: 0,
                pC: 57
            });
            R.push({
                mm: "Max A",
                b3: 1,
                pC: 1
            });
            R.push({
                mm: "Black Friday",
                b3: 15,
                pC: 15
            });
            R.push({
                mm: "Max B",
                b3: 19,
                pC: 19
            });
            R.push({
                mm: "Max C",
                b3: 44,
                pC: 44
            });
            R.push({
                mm: "First Android Version",
                b3: 58,
                pC: 58
            });
            R.push({
                mm: "Max D",
                b3: 67,
                pC: 67
            });
            R.push({
                mm: "The iFrame Explosion",
                b3: 98,
                pC: 99
            });
            R.push({
                mm: "The 155-Day Uptrend",
                b3: 58,
                pC: 213
            });
            R.push({
                mm: "Max E",
                b3: 213,
                pC: 213
            });
            R.push({
                mm: "Plateau B",
                b3: 214,
                pC: 259
            });
            R.push({
                mm: "Turbulent Times",
                b3: 260,
                pC: 344
            });
            R.push({
                mm: "Max F",
                b3: 262,
                pC: 262
            });
            R.push({
                mm: "Max G",
                b3: 282,
                pC: 282
            });
            R.push({
                mm: "Max H",
                b3: 333,
                pC: 333
            });
            R.push({
                mm: "The 19-Day Downtrend",
                b3: 283,
                pC: 301
            });
            R.push({
                mm: "Plateau C",
                b3: 345,
                pC: 385
            });
            R.push({
                mm: "The Alliance Ascent",
                b3: 386,
                pC: 395
            });
            R.push({
                mm: "Max I",
                b3: 395,
                pC: 395
            });
            R.push({
                mm: "First iOS Version",
                b3: 411,
                pC: 411
            });
            R.push({
                mm: "Plateau D",
                b3: 396,
                pC: 453
            });
            R.push({
                mm: "The TikTok Revolution",
                b3: 454,
                pC: 470
            });
            R.push({
                mm: "Max J",
                b3: 456,
                pC: 456
            });
            R.push({
                mm: "Max K",
                b3: 472,
                pC: 472
            });
            R.push({
                mm: "Max L",
                b3: 478,
                pC: 478
            });
            R.push({
                mm: "YT Drew",
                b3: 471,
                pC: 485
            });
            R.push({
                mm: "Plateau E",
                b3: 485,
                pC: 600
            });
            R.push({
                mm: "Uptrend A",
                b3: 600,
                pC: 613
            });
            R.push({
                mm: "Max M",
                b3: 613,
                pC: 613
            });
            R.push({
                mm: "Downtrend A",
                b3: 614,
                pC: 635
            });
            R.push({
                mm: "Plateau F",
                b3: 636,
                pC: 737
            });
            R.push({
                mm: "End of Record",
                b3: 738,
                pC: 738
            });
            R.push({
                mm: "FX Client Beta",
                b3: 883,
                pC: 1000
            });
            R.push({
                mm: "FX Client",
                b3: 1000,
                pC: 1500
            });
            n = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535, 228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444, 195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919, 202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004, 178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937, 161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946, 243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019, 49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426, 19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047, 18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741, 26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011, 15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393, 12931E3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834, 20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238, 18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206, 15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460, 8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791, 8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076, 9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540, 6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544, 3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700, 991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472, 252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048, 51372, 61916, 43236, 55172, 26776, 47E3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444, 19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992, 20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176];
            this.lq();
            e9.rb(0, 0)
        }
            ;
        this.lq = function () {
            y = Math.floor(.15 * s);
            J = Math.floor((q ? .018 : .0137) * bq);
            J = 10 > J ? 10 : J;
            K = bt + J + bu;
            g()
        }
            ;
        this.rd = function () {
            I || ii.re()
        }
            ;
        this.rf = function (P) {
            var U;
            I = !0;
            for (U = 0; U < P.length; U++)
                n.unshift(P[U]);
            g();
            c4.c5 = !0
        }
            ;
        this.rj = function () {
            k()
        }
            ;
        this.lh = function (P, U) {
            U > cB - .6 * y ? this.rZ ? P !== L && (z += P - L,
                L = P,
                k(),
                x(P),
                this.rZ = -1 !== H,
                c4.c5 = !0) : x(P) && (c4.c5 = !0) : this.pN()
        }
            ;
        this.pN = function () {
            -1 !== H && (this.rZ = !1,
                H = -1,
                c4.c5 = !0)
        }
            ;
        this.pU = function (P, U) {
            -1 !== H && (z += Math.floor(U),
                k(),
                x(P),
                c4.c5 = !0)
        }
            ;
        this.c7 = function (P, U) {
            this.lh(P, U);
            -1 !== H && (L = P,
                this.rZ = !0)
        }
            ;
        this.pO = function () {
            -1 !== H && (this.rZ = !1)
        }
            ;
        this.cG = function () {
            cH.fillStyle = oW;
            for (var P = E; P >= F; P--)
                l(P);
            I && 0 === F && (cH.fillStyle = oM,
                l(0));
            -1 !== H && (cH.fillStyle = oV,
                l(H));
            if (-1 !== H) {
                cH.font = K;
                cH.textBaseline = ob;
                P = new Date;
                P.setTime(D.getTime() - 864E5 * H);
                var U = "month"
                    , W = "day";
                "undefined" !== typeof Intl && (U = (new Intl.DateTimeFormat("en-US", {
                    month: "long"
                })).format(P),
                    W = (new Intl.DateTimeFormat("en-US", {
                        weekday: "long"
                    })).format(P));
                P = W + ", " + P.getUTCDate() + " " + U + " " + P.getFullYear();
                var X = 1 === n[H] ? " second played" : " total seconds played";
                X = eL.gF(n[H]) + X;
                var V = Math.floor(cH.measureText(P).width)
                    , na = Math.floor(cH.measureText(X).width)
                    , ba = Math.floor(.5 * (V + J));
                U = z + gA - (H + 1) * A;
                U = U < ba ? ba : U > gA - ba ? gA - ba : U;
                W = cB - Math.floor(C * Math.pow(n[H], N));
                var ca = Math.floor(1.1 * J)
                    , pa = W > cB - ca ? cB - ca : W;
                cH.fillStyle = hq;
                cH.fillRect(gA - na - J, pa - ca, na + J, ca);
                cH.fillRect(U - ba, cB - ca, V + J, ca);
                cH.fillStyle = cK;
                cH.textAlign = oc;
                cH.fillText(X, Math.floor(gA - .5 * J), pa);
                X = pa - 2 * ca;
                V = -1;
                na = n.length - H - 1;
                for (ba = R.length - 1; 0 <= ba; ba--)
                    na >= R[ba].b3 && na <= R[ba].pC && (-1 === V || R[ba].pC - R[ba].b3 < R[V].pC - R[V].b3) && (V = ba);
                -1 !== V && (na = Math.floor(cH.measureText(R[V].mm).width),
                    cH.fillStyle = hq,
                    cH.fillRect(gA - na - J, X, na + J, ca),
                    cH.fillStyle = cK,
                    cH.fillText(R[V].mm, Math.floor(gA - .5 * J), X + ca));
                cH.textAlign = cJ;
                cH.fillText(P, U, cB);
                cH.strokeStyle = nQ;
                cH.lineWidth = 1;
                cH.beginPath();
                cH.moveTo(0, W);
                cH.lineTo(gA, W);
                cH.closePath();
                cH.stroke()
            }
        }
    }
    function k0() {
        this.cw = this.fF = 0;
        var g, k, x, l, t, n, z, y, A, B, C, F, E;
        this.bp = function () {
            t = hS;
            C = "rgba(0,100,0,0.8)";
            F = "rgba(150,0,0,0.8)";
            B = !0;
            y = !1;
            A = ax[aw];
            this.lq()
        }
            ;
        this.lq = function () {
            k = Math.floor((q ? .305 : .24) * bq);
            this.cw = Math.floor(.5 + .13 * k);
            k = Math.floor(6 * this.cw);
            g = bt + Math.floor(.8 * this.cw) + bu;
            E = Math.floor(.5 * this.cw);
            pc.font = g;
            x = m0;
            l = Math.floor(1 + .13 * this.cw);
            n = document.createElement("canvas");
            n.width = k;
            n.height = this.cw;
            z = n.getContext("2d", {
                alpha: !0
            });
            z.font = g;
            z.textBaseline = cI;
            z.textAlign = cJ;
            this.s4()
        }
            ;
        this.q6 = function () {
            return q && r < 1.2 * s
        }
            ;
        this.ql = function () {
            this.q6() ? this.fF = gA - k - m0 : this.fF = Math.floor(eI.s5() + (gA - eI.s5() - e7.c1 - k) / 2 - .5 * m0)
        }
            ;
        this.eX = function () {
            y && (y = !1,
                this.s4())
        }
            ;
        this.s4 = function () {
            z.clearRect(0, 0, k, this.cw);
            z.fillStyle = B ? C : F;
            z.fillRect(0, 0, k, this.cw);
            z.fillStyle = oV;
            this.s6();
            this.s7();
            z.fillStyle = ax[aw] >= ay.dJ(aw) ? oQ : cK;
            z.fillText(eL.gF(A), Math.floor(k / 2), E);
            z.fillStyle = cK;
            z.fillRect(0, 0, k, 1);
            z.fillRect(0, 0, 1, this.cw);
            z.fillRect(0, this.cw - 1, k, 1);
            z.fillRect(k - 1, 0, 1, this.cw)
        }
            ;
        this.s6 = function () {
            var H = Math.floor((ay.s8() - 1) * this.cw / 9);
            H = qe(H, this.cw - l);
            z.fillRect(0, H, l, this.cw - H);
            z.fillRect(k - l, H, l, this.cw - H)
        }
            ;
        this.s7 = function () {
            z.fillRect(l, this.cw - l, Math.floor((k - 2 * l) * ax[aw] / t), l)
        }
            ;
        this.dF = function () {
            0 !== fB[aw] && 2 !== fP[aw] && A !== ax[aw] && (t = mU(ax[aw], t),
                B = ax[aw] > A && 10 <= ax[aw],
                A = ax[aw],
                y = !0)
        }
            ;
        this.cG = function () {
            0 === fB[aw] || fY || 2 === fP[aw] || cH.drawImage(n, this.fF, x)
        }
    }
    var s9, qL, sA, sB, sC, ei, sD;
    function k1() {
        function g() {
            var S;
            B.clearRect(0, 0, s9, qL);
            B.fillStyle = oL;
            B.fillRect(0, 0, s9, J);
            B.fillStyle = o8;
            B.fillRect(0, J, s9, qL - J);
            sD[aw] >= V && x(sD[aw] - V, oK);
            0 !== sD[aw] && 0 === V && x(0, oJ);
            -1 !== X && x(X, lt);
            B.fillStyle = oA;
            B.fillRect(0, J, s9, 1);
            B.fillRect(0, 0, s9, oo);
            B.fillRect(0, 0, oo, qL);
            B.fillRect(s9 - oo, 0, oo, qL);
            B.fillRect(0, qL - oo, s9, oo);
            B.font = sA;
            B.textBaseline = cI;
            B.textAlign = cJ;
            B.fillText(Q, Math.floor(s9 / 2), Math.floor(E + sC / 2));
            var O = sD[aw] < V + y - 1 ? 1 : 2;
            B.font = sB;
            B.textAlign = mZ;
            for (S = y - O; 0 <= S; S--)
                k(ei[S + V]),
                    l(S, S + V, ei[S + V]);
            B.textAlign = oc;
            for (S = y - O; 0 <= S; S--)
                k(ei[S + V]),
                    t(S, ei[S + V]);
            2 === O && (k(aw),
                B.textAlign = mZ,
                l(y - 1, sD[aw], aw),
                B.textAlign = oc,
                t(y - 1, aw));
            0 === V && (S = .7 * K / bw.bz(4).height,
                B.setTransform(S, 0, 0, S, Math.floor(D + .58 * K + .5 * S * bw.bz(4).width), Math.floor(E + sC + .4 * K)),
                B.imageSmoothingEnabled = !0,
                B.drawImage(bw.bz(4), -Math.floor(bw.bz(4).width / 2), -Math.floor(bw.bz(4).height / 2)),
                B.setTransform(1, 0, 0, 1, 0, 0))
        }
        function k(S) {
            dA && (B.fillStyle = dW.sl[dW.id[dW.dX[S]]])
        }
        function x(S, O) {
            B.fillStyle = O;
            S = S > y - 1 ? y - 1 : S;
            var T = Math.floor((S === y - 1 ? 2 : 0 === S ? 1.15 : 1) * K);
            T = S === y - 2 ? Math.floor(J + 9.15 * K) - Math.floor(J + 8.15 * K) : T;
            B.fillRect(0, Math.floor(J + (S + (0 === S ? 0 : .15)) * K), s9, T)
        }
        function l(S, O, T) {
            B.fillText(R[O], D, Math.floor(E + sC + (S + .5) * K));
            1 === fP[T] && (B.font = od + sB);
            B.fillText(G[T] === T ? gE[T] : N[G[T] % b8], L, Math.floor(E + sC + (S + .5) * K));
            0 !== fP[T] && (B.font = sB)
        }
        function t(S, O) {
            B.fillText(bU[O], I, Math.floor(E + sC + (S + .5) * K))
        }
        function n(S) {
            S -= m0 + J;
            if (0 > S)
                return Math.floor(S / K) - 1;
            if (S < (y - 1) * K)
                return Math.floor(S / K);
            if (S < qL - J)
                return y - 1;
            S -= qL - J;
            return y + Math.floor(S / K)
        }
        function z(S, O) {
            return S >= m0 && S < m0 + s9 && O >= m0 && O < m0 + qL
        }
        var y, A, B, C, F, E, H, J, K, D, L, I, N, G, M, Q, R, P, U, W, X, V, na, ba, ca, pa;
        this.bp = function () {
            var S, O;
            na = 0;
            ba = !1;
            pa = ca = 0;
            Q = "LEADERBOARD";
            X = -1;
            y = q ? 6 : 10;
            V = 0;
            W = !1;
            P = new Uint16Array(y + 1);
            U = new Uint32Array(y + 1);
            F = b8;
            ei = new Uint16Array(F);
            sD = new Uint16Array(F);
            for (S = F - 1; 0 <= S; S--)
                ei[S] = S,
                    sD[S] = S;
            this.lq(!0);
            N = [];
            G = new Uint16Array(b8);
            M = new Uint16Array(b8);
            var T = Math.floor(s9 - L - D - C)
                , Y = 0;
            R = Array(b8);
            B.font = sB;
            for (S = b8 - 1; 0 <= S; S--)
                if (R[S] = S + 1 + ".",
                    G[S] = S,
                    M[S] = Math.floor(B.measureText(gE[S]).width),
                    M[S] > T) {
                    var Z = gE[S];
                    for (O = gE[S].length - 1; 1 <= O && !(Z = Z.substring(0, O),
                        M[S] = Math.floor(B.measureText(Z + "...").width),
                        M[S] <= T); O--)
                        ;
                    Z += "...";
                    N.push(Z);
                    G[S] = b8 + Y++
                }
            g()
        }
            ;
        this.lq = function (S) {
            q ? (s9 = Math.floor(.335 * bq),
                qL = Math.floor(y * s9 / 8)) : (s9 = Math.floor(.27 * bq),
                    qL = Math.floor(y * s9 / 10));
            s9 = Math.floor(.97 * s9);
            A = document.createElement("canvas");
            A.width = s9;
            A.height = qL;
            B = A.getContext("2d", {
                alpha: !0
            });
            E = .025 * s9;
            sC = .16 * s9;
            H = 0 * s9;
            J = Math.floor(.45 * E + sC);
            K = (qL - sC - 2 * E - H) / y;
            sA = bt + Math.floor(.55 * sC) + bu;
            sB = Math.floor(.6 * K) + bu;
            B.font = sB;
            D = Math.floor(B.measureText("555").width);
            L = Math.floor(B.measureText("555600.00").width);
            C = Math.floor(B.measureText("00920600").width);
            B.font = sA;
            I = s9 - D;
            if (!S) {
                B.font = sB;
                for (S = b8 - 1; 0 <= S; S--)
                    M[S] = Math.floor(B.measureText(G[S] === S ? gE[S] : N[G[S] % b8]).width);
                g()
            }
        }
            ;
        this.s5 = function () {
            return s9
        }
            ;
        this.eX = function (S) {
            W && (S || 14 >= sf && 0 === c4.dU() % 6 || 14 < sf) && (W = !1,
                g())
        }
            ;
        this.dF = function () {
            for (var S = F - 1; 0 <= S; S--)
                if (0 === fB[ei[S]]) {
                    var O = S
                        , T = ei[O];
                    for (F--; O < F; O++)
                        ei[O] = ei[O + 1],
                            sD[ei[O]] = O;
                    ei[F] = T;
                    sD[ei[F]] = F
                }
            T = F - 1;
            for (O = 0; O < T; O++)
                bU[ei[O]] < bU[ei[O + 1]] && (S = ei[O],
                    ei[O] = ei[O + 1],
                    ei[O + 1] = S,
                    sD[ei[O]] = O,
                    sD[ei[O + 1]] = O + 1);
            a: {
                S = W;
                W = !0;
                for (O = T = sD[aw] >= y - 1 ? y - 2 : y - 1; 0 <= O; O--)
                    if (P[O] !== ei[O] || U[O] !== bU[ei[O]])
                        break a;
                if (T !== y - 2 || P[y] === sD[aw] && U[y] === bU[aw])
                    W = S
            }
            for (S = y - 1; 0 <= S; S--)
                P[S] = ei[S],
                    U[S] = bU[ei[S]];
            P[y] = sD[aw];
            U[y] = bU[aw]
        }
            ;
        this.c7 = function (S, O) {
            if (z(S, O)) {
                na = c4.gY;
                ba = !0;
                ca = pa = n(O);
                if (oq) {
                    var T = sy(-1, pa, y);
                    T = T === y ? -1 : T;
                    X !== T && (X = T,
                        g(),
                        c4.c5 = !0)
                }
                return !0
            }
            return !1
        }
            ;
        this.lh = function (S, O) {
            var T = n(O);
            if (ba) {
                var Y = V;
                V += ca - T;
                V = sy(0, V, b8 - y);
                V !== Y && (ca = T,
                    T = sy(-1, T, y),
                    X = T = T !== y && z(S, O) ? T : -1,
                    g(),
                    c4.c5 = !0);
                return !0
            }
            T = sy(-1, T, y);
            T = T === y || !z(S, O) || oq ? -1 : T;
            return X !== T ? (X = T,
                g(),
                c4.c5 = !0) : !1
        };
        // mouseClick
        this.pO = function (S, O) {
            if (!ba)
                return !1;
            ba = !1;
            var T = n(O);
            oq && -1 !== X && (X = -1,
                g(),
                c4.c5 = !0);
            if (350 > c4.gY - na && pa === T && (T = sy(-1, T, y),
                T = T !== y && z(S, O) ? T : -1,
                -1 !== T)) {
                var Y = ei[T + V];
                T === y - 1 && sD[aw] >= V + y - 1 && (Y = aw);
                //0 !== fB[Y] && eR.gc(Y, 800, !1, 0)
                // if the game is a team game, display donation history
                if (dA) displayDonationsHistory(Y, gE);
                eR.gc(Y, 800, !1, 0);
            }
            return !0
        };
        this.pU = function (S, O, T) {
            return ba ? !1 : z(S, O) ? (S = n(O),
                S = sy(-1, S, y),
                S = S === y || oq ? -1 : S,
                0 < T ? V < b8 - y && (V++,
                    X = S,
                    g(),
                    c4.c5 = !0) : 0 < V && (V--,
                        X = S,
                        g(),
                        c4.c5 = !0),
                !0) : !1
        };
        this.cG = function () {
            cH.drawImage(A, m0, m0)
        }
    }
    function k2() {
        function g() {
            z.clearRect(0, 0, e7.c1, e7.cw);
            z.fillStyle = hq;
            z.fillRect(0, 0, e7.c1, e7.cw);
            z.fillStyle = oE;
            z.fillRect(0, e7.cw - B - 1, Math.floor((0 < G ? G : Math.sqrt(L[4] / L[3])) * e7.c1), B);
            z.fillStyle = cK;
            z.fillRect(0, 0, e7.c1, 1);
            z.fillRect(0, 0, 1, e7.cw);
            z.fillRect(e7.c1 - 1, 0, 1, e7.cw);
            z.fillRect(0, e7.cw - 1, e7.c1, 1);
            z.fillRect(0, e7.cw - B - 1, e7.c1, 1);
            // render
            for (var P = 0, U = 0; U < D.length; U++)
                if (I[U]) {
                    z.textAlign = mZ;
                    var W = Math.floor((C - B + 2 * E) * (U - P + 1) / (D.length + 1) - .7 * E);
                    z.fillText(D[U], F, W);
                    z.textAlign = oc;
                    5 === U && 0 !== fB[aw] && ax[aw] >= ay.dJ(aw) ? (z.fillStyle = oZ,
                        z.fillText(k(U), e7.c1 - F, W),
                        z.fillStyle = cK) : z.fillText(k(U), e7.c1 - F, W)
                } else P++
        }
        function k(P) {
            return 3 > P ? L[P].toString() :
                3 === P ? e7.n9(L[P] / 100, 2) :
                    4 === P ? e7.n9(L[P] / 100, 2) :
                        5 === P ? e7.n9(L[P] / 100, 2) :
                            P === 6 ? eL.gF(L[P]) :
                                P === 7 ? e7.s8(L[7]) :
                                    P === 8 ? utils.getMaxTroops(bU, aw) : utils.getDensity(ax, bU, aw) // max amount of troops / current amount of troops
        }

        function x(P) {
            P = as(1E4 * P, j1);
            8 === dr && (0 === fB[0] ? fe.ff(1) : 0 === fB[1] && fe.ff(0));
            P >= L[3] && (fe.ff(-1),
                L[4] = -1);
            L[4] !== P && (K++,
                L[4] = P)
        }
        function l() {
            for (var P = dY - 1; 0 <= P; P--)
                if (0 < b4[dZ[P]].length)
                    return !1;
            return !0
        }
        function t() {
            // original line is bU[aw] !== L[6] && (L[6] = bU[aw], K++)
            if (bU[aw] !== L[6]) {
                L[6] = bU[aw];
                K++;
            }
        }
        var n, z, y, A, B, C, F, E, H, J, K, D, L, I, N, G, M, Q, R;
        this.bp = function () {
            G = M = 0;
            D = Array(9);
            D[0] = "Humans";
            D[1] = dt ? "Players" : "Bots";
            D[2] = "Spectators";
            D[3] = "Threshold";
            D[4] = "Occupation";
            D[5] = "Interest";
            D[6] = "Income";
            D[7] = "Time Spent";
            D[8] = "Maximum Troops";
            D[9] = "Density"
            R = j1 - as(j1, 100);
            L = Array(D.length);
            L[0] = dt ? 0 : cq;
            L[1] = dt ? dY : dq;
            L[2] = io;
            L[3] = 10000;
            L[4] = as(10000 * bU[0], j1);
            L[5] = 700;
            L[6] = 0;
            t();
            // the updating is on line 4420
            L[7] = 0;
            L[8] = 0;
            L[9] = 0;
            N = k(6);
            I = Array(D.length);
            for (var P = D.length - 1; 0 <= P; P--)
                I[P] = !0;
            Q = 0;
            dt ? (I[0] = !1,
                I[2] = !1,
                I[3] = !1,
                Q = 3) : (I[3] = !1,
                    Q = 1);
            K = 0;
            this.lq()
        }
            ;
        this.lq = function () {
            this.c1 = Math.floor((q ? .1646 : .126) * bq);
            this.cw = Math.floor(1.18 * this.c1);
            B = Math.floor(.04 * this.c1);
            F = Math.floor(.05 * this.c1);
            E = .04 * this.c1;
            C = this.cw;
            this.cw -= Math.floor(Q * (this.cw - 2 * B) / D.length);
            J = Math.floor(.55 * (C - B) / D.length);
            H = bt + J + bu;
            n = document.createElement("canvas");
            n.width = this.c1;
            n.height = this.cw;
            z = n.getContext("2d", {
                alpha: !0
            });
            z.font = H;
            z.textBaseline = cI;
            z.lineWidth = 1;
            this.iu();
            this.ql();
            eK.ql();
            g()
        }
            ;
        this.ql = function () {
            y = gA - this.c1 - m0
        }
            ;
        this.tB = function () {
            A = m0
        }
            ;
        this.iu = function () {
            A = m0 + (eK.q6() && 0 !== fB[aw] && !fY ? eK.cw + m0 : 0)
        }
            ;
        this.eX = function (P) {
            0 < K && (P || 12 > sf && 100 <= K || 12 <= sf) && (K = 0,
                g())
        }
            ;
        this.lQ = function () {
            return L[7]
        }
            ;
        this.s8 = function (P) {
            var U = Math.floor(P / 1E3 / 60);
            P = Math.floor((P - 6E4 * U) / 1E3);
            return 10 > P ? U + ":0" + P : U + ":" + P
        }
            ;
        this.n9 = function (P, U) {
            return P.toFixed(U) + "%"
        }
            ;
        this.dF = function () {
            I[0] && ip - io !== L[0] && (L[0] = ip - io,
                K++);
            dY - L[0] !== L[1] && (L[1] = dY - L[0],
                K++);
            this.e8();
            if (dA) {
                var P = eP.qf();
                P >= R && l() ? (fe.ff(-1),
                    x(eP.qf())) : x(P)
            } else
                P = bU[ei[0]],
                    P >= R && l() && fe.ff(-1),
                    x(P);
            P = ay.tN(aw);
            P !== L[5] && (L[5] = P,
                K++);
            t();
            L[7] += c4.tO();
            P = k(7);
            N !== P && (N = P,
                K += 100)
        }
            ;
        this.e8 = function () {
            I[2] && io !== L[2] && (L[2] = io,
                K++)
        }
            ;
        this.tP = function (P) {
            if (P === j7)
                return G = 0,
                    g(),
                    !1;
            if (-1 === P && 0 === M)
                return !1;
            var U = G
                , W = performance.now();
            if (0 <= P) {
                var X = W - 392 * P;
                M = 0 === P || X < M ? X : M
            }
            G = (W - M) / (392 * j7);
            G = 1 < G ? 1 : G;
            g();
            return G !== U
        }
            ;
        this.cG = function () {
            cH.drawImage(n, y, A)
        }
    }
    function k3() {
        var g, k, x, l, t, n, z, y, A, B;
        this.tU = -1;
        this.bp = function () {
            g = !1;
            l = 0;
            t = .61;
            n = .07;
            z = .09;
            B = y = 0;
            this.tU = -1
        }
            ;
        this.lq = function () {
            if (g) {
                x = q ? Math.floor(.69 * bq) : Math.floor(.5 * bq);
                x = qe(x, mU(r - 2 * m0, 10));
                x = qe(x, Math.floor(3.57 * mU(s - 2 * m0, 3)));
                l = Math.floor(.28 * x);
                A = document.createElement("canvas");
                A.width = x;
                A.height = l;
                var C = A.getContext("2d", {
                    alpha: !0
                })
                    , F = Math.floor(1 + l / 40);
                C.clearRect(0, 0, x, l);
                C.fillStyle = hq;
                C.fillRect(F, F, x - 2 * F, l - 2 * F);
                C.lineJoin = "bevel";
                C.lineWidth = 2 * F;
                C.strokeStyle = cK;
                C.strokeRect(F, F, x - 2 * F, l - 2 * F);
                C.imageSmoothingEnabled = !0;
                var E = bw.bz(k)
                    , H = E.height
                    , J = t * l / H;
                C.setTransform(J, 0, 0, J, Math.floor((x - J * E.width) / 2), Math.floor((l - J * H) / 2));
                C.drawImage(E, 0, 0);
                C.setTransform(1, 0, 0, 1, Math.floor(x - z * l - n * l - F), Math.floor(F + n * l));
                F = Math.floor(z * l);
                C.lineWidth = Math.floor(1 + l / 80);
                C.strokeStyle = cK;
                C.beginPath();
                C.moveTo(0, 0);
                C.lineTo(F, F);
                C.moveTo(0, F);
                C.lineTo(F, 0);
                C.stroke();
                C.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
            ;
        this.show = function (C, F) {
            g || (k = C ? 1 : 2,
                g = !0,
                this.lq(),
                hm.li(),
                eN.qa(),
                B = c4.gY,
                -1 === this.tU && (this.tU = c4.dU()),
                y = F ? 1 : 0)
        }
            ;
        this.dF = function () {
            !g || 1 <= y || (y += 5E-4 * (c4.gY - B),
                y = 1 < y ? 1 : y,
                B = c4.gY,
                c4.c5 = !0)
        }
            ;
        this.c7 = function (C, F) {
            if (!g || 0 >= y)
                return !1;
            C -= Math.floor((gA - x) / 2);
            F -= cB - l - 2 * m0;
            if (0 > C || 0 > F || C > x || F > l)
                return !1;
            C > x - l / 3 && F < l / 3 && (g = !1,
                c4.c5 = !0);
            return !0
        }
            ;
        this.cG = function () {
            !g || 0 >= y || (cH.globalAlpha = y,
                cH.drawImage(A, Math.floor((gA - x) / 2), cB - l - 2 * m0),
                cH.globalAlpha = 1)
        }
    }
    function kX() {
        function g(n, z, y, A, B, C, F) {
            0 !== fB[n] && 0 !== bU[n] && (y = gA * ((d0[n] + cz[n] + 1) / 2 - y) / (B - y) - .5 * z,
                A = cB * ((d3[n] + d2[n] + 1) / 2 - A) / (C - A) - .5 * z,
                y > gA || A > cB || y < -z || A < -z || (cH.setTransform(g3 * F, 0, 0, g3 * F, y, A),
                    cH.drawImage(x[dA ? dW.dX[n] : n < cq ? 1 : 0], 0, 0)))
        }
        var k, x, l, t;
        this.bp = function () {
            var n;
            x = [];
            k = !1;
            if (fY)
                if (t = 0,
                    l = 63,
                    k = !0,
                    dA)
                    for (n = 0; n <= j5; n++)
                        x.push(this.tb(dW.tc[dW.id[n]], l));
                else
                    x.push(this.tb(dW.tc[0], l)),
                        x.push(this.tb(dW.tc[4], l))
        }
            ;
        this.dF = function () {
            k && 349 === ++t && (x = [],
                k = !1)
        }
            ;
        this.tb = function (n, z) {
            var y = document.createElement("canvas");
            y.width = z;
            y.height = z;
            var A = y.getContext("2d", {
                alpha: !0
            });
            A.clearRect(0, 0, z, z);
            var B = A.getImageData(0, 0, z, z), C = B.data, F, E, H = Math.floor(z / 2), J = 1 + H * H;
            for (F = z - 1; 0 <= F; F--)
                for (E = z - 1; 0 <= E; E--) {
                    var K = (F - H) * (F - H) + (E - H) * (E - H);
                    var D = 4 * (E * z + F);
                    C[D] = n[0];
                    C[D + 1] = n[1];
                    C[D + 2] = n[2];
                    K = Math.floor((J - K) * n[3] / J);
                    C[D + 3] = 0 < K ? K : 0
                }
            A.putImageData(B, 0, 0);
            return y
        }
            ;
        this.cG = function () {
            if (k) {
                var n;
                cH.imageSmoothingEnabled = !0;
                cH.globalAlpha = 1 - (160 < t ? (t - 160) / 190 : 0);
                var z = g8 / g3
                    , y = g9 / g3
                    , A = (gA + g8) / g3
                    , B = (cB + g9) / g3;
                var C = .25;
                var F = l * g3 * C;
                for (n = b8 - 1; n >= cq; n--)
                    g(n, F, z, y, A, B, C);
                C = .5;
                F = l * g3 * C;
                for (n = cq - 1; 0 <= n; n--)
                    g(n, F, z, y, A, B, C);
                cH.globalAlpha = 1;
                cH.imageSmoothingEnabled = 3 > g3;
                cH.setTransform(g3, 0, 0, g3, 0, 0)
            }
        }
    }
    function fH(g, k, x) {
        if (!(0 === fB[g] || 0 > x || 1E3 < x || 2 === fP[g])) {
            var l = as(x * ax[g], 1E3);
            10 === dr && k < cq && 2 !== fP[k] && (l = eB.tj(g, l));
            if (dA && k < b8 && !ch(g, k))
                da(g, k, l);
            else {
                k < b8 && 0 === fB[k] && (k = b8);
                var t = as(3 * ax[g], 256);
                l -= 500 <= x ? t : 0;
                if (!(l <= at) && ae.dD(g)) {
                    var n = b4[g].length;
                    k === b8 ? cX(g) : cS(g, k);
                    if (0 !== n || 0 !== b4[g].length)
                        dA && (d7[g] = 1),
                            g === aw && (b0.b1[0] += 500 <= x ? x - 12 : x,
                                b0.b1[1]++,
                                b0.b1[12] += t,
                                b0.b1[13] += l),
                            cP(n, g),
                            ae.cQ(g, l, k),
                            ax[g] -= l + t,
                            au.cR(g, !1)
                }
            }
        }
    }
    function eu(g, k, x, l) {
        10 === dr && g < cq && (l = eB.tj(g, l));
        if (l <= at || !ae.dD(g))
            return !1;
        k = eG.cR(g, k, x);
        if (0 === k)
            return !1;
        x = as(3 * ax[g], 128);
        l >= as(ax[g], 2) && (l -= x);
        g === aw && (b0.b1[12] += x);
        ae.tk(g, l, k);
        ax[g] -= l + x;
        return !0
    }
    function da(g, k, x) {
        if (!(!dA || 0 === fB[g] || 0 === fB[k] || 0 > x || x > ax[g] || g === k || ch(g, k) || g < cq && k < cq && 7 > dr && 1071 > c4.dU())) {
            var l = as(ax[g], 16);
            x -= x >= as(ax[g], 2) ? l : 0;
            var t = bU[k] * iz - ax[k];
            0 >= t || (x = x > t ? t : x,
                // if the donating player is us, show a message and add to statistics
                g === aw && (e5.n1(x, k), b0.b1[12] += l, b0.b1[16] += x),
                // if the receiving player is us, show message and add to statistics
                k === aw && (e5.n3(x, g), b0.b1[10] += x),
                // remove points (+tax) from donating player
                ax[g] -= x + l,
                // add points to receiving player
                ax[k] += x,
                // track donations
                ((!gE[g].startsWith("[Bot] ") || settings.showBotDonations) && donationsTracker.logDonation(g,k,x))
                //donationsTracker.logDonation(g,k,x)
            )
        }
    }
    function tl() {
        this.ix = this.h5 = this.tm = !1;
        this.tn = [0, 0, 0, 0];
        this.to = function () {
            this.ix = this.ix || this.h5;
            if (this.h5 || this.tm && this.ix) {
                var g = gu.tp[0]
                    , k = gu.tp[1]
                    , x = gu.tp[2]
                    , l = gu.tp[3];
                g = g < this.tn[0] ? this.tn[0] : g;
                k = k < this.tn[1] ? this.tn[1] : k;
                x = x > this.tn[2] ? this.tn[2] : x;
                l = l > this.tn[3] ? this.tn[3] : l;
                this.tm = this.h5 = !1;
                g === this.tn[0] && k === this.tn[1] && x === this.tn[2] && l === this.tn[3] ? this.iy() : x >= g && l >= k && jP.putImageData(jQ, 0, 0, g, k, x - g + 1, l - k + 1)
            }
        }
            ;
        this.iy = function () {
            this.ix && this.tn[2] >= this.tn[0] && this.tn[3] >= this.tn[1] && jP.putImageData(jQ, 0, 0, this.tn[0], this.tn[1], this.tn[2] - this.tn[0] + 1, this.tn[3] - this.tn[1] + 1);
            this.ix = !1
        }
            ;
        this.ir = function () {
            this.tn[2] >= this.tn[0] && this.tn[3] >= this.tn[1] && jP.putImageData(jQ, 0, 0, this.tn[0], this.tn[1], this.tn[2] - this.tn[0] + 1, this.tn[3] - this.tn[1] + 1);
            this.ix = !1
        }
            ;
        this.bp = function () {
            var g;
            this.ix = this.h5 = this.tm = !1;
            this.tn[0] = aZ;
            this.tn[1] = aa;
            this.tn[2] = this.tn[3] = 0;
            var k = 1;
            a: for (; k < aZ - 1; k++)
                for (g = aa - 2; 1 < g; g--)
                    if (1 === tq[b5.ex(k, g) + 2]) {
                        this.tn[0] = k;
                        break a
                    }
            g = 1;
            a: for (; g < aa - 1; g++)
                for (k = aZ - 2; 1 < k; k--)
                    if (1 === tq[b5.ex(k, g) + 2]) {
                        this.tn[1] = g;
                        break a
                    }
            k = aZ - 2;
            a: for (; 0 < k; k--)
                for (g = aa - 2; 1 < g; g--)
                    if (1 === tq[b5.ex(k, g) + 2]) {
                        this.tn[2] = k;
                        break a
                    }
            g = aa - 2;
            a: for (; 0 < g; g--)
                for (k = aZ - 2; 1 < k; k--)
                    if (1 === tq[b5.ex(k, g) + 2]) {
                        this.tn[3] = g;
                        break a
                    }
        }
    }
    function tr() {
        this.l7 = !1;
        this.m7 = null;
        this.ts = 0;
        this.cw = this.c1 = null;
        this.tt = .013;
        this.tu = .022;
        this.tv = .025;
        this.tx = 3;
        this.ty = 1.2;
        this.tz = .2;
        this.u0 = .235;
        this.u1 = .9;
        this.u2 = .08;
        var g = ["Top Players", "Top Clans", "Top Players So Far", "Top Clans So Far"], k, x = [-1E6, -1E6];
        this.position = [0, 0];
        this.u7 = [0, 0];
        this.bp = function () {
            this.m7 = [null, null];
            this.l7 = !1;
            this.ts = 0;
            this.lq()
        }
            ;
        this.cE = function (l) {
            this.ts = l;
            this.l7 = !0;
            this.bv();
            jX.ta();
            c4.c5 = !0
        }
            ;
        this.dF = function () {
            this.l7 && this.bv()
        }
            ;
        this.bv = function () {
            c4.gY - 12E4 >= x[this.ts] && (x[this.ts] = c4.gY,
                this.u7 = [0, 0],
                e9.rb(0, 1 + this.ts) && ii.u8(0, this.ts))
        }
            ;
        this.lq = function () {
            var l;
            this.c1 = this.u9(q ? .85 : .66, .75, r, s);
            this.cw = Math.floor(this.c1 / .75);
            for (l = 1; 0 <= l; l--)
                this.m7[l] && (this.m7[l][4] = bt + Math.floor(this.m7[l][5] * this.cw / 10) + bu);
            k = bt + Math.floor(.1 * this.cw) + bu
        }
            ;
        this.u9 = function (l, t, n, z) {
            return n < t * z ? Math.floor(l * n) : Math.floor(t * l * z)
        }
            ;
        this.uA = function (l, t, n, z, y, A, B) {
            this.position[l] = B;
            var C = t.length
                , F = bt + Math.floor(y * this.cw / 10) + bu;
            this.uF(t, F, A * this.c1);
            z = [[], C, -1, z, F, y, 10 * B];
            for (y = 0; y < C; y++)
                A = {
                    name: t[y].name,
                    value: t[y].i4 / n,
                    colorIndex: t[y].colorIndex
                },
                    z[0].push(A);
            this.m7[l] = z;
            this.uG(l);
            t = this.m7[l][0][0].name;
            1 === l && (t = "[" + t + "]");
            0 === B && uH.br(l, t);
            c4.c5 = !0
        }
            ;
        this.uG = function (l) {
            this.m7[l][0].sort(function (t, n) {
                return n.value - t.value
            })
        }
            ;
        this.uI = function (l, t, n, z) {
            if (this.m7 && this.m7[l]) {
                var y, A = !1, B = 383 / 384;
                if (0 === l) {
                    for (y = 0; y < this.m7[l][0].length; y++)
                        if (t === this.m7[l][0][y].name && n > .99 * this.m7[l][0][y].value && n < 1.01 * this.m7[l][0][y].value) {
                            this.m7[l][0][y].value = z;
                            A = !0;
                            break
                        }
                    A || this.m7[l][0].push({
                        name: t,
                        value: z
                    })
                } else {
                    for (y = 0; y < this.m7[l][0].length; y++)
                        if (t === this.m7[l][0][y].name) {
                            this.m7[l][0][y].value += 32 < this.m7[l][0][y].value ? (64 - this.m7[l][0][y].value) / 256 : .25;
                            this.m7[l][0][y].value *= 1 / B;
                            A = !0;
                            break
                        }
                    for (y = 0; y < this.m7[l][0].length; y++)
                        this.m7[l][0][y].value *= B;
                    A || this.m7[l][0].push({
                        name: t,
                        value: .25
                    })
                }
                this.uG(l)
            }
        }
            ;
        this.uF = function (l, t, n) {
            for (var z = l.length - 1; 0 <= z; z--)
                for (; 3 < l[z].name.length && c2.measureText(l[z].name, t) > n;)
                    l[z].name = l[z].name.substring(0, l[z].name.length - 4) + "..."
        }
            ;
        this.c7 = function (l, t) {
            if (!this.l7)
                return !1;
            l -= (gA - this.c1) / 2;
            t -= (cB - this.cw) / 2;
            if (0 > l || l > this.c1 || 0 > t || t > this.cw)
                return this.l7 = !1,
                    0 === aJ.pR() && jd.cE(0, !0),
                    c4.c5 = !0;
            if (t < .3 * this.cw)
                var n = 1;
            else
                t < .85 * this.cw ? (n = (0 === this.ts ? 14.1 : 3) * (t - .3 * this.cw) / (.55 * this.cw),
                    n = Math.floor(1 + n * n)) : n = 0 === this.ts ? 200 : 10;
            this.u7[this.ts] = l < this.c1 / 2 ? -n : n;
            if (x[this.ts] + 50 > c4.gY)
                return !0;
            x[this.ts] = c4.gY;
            e9.rb(0, 1 + this.ts) && ii.u8(0, this.ts);
            return !0
        }
            ;
        this.cG = function () {
            if (this.l7) {
                var l = this.tt * this.c1
                    , t = this.tx * l
                    , n = this.tu * this.c1
                    , z = this.ty * n
                    , y = this.tv * this.c1
                    , A = Math.floor(.25 * this.cw);
                cH.setTransform(1, 0, 0, 1, (gA - this.c1) / 2, (cB - this.cw) / 2);
                cH.fillStyle = 0 === this.ts ? oT : oO;
                cH.fillRect(0, 0, this.c1, A);
                cH.fillStyle = o8;
                cH.fillRect(0, A, this.c1, this.cw - A);
                cH.fillStyle = cK;
                cH.font = k;
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                cH.fillText(g[this.ts], Math.floor(this.c1 / 2), Math.floor(.135 * this.cw));
                cH.font = bt + Math.floor(.025 * this.cw) + bu;
                cH.fillText(g[this.ts + 2], Math.floor(this.c1 / 2), Math.floor(.2125 * this.cw));
                cH.beginPath();
                cH.moveTo(this.c1 / 4, 0);
                cH.lineTo(this.c1 / 2 - l, 0);
                cH.lineTo(this.c1 / 2, -t);
                cH.lineTo(this.c1 / 2 + l, 0);
                cH.lineTo(this.c1 - n, 0);
                cH.lineTo(this.c1 + z, -z);
                cH.lineTo(this.c1, n);
                cH.lineTo(this.c1, this.cw / 2 - l);
                cH.lineTo(this.c1 + t, this.cw / 2);
                cH.lineTo(this.c1, this.cw / 2 + l);
                cH.lineTo(this.c1, this.cw - n);
                cH.lineTo(this.c1 + z, this.cw + z);
                cH.lineTo(this.c1 - n, this.cw);
                cH.lineTo(this.c1 / 2 + l, this.cw);
                cH.lineTo(this.c1 / 2, this.cw + t);
                cH.lineTo(this.c1 / 2 - l, this.cw);
                cH.lineTo(n, this.cw);
                cH.lineTo(-z, this.cw + z);
                cH.lineTo(0, this.cw - n);
                cH.lineTo(0, this.cw / 2 + l);
                cH.lineTo(-t, this.cw / 2);
                cH.lineTo(0, this.cw / 2 - l);
                cH.lineTo(0, n);
                cH.lineTo(-z, -z);
                cH.lineTo(n, 0);
                cH.lineTo(this.c1 / 4, 0);
                cH.lineTo(this.c1 / 4, y);
                cH.lineTo(y, y);
                cH.lineTo(y, this.cw - y);
                cH.lineTo(this.c1 - y, this.cw - y);
                cH.lineTo(this.c1 - y, y);
                cH.lineTo(this.c1 / 4, y);
                cH.fill();
                this.m7[this.ts] && this.uO(A);
                this.uP(A);
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
            ;
        this.uP = function (l) {
            var t = mU(2, Math.floor(.06 * this.c1));
            t -= t % 2;
            var n = mU(2, Math.floor(.01 * this.c1));
            n -= n % 2;
            l = Math.floor(.82 * l);
            cH.fillRect(t, l, t, n);
            cH.fillRect(this.c1 - t - t, l, t, n);
            cH.fillRect(Math.floor(this.c1 - t - t + (t - n) / 2), Math.floor(l - (t - n) / 2), n, t)
        }
            ;
        this.uO = function (l) {
            cH.font = this.m7[this.ts][4];
            for (var t, n = this.m7[this.ts][1] - 1; 0 <= n; n--)
                cH.textAlign = oc,
                    t = Math.floor(this.u2 * this.cw + l + n * ((1 - 2 * this.u2) * this.cw - l) / 9),
                    cH.fillText(this.m7[this.ts][0][n].value.toFixed(this.m7[this.ts][3]), Math.floor(this.u1 * this.c1), t),
                    cH.fillText(n + 1 + this.m7[this.ts][6] + ".", Math.floor(this.tz * this.c1), t),
                    cH.textAlign = mZ,
                    cH.fillText(this.m7[this.ts][0][n].name, Math.floor(this.u0 * this.c1), t)
        }
    }
    function uQ() {
        var g, k, x, l, t, n, z, y, A, B, C, F, E;
        this.l7 = !1;
        this.bp = function (H, J) {
            if (13 <= d)
                J ? F = H : F === H && e.saveString(200, H);
            else if (J) {
                (cC.m7[1].iY.l7 || cC.m7[2].iY.l7) && cC.ua();
                jX.ta();
                F = H;
                A = Math.floor((q ? r > s ? .6 : .45 : .4) * pB);
                x = A / bw.bz(17).width;
                t = Math.floor(x * bw.bz(17).height);
                n = Math.floor(.4 * t);
                z = Math.floor(.6 * t);
                y = Math.floor(2.5 * z);
                l = t + n + 3 * z;
                var K = bt + Math.floor(n / pF) + bu;
                B = Math.floor(pF * c2.measureText(F, K));
                C = (B > A ? B : A) + 2 * y;
                g = Math.floor((gA - C) / 2);
                k = Math.floor((cB - l) / 2);
                E = document.createElement("a");
                E.appendChild(document.createTextNode(F));
                E.title = F;
                E.target = "blank";
                E.href = F;
                E.style.font = K;
                E.style.textAlign = "center";
                E.style.color = cK;
                E.style.position = "absolute";
                E.style.padding = "0px";
                E.style.margin = "0px";
                E.style.top = Math.floor((k + 2 * z + t) / pF) + "px";
                E.style.left = Math.floor((g + (C - B) / 2) / pF) + "px";
                document.body.appendChild(E);
                this.l7 = !0;
                c4.c5 = !0
            }
        }
            ;
        this.lA = function () {
            if (!this.l7)
                return !1;
            document.body.removeChild(E);
            this.l7 = !1;
            return !0
        }
            ;
        this.c7 = function (H, J) {
            if (!this.l7)
                return !1;
            if (H < g || J < k || H > g + C || J > k + l)
                c4.c5 = !0,
                    this.l7 = !1,
                    document.body.removeChild(E),
                    0 === aJ.pR() && jd.cE(0, !0);
            return !0
        }
            ;
        this.cG = function () {
            this.l7 && (cH.imageSmoothingEnabled = !0,
                cH.setTransform(1, 0, 0, 1, g, k),
                cH.fillStyle = hq,
                cH.fillRect(0, 0, C, l),
                cH.lineWidth = op,
                cH.strokeStyle = cK,
                cH.strokeRect(0, 0, C, l),
                cH.setTransform(x, 0, 0, x, g + (C - A) / 2, k + z),
                cH.drawImage(bw.bz(17), 0, 0),
                cH.setTransform(1, 0, 0, 1, 0, 0))
        }
    }
    function ub() {
        var g = 0
            , k = [0, 0, 0, 0, 0]
            , x = [0, 0, 0, 0, 0]
            , l = [1, 1, 1, 1, 1]
            , t = [!0, !0, !0, !1, !0];
        this.uc = [!0, !0, !0, !1, !0];
        var n = null, z;
        this.ud = function (y, A) {
            n = y;
            t = A;
            z = [og, oh, oi, oj, ok];
            this.bp()
        }
            ;
        this.bp = function () {
            if (bw.bx()) {
                var y = Math.floor((q ? .261 : .195) * bq);
                var A = Math.floor(.9 * y)
                    , B = Math.floor(.17 * A);
                g = q ? 2 * m0 : m0;
                l[0] = y / n[0].width;
                l[1] = A / n[1].width;
                l[2] = B / n[2].height;
                l[3] = B / n[3].height;
                l[4] = B / n[4].height;
                l[3] *= 1.07;
                k[0] = g;
                k[1] = g;
                k[2] = g;
                k[3] = g;
                k[4] = Math.floor(2 * g + l[3] * n[3].width);
                x[0] = g;
                x[1] = x[0] + g + l[0] * n[0].height;
                x[2] = x[1] + g + l[1] * n[1].height;
                x[3] = x[2] + g + l[2] * n[2].height;
                x[4] = x[3];
                if (!t[0])
                    for (y = 0; 5 > y; y++)
                        x[y] -= l[0] * n[0].height + g;
                if (!t[1])
                    for (y = 2; 5 > y; y++)
                        x[y] -= l[1] * n[1].height + g
            }
        }
            ;
        this.l7 = function () {
            return !(7 === aJ.pR() && q)
        }
            ;
        this.c7 = function (y, A, B) {
            if (!n || !this.l7())
                return !1;
            var C;
            for (C = t.length - 1; 0 <= C; C--)
                if (t[C] && this.uc[C] && y > k[C] && A > x[C] && y < k[C] + l[C] * n[C].width && A < x[C] + l[C] * n[C].height)
                    return nN.bp(z[C], B),
                        !0;
            return !1
        }
            ;
        this.cG = function () {
            if (n && this.l7()) {
                cH.imageSmoothingEnabled = !0;
                var y;
                for (y = 0; 5 > y; y++)
                    t[y] && this.uc[y] && (cH.setTransform(l[y], 0, 0, l[y], k[y], x[y]),
                        cH.drawImage(n[y], 0, 0));
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
    }
    function k4() {
        function g(t) {
            var n = ja.uh[t]
                , z = n.fF
                , y = n.fG
                , A = n.c1
                , B = n.cw;
            cH.fillStyle = n.uk;
            cH.fillRect(z, y, A, B);
            t === k && (cH.fillStyle = l,
                cH.fillRect(z, y, A, B));
            cH.lineWidth = 3;
            cH.strokeStyle = x;
            cH.strokeRect(z, y, A, B);
            t = n.fF;
            z = n.fG;
            y = n.c1;
            A = n.cw;
            cH.textAlign = cJ;
            cH.textBaseline = cI;
            cH.font = n.font;
            cH.fillStyle = x;
            cH.fillText(n.nR, Math.floor(t + y / 2), Math.floor(z + A / 2 + .1 * n.by))
        }
        var k, x, l;
        this.f2 = this.fG = this.cw = this.c1 = 0;
        this.bp = function () {
            k = -1;
            x = cK;
            l = "rgba(255,255,255,0.16)";
            this.uh = Array(7);
            this.cw = Math.floor((q ? .123 : .093) * bq);
            this.c1 = Math.floor((q ? 3.96 : 4.2) * this.cw);
            this.f2 = Math.floor(.025 * this.c1);
            var t = Math.floor(.26 * this.cw)
                , n = bt + t + bu;
            this.uh[0] = {
                fF: 0,
                fG: 0,
                c1: Math.floor(.6 * this.c1 - this.f2 / 2),
                cw: this.cw,
                nR: "Multiplayer",
                font: n,
                uk: "rgba(22,88,22,0.8)",
                by: t
            };
            t = Math.floor(.18 * this.cw);
            n = bt + t + bu;
            this.uh[1] = {
                fF: 0,
                fG: 0,
                c1: this.c1 - this.uh[0].c1 - this.f2,
                cw: this.cw,
                nR: "Singleplayer",
                font: n,
                uk: "rgba(22,88,88,0.8)",
                by: t
            };
            this.uh[2] = {
                fF: 0,
                fG: 0,
                c1: this.c1,
                cw: Math.floor(.3 * this.cw),
                nR: "",
                font: this.uh[1].font,
                uk: "rgba(100,0,0,0.8)",
                by: this.uh[1].by
            };
            this.uh[3] = {
                fF: 0,
                fG: 0,
                c1: this.c1,
                cw: this.cw,
                nR: "Back",
                font: this.uh[0].font,
                uk: "rgba(0,0,0,0.8)",
                by: this.uh[0].by
            };
            this.uh[4] = {
                fF: 0,
                fG: 0,
                c1: this.c1,
                cw: Math.floor(.3 * this.cw),
                nR: "The game was updated!",
                font: this.uh[1].font,
                uk: "rgba(100,0,0,0.8)",
                by: this.uh[1].by
            };
            this.uh[5] = {
                fF: 0,
                fG: 0,
                c1: this.uh[0].c1,
                cw: Math.floor(.8 * this.cw),
                nR: "Reload",
                font: this.uh[0].font,
                uk: "rgba(0,100,0,0.8)",
                by: this.uh[0].by
            };
            this.uh[6] = {
                fF: 0,
                fG: 0,
                c1: this.uh[1].c1,
                cw: this.uh[5].cw,
                nR: "Back",
                font: this.uh[0].font,
                uk: "rgba(0,0,0,0.8)",
                by: this.uh[0].by
            };
            this.rj()
        }
            ;
        this.rj = function () {
            this.fG = Math.floor(.54 * cB);
            this.uh[0].fF = Math.floor(.5 * gA - .5 * this.c1);
            this.uh[1].fF = this.uh[0].fF + this.uh[0].c1 + this.f2;
            this.uh[2].fF = this.uh[3].fF = this.uh[0].fF;
            this.uh[4].fF = this.uh[5].fF = this.uh[0].fF;
            this.uh[6].fF = this.uh[1].fF;
            this.uh[0].fG = Math.floor(.54 * cB);
            this.uh[1].fG = this.uh[0].fG;
            this.uh[2].fG = Math.floor((cB - this.uh[2].cw - this.uh[3].cw - this.f2) / 2);
            this.uh[3].fG = this.uh[2].fG + this.uh[2].cw + this.f2;
            this.uh[4].fG = Math.floor((cB - this.uh[4].cw - this.uh[5].cw - this.f2) / 2);
            this.uh[5].fG = this.uh[6].fG = this.uh[4].fG + this.uh[4].cw + this.f2
        }
            ;
        this.ul = function () {
            g(0);
            g(1)
        }
            ;
        this.un = function () {
            g(2);
            g(3)
        }
            ;
        this.uo = function () {
            g(4);
            g(5);
            g(6)
        }
            ;
        this.lh = function (t, n, z) {
            var y = -1;
            0 === aJ.pR() ? y = this.pI(t, n, 0, 2) : 3 === aJ.pR() ? y = this.pI(t, n, 3, 1) : 5 === aJ.pR() && (y = this.pI(t, n, 5, 2));
            k !== y && (k = y,
                z && (c4.c5 = !0));
            return -1 !== y ? (jZ.pN(),
                !0) : !1
        }
            ;
        this.pI = function (t, n, z, y) {
            for (var A = z; A < z + y; A++)
                if (t >= this.uh[A].fF && n >= this.uh[A].fG && t <= this.uh[A].fF + this.uh[A].c1 && n <= this.uh[A].fG + this.uh[A].cw)
                    return A;
            return -1
        }
    }
    function ur() {
        function g(k) {
            return 0 > k ? 0 : 255 < k ? 255 : Math.floor(k)
        }
        this.cw = this.c1 = 0;
        this.l7 = !1;
        this.uv = this.uu = this.ut = this.nl = this.f2 = this.us = 0;
        this.colors = null;
        this.bp = function () {
            r < 2 * s ? this.c1 = Math.floor((q ? .94 : .4) * r) : (this.cw = Math.floor((q ? .88 : .4) * s),
                this.c1 = Math.floor(2 * this.cw));
            this.cw = this.c1 / 2;
            this.f2 = this.cw / 16;
            this.l7 = !0;
            this.us = 0;
            this.ut = (this.cw - 3 * this.f2) / 2;
            this.uu = this.c1 - 3 * this.f2 - this.ut;
            this.uv = (this.cw - 4 * this.f2) / 3
        }
            ;
        this.uw = function () {
            this.colors = [[0, 0, 0], [0, 0, 0]];
            var k = v().split("");
            if (6 !== k.length)
                for (k = 2; 0 <= k; k--)
                    this.colors[0][k] = g(256 * Math.random());
            else
                for (var x = 2; 0 <= x; x--)
                    this.colors[0][x] = g(4 * (10 * parseInt(k[2 * x]) + parseInt(k[2 * x + 1])));
            this.uy()
        }
            ;
        this.uz = function () {
            return [as(this.colors[0][0], 4), as(this.colors[0][1], 4), as(this.colors[0][2], 4)]
        }
            ;
        this.c7 = function (k, x) {
            this.us = 0;
            var l = (cB - this.cw) / 2;
            k -= (gA - this.c1) / 2;
            x -= l;
            if (0 > k || 0 > x || k >= this.c1 - 1 || x >= this.cw - 1)
                return this.l7 = !1,
                    0 === aJ.pR() && jd.cE(0, !0),
                    c4.c5 = !0,
                    !1;
            if (k < this.f2 || x < this.f2 || k >= this.c1 - this.f2 || x >= this.cw - this.f2)
                return !0;
            if (k < this.f2 + this.ut)
                return x < this.f2 + this.ut && 0 !== this.nl && (this.nl = 0,
                    c4.c5 = !0),
                    !0;
            if (k < 2 * this.f2 + this.ut)
                return !0;
            k -= 2 * this.f2 + this.ut;
            if (x < this.f2 + this.uv)
                return this.us = 1,
                    this.colors[this.nl][0] = g(256 * k / this.uu),
                    c4.c5 = !0;
            if (x < 2 * this.f2 + this.uv)
                return !0;
            if (x < 2 * this.f2 + 2 * this.uv)
                return this.us = 2,
                    this.colors[this.nl][1] = g(256 * k / this.uu),
                    c4.c5 = !0;
            x >= 3 * this.f2 + 2 * this.uv && (this.us = 3,
                this.colors[this.nl][2] = g(256 * k / this.uu),
                c4.c5 = !0);
            return !0
        }
            ;
        this.uy = function () {
            for (var k = 2; 0 <= k; k--)
                this.colors[0][k] = g(this.colors[0][k])
        }
            ;
        this.v0 = function () {
            for (var k = "", x, l = 0; 3 > l; l++)
                x = as(this.colors[0][l], 4),
                    10 > x && (k += "0"),
                    k += x.toString();
            a8(k)
        }
            ;
        this.lh = function (k) {
            0 !== this.us && (k -= 2 * this.f2 + this.ut + (gA - this.c1) / 2,
                this.colors[this.nl][this.us - 1] = g(256 * k / this.uu),
                c4.c5 = !0)
        }
            ;
        this.v1 = function () {
            0 < this.us && (this.us = 0,
                this.uy(),
                this.v0(),
                c4.c5 = !0)
        }
            ;
        this.cG = function () {
            cH.setTransform(1, 0, 0, 1, (gA - this.c1) / 2, (cB - this.cw) / 2);
            cH.fillStyle = hq;
            cH.fillRect(0, 0, this.c1, this.cw);
            cH.lineWidth = op;
            cH.strokeStyle = cK;
            cH.strokeRect(-1, -1, this.c1 + 2, this.cw + 2);
            cH.font = bt + Math.floor(.8 * this.ut) + bu;
            cH.textBaseline = cI;
            cH.textAlign = cJ;
            this.v2(0);
            cH.lineWidth = op;
            this.v3(0);
            this.v3(1);
            this.v3(2);
            cH.setTransform(1, 0, 0, 1, 0, 0)
        }
            ;
        this.v2 = function (k) {
            cH.fillStyle = "rgb(" + this.colors[k][0] + "," + this.colors[k][1] + "," + this.colors[k][2] + ")";
            cH.fillRect(this.f2, this.f2, this.ut, 2 * this.ut + this.f2);
            cH.lineWidth = 2 + op;
            cH.strokeStyle = cK;
            cH.strokeRect(this.f2, this.f2, this.ut, 2 * this.ut + this.f2)
        }
            ;
        this.v3 = function (k) {
            cH.fillStyle = "rgb(" + (0 === k ? 200 : 2 === k ? 50 : 0) + "," + (1 === k ? 200 : 2 === k ? 50 : 0) + "," + (2 === k ? 255 : 0) + ")";
            cH.fillRect(2 * this.f2 + this.ut, this.f2 + k * (this.f2 + this.uv), Math.floor(this.colors[this.nl][k] * this.uu / 255), this.uv);
            cH.strokeStyle = cK;
            cH.strokeRect(2 * this.f2 + this.ut, this.f2 + k * (this.f2 + this.uv), this.uu, this.uv)
        }
    }
    function k5() {
        function g() {
            return 0 === D ? 0 : 1 + (D - 1 + L) % (e9.vF - 1)
        }
        function k() {
            D++;
            K = c4.gY;
            e9.rb(g(), 4) && (I = !0,
                ii.vG(g()))
        }
        function x() {
            0 === D ? jc.vL(3249) : (D === e9.vF - 1 && (D = -1),
                k())
        }
        function l(N, G, M) {
            var Q = Math.floor((gA - y) / 2) + C
                , R = Q + Math.floor(M * (y - 2 * C));
            cH.lineWidth = G;
            cH.beginPath();
            cH.moveTo(Q, N);
            cH.lineTo(R, N);
            cH.lineTo(Math.floor(Q - C + M * y), N + z);
            cH.lineTo(Q - C, N + z);
            cH.closePath()
        }
        var t, n, z, y, A, B, C, F, E, H, J, K, D, L = 0, I;
        this.bp = function () {
            aJ.setState(6);
            t = 0;
            n = 1;
            F = "rgba(0,220,120,0.4)";
            E = "rgba(0,0,0,0.8)";
            this.lq();
            c4.c5 = !0;
            D = 0;
            I = !1;
            k()
        }
            ;
        this.lq = function () {
            y = Math.floor((q ? .5 : .25) * bq);
            A = y + 12;
            z = Math.floor(.125 * y);
            C = 3 * z;
            B = Math.floor(.225 * y);
            J = Math.floor(.3 * z);
            H = oe + J + bu
        }
            ;
        this.vD = function (N) {
            L = N
        }
            ;
        this.vH = function (N) {
            N === g() && (I = !1,
                x())
        }
            ;
        this.rd = function (N) {
            6 !== aJ.pR() || I || (K = c4.gY,
                I = !0,
                ii.vG(N))
        }
            ;
        this.c7 = function (N, G) {
            var M = Math.floor((gA - A) / 2)
                , Q = Math.floor(.5 * (cB - cA - z - B)) + z + cA;
            return N > M && N < M + A && G > Q && G < Q + B ? (this.vM(),
                ja.lh(N, G, !1),
                !0) : !1
        }
            ;
        this.vM = function () {
            e9.vN(3260);
            jX.bp();
            c4.c5 = !0
        }
            ;
        this.dF = function () {
            6 === aJ.pR() && (I ? c4.gY > K + 2E4 && jc.vL(3250) : c4.gY > K + 2E4 && x(),
                t += .07 * n * (16 > t ? 5 + t : 84 < t ? 105 - t : 17),
                100 < t ? (t = 100,
                    n = -1) : 0 > t && (t = 0,
                        n = 1),
                F = "rgba(0," + Math.floor(190 - 1.9 * t) + "," + Math.floor(120 - 1.2 * t) + "," + (.4 + .004 * t) + ")",
                E = "rgba(0," + Math.floor(1.9 * t) + "," + Math.floor(1.2 * t) + "," + (.8 - .004 * t) + ")",
                c4.c5 = !0)
        }
            ;
        this.cG = function () {
            var N = Math.floor((gA - A) / 2)
                , G = Math.floor(.5 * (cB - cA - z - B))
                , M = t / 100;
            cH.fillStyle = E;
            l(G, 3, 1);
            cH.fill();
            cH.fillStyle = F;
            l(G, 3, M);
            cH.fill();
            cH.strokeStyle = cK;
            l(G, 3, 1);
            cH.stroke();
            cH.textAlign = cJ;
            cH.textBaseline = cI;
            cH.font = H;
            cH.fillStyle = cK;
            cH.fillText("Loading", Math.floor(.5 * gA), Math.floor(G + .58 * z));
            G = G + z + cA;
            M = A;
            var Q = B;
            cH.fillStyle = o7;
            cH.fillRect(N, G, M, Q);
            cH.lineWidth = 3;
            cH.strokeStyle = cK;
            cH.strokeRect(N, G, M, Q);
            var R = Math.floor(.3 * Q);
            cH.textAlign = cJ;
            cH.textBaseline = cI;
            cH.font = oe + R + bu;
            cH.fillStyle = cK;
            cH.fillText("Back", Math.floor(N + M / 2), Math.floor(G + Q / 2 + .1 * R))
        }
    }
    function k6() {
        var g;
        this.bp = function () {
            ja.bp();
            jd.bp();
            g = 0;
            vV.bp();
            jX.bp();
            jp.bp()
        }
            ;
        this.setState = function (k) {
            g = k
        }
            ;
        this.pR = function () {
            return g
        }
            ;
        this.vX = function () {
            this.setState(8);
            jk.ta();
            cC.ua();
            cD.l7 = !1;
            nN.c7(-1E3, -1E3)
        }
            ;
        this.ua = function (k) {
            if (!vY)
                return !1;
            if (!(400 > c4.gY)) {
                if ("Enter" === k.key || "Escape" === k.key) {
                    if (this.vZ())
                        return 0 === g && jd.cE(0, !0),
                            !0;
                    if ("Enter" === k.key) {
                        if (0 === g)
                            return jX.va(),
                                !0;
                        if (7 === g)
                            return !0
                    }
                }
                return !1
            }
        }
            ;
        this.vZ = function () {
            return nN.lA() || cC.ua() ? !0 : cD.l7 ? (cD.l7 = !1,
                !0) : !1
        }
            ;
        this.aK = function () {
            c4.c5 = !0;
            8 === g ? ge ? ge = !ge : hn.l7 ? hn.lv() : fm.lv() : 7 === g ? jk.vb() : 6 === g ? jb.vM() : 3 === g ? jc.vc(0, 0) : 2 === g ? du.vc() : 0 === g && (this.vZ() || a9(11))
        }
            ;
        this.c7 = function (k, x) {
            if (!vV.c7(k, x) && vY && !(nN.c7(k, x) || 6 === g && jb.c7(k, x) || 2 === g && du.c7(k, x) || jm.c7(k, x) || cD.c7(k, x) || vd.c7(k, x, !0) || cC.c7(k, x, !0))) {
                jZ.c7(k, x);
                if (0 === g)
                    jX.c7(k, x);
                else if (3 === g)
                    jc.c7(k, x);
                else if (5 === g)
                    je.c7(k, x);
                else if (7 === g && jk.c7(k, x))
                    return;
                uH.c7(k, x)
            }
        }
            ;
        this.lh = function (k, x) {
            jm.lh(k, x);
            if (!jZ.rZ) {
                if (vV.lh(k, x)) {
                    jZ.pN();
                    return
                }
                if (2 === g && du.lh(k, x)) {
                    jZ.pN();
                    return
                }
                if (0 <= cC.pI(k, x)) {
                    jZ.pN();
                    return
                }
                if (cC.lh(k, x)) {
                    jZ.pN();
                    return
                }
                if (ja.lh(k, x, !0))
                    return
            }
            jZ.lh(k, x)
        }
            ;
        this.click = function (k, x) {
            jZ.pO();
            cC.v1() || vd.c7(k, x, !1) || cC.c7(k, x, !1)
        }
            ;
        this.pU = function (k, x, l) {
            cC.m7[1].iY.l7 || 0 === g && jZ.pU(k, l)
        }
            ;
        this.ve = function () {
            ja.rj();
            cC.rj();
            0 === g ? (jd.rj(0),
                jZ.rj()) : 7 === g && jk.lq();
            c4.c5 = !0
        }
            ;
        this.cG = function () {
            if (8 !== g && 10 !== g) {
                cH.imageSmoothingEnabled = !0;
                this.hj();
                jZ.cG();
                jY.cG();
                // draw background territorial.io logo
                var k = Math.floor(.3 * cB)
                    , x = bw.l4("territorial.io")
                    , l = 1.75 * cB / x.width;
                l = l * x.width < .98 * gA ? .98 * gA / x.width : l;
                cH.globalAlpha = .15;
                var t = Math.floor(.5 * (gA - l * x.width));
                t = Math.floor(t / l);
                k = Math.floor(k - .5 * x.height * l);
                k = Math.floor(k / l);
                cH.setTransform(l, 0, 0, l, t, k);
                cH.drawImage(x, t, k);
                cH.setTransform(1, 0, 0, 1, 0, 0);
                cH.globalAlpha = 1;
                vd.cG();
                uH.cG();
                cC.cG();
                jm.cG();
                0 === g ? jX.cG() : 2 === g ? du.cG() : 3 === g ? jc.cG() : 5 === g ? je.cG() : 6 === g ? jb.cG() : 7 === g && jk.cG();
                cC.vg();
                vV.cG();
                cD.cG();
                nN.cG()
            }
        }
            ;
        this.hj = function () {
            if (vY) {
                var k = r / aZ
                    , x = s / aa;
                k = k > x ? k : x;
                cH.setTransform(k, 0, 0, k, Math.floor((r - k * aZ) / 2), Math.floor((s - k * aa) / 2));
                cH.drawImage(hk, 0, 0);
                cH.setTransform(1, 0, 0, 1, 0, 0);
                cH.fillStyle = o7
            } else
                cH.fillStyle = gD;
            cH.fillRect(0, 0, r, s)
        }
    }
    function vj() {
        this.cw = this.c1 = 0;
        this.l7 = !1;
        this.na = 10;
        this.bB = .12;
        this.vl = this.vk = this.us = !1;
        this.bp = function () {
            this.c1 = r < 1 * s ? Math.floor((q ? .94 : .6) * r) : Math.floor((q ? .94 : .6) * s);
            this.c1 -= this.c1 % this.na;
            this.cw = 1 * this.c1;
            this.l7 = !0;
            this.us = !1
        }
            ;
        this.c7 = function (g, k, x) {
            var l = (cB - this.cw) / 2;
            g -= (gA - this.c1) / 2;
            k -= l;
            if (0 > g || 0 > k || g >= this.c1 - 1 || k >= this.cw - 1)
                return 0 === x && (this.l7 = !1,
                    0 === aJ.pR() && jd.cE(0, !0),
                    c4.c5 = !0),
                    !1;
            l = Math.floor(this.c1 / this.na);
            g = as(g, l) + this.na * as(k, l);
            g = 0 > g ? 0 : g >= a5.ne ? a5.ne - 1 : g;
            if (0 === x || 1 === x && !a5.a7[g] || 2 === x && a5.a7[g])
                this.vk = !a5.a7[g],
                    this.vl = this.us = !0,
                    a5.a7[g] = !a5.a7[g],
                    a5.nw(),
                    c4.c5 = !0;
            return !0
        }
            ;
        this.lh = function (g, k) {
            this.us && this.c7(g, k, this.vk ? 1 : 2)
        }
            ;
        this.v1 = function () {
            this.vl && (a3(),
                this.vl = !1);
            this.us = this.vl = !1
        }
            ;
        this.cG = function () {
            cH.imageSmoothingEnabled = !0;
            var g = (gA - this.c1) / 2
                , k = (cB - this.cw) / 2;
            cH.setTransform(1, 0, 0, 1, g, k);
            cH.fillStyle = hq;
            cH.fillRect(0, 0, this.c1, this.cw);
            cH.lineWidth = op;
            cH.strokeStyle = cK;
            cH.strokeRect(-1, -1, this.c1 + 2, this.cw + 2);
            for (var x = Math.floor(this.c1 / this.na), l = (x - 2 * this.bB * x) / a5.c1, t = a5.ne - 1; 0 <= t; t--)
                cH.setTransform(1, 0, 0, 1, Math.floor(g + t % this.na * x), Math.floor(k + as(t, this.na) * x)),
                    a5.a7[t] && (cH.fillStyle = oF,
                        cH.fillRect(0, 0, x, x)),
                    cH.setTransform(l, 0, 0, l, Math.floor(g + t % this.na * x + this.bB * x), Math.floor(k + as(t, this.na) * x + this.bB * x)),
                    cH.drawImage(a5.l0[t], 0, 0);
            cH.setTransform(1, 0, 0, 1, 0, 0);
            cH.imageSmoothingEnabled = !1
        }
    }
    function k7() {
        function g() {
            var n = aJ.pR();
            0 === n ? jX.ta() : 6 === n ? e9.vN(x) : 7 === n ? (jk.ta(),
                e9.close(e9.vo, 3240)) : 8 === n && (jU(),
                    jX.ta());
            aJ.setState(3);
            ja.rj();
            ja.uh[2].nR = k(x);
            c4.c5 = !0
        }
        function k(n) {
            var z;
            for (z = l.length - 1; 0 <= z; z--)
                if (n === l[z].code)
                    return l[z].l;
            return t + n
        }
        var x, l, t;
        this.jM = function () {
            l = [];
            l.push({
                l: "No Server Response",
                code: 1006
            });
            l.push({
                l: "Account successfully saved!",
                code: 3231
            });
            l.push({
                l: "Account Error",
                code: 3232
            });
            l.push({
                l: "No Servers Found",
                code: 3249
            });
            l.push({
                l: "Thanks for the vote.",
                code: 3252
            });
            l.push({
                l: "Please accept Cookies",
                code: 3265
            });
            l.push({
                l: "Invalid Password Format",
                code: 3266
            });
            l.push({
                l: "Lobby Timeout",
                code: 4207
            });
            l.push({
                l: "Invalid Username",
                code: 4214
            });
            l.push({
                l: "User already exists.",
                code: 4224
            });
            l.push({
                l: "No Client Response Error",
                code: 4229
            });
            t = "Error "
        }
            ;
        this.bp = function (n, z) {
            x = z;
            var y = aJ.pR();
            if (6 === y) {
                if (4211 === z) {
                    je.bp(0, 0);
                    return
                }
                if (4214 !== z) {
                    jb.vH(n);
                    return
                }
            } else if (7 === y) {
                if (n !== e9.vo)
                    return
            } else {
                8 === y && (n !== e9.jV || dt || e5.mf(k(z)));
                return
            }
            g()
        }
            ;
        this.vL = function (n) {
            x = n;
            8 === aJ.pR() ? e5.mf(k(n)) : g()
        }
            ;
        this.lq = function () {
            ja.uh[2].nR = k(x)
        }
            ;
        this.c7 = function (n, z) {
            3 === ja.pI(n, z, 3, 1) && this.vc(n, z)
        }
            ;
        this.vc = function (n, z) {
            jX.bp();
            ja.lh(n, z, !1);
            c4.c5 = !0
        }
            ;
        this.cG = function () {
            ja.un()
        }
    }
    function k8() {
        function g() {
            k.push({
                input: document.createElement("INPUT"),
                l7: !1,
                color: x
            });
            var t = k.length - 1;
            k[t].input.setAttribute("type", "text");
            k[t].input.setAttribute("id", "userna");
            k[t].input.value = "";
            k[t].input.style.textAlign = 0 === t ? "center" : "left";
            k[t].input.style.backgroundColor = x;
            k[t].input.style.border = "3px solid " + cK;
            k[t].input.style.color = cK;
            k[t].input.style.position = "absolute";
            k[t].input.readOnly = 3 === t;
            k[t].input.addEventListener("input", function () {
                0 === t && jX.vv()
            })
        }
        var k, x, l;
        this.bp = function () {
            x = "rgba(0,0,0,0.6)";
            l = oM;
            void 0 !== k && this.cE(0, !1);
            k = [];
            g();
            this.lq()
        }
            ;
        this.lq = function () {
            var t = Math.floor(.22 * ja.cw / pF);
            k[0].input.style.font = bt + t + bu;
            k[0].input.style.padding = Math.floor(.3 * t) + "px 5px";
            k[0].input.style.width = Math.floor(ja.c1 / pF - 13) + "px"
        }
            ;
        this.bz = function (t) {
            return k[t]
        }
            ;
        this.rj = function (t) {
            k[t].input.style.left = Math.floor((gA / pF - (ja.c1 / pF - 3) - 7) / 2) + "px";
            0 === t && (k[t].input.style.bottom = Math.floor((cB - ja.fG + ja.f2) / pF) + "px")
        }
            ;
        this.cE = function (t, n) {
            k[t].l7 !== n && ((k[t].l7 = n) ? document.body.appendChild(k[t].input) : document.body.removeChild(k[t].input))
        }
            ;
        this.vw = function (t, n) {
            n && k[t].color === x || !n && k[t].color === l || (k[t].color = n ? x : l,
                k[t].input.style.backgroundColor = k[t].color)
        }
    }
    function kb() {
        this.vz = this.vy = 0;
        var g, k, x, l;
        this.bp = function (t) {
            if (7 === aJ.pR()) {
                g = t;
                k = 0;
                x = c4.gY + 4500;
                l = ji.w4(g) ? 2 : 0;
                aJ.setState(10);
                cH.imageSmoothingEnabled = !0;
                aJ.hj();
                t = bw.l4("loading");
                var n = (q ? .396 : .25) * bq / t.width;
                cH.setTransform(n, 0, 0, n, Math.floor((r - n * t.width) / 2), Math.floor((s - n * t.height) / 2));
                cH.drawImage(t, 0, 0);
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
            ;
        this.eV = function () {
            0 < l && c4.gY > x && (l--,
                x += 4500,
                0 === c4.w6 && 0 === c4.w7 && (0 === l && e9.jV < e9.w8 && (e9.jV += e9.w9),
                    e9.rb(e9.jV, 5)))
        }
            ;
        this.wA = function () {
            10 === aJ.pR() && (k++,
                2 <= k && (ji.wB(g),
                    g = null))
        }
    }
    function kY() {
        function g(P, U) {
            var W = F[P].getContext("2d", {
                alpha: !0
            });
            W.clearRect(0, 0, 48, 48);
            var X = 48 / U.width
                , V = 48 / U.height;
            X = V < X ? V : X;
            W.setTransform(X, 0, 0, X, Math.floor((48 - X * U.width) / 2), Math.floor((48 - X * U.height) / 2));
            W.drawImage(U, 0, 0);
            W.setTransform(1, 0, 0, 1, 0, 0)
        }
        function k(P, U, W, X) {
            X.beginPath();
            X.moveTo(P, P);
            X.lineTo(P + Math.cos(W) * U, P + Math.cos(W + 1.5 * Math.PI) * U);
            X.stroke()
        }
        function x() {
            if (7 === aJ.pR()) {
                for (var P = -1, U = E.length - 1; 0 <= U; U--)
                    if (null === E[U].ll) {
                        P = U;
                        break
                    }
                if (-1 !== P) {
                    U = l(E[P].ws, E[P].seedMap);
                    if (null !== U)
                        E[P].ll = U;
                    else {
                        U = aZ;
                        var W = aa
                            , X = hk
                            , V = pc
                            , na = wy
                            , ba = wz
                            , ca = wo
                            , pa = wp;
                        x0(E[P].ws, E[P].seedMap);
                        x1.x2();
                        var S = document.createElement("canvas");
                        S.width = 128;
                        S.height = 128;
                        var O = S.getContext("2d", {
                            alpha: !1
                        })
                            , T = 128 / aZ
                            , Y = 128 / aa;
                        Y > T && (T = Y);
                        O.imageSmoothingEnabled = !0;
                        O.setTransform(T, 0, 0, T, (128 - T * aZ) / 2, (128 - T * aa) / 2);
                        O.drawImage(hk, 0, 0);
                        aZ = U;
                        aa = W;
                        hk = X;
                        pc = V;
                        wy = na;
                        wz = ba;
                        wo = ca;
                        wp = pa;
                        E[P].ll = S
                    }
                    c4.c5 = !0
                }
            }
        }
        function l(P, U) {
            for (var W = E.length - 1; 0 <= W; W--)
                if (null !== E[W].ll && E[W].ws === P && E[W].seedMap === U)
                    return E[W].ll;
            return null
        }
        function t(P, U) {
            var W, X;
            if (0 === E.length)
                return !1;
            var V = 0;
            var na = B;
            for (X = 0; X < y[1]; X++) {
                var ba = A;
                for (W = 0; W < y[0]; W++) {
                    if (P > ba && P < ba + n && U > na && U < na + n)
                        return ii.x4(E[V].wq),
                            J = E[V].wq !== J ? E[V].wq : -1,
                            c4.c5 = !0;
                    V++;
                    if (V >= E.length)
                        return !1;
                    ba += n + cA
                }
                na += n + cA
            }
            return !1
        }
        var n, z, y, A, B, C, F, E, H, J, K, D, L = ["Joined", "Skipped", "Multiplayer", "Singleplayer"], I = [0, 0, 0, 0], N, G, M, Q, R;
        this.bp = function () {
            R = 0; A
            J = -1;
            aJ.setState(7);
            E = [];
            this.lq();
            var P;
            F = Array(11);
            for (P = F.length; 0 <= P; P--)
                F[P] = document.createElement("canvas"),
                    F[P].width = 48,
                    F[P].height = 48;
            for (P = 0; 7 > P; P++) {
                var U = P + 2
                    , W = F[U - 2].getContext("2d", {
                        alpha: !0
                    })
                    , X = 1.5 * Math.PI;
                W.lineWidth = 2;
                W.strokeStyle = cK;
                W.clearRect(0, 0, 48, 48);
                for (var V = 0; V < U; V++) {
                    var na = X + 2 * Math.PI / U;
                    var ba = X
                        , ca = na
                        , pa = W;
                    pa.fillStyle = dW.wg[V + 1];
                    pa.beginPath();
                    pa.arc(24, 24, 23, ba, ca);
                    pa.lineTo(24, 24);
                    pa.fill();
                    0 !== V && k(24, 23, X, W);
                    X = na
                }
                k(24, 23, 1.5 * Math.PI, W);
                W.beginPath();
                W.arc(24, 24, 23, 0, 2 * Math.PI);
                W.stroke()
            }
            g(7, bw.bz(4));
            g(8, a5.l0[27]);
            g(9, a5.l0[46]);
            g(10, a5.l0[36]);
            c4.c5 = !0
        }
            ;
        this.vb = function () {
            this.ta();
            e9.vN(3240);
            jX.bp();
            c4.c5 = !0
        }
            ;
        this.ta = function () {
            E = [];
            F = []
        }
            ;
        this.lq = function () {
            var P, U;
            y = [0, 0];
            H = [0, 0, 0, 0];
            q ? (K = Math.floor(.8 * .4 * bq),
                D = Math.floor(.56 * K),
                H[0] = cA,
                r < s ? (H[1] = D + 2 * cA,
                    H[2] = r - 3 * H[0],
                    H[3] = uH.cF() - 3 * cA - D,
                    G = Math.floor(.95 * D),
                    M = Math.floor((r - K - cA) / 2),
                    Q = Math.floor(cA + D / 2)) : (H[1] = cA,
                        H[2] = r - 3 * cA - K,
                        H[3] = uH.cF() - 2 * cA,
                        G = Math.floor(.8 * K),
                        H[3] - D < K && (G = Math.floor(.8 * (H[3] - D)),
                            G = mU(D, G)),
                        M = Math.floor(r - K / 2 - cA),
                        Q = Math.floor(cA + D + (H[3] - D) / 2),
                        Q = mU(Q, Math.floor(D + 2 * cA + G / 2)))) : (K = Math.floor(.2016 * bq),
                            D = Math.floor(.56 * K),
                            H[2] = Math.floor(.5 * r),
                            H[3] = Math.floor(.5 * s),
                            H[1] = Math.floor(.45 * (s - H[3])),
                            H[0] = Math.floor((r - H[2]) / 2),
                            G = Math.floor(.75 * D),
                            M = Math.floor(r / 2),
                            Q = Math.floor(H[1] + H[3] + (s - H[3] - H[1]) / 2));
            N = bt + Math.floor(.65 * D / 4) + bu;
            for (P = U = 1; P * U < E.length;)
                H[2] / (P + 1) > H[3] / (U + 1) ? P++ : U++;
            var W = (H[2] - (P - 1) * cA) / P;
            var X = (H[3] - (U - 1) * cA) / U;
            n = W < X ? W : X;
            z = Math.floor(n);
            C = bt + Math.floor(.5 * n / 5) + bu;
            y[0] = P;
            y[1] = U;
            A = H[0] + Math.floor((H[2] - y[0] * n - (y[0] - 1) * cA) / 2);
            B = H[1] + Math.floor((H[3] - y[1] * n - (y[1] - 1) * cA) / 2)
        }
            ;
        this.uI = function (P, U) {
            var W, X = E.length;
            I = P;
            for (W = 0; W < U.length; W++) {
                var V = l(U[W].wo, U[W].wp);
                E.push({
                    wq: U[W].id,
                    jB: U[W].jB,
                    jC: U[W].wr,
                    ws: U[W].wo,
                    seedMap: U[W].wp,
                    joined: U[W].wt,
                    nW: U[W].vR,
                    wu: U[W].wu,
                    ll: V
                })
            }
            for (W = X - 1; 0 <= W; W--)
                E.shift();
            if (-1 !== J)
                for (V = J,
                    J = -1,
                    W = E.length - 1; 0 <= W; W--)
                    if (E[W].wq === V) {
                        J = V;
                        break
                    }
            if (E.length > R || E.length < R)
                R = E.length,
                    this.lq();
            this.wv();
            c4.c5 = !0
        }
            ;
        this.wv = function () {
            for (var P = E.length - 1; 0 <= P; P--)
                null === E[P].ll && setTimeout(x, 0)
        }
            ;
        this.c7 = function (P, U) {
            return 4 * ((P - M) * (P - M) + (U - Q) * (U - Q)) <= G * G ? (this.vb(),
                ja.lh(P, U, !1),
                !0) : t(P, U)
        }
            ;
        this.cG = function () {
            var P = 0
                , U = B;
            cH.imageSmoothingEnabled = !0;
            cH.lineWidth = 3;
            var W = Math.floor(.5 * G);
            cH.fillStyle = o7;
            cH.beginPath();
            cH.arc(M, Q, W, 0, 2 * Math.PI);
            cH.fill();
            cH.strokeStyle = cK;
            cH.beginPath();
            cH.arc(M, Q, W, 0, 2 * Math.PI);
            cH.stroke();
            W = bw.bz(0).height;
            var X = .6 * G / W;
            cH.setTransform(X, 0, 0, X, Math.floor(M - .56 * X * bw.bz(0).width), Math.floor(Q - .5 * X * W));
            cH.drawImage(bw.bz(0), 0, 0);
            cH.setTransform(1, 0, 0, 1, 0, 0);
            cH.fillStyle = o7;
            cH.fillRect(r - K - cA, cA, K, D);
            0 <= J ? (cH.fillStyle = oF,
                cH.fillRect(r - K - cA, cA, K, Math.floor(.25 * D))) : (cH.fillStyle = oa,
                    cH.fillRect(r - K - cA, cA + Math.floor(.25 * D), K, Math.floor(.25 * D)));
            cH.strokeStyle = cK;
            cH.strokeRect(r - K - cA, cA, K, D);
            cH.fillStyle = cK;
            cH.font = N;
            cH.textBaseline = cI;
            W = Math.floor(.04 * K);
            X = Math.floor(.08 * D);
            for (var V = 3; 0 <= V; V--) {
                var na = Math.floor(cA + (V + 1) * (D + 2 * X) / 5 - X);
                cH.textAlign = mZ;
                cH.fillText(L[V], r - K - cA + W, na);
                cH.textAlign = oc;
                cH.fillText(eL.gF(I[V]), r - cA - W, na)
            }
            if (0 !== E.length)
                for (X = 0; X < y[1]; X++) {
                    na = A;
                    for (W = 0; W < y[0]; W++) {
                        V = P;
                        var ba = Math.floor(na)
                            , ca = Math.floor(U);
                        if (null === E[V].ll)
                            cH.fillStyle = o7,
                                cH.fillRect(ba, ca, z, z);
                        else {
                            var pa = z / 128;
                            cH.setTransform(pa, 0, 0, pa, ba, ca);
                            cH.drawImage(E[V].ll, 0, 0);
                            cH.setTransform(1, 0, 0, 1, 0, 0)
                        }
                        if (J === E[V].wq) {
                            pa = ba;
                            var S = ca
                                , O = Math.floor(.2 * z)
                                , T = Math.floor(.3 * O);
                            cH.fillStyle = oH;
                            cH.fillRect(pa + z - O, S, O, O);
                            cH.fillStyle = gD;
                            cH.fillRect(pa + z - O, S, 2, O);
                            cH.fillRect(pa + z - O, S + O - 2, O, 2);
                            fm.m4(pa + z - O + T, S + T, O - 2 * T);
                            cH.setTransform(1, 0, 0, 1, 0, 0);
                            cH.lineWidth = 3;
                            cH.fillStyle = oH
                        } else
                            cH.fillStyle = o6;
                        S = Math.floor(n / 4);
                        cH.fillRect(ba, Math.floor(ca + .8 * n), z, Math.floor(n / 5));
                        cH.fillRect(ba, ca, S, S);
                        cH.fillStyle = gD;
                        cH.fillRect(ba, Math.floor(ca + .8 * n), z, 2);
                        cH.fillRect(ba + S - 2, ca, 2, S);
                        cH.fillRect(ba, ca + S - 2, S, 2);
                        cH.font = C;
                        cH.textBaseline = cI;
                        cH.textAlign = mZ;
                        cH.fillStyle = oU;
                        cH.fillText(E[V].joined.toString(), Math.floor(ba + .07 * n), Math.floor(ca + .9 * n));
                        256 >= E[V].wu && (cH.textAlign = cJ,
                            cH.fillStyle = oD,
                            cH.fillText(E[V].wu.toString(), Math.floor(ba + .5 * n), Math.floor(ca + .9 * n)));
                        cH.textAlign = oc;
                        cH.fillStyle = oP;
                        cH.fillText(E[V].nW.toString(), Math.floor(ba + .93 * n), Math.floor(ca + .9 * n));
                        cH.strokeStyle = oV;
                        cH.strokeRect(ba, ca, z, z);
                        O = Math.floor(.16 * n);
                        pa = O / 48;
                        cH.setTransform(pa, 0, 0, pa, Math.floor(ba + (S - O) / 2), Math.floor(ca + (S - O) / 2));
                        F.length > E[V].jB && cH.drawImage(F[E[V].jB], 0, 0);
                        cH.setTransform(1, 0, 0, 1, 0, 0);
                        E[V].jC && (V = bw.bz(4),
                            pa = .5 * n / V.width,
                            cH.setTransform(pa, 0, 0, pa, Math.floor(ba + (n - pa * V.width) / 2), Math.floor(ca + (n - pa * V.height) / 2)),
                            cH.globalAlpha = .6,
                            cH.drawImage(V, 0, 0),
                            cH.globalAlpha = 1,
                            cH.setTransform(1, 0, 0, 1, 0, 0));
                        P++;
                        if (P >= E.length)
                            return;
                        na += n + cA
                    }
                    U += n + cA
                }
        }
    }
    function k9() {
        this.bp = function (g, k) {
            aJ.setState(5);
            ja.lh(g, k, !1);
            c4.c5 = !0
        }
            ;
        this.cG = function () {
            ja.uo()
        }
            ;
        this.c7 = function (g, k) {
            var x = ja.pI(g, k, 5, 2);
            5 === x ? aC() : 6 === x && (jX.bp(),
                ja.lh(g, k, !1),
                c4.c5 = !0)
        }
    }
    function kA() {
        function g(x, l, t, n, z, y, A, B, C) {
            cH.fillStyle = z;
            cH.fillRect(x, l, t, n);
            0 <= B && (cH.fillStyle = "rgba(" + 22 * B + "," + (110 - 22 * B) + ",0,0.75)",
                cH.fillRect(x, l, (1 + B) * t / 6, n));
            0 < C && (cH.fillStyle = "rgba(255,255,255,0.3)",
                cH.fillRect(x, l, C * t / b8, n));
            cH.strokeStyle = cK;
            cH.strokeRect(x, l, t, n);
            0 !== y && (cH.fillStyle = cK,
                cH.font = bt + Math.floor(y * n) + bu,
                cH.fillText(A, Math.floor(x + t / 2), Math.floor(l + .52 * n)))
        }
        var k = [0, 0, 0, 0];
        this.dv = [{
            bD: 0,
            mm: 512
        }];
        this.bp = function () {
            aJ.setState(2);
            if (settings.customMapFileBtn) jp.cE(true); // custom map file select button, removed in 1.83.0
            this.lq();
            c4.c5 = !0
        };
        this.ta = function () {
            if (settings.customMapFileBtn) jp.cE(false) // custom map file select button, removed in 1.83.0
        };
        this.lq = function () {
            if (settings.customMapFileBtn) jp.lq(); // custom map file select button, removed in 1.83.0
            k[2] = Math.floor((q ? .49 : .4) * bq);
            k[1] = Math.floor((s - k[2] / 6 - this.dv.length * (cA + k[2] / 10)) / 2);
            k[0] = Math.floor((r - k[2]) / 2);
            jl.l7 && jl.lq()
        };
        this.xD = function (x) {
            var l;
            if (6 < x)
                this.dv = [{
                    bD: 0,
                    mm: 512
                }];
            else {
                this.dv = [];
                for (l = 0; l < x + 2; l++)
                    this.dv.push({
                        bD: 0,
                        mm: 0
                    });
                this.xE()
            }
        }
            ;
        this.vc = function () {
            c4.c5 = !0;
            jl.l7 ? jl.l7 = !1 : (this.ta(),
                jX.bp())
        }
            ;
        this.jF = function () {
            for (var x = 0, l = this.dv.length - 1; 0 <= l; l--)
                x += this.dv[l].mm;
            return x
        }
            ;
        this.lh = function (x, l) {
            return jl.l7 && jl.lh(x, l) ? !0 : -1 === this.pI(x, l) ? !1 : !0
        }
            ;
        this.xF = function () {
            e9.jV = 0;
            e9.rb(0, 3) && ii.xG(0);
            aJ.vX();
            if (!jD.jE) {
                var x = this.dv.length - 2;
                x = 0 > x ? 7 : x;
                j8(Math.floor(16384 * Math.random()), 0, [{
                    name: jX.xH(),
                    id: 0,
                    xI: cC.m7[2].iY.uz(),
                    xJ: 0
                }], x, !1)
            }
        }
            ;
        this.click = function (x, l) {
            return !1
        }
            ;
        this.c7 = function (x, l) {
            if (cD.l7 || cC.m7[1].iY.l7 || cC.m7[2].iY.l7)
                return !1;
            if (jl.l7)
                return jl.c7(x, l);
            var t = this.pI(x, l);
            if (-1 === t)
                return !1;
            if (100 === t)
                return !0;
            if (0 === t)
                return this.vc(),
                    !0;
            if (1 === t)
                return jl.show(),
                    !0;
            if (2 === t)
                return this.ta(),
                    this.xF(),
                    !0;
            if (27 === t)
                return 8 > this.dv.length && (this.dv.push({
                    bD: 0,
                    mm: b8
                }),
                    this.xE(),
                    this.lq(),
                    c4.c5 = !0),
                    !0;
            var n = Math.floor((t - 3) / 3);
            if (0 === t % 3)
                return 1 < this.dv.length && (this.dv.splice(n, 1),
                    this.lq(),
                    c4.c5 = !0),
                    !0;
            var z = (k[2] - k[2] / 10 - 2 * cA) / 2;
            if (1 === t % 3) {
                if (0 === n && 1 === this.dv[n].mm)
                    return !0;
                x < k[0] + k[2] - 1.5 * z - cA ? this.dv[n].bD-- : this.dv[n].bD++;
                0 > this.dv[n].bD ? this.dv[n].bD = 5 : 5 < this.dv[n].bD && (this.dv[n].bD = 0);
                return c4.c5 = !0
            }
            c4.c5 = !0;
            var y = (x - (k[0] + k[2] - z)) / z - .5;
            y = Math.floor((0 > y ? -(y * y) : y * y) * b8);
            y = 0 === y ? 1 : y;
            z = b8;
            for (t = this.dv.length - 1; 0 <= t; t--)
                n !== t && (z -= this.dv[t].mm);
            if (0 > y) {
                if (1 === this.dv[n].mm)
                    return this.dv[n].mm = z,
                        !0
            } else if (this.dv[n].mm === z)
                return this.dv[n].mm = 1,
                    !0;
            this.dv[n].mm += y;
            1 > this.dv[n].mm ? this.dv[n].mm = 1 : this.dv[n].mm > z && (this.dv[n].mm = z);
            return !0
        }
            ;
        this.xE = function () {
            for (var x = Math.floor(b8 / this.dv.length), l = b8 % this.dv.length, t = this.dv.length - 1; 0 <= t; t--)
                this.dv[t].mm = x;
            this.dv[0].mm += l
        }
            ;
        this.pI = function (x, l) {
            var t, n = (k[2] - 2 * cA) / 3, z = k[2] / 6;
            if (x < k[0] || l < k[1] || x >= k[0] + k[2])
                return -1;
            if (l < k[1] + z)
                return x < k[0] + n ? 0 : x < k[0] + n + cA ? -1 : x < k[0] + 2 * n + cA ? 1 : x < k[0] + 2 * n + 2 * cA ? -1 : 2;
            var y = k[2] / 10;
            n = (k[2] - y - 2 * cA) / 2;
            for (t = 0; t < this.dv.length; t++) {
                var A = k[1] + z + cA + t * (y + cA);
                if (l < A)
                    return -1;
                if (!(l > A + y))
                    return x < k[0] + y ? 3 + 3 * t : x < k[0] + y + cA ? -1 : x < k[0] + k[2] - n - cA ? 4 + 3 * t : x < k[0] + k[2] - n ? -1 : 5 + 3 * t
            }
            return 8 > this.dv.length ? (A = k[1] + z + cA + this.dv.length * (y + cA),
                l < A || l > A + y || x > k[0] + y ? -1 : 27) : -1
        }
            ;
        this.cG = function () {
            var x;
            cH.lineWidth = 2;
            cH.textAlign = cJ;
            cH.textBaseline = cI;
            var l = (k[2] - 2 * cA) / 3
                , t = k[2] / 6;
            g(k[0], k[1], l, t, "rgba(128,0,0,0.75)", .4, "Back", -1, -1);
            g(k[0] + l + cA, k[1], l, t, "rgba(0,128,128,0.75)", .4, "Maps", -1, -1);
            g(k[0] + k[2] - l, k[1], l, t, "rgba(0,128,0,0.75)", .4, "Start", -1, -1);
            var n = k[2] / 10;
            l = (k[2] - n - 2 * cA) / 2;
            for (x = 0; x < this.dv.length; x++) {
                var z = k[1] + t + cA + x * (n + cA);
                g(k[0], z, n, n, "rgba(0,128,0,0.75)", 0, null, -1);
                g(k[0] + n + cA, z, l, n, hq, .4, this.xL(x), this.dv[x].bD, -1);
                g(k[0] + k[2] - l, z, l, n, hq, .4, this.xM(x), -1, this.dv[x].mm)
            }
            if (8 > this.dv.length) {
                z = k[1] + t + cA + this.dv.length * (n + cA);
                g(k[0], z, n, n, "rgba(128,128,20,0.75)", 0, null, -1, -1);
                x = k[0];
                cH.fillStyle = cK;
                l = mU(2, Math.floor(.5 * n));
                l -= l % 2;
                t = mU(2, Math.floor(.1 * n));
                t -= t % 2;
                n = Math.floor((n - l) / 2);
                var y = Math.floor(n + (l - t) / 2);
                cH.fillRect(x + n, z + y, l, t);
                cH.fillRect(x + y, z + n, t, l)
            }
            jl.l7 && jl.cG()
        }
            ;
        this.xL = function (x) {
            return 0 === x && 1 === this.dv[x].mm ? "You" : dG.dl[this.dv[x].bD]
        }
            ;
        this.xM = function (x) {
            return 1 === this.dv[x].mm ? "1 Player" : this.dv[x].mm + " Players"
        }
    }
    function ow() {
        this.c1 = this.b3 = 0;
        this.m7 = null;
        this.bp = function () {
            this.m7 = [];
            this.m7.push({
                fF: 0,
                fG: 0,
                lw: q,
                iY: null
            });
            this.m7.push({
                fF: 0,
                fG: 0,
                lw: !1,
                iY: new vj
            });
            this.m7.push({
                fF: 0,
                fG: 0,
                lw: !1,
                iY: new ur
            });
            this.m7[2].iY.uw();
            this.b3 = this.m7.length;
            this.c1 = 0
        }
            ;
        this.rj = function () {
            this.c1 = Math.floor((q ? .063 : .04) * bq);
            this.c1 += 4 - this.c1 % 4;
            this.m7[0].fF = cA;
            this.m7[0].fG = cB - this.c1 - cA;
            for (var g = 1; g < this.b3; g++)
                this.m7[g].fF = this.m7[g - 1].fF + Math.floor(q ? 1.5 * cA : 3.7 * cA) + this.c1,
                    this.m7[g].fG = this.m7[0].fG
        }
            ;
        this.pI = function (g, k) {
            if (!bw.bx())
                return -1;
            for (var x = this.b3 - 1; 0 <= x; x--)
                if (g >= this.m7[x].fF && k >= this.m7[x].fG && g < this.m7[x].fF + this.c1 && k < this.m7[x].fG + this.c1)
                    return x;
            return -1
        }
            ;
        this.xP = function () {
            for (var g = 2; 1 <= g; g--)
                if (this.m7[g].iY.l7)
                    return !0;
            return !1
        }
            ;
        this.ua = function () {
            return this.m7[1].iY.l7 ? (this.m7[1].iY.c7(-5E3, -5E3, 0),
                !0) : this.m7[2].iY.l7 ? (this.m7[2].iY.c7(-5E3, -5E3),
                    !0) : !1
        }
            ;
        this.c7 = function (g, k, x) {
            if (x) {
                if (this.m7[1].iY.l7)
                    return this.m7[1].iY.c7(g, k, 0),
                        !0;
                if (this.m7[2].iY.l7)
                    return this.m7[2].iY.c7(g, k),
                        !0
            }
            g = this.pI(g, k);
            if (x) {
                if (0 === g)
                    return this.m7[g].lw = !this.m7[g].lw,
                        q = this.m7[g].lw,
                        jj.xQ(),
                        a1(this.m7[0].lw, !1),
                        !0;
                if (1 <= g && 3 > g)
                    return this.m7[g].iY.bp(),
                        jX.ta(),
                        c4.c5 = !0
            }
            return !1
        }
            ;
        this.lh = function (g, k) {
            return this.m7[1].iY.l7 ? (this.m7[1].iY.lh(g, k),
                !0) : this.m7[2].iY.l7 ? (this.m7[2].iY.lh(g),
                    !0) : !1
        }
            ;
        this.v1 = function () {
            for (var g = 2; 1 <= g; g--)
                if (this.m7[g].iY.l7)
                    return this.m7[g].iY.v1(),
                        !0;
            return !1
        }
            ;
        this.cG = function () {
            if (bw.bx()) {
                cH.imageSmoothingEnabled = !0;
                for (var g = this.b3 - 1; 0 <= g; g--)
                    cH.fillStyle = this.m7[g].lw ? mR : hq,
                        cH.fillRect(this.m7[g].fF, this.m7[g].fG, this.c1, this.c1),
                        0 === g ? this.xR(g, bw.bz(15)) : 1 === g ? this.xS() : 2 === g && this.xT(),
                        cH.setTransform(1, 0, 0, 1, 0, 0),
                        cH.lineWidth = op,
                        cH.strokeStyle = cK,
                        cH.strokeRect(this.m7[g].fF, this.m7[g].fG, this.c1, this.c1);
                cH.imageSmoothingEnabled = !1
            }
        }
            ;
        this.xR = function (g, k) {
            var x = .08 * this.c1
                , l = (this.c1 - 2 * x) / k.width;
            cH.setTransform(l, 0, 0, l, this.m7[g].fF + x, this.m7[g].fG + (this.c1 - l * k.height) / 2);
            cH.drawImage(k, 0, 0)
        }
            ;
        this.xS = function () {
            var g = .06 * this.c1
                , k = (this.c1 - 2 * g) / a5.c1;
            cH.setTransform(k, 0, 0, k, this.m7[1].fF + g, this.m7[1].fG + g);
            cH.drawImage(a5.l0[4], 0, 0)
        }
            ;
        this.xT = function () {
            cH.setTransform(1, 0, 0, 1, this.m7[2].fF, this.m7[2].fG);
            for (var g = this.c1 / 4, k = 3; 0 <= k; k--)
                for (var x = 3; 0 <= x; x--)
                    cH.fillStyle = "rgb(" + Math.floor(367 * (k + 1) * (x + 1) % 256) + "," + Math.floor(687 * (k + 1) * (x + 1) % 256) + "," + Math.floor(651 * (k + 1) * (x + 1) % 256) + ")",
                        cH.fillRect(k * g, x * g, g, g)
        }
            ;
        this.vg = function () {
            for (var g = 2; 1 <= g; g--)
                if (this.m7[g].iY.l7) {
                    this.m7[g].iY.cG();
                    break
                }
        }
    }
    function kB() {
        function g() {
            if (0 !== t.indexOf("vote "))
                return !1;
            var n = t.split(" ");
            if (2 !== n.length)
                return !1;
            jX.xU = n[1];
            k();
            e9.rb(0, 7) && ii.xf(0);
            jc.vL(3252);
            return !0
        }
        function k() {
            t = a();
            jd.bz(0).input.value = t;
            jd.vw(0, !0)
        }
        function x() {
            if (0 !== t.indexOf("account "))
                return !1;
            var n = t.split(" ");
            if (2 !== n.length)
                return k(),
                    jc.vL(3266),
                    !0;
            var z = Math.floor(Math.pow(2, 48));
            n = parseInt(m.n(n[1]));
            if (0 >= n || n >= z)
                return k(),
                    jc.vL(3266),
                    !0;
            if (o(n))
                return k(),
                    jc.vL(3231),
                    !0;
            k();
            5 <= d ? jc.vL(3232) : (jc.vL(3265),
                vV.l7 = !0,
                vV.bs = -1);
            return !0
        }
        function l() {
            if (void 0 !== t && m.iF(t))
                return jd.vw(0, !0),
                    !0;
            jd.vw(0, !1);
            return !1
        }
        var t;
        this.xU = "";
        this.xV = -7E3;
        this.bp = function () {
            aJ.setState(0);
            ja.rj();
            jd.cE(0, !0);
            jd.rj(0);
            jY.bp();
            cC.rj();
            void 0 === t && (t = a(),
                jd.bz(0).input.value = t,
                l())
        }
            ;
        this.ta = function () {
            jd.cE(0, !1)
        }
            ;
        this.xX = function (n) {
            return 0 === n ? ja.c1 : 1 === n ? Math.floor(.3 * ja.cw) : 2 === n ? jd.bz(0).input.style.font : t
        }
            ;
        this.vv = function () {
            t = jd.bz(0).input.value.trim();
            l();
            if ("password" === t || "account" === t) {
                var n = m.z(j().toString());
                t = "account " + n;
                jd.bz(0).input.value = t
            }
        }
            ;
        this.c7 = function (n, z) {
            c4.xY();
            1 === ja.pI(n, z, 1, 1) ? x() || g() || (a9(10),
                l() ? (this.ta(),
                    w(t),
                    du.bp()) : jc.vL(4214)) : 0 === ja.pI(n, z, 0, 1) && this.va()
        }
            ;
        this.va = function () {
            x() || g() || (a9(10),
                void 0 !== t && m.iF(t) && 40 === t.charCodeAt(0) && 41 === t.charCodeAt(2) ? jb.vD(Math.abs(t.charCodeAt(1)) + 7) : jb.vD(jm.xd - 1),
                l() ? bw.bx() ? (this.ta(),
                    w(t),
                    jb.bp()) : jc.vL(3228) : jc.vL(4214))
        }
            ;
        this.xh = function () {
            return !cC.xP() && !cD.l7 && !nN.l7
        }
            ;
        this.cG = function () {
            if (this.xh()) {
                // draw foreground territorial.io logo
                cH.imageSmoothingEnabled = !0;
                var n = bw.l4("territorial.io")
                    , z = 1.1 * ja.c1 / n.width;
                cH.setTransform(z, 0, 0, z, Math.floor((gA - z * n.width) / 2), ja.fG - z * n.height - .72 * ja.cw);
                cH.drawImage(n, 0, 0);
                cH.setTransform(1, 0, 0, 1, 0, 0);
                ja.ul()
            }
        }
            ;
        this.xH = function () {
            return t
        }
    }
    function kC() {
        function g(n, z, y, A) {
            l[n] = z;
            x[n] = new Image; 0
            x[n].onload = function () {
                if (0 < y) {
                    var B, C, F = document.createElement("canvas"), E = x[n].width, H = x[n].height;
                    F.width = E;
                    F.height = H;
                    var J = F.getContext("2d", {
                        alpha: !0
                    });
                    J.drawImage(x[n], 0, 0);
                    var K = J.getImageData(0, 0, E, H)
                        , D = K.data;
                    if (3 > y) {
                        var L = 2 === y ? 160 : 600;
                        for (B = E - 1; 0 <= B; B--)
                            for (C = H - 1; 0 <= C; C--) {
                                var I = 4 * (B + C * E);
                                D[I] + D[I + 1] + D[I + 2] < L && (D[I + 3] = Math.floor(255 * (D[I] + D[I + 1] + D[I + 2]) / L))
                            }
                    } else if (3 === y)
                        for (B = E - 1; 0 <= B; B--)
                            for (C = H - 1; 0 <= C; C--)
                                I = 4 * (B + C * E),
                                    0 === D[I] && 200 < D[I + 1] && 0 === D[I + 2] && (D[I + 3] = 0);
                    else if (4 === y)
                        for (B = E - 1; 0 <= B; B--)
                            for (C = H - 1; 0 <= C; C--)
                                I = 4 * (B + C * E),
                                    D[I + 1] > D[I] + 20 && D[I + 1] > D[I + 2] + 20 && 40 > D[I] + D[2] && (D[I + 3] = 255 - D[I + 1],
                                        D[I] = D[I + 1] = D[I + 2] = D[I]);
                    else if (5 === y)
                        for (B = E - 1; 0 <= B; B--)
                            for (C = H - 1; 0 <= C; C--)
                                I = 4 * (B + C * E),
                                    200 < D[I + 1] && D[I + 1] - 20 > D[I] && D[I + 1] - 20 > D[I + 2] ? 40 > D[I] + D[I + 2] ? D[I + 3] = 0 : (D[I + 3] = D[I],
                                        D[I] = 255,
                                        D[I + 1] = 255,
                                        D[I + 2] = 255) : 50 > D[I] && 50 > D[I + 1] && 50 > D[I + 2] && (50 > D[I] + D[I + 1] + D[I + 2] ? (D[I + 1] = D[I + 1],
                                            D[I + 3] = 180) : (D[I + 1] = D[I + 1],
                                                D[I + 3] = 180 + Math.floor(75 * (D[I] + D[I + 1] + D[I + 2] - 50) / 100)));
                    else if (6 === y)
                        for (B = E - 1; 0 <= B; B--)
                            for (C = H - 1; 0 <= C; C--)
                                I = 4 * (B + C * E),
                                    D[I + 3] = Math.floor(255 * (D[I] + D[I + 1] + D[I + 2]) / 765),
                                    D[I] = D[I + 1] = D[I + 2] = 255;
                    else if (7 === y)
                        for (B = E - 1; 0 <= B; B--)
                            for (C = H - 1; 0 <= C; C--)
                                I = 4 * (B + C * E),
                                    D[I + 1] > D[I + 2] + 10 && (D[I + 3] = D[I],
                                        D[I + 1] = D[I + 2]);
                    J.putImageData(K, 0, 0);
                    x[n] = F
                }
                k--;
                bw.bx() && (uH.bv(),
                    hm.kw(),
                    a5.bp(),
                    vd.ud([x[8], x[16], x[7], x[9], x[10]], [!b, 0 === d, !0, !1, !0]),
                    c4.c5 = !0,
                    x[7] = t,
                    x[8] = t,
                    x[9] = t,
                    x[10] = t)
            }
                ;
            x[n].src = A
        }
        var k, x, l, t;
        this.bp = function () {
            if (void 0 === x) {
                k = 20;
                x = Array(k);
                l = Array(k);
                t = document.createElement("canvas");
                t.width = 1;
                t.height = 1;
                for (var n = k - 1; 0 <= n; n--)
                    x[n] = t;
                g(0, "exit", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
                g(1, "victory", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg==");
                g(2, "defeat", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC");
                g(3, "orders", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAABICAMAAACgJlDYAAAAGFBMVEUAAAAqLCpGSEVkZmOHiYanqabJzMj///+NZwUtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE1OjMxOjQxKzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNTo0MToxOCswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxNTo0MToxOCswMzozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjIiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1w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");
                g(4, "crown", 4, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC");
                g(5, "arena", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC");
                g(6, "territorial.io", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjIAAABBCAIAAABEh9lIAAAACXBIWXMAAFxGAABcRgEUlENBAAAJJWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNTo1OSswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMjNUMTM6MjY6MDUrMDM6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZGZmYjhkLWEyNDEtMTg0Mi1hNGYxLTk2ODMyZGFjYThjYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE4YTU4YWFiLWE4ODYtNWI0Ni04OTk1LTI3MTdiYWZmOWMzYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjNhNTMxM2RiLWY0ZGItN2Q0Mi1hZDc1LTEyMTJiNGE0NThjZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6M2E1MzEzZGItZjRkYi03ZDQyLWFkNzUtMTIxMmI0YTQ1OGNlIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDEzOjI1OjU5KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4NjhhNzU5LWRjNDctNGM0My1iYzA1LTllM2ZjOGMwZjY0YSIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0yM1QxMzoyNjowNSswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmOGRmZmI4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");
                g(7, "youtube", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC");
                g(8, "googleplay", 3, "data:image/png;base64,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");
                g(9, "discord", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
                g(10, "insta", 3, "data:image/png;base64,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");
                g(11, "emojis", 4, "data:image/png;base64,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");
                g(12, "flags", 3, "data:image/png;base64,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");
                g(13, "bestTeam", 5, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACvCAMAAAAVOLbTAAAAtFBMVEUAAAABAxsXAwACCQwXBTIoBg84BAAJEhJOAAJGAR5lAAASHBx9AACaAACwAAEcKyobMgAVMkUnOjgNWAA5TEq8LSUrVlgocYAWgge4TEJOa2gFjSBnamdCdXO9W1QDl0V1dsa6bmZoi4RTkpE3nZpUogB3icmciYEMuIkAxLNiqcxuvABvsrRXvb+QsqOwsK062M0A/wC9wb6D19JV/1bX2teS/5Hj5+TD9sy7/7vl/u3///93TxdPAAASr0lEQVR42u2cC3uaShOAEcpFwKBo0VppTsXUpkXpwRAa8///1zeX3WXxnjRpzvM9mdP2RLOXl5nZ2Qu7a/x7RO535O7F5FiNxv5Xd/e/t9vHV5Tt74f7uwtQgOPxL8j29/0ZlHvJUdfVK0mtaB5OoNz/ZoxyOXONV5N4VpTMs70/hvJAvy9nkfHqEs1Kquzh7hDK3W8GMf6SMMz2bh/lDr2kXhp/UWZ1y0iGTlKNMIUF/xkWyGtUb1HBovS41FkMjaQMmITTW4T0wiCqaBa30FgECvpJEcgMLko70wvpA8S1qHDxbdH4i6HaDuvEcDWxLsO5MAlxaNKw/G5QMLBV3ITdQEgL52VIRImqBq4Q/eVeoYB5avJYIwgiIYrmHAv7lnEqjQYS6DVwiKmEiRDlHri4FUOyOB6NYhCN5hSLqOUkrgJhDiyd6oiYZYahTqCgeVwmwUQsOs7RiqhFSEueIVEcI1WFYClYLQYrhWKsG0GyqZCEcYiGYA77iCVtL4D3IwCBSA4oNJE1IAtpIK5JLQZ5SsUeCyjT0TSdg6Qp4xANV7RXg8GVSMtTGms/HadhdUChaTrPoIJpPEW1uFIthLIVngIokDawgiTNUBoarGmXRdiGK2Fgdx/YUCCsjpSLzpLAckEvMaOMqBEZaJ86ZhRQynRkeo4ZJdmiRUNP3a6C7R9FsfQtUgx8bbXTcZIEMYhjkSWx4Xgm1iW8xa3QQgaGt8qQrgIZXN/3iSZdLIgmZRioSFVCzYEcII5HjeUxTdBEL7QOJ0kEx0JwQBVGOp/qjvsbUMBVChFToNg0SxzfZ5pA0QCMxiJdNaLnBd+aJnNOEqn4KB0W/S8RdlmkSWASBxQfZxrKDJ3FQFeZGdJXoNzU9Fk8QcMw5GMuq0SFB6pmnkYBuDqyiAjAKS1MySQNhycKt9OMy6SnC8BZ7ggllihxMs2yyCMOD7N5jm3E4MaKRbkqe8gUq4ltJ8jgIacqIjUpmSRNEstGfXiiXB8ypMkokg4IznJv/AteaxhNYwbvtmUWj6EcI6GMVAOVr+IPNExK7ySoO+U1TUomMWxWhyoV0zeN2TCgI3ow7nZQ0mxheZjHkSxQgoX1JNxgqUUwB4JkCRnUToSLSxdWKUFtgSdNzsX6vintI9xPolSyWaCFACV2UBWOo1B8J844a0StBq0whTAFteepyWnMJM8zjF1pzMGLUyIJqk2RYLG+Fy2wPLKjbEJ7KGih1FYowsl8cyxYOJJMoR+P0yzPV5kln9hMc4RJLAN+PUJoNA+QjGU78BVKY59m1HIABdQSSE0qj/dc9EtqryL6eJ6RpKtFR9F65mIFII5nTSl4RdI8kTKPI+1uyAc7iiLa0CJxhIMZk2HftDHQeANpIkKZJ17oe3YUKRJIEkRgrNCL5lOVEM3jcJTqDyd94X9evBDt5wiKpdQCoYVRzJ8/f97cTPrCL5mFUFKbH9TXhD+B8mU6ZZ7+5OYGiuqLBkRlieBwBgUsRCy+M/mJcoMs1hjj44jiGjQdVxGEJOqjyciYDpWCFrRFMaxsX7fPERRLWoiUSpmGpJafE6cxEQWVeZZ4iqMH0tBEHIMEyQByOsMbUsqQHtAX9hFx8BSKsJB4xBsgARk6ZCLyAqxknqWO4gi7XV/ReIlQHpqRzOMNqQiwTxP0s7ZS9lDQRDtBCS3ELOCmnbGqBUKK6QuFdD+ghAIG6qFEI2Ge0O/fMMrEESjubvs5jEJqAfWLwAXlMAq4SyhMhF3PfJ7HqIlez/8gxOtdIQ31RpRGmEeS3PRFkaRdaj/NmHnPQKJTB5Q8hZBL1reHsiTVikaj2Xy+Tv3e1VVof/jQwelHpwOKubrqhcl6TijYPaF5bPEsE3w4KNGL0kyMD9xmILyDIsZc7AkQRwcemsD3+jfs/1CuQR3wdIYoc/+q51kdNZwCGqd35cMv5rMZOQqaWbbBocOFBeNVnioUyziKYkiUIEpXq/HAI1c0hwQzwdiELLPZbFms15Fv7k4CIB6t1wWgzJAEI+WQSCbkWOhtq9UichutGOe1EkDbXWxWY5ufBVluONDl0OMBSVHMg4OTnjn8armERDk1Q1SpVIk9Xm1WwGeeNZDuK4EfQthsYPqTCbdvK1uvqbaRtpoFnbm21Eac6zWUwW0QPR6KcNSzIUoSn3Jbiiyicw7UYyzYShzU4bsYLFAU+rJhutpsVqn2BSptvYZeKhTdAeYfZGDxjkcGz1SEM861oIyfCCyDxhUuE3JI89J1oS8cxosNySJpvgtmRTl3mjyhP+By/FDGFRlsj6KovjmQ3QsX0hEdDcYxZ67ZJkCVrEEAJtMB55EIeUK7/EAixO3F/UOBXw7kZOdPqsWCbBFboQEbbdushexYCRr2FcH43QSaDWnW30VxL0OR3iHsnHSBBGNa2zYIAS2mYBjdSiaGwF7oJQsA6creG/vYp6LwwNxjy2DLzgcQ0xyt3aQbIgEQEmElrS054VUonoJAYARHo4TgGSgeDbyIppvkm8xpYpolbIMgX0GWrBm0khZvnPEmH3cFR38y/BMUjE99CFDYAY817ScbVokAacNo6QZjG/JCUOljlJw8D8WXIyegmfTD3lWo2Wbxa7PZglRVBShfQASMcBnNSmDVEMaTVNCeVo63IOsACo2/JuCC3Y7sp9LVr9VqRSy4BP71E8oXZhEuo6zUsQFFjAURxYdSn46C46+fPP7SUKyEQH6QlPh6p/7ySYeRVuKG3fnAKGrw9FwUHsPpKMnilyL5hvID8n/6+PEjsnxRVlLh90VQfInSMtAKSRqQb/98g+lu8fFjA8OKAZaVQLlSBrpxeL70TBR6niG4bddilDYJyLfHx686CytGoBg2oPTZzBLFfRIKD7MhrgxhegihBQInB/wFozQgINVj+fGjgiEW1ItCgZDr2P3hcCIG2pejjFLVHTqenGFoKEonguRb/VhdXUkUYaQWipyXOPvdoXVsxN8eJMjumDqPLkfaxZ5SgKT+eqWzCAsxitHdKYgGCdOzg4T20ImexOt2BuNxlm+muyhCKeC2y49XGsuyqqvGQMk6z8fjZND1PDl4MSWKddRA+tgWlx/siCBWNDTKkx2Uf9pKUSxfqsftti4kSpxT9lWeZ+PBwMZlEksb2x7XiiVRYnCY1YrK+JHhQ4XOcZRPVw3LJ9BSvd2WEsWEbj0ZZz/oiSAigZu42uTjPEqWEwVC2KjYxm0lyj8tp9VQ6sftGnqnVguCjrn7YTDmp8ubKdl5t4UpWZokqE01kDyKQk25QflUPNbfr4GljSIHLPYgSdL0Aq0oX0mtxsnAafp9GB4eQ/kGnRBzwJ9PFRR3vYPi9fumLA8bgpk2WjkyJdNakMlt2cPAhIHSlIF/H+Wf+hHd9mtVff2CnWO1vr7+rlAsRKGlKwiWYqDtpCKuWOcmH4lEgUw8zjiNQmr5KrZfVOvv14Cy2Wp9kCcK+SkWTRXKJZOPPRTnFEr1uPyK6oC/5fXna0QhlmMo9iUoSivBE1BQLaiOaxgcXH8WKN83x1HM7FIULfC3UKwDKBR28U1xff158plEoNxqbqtQwgtnh3tzZnBb0xwOqUs92Ji/qR069frzZAfl9lahTCZYimt6MvDP1VLp+VWnwPG0/hB+2ENBqcA5cCdSvUaSiSLZQYERv9YZeo6VnW3MWh+UZWP4M4ZeY/Ch2+1CUb0dlB8lOQhUjX8mE10pLRSce0ARH6AoKHCMBT9lqQcC4kr0QDkOTzLozOI2So1WQTedCNFIdJQIOpEMy8ibXmj6BJTYcJyuPeAH4XJ2e2YB8lmy6CQ6ygCy4uOMWcedruOYUfoErRjt0Q5OpOwdrdRQ5eddUSQKxZRvlZoCzfNaIbfF16rzeeI0K+Xt7lCObevH9T5LQ9J221ZZXnR2vCKbEC3hu5jLRM1jOxw6Oyg/fkBo3WNpkfxSKP6QI8Jkgsr2oTdEAwUnW5DWmhNcVPQmP5sQxyjNPKje1t9bLBoI6qRBUSHuBnWNC667y7YnUNIss2hZXaFAgZQxVZNDGDeuqfJ9ECZZKK3ImD3EtTjtDeZprVj6exhfquXGk1rBVQQBs93+/n7dlobkVq4mIIoshYrkxfmovRPlKMquWnBRo2c3617IssoR5fsRkFu1xgLDi1Csrg+pLzyklEONWaol1dUy9JBk3Fg2WYhVDaz5EEjarK+MBxBueTlcU0rbaU+hkFpcVssNDr5CO9toi0m0xAIom+8KRgNZaAuVEOEGtBx+c0oph143iOHTSKnFGdKyeDfb5N3Q7nSaxXQI49vNr+8t0Z0E34XYoQcZO7SuPnR4g4aGYpxB2fEWGvTj8t4Awpz/oaMtlf7CudYOSOMkMGoCZ7+Ch8hsGq6fUMohFNGeNbUoEprD97yOtjaI/dvtERCj0+VFZDDt2JYdyBGlHETZiy0YlIgEfK+P78E83WU2m1+3t42TBK1F26uwP3TIzcYOszRKuRxFqQVJktVq4If0ZseHaYa2VGkEi1slC333MiWk5heGnZVg0ZXS3rR2EGVHLVAAkCQQJilkDnFtHQcRmssIEM020XwOKL0+R8fQHwCLR71P8yrVugAFJ6ykFnqvHfpRjiShxy/twl4Yr7drPX1y++uXHkkMY75dJyGvkUKfga9PoAwvbCmlLcdQlFpg3OIFWZ6QmShi9sH0MLNPwpbLLHTbOGFvtN7kURhKrYT4PHkEE1Q5OnB39xQeQVH7pWDcEltpnvDLzP6E+jNoTZvUQ0+wO/uvDjsdXLbzwZ2hBftDeidMueM8s2icgjtb9nfmH0ORb1ZxODfNYlPO43Gx38PNOza/Gdp/o2rQi5dez4HBMBrX6Tsisx3RkFbf33QhiiVYcEAXR4bNe2qgSBcqiXyxUtjz27k8BhHJBr54A+TYJnRruG9y5/X/RSjCRMSCUxFcbukAkDmGx7VDuWoZBppiTDeUq5GhA84xNgCiM6C+NWOQYyQnUXBndCT2ghIMTo2SBJ8tDWyxghqO0lAsjBlgtDQJxbqoEyRQOSQfc84MQaZi+6PxVBRD7dWkbWcpaWdOkiUuu0CcJ6AaZLFgWHIVc1vzPSMRKSkLb1FTOz6Np6MY2sbRqS5YQQLzX5j75g74ywjrnILD+nkOc23PjIUWGhFbT49Y5zyKITYP63uYea8isKSxbafrFBr3CF+BF+upGfrpOjNt2omRyl2MzV5G3h1sPA9FwcjtvbHcSkz7FZN8PfLMqTDFeup60TqfJmSTqdjdHTc7PA9tZb4cRW55bja8Cx1Nedf03HKRZDbDXSTzaWAwV8qbTJs88lzA8ZMb57Viye3G6hyA3N1MPjNCEtxDQrtE5tNoJFqKtvVWUJw5Q3IeRR9mutqZALIT1o9/hT8w0Uxtjt45H3H6BMSFKFZbmn3f2o7/1sdI7NLW5czDXqqVPRa3OR0gNtc3n2LtGMLFJJcbyNgptnV2gyre+eju8r8ciqGXaRmqYelnZrSP1n6ml0NhgkNHPfbEao9bLzvs9DSUlo4M7byPftSKR/JPP2v1bBRDnX479OVzDn39EcqRgPXM02d/ppUXlXeUd5QXRJnVQorTJ4vLWsnstVDUCfHTqquao+SviVJX1dkqyooS4Sn110Qp+fDmzBCDIzwyjv+O1GdDnk0rKY/6Gv6NOB39HP+5VuioOiTi13OlscQfqqgQFtlFqaRB3ZrO7hV4bi5WJz7/2FfQG/HlbVkW8P8SshbLssIj++U+CiczlkyEyLPly6EgS/1YLZfLmUuKKmZUe6GS6iiYDM8fgWFHUE39WJTwz5+jlPGooGrYQAU9JqnpGAoni+vHWU3Jq8eqqquXQOH/VcJAsyCeFRXlOqoVSLbE4sHJKrd4JF97CZSab3xArZQ4YJyh1atTKBUOLGWsmQEK7p2rXtZXqGkE+DKVIE4ZqIasZVGQi5fgtLM/RhHRvCpHUAf9WBojfM+N5Y6gQ2hQavGJO4GqqPHoa4k/FFCMW9bL/5fu8B3lHeU/ifLvO8o7yjvKO8o7yjvKO8o7yhGU+u1Ryv8ayhan2G8tfP/K9plrVi8puBJzr93V84Yi7up5+A80oYJR8F6n6O1d5UG/7ertBC8Bu9fvAHtj+7RuRnsrCdTNaGih8i1RcPXybvcWvTeRUc0XHe7cLfgGYpXa3YKklip4O5+lqwW1eygL901IcOFxu3c751uw4BWq4qZQ/c7SN2Chy1zbd5byzcNl/Jc9lpboH3bvtyWW+q+GulGpk+i3/tKNzOVfa9TBsn3Trn4XMt9AXJezv+EycVHvXsxsHLiquipe92Zmd1bwldXt66p37s1+UPdmV+VLSdGSslQ3Z/++O3mb+N3DX7lMHDVyd/6O9fuH177bfLt9uL/oune+8v3h1eT+yN3z/wOAO9vKqVjcjgAAAABJRU5ErkJggg==");
                g(14, "bestPlayer", 5, "data:image/png;base64,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");
                g(15, "zoom", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC");
                g(16, "apple", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII=");
                g(17, "open link", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAPBAMAAADpFNeEAAAAGFBMVEUA/wBi/2N//4CX/5i//8DU/9Pq/+r///90hWfkAAAA6klEQVQoz5XSPQ+CMBAG4FME1i6GlUHjSuLA6uaqEyt+JF3VSt+/b99WhRQG7XCB0qdcrycia42rkomxgJ2edsP8AfYEKH8Gc+CYaLQ/g5Szm8mcpkGGZwgurwsDKqfrrgf6kaNKcMihCpwk5+YZOr+2DMCOQBuAtkoKgpTgvsQOd7cCOMSg82DJz/0fHKjewMQAW4KGxRyeAYqBTyNgCFy6gyq517MEYKAjUNsA2nAPc95DyMaHW4Pu0wNoCVIQPJjN96aHoIjBzINqD9X30vu8cKW6JTGQ2pc18x2x0pbdOgTSxCD1YAHzAmJBjxvc7JBGAAAAAElFTkSuQmCC");
                g(18, "loading", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII=");
                g(19, "target", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAIAAAC3LO29AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGRmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjI3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjI3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDoyNyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjOTdjNzUxMC1iYzBlLTA5NDEtODhjYy1lYjE3N2E3Mjg0ZWYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxOTBlNmI1Ni05NDlkLTZhNGUtYTIwYi1kMWNkMTVmMzM2ODEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZWE2MmMyMS0wZDAzLTQ4NDgtYmY0OC02MjFkOGEzNjQxNDQiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZWE2MmMyMS0wZDAzLTQ4NDgtYmY0OC02MjFkOGEzNjQxNDQiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MjcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Yzk3Yzc1MTAtYmMwZS0wOTQxLTg4Y2MtZWIxNzdhNzI4NGVmIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjI3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPjlGRkJBMEI3M0YwQTI5NEFEODkxMzAzQTczRkQxQTQ1PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eYA81AAACklJREFUeF7tmntwVcUdx7+/356bd8iLPCGYF0TJkwQMHUasnanUacfR6VitqDO2Dq2vCpU6tSqWcRyZVit2HOtoQbGttXU6PioTra2P1nGCYqRYKkYIAQQChoQk3Oc5Z7d/XEju3XMf5waSTpj85vPH/f72t3vO7zx29+xe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")
            }
        }
            ;
        this.bz = function (n) {
            return x[n]
        }
            ;
        this.l4 = function (n) {
            for (var z = l.length - 1; 0 <= z; z--)
                if (l[z] === n)
                    return x[z];
            return t
        }
            ;
        this.bx = function () {
            return 0 === k
        }
    }
    function kD() {
        function g(D, L) {
            tq[D] = 0;
            tq[D + 1] = 0;
            tq[D + 2] = L;
            tq[D + 3] = 0;
            k(D)
        }
        function k(D) {
            if (!h4.h5) {
                var L = b5.gB(D);
                D = b5.cF(D);
                h4.h5 = L >= gu.tp[0] && L <= gu.tp[2] && D >= gu.tp[1] && D <= gu.tp[3]
            }
        }
        var x = [224, 224, 224], l = [[172, 172, 172], [144, 0, 0], [0, 128, 0], [0, 0, 144], [128, 128, 0], [128, 0, 128], [0, 128, 128], [196, 196, 196], [0, 0, 0]], t = [[4, 4, 4, 20], [4, 0, 0, 27], [0, 4, 0, 31], [0, 0, 4, 27], [4, 4, 0, 31], [4, 0, 4, 31], [0, 4, 4, 31], [4, 4, 4, 14], [4, 4, 4, 13]], n, z, y, A, B, C, F, E, H, J, K;
        this.bp = function (D) {
            n = new Uint8Array(b8);
            z = new Uint8Array(b8);
            y = new Uint8Array(b8);
            A = new Uint8Array(b8);
            B = new Uint8Array(b8);
            C = new Uint8Array(b8);
            F = new Uint8Array(b8);
            E = new Uint8Array(b8);
            H = new Uint8Array(b8);
            J = new Uint8Array(b8);
            this.qo = new Uint8Array(b8);
            K = new Int32Array(4);
            K[0] = -4 * aZ;
            K[1] = 4;
            K[2] = -K[0];
            K[3] = -K[1];
            if (dA)
                for (var L, I = b8 - 1; 0 <= I; I--)
                    L = dW.id[dW.dX[I]],
                        D = as((t[L][3] + 1) * ce.random(), ce.value(100)),
                        n[I] = l[L][0] + D * t[L][0],
                        z[I] = l[L][1] + D * t[L][1],
                        y[I] = l[L][2] + D * t[L][2];
            else {
                for (L = b8 - 1; L >= cq; L--)
                    n[L] = 4 * as(64 * ce.random(), ce.value(100)),
                        z[L] = 4 * as(64 * ce.random(), ce.value(100)),
                        y[L] = 4 * as(64 * ce.random(), ce.value(100));
                for (L = cq - 1; 0 <= L; L--)
                    n[L] = 4 * D[L].xI[0],
                        z[L] = 4 * D[L].xI[1],
                        y[L] = 4 * D[L].xI[2]
            }
            for (D = b8 - 1; 0 <= D; D--)
                L = as(n[D] + z[D] + y[D], 3),
                    n[D] += yM(L - n[D], 2),
                    z[D] += yM(L - z[D], 2),
                    y[D] += yM(L - y[D], 2),
                    n[D] -= n[D] % 4,
                    z[D] -= z[D] % 4,
                    y[D] -= y[D] % 4;
            for (D = b8 - 1; 0 <= D; D--)
                n[D] += as(D, 128),
                    z[D] += as(D % 128, 32),
                    y[D] += as(D % 32, 8),
                    A[D] = D % 8;
            this.yJ();
            for (D = b8 - 1; 0 <= D; D--)
                B[D] = 32 > n[D] ? n[D] + 32 : n[D] - 32,
                    C[D] = 32 > z[D] ? z[D] + 32 : z[D] - 32,
                    F[D] = 32 > y[D] ? y[D] + 32 : y[D] - 32;
            for (D = b8 - 1; 0 <= D; D--)
                E[D] = 235 < n[D] ? n[D] - 20 : n[D] + 20,
                    H[D] = 235 < z[D] ? z[D] - 20 : z[D] + 20,
                    J[D] = 235 < y[D] ? y[D] - 20 : y[D] + 20
        }
            ;
        this.yJ = function () {
            for (var D = b8 - 1; 0 <= D; D--)
                this.qo[D] = 280 > n[D] + z[D] + y[D] ? 0 : 1
        }
            ;
        this.gB = function (D) {
            return as(D, 4) % aZ
        }
            ;
        this.cF = function (D) {
            return as(D, 4 * aZ)
        }
            ;
        this.ex = function (D, L) {
            return Math.floor(4 * (L * aZ + D))
        }
            ;
        this.hY = function (D) {
            return this.yN(D + K[0]) || this.yN(D + K[1]) || this.yN(D + K[2]) || this.yN(D + K[3])
        }
            ;
        this.hW = function (D, L) {
            return this.yO(D + K[0], L) || this.yO(D + K[1], L) || this.yO(D + K[2], L) || this.yO(D + K[3], L)
        }
            ;
        this.bE = function (D) {
            return 208 <= tq[D + 3]
        }
            ;
        this.he = function (D, L) {
            return this.bE(L) && this.yP(D, L)
        }
            ;
        this.yP = function (D, L) {
            return D === this.bF(L)
        }
            ;
        this.yQ = function (D) {
            return 208 <= tq[D + 3] && 224 > tq[D + 3]
        }
            ;
        this.cU = function (D) {
            return 224 <= tq[D + 3] && 248 > tq[D + 3]
        }
            ;
        this.hX = function (D) {
            for (var L = 3; 0 <= L; L--)
                if (this.yR(D + K[L]))
                    return !0;
            return !1
        }
            ;
        this.yS = function (D) {
            return 192 <= tq[D + 3] && 208 > tq[D + 3]
        }
            ;
        this.yT = function (D, L) {
            return this.yS(D) && L === this.bF(D)
        }
            ;
        this.b6 = function (D) {
            return this.bE(D) || this.bG(D)
        }
            ;
        this.yR = function (D) {
            return 0 === tq[D + 3] && 2 === tq[D + 2] || this.yS(D)
        }
            ;
        this.bG = function (D) {
            return 0 === tq[D + 3] && 1 === tq[D + 2]
        }
            ;
        this.yN = function (D) {
            return 0 === tq[D + 3] && 3 === tq[D + 2]
        }
            ;
        this.yO = function (D, L) {
            return this.bG(D) || this.bE(D) && L !== this.bF(D)
        }
            ;
        this.bF = function (D) {
            return tq[D] % 4 * 128 + tq[D + 1] % 4 * 32 + tq[D + 2] % 4 * 8 + tq[D + 3] % 8
        }
            ;
        this.hf = function (D) {
            g(D, 1)
        }
            ;
        this.yV = function (D) {
            g(D, 2)
        }
            ;
        this.hV = function (D, L) {
            tq[D] = n[L];
            tq[D + 1] = z[L];
            tq[D + 2] = y[L];
            tq[D + 3] = 208 + A[L];
            k(D)
        }
            ;
        this.b7 = function (D, L) {
            tq[D] = B[L];
            tq[D + 1] = C[L];
            tq[D + 2] = F[L];
            tq[D + 3] = 224 + A[L];
            k(D)
        }
            ;
        this.cW = function (D, L) {
            tq[D] = E[L];
            tq[D + 1] = H[L];
            tq[D + 2] = J[L];
            tq[D + 3] = 248 + A[L];
            k(D)
        }
            ;
        this.yY = function (D, L) {
            tq[D] = x[0] + n[L] % 4;
            tq[D + 1] = x[1] + z[L] % 4;
            tq[D + 2] = x[2] + y[L] % 4;
            tq[D + 3] = 192 + A[L];
            k(D)
        }
    }
    function kE() {
        function g() {
            for (var C = 0, F = 1; 5 > F; F++)
                C += z[F] % 1024;
            return C
        }
        function k() {
            for (var C = 1; C < y - B; C++)
                z[C] = parseInt(z[C])
        }
        function x() {
            z[0] = "[FX] " + "Player " + Math.floor(1E3 * Math.random());
            z[1] = r < s ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0;
            z[2] = 1;
            z[3] = 1;
            z[4] = r < s ? 0 : 1;
            z[5] = 0;
            z[6] = "000";
            z[7] = "0";
            z[8] = "0";
            z[9] = "0";
            f.y()
        }
        function l() {
            for (var C = y - B - 1; 0 <= C; C--)
                z[C] = m.n(z[C]);
            z[0] = m.iO(z[0])
        }
        function t(C, F, E) {
            var H = new Date;
            H.setTime(H.getTime() + Math.floor(31536E6 * E));
            C = C + "=" + F + ";expires=" + H.toUTCString() + ";SameSite=Strict;Secure;path=/";
            document.cookie = C
        }
        var n, z, y, A, B;
        this.bp = function () {
            if (!(5 <= d || b)) {
                B = 4;
                A = 0;
                n = [];
                y = 10;
                for (var C = 0; C < y; C++)
                    n.push("u" + C);
                z = Array(y);
                for (var F, E = document.cookie.split(";"), H = E.length - 1; 0 <= H; H--) {
                    E[H] = E[H].trim();
                    for (C = 2; 0 <= C; C--)
                        E[H] = E[H].replace(" ", "");
                    3 < E[H].length && (C = n.indexOf(E[H].substring(0, 2)),
                        F = E[H].indexOf("="),
                        0 <= C && 2 === F ? z[C] = E[H].substring(F + 1, E[H].length) : 0 < F && t(E[H].substring(0, F), "0", 0))
                }
                z[9] || (z[9] = "0");
                a: {
                    for (C = y - 1; 0 <= C; C--)
                        if (void 0 === z[C]) {
                            C = !1;
                            break a
                        }
                    C = !0
                }
                C ? (A = 2,
                    l(),
                    k(),
                    g() !== z[5] && x()) : x()
            }
        }
            ;
        this.y = function () {
            if (2 === A) {
                z[1] = 0 === z[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : z[1];
                z[5] = g();
                for (var C = 1; C < y - B; C++)
                    z[C] = z[C].toString();
                z[0] = m.iN(z[0]);
                for (C = y - B - 1; 0 <= C; C--)
                    z[C] = m.z(z[C]);
                for (C = y - 1; 0 <= C; C--)
                    t(n[C], z[C], 1);
                l();
                k()
            }
        }
            ;
        this.a0 = function () {
            return A
        }
            ;
        this.nM = function (C) {
            A = C;
            this.y()
        }
            ;
        this.x = function (C, F) {
            5 <= d || b || (z[C] = F)
        }
            ;
        this.g = function (C) {
            return 5 <= d || b ? 0 : z[C]
        }
    }
    function kd() {
        function g(l) {
            for (k -= 2; l < k; l += 2)
                x[l] = x[l + 2],
                    x[l + 1] = x[l + 3]
        }
        var k = 0
            , x = new Uint16Array(32);
        this.bp = function () {
            k = 0
        }
            ;
        this.dF = function () {
            if (0 !== k)
                if (0 === fB[aw] || ae.yq(aw) === ae.af(aw))
                    k = 0;
                else {
                    var l;
                    for (l = k - 2; 0 <= l; l -= 2) {
                        var t = x[l];
                        if (t < b8 && 0 === fB[t])
                            g(l);
                        else {
                            var n = x[l + 1];
                            if (t >= b8 && la(aw) || t < b8 && lf(aw, t))
                                dt ? fH(aw, t, n) : ii.lP(n, t === b8 ? aw : t),
                                    g(l)
                        }
                    }
                }
        }
            ;
        this.lS = function (l, t) {
            var n;
            a: {
                for (n = 0; n < k; n += 2)
                    if (x[n] === l) {
                        x[n + 1] += t;
                        x[n + 1] = qe(x[n + 1], 1E3);
                        n = !0;
                        break a
                    }
                n = !1
            }
            n || 32 === k || (x[k] = l,
                x[k + 1] = t,
                k += 2)
        }
    }
    function fi(g) {
        yt(g);
        yu(g);
        yv(g);
        au.av(g);
        eG.fz(g);
        ae.yw(g)
    }
    function yt(g) {
        hm.l9(g) && io++;
        var k = ae.yy(g);
        0 === k.length ? g === aw && yz() : (z0(g, k),
            z1(g, k))
    }
    function yz() {
        b0.b1[17] += ax[aw] + ae.z2(aw);
        eS.show(!1, !1);
        e7.tB()
    }
    function z0(g, k) {
        var x;
        for (x = k.length - 1; 0 <= x; x--)
            ae.z3(k[x], g)
    }
    function z4(g) {
        var k, x = 0;
        for (k = g.length - 1; 1 <= k; k--)
            bU[g[k]] > bU[g[x]] && (x = k);
        return x
    }
    function z1(g, k) {
        var x, l = k[z4(k)];
        9 === dr && 1 === dW.dX[g] && ce.dP(8) && dy.z6(l);
        if (g === aw)
            e5.fh(l, 1),
                yz();
        else {
            for (x = k.length - 1; 0 <= x; x--)
                if (k[x] === aw) {
                    e5.fh(g, 0);
                    return
                }
            g < cq && e5.mb(0, g, l)
        }
    }
    function yv(g) {
        fB[g] = ax[g] = 0;
        b4[g] = null;
        bM[g] = null;
        bN[g] = null;
        bQ[g] = null;
        eE.fd(g)
    }
    function yu(g) {
        var k, x;
        for (k = cz[g]; k >= d0[g]; k--)
            for (x = d2[g]; x >= d3[g]; x--) {
                var l = 4 * (x * aZ + k);
                b5.he(g, l) && (b5.hf(l),
                    bU[g]--)
            }
    }
    function kk() {
        this.z7 = null;
        this.z9 = null; 
        this.bp = function () {
            this.z7 = document.createElement("INPUT");
            this.z7.setAttribute("type", "file");
            this.z7.setAttribute("accept", ".gif,.jpg,.jpeg,.png,.json");
            this.z7.setAttribute("id", "inputfilebtn");


            this.z7.style.position = "absolute";
            this.z7.style.color = this.me(255, 255, 255);
            this.lq();
            this.z7.addEventListener("change", function (g) {
                jo.z8(g)
            })
        }
            ;
        this.me = function (g, k, x) {
            return "rgb(" + g + "," + k + "," + x + ")"
        }
            ;
        this.lq = function () {
            var g = Math.floor(.22 * ja.cw / pF)
                , k = Math.max(Math.floor(.5 * gA / pF - 4 * g), 0);
            gA < cB && (k = Math.floor(cA / pF));
            this.z7.style.font = bt + g + bu;
            this.z7.style.left = k + "px";
            this.z7.style.bottom = Math.floor(cA / pF) + "px"
        }
            ;
        this.cE = function (g) {
            g ? document.body.appendChild(this.z7) : document.body.removeChild(this.z7)
        }
    }
    function kj() {
        function g(t) {
            (t = t.target.files) && 0 < t.length && jo.zE(t[0])
        }
        function k(t) {
            var n = new Image;
            n.onload = x;
            n.src = t.target.result
        }
        function x(t) {
            var n = t.target;
            t = n.width;
            var z = n.height;
            8192 < t || 8192 < z || 2 > t || 2 > z ? alert("Image w & h must be between 2 and 8192 pixels.") : (wo = 3,
                wp = 16384,
                aZ = t,
                aa = z,
                hk.width = aZ,
                hk.height = aa,
                pc.drawImage(n, 0, 0),
                wz = pc.getImageData(0, 0, aZ, aa).data)
        }
        var l;
        this.bp = function () {
            l = document.createElement("input");
            l.type = "file";
            l.onchange = g
        }
            ;
        this.zC = function () {
            l.click()
        }
            ;
        this.z8 = function (t) {
            g(t)
        }
            ;
        this.zE = function (t) {
            var n = t.name.split(".");
            var z = n[n.length - 1].toLowerCase();
            "json" === z || "gif" !== z && "jpg" !== z && "jpeg" !== z && "png" !== z || (jf.zI = n[0],
                z = new FileReader,
                z.onload = k,
                z.readAsDataURL(t))
        }
            ;
        this.pS = function (t) {
            if (0 === aJ.pR() || 2 === aJ.pR())
                t.stopPropagation(),
                    t.preventDefault(),
                    t.dataTransfer.dropEffect = "copy"
        }
            ;
        this.pT = function (t) {
            if (0 === aJ.pR() || 2 === aJ.pR())
                t.stopPropagation(),
                    t.preventDefault(),
                    (t = t.dataTransfer.files) && 0 < t.length && jo.zE(t[0])
        }
    }
    function kh() {
        this.zN = null;
        this.bp = function () {
            this.zN = 10 !== dr ? null : new Uint32Array(b8)
        }
            ;
        this.dF = function () {
            10 === dr && this.zO()
        }
            ;
        this.zO = function () {
            var g, k = this.zN, x = dZ, l = ax;
            for (g = dY - 1; 0 <= g; g--) {
                var t = x[g];
                if (!(t >= cq)) {
                    var n = Math.max(as(l[t], 4), 2048);
                    var z = Math.max(ay.tN(t), 100);
                    k[t] += as(z * n, 1E4);
                    k[t] > n && (k[t] = n)
                }
            }
        }
            ;
        this.tj = function (g, k) {
            if (k > this.zN[g])
                return k = this.zN[g],
                    this.zN[g] = 0,
                    k;
            this.zN[g] -= k;
            return k
        }
    }
    function kl() {
        function g(n) {
            jD.zQ(JSON.parse(n.target.result));
            jD.lC()
        }
        function k(n) {
            if (22 >= n.length)
                return !1;
            jD.jE.map = 0;
            jD.jE.seedMap = 0;
            x0(0, 0);
            "data:image/png;base64," !== n.substring(0, 22) && (n = "data:image/png;base64," + n);
            var z = new Image;
            z.onload = function () {
                wo = 3;
                wp = 16384;
                aZ = z.width;
                aa = z.height;
                8192 < aZ || 8192 < aa || 2 > aZ || 2 > aa ? (x0(0, 0),
                    alert("Image w & h must be between 2 and 8192.")) : (hk.width = aZ,
                        hk.height = aa,
                        pc.drawImage(z, 0, 0),
                        wz = pc.getImageData(0, 0, aZ, aa).data)
            }
                ;
            z.src = n;
            jD.jE.mapBase64 = "";
            return !0
        }
        function x(n, z, y, A) {
            return "string" !== typeof n || n.length < z ? A : n.length > y ? n.substring(0, y) : n
        }
        function l(n, z) {
            return Math.min(Math.max(Math.floor(n), 0), z)
        }
        function t(n) {
            return "number" === typeof n
        }
        this.jE = null;
        this.zP = function (n) {
            var z = new FileReader;
            z.onload = g;
            z.readAsText(n)
        }
            ;
        this.zQ = function (n) {
            this.jE = {};
            this.jE.map = t(n.map) ? l(n.map, 13) : 0;
            this.jE.seedMap = t(n.seedMap) ? l(n.seedMap, 16383) : 0;
            this.jE.seedSpawn = t(n.seedSpawn) ? l(n.seedSpawn, 16383) : 0;
            this.jE.customSpawn = "boolean" === typeof n.customSpawn ? n.customSpawn : !1;
            var z = this.jE;
            var y = n.zU;
            y = Array.isArray(y) && 3 === y.length ? y : null;
            z.zU = y;
            this.jE.numberPlayers = t(n.numberPlayers) ? l(n.numberPlayers, 512) : 512;
            this.jE.playerX = Array.isArray(n.playerX) ? n.playerX : [];
            this.jE.playerY = Array.isArray(n.playerY) ? n.playerY : [];
            this.jE.playerName = Array.isArray(n.playerName) ? n.playerName : [];
            this.jE.playerStrength = Array.isArray(n.playerStrength) ? n.playerStrength : [];
            this.jE.playerTeam = Array.isArray(n.playerTeam) ? n.playerTeam : [];
            this.jE.mapName = x(n.mapName, 1, 25, "Map");
            this.jE.description = x(n.description, 0, 400, "");
            this.jE.mapBase64 = "string" === typeof n.mapBase64 ? n.mapBase64 : "";
            this.zX()
        }
            ;
        this.zX = function () {
            var n, z = this.jE.playerName.length;
            for (n = 0; n < z; n++)
                this.jE.playerName[n] = x(this.jE.playerName[n], 3, 24, "Bot")
        }
            ;
        this.lC = function () {
            k(this.jE.mapBase64) || x0(jD.jE.map, jD.jE.seedMap)
        }
    }
    function kF() {
        function g(y) {
            return y < cq ? k * y : k * cq + x * (y - cq)
        }
        var k, x, l, t, n, z;
        this.bp = function () {
            k = 16 > cq ? 12 : 8;
            x = 4;
            var y = g(b8);
            l = new Uint8Array(b8);
            t = new Uint16Array(y);
            n = new Uint32Array(y);
            z = new Uint16Array(y)
        }
            ;
        this.yw = function (y) {
            l[y] = 0
        }
            ;
        this.z3 = function (y, A) {
            var B;
            a: {
                var C = g(y);
                for (B = l[y] - 1; 0 <= B; B--)
                    if (0 === z[C + B] && t[C + B] === A)
                        break a;
                B = l[y]
            }
            B !== l[y] && (C = n[g(y) + B],
                this.b2(y, B),
                this.cQ(y, C, b8))
        }
            ;
        this.co = function (y, A) {
            var B, C = g(y);
            for (B = l[y] - 1; 0 <= B; B--)
                if (0 === z[C + B] && t[C + B] === A)
                    return !0;
            return !1
        }
            ;
        this.dD = function (y) {
            return y < cq ? l[y] < k : l[y] < x
        }
            ;
        this.af = function (y) {
            return l[y]
        }
            ;
        this.al = function (y, A) {
            return t[g(y) + A]
        }
            ;
        this.ag = function (y, A) {
            return z[g(y) + A]
        }
            ;
        this.fR = function (y, A) {
            var B, C = g(y);
            for (B = l[y] - 1; 0 <= B; B--)
                if (z[C + B] === A)
                    return B;
            return -1
        }
            ;
        this.am = function (y, A) {
            return n[g(y) + A]
        }
            ;
        this.bi = function (y, A) {
            var B, C = g(y);
            for (B = l[y] - 1; 0 <= B; B--)
                if (0 === z[C + B] && t[C + B] === A)
                    return n[C + B];
            return 0
        }
            ;
        this.z2 = function (y) {
            var A = g(y)
                , B = 0;
            for (y = l[y] - 1; 0 <= y; y--)
                B += n[A + y];
            return B
        }
            ;
        this.zh = function (y) {
            var A = g(y)
                , B = 0;
            for (y = l[y] - 1; 0 <= y; y--)
                0 === z[A + y] && (B += n[A + y]);
            return B
        }
            ;
        this.yq = function (y) {
            var A = g(y)
                , B = 0;
            for (y = l[y] - 1; 0 <= y; y--)
                0 < z[A + y] && B++;
            return B
        }
            ;
        this.bh = function (y, A, B) {
            var C = g(y);
            for (y = l[y] - 1; 0 <= y; y--)
                0 === z[C + y] && t[C + y] === A && (n[C + y] = B)
        }
            ;
        this.bT = function (y, A, B) {
            n[g(y) + A] = B
        }
            ;
        this.cQ = function (y, A, B) {
            var C, F = g(y);
            B === aw && b0.b1[y < cq ? 6 : 5]++;
            for (C = l[y] - 1; 0 <= C; C--)
                if (0 === z[F + C] && t[F + C] === B) {
                    n[F + C] += A;
                    n[F + C] = n[F + C] > j2 ? j2 : n[F + C];
                    return
                }
            t[F + l[y]] = B;
            n[F + l[y]] = A;
            z[F + l[y]] = 0;
            l[y]++;
            y < cq && (B === aw ? e5.fh(y, 5) : y === aw && e6.md(B))
        }
            ;
        this.tk = function (y, A, B) {
            var C = g(y);
            fB[y] = 2;
            t[C + l[y]] = 0;
            n[C + l[y]] = A;
            z[C + l[y]] = B;
            l[y]++
        }
            ;
        this.b2 = function (y, A) {
            var B;
            if (0 !== l[y]) {
                var C = g(y);
                l[y]--;
                for (B = A; B < l[y]; B++)
                    t[C + B] = t[C + B + 1],
                        n[C + B] = n[C + B + 1],
                        z[C + B] = z[C + B + 1]
            }
        }
            ;
        this.yy = function (y) {
            var A, B, C = [];
            for (A = dY - 1; 0 <= A; A--) {
                var F = g(dZ[A]);
                for (B = l[dZ[A]] - 1; 0 <= B; B--)
                    if (0 === z[F + B] && t[F + B] === y) {
                        C.push(dZ[A]);
                        break
                    }
            }
            return C
        }
    }
    function kG() {
        var g, k, x, l, t, n;
        this.bp = function () {
            l = x = k = g = 10
        }
            ;
        this.zo = function () {
            n = 512;
            t = new Uint16Array(n);
            for (var z = 0; z < n; z++)
                t[z] = 100 + bl(as(25600 * z, n - 4), 9)
        }
            ;
        this.s8 = function () {
            return l
        }
            ;
        this.dF = function () {
            if (0 >= --x) {
                x = g;
                var z, y = ax[aw];
                dt && !dA && 0 !== fB[0] && 0 === du.dv[0].bD && (ax[0] += as(bU[0], 6));
                for (z = dY - 1; 0 <= z; z--) {
                    var A = as(ay.tN(dZ[z]) * ax[dZ[z]], 1E4);
                    ax[dZ[z]] += 1 > A ? 1 : A;
                    ay.az(dZ[z])
                }
                b0.b1[9] += ax[aw] - y;
                if (0 >= --l) {
                    l = k;
                    z = ax[aw];
                    for (A = dY - 1; 0 <= A; A--)
                        ax[dZ[A]] += bU[dZ[A]],
                            ay.az(dZ[A]);
                    b0.b1[8] += ax[aw] - z
                }
            }
        }
            ;
        this.tN = function (z) {
            var y = t[as((n - 1) * bU[z], j1)];
            if (1920 > c4.dU()) {
                var A = as(100 * (13440 - 6 * c4.dU()), 1920);
                y = A > y ? A : y
            }
            A = this.dJ(z);
            ax[z] > A && (y -= as(2 * y * (ax[z] - A), A));
            return 0 > y ? 0 : 700 < y ? 700 : y
        }
            ;
        this.dJ = function (z) {
            z = 100 * bU[z];
            return z > j3 ? j3 : z
        }
            ;
        this.az = function (z) {
            var y = bU[z] * iz;
            ax[z] = ax[z] > j2 ? j2 : ax[z] > y ? y : ax[z]
        }
    }
    function kH() {
        function g() {
            X.width = gA;
            X.height = cB;
            V = X.getContext("2d", {
                alpha: !0
            });
            V.textAlign = cJ;
            V.textBaseline = cI;
            V.imageSmoothingEnabled = !0
        }
        function k() {
            W = !1;
            U = 1;
            R = P = 0;
            V.clearRect(0, 0, gA, cB);
            for (var O = g8 / g3, T = g9 / g3, Y = (gA + g8) / g3, Z = (cB + g9) / g3, ha, ma, fa, ea, qa, ua = 0 !== fB[aw] && hm.l9(aw), za = dY - 1; 0 <= za; za--)
                if (fa = dZ[za],
                    ea = Math.floor(Q * g3 * K[fa] * H[fa]),
                    !(ea < M || ea >= L) && F[fa] + H[fa] > O && F[fa] < Y && E[fa] + J[fa] > T && E[fa] < Z) {
                    ha = Math.floor(gA * (F[fa] + H[fa] / 2 - O) / (Y - O));
                    ma = Math.floor(cB * (E[fa] + J[fa] / 2 - T) / (Z - T) - .1 * ea);
                    V.font = of[fP[fa]] + ea + bu;
                    qa = V;
                    var ra = fa;
                    ra = ea >= I && ea < L ? dW.a0f[b5.qo[ra]] + t(ea).toFixed(3) + ")" : dW.a0g[b5.qo[ra]];
                    qa.fillStyle = ra;
                    V.fillText(8 === dr ? eL.gF(ax[fa]) : gE[fa], ha, ma);
                    W = !0;
                    if (0 < ca[fa]) {
                        qa = ha;
                        ra = ma;
                        var va = ea
                            , sa = fa;
                        if (0 === sD[sa])
                            if (a5.o4(ba[sa])) {
                                var Aa = qa
                                    , ta = va
                                    , ya = sa;
                                sa = ba[sa];
                                var wa = .9 * ta / a5.c1
                                    , Ca = Math.floor(ra - .5 * wa * a5.c1 - .05 * ta);
                                V.globalAlpha = t(ta);
                                for (var Ba = Math.floor(Aa - .5 * ta / D[ya] - .4 * ta - wa * a5.c1), xa = 0; 2 > xa; xa++)
                                    V.setTransform(wa, 0, 0, wa, Ba, Ca),
                                        V.drawImage(a5.l0[sa], 0, 0),
                                        Ba = Math.floor(Aa + .5 * ta / D[ya] + .4 * ta);
                                V.globalAlpha = 1;
                                V.setTransform(1, 0, 0, 1, 0, 0);
                                x(qa, ra, va, 0, 0)
                            } else
                                a5.o3(ba[sa]) ? (l(qa, ra, va, ba[sa], 0),
                                    x(qa, ra, va, 0, 1)) : (l(qa, ra, va, ba[sa], 1),
                                        x(qa, ra, va, 1, 0));
                        else
                            l(qa, ra, va, ba[sa], 0)
                    } else
                        0 === sD[fa] && x(ha, ma, ea, 0, 0);
                    if (ua && (0 < ca[fa + b8] || 0 < ca[fa + 2 * b8] || 0 < ca[fa + 3 * b8] || 0 < ca[fa + 4 * b8])) {
                        ra = ha;
                        va = ma;
                        Aa = ea;
                        ta = fa;
                        ya = -1;
                        for (qa = 4; 1 <= qa; qa--)
                            0 < ca[ta + qa * b8] && ya++;
                        for (qa = 1; 5 > qa; qa++)
                            0 < ca[ta + qa * b8] && (sa = Aa,
                                wa = qa,
                                Ca = ta,
                                Ba = ca[ta + qa * b8],
                                xa = .8 * sa / a5.c1,
                                V.setTransform(xa, 0, 0, xa, Math.floor(ra - .5 * xa * a5.c1 - .534 * ya * sa), Math.floor(va + 1.4 * xa * a5.c1)),
                                V.globalAlpha = t(sa),
                                V.drawImage(1 === wa ? a5.l0[ba[Ca + b8]] : 2 === wa && 255 > Ba ? hm.ky[2] : hm.kx[wa + 3], 0, 0),
                                V.globalAlpha = 1,
                                V.setTransform(1, 0, 0, 1, 0, 0),
                                ya -= 2)
                    }
                    qa = Math.floor(N * ea);
                    qa < M || (V.font = bt + qa + bu,
                        V.fillText(8 === dr ? gE[fa] : eL.gF(ax[fa]), ha, ma + Math.floor(.78 * ea)))
                }
        }
        function x(O, T, Y, Z, ha) {
            var ma = .95 * Y / S;
            V.setTransform(ma, 0, 0, ma, Math.floor(O - .5 * ma * pa + .8 * Z * Y), Math.floor(T - 1.76 * ma * S - .82 * ha * Y));
            V.globalAlpha = t(Y);
            V.drawImage(bw.bz(4), 0, 0);
            V.globalAlpha = 1;
            V.setTransform(1, 0, 0, 1, 0, 0)
        }
        function l(O, T, Y, Z, ha) {
            var ma = 1.2 * Y / a5.c1;
            V.setTransform(ma, 0, 0, ma, Math.floor(O - .5 * ma * a5.c1 - .8 * ha * Y), Math.floor(T - 1.5 * ma * a5.c1));
            V.globalAlpha = t(Y);
            V.drawImage(a5.l0[Z], 0, 0);
            V.globalAlpha = 1;
            V.setTransform(1, 0, 0, 1, 0, 0)
        }
        function t(O) {
            return O >= I && O < L ? 1 - (O - I) / (L - I) : 1
        }
        function n(O) {
            var T, Y = F[O];
            for (T = F[O] - d0[O] - 1; 0 <= T; T--)
                if (Y--,
                    !y(O, Y, E[O], J[O])) {
                    Y++;
                    break
                }
            var Z = F[O];
            for (T = cz[O] - F[O] - H[O]; 0 <= T; T--)
                if (Z++,
                    !y(O, Z + H[O] - 1, E[O], J[O])) {
                    Z--;
                    break
                }
            Y = Math.floor((Y + Z) / 2);
            Z = E[O];
            for (T = E[O] - d3[O] - 1; 0 <= T; T--)
                if (Z--,
                    !A(O, Y, Z, H[O])) {
                    Z++;
                    break
                }
            var ha = E[O];
            for (T = d2[O] - E[O] - J[O]; 0 <= T; T--)
                if (ha++,
                    !A(O, Y, ha + J[O] - 1, H[O])) {
                    ha--;
                    break
                }
            T = Math.floor((Z + ha) / 2);
            z(O, Y, T, H[O], J[O]) && (F[O] = Y,
                E[O] = T)
        }
        function z(O, T, Y, Z, ha) {
            var ma;
            for (ma = T + Z - 1; ma >= T; ma--)
                if (!y(O, ma, Y, ha))
                    return !1;
            var fa = Math.floor(.25 * ha);
            fa = 1 > fa ? 1 : fa;
            for (ma = Y + ha - 1 - fa; ma >= Y + fa; ma--)
                if (!A(O, T, ma, Z))
                    return !1;
            return !0
        }
        function y(O, T, Y, Z) {
            return b5.he(O, 4 * (Y * aZ + T)) && b5.he(O, 4 * ((Y + Z - 1) * aZ + T))
        }
        function A(O, T, Y, Z) {
            return b5.he(O, 4 * (Y * aZ + T)) && b5.he(O, 4 * (Y * aZ + T + Z - 1))
        }
        var B, C, F, E, H, J, K, D, L, I, N, G, M, Q, R, P, U, W, X, V, na, ba, ca, pa, S;
        this.bp = function () {
            W = !1;
            Q = .88;
            N = .5;
            G = 1.8;
            L = Math.floor(.5 * pB);
            I = Math.floor(.2 * L);
            M = 8 === dr ? jm.a0L ? 6 : 4 : jm.a0L ? 10 : 7;
            C = B = 0;
            F = new Uint16Array(b8);
            E = new Uint16Array(b8);
            H = new Uint16Array(b8);
            J = new Uint16Array(b8);
            K = new Float32Array(b8);
            D = new Float32Array(b8);
            ba = new Uint8Array(2 * b8);
            ca = new Uint8Array(5 * b8);
            X = X ? X : document.createElement("canvas");
            g();
            P = R = 0;
            U = 1;
            na = 0;
            if (8 === dr) {
                var O;
                V.font = bt + 100 + bu;
                var T = 100 / Math.floor(V.measureText("20 000 000").width);
                for (O = b8 - 1; 0 <= O; O--)
                    D[O] = K[O] = T
            } else
                for (V.font = bt + Math.floor(100 * N) + bu,
                    T = 80 / Math.floor(V.measureText(eL.gF(j2)).width),
                    V.font = bt + 100 + bu,
                    O = b8 - 1; 0 <= O; O--)
                    D[O] = 100 / Math.floor(V.measureText(gE[O]).width),
                        K[O] = T < D[O] ? T : D[O];
            for (O = b8 - 1; 0 <= O; O--)
                12 > bU[O] ? (F[O] = d0[O] + 1,
                    E[O] = d3[O] + 1,
                    H[O] = 1,
                    J[O] = 1) : (F[O] = d0[O],
                        E[O] = d3[O] + 1,
                        H[O] = 4,
                        J[O] = 2);
            if (fY)
                for (O = 0; O < cq; O++)
                    H[O] = 0;
            pa = bw.bz(4).width;
            S = bw.bz(4).height
        }
            ;
        this.lq = function () {
            g();
            k()
        }
            ;
        this.iw = function () {
            for (var O = na = 0; O < cq; O++)
                3 !== cz[O] - d0[O] || 3 !== d2[O] - d3[O] ? (F[O] = d0[O] + (cz[O] !== d0[O] ? 1 : 0),
                    E[O] = d3[O],
                    H[O] = 1,
                    J[O] = 1) : (F[O] = d0[O],
                        E[O] = d3[O] + 1,
                        H[O] = 4,
                        J[O] = 2)
        }
            ;
        this.mv = function (O, T, Y) {
            0 === fB[O] || 4 !== T && 2 === fP[O] || (O += T * b8,
                0 === T ? ba[O] === Y && 0 < ca[O] ? ca[O] = 0 : (ba[O] = Y,
                    ca[O] = a5.o4(Y) ? 255 : 64) : 1 === T ? (ca[O] = 64,
                        ba[O] = Y) : ca[O] = Y)
        }
            ;
        this.cG = function () {
            W && (1 !== U ? (cH.imageSmoothingEnabled = !0,
                cH.setTransform(U, 0, 0, U, 0, 0),
                cH.drawImage(X, -R / U, -P / U),
                cH.setTransform(1, 0, 0, 1, 0, 0)) : (cH.imageSmoothingEnabled = !1,
                    cH.drawImage(X, -R, -P)))
        }
            ;
        this.rJ = function (O, T) {
            R += O;
            P += T
        }
            ;
        this.lh = function (O, T) {
            e6.rJ(O, T)
        }
            ;
        this.zoom = function (O, T, Y) {
            U *= O;
            R = (R + T) * O - T;
            P = (P + Y) * O - Y
        }
            ;
        this.eX = function () {
            return 0 >= --na ? (na = 4 >= sf ? 10 : 12 > sf ? 5 : 2,
                k(),
                !0) : !1
        }
            ;
        this.gC = function (O) {
            return K[O]
        }
            ;
        this.dF = function () {
            if (4 <= ++C) {
                var O, T;
                C = 0;
                for (T = 4; 1 <= T; T--)
                    for (O = dY - 1; 0 <= O; O--) {
                        var Y = dZ[O] + T * b8;
                        0 < ca[Y] && 255 > ca[Y] && ca[Y]--
                    }
                if (2 !== fV)
                    for (O = dY - 1; 0 <= O; O--)
                        Y = dZ[O],
                            0 < ca[Y] && 255 > ca[Y] && ca[Y]--
            }
            O = Math.floor(.1 * dY);
            O = 8 > O ? 8 : O;
            O = O > dY ? dY : O;
            for (Y = B + O - 1; Y >= B; Y--)
                if (T = Y % dY,
                    T = dZ[T],
                    0 < H[T] && z(T, F[T], E[T], H[T], J[T])) {
                    for (var Z, ha, ma, fa, ea = T, qa = !1, ua = 0; 8 > ua; ua++) {
                        ha = H[ea] + 2;
                        Z = J[ea] + 2;
                        if (ha > cz[ea] - d0[ea] + 1 || Z > d2[ea] - d3[ea] + 1)
                            break;
                        fa = F[ea] - 1;
                        ma = E[ea] - 1;
                        if (z(ea, fa, ma, ha, Z))
                            F[ea] = fa,
                                E[ea] = ma,
                                H[ea] = ha,
                                J[ea] = Z,
                                qa = !0;
                        else
                            break
                    }
                    if (Z = !qa) {
                        ea = T;
                        qa = !1;
                        ua = H[ea];
                        for (var za = 1 + Math.floor(.02 * ua), ra = 1; 5 > ra; ra++) {
                            ha = ua + ra * za;
                            if (ha > cz[ea] - d0[ea] + 1)
                                break;
                            Z = 1 + Math.floor(G * K[ea] * ha);
                            if (Z > d2[ea] - d3[ea] + 1)
                                break;
                            fa = d0[ea] + Math.floor(Math.random() * (cz[ea] - d0[ea] + 2 - ha));
                            ma = d3[ea] + Math.floor(Math.random() * (d2[ea] - d3[ea] + 2 - Z));
                            z(ea, fa, ma, ha, Z) && (F[ea] = fa,
                                E[ea] = ma,
                                H[ea] = ha,
                                J[ea] = Z,
                                qa = !0)
                        }
                        Z = qa
                    }
                    Z && n(T)
                } else {
                    a: {
                        ha = T;
                        ma = F[ha] + 1;
                        fa = E[ha] + 1;
                        for (ea = H[ha] - 2; ;) {
                            if (1 > ea) {
                                H[ha] = 0;
                                break
                            }
                            Z = 1 + Math.floor(G * K[ha] * ea);
                            if (z(ha, ma, fa, ea, Z)) {
                                F[ha] = ma;
                                E[ha] = fa;
                                H[ha] = ea;
                                J[ha] = Z;
                                Z = !0;
                                break a
                            }
                            ma++;
                            fa++;
                            ea -= 2
                        }
                        Z = !1
                    }
                    if (Z)
                        n(T);
                    else
                        for (Z = T,
                            ma = cz[Z] - d0[Z] + 1,
                            ha = Math.floor(.02 * ma),
                            ha = 1 > ha ? 1 : ha,
                            T = -6 * ha; ma >= T; ma -= ha)
                            if (ea = 0 < ma ? ma : 1,
                                fa = 1 + Math.floor(G * K[Z] * ea),
                                ua = d0[Z] + Math.floor(Math.random() * (cz[Z] - d0[Z] + 2 - ea)),
                                qa = d3[Z] + Math.floor(Math.random() * (d2[Z] - d3[Z] + 2 - fa)),
                                z(Z, ua, qa, ea, fa)) {
                                F[Z] = ua;
                                E[Z] = qa;
                                H[Z] = ea;
                                J[Z] = fa;
                                break
                            }
                }
            B += O;
            B %= dY
        }
            ;
        this.md = function (O) {
            var T = O + 2 * b8
                , Y = ca[T];
            return 0 < Y ? (e5.n0(50, O),
                ca[T] = 0,
                255 === Y) : !1
        }
            ;
        this.ld = function (O) {
            return 255 === ca[O + 2 * b8]
        }
    }
    function kI() {
        function g() {
            var l;
            if (!jD.jE)
                return !1;
            var t = jD.jE.playerName.length;
            if (1 > t)
                return !1;
            for (l = cq; l < b8; l++)
                gE[l] = jD.jE.playerName[l % t];
            return !0
        }
        var k, x;
        this.bp = function () {
            var l, t;
            // k is name of bots on single player, x is name of bots in multipalyer
            k = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of C\u00f3rdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chav\u00edn Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;G\u00f6kt\u00fcrk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later L\u00ea z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguy\u1ec5n z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;T\u00e2y S\u01a1n z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem\u2013Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Sal\u00e9;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocoll\u00e1n;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;W\u00fcrttemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
            x = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of C\u00f3rdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chav\u00edn Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;FX Empire;Kingdom of FX;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;G\u00f6kt\u00fcrk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later L\u00ea z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguy\u1ec5n z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;T\u00e2y S\u01a1n z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem\u2013Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Sal\u00e9;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocoll\u00e1n;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;W\u00fcrttemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
            // check if funny names is enabled
            /*if (settings.funnyNames) {
                k = "69 Empire;Ohio;FX;FX Client;Ohio Empire;Kingdom of Trump;Republic of New York;Florida Man;United States of Islamic Free Socialist Republics of Soviets;Stalin Empire;Adolf Hitler;420;69;14;420:69;New Union;Jesus;Gamer Girl;Dragoons;Hw;Helicopter; ;F;SX;FVE;ADC;ABC;Soviet Union;LookDS;Fortnite;Fortnite Battlepass;Warzone;Minecraft;Call of FX Client;Teryak;LOL;LOL Empire;Kingdom of LOL;D;XD;LMAO;BRB;DWS;CGT;343;4456;696969;LSX;RWS;Amazon;Google;Google Empire;Kermanshah;Iran;Russia;Ukraine;Mohsen;ELOL;ELO;CHESS;Cerix;SAE;TFC;World Cup;Qatar;United Mexican States;Spanish Dum;SAFF;USSR;Crap;Fuck Empire;VBucks;Free VBucks;Gems;Steven Hawking;Q-DMR;Cocaine;DMT;PS5;Xbox;Microsft;Kingdom of Evil;Bux;Box;Dum Dum;Amogus;Among You;EsS;DRT;Ezraeel;CBF;AXS;6732;345;65;6;57;6;75687;7867;8;78;67;7546;54;634;6456;567658;768;78578;78578;768;789;79;Gd;German Empire;Fx;FX Client;FX Mod;Moms;Your Mom;X;PornHub;Kid;Childrens;SXCC;TSX;XFGT;ZALE;F;SEX;SEX Empire;Crown of ESIOS;Fr*nch;Nazis;FR;ELITE;[DREW];Swiss Person;Drew Durnil;DE;Persian K;King of Zelda;MC;Bedrocks;Rock Bottom;AES;ARSHED;Crushed;Mash Potatos;Mamad;Mohammad;ISLAM;Jesuss;ESX;Easter Egg Empire;XSAARF;Darwin;Einstin;Stalin;XEAEQQL;Serbia;Kosovo is Albania;Sun;Earth;Moon;R;MNTE;Serbs;Chad;Gigachad;GigaChad Empire;Terra Chad;Linus Tech Tips;MrBeast;D;ABSD;USA;Space Race;C;Random;Sheeesh;Kdmork;Water;[FX];FX Bot;Ohio is strong;Pineapple on Pizza;Covid-19;British Empire;ZZZZ;Zombies;PewDiePie;Zanzibar Technology;Tapels;Naples;Rome never Falls;Nik;Nuuk;Nuke Us;North Korea;Kim Jung-Un;Seoul;Washington D.C.;NN;RFVDGTRG;Polish;Poles;Mars;Jupiter;SUUUN;Andromeda;Triangulum;NGC-6;Hollywood;Bollywood;Messi;Ronaldo Dynasty;SUIIII;Habsburgs;Moscua;Rasputin;Turkey;Turkey da best;Guten Tag Poland;Polish Lithuanian Commonwealth;British Raj;Hello Your Compter Has Virus;Youtube;Indian Tech Support;Zanzibar;Optfine Empire;Kingdom of Oil;Persian Gulf has oil;Land of Freedom;BOTSWANA;Zombia;COC;Supercell;GigaCell;Megabyte;Internet Connection;CTRL + W = Chat;CTRL + W;Ohioans;Ohioan;O hio;K-POP;BTS;6ix9ine;Charleys;Mom;Your Mom;Your Mom with Belt;A+;Your Father with Milk;No Father;Kiddo;xR;iPhone is best;This is elon musk;Elon Musk;Charley Cooper;Raeesi;PACIL;Despacito;Ohio for ever;Wakanda;Wakanda for ever;Basij for life;King;Queen;Rook;e4;Chess is da best;69696969696969696969696;VCD;Robolx;Robolox;Roblox;Rubux;Free Rubux;Free Discord Nitro;Pandas;T-34;Gay;Gayreece;DRP;Drop of water;Ohio Dynasty;OHIO;OHIO;OHIO;OHIO;OHIO;OHIO;ohio;ohio;Florida;Kingdom of Florida;Yes;Reddit;Mom I'm Famous;YESSS!;undefined;UNO Reverse Card;Get Rekt;Netflix;Dj Jesus;Dancing Polish Cow;Crimea is USA;Serbia is Gay;Qatar isn't gay;Australia is fake;Australia-Hungary;Nuclear Fusion;Nuclear Bombs;Mirex;Florida;Communist Texas;Capitalist USSR;Rome always falls;Papal States of da Pope;Cuba is Sigma;Chad is Chad;Republic of Macedonia, oh wait North Macedonia;Alexander the Great was Macedonian;Turkey is Turk;Mongols are Pro-Gamers;Funky;Creep-er;Wind;Earth;History is useless;Here It Comes;Poor Albanian;Homeless Albanian;Least Angry Russian;Palestine is;West Taiwan;East Ukraine;N-Word;Shakespere;Short Guy;Peter Dum Dum;Come to Brazil;We speak Brazilian here;Third Mexican Republic;OHIO💀;Dead Kingdom;Alt+F4 for chat;GERHGRTHSDFHRTSHDRTGHRT;Gamer girl bath water;Mr. Dickhead;Mr. Cocksex;Average FX Client User;Sheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesh;123456789;Password;This game is written in html;".split(";");
                var _test = "Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;Ohio;".split(";");
                k = _test;
                x = k;
            }*/
            var n = "K ; Y;E ; Z; z; s;S ".split(";")
                , z = "Kingdom of ; Kingdom;Empire of ; Empire; Dynasty; Sultanate;Sultanate of ".split(";");
            for (l = k.length - 1; 0 <= l; l--)
                for (t = n.length - 1; 0 <= t; t--) {
                    k[l] = k[l].replace(n[t], z[t])
                    x[l] = x[l].replace(n[t], z[t])
                };
            if (settings.realisticNames) k = x = realisticNames;
        }
            ;
        this.jM = function () {
            if (9 === dr) {
                var l, t = ce.random(), n = x.length, z = cq + dy.dz;
                for (l = z - 1; l >= cq; l--)
                    gE[l] = "[Bot] " + x[(l + t) % n];
                for (l = z; l < b8; l++)
                    gE[l] = "[Zombie] " + x[(l + t) % n]
            } else if (dt) {
                if (!g())
                    for (t = ce.random(),
                        l = cq; l < b8; l++)
                        gE[l] = k[(l + t) % b8]
            } else
                for (t = x.length,
                    n = ce.random(),
                    l = cq; l < b8; l++)
                    gE[l] = "[Bot] " + x[(l + n) % t]
        }
            ;
        this.jN = function () {
            var l;
            if (jm.a10 && !dt) {
                a11 = Array(cq);
                var t = cq;
                var n = x.length;
                var z = ce.a12();
                for (l = 0; l < t; l++)
                    a11[l] = gE[l],
                        gE[l] = x[(l + z) % n];
                gE[aw] = a11[aw]
            }
        }
    }
    function ki() {
        this.a16 = [];
        this.a17 = [];
        this.bp = function () {
            this.a16 = [];
            this.a17 = []
        }
            ;
        this.dF = function () {
            0 <= this.a16.length && this.a18(this.a16);
            0 <= this.a17.length && this.a18(this.a17)
        }
            ;
        this.a18 = function (g) {
            var k, x = -1;
            for (k = g.length - 1; 0 <= k; k--)
                if (g[k].gY--,
                    0 >= g[k].gY) {
                    x = k;
                    break
                }
            for (k = x; 0 <= k; k--)
                g.shift()
        }
            ;
        this.lJ = function (g, k, x) {
            return this.a1A(this.a16, g, k, x)
        }
            ;
        this.a1B = function (g, k, x) {
            return this.a1A(this.a17, g, k, x)
        }
            ;
        this.a1A = function (g, k, x, l) {
            var t;
            a: {
                var n;
                for (t = x.length - 1; 0 <= t; t--)
                    for (n = g.length - 1; 0 <= n; n--)
                        if (g[n].player === x[t] && k === g[n].id) {
                            t = !0;
                            break a
                        }
                t = !1
            }
            if (t)
                return !1;
            if (l)
                for (l = x.length - 1; 0 <= l; l--)
                    g.push({
                        player: x[l],
                        id: k,
                        gY: 384
                    });
            return !0
        }
    }
    var gE, a11, fB, d0, d3, cz, d2, bU, hR, ax, b4, bM, bN, bQ, fP;
    function jH(g) {
        a11 = gE = Array(b8);
        fB = new Uint8Array(b8);
        d0 = new Uint16Array(b8);
        d3 = new Uint16Array(b8);
        cz = new Uint16Array(b8);
        d2 = new Uint16Array(b8);
        bU = new Uint32Array(b8);
        hR = new Uint32Array(b8);
        ax = new Uint32Array(b8);
        b4 = Array(b8);
        bM = Array(b8);
        bN = Array(b8);
        bQ = Array(b8);
        fP = new Uint8Array(b8);
        for (var k = g.length - 1; 0 <= k; k--)
            gE[k] = g[k].name,
                fP[k] = g[k].xJ
    }
    function kg() {
        this.nS = 0;
        this.i0 = null;
        this.bp = function () {
            this.nS = 0;
            this.i0 = []
        }
            ;
        this.fk = function (g) {
            this.i0.push(g);
            io++;
            fP[g] = 2;
            b5.qo[g] = (b5.qo[g] + 2) % 4;
            g === aw && (eS.show(!1, !1),
                e7.tB());
            e6.md(g)
        }
            ;
        this.fd = function (g) {
            var k;
            if (2 !== fP[g]) {
                var x = this.i0;
                for (k = x.length - 1; 0 <= k; k--)
                    if (x[k] === g) {
                        x.splice(k, 1);
                        break
                    }
            }
        }
            ;
        this.dF = function () {
            dt || (30 === this.nS && this.a1E(),
                this.nS = (this.nS + 1) % 60)
        }
            ;
        this.a1E = function () {
            var g, k = this.i0;
            for (g = k.length - 1; 0 <= g; g--) {
                var x = k[g];
                if (ae.dD(x)) {
                    var l = as(20 * ax[x], 100);
                    60 > l || (0 === bM[x].length ? !dE.dF(x, 2) && dA && dI(x, l, 0, 0) : dA ? dT(x, l) : db(x, l))
                }
            }
        }
    }
    function kc() {
        function g(l) {
            return x[l].a1L && k[l].a1Q()
        }
        this.w8 = 5;
        this.w9 = this.w8 - 1;
        this.vF = this.w8 + this.w9;
        var k;
        this.a1H = null;
        var x;
        this.vo = this.jV = 0;
        this.bp = function () {
            var l;
            this.a1H = Array(this.w8);
            this.a1H[0] = "territorial.io";
            this.a1H[this.w8 - 1] = "vampirr.io";
            var t = ce.a12(0);
            ce.jG(0);
            for (l = 1; l < this.w8 - 1; l++)
                this.a1H[l] = m.iR() + ".com";
            ce.jG(t);
            k = Array(this.vF);
            x = Array(this.vF);
            for (l = this.vF - 1; 0 <= l; l--)
                x[l] = {
                    a1L: !1,
                    gY: 0,
                    a1M: !1
                }
        }
            ;
        this.mt = function () {
            return this.vo < this.w8 ? this.vo : this.vo - this.w9
        }
            ;
        this.dF = function () {
            for (var l = this.vF - 1; 0 <= l; l--)
                this.vB(l) && c4.gY > x[l].gY + 15E3 && ii.a1N(l, x[l].a1M)
        }
            ;
        this.rb = function (l, t) {
            if (!x[l].a1L)
                return this.a1P(l, t),
                    !1;
            if (k[l].a1Q())
                return k[l].a1R(t),
                    k[l].vB();
            k[l].lA();
            this.a1P(l, t);
            return !1
        }
            ;
        this.a1P = function (l, t) {
            x[l].a1L = !0;
            x[l].gY = c4.gY;
            x[l].a1M = !1;
            k[l] = new a1T;
            k[l].bp(l, t)
        }
            ;
        this.a1R = function (l, t) {
            g(l) && k[l].a1R(t)
        }
            ;
        this.a1U = function (l, t) {
            0 === t ? jZ.rd() : 3 > t ? ii.u8(l, t - 1) : 3 === t ? ii.xG(l) : 4 === t ? jb.rd(l) : 5 === t ? l === this.jV && ii.a1V() : 6 === t ? ii.a1W(l) : 7 === t && ii.xf(l)
        }
            ;
        this.vB = function (l) {
            return x[l].a1L && k[l].vB()
        }
            ;
        this.send = function (l, t) {
            x[l].gY = c4.gY;
            x[l].a1M = !1;
            k[l].send(t)
        }
            ;
        this.pD = function (l) {
            x[l].a1M = !0
        }
            ;
        this.close = function (l, t) {
            g(l) && k[l].close(t)
        }
            ;
        this.a1Y = function (l, t) {
            jc.vL(t);
            g(l) && k[l].close(t)
        }
            ;
        this.vN = function (l) {
            for (var t = this.vF - 1; 0 <= t; t--)
                this.close(t, l)
        }
            ;
        this.a1Z = function (l, t) {
            for (var n = this.vF - 1; 0 <= n; n--)
                n !== l && this.close(n, t)
        }
            ;
        this.a1a = function (l, t) {
            k[l].lA();
            jc.bp(l, t.code)
        }
    }
    var dZ, dY;
    function jO() {
        var g;
        dY = 0;
        for (g = b8 - 1; 0 <= g; g--)
            0 !== fB[g] && dY++;
        dZ = new Uint16Array(dY);
        var k = 0;
        for (g = 0; g < b8; g++)
            0 !== fB[g] && (dZ[k++] = g)
    }
    function eH() {
        a1b();
        fj()
    }
    function fj() {
        for (var g = dY - 1; 0 <= g; g--)
            0 === fB[dZ[g]] && a1c(g)
    }
    function a1c(g) {
        for (dY--; g < dY; g++)
            dZ[g] = dZ[g + 1]
    }
    function a1b() {
        for (var g, k = dY - 1; 0 <= k; k--)
            bU[dZ[k]] <= as(hR[dZ[k]], 4) ? 1E3 >= bU[dZ[k]] && (2 !== fB[dZ[k]] || 0 === bU[dZ[k]]) && fi(dZ[k]) : bU[dZ[k]] >= hR[dZ[k]] ? hR[dZ[k]] = bU[dZ[k]] : (g = as(hR[dZ[k]] - bU[dZ[k]], 1E3),
                hR[dZ[k]] -= 1 > g ? 1 : g)
    }
    function ik() {
        var g, k = 0;
        for (g = dY - 1; 0 <= g; g--)
            k += ax[dZ[g]];
        return k % 4096
    }
    var oy, cH, a1d, a1e, r, s, pB, bq, gA, cB, pF, a1f, b, c, e, d, q, a1g = !1, a1h, a1i, i, gu, sf, h4, a5, b0, hn, vV, c4, dW, eP, cD, fe, vd, nN, uH, a1j, a1k, a1l = 0, a1m = "", a1n = !1;
    function a1o() {
        a1k = 2;
        a1e = 2515;
        a1d = ter_version + ter_update;
        jq();
        d8();
        a1n = !0;
        d = (e = "undefined" !== typeof Android ? Android : null) ? e.getVersion() : 0;
        12 <= d && e.prepareAd("6685097465");
        b = !1;
        window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (b = !0,
            // window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 5907904081"),
            c = "undefined" !== typeof mwIOSdataX ? mwIOSdataX : {
                username: "[FX] iOS User " + Math.floor(1E3 * Math.random()),
                id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
                zoom: !0,
                sound: !0,
                emojis: "0",
                colors: "0",
                password: "0",
                freeSpawn: !1,
                unlimitedTime: !1,
                alliances: !1
            });
        a1j = (new Date).getTime() % 1024;
        a1h = a1p();
        jj.bp();
        f.bp();
        h();
        p();
        aD();
        document.addEventListener ? document.addEventListener("contextmenu", function (g) {
            g.preventDefault()
        }, !1) : document.attachEvent("oncontextmenu", function () {
            window.event.returnValue = !1
        });
        a1q();
        document.addEventListener("keyup", a1r);
        document.addEventListener("keydown", a1s);
        document.addEventListener("visibilitychange", a1t);
        window.addEventListener("error", a1u, !0);
        sf = 10;
        x1 = new a1v;
        gu = new a1w;
        h4 = new tl;
        a5 = new nZ;
        b0 = new a1x;
        hn = new a1y;
        vV = new nH;
        c4 = new a1z;
        c4.jW();
        c4.bp();
        dW = new a20;
        eP = new a21;
        uH = new bm;
        uH.bp();
        cD = new tr;
        cD.bp();
        fe = new iT;
        vd = new ub;
        nN = new uQ;
        ou();
        ce.bp();
        ay.zo();
        jf.bp();
        jJ.bp();
        aJ.bp();
        jo.bp();
        jm.bp();
        e9.bp();
        jZ.bp();
        jL.bp();
        ox();
        bw.bp();
        c4.c5 = !0;
        setTimeout(function () {
            x0(2, 14071)
        }, 0)
    }
    function aI() {
        a1n || a1o()
    }
    function a1p() {
        try {
            return window.self !== window.top
        } catch (g) {
            return !0
        }
    }
    function a1u(g) {
        a1g || (a1g = !0,
            g.message ? (a1l = g.lineno,
                a1m = g.message,
                e9.rb(0, 6) && ii.a1W(0),
                g = "[A_ERROR " + a1l + "][" + a1m + "]",
                a22(g)) : (g = "[B_ERROR " + g.type + "][" + (g.srcElement || g.target) + "]",
                    console.log(g)))
    }
    function a22(g) {
        e ? e.showToast(g) : alert(g)
    }
    function a1s(g) {
        "ArrowLeft" === g.key ? gj.vw(3) : "ArrowUp" === g.key ? gj.vw(0) : "ArrowRight" === g.key ? gj.vw(1) : "ArrowDown" === g.key ? gj.vw(2) : "a" === g.key ? eN.qw(.96875) : "d" === g.key ? eN.qw(32 / 31) : "s" === g.key ? eN.qw(.875) : "w" === g.key ? eN.qw(8 / 7) : "1" === g.key ? eN.qw(5 / 6) : "2" === g.key && eN.qw(1.2)
    }
    function a1t() {
        "hidden" === document.visibilityState ? c4.a23() : c4.xY()
    }
    function a1r(g) {
        400 > c4.gY || (8 !== aJ.pR() && aJ.ua(g) ? c4.c5 = !0 : "Escape" === g.key ? aJ.aK() : "ArrowLeft" === g.key ? gj.a24(3) : "ArrowUp" === g.key ? gj.a24(0) : "ArrowRight" === g.key ? gj.a24(1) : "ArrowDown" === g.key ? gj.a24(2) : "h" === g.key && 1 <= fV && (ge = !ge,
            c4.c5 = !0))
    }
    function a1q() {
        a1f = window.location.hostname;
        a1i = 0 <= a1f.toLowerCase().indexOf("territorial.io")
    }
    function kJ() {
        var g;
        this.bp = function () {
            g = [];
            9 === dr && this.a26()
        }
            ;
        this.a26 = function () {
            var k = [8, 51, 68, 88, 138, 178, 313];
            var x = [35, 330];
            this.dz = 0;
            this.e0 = [0, 0, 0, 0, 0, 0];
            cq <= k[0] ? (this.dz = x[0] - cq,
                this.e0[1] = x[1] - as(x[1] * cq, k[0]),
                this.e0[0] = 512 - this.e0[1] - x[0]) : cq <= k[1] ? (this.dz = x[0] - k[0] - as((x[0] - k[0]) * (cq - k[0]), k[1] - k[0]),
                    this.e0[0] = 512 - this.dz - cq) : cq <= k[2] ? (this.e0[0] = 512 - k[1] - as((512 - k[1]) * (cq - k[1]), k[2] - k[1]),
                        this.e0[1] = 512 - cq - this.e0[0]) : cq <= k[3] ? (this.e0[1] = 512 - k[2] - as((512 - k[2]) * (cq - k[2]), k[3] - k[2]),
                            this.e0[2] = 512 - cq - this.e0[1]) : cq <= k[4] ? (this.e0[2] = 512 - k[3] - as((512 - k[3]) * (cq - k[3]), k[4] - k[3]),
                                this.e0[3] = 512 - cq - this.e0[2]) : cq <= k[5] ? (this.e0[3] = 512 - k[4] - as((512 - k[4]) * (cq - k[4]), k[5] - k[4]),
                                    this.e0[4] = 512 - cq - this.e0[3]) : cq <= k[6] ? (this.e0[4] = 512 - k[5] - as((512 - k[5]) * (cq - k[5]), k[6] - k[5]),
                                        this.e0[5] = 512 - cq - this.e0[4]) : this.e0[5] = 512 - cq;
            x = this.dz;
            for (k = 0; 6 > k; k++)
                x += this.e0[k];
            if (x > dq) {
                for (k = this.dz = 0; 5 > k; k++)
                    this.e0[k] = 0;
                this.e0[5] = dq
            }
        }
            ;
        this.z6 = function (k) {
            g.push({
                player: k,
                mm: 14 + ce.cf(20)
            })
        }
            ;
        this.dF = function () {
            if (9 === dr) {
                var k;
                for (k = g.length - 1; 0 <= k; k--)
                    0 >= --g[k].mm && (e6.mv(g[k].player, 0, 46),
                        g.splice(k))
            }
        }
    }
    var aZ, aa, hk, pc, wy, wz, wo, wp, vY, a2B = 14, x1;
    function x0(g, k) {
        g %= a2B;
        if (g !== wo || a2D(wo) && k !== wp) {
            var x = performance.now();
            vY = !1;
            x1.x2();
            ce.jG(g);
            wo = g;
            wp = k;
            a2D(g) && (jf.bz(g).a1K = k);
            if (a2E(wo))
                a2F(x);
            else {
                var l = jf.bz(wo);
                aZ = l.c1;
                aa = l.cw;
                ce.jG(l.a1K);
                jg.jM([aZ, aa, l.gK, l.gH]);
                a2G();
                jJ.a2H();
                jg.a2I();
                a2J(x)
            }
        }
    }
    function a2J(g) {
        var k = performance.now();
        sf = Math.floor(29 - (k - g) / (33 * jf.bz(wo).per));
        sf = 0 > sf ? 0 : 20 < sf ? 20 : sf
    }
    function a2L() {
        return a2B - 4
    }
    function a2E(g) {
        return g >= a2L()
    }
    function a2D(g) {
        return !(1 === g || g >= a2L())
    }
    function a2M(g) {
        return 3 === g || 7 === g || 9 === g
    }
    function a2N(g) {
        return 2 === g || 7 === g || 9 === g
    }
    function a1v() {
        function g() {
            x1.dF()
        }
        function k(l, t) {
            0 < t && (wz[l] += t,
                wz[l + 1] += t,
                wz[l + 2] += t)
        }
        function x(l) {
            return wz[l + 2] > wz[l] && wz[l + 2] > wz[l + 1]
        }
        this.rW = -1;
        this.a2O = this.aA = 0;
        this.a2P = 8;
        this.a2Q = 32;
        this.a2R = 8;
        this.a2S = 32;
        this.a2T = [0, 0];
        this.qo = [0, 0, 0, 0];
        this.a2U = null;
        this.a2V = !0;
        this.a2W = !1;
        this.x2 = function () {
            -1 !== this.rW && clearTimeout(this.rW);
            this.rW = -1;
            this.a2U = null;
            jg.a2I()
        }
            ;
        this.bp = function () {
            7 === aJ.pR() || this.a2W || (this.a2V = !0,
                this.aA = 0,
                this.a2O = 1,
                this.a2T = [jf.bz(wo).a2X[0], jf.bz(wo).a2Y[0]],
                this.qo = [jf.bz(wo).a2Z[3], jf.bz(wo).a2Z[4], jf.bz(wo).a2Z[5], jf.bz(wo).a2Z[6]],
                this.a2P = jf.bz(wo).a2Z[7],
                this.a2Q = jf.bz(wo).a2Z[8],
                this.a2R = jf.bz(wo).a2Z[9],
                this.a2S = jf.bz(wo).a2Z[10],
                this.a2V ? this.rW = setTimeout(g, 16) : this.dF())
        }
            ;
        this.dF = function () {
            if (8 === aJ.pR() && eR.gZ())
                this.rW = setTimeout(g, 16);
            else {
                if (0 === this.aA) {
                    var l = ce.a12();
                    ce.jG(jf.bz(wo).a2Z[2]);
                    jg.jM([aZ, aa, jf.bz(wo).a2Z[0], jf.bz(wo).a2Z[1]]);
                    ce.jG(l);
                    this.a2U = jg.a2b();
                    this.aA++;
                    if (this.a2V) {
                        this.rW = setTimeout(g, 16);
                        return
                    }
                }
                l = this.a2V ? 10 : 1E6;
                l = aa - this.a2O - 1 < l ? aa - this.a2O - 1 : l;
                l = this.a2O + l;
                for (var t, n, z = this.a2O; z < l; z++)
                    for (var y = 1; y < aZ - 1; y++)
                        if (n = y + z * aZ,
                            t = 4 * n,
                            x(t))
                            this.a2d(t, n, 1);
                        else {
                            this.a2d(t, n, 0);
                            n = y;
                            var A = z;
                            (1 < n && x(t - 4) || n < aZ - 2 && x(t + 4) || 1 < A && x(t - 4 * aZ) || A < aa - 2 && x(t + 4 * aZ)) && this.a2e(y, z)
                        }
                this.a2O = l;
                this.a2O >= aa - 1 ? (pc.putImageData(wy, 0, 0, 1, 1, aZ - 2, aa - 2),
                    c4.c5 = !0,
                    this.x2()) : this.a2V && (this.rW = setTimeout(g, 16))
            }
        }
            ;
        this.a2d = function (l, t, n) {
            k(l, Math.floor(this.a2T[n] + this.qo[n] * this.a2U[t] / 1E4) - wz[l])
        }
            ;
        this.a2i = function (l, t, n, z, y) {
            k(l, Math.floor(this.a2T[z] + (1 - t / n) * y) - wz[l])
        }
            ;
        this.a2e = function (l, t) {
            var n = l - this.a2Q;
            var z = t - this.a2Q;
            var y = l + this.a2Q
                , A = t + this.a2Q;
            n = 1 > n ? 1 : n;
            y = y > aZ - 2 ? aZ - 2 : y;
            A = A > aa - 2 ? aa - 2 : A;
            for (var B = 1 > z ? 1 : z; B <= A; B++)
                for (var C = n; C <= y; C++)
                    if (z = 4 * (C + B * aZ),
                        x(z)) {
                        var F = this.a2P + (this.a2Q - this.a2P) * this.a2U[C + aZ * B] / 1E4;
                        if (!(Math.abs(l - C) > F || Math.abs(t - B) > F)) {
                            var E = Math.sqrt((l - C) * (l - C) + (t - B) * (t - B));
                            E >= F || this.a2i(z, E, F, 1, this.qo[3])
                        }
                    } else
                        F = this.a2R + (this.a2S - this.a2R) * this.a2U[C + aZ * B] / 1E4,
                            Math.abs(l - C) > F || Math.abs(t - B) > F || (E = Math.sqrt((l - C) * (l - C) + (t - B) * (t - B)),
                                E >= F || this.a2i(z, E, F, 0, this.qo[2]))
        }
    }
    function a2G() {
        2 === wo ? a2k([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === wo ? a2k([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === wo ? a2k([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === wo && a2k([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
    }
    function a2k(g, k, x, l, t) {
        var n, z, y, A = g.length - 1, B = aZ + aa;
        B *= B;
        var C = x.length;
        for (n = C - 1; 0 <= n; n--)
            x[n] *= x[n];
        var F = Array(C)
            , E = Array(C)
            , H = Array(C)
            , J = jg.a2b();
        if (void 0 === t)
            for (t = Array(C),
                n = C - 1; 0 <= n; n--)
                t[n] = 0;
        for (n = 1; n < C; n++)
            F[n] = x[n] - x[n - 1],
                E[n] = l[n] - l[n - 1],
                H[n] = t[n] - t[n - 1];
        for (z = aZ - 1; 0 <= z; z--)
            for (y = aa - 1; 0 <= y; y--) {
                var K = B;
                for (n = A; 0 <= n; n--) {
                    var D = (z - g[n]) * (z - g[n]) + (y - k[n]) * (y - k[n]);
                    K = D < K ? D : K
                }
                D = l[C - 1];
                var L = t[C - 1];
                for (n = 1; n < C; n++)
                    if (K < x[n]) {
                        D = l[n - 1] + yM((K - x[n - 1]) * E[n], F[n]);
                        L = t[n - 1] + yM((K - x[n - 1]) * H[n], F[n]);
                        break
                    }
                a2y(aZ * y + z, D, L, J)
            }
    }
    function a2y(g, k, x, l) {
        500 > k ? l[g] = as(l[g] * k * 2, 1E3) : 500 < k && (l[g] += as(2 * (1E4 - l[g]) * (k - 500), 1E3));
        l[g] += as(x * (10 * k - l[g]), 1E3)
    }
    function kK() {
        var g;
        this.nC = this.nB = this.n8 = this.n7 = 0;
        this.bp = function () {
            g = Array(a2L());
            g[0] = {
                c1: [0, 5E3, 8E3, 1E4],
                f7: [220, 250, 255, 220],
                mx: [190, 220, 0, 0],
                cm: [170, 200, 0, 0]
            };
            g[1] = {
                c1: [0, 4E3, 5E3, 6E3, 1E4],
                f7: [25, 0, 100, 0, 25],
                mx: [25, 0, 0, 0, 25],
                cm: [25, 0, 0, 0, 25]
            };
            g[2] = {
                c1: [0, 500, 2500, 2999, 3E3, 3200, 4200, 5200, 5700, 8800, 1E4],
                f7: [15, 15, 70, 40, 40, 40, 252, 40, 40, 20, 30],
                mx: [80, 80, 190, 90, 40, 40, 248, 180, 180, 90, 140],
                cm: [120, 120, 220, 110, 40, 40, 217, 10, 10, 10, 10]
            };
            g[3] = {
                c1: [0, 400, 1800, 2E3, 3200, 4500, 6E3, 7700, 8500, 9500, 1E4],
                f7: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
                mx: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
                cm: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
            };
            g[4] = {
                c1: [0, 300, 1400, 1700, 3E3, 4E3, 1E4],
                f7: [10, 10, 20, 10, 10, 170, 212],
                mx: [20, 20, 60, 100, 100, 110, 170],
                cm: [70, 70, 160, 30, 30, 60, 120]
            };
            g[5] = {
                c1: [0, 1E3, 3E3, 3500, 4E3, 4500, 7E3, 7500, 8E3, 1E4],
                f7: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
                mx: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
                cm: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
            };
            g[6] = {
                c1: [0, 700, 2650, 3200, 5E3, 8E3, 1E4],
                f7: [10, 10, 60, 255, 255, 200, 200],
                mx: [10, 10, 60, 255, 255, 200, 200],
                cm: [80, 80, 255, 255, 255, 200, 200]
            };
            g[7] = {
                c1: [0, 400, 1999, 2E3, 3200, 4E3, 4700, 5500, 6500, 9500, 1E4],
                f7: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
                mx: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
                cm: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
            };
            g[8] = {
                c1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6E3, 1E4],
                f7: [25, 30, 30, 30, 255, 255, 30, 40, 20],
                mx: [25, 30, 150, 150, 245, 245, 80, 150, 70],
                cm: [60, 170, 170, 170, 235, 235, 30, 40, 40]
            };
            g[9] = {
                c1: [0, 400, 2009, 2010, 3300, 4E3, 5200, 6500, 8E3, 9500, 1E4],
                f7: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
                mx: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
                cm: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
            }
        }
            ;
        this.a2H = function () {
            hk = document.createElement("canvas");
            hk.width = aZ;
            hk.height = aa;
            pc = hk.getContext("2d", {
                alpha: !1
            });
            var k = pc.getImageData(0, 0, aZ, aa);
            wz = k.data;
            var x = g[wo].c1, l = g[wo].f7, t = g[wo].mx, n = g[wo].cm, z, y, A = jg.a2b(), B = x.length - 2, C = Array(B + 1), F = Array(B + 1), E = Array(B + 1), H = Array(B + 1);
            for (y = B; 0 <= y; y--)
                C[y] = x[y + 1] - x[y],
                    F[y] = l[y + 1] - l[y],
                    E[y] = t[y + 1] - t[y],
                    H[y] = n[y + 1] - n[y];
            for (z = aZ * aa - 1; 0 <= z; z--)
                for (y = B; 0 <= y; y--)
                    if (A[z] >= x[y]) {
                        var J = A[z] - x[y];
                        wz[4 * z] = l[y] + yM(F[y] * J, C[y]);
                        wz[4 * z + 1] = t[y] + yM(E[y] * J, C[y]);
                        wz[4 * z + 2] = n[y] + yM(H[y] * J, C[y]);
                        wz[4 * z + 3] = 255;
                        break
                    }
            pc.putImageData(k, 0, 0);
            jf.a32() && bw.bx() && jf.a32() && (x = bw.l4("arena"),
                pc.save(),
                pc.globalAlpha = 1 === wo ? .1 : 1,
                pc.imageSmoothingEnabled = !0,
                k = 2.8,
                pc.scale(k, k),
                pc.drawImage(x, Math.floor((aZ / k - x.width) / 2), Math.floor(.5 * aa / k - x.height / 2)),
                pc.restore(),
                x = bw.l4("territorial.io"),
                pc.save(),
                pc.globalAlpha = 1 === wo ? .1 : 1,
                pc.imageSmoothingEnabled = !0,
                k = .87,
                pc.scale(k, k),
                pc.drawImage(x, Math.floor(.745 * (aZ / k - x.width)), Math.floor(.422 * aa / k - x.height / 2)),
                pc.restore());
            vY = !0;
            c4.c5 = !0
        }
            ;
        this.jK = function () {
            var k, x = 0;
            var l = aa * aZ * 4;
            var t = tq
                , n = wz;
            for (k = aZ - 1; 0 <= k; k--)
                t[4 * k + 2] = 3,
                    t[l - 4 * k - 2] = 3;
            l = 4 * aZ;
            for (k = aa - 1; 0 <= k; k--)
                t[k * l + 2] = 3,
                    t[k * l + l - 2] = 3;
            for (k = aZ * aa - 1; 0 <= k; k--)
                l = 4 * k,
                    3 !== t[l + 2] && (n[l + 2] > n[l + 1] && n[l + 2] > n[l] ? t[l + 2] = 2 : (t[l + 2] = 1,
                        x++));
            this.n7 = (aZ - 2) * (aa - 2);
            this.nC = 0;
            if (a2M(wo)) {
                n = 0;
                l = tq;
                var z = wz;
                for (t = aZ * aa - 1; 0 <= t; t--)
                    k = 4 * t,
                        z[k] === z[k + 1] && z[k] === z[k + 2] && 3 !== l[k + 2] && (n++,
                            l[k + 2] = 3);
                jJ.nC = n
            }
            this.n8 = j1 = x - this.nC;
            this.nB = this.n7 - this.n8 - this.nC
        }
    }
    function a2F(g) {
        var k;
        wo === a2L() ? k = "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86fRU8Av6gRK76AeCE66hQ9IAw6iQ7IUu6kQ6IUu6lQy87EQmQofAK6Ak6nQUdA7F9D56nQAKAUQAKBA9F8D56nP9A9BKIBe57DaqQAGBeIBoSAKBAKjDGsQAFB6AySA7BUiDQrSKFCKCA6AyEDUcAKD6rV6AyFAoBCUc6yV6AyOB6C865WkBAEAKZ655X7Aod66M6a69Z967W5967W5967W5967W5867g5867g5867g5767q56675Z6675Z5676Z5676Z5676Z5676Zu77U6AKu678UyFEk78UyID9679UyID768L9yBA8A8DABAu8qEA8C769WEA8Cu95UoICG99T7AKGA9B9699UoKB77AUoLB56dAe69UyMBucAe69QUCBUCC7B6BGbAe7B58BABAeEAyYCAI6ZAe7B57B6AeHCUXAabAe7L57B7AKJCQ5UEHB57C7CQ5UEHB56C8CQ5eDHB57AUBCoV65eEG9QAZB965oEG9QAZB965yDG9QKZAUBAKCBa5yDG9QKZAKGAKEA665yDG9QUmAk5yDHB56AUED8AkxAUEAe7B565oAeCALyA7HV575oA8AyBOKGHf585qA8AKEN9Ay7p585sBVmAy7p595sBVkAo76P95uBLjAo76P9AKCAUB5rA8N6AK78Q55sA6V6Q65tAKQAMCQ756AGT8RF58AKBAz96RP6AFTz7P6oBTz7b59Rl58Rv57R675z7975V7975V7875f8HzSlwSbxSbxSbxSbxSlwSvvS56ZApRSuYA6L7S66WA6L7S656yBFeJL7S656yBFeIL8S656yDE8A9MB8556yEEoNMB8t6yFEAPMV8t6KJD7B8MV8t56BokB6Mz8t5UQD7B6M6S65yAyIAUlB7M6S65yAyuB7M7S75xAovB7M7S65yAeuCLZS75xAUuB6AoBM6S75xAKvB6NL87596BzhS759oPNz8959UPNz89589B8Nz9FsAKrB9Np9PqAUpCLiTV6oClyCD9C9M8Tf6oCloCD8DVaTz6UCloCDomMp9p6oCleBDUqMf9p6yClUBDUrMV9p67AN97AKFEABAfWTj66AKFD8M8TACAZ6yDAUnM8TACAZ66ELeT556ypNB9j67ELeTZ67EVeTP6ytNB9F67EffTF66EpfTZMAyDAUpEzfTZHByoE6NL9jDBKFAUpEfhTjCA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6Ao8i58m7Ae8Y59m7AK8O6O67us67us65u6ui68r6AKau8q6AyEAUau9qUUCE69p9B8AeFB7u8qASAyEB6u6qUSA7AUQu6qyPC5u6qyQC5u5q8BoZuscByZuifBAcA8A5s9rKHDKIA5s8r6AUmAUCtO78ti78AeCs9v7AUDs9wiwwsvwiwwsuw6s5w5s6wsuw6s5w7AyBr8xslx5r5x9rY99rZCq8ysay6q6y6qtJqPMBeGoFgP6BWe5lPKQW65pO7B8W55rOoXV95zN7C7V655VbEMK55pZEWI557MKtU8557MKuUj66LowP6AeFA7DF69LKyPySCZ8VDFL5oWB858pBFVyC8B5588J7FpqAeEC9Bt89Jy68M6EAJ59e9o7BYEUD598Je7pU6sJU76AoOKQsJU96J96sJU96J66vJU96JkyJK97Ja5U89J9B6AK7k5o88J9BKHAeFA9AK5k5y88KAKC6AeDEu58I7KKBEAs658I6OeGAoh659Iz5yf66K86PeFA7B666y8z68Bk6y8z7KH668Iz7eF669IwwI58vIwyISzIS6K7S66G587U59X9AQhF8X8AeqAZ9U5qlAopAj9e5gkAypAj96E9X7A6EAD6BEgmA7D9AkBEWoA6D8AuED8YKHD7AkID5YKHD7AkJDqrA6D6AkKDWsA6D6AkLDCtA7DyD6MC8Y8A6DoD6OC5ZAHDUE6NCqzA8DAE6QCM5eJC8AkTB8ZoKC7AkUB6ZyKC6AuYA9Z8BAZA56ZA7Z9BAaA589KJC6A589UIC6Aw9eJCoE6bAM67A8CoE6bAW67A7CoE6bAg66A9CUF897A8CKE899A9B9AeDAUGAS9AJB7A9AKH889A9B6B8888BKOCI87BKOCI88BKMCI89BKKCS9KLA7Cc9ULA6Cw9Un89Uo89Kq889Em88E5887E688yu886E5887E6887Ew87E5887E5887Ew88E5886E6886E788ov88ow88ov88yv88ow88ew88ey88K5m8Az88Az88AzH" : wo === a2L() + 1 ? k = "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Fs69FKxJ6556KX78Fs7AxFATAK75558KX78Fi7KuFeSAU7t59KN8AzvKuFyQAU7t6BBmAxvetF7BoDHj6U99mUvvetF8BeEHZ6e98metvUvF9BUEHZ6e98monv7E7GKJAy7Z6o7UBC5mocAKGAUCv7C7IKHA6Hj6o7UCCr86B8BUCwKZIoGA6HZ66HUDCX88B6x7Ce8yFA6AeBG8567HUHB8nAHy6CA8yFA7AUCG8L6AOyHeIB5nUEy9B6I8AeJAUCG7L7AOyHyJBJIBe9ADA8AUDG6L8AOyH79aBK9UCA7AUEGzTAYxH99eAVBAyDG6L9AsvIJ99AAhAKHGpUA5s7IJ99AAoGpVA6sy8T99AAmAoCF9MUGsy8T99AAfAoJF8MeGsy8T99AAdA8A7F7MoFs6Id99AAcAyKF7MyEs6Id99AArF6M6AsuIx99AApFzdAYuI6999AAnFzcAYvI6999AAnFpcAeDAOrI6999AAmFpdAUEAOrI6999AAmFpdAoBAYrI6999AAlFpeAoBAYpI8999AAlFpeA6sU87999AAmFfeA7sU86999AAoFBgA7BACrK85999AAoE9NUJA7AsgIx99AAoEBpBKDA5re8x99AAqCACBpqB9ro8n99AAtB7AeMOeTr6IT99AAuAKDBKDAUBA9OoTr7H9999AA5yGA8A8OoUr8H5999AA59AoKAzuB7sU69999AA78AVwB7se58999AA9ABOyUso57999AChB8s9F8999ACgB6tK58999ACgB6tK59999ACgBs5U59999AA7eCP8Bi5U58999AA7eCB9AVnBO5U59999AA9oCN9BE5e59999AA9oBOAIt6F9999AA9eBOAHt7F9999AChA6t9GJ99AA7eBOUCBeGuAuAeK999AA7eFBKDMoEBAHuKuA6A6999AA7oGAyIMeFAUCAKBAeGuot999AA8yTMeKAeHuyu999AA8oSMeKAoFu8AoBEJ99AA8oSMULA6AO7KDAen999AA8eRMAOv8AKEEJ99AA8eRL8B5v8AeFD8999AA8eQL8Bs8AEAymAyB999AA76BpTBs8KEAeqAeC999AA7oOL9Bs8UDAyqAKE999AA7UOL9Bi8yCAypAeD999AA7UOL8BY87AeEEKDAn99AA7UNL7Bi88AeFET99AA77A9AUBL6Bs89AoEEd99AA76A9AUBLoNxeDAeq999AA77A6L8BtAET99AA79AzQB5yUo999AA8KBL6B6yon999AB9yUyen999AB9USy7ET99AB89B7zKo999AB87B7zon999AB8yRzyo999AB8oRzKCAKBAKn999AB8eSz8D9999AB8ATzyCAUk999AB8KUz6AUCDx99AB8KU5XDd99AB8UT5WDn99AB8KU5UAKCAKBDT99AB8AU5WAKDDT99AB78CFWAoCDT99AB78B85YAoDDJ99AB77B85ZAyCDJ99AB8KM5ZA8AKf999AB8UI5bAKCD8999AB8eD5eAKDD9999AB7yC5tD6999AB7eC5vEJ99AB67AjuEn99AHOEn99AHQET99AHQET99AHUD7999AHRAKDD6999AHLAeDD9999AHMAyCD7999AHNAyBD7999AHSAKCD5999AHTAUBD567UB999AAuD767UC999AAsAKBAyBDQ7UDAUD999AAoAyBDQ7UI999AAoAoDDQ7AF999AAtAKBAUBDa7ABAoC999AArAKCAKCDT99AHXAKDDJ99AHVAUDC8999AHZAKDC8999AHfC5999AHaAKDAKBC5999ABvAP8KCAoW999ABuAP8UDAKY999AHiCx99AHeAKECeyAT99AG76AKHCUsAoBA5999AG8KWEeEAUG999AG8eBAUSEUDAKG999AG76AKGAKEB8EADAUE999AG89CKlAUEAn99AG8oBAUU999AHmB9999AHkAKDBoDAd99AHmBUFA5999AHjBUDA9999AHkA9AeJ999AHhAKCA9AeJ999AHkBAIA6999AHgBKHA7999AHhAyCAoBAKCBT99AHfAUBAUHAUBBn99AHgAKCAUBAKDAKDBVoAn99AF96AKHBVpAn99AF9yBAeROAE999AF9KYOAD999AF9oZN6Ad99AF98CT99AHgAUCBn99AHtBn99AHuAKCAn99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGIAd99AJ99AJ99AJ99AJ99ACdAd99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AH7oE999AH5eB999AJ99AJ99AFGAKBAT99AJ99AJ99AJ99AJ99AC9KB999AH5UBAoF999AHtAyCAd99AHtAyCAd99AHvAx99AHxA7AUC999AHlAUFA9AUF668Ad99AA6ABAeCAyJAeE668Ax99AA57AeCAKEA7AeBA7AQ67Ax99AA56AyFA6999AHrAKBAKDA7999AHwA88mAdFBHDAVgAxFA97FALfA5898AKHA969KEOAF899AKGA98kAxGBE89A8YeII7AnGBoCAs76B7TUOC8Bo8yF9EA9AKDAeCAKBvyUN6AUyCUVB6G7CxDA9AeCv7C7NUDE8DABAULB7AeED9AyNDw9yJAyCvydNADA7BoDAoEAyBAyDD7A8C7CKFAeEAeHBKr88ACA6BE8KbNAwAKoAKhB7CyKFABAc7UDAUCAKIAUBveCAycM6M9AKoA7F6AKE86yEAKLvoHAUhKoIAguAKE858AeCBO6yDA7Ee9yEAM6m58AoDA9u6AoGFo8g6686UCAoCAUGueGAU7o65bS69A6t7KoubyDAm6UGtVJD9c786yHszND7c886yHA6AOkL6DrABKC8sA7AoCoKFC6L9DhCBKD8cAUNB5n8A6CfUD5eAFAKGAcbA7BUPn7A7CBWDrP8aA9BUOAyCm8BUQMUggABAKCAwRBAFAUCB8AeCm6ByEAUIMUch58MAUCBADCyBAN8eSAUDA8MAZAKBiIMAKDBADCr8UbAKCAVWCXv799AoMBADCr7V58AKDB7jl99AyMBADC5c7AUOAUKAeEA6D7QUTj68RBKDCg8KDAeEBeKAKTCf69CD6ABAcIByDCWaAKLAKYAUOBoIEAHR8AUCBr6wAAeGByDCqjAecC6A5W6AKDBX76AKB78eIBUKAeZWAEA9AoUa7BD85777A8BeMAeaUeDBAFDC69BD8779UTAeZUeGA6AyOAKMbAMm9787AKCCKDCp96AUEA7AyHAKPAKDAq7AOnKDAR78AUBCyDCz9oDAUJA5d9Br9568yCA6AK8yLAUQAoXT7foNn667yIAeDAUBAKEIyGBALAySUXMBX9u79Cy96BeGCp95fUIn669oNG8AoTB6A8Cf9rQAN9969UCAKCByCBeCHAOA9Cf9bR68oDA7A6DACA6Ao8UbSvT68ABAyEBeEC6AUDA6FKGCUiR87S68oBA6CAeA7AUCA6AKUAeQA6AUBB6D7R87P6CA7GAFCU68B9A7AUCA8A6AKBA8D9R77W6DA9BABE6A8De5yRA9AoEA7AUEE9RbL6UA9AoKEAJB9A8Ae6yIB7Ao58RHI6cA8AoPA8AUHAUPBKSQB7KGAk9ulAeGBUJAUHAyRA7CL56R869QRAeLAoRAyZAyHA6A7AUXPp5yDB969aHAeZAKhCKGA6D7O8P6AUR69kEBAFAoKGUEAymOUBAf58AUL6896LKKnOKCAV7Q886FK8AyDBKOA9N8Ru8aMc9RQ8kEd8RQ8aBd8Q9AoD68F97Z6AKrQu9j9KHAM5yHDf587B59eKAM5eJCp6HF6IZeKCB5vJ6OZV777M6AAoMZp7RN577AKEBKQAyFZ6Q57QBKC56yRAeGA9az577VA9BF6KcAq77OvWA9AeDAj6q8AHCVp7Y585cKQA7JeND57YA8AZ6yEC5bzCB9DRa57oHCM5oGB7DeEGeVC97bAUB57UJB6Z9A8BUdA7GeWC87R588BASZ7EeJGoYC77I6AA9Cq5UmA8G7CoeCUF6696MAyiY7AeOB6A7G8CokA8A967a6C58B6Ao7AaE767k7MxFeFDAdE966668MpFyGC8C8F666D68" : wo === a2L() + 2 ? k = "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" : wo === a2L() + 3 && (k = "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C9AKsV957oMAolA6Ce7ABDABEqS57oPAenAKaG8AKfAKtV7568AUDI6GyCDUBE5V7568CAEG8GeBDyBEqQ568CAIG6GKBD6AKrV6568CKLGo59AKlAUqV656yBAKWBonAUVF8AKmAKpV656oCAUWB7DoFCA58AKmAKpV656oaCAgAoVF6AKnAKpV656ebCeeAoVFyBEABECP56KfCodAoSF6AU8MP56AhCocAyQFyEIMP559DoZC8AyPFUGIWO56AhC6C9AyPFAHIWO56AfC9C9A7BeJAUmA6IgO56AfC7DUGAeBA9A9AekBA8CO56AdDAfA6AUCA9A9AyiBA8CN56AeDKeBUHA9AyhBK8CN56AFAKYDKeC7AekBA8MN559AyBCygC9GyMICL56KEAUZDecFyBA9BU8WJ56AFAUUAUDDUdFoFA6BU8qG56KFAUUAUDDUdFUaIgG56KEAUTAoCDedE9C9IMI56KEAUSAyCDecE8DK8MF56oDAeREKbE7De8CF56UFAeSEKbEyhIWF56KHAeREUaEejIWF56KFAyQEUbEUjIgF56AFAyQEeaEeiIqE56KEA6B6EebEKiJB9956KDA7B6EebD9Dy9L9856UDA7B6EebD6D7JUHAf8756eCA8B6EUcDymJeIAV8657USEKdDemJyIAV8t7eTEAJAUSDejJ9A8AL8t7eTEAHAyRDUTL6A8AV8t7eSD9A8A6B6DUPMUGAV8t7eRD9A8A9ByfBpeS557USD7A8BKPDAOM9S657eSD7A7BeODALMyBAz8757eRD8A6ByNC9A7AoBMyBAp8857eRD9AyPBedA7AoBMoDAV8857eSEADB6BonAVXAeBS957eREUBB7BooALWTt7eRGKNEKBLoCAoMAV8F7oRGKMEUBLoDAeGAV8657oSGAMEeBLoKAV8757eTGAMEeBLz9857eTGKKEoBLp9957eTGKKEKFLgA57USGUJD7A9LWC57eRGoGDeOLWC57USGoFDeOLCF57UTGeEDeOK9U657eUGeBDyNK9U757eUGeBDeOK8U957UVGeBDUPK5VZ7UWGUBDAQKgQ57KXGKBDAQKgP57UXGABCKCAySKWR57UZF8AKRC7KKNAWF57KaF8AKRC7KAJAUBAgG57KaF8AKQC7KAJA5U957AbF7AKQC6KAJA6U857UaFyDB6CzAA9A6U957UaFoEByZKKHA7VF7UaFoHBUXKUEBCK57eaFeIBKYKKCBWK57oaFeIBKXKKDBWK576Co5eIA8AKBCVDAUKVZ77Co5eFA9C6KeBBMM578Co5UBBUaL5Vj78CozAKMC6LWR579CeyAKMCzNV7579CoyAKLCzFAKHV8578CyyAKKCfIAKEV958AZFABBAXK8Wt8KZE8AeJCBKWj8oYE7BACCBLWj8eZE7DVLWj8eYE8DLOWF86CUwDLQV7587CUwDBRV6588CKxC9L9V5589B9E9C9MCP59ARFAaMWQ59ARFUXMgQ59AQF6B6M7V659AQGKKM8V659AQGyCNWQ59KPT9V759APT9V759KOT9V859ANUMS59AJUqS59KHU5V8R7AiMA5U5WB7yE6WWB7yE6VWV7eG6UWV7eH6TWV7oG6TWV7yG6SWV7oI6SWL7oJ6QWL76A86QWL76A96PWL76BP96AUNWV78A9598AeLWV8KG599A7A6WV8KG6AA9AgVSUG588AKMA8AWWSUF589AKNA6AqVSUF588AUOA6AWWSeD588AePW9SeC588AoPXH7UEB6W877oDB7W777yBB8W777yBCCa77oCB9W677yBB9W777oBCCa77eCA6AKNW777UDAyCBWb77UFAeBBgc77KJBqb77UGB6W877KDB9W877KEB8W877UDB7W976eBA8AeRXH6UBA8AoPXR6KCA8AoQXR59AUKAoOXb59AeKAoNXb58A6A9A6BCg758AeBAoIA6A9XR6yIAUGA8Xb7UKAeBAgh77UKAKCAWjA6Ab6yLAgjAyG76UJAqkAoC768A7AqlAUC769A7AqmAKC769A7Aqp768A7A5X8AUB768A7A5X8AUB769A6A5X8AUCPAB6QA7AqnAKEO8AaPA8AqnAKEO7AkQA7AgnAUEO7AkRA6AgnAeDO7AaSA6AWoAoDO6AQTA7AMoAoDO6AQTA7AMoAyDOyB6TY877gw76KCAeBA7Y776KKAeGAMo769AoBA6AWn77AKAWo77KIAWo77UDA6YR8Cp78Ms777Y5776Y5777Yv78Yv77Yl78Yl79YR8Co78Mn78ql78qk78eBAMk78Wn78Cp778Yl77A8AMk77oFAUDAgi77KEA6AeDX577ADA8AKEX577KBA9AKFX578ABA5X5786X6785X6785X778Mp78Cp779Yb79Yb79Yl78Yl75Y7765Z7769Zb7C5Z69AL98Zj69AV97Zt69AV95Z5569AV95Z5569AV9yDAgx57ABTKFA5ZF69AV9KDA6Y957KBUCy57ACT8Zj68AV97Zt68AV97Z5567AV95Z7568Af9C6F68Af87aZ69Af87aZ7ACS5at7KCSg6557KCSW6657KBSW6675q6775g6875W6975W697zbHyb57ub87qcvkc57jc77ic77ic87hdHgdHedbddlXcKBB77Uc6AeCAeI7Sc8AUP7Pe77NfHKf57Ef97Cf97BgHCgHAgRAga98gk97g769rc69rc69hd69Xd69Xe69Dg689ha88h5686f9AUP68hHAKf68Dp679ik77iu77iyYAaxi6CoD6wi6CyE6ti8CyE6ri9CyE6ri9CyF6pjAaAupjAaAkohUBB9668heBB9667ju6r5766X5966r57658AKFj8657AeCj9657k5657ku57ku56k6655k765r6765r67CKB6gk7CAD6fk7CAD6fk6CKD6dk9CKC6dlAVAablKVAaaleVAQaloVAQZloVAQXl6CUB6Xl56vluvluvluvlkwluvluul6DUB6Ml7DAF6Jl7DAF6Jl7DAI6Fl8DAI6Fl9C9A96El9C9BAEAZ98l8C8BeCAj97l8C8BeBA6595l8C8CP9r79C7CZ9h79C6Cj9X8KYCt9X8UXC559N8eXCt9N8eXC559D8oXC9586meYC9586mUYC9586mKZDF85mKaC9586mAaC9586mAaC8587mKYC9588mAYC9589mAXC9589mKWC9589mKWC959D8KVC959N8AVC959N8AVC959N8AUDF9N79CKf59N78CKgx6Ae9N78CKgxyCEKBFX77CKgu6AKPAeGA6EAGE9l6CUguyBBoFAKND6A8E8l7CKhuoCBeFAKSC9BUul7CefueDBedCoNE6l6CeguUEA7DyWBovlyYDO6KxB9B6E6l6Coes6A8Ao5ePCUsl6Codsy67BeYEr77CUdse7KJC6Er78CUcsU7UIC8Er78CUasU7eFDerl8CKaqeEBU78AUjEh79CAZqUJA7L7EX8AUC5qBjEX8KTC5p9NyEAUlg9AKzB8C6p8A7ApeD7mKTC5p8A7AoFAVXD8mAUCscA6AVYD8mAUAyCB6rADAfYD9mATAyDB6r6MeomATAoDB6r6MonmAUAeDB6rzaD8mKUAUDB6m6AeuM6D8mKUAeEBr86AosM7D9mAUAoEB6mUGEBeD9mKTAoEB8mAJD6NKnmeRAyDB8mAJD7NAnmoQA6AKTj7AUVBAbAUINAmmoPCeCAN57AoUBKbAeIM8D8myOCAFANfAKWBUQAKDA6C7AoDAeEMymm6BySAyBhACBoZBADAUHC8BKFMKnmyTBoFANcAoNFKZN6EN8oUBeEAXcAeKF6B7AKGN6EN8yUBKFAhbAeJF7BoFAzkEX8oUBKFAraAUJF7BoIAfkEX8yTBoCA6goCA7GAGAKEO9Eh8ySChXAUGGoCAUDPAsmyQBABBrXAUDHKBPKsmyQA6AKSggcEr8yRCrXW8AoBD9kUBCUUCXVXADAKpj9AUVCUVgCfAUDED8KXCNTXUCAoomAXCXRXeCAoomAYCXQX8EX79CoWf6X7Ee5yCgKZChOX8EoeAeDAyNAXVCyYfWmE6C7BKBAULAhVCyZfCmE7C7A8AyBBKDe7AeLCyae8YKtCUCAeFCAEeyIA7Cyae5YogAULCeCAUECKDe6A9A7CobegtDKEBKXA6CUDe7BKGCUceWtDKFBAyAhJBKECedd6ZKdA6BAyAhJBUCCodc7AKHZecA6BAyAXLD7DC8UFAg58C8AyKFACfekDC8AHAM59C9AeLE9ArND6Dg77a7C8AeLFADfojDq77a7EX67Dyjb5a7EX67D7D7bW68ED66D9D6a9AKCa9D9k6EAja6AeCbekk7D9Dq66AoBbokk9D7Dg66cAklAlDW65cAlleiDW6M8yklohDW6M86D6loOAURDM6M88Dr76BUCB8DC6M89Dh77BKDB7DM59dKgl8BADB8DM57defl8A9AeUDM5q96DD79A8AUWDMyd9C9mUBAUDAUXDC5W97C9nAXDMzd8C7nUWDWyd9C5neXDqvd9C6nUXD7YrECKnAXzCelYrFCAnAoLAXkCUDAUhYrGB8D9AyKArlCKCAUiYhGB8EAFA9ArmCKBAeiYXHB7EAGjKYDqqe7B7EAGjUXDqqe9ByoA7jUXDgqfABAKLEAJjKYDWpfoKEAJjeWD9XrOA9EKJj6B9EChfeHEoJj7B9ECgfUFE6A9j8B9ECgfeDE7A9j9B8ECgfeBE9A9kARECgkoHkKRECgkyFAKFj6B8ECflKFj7B7EMek8A9j6B7EMelAIjyRECflKHj6B6D9XX7UGC9AhZBylXr7UGC9ANbBylXrDAK69A5j7BylXr7oEj7B6D5X5loEj6B7DqkloEj6B8Dgkt9AM7oTDWkseCBoEbKUDMlsKDByCbUUDgksACdAUDqjv7A5ZAVD6Xi76A5ZAWD6XY77AWzCemXHdConMUDKsmAM9AYEBUAzD7dCopL8A7KbdCyqMKBKldCyrWvcC6EqX7bC8EqW7bC9EoCAMSxo");
        k = m.iP(k);
        var x = jf.bz(wo).a2X
            , l = jf.bz(wo).a2Y;
        aZ = 1E3 * k[0] + k[1];
        aa = 1E3 * k[2] + k[3];
        hk = document.createElement("canvas");
        hk.width = aZ;
        hk.height = aa;
        pc = hk.getContext("2d", {
            alpha: !1
        });
        wy = pc.getImageData(0, 0, aZ, aa);
        wz = wy.data;
        for (var t = k.length, n = !0, z = 0, y = 4; y < t; y++)
            if (n) {
                for (; 0 < k[y]--;)
                    wz[z] = l[0],
                        wz[z + 1] = l[1],
                        wz[z + 2] = l[2],
                        wz[z + 3] = 255,
                        z += 4;
                n = !1
            } else {
                for (; 0 < k[y]--;)
                    wz[z] = x[0],
                        wz[z + 1] = x[1],
                        wz[z + 2] = x[2],
                        wz[z + 3] = 255,
                        z += 4;
                n = !0
            }
        pc.putImageData(wy, 0, 0);
        vY = !0;
        a2J(g);
        x1.bp();
        c4.c5 = !0
    }
    function kL() {
        var g;
        this.zI = "";
        this.bp = function () {
            g = Array(a2B);
            g[0] = {
                name: "White Arena",
                c1: 230,
                cw: 230,
                gK: 1E3,
                gH: 2E3,
                a1K: 173,
                per: 1
            };
            g[1] = {
                name: "Black Arena",
                c1: 800,
                cw: 800,
                gK: 100,
                gH: 50,
                a1K: 43,
                per: 1
            };
            g[2] = {
                name: "Island",
                c1: 512,
                cw: 512,
                gK: 128,
                gH: 32,
                a1K: 0,
                per: 1.5
            };
            g[3] = {
                name: "Mountains",
                c1: 960,
                cw: 960,
                gK: 60,
                gH: 8,
                a1K: 0,
                per: 1.2
            };
            g[4] = {
                name: "Desert",
                c1: 900,
                cw: 900,
                gK: 100,
                gH: 5,
                a1K: 0,
                per: 1.2
            };
            g[5] = {
                name: "Swamp",
                c1: 1E3,
                cw: 1E3,
                gK: 100,
                gH: 40,
                a1K: 0,
                per: 1.2
            };
            g[6] = {
                name: "Snow",
                c1: 1E3,
                cw: 1E3,
                gK: 100,
                gH: 20,
                a1K: 0,
                per: 1.2
            };
            g[7] = {
                name: "Cliffs",
                c1: 1024,
                cw: 1024,
                gK: 128,
                gH: 32,
                a1K: 0,
                per: 1.5
            };
            g[8] = {
                name: "Pond",
                c1: 820,
                cw: 820,
                gK: 200,
                gH: 100,
                a1K: 0,
                per: 1.2
            };
            g[9] = {
                name: "Halo",
                c1: 1024,
                cw: 1024,
                gK: 128,
                gH: 32,
                a1K: 0,
                per: 1.5
            };
            g[10] = {
                name: "Europe",
                a2X: [140, 130, 120],
                a2Y: [12, 12, 76],
                a2Z: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
                per: 1
            };
            g[11] = {
                name: "World",
                a2X: [165, 145, 125],
                a2Y: [15, 15, 69],
                a2Z: [250, 100, 8, 25, 15, 25, 90, 8, 32, 3, 9],
                per: 1
            };
            g[12] = {
                name: "Caucasia",
                a2X: [140, 130, 120],
                a2Y: [20, 20, 84],
                a2Z: [240, 120, 100, 30, 25, 30, 90, 8, 32, 3, 9],
                per: 1
            };
            g[13] = {
                name: "USA 48",
                a2X: [120, 105, 92],
                a2Y: [12, 12, 60],
                a2Z: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
                per: 1
            }
        }
            ;
        this.a32 = function () {
            return 1 === wo
        }
            ;
        this.bz = function (k) {
            return g[k]
        }
            ;
        this.n6 = function () {
            return 16384 === wp ? this.zI : this.bz(wo).name
        }
    }
    var hl, tq, jP, jQ;
    function jI() {
        void 0 === hl && (hl = document.createElement("canvas"));
        hl.width = aZ;
        hl.height = aa;
        jP = hl.getContext("2d", {
            alpha: !0
        });
        jQ = jP.getImageData(0, 0, aZ, aa);
        tq = jQ.data
    }
    function kM() {
        function g(I, N, G) {
            C[0] = I;
            for (I = 1; I < G; I++)
                C[I] = C[I - 1] + N,
                    1E4 <= C[I] ? (C[I] = 9999,
                        N = -N) : 0 > C[I] ? (C[I] = 0,
                            N = -N) : (N += 16384 <= ce.random() ? B : -B,
                                N = N < -A ? -A : N > A ? A : N)
        }
        function k(I, N, G, M) {
            if (G)
                for (G = 0; G < M; G++)
                    t[N * n + I + G] = C[G];
            else
                for (G = 0; G < M; G++)
                    t[N * n + I + G * n] = C[G]
        }
        function x(I, N) {
            var G = I - C[N - 1];
            if (0 !== G) {
                var M = 1 + as(Math.abs(G), N - 1);
                M = 0 > G ? -M : M;
                C[N - 1] = I;
                var Q = N - 1 - as(Math.abs(G), Math.abs(M));
                Q = 1 > Q ? 1 : Q > N - 2 ? N - 2 : Q;
                for (var R = N - 2; R >= Q; R--)
                    C[R] += G - (N - 1 - R) * M;
                if (0 > G)
                    for (G = N - 2; 1 <= G; G--)
                        0 > C[G] && (C[G] = -C[G] - 1);
                else
                    for (G = N - 2; 1 <= G; G--)
                        1E4 <= C[G] && (C[G] = 2E4 - C[G] - 1)
            }
        }
        function l(I) {
            for (var N = 0; N < I.length - 1; N++)
                I[N] = I[N + 1] - I[N];
            I[I.length - 1] = I[I.length - 3]
        }
        var t, n, z, y, A, B, C, F, E, H, J, K, D, L;
        this.jM = function (I) {
            n = I[0];
            z = I[1];
            A = I[2];
            B = I[3];
            t = new Int16Array(n * z);
            y = n > z ? n : z;
            C = new Int16Array(y);
            F = [];
            E = [];
            H = [];
            J = Array(n);
            K = Array(z);
            for (I = n - 1; 0 <= I; I--)
                J[I] = !1;
            for (I = z - 1; 0 <= I; I--)
                K[I] = !1;
            D = new Int16Array(n);
            L = new Int16Array(z);
            I = y;
            var N = ce.random() % 1E4
                , G = ce.random() % (2 * A + 1) - A;
            g(N, G, I);
            I = L;
            N = C;
            G = z;
            for (var M = 0; M < G; M++)
                I[M] = N[M];
            k(0, 0, !0, n);
            I = t[0];
            N = y;
            G = ce.random() % (2 * A + 1) - A;
            g(I, G, N);
            I = D;
            N = C;
            G = n;
            for (M = 0; M < G; M++)
                I[M] = N[M];
            k(0, 0, !1, z);
            l(D);
            l(L);
            g(t[n - 1], D[n - 1], z);
            k(n - 1, 0, !1, z);
            g(t[n * (z - 1)], L[z - 1], n);
            x(t[n * z - 1], n);
            k(0, z - 1, !0, n);
            J[n - 1] = J[0] = !0;
            K[z - 1] = K[0] = !0;
            I = n;
            F.push(0);
            E.push(I);
            H.push(!0);
            I = z;
            F.push(0);
            E.push(I);
            H.push(!1);
            a: for (; ;) {
                I = F.length - 1;
                for (N = I - 1; 0 <= N; N--)
                    E[N] > E[I] && (I = N);
                if (5 > E[I])
                    break a;
                N = F[I] + as(E[I], 2);
                if (H[I]) {
                    G = void 0;
                    var Q;
                    M = N;
                    for (var R = 0, P = 0; P < z - 1;) {
                        for (Q = R + 1; Q < z; Q++)
                            if (K[Q]) {
                                P = Q;
                                break
                            }
                        Q = P - R + 1;
                        g(t[M + n * R], 0 === R ? D[M] : C[G - 1] - C[G - 2], Q);
                        x(t[P * n + M], Q);
                        k(M, R, !1, Q);
                        G = Q;
                        R = P
                    }
                    J[M] = !0
                } else {
                    G = void 0;
                    M = N;
                    for (P = R = 0; P < n - 1;) {
                        for (Q = R + 1; Q < n; Q++)
                            if (J[Q]) {
                                P = Q;
                                break
                            }
                        Q = P - R + 1;
                        g(t[M * n + R], 0 === R ? L[M] : C[G - 1] - C[G - 2], Q);
                        x(t[M * n + P], Q);
                        k(R, M, !0, Q);
                        G = Q;
                        R = P
                    }
                    K[M] = !0
                }
                G = F[I] + E[I] - N;
                M = H[I];
                F.push(N);
                E.push(G);
                H.push(M);
                E[I] = N - F[I] + 1
            }
            for (I = 0; I < n; I++)
                if (!J[I])
                    for (N = 0; N < z; N++)
                        K[N] || (G = t[N * n + I - 1] + t[(N - 1) * n + I],
                            M = 2,
                            J[I + 1] && (M++,
                                G += t[N * n + I + 1]),
                            K[N + 1] && (M++,
                                G += t[(N + 1) * n + I]),
                            t[N * n + I] = as(G, M))
        }
            ;
        this.a2b = function () {
            return t
        }
            ;
        this.a2I = function () {
            t = null
        }
    }
    function as(g, k) {
        return Math.floor(g / k + 1 / (2 * k))
    }
    function yM(g, k) {
        return 0 <= g ? as(g, k) : -as(-g, k)
    }
    function d5(g) {
        return g * g
    }
    function mU(g, k) {
        return g > k ? g : k
    }
    function qe(g, k) {
        return g < k ? g : k
    }
    function sy(g, k, x) {
        return k < g ? g : k > x ? x : k
    }
    function a3q(g, k) {
        for (var x = as(g + 1, 2), l = 0; l < k; l++)
            x = as(x + as(g, x), 2);
        return x
    }
    function bl(g, k) {
        return 1 > g ? 0 : a3q(g, k)
    }
    function a3r(g, k, x, l, t, n, z, y) {
        return !(g + x <= t || k + l <= n || g >= t + z || k >= n + y)
    }
    function a3s(g, k, x, l, t, n, z, y) {
        return g <= t && k <= n && g + x >= t + z && k + l >= n + y
    }
    function ke() {
        function g() {
            vd.uc[2] = vd.uc[3] = vd.uc[4] = !jm.a3t;
            if (settings.hideAllLinks && (jm.a3t)) vd.uc[0] = vd.uc[1] = false;
            else vd.uc[0] = vd.uc[1] = true;
            var y = jm.a10 ? 1 : 0
                , A = jm.a3t ? 1 : 0
                , B = jm.a0L ? 1 : 0;
            b ? (window.webkit.messageHandlers.iosCommandA.postMessage("freeSpawn " + y),
                window.webkit.messageHandlers.iosCommandA.postMessage("unlimitedTime " + A)) : 5 <= d ? (e.saveNumber(25, y),
                    e.saveNumber(26, A)) : (f.x(6, 4 * B + 2 * A + y),
                        f.y())
        }
        function k(y, A, B, C) {
            if (0 === C)
                return y >= B.f3 && (0 === C || A >= B.f4) && A <= B.f4 + B.nI;
            A -= C * (B.nI - 2);
            return y >= B.f5 && (0 === C || A >= B.f4) && A <= B.f4 + B.nI
        }
        function x() {
            var y = Math.floor((q ? .145 : .09) * bq)
                , A = Math.floor(1.5 * y)
                , B = Math.floor(.065 * (q ? .53 : .36) * bq);
            return {
                f3: r - y - B,
                f4: cA,
                hw: y,
                nI: Math.floor(.35 * y),
                f5: r - A - B,
                hx: A
            }
        }
        function l(y, A, B, C, F, E, H, J, K, D) {
            D = Math.floor(D * C);
            cH.font = bt + D + bu;
            J && (F += 80,
                E += 80,
                H += 80);
            cH.fillStyle = "rgba(" + F + "," + E + "," + H + ",0.6)";
            cH.fillRect(y, A, B, C);
            cH.fillStyle = cK;
            cH.fillRect(y, A, B, 2);
            cH.fillRect(y, A + C - 2, B, 2);
            cH.fillRect(y, A, 2, C);
            cH.fillRect(y + B - 2, A, 2, C);
            cH.fillText(K, Math.floor(y + B / 2), Math.floor(A + C / 2 + .1 * D))
        }
        this.xd = 1;
        this.a0L = this.a3t = this.a10 = !1;
        var t = -1
            , n = !1
            , z = [];
        this.bp = function () {
            z = [];
            z.push({
                name: "More",
                id: 0,
                f7: 140,
                mx: 120,
                cm: 0
            });
            z.push({
                name: "Lobby 1",
                id: 1,
                f7: 0,
                mx: 0,
                cm: 0
            });
            z.push({
                name: "Hide Usernames",
                id: 2,
                f7: 0,
                mx: 0,
                cm: 0
            });
            z.push({
                name: "Hide Links",
                id: 3,
                f7: 0,
                mx: 0,
                cm: 0
            });
            !b && 5 > d && z.push({
                name: "High Resolution",
                id: 4,
                f7: 0,
                mx: 0,
                cm: 0
            });
            z.push({
                name: "Tutorial",
                id: 5,
                f7: 0,
                mx: 0,
                cm: 0
            });
            z.push({
                name: "Player List",
                id: 6,
                f7: 0,
                mx: 0,
                cm: 0
            });
            z.push({
                name: "Clan List",
                id: 7,
                f7: 0,
                mx: 0,
                cm: 0
            });
            z.push({
                name: "Privacy Policy",
                id: 8,
                f7: 0,
                mx: 0,
                cm: 0
            });
            !b && 5 > d && z.push({
                name: "Cookie Policy",
                id: 9,
                f7: 0,
                mx: 0,
                cm: 0
            });
            z.push({
                name: ter_version + ' ' + ter_update,
                id: 10,
                f7: 90,
                mx: 0,
                cm: 0
            });
            z.push({
                name: 'FX Client v' + fx_version + ' ' + fx_update,
                id: 16,
                f7: 0,
                mx: 0,
                cm: 70
            });
            if (b)
                this.a10 = c.freeSpawn,
                    this.a3t = c.unlimitedTime,
                    this.a0L = !1;
            else if (5 <= d)
                this.a10 = 1 === e.loadNumber(25),
                    this.a3t = 1 === e.loadNumber(26),
                    this.a0L = !1;
            else {
                var y = f.g(6);
                this.a10 = 1 === (y & 1);
                this.a3t = 2 === (y & 2);
                this.a0L = 4 === (y & 4)
            }
            z[2].mx = this.a10 ? 130 : 0;
            z[3].mx = this.a3t ? 130 : 0;
            !b && 5 > d && (z[4].mx = this.a0L ? 130 : 0);
            this.a3t && (vd.uc[2] = vd.uc[3] = vd.uc[4] = false);
            this.a3t && settings.hideAllLinks && (vd.uc[0] = vd.uc[1] = false);
            (!settings.hideAllLinks) && (vd.uc[0] = vd.uc[1] = true);
        };
        // mouseDown
        this.c7 = function (y, A) {
            var B;
            if (!(7 <= aJ.pR())) {
                var C = x();
                if (n) {
                    for (B = 1; B < z.length; B++)
                        if (k(y, A, C, B))
                            return 1 === z[B].id ? (jm.xd = 1 === jm.xd ? 2 : 2 === jm.xd ? 5 : 1,
                                z[1].name = "Lobby " + (5 === jm.xd ? "1B" : jm.xd),
                                c4.c5 = !0) : 2 === z[B].id ? (jm.a10 = !jm.a10,
                                    z[B].mx = jm.a10 ? 130 : 0,
                                    g(),
                                    c4.c5 = !0) : 3 === z[B].id ? (jm.a3t = !jm.a3t,
                                        z[B].mx = jm.a3t ? 130 : 0,
                                        g(),
                                        c4.c5 = !0) : 4 === z[B].id ? (jm.a0L = !jm.a0L,
                                            z[B].mx = jm.a0L ? 130 : 0,
                                            g(),
                                            jj.xQ(),
                                            c4.c5 = !0) : 5 === z[B].id ? (nN.bp(om, !0),
                                                nN.bp(om, !1)) : 6 === z[B].id ? (nN.bp(on[0], !0),
                                                    nN.bp(on[0], !1)) : 7 === z[B].id ? (nN.bp(on[1], !0),
                                                        nN.bp(on[1], !1)) : 8 === z[B].id ? (nN.bp(ol, !0),
                                                            nN.bp(ol, !1)) : 9 === z[B].id && (nN.bp(nO, !0),
                                                                nN.bp(nO, !1)), !0;
                    //cH.drawImage(settingsGearIcon,A.f3-A.hw/2,A.f4,A.nI,A.nI);
                    if (y > (C.f3-C.hw/2) && y < ((C.f3-C.hw/2)+C.nI) && A > C.f4 && A < (C.f4 + C.nI)) WindowManager.openWindow("settings");
                    n = false;
                    c4.c5 = true;
                    return false
                }
                if (y > (C.f3-C.hw/2) && y < ((C.f3-C.hw/2)+C.nI) && A > C.f4 && A < (C.f4 + C.nI)) WindowManager.openWindow("settings");
                return k(y, A, C, 0) ? (n = true, c4.c5 = true) : false
            }
        };
        // mouseMove
        this.lh = function (y, A) {
            var B;
            // menu page
            if (!(7 <= aJ.pR())) {
                var C = x();
                var F = t;
                // how many items to check (different depending on if the menu is open)
                var E = n ? z.length - 2 : 1;
                t = -1;
                for (B = 0; B < E; B++)
                    if (k(y, A, C, B)) {
                        t = B;
                        break
                    }
                F !== t && (c4.c5 = !0)
            }
        };
        // render "More" menu
        this.cG = function () {
            var y;
            if (!(7 <= aJ.pR())) {
                var A = x();
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                // Render "More" button
                l(A.f3, A.f4, A.hw, A.nI, z[0].f7, z[0].mx, z[0].cm, 0 === t, z[0].name, .6);
                // render settings gear icon
                //cH.fillStyle = "rgba(" + F + "," + E + "," + H + ",0.6)";
                //cH.fillRect(y, A, B, C);
                cH.fillStyle = "#FFFFFF";
                cH.imageSmoothingEnabled = true;
                cH.drawImage(settingsGearIcon,A.f3-A.hw/2,A.f4,A.nI,A.nI);
                cH.imageSmoothingEnabled = false;
                // render win count
                //l(A.f3, A.f4, A.hw, A.nI, z[0].f7, z[0].mx, z[0].cm, 0 === t, "test", .6);
                //cH.fillText(K, Math.floor(y + B / 2), Math.floor(A + C / 2 + .1 * D))
                //function l(y, A, B, C, F, E, H, J, K, D) {
                //cH.fillText("test", Math.floor(A.f3 + A.f4 / 2), Math.floor(A.f4 + A.nI / 2 + .1 * .6));
                //cH.textAlign = "right";
                cH.font = bt + Math.floor(A.nI * 0.4) + bu;
                if (!n) cH.fillText("Win count: " + wins_counter, Math.floor(A.f3 + A.hw / 2), Math.floor((A.f4 + A.nI / 2) * 2.1));
                //cH.textAlign = cJ;
                // If menu is open render the buttons inside
                if (n) {
                    var B = z.length;
                    for (y = 1; y < B; y++)
                        l(A.f5, A.f4 + y * A.nI - 2 * y, A.hx, A.nI, z[y].f7, z[y].mx, z[y].cm, t === y, z[y].name, (y === B - 1 || y === B - 2) ? .32 : .45)
                }

            }
        }
    }
    function kN() {
        function g() {
            x = !0;
            l = -1;
            t = Array(4);
            for (var y = 3; 0 <= y; y--)
                t[y] = !1;
            y = Math.floor(1 + .02 * pB);
            n = Array(4);
            z = Array(4);
            z[1] = z[3] = n[0] = n[2] = 0;
            z[0] = n[3] = -y;
            n[1] = z[2] = y
        }
        function k() {
            if (-1 !== l)
                if (0 !== fV && eR.gw()) {
                    for (var y = !1, A = 3; 0 <= A; A--)
                        t[A] && (y = !0,
                            g8 += n[A],
                            g9 += z[A],
                            e6.lh(n[A], z[A]),
                            gf.rB());
                    y ? c4.c5 = !0 : gj.gk()
                } else
                    gj.gk()
        }
        var x = !1, l, t, n, z;
        this.vw = function (y) {
            0 !== fV && eR.gw() && (x || g(),
                t[y] = !0,
                -1 === l && (l = setInterval(k, 20),
                    k()))
        }
            ;
        this.a24 = function (y) {
            if (0 !== fV && (x || g(),
                t[y] = !1,
                -1 !== l)) {
                y = !1;
                for (var A = 3; 0 <= A; A--)
                    y = y || t[A];
                y || this.gk()
            }
        }
            ;
        this.gk = function () {
            if (x && -1 !== l) {
                for (var y = 3; 0 <= y; y--)
                    t[y] = !1;
                clearInterval(l);
                l = -1
            }
        }
    }
    function kO() {
        var g;
        this.ew = function () {
            return g
        }
            ;
        this.co = function (k, x) {
            var l;
            if (0 === bN[k].length || !b5.b6(x) || !b5.bG(x) && b5.bF(x) === k)
                return !1;
            for (l = 21; 0 <= l; l--) {
                if (21 === l) {
                    var t = bN[k]
                        , n = x
                        , z = b5.gB(n);
                    n = b5.cF(n);
                    var y = 0;
                    var A = b5.gB(t[0]);
                    var B = b5.cF(t[0]);
                    A = Math.abs(A - z) + Math.abs(B - n);
                    for (B = t.length - 1; 1 <= B; B--) {
                        var C = b5.gB(t[B]);
                        var F = b5.cF(t[B]);
                        C = Math.abs(C - z) + Math.abs(F - n);
                        C < A && (A = C,
                            y = B)
                    }
                    g = t[y]
                } else
                    g = bN[k][as(l * bN[k].length, 21)];
                a: {
                    B = g;
                    y = x;
                    t = b5.gB(B);
                    z = b5.cF(B);
                    n = b5.gB(y);
                    y = b5.cF(y);
                    A = Math.abs(n - t) + Math.abs(y - z);
                    if (!(2 > A))
                        for (C = B,
                            B = 0; B < A; B++)
                            if (C = Math.abs(n - b5.gB(C)) >= Math.abs(y - b5.cF(C)) ? C + aV[n > t ? 1 : 3] : C + aV[y > z ? 2 : 0],
                                !b5.yR(C)) {
                                if (b5.b6(C)) {
                                    if (0 === B || B + 20 < A)
                                        break;
                                    t = !0;
                                    break a
                                }
                                break
                            }
                    t = !1
                }
                if (t)
                    return !0
            }
            return !1
        }
    }
    function a21() {
        function g() {
            var B, C = 0, F = 0, E = Math.floor(t / 2), H = Math.floor(n / 2), J = 1.5 * Math.PI;
            for (B = j5; 0 <= B; B--)
                F += A[B],
                    0 === A[B] && C++;
            x = !1;
            y.clearRect(0, 0, t, t);
            y.fillStyle = hq;
            y.fillRect(0, 0, t, t);
            y.fillStyle = oA;
            y.fillRect(0, 0, t, 2);
            y.fillRect(0, 0, 2, t);
            y.fillRect(t - 2, 0, 2, t);
            y.fillRect(0, t - 2, t, 2);
            if (0 < F)
                if (C === j5)
                    for (B = j5; 0 <= B; B--) {
                        if (0 < A[B]) {
                            F = E;
                            J = H;
                            y.fillStyle = dW.wg[dW.id[B]];
                            y.beginPath();
                            y.arc(F, F, J, 0, 2 * Math.PI);
                            y.fill();
                            break
                        }
                    }
                else {
                    for (B = 0; B <= j5; B++)
                        if (0 < A[B]) {
                            C = J + 2 * Math.PI * A[B] / F;
                            var K = E
                                , D = H
                                , L = J
                                , I = C;
                            y.fillStyle = dW.wg[dW.id[B]];
                            y.beginPath();
                            y.arc(K, K, D, L, I);
                            y.lineTo(K, K);
                            y.fill();
                            0 !== B && k(E, H, J);
                            J = C
                        }
                    k(E, H, 1.5 * Math.PI)
                }
            y.beginPath();
            y.arc(E, E, H, 0, 2 * Math.PI);
            y.stroke()
        }
        function k(B, C, F) {
            y.beginPath();
            y.moveTo(B, B);
            y.lineTo(B + Math.cos(F) * C, B + Math.cos(F + 1.5 * Math.PI) * C);
            y.stroke()
        }
        var x = !1
            , l = 0
            , t = 0
            , n = 0
            , z = null
            , y = null
            , A = null;
        this.bp = function () {
            if (dA) {
                l = 16;
                A = new Uint32Array(j5 + 1);
                for (var B = j5; 0 < B; B--)
                    A[B] = 1;
                this.lq()
            } else
                A = y = z = null
        }
            ;
        this.qK = function () {
            return t
        }
            ;
        this.lq = function () {
            dA && (t = Math.floor(.18 * pB),
                t += t % 2,
                n = Math.floor(7 * t / 8),
                z = z ? z : document.createElement("canvas"),
                z.width = t,
                z.height = t,
                y = z.getContext("2d", {
                    alpha: !0
                }),
                y.lineWidth = 2,
                y.strokeStyle = cK,
                g())
        }
            ;
        this.qf = function () {
            return A[this.mp()]
        }
            ;
        this.ib = function () {
            l = 31;
            this.dF();
            return this.mp()
        }
            ;
        this.mp = function () {
            for (var B = 0, C = j5; 0 < C; C--)
                A[C] > A[B] && (B = C);
            return B
        }
            ;
        this.dF = function () {
            if (dA && 32 <= ++l) {
                l = 0;
                var B;
                for (B = j5; 0 <= B; B--)
                    A[B] = 0;
                for (B = dY - 1; 0 <= B; B--)
                    A[dW.dX[dZ[B]]] += bU[dZ[B]];
                x = !0
            }
        }
            ;
        this.bv = function () {
            dA && x && g()
        }
            ;
        this.cG = function () {
            dA && cH.drawImage(z, m0, qL + 2 * m0)
        }
    }
    function kP() {
        var g, k;
        this.bp = function () {
            k = Array(101);
            for (var x = k.length - 1; 0 <= x; x--)
                k[x] = as(32768 * x, 100);
            this.jG(0)
        }
            ;
        this.value = function (x) {
            return k[x]
        }
            ;
        this.a12 = function () {
            return as(g - 1, 2)
        }
            ;
        this.jG = function (x) {
            g = 2 * x % 32768 + 1
        }
            ;
        this.random = function () {
            return g = 167 * g % 32768
        }
            ;
        this.cf = function (x) {
            return as(x * this.random(), 32768)
        }
            ;
        this.dP = function (x) {
            return 0 !== x && this.random() < this.value(x)
        }
    }
    function kW() {
        function g() {
            (500 <= z || 5 < n) && k()
        }
        function k() {
            n = 0;
            z += 700 > z ? 200 : 0;
            bw.bx() && (l() || t) && (t = !1,
                ov(),
                uH.bp(),
                ja.bp(),
                jd.lq(),
                vd.bp(),
                jb.lq(),
                jZ.lq(),
                jY.lq(),
                vV.lq(),
                cD.lq(),
                a5.bp(),
                1 <= fV ? (eI.lq(!1),
                    eK.lq(),
                    e7.lq(),
                    gf.lq(),
                    eN.lq(),
                    e5.lq(),
                    fm.lq(),
                    eO.lq(),
                    eL.lq(),
                    c2.lq(),
                    hm.kw(),
                    hn.lq(),
                    e6.lq(),
                    eS.lq(),
                    eP.lq(),
                    gf.rB()) : (0 === aJ.pR() ? jd.cE(0, !0) : 2 === aJ.pR() ? du.lq() : 3 === aJ.pR() && jc.lq(),
                        aJ.vZ(),
                        aJ.ve()),
                c4.c5 = !0)
        }
        function x(y) {
            return y && 128 < y ? Math.floor(y) : 128
        }
        function l() {
            if (5 <= d) {
                var y = x(document.documentElement.clientWidth);
                var A = x(document.documentElement.clientHeight);
                pF = 1;
                if (y !== gA || A !== cB) {
                    gA = y;
                    cB = A;
                    r = gA;
                    s = cB;
                    pB = qe(r, s);
                    bq = as(s + r, 2);
                    if (5 <= d) {
                        var B = e.loadNumber(23);
                        var C = e.loadNumber(24);
                        y > B && (B = y,
                            e.saveNumber(23, B));
                        A > C && (C = A,
                            e.saveNumber(24, C))
                    } else
                        B = y,
                            C = A;
                    y = oy.width;
                    A = oy.height;
                    B > y && (y = B,
                        oy.width = B);
                    C > A && (A = C,
                        oy.height = C);
                    oy.style.width = y + "px";
                    oy.style.height = A + "px";
                    B = !0
                } else
                    B = !1;
                return B
            }
            jm.a0L ? (pF = window.devicePixelRatio) || (pF = 1) : pF = 1;
            B = x(document.documentElement.clientWidth);
            C = x(document.documentElement.clientHeight);
            y = Math.floor(.5 + pF * B);
            A = Math.floor(.5 + pF * C);
            if (y === gA && A === cB)
                return !1;
            gA = r = y;
            cB = s = A;
            pB = qe(r, s);
            bq = as(s + r, 2);
            oy.width = y;
            oy.height = A;
            oy.style.width = B + "px";
            oy.style.height = C + "px";
            return !0
        }
        var t = !1, n, z;
        this.bp = function () {
            n = 1;
            z = 100;
            r = s = pB = gA = cB = bq = 0;
            pF = 1;
            oy = document.getElementById("canvasA");
            cH = oy.getContext("2d", {
                alpha: !1
            });
            cH.imageSmoothingEnabled = !1;
            l();
            window.addEventListener("resize", g)
        }
            ;
        this.dF = function () {
            jn.dF();
            ++n >= z && k()
        }
            ;
        this.xQ = function () {
            t = !0;
            500 <= z && k()
        }
    }
    function kQ() {
        function g(H) {
            eG.av(x, E);
            ae.b2(x, F);
            H && (ax[x] += l)
        }
        function k() {
            b5.yT(t, x) && b5.yV(t)
        }
        var x, l, t, n, z, y, A, B, C, F, E;
        this.dF = function (H, J, K, D, L) {
            C = H;
            E = J;
            x = K;
            z = b5.gB(D);
            y = b5.cF(D);
            A = b5.gB(L);
            B = b5.cF(L);
            n = t = b5.ex(z, y);
            F = ae.fR(x, E);
            -1 === F ? (k(),
                eG.av(x, E),
                H = !1) : (l = ae.am(x, F),
                    H = !0);
            if (H && (k(),
                H = as(l, 128),
                H = 1 > H ? 1 : H,
                l -= H,
                x === aw && (b0.b1[15] += H),
                l <= at ? (x === aw && (b0.b1[15] += l),
                    g(!1),
                    H = !1) : (ae.bT(x, F, l),
                        H = !0),
                H))
                if (H = b5.ex(z, y),
                    t = Math.abs(A - z) >= Math.abs(B - y) ? H + aV[A > z ? 1 : 3] : H + aV[B > y ? 2 : 0],
                    z = b5.gB(t),
                    y = b5.cF(t),
                    eG.fw(C, t),
                    H = b5.b6(t) ? !1 : !0,
                    H)
                    b5.yR(t) && b5.yY(t, x);
                else
                    a: {
                        if (b5.bG(t))
                            H = b8;
                        else {
                            H = b5.bF(t);
                            if (H === x) {
                                g(!0);
                                break a
                            }
                            if (!ch(x, H)) {
                                J = bU[H] * iz - ax[H];
                                0 >= J || (J = l > J ? J : l,
                                    l -= J,
                                    x === aw && (e5.n1(J, H),
                                        b0.b1[16] += J),
                                    H === aw && (e5.n3(J, x),
                                        b0.b1[10] += J),
                                    ax[H] += J);
                                g(!0);
                                break a
                            }
                        }
                        x === aw && (b0.b1[13] += l);
                        eG.av(x, E);
                        ae.b2(x, F);
                        b4[x].push(n);
                        ae.cQ(x, l, H);
                        au.cR(x, !0)
                    }
        }
            ;
        this.g0 = function (H, J) {
            x = H;
            t = b5.ex(b5.gB(J), b5.cF(J));
            k()
        }
    }
    function kR() {
        var g, k, x, l;
        this.bp = function () {
            var t, n, z;
            x = !0;
            l = "rgb(" + wz[0] + "," + wz[1] + "," + wz[2] + ")";
            var y = a2N(wo) ? !0 : x = !1;
            if (y)
                k = null;
            else {
                g = as(96, 4);
                if (1 === wo) {
                    var A = 0;
                    var B = 160
                } else
                    A = 128,
                        B = 32;
                l = "rgb(" + A + "," + A + "," + A + ")";
                k = Array(4);
                for (y = 3; 0 <= y; y--) {
                    k[y] = document.createElement("canvas");
                    var C = 0 === y % 2 ? aZ : g;
                    var F = 0 === y % 2 ? g : aa + 2 * g;
                    k[y].width = C;
                    k[y].height = F;
                    var E = k[y].getContext("2d", {
                        alpha: !1
                    });
                    var H = E.getImageData(0, 0, C, F);
                    var J = H.data;
                    if (0 === y % 2)
                        for (n = g - 1; 0 <= n; n--) {
                            var K = B + Math.floor((n + 1) * (A - B) / (g + 1));
                            for (t = C - 1; 0 <= t; t--) {
                                var D = 4 * ((0 === y ? g - n - 1 : n) * C + t);
                                J[D] = K;
                                J[D + 1] = K;
                                J[D + 2] = K;
                                J[D + 3] = 255
                            }
                        }
                    else {
                        for (t = g - 1; 0 <= t; t--)
                            for (K = B + Math.floor((t + 1) * (A - B) / (g + 1)),
                                n = F - 1 - g; n >= g; n--)
                                D = 4 * (n * C + (3 === y ? g - t - 1 : t)),
                                    J[D] = K,
                                    J[D + 1] = K,
                                    J[D + 2] = K,
                                    J[D + 3] = 255;
                        for (z = 1; 0 <= z; z--)
                            for (t = g - 1; 0 <= t; t--)
                                for (n = g - 1; 0 <= n; n--)
                                    K = (Math.pow(t * t + n * n, .5) + 1) / (g + 1),
                                        K = 1 < K ? 1 : K,
                                        K = B + Math.floor(K * (A - B)),
                                        D = 4 * ((0 === z ? g - n - 1 : n + z * (F - g)) * C + (1 === y ? t : g - t - 1)),
                                        J[D] = K,
                                        J[D + 1] = K,
                                        J[D + 2] = K,
                                        J[D + 3] = 255
                    }
                    E.putImageData(H, 0, 0)
                }
                pc.fillStyle = "rgb(" + B + "," + B + "," + B + ")";
                pc.fillRect(0, 0, aZ, 1);
                pc.fillRect(0, aa - 1, aZ, 1);
                pc.fillRect(0, 0, 1, aa);
                pc.fillRect(aZ - 1, 0, 1, aa)
            }
        }
            ;
        this.hj = function () {
            var t = x ? 0 : -g;
            a3s(t, t, aZ - 2 * t, aa - 2 * t, gu.a4n, gu.a4o, gu.a4p, gu.a4q) || (cH.fillStyle = l,
                cH.fillRect(0, 0, gA, cB))
        }
            ;
        this.cG = function () {
            x || (a3r(0, -g, aZ, g, gu.a4n, gu.a4o, gu.a4p, gu.a4q) && cH.drawImage(k[0], gu.a4r, gu.a4s - g),
                a3r(aZ, -g, g, aa + 2 * g, gu.a4n, gu.a4o, gu.a4p, gu.a4q) && cH.drawImage(k[1], gu.a4r + aZ, gu.a4s - g),
                a3r(0, aa, aZ, g, gu.a4n, gu.a4o, gu.a4p, gu.a4q) && cH.drawImage(k[2], gu.a4r, gu.a4s + aa),
                a3r(-g, -g, g, aa + 2 * g, gu.a4n, gu.a4o, gu.a4p, gu.a4q) && cH.drawImage(k[3], gu.a4r - g, gu.a4s - g))
        }
    }
    function a1T() {
        function g() { }
        function k() {
            e9.a1U(z, y)
        }
        function x(E) {
            A++;
            1 === A ? C.readAsArrayBuffer(E.data) : B.push(E.data)
        }
        function l() {
            A--;
            ji.a52(z, new Uint8Array(C.result));
            0 < A && (C.readAsArrayBuffer(B[0]),
                B.shift())
        }
        function t() { }
        function n(E) {
            e9.a1a(z, E)
        }
        var z, y, A, B, C, F;
        this.bp = function (E, H) {
            z = E;
            y = H;
            A = 0;
            B = [];
            C = new FileReader;
            C.addEventListener("loadend", l);
            var J = ot[0];
            J = z < e9.w8 ? J + (e9.a1H[z] + ot[1 + a1k]) : J + (e9.a1H[0] + "/i" + (1 + a1k) + (z - e9.w9) + "/");
            F = new WebSocket(J);
            F.onopen = k;
            F.onmessage = x;
            F.onclose = n;
            F.onerror = t
        }
            ;
        this.a4x = function () {
            return F.readyState === F.CONNECTING
        }
            ;
        this.vB = function () {
            return F.readyState === F.OPEN
        }
            ;
        this.a1Q = function () {
            return this.a4x() || this.vB()
        }
            ;
        this.a1R = function (E) {
            y = E
        }
            ;
        this.send = function (E) {
            this.vB() && F.send(E)
        }
            ;
        this.close = function (E) {
            this.a1Q() && (F.close(E),
                this.lA())
        }
            ;
        this.lA = function () {
            F.onopen = g;
            F.onmessage = g;
            F.onclose = g;
            F.onerror = g;
            C.removeEventListener("loadend", l)
        }
    }
    function a1x() {
        this.cV = 501;
        this.a53 = new Uint32Array(this.cV);
        this.rz = new Uint32Array(this.cV);
        this.tM = new Uint16Array(this.cV);
        this.lz = 0;
        this.a54 = 1;
        this.dV = 0;
        this.max = [0, 0, 0];
        this.b1 = 0;
        this.a55 = "Avg. Attack Strength;Number Attacks;Ships sent;Bots conquered;Humans conquered;Attacked by Bots;Attacked by Humans;Territorial Loss;Territorial Income;Interest Income;Received Support;Overall Income;Commanding Costs;Attack Losses;Defense Losses;Shipping Losses;Transmitted Support;Overall Expenses".split(";");
        this.bp = function () {
            this.lz = 0;
            this.a54 = 1;
            this.dV = 0;
            this.a56();
            this.a57()
        }
            ;
        this.dF = function () {
            0 < this.dV-- || this.a58()
        }
            ;
        this.a58 = function () {
            0 !== fB[aw] && (this.a53[this.lz] = bU[aw],
                this.rz[this.lz] = ax[aw],
                this.tM[this.lz] = ay.tN(aw),
                this.a59(this.lz),
                this.lz++,
                this.lz === this.cV && this.a5A(),
                this.dV = this.a54 - 1,
                hn.bv())
        }
            ;
        this.a5A = function () {
            this.a56();
            this.a59(0);
            this.lz = 1 + as(this.cV, 2);
            for (var g = 1; g < this.lz; g++)
                this.a53[g] = this.a53[2 * g],
                    this.rz[g] = this.rz[2 * g],
                    this.tM[g] = this.tM[2 * g],
                    this.a59(g);
            this.a54 *= 2
        }
            ;
        this.a56 = function () {
            this.max[0] = this.max[1] = this.max[2] = 0
        }
            ;
        this.a57 = function () {
            this.b1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
            ;
        this.a59 = function (g) {
            this.max[0] = this.a53[g] > this.max[0] ? this.a53[g] : this.max[0];
            this.max[1] = this.rz[g] > this.max[1] ? this.rz[g] : this.max[1];
            this.max[2] = this.tM[g] > this.max[2] ? this.tM[g] : this.max[2]
        }
    }
    function a1y() {
        this.bs = this.qB = this.a5C = this.a5B = this.xB = this.nJ = this.nI = this.uM = this.uL = this.hx = this.hw = this.cw = this.c1 = 0;
        this.lm = ["Territory", "Balance", "Interest", "Numbers"];
        this.l7 = !1;
        this.a5D = -1;
        this.a5E = !1;
        this.bp = function () {
            this.l7 = !1;
            this.a5D = -1;
            this.a5E = !1;
            this.lq()
        }
            ;
        this.lq = function () {
            this.c1 = r < 1.618 * s ? r : 1.618 * s;
            this.c1 = Math.floor((q && r < s ? 1 : q ? .8 : r < s ? .65 : .5) * this.c1);
            this.qB = Math.floor(1 + .006 * this.c1);
            this.c1 -= q && r < s ? 2 * m0 + this.qB : 0;
            this.cw = Math.floor(this.c1 / 1.618);
            this.hw = Math.floor(1 + .02 * this.c1);
            this.nI = this.hx = Math.floor(1 + .04 * this.c1);
            this.nJ = Math.floor(1 + .075 * this.c1);
            this.a5B = Math.floor(this.c1 * (q ? .028 : .02));
            this.a5B = 6 > this.a5B ? 6 : this.a5B;
            this.a5C = Math.floor(.028 * this.c1);
            this.a5C = 6 > this.a5C ? 6 : this.a5C;
            this.xB = this.cw - 2 * this.nI - this.nJ;
            this.l7 && this.a5F()
        }
            ;
        this.c7 = function (g, k) {
            if (!this.l7)
                return !1;
            var x = g
                , l = k;
            g -= as(gA - this.c1, 2);
            k -= as(cB - this.cw, 2);
            if (0 > g || 0 > k || g >= this.c1 || k >= this.cw) {
                if (1 < fm.c7(x, l))
                    return !0;
                this.lA();
                return !0
            }
            if (k < this.cw - this.nJ)
                return this.a5E = !0,
                    this.a5D = (g - 2 * this.hw - this.uL) / this.uM,
                    !0;
            x = Math.floor(g / (this.c1 / this.lm.length));
            x = 0 > x ? 0 : x >= this.lm.length ? this.lm.length - 1 : x;
            x !== this.bs && (this.bs = x,
                this.a5F(),
                c4.c5 = !0);
            return !0
        }
            ;
        this.lh = function (g) {
            if (this.l7 && this.a5E) {
                g -= as(gA - this.c1, 2);
                var k = this.a5D;
                this.a5D = (g - 2 * this.hw - this.uL) / this.uM;
                if (0 <= this.a5D && 1 >= this.a5D || 0 <= k && 1 >= k)
                    c4.c5 = !0;
                return !0
            }
            return !1
        }
            ;
        this.pO = function () {
            this.a5E && (this.a5E = !1)
        }
            ;
        this.lv = function () {
            this.l7 ? this.lA() : this.show()
        }
            ;
        this.show = function () {
            2 > b0.lz || (this.l7 = !0,
                this.a5F())
        }
            ;
        this.lA = function () {
            this.l7 = !1;
            this.a5D = -1
        }
            ;
        this.a5F = function () {
            2 > this.bs ? this.uL = c2.measureText(eL.gF(b0.max[this.bs]), bt + this.a5B + bu) : 2 === this.bs && (this.uL = c2.measureText(e7.n9(6, 2), bt + this.a5B + bu));
            this.uM = this.c1 - 2 * this.hw - this.uL - this.hx
        }
            ;
        this.bv = function () {
            this.l7 && this.a5F()
        }
            ;
        this.cG = function () {
            this.l7 && this.nP()
        }
            ;
        this.nP = function () {
            var g = as(gA - this.c1, 2)
                , k = as(cB - this.cw, 2);
            cH.setTransform(1, 0, 0, 1, g, k);
            cH.fillStyle = hq;
            cH.fillRect(0, 0, this.c1, this.cw);
            this.a5G();
            cH.strokeRect(0, 0, this.c1, this.cw);
            cH.textAlign = oc;
            cH.font = bt + this.a5B + bu;
            0 === this.bs ? this.a5H(b0.a53, g, k) : 1 === this.bs ? this.a5H(b0.rz, g, k) : 2 === this.bs ? this.a5I(g, k) : 3 === this.bs && (this.a5J(g, k),
                this.a5K(g, k));
            cH.setTransform(1, 0, 0, 1, 0, 0)
        }
            ;
        this.a5G = function () {
            cH.lineWidth = this.qB;
            cH.textBaseline = cI;
            cH.textAlign = cJ;
            cH.strokeStyle = cK;
            cH.font = bt + this.a5C + bu;
            var g = this.c1 / this.lm.length;
            cH.fillStyle = oG;
            cH.fillRect(this.bs * g, this.cw - this.nJ, g, this.nJ);
            cH.fillStyle = cK;
            for (var k = this.lm.length - 1; 0 <= k; k--)
                cH.strokeRect(k * g, this.cw - this.nJ, g, this.nJ),
                    cH.fillText(this.lm[k], (k + .5) * g, this.cw - .46 * this.nJ)
        }
            ;
        this.a5H = function (g, k, x) {
            var l = b0.max[this.bs];
            cH.setTransform(1, 0, 0, 1, k + 2 * this.hw + this.uL, x + this.nI);
            cH.lineWidth = 2;
            k = this.xB / Math.sqrt(l);
            cH.beginPath();
            cH.moveTo(this.uM, this.xB - k * Math.sqrt(g[b0.lz - 1]));
            for (x = b0.lz - 2; 0 <= x; x--)
                cH.lineTo(x * this.uM / (b0.lz - 1), this.xB - k * Math.sqrt(g[x]));
            cH.stroke();
            g = this.m4(g, k, .5);
            .95 > g && cH.fillText(eL.gF(l), -this.hw, 0);
            .05 < Math.abs(g - .5) && cH.fillText(eL.gF(Math.floor(l / 4)), -this.hw, Math.floor(this.xB / 2));
            .05 < g && cH.fillText("0", -this.hw, this.xB)
        }
            ;
        this.a5I = function (g, k) {
            cH.setTransform(1, 0, 0, 1, g + 2 * this.hw + this.uL, k + this.nI);
            cH.lineWidth = 2;
            var x = this.xB / b0.max[this.bs];
            cH.beginPath();
            cH.moveTo(this.uM, this.xB - x * b0.tM[b0.lz - 1]);
            for (var l = b0.lz - 2; 0 <= l; l--)
                cH.lineTo(l * this.uM / (b0.lz - 1), this.xB - x * b0.tM[l]);
            cH.stroke();
            x = this.m4(b0.tM, x, 1);
            l = b0.max[this.bs] / 100;
            .95 > x && cH.fillText(e7.n9(l, 2), -this.hw, 0);
            .05 < Math.abs(x - .5) && cH.fillText(e7.n9(l / 2, 2), -this.hw, Math.floor(this.xB / 2));
            .05 < x && cH.fillText(e7.n9(0, 2), -this.hw, this.xB)
        }
            ;
        this.a5J = function (g, k) {
            var x;
            cH.setTransform(1, 0, 0, 1, g + .34 * this.c1, k + 2 * this.nI);
            cH.textAlign = oc;
            var l = this.cw - 4 * this.nI - this.nJ;
            for (x = 7; 0 <= x; x--)
                cH.fillText(b0.a55[x], 0, x * l / 7);
            cH.setTransform(1, 0, 0, 1, g + .39 * this.c1, k + 2 * this.nI);
            cH.textAlign = mZ;
            x = b0.b1[1];
            cH.fillText(e7.n9(b0.b1[0] / (10 * (1 > x ? 1 : x)), 1), 0, 0);
            for (x = 6; 1 <= x; x--)
                cH.fillText(b0.b1[x].toString(), 0, x * l / 7);
            cH.fillText(e7.n9(100 * (1 - bU[aw] / b0.b1[7]), 0), 0, l)
        }
            ;
        this.a5K = function (g, k) {
            var x;
            cH.setTransform(1, 0, 0, 1, g + .74 * this.c1, k + 2 * this.nI);
            cH.textAlign = oc;
            var l = this.cw - 4 * this.nI - this.nJ;
            cH.fillStyle = oC;
            for (x = 2; 0 <= x; x--)
                cH.fillText(b0.a55[x + 8], 0, x * l / 9);
            cH.fillStyle = oB;
            cH.fillText(b0.a55[11], 0, 3 * l / 9);
            cH.fillStyle = oS;
            for (x = 8; 4 <= x; x--)
                cH.fillText(b0.a55[x + 8], 0, x * l / 9);
            cH.fillStyle = oR;
            cH.fillText(b0.a55[17], 0, 9 * l / 9);
            cH.fillStyle = oC;
            x = eL.gF(b0.b1[8] + b0.b1[9] + b0.b1[10] + b0.b1[11]);
            var t = cH.measureText(x).width;
            cH.setTransform(1, 0, 0, 1, g + .79 * this.c1 + t, k + 2 * this.nI);
            cH.fillText(eL.gF(b0.b1[8]), 0, 0);
            cH.fillText(eL.gF(b0.b1[9]), 0, 1 * l / 9);
            cH.fillText(eL.gF(b0.b1[10]), 0, 2 * l / 9);
            cH.fillStyle = oB;
            cH.fillText(x, 0, 3 * l / 9);
            cH.fillStyle = oS;
            x = b0.b1[13] - ae.zh(aw);
            cH.fillText(eL.gF(b0.b1[12]), 0, 4 * l / 9);
            cH.fillText(eL.gF(x), 0, 5 * l / 9);
            cH.fillText(eL.gF(b0.b1[14]), 0, 6 * l / 9);
            cH.fillText(eL.gF(b0.b1[15]), 0, 7 * l / 9);
            cH.fillText(eL.gF(b0.b1[16]), 0, 8 * l / 9);
            x = b0.b1[12] + x + b0.b1[14] + b0.b1[15] + b0.b1[16] + b0.b1[17];
            cH.fillStyle = oR;
            cH.fillText(eL.gF(x), 0, l);
            cH.fillStyle = cK
        }
            ;
        this.m4 = function (g, k, x) {
            if (0 > this.a5D || 1 < this.a5D)
                return .25;
            var l = this.a5D * (b0.lz - 1)
                , t = Math.floor(l)
                , n = g[t];
            n += (l - t) * (g[t < b0.lz - 1 ? t + 1 : t] - n);
            cH.strokeStyle = oW;
            .04 < this.a5D && this.a5Q(0, this.xB - k * Math.pow(n, x), l * this.uM / (b0.lz - 1), this.xB - k * Math.pow(n, x));
            .04 < n / b0.max[this.bs] && this.a5Q(l * this.uM / (b0.lz - 1), this.xB, l * this.uM / (b0.lz - 1), this.xB - k * Math.pow(n, x));
            cH.fillStyle = oN;
            cH.beginPath();
            cH.arc(l * this.uM / (b0.lz - 1), this.xB - k * Math.pow(n, x), 4, 0, 2 * Math.PI);
            cH.fill();
            g = this.a5D * c4.tO();
            g = 0 === fB[aw] ? Math.floor(g * eS.tU) : Math.floor(g * c4.dU());
            cH.fillStyle = cK;
            cH.fillText(1 === x ? e7.n9(n / 100, 2) : eL.gF(Math.floor(n)), -this.hw, this.xB - k * Math.pow(n, x));
            cH.textAlign = cJ;
            cH.fillText(e7.s8(g), l * this.uM / (b0.lz - 1), this.xB + this.a5B - (q ? 2 : 0));
            cH.textAlign = oc;
            return k * Math.pow(n, x) / this.xB
        }
            ;
        this.a5Q = function (g, k, x, l) {
            cH.beginPath();
            cH.moveTo(g, k);
            cH.lineTo(x, l);
            cH.stroke()
        }
    }
    function a20() {
        this.wg = "rgba(130,130,130,0.88) rgba(130,12,12,0.88) rgba(12,130,12,0.88) rgba(12,12,130,0.88) rgba(130,130,12,0.88) rgba(130,12,130,0.88) rgba(12,130,130,0.88) rgba(130,130,130,0.88) rgba(0,0,0,0.88)".split(" ");
        this.sl = [cK, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(240,25,240)", "rgb(25,240,240)", cK, "rgb(170,170,170)"];
        this.a5R = [cK, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", cK, gD];
        this.a5S = [gD, cK, cK, cK, gD, gD, gD, gD, cK];
        this.a0f = ["rgba(255,255,255,", "rgba(0,0,0,", "rgba(170,170,170,", "rgba(85,85,85,"];
        this.a0g = ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(170,170,170)", "rgb(85,85,85)"];
        this.bo = "White Red Green Blue Yellow Magenta Cyan White Black".split(" ");
        this.tc = [[255, 255, 255, 180], [255, 0, 0, 180], [0, 255, 0, 180], [50, 50, 255, 180], [255, 255, 0, 180], [255, 0, 255, 180], [0, 255, 255, 180], [255, 255, 255, 180], [0, 0, 0, 180]];
        var g = [[255, 255, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255], [255, 255, 255], [0, 0, 0]];
        this.id = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        var k, x;
        this.bp = function (l) {
            this.dX = new Uint8Array(b8);
            this.a5Y();
            dA && (9 === dr ? this.a5Z() : this.dF(l))
        }
            ;
        this.a5Y = function () {
            for (var l = this.id.length - 1; 0 <= l; l--)
                this.id[l] = l;
            k = [];
            x = []
        }
            ;
        this.a5Z = function () {
            var l;
            for (l = cq + dy.dz - 1; 0 <= l; l--)
                this.dX[l] = 1;
            for (l = cq + dy.dz; l < b8; l++)
                this.dX[l] = 2;
            this.id[1] = 7;
            this.id[2] = 8
        }
            ;
        this.dF = function (l) {
            var t = new Uint8Array(cq)
                , n = new Uint8Array(cq)
                , z = new Uint16Array(8)
                , y = new Uint16Array(this.id.length);
            this.a5d(l, t, n, z);
            this.yE(z);
            dt || this.a5e(y, t, n);
            this.a5f(t, n, y);
            dt ? this.a5g() : this.a5h()
        }
            ;
        this.a5d = function (l, t, n, z) {
            var y, A, B = this.id.length - 1, C = new Uint16Array(B);
            for (y = cq - 1; 0 <= y; y--) {
                for (A = B; 1 <= A; A--)
                    C[A - 1] = Math.abs(4 * l[y].xI[0] - g[A][0]) + Math.abs(4 * l[y].xI[1] - g[A][1]) + Math.abs(4 * l[y].xI[2] - g[A][2]);
                var F = 768;
                for (A = B - 1; 0 <= A; A--) {
                    var E = (A + y) % B;
                    C[E] < F && (F = C[E],
                        t[y] = E)
                }
                z[t[y]] += 4;
                F = 768;
                for (A = B - 1; 0 <= A; A--)
                    E = (A + y) % B,
                        C[E] < F && E !== t[y] && (F = C[E],
                            n[y] = E);
                z[n[y]]++
            }
        }
            ;
        this.yE = function (l) {
            var t, n, z = this.id.length - 1;
            for (t = z; 0 <= t; t--)
                this.id[t] = t;
            for (t = z - 1; 0 <= t; t--)
                l[t]++;
            for (t = 1; t <= z; t++) {
                var y = 0;
                for (n = 1; n < z; n++)
                    l[n] > l[y] && (y = n);
                l[y] = 0;
                this.id[t] = y + 1
            }
        }
            ;
        this.a5e = function (l, t, n) {
            var z = this.id.length - 1
                , y = new Uint16Array(z)
                , A = [];
            var B = cq - 1;
            a: for (; 0 <= B; B--) {
                var C = B;
                var F = a11[C].indexOf("[");
                if (0 > F)
                    F = null;
                else {
                    var E = a11[C].indexOf("]");
                    F = 1 < E - F && 8 >= E - F ? a11[C].substring(F + 1, E).toUpperCase().trim() : null
                }
                if (null !== F) {
                    for (E = k.length - 1; 0 <= E; E--)
                        if (F === k[E]) {
                            x[E].push(B);
                            continue a
                        }
                    k.push(F);
                    A.push(!1);
                    x.push([]);
                    x[k.length - 1].push(B)
                }
            }
            for (E = k.length - 1; 0 <= E; E--) {
                C = -1;
                for (F = k.length - 1; 0 <= F; F--)
                    !A[F] && (-1 === C || x[F].length > x[C].length) && (C = F);
                for (F = z - 1; 0 <= F; F--)
                    y[F] = 1;
                for (F = x[C].length - 1; 0 <= F; F--)
                    y[t[x[C][F]]] += 3,
                        y[n[x[C][F]]]++;
                for (B = z - 1; 0 <= B; B--) {
                    var H = C % z;
                    for (F = z - 1; 0 <= F; F--)
                        y[F] > y[H] && (H = F);
                    var J = -1;
                    for (F = j5; 0 < F; F--)
                        if (this.id[F] === H + 1) {
                            J = F;
                            break
                        }
                    y[H] = 0;
                    if (-1 !== J) {
                        H = 0;
                        for (F = j5; 0 < F; F--)
                            l[J] > l[F] && H++;
                        if (H !== j5 - 1) {
                            for (F = x[C].length - 1; 0 <= F; F--)
                                l[J]++,
                                    this.dX[x[C][F]] = J;
                            break
                        }
                    }
                }
                A[C] = !0
            }
        }
            ;
        this.a5f = function (l, t, n) {
            var z;
            var y = this.id.length - 1;
            var A = as(cq, j5);
            0 < cq % j5 && A++;
            var B = new Uint8Array(y + 1);
            for (z = y; 1 <= z; z--)
                B[this.id[z]] = z;
            for (y = 0; y < cq; y++)
                z = B[l[y] + 1],
                    0 === this.dX[y] && z <= j5 && n[z] < A && (n[z]++,
                        this.dX[y] = z);
            for (y = 0; y < cq; y++)
                z = B[t[y] + 1],
                    0 === this.dX[y] && z <= j5 && n[z] < A && (n[z]++,
                        this.dX[y] = z);
            for (z = j5; 1 <= z; z--)
                for (y = cq - 1; 0 <= y && !(n[z] >= A); y--)
                    0 === this.dX[y] && (n[z]++,
                        this.dX[y] = z)
        }
            ;
        this.a5g = function () {
            var l, t = new Uint16Array(j5);
            t[j5 - 1] = b8;
            for (l = j5 - 2; 0 <= l; l--)
                t[l] = du.dv[l].mm;
            t[0]--;
            var n = 0 === t[0] ? 1 : 0;
            for (l = cq; l < b8; l++)
                this.dX[l] = n + 1,
                    t[n]--,
                    0 >= t[n] && n++
        }
            ;
        this.a5h = function () {
            for (var l = cq; l < b8; l++)
                this.dX[l] = 1 + l % j5
        }
            ;
        this.ic = function (l) {
            if (dt)
                return [512, ""];
            var t, n, z = -1, y = -1;
            for (n = k.length - 1; 0 <= n; n--)
                for (t = x[n].length - 1; 0 <= t && this.id[this.dX[x[n][t]]] === l; t--)
                    if (-1 === z || sD[x[n][t]] < sD[z])
                        z = x[n][t],
                            y = n;
            return -1 === z || 0 === fB[z] ? [512, ""] : [z, k[y]]
        }
    }
    function bV() {
        for (var g, k, x = aQ - 1; 0 <= x; x--)
            g = as(aS[x], 4) % aZ,
                k = as(aS[x], 4 * aZ),
                d0[aM] = d0[aM] > g ? g : d0[aM],
                d3[aM] = d3[aM] > k ? k : d3[aM],
                cz[aM] = cz[aM] < g ? g : cz[aM],
                d2[aM] = d2[aM] < k ? k : d2[aM]
    }
    function aj() {
        var g = b4[aM].length, k;
        var x = g - 1;
        a: for (; 0 <= x; x--) {
            for (k = 3; 0 <= k; k--) {
                var l = b4[aM][x] + aV[k];
                if (b5.bG(l) || b5.bE(l) && b5.bF(l) !== aM) {
                    b5.cW(b4[aM][x], aM);
                    continue a
                }
            }
            b4[aM][x] = b4[aM][g - 1];
            b4[aM].pop();
            g--
        }
    }
    function ak() {
        var g = bM[aM].length, k, x, l = g - 1;
        a: for (; 0 <= l; l--) {
            var t = x = !1;
            for (k = 3; 0 <= k; k--) {
                var n = bM[aM][l] + aV[k];
                if (b5.yO(n, aM))
                    continue a;
                t = t || b5.yR(n);
                x = x || b5.yN(n)
            }
            t ? bN[aM].push(bM[aM][l]) : x ? bQ[aM].push(bM[aM][l]) : b5.hV(bM[aM][l], aM);
            bM[aM][l] = bM[aM][g - 1];
            bM[aM].pop();
            g--
        }
    }
    function bK() {
        bU[aP] -= aQ
    }
    function bL(g) {
        for (var k = g.length, x = k - 1; 0 <= x; x--)
            b5.he(aP, g[x]) || (g[x] = g[k - 1],
                g.pop(),
                k--)
    }
    function bO(g) {
        for (var k = g.length, x = k - 1; 0 <= x; x--)
            !b5.he(aP, g[x]) && b5.b6(g[x]) && (g[x] = g[k - 1],
                g.pop(),
                k--)
    }
    function bP(g) {
        for (var k = g.length, x, l, t = k - 1; 0 <= t; t--)
            for (x = 3; 0 <= x; x--)
                if (l = g[t] + aV[x],
                    b5.yO(l, aP)) {
                    bM[aP].push(g[t]);
                    g[t] = g[k - 1];
                    g.pop();
                    k--;
                    break
                }
    }
    function bR() {
        for (var g, k, x = aQ - 1; 0 <= x; x--)
            for (g = 3; 0 <= g; g--)
                k = aS[x] + aV[g],
                    b5.yP(aP, k) && b5.yQ(k) && (bM[aP].push(k),
                        b5.b7(k, aP))
    }
    function bS() {
        var g;
        a: for (; d3[aP] < d2[aP];) {
            for (g = cz[aP]; g >= d0[aP]; g--)
                if (b5.he(aP, 4 * (d3[aP] * aZ + g)))
                    break a;
            d3[aP]++
        }
        a: for (; d3[aP] < d2[aP];) {
            for (g = cz[aP]; g >= d0[aP]; g--)
                if (b5.he(aP, 4 * (d2[aP] * aZ + g)))
                    break a;
            d2[aP]--
        }
        a: for (; d0[aP] < cz[aP];) {
            for (g = d2[aP]; g >= d3[aP]; g--)
                if (b5.he(aP, 4 * (g * aZ + d0[aP])))
                    break a;
            d0[aP]++
        }
        a: for (; d0[aP] < cz[aP];) {
            for (g = d2[aP]; g >= d3[aP]; g--)
                if (b5.he(aP, 4 * (g * aZ + cz[aP])))
                    break a;
            cz[aP]--
        }
    }
    function ch(g, k) {
        return 0 === dW.dX[g] || dW.dX[g] !== dW.dX[k]
    }
    function lb(g, k) {
        var x, l = ae.af(g);
        for (x = 0; x < l; x++)
            if (0 === ae.ag(g, x)) {
                var t = ae.al(g, x);
                if (t === b8) {
                    if (k === b8)
                        break;
                    if (la(k))
                        return !0
                } else if (k === b8) {
                    if (la(t))
                        return !0
                } else if (lf(k, t))
                    return !0
            }
        return !1
    }
    function la(g) {
        var k, x, l = bM[g].length;
        for (k = 3; 0 <= k; k--) {
            var t = aV[k];
            for (x = 0; x < l; x++)
                if (b5.bG(bM[g][x] + t))
                    return !0
        }
        return !1
    }
    function lf(g, k) {
        var x;
        var l = bM[g].length;
        var t = bM[k].length;
        t < l && (l = g,
            g = k,
            k = l,
            l = t);
        for (x = 3; 0 <= x; x--) {
            var n = aV[x];
            for (t = 0; t < l; t++) {
                var z = bM[g][t] + n;
                if (b5.bE(z) && b5.bF(z) === k)
                    return !0
            }
        }
        return !1
    }
    function a1z() {
        function g() {
            c4.gY = performance.now();
            c4.a61();
            window.requestAnimationFrame(g)
        }
        function k() {
            var x = performance.now();
            c4.gY + 1500 < x && (c4.gY = x,
                c4.a61())
        }
        this.c5 = !1;
        this.a63 = this.a62 = this.a61 = null;
        this.gY = 0;
        this.a64 = -1;
        this.bp = function () {
            window.requestAnimationFrame(g);
            this.gY = performance.now()
        }
            ;
        this.a23 = function () {
            1 !== fV || !dt || fm.lp || fY || fm.lv();
            -1 === this.a64 && (this.a64 = setInterval(k, 2E3))
        }
            ;
        this.xY = function () {
            this.c5 = !0;
            -1 !== this.a64 && (clearInterval(this.a64),
                this.a64 = -1)
        }
            ;
        this.jW = function () {
            this.a61 = this.a67;
            this.a62 = null;
            this.c5 = !0
        }
            ;
        this.jS = function () {
            this.a62 = new a68;
            this.a61 = this.a69
        }
            ;
        this.jT = function () {
            this.a63 = new a6A;
            this.a63.bp();
            this.a61 = this.a6B
        }
            ;
        this.a67 = function () {
            jY.dF();
            jb.dF();
            jj.dF();
            e9.dF();
            eU.wA();
            cD.dF();
            this.c5 && (this.c5 = !1,
                aJ.cG())
        }
            ;
        this.a69 = function () {
            this.a62.dF()
        }
            ;
        this.a6B = function () {
            this.a63.dF()
        }
            ;
        this.dU = function () {
            return dt ? this.a62.w7 : this.a63.w7
        }
            ;
        this.tO = function () {
            return 56
        }
    }
    function a68() {
        this.gY = c4.gY;
        this.a54 = 56;
        this.w7 = this.bs = 0;
        this.a6C = !1;
        this.dF = function () {
            jj.dF();
            fY ? eY() : 0 === this.bs ? c4.gY >= this.gY && (this.gY += this.a54 * Math.floor(1 + (c4.gY - this.gY) / this.a54),
                2 === fV || fm.lp ? e4() : (eA(),
                    this.w7++,
                    h4.to()),
                this.bs++) : (fm.lp ? eY() : (c4.c5 = !0,
                    eW()),
                    this.bs = 0);
            eQ();
            c4.c5 && (c4.c5 = !1,
                hh())
        }
    }
    function a6A() {
        this.gY = c4.gY;
        this.a54 = 56;
        this.w6 = this.w7 = this.bs = 0;
        this.a6D = null;
        this.a0F = 7;
        var g;
        this.bp = function () {
            this.w6 = 0;
            this.a6D = [];
            g = this.w7 = this.bs = 0
        }
            ;
        this.a6E = function (k) {
            if (fY)
                this.tP(k);
            else if (this.a6D.push(k),
                2 === fV) {
                for (k = 0; k < this.a6D.length; k++)
                    ji.a6F(this.a6D[k], g),
                        g = (g + 1) % 8;
                this.a6D = []
            }
        }
            ;
        this.tP = function (k) {
            ji.a6F(k, g);
            g = (g + 1) % 8;
            e7.tP(this.w6);
            this.w6 === j7 ? (fZ.dF(),
                this.w7 = this.bs = this.w6 = 0,
                this.gY = c4.gY) : (this.w6++,
                    e6.iw(),
                    e6.eX(),
                    h4.to())
        }
            ;
        this.dF = function () {
            jj.dF();
            fY ? (c4.c5 = e7.tP(-1) || c4.c5,
                eY()) : 0 === this.bs ? c4.gY >= this.gY && (this.gY += this.a54 * Math.floor(1 + (c4.gY - this.gY) / this.a54),
                    2 === fV ? e4() : this.a6G(),
                    this.bs++) : (c4.c5 = !0,
                        eW(),
                        this.bs = 0);
            eQ();
            c4.c5 && (c4.c5 = !1,
                hh())
        }
            ;
        this.a6G = function () {
            if (this.w7 !== 7 * this.w6)
                eA(),
                    this.w7++,
                    h4.to();
            else {
                for (var k = !1; this.a6I();)
                    if (k = !0,
                        eA(),
                        this.w7++,
                        0 < this.a6D.length)
                        for (var x = this.a0F - 2; 0 <= x; x--)
                            eA(),
                                this.w7++;
                    else
                        break;
                k ? h4.to() : (e4(),
                    h4.iy())
            }
        }
            ;
        this.a6I = function () {
            return 0 < this.a6D.length ? (this.w6++,
                ji.a6F(this.a6D[0], g),
                g = (g + 1) % 8,
                this.a6D.shift(),
                !0) : !1
        }
    }
    function kf() {
        function g(k, x) {
            8 !== aJ.pR() || 0 !== x && x !== dr || dt || e5.mr(k)
        }
        this.gS = 0;
        this.a6J = !0;
        this.dF = function () {
            c4.gY > this.gS && (this.gS = c4.gY + 2500,
                this.a6K())
        }
            ;
        this.a6K = function () {
            var k = new Date;
            var x = k.getUTCSeconds();
            this.a6J ? 55 > x || -1 !== c4.a64 || (this.a6J = !1,
                x = k.getUTCMinutes(),
                4 === x % 5 ? (k = k.getUTCHours(),
                    59 === x && 15 <= k && 21 >= k ? g("Upcoming Game of the Day", 0) : 14 === x % 30 ? g("Upcoming Alliance Contest", 0) : 29 === x % 30 ? g("Upcoming Battle Royale Contest", 0) : g("Upcoming One-vs-One Game", 8)) : 2 === x % 5 && g("Upcoming Zombie Game", 9)) : 55 > x && (this.a6J = !0)
        }
    }
    function kS() {
        function g() {
            return Math.pow(Math.pow(t - x, 2) + Math.pow(n - l, 2), .5)
        }
        function k(z) {
            x = pF * z.touches[0].clientX;
            l = pF * z.touches[0].clientY;
            t = pF * z.touches[1].clientX;
            n = pF * z.touches[1].clientY
        }
        var x, l, t, n;
        this.pG = function (z) {
            return 1 < z.touches.length ? (k(z),
                hm.lA(),
                !0) : !1
        }
            ;
        this.pL = function (z) {
            if (0 === fV)
                return !1;
            if (1 < z.touches.length) {
                if (!eR.gw())
                    return !0;
                var y = g();
                k(z);
                z = g();
                gf.rC(Math.floor((x + t) / 2), Math.floor((l + n) / 2), z / y);
                return c4.c5 = !0
            }
            return !1
        }
    }
    function kT() {
        function g(t, n) {
            for (var z = Array(t), y = 0; y < t; y++)
                z[y] = k(n, 10);
            return m.iM(z)
        }
        function k(t, n) {
            for (var z = 0, y, A, B = l; B < l + n; B++)
                y = as(B, 8),
                    A = 7 - B % 8,
                    z |= (t[y] >> A & 1) << l + n - B - 1;
            l += n;
            return z
        }
        var x, l;
        this.a52 = function (t, n) {
            l = 0;
            x = n.length;
            if (0 === x)
                e9.a1Y(t, 3205);
            else {
                var z = k(n, 1);
                if (0 === z)
                    if (z = k(n, 2),
                        0 === z)
                        if (0 === k(n, 1)) {
                            if (0 === t && 8 !== aJ.pR() && !(4 > x)) {
                                uH.br(0, g(k(n, 5), n));
                                uH.br(1, "[" + g(k(n, 3), n) + "]");
                                var y = k(n, 12)
                                    , A = k(n, 6)
                                    , B = Array(y);
                                for (z = 0; z < y; z++)
                                    B[z] = k(n, A);
                                jZ.rf(B)
                            }
                        } else {
                            if (8 !== aJ.pR())
                                if (3 > x)
                                    e9.a1Y(t, 3208);
                                else {
                                    y = k(n, 1);
                                    A = k(n, 16);
                                    B = k(n, 4);
                                    var C = [];
                                    for (z = 0; z < B; z++) {
                                        var F = k(n, 14);
                                        var E = k(n, 5);
                                        E = g(E, n);
                                        C.push({
                                            name: E,
                                            i4: F
                                        })
                                    }
                                    0 === y ? cD.uA(0, C, 10, 1, .36, .55, A) : cD.uA(1, C, 100, 2, .47, .5, A)
                                }
                        }
                    else if (1 === z)
                        if (t !== e9.vo)
                            e9.close(t, 3239);
                        else if (6 === aJ.pR() && jk.bp(),
                            7 !== aJ.pR())
                            e9.close(t, 3251);
                        else {
                            y = [0, 0, 0, 0];
                            A = k(n, 6);
                            for (z = 0; 4 > z; z++)
                                y[z] = k(n, A);
                            B = k(n, 4);
                            C = [];
                            for (z = 0; z < B; z++)
                                C.push({
                                    id: k(n, 5),
                                    jB: k(n, 4),
                                    wr: 1 === k(n, 1),
                                    wo: k(n, 6),
                                    wp: k(n, 14),
                                    wt: k(n, A),
                                    wu: k(n, 9) + 1,
                                    vR: k(n, 10)
                                });
                            jk.uI(y, C)
                        }
                    else
                        2 !== z && 3 !== z || eU.bp(n);
                else
                    1 === z && (z = aJ.pR(),
                        8 !== z ? 10 === z && e9.a1Y(t, 3243) : t !== e9.jV ? e9.a1Y(t, 3244) : 0 === k(n, 1) ? c4.a63.a6E(n) : (z = k(n, 2),
                            0 === z ? 3 !== x ? e9.a1Y(e9.jV, 3230) : (z = k(n, 9),
                                y = k(n, 7),
                                0 !== fB[z] && 0 !== fB[aw] && (y %= a5.a6,
                                    e5.mi(z, aw, y),
                                    e6.mv(z, 1, y))) : 1 === z ? 2 !== x ? e9.a1Y(e9.jV, 3235) : (z = k(n, 9),
                                        0 !== fB[z] && 0 !== fB[aw] && eM.a1B(0, [z], !0) && e5.lT(z, 1)) : 3 !== x ? e9.a1Y(e9.jV, 3236) : (z = k(n, 9),
                                            y = k(n, 9),
                                            0 !== fB[z] && 0 !== fB[y] && 0 !== fB[aw] && eM.a1B(1, [z], !0) && (e6.mv(z, 3, 96),
                                                e6.mv(y, 4, 96),
                                                e5.my(z, y)))))
            }
        }
            ;
        this.wB = function (t) {
            l = 1;
            x = t.length;
            if (2 === k(t, 2)) {
                l += 20;
                for (var n = k(t, 9), z = k(t, 14), y = k(t, 4), A = 1 === k(t, 1), B = k(t, 6), C = k(t, 14), F = k(t, 9) + 1, E = [], H, J, K, D = 0; D < F; D++)
                    H = k(t, 1),
                        J = [k(t, 6), k(t, 6), k(t, 6)],
                        K = g(k(t, 5), t),
                        E.push({
                            name: K,
                            xI: J,
                            xJ: H
                        });
                aJ.vX();
                x0(B, C);
                1 === E.length && du.xD(y);
                j8(z, n, E, y, A)
            } else {
                l += 20;
                n = k(t, 1);
                z = k(t, 14);
                y = k(t, 4);
                A = 1 === k(t, 1);
                B = k(t, 6);
                C = k(t, 14);
                F = [];
                for (D = 0; 2 > D; D++)
                    E = k(t, 1),
                        H = [k(t, 6), k(t, 6), k(t, 6)],
                        J = k(t, 14),
                        K = g(k(t, 5), t),
                        F.push({
                            name: K,
                            xI: H,
                            i4: J,
                            xJ: E
                        });
                aJ.vX();
                x0(B, C);
                j8(z, n, F, y, A)
            }
        }
            ;
        this.w4 = function (t) {
            l = 1;
            x = t.length;
            var n = k(t, 2)
                , z = k(t, 10);
            e9.vo > e9.w9 && (z += e9.w9);
            if (e9.vo === z)
                return e9.jV = z,
                    !1;
            e9.close(e9.vo, 3247);
            e9.jV = z;
            eU.vy = k(t, 10);
            eU.vz = k(t, 2 === n ? 9 : 1);
            e9.rb(z, 5) && ii.a1V();
            return !0
        }
            ;
        this.a6F = function (t, n) {
            l = 2;
            var z = 8 * t.length;
            if (k(t, 3) !== n)
                e9.a1Y(e9.jV, 3248);
            else
                for (; l + 8 <= z;) {
                    var y = k(t, 3);
                    var A = k(t, 9);
                    if (0 === y) {
                        y = k(t, 10);
                        var B = k(t, 9);
                        B = B === A ? b8 : B;
                        eC.fU(A, y, B)
                    } else if (1 === y) {
                        y = k(t, 10);
                        B = k(t, 11);
                        var C = k(t, 11);
                        eC.fX(A, y, B, C)
                    } else
                        2 === y ? (B = k(t, 9),
                            B = B === A ? b8 : B,
                            eC.fa(A, B)) : 3 === y ? eC.fd(A) : 4 === y ? (y = k(t, 7),
                                e6.mv(A, 0, y)) : 5 === y ? eC.fl(A) : 6 === y ? eC.fc(A, k(t, 1)) : 7 === y && eC.fb(A, 1 + k(t, 11))
                }
        }
    }
    function a1w() {
        this.a4q = this.a4p = this.a4o = this.a4n = this.a4s = this.a4r = 0;
        this.tp = [0, 0, 0, 0];
        this.gv = function () {
            this.a4r = gf.gB();
            this.a4s = gf.cF();
            this.a4n = -this.a4r;
            this.a4o = -this.a4s;
            this.a4p = gA / g3;
            this.a4q = cB / g3;
            this.tp[0] = Math.floor(this.a4n);
            this.tp[1] = Math.floor(this.a4o);
            this.tp[2] = Math.floor(this.tp[0] + this.a4p + 1);
            this.tp[3] = Math.floor(this.tp[1] + this.a4q + 1);
            h4.tm = !0
        }
    }
    function kU() {
        var g, k;
        this.bp = function () {
            g = 1;
            k = 0
        }
            ;
        this.dF = function () {
            0 < g && (k = 0 === k ? c4.gY + 16 : k,
                g -= .001 * (c4.gY - k),
                g = 0 > g ? 0 : g,
                k = c4.gY,
                c4.c5 = !0)
        }
            ;
        this.cG = function () {
            0 < g && (cH.fillStyle = "rgba(0,0,0," + g + ")",
                cH.fillRect(0, 0, gA, cB))
        }
    }
    function kZ() {
        this.l7 = !1;
        this.xC = [0, 0, 0, 0];
        this.show = function () {
            this.l7 = !0;
            this.lq();
            c4.c5 = !0
        }
            ;
        this.lq = function () {
            var g = s - 7 * cA;
            this.xC[2] = q ? Math.floor(.75 * pB) : Math.floor(.5 * pB);
            this.xC[3] = Math.floor(1.2 * this.xC[2]);
            this.xC[3] > g && (this.xC[3] = g,
                this.xC[2] = Math.floor(g / 1.2));
            this.xC[0] = Math.floor((r - this.xC[2]) / 2);
            this.xC[1] = Math.floor((s - this.xC[3]) / 2)
        }
            ;
        this.lh = function (g, k) {
            return g < this.xC[0] || k < this.xC[1] || g > this.xC[0] + this.xC[2] || k > this.xC[1] + this.xC[3] ? !1 : !0
        }
            ;
        this.c7 = function (g, k) {
            c4.c5 = !0;
            if (g < this.xC[0] || k < this.xC[1] || g > this.xC[0] + this.xC[2] || k > this.xC[1] + this.xC[3])
                return this.l7 = !1,
                    !0;
            var x = Math.floor(.13 * this.xC[3]);
            if (k < this.xC[1] + x)
                return g > this.xC[0] + this.xC[2] - 1.2 * x && (this.l7 = !1),
                    !0;
            x = Math.floor(7 * (k - this.xC[1] - x) / (this.xC[3] - x));
            x = 0 > x ? 0 : 6 < x ? 6 : x;
            g > this.xC[0] + this.xC[2] / 2 && (x += 7);
            x0(x, Math.floor(16384 * Math.random()));
            return !0
        }
            ;
        this.cG = function () {
            var g, k = Math.floor(.13 * this.xC[3]), x = (this.xC[3] - k - 8 * cA) / 7, l = Math.floor((this.xC[2] - 3 * cA) / 2);
            cH.lineWidth = 2;
            cH.textAlign = cJ;
            cH.textBaseline = cI;
            cH.font = bt + Math.floor(.48 * x) + bu;
            cH.fillStyle = hq;
            cH.fillRect(this.xC[0], this.xC[1], this.xC[2], this.xC[3]);
            cH.fillStyle = o9;
            cH.fillRect(this.xC[0], this.xC[1], this.xC[2], k);
            cH.strokeStyle = cK;
            cH.strokeRect(this.xC[0], this.xC[1], this.xC[2], this.xC[3]);
            cH.fillStyle = cK;
            for (g = 6; 0 <= g; g--) {
                var t = Math.floor(this.xC[1] + k + cA + g * (x + cA));
                wo === g ? (cH.fillStyle = o9,
                    cH.fillRect(this.xC[0] + cA, t, l, x),
                    cH.fillStyle = cK) : wo === g + 7 && (cH.fillStyle = o9,
                        cH.fillRect(this.xC[0] + l + 2 * cA, t, l, x),
                        cH.fillStyle = cK);
                cH.strokeRect(this.xC[0] + cA, t, l, x);
                cH.strokeRect(this.xC[0] + l + 2 * cA, t, l, x);
                cH.fillText(jf.bz(g).name, Math.floor(this.xC[0] + cA + l / 2), Math.floor(t + .5 * x));
                cH.fillText(jf.bz(g + 7).name, Math.floor(this.xC[0] + this.xC[2] - cA - l / 2), Math.floor(t + .5 * x))
            }
            fm.m4(Math.floor(this.xC[0] + this.xC[2] - .8 * k), Math.floor(this.xC[1] + .25 * k), Math.floor(.5 * k));
            cH.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function kV() {
        function g(n) {
            var z = j()
                , y = Math.floor(z / 16777216);
            l(n, 24, y);
            l(n, 24, z - 16777216 * y)
        }
        function k(n) {
            l(n, 14, a1e);
            l(n, 4, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0);
            l(n, 1, a1i ? 1 : 0);
            l(n, 1, a1h ? 1 : 0);
            l(n, 5, (new Date).getHours() % 24)
        }
        function x(n) {
            return as(n, 8) + (0 < n % 8 ? 1 : 0)
        }
        function l(n, z, y) {
            for (var A, B, C = t; C < t + z; C++)
                A = as(C, 8),
                    B = 7 - C % 8,
                    n[A] |= (y >> z - (C - t + 1) & 1) << B;
            t += z
        }
        var t;
        this.re = function () {
            var n = new Uint8Array(3);
            t = 0;
            l(n, 1, 0);
            l(n, 3, 0);
            l(n, 14, a1e);
            e9.send(0, n)
        }
            ;
        this.vG = function (n) {
            var z = m.iL(jX.xH())
                , y = z.length
                , A = new Uint8Array(x(105 + 10 * y));
            t = 0;
            l(A, 1, 0);
            l(A, 3, 1);
            l(A, 10, a1j);
            var B = cC.m7[2].iY.uz();
            l(A, 6, B[0]);
            l(A, 6, B[1]);
            l(A, 6, B[2]);
            g(A);
            k(A);
            for (B = 0; B < y; B++)
                l(A, 10, z[B]);
            e9.vo = n;
            e9.send(n, A)
        }
            ;
        this.u8 = function (n, z) {
            var y = new Uint8Array(5);
            t = 0;
            l(y, 1, 0);
            l(y, 3, 7);
            l(y, 3, 0);
            l(y, 14, a1e);
            l(y, 1, z);
            l(y, 16, Math.abs(4096 + cD.position[z] + cD.u7[z]) % 65536);
            e9.send(n, y)
        }
            ;
        this.a1W = function (n) {
            var z, y = new Uint8Array(100);
            t = 0;
            l(y, 1, 0);
            l(y, 3, 7);
            l(y, 3, 1);
            l(y, 14, a1l);
            var A = m.iL(a1m)
                , B = qe(A.length, 77);
            l(y, 7, B);
            for (z = 0; z < B; z++)
                l(y, 10, A[z]);
            e9.send(n, y)
        }
            ;
        this.xf = function (n) {
            var z;
            if (!(jX.xV + 7E3 > c4.gY)) {
                jX.xV = c4.gY;
                var y = new Uint8Array(17);
                t = 0;
                l(y, 1, 0);
                l(y, 3, 7);
                l(y, 3, 2);
                g(y);
                var A = mU(jX.xU.length - 20, 0);
                for (z = jX.xU.length - 1; z >= A; z--)
                    l(y, 4, Math.abs(jX.xU.charCodeAt(z) - 48) % 10);
                e9.send(n, y)
            }
        }
            ;
        this.a1N = function (n, z) {
            var y = new Uint8Array(1);
            t = 0;
            l(y, 1, 0);
            l(y, 3, 5);
            l(y, 1, z ? 1 : 0);
            e9.send(n, y)
        }
            ;
        this.x4 = function (n) {
            var z = new Uint8Array(1);
            t = 0;
            l(z, 1, 0);
            l(z, 3, 2);
            l(z, 4, n);
            e9.send(e9.vo, z)
        }
            ;
        this.a1V = function () {
            var n = new Uint8Array(7);
            t = 0;
            l(n, 1, 0);
            l(n, 3, 6);
            l(n, 8, e9.mt());
            l(n, 10, eU.vy);
            l(n, 9, eU.vz);
            l(n, 10, a1j);
            l(n, 14, a1e);
            e9.send(e9.jV, n)
        }
            ;
        this.lP = function (n, z) {
            var y = new Uint8Array(3);
            t = 0;
            l(y, 1, 1);
            l(y, 3, 0);
            l(y, 10, n);
            l(y, 9, z);
            e9.send(e9.jV, y)
        }
            ;
        this.lR = function (n, z, y) {
            var A = new Uint8Array(5);
            t = 0;
            l(A, 1, 1);
            l(A, 3, 1);
            l(A, 10, n);
            l(A, 11, z);
            l(A, 11, y);
            e9.send(e9.jV, A)
        }
            ;
        this.pz = function (n) {
            var z = new Uint8Array(2);
            t = 0;
            l(z, 1, 1);
            l(z, 3, 2);
            l(z, 1, 0);
            l(z, 9, n);
            e9.send(e9.jV, z)
        }
            ;
        this.q0 = function (n) {
            var z = new Uint8Array(2);
            t = 0;
            l(z, 1, 1);
            l(z, 3, 2);
            l(z, 1, 1);
            l(z, 11, n - 1);
            e9.send(e9.jV, z)
        }
            ;
        this.ij = function (n, z) {
            var y = new Uint8Array(4);
            t = 0;
            l(y, 1, 1);
            l(y, 3, 3);
            l(y, 12, n);
            l(y, 10, z);
            e9.send(e9.jV, y)
        }
            ;
        this.ly = function () {
            var n = new Uint8Array(1);
            t = 0;
            l(n, 1, 1);
            l(n, 3, 4);
            e9.send(e9.jV, n)
        }
            ;
        this.o1 = function (n) {
            var z = new Uint8Array(2);
            t = 0;
            l(z, 1, 1);
            l(z, 3, 5);
            l(z, 7, n);
            e9.send(e9.jV, z)
        }
            ;
        this.o2 = function (n, z) {
            e5.mi(aw, z, n);
            var y = new Uint8Array(3);
            t = 0;
            l(y, 1, 1);
            l(y, 3, 6);
            l(y, 2, 0);
            l(y, 9, z);
            l(y, 7, n);
            e9.send(e9.jV, y)
        }
            ;
        this.lU = function (n) {
            var z = new Uint8Array(2);
            t = 0;
            l(z, 1, 1);
            l(z, 3, 6);
            l(z, 2, 1);
            l(z, 9, n);
            e9.send(e9.jV, z)
        }
            ;
        this.lL = function (n, z) {
            var y, A = n.length, B = new Uint8Array(x(15 + 9 * A));
            t = 0;
            l(B, 1, 1);
            l(B, 3, 6);
            l(B, 2, 2);
            l(B, 9, z);
            for (y = 0; y < A; y++)
                l(B, 9, n[y]);
            e9.send(e9.jV, B)
        }
            ;
        this.qZ = function (n) {
            var z = new Uint8Array(1);
            t = 0;
            l(z, 1, 1);
            l(z, 3, 7);
            l(z, 1, n ? 1 : 0);
            e9.send(e9.jV, z)
        }
            ;
        this.xG = function (n) {
            var z = new Uint8Array(4);
            t = 0;
            l(z, 1, 0);
            l(z, 3, 3);
            k(z);
            e9.send(n, z)
        }
    }
    setTimeout(aI, 1E4);
}
)();

if (localStorage.getItem("settings") !== null) {
    settings = {...settings, ...JSON.parse(localStorage.getItem("settings"))};
}
settingsManager.applySettings();

console.log('Successfully loaded FX Client');
