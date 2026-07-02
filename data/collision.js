(function (globalScope) {
  'use strict';

  /**
   * Resuelve colisiones de movimiento en cuadrícula para un tick simultáneo.
   *
   * Reglas aplicadas:
   *  1. Dos o más agentes que apuntan a la misma casilla destino → ninguno se mueve.
   *  2. Intercambio directo (A→casilla de B y B→casilla de A en el mismo tick) → ambos bloqueados.
   *  3. Casilla destino actualmente ocupada por otro agente → bloqueado (resolución simultánea).
   *
   * @param {Array<{id:*, x:number, y:number, nextX:number, nextY:number}>} propuestas
   *   Lista de propuestas de movimiento.  Cada entrada describe la posición actual (x, y)
   *   y el destino propuesto (nextX, nextY) de un agente.  Para registrar una posición como
   *   fija (p. ej. el jugador) se incluye con nextX === x y nextY === y.
   * @returns {Set} Conjunto de ids cuyo movimiento queda permitido en este tick.
   */
  function resolverColisiones(propuestas) {
    // Índice de posiciones actuales: "col,fila" -> id del agente que la ocupa ahora
    const ocupadoAhora = new Map();
    for (const p of propuestas) {
      ocupadoAhora.set(`${p.x},${p.y}`, p.id);
    }

    // Agrupar destinos: "col,fila" -> [ids que quieren llegar ahí]
    const porDestino = new Map();
    for (const p of propuestas) {
      if (p.nextX === p.x && p.nextY === p.y) continue; // agente estático, no propone destino
      const clave = `${p.nextX},${p.nextY}`;
      if (!porDestino.has(clave)) porDestino.set(clave, []);
      porDestino.get(clave).push(p.id);
    }

    const permitidos = new Set();

    for (const p of propuestas) {
      if (p.nextX === p.x && p.nextY === p.y) continue; // sin movimiento

      const claveDestino = `${p.nextX},${p.nextY}`;
      const candidatos = porDestino.get(claveDestino) || [];

      // Regla 1: más de un agente apunta al mismo destino
      if (candidatos.length > 1) continue;

      // Reglas 2 y 3: casilla destino actualmente ocupada por otro agente
      // (cubre tanto la ocupación estática como el intercambio directo)
      const ocupanteId = ocupadoAhora.get(claveDestino);
      if (ocupanteId != null && ocupanteId !== p.id) continue;

      permitidos.add(p.id);
    }

    return permitidos;
  }

  const api = { resolverColisiones };
  globalScope.SengokuCollision = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
}(typeof globalThis !== 'undefined' ? globalThis : window));
