const fx_version = '0.6'; // FX Client Version
const fx_update = 'Jan 31'; // FX Client Last Updated


if (localStorage.getItem("fx_winCount") == undefined || localStorage.getItem("fx_winCount") == null) {
    var wins_counter = 0;
    console.log('Couldn\'t find a saved win data. creating one...');
} else if (localStorage.getItem("fx_winCount") != undefined || localStorage.getItem("fx_winCount") != null) {
    var wins_counter = localStorage.getItem("fx_winCount");
}

var settings = {
    "fontName": "Trebuchet MS",
    "showBotDonations": false,
    "hideAllLinks": false,
    "realisticNames": false,
    //"customMapFileBtn": true
};
var settingsManager = new (function() {
    var inputFields = {
        fontName: document.getElementById("settings_fontname")
    };
    var checkboxFields = {
        showBotDonations: document.getElementById("settings_donations_bots"),
        hideAllLinks: document.getElementById("settings_hidealllinks"),
        realisticNames: document.getElementById("settings_realisticnames"),
        //customMapFileBtn: document.getElementById("settings_custommapfileinput")
    };
    this.save = function() {
        Object.keys(inputFields).forEach(function(key) { settings[key] = inputFields[key].value.trim(); });
        Object.keys(checkboxFields).forEach(function(key) { settings[key] = checkboxFields[key].checked; });
        this.applySettings();
        WindowManager.closeWindow("settings");
        localStorage.setItem("fx_settings", JSON.stringify(settings));
        // should probably firgure out a way to do this without reloading - // You can't do it, localstorages REQUIRE you to reload
        window.location.reload();
    };
    this.syncFields = function() {
        Object.keys(inputFields).forEach(function(key) { inputFields[key].value = settings[key]; });
        Object.keys(checkboxFields).forEach(function(key) { checkboxFields[key].checked = settings[key]; });
    };
    this.resetAll = function() {
        if (!confirm("Are you Really SURE you want to RESET ALL SETTINGS back to the default?")) return;
        localStorage.removeItem("fx_settings");
        window.location.reload();
    };
    this.applySettings = function() {
        //setVarByName("bu", "px " + settings.fontName);
    };
});
function removeWins() {
    var confirm1 = confirm('Do you really want to reset your Wins?');
    if (confirm1) {
        wins_counter = 0;
        localStorage.removeItem('fx_winCount');
        alert("Successfully reset wins");
    }
}
var WindowManager = new (function() {
    var windows = {};
    this.add = function(newWindow) {
        windows[newWindow.name] = newWindow;
        windows[newWindow.name].isOpen = false;
    };
    this.openWindow = function(windowName, ...args) {
        if (windows[windowName].isOpen === true) return;
        if (windows[windowName].beforeOpen !== undefined) windows[windowName].beforeOpen(...args);
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
    beforeOpen: function(isSingleplayer) {
        document.getElementById("donationhistory_note").style.display = ((settings.showBotDonations || /*getVarByName("dt")*/ isSingleplayer) ? "none" : "block");
    }
});
document.getElementById("canvasA").addEventListener("mousedown", WindowManager.closeAll);
document.getElementById("canvasA").addEventListener("touchstart", WindowManager.closeAll);
var settingsGearIcon = document.createElement('img');
settingsGearIcon.setAttribute('src', 'geari_white.png');

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
function displayDonationsHistory(playerID, playerNames, isSingleplayer) {
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
    WindowManager.openWindow("donationHistory", isSingleplayer);
}

var utils = new (function() {
    this.getMaxTroops = function(playerTerritories, playerID) { return playerTerritories[playerID]*150; };
    this.getDensity = function(playerBalances, playerTerritories, playerID) {
        return (Math.floor((playerBalances[playerID] / ((playerTerritories[playerID] === 0 ? 1 : playerTerritories[playerID]) * 150)) * 100) + "%");
    };
});

if (localStorage.getItem("fx_settings") !== null) {
    settings = {...settings, ...JSON.parse(localStorage.getItem("fx_settings"))};
}
//settingsManager.applySettings();

console.log('Successfully loaded FX Client');