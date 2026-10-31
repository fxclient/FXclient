import assert from "node:assert/strict";
import test from "node:test";
import { compactLobbyHeights } from "../patchUtils/lobbyLayoutAst.js";

const minifiedFixture = `function a(){this.resize=function(){var t=p(x*.05);var u=p(x*.06+.03*y);var v=p(x*.08+.03*y);var w=p(x*.02+.01*y)}}`;
const renamedFixture = `function modal(){ this.resize = function(){ var titleSize=scale(width * .05); var teamSize=scale(width * .06 + .03 * isTall); var modeSize=scale(width * .08 + .03 * isTall); var footerSize=scale(width * .02 + .01 * isTall); }; }`;

for (const [name, fixture] of [["minified names", minifiedFixture], ["renamed names and whitespace", renamedFixture]]) {
  test(`compacts lobby resize formulas with ${name}`, () => {
    const output = compactLobbyHeights(fixture);
    assert.match(output, /enhancedLobbyLayout\s*\?\s*\.034\s*:\s*\.05/);
    assert.match(output, /enhancedLobbyLayout\s*\?\s*\.04\s*:\s*\.06/);
    assert.match(output, /enhancedLobbyLayout\s*\?\s*\.04\s*:\s*\.08/);
    assert.match(output, /enhancedLobbyLayout\s*\?\s*\.016\s*:\s*\.02/);
    assert.match(output, /enhancedLobbyLayout\s*\?\s*\.007\s*:\s*\.01/);
  });
}

test("refuses to patch when lobby resize target is ambiguous or missing", () => {
  assert.throws(() => compactLobbyHeights("function noLobby(){this.resize=function(){var x=1}}"), /Expected one lobby resize function/);
  assert.throws(() => compactLobbyHeights(`${minifiedFixture}${minifiedFixture}`), /Expected one lobby resize function/);
});
