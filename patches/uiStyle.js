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
        ${insert(`if (!__fx.utils.smoothFrame(ctx, width, this.height)) {`)}
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
        roomTabs.appendChild(roomTabRow.element);
        infoBar.appendChild(infoRow.element);
        panelTabs.appendChild(panelTabRow.element);
        progressBar.appendChild(progressFill);
        progressBar.appendChild(progressText);
        footer.appendChild(footerRow.element);
        root.appendChild(header);
        root.appendChild(roomTabs);
        root.appendChild(infoBar);
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
    }`);

    modifyCode(`this.renderPlayers = function() {
        playerList.textContent = "";
        lobby.tooltip.visible && lobby.tooltip.hide(1);
        var fragment = document.createDocumentFragment();
        var roomIndex = lobby.state.selection[0];
        var players = lobby.playerData.lists[roomIndex];
        var onlineCount = lobby.playerData.onlineCounts[roomIndex];
        for (var i = 0; i < players.length; i++) { addEntry(fragment, players[i], i < onlineCount, roomIndex) }
        playerList.appendChild(fragment);
        ${insert(`playerList.classList.toggle("fx-wide", roomIndex === 2);`)}
    }`);

    modifyCode(`function setTabSelected(row, index, isSelected) {
        lobbyScreen.rows[row].buttons[index].setColor(isSelected ? colors.selectedColor : colors.normalColor);
        ${insert(`lobbyScreen.rows[row].buttons[index].button.classList.toggle("fx-selected", !!isSelected);`)}
    }`);
});
