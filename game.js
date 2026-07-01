(function () {
  'use strict';

  /* ─── MAPA 22×18 ─── */
  const MAP = [
    ['🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🛖','🛖','🛖','🟫','🟫','🟫','🟫','🟫','🟩','🟩','🟩','🟫','🟫','🟫','🟫','🛖','🛖','🛖','🟩','🌲'],
    ['🌲','🟩','⬜️','🚪','⬜️','🟫','🌸','🟫','🌸','🟫','🟩','🟩','🟩','🟫','🌸','🟫','🌸','⬜️','🚪','⬜️','🟩','🌲'],
    ['🌲','🟩','🪧','🟩','🟩','🟫','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟫','🟫','🟫','🟫','🟫','🟩','🟩','🟩','🟩','🟩','🌸','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🛖','🛖','🛖','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','⬜️','🚪','⬜️','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','👦','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲'],
  ];

  const INTERIORES = [
    {
      mapa: [
        ['⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️'],
        ['⬜️','🟫','🟫','🟫','🟫','📚','📚','⬜️'],
        ['⬜️','🟫','🪑','📦','🪑','🟫','🟫','⬜️'],
        ['⬜️','🟫','🟫','🟫','🟫','👴','🟫','⬜️'],
        ['⬜️','🟫','🟫','🟫','🟫','🟫','🟫','⬜️'],
        ['⬜️','🟫','🟫','🚪','🟫','🟫','🟫','⬜️'],
        ['⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️'],
      ],
      entrada: { x: 3, y: 4 },
    },
    {
      mapa: [
        ['⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️'],
        ['⬜️','🟫','🟫','🟫','📚','📚','🟫','⬜️'],
        ['⬜️','🟫','🪑','🟫','🟫','🟫','🟫','⬜️'],
        ['⬜️','🟫','📦','🟫','🟫','🧓','🟫','⬜️'],
        ['⬜️','🟫','🪑','🟫','🟫','🟫','🟫','⬜️'],
        ['⬜️','🟫','🟫','🚪','🟫','🟫','🟫','⬜️'],
        ['⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️'],
      ],
      entrada: { x: 3, y: 4 },
    },
    {
      mapa: [
        ['⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️'],
        ['⬜️','📚','📚','🟫','🟫','🟫','🟫','⬜️'],
        ['⬜️','🟫','👩','🟫','🟫','🟫','🟫','⬜️'],
        ['⬜️','🟫','🟫','🟫','🪑','📦','🪑','⬜️'],
        ['⬜️','🟫','🟫','🟫','🟫','🟫','🟫','⬜️'],
        ['⬜️','🟫','🟫','🚪','🟫','🟫','🟫','⬜️'],
        ['⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️','⬜️'],
      ],
      entrada: { x: 3, y: 4 },
    },
  ];

  let mapaActivo = MAP;
  let ROWS = MAP.length;
  let COLS = MAP[0].length;
  let exteriorState = null;
  let transicionActiva = false;
  let fadeOverlay = null;

  function setMapa(mapa) {
    mapaActivo = mapa;
    ROWS = mapa.length;
    COLS = mapa[0].length;
  }

  const OBSTACLES = new Set(['🌲', '🏠', '🛖', '⬜️', '🏔️', '🪧', '👦', '👴', '🧓', '👩', '📚', '📦', '🚪']);

  const ENTRADAS = { "4,3": 0, "4,18": 1, "10,3": 2 };

  const MODAL_TEXTO = "Aldea de Owari — Provincia de Owari, año 1560. La guerra se acerca.";

  const TILE_IMAGES = {
    '🟩': 'img/hierba.jpg',
    '🟫': 'img/tierra.jpg',
    '🚪': 'img/puerta.jpg',
    '⬜️': 'img/pared_blanca.jpg',
    '🛖': 'img/techo.jpg',
    '🪧': 'img/cartel.png',
    '🌲': 'img/arbol.png',
    '👦': 'img/personajes/takeshi.png',
    '🌸': 'img/flores.png',
    '🪑': 'img/cojin.png',
    '📚': 'img/estanteria.png',
    '📦': 'img/mesa.png',
    '🧓': 'img/personajes/hana.png',
    '👴': 'img/personajes/genji.png',
  };

  const PATTERNS = [
    {
      tiles: [
        ['🛖','🛖','🛖'],
        ['⬜️','🚪','⬜️'],
      ],
      image: 'img/casa_aldea.png',
    },
  ];

  /* ─── ESTADO ─── */
  let playerName = '';
  let playerX = 11;
  let playerY = 9;
  let playerDir = { dx: 0, dy: -1 };
  let inventory = [];
  let tileSize = 0;
  let movimientoBloqueado = false;
  let jugadorCaminando = false;
  let habladoConTakeshi = false;
  let progresoTakeshi = 0;
  let habladoConGenji = false;
  let visitadoCasaMadre = false;

  const GENJI_DIALOGOS = [
    "El tiempo pasa incluso para las piedras, joven guerrero. He visto crecer este pueblo desde que era solo unas chozas. Cuida de él cuando yo ya no esté.",
    "Mis rodillas ya no son las que eran, pero mis ojos aún ven claro. La guerra se acerca desde el oeste. Escucha bien los consejos de los veteranos.",
    "Cada mañana riego mis flores y pienso en los que se fueron. La vida es un ciclo, como las estaciones. No temas al cambio, joven.",
  ];
  const GENJI_TRAS_TAKESHI = "Ese muchacho, mi nieto Takeshi, te ha contado historias de zorros, ¿verdad? Es joven y cree en leyendas. Yo, en cambio, solo creo en lo que se marchita. Pero si el bosque ha empezado a susurrar... entonces incluso los viejos como yo debemos empezar a escuchar.";
  const HANA_DIALOGOS = [
    "He visto muchas lunas, joven. La aldea ha cambiado, pero el monte Fuji sigue igual. Cuida de tu honor como cuidas de tu espada.",
    "Mi abuelo decía que el camino del samurái es solitario. Pero aquí, en Owari, nunca estamos solos. La familia es el verdadero tesoro.",
    "Cuando era joven, conocí a un guerrero que venía del norte. Me enseñó que la verdadera fuerza está en la compasión. No lo olvides.",
  ];
  const MADRE_TEXTO = "Hijo mío, ten cuidado ahí fuera. He preparado algo de comida para tu viaje. <b>Arroz con ciruelas</b> y un poco de té. Vuelve a casa cuando puedas.";

  /* ─── DOM REFS ─── */
  const $ = (id) => document.getElementById(id);
  const screenMenu    = $('screen-menu');
  const screenName    = $('screen-name');
  const screenGame    = $('screen-game');
  const btnContinue   = $('btn-continue');
  const btnNewGame    = $('btn-new-game');
  const btnStart      = $('btn-start');
  const nameInput     = $('name-input');
  const playerNameDsp = $('player-name-display');
  const mapContainer  = $('map-container');
  const mapGrid       = $('map-grid');
  const dialogueText  = $('dialogue-text');
  const modalEvento     = $('modal-evento');
  const modalEventoImg  = $('modal-evento-imagen');
  const modalEventoTexto = $('modal-evento-texto');
  const modalEventoTitulo = $('modal-evento-titulo');
  fadeOverlay = $('fade-overlay');
  const bannerUbicacion = $('banner-ubicacion');
  const bannerTitulo    = $('banner-titulo');
  const bannerSubtitulo = $('banner-subtitulo');

  /* ─── GESTIÓN DE PANTALLAS ─── */
  function showScreen(id) {
    [screenMenu, screenName, screenGame].forEach(s => s.classList.add('hidden'));
    $(id).classList.remove('hidden');
  }

  /* ─── COMPROBAR PARTIDA GUARDADA ─── */
  function checkSavedGame() {
    const saved = localStorage.getItem('sengoku_playerName');
    if (saved) {
      btnContinue.classList.remove('hidden');
    } else {
      btnContinue.classList.add('hidden');
    }
  }

  /* ─── MANEJADORES DEL MENÚ ─── */
  function onContinue() {
    const saved = localStorage.getItem('sengoku_playerName');
    if (saved) {
      playerName = saved;
      showScreen('screen-game');
      initGame();
    }
  }

  function onNewGame() {
    nameInput.value = '';
    showScreen('screen-name');
    setTimeout(() => nameInput.focus(), 150);
  }

  function onStartJourney() {
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.style.borderColor = '#c9302c';
      nameInput.placeholder = 'Escribe tu nombre, ronin...';
      setTimeout(() => {
        nameInput.style.borderColor = '#C59B27';
        nameInput.placeholder = '¿Cuál es tu nombre, ronin?';
      }, 1500);
      return;
    }
    playerName = name;
    localStorage.setItem('sengoku_playerName', name);
    showScreen('screen-game');
    initGame();
  }

  /* ─── MAPA ─── */
  function getTileSize() {
    return Math.floor(mapContainer.clientWidth / 9);
  }

  function applyViewport() {
    tileSize = getTileSize();
    mapContainer.style.height = (tileSize * 9) + 'px';
    mapGrid.style.setProperty('--tile-size', tileSize + 'px');
    mapGrid.style.gridTemplateColumns = `repeat(${COLS}, ${tileSize}px)`;
    mapGrid.style.gridTemplateRows = `repeat(${ROWS}, ${tileSize}px)`;
  }

  function isWalkable(col, row) {
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return false;
    return !OBSTACLES.has(mapaActivo[row][col]);
  }

  function buildGrid() {
    applyViewport();
    mapGrid.innerHTML = '';
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = document.createElement('div');
        cell.className = 'tile';
        mapGrid.appendChild(cell);
      }
    }
  }

  const OBJECT_TILES = new Set(['🏔️', '🏠']);

  function scanPatterns() {
    const found = [];
    const used = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (used[r][c]) continue;

        for (const pattern of PATTERNS) {
          const h = pattern.tiles.length;
          const w = pattern.tiles[0].length;
          if (r + h > ROWS || c + w > COLS) continue;

          let match = true;
          for (let pr = 0; pr < h && match; pr++)
            for (let pc = 0; pc < w && match; pc++)
              if (mapaActivo[r + pr][c + pc] !== pattern.tiles[pr][pc])
                match = false;

          if (match) {
            found.push({ row: r, col: c, pattern, h, w });
            for (let pr = 0; pr < h; pr++)
              for (let pc = 0; pc < w; pc++)
                used[r + pr][c + pc] = true;
            break;
          }
        }
      }
    }
    return found;
  }

  function render() {
    document.querySelectorAll('.pattern-overlay, .player-overlay').forEach(el => el.remove());

    const patterns = scanPatterns();
    const patternCells = new Set();
    patterns.forEach(p => {
      for (let pr = 0; pr < p.h; pr++)
        for (let pc = 0; pc < p.w; pc++)
          patternCells.add(`${p.row + pr},${p.col + pc}`);
    });

    const cells = mapGrid.children;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const idx = r * COLS + c;
        const cell = cells[idx];
        const tile = mapaActivo[r][c];
        cell.className = 'tile';
        cell.style.backgroundImage = '';

        if (patternCells.has(`${r},${c}`)) {
          cell.textContent = '';
        } else if (tile === '🟫' && mapaActivo !== MAP) {
          cell.textContent = '';
          cell.style.backgroundImage = 'url(img/suelo_casa_aldea.png)';
          cell.classList.add('tile-image');
        } else if (TILE_IMAGES[tile]) {
          cell.textContent = '';
          cell.style.backgroundImage = `url(${TILE_IMAGES[tile]})`;
          cell.classList.add('tile-image');
        } else {
          cell.textContent = tile;
          if (OBJECT_TILES.has(tile)) cell.classList.add('tile-object');
        }
      }
    }

    patterns.forEach(p => {
      const el = document.createElement('div');
      el.className = 'pattern-overlay';
      el.style.position = 'absolute';
      el.style.left = (p.col * tileSize) + 'px';
      el.style.top = (p.row * tileSize) + 'px';
      el.style.width = (p.w * tileSize) + 'px';
      el.style.height = (p.h * tileSize) + 'px';
      el.style.backgroundImage = `url(${p.pattern.image})`;
      el.style.backgroundSize = '100% 100%';
      el.style.backgroundRepeat = 'no-repeat';
      el.style.imageRendering = 'pixelated';
      el.style.zIndex = '1';
      el.style.pointerEvents = 'none';
      mapGrid.appendChild(el);
    });

    const px = document.createElement('div');
    px.className = 'player-overlay';
    px.style.position = 'absolute';
    px.style.left = (playerX * tileSize) + 'px';
    px.style.top = (playerY * tileSize) + 'px';
    px.style.width = tileSize + 'px';
    px.style.height = tileSize + 'px';
    px.style.backgroundImage = 'url(img/personajes/personaje_principal.png)';
    px.style.backgroundSize = 'cover';
    px.style.backgroundPosition = 'center';
    px.style.backgroundRepeat = 'no-repeat';
    px.style.imageRendering = 'pixelated';
    px.style.zIndex = '15';
    px.style.pointerEvents = 'none';
    px.style.filter = 'drop-shadow(0 0 6px rgba(197,155,39,0.8))';
    px.style.animation = jugadorCaminando
      ? 'player-walk 0.2s ease-out'
      : 'pulse-player 1.2s ease-in-out infinite';
    mapGrid.appendChild(px);
  }

  function updateCamera() {
    const ts = tileSize || getTileSize();
    const mapW = COLS * ts;
    const mapH = ROWS * ts;
    const viewW = mapContainer.clientWidth;
    const viewH = mapContainer.clientHeight;

    let ox = viewW / 2 - (playerX * ts + ts / 2);
    let oy = viewH / 2 - (playerY * ts + ts / 2);

    if (mapW < viewW) {
      const centro = (viewW - mapW) / 2;
      ox = Math.max(-mapW + centro, Math.min(centro, ox));
    } else {
      ox = Math.max(Math.min(0, viewW - mapW), Math.min(0, ox));
    }
    if (mapH < viewH) {
      const centro = (viewH - mapH) / 2;
      oy = Math.max(-mapH + centro, Math.min(centro, oy));
    } else {
      oy = Math.max(Math.min(0, viewH - mapH), Math.min(0, oy));
    }

    mapGrid.style.transform = `translate(${ox}px, ${oy}px)`;
  }

  function movePlayer(dx, dy) {
    if (movimientoBloqueado) return;
    playerDir = { dx, dy };
    const nx = playerX + dx;
    const ny = playerY + dy;

    if (mapaActivo === MAP && dy === -1) {
      const key = playerY + ',' + playerX;
      if (ENTRADAS[key] !== undefined) {
        entrarCasa();
        return;
      }
    }

    if (mapaActivo !== MAP && mapaActivo[ny] && mapaActivo[ny][nx] === '🚪') {
      salirCasa();
      return;
    }

    if (!isWalkable(nx, ny)) return;

    playerX = nx;
    playerY = ny;

    pasoEnCasilla(playerX, playerY);
    jugadorCaminando = true;
    render();
    updateCamera();
    setTimeout(() => { jugadorCaminando = false; }, 200);
  }

  function hacerTransicion(callback) {
    if (transicionActiva) return;
    transicionActiva = true;
    movimientoBloqueado = true;

    fadeOverlay.style.transition = 'opacity 0.35s ease';
    fadeOverlay.style.opacity = '1';

    setTimeout(() => {
      callback();

      setTimeout(() => {
        fadeOverlay.style.opacity = '0';
        setTimeout(() => {
          fadeOverlay.style.transition = '';
          transicionActiva = false;
          movimientoBloqueado = false;
        }, 350);
      }, 50);
    }, 350);
  }

  let bannerTimer = null;

  function mostrarUbicacion(titulo, subtitulo) {
    if (bannerTimer) clearTimeout(bannerTimer);
    bannerTitulo.textContent = titulo;
    bannerSubtitulo.textContent = subtitulo || '';
    bannerUbicacion.classList.remove('banner-oculto');
    bannerTimer = setTimeout(() => {
      bannerUbicacion.classList.add('banner-oculto');
    }, 3000);
  }

  const UBICACIONES = {
    0: { titulo: 'Cabaña del Maestro', sub: 'Biblioteca de los Recuerdos' },
    1: { titulo: 'Casa de Té de Hana', sub: 'El aroma del hogar' },
    2: { titulo: 'Refugio del Ronin', sub: 'Tu hogar' },
  };

  function entrarCasa() {
    const key = playerY + ',' + playerX;
    const idx = ENTRADAS[key];
    if (idx === undefined) return;
    if (idx === 2) visitadoCasaMadre = true;
    hacerTransicion(() => {
      exteriorState = { px: playerX, py: playerY, dir: playerDir };
      const casa = INTERIORES[idx];
      setMapa(casa.mapa);
      mapContainer.style.backgroundColor = '#1a1410';
      playerX = casa.entrada.x;
      playerY = casa.entrada.y;
      playerDir = { dx: 0, dy: -1 };
      buildGrid();
      render();
      updateCamera();
      const u = UBICACIONES[idx];
      if (u) mostrarUbicacion(u.titulo, u.sub);
    });
  }

  function salirCasa() {
    if (!exteriorState) return;
    hacerTransicion(() => {
      setMapa(MAP);
      mapContainer.style.backgroundColor = '';
      playerX = exteriorState.px;
      playerY = exteriorState.py;
      playerDir = exteriorState.dir;
      exteriorState = null;
      buildGrid();
      render();
      updateCamera();
      mostrarUbicacion('Aldea de Owari', 'Provincia de Owari - 1560');
    });
  }

  /* ─── SONIDOS CON WEB AUDIO API ─── */

  let audioCtx = null;
  let masterGain = null;

  function crearAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = 0.5;
      masterGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return { ctx: audioCtx, master: masterGain };
  }

  function generarSonidoHierba() {
    const { ctx, master } = crearAudioContext();
    const duracion = 0.14;
    const bufferSize = Math.floor(ctx.sampleRate * duracion);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const t = i / bufferSize;
      const ataque = Math.min(1, i / (ctx.sampleRate * 0.012));
      const caida = 1 - Math.pow(t, 1.8);
      data[i] = (Math.random() * 2 - 1) * ataque * caida;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const filtro = ctx.createBiquadFilter();
    filtro.type = 'lowpass';
    filtro.frequency.value = 1500 * (0.85 + Math.random() * 0.3);
    filtro.Q.value = 0.2;

    const ganancia = ctx.createGain();
    ganancia.gain.value = 0.10 * (0.9 + Math.random() * 0.2);

    source.connect(filtro);
    filtro.connect(ganancia);
    ganancia.connect(master);
    source.start();
  }

  function generarSonidoTierra() {
    const { ctx, master } = crearAudioContext();
    const duracion = 0.10;
    const bufferSize = Math.floor(ctx.sampleRate * duracion);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const t = i / bufferSize;
      const ataque = Math.min(1, i / (ctx.sampleRate * 0.01));
      const caida = Math.pow(1 - t, 2.2);
      data[i] = (Math.random() * 2 - 1) * ataque * caida;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const filtro = ctx.createBiquadFilter();
    filtro.type = 'lowpass';
    filtro.frequency.value = 500 * (0.85 + Math.random() * 0.3);
    filtro.Q.value = 0.2;

    const ganancia = ctx.createGain();
    ganancia.gain.value = 0.12 * (0.9 + Math.random() * 0.2);

    source.connect(filtro);
    filtro.connect(ganancia);
    ganancia.connect(master);
    source.start();
  }

  function reproducirSonidoDialogo() {
    const { ctx, master } = crearAudioContext();
    const osc = ctx.createOscillator();
    const ganancia = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.value = 500 + Math.random() * 200;

    const now = ctx.currentTime;
    ganancia.gain.setValueAtTime(0, now);
    ganancia.gain.linearRampToValueAtTime(0.04, now + 0.005);
    ganancia.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc.connect(ganancia);
    ganancia.connect(master);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  function pasoEnCasilla(x, y) {
    const tile = mapaActivo[y][x];
    if (tile === '🟫') generarSonidoTierra();
    else generarSonidoHierba();
  }

  const CARTEL_TEXTO = "Aldea de Owari — Provincia de Owari, año 1560. La guerra se acerca.";
  function getDialogoTakeshi() {
    const d0 = '¡Hola! Soy <b>Takeshi</b>. Mi abuelo dice que más allá del cartel hay un bosque encantado. ¿Has visto alguna vez un <b>zorro de fuego</b>?';
    const d1 = '¿Ya has hablado con el abuelo <b>Genji</b>? Me ha dicho que tienes "mucho peso en los hombros". ¡Yo no sé qué significa eso, pero dice que si me porto bien y te ayudo, quizás me enseñes a desenvainar la katana sin cortarme los dedos! ¿Es verdad que las katanas brillan cuando hay peligro?';
    const d2 = '¡He visto que has estado en tu casa! Mi abuelo dice que tu madre es una mujer muy fuerte. Me alegra que no estés siempre solo por ahí fuera, con los rumores de guerra que trae el viento. A veces, tener un hogar al que volver es la mejor armadura, ¿a que sí, Kenji?';

    if (progresoTakeshi === 0) {
      return habladoConGenji ? d1 : d0;
    }
    if (progresoTakeshi === 1) {
      return visitadoCasaMadre ? d2 : d1;
    }
    return d2;
  }

  let eventoTimer = null;
  let eventoConSonido = false;

  function escribirEvento(html, velocidad, conSonido) {
    velocidad = velocidad || 20;
    modalEventoTexto.innerHTML = '';
    document.querySelectorAll('#modal-evento-texto + .modal-evento-cursor').forEach(el => el.remove());
    const chars = Array.from(html);
    let idx = 0;
    let buffer = '';

    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'modal-evento-cursor';
    cursorSpan.textContent = '▌';
    modalEventoTexto.after(cursorSpan);

    function tipear() {
      if (idx >= chars.length) {
        if (cursorSpan.parentNode) cursorSpan.remove();
        eventoTimer = null;
        return;
      }

      let chunk = '';
      if (chars[idx] === '<') {
        while (idx < chars.length && chars[idx] !== '>') { chunk += chars[idx]; idx++; }
        if (idx < chars.length) { chunk += chars[idx]; idx++; }
      } else if (chars[idx] === '&') {
        while (idx < chars.length && chars[idx] !== ';') { chunk += chars[idx]; idx++; }
        if (idx < chars.length) { chunk += chars[idx]; idx++; }
      } else {
        chunk = chars[idx]; idx++;
      }

      buffer += chunk;
      modalEventoTexto.innerHTML = buffer;
      modalEventoTexto.closest('.modal-evento-body').scrollTop =
        modalEventoTexto.closest('.modal-evento-body').scrollHeight;
      if (conSonido && chunk.length === 1 && chunk !== '<' && chunk !== '&') {
        reproducirSonidoDialogo();
      }
      eventoTimer = setTimeout(tipear, velocidad);
    }

    tipear();
  }

  function abrirEvento(titulo, texto, imagen, esPersonaje) {
    movimientoBloqueado = true;
    modalEventoTitulo.textContent = titulo;
    modalEventoTexto.innerHTML = '';

    if (imagen) {
      modalEventoImg.src = imagen;
      modalEventoImg.classList.remove('modal-imagen-hidden');
    } else {
      modalEventoImg.classList.add('modal-imagen-hidden');
    }

    escribirEvento(texto, 20, esPersonaje);
    modalEvento.classList.remove('modal-hidden');
  }

  function cerrarEvento() {
    if (eventoTimer) { clearTimeout(eventoTimer); eventoTimer = null; }
    if (modalEventoTitulo.textContent === 'Takeshi') {
      if (progresoTakeshi === 0 && habladoConGenji) progresoTakeshi = 1;
      else if (progresoTakeshi === 1 && visitadoCasaMadre) progresoTakeshi = 2;
    }
    movimientoBloqueado = false;
    modalEventoImg.classList.add('modal-imagen-hidden');
    modalEvento.classList.add('modal-hidden');
  }

  function interact() {
    if (movimientoBloqueado) { cerrarEvento(); return; }
    const tx = playerX + playerDir.dx;
    const ty = playerY + playerDir.dy;
    if (ty < 0 || ty >= ROWS || tx < 0 || tx >= COLS) {
      setDialogue('No hay nada en esa dirección.');
      return;
    }
    const tile = mapaActivo[ty][tx];
    if (tile === '🪧') {
      abrirEvento('Letrero', CARTEL_TEXTO, null, false);
    } else if (tile === '👦') {
      habladoConTakeshi = true;
      abrirEvento('Takeshi', getDialogoTakeshi(), 'img/personajes/takeshi.png', true);
    } else if (tile === '👴') {
      habladoConGenji = true;
      const dialogo = habladoConTakeshi ? GENJI_TRAS_TAKESHI : GENJI_DIALOGOS[Math.floor(Math.random() * GENJI_DIALOGOS.length)];
      habladoConTakeshi = false;
      abrirEvento('Genji, el anciano', dialogo, 'img/personajes/genji.png', true);
    } else if (tile === '🧓') {
      abrirEvento('Hana, la sabia', HANA_DIALOGOS[Math.floor(Math.random() * HANA_DIALOGOS.length)], 'img/personajes/hana.png', true);
    } else if (tile === '👩') {
      abrirEvento('Tu madre', MADRE_TEXTO, null, true);
    } else if (tile === '👩') {
      visitadoCasaMadre = true;
      abrirEvento('Tu madre', MADRE_TEXTO, null, true);
    } else {
      setDialogue('No hay nada con lo que interactuar aquí.');
    }
  }

  function showInventory() {
    if (inventory.length === 0) {
      setDialogue('Tu <span class="highlight">bolsa</span> está vacía. Explora y encuentra objetos útiles.');
    } else {
      setDialogue('Inventario: <span class="highlight">' + inventory.join(', ') + '</span>');
    }
  }

  function setDialogue(msg) {
    dialogueText.innerHTML = msg;
  }

  function handleDir(dir) {
    switch (dir) {
      case 'up':    movePlayer(0, -1); break;
      case 'down':  movePlayer(0,  1); break;
      case 'left':  movePlayer(-1, 0); break;
      case 'right': movePlayer( 1, 0); break;
    }
  }

  /* ─── INICIALIZAR EL JUEGO ─── */
  function initGame() {
    playerX = 11;
    playerY = 9;
    playerDir = { dx: 0, dy: -1 };
    inventory = [];
    playerNameDsp.textContent = playerName;
    if (mapaActivo !== MAP) setMapa(MAP);
    mapContainer.style.backgroundColor = '';

      buildGrid();
      render();
      updateCamera();
      const u = UBICACIONES[idx];
      if (u) mostrarUbicacion(u.titulo, u.sub);

    setDialogue('Bienvenido a la <span class="highlight">Aldea de Owari</span>, ' + playerName + '. El destino te espera.');
  }

  /* ─── EVENTOS ─── */
  function bindButtons() {
    btnContinue.addEventListener('click', onContinue);
    btnNewGame.addEventListener('click', onNewGame);
    btnStart.addEventListener('click', onStartJourney);

    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') onStartJourney();
    });

    const dirs = ['up', 'down', 'left', 'right'];
    dirs.forEach(d => {
      const btn = document.querySelector(`[data-dir="${d}"]`);
      if (!btn) return;
      const h = (e) => { e.preventDefault(); handleDir(d); };
      btn.addEventListener('touchstart', h, { passive: false });
      btn.addEventListener('mousedown', h);
    });

    const aBtn = $('btn-action');
    const aH = (e) => { e.preventDefault(); interact(); };
    aBtn.addEventListener('touchstart', aH, { passive: false });
    aBtn.addEventListener('mousedown', aH);

    const bagBtn = $('btn-bag');
    const bagH = (e) => { e.preventDefault(); showInventory(); };
    bagBtn.addEventListener('touchstart', bagH, { passive: false });
    bagBtn.addEventListener('mousedown', bagH);

    document.addEventListener('keydown', (e) => {
      if (screenGame.classList.contains('hidden')) return;
      if (document.activeElement.tagName === 'INPUT') return;
      if (movimientoBloqueado) {
        if (e.key === ' ' || e.key === 'e' || e.key === 'E' || e.key === 'Enter') {
          e.preventDefault(); cerrarEvento();
        }
        return;
      }
      const km = {
        'ArrowUp': 'up', 'w': 'up', 'W': 'up',
        'ArrowDown': 'down', 's': 'down', 'S': 'down',
        'ArrowLeft': 'left', 'a': 'left', 'A': 'left',
        'ArrowRight': 'right', 'd': 'right', 'D': 'right',
      };
      const dir = km[e.key];
      if (dir) { e.preventDefault(); handleDir(dir); return; }
      if (e.key === ' ' || e.key === 'e' || e.key === 'E') { e.preventDefault(); interact(); }
      if (e.key === 'i' || e.key === 'I') { e.preventDefault(); showInventory(); }
    });

    modalEvento.addEventListener('click', cerrarEvento);
  }

  function bindResize() {
    const handler = () => {
      if (screenGame.classList.contains('hidden')) return;
      applyViewport();
      updateCamera();
    };
    window.addEventListener('resize', handler);
    window.addEventListener('orientationchange', () => setTimeout(handler, 200));
  }

  /* ─── ARRANQUE ─── */
  function init() {
    checkSavedGame();
    bindButtons();
    bindResize();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
