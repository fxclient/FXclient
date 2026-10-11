import { definePatch, insert } from "../modUtils.js"

export default definePatch(({ replaceRawCode, matchCode, insertCode, modifyCode }) => {
  // keep a rolling history of last 5 replays.
  modifyCode(`this.a3d = function(eY) {
		if (!bC.re.a6x.length) {
			this.a6l = bC.a6y.a1i();
		} else {
			this.a6l = bC.re.a6x;
		} ${insert(`__fx.replayHistory.save(this.a6l);`)} /*...*/}`)

  const { protocol, stripPrefix, parser, parseReplay, watchReplay } = matchCode(`
    function watchInput() {
      menuSystem.closeMenu();
      var input = protocol.stripPrefix(textArea.getText());
      if (game.gameState && input.length > 0 && input === protocol.recorder.replayData) {
        protocol.watchReplay();
        return;
      }
      if (!protocol.parser.parseReplay(input)) {
        return;
      }
      protocol.watchReplay();
    }`)

  insertCode(`
    this.stripPrefix = function(text) {
      var index = text.indexOf("=");
      if (index >= 0) {
        return text.substring(index + 1);
      }
      return text;
    };
    this.encode = function(text) {
      return text;
    };
    /* here */`,
    `__fx.replayHistory.load = (saved) => {
      saved = ${protocol}.${stripPrefix}(saved);
      if (${protocol}.${parser}.${parseReplay}(saved)) ${protocol}.${watchReplay}();
    };`)
})
