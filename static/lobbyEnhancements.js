(() => {
  const searchClass = "fx-lobby-roster-search";
  function isPlayerRow(element) {
    if (!(element instanceof HTMLSpanElement)) return false;
    return element.style.display === "inline-block"
      && element.style.width !== ""
      && element.style.maxWidth !== ""
      && element.textContent.trim().length > 1;
  }

  function enhanceRoster(list) {
    if (list.dataset.fxLobbyEnhanced === "true") return;
    list.dataset.fxLobbyEnhanced = "true";
    list.style.display = "grid";
    list.style.gridTemplateColumns = "repeat(auto-fit, minmax(min(100%, 13em), 1fr))";
    list.style.alignItems = "center";
    list.style.gap = "0.1em 0.35em";
    list.style.margin = "0.3em";

    const search = document.createElement("input");
    search.className = searchClass;
    search.type = "search";
    search.placeholder = "Lobby-Spieler suchen …";
    search.setAttribute("aria-label", "Lobby-Spieler suchen");
    search.style.cssText = "display:block;box-sizing:border-box;width:calc(100% - .8em);margin:.35em .4em;padding:.4em .6em;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(0,0,0,.45);color:white;font:inherit";
    search.addEventListener("input", () => {
      const query = search.value.trim().toLocaleLowerCase();
      for (const row of Array.from(list.children)) {
        if (isPlayerRow(row)) row.style.display = row.textContent.toLocaleLowerCase().includes(query) ? "inline-block" : "none";
      }
    });

    list.parentElement.insertBefore(search, list);
    const applyFilter = () => {
      const query = search.value.trim().toLocaleLowerCase();
      for (const row of Array.from(list.children)) {
        if (isPlayerRow(row)) row.style.display = row.textContent.toLocaleLowerCase().includes(query) ? "inline-block" : "none";
      }
    };
    new MutationObserver(applyFilter).observe(list, { childList: true });
  }

  function scan() {
    for (const element of document.querySelectorAll("div")) {
      if (element.children.length < 8) continue;
      const rows = Array.from(element.children).filter(isPlayerRow);
      if (rows.length >= 8) enhanceRoster(element);
    }
  }

  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  scan();
})();
