const fx_version = '0.6.2.1'; // FX Client Version
const fx_update = 'Mar 10'; // FX Client Last Updated

if (localStorage.getItem("fx_winCount") == undefined || localStorage.getItem("fx_winCount") == null) {
    var wins_counter = 0;
    console.log('Couldn\'t find a saved win data. creating one...');
} else if (localStorage.getItem("fx_winCount") != undefined || localStorage.getItem("fx_winCount") != null) {
    var wins_counter = localStorage.getItem("fx_winCount");
}

const getVar = varName => window[dictionary[varName]];

// https://stackoverflow.com/a/6234804
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
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
    "displayWinCounter": true,
    "useFullscreenMode": false,
    "hideAllLinks": false,
    "realisticNames": false,
    "showPlayerDensity": true,
    "densityDisplayStyle": "percentage",
    //"customMapFileBtn": true
    "customBackgroundUrl": "",
    "attackPercentageKeybinds": [],
};
let makeMainMenuTransparent = false;
var settingsManager = new (function() {
    var inputFields = { // (includes select menus)
        fontName: document.getElementById("settings_fontname"),
        customBackgroundUrl: document.getElementById("settings_custombackgroundurl"),
        densityDisplayStyle: document.getElementById("settings_densityDisplayStyle")
    };
    var checkboxFields = {
        //showBotDonations: document.getElementById("settings_donations_bots"),
        hideAllLinks: document.getElementById("settings_hidealllinks"),
        realisticNames: document.getElementById("settings_realisticnames"),
        displayWinCounter: document.getElementById("settings_displaywincounter"),
        useFullscreenMode: document.getElementById("settings_usefullscreenmode"),
        showPlayerDensity: document.getElementById("settings_showPlayerDensity"),
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
        if (settings.useFullscreenMode && document.fullscreenEnabled) {
            function tryEnterFullscreen() {
                if (document.fullscreenElement !== null) return;
                document.documentElement.requestFullscreen({ navigationUI: "hide" })
                    .then(() => { console.log('Fullscreen mode activated'); })
                    .catch((error) => { console.warn('Could not enter fullscreen mode:', error); });
            }
            document.addEventListener('mousedown', tryEnterFullscreen, { once: true });
            document.addEventListener('click', tryEnterFullscreen, { once: true });
        }
        if (settings.customBackgroundUrl !== "") {
            document.body.style.backgroundImage = "url(" + settings.customBackgroundUrl + ")";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
        }
        makeMainMenuTransparent = settings.customBackgroundUrl !== "";
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
const openCustomBackgroundFilePicker = () => {
    const fileInput = document.getElementById("customBackgroundFileInput");
    fileInput.click();
    fileInput.addEventListener('change', handleFileSelect);
}
function handleFileSelect(event) {
    const fileInput = event.target;
    const selectedFile = fileInput.files[0];
    console.log(fileInput.files);
    console.log(fileInput.files[0]);
    if (selectedFile) {
        const fileUrl = URL.createObjectURL(selectedFile);
        console.log("File URL:", fileUrl);
        fileInput.value = "";
        fileInput.removeEventListener("change", handleFileSelect);
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
        if (windows[windowName].onClose !== undefined) windows[windowName].onClose();
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
    },
    onClose: function() { donationsTracker.openedWindowPlayerID = null; }
});
WindowManager.add({
    name: "playerList",
    element: document.getElementById("playerlist"),
    beforeOpen: function() {}
});
document.getElementById("canvasA").addEventListener("mousedown", WindowManager.closeAll);
document.getElementById("canvasA").addEventListener("touchstart", WindowManager.closeAll, { passive: true });
document.addEventListener("keydown", event => { if (event.key === "Escape") WindowManager.closeAll(); });
var settingsGearIcon = document.createElement('img');
settingsGearIcon.setAttribute('src', 'assets/geari_white.png');

const playerList = new (function () {
    const playersIcon = document.createElement('img');
    playersIcon.setAttribute('src', 'assets/players_icon.png');
    document.getElementById("playerlist_content").addEventListener("click", event => {
        const playerId = event.target.closest("tr[data-player-id]")?.getAttribute("data-player-id");
        if (!playerId) return;
        if (getVar("gIsTeamGame")) WindowManager.closeWindow("playerList"), donationsTracker.displayHistory(playerId);
    });
    this.display = function displayPlayerList(playerNames) {
        const gHumans = getVar("gHumans");
        const gLobbyMaxJoin = getVar("gLobbyMaxJoin");
        let listContent = `<h3>Players (${gHumans})</h3>`;
        for (let i = 0; i < gLobbyMaxJoin; i++) {
            if (i === gHumans) listContent += `<h3>Bots (${gLobbyMaxJoin - gHumans})</h3>`;
            listContent += `<tr data-player-id="${i}"><td><span class="color-light-gray">${i + 1}.</span> ${escapeHtml(playerNames[i])}</td></tr>`
        }
        document.getElementById("playerlist_content").innerHTML = listContent;
        document.getElementById("playerlist_content").setAttribute("class", getVar("gIsTeamGame") ? "clickable" : "");
        WindowManager.openWindow("playerList");
    }
    this.hoveringOverButton = false;
    this.drawButton = (canvas, x, y, size) => {
        canvas.fillRect(x, y, size, size);
        canvas.fillStyle = this.hoveringOverButton ? "#aaaaaaaa" : "#000000aa";
        canvas.clearRect(x + 1, y + 1, size - 2, size - 2);
        canvas.fillRect(x + 1, y + 1, size - 2, size - 2);
        canvas.fillStyle = "#ffffff";
        canvas.imageSmoothingEnabled = true;
        canvas.drawImage(playersIcon, x + 2, y + 2, size - 4, size - 4);
        canvas.imageSmoothingEnabled = false;
    }
});
var donationsTracker = new (function(){
    this.openedWindowPlayerID = null;
    this.contentElement = document.querySelector("#donationhistory_content");
    this.donationHistory = Array(512);
    // fill the array with empty arrays with length of 3
    //for (var i = 0; i < 512; i++) this.donationHistory.push([]); // not needed as .reset is called on game start
    this.getHistoryOf = function(playerID) {
        return this.donationHistory[playerID].toReversed();
    }
    this.reset = function() { for (var i = 0; i < 512; i++) this.donationHistory[i] = []; };
    this.logDonation = function(senderID, receiverID, amount) {
        const donationInfo = [senderID, receiverID, amount];
        this.donationHistory[receiverID].push(donationInfo);
        this.donationHistory[senderID].push(donationInfo);
        if (this.openedWindowPlayerID === senderID || this.openedWindowPlayerID === receiverID) {
            const indexOfNewItem = this.donationHistory[this.openedWindowPlayerID === senderID ? senderID : receiverID].length;
            this.contentElement.prepend(generateTableRowItem(donationInfo, indexOfNewItem, this.openedWindowPlayerID, true));
        }
    };
    function generateTableRowItem(historyItem, index, playerID, isNew) {
        const playerNames = getVar("playerNames");
        const row = document.createElement("tr");
        if (isNew) row.setAttribute("class", "new");
        let content = `<td><span class="color-light-gray">${index}.</span> `;
        if (playerID === historyItem[1])
            content += `Received <span class="color-green">${historyItem[2]}</span> resources from ${escapeHtml(playerNames[historyItem[0]])}`;
        else content += `Sent <span class="color-red">${historyItem[2]}</span> resources to ${escapeHtml(playerNames[historyItem[1]])}`;
        content += "</td>";
        row.innerHTML = content;
        return row;
    }
    this.displayHistory = function displayDonationsHistory(playerID, playerNames = getVar("playerNames"), isSingleplayer = getVar("gIsSingleplayer")) {
        var history = donationsTracker.getHistoryOf(playerID);
        console.log("History for " + playerNames[playerID] + ":");
        console.log(history);
        document.querySelector("#donationhistory h1").innerHTML = "Donation history for " + escapeHtml(playerNames[playerID]);
        this.contentElement.innerHTML = "";
        if (history.length > 0) history.forEach((historyItem, index) => {
            this.contentElement.appendChild(generateTableRowItem(historyItem, history.length - index, playerID));
        });
        else this.contentElement.innerText = "Nothing to display";
        this.openedWindowPlayerID = playerID;
        WindowManager.openWindow("donationHistory", isSingleplayer);
    }
});

var utils = new (function() {
    this.getMaxTroops = function(playerTerritories, playerID) { return (playerTerritories[playerID]*150).toString(); };
    this.getDensity = function(playerID, playerBalances = getVar("playerBalances"), playerTerritories = getVar("playerTerritories")) {
        if (settings.densityDisplayStyle === "percentage") return (((playerBalances[playerID] / ((playerTerritories[playerID] === 0 ? 1 : playerTerritories[playerID]) * 150)) * 100).toFixed(1) + "%");
        else return (playerBalances[playerID] / (playerTerritories[playerID] === 0 ? 1 : playerTerritories[playerID])).toFixed(1);
    };
    this.isPointInRectangle = function(x, y, rectangleStartX, rectangleStartY, width, height) {
        return x >= rectangleStartX && x <= rectangleStartX + width && y >= rectangleStartY && y <= rectangleStartY + height;
    };
    /** @param {CanvasRenderingContext2D} canvas @param {string} text */
    this.fillTextMultiline = function(canvas, text, x, y, maxWidth) {
        const lineHeight = parseInt(canvas.font.split(" ").find(part => part.endsWith("px")).slice(0, -2));
        text.split("\n").forEach((line, index) => canvas.fillText(line, x, y + index * lineHeight, maxWidth));
    }
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
settingsManager.applySettings();

console.log('Successfully loaded FX Client');