const playerDataProperties = ["playerTerritories", "playerBalances", "rawPlayerNames"];
const gameObjectProperties = ["playerId", "gIsTeamGame", "gHumans", "gLobbyMaxJoin", "gameState", "gIsSingleplayer"];

export const getVar = varName => {
    if (playerDataProperties.includes(varName)) return window[dictionary.playerData]?.[dictionary[varName]];
    if (gameObjectProperties.includes(varName)) return window[dictionary.game]?.[dictionary[varName]];
    return window[dictionary[varName]]
};

export const getUIGap = () => Math.floor(window[dictionary.uiSizes]?.[dictionary.gap] ?? 10);