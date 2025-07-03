const truncate = n => parseFloat(n.toFixed(12));

export function KeybindsInput(/** @type {HTMLElement} */ containerElement) {

    const header = document.createElement("p");
    header.innerText = "Attack Percentage Keybinds";
    const keybindContainer = document.createElement("div");
    keybindContainer.className = "arrayinput";
    const keybindAddButton = document.createElement("button");
    keybindAddButton.innerText = "Add";
    containerElement.append(header, keybindContainer, keybindAddButton);

    containerElement.className = "keybinds-input";
    this.container = keybindContainer;
    this.objectKeys = ["key", "type", "value"];
    this.objectArray = [];
    this.addObject = function () {
        this.objectArray.push({ key: "", type: "absolute", value: 0.8 });
        this.container.appendChild(createInputRow(this.objectArray.length - 1));
        keybindAddButton.scrollIntoView(false);
    };
    keybindAddButton.addEventListener("click", this.addObject.bind(this));
    this.update = function (settings) {
        this.objectArray = settings.attackPercentageKeybinds;
        this.displayObjects();
    }
    this.displayObjects = function () {
        // Clear the content of the container
        this.container.innerHTML = "";
        if (this.objectArray.length === 0) return this.container.innerText = "No custom attack percentage keybinds added";
        // Loop through the array and display input fields for each object
        for (var i = 0; i < this.objectArray.length; i++) {
            this.container.appendChild(createInputRow(i));
        }
    };
    const createInputRow = (i) => {
        var objectDiv = document.createElement("div");
        // Create input fields for each modifiable parameter
        this.objectKeys.forEach(key => {
            objectDiv.appendChild(this.createInputField(i, key))
        });
        // Button to delete the object
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", this.deleteObject.bind(this, i));
        objectDiv.appendChild(deleteButton);

        return objectDiv;
    }
    this.createInputField = function (i, property) {
        let inputField = document.createElement(property === "type" ? "select" : "input");
        if (property === "type") {
            inputField.innerHTML = '<option value="absolute">Absolute</option><option value="relative">Relative</option>';
            inputField.addEventListener("change", this.updateObject.bind(this, i, property));
        } else if (property === "key") {
            inputField.type = "text";
            inputField.setAttribute("readonly", "");
            inputField.setAttribute("placeholder", "No key set");
            inputField.addEventListener("click", this.startKeyInput.bind(this, i, property));
        } else { // property === "value"
            const isAbsolute = this.objectArray[i].type === "absolute";
            inputField.type = isAbsolute ? "text" : "number";
            if (isAbsolute) inputField.addEventListener("click", this.convertIntoNumberInput.bind(this, i, property), { once: true });
            else inputField.setAttribute("step", "0.1");
            inputField.addEventListener("input", this.updateObject.bind(this, i, property));
        }
        if (property === "value" && this.objectArray[i].type === "absolute")
            inputField.value = truncate(this.objectArray[i][property] * 100) + "%";
        else inputField.value = this.objectArray[i][property];

        return inputField;
    };
    this.recreateInputField = function (index, property) {
        this.container.children[index].children[this.objectKeys.indexOf(property)].replaceWith(this.createInputField(index, property))
    };
    this.startKeyInput = function (index, property, event) {
        event.target.value = "Press any key";
        const handler = this.updateObject.bind(this, index, property);
        event.target.addEventListener('keydown', handler, { once: true });
        event.target.addEventListener("blur", () => {
            event.target.removeEventListener('keydown', handler);
            event.target.value = this.objectArray[index][property];
        }, { once: true });
    };
    this.convertIntoNumberInput = function (index, property, event) {
        event.target.value = event.target.value.slice(0, -1);
        event.target.type = "number";
        event.target.addEventListener("blur", () => {
            this.recreateInputField(index, property);
        }, { once: true });
    };
    this.updateObject = function (index, property, event) {
        if (index >= this.objectArray.length) return;
        // Update the corresponding property of the object in the array
        const value = property === "value" ? (
            this.objectArray[index].type === "absolute"
                ? truncate(parseFloat(event.target.value) / 100)
                : parseFloat(event.target.value)
        ) : property === "key" ? event.key : event.target.value;
        this.objectArray[index][property] = value;

        if (property === "key") this.recreateInputField(index, property);
        // when the keybind's type (absolute or relative) is changed
        else if (property === "type") this.recreateInputField(index, "value");
    };
    this.deleteObject = function (index) {
        // Remove the object from the array
        this.objectArray.splice(index, 1);
        // Display the updated input fields for objects
        this.displayObjects();
    };
    return this;
}