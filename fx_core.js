const fx_version = '0.6.1.1'; // FX Client Version
const fx_update = 'Feb 22'; // FX Client Last Updated

if (localStorage.getItem("fx_winCount") == undefined || localStorage.getItem("fx_winCount") == null) {
    var wins_counter = 0;
    console.log('Couldn\'t find a saved win data. creating one...');
} else if (localStorage.getItem("fx_winCount") != undefined || localStorage.getItem("fx_winCount") != null) {
    var wins_counter = localStorage.getItem("fx_winCount");
}

function KeybindsInput(containerElement) {
    this.container = containerElement;
    this.keys = [ "key", "type", "value" ];
    this.objectArray = [];
    this.addObject = function () {
        this.objectArray.push({ key: "", type: "absolute", value: 1 });
        this.displayObjects();
    };
    document.getElementById("keybindAddButton").addEventListener("click", this.addObject.bind(this));
    this.displayObjects = function () {
        // Clear the content of the container
        this.container.innerHTML = "";
        if (this.objectArray.length === 0) return this.container.innerText = "No custom attack percentage keybinds added";
        // Loop through the array and display input fields for each object
        for (var i = 0; i < this.objectArray.length; i++) {
            var objectDiv = document.createElement("div");
            // Create input fields for each key
            this.keys.forEach(function (key) {
                let inputField = document.createElement(key === "type" ? "select" : "input");
                if (key === "type") {
                    inputField.innerHTML = '<option value="absolute">Absolute</option><option value="relative">Relative</option>';
                    inputField.addEventListener("change", this.updateObject.bind(this, i, key));
                } else if (key === "key") {
                    inputField.type = "text";
                    inputField.setAttribute("readonly", "");
                    inputField.setAttribute("placeholder", "No key set");
                    inputField.addEventListener("click", this.startKeyInput.bind(this, i, key));
                } else { // key === "value"
                    inputField.type = "number";
                    inputField.setAttribute("step", "0.1");
                    inputField.addEventListener("input", this.updateObject.bind(this, i, key));
                }
                inputField.value = this.objectArray[i][key];
                // Append input field to the object div
                objectDiv.appendChild(inputField);
            }, this);
            // Button to delete the object
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", this.deleteObject.bind(this, i));
            // Append delete button to the object div
            objectDiv.appendChild(deleteButton);
            // Append the object div to the container
            this.container.appendChild(objectDiv);
        }
    };
    /** @param {PointerEvent} event */
    this.startKeyInput = function (index, property, event) {
        event.target.value = "Press any key";
        const handler = this.updateObject.bind(this, index, property);
        event.target.addEventListener('keydown', handler, { once: true });
        event.target.addEventListener("blur", () => {
            event.target.removeEventListener('keydown', handler, { once: true });
            event.target.value = this.objectArray[index][property];
            //this.displayObjects();
        }, { once: true });
    };
    this.updateObject = function (index, property, event) {
        if (index >= this.objectArray.length) return;
        // Update the corresponding property of the object in the array
        const value = property === "value" ? parseFloat(event.target.value) : property === "key" ? event.key : event.target.value;
        this.objectArray[index][property] = value;
        if (property === "key") this.displayObjects();
    };
    this.deleteObject = function (index) {
        // Remove the object from the array
        this.objectArray.splice(index, 1);
        // Display the updated input fields for objects
        this.displayObjects();
    };
    return this;
}

var settings = {
    "fontName": "Trebuchet MS",
    "showBotDonations": false,
    "hideAllLinks": false,
    "realisticNames": false,
    //"customMapFileBtn": true
    "attackPercentageKeybinds": [],
};
var settingsManager = new (function() {
    var inputFields = {
        fontName: document.getElementById("settings_fontname")
    };
    var checkboxFields = {
        //showBotDonations: document.getElementById("settings_donations_bots"),
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
    let keybindsInput = new KeybindsInput(document.getElementById("keybinds"));
    this.syncFields = function() {
        Object.keys(inputFields).forEach(function(key) { inputFields[key].value = settings[key]; });
        Object.keys(checkboxFields).forEach(function(key) { checkboxFields[key].checked = settings[key]; });
        keybindsInput.objectArray = settings.attackPercentageKeybinds;
        keybindsInput.displayObjects();
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
        document.getElementById("donationhistory_note").style.display = ((true || settings.showBotDonations || /*getVarByName("dt")*/ isSingleplayer) ? "none" : "block");
    }
});
document.getElementById("canvasA").addEventListener("mousedown", WindowManager.closeAll);
document.getElementById("canvasA").addEventListener("touchstart", WindowManager.closeAll);
var settingsGearIcon = document.createElement('img');
settingsGearIcon.setAttribute('src', 'geari_white.png');

var donationsTracker = new (function(){
    this.donationHistory = Array(512);
    // fill the array with empty arrays with length of 3
    //for (var i = 0; i < 512; i++) this.donationHistory.push([]); // not needed as .reset is called on game start
    // from inside of game:
    // ((!gE[g].startsWith("[Bot] ") || settings.showBotDonations) && donationsTracker.logDonation(g,k,x))
    this.logDonation = function(senderID, receiverID, amount) {
        const donationInfo = [senderID, receiverID, amount];
        this.donationHistory[receiverID].push(donationInfo);
        this.donationHistory[senderID].push(donationInfo);
    };
    this.getRecipientHistoryOf = function(playerID) {
        return this.donationHistory[playerID];
    };
    this.reset = function() { for (var i = 0; i < 512; i++) this.donationHistory[i] = []; };
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
        historyText += `<span class="color-light-gray">${(history.length - index)}.</span> `;
        if (playerID === historyItem[1])
            historyText += `Received <span class="color-green">${historyItem[2]}</span> resources from ${playerNames[historyItem[0]]}<br>`;
        else historyText += `Sent <span class="color-red">${historyItem[2]}</span> resources to ${playerNames[historyItem[1]]}<br>`;
    });
    else historyText = "Nothing to display";
    document.querySelector("#donationhistory p#donationhistory_text").innerHTML = historyText;
    WindowManager.openWindow("donationHistory", isSingleplayer);
}

var utils = new (function() {
    this.getMaxTroops = function(playerTerritories, playerID) { return (playerTerritories[playerID]*150).toString(); };
    this.getDensity = function(playerBalances, playerTerritories, playerID) {
        return (Math.floor((playerBalances[playerID] / ((playerTerritories[playerID] === 0 ? 1 : playerTerritories[playerID]) * 150)) * 100) + "%");
    };
});

const keybindFunctions = { setAbsolute: () => {}, setRelative: () => {} };
const keybindHandler = key => {
    const keybindData = settings.attackPercentageKeybinds.find(keybind => keybind.key === key);
    if (keybindData === undefined) return false;
    if (keybindData.type === "absolute") keybindFunctions.setAbsolute(keybindData.value);
    else keybindFunctions.setRelative(keybindData.value);
    return true;
};

if (localStorage.getItem("fx_settings") !== null) {
    settings = {...settings, ...JSON.parse(localStorage.getItem("fx_settings"))};
}
//settingsManager.applySettings();

console.log('Successfully loaded FX Client');