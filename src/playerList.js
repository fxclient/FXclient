import { getVar } from "./gameInterface.js";
import { escapeHtml } from "./utils.js";
import donationsTracker from "./donationsTracker.js";
import WindowManager from "./windowManager.js";

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
WindowManager.add({
    name: "playerList",
    element: document.getElementById("playerlist")
});

export default playerList