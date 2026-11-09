import { definePatch, insert } from "../modUtils.js";

export default definePatch(({ matchCode, matchRawCode, modifyCode }) => {

    matchCode(`if (!isNaN(mentionIndex) && mentionIndex >= 0 && mentionIndex < languageHolder.languageData.languageCodes.length) {
        text = text.replace("@" + mention, "@" + languageHolder.languageData.languageCodes[mentionIndex])
    }`, { addToDictionary: ["languageHolder", "languageData", "languageCodes"] })

    const { textField } = matchRawCode(
        `if(msgId===0){return{msgId:msgId,senderField:reader.readBits(30),senderExtra:readExtra(),textField:container.decoder.decode(helper1.helper2.helper3(8))}}`
    )

    modifyCode(`${insert(`if (__fx.pingFilter.isMuted(message, "textField")) return;`)}
    notifications.push(message);
    !settingsHolder.userSettings.data[14].value && message.id !== 7 && notificationSound.play();
    if (!messagePopup) { return }`,
        { dictionary: { textField } })
})