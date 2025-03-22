import { getSettings, tryEnterFullscreen } from "./settings.js";

var windows = {};

const container = document.getElementById("windowContainer");
function create(info) {
  const window = document.createElement("div");
  info.element = window;
  window.className =
    "window" +
    (info.classes !== undefined
      ? " " + info.classes
      : " scrollable selectable");
  window.style.display = "none";
  if (info.closeWithButton === true) {
    const button = document.createElement("button");
    button.addEventListener("click", () => closeWindow(info.name));
    button.textContent = "Close";
    setTimeout(() => window.appendChild(button));
  }
  container.appendChild(window);
  add(info);
  return window;
}
function add(newWindow) {
  windows[newWindow.name] = newWindow;
  windows[newWindow.name].isOpen = false;
}
function openWindow(windowName, ...args) {
  if (windows[windowName].isOpen === true) return;
  if (windows[windowName].beforeOpen !== undefined)
    windows[windowName].beforeOpen(...args);
  windows[windowName].isOpen = true;
  windows[windowName].element.style.display = null;
}
function closeWindow(windowName) {
  if (windows[windowName].isOpen === false) return;
  windows[windowName].isOpen = false;
  windows[windowName].element.style.display = "none";
  if (windows[windowName].onClose !== undefined) windows[windowName].onClose();
}
function closeAll() {
  Object.values(windows).forEach(function (windowObj) {
    if (windowObj.closable !== false) closeWindow(windowObj.name);
  });
}
document.addEventListener(
  "mousedown",
  (e) => {
    // when clicking outside a window
    if (!container.contains(e.target)) closeAll();

    const isFullScreenEnabled = getSettings().useFullscreenMode;

    if (isFullScreenEnabled) {
      tryEnterFullscreen();
    }
  },
  { passive: true, capture: true }
);

document
  .getElementById("canvasA")
  .addEventListener("touchstart", closeAll, { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAll();
});

export default { create, add, openWindow, closeWindow, closeAll };
