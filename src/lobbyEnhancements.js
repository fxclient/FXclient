import { isLobbyPlayerRow, syncLobbyReadiness } from "./lobbyRoster.js";
import { createFrameScheduler } from "./frameScheduler.js";

(() => {
  const searchClass = "fx-lobby-roster-search";
  if (window.__fx?.settings?.enhancedLobbyLayout === false) return;
  const translate = key => window.__fx?.translateFX?.(key) ?? key;
  const fontScale = () => Math.max(0.75, Math.min(1.25, Number(window.__fx?.settings?.lobbyFontScale ?? 100) / 100));
  const filterFontSize = () => `clamp(11px, ${0.4 * fontScale()}em, 14px)`;
  const normalizeClan = clan => typeof clan === "string" ? clan.trim().toLocaleUpperCase() : null;
  const getClan = (name, parser) => {
    if (typeof name !== "string") return null;
    if (typeof parser === "function") {
      try {
        const parsed = normalizeClan(parser(name));
        if (parsed) return parsed;
      } catch {}
    }
    return normalizeClan(name.match(/\[([^\]]{1,16})\]/)?.[1] ?? null);
  };
  const isPlayerRow = element => element instanceof HTMLSpanElement && isLobbyPlayerRow(element);
  const activeRosterObservers = new Set();

  function decorateLobbyTabIcons(root) {
    const icons = {
      chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.6-.8L4 20l1.5-3.6A7.2 7.2 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/><path d="M8 11h8M8 14h5"/>',
      players: '<circle cx="12" cy="8" r="3"/><path d="M5.5 19a6.5 6.5 0 0 1 13 0"/>',
    };
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    for (const textNode of textNodes) {
      const element = textNode.parentElement;
      if (!element || element.closest("[data-fx-lobby-tab-icon='true']")) continue;
      const match = /^(\s*)(Chat|Spieler|Players)(?=\s|$|\d)/i.exec(textNode.textContent);
      const iconType = match?.[2].toLocaleLowerCase() === "chat" ? "chat"
        : match ? "players" : null;
      const paths = textNode.textContent.length <= 100 && iconType ? icons[iconType] : null;
      if (!paths) continue;
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("width", "23");
      icon.setAttribute("height", "23");
      icon.setAttribute("fill", "none");
      icon.setAttribute("stroke", "currentColor");
      icon.setAttribute("stroke-width", "1.65");
      icon.setAttribute("stroke-linecap", "round");
      icon.setAttribute("stroke-linejoin", "round");
      icon.setAttribute("aria-hidden", "true");
      icon.style.setProperty("width", "23px", "important");
      icon.style.setProperty("height", "23px", "important");
      icon.style.setProperty("min-width", "23px", "important");
      icon.style.setProperty("min-height", "23px", "important");
      icon.style.setProperty("flex", "0 0 23px", "important");
      icon.innerHTML = paths;
      const wrapper = document.createElement("span");
      wrapper.dataset.fxLobbyTabIcon = "true";
      wrapper.style.cssText = "display:inline-flex;align-items:center;gap:.35em;vertical-align:middle";
      textNode.parentNode.insertBefore(wrapper, textNode);
      if (match[1]) textNode.parentNode.insertBefore(document.createTextNode(match[1]), wrapper);
      wrapper.append(icon, document.createTextNode(match[2]));
      const trailingText = textNode.textContent.slice(match[0].length);
      if (trailingText) textNode.parentNode.insertBefore(document.createTextNode(trailingText), textNode);
      textNode.remove();
    }
  }

  function isFollowedPlayer(row) {
    const accountName = row.dataset.fxAccountName;
    const isUnderlined = getComputedStyle(row).textDecorationLine.includes("underline");
    return row.dataset.fxFollowed === "true"
      || row.classList.contains("fx-followed-player")
      || row.querySelector(".fx-followed-player") !== null
      || isUnderlined
      || (typeof accountName === "string" && window.__fx?.followedAccounts?.isFollowed(accountName) === true);
  }

  function enhanceRoster(list) {
    if (list.dataset.fxLobbyEnhanced === "true") return;
    list.dataset.fxLobbyEnhanced = "true";
    list.style.display = "grid";
    list.style.gridTemplateColumns = "repeat(auto-fit, minmax(max(10em, calc((100% - 1em) / 6)), 1fr))";
    list.style.alignItems = "center";
    list.style.gap = "0.02em 0.2em";
    list.style.margin = "0.2em 0.35em";

    const search = document.createElement("input");
    search.className = searchClass;
    search.type = "search";
    search.placeholder = translate("searchLobbyPlayers");
    search.setAttribute("aria-label", translate("searchLobbyPlayers"));
    search.style.cssText = "box-sizing:border-box;width:65%;height:1.65em;margin:.2em .35em;padding:.15em .45em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.45);color:white;font:inherit";
    const readyFilter = document.createElement("select");
    readyFilter.className = "fx-lobby-ready-filter";
    readyFilter.setAttribute("aria-label", translate("filterReadiness"));
    readyFilter.style.cssText = "box-sizing:border-box;width:30%;height:1.65em;margin:.2em 0;padding:.1em .4em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.65);color:white;font:inherit";
    for (const [value, key] of [["all", "allPlayers"], ["ready", "ready"], ["not-ready", "notReady"]]) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = translate(key);
      readyFilter.appendChild(option);
    }
    const followedFilter = document.createElement("select");
    followedFilter.className = "fx-lobby-followed-filter";
    followedFilter.setAttribute("aria-label", translate("filterFollowed"));
    followedFilter.style.cssText = "box-sizing:border-box;width:30%;height:1.65em;margin:.2em 0;padding:.1em .4em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.65);color:white;font:inherit";
    for (const [value, key] of [["all", "allPlayers"], ["followed", "followedOnly"]]) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = translate(key);
      followedFilter.appendChild(option);
    }
    const clanFilter = document.createElement("select");
    clanFilter.className = "fx-lobby-clan-filter";
    clanFilter.setAttribute("aria-label", translate("filterClan"));
    clanFilter.style.cssText = "box-sizing:border-box;height:1.65em;margin:.2em 0;padding:.1em .4em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.65);color:white;font:inherit";
    for (const [value, key] of [["all", "allPlayers"], ["clan", "clanMembersOnly"], ["my-clan", "myClanOnly"]]) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = translate(key);
      clanFilter.appendChild(option);
    }

    const resetFilters = document.createElement("button");
    resetFilters.className = "fx-lobby-filter-action";
    resetFilters.type = "button";
    resetFilters.textContent = translate("resetLobbyFilters");
    resetFilters.setAttribute("aria-label", translate("resetLobbyFilters"));
    resetFilters.style.cssText = "box-sizing:border-box;min-height:1.65em;padding:.1em .45em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.65);color:white;font:inherit;white-space:nowrap;cursor:pointer";

    const followedFirst = document.createElement("button");
    followedFirst.className = "fx-lobby-filter-action";
    followedFirst.type = "button";
    followedFirst.textContent = translate("followedFirst");
    followedFirst.setAttribute("aria-pressed", "false");
    followedFirst.style.cssText = resetFilters.style.cssText;

    const rankSort = document.createElement("button");
    rankSort.className = "fx-lobby-filter-action";
    rankSort.type = "button";
    rankSort.setAttribute("aria-pressed", "false");
    rankSort.textContent = translate("rankBestFirst");
    rankSort.style.cssText = resetFilters.style.cssText;

    const playerCount = document.createElement("span");
    playerCount.setAttribute("aria-live", "polite");
    playerCount.style.cssText = "flex:0 0 auto;white-space:nowrap;opacity:.8;margin:.05em .35em 0 auto";
    let sortFollowedFirst = false;
    let rankSortDirection = 0;

    const applyFilterNow = () => {
      const query = search.value.trim().toLocaleLowerCase();
      const parseClan = window.__fx?.leaderboardFilter?.parseClanFromPlayerName;
      const playerId = window.__fx?.getGameVar?.("playerId");
      const ownName = window.__fx?.getGameVar?.("rawPlayerNames")?.[playerId];
      const originalChildren = Array.from(list.children);
      const rows = originalChildren.filter(isPlayerRow).map(row => ({
        row,
        isFollowed: isFollowedPlayer(row),
        readiness: syncLobbyReadiness(row),
        rank: Number(row.dataset.fxRank),
        clan: getClan(row.dataset.fxAccountName, parseClan),
      }));
      const selfRow = rows.find(({ row }) => row.dataset.fxSelf === "true");
      const ownClan = getClan(ownName, parseClan) ?? selfRow?.clan ?? null;
      let total = 0;
      let shown = 0;
      let readyClanmate = false;
      for (const { row, isFollowed, readiness, rank, clan } of rows) {
        total++;
        const text = row.textContent.trim();
        const matchesReadiness = readyFilter.value === "all"
          || (readyFilter.value === "ready" && readiness === "ready")
          || (readyFilter.value === "not-ready" && readiness === "not-ready");
        const matchesFollowed = followedFilter.value !== "followed" || isFollowed;
        const isSelf = row.dataset.fxSelf === "true" || row.dataset.fxAccountName === ownName;
        if (ownClan && clan === ownClan && !isSelf && readiness === "ready") {
          readyClanmate = true;
        }
        const matchesClan = clanFilter.value === "all"
          || (clanFilter.value === "clan" && clan != null)
          || (clanFilter.value === "my-clan" && ownClan != null && clan === ownClan);
        const visible = text.toLocaleLowerCase().includes(query) && matchesReadiness && matchesFollowed && matchesClan;
        if (visible) shown++;
        const desiredOrder = sortFollowedFirst ? (isFollowed ? "-1" : "0") : "";
        if (row.style.order !== desiredOrder) row.style.order = desiredOrder;
        if (row.style.fontSize !== ".58em") row.style.fontSize = ".58em";
        const desiredDisplay = visible ? "inline-block" : "none";
        if (row.style.getPropertyValue("display") !== desiredDisplay
          || row.style.getPropertyPriority("display") !== "important") {
          row.style.setProperty("display", desiredDisplay, "important");
        }
      }
      if (sortFollowedFirst || rankSortDirection !== 0) {
        const orderedRows = rows.slice();
        orderedRows.sort((a, b) => {
          if (sortFollowedFirst) {
            const followedDifference = Number(b.isFollowed) - Number(a.isFollowed);
            if (followedDifference) return followedDifference;
          }
          if (!rankSortDirection) return 0;
          const validA = Number.isFinite(a.rank) && a.rank > 0;
          const validB = Number.isFinite(b.rank) && b.rank > 0;
          if (validA !== validB) return validA ? -1 : 1;
          if (!validA) return 0;
          return (a.rank - b.rank) * rankSortDirection;
        });
        const sorted = orderedRows.every((entry, index) => entry === rows[index]);
        if (!sorted) {
          const orderedElements = orderedRows.map(entry => entry.row);
          const rowSet = new Set(rows.map(entry => entry.row));
          const fragment = document.createDocumentFragment();
          let rowIndex = 0;
          for (const child of originalChildren) {
            fragment.appendChild(rowSet.has(child) ? orderedElements[rowIndex++] : child);
          }
          list.appendChild(fragment);
        }
      }
      playerCount.textContent = translate("showingPlayers")
        .replace("{shown}", String(shown))
        .replace("{total}", String(total));
      if (clanFilter.value === "my-clan" && !ownClan) {
        playerCount.textContent += ` · ${translate("myClanUnavailable")}`;
      }
      const readyLabel = translate("ready").trim().toLocaleLowerCase();
      for (const button of document.querySelectorAll("button, [role='button']")) {
        const buttonLabel = button.textContent.replace(/\s+/g, " ").trim().toLocaleLowerCase();
        if (button.dataset.fxReadyButton !== "true"
          && !buttonLabel.startsWith(readyLabel)) continue;
        button.dataset.fxReadyButton = "true";
        let badge = button.querySelector(".fx-ready-clan-badge");
        if (readyClanmate && ownClan) {
          if (!badge) {
            badge = document.createElement("span");
            badge.className = "fx-ready-clan-badge";
            badge.style.cssText = "display:inline-block;margin-left:.35em;padding:.05em .3em;border-radius:.3em;background:rgba(55,190,105,.22);color:#9af0b8;font-size:.72em;vertical-align:middle";
            button.appendChild(badge);
          }
          badge.textContent = `[${ownClan}]`;
          button.style.setProperty("box-shadow", "inset 0 0 0 2px #55d98b", "important");
        } else {
          badge?.remove();
          button.style.removeProperty("box-shadow");
        }
      }
    };
    let active = true;
    const scheduleApplyFilter = createFrameScheduler(() => {
      if (active) applyFilterNow();
    });
    search.addEventListener("input", scheduleApplyFilter);
    readyFilter.addEventListener("change", scheduleApplyFilter);
    followedFilter.addEventListener("change", scheduleApplyFilter);
    clanFilter.addEventListener("change", scheduleApplyFilter);
    resetFilters.addEventListener("click", () => {
      search.value = "";
      readyFilter.value = "all";
      followedFilter.value = "all";
      clanFilter.value = "all";
      sortFollowedFirst = false;
      followedFirst.setAttribute("aria-pressed", "false");
      followedFirst.style.backgroundColor = "rgba(0,0,0,.65)";
      rankSortDirection = 0;
      rankSort.setAttribute("aria-pressed", "false");
      rankSort.textContent = translate("rankBestFirst");
      rankSort.style.backgroundColor = "rgba(0,0,0,.65)";
      scheduleApplyFilter();
    });
    followedFirst.addEventListener("click", () => {
      sortFollowedFirst = !sortFollowedFirst;
      if (sortFollowedFirst) {
        rankSortDirection = 0;
        rankSort.setAttribute("aria-pressed", "false");
        rankSort.textContent = translate("rankBestFirst");
        rankSort.style.backgroundColor = "rgba(0,0,0,.65)";
      }
      followedFirst.setAttribute("aria-pressed", String(sortFollowedFirst));
      followedFirst.style.backgroundColor = sortFollowedFirst ? "rgba(20,90,45,.85)" : "rgba(0,0,0,.65)";
      scheduleApplyFilter();
    });
    rankSort.addEventListener("click", () => {
      rankSortDirection = rankSortDirection === 0 ? 1 : rankSortDirection === 1 ? -1 : 0;
      if (rankSortDirection !== 0) {
        sortFollowedFirst = false;
        followedFirst.setAttribute("aria-pressed", "false");
        followedFirst.style.backgroundColor = "rgba(0,0,0,.65)";
      }
      rankSort.setAttribute("aria-pressed", String(rankSortDirection !== 0));
      rankSort.textContent = translate(rankSortDirection === -1 ? "rankWorstFirst" : "rankBestFirst");
      rankSort.style.backgroundColor = rankSortDirection ? "rgba(20,90,45,.85)" : "rgba(0,0,0,.65)";
      scheduleApplyFilter();
    });
    const controls = document.createElement("div");
    controls.style.cssText = "position:sticky;top:0;z-index:5;box-sizing:border-box;display:flex;align-items:center;gap:.25em;width:100%;flex-wrap:wrap;margin-bottom:.15em;padding:.25em .15em;background:transparent";
    search.style.cssText += `;flex:1 1 10em;width:auto;min-width:6em;font-size:${filterFontSize()};border-width:.5px`;
    readyFilter.style.cssText += `;flex:1 1 7em;width:auto;min-width:6em;font-size:${filterFontSize()};border-width:.5px`;
    followedFilter.style.cssText += `;flex:1 1 7em;width:auto;min-width:6em;font-size:${filterFontSize()};border-width:.5px`;
    clanFilter.style.cssText += `;flex:1 1 7em;width:auto;min-width:6em;font-size:${filterFontSize()};border-width:.5px`;
    resetFilters.style.fontSize = followedFirst.style.fontSize = rankSort.style.fontSize = filterFontSize();
    resetFilters.style.borderWidth = followedFirst.style.borderWidth = rankSort.style.borderWidth = ".5px";
    playerCount.style.fontSize = `clamp(10px, ${0.34 * fontScale()}em, 12px)`;
    controls.append(search, readyFilter, followedFilter, clanFilter, followedFirst, rankSort, resetFilters, playerCount);
    list.parentElement.insertBefore(controls, list);
    let lobbyRoot = list.parentElement;
    for (let depth = 0; lobbyRoot.parentElement && depth < 2; depth++) lobbyRoot = lobbyRoot.parentElement;
    decorateLobbyTabIcons(lobbyRoot);
    const thinLobbyBorders = () => {
      for (const element of [lobbyRoot, ...lobbyRoot.querySelectorAll("*")]) {
        const style = getComputedStyle(element);
        if (!element.classList.contains("fx-lobby-filter-action")
          && element.matches("button, [role='button'], h1, h2, h3")) {
          const baseSize = element.matches("h1, h2, h3") ? 0.72 : 0.56;
          const scaledSize = `clamp(12px, ${baseSize * fontScale()}em, 22px)`;
          if (element.style.fontSize !== scaledSize) element.style.fontSize = scaledSize;
        }
        const hasBorder = [style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth, style.borderLeftWidth]
          .some(width => parseFloat(width) > 0);
        const inlineBorderWidth = element.style.getPropertyValue("border-width");
        const inlineBorderPriority = element.style.getPropertyPriority("border-width");
        if (hasBorder && (parseFloat(inlineBorderWidth) !== 0.5 || inlineBorderPriority !== "important")) {
          element.style.setProperty("border-width", ".5px", "important");
        }
      }
    };
    thinLobbyBorders();
    const scheduleThinLobbyBorders = createFrameScheduler(() => {
      if (active) thinLobbyBorders();
    });
    const borderObserver = new MutationObserver(scheduleThinLobbyBorders);
    borderObserver.observe(lobbyRoot, {
      attributes: true,
      attributeFilter: ["class", "style"],
      childList: true,
      subtree: true
    });
    const filterObserver = new MutationObserver(scheduleApplyFilter);
    filterObserver.observe(list, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["class", "data-fx-followed", "data-fx-lobby-ready", "data-fx-rank"]
    });
    let observerRecord;
    const dispose = () => {
      if (!active) return;
      active = false;
      borderObserver.disconnect();
      filterObserver.disconnect();
      controls.remove();
      delete list.dataset.fxLobbyEnhanced;
      activeRosterObservers.delete(observerRecord);
    };
    observerRecord = { list, root: lobbyRoot, dispose };
    activeRosterObservers.add(observerRecord);
    scheduleApplyFilter();
  }

  function scan(root) {
    const spans = [];
    const divs = [];
    if (root instanceof Element) {
      if (root.matches("span")) spans.push(root);
      if (root.matches("div")) divs.push(root);
      spans.push(...root.querySelectorAll("span"));
      divs.push(...root.querySelectorAll("div"));
    }
    for (const element of spans) {
      if (element.dataset.fxAccountName && element.dataset.fxLobbyPlayer !== "true") {
        element.dataset.fxLobbyPlayer = "true";
      }
      if (isPlayerRow(element)) syncLobbyReadiness(element);
      if (/^[^:]{1,12}:\s*\d+$/.test(element.textContent.trim())) {
        const size = `${0.62 * fontScale()}em`;
        if (element.style.fontSize !== size) element.style.fontSize = size;
        if (element.style.whiteSpace !== "nowrap") element.style.whiteSpace = "nowrap";
      }
    }
    for (const element of divs) {
      if (element.children.length < 8) continue;
      const rows = Array.from(element.children).filter(isPlayerRow);
      if (rows.length >= 8) enhanceRoster(element);
    }
  }

  new MutationObserver(records => {
    for (const observerRecord of activeRosterObservers) {
      if (!observerRecord.list.isConnected
        || !observerRecord.root.isConnected
        || !observerRecord.root.contains(observerRecord.list)) {
        observerRecord.dispose();
      }
    }
    for (const record of records) {
      if (record.type === "attributes" && record.target instanceof Element) {
        scan(record.target.parentElement ?? record.target);
      }
      for (const node of record.addedNodes) {
        if (node instanceof Element) scan(node);
      }
    }
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["data-fx-account-name"]
  });
  scan(document.documentElement);
})();
