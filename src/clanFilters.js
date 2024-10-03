import { getVar } from "./gameInterface.js";

export const leaderboardFilter = new (function() {
    //this.playersToInclude = [0,1,8,20,24,30,32,42,50,69,200,400,500,510,511]; // for testing
    this.playersToInclude = [];
    this.tabLabels = ["ALL", "CLAN"];
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
    this.drawTabs = function(canvas, totalWidth, verticalOffset, colorForSelectedTab) {
        canvas.textBaseline = "middle";
        canvas.textAlign = "center";
        const tabWidth = totalWidth / this.tabLabels.length;
        const textOffsetY = verticalOffset + this.tabBarOffset / 2;
        //console.log(verticalOffset, this.tabBarOffset, textOffsetY);
        this.tabLabels.forEach((label, index) => {
            if (index !== 0) canvas.fillRect(tabWidth * index, verticalOffset, 1, this.tabBarOffset);
            if (this.selectedTab === index) {
                canvas.fillStyle = colorForSelectedTab;
                canvas.fillRect(tabWidth * index, verticalOffset, tabWidth, this.tabBarOffset);
                canvas.fillStyle = "rgb(255,255,255)";
            }
            if (this.tabHovering === index) {
                canvas.fillStyle = "rgba(255,255,255,0.3)";
                canvas.fillRect(tabWidth * index, verticalOffset, tabWidth, this.tabBarOffset);
                canvas.fillStyle = "rgb(255,255,255)";
            }
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
            if (this.selectedTab === 0) this.clearFilter();
            else if (this.selectedTab === 1) {
                this.filterByOwnClan();
                this.setUpdateFlag();
            }
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
    this.clearFilter = () => { this.enabled = false; }
    this.reset = () => {
        this.enabled = false;
        this.selectedTab = 0;
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