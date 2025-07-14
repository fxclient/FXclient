import { getVar } from "./gameInterface.js";

let debugContext = null;

export function reportError(e, message) {
    function tryGetVar(name) {
        try { return getVar(name) }
        catch (error) { return error.toString(); }
    }
    message = e.filename + " " + e.lineno + " " + e.colno + " " + e.message + "\n" + message;
    fetch("https://fx.peshomir.workers.dev/stats/errors", {
        body: JSON.stringify({
            message,
            context: {
                debug: debugContext,
                gameState: tryGetVar("gameState"),
                singleplayer: tryGetVar("gIsSingleplayer"),
                swState: navigator.serviceWorker?.controller?.state,
                location: window.location.toString(),
                userAgent: navigator.userAgent,
                dictionary: JSON.stringify(dictionary),
                buildTimestamp,
                scripts: Array.from(document.scripts).map(s => s.src)
            }
        }),
        method: "POST"
    }).catch(e => alert("Failed to report error: " + e));
}

export function debugWithContext(callback, context) {
    try {
        return callback();
    } catch (error) {
        debugContext = context;
        setTimeout(() => {
            if (debugContext !== null) debugContext = null;
        });
        throw error;
    }
}