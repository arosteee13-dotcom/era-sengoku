const test = require('node:test');
const assert = require('node:assert/strict');
const { resolverColisiones } = require('./collision.js');

test('movimiento normal sin conflicto queda permitido', () => {
  const propuestas = [
    { id: 'a', x: 0, y: 0, nextX: 1, nextY: 0 },
  ];
  const permitidos = resolverColisiones(propuestas);
  assert.equal(permitidos.has('a'), true);
});

test('agente sin movimiento no figura en permitidos', () => {
  const propuestas = [
    { id: 'a', x: 1, y: 0, nextX: 1, nextY: 0 },
  ];
  const permitidos = resolverColisiones(propuestas);
  assert.equal(permitidos.has('a'), false);
});

test('dos agentes al mismo destino: ninguno se mueve', () => {
  const propuestas = [
    { id: 'a', x: 0, y: 0, nextX: 1, nextY: 0 },
    { id: 'b', x: 2, y: 0, nextX: 1, nextY: 0 },
  ];
  const permitidos = resolverColisiones(propuestas);
  assert.equal(permitidos.has('a'), false);
  assert.equal(permitidos.has('b'), false);
});

test('intercambio directo (swap) bloqueado', () => {
  const propuestas = [
    { id: 'a', x: 0, y: 0, nextX: 1, nextY: 0 },
    { id: 'b', x: 1, y: 0, nextX: 0, nextY: 0 },
  ];
  const permitidos = resolverColisiones(propuestas);
  assert.equal(permitidos.has('a'), false);
  assert.equal(permitidos.has('b'), false);
});

test('casilla ocupada con resolución simultánea: atacante bloqueado aunque ocupante se mueva', () => {
  // a quiere moverse a (1,0) donde está b; b quiere moverse a (2,0)
  // Resolución simultánea: a bloqueado porque (1,0) sigue ocupada en este tick
  const propuestas = [
    { id: 'a', x: 0, y: 0, nextX: 1, nextY: 0 },
    { id: 'b', x: 1, y: 0, nextX: 2, nextY: 0 },
  ];
  const permitidos = resolverColisiones(propuestas);
  assert.equal(permitidos.has('a'), false, 'a bloqueado: (1,0) está ocupada en este tick');
  assert.equal(permitidos.has('b'), true, 'b puede avanzar a casilla libre');
});

test('posición fija (jugador) cuenta como casilla ocupada', () => {
  // jugador estático en (2,0); a quiere moverse hacia esa casilla
  const propuestas = [
    { id: 'a', x: 1, y: 0, nextX: 2, nextY: 0 },
    { id: '__player__', x: 2, y: 0, nextX: 2, nextY: 0 }, // estático
  ];
  const permitidos = resolverColisiones(propuestas);
  assert.equal(permitidos.has('a'), false);
  assert.equal(permitidos.has('__player__'), false);
});

test('varios agentes independientes se mueven sin interferencia', () => {
  const propuestas = [
    { id: 'a', x: 0, y: 0, nextX: 1, nextY: 0 },
    { id: 'b', x: 5, y: 0, nextX: 6, nextY: 0 },
    { id: 'c', x: 0, y: 5, nextX: 0, nextY: 6 },
  ];
  const permitidos = resolverColisiones(propuestas);
  assert.equal(permitidos.has('a'), true);
  assert.equal(permitidos.has('b'), true);
  assert.equal(permitidos.has('c'), true);
});
