import { definePatch } from "../modUtils.js"

export default definePatch(({ insertCode, matchCode }) => {
    const option = `, willReadFrequently: true`
    insertCode(`this.a = function(canvas, alpha) { return canvas.getContext("2d", { alpha: alpha/* here */ }); };`, option)
    const { forced, resize } = matchCode(`this.a = function(b) { forced = true; resize(b); };
        this.c = function() { if (d + 1e3 > e.f) { return; } d = e.f; resize(0); };
        function resize(g) {/*...*/}`)
    const { mainCanvas } = matchCode(`function a() { mainCanvas = document.getElementById("canvasA");
        if (b.id === 2) { mainCanvas.style.webkitUserSelect = "none"; }/*...*/}`)
    insertCode(`this.a = function() { b = 1; c(); d(0); /* here */ }; function c() {/*...*/}`,
        `mainCanvas.addEventListener("contextrestored", function() { forced = true; resize(0); });`,
        { dictionary: { mainCanvas, forced, resize } })
    insertCode(`function a() {
        b.width = c.j; b.height = c.k;
        d = b.getContext("2d", { alpha: true });
        e.f.textAlign(d, 1); e.f.textBaseline(d, 1);
        d.imageSmoothingEnabled = true;
        /* here */
    }`, `b.oncontextrestored = a;`)
    insertCode(`a.b = a.c.getContext("2d", { alpha: false/* here */ }); d = a.b.getImageData(0, 0, a.e, a.f);`, option)
    insertCode(`a = b[c].getContext("2d", { alpha: false/* here */ });`, option)
    insertCode(`var canvas = document.createElement("canvas"); canvas.width = a.b; canvas.height = a.c;
        var d = canvas.getContext("2d", { alpha: false/* here */ }); var e = d.getImageData(0, 0, a.b, a.c);`, option)
    insertCode(`var canvas = document.createElement("canvas"); canvas.width = a; canvas.height = b;
        var c = canvas.getContext("2d"/* here */); var d = document.createElement("canvas");`, `, { willReadFrequently: true }`)
    insertCode(`var a = document.createElement("canvas"); var b = a.getContext("2d"/* here */);
        a.width = c.width; a.height = c.height; b.drawImage(c, 0, 0); d.data.canvas = a;`, `, { willReadFrequently: true }`)
})
