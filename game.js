(function () {
  'use strict';

  /* ─── MAPA 22×18 ─── */
  const MAP = [
    ['🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🛖','🛖','🛖','🟫','🟫','🟫','🟫','🟫','🟩','🟩','🟩','🟫','🟫','🟫','🟫','🏠','🏠','🟩','🟩','🌲'],
    ['🌲','🟩','⬜️','🚪','⬜️','🟫','🌸','🟫','🌸','🟫','🟩','🟩','🟩','🟫','🌸','🟫','🌸','🏠','🏠','🟩','🟩','🌲'],
    ['🌲','🟩','🪧','🟩','🟩','🟫','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟫','🟫','🟫','🟫','🟫','🟩','🟩','🟩','🟩','🟩','🌸','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','👦','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲'],
  ];

  const ROWS = MAP.length;
  const COLS = MAP[0].length;

  const OBSTACLES = new Set(['🌲', '🏠', '⬜️', '🏔️', '🪧', '👦']);

  const CARTEL_COORDS = { row: 10, col: 2 };
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
    return !OBSTACLES.has(MAP[row][col]);
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
              if (MAP[r + pr][c + pc] !== pattern.tiles[pr][pc])
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
        const tile = MAP[r][c];
        cell.className = 'tile';
        cell.style.backgroundImage = '';

        if (patternCells.has(`${r},${c}`)) {
          cell.textContent = '';
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
    px.style.display = 'flex';
    px.style.alignItems = 'center';
    px.style.justifyContent = 'center';
    px.style.fontSize = (tileSize * 0.78) + 'px';
    px.style.lineHeight = '1';
    px.style.zIndex = '10';
    px.style.pointerEvents = 'none';
    px.style.filter = 'drop-shadow(0 0 6px rgba(197,155,39,0.8))';
    px.style.animation = jugadorCaminando
      ? 'player-walk 0.2s ease-out'
      : 'pulse-player 1.2s ease-in-out infinite';
    px.textContent = '🥷';
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

    const minOx = Math.min(0, viewW - mapW);
    const minOy = Math.min(0, viewH - mapH);
    ox = Math.max(minOx, Math.min(0, ox));
    oy = Math.max(minOy, Math.min(0, oy));

    mapGrid.style.transform = `translate(${ox}px, ${oy}px)`;
  }

  function movePlayer(dx, dy) {
    if (movimientoBloqueado) return;
    playerDir = { dx, dy };
    const nx = playerX + dx;
    const ny = playerY + dy;
    if (isWalkable(nx, ny)) {
      playerX = nx;
      playerY = ny;
      pasoEnCasilla(playerX, playerY);
      jugadorCaminando = true;
      render();
      updateCamera();
      setTimeout(() => { jugadorCaminando = false; }, 200);
    }
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
    const tile = MAP[y][x];
    if (tile === '🟫') generarSonidoTierra();
    else generarSonidoHierba();
  }

  const CARTEL_TEXTO = "Aldea de Owari — Provincia de Owari, año 1560. La guerra se acerca.";
  const TAKESHI_TEXTO = "¡Hola! Soy <b>Takeshi</b>. Mi padre dice que más allá del cartel hay un bosque encantado. ¿Has visto alguna vez un <b>zorro de fuego</b>?";

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
    const tile = MAP[ty][tx];
    if (tile === '🪧') {
      abrirEvento('Letrero', CARTEL_TEXTO, null, false);
    } else if (tile === '👦') {
      abrirEvento('Takeshi', TAKESHI_TEXTO, 'img/personajes/takeshi.png', true);
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

    buildGrid();
    render();
    updateCamera();

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
