import fs from 'fs'
import ModUtils from '../modUtils.js';

const modules = await Promise.all(fs.readdirSync("./patches").flatMap(fileName => {
    if (fileName === "main.js") return [];
    else return import("./" + fileName);
}));

const requiredVariables = new Set(modules.map(module => module.requiredVariables ?? []).flat());

export default function applyPatches(/** @type {ModUtils} */ modUtils) {
    const dictionary = modUtils.dictionary;

    requiredVariables.forEach(varName => {
        if (!dictionary.hasOwnProperty(varName)) {
            throw new Error(`"${varName}" is required by a module but not defined the dictionary`);
        }
    });

    // apply patches (default exported function)
    modules.forEach(module => module.default(modUtils))
}
