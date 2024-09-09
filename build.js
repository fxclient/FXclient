import beautifier from 'js-beautify';
const { js: beautify } = beautifier;
import UglifyJS from 'uglify-js';
import fs from 'fs';

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.cpSync("./static/", "./build/", { recursive: true });
fs.cpSync("./assets/", "./build/assets/", { recursive: true });
fs.cpSync("./src/fx_core.js", "./build/fx_core.js");
fs.writeFileSync("./build/index.html", fs.readFileSync("./build/index.html").toString().replace(/buildTimestamp/g, Date.now()));
let script = fs.readFileSync('./game/latest.js', { encoding: 'utf8' }).replace("\n", "").trim();

const exposeVarsToGlobalScope = true;
// need to first remove the iife wrapper so the top-level functions aren't inlined
if (exposeVarsToGlobalScope && script.startsWith("\"use strict\";    (function () {") && script.endsWith("})();"))
	script = script.slice("\"use strict\";    (function () {".length, -"})();".length);
if (exposeVarsToGlobalScope && script.startsWith("(function () {") && script.endsWith("})();"))
	script = script.slice("(function () {".length, -"})();".length);

// for versions ^1.99.5.2
const minificationResult = UglifyJS.minify(script, {
	"compress": { "arrows": false },
	"mangle": false
});
if (minificationResult.error) console.log(minificationResult.error);
if (minificationResult.warnings) console.log(minificationResult.warnings);
script = minificationResult.code;

const replaceOne = (expression, replaceValue) => {
    const result = matchOne(expression);
    // this (below) works correctly because expression.lastIndex gets reset above in matchOne when there is no match
    script = script.replace(expression, replaceValue);
    return result;
}
const replace = (...args) => script = script.replace(...args);
const matchOne = (expression) => {
	const result = expression.exec(script);
    if (result === null) throw new Error("no match for: ") + expression;
	if (expression.exec(script) !== null) throw new Error("more than one match for: " + expression);
	return result;
}
// https://stackoverflow.com/a/63838890
const escapeRegExp = (string) => string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

//const dictionary = { __dictionaryVersion: '1.90.0   4 Feb 2024', playerId: 'bB', playerNames: 'hA', playerBalances: 'bC', playerTerritories: 'bj', gIsSingleplayer: 'fc', gIsTeamGame: 'cH' };
//if (!script.includes(`"${dictionary.__dictionaryVersion}"`)) throw new Error("Dictionary is outdated.");
const dictionary = {};

const matchDictionaryExpression = expression => {
	const result = expression.exec(script);
	if (result === null) throw new Error("no match for ") + expression;
	if (expression.exec(script) !== null) throw new Error("more than one match for: ") + expression;
	for (let [key, value] of Object.entries(result.groups)) dictionary[key] = value;
}

// Return value example:
// When replaceRawCode or matchRawCode are called with "var1=var2+1;" as the code
// and this matches "a=b+1;", the returned value will be the object: { var1: "a", var2: "b" }
const replaceRawCode = (/** @type {string} */ raw, /** @type {string} */ result, nameMappings) => {
	const { expression, groups } = generateRegularExpression(raw, false, nameMappings);
	let localizerCount = 0;
	let replacementString = result.replaceAll("$", "$$").replaceAll("__L()", "__L)").replaceAll("__L(", "__L,")
	.replace(/\w+/g, match => {
		// these would get stored as "___localizer1", "___localizer2", ...
		if (match === "__L") match = "___localizer" + (++localizerCount);
		return groups.hasOwnProperty(match) ? "$" + groups[match] : match;
	});
	//console.log(replacementString);
	let expressionMatchResult;
	try { expressionMatchResult = replaceOne(expression, replacementString); }
	catch (e) {
		throw new Error("replaceRawCode match error:\n\n" + e + "\n\nRaw code: " + raw + "\n");
	}
	return Object.fromEntries(Object.entries(groups).map(([identifier, groupNumber]) => [identifier, expressionMatchResult[groupNumber]]));
}
const matchRawCode = (/** @type {string} */ raw, nameMappings) => {
	const { expression, groups } = generateRegularExpression(raw, false, nameMappings);
	const expressionMatchResult = matchOne(expression);
	return Object.fromEntries(Object.entries(groups).map(([identifier, groupNumber]) => [identifier, expressionMatchResult[groupNumber]]));
}
const generateRegularExpression = (/** @type {string} */ code, /** @type {boolean} */ isForDictionary, nameMappings) => {
	const groups = {};
	let groupNumberCounter = 1;
	let localizerCount = 0;
	let raw = escapeRegExp(code).replaceAll("__L\\(\\)", "___localizer\\)")
		// when there is a parameter, add a comma to separate it from the added number
		.replaceAll("__L\\(", "___localizer,");
	raw = raw.replace(isForDictionary ? /(?:@@)*(@?)(\w+)/g : /()(\w+)/g, (_match, modifier, word) => {
		// if a substitution string for the "word" is specified in the nameMappings, use it
		if (nameMappings && nameMappings.hasOwnProperty(word)) return nameMappings[word];
		// if the "word" is a number or is one of these specific words, ingore it
		if (/^\d/.test(word) || ["return", "this", "var", "function", "Math"].includes(word)) return word;
		// for easy localizer function matching
		else if (word === "___localizer") {
			groups[word + (++localizerCount)] = groupNumberCounter++;
			return "\\b(L\\(\\d+)"; // would match "L(123", "L(50" and etc. when using "__L("
		}
		else if (groups.hasOwnProperty(word)) return "\\" + groups[word]; // regex numeric reference to the group
		else {
			groups[word] = groupNumberCounter++;
			return modifier === "@" ? `(?<${word}>\\w+)` : "(\\w+)";
		}
	});
	let expression = new RegExp(isForDictionary ? raw.replaceAll("@@", "@") : raw, "g");
	return { expression, groups };
}

