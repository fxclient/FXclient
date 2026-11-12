import { definePatch, insert } from "../modUtils.js";

// Patches for the in-game Lobby 2 chat (src/ingameChat.js) and the chat-only
// client that runs inside its iframe (src/chatMode.js).
//
// Note: template words are matched as wildcards and substituted in the inserted code,
// so the inserted code (including its strings) must not reuse any template word.
export default definePatch(({ matchCode, matchRawCode, replaceCode, insertCode, modifyCode }) => {

    // The "⚔️ Join Lobby 2" game menu entry: lets the chat-only client join Lobby 2
    matchCode(`new x(__L(), function() { menuManager.menuActions.joinLobby(2); })`,
        { addToDictionary: ["menuManager", "menuActions", "joinLobby"] });

    // The lobby the player last joined (1 or 2), used to warn before logging into Lobby 2 twice
    matchCode(`this.trySendToken = function() {
        if (!hasToken(8)) { return; }
        if (!lobby.active) { return; }
        if (!sockets.manager.isOpen(sockets.manager.lobbySocket)) { return; }
        tokenExpiry = performance.now() + 1000 * 60 * minutes - 1000 * 10;
        tokenAccount = encoding.text.decode(storage.buffer.data[105].value, 5);
        tokenLobby = connectionScreen.lobbyNumber;
        sockets.sender.sendTokenMsg(token);
        token = "";
        console.log("sendTokenToLobby success");
    };`, { addToDictionary: ["connectionScreen", "lobbyNumber"] });

    // The in-game leave button (drawn on the canvas): whether its menu is open, and its position,
    // which is next to the troop bar. The chat's show/hide button is placed above it.
    matchCode(`function leaveHitTest(x, y) {
        if (!leaveButton.leaveMenuOpen) {
            if (x <= size + uiSizes.gap && y >= attackBar.attackBarTop) { return 9; }
            return -1;
        }
        if (x <= 4 * size + uiSizes.gap) { /*...*/ }
    }`, { addToDictionary: ["leaveButton", "leaveMenuOpen", "attackBar", "attackBarTop"] });
    matchCode(`this.resize = function() {
        size = attackBar.attackBarSize;
        buttonCanvas = document.createElement("canvas");
        buttonCanvas.width = size;
        buttonCanvas.height = size;
        /*...*/
    };`, { addToDictionary: ["attackBar", "attackBarSize"] });

    // Keep the chat-only client from overwriting the main client's saved data (account, settings...)
    replaceCode(`function initStorage(self) {
        var store;
        try {
            store = window.localStorage;
            if (!store) { return; }
            store.setItem("tls7", "1");
            store.removeItem("tls7");
        } catch (error) { return; }
        self.storageProp = store;
    }`, `function initStorage(self) {
        var store;
        try {
            store = __fx.chatMode.wrapStorage(window.localStorage);
            if (!store) { return; }
            store.setItem("tls7", "1");
            store.removeItem("tls7");
        } catch (error) { return; }
        self.storageProp = store;
    }`);

    // Lobby panel: expose a way to switch to the chat tab...
    insertCode(`this.mention = function(account) {
        selectTab(0);
        var text = layout.chat.input.e.value;
        var mentionText = "@" + account + " ";
        if (text.length && !utils.strings.endsWith(text, " ")) {
            mentionText = " " + mentionText;
        }
        text += mentionText;
        layout.chat.input.e.value = text;
        layout.chat.input.e.focus();
    };
    /* here */`, `this.fxSelectChatTab = function() { selectTab(0); };`);

    // ...and report when the lobby is shown and hidden
    modifyCode(`this.show = function() {
        lobby.state.showCounter++;
        layout.show();
        this.resize();
        lobby.message.show();
        ${insert(`__fx.chatMode.onLobbyShow(this);`)}
    };
    this.ty = function() {
        ${insert(`__fx.chatMode.onLobbyHide();`)}
        layout.ty();
        lobby.contextMenu.ty();
        lobby.tooltip.ty();
        lobby.message.ty();
    };`);

    // Class names for the chat log and input row, so the chat-only client can lay them out
    modifyCode(`counter = new te("255", sendButton.button, 1, 1);
        logBox.appendChild(messageList);
        inputRow.appendChild(self.textField.e);
        inputRow.appendChild(sendButton.button);
        ${insert(`logBox.className = "fx-chat-log", messageList.className = "fx-chat-messages", inputRow.className = "fx-chat-input";`)}`);

    // Chat-only client: block joining or observing games and joining clans
    insertCode(`this.sendLobbyAction = function(action, data) {
        /* here */
        writer.reset();
        writer.write(1, 0);
        writer.write(6, 2);
        writer.write(3, action);
        if (action === 2) {
            writer.write(30, data);
        } else if (action === 4) { /*...*/ }
    };`, `if (__fx.chatMode.blocksLobbyAction(action)) return;`);

    // Chat-only client: clicking a name mentions the player instead of opening the
    // player menu (which links to account pages and joining/observing games)
    insertCode(`this.openPlayerMenu = function(event, player) {
        /* here */
        menuOpen = 1;
        selectedPlayer = player;
        menu = new xQ([new x(__L(), showAccount, player.xE === 0 ? 1 : 0), new x(__L(), function() {
            vouch(1);
        }, isDisabled()), new x(__L(), function() {
            vouch(0);
        }, isDisabled()), new x(__L(), mention, 0), new x(isObserving(1) ? __L() : __L(), function() { /*...*/ }, 0)]);
    };`, `if (__fx.chatMode.isActive()) {
            selectedPlayer = player;
            return mention();
        }`);

    // Chat-only client: show lobby notifications in the chat log instead of the notification box,
    // which is too small to use inside the chat window. Mentions are already in the chat log, so
    // they only play the notification sound.
    // (names are matched before pingFilter.js changes this code)
    const { textField } = matchRawCode(
        `if(msgId===0){return{msgId:msgId,senderField:reader.readBits(30),senderExtra:readExtra(),textField:container.decoder.decode(helper1.helper2.helper3(8))}}`
    );
    const { settingsHolder, userSettings, notificationSound } = matchCode(`notifications.push(message);
        !settingsHolder.userSettings.data[14].value && message.id !== 7 && notificationSound.play();
        if (!messagePopup) { return; }`);
    insertCode(`var formatted = lobby.formatter.wrap(notice, lobby.formatter.toText(notice));
        if (notice.id === 5 || notice.id === 6) {
            menuManager.getMenu(29).getChat().addLine(formatted);
            if (notice.id !== 5) { return; }
        }
        /* here */
        var recent = timing.now < lastOpened + 20000;`,
        `if (__fx.chatMode.isActive()) {
            if (__fx.pingFilter.isMuted(notice, "${textField}")) return;
            if (notice.id !== 0 && notice.id !== 5) menuManager.getMenu(29).getChat().addLine(formatted);
            !${settingsHolder}.${userSettings}.data[14].value && notice.id !== 7 && ${notificationSound}.play();
            return;
        }`);
    insertCode(`this.show = function() {
            /* here */
            showCounter();
        };
        function onNavigate() {
            lastOpened = timing.now;
            if (this.direction === 3) { showCounter(); } else { /*...*/ }
        }`, `if (__fx.chatMode.isActive()) return;`);

    // Chat-only client: skip rendering map previews and menu backgrounds for lobby games
    insertCode(`this.update = function() {
        /* here */
        if (!lobby.active || timing.now < nextUpdate) { return; }
        var roomList = lobby.rooms.entries;
        /*...*/
    };`, `if (__fx.chatMode.isActive()) return;`);
    insertCode(`this.loadRoomMap = function() {
        /* here */
        var room = lobby.rooms.entries[0];
        mapLoader.load(room.map, room.mapSeed);
    };`, `if (__fx.chatMode.isActive()) return;`);
});
