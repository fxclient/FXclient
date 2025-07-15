import versionData from '../version.json';
const { version, lastUpdated } = versionData;

import settingsManager from './settings.js';
import { clanFilter, leaderboardFilter } from "./clanFilters.js";
import WindowManager from "./windowManager.js";
import donationsTracker from "./donationsTracker.js";
import winCounter from "./winCounter.js";
import playerList from "./playerList.js";
import gameScriptUtils from "./gameScriptUtils.js";
import hoveringTooltip from "./hoveringTooltip.js";
import { keybindFunctions, keybindHandler, mobileKeybinds } from "./keybinds.js";
import customLobby from './customLobby.js';
import { displayChangelog } from './changelog.js';
import { reportError } from './debugging.js';

const savedVersion = localStorage.getItem("fx_version");
if (savedVersion !== version) {
  localStorage.setItem("fx_version", version);
  if (savedVersion !== null) displayChangelog();
}

window.__fx = window.__fx || {};
const __fx = window.__fx;
__fx.version = version + " " + lastUpdated;

__fx.settingsManager = settingsManager;
__fx.leaderboardFilter = leaderboardFilter;
__fx.utils = gameScriptUtils;
__fx.WindowManager = WindowManager;
__fx.keybindFunctions = keybindFunctions;
__fx.keybindHandler = keybindHandler;
__fx.mobileKeybinds = mobileKeybinds;
__fx.donationsTracker = donationsTracker;
__fx.reportError = reportError;
__fx.playerList = playerList;
__fx.hoveringTooltip = hoveringTooltip;
__fx.clanFilter = clanFilter;
__fx.wins = winCounter;
__fx.customLobby = customLobby;

console.log('Successfully loaded FX Client');
