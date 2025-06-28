import WindowManager from "./windowManager.js";

const customLobbiesUnavailable = true;
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

WindowManager.add({
    name: "lobbyJoinMenu",
    element: document.getElementById("customLobbyJoinMenu")
})

if (customLobbiesUnavailable) {
    const window = WindowManager.create({
        name: "customLobbiesUnavailable",
        closeWithButton: true
    });
    window.innerHTML =  `<p>The latest version of FX Client doesn't support custom lobbies yet. Use the stable version at <a href="https://fxclient.github.io/custom-lobbies/">https://fxclient.github.io/custom-lobbies</a></p>`;
}

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
const playerListDiv = document.createElement("div");
playerListContainer.append(playerCount, playerListDiv);

const optionsContainer = document.createElement("div");
optionsContainer.className = "text-align-left";

const optionsStructure = {
    mode: {
        label: "Mode:", type: "selectMenu", options: [
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
        ]
    },
    map: { label: "Map:", type: "selectMenu" },
    difficulty: { label: "Difficulty:", type: "selectMenu", options: [
        { value: 0, label: "Very Easy (Default)" },
        { value: 1, label: "Easy (1v1)" },
        { value: 2, label: "Normal" },
        { value: 3, label: "Hard" },
        { value: 4, label: "Very Hard" },
        { value: 5, label: "Impossible" }
    ]},
    spawnSelection: { label: "Spawn selection", type: "checkbox" },
    botCount: { label: "Bot & player count:", type: "numberInput", attributes: { min: "1", max: "512" } }
}
const optionsElements = {};
const optionsValues = {};

function updateOption(option, value) {
    if (optionsStructure[option].type === "checkbox")
        optionsElements[option].checked = (value === 0 ? false : true);
    else optionsElements[option].value = value.toString();
    optionsValues[option] = value;
}
function inputUpdateHandler(key, e) {
    sendMessage("options", [key, parseInt(e.target.value)])
}
function checkboxUpdateHandler(key, e) {
    sendMessage("options", [key, e.target.checked ? 1 : 0])
}
Object.entries(optionsStructure).forEach(([key, item]) => {
    const label = document.createElement("label");
    if (item.tooltip) label.title = item.tooltip;
    const isValueInput = item.type.endsWith("Input");
    const element = document.createElement(
        isValueInput || item.type === "checkbox" ? "input"
            : item.type === "selectMenu" ? "select"
                : "button"
    );
    optionsElements[key] = element;
    if (item.type === "textInput") element.type = "text";
    if (item.type === "numberInput") element.type = "number";
    if (item.placeholder) element.placeholder = item.placeholder;
    if (isValueInput || item.type === "selectMenu")
        element.addEventListener("change", inputUpdateHandler.bind(undefined, key))
    if (item.text) element.innerText = item.text;
    if (item.action) element.addEventListener("click", item.action);
    if (item.label) label.append(item.label + " ");
    if (item.note) {
        const note = document.createElement("small");
        note.innerText = item.note;
        label.append(document.createElement("br"), note);
    }
    if (item.options) setSelectMenuOptions(item.options, element);
    if (item.attributes) Object.entries(item.attributes).forEach(
        ([name, value]) => element.setAttribute(name, value)
    );
    label.append(element);
    if (item.type === "checkbox") {
        element.type = "checkbox";
        const checkmark = document.createElement("span");
        checkmark.className = "checkmark";
        label.className = "checkbox";
        label.append(checkmark);
        //checkboxFields[item.for] = element;
        element.addEventListener("change", checkboxUpdateHandler.bind(undefined, key))
    } else label.append(document.createElement("br"));
    optionsContainer.append(label/*, document.createElement("br")*/);
});

function setMapInfo(maps) {
    setTimeout(() => setSelectMenuOptions(maps.map((info, index) => ({ value: index.toString(), label: info.name })), optionsElements["map"]), 0);
}

main.append(playerListContainer, optionsContainer);

const footer = document.createElement("footer");
footer.style.marginTop = "10px";

