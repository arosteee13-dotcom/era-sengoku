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
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟫','🟫','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','⛲️','⛲️','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🛖','🛖','🛖','🟫','🟩','🟩','🟩','🟩','🟩','⛲️','⛲️','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','⬜️','🚪','⬜️','🟫','🟩','🟩','🟩','🟩','🟩','🟫','🟫','🟩','🟩','🟫','🟫','🟫','🟫','🟫','🟫','🟫'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟩','🟩','🟩','🟩','🟩','🟫','🟫','🟩','🟩','🟫','🟩','🟩','🟩','🟩','💰','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🧑‍🌾','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','👦','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🪓','🟩','🌲'],
    ['🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲'],
  ];

  const MAPA_BOSQUE = [
    ['🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🌲','🌲','🟩','🟩','🟩','🟩','🟩','🌲','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟫','🟫','🟫','🟫','🟩','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🌲','🌲','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🌲','🌲','🌲','🟩','🟩','🌲','🟩','🟩','🌲','🟩','🌲','🌲','🟩','🌲'],
    ['🌲','🟩','🟩','🌸','🟩','🟩','🟩','🟩','🌲','🟩','🌲','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🌲','🟩','🟩','🌲'],
    ['🌲','🟩','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟫','🟫','🟫','🟫','🟫','🟫','🟫','🟩','🟩','🌲'],
    ['🌲','🟩','🌲','🟩','🌸','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🌲','🌲','🟩','🟩','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🟩','🌸','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🟩','🟩','🌲'],
    ['🌲','🌲','🌲','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🌲','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲','🟩','🟩','🟫','🌲'],
    ['🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌸','🟩','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🌲','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
    ['🌲','🟩','🟩','🟩','🌸','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🟩','🌲'],
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

  const OBSTACLES = new Set(['🌲', '🏠', '🛖', '⬜️', '🏔️', '🪧', '👦', '👴', '🧓', '👩', '📚', '📦', '🚪', '⛲️', '🪓', '💰', '🧑‍🌾']);

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
    '👩': 'img/personajes/madre.png',
    '🪓': 'img/personajes/lenador.png',
    '💰': 'img/personajes/mercader.png',
    '🧑‍🌾': 'img/personajes/campesino.png',
  };

  const PATTERNS = [
    {
      tiles: [
        ['🛖','🛖','🛖'],
        ['⬜️','🚪','⬜️'],
      ],
      image: 'img/casa_aldea.png',
    },
    {
      tiles: [
        ['⛲️','⛲️'],
        ['⛲️','⛲️'],
      ],
      image: 'img/estanque.png',
    },
  ];

  /* ─── ESTADO ─── */
  let playerName = '';
  let playerX = 11;
  let playerY = 9;
  let playerDir = { dx: 0, dy: -1 };
  let ultimaDirX = 1;
  let inventory = [];
  let tileSize = 0;
  let movimientoBloqueado = false;
  let jugadorCaminando = false;
  let habladoConTakeshi = false;
  let visitadoCasaGenji = false;
  let visitadoCasaMadre = false;
  let madreDioItems = false;
  let textoEscribiendo = null;
  let callbackTextoCompleto = null;
  let misionAldeanosCompletada = false;
  let aldeanosHablados = new Set();
  let mapaActual = 'aldea';

  const DIALOGOS_AMBIENTE = {
    '🪓': { titulo: 'Leñador', texto: 'He dejado de talar cerca del límite del bosque. Los árboles parecen… estar escuchando. Ten cuidado con dónde pisas, Ronin.', img: 'img/personajes/lenador.png' },
    '💰': {
      titulo: 'Mercader',
      texto: 'Vengo de tierras lejanas. Mis sedas son finas, pero mis noticias son mejores. ¿Te interesa saber qué se dice sobre los extranjeros en la capital?',
      img: 'img/personajes/mercader.png',
      opciones: [
        { texto: 'Cuéntame más sobre esos extranjeros.', respuesta: 'Se dice que portan armas nunca vistas, de fuego y trueno. He visto a uno en la frontera, con armadura roja y un casco con cuernos. No me gustó su mirada.' },
        { texto: 'Prefiero oírlo de tus sedas, ¿cuánto valen?', respuesta: 'Mis sedas vienen de la ruta del norte, tejidas con hilos de plata. Para ti, Ronin, te las dejo en 10 monedas de cobre el rollo. Un precio justo.' },
        { texto: 'No me interesan tus noticias ni tus sedas.', respuesta: 'Como quieras, Ronin. Pero el mundo se mueve rápido, y los que ignoran las noticias suelen ser los primeros en caer. Cuídate.' },
      ],
    },
    '🧑‍🌾': { titulo: 'Campesino', texto: 'El arroz crece lento este año, Kenji. Si buscas el zorro de fuego, dicen que se vio una luz roja hacia el bosque al anochecer.', img: 'img/personajes/campesino.png' },
  };

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
  const screenGame    = $('screen-game');
  const btnContinue   = $('btn-continue');
  const btnNewGame    = $('btn-new-game');
  const playerNameDsp = $('player-name-display');
  const mapContainer  = $('map-container');
  const mapGrid       = $('map-grid');
  const modalEvento     = $('modal-evento');
  const modalEventoImg  = $('modal-evento-imagen');
  const modalEventoTexto = $('modal-evento-texto');
  const modalEventoTitulo = $('modal-evento-titulo');
  fadeOverlay = $('fade-overlay');
  const bannerUbicacion = $('banner-ubicacion');
  const bannerTitulo    = $('banner-titulo');
  const bannerSubtitulo = $('banner-subtitulo');
  const modalInventario = $('modal-inventario');
  const invLista        = $('inv-lista');
  const objetivoTexto   = $('objetivo-texto');
  const screenNarrativa = $('screen-narrativa');
  const narrativaTexto  = $('narrativa-texto');
  const animRecoger     = $('anim-recoger');
  const animIcono       = $('anim-icono');
  const animTexto        = $('anim-texto');

  /* ─── GESTIÓN DE PANTALLAS ─── */
  function showScreen(id) {
    [screenMenu, screenGame].forEach(s => s.classList.add('hidden'));
    $(id).classList.remove('hidden');
  }

  /* ─── COMPROBAR PARTIDA GUARDADA ─── */
  function checkSavedGame() {
    const saved = localStorage.getItem('sengoku_save');
    if (saved) {
      btnContinue.classList.remove('hidden');
    } else {
      btnContinue.classList.add('hidden');
    }
  }

  /* ─── MANEJADORES DEL MENÚ ─── */
  function onContinue() {
    const raw = localStorage.getItem('sengoku_save');
    if (!raw) return;
    const data = JSON.parse(raw);
    playerName = data.name || 'Kenji';
    playerX = data.px || 11;
    playerY = data.py || 9;
    playerDir = { dx: data.dirX || 0, dy: data.dirY || -1 };
    visitadoCasaGenji = data.genji || false;
    visitadoCasaMadre = data.madre || false;
    habladoConTakeshi = data.takeshi || false;
    madreDioItems = data.dioItems || false;
    inventory = data.inv || [];

    movimientoBloqueado = true;
    fadeOverlay.style.transition = 'opacity 0.5s ease';
    fadeOverlay.style.opacity = '1';
    setTimeout(() => {
      showScreen('screen-game');
      if (mapaActivo !== MAP) setMapa(MAP);
      mapContainer.style.backgroundColor = '';
      buildGrid();
      render();
      updateCamera();
      mostrarUbicacion('Aldea de Owari', 'Provincia de Owari - 1560');
      actualizarObjetivo();
      fadeOverlay.style.opacity = '0';
      setTimeout(() => {
        fadeOverlay.style.transition = '';
        movimientoBloqueado = false;
      }, 500);
    }, 500);
  }

  function iniciarNarrativa() {
    showScreen('screen-game');
    movimientoBloqueado = true;

    fadeOverlay.style.transition = 'opacity 0.5s ease';
    fadeOverlay.style.opacity = '1';

    setTimeout(() => {
      screenNarrativa.style.opacity = '1';
      screenNarrativa.classList.remove('modal-hidden');
      narrativaTexto.innerHTML = '';
      const texto = 'Bienvenido a la Aldea de Owari. Kenji, tu destino está en tus manos...';
      const chars = Array.from(texto);
      let idx = 0;
      let buffer = '';
      const textSpan = document.createElement('span');
      const cursorSpan = document.createElement('span');
      cursorSpan.className = 'tn-cursor';
      cursorSpan.textContent = '▌';
      narrativaTexto.appendChild(textSpan);
      narrativaTexto.appendChild(cursorSpan);

      function tipear() {
        if (idx >= chars.length) {
          if (cursorSpan.parentNode) cursorSpan.remove();
          return;
        }
        buffer += chars[idx];
        idx++;
        textSpan.textContent = buffer;
        setTimeout(tipear, 30);
      }
      tipear();

      let terminado = false;
      let finalizando = false;
      function saltar() {
        if (terminado) return;
        terminado = true;
        if (cursorSpan.parentNode) cursorSpan.remove();
        textSpan.textContent = texto;
      }
      function finalizar() {
        if (finalizando) return;
        finalizando = true;
        saltar();
        crearAudioContext().ctx.resume();
        document.removeEventListener('keydown', onKey);
        document.removeEventListener('click', onClick);

        screenNarrativa.style.transition = 'opacity 1.5s ease';
        screenNarrativa.style.opacity = '0';

        setTimeout(() => {
          screenNarrativa.classList.add('modal-hidden');

          setTimeout(() => {
            iniciarNuevaPartida();

            fadeOverlay.style.transition = 'opacity 2.5s ease';
            fadeOverlay.style.opacity = '0';

            setTimeout(() => {
              fadeOverlay.style.transition = '';
              movimientoBloqueado = false;
            }, 2500);
          }, 1000);
        }, 1500);
      }
      function onKey(e) {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          finalizar();
        }
      }
      function onClick() { finalizar(); }

      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClick);

      setTimeout(() => {
        saltar();
      }, 4000);
    }, 500);
  }

  function onNewGame() {
    iniciarNarrativa();
  }

  function iniciarNuevaPartida() {
    playerName = 'Kenji';
    playerX = 11;
    playerY = 9;
    playerDir = { dx: 0, dy: -1 };
    inventory = [];
    madreDioItems = false;
    visitadoCasaGenji = false;
    visitadoCasaMadre = false;
    habladoConTakeshi = false;
    misionAldeanosCompletada = false;
    aldeanosHablados = new Set();
    mapaActual = 'aldea';
    localStorage.setItem('sengoku_playerName', 'Kenji');
    if (mapaActivo !== MAP) setMapa(MAP);
    mapContainer.style.backgroundColor = '';

    buildGrid();
    render();
    updateCamera();
    mostrarUbicacion('Aldea de Owari', 'Provincia de Owari - 1560');
    actualizarObjetivo();
    audioAmbiente.cambiarAmbiente('exterior');
    if (!npcTimer) {
      iniciarNPCs();
      npcTimer = setInterval(() => {
        actualizarNPCs();
        if (mapaActivo === MAP) render();
      }, 1200);
    }
    setTimeout(() => {
      movimientoBloqueado = false;
    }, 2000);
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
    document.querySelectorAll('.pattern-overlay, .player-overlay, .ambient-npc').forEach(el => el.remove());

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

    const pw = document.createElement('div');
    pw.className = 'player-overlay';
    pw.style.position = 'absolute';
    pw.style.left = (playerX * tileSize) + 'px';
    pw.style.top = (playerY * tileSize) + 'px';
    pw.style.width = tileSize + 'px';
    pw.style.height = tileSize + 'px';
    pw.style.zIndex = String(100 + playerY);
    pw.style.pointerEvents = 'none';
    pw.style.transform = ultimaDirX === 1 ? 'scaleX(-1)' : '';

    const px = document.createElement('div');
    px.style.width = '100%';
    px.style.height = '100%';
    px.style.backgroundImage = 'url(img/personajes/personaje_principal.png)';
    px.style.backgroundSize = 'cover';
    px.style.backgroundPosition = 'center';
    px.style.backgroundRepeat = 'no-repeat';
    px.style.imageRendering = 'pixelated';
    px.style.filter = 'drop-shadow(0 0 6px rgba(197,155,39,0.8))';
    px.style.animation = jugadorCaminando
      ? 'player-walk 0.2s ease-out'
      : 'pulse-player 1.2s ease-in-out infinite';
    pw.appendChild(px);
    mapGrid.appendChild(pw);

    if (mapaActivo === MAP) {
      npcs.forEach(n => {
        const el = document.createElement('div');
        el.className = 'ambient-npc';
        el.style.position = 'absolute';
        el.style.left = (n.x * tileSize) + 'px';
        el.style.top = (n.y * tileSize) + 'px';
        el.style.width = tileSize + 'px';
        el.style.height = tileSize + 'px';
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.fontSize = (tileSize * 0.7) + 'px';
        el.style.zIndex = '5';
        el.style.pointerEvents = 'none';
        el.style.opacity = '0.5';
        el.textContent = n.emoji;
        mapGrid.appendChild(el);
      });
    }
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
    if (dx !== 0) ultimaDirX = dx;
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

    verificarTransicion(playerX, playerY);
    pasoEnCasilla(playerX, playerY);
    jugadorCaminando = true;
    render();
    updateCamera();
    setTimeout(() => { jugadorCaminando = false; }, 200);
  }

  function hacerTransicion(callback, despues) {
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
          if (despues) despues();
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

  function actualizarObjetivo() {
    if (mapaActual === 'bosque') {
      objetivoTexto.textContent = 'Explora el bosque. Busca el camino de regreso a la aldea.';
      objetivoTexto.style.opacity = '1';
      return;
    }
    if (misionAldeanosCompletada) {
      objetivoTexto.textContent = 'Has hablado con todos los aldeanos. El camino al bosque de Aokigahara está abierto hacia el este.';
      objetivoTexto.style.opacity = '1';
      return;
    }
    let texto = 'Observa tu entorno. El camino se revelará.';
    if (visitadoCasaMadre) {
      texto = 'Tienes provisiones para el viaje. Habla con los aldeanos antes de partir.';
    } else if (visitadoCasaGenji) {
      texto = 'El anciano Genji te ha dado su bendición. Tu madre te espera en casa.';
    } else if (habladoConTakeshi) {
      texto = 'El bosque de Aokigahara aguarda. Busca a Genji, el anciano de la aldea.';
    }
    objetivoTexto.style.opacity = '0';
    setTimeout(() => {
      objetivoTexto.textContent = texto;
      objetivoTexto.style.opacity = '1';
    }, 500);
  }

  function verificarTransicion(x, y) {
    if (mapaActual === 'aldea' && x === 21 && y === 9) {
      if (!misionAldeanosCompletada) {
        objetivoTexto.textContent = 'El Mercader dice que el camino es peligroso… debería hablar con los demás aldeanos primero.';
        objetivoTexto.style.opacity = '1';
        setTimeout(actualizarObjetivo, 3000);
        return;
      }
      cargarMapaBosque();
    } else if (mapaActual === 'bosque' && x === 20 && y === 11) {
      mapaActual = 'aldea';
      hacerTransicion(() => {
        setMapa(MAP);
        mapContainer.style.backgroundColor = '';
        playerX = 21; playerY = 9;
        playerDir = { dx: 1, dy: 0 };
        buildGrid();
        render();
        updateCamera();
        mostrarUbicacion('Aldea de Owari', 'Provincia de Owari - 1560');
        actualizarObjetivo();
        audioAmbiente.cambiarAmbiente('exterior');
        iniciarNPCs();
        if (npcTimer) { clearInterval(npcTimer); npcTimer = null; }
        npcTimer = setInterval(() => { actualizarNPCs(); render(); }, 1800);
      }, () => {
    movimientoBloqueado = true;
    misionAldeanosCompletada = data.mision || false;
    aldeanosHablados = data.aldeanos ? new Set(data.aldeanos) : new Set();
    mapaActual = data.mapa || 'aldea';
        setTimeout(() => { movimientoBloqueado = false; }, 2000);
      });
    }
  }

  function cargarMapaBosque() {
    mapaActual = 'bosque';
    if (npcTimer) { clearInterval(npcTimer); npcTimer = null; }
    hacerTransicion(() => {
      setMapa(MAPA_BOSQUE);
      mapContainer.style.backgroundColor = '#1a2a1a';
      playerX = 1; playerY = 10;
      playerDir = { dx: 1, dy: 0 };
      buildGrid();
      render();
      updateCamera();
      mostrarUbicacion('Los Claros del Bosque Susurrante', '');
      actualizarObjetivo();
      audioAmbiente.cambiarAmbiente('exterior');
    }, () => {
      movimientoBloqueado = true;
      setTimeout(() => { movimientoBloqueado = false; }, 2000);
    });
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
    if (idx === 0) visitadoCasaGenji = true;
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
      actualizarObjetivo();
      audioAmbiente.cambiarAmbiente('interior');
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
    actualizarObjetivo();
    audioAmbiente.cambiarAmbiente('exterior');
    });
  }

  /* ─── SONIDOS CON WEB AUDIO API ─── */

  let audioCtx = null;
  let masterGain = null;

  function crearAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = 0.8;
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

  /* ─── AMBIENTE SONORO ─── */

  const audioAmbiente = {
    activo: false,
    nodos: [],
    zona: null,
    master: null,

    init() {
      const { ctx, master } = crearAudioContext();
      this.master = ctx.createGain();
      this.master.gain.value = 0;
      this.master.connect(master);
    },

    _crearFuente() {
      const { ctx } = crearAudioContext();
      const gan = ctx.createGain();
      gan.gain.value = 0.6;
      gan.connect(this.master);
      this.nodos.push(gan);
      return gan;
    },

    _fadeA(destino, duracion, cb) {
      const ahora = crearAudioContext().ctx.currentTime;
      this.master.gain.cancelScheduledValues(ahora);
      this.master.gain.setValueAtTime(this.master.gain.value, ahora);
      this.master.gain.linearRampToValueAtTime(destino, ahora + duracion);
      if (cb) setTimeout(cb, duracion * 1000);
    },

    _pararNodos() {
      this.nodos.forEach(n => {
        try { n.disconnect(); } catch(e) {}
      });
      this.nodos = [];
    },

    _ruidoBlanco(duracion) {
      const { ctx } = crearAudioContext();
      const buf = ctx.createBuffer(1, ctx.sampleRate * duracion, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      return buf;
    },

    _pulso(freq, duracion) {
      const { ctx } = crearAudioContext();
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const gan = ctx.createGain();
      gan.gain.setValueAtTime(0, ctx.currentTime);
      gan.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.005);
      gan.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duracion);
      osc.connect(gan);
      gan.connect(this.master);
      osc.start();
      osc.stop(ctx.currentTime + duracion);
    },

    _grillo() {
      if (this.zona !== 'exterior') return;
      this._pulso(4000 + Math.random() * 2000, 0.04);
      setTimeout(() => this._grillo(), 600 + Math.random() * 1200);
    },

    _iniciarViento() {
      const { ctx } = crearAudioContext();
      const buf = this._ruidoBlanco(4);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;

      const filtro = ctx.createBiquadFilter();
      filtro.type = 'lowpass';
      filtro.frequency.value = 500;
      filtro.Q.value = 0.5;

      const env = ctx.createGain();
      env.gain.value = 0.25;
      const gan = this._crearFuente();
      src.connect(filtro);
      filtro.connect(env);
      env.connect(gan);
      src.start();
      this.nodos.push(src);
    },

    _iniciarFlauta() {
      const { ctx } = crearAudioContext();
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = 260;

      const gan = ctx.createGain();
      gan.gain.value = 0;

      const ahora = ctx.currentTime;
      const melodia = [260, 294, 330, 294, 260, 247, 260];
      melodia.forEach((f, i) => {
        osc.frequency.setValueAtTime(f, ahora + i * 3);
        gan.gain.setValueAtTime(0, ahora + i * 3);
        gan.gain.linearRampToValueAtTime(0.06, ahora + i * 3 + 0.4);
        gan.gain.linearRampToValueAtTime(0, ahora + i * 3 + 2.8);
      });

      osc.connect(gan);
      gan.connect(this.master);
      osc.start();
      osc.stop(ahora + melodia.length * 3);
      this.nodos.push(osc);
      this.nodos.push(gan);
    },

    _iniciarFuego() {
      const { ctx } = crearAudioContext();
      const buf = this._ruidoBlanco(2);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;

      const filtro = ctx.createBiquadFilter();
      filtro.type = 'lowpass';
      filtro.frequency.value = 200;
      filtro.Q.value = 0.3;

      const gan = this._crearFuente();
      src.connect(filtro);
      filtro.connect(gan);
      src.start();
      this.nodos.push(src);

      const pop = () => {
        if (this.zona !== 'interior') return;
        this._pulso(100 + Math.random() * 300, 0.06);
        setTimeout(pop, 300 + Math.random() * 700);
      };
      pop();
    },

    cambiarAmbiente(zona) {
      if (this.zona === zona) return;
      const anterior = this.zona;
      this.zona = zona;

      if (!this.activo) {
        this.init();
        this.activo = true;
      }

      this._fadeA(0, 0.8, () => {
        this._pararNodos();
        if (zona === 'exterior') {
          this._iniciarViento();
          this._iniciarFlauta();
          this._fadeA(0.7, 1.5);
        } else if (zona === 'interior') {
          this._iniciarFuego();
          this._fadeA(0.7, 1.2);
        }
      });
    },
  };

  /* ─── NPCS AMBIENTALES ─── */

  const PATRULLAS = [
    { x: 4, y: 11, dx: 1, pasos: 6, emoji: '🧑', restantes: 3 },
    { x: 12, y: 5, dx: -1, pasos: 4, emoji: '🧑', restantes: 2 },
    { x: 16, y: 12, dx: 1, pasos: 3, emoji: '🧑', restantes: 1 },
    { x: 8, y: 13, dx: 1, pasos: 4, emoji: '💰', restantes: 2 },
    { x: 5, y: 5, dx: -1, pasos: 3, emoji: '🪓', restantes: 1 },
    { x: 18, y: 8, dx: -1, pasos: 3, emoji: '🧑‍🌾', restantes: 2 },
  ];

  let npcs = [];
  let npcTimer = null;

  function iniciarNPCs() {
    npcs = PATRULLAS.map(p => ({
      x: p.x, y: p.y, homeX: p.x, dirX: p.dx,
      pasos: p.pasos, restantes: 0, emoji: p.emoji,
    }));
  }

  function actualizarNPCs() {
    npcs.forEach(n => {
      if (n.restantes <= 0) {
        n.dirX *= -1;
        n.restantes = n.pasos;
      }
      n.x += n.dirX;
      n.restantes--;
    });
  }

  const CARTEL_TEXTO = "Aldea de Owari — Provincia de Owari, año 1560. La guerra se acerca.";
  function getDialogoTakeshi() {
    if (visitadoCasaMadre) {
      return '¡He visto que has estado en tu casa! Mi abuelo dice que tu madre es una mujer muy fuerte. Me alegra que no estés siempre solo por ahí fuera, con los rumores de guerra que trae el viento. A veces, tener un hogar al que volver es la mejor armadura, ¿a que sí, Kenji?';
    }
    if (visitadoCasaGenji) {
      return '¿Ya has hablado con el abuelo <b>Genji</b>? Me ha dicho que tienes "mucho peso en los hombros". ¡Yo no sé qué significa eso, pero dice que si me porto bien y te ayudo, quizás me enseñes a desenvainar la katana sin cortarme los dedos! ¿Es verdad que las katanas brillan cuando hay peligro?';
    }
    return '¡Hola! Soy <b>Takeshi</b>. Mi abuelo dice que más allá del cartel hay un bosque encantado. ¿Has visto alguna vez un <b>zorro de fuego</b>?';
  }

  let eventoTimer = null;
  let eventoConSonido = false;

  function escribirEvento(html, velocidad, conSonido, callback) {
    velocidad = velocidad || 20;
    textoEscribiendo = html;
    callbackTextoCompleto = callback || null;
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
        if (callbackTextoCompleto) { callbackTextoCompleto(); callbackTextoCompleto = null; }
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

  function abrirEvento(titulo, texto, imagen, esPersonaje, opciones) {
    movimientoBloqueado = true;
    modalEventoTitulo.textContent = titulo;
    modalEventoTexto.innerHTML = '';
    document.getElementById('modal-opciones').classList.add('modal-opciones-oculto');
    document.getElementById('modal-opciones').innerHTML = '';

    if (imagen) {
      modalEventoImg.src = imagen;
      modalEventoImg.classList.remove('modal-imagen-hidden');
    } else {
      modalEventoImg.classList.add('modal-imagen-hidden');
    }

    escribirEvento(texto, 20, esPersonaje, opciones ? () => {
      const cont = document.querySelector('.modal-evento-continuar');
      if (cont) cont.style.display = 'none';
      const contenedor = document.getElementById('modal-opciones');
      contenedor.classList.remove('modal-opciones-oculto');
      opciones.forEach((op, i) => {
        const btn = document.createElement('button');
        btn.className = 'opcion-btn';
        btn.textContent = (i + 1) + '. ' + op.texto;
        btn.addEventListener('click', () => {
          contenedor.classList.add('modal-opciones-oculto');
          if (cont) cont.style.display = '';
          modalEventoTexto.innerHTML = '';
          const cursor = document.querySelector('#modal-evento-texto + .modal-evento-cursor');
          if (cursor) cursor.remove();
          escribirEvento(op.respuesta, 20, true);
        });
        contenedor.appendChild(btn);
      });
    } : null);
    modalEvento.classList.remove('modal-hidden');
  }

  function cerrarEvento() {
    if (eventoTimer) { clearTimeout(eventoTimer); eventoTimer = null; }
    const titulo = modalEventoTitulo.textContent;
    const eraMadre = titulo === 'Tu madre';
    if (eraMadre && !madreDioItems) {
      madreDioItems = true;
      setTimeout(() => mostrarAnimRecoger([
        { icono: 'img/comida/arroz_con_ciruelas.png', nombre: 'Ración de Arroz', descripcion: 'Recupera energía' },
      ]), 200);
      setTimeout(() => mostrarAnimRecoger([
        { icono: 'img/comida/cantimplora_de_te.png', nombre: 'Té de ciruela', descripcion: 'Bebida reconfortante' },
      ]), 2400);
    }
    const mapaNPC = {
      'Takeshi':'takeshi','Genji, el anciano':'genji','Hana, la sabia':'hana',
      'Tu madre':'madre','Leñador':'lenador','Mercader':'mercader','Campesino':'campesino',
    };
    if (mapaNPC[titulo]) {
      aldeanosHablados.add(mapaNPC[titulo]);
      if (aldeanosHablados.size >= 7 && !misionAldeanosCompletada) {
        misionAldeanosCompletada = true;
        actualizarObjetivo();
      }
    }
    movimientoBloqueado = false;
    modalEventoImg.classList.add('modal-imagen-hidden');
    modalEvento.classList.add('modal-hidden');
    const cont = document.querySelector('.modal-evento-continuar');
    if (cont) cont.style.display = '';
    document.getElementById('modal-opciones').classList.add('modal-opciones-oculto');
    document.getElementById('modal-opciones').innerHTML = '';
    actualizarObjetivo();
  }

  function completarTexto() {
    if (!eventoTimer && !textoEscribiendo) return;
    if (textoEscribiendo) {
      if (eventoTimer) { clearTimeout(eventoTimer); eventoTimer = null; }
      modalEventoTexto.innerHTML = textoEscribiendo;
      document.querySelectorAll('#modal-evento-texto + .modal-evento-cursor').forEach(el => el.remove());
      if (callbackTextoCompleto) { callbackTextoCompleto(); callbackTextoCompleto = null; }
    }
  }

  function mostrarAnimRecoger(items) {
    animRecoger.classList.remove('anim-oculto');
    animIcono.innerHTML = items.map(i =>
      '<img src="' + i.icono + '" class="anim-icono-img">'
    ).join(' ');
    animTexto.textContent = 'Recibido: ' + items.map(i => i.nombre).join(' + ');
    items.forEach(item => inventory.push(item));
    setTimeout(() => {
      animRecoger.classList.add('anim-oculto');
    }, 1800);
  }

  function interact() {
    if (movimientoBloqueado) {
      if (eventoTimer) { completarTexto(); return; }
      cerrarEvento(); return;
    }
    const tx = playerX + playerDir.dx;
    const ty = playerY + playerDir.dy;
      if (ty < 0 || ty >= ROWS || tx < 0 || tx >= COLS) {
      return;
    }
    const tile = mapaActivo[ty][tx];
    if (tile === '🪧') {
      abrirEvento('Letrero', CARTEL_TEXTO, null, false);
    } else if (tile === '👦') {
      habladoConTakeshi = true;
      abrirEvento('Takeshi', getDialogoTakeshi(), 'img/personajes/takeshi.png', true);
    } else if (tile === '👴') {
      const dialogo = habladoConTakeshi ? GENJI_TRAS_TAKESHI : GENJI_DIALOGOS[Math.floor(Math.random() * GENJI_DIALOGOS.length)];
      habladoConTakeshi = false;
      abrirEvento('Genji, el anciano', dialogo, 'img/personajes/genji.png', true);
    } else if (tile === '🧓') {
      abrirEvento('Hana, la sabia', HANA_DIALOGOS[Math.floor(Math.random() * HANA_DIALOGOS.length)], 'img/personajes/hana.png', true);
    } else if (tile === '👩') {
      visitadoCasaMadre = true;
      abrirEvento('Tu madre', MADRE_TEXTO, 'img/personajes/madre.png', true);
    } else if (DIALOGOS_AMBIENTE[tile]) {
      const d = DIALOGOS_AMBIENTE[tile];
      abrirEvento(d.titulo, d.texto, d.img, true, d.opciones);
    } else if (mapaActivo === MAP) {
      const cerca = [...PATRULLAS, ...npcsRutina.filter(n => n.activo)].find(n => {
        const dx = Math.abs(n.x - playerX);
        const dy = Math.abs(n.y - playerY);
        return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
      });
      if (cerca && DIALOGOS_AMBIENTE[cerca.emoji]) {
        const d = DIALOGOS_AMBIENTE[cerca.emoji];
        abrirEvento(d.titulo, d.texto, d.img, true, d.opciones);
      }
    }
  }

  function abrirInventario() {
    invLista.innerHTML = '';
    if (inventory.length === 0) {
      invLista.innerHTML = '<div class="inv-vacio">Tu zurrón está vacío, busca provisiones.</div>';
    } else {
      inventory.forEach(item => {
        const div = document.createElement('div');
        div.className = 'inv-item';
        const src = item.icono || '';
        const imgHtml = src.match(/\.(png|jpg|jpeg)$/i)
          ? '<img src="' + src + '" class="inv-item-img">'
          : '<div class="inv-item-icono">' + (src || '📦') + '</div>';
        div.innerHTML = imgHtml
          + '<div class="inv-item-texto">'
          + '<div class="inv-item-nombre">' + item.nombre + '</div>'
          + '<div class="inv-item-desc">' + item.descripcion + '</div>'
          + '</div>';
        invLista.appendChild(div);
      });
    }
    modalInventario.classList.remove('modal-hidden');
    movimientoBloqueado = true;
  }

  function cerrarInventario() {
    modalInventario.classList.add('modal-hidden');
    movimientoBloqueado = false;
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
    madreDioItems = false;
    playerNameDsp.textContent = playerName;
    if (mapaActivo !== MAP) setMapa(MAP);
    mapContainer.style.backgroundColor = '';

    buildGrid();
    render();
    updateCamera();
    mostrarUbicacion('Aldea de Owari', 'Provincia de Owari - 1560');
    actualizarObjetivo();
    audioAmbiente.cambiarAmbiente('exterior');
    if (!npcTimer) {
      iniciarNPCs();
      npcTimer = setInterval(() => {
        actualizarNPCs();
        if (mapaActivo === MAP) render();
      }, 1200);
    }
  }

  /* ─── EVENTOS ─── */
  function bindButtons() {
    btnContinue.addEventListener('click', onContinue);
    btnNewGame.addEventListener('click', onNewGame);
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
    const bagH = (e) => { e.preventDefault(); abrirInventario(); };
    bagBtn.addEventListener('touchstart', bagH, { passive: false });
    bagBtn.addEventListener('mousedown', bagH);

    const saveBtn = $('btn-save');
    const saveH = (e) => {
      e.preventDefault();
      if (mapaActivo !== MAP) return;
      const data = {
        name: playerName,
        px: playerX, py: playerY,
        dirX: playerDir.dx, dirY: playerDir.dy,
        genji: visitadoCasaGenji,
        madre: visitadoCasaMadre,
        takeshi: habladoConTakeshi,
        dioItems: madreDioItems,
        inv: inventory,
        mision: misionAldeanosCompletada,
        aldeanos: [...aldeanosHablados],
        mapa: mapaActual,
      };
      localStorage.setItem('sengoku_save', JSON.stringify(data));
      localStorage.setItem('sengoku_playerName', playerName);
      objetivoTexto.textContent = 'Partida guardada.';
      objetivoTexto.style.opacity = '1';
      setTimeout(actualizarObjetivo, 2000);
    };
    saveBtn.addEventListener('touchstart', saveH, { passive: false });
    saveBtn.addEventListener('mousedown', saveH);

    document.addEventListener('keydown', (e) => {
      if (screenGame.classList.contains('hidden')) return;
      if (movimientoBloqueado) {
        if (e.key === ' ' || e.key === 'e' || e.key === 'E' || e.key === 'Enter') {
          e.preventDefault();
          if (eventoTimer) { completarTexto(); }
          else if (!modalEvento.classList.contains('modal-hidden')) cerrarEvento();
          else if (!modalInventario.classList.contains('modal-hidden')) cerrarInventario();
        }
        if (e.key === 'i' || e.key === 'I') {
          e.preventDefault();
          if (!modalInventario.classList.contains('modal-hidden')) cerrarInventario();
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
      if (e.key === 'i' || e.key === 'I') { e.preventDefault(); abrirInventario(); }
    });

    modalEvento.addEventListener('click', cerrarEvento);
    modalInventario.querySelector('.inv-cerrar').addEventListener('click', cerrarInventario);
    animRecoger.addEventListener('click', () => {
      animRecoger.classList.add('anim-oculto');
    });
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
