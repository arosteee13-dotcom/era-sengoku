'use strict';

/**
 * Grid-based agent collision resolution.
 *
 * Each tick every agent proposes a destination tile.  This module decides
 * which proposals are valid and returns the set of agents that are actually
 * allowed to move.  Three collision types are handled:
 *
 *  1. Same-target  – two or more agents propose the same destination.
 *  2. Swap         – agent A targets B's tile while B targets A's tile.
 *  3. Occupied     – destination is currently occupied by a non-moving agent.
 *
 * @module collision
 */

/**
 * Build an occupancy map for a collection of agents.
 *
 * @param {Array<{x: number, y: number}>} agents
 * @returns {Map<string, object>}  "col,row" → agent object
 */
function buildOccupiedMap(agents) {
  const map = new Map();
  for (const a of agents) {
    map.set(`${a.x},${a.y}`, a);
  }
  return map;
}

/**
 * Resolve movement proposals for a set of agents on a shared grid.
 *
 * @param {Array<{agent: object, nx: number, ny: number}>} proposals
 *   Each entry holds a reference to the agent object and its proposed
 *   next-tile coordinates (nx, ny).  Agents that are not moving should
 *   not be included.
 *
 * @param {Map<string, object>} occupiedNow
 *   Snapshot of every occupied tile *before* this tick's movements are
 *   applied: "col,row" → agent object.  Typically built with
 *   {@link buildOccupiedMap}.  The player's tile should be included so
 *   that NPCs cannot move into it; pass a sentinel object for the player
 *   if needed.
 *
 * @returns {Set<object>}
 *   The subset of `proposal.agent` objects whose movement is valid.
 *   Agents not in this set should stay in their current position.
 */
function resolverColisionesAgentes(proposals, occupiedNow) {
  // Index proposals by destination for same-target detection
  const byDest = new Map();
  for (const p of proposals) {
    const key = `${p.nx},${p.ny}`;
    if (!byDest.has(key)) byDest.set(key, []);
    byDest.get(key).push(p);
  }

  const allowed = new Set();

  for (const p of proposals) {
    const destKey = `${p.nx},${p.ny}`;

    // Rule 1 – same-target conflict: nobody moves when two+ agents want the
    //          same cell in the same tick.
    if (byDest.get(destKey).length > 1) continue;

    // Rule 2 & 3 – destination is currently occupied by another agent
    const occupant = occupiedNow.get(destKey);
    if (occupant && occupant !== p.agent) {
      // Rule 2 – swap conflict: occupant also proposes to move into this
      //          agent's current cell → both are blocked.
      const srcKey = `${p.agent.x},${p.agent.y}`;
      const occupantProp = proposals.find(q => q.agent === occupant);
      if (occupantProp && `${occupantProp.nx},${occupantProp.ny}` === srcKey) {
        continue;
      }

      // Rule 3 – occupied-tile blocking: conservatively block the move
      //          whether or not the occupant itself is moving.
      continue;
    }

    allowed.add(p.agent);
  }

  return allowed;
}

module.exports = { buildOccupiedMap, resolverColisionesAgentes };
