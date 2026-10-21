import { definePatch } from "../modUtils.js";

export default definePatch(({ replaceCode }) => {

    replaceCode(`function assignHumanNames() {
        var humanCount = playerCounts.gHumans;
        var displayNames = playerData.playerNames;
        var rawNames = playerData.rawPlayerNames;
        var playerNamesData = gameState.data.playerNamesData;
        if (!playerNamesData || playerNamesData.length < humanCount) {
            for (var i = 0; i < humanCount; i++) { displayNames[i] = rawNames[i] = "Player " + randomGen.pick(1e3); }
            return;
        }
        for (i = 0; i < humanCount; i++) { displayNames[i] = rawNames[i] = playerNamesData[i]; }
    }`, `function assignHumanNames() {
        var humanCount = playerCounts.gHumans;
        var displayNames = playerData.playerNames;
        var rawNames = playerData.rawPlayerNames;
        var playerNamesData = gameState.data.playerNamesData;
        if (!playerNamesData || playerNamesData.length < humanCount) {
            for (var i = 0; i < humanCount; i++) { displayNames[i] = rawNames[i] = "Player " + randomGen.pick(1e3); }
            return;
        }
        for (i = 0; i < humanCount; i++) { displayNames[i] = rawNames[i] = __fx.nameFilter.filter(playerNamesData[i]); }
    }`)

    replaceCode(`lobbyPlayers.createEntry = function (playerId, playerUsername, rankValue, levelValue, badgeValue, eloValue, colorValue, goldValue, ipHashValue, nameCode) {
        return {
            playerId: playerId,
            playerUsername: nameCode ? playerUsername : "Player " + utils.base64.encode(playerId, 2),
            rawUsername: playerUsername,
            rankValue: rankValue,
            levelValue: levelValue,
            badgeValue: badgeValue,
            eloValue: eloValue,
            colorValue: colorValue,
            goldValue: goldValue,
            ipHashValue: ipHashValue
        };
    }`, `lobbyPlayers.createEntry = function (playerId, playerUsername, rankValue, levelValue, badgeValue, eloValue, colorValue, goldValue, ipHashValue, nameCode) {
        return {
            playerId: playerId,
            playerUsername: nameCode ? __fx.nameFilter.filter(playerUsername) : "Player " + utils.base64.encode(playerId, 2),
            rawUsername: __fx.nameFilter.filter(playerUsername),
            rankValue: rankValue,
            levelValue: levelValue,
            badgeValue: badgeValue,
            eloValue: eloValue,
            colorValue: colorValue,
            goldValue: goldValue,
            ipHashValue: ipHashValue
        };
    }`)

    replaceCode(`function assignPresetNames() {
        var totalCount = playerCounts.gMaxPlayers;
        var displayNames = playerData.playerNames;
        var rawNames = playerData.rawPlayerNames;
        var playerNamesData = gameState.data.playerNamesData;
        for (var i = playerCounts.gHumans; i < totalCount; i++) { displayNames[i] = rawNames[i] = playerNamesData[i]; }
    }`, `function assignPresetNames() {
        var totalCount = playerCounts.gMaxPlayers;
        var displayNames = playerData.playerNames;
        var rawNames = playerData.rawPlayerNames;
        var playerNamesData = gameState.data.playerNamesData;
        for (var i = playerCounts.gHumans; i < totalCount; i++) { displayNames[i] = rawNames[i] = __fx.nameFilter.filter(playerNamesData[i]); }
    }`)
})
