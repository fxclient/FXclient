import { getVar } from "./gameInterface.js";
import { escapeHtml } from "./utils.js";
import donationsTracker from "./donationsTracker.js";
import WindowManager from "./windowManager.js";

const playerList = new (function () {
    const playersIcon = document.createElement('img');
    playersIcon.setAttribute('src', 'assets/players_icon.png');
    const playerListContent = document.getElementById("playerlist_content");
    const playerListSummary = document.getElementById("playerlist_summary");
    const playerListSearch = document.getElementById("playerlist_search");
    const playerListSort = document.getElementById("playerlist_sort");
    let players = [];
    let humanCount = 0;

    playerListContent.addEventListener("click", event => {
        const playerId = event.target.closest("tr[data-player-id]")?.getAttribute("data-player-id");
        if (!playerId) return;
        if (getVar("gIsTeamGame")) WindowManager.closeWindow("playerList"), donationsTracker.displayHistory(playerId);
    });

    const render = () => {
        const search = playerListSearch.value.trim().toLocaleLowerCase();
        const sort = playerListSort.value;
        const filteredPlayers = players
            .filter(player => player.name.toLocaleLowerCase().includes(search))
            .sort((a, b) => sort === "name"
                ? a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
                : a.id - b.id);

        const humans = filteredPlayers.filter(player => !player.isBot);
        const bots = filteredPlayers.filter(player => player.isBot);
        let listContent = "";

        const renderGroup = (title, group) => {
            if (group.length === 0) return;
            listContent += `<tr class="playerlist-section"><th colspan="3">${title}<span>${group.length}</span></th></tr>`;
            group.forEach(player => {
                const type = player.isBot ? "Bot" : "Player";
                listContent += `<tr data-player-id="${player.id}" title="${escapeHtml(player.name)}">
                    <td class="playerlist-number">${player.id + 1}</td>
                    <td class="playerlist-name"><span class="playerlist-status ${player.isBot ? "bot" : "human"}"></span><span>${escapeHtml(player.name)}</span></td>
                    <td class="playerlist-type">${type}</td>
                </tr>`;
            });
        };

        renderGroup("Players", humans);
        renderGroup("Bots", bots);
        if (filteredPlayers.length === 0) {
            listContent = `<tr><td colspan="3" class="playerlist-empty">No players found</td></tr>`;
        }

        playerListContent.innerHTML = listContent;
        playerListSummary.textContent = `${filteredPlayers.length} shown · ${humanCount} players · ${players.length - humanCount} bots`;
    };

    playerListSearch.addEventListener("input", render);
    playerListSort.addEventListener("change", render);

    this.display = function displayPlayerList(playerNames) {
        const gHumans = getVar("gHumans");
        const gLobbyMaxJoin = getVar("gLobbyMaxJoin");
        humanCount = gHumans;
        players = [];
        for (let i = 0; i < gLobbyMaxJoin; i++) {
            players.push({ id: i, name: playerNames[i] ?? `Player ${i + 1}`, isBot: i >= gHumans });
        }
        playerListSearch.value = "";
        playerListSort.value = "number";
        playerListContent.setAttribute("class", getVar("gIsTeamGame") ? "clickable" : "");
        render();
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
