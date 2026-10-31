import assert from "node:assert/strict";
import test from "node:test";
import { createFollowedAccountIndex } from "../src/followedAccountIndex.js";

test("caches normalized account names and matches accents, punctuation, and clan tags", () => {
  const index = createFollowedAccountIndex();
  index.update(["[CAT] José"], {}, {});
  assert.equal(index.has("jose"), true);
  assert.equal(index.has("[cat] JOSE!"), true);
  assert.equal(index.has("SomeoneElse"), false);
});

test("refreshes the index when account names or source objects change", () => {
  const index = createFollowedAccountIndex();
  const names = ["Alice"];
  const nicknames = {};
  const colors = {};
  index.update(names, nicknames, colors);
  assert.equal(index.has("Alice"), true);

  names[0] = "Bob";
  index.invalidate();
  index.update(names, nicknames, colors);
  assert.equal(index.has("Alice"), false);
  assert.equal(index.has("Bob"), true);

  const updatedNicknames = { Charlie: "Chaz" };
  index.update(names, updatedNicknames, colors);
  assert.equal(index.has("Charlie"), true);
});

test("refreshes after in-place nickname and color edits when invalidated", () => {
  const index = createFollowedAccountIndex();
  const nicknames = {};
  const colors = {};
  index.update([], nicknames, colors);
  assert.equal(index.has("NewFollow"), false);

  colors.NewFollow = "#abcdef";
  index.invalidate();
  index.update([], nicknames, colors);
  assert.equal(index.has("NewFollow"), true);
});
