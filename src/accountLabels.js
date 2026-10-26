import WindowManager from "./windowManager.js";

const LABEL_SEPARATOR = " - ";
const DEFAULT_COLOR = "#ffffff";
const WINDOW_NAME = "accountLabel";

let saveHandler = () => {};
let editedColor = "";

export function isColor(value) {
  return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
}
export function labelEntry(entry, accountName, label, color) {
  const indicator = entry.textContent.startsWith("🟢") ? "🟢" : "⚪";
  entry.textContent = indicator + " " + accountName + (label ? LABEL_SEPARATOR + label : "");
  entry.style.color = color;
}
export function openLabelEditor({ title, accountName, label, color, placeholder, maxLength, onSave }) {
  windowTitle.innerText = title;
  accountText.textContent = accountName;
  labelInput.placeholder = placeholder;
  labelInput.maxLength = maxLength;
  labelInput.value = label;
  setColor(color);
  saveHandler = onSave;
  WindowManager.openWindow(WINDOW_NAME);
}
const labelWindow = WindowManager.create({
  name: WINDOW_NAME,
  closeWithButton: true
});
const windowTitle = document.createElement("h1");
const accountLine = document.createElement("p");
const accountText = document.createElement("b");
accountLine.append("Account: ", accountText);
const labelInput = document.createElement("input");
labelInput.type = "text";
const colorInput = document.createElement("input");
colorInput.type = "color";
colorInput.addEventListener("input", () => editedColor = colorInput.value);
const noColorButton = document.createElement("button");
noColorButton.innerText = "No color";
noColorButton.addEventListener("click", () => setColor(""));
const saveButton = document.createElement("button");
saveButton.innerText = "Save";
saveButton.addEventListener("click", save);
labelWindow.append(windowTitle, accountLine, labelInput, document.createElement("br"),
  "Color: ", colorInput, noColorButton, document.createElement("br"), saveButton);

function setColor(color) {
  editedColor = color;
  colorInput.value = color || DEFAULT_COLOR;
}
function save() {
  saveHandler(labelInput.value.trim(), editedColor);
  WindowManager.closeWindow(WINDOW_NAME);
}
