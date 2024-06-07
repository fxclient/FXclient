// Download game
// https://stackoverflow.com/a/11944984
import https from 'https'; // or 'https' for https:// URLs
import fs from 'fs';

const downloadGame = () => new Promise(resolve => {
if (!fs.existsSync("./game")) fs.mkdirSync("./game");
const file = fs.createWriteStream("./game/latest.html");
// Download the game's code from the website
const request = https.get("https://territorial.io", function (response) {
	// and save it to ./game/latest.html
	response.pipe(file);

	// after download completed close filestream
	file.on("finish", () => {
		file.close();
		console.log("Download Completed [downloaded to latest.html]");
		fs.readFile('./game/latest.html', 'utf8', function (err, data) {
			if (err) throw err;
			// Extract the game script from the html
			// https://stackoverflow.com/a/14867897
			const scriptContent = data.substring(
				data.indexOf("<script>") + "<script>".length,
				data.lastIndexOf("</script>")
			);
			// Write the script to ./game/latest.js without any line breaks
			fs.writeFileSync("./game/latest.js", scriptContent.replace(/\r?\n|\r/g, ""));
			console.log("Wrote script to latest.js");
			resolve();
		});

	});
});
});
export default downloadGame;