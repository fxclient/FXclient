import { getVar } from "./gameInterface.js";

export const leaderboardFilter = new (function() {
    //this.playersToInclude = [0,1,8,20,24,30,32,42,50,69,200,400,500,510,511]; // for testing
    this.playersToInclude = [];
    this.tabLabels = ["ALL", "CLAN", "RIVALS"];
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
    this.showingRivals = false;

    this.rivalsData = [];
    this.computeRivals = () => {
        const rawNames = getVar("rawPlayerNames");
        const playerTerritories = getVar("playerTerritories");
        const gHumans = getVar("gHumans");
        const totals = new Map();
        for (let id = 0; id < gHumans; id++) {
            const clan = this.parseClanFromPlayerName(rawNames[id]);
            if (clan === null) continue;
            const territory = playerTerritories[id] || 0;
            const entry = totals.get(clan) || { territory: 0, representativeId: id, representativeTerritory: -1 };
            entry.territory += territory;
            if (territory > entry.representativeTerritory) {
                entry.representativeTerritory = territory;
                entry.representativeId = id;
            }
            totals.set(clan, entry);
        }
        this.rivalsData = Array.from(totals.entries())
            .map(([clan, data]) => ({ clan, territory: data.territory, representativeId: data.representativeId }))
            .sort((a, b) => b.territory - a.territory);
    };
    this.getOwnClanIndex = () => {
        const playerId = getVar("playerId");
        const ownClan = this.parseClanFromPlayerName(getVar("rawPlayerNames")[playerId]);
        if (ownClan === null) return -1;
        return this.rivalsData.findIndex((entry) => entry.clan === ownClan);
    };

    this.drawTabs = function(canvas, totalWidth, verticalOffset, colorForSelectedTab) {
        canvas.textBaseline = "middle";
        canvas.textAlign = "center";
        const tabWidth = totalWidth / this.tabLabels.length;
        const textOffsetY = verticalOffset + this.tabBarOffset / 2;
        //console.log(verticalOffset, this.tabBarOffset, textOffsetY);
        const lineColor = canvas.fillStyle;
        this.tabLabels.forEach((label, index) => {
            canvas.fillStyle = lineColor;
            if (index !== 0) canvas.fillRect(tabWidth * index, verticalOffset, 1, this.tabBarOffset);
            if (this.selectedTab === index) {
                canvas.fillStyle = colorForSelectedTab;
                canvas.fillRect(tabWidth * index, verticalOffset, tabWidth, this.tabBarOffset);
            }
            if (this.tabHovering === index) {
                canvas.fillStyle = "rgba(255,255,255,0.3)";
                canvas.fillRect(tabWidth * index, verticalOffset, tabWidth, this.tabBarOffset);
            }
            canvas.fillStyle = "rgb(255,255,255)";
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
            this.showingRivals = false;
            const label = this.tabLabels[tab];
            if (label === "ALL") this.clearFilter();
            else if (label === "CLAN" || label === "TEAM") {
                label === "CLAN" ? this.filterByOwnClan() : this.filterByOwnTeam();
                this.setUpdateFlag();
            } else if (label === "RIVALS") {
                this.enabled = false;
                this.showingRivals = true;
                this.computeRivals();
            }
            this.scrollToTop();
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
    this.filterByOwnTeam = () => {
        const teamColors = getVar("playerTeamColors");
        const ownColor = teamColors[getVar("playerId")];
        this.playersToInclude = [];
        teamColors.forEach((color, id) => { if (color === ownColor) this.playersToInclude.push(id); });
        this.enabled = true;
        this.scrollToTop();
    };
    this.clearFilter = () => { this.enabled = false; }
    this.reset = () => {
        this.enabled = false;
        this.showingRivals = false;
        this.selectedTab = 0;
        this.tabLabels = getVar("gIsTeamGame") ? ["ALL", "CLAN", "TEAM", "RIVALS"] : ["ALL", "CLAN", "RIVALS"];
        clanFilter.refresh();
    }
});

export const clanFilter = new (function() {
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
