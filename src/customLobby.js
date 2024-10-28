import WindowManager from "./windowManager.js";

//const socketURL = "ws://localhost:8080/";
const socketURL = "wss://fx.peshomir.workers.dev/";
const customMessageMarker = 120;
let isActive = false;
let currentCode = "";
let joinLobby = () => { };
let leaveLobby = () => { };
let sendRaw = (socketId, data) => { };
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
/*const gameInfo = {
    botCount: 512
}*/

WindowManager.add({
    name: "lobbyJoinMenu",
    element: document.getElementById("customLobbyJoinMenu")
})
const windowElement = WindowManager.create({
    name: "customLobby",
    classes: "scrollable selectable flex-column text-align-center",
    closable: false
});

const header = document.createElement("h2");
header.textContent = "Custom Lobby";

const main = document.createElement("div");
main.className = "customlobby-main";

const playerListContainer = document.createElement("div");
const playerCount = document.createElement("p");
playerCount.textContent = "0 Players";
const playerList = document.createElement("div");
playerListContainer.append(playerCount, playerList);

// todo: convert the options into something similar to the automatic settings generator
const optionsContainer = document.createElement("div");
const gameModeSelectMenu = document.createElement("select");
setSelectMenuOptions([
    { value: 0, label: "2 Teams" },
    { value: 1, label: "3 Teams" },
    { value: 2, label: "4 Teams" },
    { value: 3, label: "5 Teams" },
    { value: 4, label: "6 Teams" },
    { value: 5, label: "7 Teams" },
    { value: 6, label: "8 Teams" },
    { value: 7, label: "Battle Royale" },
    { value: 10, label: "No Fullsend Battle Royale" },
    { value: 9, label: "Zombie mode" }
], gameModeSelectMenu);
gameModeSelectMenu.value = "7";
const mapSelectMenu = document.createElement("select");
function setMapInfo(maps) {
    setTimeout(() => setSelectMenuOptions(maps.map((info, index) => ({ value: index.toString(), label: info.name })), mapSelectMenu), 0);
}
gameModeSelectMenu.addEventListener("change", e => sendMessage("options", ["mode", parseInt(e.target.value)]));
mapSelectMenu.addEventListener("change", e => sendMessage("options", ["map", parseInt(e.target.value)]));
/*const botCountInput = document.createElement("input");
botCountInput.setAttribute("type", "number");
botCountInput.setAttribute("min", "0");
botCountInput.setAttribute("max", "512");
botCountInput.value = "512";*/
optionsContainer.append(
    "Mode: ", gameModeSelectMenu, document.createElement("br"),
    "Map: ", mapSelectMenu, document.createElement("br"),
    //"Bot count: "
);

main.append(playerListContainer, optionsContainer);

const footer = document.createElement("footer");
footer.style.marginTop = "10px";
const startButton = document.createElement("button");
const leaveButton = document.createElement("button");
startButton.textContent = "Start game";
leaveButton.textContent = "Leave lobby";
startButton.addEventListener("click", startGame);
leaveButton.addEventListener("click", () => leaveLobby());
footer.append(startButton, leaveButton);

windowElement.append(header, main, footer);

/** @param {HTMLSelectElement} element  */
function setSelectMenuOptions(options, element) {
    options.forEach(data => {
        const option = document.createElement("option");
        option.setAttribute("value", data.value);
        option.textContent = data.label;
        element.append(option);
    })
}

function showJoinPrompt() {
    WindowManager.openWindow("lobbyJoinMenu");
}
document.getElementById("lobbyCode").addEventListener("input", ({ target: input }) => {
    if (input.value.length !== 5) return;
    currentCode = input.value.toLowerCase();
    input.value = "";
    WindowManager.closeWindow("lobbyJoinMenu");
    isActive = true;
    joinLobby();
});
document.getElementById("createLobbyButton").addEventListener("click", () => {
    currentCode = "";
    WindowManager.closeWindow("lobbyJoinMenu");
    isActive = true;
    joinLobby();
});

