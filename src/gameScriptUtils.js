import { getSettings } from "./settings.js";
import { getVar } from "./gameInterface.js";
import { leaderboardFilter } from "./clanFilters.js";
import { escapeHtml } from "./utils.js";

// Example usage from game script: __fx.utils.getMaxTroops(...)

function getMaxTroops(playerTerritories, playerID) {
    return (playerTerritories[playerID] * 150).toString();
};
function getDensity(playerID, playerBalances = getVar("playerBalances"), playerTerritories = getVar("playerTerritories")) {
    if (getSettings().densityDisplayStyle === "percentage") return (((playerBalances[playerID] / ((playerTerritories[playerID] === 0 ? 1 : playerTerritories[playerID]) * 150)) * 100).toFixed(1) + "%");
    else return (playerBalances[playerID] / (playerTerritories[playerID] === 0 ? 1 : playerTerritories[playerID])).toFixed(1);
};
const estimatedAttackFormatter = new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 });
function getEstimatedEliminationAttackData(playerID, remainingBalance, remainingTerritories) {
    if (playerID === getVar("playerId")) return null;
    const committedAttack = getVar("playerCommitted")?.[playerID] ?? 0;
    const balance = Number.isFinite(remainingBalance)
        ? Math.max(0, remainingBalance)
        : Math.max(0, (getVar("playerBalances")?.[playerID] ?? 0) - committedAttack);
    if (!Number.isFinite(balance) || balance <= 0) return null;
    const territoryCount = Number.isFinite(remainingTerritories)
        ? Math.max(0, remainingTerritories)
        : getVar("playerTerritories")?.[playerID];
    // The game model uses a 2:1 defender ratio and a base cost of two units per conquered tile.
    const estimatedAttack = Math.ceil(balance * 2 + (Number.isFinite(territoryCount) ? territoryCount * 2 : 0));
    const ownPlayerID = getVar("playerId");
    const ownBalance = getVar("playerBalances")?.[ownPlayerID];
    const ownCommitted = getVar("playerCommitted")?.[ownPlayerID];
    const ownAvailable = ownBalance - ownCommitted;
    const ownShare = Number.isFinite(ownCommitted) && Number.isFinite(ownAvailable) && ownAvailable > 0
        ? estimatedAttack / ownAvailable * 100
        : null;
    return { estimatedAttack, ownShare };
}
function getEstimatedEliminationAttack(playerID, remainingBalance, remainingTerritories) {
    const estimate = getEstimatedEliminationAttackData(playerID, remainingBalance, remainingTerritories);
    if (!estimate) return "";
    const ownShare = Number.isFinite(estimate.ownShare) ? ` (${Math.ceil(estimate.ownShare)}%)` : "";
    return `\u2248${estimatedAttackFormatter.format(estimate.estimatedAttack)}${ownShare}`;
}
function getEstimatedEliminationAttackColor(playerID, remainingBalance, remainingTerritories) {
    const estimate = getEstimatedEliminationAttackData(playerID, remainingBalance, remainingTerritories);
    if (!Number.isFinite(estimate?.ownShare)) return null;
    const configuredThreshold = Number(getSettings().estimatedAttackGreenThreshold);
    const greenThreshold = Number.isFinite(configuredThreshold)
        ? Math.max(5, Math.min(75, configuredThreshold))
        : 25;
    const redProgress = Math.max(0, Math.min(1, (estimate.ownShare - greenThreshold) / (100 - greenThreshold)));
    const hue = Math.round(120 * (1 - redProgress));
    return `hsl(${hue}, 85%, 55%)`;
}
function drawEstimatedEliminationAttack(ctx, playerID, text, x, y) {
    const previousFillStyle = ctx.fillStyle;
    const estimateColor = getEstimatedEliminationAttackColor(playerID);
    if (estimateColor) ctx.fillStyle = estimateColor;
    ctx.fillText(text, x, y);
    ctx.fillStyle = previousFillStyle;
}
function isPointInRectangle(x, y, rectangleStartX, rectangleStartY, width, height) {
    return x >= rectangleStartX && x <= rectangleStartX + width && y >= rectangleStartY && y <= rectangleStartY + height;
};
/** @param {CanvasRenderingContext2D} canvas @param {string} text */
function fillTextMultiline(canvas, text, x, y, maxWidth) {
    const lineHeight = parseInt(canvas.font.split(" ").find(part => part.endsWith("px")).slice(0, -2));
    text.split("\n").forEach((line, index) => canvas.fillText(line, x, y + index * lineHeight, maxWidth));
}
function textStyleBasedOnDensity(playerID) {
    const playerBalances = getVar("playerBalances"), playerTerritories = getVar("playerTerritories");
    return `hsl(${playerBalances[playerID] / (playerTerritories[playerID] * 1.5)}, 100%, 50%, 1)`;
}
// specific color pallete so two ips dont have a similar looking color
const duplicateIpColorPalette = [
    "hsla(36, 90%, 52%, 0.5)",
    "hsla(50, 90%, 48%, 0.5)",
    "hsla(72, 70%, 40%, 0.5)",
    "hsla(95, 65%, 40%, 0.5)",
    "hsla(130, 70%, 45%, 0.5)",
    "hsla(150, 65%, 40%, 0.5)",
    "hsla(165, 70%, 38%, 0.5)",
    "hsla(185, 80%, 48%, 0.5)",
    "hsla(200, 85%, 50%, 0.5)",
    "hsla(215, 85%, 55%, 0.5)",
    "hsla(235, 75%, 60%, 0.5)",
    "hsla(255, 60%, 62%, 0.5)",
    "hsla(270, 70%, 60%, 0.5)",
    "hsla(285, 75%, 58%, 0.5)",
    "hsla(300, 75%, 55%, 0.5)",
    "hsla(315, 80%, 58%, 0.5)",
    "hsla(330, 80%, 58%, 0.5)",
];
const sameClanColor = "hsla(0, 85%, 50%, 0.5)";

