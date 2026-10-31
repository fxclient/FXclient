import assert from "node:assert/strict";
import test from "node:test";
import { createFrameScheduler } from "../src/frameScheduler.js";

test("coalesces repeated requests into one callback per frame", () => {
  const frames = [];
  let calls = 0;
  const schedule = createFrameScheduler(() => calls++, callback => frames.push(callback));

  schedule();
  schedule();
  schedule();
  assert.equal(frames.length, 1);
  assert.equal(calls, 0);

  frames.shift()();
  assert.equal(calls, 1);
  schedule();
  assert.equal(frames.length, 1);
  frames.shift()();
  assert.equal(calls, 2);
});
