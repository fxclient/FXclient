(() => {
  const searchClass = "fx-lobby-roster-search";
  if (window.__fx?.settings?.enhancedLobbyLayout === false) return;
  const translate = key => window.__fx?.translateFX?.(key) ?? key;
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
    list.style.gridTemplateColumns = "repeat(auto-fit, minmax(max(10em, calc((100% - .8em) / 5)), 1fr))";
    list.style.alignItems = "center";
    list.style.gap = "0.02em 0.2em";
    list.style.margin = "0.2em 0.35em";

    const search = document.createElement("input");
    search.className = searchClass;
    search.type = "search";
    search.placeholder = translate("searchLobbyPlayers");
    search.setAttribute("aria-label", translate("searchLobbyPlayers"));
    search.style.cssText = "box-sizing:border-box;width:65%;height:2em;margin:.2em .35em;padding:.25em .55em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.45);color:white;font:inherit;font-size:clamp(12px,.9em,18px)";
    const readyFilter = document.createElement("select");
    readyFilter.className = "fx-lobby-ready-filter";
    readyFilter.setAttribute("aria-label", translate("filterReadiness"));
    readyFilter.style.cssText = "box-sizing:border-box;width:30%;height:2em;margin:.2em 0;padding:.2em .45em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.65);color:white;font:inherit;font-size:clamp(12px,.9em,18px)";
    for (const [value, key] of [["all", "allPlayers"], ["ready", "ready"], ["not-ready", "notReady"]]) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = translate(key);
      readyFilter.appendChild(option);
    }
    const followedFilter = document.createElement("select");
    followedFilter.className = "fx-lobby-followed-filter";
    followedFilter.setAttribute("aria-label", translate("filterFollowed"));
    followedFilter.style.cssText = "box-sizing:border-box;width:30%;height:2em;margin:.2em 0;padding:.2em .45em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.65);color:white;font:inherit;font-size:clamp(12px,.9em,18px)";
    for (const [value, key] of [["all", "allPlayers"], ["followed", "followedOnly"]]) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = translate(key);
      followedFilter.appendChild(option);
    }

    const resetFilters = document.createElement("button");
    resetFilters.type = "button";
    resetFilters.textContent = translate("resetLobbyFilters");
    resetFilters.setAttribute("aria-label", translate("resetLobbyFilters"));
    resetFilters.style.cssText = "box-sizing:border-box;min-height:2em;padding:.2em .55em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.65);color:white;font:inherit;font-size:clamp(12px,.9em,18px);white-space:nowrap;cursor:pointer";

    const followedFirst = document.createElement("button");
    followedFirst.type = "button";
    followedFirst.textContent = translate("followedFirst");
    followedFirst.setAttribute("aria-pressed", "false");
    followedFirst.style.cssText = resetFilters.style.cssText;

    const playerCount = document.createElement("span");
    playerCount.setAttribute("aria-live", "polite");
    playerCount.style.cssText = "flex:0 0 auto;white-space:nowrap;font-size:.55em;opacity:.8;margin:.05em .35em 0 auto";
    let sortFollowedFirst = false;

    const applyFilter = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let total = 0;
      let shown = 0;
      for (const row of Array.from(list.children)) {
        if (!isPlayerRow(row)) continue;
        total++;
        const text = row.textContent.trim();
        const matchesReadiness = readyFilter.value === "all"
          || (readyFilter.value === "ready" && /^\u{1F7E2}/u.test(text))
          || (readyFilter.value === "not-ready" && /^\u26AA/u.test(text))
        const isFollowed = isFollowedPlayer(row);
        const matchesFollowed = followedFilter.value !== "followed" || isFollowed;
        const visible = text.toLocaleLowerCase().includes(query) && matchesReadiness && matchesFollowed;
        if (visible) shown++;
        row.style.order = sortFollowedFirst ? (isFollowed ? "-1" : "0") : "";
        row.style.fontSize = ".58em";
        row.style.setProperty(
          "display",
          visible ? "inline-block" : "none",
          "important"
        );
      }
      if (sortFollowedFirst) {
        const orderedRows = Array.from(list.children).filter(isPlayerRow);
        orderedRows.sort((a, b) => Number(isFollowedPlayer(b)) - Number(isFollowedPlayer(a)));
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
    };
    search.addEventListener("input", applyFilter);
    readyFilter.addEventListener("change", applyFilter);
    followedFilter.addEventListener("change", applyFilter);
    resetFilters.addEventListener("click", () => {
      search.value = "";
      readyFilter.value = "all";
      followedFilter.value = "all";
      applyFilter();
    });
    followedFirst.addEventListener("click", () => {
      sortFollowedFirst = !sortFollowedFirst;
      followedFirst.setAttribute("aria-pressed", String(sortFollowedFirst));
      followedFirst.style.backgroundColor = sortFollowedFirst ? "rgba(20,90,45,.85)" : "rgba(0,0,0,.65)";
      applyFilter();
    });
    const controls = document.createElement("div");
    controls.style.cssText = "position:sticky;top:0;z-index:5;box-sizing:border-box;display:flex;align-items:center;gap:.25em;width:100%;flex-wrap:wrap;margin-bottom:.15em;padding:.25em .15em;background:transparent";
    search.style.cssText += ";flex:1 1 10em;width:auto;min-width:6em;font-size:.55em;border-width:.5px";
    readyFilter.style.cssText += ";flex:1 1 7em;width:auto;min-width:6em;font-size:.55em;border-width:.5px";
    followedFilter.style.cssText += ";flex:1 1 7em;width:auto;min-width:6em;font-size:.55em;border-width:.5px";
    resetFilters.style.fontSize = followedFirst.style.fontSize = ".55em";
    resetFilters.style.borderWidth = followedFirst.style.borderWidth = ".5px";
    playerCount.style.fontSize = ".48em";
    controls.append(search, readyFilter, followedFilter, followedFirst, resetFilters, playerCount);
    list.parentElement.insertBefore(controls, list);
    for (let ancestor = list.parentElement, depth = 0; ancestor && depth < 3; ancestor = ancestor.parentElement, depth++) {
      for (const button of ancestor.querySelectorAll("button")) {
        button.style.fontSize = ".55em";
      }
      for (const element of ancestor.querySelectorAll("*")) {
        const style = getComputedStyle(element);
        if ([style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth, style.borderLeftWidth].some(width => parseFloat(width) > 0)) {
          element.style.borderWidth = ".5px";
        }
      }
    }
    new MutationObserver(applyFilter).observe(list, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "data-fx-followed"] });
  }

  function scan() {
    for (const element of document.querySelectorAll("span")) {
      if (/^[^:]{1,12}:\s*\d+$/.test(element.textContent.trim())) {
        element.style.fontSize = "0.62em";
        element.style.whiteSpace = "nowrap";
      }
    }
    for (const element of document.querySelectorAll("div")) {
      if (element.children.length < 8) continue;
      const rows = Array.from(element.children).filter(isPlayerRow);
      if (rows.length >= 8) enhanceRoster(element);
    }
  }

  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  scan();
})();
