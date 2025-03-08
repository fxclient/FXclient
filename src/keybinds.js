import { getUIGap, getVar } from "./gameInterface.js";
import { getSettings } from "./settings.js";

export const keybindFunctions = {
    setAbsolute: () => {},
    setRelative: () => {},
    repaintAttackPercentageBar: () => {}
};
export const keybindHandler = key => {
    const keybindData = getSettings().attackPercentageKeybinds.find(keybind => keybind.key === key);
    if (keybindData === undefined) return false;
    if (getVar("gameState") !== 0) executeKeybind(keybindData);
    return true;
};
function executeKeybind(keybind) {
    if (keybind.type === "absolute") keybindFunctions.setAbsolute(keybind.value);
    else keybindFunctions.setRelative(keybind.value);
    keybindFunctions.repaintAttackPercentageBar();
}

// mobile keybinds (keybind buttons)

let canvas;
let width = 0;
let height = 0;
const maxCount = 6;

export const mobileKeybinds = {
    setSize: (w, h, mainCanvas) => {
        if (getSettings().keybindButtons !== true) return;
        width = w;
        height = h;

        // redraw
        canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        const fontName = mainCanvas.font.split("px ", 2)[1];
        ctx.font = "bold " + h / 2 + "px " + fontName;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const keybinds = getSettings().attackPercentageKeybinds.slice(0, maxCount);
        const gap = getUIGap() / 4;
        const buttonWidth = (w - gap * (maxCount - 1)) / maxCount;
        keybinds.forEach((keybind, i) => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            ctx.fillRect(i * (buttonWidth + gap), 0, buttonWidth, h);
            ctx.fillStyle = "white";
            const label = keybind.type === "absolute" ? (keybind.value * 100).toFixed() + "%" : "x " + Math.round(keybind.value * 100) / 100;
            ctx.fillText(label, (i + 0.5) * (buttonWidth + gap), h / 2);
        });
    },
    click: (xRelative) => {
        if (xRelative < 0 || xRelative > width) return false;
        const keybinds = getSettings().attackPercentageKeybinds;
        const index = Math.floor(xRelative / width * maxCount);
        if (index >= keybinds.length) return false;
        executeKeybind(keybinds[index]);
        return true;
    },
    draw: (mainCanvas, x, y) => {
        mainCanvas.drawImage(canvas, x, y - (height + getUIGap() / 4));
    }
}