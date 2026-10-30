import { KeybindsInput } from "./keybindsInput.js";
import winCounter from "./winCounter.js";
import WindowManager from "./windowManager.js";
import versionData from '../version.json';
import { displayChangelog } from './changelog.js';
import replayHistory from './replayHistory.js'
import { LobbyReminderRulesInput } from './lobbyReminderRulesInput.js';

window.__fx = window.__fx || {};
const __fx = window.__fx;

const fxText = {
  en: {
    enhancedLobbyLayout: "Enhanced lobby layout",
    enhancedLobbyLayoutNote: "Adds player search and readiness filters, a compact five-column roster, and a shorter lobby header.",
    searchLobbyPlayers: "Search lobby players...",
    filterReadiness: "Filter players by readiness",
    allPlayers: "All players",
    ready: "Ready",
    notReady: "Not ready",
  },
  de: {
    enhancedLobbyLayout: "Verbessertes Lobby-Layout",
    enhancedLobbyLayoutNote: "Ergänzt Spielersuche und Bereitschaftsfilter, eine kompakte Liste mit fünf Spalten und einen flacheren Lobby-Kopfbereich.",
    searchLobbyPlayers: "Lobby-Spieler suchen...",
    filterReadiness: "Spieler nach Bereitschaft filtern",
    allPlayers: "Alle Spieler",
    ready: "Bereit",
    notReady: "Nicht bereit",
  },
};
__fx.translateFX = key => fxText[(navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en"][key] ?? key;

var settings = {
  //"showBotDonations": false,
  displayWinCounter: true,
  displayTickNumber: true,
  useFullscreenMode: false,
  hoveringTooltip: true,
  //"hideAllLinks": false,
  realisticNames: false,
  showPlayerDensity: true,
  coloredDensity: true,
  densityDisplayStyle: "absoluteQuotient",
  hideBotNames: false,
  highlightClanSpawns: false,
  highlightDuplicateIps: false,
  highlightSameClan: false,
  detailedTeamPercentage: false,
  openDonationHistoryFromLb: true,
  //"customMapFileBtn": true
  customBackgroundUrl: "",
  keybindButtons: false,
  attackPercentageKeybinds: [],
  startingPercentageEnabled: false,
  startingPercentage: 50,
  hidePropagandaPopup: false,
  showReplayTimebar: true,
  customQuickEmojisEnabled: false,
  customQuickEmojis: [],
  lobbyReminderRules: [],
  enhancedLobbyLayout: true,
  mutePingAll: false,
  mutePingEveryone: false,
  mutePingRoom: false,
  mutePingClan: false,
  mutePingLanguage: false,
  mutePingDirect: false,
  hideInappropriateNames: false,
  followedAccountNicknames: {},
  followedAccountColors: {},
  savedAccountLabels: {}
};
__fx.settings = settings;
const discontinuedSettings = ["hideAllLinks", "fontName"];
__fx.makeMainMenuTransparent = false;

async function clearCacheAndReload() {
  if (!confirm("Clear the cached client files and reload the page?")) return;
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map(registration => registration.unregister()));
  }
  if ("caches" in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
  }
  window.location.reload();
}

// https://stackoverflow.com/a/34156339
function saveFile(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
}
function createButton(text, action) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", action);
    return button;
}

const CELL = 2.35;
const PANEL_STYLE = { display: "grid", gridAutoRows: CELL + "em", gap: CELL / 3 + "em",
  padding: CELL / 6 + "em", width: "max-content", background: "rgba(0, 0, 0, 0.75)",
  border: "2px solid white", transition: "none", animation: "none" };
const CELL_STYLE = { display: "flex", alignItems: "center", justifyContent: "center",
  fontSize: CELL * 0.89 + "em", lineHeight: "1", cursor: "pointer", userSelect: "none",
  transition: "none", animation: "none" };
