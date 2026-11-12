// Chat-only mode: the client runs in this mode inside the iframe of the in-game chat window
// (see ingameChat.js). It joins Lobby 2 and only its chat can be used: every other part of the
// game is hidden or blocked, and a status screen covers everything while the chat isn't shown.
import { getVar } from "./gameInterface.js";

const LOBBY_NUMBER = 2;
const MAX_ATTEMPTS = 5;
// How long the connection screen may take before the attempt counts as failed
const CONNECT_TIMEOUT = 25_000;
// Canvas menu state while the game is connecting to a lobby
const CONNECTING_STATE = 6;
// Lobby actions sent by the game: 2 = join clan, 4 = join/observe a game, 6 = join/observe with a player
const blockedLobbyActions = new Set([2, 4, 6]);

/** Name of the in-game chat iframe. Unlike the URL (the game clears its query string), it's kept when the iframe reloads. */
export const CHAT_FRAME_NAME = "fx-ingame-chat";

function detectChatMode() {
  if (window.name !== CHAT_FRAME_NAME) return false;
  try {
    return window.parent !== window && window.parent.location.origin === window.location.origin;
  } catch {
    return false;
  }
}
const active = detectChatMode();

let lobbyVisible = false;
let connected = false;
let attempts = 0;
let lastAttempt = 0;
let retryTimer = null;
let messageObserver = null;

let statusElement, statusText, retryButton;

function isActive() {
  return active;
}

/** Game storage for the chat-only client: reads the main client's data, but writes stay in memory */
function wrapStorage(storage) {
  if (!active || !storage) return storage;
  const overlay = new Map(); // key -> value, or null when removed
  let cleared = false;
  return {
    getItem(key) {
      key = String(key);
      if (overlay.has(key)) return overlay.get(key);
      return cleared ? null : storage.getItem(key);
    },
    setItem(key, value) { overlay.set(String(key), String(value)); },
    removeItem(key) { overlay.set(String(key), null); },
    clear() { overlay.clear(); cleared = true; },
  };
}

function blocksLobbyAction(action) {
  return active && blockedLobbyActions.has(action);
}

function notifyParent(type, detail) {
  try {
    window.parent.__fx?.ingameChat?.onChildEvent(type, detail, window);
  } catch { }
}

function getJoinFunction() {
  const actions = window[dictionary.menuManager]?.[dictionary.menuActions];
  const join = actions?.[dictionary.joinLobby];
  return typeof join === "function" ? () => join.call(actions, LOBBY_NUMBER) : null;
}

function getMenuState() {
  try {
    return window[dictionary.MenuManager][dictionary.getState]();
  } catch {
    return -1;
  }
}

/** The message of the error page the game shows when it can't connect, like "Player already in lobby [4527]" */
function getGameError() {
  const page = document.querySelector("body > .fx-page");
  if (!page) return "";
  const texts = [...page.children]
    .filter(section => !section.querySelector("button"))
    .map(section => section.textContent.trim())
    .filter(text => text.length > 0 && text.length <= 160);
  // the longest text is the message, not the title
  return texts.sort((a, b) => b.length - a.length)[0] ?? "";
}

function describeFailure(text) {
  const error = getGameError();
  return error ? `${text} (${error})` : text;
}

function showStatus(state, text, canRetry = false) {
  document.documentElement.classList.add("fx-chat-offline");
  statusElement.hidden = false;
  statusText.textContent = text;
  retryButton.hidden = !canRetry;
  notifyParent("status", state);
}

function hideStatus() {
  document.documentElement.classList.remove("fx-chat-offline");
  statusElement.hidden = true;
}

function connect() {
  clearTimeout(retryTimer);
  retryTimer = null;
  if (connected) return;
  const join = getJoinFunction();
  // the game hasn't finished loading yet
  if (join === null || !getVar("game")) {
    retryTimer = setTimeout(connect, 250);
    return;
  }
  attempts++;
  lastAttempt = performance.now();
  showStatus("connecting", attempts > 1 ? `Connecting to Lobby 2… (attempt ${attempts} of ${MAX_ATTEMPTS})` : "Connecting to Lobby 2…");
  try {
    join();
  } catch (error) {
    console.warn("FX chat: could not join Lobby 2", error);
    scheduleRetry("Couldn't connect to Lobby 2");
  }
}

function scheduleRetry(reason) {
  if (connected || retryTimer !== null) return;
  if (attempts >= MAX_ATTEMPTS) {
    showStatus("failed", reason + ".", true);
    return;
  }
  const seconds = Math.min(30, 2 ** attempts);
  showStatus("connecting", `${reason}. Reconnecting in ${seconds}s…`);
  retryTimer = setTimeout(connect, seconds * 1000);
}

