import { getSettings } from "./settings.js";

const mentionExpression = /\B@[-\w\[\]]+/g;
const chatMessageId = 0;
const everyoneAliases = ["@0ya", "@0og", "@0pl"];

const settingForType = {
    everyone: "mutePingEveryone",
    clan: "mutePingClan",
    language: "mutePingLanguage",
    direct: "mutePingDirect"
};

function getLanguageCodes() {
    const codes = window[dictionary.languageHolder]?.[dictionary.languageData]?.[dictionary.languageCodes];
    return Array.isArray(codes) ? codes : null;
}

function getMentionType(mention) {
    if (mention.startsWith("@[") && mention.endsWith("]")) return "clan";
    if (mention === "@all" || mention === "@everyone" || everyoneAliases.includes(mention)) return "everyone";
    const name = mention.slice(1);
    const languageCodes = getLanguageCodes();
    if (languageCodes !== null)
        return languageCodes.some(code => code.toLowerCase() === name) ? "language"
            : name.length === 5 ? "direct" : "other";
    return name.length === 5 ? "direct" : name.length <= 3 ? "language" : "other";
}

function isMentionMuted(mention, settings) {
    if (settings.mutePingAll) return true;
    const settingName = settingForType[getMentionType(mention)];
    return settingName !== undefined && !!settings[settingName];
}

function isMuted(message, textField) {
    if (!message || message.id !== chatMessageId || typeof message[textField] !== "string") return false;
    const mentions = message[textField].toLowerCase().match(mentionExpression);
    if (mentions === null) return false;
    const settings = getSettings();
    return mentions.every(mention => isMentionMuted(mention, settings));
}

export default { isMuted };
