import { definePatch } from "../modUtils.js";

export default definePatch(({ replaceRawCode, matchRawCode }) => {
    const { grouping, playerList } = matchRawCode(
        `var frag=document.createDocumentFragment();var players=container.grouping.playerList;var rooms=container.roomHolder.roomArray;var wide=0;for(var g=0;g<rooms.length;g++){wide=wide||rooms[g].mode===8}`
    );

    const { ipField, username } = matchRawCode(
        `text=entry.username;text+="   "+container2.ecObj.formatOne(entry.ef,entry.a4k,entry.aG1);text+=formatTwo(entry);text+="   IP: "+hasher.hqObj.maskFn(entry.ipField,2);text+="   "+["🟥 Offline","🟩 Online"][flag?state:checkOnline(entry,arg)];return text}`
    );

    const { ownEntry } = matchRawCode(
        `this.isSelf=function(entry){if(!state.ownEntry){return false}return entry.idField===state.ownEntry.idField};`
    );

    replaceRawCode(
        `bq.lJ.ub(qu)&&(s0.style.textDecoration="underline");if(qu.dottedFlag){s0.style.textDecorationLine="underline";s0.style.textDecorationStyle="dotted"}s0.onclick=`,
        `if (__fx.settings.highlightDuplicateIps) {
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
        bq.lJ.ub(qu)&&(s0.style.textDecoration="underline");if(qu.dottedFlag){s0.style.textDecorationLine="underline";s0.style.textDecorationStyle="dotted"}s0.onclick=`,
        { uT: grouping, uU: playerList, ipField, username, ownEntry }
    );
});
