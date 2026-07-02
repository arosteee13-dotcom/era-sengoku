(function (globalScope) {
  'use strict';

  const MON_PER_SHU = 100;
  const MON_PER_RYO = 10000;

  function normalizeMon(value) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return 0;
    return Math.max(0, Math.floor(parsed));
  }

  function toMon(parts) {
    const safeParts = parts || {};
    const ryo = normalizeMon(safeParts.ryo);
    const shu = normalizeMon(safeParts.shu);
    const mon = normalizeMon(safeParts.mon);
    return (ryo * MON_PER_RYO) + (shu * MON_PER_SHU) + mon;
  }

  function fromMon(totalMon) {
    const safeTotal = normalizeMon(totalMon);
    const ryo = Math.floor(safeTotal / MON_PER_RYO);
    const remAfterRyo = safeTotal % MON_PER_RYO;
    const shu = Math.floor(remAfterRyo / MON_PER_SHU);
    const mon = remAfterRyo % MON_PER_SHU;
    return { ryo, shu, mon };
  }

  function formatCurrency(totalMon) {
    const parts = fromMon(totalMon);
    return `${parts.ryo} ryo | ${parts.shu} shu | ${parts.mon} mon`;
  }

  function normalizeWallet(wallet) {
    const safeWallet = wallet || {};
    return {
      mon: normalizeMon(safeWallet.mon),
      shu: normalizeMon(safeWallet.shu),
      ryo: normalizeMon(safeWallet.ryo),
    };
  }

  function addToWallet(wallet, amount = 0, denomination = 'mon') {
    const safeWallet = normalizeWallet(wallet);
    const safeAmount = normalizeMon(amount);
    if (!safeWallet.hasOwnProperty(denomination)) return safeWallet;
    return { ...safeWallet, [denomination]: safeWallet[denomination] + safeAmount };
  }

  function normalizePrice(price) {
    const safePrice = price || {};
    const denomination = safePrice.denomination || 'mon';
    const amount = normalizeMon(safePrice.amount);
    if (!['mon', 'shu', 'ryo'].includes(denomination)) {
      return { denomination: 'mon', amount };
    }
    return { denomination, amount };
  }

  function canAffordDenomination(wallet, price) {
    const safeWallet = normalizeWallet(wallet);
    const safePrice = normalizePrice(price);
    return safeWallet[safePrice.denomination] >= safePrice.amount;
  }

  function spendDenomination(wallet, price) {
    const safeWallet = normalizeWallet(wallet);
    const safePrice = normalizePrice(price);
    if (safePrice.amount === 0) return { success: true, wallet: safeWallet };
    if (!canAffordDenomination(safeWallet, safePrice)) {
      return { success: false, wallet: safeWallet };
    }
    return {
      success: true,
      wallet: {
        ...safeWallet,
        [safePrice.denomination]: safeWallet[safePrice.denomination] - safePrice.amount,
      },
    };
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
    MON_PER_SHU,
    MON_PER_RYO,
    MON_PER_BU: MON_PER_SHU,
    toMon,
    fromMon,
    formatCurrency,
    normalizeWallet,
    addToWallet,
    canAffordDenomination,
    spendDenomination,
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
