const test = require('node:test');
const assert = require('node:assert/strict');
const currency = require('./currency.js');

test('toMon and fromMon conversions use Mon base correctly', () => {
  assert.equal(currency.toMon({ ryo: 1, bu: 2, mon: 15 }), 6015);
  assert.deepEqual(currency.fromMon(6015), { ryo: 1, bu: 2, mon: 15 });
});

test('formatCurrency returns expected HUD format', () => {
  assert.equal(currency.formatCurrency(6015), '1 ryō | 2 bu | 15 mon');
});

test('conversion helpers guard undefined/null/negative values', () => {
  assert.equal(currency.toMon(), 0);
  assert.equal(currency.toMon({ ryo: null, bu: undefined, mon: -8 }), 0);
  assert.deepEqual(currency.fromMon(-10), { ryo: 0, bu: 0, mon: 0 });
});

test('wallet helpers support add/spend/affordability', () => {
  assert.equal(currency.addCurrency(10, 5), 15);
  assert.equal(currency.canAfford(15, 8), true);
  assert.equal(currency.canAfford(15, 20), false);
  assert.deepEqual(currency.spendCurrency(15, 8), { success: true, totalMon: 7 });
  assert.deepEqual(currency.spendCurrency(7, 9), { success: false, totalMon: 7 });
});
