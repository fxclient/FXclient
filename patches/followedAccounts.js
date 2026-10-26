import { definePatch, insert } from "../modUtils.js"

export default definePatch(({ matchCode, modifyCode }) => {

    const { Button } = matchCode(`new Button(__L(), function() {
        storage.followList.unfollow(index);
        accountList.entries[index].remove();
        /*...*/
    }, colors.disabled, 1)`);
    modifyCode(`accountList = new RadioList(storage.followList.getListData(), function(i) {
            index = i;
            updateButtons()
        });
        ${insert(`__fx.followedAccounts.decorate(accountList.entries, storage.followList.get());`)}
        accountList.entries[0].style.marginTop = "0.5em";
        section.addRadioList(accountList);
        section.add(new ButtonRow([buttons[0].button]));
        ${insert(`section.add(new ButtonRow([new Button("✏️ Edit Nickname", function() {
            __fx.followedAccounts.edit(index);
        }).button]));`)}
        section.add(new ButtonRow([buttons[1].button]));`,
        { dictionary: { Button } });
})