[
	/,this\.(?<gIsTeamGame>\w+)=this\.\w+<7\|\|9===this\.\w+,/g,
	/=function\((\w+),(\w+),\w+\){\1===(?<game>\w+)\.(?<playerId>\w+)\?\w+\(175," "\+\w+\(\d+,\[(?<playerData>\w+)\.(?<playerNames>\w+)\[\2\]\]\)\+": ",1001,\2,\w+\(/g,
	/function \w+\(\)\{if\(2===(?<game>\w+)\.(?<gameState>\w+)\)return 1;\w+\.\w+\(\),\1\.\2=2,\1\.\w+=\1.\w+\}/g,
	/(function \w+\((\w+),(?<fontSize>\w+),(?<x>\w+),(?<y>\w+),(?<canvas>\w+)\){)(\6\.fillText\((?<playerData>\w+)\.(?<playerNames>\w+)\[\2\],\4,\5\)),(\2<(?<game>\w+)\.(?<gHumans>\w+)&&2!==\8\.(?<playerStates>\w+)\[[^}]+)}/g,
	/\w+\.font=(?<fontGeneratorFunction>\w+\.\w+\.\w+)\(1,\.39\*this\.\w+\),/g
].forEach(matchDictionaryExpression);

const rawCodeSegments = [
	`aR.f1(fy)?aR.fB(fy)?a0z=__L([a0z]):(player=aR.fA(fy),oM=__L([b1.t9.xw(@playerData.@rawPlayerNames[player],b1.kx.l2(0,10),150)])+"   ",a0z=(oM+=__L([b1.l5.l6(playerData.@playerBalances[player])])+"   ")+(__L([b1.l5.l6(playerData.@playerTerritories[player])])+"   ")+`,
	"this.@gIsSingleplayer?this.@gLobbyMaxJoin=@SingleplayerMenu.@getSingleplayerPlayerCount():this.gLobbyMaxJoin=this.@gMaxPlayers,this.@gBots=this.gLobbyMaxJoin-this.@gHumans,this.sg=0,",
	"[0]=__L(),@strs[1]=@game.@gIsSingleplayer?__L():__L(),",
	"?(this.gB=Math.floor(.066*aK.fw),g5=aK.g5-4*@uiSizes.@gap-this.gB):",
	`for(a0L=new Array(@game.@gMaxPlayers),a0A.font=a07,@i=game.gMaxPlayers-1;0<=i;i--)a0L[i]=i+1+".",@playerData.@playerNames[i]=aY.qW.tm(playerData.@rawPlayerNames[i],a07,a0W),a0K[i]=Math.floor(a0A.measureText(playerData.playerNames[i]).width);`,
]

rawCodeSegments.forEach(code => {
	const { expression } = generateRegularExpression(code, true);
	//console.log(expression);
	matchDictionaryExpression(expression);
});

fs.writeFileSync("./build/fx_core.js", `const dictionary = ${JSON.stringify(dictionary)};\n` + fs.readFileSync("./build/fx_core.js").toString());

import applyPatches from './patches.js';
applyPatches({ replace, replaceOne, replaceRawCode, dictionary, matchOne, matchRawCode, escapeRegExp });

console.log("Formatting code...");

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