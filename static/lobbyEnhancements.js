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

  function enhanceRoster(list) {
    if (list.dataset.fxLobbyEnhanced === "true") return;
    list.dataset.fxLobbyEnhanced = "true";
    list.style.display = "grid";
    list.style.gridTemplateColumns = "repeat(auto-fit, minmax(min(100%, 10em), 1fr))";
    list.style.alignItems = "center";
    list.style.gap = "0.02em 0.45em";
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

    const applyFilter = () => {
      const query = search.value.trim().toLocaleLowerCase();
      for (const row of Array.from(list.children)) {
        if (!isPlayerRow(row)) continue;
        const text = row.textContent.trim();
        const matchesReadiness = readyFilter.value === "all"
          || (readyFilter.value === "ready" && text.startsWith("🟢"))
          || (readyFilter.value === "not-ready" && text.startsWith("⚪"));
        const isFollowed = row.classList.contains("fx-followed-player")
          || row.querySelector(".fx-followed-player") !== null;
        const matchesFollowed = followedFilter.value !== "followed" || isFollowed;
        row.style.setProperty(
          "display",
          text.toLocaleLowerCase().includes(query) && matchesReadiness && matchesFollowed ? "inline-block" : "none",
          "important"
        );
      }
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
    const controls = document.createElement("div");
    controls.style.cssText = "display:flex;align-items:center;gap:.25em;width:100%;flex-wrap:wrap;margin-bottom:.15em";
    search.style.cssText += ";flex:1 1 10em;width:auto;min-width:6em";
    readyFilter.style.cssText += ";flex:1 1 7em;width:auto;min-width:6em";
    followedFilter.style.cssText += ";flex:1 1 7em;width:auto;min-width:6em";
    controls.append(search, readyFilter, followedFilter, resetFilters);
    list.parentElement.insertBefore(controls, list);
    new MutationObserver(applyFilter).observe(list, { childList: true });
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
