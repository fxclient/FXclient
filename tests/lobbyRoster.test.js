import assert from "node:assert/strict";
import test from "node:test";
import { isLobbyPlayerRow, readLobbyReadiness, syncLobbyReadiness } from "../src/lobbyRoster.js";

test("uses the FX row marker instead of inline dimensions to identify lobby players", () => {
  assert.equal(isLobbyPlayerRow({ dataset: { fxLobbyPlayer: "true" }, style: {} }), true);
  assert.equal(isLobbyPlayerRow({ dataset: {}, style: { width: "10em", maxWidth: "10em" } }), false);
});

test("normalizes visible ready indicators to explicit data values", () => {
  const row = { dataset: { fxLobbyPlayer: "true" }, textContent: "🟢 Player" };
  assert.equal(syncLobbyReadiness(row), "ready");
  assert.equal(row.dataset.fxLobbyReady, "ready");

  row.textContent = "⚪️ Player";
  assert.equal(syncLobbyReadiness(row), "not-ready");
  assert.equal(row.dataset.fxLobbyReady, "not-ready");

  row.textContent = "Player";
  assert.equal(syncLobbyReadiness(row), "unknown");
  assert.equal(row.dataset.fxLobbyReady, "unknown");
});

test("recognizes supported Unicode status glyphs", () => {
  assert.equal(readLobbyReadiness("🟢 Ready"), "ready");
  assert.equal(readLobbyReadiness("⚪ Not ready"), "not-ready");
  assert.equal(readLobbyReadiness("⚪️ Not ready"), "not-ready");
  assert.equal(readLobbyReadiness("unknown"), "unknown");
});
