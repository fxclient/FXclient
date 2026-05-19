import { definePatch, insert } from "../modUtils.js"
import { styleText } from "node:util";

export default definePatch(({ insertCode, modifyCode, replaceCode }) => {

  // Display tick number near the moving bars in the balance box
  modifyCode(`zH.fillStyle = eh === 9 ? bD.pD : bD.o5;
		var aB7 = ae.aB8;
		var aB9 = "+" + aB7;
		var tS = zH.measureText(aB9).width;
		var aBA = Math.floor(this.j / 12);
		var nV = 0.5 * (i + tR) + aBA;
		if (nV + tS + aAv <= i) {
			zH.fillText(aB9, Math.floor(nV + 0.5 * tS), Math.floor(0.3 * this.j));
		} else if (aB7 >= 1000) {
			aB9 = "+" + Math.floor(aB7 / 1000) + "K";
			tS = zH.measureText(aB9).width;
			if (nV + tS + aAv <= i) {
				zH.fillText(aB9, Math.floor(nV + 0.5 * tS), Math.floor(0.3 * this.j));
			}
		}
		${insert(`if (__fx.settings.displayTickNumber)
      zH.fillText(9 - eh, Math.floor(aAv * 2 + aBA), Math.floor(0.3 * this.j));`)}`)

  // Add FX Client version info to the game version window
  modifyCode(`4, 1, new g(__L(), b.c + "<br>" + d.e.f("/changelog")
    ${insert(` + "<br><br><b>" + "FX Client v" + __fx.version
      + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>"
      + "<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>"`)} /*...*/)`)
  
  // Hide propaganda popup
  insertCode(`/* here */
    a = b.c + 60 * 1000;
    (new ea()).show(eS.eb, eS.colors, eS.id);
    eS = null;
    return true;`, `if (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive()) return;`)
  modifyCode(`if (!a.b.c(0)) {
			d = e.f + 1000 * 1;
			return;
		} ${insert(`if (!__fx.settings.hidePropagandaPopup && !__fx.customLobby.isActive())`)} a.g.h(5);`)

  // Disable built-in Territorial.io error reporting
  insertCode(
    `window.removeEventListener("error", err);
    msg = e.lineno + " " + e.colno + "|" + getStack(e); /* here */`,
    `__fx.reportError(e, msg);
    return alert("Error:\\n" + e.filename + " " + e.lineno + " " + e.colno + " " + e.message);`
  )

  // Invalid hostname detection avoidance
  replaceCode(`this.hostnameIsValid = a.indexOf("territorial.io") >= 0;`, `this.hostnameIsValid = true;`)

  // for the custom lobby version
  try {
    modifyCode(`new a("⚔️<br>" + __L(), function() {
      ${insert(`if (__fx.isCustomLobbyVersion) alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/")
      else`)} b(0);
		}, ${insert(`__fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : `)} c.d)`)
  } catch (error) {
    console.warn(styleText("yellow", `Warning: failed to apply patches specific to the custom lobby version`))
  }
})