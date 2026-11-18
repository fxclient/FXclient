import { definePatch } from "../modUtils.js";

// Apply the recommended territorial settings after the game has loaded its
// stored settings, so the defaults are not overwritten by old values.
export default definePatch(({ matchCode, replaceCode }) => {
  const { bm } = matchCode(`aCh=bm.buffer.data[11].value;aCh=aCh===0?10:aCh===1?5:1;`);

  const anchor = `this.buffer.dk();(new xH()).dk();this.xF.dk();this.z.xI();`;
  const apply = `
if(__fx.settings.applyRecommendedTerritorialSettings){
  bm.buffer.data[1].value=3;
  bm.buffer.data[9].value=2;
  bm.buffer.data[11].value=2;
  bm.buffer.data[7].value=1;
}`;
  replaceCode(anchor, anchor + apply, { dictionary: { bm } });
});