const ICON_BASE = 1011;
const ICON_COUNT = 13;
const MORE_CODE = ICON_BASE + ICON_COUNT;
const tileUrls = {};
function tileFor(code) {
  if (code < ICON_BASE || code > MORE_CODE) return "";
  if (!tileUrls[code]) {
    const canvas = window[dictionary.emojiHolder]?.[dictionary.emojiPicker]?.[dictionary.emojiTiles]?.[code - ICON_BASE];
    if (canvas) tileUrls[code] = canvas.toDataURL();
  }
  return tileUrls[code] || "";
}

function CustomQuickEmojis(container) {
  const label = document.createElement("label");
  label.className = "checkbox";
  label.append("Use custom quick emojis ");
  const note = document.createElement("small");
  note.innerText = "Choose the 9 emojis shown in the in-game quick-emoji bar, in order, instead of them being picked automatically based on usage. Click \"Save Settings\" below to apply.";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";
  label.append(document.createElement("br"), note, checkbox, checkmark);
  container.append(label, document.createElement("br"));

  const picker = document.createElement("div");
  Object.assign(picker.style,
    { display: "none", margin: "8px 0", transition: "none", animation: "none" });
  container.append(picker);

  const slotsRow = document.createElement("div");
  Object.assign(slotsRow.style, PANEL_STYLE,
    { gridTemplateColumns: "repeat(9, " + CELL + "em)", marginBottom: CELL / 3 + "em" });
  const grid = document.createElement("div");
  Object.assign(grid.style, PANEL_STYLE,
    { gridTemplateColumns: "repeat(10, " + CELL + "em)", display: "none" });
  picker.append(slotsRow, grid);

  const slots = [];
  const codes = new Array(9).fill(null);
  let options = [];
  let armed = null;
  let page = 1;

  const quickEmojis = () => __fx.quickEmojis || {};
  const isFlag = (code) => code < (quickEmojis().emojiBaseCode ?? 676);
  const glyphFor = (code) =>
    isFlag(code)
      ? String.fromCodePoint(0x1f1e6 + Math.floor(code / 26), 0x1f1e6 + (code % 26))
      : (quickEmojis().emojiList ?? [])[code - (quickEmojis().emojiBaseCode ?? 676)] ?? "";

  function paint(cell, code, round = true) {
    const tile = code >= ICON_BASE && code <= MORE_CODE;
    const tileUrl = tile ? tileFor(code) : "";
    cell.innerHTML = "";
    cell.textContent = "";
    cell.style.backgroundColor = !tile ? "transparent"
      : code === MORE_CODE ? "rgba(0, 180, 0, 0.6)" : "rgba(0, 0, 0, 0.6)";
    if (round) cell.style.borderRadius = tile ? "50%" : "";
    if (tileUrl) {
      const img = document.createElement("img");
      img.src = tileUrl;
      img.alt = "";
      Object.assign(img.style, { width: "100%", height: "100%", objectFit: "contain" });
      cell.append(img);
    } else if (!tile) {
      cell.textContent = glyphFor(code);
    }
  }

  function makeCell(code, onClick) {
    const cell = document.createElement("div");
    Object.assign(cell.style, CELL_STYLE);
    paint(cell, code);
    cell.addEventListener("click", onClick);
    return cell;
  }

  for (let i = 0; i < 9; i++) {
    const slot = document.createElement("div");
    Object.assign(slot.style, CELL_STYLE);
    slot.style.borderRadius = "0";
    slot.addEventListener("click", () => (armed === i ? close() : open(i)));
    slots.push(slot);
    slotsRow.append(slot);
  }

  function open(index) {
    build();
    page = 1;
    renderPage();
    arm(index);
    grid.style.display = "grid";
  }

  function close() {
    arm(null);
    grid.style.display = "none";
  }

  function arm(index) {
    armed = index;
    slots.forEach((slot, i) => {
      slot.style.boxShadow = i === index ? "inset 0 0 0 2px rgb(0, 200, 0)" : "";
    });
  }

  function renderPage() {
    grid.textContent = "";
    if (!options.length) return;
    let end = 49 * page;
    if (end - 49 >= options.length) {
      page = 1;
      end = 49;
    }
    end = Math.min(end, options.length);
    options.slice(Math.max(0, end - 49), end)
      .forEach((code) => grid.append(makeCell(code, () => select(code))));
    grid.append(makeCell(MORE_CODE, () => {
      page++;
      renderPage();
    }));
  }

  function select(code) {
    if (armed === null) return;
    codes[armed] = code;
    paint(slots[armed], code, false);
    close();
  }

  function build() {
    if (options.length) return;
    const { emojiList = [], emojiBaseCode = 676, realFlagCodes = [] } = quickEmojis();
    if (!emojiList.length) return;
    options = Array.from({ length: ICON_COUNT }, (unused, i) => ICON_BASE + i)
      .concat(emojiList.map((unused, i) => emojiBaseCode + i), realFlagCodes);
  }

  function paintSlots() {
    slots.forEach((slot, i) => {
      if (codes[i] === null) codes[i] = options[i] ?? ICON_BASE + i;
      paint(slot, codes[i], false);
    });
  }

  function updateVisibility() {
    picker.style.display = checkbox.checked ? "block" : "none";
  }
  checkbox.addEventListener("change", updateVisibility);

  this.save = function (targetSettings) {
    targetSettings.customQuickEmojisEnabled = checkbox.checked;
    targetSettings.customQuickEmojis = codes.slice();
  };

  this.update = function (currentSettings) {
    checkbox.checked = !!currentSettings.customQuickEmojisEnabled;
    updateVisibility();
    (currentSettings.customQuickEmojis || []).forEach((entry, i) => {
      const code = Number(entry?.code ?? entry);
      if (i < 9 && !isNaN(code)) codes[i] = code;
    });
    build();
    paintSlots();
    close();
  };
}

