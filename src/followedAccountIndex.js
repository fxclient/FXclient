export function normalizeAccountName(name) {
  return (typeof name === "string" ? name : "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^\s*\[[^\]]+\]\s*/, "")
    .replace(/[^\p{L}\p{N}]/gu, "")
    .toLocaleLowerCase();
}

export function createFollowedAccountIndex() {
  let accountNames = [];
  let accountNamesSource;
  let nicknameSource;
  let colorSource;
  let names = new Set();
  let invalidated = true;

  function update(nextAccountNames, nextNicknames, nextColors) {
    if (!invalidated && accountNamesSource === nextAccountNames
      && nicknameSource === nextNicknames && colorSource === nextColors) return;

    accountNamesSource = nextAccountNames;
    accountNames = nextAccountNames.slice();
    nicknameSource = nextNicknames;
    colorSource = nextColors;
    names = new Set([
      ...accountNames,
      ...Object.keys(nicknameSource),
      ...Object.keys(colorSource),
    ].map(normalizeAccountName).filter(Boolean));
    invalidated = false;
  }

  return {
    update,
    invalidate() {
      invalidated = true;
    },
    has(accountName) {
      const normalized = normalizeAccountName(accountName);
      return normalized !== "" && names.has(normalized);
    },
  };
}
