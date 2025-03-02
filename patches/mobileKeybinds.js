export default (/** @type {import('../modUtils.js').default} */ { insertCode, replaceCode, matchCode }) => {

    const { mainCanvas, x, y } = insertCode(`this.te = function() {
		if (!this.b()) { return; }
		mainCanvas.drawImage(canvas, x, this.y);
        /* here */
	}`, `if (__fx.settings.keybindButtons) __fx.mobileKeybinds.draw(mainCanvas, x, this.y);`)

    const { h, redraw } = insertCode(`a6k = Math.floor(3 * this.h / 2);
		a4M = c.pZ.rN(1, Math.floor(0.5 * this.h));
		canvas = document.createElement("canvas");
		canvas.width = w;
        /* here */
        canvas.height = this.h;
		ctx = canvas.getContext("2d", { alpha: true });
		ctx.font = a4M;
		c.pZ.textBaseline(ctx, 1);
		c.pZ.textAlign(ctx, 1);
		this.a6m();
		redraw();
    `, `__fx.mobileKeybinds.setSize(w, this.h, mainCanvas)`, { dictionary: { mainCanvas } })

    const { ba, gap } = matchCode(`this.h = Math.floor(0.066 * h___.pb); w = h___.w - 4 * ba.gap - this.h;`);

    const { bd, requestRepaint } = insertCode(`this.gm = function(kt, ku) {
		if (!this.b()) { return false; }
        /* here */
		if (!a.a0n(kt, ku)) { return false; }
		aR.mC = false;
		if (a6w(this, kt, ku)) { bd.requestRepaint = true; }
		return true;
	};`,
    `if (__fx.settings.keybindButtons && ku > this.y - Math.floor(ba.gap / 4) - this.h && ku < this.y - Math.floor(ba.gap / 4) && __fx.mobileKeybinds.click(kt - x)) return true;`,
    { dictionary: { x, y, h, ba, gap } }
    )

    insertCode(
        `var a6l = 11 / 12; /* here */`,
        `__fx.keybindFunctions.repaintAttackPercentageBar = function() { redraw(); bd.requestRepaint = true; };`,
        { dictionary: { redraw, bd, requestRepaint } }
    )

    // fix to correctly display peace vote menu and game messages (prevent overlap with keybind buttons)
    replaceCode(`if (a.a4y(aM.a4u())) {
		if (au.b) { return a.y - a.h - 2 * a4a; }
        else { return a.y - a4a; }
	}`, `if (a.a4y(aM.a4u())) {
		if (au.b) { return __fx.settings.keybindButtons ? a.y - 2 * a.h - 3 * a4a : a.y - a.h - 2 * a4a; }
        else { return __fx.settings.keybindButtons ? a.y - a.h - 2 * a4a : a.y - a4a; }
	}`)
    insertCode(
        `if (a.a4y(aM.a4u())) { return /* here */ a.y - h - ba.gap; }`,
        `__fx.settings.keybindButtons ? a.y - 2 * (h + ba.gap) : `
    )

}