function hashInt(n) {
    n = (n ^ (n >>> 16)) >>> 0;
    n = Math.imul(n, 0x45d9f3b) >>> 0;
    n = (n ^ (n >>> 16)) >>> 0;
    n = Math.imul(n, 0x45d9f3b) >>> 0;
    return (n ^ (n >>> 16)) >>> 0;
}

let cachedEntries = null;
let cachedEntriesKey = null;
let cachedIpColors = null;
const assignedColorIndexes = new Map();

function getIpColors(entries, ipField) {
    const key = ipField + "|" + entries.length;
    if (cachedEntries === entries && cachedEntriesKey === key) return cachedIpColors;

    const counts = new Map();
    entries.forEach(entry => {
        const ip = entry[ipField];
        if (ip === undefined) return;
        counts.set(ip, (counts.get(ip) || 0) + 1);
    });

    const paletteLength = duplicateIpColorPalette.length;
    const duplicates = [...counts.keys()].filter(ip => counts.get(ip) >= 2).sort();
    const duplicateSet = new Set(duplicates);
    assignedColorIndexes.forEach((_, ip) => {
        if (!duplicateSet.has(ip)) assignedColorIndexes.delete(ip);
    });

    const taken = new Set(assignedColorIndexes.values());
    duplicates.forEach(ip => {
        if (assignedColorIndexes.has(ip)) return;
        let index = hashInt(ip) % paletteLength;
        if (taken.size < paletteLength) {
            while (taken.has(index)) index = (index + 1) % paletteLength;
            taken.add(index);
        }
        assignedColorIndexes.set(ip, index);
    });

    const colors = new Map();
    duplicates.forEach(ip => colors.set(ip, duplicateIpColorPalette[assignedColorIndexes.get(ip)]));

    cachedEntries = entries;
    cachedEntriesKey = key;
    cachedIpColors = colors;
    return colors;
}

function getDuplicateIpHighlightColor(player, entries, ipField) {
    const ip = player[ipField];
    if (ip === undefined) return null;
    return getIpColors(entries, ipField).get(ip) || null;
}

function getSameClanHighlightColor(player, ownPlayer, nameField) {
    if (!ownPlayer) return null;
    const ownClan = leaderboardFilter.parseClanFromPlayerName(ownPlayer[nameField]);
    if (!ownClan) return null;
    return leaderboardFilter.parseClanFromPlayerName(player[nameField]) === ownClan ? sameClanColor : null;
}

function parseAccountId(value) {
    const match = /^[a-zA-Z0-9_-]{1,5}/.exec(value);
    return match ? match[0] : null;
}

export default { getMaxTroops, getDensity, getEstimatedEliminationAttack, drawEstimatedEliminationAttack, isPointInRectangle, fillTextMultiline, textStyleBasedOnDensity, getDuplicateIpHighlightColor, getSameClanHighlightColor, escapeHtml, parseAccountId }
