// @ts-check
import beautifier from 'js-beautify';
const { js: beautify } = beautifier;
import UglifyJS from 'uglify-js';
import fs from 'fs';
import webpack from 'webpack';
import path from 'path';
import ModUtils, { minifyCode } from './modUtils.js';

if (!fs.existsSync("./build")) fs.mkdirSync("./build");
fs.cpSync("./static/", "./build/", { recursive: true });
fs.cpSync("./assets/", "./build/assets/", { recursive: true });
const buildTimestamp = Date.now().toString();
fs.writeFileSync("./build/index.html", fs.readFileSync("./build/index.html").toString().replace(/buildTimestamp/g, buildTimestamp));
fs.writeFileSync("./build/sw.js", fs.readFileSync("./build/sw.js").toString().replace("buildTimestamp", buildTimestamp));

const buildClientCode = () => /** @type {Promise<void>} */(new Promise((resolve, reject) => {
	webpack({
		mode: 'production',
		entry: { fxClient: "./src/main.js" },
		output: {
		  path: path.resolve(import.meta.dirname, 'build'),
		  filename: 'fx.bundle.js',
		},
	}, (err, stats) => {
		if (err) {
			if (err.details) console.error(err.details);
			return reject(err);
		}
		const info = stats.toJson();
    	if (stats.hasWarnings()) console.warn(info.warnings);
    	if (stats.hasErrors()) {
			console.error(info.errors);
			reject("Webpack compilation error");
		}
		else resolve();
	});
}));

let script = fs.readFileSync('./game/latest.js', { encoding: 'utf8' }).trim();

const exposeVarsToGlobalScope = true;
// need to first remove the iife wrapper so the top-level functions aren't inlined
if (exposeVarsToGlobalScope && script.startsWith("\"use strict\";    (function () {") && script.endsWith("})();"))
	script = script.slice("\"use strict\";    (function () {".length, -"})();".length);
if (exposeVarsToGlobalScope && script.startsWith("(function () {") && script.endsWith("})();"))
	script = script.slice("(function () {".length, -"})();".length);

// uncompress strings
// this will break if the sequence `"];` appears in one of the strings
const stringArrayRaw = script.match(/var S=(\[.+?"\]);/)?.[1];
if (stringArrayRaw === undefined) throw new Error("cannot find the string array");
const stringArray = JSON.parse(stringArrayRaw);
script = script.replace(/\bS\[(\d+)\]/g, (_match, index) => `"${stringArray[index]}"`);

const modUtils = new ModUtils(minifyCode(script));

import applyPatches from './patches/main.js';
console.log("Applying patches...");
applyPatches(modUtils);

// for versions ^1.99.5.2
const minificationResult = UglifyJS.minify(modUtils.script, {
	"compress": { "arrows": false },
	"mangle": false
});
if (minificationResult.error) {
	console.log("error while passing through UglifyJS, replaceCode replacements might have caused errors");
	throw minificationResult.error;
}
if (minificationResult.warnings) console.log(minificationResult.warnings);
modUtils.script = minificationResult.code;

const {
    matchDictionaryExpression,
    generateRegularExpression
} = modUtils;
const dictionary = modUtils.dictionary;

[
	/,this\.(?<gIsTeamGame>\w+)=this\.\w+<7\|\|9===this\.\w+,/g,
	/=function\((\w+),(\w+),\w+\){\1===(?<game>\w+)\.(?<playerId>\w+)\?\w+\(175," "\+\w+\(\d+,\[(?<playerData>\w+)\.(?<playerNames>\w+)\[\2\]\]\)\+": ",1001,\2,\w+\(/g,
	/function \w+\(\)\{if\(2===(?<game>\w+)\.(?<gameState>\w+)\)return 1;\w+\.\w+\(\),\1\.\2=2,\1\.\w+=\1.\w+\}/g,
	/(function \w+\((\w+),(?<fontSize>\w+),(?<x>\w+),(?<y>\w+),(?<canvas>\w+)\){)(\6\.fillText\((?<playerData>\w+)\.(?<playerNames>\w+)\[\2\],\4,\5\)),(\2<(?<game>\w+)\.(?<gHumans>\w+)&&2!==\8\.(?<playerStates>\w+)\[[^}]+)}/g,
	/\w+\.font=(?<fontGeneratorFunction>\w+\.\w+\.\w+)\(1,\.39\*this\.\w+\),/g
].forEach(matchDictionaryExpression);

const rawCodeSegments = [
	`aQ.eI(e0)?aQ.eE(e0)?a38=__L([a38]):(player=aQ.eF(e0),oq=__L([b0.uS.zG(@playerData.@rawPlayerNames[player],b0.p9.qQ(0,10),150)])+"   ",oq=(oq+=__L([b0.wx.a07(playerData.@playerBalances[player])])+"   ")+__L([b0.wx.a07(playerData.@playerTerritories[player])])+"   ",`,
	"1===a.b?this.@gLobbyMaxJoin=this.@gHumans:this.gLobbyMaxJoin=this.@data.@playerCount,this.tZ=this.gLobbyMaxJoin,this.@gBots=this.gLobbyMaxJoin-this.gHumans,this.sg=0,",
	"[0]=__L(),@strs[1]=@game.@gIsSingleplayer?__L():__L(),",
	"?(this.gB=Math.floor(.066*aK.fw),g5=aK.g5-4*@uiSizes.@gap-this.gB):",
	`for(a0L=new Array(@game.@gMaxPlayers),a0A.font=a07,@i=game.gMaxPlayers-1;0<=i;i--)a0L[i]=i+1+".",@playerData.@playerNames[i]=aY.qW.tm(playerData.@rawPlayerNames[i],a07,a0W),a0K[i]=Math.floor(a0A.measureText(playerData.playerNames[i]).width);`,
	`var dt=@MenuManager.@getState();if(6===dt){if(4211===d)`
]

rawCodeSegments.forEach(code => {
	const { expression } = generateRegularExpression(code, true);
	//console.log(expression);
	matchDictionaryExpression(expression);
});

modUtils.executePostMinifyHandlers();
script = modUtils.script;

console.log("Building client code...")

await buildClientCode();
// the dictionary should maybe get embedded into one of the files in the bundle
fs.writeFileSync(
	"./build/fx.bundle.js",
	`const buildTimestamp = "${buildTimestamp}"; const dictionary = ${JSON.stringify(dictionary)};\n`
	+ fs.readFileSync("./build/fx.bundle.js").toString()
);

console.log("Formatting code...");

script = beautify(script, {
	"indent_size": 1,
	"indent_char": "\t",
	"max_preserve_newlines": 5,
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
	"wrap_line_length": 250,
	"indent_inner_html": false,
	"comma_first": false,
	"e4x": false,
	"indent_empty_lines": false
});

fs.writeFileSync("./build/game.js", script);
console.log("Wrote ./build/game.js");
console.log("Build done");