// In-game chat: a movable, resizable window with the Lobby 2 chat, shown at the start of every game
// and closed when leaving it. A button above the game's leave button hides and shows it.
// The chat runs in an iframe of this client in chat-only mode (see chatMode.js).
import { getSettings } from "./settings.js";
import { getVar, getUIGap } from "./gameInterface.js";
import chatMode, { CHAT_FRAME_NAME } from "./chatMode.js";

const GEOMETRY_KEY = "fx_ingameChat";
const MIN_WIDTH = 220;
const MIN_HEIGHT = 150;
const DEFAULT_WIDTH = 340;
const DEFAULT_HEIGHT = 260;
const MAX_RESTARTS = 3;

let geometry = loadGeometry();
let ui = null;
let frame = null;
let unread = 0;
let restarts = 0;
let wasInGame = false;
// whether the chat is open for the current game, and whether the player hid it
let sessionActive = false;
let hidden = false;
let toggleLayout = "";

const chatIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><circle cx="7.5" cy="10" r="1.5" fill="#000"/><circle cx="12" cy="10" r="1.5" fill="#000"/><circle cx="16.5" cy="10" r="1.5" fill="#000"/></svg>`;

function loadGeometry() {
  try {
    const saved = JSON.parse(localStorage.getItem(GEOMETRY_KEY));
    if (saved && typeof saved === "object") return saved;
  } catch { }
  return {};
}

function saveGeometry() {
  try {
    localStorage.setItem(GEOMETRY_KEY, JSON.stringify(geometry));
  } catch { }
}

function createButton(text, label, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.title = label;
  button.setAttribute("aria-label", label);
  button.addEventListener("click", action);
  return button;
}

function createUI() {
  const root = document.createElement("div");
  root.className = "fx-chat-window";
  root.setAttribute("role", "region");
  root.setAttribute("aria-label", "Lobby 2 chat");

  const titleBar = document.createElement("div");
  titleBar.className = "fx-chat-titlebar";
  const dot = document.createElement("span");
  dot.className = "fx-chat-dot";
  const title = document.createElement("span");
  title.className = "fx-chat-title";
  title.textContent = "Lobby 2 Chat";
  const badge = document.createElement("span");
  badge.className = "fx-chat-unread";
  badge.hidden = true;
  const minimizeButton = createButton("–", "Minimize", () => setMinimized(!geometry.minimized));
  const hideButton = createButton("×", "Hide chat", () => setHidden(true));
  titleBar.append(dot, title, badge, minimizeButton, hideButton);

  const body = document.createElement("div");
  body.className = "fx-chat-body";

  const resizeHandle = document.createElement("div");
  resizeHandle.className = "fx-chat-resize";
  resizeHandle.title = "Resize";

  root.append(titleBar, body, resizeHandle);

  // the show/hide button above the game's leave button
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "fx-chat-toggle";
  toggle.hidden = true;
  toggle.innerHTML = chatIcon;
  const toggleBadge = document.createElement("span");
  toggleBadge.className = "fx-chat-unread";
  toggleBadge.hidden = true;
  toggle.append(toggleBadge);
  toggle.addEventListener("click", () => setHidden(!hidden));

  document.getElementById("windowContainer").append(root, toggle);

  titleBar.addEventListener("pointerdown", event => {
    if (!event.target.closest("button")) startPointerAction(event, "move");
  });
  titleBar.addEventListener("dblclick", event => {
    if (!event.target.closest("button")) setMinimized(!geometry.minimized);
  });
  resizeHandle.addEventListener("pointerdown", event => startPointerAction(event, "resize"));

  return { root, titleBar, dot, badge, minimizeButton, body, toggle, toggleBadge };
}

function setHidden(hide) {
  hidden = hide;
  ui.root.classList.toggle("fx-chat-user-hidden", hidden);
  ui.toggle.classList.toggle("fx-chat-toggle-off", hidden);
  ui.toggle.setAttribute("aria-pressed", String(!hidden));
  ui.toggle.title = hidden ? "Show chat" : "Hide chat";
  ui.toggle.setAttribute("aria-label", ui.toggle.title);
  if (hidden) {
    // give keyboard focus back to the game if the player was typing in the chat
    if (ui.root.contains(document.activeElement)) window.focus();
  } else if (!geometry.minimized) {
    unread = 0;
    updateUnread();
  }
}

/** Where the game draws its leave button, in page pixels */
function getLeaveButtonRect() {
  try {
    const scale = window.__fx.hoveringTooltip?.canvasPixelScale || window.devicePixelRatio || 1;
    const attackBar = window[dictionary.attackBar];
    const size = attackBar[dictionary.attackBarSize], top = attackBar[dictionary.attackBarTop];
    if (!(size > 0) || !Number.isFinite(top)) return null;
    const gap = getUIGap();
    return { x: gap / scale, y: top / scale, size: size / scale, gap: gap / scale, line: 1 / scale };
  } catch {
    return null;
  }
}

function updateToggle(inGame) {
  // the leave button's menu opens into the space above it
  const leaveMenuOpen = !!window[dictionary.leaveButton]?.[dictionary.leaveMenuOpen];
  const rect = sessionActive && inGame && !getVar("uiHidden") && !leaveMenuOpen ? getLeaveButtonRect() : null;
  ui.toggle.hidden = rect === null;
  if (rect === null) return;
  const layout = `${rect.x},${rect.y},${rect.size},${rect.gap},${rect.line}`;
  if (layout === toggleLayout) return;
  toggleLayout = layout;
  const style = ui.toggle.style;
  style.left = rect.x + "px";
  style.top = rect.y - rect.gap - rect.size + "px";
  style.width = style.height = rect.size + "px";
  style.setProperty("--fx-toggle-line", rect.line + "px");
  // same corner radius as the smooth UI frame of the game's buttons
  style.setProperty("--fx-toggle-radius", Math.min(rect.gap / 2, rect.size / 2) + "px");
}

function clampGeometry() {
  const maxWidth = Math.max(MIN_WIDTH, window.innerWidth);
  const maxHeight = Math.max(MIN_HEIGHT, window.innerHeight);
  geometry.width = Math.min(Math.max(geometry.width ?? DEFAULT_WIDTH, MIN_WIDTH), maxWidth);
  geometry.height = Math.min(Math.max(geometry.height ?? DEFAULT_HEIGHT, MIN_HEIGHT), maxHeight);
  // by default, sit in the bottom left corner, above the show/hide button
  const leaveButton = getLeaveButtonRect();
  geometry.x ??= leaveButton?.x ?? 12;
  geometry.y ??= leaveButton
    ? Math.round(leaveButton.y - leaveButton.size - 2 * leaveButton.gap - geometry.height)
    : window.innerHeight - geometry.height - Math.round(window.innerHeight * 0.12);
  const visibleHeight = geometry.minimized ? ui.titleBar.offsetHeight : geometry.height;
  geometry.x = Math.min(Math.max(geometry.x, 0), window.innerWidth - geometry.width);
  geometry.y = Math.min(Math.max(geometry.y, 0), window.innerHeight - visibleHeight);
}

function applyGeometry() {
  clampGeometry();
  const style = ui.root.style;
  style.left = geometry.x + "px";
  style.top = geometry.y + "px";
  style.width = geometry.width + "px";
  style.height = geometry.minimized ? "" : geometry.height + "px";
  // while minimized, the chat keeps its size so the iframe doesn't have to lay itself out again
  const borders = ui.root.offsetHeight - ui.root.clientHeight;
  ui.root.style.setProperty("--fx-chat-body-height", geometry.height - borders - ui.titleBar.offsetHeight + "px");
  ui.root.classList.toggle("fx-chat-minimized", !!geometry.minimized);
  ui.minimizeButton.textContent = geometry.minimized ? "□" : "–";
  ui.minimizeButton.title = geometry.minimized ? "Restore" : "Minimize";
  ui.minimizeButton.setAttribute("aria-label", ui.minimizeButton.title);
}

/** Moves or resizes the window while the pointer is held down */
function startPointerAction(event, action) {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  if (action === "resize" && geometry.minimized) return;
  event.preventDefault();
  const handle = event.currentTarget;
  const start = { x: event.clientX, y: event.clientY, geometry: { ...geometry } };
  handle.setPointerCapture(event.pointerId);
  // the iframe would otherwise swallow pointer events while the pointer is over it
  ui.root.classList.add("fx-chat-dragging");

  function move(moveEvent) {
    const dx = moveEvent.clientX - start.x, dy = moveEvent.clientY - start.y;
    if (action === "move") {
      geometry.x = start.geometry.x + dx;
      geometry.y = start.geometry.y + dy;
    } else {
      geometry.width = start.geometry.width + dx;
      geometry.height = start.geometry.height + dy;
    }
    applyGeometry();
  }
  function end() {
    handle.removeEventListener("pointermove", move);
    handle.removeEventListener("pointerup", end);
    handle.removeEventListener("pointercancel", end);
    ui.root.classList.remove("fx-chat-dragging");
    saveGeometry();
  }
  handle.addEventListener("pointermove", move);
  handle.addEventListener("pointerup", end);
  handle.addEventListener("pointercancel", end);
}

function setMinimized(minimized) {
  geometry.minimized = minimized;
  if (!minimized && !hidden) {
    unread = 0;
    updateUnread();
  }
  applyGeometry();
  saveGeometry();
}

function updateUnread() {
  const text = unread > 99 ? "99+" : String(unread);
  for (const badge of [ui.badge, ui.toggleBadge]) {
    badge.hidden = unread === 0;
    badge.textContent = text;
  }
}

function setStatus(status) {
  ui.dot.dataset.status = status;
  ui.dot.title = { connecting: "Connecting…", connected: "Connected", failed: "Not connected" }[status] ?? "";
}

function showNotice(text, buttonText, action) {
  removeFrame();
  const notice = document.createElement("div");
  notice.className = "fx-chat-notice";
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  notice.append(paragraph);
  if (buttonText) notice.append(createButton(buttonText, buttonText, action));
  ui.body.replaceChildren(notice);
  setStatus("failed");
}

function loadFrame() {
  removeFrame();
  frame = document.createElement("iframe");
  frame.title = "Lobby 2 chat";
  // no "allow-modals": an alert in the chat would freeze the game, which runs on the same thread.
  // no "allow-top-navigation": the chat can't navigate this page.
  frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox");
  // the name puts the client in the iframe into chat-only mode
  frame.name = CHAT_FRAME_NAME;
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  frame.src = url.href;
  ui.body.replaceChildren(frame);
  setStatus("connecting");
}

function removeFrame() {
  if (frame === null) return;
  frame.remove();
  frame = null;
}

/** Whether the current game was joined from Lobby 2, the lobby the chat logs into */
function isLobby2Game() {
  if (getVar("gIsSingleplayer") || window.__fx.customLobby?.isActive()) return false;
  return getVar("connectionScreen")?.[dictionary.lobbyNumber] === 2;
}

function openChat() {
  if (!getSettings().ingameChat || getVar("gIsReplay")) return;
  ui ??= createUI();
  unread = 0;
  restarts = 0;
  updateUnread();
  sessionActive = true;
  // the chat comes back at the start of every game, even if it was hidden in the last one
  setHidden(false);
  ui.root.hidden = false;
  applyGeometry();
  if (isLobby2Game())
    showNotice("You're in a game from Lobby 2. The chat would log into Lobby 2 a second time with the same account, which could disconnect you from this game.",
      "Connect anyway", loadFrame);
  else loadFrame();
}

function closeChat() {
  sessionActive = false;
  if (ui === null) return;
  removeFrame();
  ui.body.replaceChildren();
  ui.root.hidden = true;
  ui.toggle.hidden = true;
}

function restartFrame() {
  if (frame === null) return;
  if (++restarts > MAX_RESTARTS)
    return showNotice("The chat stopped working. It'll be back next game.");
  loadFrame();
}

/** Events from the chat-only client in the iframe */
function onChildEvent(type, detail, source) {
  if (frame === null || source !== frame.contentWindow) return;
  if (type === "status") setStatus(detail);
  else if (type === "messages" && (geometry.minimized || hidden)) {
    unread += detail;
    updateUnread();
  }
  // removing the iframe while its code is running could break it, so do it afterwards
  else if (type === "restart") setTimeout(restartFrame, 0);
}

function checkGame() {
  const inGame = !!getVar("gameState");
  if (inGame !== wasInGame) {
    wasInGame = inGame;
    if (inGame) openChat();
    else closeChat();
  }
  if (ui === null) return;
  // hide the chat along with the rest of the game UI
  ui.root.classList.toggle("fx-chat-ui-hidden", inGame && !!getVar("uiHidden"));
  updateToggle(inGame);
}

if (!chatMode.isActive()) {
  // every frame, so the chat closes before the game reconnects to its lobby after leaving a game
  const loop = () => {
    checkGame();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
  // animation frames don't run in background tabs
  setInterval(checkGame, 1000);
  window.addEventListener("resize", () => {
    if (ui !== null && !ui.root.hidden) applyGeometry();
  });
}

export default { onChildEvent };