function StartingPercentageInput(container) {
  const label = document.createElement("label");
  label.className = "checkbox";
  label.append("Custom starting attack percentage ");
  const note = document.createElement("small");
  note.innerText = "Sets a fixed attack percentage for the troop bar at the start of every game.";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";
  label.append(document.createElement("br"), note, checkbox, checkmark);
  container.append(label, document.createElement("br"));

  const inputRow = document.createElement("div");
  Object.assign(inputRow.style, { display: "none", transition: "none", animation: "none" });
  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.max = "100";
  input.step = "0.1";
  input.placeholder = "50";
  inputRow.append("Percentage (%): ", input);
  const spacer = document.createElement("br");
  container.append(inputRow, spacer);

  function updateVisibility() {
    inputRow.style.display = checkbox.checked ? "block" : "none";
    spacer.style.display = checkbox.checked ? "" : "none";
  }
  checkbox.addEventListener("change", () => {
    if (checkbox.checked && input.value.trim() === "") input.value = "50";
    updateVisibility();
  });

  this.save = function (targetSettings) {
    targetSettings.startingPercentageEnabled = checkbox.checked;
    targetSettings.startingPercentage = input.value.trim() === "" ? 50 : Number(input.value);
  };

  this.update = function (currentSettings) {
    checkbox.checked = !!currentSettings.startingPercentageEnabled;
    input.value = currentSettings.startingPercentage ?? 50;
    updateVisibility();
  };
}

function SectionHeader(text) {
  return function (container) {
    const title = document.createElement("h2");
    title.className = "settings-section-title";
    title.innerText = text;
    container.append(title);
  };
}

function createCheckboxRow(labelText, note) {
  const label = document.createElement("label");
  label.className = "checkbox";
  label.append(labelText + " ");
  if (note) {
    const noteElement = document.createElement("small");
    noteElement.innerText = note;
    label.append(document.createElement("br"), noteElement);
  }
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";
  label.append(checkbox, checkmark);
  return { label, checkbox };
}

