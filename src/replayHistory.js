const STORAGE_KEY = "fx_replays";
const MAX_REPLAYS = 5;

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Failed to load replay history:", error);
    return [];
  }
}

function persist(replays) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(replays));
  } catch (error) {
    console.warn("Failed to save replay history:", error);
  }
}

function save(replayData) {
  if (!replayData) return;
  const replays = load();
  if (replays.some((replay) => replay.data === replayData)) return;
  replays.push({ data: replayData, timestamp: Date.now() });
  while (replays.length > MAX_REPLAYS) replays.shift();
  persist(replays);
}

function getAll() {
  return load().slice().reverse(); // most recent first
}

function remove(timestamp) {
  persist(load().filter((r) => r.timestamp !== timestamp));
}

function clear() {
  localStorage.removeItem(STORAGE_KEY);
}

export default { save, getAll, remove, clear, load: () => { alert("Game hasn't loaded yet") } };