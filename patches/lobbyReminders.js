import { definePatch, insert } from "../modUtils.js";

export default definePatch(({ matchCode, insertCode, modifyCode, matchRawCode }) => {

    const lobbyListParser = `this.parseLobbyRooms = function () {
        var count = reader.read(4);
        var rooms = new Array(count);
        for (var i = 0; i < count; i++) {
            rooms[i] = { lobbyRoomId: reader.read(13), lobbyRoomTimeLeft: reader.read(12), lobbyRoomPlayerCount: reader.read(16), lobbyRoomMaxPlayers: reader.read(10), lobbyRoomMap: reader.read(6), lobbyRoomMapSeed: reader.read(14), lobbyRoomMode: reader.read(4), lobbyRoomIsContest: reader.read(1) };
        }
        this.lobbyRoomList = rooms;
        /* here */
        /*...*/
    }`;

    matchCode(lobbyListParser.replace("/* here */", ""), {
        addToDictionary: ["lobbyRoomId", "lobbyRoomMap", "lobbyRoomMode",
            "lobbyRoomIsContest", "lobbyRoomTimeLeft"]
    })

    matchCode(`var room = rooms[i];
        var card = cards[i];
        var isSelected = room.lobbyRoomId === lobbyManager.lobbyRooms.selectedId ? 1 : 0;
        setText(card.mapLabel, mapHolder.mapInfo.mapNames[room.lobbyRoomMap]);
        /*...*/`,
        { addToDictionary: ["mapHolder", "mapInfo", "mapNames"] })

    const { container, pushMessage, messageTextField } = matchRawCode(
        `resultText=formatList(entries," is"," are"," in the lobby.");if(resultText.length){container.message.pushMessage({id:7,messageTextField:resultText})}list1=[];list2=[];counter=0}`
    )

    insertCode(lobbyListParser, `__fx.lobbyReminders.setRooms(this.lobbyRoomList);
    __fx.lobbyReminders.setPopupHandler(function (text) { bq.message.aEd({ id: 7, s: text }); });`,
        { dictionary: { bq: container, aEd: pushMessage, s: messageTextField } })

    modifyCode(`this.onFullLobbyUpdate = function () {
        updateLobbyUI(true);
        lobbyManager.joinTracker.di();
        ${insert(`__fx.lobbyReminders.check();`)}
    };
    this.onLobbyUpdate = function () {
        lobbyManager.joinTracker.onLobbyUpdate();
        updateLobbyUI(false);
        ${insert(`__fx.lobbyReminders.check();`)}
    }`)

    insertCode(`/* here */
    function replayPendingSound() { pendingSoundCount++; notificationSound.play() }
    this.play = function () {
        if (!soundsLoaded) { return }
        var timeNow = performance.now();
        /*...*/
    }`, `__fx.lobbyReminders.setSound(function () { notificationSound.play(); });`)
})
