
export const version = "0.6.37"
export const lastUpdated = "November 18"
export const isSignificant = true

export const changes = `Merged pull request #59 by QZxV4, implementing the following:
- Fixed the display win counter toggle in settings not doing anything (issue #37) 
- Fixed spectating the BR winner increasing the win counter
- Fixed patches sometimes inserting the wrong game variable when a name used in a patch matched a placeholder (cause of the broken rivals leaderboard abit ago) 
- Added a fix for browser GPU crashes causing issues in game (map turning black, other UI elements being resized, moved or removed which I've seen occasionally be an annoyance though not game breaking)
- Stopped Large UI being auto disabled by the recommended settings option since the game already chooses it automatically and it should preferably be enabled for mobile players
- Keybinds are no longer case sensitive so they still work while Caps Lock is on
- Viewing replays no longer adds them to the replay history so it only keeps games you played
- Made the troop box corners smaller with Smoother UI on so the tick counters aren't cut off (as per the suggestion in #suggestions in the discord)`