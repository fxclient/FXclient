import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../static/sw2.js', import.meta.url), 'utf8');
function worker(hostname) {
    const handlers = {}, calls = { skip: 0, claim: 0, responses: 0 };
    const self = { location: { hostname }, addEventListener: (name, handler) => handlers[name] = handler,
        skipWaiting: () => { calls.skip++; return Promise.resolve(); },
        clients: { claim: () => { calls.claim++; return Promise.resolve(); }, matchAll: async () => [] } };
    vm.runInNewContext(source, { self, console: { log() {} }, caches: { keys: async () => [] } });
    const event = { waitUntil() {}, request: { url: `http://${hostname}/fx.bundle.js` }, respondWith: () => calls.responses++ };
    return { handlers, calls, event };
}

test('localhost workers immediately activate and let rebuilt assets reach the server', () => {
    for (const host of ['127.0.0.1', 'localhost', '[::1]']) {
        const { handlers, calls, event } = worker(host);
        handlers.install(event); handlers.activate(event); handlers.fetch(event);
        assert.deepEqual(calls, { skip: 1, claim: 1, responses: 0 });
    }
});

test('hosted workers still wait for the existing user-controlled update flow', () => {
    const { handlers, calls, event } = worker('fxclient.github.io');
    handlers.install(event); handlers.activate(event);
    assert.equal(calls.skip, 0); assert.equal(calls.claim, 0);
    handlers.message({ data: { update: true } }); assert.equal(calls.skip, 1);
});
