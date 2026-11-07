import { definePatch } from "../modUtils.js";

export default definePatch(({ replaceRawCode, matchRawCode }) => {
    const { grouping, playerList } = matchRawCode(
        `var frag=document.createDocumentFragment();var players=container.grouping.playerList;var onlineCount=container.grouping.onlineCountProp;var wide=container.rooms.isWide();for(var g=0;g<players.length;g++){handler(frag,players[g],g<onlineCount,wide)}`
    );

    const { ipField, username } = matchRawCode(
        `text=entry.username;text+="   "+container2.ecObj.formatOne(entry.ef,entry.a4k,entry.aG1);text+=formatTwo(entry);text+="   IP: "+hasher.hqObj.maskFn(entry.ipField,2);text+="   "+["🟥 Offline","🟩 Online"][flag?state:checkOnline(entry,arg)];return text}`
    );

    const { ownEntry } = matchRawCode(
        `this.isSelf=function(entry){if(!state.ownEntry){return false}return entry.idField===state.ownEntry.idField};`
    );

    replaceRawCode(
        `s0.style.width=s0.style.maxWidth=uS?"10em":"9em";s0.style.height=s0.style.maxHeight="1.4em";s0.style.whiteSpace="nowrap";s0.style.overflow="hidden";s0.style.textOverflow="ellipsis";s0.style.font="inherit";s0.style.display="inline-block";bq.lJ.ub(qu)&&(s0.style.textDecoration="underline");`,
        `s0.style.width=s0.style.maxWidth=uS?"10em":"9em";s0.style.height=s0.style.maxHeight="1.4em";s0.style.whiteSpace="nowrap";s0.style.overflow="hidden";s0.style.textOverflow="ellipsis";s0.style.font="inherit";s0.style.display="inline-block";
        if (__fx.settings.highlightDuplicateIps) {
            var __fxDupColor = __fx.utils.getDuplicateIpHighlightColor(qu, bq.uT.uU, "ipField");
            if (__fxDupColor) { s0.style.backgroundColor = __fxDupColor; s0.style.borderRadius = "0.3em"; }
        }
        if (__fx.settings.highlightSameClan) {
            var __fxClanColor = __fx.utils.getSameClanHighlightColor(qu, bq.ownEntry, "username");
            if (__fxClanColor) {
                if (s0.style.backgroundColor) s0.style.boxShadow = "inset 0 0 0 2px " + __fxClanColor;
                else s0.style.backgroundColor = __fxClanColor;
                s0.style.borderRadius = "0.3em";
            }
        }
        bq.lJ.ub(qu)&&(s0.style.textDecoration="underline");`,
        { uT: grouping, uU: playerList, ipField, username, ownEntry }
    );
});
