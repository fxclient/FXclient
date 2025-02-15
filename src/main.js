const fx_version = '0.6.7.1'; // FX Client Version
const fx_update = 'Feb 15'; // FX Client Last Updated

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("message", (e) => {
    const message = e.data;
    if (message.event === "activate" && buildTimestamp !== message.version) {
      // worker was updated in the background
      document.getElementById("updateNotification").style.display = "block";
    }
  });
  navigator.serviceWorker.register("./sw.js");
}

import settingsManager from './settings.js';
import { clanFilter, leaderboardFilter } from "./clanFilters.js";
import WindowManager from "./windowManager.js";
import donationsTracker from "./donationsTracker.js";
import winCounter from "./winCounter.js";
import playerList from "./playerList.js";
import gameScriptUtils from "./gameScriptUtils.js";
import hoveringTooltip from "./hoveringTooltip.js";
import { keybindFunctions, keybindHandler } from "./keybinds.js";
import customLobby from './customLobby.js';

window.__fx = window.__fx || {};
const __fx = window.__fx;
__fx.version = fx_version + " " + fx_update;

__fx.settingsManager = settingsManager;
__fx.leaderboardFilter = leaderboardFilter;
__fx.utils = gameScriptUtils;
__fx.WindowManager = WindowManager;
__fx.keybindFunctions = keybindFunctions;
__fx.keybindHandler = keybindHandler;
__fx.donationsTracker = donationsTracker;
__fx.playerList = playerList;
__fx.hoveringTooltip = hoveringTooltip;
__fx.clanFilter = clanFilter;
__fx.wins = winCounter;
__fx.customLobby = customLobby;

console.log('Successfully loaded FX Client');
