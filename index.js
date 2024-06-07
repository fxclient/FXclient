import downloadGame from "./download.js";
console.log("Building FX Client");
await downloadGame();
import("./build.js");