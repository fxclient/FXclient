
import { definePatch, insert } from "../modUtils.js";

export default definePatch(({ matchCode, modifyCode }) => {
    const { storageKey } = matchCode(`input.addEventListener("blur", function() {
        keyboard.focusedInputs--;
        if (source.storageKey !== -1) { storage.setter.set(source.storageKey, input.value) }
    });`);

    const customPasswordField = insert(`
        var customPasswordInput = new TextInput({ value: "", storageKey: -1 });
        customPasswordInput.element.placeholder = "Custom new password (optional)";
        section.add(customPasswordInput);
    `);

    const saveCustomPassword = insert(`
        if (!__fx.passwordReset.setCustomPassword(customPasswordInput.element.value)) return;
    `);

    modifyCode(`var passwordInput = new TextInput(storage.buffer.data[106]);
        passwordInput.element.readOnly = true;
        passwordInput.element.type = "password";
        section.add(passwordInput);

        section.add(new ButtonRow([
            new Button(__L(), function(clickedButton) {
                if (clickedButton.textContent === __L()) {
                    clickedButton.textContent = __L();
                    passwordInput.element.type = "text";
                } else {
                    clickedButton.textContent = __L();
                    passwordInput.element.type = "password";
                }
                return true;
            }).button,

            new Button(__L(), function(clickedButton) {
                utils.dom.selectText(passwordInput.element);
                utils.dom.flashButton(clickedButton);
                return true;
            }).button
        ]));

        ${customPasswordField}

        section.add(new ButtonRow([
            new Button(__L(), function() {
                ${saveCustomPassword}
                menu.open(8, menu.current().container, new ConnectionScreen(15));
            }).button
        ]));`,
        { dictionary: { storageKey } }
    );

    modifyCode(`random.setBuffer(writer.buffer);
        storage.setter.set(110, ${insert(`__fx.passwordReset.getCustomPassword() ||`)}
            encoding.chars.fromCodes(encoding.chars.randomCodes(15)));
        network.account.sendNewPassword()`);
});
