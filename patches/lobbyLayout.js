import ModUtils from "../modUtils.js";
import { patchLobbyLayout } from "../patchUtils/lobbyLayoutAst.js";

export default (/** @type {ModUtils} */ modUtils) => {
    try {
        const result = patchLobbyLayout(modUtils.script);
        modUtils.script = result.script;
        const applied = result.results.filter(patch => patch.applied).length;
        console.info(`[FXClient] Lobby AST patches: ${applied}/${result.results.length} applied.`);
        for (const patch of result.results) {
            if (!patch.applied) console.warn(`[FXClient] Skipped lobby patch "${patch.id}": ${patch.reason}`);
        }
    } catch (error) {
        console.warn("[FXClient] Lobby AST parsing failed; lobby patches were skipped.", error);
    }
};