function MutePingSection(container) {
  const pingTypes = [
    { key: "mutePingEveryone", label: "Mute @all, @everyone and @0ya pings" },
    { key: "mutePingRoom", label: "Mute @room1 - @room4 pings" },
    { key: "mutePingClan", label: "Mute clan pings (@[TAG])" },
    { key: "mutePingLanguage", label: "Mute language pings (@en, @de, ...)" },
    { key: "mutePingDirect", label: "Mute pings of your username" }
  ];

  const header = document.createElement("p");
  const heading = document.createElement("b");
  heading.innerText = "Muted lobby pings";
  header.append(heading);
  container.append(header);

  const master = createCheckboxRow("Mute all pings");
  container.append(master.label, document.createElement("br"));

  const subCheckboxes = {};
  const savedState = {};
  pingTypes.forEach(({ key, label, note }) => {
    const row = createCheckboxRow(label, note);
    container.append(row.label, document.createElement("br"));
    subCheckboxes[key] = row.checkbox;
    row.checkbox.addEventListener("change", () => savedState[key] = row.checkbox.checked);
  });

  function applyMasterState() {
    const allMuted = master.checkbox.checked;
    Object.keys(subCheckboxes).forEach(key => {
      subCheckboxes[key].checked = allMuted ? true : (savedState[key] ?? false);
      subCheckboxes[key].disabled = allMuted;
    });
  }
  master.checkbox.addEventListener("change", () => {
    if (master.checkbox.checked) Object.keys(subCheckboxes).forEach(key => savedState[key] = subCheckboxes[key].checked);
    applyMasterState();
  });

  this.update = function (settings) {
    Object.keys(subCheckboxes).forEach(key => savedState[key] = !!settings[key]);
    master.checkbox.checked = !!settings.mutePingAll;
    applyMasterState();
  };
  this.save = function (targetSettings) {
    targetSettings.mutePingAll = master.checkbox.checked;
    Object.keys(subCheckboxes).forEach(key => {
      targetSettings[key] = master.checkbox.checked ? savedState[key] : subCheckboxes[key].checked;
    });
  };
}

function ReplayHistoryList(container) {
  const title = document.createElement("p");
  title.innerHTML = "<b>Saved Replays</b> (auto-saves your last 5 games)";
  container.append(title);

  const list = document.createElement("div");
  container.append(list);

  function formatTime(timestamp) {
    const minutes = Math.floor((Date.now() - timestamp) / 60000);
    if (minutes < 1) return "just now";
    if (minutes < 60) return minutes + "m ago";
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return hours + "h ago";
    return Math.floor(hours / 24) + "d ago";
  }

  function render() {
    list.innerHTML = "";
    const replays = replayHistory.getAll();
    if (!replays.length) {
      const empty = document.createElement("small");
      empty.innerText = "No replays saved yet. Finish a game and it'll show up here.";
      list.append(empty);
      return;
    }
    replays.forEach((replay) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "6px";
      row.style.marginBottom = "4px";

      const label = document.createElement("small");
      label.innerText = formatTime(replay.timestamp);
      label.style.flex = "1";

      const loadBtn = createButton("Load", () => {
        WindowManager.closeWindow("settings");
        replayHistory.load(replay.data);
      })
      const copyBtn = createButton("Copy", () => {
          navigator.clipboard.writeText(replay.data).then(() => {
          copyBtn.innerText = "Copied!";
          setTimeout(() => (copyBtn.innerText = "Copy"), 1500);
        }).catch(() => alert("Failed to copy"));
      });
      const deleteBtn = createButton("Delete", () => {
        replayHistory.remove(replay.timestamp);
        render();
      });
      const downloadBtn = createButton("Download", () =>
        saveFile(replay.data, `replay_${replay.timestamp}.txt`, "text/plain"),
      )
      row.append(label, loadBtn, copyBtn, downloadBtn, deleteBtn);
      list.append(row);
    });
  }

  this.update = render;
}

