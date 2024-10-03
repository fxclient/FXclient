import { getSettings } from "./settings.js";
import { getVar } from "./gameInterface.js";

const utils = new (function() {
    this.getMaxTroops = function(playerTerritories, playerID) { return (playerTerritories[playerID]*150).toString(); };
    this.getDensity = function(playerID, playerBalances = getVar("playerBalances"), playerTerritories = getVar("playerTerritories")) {
        if (getSettings().densityDisplayStyle === "percentage") return (((playerBalances[playerID] / ((playerTerritories[playerID] === 0 ? 1 : playerTerritories[playerID]) * 150)) * 100).toFixed(1) + "%");
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
export default utils