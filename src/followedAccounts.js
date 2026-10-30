import { getSettings, saveSettings } from "./settings.js";
import { isColor, labelEntry, openLabelEditor } from "./accountLabels.js";

const NICKNAME_MAX_LENGTH = 20;

let entries = [];
let accountNames = [];

function getStored(settingName) {
  const stored = getSettings()[settingName];
  return stored !== null && typeof stored === "object" ? stored : {};
}

function getNickname(accountName) {
  const nickname = getStored("followedAccountNicknames")[accountName];
  return typeof nickname === "string" ? nickname.trim().slice(0, NICKNAME_MAX_LENGTH) : "";
}

function getColor(accountName) {
  const color = getStored("followedAccountColors")[accountName];
  return isColor(color) ? color : "";
}

function setStored(settingName, accountName, value) {
  const stored = getStored(settingName);
  if (value) stored[accountName] = value;
  else delete stored[accountName];
  getSettings()[settingName] = stored;
}

function render() {
  entries.forEach((entry, i) => labelEntry(entry, accountNames[i], getNickname(accountNames[i]), getColor(accountNames[i])));
}

function decorate(listEntries, listAccountNames) {
  entries = listEntries;
  accountNames = listAccountNames;
  render();
}

function syncAccountNames(listAccountNames) {
  if (Array.isArray(listAccountNames)) accountNames = listAccountNames;
}

function isFollowed(accountName) {
  if (typeof accountName !== "string") return false;
  const normalize = name => (typeof name === "string" ? name : "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^\s*\[[^\]]+\]\s*/, "")
    .replace(/[^\p{L}\p{N}]/gu, "")
    .toLocaleLowerCase();
  const normalizedName = normalize(accountName);
  if (!normalizedName) return false;
  const knownNames = new Set([
    ...accountNames,
    ...Object.keys(getStored("followedAccountNicknames")),
    ...Object.keys(getStored("followedAccountColors")),
  ].map(normalize).filter(Boolean));
  return knownNames.has(normalizedName);
}

function getLobbyDetails(accountName) {
  const followed = isFollowed(accountName);
  return {
    followed,
    nickname: followed ? getNickname(accountName) : "",
    color: followed ? getColor(accountName) : "",
  };
}

function edit(selectedIndex) {
  const accountName = accountNames[selectedIndex];
  if (accountName === undefined) return;
  openLabelEditor({
    title: "Followed Account Nickname",
    accountName,
    label: getNickname(accountName),
    color: getColor(accountName),
    placeholder: "Nickname",
    maxLength: NICKNAME_MAX_LENGTH,
    onSave: (nickname, color) => {
      setStored("followedAccountNicknames", accountName, nickname);
      setStored("followedAccountColors", accountName, color);
      saveSettings();
      render();
    }
  });
}

export default { decorate, syncAccountNames, edit, isFollowed, getLobbyDetails };
