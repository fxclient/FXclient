import versionData from '../version.json';
const { changes, version } = versionData;

import windowManager from "./windowManager.js";

const window = windowManager.create({
    name: "changelog",
    closeWithButton: true
});
const title = document.createElement("h1");
title.textContent = "What's new";
const description = document.createElement("p");
description.textContent = `in FX Client v${version}`;
const list = document.createElement("ul");
changes.forEach(change => {
    const item = document.createElement("li");
    item.textContent = change;
    list.appendChild(item);
});
window.append(title, description, list);

export function displayChangelog() {
    windowManager.openWindow("changelog");
}