import { definePatch, insert } from "../modUtils.js";

export default definePatch(({ matchCode, modifyCode }) => {

    const { options } = matchCode(`entry = document.createElement("p");
        entry.textContent = "⚪ " + source.options[i];`);

    const { Button } = matchCode(`buttons = [new Button(__L(), function() {
        var index = Math.min(storage.buffer.data[117].value, accountList.entries.length - 1);
        /*...*/
    })]`);
    modifyCode(`accountList = new RadioList(storage.buffer.data[117], updateButtons);
        ${insert(`__fx.savedAccounts.decorate(accountList.entries, storage.buffer.data[117].options);`)}
        updateButtons(0);
        accountList.entries[0].style.marginTop = "0.5em";
        section.addRadioList(accountList);
        section.add(new ButtonRow([buttons[0].button]));
        ${insert(`section.add(new ButtonRow([new Button("✏️ Edit Label", function() {
            __fx.savedAccounts.edit(storage.buffer.data[117].value);
        }).button]));`)}
        section.add(new ButtonRow([buttons[1].button]));`,
        { dictionary: { options, Button } });
});
