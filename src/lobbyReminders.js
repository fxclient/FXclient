import { getSettings } from "./settings.js";
import { describeGame, matchesFilters } from "./lobbyFilters.js";
import chatMode from "./chatMode.js";


const SOUND_REPEATS = 3;
const SOUND_INTERVAL = 260;

let rooms = null;
let playGameSound = null;
let showPopup = null;
const roomStates = new Map();

function playReminderSound() {
    for (let i = 0; i < SOUND_REPEATS; i++) setTimeout(() => playGameSound?.(), i * SOUND_INTERVAL);
}

function setRooms(lobbyRooms) {
    rooms = lobbyRooms;
}

function setSound(playSound) {
    playGameSound = playSound;
}

function setPopupHandler(handler) {
    showPopup = handler;
}

function check() {
    // the chat-only client (in-game chat) is in Lobby 2 while the player is in a game
    if (rooms === null || chatMode.isActive()) return;
    const rules = getSettings().lobbyReminderRules || [];
    if (rules.length === 0) return;
    const presentIds = new Set();
    for (let index = 0; index < rooms.length; index++) {
        const room = rooms[index];
        if (!room) continue;
        const id = room[dictionary.lobbyRoomId];
        presentIds.add(id);
        const game = {
            map: room[dictionary.lobbyRoomMap],
            mode: room[dictionary.lobbyRoomMode],
            isContest: !!room[dictionary.lobbyRoomIsContest]
        };
        const timeLeft = room[dictionary.lobbyRoomTimeLeft];
        let state = roomStates.get(id);
        if (!state) roomStates.set(id, state = { timeLeft: -1, reminded: null });
        if (timeLeft > state.timeLeft) state.reminded = null;
        state.timeLeft = timeLeft;

        const key = game.map + ":" + game.mode + ":" + game.isContest;
        if (state.reminded === key) continue;
        if (!matchesFilters(rules, game)) continue;
        state.reminded = key;
        const description = describeGame(game);
        console.log(`FX lobby reminder: ${description} (starts in ${timeLeft}s)`);
        showPopup?.(`Reminder: ${description}`);
        playReminderSound();
    }
    roomStates.forEach((_state, id) => { if (!presentIds.has(id)) roomStates.delete(id); });
}

export default { setRooms, setSound, setPopupHandler, check };
