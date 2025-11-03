import { definePatch } from "../modUtils.js"

export default definePatch(({ insertCode }) => {

  // Hide propaganda popup
  insertCode(`/* here */
    a = b.c + 60 * 1000;
    (new ea()).show(eS.eb, eS.colors, eS.id);
    eS = null;
    return true;`, `if (__fx.settings.hidePropagandaPopup) return;`)

})