const settingsManager = new (function () {
  const settingsStructure = [
    SectionHeader("General"),
    {
      for: "useFullscreenMode",
      type: "checkbox",
      label: "Use fullscreen mode",
      note: "Note: fullscreen mode will trigger after you click anywhere on the page due to browser policy restrictions.",
    },
    {
      for: "customBackgroundUrl",
      type: "textInput",
      label: "Custom main menu background:",
      placeholder: "Enter an image URL here",
      tooltip:
        "A custom image to be shown as the main menu background instead of the currently selected map.",
    },
    {
      for: "hidePropagandaPopup",
      type: "checkbox",
      label: "Hide propaganda popup"
    },
    //{ for: "hideAllLinks", type: "checkbox", label: "Hide Links option also hides app store links" },
    SectionHeader("In-game display"),
    {
      for: "displayWinCounter",
      type: "checkbox",
      label: "Display win counter",
      note: "The win counter tracks multiplayer solo wins (not in team games)",
    },
    {
      type: "button",
      text: "Reset win counter",
      action: winCounter.removeWins,
    },
    {
      for: "displayTickNumber",
      type: "checkbox",
      label: "Display tick number near the balance",
    },
    {
      for: "hoveringTooltip",
      type: "checkbox",
      label: "Hovering tooltip",
      note: "Display map territory info constantly (on mouse hover) instead of only when right clicking on the map",
    },
    {
      for: "highlightClanSpawns",
      type: "checkbox",
      label: "Highlight clan spawnpoints",
      note: "Increases the spawnpoint glow size for members of your clan",
    },
    {
      for: "detailedTeamPercentage", type: "checkbox",
      label: "Detailed team pie chart percentage",
      note: "For example: this would show 25.82% instead of 26% on the pie chart in team games"
    },
    {
      for: "openDonationHistoryFromLb",
      type: "checkbox",
      label: "Open donation history from the leaderboard",
      note: "Changes whether or not clicking on a player's name in the in-game leaderboard in team games will open their donation history",
    },
    SectionHeader("Density"),
    {
      for: "showPlayerDensity",
      type: "checkbox",
      label: "Show player density",
    },
    {
      for: "coloredDensity",
      type: "checkbox",
      label: "Colored density",
      note: "Display the density with a color between red and green depending on the density value",
    },
    {
      for: "densityDisplayStyle",
      type: "selectMenu",
      label: "Density value display style:",
      tooltip: "Controls how the territorial density value should be rendered",
      options: [
        { value: "percentage", label: "Percentage" },
        {
          value: "absoluteQuotient",
          label: "Value from 0 to 150 (BetterTT style)",
        },
      ],
    },
    SectionHeader("Names"),
    { for: "realisticNames", type: "checkbox", label: "Realistic Bot Names" },
    { for: "hideBotNames", type: "checkbox", label: "Hide bot names" },
    {
      for: "hideInappropriateNames",
      type: "checkbox",
      label: "Inappropriate name hider",
      note: "Replaces player names that contain common offensive or inappropriate words with \"Hidden Name\".",
    },
    SectionHeader("Controls"),
    KeybindsInput,
    {
      for: "keybindButtons", type: "checkbox",
      label: "Keybind buttons", note: "Show keybind buttons above the troop selector (max 6)"
    },
    StartingPercentageInput,
    CustomQuickEmojis,
    SectionHeader("Lobby"),
    {
      for: "enhancedLobbyLayout",
      type: "checkbox",
      label: __fx.translateFX("enhancedLobbyLayout"),
      note: __fx.translateFX("enhancedLobbyLayoutNote"),
    },
    {
      for: "highlightDuplicateIps",
      type: "checkbox",
      label: "Duplicate IP highlighting",
      note: "Highlights players in the lobby's team list who share the same IP hash (the same one shown when hovering over a player's name). Each group of matching IPs gets its own color, so distinct duplicates are easy to tell apart at a glance.",
    },
    {
      for: "highlightSameClan",
      type: "checkbox",
      label: "Same clan highlighting",
      note: "Highlights you and every player in the lobby's team list who has the same clan tag as you in red. When duplicate IP highlighting is also on players matching both get a red outline around their IP color.",
    },
    LobbyReminderRulesInput,
    MutePingSection,
    SectionHeader("Replays"),
    {
      for: "showReplayTimebar",
      type: "checkbox",
      label: "Replay timebar",
      note: "Show a seek bar when watching replays, allowing you to skip to any point of the replay. Seeking backward re-simulates the replay from the start, which can take a few seconds.",
    },
    ReplayHistoryList,
    SectionHeader("About"),
    function Footer(container) {
      const versionInfo = document.createElement("p");
      versionInfo.innerText = `FX Client v${versionData.version}`;
      const links = document.createElement("p");
      links.innerHTML = `<a href="https://discord.gg/dyxcwdNKwK" target="_blank">Discord server</a> |
        <a href="https://github.com/fxclient/FXclient#readme">Github repository</a>`;
      const changelogButton = document.createElement("button");
      changelogButton.innerText = "Changelog";
      changelogButton.addEventListener("click", displayChangelog);
      const clearCacheButton = document.createElement("button");
      clearCacheButton.innerText = "Clear cache";
      clearCacheButton.addEventListener("click", clearCacheAndReload);
      container.append(versionInfo, links, changelogButton, " ", clearCacheButton);
    }
  ];
  const settingsContainer = document.querySelector(".settings .scrollable");
  var inputFields = {}; // (includes select menus)
  var checkboxFields = {};
  var customElements = [];
  settingsStructure.forEach((item) => {
    if (typeof item === "function") {
      const container = document.createElement("div");
      customElements.push(new item(container));
      return settingsContainer.append(container);
    }
    const label = document.createElement("label");
    if (item.tooltip) label.title = item.tooltip;
    const isValueInput = item.type.endsWith("Input");
    const element = document.createElement(
      isValueInput || item.type === "checkbox"
        ? "input"
        : item.type === "selectMenu"
        ? "select"
        : "button"
    );
    if (item.type === "textInput") element.type = "text";
    if (item.placeholder) element.placeholder = item.placeholder;
    if (isValueInput || item.type === "selectMenu")
      inputFields[item.for] = element;
    if (item.text) element.innerText = item.text;
    if (item.action) element.addEventListener("click", item.action);
    if (item.label) label.append(item.label + " ");
    if (item.note) {
      const note = document.createElement("small");
      note.innerText = item.note;
      label.append(document.createElement("br"), note);
    }
    if (item.options)
      item.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", option.value);
        optionElement.innerText = option.label;
        element.append(optionElement);
      });
    label.append(element);
    if (item.type === "checkbox") {
      element.type = "checkbox";
      const checkmark = document.createElement("span");
      checkmark.className = "checkmark";
      label.className = "checkbox";
      label.append(checkmark);
      checkboxFields[item.for] = element;
    } else label.append(document.createElement("br"));
    settingsContainer.append(label, document.createElement("br"));
  });
  this.save = function () {
    Object.keys(inputFields).forEach(function (key) {
      settings[key] = inputFields[key].value.trim();
    });
    Object.keys(checkboxFields).forEach(function (key) {
      settings[key] = checkboxFields[key].checked;
    });
    customElements.forEach((element) => element.save?.(settings));
    this.applySettings();
    WindowManager.closeWindow("settings");
    discontinuedSettings.forEach((settingName) => delete settings[settingName]);
    localStorage.setItem("fx_settings", JSON.stringify(settings));
    window.location.reload();
  };

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  function handleFileSelect(event) {
    const input = event.target;
    /** @type {File} */
    const selectedFile = input.files[0];
    if (!selectedFile) return;

    input.removeEventListener("change", handleFileSelect);
    input.value = "";
    if (!selectedFile.name.endsWith(".json"))
      return alert("Invalid file format");
    const fileReader = new FileReader();
    fileReader.onload = function () {
      let result;
      try {
        result = JSON.parse(fileReader.result);
        if (
          confirm(
            'Warning: This will override all current settings, click "OK" to confirm'
          )
        )
          __fx.settings = settings = result;
        localStorage.setItem("fx_settings", JSON.stringify(settings));
        window.location.reload();
      } catch (error) {
        alert("Error\n" + error);
      }
    };
    fileReader.readAsText(selectedFile);
  }
  this.importFromFile = function () {
    fileInput.click();
    fileInput.addEventListener("change", handleFileSelect);
  };
  this.exportToFile = function () {
    saveFile(
      JSON.stringify(settings),
      "FX_client_settings.json",
      "application/json"
    );
  };

  this.syncFields = function () {
    Object.keys(inputFields).forEach(function (key) {
      inputFields[key].value = settings[key];
    });
    Object.keys(checkboxFields).forEach(function (key) {
      checkboxFields[key].checked = settings[key];
    });
    customElements.forEach((element) => element.update?.(settings));
  };
  this.resetAll = function () {
    if (
      !confirm(
        "Are you Really SURE you want to RESET ALL SETTINGS back to the default?"
      )
    )
      return;
    localStorage.removeItem("fx_settings");
    window.location.reload();
  };
  this.applySettings = function () {
    if (settings.customBackgroundUrl !== "") {
      document.body.style.backgroundImage =
        "url(" + settings.customBackgroundUrl + ")";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    }
    __fx.makeMainMenuTransparent = settings.customBackgroundUrl !== "";
  };

  if (settings.useFullscreenMode) tryEnterFullscreen();
})();

