const beautify = require('js-beautify').js;
const fs = require('fs');

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.cpSync("./static/", "./build/", { recursive: true });
let script = fs.readFileSync('./game/latest.js', { encoding: 'utf8' }).replace("\n", "").trim();

const replaceOne = (expression, replaceValue) => {
    const result = expression.exec(script);
    if (result === null) throw new Error("no match for: ") + expression;
	if (expression.exec(script) !== null) throw new Error("more than one match for: " + expression);
    // this (below) works correctly because expression.lastIndex gets reset in the line above when there is no match
    script = script.replace(expression, replaceValue);
    return result;
}

const dictionary = { __dictionaryVersion: "1.89.4   30 Jan 2024", playerId: "bA", playerNames: "gn", gIsSingleplayer: "fH", gIsTeamGame: "di" };
if (!script.includes(`"${dictionary.__dictionaryVersion}"`)) throw new Error("Dictionary is outdated.");

// Replace assets
const assets = require('./assets.js');
replaceOne(/(\(4,"crown",4,")[^"]+"\),/g, "$1" + assets.crownIcon + "\"),");
replaceOne(/(\(6,"territorial\.io",6,")[^"]+"\),/g, "$1" + assets.fxClientLogo + "\"),");

// Add FXClient menu item in "More" menu
// match },ug[0][5]={name:a79,id:5,mf:90,oU:0,e8:0},
replaceOne(/(},(\w+\[0\])\[\d+\]={(\w+):\w+,(\w+):\d+,(\w+):90,(\w+):0,(\w+):0},)/g,
    '$1$2.push({$3:"FX Client v" + fx_version + " " + fx_update, $4: 20, $5: 0, $6: 0, $7: 70}),');
// Do not display hover effect on the last 2 items (territorial.io version and FX Client version) instead of only the last item
// match 0 === a9P ? ug[a9P].length - 1 : ug[a9P].length : 1,
replaceOne(/(0===(\w+)\?(\w+)\[\2\]\.length)-1:(\3\[\2\]\.length:1,)/g, "$1 - 2 : $4");

// Max size for custom maps: from 4096x4096 to 8192x8192
// TODO: test this; it might cause issues with new boat mechanics?

// Add Troop Density and Maximum Troops in side panel -- todo

// Increment win counter on wins
replaceOne(/(=function\((\w+)\){)([^}]+),((\w+\(0),\w+<100\?\w+\[\w+\]\+" won the game."[^,]+,([^()]+?\))),(?<end>[^}]+},)/g,
`$1 if (${dictionary.playerId} === $2) wins_counter++, window.localStorage.setItem("fx_win_count", wins_counter); ` +
`$3, $4, $5, "Your Current Win Count is Now " + wins_counter, $6, $<end>`);

