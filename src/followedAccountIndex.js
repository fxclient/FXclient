export function normalizeAccountName(name) {
  return (typeof name === "string" ? name : "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^\s*\[[^\]]+\]\s*/, "")
    .replace(/[^\p{L}\p{N}]/gu, "")
    .toLocaleLowerCase();
}

function getNameVariant(name) {
  return (typeof name === "string" ? name : "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^\s*\[[^\]]+\]\s*/, "")
    .trim()
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
    const variantsByName = new Map();
    for (const name of new Set([
      ...accountNames,
      ...Object.keys(nicknameSource),
      ...Object.keys(colorSource),
    ])) {
      const normalized = normalizeAccountName(name);
      if (!normalized) continue;
      const variants = variantsByName.get(normalized) ?? new Set();
      variants.add(getNameVariant(name));
      variantsByName.set(normalized, variants);
    }
    names = new Set([...variantsByName]
      .filter(([, variants]) => variants.size === 1)
      .map(([normalized]) => normalized));
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
