import ModUtils, { insert } from '../modUtils.js';

// Custom lobby patches
export default (/** @type {ModUtils} */ { modifyCode, insertCode, replaceCode, replaceRawCode, safeDictionary: dict, waitForMinification }) => {
    return; // temporarily disabled

    // set player id correctly
    insertCode(`function aBG(aBE) {
		if (!Lobby.aAl) { return -1; }
        /* here */
		var s = aBE.length;
		var qu = Lobby.aAl.qu;
		for (var i = 0; i < s; i++) { if (aBE[i].qu === qu) { return i; } }
		return -1;
	}`, `if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();`);

    insertCode(`this.y___ = function() { s___.t(5, 5); };
	    this.a3a = function() { s___.w___(); aY.init(); }; /* here */`,
        `__fx.customLobby.setJoinFunction(() => { s___.w___(); aY.init(); });`)
    modifyCode(`var l;
        ${insert(`if (__fx.customLobby.isActive()) l = __fx.customLobby.getSocketURL();
        else`)} if (b.c) { l = "ws://localhost:" + (7130 + d) + "/"; }`)

    // if the server is unreachable
    insertCode(`if (socketId === 0) { q.a08(3249); return; } /* here */`,
        `if (socketId === 1 && __fx.customLobby.isActive()) {
            q.a08(3249);
            return __fx.customLobby.setActive(false);
        }`)

    insertCode(`this.send = function(a, b) {
        if (a !== 0) {c(a);}
		d[a].send(b);
	}; /* here */`, "__fx.customLobby.setSendFunction(this.send)")
    // when a socket error occurs on the custom lobby socket
    insertCode(`this.b = function(id, t) { /* here */ this.a.push(t); if (i.h === 8 && id === 0) {if (t === 4211) {f(t);} else {/*...*/}}};`, `id===1 && __fx.customLobby.isActive() && MenuManager.getState() !== 6 && __fx.customLobby.setActive(false);`, { dictionary: {MenuManager: dict.MenuManager, getState: dict.getState} })
    // when leaving a game
    modifyCode(`${insert(`if (__fx.customLobby.isActive() === false)`)} a.b.c();
		d.e();
		this.f = 0;
		g.h();
		i.j.setState(0);
		MenuManager.setState(0);
		${insert(`if (!__fx.customLobby.isActive()) `)} k.l.m(n);
		${insert(`if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
            else`)} if (this.o === 2) {/*...*/}`)

    waitForMinification(() => {
        replaceRawCode("b7.dH(a0),0===b7.size?aq.kt.aJJ(wR,3205):",
            "b7.dH(a0),0===b7.size?aq.kt.aJJ(wR,3205):__fx.customLobby.isCustomMessage(a0)||")
        // set the custom lobby to inactive when clicking the "Back" button on the connection screen or leaving the lobby
        replaceRawCode("this.xZ=function(){Sockets.kt.wf(3260),i___.kt.we()}",
            "this.xZ=function(){Sockets.kt.wf(3260),__fx.customLobby.setActive(false),i___.kt.we()}")
        replaceRawCode("function(){n.r(),bl.zf(),Sockets.s.ze(3240),n.o(5,5)}",
            `(__fx.customLobby.setLeaveFunction(() => {n.r(),bl.zf(),Sockets.s.ze(3240),__fx.customLobby.setActive(false),n.o(5,5)}),
            function(){n.r(),bl.zf(),Sockets.s.ze(3240),__fx.customLobby.setActive(false),n.o(5,5)})`)
        // do not display lobby UI
        replaceRawCode(`(sV.style.backdropFilter="blur(4px)",sV.style.webkitBackdropFilter="blur(4px)"),`,
            `(sV.style.backdropFilter="blur(4px)",sV.style.webkitBackdropFilter="blur(4px)"),
            __fx.customLobby.isActive() && (sV.style.display = "none"),`);
        // allow games with one player
        replaceRawCode("if((t3=bk.t1.t3[e0])<2)return!1;", "if((t3=bk.t1.t3[e0])<2 && !__fx.customLobby.isActive())return!1;")
        // error descriptions
        const errors = { 3249: "No servers found", 4705: "Lobby not found", 4730: "Kicked from lobby" };
        replaceRawCode(`m.n___(4,5,new o(__L(),xT(e),!0))`,
            `m.n___(4,5,new o(__L(),${JSON.stringify(errors)}[e] ?? xT(e),!0))`)
        // map info (for the map selection menu)
        replaceRawCode("this.info=new Array(Maps.totalMapCount+1),this.info[0]={name:__L(),",
            "this.info=new Array(Maps.totalMapCount+1),__fx.customLobby.setMapInfo(this.info),this.info[0]={name:__L(),")
        // to not set custom lobby games as singleplayer
        replaceRawCode("this.vK=this.jS=this.data.a0f,this.gameIsSingleplayer=1===this.vK,",
            "this.vK=this.jS=this.data.a0f,this.gameIsSingleplayer=1===this.vK&&!__fx.customLobby.isActive(),")
        // custom difficulty
        replaceRawCode("if(9===a1.jq)this.jr();else if(a1.js)if(3===a1.data.jv)for(z=a1.ju-1;0<=z;z--){var jw=z+jp;this.ie[jw]=",
            `if(9===a1.jq)this.jr();
            else if (__fx.customLobby.isActive()) for(z=a1.ju-1;0<=z;z--) this.ie[z+jp] = __fx.customLobby.gameInfo.difficulty;
            else if(a1.js)if(3===a1.data.jv)for(z=a1.ju-1;0<=z;z--){var jw=z+jp;this.ie[jw]=`)
        // spawn selection
        replaceRawCode(":50,this.a=this.b=this.data.c,this.d=this.b?new e:null,",
            ":50,this.a=this.b=__fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.c,this.d=this.b?new e:null,")
        // bot count
        replaceRawCode("1===a.b?this.gLobbyMaxJoin=this.gHumans:this.gLobbyMaxJoin=this.data.playerCount,this.maxPlayers=this.gLobbyMaxJoin,this.gBots=this.gLobbyMaxJoin-this.gHumans,this.sg=0,",
            `this.gLobbyMaxJoin = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.gHumans) : 1===a.b?this.gLobbyMaxJoin=this.gHumans:this.gLobbyMaxJoin=this.data.playerCount,
            this.maxPlayers=this.gLobbyMaxJoin,this.gBots=this.gLobbyMaxJoin-this.gHumans,this.sg=0,`)
    });
}