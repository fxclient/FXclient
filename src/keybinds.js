import { getSettings } from "./settings.js";

export const keybindFunctions = { setAbsolute: () => {}, setRelative: () => {} };
export const keybindHandler = key => {
    const keybindData = getSettings().attackPercentageKeybinds.find(keybind => keybind.key === key);
    if (keybindData === undefined) return false;
    if (keybindData.type === "absolute") keybindFunctions.setAbsolute(keybindData.value);
    else keybindFunctions.setRelative(keybindData.value);
    return true;
};