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
  assert.match(gameJs, /renderCurrencyAmount\('ryo', desglose\.ryo/);
  assert.match(gameJs, /renderCurrencyAmount\('shu', desglose\.shu/);
  assert.match(gameJs, /renderCurrencyAmount\('mon', desglose\.mon/);
  assert.match(gameJs, /<span>\$\{currency\.label\}: <b>\$\{amount\}<\/b><\/span>/);
});

test('wallet render uses lowercase coin image assets', () => {
  assert.ok(fs.existsSync(path.join(rootDir, 'img', 'mon.png')));
  assert.ok(fs.existsSync(path.join(rootDir, 'img', 'shu.png')));
  assert.ok(fs.existsSync(path.join(rootDir, 'img', 'ryo.png')));
  assert.match(gameJs, /img\/mon\.png/);
  assert.match(gameJs, /img\/shu\.png/);
  assert.match(gameJs, /img\/ryo\.png/);
});
