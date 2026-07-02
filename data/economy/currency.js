(function (globalScope) {
  'use strict';

  const MON_PER_RYO = 4000;
  const MON_PER_BU = 1000;

  function normalizeMon(value) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return 0;
    return Math.max(0, Math.floor(parsed));
  }

  function toMon(parts) {
    const safeParts = parts || {};
    const ryo = normalizeMon(safeParts.ryo);
    const bu = normalizeMon(safeParts.bu);
    const mon = normalizeMon(safeParts.mon);
    return (ryo * MON_PER_RYO) + (bu * MON_PER_BU) + mon;
  }

  function fromMon(totalMon) {
    const safeTotal = normalizeMon(totalMon);
    const ryo = Math.floor(safeTotal / MON_PER_RYO);
    const remAfterRyo = safeTotal % MON_PER_RYO;
    const bu = Math.floor(remAfterRyo / MON_PER_BU);
    const mon = remAfterRyo % MON_PER_BU;
    return { ryo, bu, mon };
  }

  function formatCurrency(totalMon) {
    const parts = fromMon(totalMon);
    return `${parts.ryo} ryō | ${parts.bu} bu | ${parts.mon} mon`;
  }

  function addCurrency(totalMon, amountMon) {
    return normalizeMon(totalMon) + normalizeMon(amountMon);
  }

  function canAfford(totalMon, costMon) {
    return normalizeMon(totalMon) >= normalizeMon(costMon);
  }

  function spendCurrency(totalMon, costMon) {
    const safeTotal = normalizeMon(totalMon);
    const safeCost = normalizeMon(costMon);
    if (safeCost === 0) return { success: true, totalMon: safeTotal };
    if (safeTotal < safeCost) return { success: false, totalMon: safeTotal };
    return { success: true, totalMon: safeTotal - safeCost };
  }

  const api = {
    MON_PER_RYO,
    MON_PER_BU,
    toMon,
    fromMon,
    formatCurrency,
    addCurrency,
    canAfford,
    spendCurrency,
    clampMon: normalizeMon,
  };

  globalScope.SengokuCurrency = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
}(typeof globalThis !== 'undefined' ? globalThis : window));