function sendMessage(type, data) {
    const message = data !== undefined ? { t: type, d: data } : { t: type }
    const originalArray = textEncoder.encode(JSON.stringify(message));
    const buffer = new ArrayBuffer(originalArray.length + 1);
    const view = new DataView(buffer);
    // Set the first byte to the custom message marker
    view.setUint8(0, customMessageMarker);
    // Copy the original array starting from the second byte
    const uint8ArrayView = new Uint8Array(buffer, 1);
    uint8ArrayView.set(originalArray);
    sendRaw(1, buffer);
}
let playerIsHost = false;
/** @param {Uint8Array} raw */
function isCustomMessage(raw) {
    if (raw[0] !== customMessageMarker) return false;
    if (raw.length === 1) return true; // ping
    const subArray = new Uint8Array(raw.buffer, 1);
    const message = JSON.parse(textDecoder.decode(subArray));
    const { t: type, d: data } = message;
    if (type === "lobby") {
        WindowManager.openWindow("customLobby");
        header.textContent = "Custom Lobby " + data.code;
        currentCode = data.code;
        playerIsHost = data.isHost;
        startButton.disabled = !playerIsHost;
        optionsContainer.className = playerIsHost ? "" : "disabled";
        gameModeSelectMenu.value = data.options.mode.toString();
        mapSelectMenu.value = data.options.map.toString();
        displayPlayers(data.players);
    } else if (type === "addPlayer") {
        addPlayer(data);
        updatePlayerCount();
    } else if (type === "removePlayer") {
        const index = data;
        playerElements[index].element.remove();
        playerElements.splice(index, 1);
        updatePlayerCount();
    } else if (type === "options") {
        console.log(data);
        const [option, value] = data;
        if (option === "mode") gameModeSelectMenu.value = value.toString();
        else if (option === "map") mapSelectMenu.value = value.toString();
    } else if (type === "setHost") {
        const index = data;
        playerElements[index].isHost = true;
        playerElements[index].hostBadge.className = "";
    } else if (type === "host") {
        playerIsHost = true;
        startButton.disabled = false;
        optionsContainer.className = "";
        playerElements.forEach(p => { if (!p.isHost) p.kickButton.className = "" });
    }
    return true;
}
/** @type {{ element: HTMLDivElement, hostBadge: HTMLSpanElement, kickButton: HTMLButtonElement, isHost: boolean }[]} */
let playerElements = [];
/** @param {{ name: string, isHost: boolean }} player */
function addPlayer(player) {
    const div = document.createElement("div");
    div.className = "lobby-player";
    div.textContent = player.name;
    const kickButton = document.createElement("button");
    kickButton.textContent = "Kick";
    kickButton.className = playerIsHost && !player.isHost ? "" : "d-none";
    kickButton.addEventListener("click", kickButtonHandler);
    const badge = document.createElement("span");
    badge.textContent = "Host";
    badge.className = player.isHost ? "" : "d-none";
    div.append(badge, kickButton);
    playerList.append(div);
    playerElements.push({ element: div, hostBadge: badge, kickButton, isHost: player.isHost });
}
function kickButtonHandler(event) {
    const button = event.target;
    for (let index = 0; index < playerElements.length; index++) {
        if (playerElements[index].kickButton === button) sendMessage("kick", index);
    }
}
/** @param {{ name: string, isHost: boolean }[]} players */
function displayPlayers(players) {
    playerElements = [];
    playerList.innerHTML = "";
    players.forEach(addPlayer);
    updatePlayerCount();
}
function updatePlayerCount() {
    playerCount.textContent = `${playerElements.length} Player${playerElements.length === 1 ? "" : "s"}`
}

function getSocketURL() {
    return socketURL + (currentCode === "" ? "create" : "join?" + currentCode)
}
function startGame() {
    WindowManager.closeWindow("customLobby");
    sendMessage("startGame" /*{ mode: gameModeSelectMenu.value, map: mapSelectMenu.value }*/);
}


function setJoinFunction(f) { joinLobby = f; }
function setLeaveFunction(f) { leaveLobby = f; }
function setSendFunction(f) { sendRaw = f; }
function setActive(active) {
    isActive = active;
    if (active === false) WindowManager.closeWindow("customLobby");
}
const gameInterface = { showJoinPrompt, isCustomMessage, getSocketURL, setJoinFunction, setLeaveFunction, setSendFunction, setMapInfo, isActive: () => isActive, setActive }

const customLobby = gameInterface
export default customLobby