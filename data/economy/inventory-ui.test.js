const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..', '..');
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const gameJs = fs.readFileSync(path.join(rootDir, 'game.js'), 'utf8');

test('inventory modal has separate Zurrón and Cartera sections', () => {
  assert.match(indexHtml, />Cartera</);
  assert.match(indexHtml, />Zurrón</);
});

test('wallet render includes detailed Mon, Shu and Ryo breakdown', () => {
  assert.match(gameJs, /Ryo: <b>\$\{desglose\.ryo\}<\/b>/);
  assert.match(gameJs, /Shu: <b>\$\{desglose\.shu\}<\/b>/);
  assert.match(gameJs, /Mon: <b>\$\{desglose\.mon\}<\/b>/);
});