export function tryEnterFullscreen() {
  if (document.fullscreenElement !== null || !document.fullscreenEnabled) return
  document.documentElement
    .requestFullscreen({ navigationUI: "hide" })
    .then(() => console.log("Fullscreen mode activated"))
    .catch((error) => console.warn("Could not enter fullscreen mode:", error))
}

const openCustomBackgroundFilePicker = () => {
  const fileInput = document.getElementById("customBackgroundFileInput");
  fileInput.click();
  fileInput.addEventListener("change", handleFileSelect);
};
function handleFileSelect(event) {
  const fileInput = event.target;
  const selectedFile = fileInput.files[0];
  console.log(fileInput.files);
  console.log(fileInput.files[0]);
  if (selectedFile) {
    const fileUrl = URL.createObjectURL(selectedFile);
    console.log("File URL:", fileUrl);
    fileInput.value = "";
    fileInput.removeEventListener("change", handleFileSelect);
  }
}

WindowManager.add({
  name: "settings",
  element: document.querySelector(".settings"),
  beforeOpen: function () {
    settingsManager.syncFields();
  },
});

if (localStorage.getItem("fx_settings") !== null) {
  __fx.settings = settings = {
    ...settings,
    ...JSON.parse(localStorage.getItem("fx_settings")),
  };
}

// migrate old emoji settings to new
if (settings.emojiBar !== undefined || settings.customEmojiBar !== undefined) {
  if (settings.customQuickEmojis.length === 0 && !settings.customQuickEmojisEnabled) {
    if (Array.isArray(settings.emojiBar) && settings.emojiBar.length === 9) settings.customQuickEmojis = settings.emojiBar;
    if (settings.customEmojiBar) settings.customQuickEmojisEnabled = true;
  }
  delete settings.emojiBar;
  delete settings.customEmojiBar;
  localStorage.setItem("fx_settings", JSON.stringify(settings));
}

settingsManager.applySettings();

export default settingsManager;
export function getSettings() {
  return settings;
}
export function saveSettings() {
  localStorage.setItem("fx_settings", JSON.stringify(settings));
}
