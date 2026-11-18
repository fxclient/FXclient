import { changes, version } from '../version.js';

import windowManager from "./windowManager.js";

const window = windowManager.create({
    name: "changelog",
    closeWithButton: true
});
const title = document.createElement("h1");
title.textContent = "What's new";
const description = document.createElement("p");
description.textContent = `in FX Client v${version}`;
window.append(title, description);

const lines = changes.split("\n");
let i = 0;
while (i < lines.length) {
    if (lines[i].startsWith("- ")) {
        const list = document.createElement("ul");
        while (i < lines.length && lines[i].startsWith("- ")) {
            const li = document.createElement("li");
            li.textContent = lines[i++].slice(2);
            list.append(li);
        }
        window.append(list);
    } else {
        const p = document.createElement("p");
        p.textContent = lines[i++];
        window.append(p);
    }
}

export function displayChangelog() {
    windowManager.openWindow("changelog");
}