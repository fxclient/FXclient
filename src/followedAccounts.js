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

export default { decorate, edit };
