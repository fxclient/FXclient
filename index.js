console.log("Building FXClient");
require("./download.js")().then(() => require("./build.js"));