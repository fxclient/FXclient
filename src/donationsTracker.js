import WindowManager from "./windowManager.js";
import { getVar } from "./gameInterface.js";
import { escapeHtml } from "./utils.js";
import { debugWithContext } from "./debugging.js";
import 'core-js/actual/array/to-reversed.js'

WindowManager.add({
    name: "donationHistory",
    element: document.querySelector("#donationhistory"),
    beforeOpen: function(isSingleplayer) {
        document.getElementById("donationhistory_note").style.display = (/*(settings.showBotDonations || isSingleplayer)*/ true ? "none" : "block");
    },
    onClose: function() { donationsTracker.openedWindowPlayerID = null; }
});
const donationsTracker = new (function(){
    this.openedWindowPlayerID = null;
    this.contentElement = document.querySelector("#donationhistory_content");
    this.donationHistory = Array(512);
    // fill the array with empty arrays with length of 3
    //for (var i = 0; i < 512; i++) this.donationHistory.push([]); // not needed as .reset is called on game start
    let resetCalled = false;
    this.getHistoryOf = function (playerID) {
        return debugWithContext(() => this.donationHistory[playerID].toReversed(), {
            playerID,
            resetCalled,
            type: typeof this.donationHistory[playerID],
            isArray: Array.isArray(this.donationHistory[playerID])
        });
    }
    this.reset = function() { resetCalled = true; for (var i = 0; i < 512; i++) this.donationHistory[i] = []; };
    this.logDonation = function(senderID, receiverID, amount) {
        const donationInfo = [senderID, receiverID, amount];
        this.donationHistory[receiverID].push(donationInfo);
        this.donationHistory[senderID].push(donationInfo);
        if (this.openedWindowPlayerID === senderID || this.openedWindowPlayerID === receiverID) {
            const indexOfNewItem = this.donationHistory[this.openedWindowPlayerID === senderID ? senderID : receiverID].length;
            this.contentElement.prepend(generateTableRowItem(donationInfo, indexOfNewItem, this.openedWindowPlayerID, true));
        }
    };
    function generateTableRowItem(historyItem, index, playerID, isNew) {
        const rawPlayerNames = getVar("rawPlayerNames");
        const row = document.createElement("tr");
        if (isNew) row.setAttribute("class", "new");
        let content = `<td><span class="color-light-gray">${index}.</span> `;
        if (playerID === historyItem[1])
            content += `Received <span class="color-green">${historyItem[2]}</span> resources from ${escapeHtml(rawPlayerNames[historyItem[0]])}`;
        else content += `Sent <span class="color-red">${historyItem[2]}</span> resources to ${escapeHtml(rawPlayerNames[historyItem[1]])}`;
        content += "</td>";
        row.innerHTML = content;
        return row;
    }
    this.displayHistory = function displayDonationsHistory(playerID, playerNames = getVar("rawPlayerNames"), isSingleplayer = getVar("gIsSingleplayer")) {
        var history = donationsTracker.getHistoryOf(playerID);
        console.log("History for " + playerNames[playerID] + ":");
        console.log(history);
        document.querySelector("#donationhistory h1").innerHTML = "Donation history for " + escapeHtml(playerNames[playerID]);
        this.contentElement.innerHTML = "";
        if (history.length > 0) history.forEach((historyItem, index) => {
            this.contentElement.appendChild(generateTableRowItem(historyItem, history.length - index, playerID));
        });
        else this.contentElement.innerText = "Nothing to display";
        this.openedWindowPlayerID = playerID;
        WindowManager.openWindow("donationHistory", isSingleplayer);
    }
});
export default donationsTracker;