const fx_version = '0.6.5.5'; // FX Client Version
const fx_update = 'Aug 26'; // FX Client Last Updated

if (localStorage.getItem("fx_winCount") == undefined || localStorage.getItem("fx_winCount") == null) {
    var wins_counter = 0;
    console.log('Couldn\'t find a saved win data. creating one...');
} else if (localStorage.getItem("fx_winCount") != undefined || localStorage.getItem("fx_winCount") != null) {
    var wins_counter = localStorage.getItem("fx_winCount");
}

const playerDataProperties = ["playerTerritories", "playerBalances", "rawPlayerNames"];
const gameObjectProperties = ["playerId", "gIsTeamGame", "gHumans", "gLobbyMaxJoin", "gameState", "gIsSingleplayer"];
const getVar = varName => {
    if (playerDataProperties.includes(varName)) return window[dictionary.playerData][dictionary[varName]];
    if (gameObjectProperties.includes(varName)) return window[dictionary.game][dictionary[varName]];
    return window[dictionary[varName]]
};

// https://stackoverflow.com/a/6234804
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function KeybindsInput(containerElement) {
    const header = document.createElement("p");
    header.innerText = "Attack Percentage Keybinds";
    const keybindContainer = document.createElement("div");
    keybindContainer.className = "arrayinput";
    const keybindAddButton = document.createElement("button");
    keybindAddButton.innerText = "Add";
    containerElement.append(header, keybindContainer, keybindAddButton);
    this.container = keybindContainer;
    this.keys = [ "key", "type", "value" ];
    this.objectArray = [];
    this.addObject = function () {
        this.objectArray.push({ key: "", type: "absolute", value: 0.8 });
        this.displayObjects();
        keybindAddButton.scrollIntoView(false);
    };
    this.update = function () {
        this.objectArray = settings.attackPercentageKeybinds;
        this.displayObjects();
    }
    keybindAddButton.addEventListener("click", this.addObject.bind(this));
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
                    const isAbsolute = this.objectArray[i].type === "absolute";
                    inputField.type = isAbsolute ? "text" : "number";
                    if (isAbsolute) inputField.addEventListener("click", this.convertIntoNumberInput.bind(this, i, key), { once: true });
                    else inputField.setAttribute("step", "0.1");
                    inputField.addEventListener("input", this.updateObject.bind(this, i, key));
                }
                if (key === "value" && this.objectArray[i].type === "absolute")
                    inputField.value = this.objectArray[i][key] * 100 + "%";
                else inputField.value = this.objectArray[i][key];
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
    /** @param {PointerEvent} event */
    this.convertIntoNumberInput = function (index, property, event) {
        event.target.value = event.target.value.slice(0, -1);
        event.target.type = "number";
        event.target.addEventListener("blur", () => {
            //event.target.value = this.objectArray[index][property];
            this.displayObjects();
        }, { once: true });
    };
    this.updateObject = function (index, property, event) {
        if (index >= this.objectArray.length) return;
        // Update the corresponding property of the object in the array
        const value = property === "value" ? (
            this.objectArray[index].type === "absolute" ? parseFloat(event.target.value) / 100 : parseFloat(event.target.value)
        ) : property === "key" ? event.key : event.target.value;
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
    //"fontName": "Trebuchet MS",
    //"showBotDonations": false,
    "displayWinCounter": true,
    "useFullscreenMode": false,
    "hoveringTooltip": true,
    //"hideAllLinks": false,
    "realisticNames": false,
    "showPlayerDensity": true,
    "coloredDensity": true,
    "densityDisplayStyle": "percentage",
    "highlightClanSpawns": false,
    //"customMapFileBtn": true
    "customBackgroundUrl": "",
    "attackPercentageKeybinds": [],
};
const discontinuedSettings = [ "hideAllLinks", "fontName" ];
let makeMainMenuTransparent = false;
var settingsManager = new (function() {
    const settingsStructure = [
        { for: "displayWinCounter", type: "checkbox", label: "Display win counter",
            note: "The win counter tracks multiplayer solo wins (not in team games)" },
        { type: "button", text: "Reset win counter", action: removeWins },
        { for: "useFullscreenMode", type: "checkbox", label: "Use fullscreen mode",
        note: "Note: fullscreen mode will trigger after you click anywhere on the page due to browser policy restrictions." },
        { for: "hoveringTooltip", type: "checkbox", label: "Hovering tooltip",
        note: "Display map territory info constantly (on mouse hover) instead of only when right clicking on the map" },
        //{ for: "hideAllLinks", type: "checkbox", label: "Hide Links option also hides app store links" },
        { for: "realisticNames", type: "checkbox", label: "Realistic Bot Names" },
        { for: "showPlayerDensity", type: "checkbox", label: "Show player density" },
        { for: "coloredDensity", type: "checkbox", label: "Colored density", note: "Display the density with a color between red and green depending on the density value" },
        { for: "densityDisplayStyle", type: "selectMenu", label: "Density value display style:", tooltip: "Controls how the territorial density value should be rendered", options: [
            { value: "percentage", label: "Percentage" },
            { value: "absoluteQuotient", label: "Value from 0 to 150 (BetterTT style)" }
        ]},
        { for: "highlightClanSpawns", type: "checkbox", label: "Highlight clan spawnpoints",
            note: "Increases the spawnpoint glow size for members of your clan" },
        { for: "customBackgroundUrl", type: "textInput", label: "Custom main menu background:", placeholder: "Enter an image URL here", tooltip: "A custom image to be shown as the main menu background instead of the currently selected map." },
        KeybindsInput
    ];
    const settingsContainer = document.querySelector(".settings .scrollable");
    var inputFields = {}; // (includes select menus)
    var checkboxFields = {};
    var customElements = [];
    settingsStructure.forEach(item => {
        if (typeof item === "function") {
            const container = document.createElement("div");
            customElements.push(new item(container));
            return settingsContainer.append(container);
        }
        const label = document.createElement("label");
        if (item.tooltip) label.title = item.tooltip;
        const isValueInput = item.type.endsWith("Input");
        const element = document.createElement(isValueInput || item.type === "checkbox" ? "input" : item.type === "selectMenu" ? "select" : "button");
        if (item.type === "textInput") element.type = "text";
        if (item.placeholder) element.placeholder = item.placeholder;
        if (isValueInput || item.type === "selectMenu") inputFields[item.for] = element;
        if (item.text) element.innerText = item.text;
        if (item.action) element.addEventListener("click", item.action);
        if (item.label) label.append(item.label + " ");
        if (item.note) {
            const note = document.createElement("small");
            note.innerText = item.note;
            label.append(document.createElement("br"), note)
        }
        if (item.options) item.options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.setAttribute("value", option.value);
            optionElement.innerText = option.label;
            element.append(optionElement);
        });
        label.append(element);
        if (item.type === "checkbox") {
            element.type = "checkbox";
            const checkmark = document.createElement("span");
            checkmark.className = "checkmark";
            label.className = "checkbox";
            label.append(checkmark);
            checkboxFields[item.for] = element;
        } else label.append(document.createElement("br"));
        settingsContainer.append(label, document.createElement("br"));
    });
    this.save = function() {
        Object.keys(inputFields).forEach(function(key) { settings[key] = inputFields[key].value.trim(); });
        Object.keys(checkboxFields).forEach(function(key) { settings[key] = checkboxFields[key].checked; });
        this.applySettings();
        WindowManager.closeWindow("settings");
        discontinuedSettings.forEach(settingName => delete settings[settingName]);
        localStorage.setItem("fx_settings", JSON.stringify(settings));
        // should probably firgure out a way to do this without reloading - // You can't do it, localstorages REQUIRE you to reload
        window.location.reload();
    };

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    function handleFileSelect(event) {
        const input = event.target;
        /** @type {File} */
        const selectedFile = input.files[0];
        if (!selectedFile) return;

        input.removeEventListener("change", handleFileSelect);
        input.value = "";
        if (!selectedFile.name.endsWith(".json")) return alert("Invalid file format");
        const fileReader = new FileReader();
        fileReader.onload = function() {
            let result;
            try {    
                result = JSON.parse(fileReader.result);
                if (confirm("Warning: This will override all current settings, click \"OK\" to confirm")) settings = result;
                localStorage.setItem("fx_settings", JSON.stringify(settings));
                window.location.reload();
            } catch (error) {
                alert("Error\n" + error)
            }
        }
        fileReader.readAsText(selectedFile);
    }
    this.importFromFile = function() {
        fileInput.click();
        fileInput.addEventListener('change', handleFileSelect);
    };
    // https://stackoverflow.com/a/34156339
    function saveFile(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(a.href);
    }
    this.exportToFile = function() {
        saveFile(JSON.stringify(settings), 'FX_client_settings.json', 'application/json');
    };

    this.syncFields = function() {
        Object.keys(inputFields).forEach(function(key) { inputFields[key].value = settings[key]; });
        Object.keys(checkboxFields).forEach(function(key) { checkboxFields[key].checked = settings[key]; });
        customElements.forEach(element => element.update());
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

const leaderboardFilter = new (function() {
    //this.playersToInclude = [0,1,8,20,24,30,32,42,50,69,200,400,500,510,511]; // for testing
    this.playersToInclude = [];
    this.tabLabels = ["ALL", "CLAN"];
    // these get populated by the modified game code
    this.filteredLeaderboard = [];
    this.tabBarOffset = 0;
    this.windowWidth = 0;
    this.verticalClickThreshold = 1000;
    this.hoveringOverTabs = false;
    this.scrollToTop = () => {};
    this.repaintLeaderboard = () => {};
    this.setUpdateFlag = () => {};
    this.parseClanFromPlayerName = () => { console.warn("parse function not set"); };
    
    this.selectedTab = 0;
    this.tabHovering = -1;
    this.enabled = false;
    //this.enabled = true;
    this.drawTabs = function(canvas, totalWidth, verticalOffset, colorForSelectedTab) {
        canvas.textBaseline = "middle";
        canvas.textAlign = "center";
        const tabWidth = totalWidth / this.tabLabels.length;
        const textOffsetY = verticalOffset + this.tabBarOffset / 2;
        //console.log(verticalOffset, this.tabBarOffset, textOffsetY);
        this.tabLabels.forEach((label, index) => {
            if (index !== 0) canvas.fillRect(tabWidth * index, verticalOffset, 1, this.tabBarOffset);
            if (this.selectedTab === index) {
                canvas.fillStyle = colorForSelectedTab;
                canvas.fillRect(tabWidth * index, verticalOffset, tabWidth, this.tabBarOffset);
                canvas.fillStyle = "rgb(255,255,255)";
            }
            if (this.tabHovering === index) {
                canvas.fillStyle = "rgba(255,255,255,0.3)";
                canvas.fillRect(tabWidth * index, verticalOffset, tabWidth, this.tabBarOffset);
                canvas.fillStyle = "rgb(255,255,255)";
            }
            canvas.fillText(label, tabWidth * index + tabWidth / 2, textOffsetY);
        });
    }
    this.setHovering = (isHovering, xRelative) => {
        let repaintNeeded = false;
        if (isHovering) {
            const tab = Math.floor(xRelative / (this.windowWidth / this.tabLabels.length));
            if (this.tabHovering !== tab) {
                this.tabHovering = tab;
                repaintNeeded = true;
            }
        }
        if (isHovering !== this.hoveringOverTabs) {
            this.hoveringOverTabs = isHovering;
            if (isHovering === false) this.tabHovering = -1;
            if (!isHovering) repaintNeeded = true;
        }
        if (repaintNeeded) this.repaintLeaderboard();
        return isHovering;
    }
    this.handleMouseDown = (xRelative) => {
        const tab = Math.floor(xRelative / (this.windowWidth / this.tabLabels.length));
        if (this.selectedTab !== tab) {
            this.selectedTab = tab;
            if (this.selectedTab === 0) this.clearFilter();
            else if (this.selectedTab === 1) {
                this.filterByOwnClan();
                this.setUpdateFlag();
            }
            this.repaintLeaderboard();
        }
        return true;
    };
    this.filterByOwnClan = () => {
        this.playersToInclude = [];
        const playerId = getVar("playerId");
        const ownClan = this.parseClanFromPlayerName(getVar("rawPlayerNames")[playerId]);
        getVar("rawPlayerNames").forEach((name, id) => {
            if (id === playerId || this.parseClanFromPlayerName(name) === ownClan) this.playersToInclude.push(id);
        });
        this.enabled = true;
        this.scrollToTop();
    };
    this.clearFilter = () => { this.enabled = false; }
    this.reset = () => {
        this.enabled = false;
        this.selectedTab = 0;
        clanFilter.refresh();
    }
});

const clanFilter = new (function() {
    this.inOwnClan = new Array(512);
    this.inOwnClan.fill(false);
    this.refresh = () => {
        const gHumans = getVar("gHumans");
        const ownClan = leaderboardFilter.parseClanFromPlayerName(getVar("rawPlayerNames")[getVar("playerId")]);
        if (ownClan === null) this.inOwnClan.fill(false);
        else getVar("rawPlayerNames").forEach((name, id) => {
            this.inOwnClan[id] = id < gHumans && leaderboardFilter.parseClanFromPlayerName(name) === ownClan;
        });
    }
});

const hoveringTooltip = new (function() {
    let recentlyShown = false;
    this.display = () => {}; // this gets populated by the modified game script
    this.canvasPixelScale = 1;
    function handler(e) {
        if (!settings.hoveringTooltip || !getVar("gameState") || recentlyShown) return;
        let x, y;
        // https://stackoverflow.com/a/61732450
        if (e.type.includes(`touch`)) {
            const { touches, changedTouches } = e.originalEvent ?? e;
            const touch = touches[0] ?? changedTouches[0];
            x = touch.pageX;
            y = touch.pageY;
        } else if (e.type.includes(`mouse`)) {
            x = e.clientX;
            y = e.clientY;
        }

        recentlyShown = true;
        try {
            this.display(this.canvasPixelScale * x, this.canvasPixelScale * y);
        } catch (e) { console.error(e) }
        // for better performance, reduce the tooltip display frequency to no more than once every 100 ms
        setTimeout(() => recentlyShown = false, 100);
    }
    document.getElementById("canvasA").addEventListener("mousemove", handler.bind(this));
    document.getElementById("canvasA").addEventListener("touchstart", handler.bind(this));
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
        const rawPlayerNames = getVar("rawPlayerNames");
        const row = document.createElement("tr");
        if (isNew) row.setAttribute("class", "new");
        let content = `<td><span class="color-light-gray">${index}.</span> `;
        if (playerID === historyItem[1])
            content += `Received <span class="color-green">${historyItem[2]}</span> resources from ${escapeHtml(rawPlayerNames[historyItem[0]])}`;
        else content += `Sent <span class="color-red">${historyItem[2]}</span> resources to ${escapeHtml(rawPlayerNames[historyItem[1]])}`;
        content += "</td>";
        row.innerHTML = content;
        return row;
    }
    this.displayHistory = function displayDonationsHistory(playerID, playerNames = getVar("rawPlayerNames"), isSingleplayer = getVar("gIsSingleplayer")) {
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
    this.textStyleBasedOnDensity = function(playerID) {
        const playerBalances = getVar("playerBalances"), playerTerritories = getVar("playerTerritories");
        return `hsl(${playerBalances[playerID] / (playerTerritories[playerID] * 1.5)}, 100%, 50%, 1)`;
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