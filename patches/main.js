import fs from 'fs'
import ModUtils from '../modUtils.js';

const modules = await Promise.all(fs.readdirSync("./patches").flatMap(fileName => {
    if (fileName === "main.js") return [];
    return import("./" + fileName).then(module => ({ name: fileName, module }));
}));

const requiredVariables = new Set(modules.flatMap(({ module }) => module.requiredVariables ?? []));

function runSafely(name, modUtils, callback) {
    const previousScript = modUtils.script;
    const previousDictionary = { ...modUtils.dictionary };
    const previousHandlerCount = modUtils.postMinifyHandlers.length;
    try {
        callback();
    } catch (error) {
        modUtils.script = previousScript;
        for (const key of Object.keys(modUtils.dictionary)) delete modUtils.dictionary[key];
        Object.assign(modUtils.dictionary, previousDictionary);
        modUtils.postMinifyHandlers.length = previousHandlerCount;
        console.warn(`[FXClient] Disabled game patch "${name}" for this game build.`, error);
    }
}

export default function applyPatches(/** @type {ModUtils} */ modUtils) {
    const dictionary = modUtils.dictionary;

    requiredVariables.forEach(varName => {
        if (!dictionary.hasOwnProperty(varName)) {
            throw new Error(`"${varName}" is required by a module but not defined the dictionary`);
        }
    });

    // apply patches (default exported function)
    modules.forEach(({ name, module }) => {
        const firstHandler = modUtils.postMinifyHandlers.length;
        runSafely(name, modUtils, () => module.default(modUtils));
        for (let index = firstHandler; index < modUtils.postMinifyHandlers.length; index++) {
            const handler = modUtils.postMinifyHandlers[index];
            modUtils.postMinifyHandlers[index] = () => runSafely(name, modUtils, handler);
        }
    });
}
