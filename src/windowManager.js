var windows = {};
function add(newWindow) {
    windows[newWindow.name] = newWindow;
    windows[newWindow.name].isOpen = false;
};
function openWindow(windowName, ...args) {
    if (windows[windowName].isOpen === true) return;
    if (windows[windowName].beforeOpen !== undefined) windows[windowName].beforeOpen(...args);
    windows[windowName].isOpen = true;
    windows[windowName].element.style.display = null;
};
function closeWindow(windowName) {
    if (windows[windowName].isOpen === false) return;
    windows[windowName].isOpen = false;
    windows[windowName].element.style.display = "none";
    if (windows[windowName].onClose !== undefined) windows[windowName].onClose();
};
function closeAll() {
    Object.values(windows).forEach(function (windowObj) {
        closeWindow(windowObj.name);
    });
};
document.getElementById("canvasA").addEventListener("mousedown", closeAll);
document.getElementById("canvasA").addEventListener("touchstart", closeAll, { passive: true });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeAll(); });

export default { add, openWindow, closeWindow, closeAll }