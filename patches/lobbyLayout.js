import ModUtils from "../modUtils.js";
import { patchLobbyLayout } from "../patchUtils/lobbyLayoutAst.js";

export default (/** @type {ModUtils} */ modUtils) => {
    const result = patchLobbyLayout(modUtils.script);
    modUtils.script = result.script;
    console.info(`[FXClient] Lobby AST patches: ${result.results.length}/${result.results.length} applied.`);
};
