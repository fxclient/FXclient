const playerDataProperties = ["playerTerritories", "playerBalances", "rawPlayerNames"];
const gameObjectProperties = ["playerId", "gIsTeamGame", "gHumans", "gLobbyMaxJoin", "gameState", "gIsSingleplayer",
    "gIsReplay", "gSelectableSpawn", "uiHidden"];
const replayRecorderProperties = ["tickFlags", "tickCounts"];

export const getVar = varName => {
    if (playerDataProperties.includes(varName)) return window[dictionary.playerData]?.[dictionary[varName]];
    if (gameObjectProperties.includes(varName)) return window[dictionary.game]?.[dictionary[varName]];
    if (replayRecorderProperties.includes(varName))
        return window[dictionary.protocol]?.[dictionary.replayRecorder]?.[dictionary[varName]];
    if (varName === "playerTeamColors") return window[dictionary.teamManager]?.[dictionary.playerTeamColors];
    return window[dictionary[varName]]
};

export const getUIGap = () => Math.floor(window[dictionary.uiSizes]?.[dictionary.gap] ?? 10);
