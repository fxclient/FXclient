// Keep hotkey routing independently testable without a browser or game engine.
export function createSmartAttackKeyHandler(automation, getSettings, document) {
    return event => {
        const key = automation.config.smart.key;
        // The default physical Period key also works with a Russian keyboard layout.
        if (event.key !== key && !(key === '.' && event.code === 'Period')) return;
        if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || event.isComposing
            || event.target?.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"])')) return;
        // The update notification is a banner, not a modal. It must not disable gameplay.
        if ([...document.querySelectorAll('.window,[role="dialog"],dialog[open]')]
            .some(node => node.id !== 'updateNotification' && node.getClientRects().length > 0)) return;
        if (automation.hooks?.inputBlocked?.()) return;
        if (automation.hooks?.keyConflict?.(event.code)
            || getSettings().attackPercentageKeybinds.some(binding => binding.key === event.key || binding.key === key)) {
            automation.notifySmart('Hotkey is assigned to another action; change it in Smart Attack settings');
            return; // Preserve the original manual shortcut.
        }
        if (automation.smartAttack()) { event.preventDefault(); event.stopImmediatePropagation(); }
    };
}
