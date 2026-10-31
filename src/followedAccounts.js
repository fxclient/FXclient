import { getSettings, saveSettings } from "./settings.js";
import { isColor, labelEntry, openLabelEditor } from "./accountLabels.js";
import { createFollowedAccountIndex } from "./followedAccountIndex.js";

const NICKNAME_MAX_LENGTH = 20;

let entries = [];
let accountNames = [];
let accountNamesProvider = null;
const followedIndex = createFollowedAccountIndex();
const EMPTY_ACCOUNT_SETTINGS = Object.freeze({});

function getStored(settingName) {
  const stored = getSettings()[settingName];
  return stored !== null && typeof stored === "object" ? stored : EMPTY_ACCOUNT_SETTINGS;
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
  const current = getStored(settingName);
  const stored = current === EMPTY_ACCOUNT_SETTINGS ? {} : current;
  if (value) stored[accountName] = value;
  else delete stored[accountName];
  getSettings()[settingName] = stored;
  followedIndex.invalidate();
}

function render() {
  entries.forEach((entry, i) => labelEntry(entry, accountNames[i], getNickname(accountNames[i]), getColor(accountNames[i])));
}

function decorate(listEntries, listAccountNames) {
  entries = listEntries;
  syncAccountNames(listAccountNames);
  render();
}

function syncAccountNames(listAccountNames) {
  if (!Array.isArray(listAccountNames)) return;
  const changed = listAccountNames.length !== accountNames.length
    || listAccountNames.some((name, index) => name !== accountNames[index]);
  if (!changed) return;
  accountNames = listAccountNames.slice();
  followedIndex.invalidate();
}

function setAccountNamesProvider(provider) {
  if (typeof provider === "function") accountNamesProvider = provider;
}

function isFollowed(accountName) {
  if (typeof accountName !== "string") return false;
  if (accountNamesProvider) {
    try {
      syncAccountNames(accountNamesProvider());
    } catch {}
  }
  followedIndex.update(
    accountNames,
    getStored("followedAccountNicknames"),
    getStored("followedAccountColors")
  );
  return followedIndex.has(accountName);
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

export default { decorate, syncAccountNames, setAccountNamesProvider, edit, isFollowed, getLobbyDetails };
