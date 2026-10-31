export function isLobbyPlayerRow(element) {
  return element?.dataset?.fxLobbyPlayer === "true";
}

export function readLobbyReadiness(text) {
  if (/^\u{1F7E2}/u.test(text)) return "ready";
  if (/^\u26AA(?:\uFE0F)?/u.test(text)) return "not-ready";
  return "unknown";
}

export function syncLobbyReadiness(row) {
  if (!isLobbyPlayerRow(row)) return "unknown";
  const readiness = readLobbyReadiness(row.textContent ?? "");
  if (row.dataset.fxLobbyReady !== readiness) {
    row.dataset.fxLobbyReady = readiness;
  }
  return readiness;
}
