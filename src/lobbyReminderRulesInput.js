import { gameOptions, mapOptions, contestOptions, refreshMapOptions, ANY, NONE } from "./lobbyFilters.js";

export function LobbyReminderRulesInput(containerElement) {
    const header = document.createElement("p");
    const heading = document.createElement("b");
    heading.innerText = "Reminder rules";
    header.append(heading);
    const note = document.createElement("small");
    note.innerText = "You'll get a notification in lobby whenever a game matching one of these rules is about to start.";
    containerElement.append(header, note, document.createElement("br"));

    this.fields = [
        { key: "game", label: "Game", options: gameOptions },
        { key: "map", label: "Map", options: mapOptions },
        { key: "contest", label: "Contest", options: contestOptions }
    ];

    const columnHeader = document.createElement("div");
    columnHeader.className = "reminder-rules-header";
    this.fields.forEach(field => {
        const label = document.createElement("span");
        label.innerText = field.label;
        columnHeader.append(label);
    });
    columnHeader.append(document.createElement("span"));
    containerElement.append(columnHeader);

    const rulesContainer = document.createElement("div");
    rulesContainer.className = "arrayinput";
    const addButton = document.createElement("button");
    addButton.innerText = "Add";
    containerElement.append(rulesContainer, addButton);

    containerElement.className = "keybinds-input";
    this.container = rulesContainer;
    this.rules = [];
    this.addRule = function () {
        this.rules.push({ game: NONE, map: ANY, contest: ANY });
        this.container.appendChild(createRow.call(this, this.rules.length - 1));
        addButton.scrollIntoView(false);
        columnHeader.style.display = "";
    };
    addButton.addEventListener("click", this.addRule.bind(this));
    this.update = function (settings) {
        this.rules = (settings.lobbyReminderRules || []).map(rule => ({ game: ANY, map: ANY, contest: ANY, ...rule }));
        this.displayRules();
    };
    this.save = function (targetSettings) {
        targetSettings.lobbyReminderRules = this.rules;
    };
    this.displayRules = function () {
        this.container.innerHTML = "";
        columnHeader.style.display = this.rules.length === 0 ? "none" : "";
        if (this.rules.length === 0) return this.container.innerText = "No reminder rules added";
        for (let i = 0; i < this.rules.length; i++) this.container.appendChild(createRow.call(this, i));
    };
    const createRow = function (index) {
        const row = document.createElement("div");
        row.className = "reminder-rule-row";
        this.fields.forEach(field => row.appendChild(createSelect.call(this, index, field)));
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", this.deleteRule.bind(this, index));
        row.appendChild(deleteButton);
        return row;
    };
    const createSelect = function (index, field) {
        const select = document.createElement("select");
        field.options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.setAttribute("value", option.value);
            optionElement.innerText = option.label;
            select.append(optionElement);
        });
        if (field.key === "map") refreshMapOptions(select);
        select.value = this.rules[index][field.key];
        select.addEventListener("change", () => this.rules[index][field.key] = select.value);
        return select;
    };
    this.deleteRule = function (index) {
        this.rules.splice(index, 1);
        this.displayRules();
    };
    return this;
}
