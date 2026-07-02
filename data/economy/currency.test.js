const test = require('node:test');
const assert = require('node:assert/strict');
const currency = require('./currency.js');

test('toMon and fromMon conversions use Mon base correctly', () => {
  assert.equal(currency.MON_PER_SHU, 100);
  assert.equal(currency.MON_PER_RYO, 10000);
  assert.equal(currency.toMon({ ryo: 1, shu: 2, mon: 15 }), 10215);
  assert.deepEqual(currency.fromMon(10215), { ryo: 1, shu: 2, mon: 15 });
});

test('formatCurrency returns expected HUD format', () => {
  assert.equal(currency.formatCurrency(10215), '1 ryo | 2 shu | 15 mon');
});

test('conversion helpers guard undefined/null/negative values', () => {
  assert.equal(currency.toMon(), 0);
  assert.equal(currency.toMon({ ryo: null, shu: undefined, mon: -8 }), 0);
  assert.deepEqual(currency.fromMon(-10), { ryo: 0, shu: 0, mon: 0 });
});

test('wallet helpers support add/spend/affordability', () => {
  assert.equal(currency.addCurrency(10, 5), 15);
  assert.equal(currency.canAfford(15, 8), true);
  assert.equal(currency.canAfford(15, 20), false);
  assert.deepEqual(currency.spendCurrency(15, 8), { success: true, totalMon: 7 });
  assert.deepEqual(currency.spendCurrency(7, 9), { success: false, totalMon: 7 });
});

test('purchase helpers are strict by denomination', () => {
  const wallet = { mon: 5000, shu: 0, ryo: 5 };
  const silverPrice = { denomination: 'shu', amount: 1 };
  assert.equal(currency.canAffordDenomination(wallet, silverPrice), false);
  assert.deepEqual(
    currency.spendDenomination(wallet, silverPrice),
    { success: false, wallet: { mon: 5000, shu: 0, ryo: 5 } },
  );
});
