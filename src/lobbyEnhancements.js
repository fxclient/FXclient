(() => {
  const searchClass = "fx-lobby-roster-search";
  if (window.__fx?.settings?.enhancedLobbyLayout === false) return;
  const translate = key => window.__fx?.translateFX?.(key) ?? key;
  const fontScale = () => Math.max(0.75, Math.min(1.25, Number(window.__fx?.settings?.lobbyFontScale ?? 100) / 100));
  const filterFontSize = () => `clamp(11px, ${0.4 * fontScale()}em, 14px)`;
  const normalizeClan = clan => typeof clan === "string" ? clan.trim().toLocaleUpperCase() : null;
  function isPlayerRow(element) {
    if (!(element instanceof HTMLSpanElement)) return false;
    return element.style.width !== ""
      && element.style.maxWidth !== ""
      && element.textContent.trim().length > 1;
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

    const applyFilter = () => {
      const query = search.value.trim().toLocaleLowerCase();
      const parseClan = window.__fx?.leaderboardFilter?.parseClanFromPlayerName;
      const playerId = window.__fx?.getGameVar?.("playerId");
      const ownName = window.__fx?.getGameVar?.("rawPlayerNames")?.[playerId];
      const ownClan = normalizeClan(parseClan && ownName ? parseClan(ownName) : null);
      let total = 0;
      let shown = 0;
      let readyClanmate = false;
      for (const row of Array.from(list.children)) {
        if (!isPlayerRow(row)) continue;
        total++;
        const text = row.textContent.trim();
        const matchesReadiness = readyFilter.value === "all"
          || (readyFilter.value === "ready" && /^\u{1F7E2}/u.test(text))
          || (readyFilter.value === "not-ready" && /^\u26AA/u.test(text))
        const isFollowed = isFollowedPlayer(row);
        const matchesFollowed = followedFilter.value !== "followed" || isFollowed;
        const clan = normalizeClan(parseClan && row.dataset.fxAccountName ? parseClan(row.dataset.fxAccountName) : null);
        if (ownClan && clan === ownClan && row.dataset.fxAccountName !== ownName && /^\u{1F7E2}/u.test(text)) {
          readyClanmate = true;
        }
        const matchesClan = clanFilter.value === "all"
          || (clanFilter.value === "clan" && clan != null)
          || (clanFilter.value === "my-clan" && ownClan != null && clan === ownClan);
        const visible = text.toLocaleLowerCase().includes(query) && matchesReadiness && matchesFollowed && matchesClan;
        if (visible) shown++;
        row.style.order = sortFollowedFirst ? (isFollowed ? "-1" : "0") : "";
        row.style.fontSize = ".58em";
        row.style.setProperty(
          "display",
          visible ? "inline-block" : "none",
          "important"
        );
      }
      if (sortFollowedFirst || rankSortDirection !== 0) {
        const orderedRows = Array.from(list.children).filter(isPlayerRow);
        orderedRows.sort((a, b) => {
          if (sortFollowedFirst) {
            const followedDifference = Number(isFollowedPlayer(b)) - Number(isFollowedPlayer(a));
            if (followedDifference) return followedDifference;
          }
          if (!rankSortDirection) return 0;
          const rankA = Number(a.dataset.fxRank);
          const rankB = Number(b.dataset.fxRank);
          const validA = Number.isFinite(rankA) && rankA > 0;
          const validB = Number.isFinite(rankB) && rankB > 0;
          if (validA !== validB) return validA ? -1 : 1;
          if (!validA) return 0;
          return (rankA - rankB) * rankSortDirection;
        });
        for (let index = 0; index < orderedRows.length; index++) {
          const currentRows = Array.from(list.children).filter(isPlayerRow);
          if (currentRows[index] !== orderedRows[index]) {
            list.insertBefore(orderedRows[index], currentRows[index] ?? null);
          }
        }
      }
      playerCount.textContent = translate("showingPlayers")
        .replace("{shown}", String(shown))
        .replace("{total}", String(total));
      const readyLabel = translate("ready").trim().toLocaleLowerCase();
      for (const button of list.parentElement.querySelectorAll("button")) {
        if (button.dataset.fxReadyButton !== "true"
          && button.textContent.trim().toLocaleLowerCase() !== readyLabel) continue;
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
          button.style.boxShadow = "inset 0 0 0 2px #55d98b";
        } else {
          badge?.remove();
          button.style.boxShadow = "";
        }
      }
    };
    search.addEventListener("input", applyFilter);
    readyFilter.addEventListener("change", applyFilter);
    followedFilter.addEventListener("change", applyFilter);
    clanFilter.addEventListener("change", applyFilter);
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
      applyFilter();
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
      applyFilter();
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
      applyFilter();
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
    const thinLobbyBorders = () => {
      for (const element of [lobbyRoot, ...lobbyRoot.querySelectorAll("*")]) {
        const style = getComputedStyle(element);
        if (!element.classList.contains("fx-lobby-filter-action")
          && element.matches("button, [role='button'], h1, h2, h3")) {
          const baseSize = element.matches("h1, h2, h3") ? 0.72 : 0.56;
          const scaledSize = `clamp(12px, ${baseSize * fontScale()}em, 22px)`;
          if (element.style.fontSize !== scaledSize) element.style.fontSize = scaledSize;
        }
        if ([style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth, style.borderLeftWidth].some(width => parseFloat(width) > 0)
          && parseFloat(element.style.borderWidth) !== 0.5) {
          element.style.borderWidth = ".5px";
        }
      }
    };
    thinLobbyBorders();
    let borderUpdateScheduled = false;
    const scheduleThinLobbyBorders = () => {
      if (borderUpdateScheduled) return;
      borderUpdateScheduled = true;
      requestAnimationFrame(() => {
        borderUpdateScheduled = false;
        thinLobbyBorders();
      });
    };
    new MutationObserver(scheduleThinLobbyBorders).observe(lobbyRoot, {
      attributes: true,
      attributeFilter: ["class", "style"],
      childList: true,
      subtree: true
    });
    new MutationObserver(applyFilter).observe(list, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "data-fx-followed", "data-fx-rank"] });
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
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (node instanceof Element) scan(node);
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
  scan(document.documentElement);
})();
