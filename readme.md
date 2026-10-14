<p align="center">
  <a href="https://fxclient.github.io/FXclient/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="/assets/logo_text_dark.png">
      <source media="(prefers-color-scheme: light)" srcset="/assets/logo_text_light.png">
      <img src="/assets/logo_text_light.png" width="20%">
    </picture>
  </a>
</p>
<p align="center">
  <a href="https://discord.gg/JEwYWGraj7"><img alt="FX Client Discord" src="https://img.shields.io/discord/1055801912286515220?logo=discord&logoColor=white&label=FX%20Client&color=5865F2"></a>
  <a href="https://github.com/fxclient/FXclient/actions/workflows/deploy_github_pages.yml"><img src="https://github.com/fxclient/FXclient/actions/workflows/deploy_github_pages.yml/badge.svg" alt="Build and Publish to GitHub Pages"></a>
  <a href="https://fxclient.github.io/FXclient/"><img src="https://github.com/fxclient/FXclient/actions/workflows/pages/pages-build-deployment/badge.svg" alt="pages-build-deployment"></a>
</p>

## What is FX Client?
FX Client is the first Territorial.io client, offering a better User Interface and better User Experience. It's basically Territorial.io but better.

**You can use the latest version of the client here: https://fxclient.github.io/FXclient/**

## Features:
1. It's free and open source on Github
2. It's ad-free and removes the game's default ads
3. It makes game look cooler, by replacing default assets with new ones
4. Displays your troop density and maximum troops
5. Displays the density of players and bots
6. Adds a "Clan" tab to the leaderboard, allowing you to easily see your clanmates, along with a "Rivals" tab to see how your clan compares to others
7. Adds custom lobbies
8. Hovering tooltip: makes the territory map information (normally visible on right click) be visible constantly (on hover)
9. Adds a player list
10. In team games, clicking on a player's name in the leaderboard or the player list allows you to see who donated to them
11. Adds a win counter & an in-game tick counter
12. Makes replays more useful by auto-saving recent games and adding a seek bar for rewinding/fast-forwarding replays
13. Can be installed as a PWA (progressive web app) and works offline both as an installed app and in the browser

#### The client has a settings menu, from which you can:

14. Make fullscreen mode trigger automatically
15. Set a custom main menu background
16. Create custom attack percentage keybinds that are also usable on mobile (with optional on-screen buttons)
... and more!

## Building Locally

To build the client locally, install Node.js if you haven't already, clone the repo, then run:

```
npm install
npm run build
```

This will install the dependencies, download the game and build the client.

To build from an already downloaded copy of the game, use `npm run build-only`.

## Local Opening Scheduler and Smart Bot Attack

Use Node.js 22.18 or later. After building, run:

```powershell
npm test
npm start
```

Open **http://127.0.0.1:8080** in your browser. The server binds to this computer only.
Stop it with Ctrl+C. Both gameplay helpers are disabled initially and only dispatch
commands in an active, unpaused **singleplayer** game. Multiplayer, replays, spawn
selection, eliminated players and ended games cannot dispatch attacks.

The **Opening Control** panel is available before a match. Choose **Edit / Settings**
and scroll to **Opening** to create, name, duplicate or delete presets. Each action has
an absolute simulation tick (starting at 1), Troops/Percent mode, value and enable
checkbox. Actions are validated and sorted when saved. Choose an active preset and
enable Scheduler, then click **Apply Opening / Smart Attack** to save without reloading.
The main **Save Settings** button also saves these settings and reloads as usual.

Each saved preset appears as a panel button. Selecting it enables its remaining
schedule; **OFF** cancels future automatic actions immediately. Switching during a
game never catches up elapsed ticks or repeats a consumed action. A new game resets
execution history. The panel shows the active preset and next tick and can collapse
with **−**. Presets, selection and collapse state persist in `localStorage.fx_automation`.
This separate key is not included in the existing FX settings JSON export/reset.

Under **Smart Attack**, enable the feature and set its hotkey (default **.**), maximum
debit (1–50%), safety multiplier (default 1.10) and panel notifications. One press
attempts at most one attack, with an additional one-per-tick guard. Text fields, FX
windows, native dialogs, key repeat and conflicting native/FX shortcuts block it.
Targets are real land neighbors, ordered by fewest troops, largest territory, then
smallest ID. Only your own active attacks exclude a bot.

You can also enable **Smart: ON** directly on the panel and click **Attack bot**.
The default physical Period key works with a Russian keyboard layout too. Blocked
attempts show a reason on the panel (disabled, waiting for a match, pause, shortcut
conflict, no eligible bot or insufficient troops). An update banner and keyboard
focus on a panel button do not block the shortcut. On localhost, updated service
workers activate immediately and do not cache rebuilt assets; reload after rebuilding.

Smart Attack uses a **conservative snapshot estimate**, not a guaranteed minimum
winning force: future income, reinforcements, bot expansion and other battles are
not predictable from a snapshot. Native combat and fraction rounding are verified
at build time. The 50% cap includes the native sending fee. Unsupported combat
costs and special mode 10 skip Smart Attack. See [implementation and validation notes](docs/opening-and-smart-attack.md)
for the formulas, native functions, test coverage and remaining manual checks.

Territorial.io's [terms](https://territorial.io/terms) permit mods that preserve game
integrity and prohibit cheating. This implementation deliberately confines these
helpers to local singleplayer; it does not assume permission for multiplayer automation.

## Contact Us

Join the FX Client Discord server: https://discord.gg/JEwYWGraj7
