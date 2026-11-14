import { definePatch, insert } from "../modUtils.js"

export default definePatch(({ safeDictionary: dict, insertCode, modifyCode, matchCode }) => {

    matchCode(`if (hidden === game.uiHidden) { return; } game.uiHidden = hidden;`,
        { dictionary: { game: dict.game }, addToDictionary: ["uiHidden"] })

    matchCode(`return (this.gIsReplay ? (escMenu.escMenuOpen || !replayPanel.playingFlag)
        : (this.gIsSingleplayer && (escMenu.escMenuOpen || this.gSelectableSpawn)));`, {
        dictionary: { gIsReplay: dict.gIsReplay, gIsSingleplayer: dict.gIsSingleplayer },
        addToDictionary: ["gSelectableSpawn"]
    })

    modifyCode(`
        this.dh = function() {
            entryIndex = 0;
            cmdIndex = 0;
            emptyTicks = 0;
            serverTick = 0;
            subTick = 0;
            ${insert(`__fx.replay.registerHooks({
                advance: () => advanceTick(),
                finishTick: () => sidePanels.updateSidePanels(),
                requestRedraw: () => { gameLoop.needsRedraw = true; },
                isEnded: () => game.gameState === 2,
                getTickInterval: () => gameLoop.tickInterval
            });`)}
        };
        this.eb = function() {
            screenManager.eb();
            ${insert(`if (__fx.replay.frame()) { renderIdle(); } else`)}
            if (replayPanel.getSpeed() < 1.7) {
                slowLoop();
            } else {
                fastLoop();
            }
            updateOverlays();
            if (gameLoop.needsRedraw) {
                gameLoop.needsRedraw = false;
                redrawGame();
            }
        };
        function slowLoop() {
            var interval;
            if (frameCount === 0) {
                if (gameLoop.time >= nextTickTime) {
                    interval = gameLoop.tickInterval / replayPanel.getSpeed();
                    nextTickTime += interval * Math.floor(1 + (gameLoop.time - nextTickTime) / interval);
                    if (game.gameState === 2 || escMenu.escMenuOpen || !replayPanel.playingFlag) {
                        renderIdle();
                    } else {
                        advanceTick();
                        sidePanels.updateSidePanels();
                    }
                    /*...*/
                }
            }
        }`)

    matchCode(`var flags = protocol.replayRecorder.tickFlags;
        var counts = protocol.replayRecorder.tickCounts;
        if (entryIndex >= counts.length) { /*...*/ }`,
        { addToDictionary: ["protocol", "replayRecorder", "tickFlags", "tickCounts"] })

    insertCode(`if (++emptyTicks >= count) { entryIndex++; emptyTicks = 0; } /* here */ return true;`,
        `__fx.replay.tick++;`)
    insertCode(`cmdIndex += count; entryIndex++; /* here */ return true;`, `__fx.replay.tick++;`)

    modifyCode(`
        ${insert(`__fx.replay.restartReplay = () => this.watchReplay();`)}
        this.watchReplay = function() {
            var mapKey = maps.getKey(game.data);
            if (game.data.mapType !== 2 && !maps.cache.has(mapKey)) { /*...*/ }
         };`)

    insertCode(`
        this.dh = function() {
            if (!game.gIsReplay) {
                return;
            }
            speedIndex = 5;
            this.playingFlag = false;
            speedMenuOpen = false;
            panelRect = new Rect([0.3, 0.3 / 6], [0.5, 1]);
            this.resize();
        };
        this.getSpeed = function() {
            return speedLevels[speedIndex];
        };
        this.getPanelTop = function() {
            return panelRect.panelY;
        };
        /* here */`,
        `__fx.replay.controls = {
            fxIsPlaying: () => this.playingFlag,
            fxGetSpeedIndex: () => speedIndex,
            fxSetSpeedIndex: (index) => { speedIndex = index; this.resize(); },
            fxGetPanelTop: () => panelRect && panelRect.panelY
        };`)

    modifyCode(`
        ${insert(`__fx.replay.togglePlayPause = () => this.togglePause(true);`)}
        this.togglePause = function(fromError) {
            if (game.gameState === 2) {
                this.setUIHidden(false);
                menuSystem.u(3);
                return;
            }
            /*...*/
        };`)
})