function retryNow() {
  attempts = 0;
  connect();
}

function watchMessages() {
  messageObserver?.disconnect();
  const list = document.querySelector(".fx-lobby .fx-chat-messages");
  if (!list) return;
  // the chat history arrives right after joining; only count messages after that
  const countFrom = performance.now() + 2000;
  messageObserver = new MutationObserver(records => {
    if (performance.now() < countFrom) return;
    const added = records.reduce((count, record) => count + record.addedNodes.length, 0);
    if (added > 0) notifyParent("messages", added);
  });
  messageObserver.observe(list, { childList: true });
}

/** Called by the game whenever the lobby panel is shown */
function onLobbyShow(lobbyPanel) {
  if (!active) return;
  lobbyVisible = true;
  lobbyPanel.fxSelectChatTab();
  hideStatus();
  // the game creates a new lobby panel (and chat log) when it rejoins or refreshes the lobby
  watchMessages();
  if (connected) return;
  connected = true;
  attempts = 0;
  clearTimeout(retryTimer);
  retryTimer = null;
  notifyParent("status", "connected");
}

/** Called by the game whenever the lobby panel is hidden */
function onLobbyHide() {
  if (!active) return;
  lobbyVisible = false;
  // cover the page right away, so nothing that replaces the lobby can be used
  document.documentElement.classList.add("fx-chat-offline");
  statusElement.hidden = false;
  statusText.textContent = "Reconnecting to Lobby 2…";
  retryButton.hidden = true;
  // the lobby is hidden and shown again when it refreshes, so wait before treating it as a disconnect
  setTimeout(() => {
    if (lobbyVisible || !connected) return;
    connected = false;
    messageObserver?.disconnect();
    messageObserver = null;
    scheduleRetry(describeFailure("Lost connection to Lobby 2"));
  }, 0);
}

function checkState() {
  // this client should never be in a game; if it somehow is, let the main client restart it
  if (getVar("gameState")) {
    notifyParent("restart");
    return;
  }
  if (connected || retryTimer !== null || lastAttempt === 0) return;
  const elapsed = performance.now() - lastAttempt;
  // the connection screen closed without showing the lobby (an error), or it's taking too long
  if ((elapsed > 1500 && getMenuState() !== CONNECTING_STATE) || elapsed > CONNECT_TIMEOUT)
    scheduleRetry(describeFailure("Couldn't connect to Lobby 2"));
}

function isTextField(element) {
  return element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
}

function init() {
  document.documentElement.classList.add("fx-chat-mode", "fx-chat-offline");

  // not a div: the game removes all divs, inputs and buttons from the body when it starts
  statusElement = document.createElement("aside");
  statusElement.id = "fxChatStatus";
  statusElement.setAttribute("role", "status");
  statusText = document.createElement("p");
  statusText.textContent = "Loading chat…";
  retryButton = document.createElement("button");
  retryButton.textContent = "Try again";
  retryButton.hidden = true;
  retryButton.addEventListener("click", retryNow);
  statusElement.append(statusText, retryButton);
  document.body.append(statusElement);

  // Game keyboard shortcuts can join games or leave the lobby, so only typing in the chat is allowed.
  // Escape gives keyboard focus back to the game.
  for (const type of ["keydown", "keypress", "keyup"]) {
    window.addEventListener(type, event => {
      if (!isTextField(event.target)) {
        event.stopImmediatePropagation();
        return;
      }
      if (type === "keyup" && event.key === "Escape") {
        event.stopImmediatePropagation();
        event.target.blur();
        window.parent.focus();
      }
    }, true);
  }

  // Dropping a file would navigate the iframe to it, and the browser's context menu has Back and Reload
  // (right-clicking the chat input still works, to paste)
  for (const type of ["dragover", "drop"]) window.addEventListener(type, event => event.preventDefault(), true);
  window.addEventListener("contextmenu", event => {
    if (!isTextField(event.target)) event.preventDefault();
  }, true);

  // Don't let the chat take keyboard focus away from the game unless the player is using the chat
  const focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function (...args) {
    if (document.hasFocus()) return focus.apply(this, args);
  };

  window.addEventListener("load", () => setTimeout(connect, 0));
  setInterval(checkState, 1000);
}

if (active) init();

export default { isActive, wrapStorage, blocksLobbyAction, onLobbyShow, onLobbyHide };