function createButton(text, action) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", action);
    return button;
}
const startButton = createButton("Start game", startGame);
const leaveButton = createButton("Leave lobby", () => leaveLobby());
const copyLinkButton = createButton("Copy link", () => {
    navigator.clipboard.writeText(`${window.location.href}#lobby=${currentCode}`);
    copyLinkButton.textContent = "Copied!";
    setTimeout(() => copyLinkButton.textContent = "Copy link", 1000);
});
footer.append(startButton, leaveButton, copyLinkButton);

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
    if (customLobbiesUnavailable)
        return WindowManager.openWindow("customLobbiesUnavailable");
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
        if (playerIsHost) optionsContainer.classList.remove("disabled");
        else optionsContainer.classList.add("disabled");
        Object.entries(data.options).forEach(([option, value]) => updateOption(option, value));
        displayPlayers(data.players, data.id);
    } else if (type === "addPlayer") {
        addPlayer({ name: data.name, inGame: false, isHost: false });
        updatePlayerCount();
    } else if (type === "removePlayer") {
        const index = data;
        playerList[index].element.remove();
        playerList.splice(index, 1);
        updatePlayerCount();
    } else if (type === "inLobby") {
        const index = data;
        playerList[index].inGame = false;
        playerList[index].inGameBadge.className = "d-none";
    } else if (type === "options") {
        const [option, value] = data;
        updateOption(option, value);
    } else if (type === "setHost") {
        const index = data;
        playerList[index].isHost = true;
        playerList[index].hostBadge.className = "";
    } else if (type === "host") {
        playerIsHost = true;
        startButton.disabled = false;
        optionsContainer.classList.remove("disabled");
        playerList.forEach(p => { if (!p.isHost) p.kickButton.className = "" });
    } else if (type === "serverMessage") alert(data);
    return true;
}

/** @typedef {{ element: HTMLDivElement, hostBadge: HTMLSpanElement, inGameBadge: HTMLSpanElement, kickButton: HTMLButtonElement, isHost: boolean, inGame: boolean }} PlayerListEntry */

/** @type {PlayerListEntry[]} */
let playerList = [];
/** @type {PlayerListEntry} */
let thisPlayer;

function createBadge(text, visible) {
    const badge = document.createElement("span");
    badge.textContent = text;
    badge.className = visible ? "" : "d-none";
    return badge;
}
/** @typedef {{ name: string, isHost: boolean, inGame: boolean }} PlayerInfo */
/** @param {PlayerInfo} player */
function addPlayer(player) {
    const div = document.createElement("div");
    div.className = "lobby-player";
    div.textContent = player.name;
    const kickButton = document.createElement("button");
    kickButton.textContent = "Kick";
    kickButton.className = playerIsHost && !player.isHost ? "" : "d-none";
    kickButton.addEventListener("click", kickButtonHandler);
    const hostBadge = createBadge("Host", player.isHost);
    const inGameBadge = createBadge("In Game", player.inGame);
    div.append(hostBadge, inGameBadge, kickButton);
    playerListDiv.append(div);
    playerList.push({ element: div, hostBadge, inGameBadge, kickButton, isHost: player.isHost, inGame: player.inGame });
}
function kickButtonHandler(event) {
    const button = event.target;
    for (let index = 0; index < playerList.length; index++) {
        if (playerList[index].kickButton === button) {
            sendMessage("kick", index);
            break;
        }
    }
}
/** @param {PlayerInfo[]} players */
function displayPlayers(players, thisPlayerId) {
    playerList = [];
    playerListDiv.innerHTML = "";
    players.forEach(addPlayer);
    thisPlayer = playerList[thisPlayerId];
    updatePlayerCount();
}
function updatePlayerCount() {
    playerCount.textContent = `${playerList.length} Player${playerList.length === 1 ? "" : "s"}`
}

function getSocketURL() {
    return socketURL + (currentCode === "" ? "create" : "join?" + currentCode)
}
function getPlayerId() {
    let id = 0;
    for (let i = 0; i < playerList.length; i++) {
        const player = playerList[i];
        if (player === thisPlayer) return id;
        if (player.inGame === false) id++;
    }
}
function startGame() {
    WindowManager.closeWindow("customLobby");
    sendMessage("startGame");
}
function rejoinLobby() {
    joinLobby();
}
function checkForLobbyLink(isHashChangeEvent) {
    const hash = window.location.hash;
    if (hash.startsWith("#lobby=")) {
        if (customLobbiesUnavailable) return WindowManager.openWindow("customLobbiesUnavailable");
        // in case the player is already in a lobby
        if (isHashChangeEvent) leaveLobby();
        currentCode = hash.slice(7);
        isActive = true;
        joinLobby();
    }
}
window.addEventListener("hashchange", () => checkForLobbyLink(true));

function setJoinFunction(f) {
    joinLobby = f;
    setTimeout(checkForLobbyLink, 0);
}
function setLeaveFunction(f) { leaveLobby = f; }
function setSendFunction(f) { sendRaw = f; }
function setActive(active) {
    isActive = active;
    if (active === false) WindowManager.closeWindow("customLobby");
}
function hideWindow() {
    WindowManager.closeWindow("customLobby");
}
const gameInterface = { gameInfo: optionsValues, showJoinPrompt, isCustomMessage, getSocketURL, getPlayerId, setJoinFunction, setLeaveFunction, setSendFunction, setMapInfo, rejoinLobby, hideWindow, isActive: () => isActive, setActive }

const customLobby = gameInterface
export default customLobby