// Add settings button and win count
// render gear icon and win count
// cV.textAlign=cX,cV.textBaseline=cW,a03(a9Y.gb,a9Y.gc,a9Y.m5,a9Y.tD,ug[a9P][0].mf,ug[a9P][0].oU,ug[a9P][0].e8,0===yk,ug[a9P][0].name),a9O))
// l(A.f3, A.f4, A.hw, A.nI, z[0].f7, z[0].mx, z[0].cm, 0 === t, z[0].name, .6);
// cH.drawImage(settingsGearIcon,A.f3-A.hw/2,A.f4,A.nI,A.nI);
// cH.font = bt + Math.floor(A.nI * 0.4) + bu;
// cH.fillText("Win count: " + wins_counter, Math.floor(A.f3 + A.hw / 2), Math.floor((A.f4 + A.nI / 2) * 2.1));
const { groups } = replaceOne(/((?<canvas>\w+)\.textAlign=\w+,\2\.textBaseline=\w+,\w+\((?<x>(?<coords>\w+).\w+),(?<y>\4.\w+),(?<w>\4.\w+),(?<h>\4.\w+),[^)]+\)),(?<end>(?<isMenuOpened>\w+)\)\))/g, '$1, ' +
'$<canvas>.imageSmoothingEnabled = true, ' +
'$<canvas>.drawImage(settingsGearIcon, $<x>-$<w>/2, $<y>, $<h>, $<h>), ' +
'$<canvas>.imageSmoothingEnabled = false, ' +
'$<canvas>.font = "bold " + Math.floor($<h> * 0.4) + "px " + settings.fontName, ' +
'(!$<isMenuOpened> && $<canvas>.fillText("Win count: " + wins_counter, Math.floor($<x> + $<w> / 2), Math.floor(($<y> + $<h> / 2) * 2.1))), ' +
'$<end>');
// handle settings button click
replaceOne(/(this\.\w+=function\((?<mouseX>\w+),(?<mouseY>\w+)\){[^}]+?)if\((?<coordsGet>\w+=\w+\(\)),(?<isMenuOpened>\w+)\)(?<end>{for\([^}]+"Lobby ")/g,
'$1 $<coordsGet>; ' +
`var gearIconX = ${groups.x}-${groups.w}/2; ` +
// if (y > (C.f3-C.hw/2) && y < ((C.f3-C.hw/2)+C.nI) && A > C.f4 && A < (C.f4 + C.nI)) WindowManager.openWindow("settings");
`if ($<mouseX> > gearIconX && $<mouseX> < (gearIconX+${groups.h}) && $<mouseY> > ${groups.y} && $<mouseY> < (${groups.y}+${groups.h})) return WindowManager.openWindow("settings"); ` +
'if ($<isMenuOpened>) $<end>');

// Enforce custom font name
script = script.replace(/"px sans-serif"/g, '"px " + settings.fontName');

// Realistic bot names setting
// matches c4[i] = c4[i].replace(a6U[dx], a6V[dx])
replaceOne(/(((\w+)\[\w+\])=\2\.replace\(\w+(\[\w+\]),\w+\4\))/g, "$1; if (settings.realisticNames) $3 = realisticNames;")

// Hide all links in main menu depending on settings
replaceOne(/(this\.\w+=function\(\){)((\w+\.\w+)\[2\]=\3\[3\]=\3\[4\]=(?<linksHidden>!this\.\w+\.\w+),)/g,
"$1 if (settings.hideAllLinks) $3[0] = $3[1] = $<linksHidden>; else $3[0] = $3[1] = true; $2")

// Track donations -- todo


// Display donations for a player when clicking on them in the leaderboard
// match , 0 !== dG[x]) && fq.hB(x, 800, false, 0),
replaceOne(/,(0!==\w+\[(\w+)\]\)&&\w+\.\w+\(\2,800,!1,0\),)/g,
	`, ${dictionary.gIsTeamGame} && displayDonationsHistory($2, ${dictionary.playerNames}, ${dictionary.gIsSingleplayer}), $1`);

console.log("Formatting code...");

exposeVarsToGlobalScope = true;

if (exposeVarsToGlobalScope && script.startsWith("\"use strict\";    (function () {") && script.endsWith("})();"))
	script = script.slice("\"use strict\";    (function () {".length, -"})();".length);
if (exposeVarsToGlobalScope && script.startsWith("(function () {") && script.endsWith("})();"))
	script = script.slice("(function () {".length, -"})();".length);

script = beautify(script, {
	"indent_size": "1",
	"indent_char": "\t",
	"max_preserve_newlines": "5",
	"preserve_newlines": true,
	"keep_array_indentation": false,
	"break_chained_methods": false,
	"indent_scripts": "normal",
	"brace_style": "collapse",
	//"brace_style": "expand",
	"space_before_conditional": true,
	"unescape_strings": false,
	"jslint_happy": false,
	"end_with_newline": false,
	"wrap_line_length": "250",
	"indent_inner_html": false,
	"comma_first": false,
	"e4x": false,
	"indent_empty_lines": false
});

fs.writeFileSync("./build/game.js", script);
console.log("Wrote ./build/game.js");
console.log("Build done");