'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { buildOccupiedMap, resolverColisionesAgentes } = require('./collision.js');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Create a minimal agent object. */
function mkAgent(id, x, y) {
  return { id, x, y };
}

// ---------------------------------------------------------------------------
// buildOccupiedMap
// ---------------------------------------------------------------------------

test('buildOccupiedMap produces correct key→agent entries', () => {
  const a = mkAgent('a', 2, 3);
  const b = mkAgent('b', 5, 7);
  const map = buildOccupiedMap([a, b]);
  assert.equal(map.get('2,3'), a);
  assert.equal(map.get('5,7'), b);
  assert.equal(map.size, 2);
});

// ---------------------------------------------------------------------------
// Normal movement (no conflict)
// ---------------------------------------------------------------------------

test('normal non-conflicting movement: both agents are allowed', () => {
  const a = mkAgent('a', 0, 0);
  const b = mkAgent('b', 5, 5);

  const proposals = [
    { agent: a, nx: 1, ny: 0 },
    { agent: b, nx: 6, ny: 5 },
  ];
  const occupied = buildOccupiedMap([a, b]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.ok(allowed.has(a), 'agent a should be allowed');
  assert.ok(allowed.has(b), 'agent b should be allowed');
});

test('single agent with a clear path is always allowed', () => {
  const a = mkAgent('a', 3, 3);
  const proposals = [{ agent: a, nx: 4, ny: 3 }];
  const occupied = buildOccupiedMap([a]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.ok(allowed.has(a));
});

// ---------------------------------------------------------------------------
// Same-target conflict
// ---------------------------------------------------------------------------

test('same-target conflict: neither agent is allowed to move', () => {
  const a = mkAgent('a', 0, 0);
  const b = mkAgent('b', 2, 0);

  // Both target the middle cell (1, 0)
  const proposals = [
    { agent: a, nx: 1, ny: 0 },
    { agent: b, nx: 1, ny: 0 },
  ];
  const occupied = buildOccupiedMap([a, b]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.ok(!allowed.has(a), 'agent a must be blocked');
  assert.ok(!allowed.has(b), 'agent b must be blocked');
});

test('same-target with three agents: all are blocked', () => {
  const a = mkAgent('a', 0, 0);
  const b = mkAgent('b', 2, 0);
  const c = mkAgent('c', 1, 1);

  const proposals = [
    { agent: a, nx: 1, ny: 0 },
    { agent: b, nx: 1, ny: 0 },
    { agent: c, nx: 1, ny: 0 },
  ];
  const occupied = buildOccupiedMap([a, b, c]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.equal(allowed.size, 0);
});

test('same-target only affects the conflicting pair; unrelated agent still moves', () => {
  const a = mkAgent('a', 0, 0);
  const b = mkAgent('b', 2, 0);
  const c = mkAgent('c', 10, 10);

  // a and b fight over (1,0); c moves freely to (11,10)
  const proposals = [
    { agent: a, nx: 1, ny: 0 },
    { agent: b, nx: 1, ny: 0 },
    { agent: c, nx: 11, ny: 10 },
  ];
  const occupied = buildOccupiedMap([a, b, c]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.ok(!allowed.has(a));
  assert.ok(!allowed.has(b));
  assert.ok(allowed.has(c), 'unrelated agent c should still be allowed');
});

// ---------------------------------------------------------------------------
// Swap conflict
// ---------------------------------------------------------------------------

test('swap conflict: A→B and B→A are both blocked', () => {
  const a = mkAgent('a', 1, 0);
  const b = mkAgent('b', 2, 0);

  const proposals = [
    { agent: a, nx: 2, ny: 0 },
    { agent: b, nx: 1, ny: 0 },
  ];
  const occupied = buildOccupiedMap([a, b]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.ok(!allowed.has(a), 'a must be blocked (swap)');
  assert.ok(!allowed.has(b), 'b must be blocked (swap)');
});

test('swap conflict does not affect a third agent moving elsewhere', () => {
  const a = mkAgent('a', 1, 0);
  const b = mkAgent('b', 2, 0);
  const c = mkAgent('c', 5, 5);

  const proposals = [
    { agent: a, nx: 2, ny: 0 },
    { agent: b, nx: 1, ny: 0 },
    { agent: c, nx: 6, ny: 5 },
  ];
  const occupied = buildOccupiedMap([a, b, c]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.ok(!allowed.has(a));
  assert.ok(!allowed.has(b));
  assert.ok(allowed.has(c));
});

// ---------------------------------------------------------------------------
// Occupied-tile blocking
// ---------------------------------------------------------------------------

test('occupied-tile blocking: moving into a stationary agent is blocked', () => {
  const a = mkAgent('a', 0, 0);
  const b = mkAgent('b', 1, 0); // stationary, no proposal

  const proposals = [{ agent: a, nx: 1, ny: 0 }];
  const occupied = buildOccupiedMap([a, b]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.ok(!allowed.has(a), 'a cannot move into b\'s tile');
});

test('occupied-tile blocking: moving into a moving agent\'s current tile is still blocked', () => {
  // Even though b is also moving away, the conservative rule blocks a.
  const a = mkAgent('a', 0, 0);
  const b = mkAgent('b', 1, 0);

  const proposals = [
    { agent: a, nx: 1, ny: 0 }, // wants b's current tile
    { agent: b, nx: 2, ny: 0 }, // b moves away (different direction, not a swap)
  ];
  const occupied = buildOccupiedMap([a, b]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  assert.ok(!allowed.has(a), 'a is conservatively blocked even though b is moving away');
  assert.ok(allowed.has(b), 'b\'s uncontested move should be allowed');
});

test('agent moving into its own current tile is allowed (no-op move)', () => {
  const a = mkAgent('a', 3, 3);

  const proposals = [{ agent: a, nx: 3, ny: 3 }];
  const occupied = buildOccupiedMap([a]);
  const allowed = resolverColisionesAgentes(proposals, occupied);

  // The occupant IS the moving agent itself, so it must not block itself.
  assert.ok(allowed.has(a));
});
