import { definePatch, insert } from "../modUtils.js";

export default definePatch(({ modifyCode, replaceCode }) => {

    modifyCode(`function drawLoadingBar(title, y, lineWidth, progress) {
        ctx.fillStyle = backgroundColor;
        drawShape(y, lineWidth, 1);
        ctx.fill();
        ctx.fillStyle = progressColor;
        drawShape(y, lineWidth, progress);
        ctx.fill();
        ctx.strokeStyle = colors.white;
        ${insert(`__fx.settings.smoothUI && (ctx.strokeStyle = "rgba(255, 255, 255, 0.3)", ctx.lineJoin = "round");`)}
        drawShape(y, lineWidth, 1);
        ctx.stroke();
        ${insert(`ctx.lineJoin = "miter";`)}
        /*...*/
    }`);
    replaceCode(`function drawBackButton(x, y, width, height, text) {
        ctx.fillStyle = colors.buttonFill;
        ctx.fillRect(x, y, width, height);
        ctx.lineWidth = 3;
        ctx.strokeStyle = colors.white;
        ctx.strokeRect(x, y, width, height);
        /*...*/
    }`, `function drawBackButton(x, y, width, height, text) {
        ctx.fillStyle = colors.buttonFill;
        ctx.beginPath();
        __fx.settings.smoothUI && ctx.roundRect ? ctx.roundRect(x, y, width, height, 0.1 * height) : ctx.rect(x, y, width, height);
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = __fx.settings.smoothUI ? "rgba(255, 255, 255, 0.3)" : colors.white;
        ctx.stroke();
        /*...*/
    }`);

    modifyCode(`ctx.fillStyle = colors.white;
        ${insert(`if (!__fx.utils.smoothFrame(ctx, size, size)) {`)}
        ctx.fillRect(0, 0, size, 1); ctx.fillRect(0, 0, 1, size); ctx.fillRect(0, size - 1, size, 1); ctx.fillRect(size - 1, 0, 1, size);
        ${insert(`}`)}`);
    modifyCode(`ctx.fillStyle = colors.white;
        ${insert(`if (!__fx.utils.smoothFrame(ctx, width, this.height, 1, 0, 0, this.height / 12)) {`)}
        ctx.fillRect(0, 0, width, 1); ctx.fillRect(0, 0, 1, this.height); ctx.fillRect(0, this.height - 1, width, 1); ctx.fillRect(width - 1, 0, 1, this.height);
        ${insert(`}`)}`);
    modifyCode(`ctx.fillStyle = colors.white;
        ${insert(`ctx.fillStyle = __fx.utils.lineColor(colors.white);
            if (!__fx.utils.smoothFrame(ctx, size.w, size.h)) {`)}
        ctx.fillRect(0, 0, size.w, 1); ctx.fillRect(0, 0, 1, size.h); ctx.fillRect(size.w - 1, 0, 1, size.h); ctx.fillRect(0, size.h - 1, size.w, 1);
        ${insert(`}`)}
        ctx.fillRect(0, size.h - barHeight - 1, size.w, 1);
        ${insert(`ctx.fillStyle = colors.white;`)}`);
    modifyCode(`ctx.fillStyle = colors.white;
        ${insert(`ctx.fillStyle = __fx.utils.lineColor(colors.white);
            var rounded = __fx.utils.smoothFrame(ctx, width, size.h);
            if (!rounded) {`)}
        ctx.fillRect(0, 0, width, 1); ctx.fillRect(0, size.h - 1, width, 1); ctx.fillRect(0, 0, 1, size.h);
        ${insert(`}`)}
        ctx.fillRect(button, 0, 1, size.h); ctx.fillRect(button + filled, 0, 1, size.h); ctx.fillRect(width - button, 0, 1, size.h);
        ${insert(`if (!rounded)`)}
        ctx.fillRect(width - 1, 0, 1, size.h);
        ${insert(`ctx.fillStyle = colors.white;`)}`);
    modifyCode(`ctx[i].lineWidth = width; ctx[i].fillStyle = colors.white; ctx[i].strokeStyle = colors.white;
        ${insert(`ctx[i].strokeStyle = __fx.utils.lineColor(colors.white);`)}`);
    modifyCode(`ctx.clearRect(0, 0, width, height); ctx.fillStyle = background; ctx.fillRect(0, 0, width, height);
        ${insert(`__fx.utils.smoothFrame(ctx, width, height, 0);`)}
        ctx.fillStyle = color; ctx.fillText(text, Math.floor(1.5 * padding), Math.floor(height / 2));`);
    modifyCode(`function labelPath() {
        ${insert(`if (__fx.settings.smoothUI && ctx.roundRect) return ctx.beginPath(), ctx.roundRect(0, 0, labels[0].width, height, 0.15 * height);`)}
        ctx.beginPath(); ctx.moveTo(corner, 0); ctx.lineTo(labels[0].width - corner, 0); ctx.lineTo(labels[0].width, corner); ctx.lineTo(labels[0].width, height - corner);
        /*...*/
    }`);

    // In-game exit menu 
    modifyCode(`function drawQuitRow() {
        var crossSize;
        var width = Math.floor(5.5 * size);
        ctx.setTransform(1, 0, 0, 1, sizes.gap, layout.y);
        ${insert(`var fxSmooth = __fx.utils.clipRounded(ctx, 0, 0, width, size);`)}
        ctx.fillStyle = colors.background;
        ctx.fillRect(0, 0, width, size);
        if (hovered === 0) { ctx.fillStyle = colors.hover; ctx.fillRect(0, 0, 4 * size, size) }
        else if (hovered === 1) { ctx.fillStyle = colors.hover; ctx.fillRect(4 * size, 0, Math.floor(1.5 * size), size) }
        ${insert(`if (fxSmooth) ctx.restore(), __fx.utils.strokeRounded(ctx, 0, 0, width, size), ctx.fillStyle = __fx.utils.lineColor(colors.white), ctx.fillRect(4 * size, 0, 1, size);`)}
        ctx.fillStyle = colors.white;
        ${insert(`if (!fxSmooth) {`)}
        ctx.fillRect(0, 0, width, 1); ctx.fillRect(0, 0, 1, size); ctx.fillRect(4 * size, 0, 1, size); ctx.fillRect(0, size - 1, width, 1); ctx.fillRect(width - 1, 0, 1, size);
        ${insert(`}`)}
        /*...*/
    }`);
    modifyCode(`function drawMenuRow(row) {
        ctx.setTransform(1, 0, 0, 1, sizes.gap, layout.y - row * spacing * sizes.gap - row * size);
        ${insert(`var fxSmooth = __fx.utils.clipRounded(ctx, 0, 0, 4 * size, size);`)}
        ctx.fillStyle = colors.background;
        ctx.fillRect(0, 0, 4 * size, size);
        if (hovered === row + 1) { ctx.fillStyle = colors.hover; ctx.fillRect(0, 0, 4 * size, size) }
        ${insert(`if (fxSmooth) ctx.restore(), __fx.utils.strokeRounded(ctx, 0, 0, 4 * size, size);`)}
        ctx.fillStyle = colors.white;
        ${insert(`if (!fxSmooth) {`)}
        ctx.fillRect(0, 0, 4 * size, 1); ctx.fillRect(0, 0, 1, size); ctx.fillRect(4 * size, 0, 1, size); ctx.fillRect(0, size - 1, 4 * size, 1);
        ${insert(`}`)}
        /*...*/
    }`);

    // in game stats page
    modifyCode(`this.drawStats = function() {
        var x = util.half(canvas.width - this.width, 2);
        var y = util.half(canvas.height - this.height, 2);
        ctx.setTransform(1, 0, 0, 1, x, y);
        ${insert(`var fxSmooth = __fx.utils.clipRounded(ctx, 0, 0, this.width, this.height, 0.15 * this.headerHeight);`)}
        ctx.fillStyle = colors.panel;
        ctx.fillRect(0, this.headerHeight, this.width, this.height - this.headerHeight);
        this.drawTabs();
        this.drawHeader();
        ${insert(`if (fxSmooth) __fx.utils.strokeRounded(ctx, 0, 0, this.width, this.height, ctx.lineWidth, 0.15 * this.headerHeight); else`)}
        ctx.strokeRect(0, 0, this.width, this.height);
        util2.text.textAlign(ctx, 2);
        ctx.font = util2.text.makeFont(0, this.fontSize);
        if (this.tab === 0) { this.drawGraph(stats.territory, x, y) }
        else if (this.tab === 1) { this.drawGraph(stats.balance, x, y) }
        else if (this.tab === 2) { this.drawInterest(x, y) }
        else if (this.tab === 3) { this.drawNumbers(x, y); this.drawCosts(x, y) }
        exitMenu.drawCross(Math.floor(x + this.width - .725 * this.headerHeight), Math.floor(y + .275 * this.headerHeight), Math.floor(.45 * this.headerHeight));
        ${insert(`fxSmooth && ctx.restore();`)}
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }`);
    modifyCode(`this.drawTabs = function() {
        var i, tabWidth;
        ctx.lineWidth = this.lineSize;
        util2.text.textBaseline(ctx, 1);
        util2.text.textAlign(ctx, 1);
        ctx.strokeStyle = colors.white;
        ctx.font = util2.text.makeFont(1, this.tabFontSize);
        tabWidth = this.width / this.tabNames.length;
        ctx.fillStyle = colors.selected;
        ctx.fillRect(this.tab * tabWidth, this.height - this.tabHeight, tabWidth, this.tabHeight);
        ctx.fillStyle = colors.white;
        ${insert(`ctx.fillStyle = __fx.utils.lineColor(colors.white);`)}
        ctx.fillRect(0, this.height - this.tabHeight - .5 * this.lineSize, this.width, this.lineSize);
        for (i = 1; i <= 3; i++) { ctx.fillRect(i * tabWidth, this.height - this.tabHeight, this.lineSize, this.tabHeight) }
        ${insert(`ctx.fillStyle = colors.white;`)}
        /*...*/
    }`);
    modifyCode(`this.drawHeader = function() {
        ctx.fillStyle = colors.header;
        ctx.fillRect(0, 0, this.width, this.headerHeight);
        ctx.fillStyle = colors.white;
        ${insert(`ctx.fillStyle = __fx.utils.lineColor(colors.white);`)}
        ctx.fillRect(0, this.headerHeight - .5 * this.lineSize, this.width, this.lineSize);
        ${insert(`ctx.fillStyle = colors.white;`)}
        /*...*/
    }`);

    // "You are leaving Territorial.io!" popup
    modifyCode(`this.draw = function() {
        if (!this.visible) { return }
        ${insert(`var fxSmooth = __fx.utils.clipRounded(ctx, x, y, width, height);`)}
        ctx.fillStyle = colors.panel;
        ctx.fillRect(x, y + headerHeight, width, height - headerHeight);
        ctx.fillStyle = colors.header;
        ctx.fillRect(x, y, width, headerHeight);
        ${insert(`fxSmooth && ctx.restore();`)}
        ctx.fillStyle = colors.white;
        ctx.lineWidth = sizes.lineSize;
        ctx.strokeStyle = colors.white;
        ${insert(`if (fxSmooth) __fx.utils.strokeRounded(ctx, x, y, width, height, sizes.lineSize), ctx.fillStyle = __fx.utils.lineColor(colors.white); else`)}
        ctx.strokeRect(x, y, width, height);
        ctx.fillRect(x, y + headerHeight, width, sizes.lineSize);
        ${insert(`ctx.fillStyle = colors.white;`)}
        /*...*/
    }`);

    // Victory / defeat popup
    modifyCode(`function createPopupCanvas() {
        canvas = document.createElement("canvas");
        canvas.width = popupWidth;
        canvas.height = popupHeight;
        var ctx = canvas.getContext("2d", { alpha: true });
        var border = Math.floor(1 + popupHeight / 40);
        ctx.clearRect(0, 0, popupWidth, popupHeight);
        ctx.fillStyle = colors.panel;
        ctx.fillRect(border, border, popupWidth - 2 * border, popupHeight - 2 * border);
        ctx.lineJoin = "bevel";
        ctx.lineWidth = 2 * border;
        ctx.strokeStyle = colors.white;
        ${insert(`if (!__fx.utils.smoothFrame(ctx, popupWidth - 2 * border, popupHeight - 2 * border, 2 * border, border, border, popupHeight / 10))`)}
        ctx.strokeRect(border, border, popupWidth - 2 * border, popupHeight - 2 * border);
        /*...*/
    }`);

    // Emoji panel
    modifyCode(`this.draw = function() {
        ${insert(`var fxSmooth = __fx.utils.clipRounded(ctx, left - .5 * gap, top - .5 * gap, panelWidth, panelHeight);`)}
        ctx.fillStyle = colors.panel;
        ctx.fillRect(left - .5 * gap, top - .5 * gap, panelWidth, panelHeight);
        ${insert(`fxSmooth && ctx.restore();`)}
        var inset = .5 * sizes.lineSize;
        ctx.lineWidth = sizes.lineSize;
        ctx.strokeStyle = ctx.fillStyle = colors.white;
        ${insert(`if (fxSmooth) __fx.utils.strokeRounded(ctx, left - .5 * gap, top - .5 * gap, panelWidth, panelHeight, sizes.lineSize); else`)}
        ctx.strokeRect(left - .5 * gap + inset, top - .5 * gap + inset, panelWidth - 2 * inset, panelHeight - 2 * inset);
        /*...*/
    }`);

    // Player color picker (preview box and the three sliders)
    modifyCode(`function drawColorPreview() {
        var r = getColor(0);
        var g = getColor(1);
        var b = getColor(2);
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ${insert(`var fxSmooth = __fx.utils.clipRounded(ctx, rect.x, rect.y, previewWidth, rect.height);`)}
        ctx.fillRect(rect.x, rect.y, previewWidth, rect.height);
        ${insert(`fxSmooth && ctx.restore();`)}
        ctx.strokeStyle = palette.white;
        ${insert(`if (fxSmooth) __fx.utils.strokeRounded(ctx, rect.x, rect.y, previewWidth, rect.height, ctx.lineWidth); else`)}
        ctx.strokeRect(rect.x, rect.y, previewWidth, rect.height);
        /*...*/
    }`);
    modifyCode(`function drawColorSlider(i) {
        var r = i === 0 ? 150 : i === 2 ? 30 : 0;
        var g = i === 1 ? 130 : i === 2 ? 30 : 0;
        var b = i === 2 ? 220 : 0;
        var sliderY = rect.y + i * (sizes.gap + sliderHeight);
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ${insert(`var fxSmooth = __fx.utils.clipRounded(ctx, sliderX, sliderY, sliderWidth, sliderHeight);`)}
        ctx.fillRect(sliderX, sliderY, values[i] * sliderWidth, sliderHeight);
        ${insert(`fxSmooth && ctx.restore();`)}
        ctx.strokeStyle = palette.white;
        ${insert(`if (fxSmooth) __fx.utils.strokeRounded(ctx, sliderX, sliderY, sliderWidth, sliderHeight, ctx.lineWidth); else`)}
        ctx.strokeRect(sliderX, sliderY, sliderWidth, sliderHeight);
        /*...*/
    }`);

    // Fallback main menu buttons 
    modifyCode(`function drawButton(i) {
        var button = menu.buttons[i];
        var x = button.x;
        var y = button.y;
        var w = button.w;
        var h = button.h;
        ctx.fillStyle = button.fill;
        ${insert(`var fxSmooth = __fx.utils.clipRounded(ctx, x, y, w, h, .1 * h);`)}
        ctx.fillRect(x, y, w, h);
        if (i === hovered) { ctx.fillStyle = hoverColor; ctx.fillRect(x, y, w, h) }
        ${insert(`fxSmooth && ctx.restore();`)}
        ctx.lineWidth = sizes.lineSize;
        ctx.strokeStyle = textColor;
        ${insert(`if (fxSmooth) __fx.utils.strokeRounded(ctx, x, y, w, h, sizes.lineSize, .1 * h); else`)}
        ctx.strokeRect(x, y, w, h);
        drawText(button);
    }`);

    modifyCode(`this.addBorder = function(element, side, color) {
        ${insert(`element.classList.toggle("fx-line", !color), element.classList.toggle("fx-box", !side || side === 5);`)}
        var value = this.toPx(sizes.borderWidth) + " solid " + (color || colors.white);
        /*...*/
    }`);

    modifyCode(`function PageShell(title, buttons, standalone) {
        var root = document.createElement("div");
        var header = document.createElement("div");
        var content = document.createElement("div");
        var footer = document.createElement("div");
        var buttonContainer = document.createElement("div");
        this.contentElement = content;
        this.buttonList = buttons;
        ${insert(`root.className = "fx-page";`)}
        /*...*/
    }`);

    modifyCode(`function assembleLobby() {
        header.appendChild(createTitle());
        panelTabs.appendChild(panelTabRow.element);
        progressBar.appendChild(progressFill);
        progressBar.appendChild(progressText);
        footer.appendChild(footerRow.element);
        root.appendChild(header);
        root.appendChild(panelTabs);
        root.appendChild(content);
        root.appendChild(progressBar);
        root.appendChild(footer);
        ${insert(`root.className = "fx-lobby", content.className = "fx-panel", progressBar.className = "fx-progress";`)}
    }`);

    modifyCode(`function initPlayerList() {
        scrollContainer.style.top = "0";
        scrollContainer.style.left = "0";
        scrollContainer.style.width = scrollContainer.style.height = "100%";
        scrollContainer.style.overflowX = "hidden";
        scrollContainer.style.overflowY = "auto";
        scrollContainer.style.font = "inherit";
        playerList.style.font = "inherit";
        playerList.style.margin = "0.4em";
        scrollContainer.appendChild(playerList);
        ${insert(`scrollContainer.className = "fx-players-scroll", playerList.className = "fx-players";`)}
        rowTemplate = createRowTemplate();
        badgeColors = createBadgeColors();
    }`);

    modifyCode(`this.renderPlayers = function() {
        playerList.textContent = "";
        lobby.tooltip.visible && lobby.tooltip.hide(1);
        var fragment = document.createDocumentFragment();
        var players = lobby.playerData.list;
        var rooms = lobby.rooms.roomArray;
        var isOneVsOne = 0;
        for (var i = 0; i < rooms.length; i++) { isOneVsOne = isOneVsOne || rooms[i].mode === 8 }
        rowTemplate.style.width = rowTemplate.style.maxWidth = isOneVsOne ? "11.3em" : "10.3em";
        for (i = 0; i < players.length; i++) { var roomIndex = lobby.rooms.findRoom(players[i].roomId); addEntry(fragment, players[i], roomIndex, roomIndex >= 0 && rooms[roomIndex].mode === 8) }
        playerList.appendChild(fragment);
        ${insert(`playerList.classList.toggle("fx-wide", !!isOneVsOne);`)}
    }`);

    modifyCode(`function setTabSelected(index, isSelected) {
        tabRow.buttons[index].setColor(isSelected ? colors.selectedColor : colors.normalColor);
        ${insert(`tabRow.buttons[index].button.classList.toggle("fx-selected", !!isSelected);`)}
    }`);

    modifyCode(`if (card.selectedState !== isSelected) {
        card.selectedState = isSelected;
        card.topBar.style.backgroundColor = card.bottomBar.style.backgroundColor = [colors.bar, colors.selectedBar, colors.observingBar][isSelected];
        helpers.ui.addBorder(card.button, 5, [colors.white, colors.selectedBorder, colors.observingBorder][isSelected]);
        ${insert(`card.button.classList.toggle("fx-line", !isSelected);`)}
    }`);
});
