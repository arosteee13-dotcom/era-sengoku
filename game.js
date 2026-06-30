/* ============================================================
   ERA SENGOKU — Lógica del juego
   Grid-based movement, NPC dialogues, inventory
   ============================================================ */

// ============================================================
//  CONFIGURACIÓN DEL GRID
// ============================================================
const COLS = 8;
const ROWS = 8;
const TILE_SIZE = 64;

// ============================================================
//  ESTADO DEL JUEGO
// ============================================================
let honor = 0;
let inventario = [];
let dialogueActive = false;
let currentNPC = null;

// ============================================================
//  MAPA DE BALDOSAS (tileMap)
//  0 = pasto, 1 = camino, 2 = agua, 3 = edificio
// ============================================================
const tileMap = [
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 2, 0],
  [0, 0, 0, 0, 1, 0, 2, 0],
  [0, 3, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 3, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
];

// ============================================================
//  PERSONAJES NO JUGADORES (NPCs)
// ============================================================
const npcs = [
  {
    id: 'npc_ronin',
    name: 'Ronin',
    col: 2,
    row: 3,
    color: '#e94560',
    active: true,
    dialogues: [
      {
        text: 'Forastero... este camino está lleno de peligros. ¿Buscas fortuna o buscas la muerte?',
        options: [
          {
            label: 'Busco fortuna',
            effect: () => {
              honor += 10;
              addItem('Moneda de Oro');
            },
          },
          {
            label: 'Busco la muerte',
            effect: () => {
              honor -= 5;
            },
          },
        ],
      },
    ],
  },
  {
    id: 'npc_monje',
    name: 'Monje',
    col: 6,
    row: 7,
    color: '#533483',
    active: true,
    dialogues: [
      {
        text: 'La guerra consume la tierra. Dime, joven guerrero: ¿qué camino honrarás?',
        options: [
          {
            label: 'El camino del honor',
            effect: () => {
              honor += 15;
              addItem(' Pergamino Sabio');
            },
          },
          {
            label: 'El camino del poder',
            effect: () => {
              honor -= 10;
            },
          },
        ],
      },
    ],
  },
];

// ============================================================
//  JUGADOR
// ============================================================
const player = { col: 1, row: 1 };

// ============================================================
//  CANVAS
// ============================================================
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const rect = document.getElementById('gameWorld').getBoundingClientRect();
  const size = Math.min(rect.width, rect.height);
  canvas.width = COLS * TILE_SIZE;
  canvas.height = ROWS * TILE_SIZE;
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// ============================================================
//  RENDERIZADO
// ============================================================
const TILE_COLORS  = ['#3a7d32', '#c2a061', '#2b6e9e', '#6b4226'];
const TILE_BORDERS = ['#2d5a27', '#a8853e', '#1f5280', '#4a2e1a'];

function render() {
  const tw = TILE_SIZE;
  const th = TILE_SIZE;

  // Baldosas
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const type = tileMap[r][c];
      ctx.fillStyle = TILE_COLORS[type];
      ctx.fillRect(c * tw, r * th, tw, th);
      ctx.strokeStyle = TILE_BORDERS[type];
      ctx.lineWidth = 1;
      ctx.strokeRect(c * tw, r * th, tw, th);
    }
  }

  // NPCs
  for (const npc of npcs) {
    if (!npc.active) continue;
    const cx = npc.col * tw + tw / 2;
    const cy = npc.row * th + th / 2;
    ctx.fillStyle = npc.color;
    ctx.beginPath();
    ctx.arc(cx, cy, tw * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f0e6d3';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(npc.name, cx, cy);
  }

  // Jugador
  const px = player.col * tw + tw / 2;
  const py = player.row * th + th / 2;
  ctx.fillStyle = '#f6d365';
  ctx.shadowColor = 'rgba(246, 211, 101, 0.6)';
  ctx.shadowBlur = 12;
  ctx.fillRect(px - tw * 0.3, py - tw * 0.3, tw * 0.6, th * 0.6);
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#e8b830';
  ctx.fillRect(px - tw * 0.2, py - tw * 0.2, tw * 0.4, th * 0.4);

  // Borde de selección en la tile del jugador
  ctx.strokeStyle = '#f6d365';
  ctx.lineWidth = 3;
  ctx.strokeRect(player.col * tw, player.row * th, tw, th);

  // HUD
  document.getElementById('hudHonor').textContent = ` Honor: ${honor}`;
  let loc = ' Aldea';
  const npcHere = npcs.find(n => n.active && n.col === player.col && n.row === player.row);
  if (npcHere) {
    loc = ` ${npcHere.name}`;
  } else if (tileMap[player.row][player.col] === 3) {
    loc = ' Templo';
  } else if (tileMap[player.row][player.col] === 2) {
    loc = ' Lago';
  }
  document.getElementById('hudLocation').textContent = loc;
}

// ============================================================
//  MOVIMIENTO
// ============================================================
function movePlayer(dCol, dRow) {
  if (dialogueActive) return;

  const nc = player.col + dCol;
  const nr = player.row + dRow;

  if (nc < 0 || nc >= COLS || nr < 0 || nr >= ROWS) return;
  if (tileMap[nr][nc] === 2) return;

  player.col = nc;
  player.row = nr;

  checkNPCInteraction();
  render();
}

// ============================================================
//  SISTEMA DE DIÁLOGOS
// ============================================================
function checkNPCInteraction() {
  if (dialogueActive) return;

  for (const npc of npcs) {
    if (!npc.active) continue;
    const dist = Math.abs(player.col - npc.col) + Math.abs(player.row - npc.row);
    if (dist <= 1) {
      startDialogue(npc);
      return;
    }
  }
  hideDialogue();
}

function startDialogue(npc) {
  dialogueActive = true;
  currentNPC = npc;

  document.getElementById('dpad').hidden = true;

  const db = document.getElementById('dialogueBox');
  db.hidden = false;

  const d = npc.dialogues[0];
  document.getElementById('dialogueText').textContent = d.text;

  const btnA = document.getElementById('btnOptionA');
  const btnB = document.getElementById('btnOptionB');

  btnA.textContent = d.options[0].label;
  btnB.textContent = d.options[1].label;

  // Reemplazar botones para eliminar listeners viejos
  const newBtnA = btnA.cloneNode(true);
  const newBtnB = btnB.cloneNode(true);
  btnA.parentNode.replaceChild(newBtnA, btnA);
  btnB.parentNode.replaceChild(newBtnB, btnB);

  newBtnA.addEventListener('click', () => {
    d.options[0].effect();
    if (currentNPC) currentNPC.active = false;
    endDialogue();
  });

  newBtnB.addEventListener('click', () => {
    d.options[1].effect();
    if (currentNPC) currentNPC.active = false;
    endDialogue();
  });
}

function endDialogue() {
  dialogueActive = false;
  currentNPC = null;
  hideDialogue();
  render();
}

function hideDialogue() {
  document.getElementById('dialogueBox').hidden = true;
  document.getElementById('dpad').hidden = false;
  dialogueActive = false;
}

// ============================================================
//  INVENTARIO
// ============================================================
function addItem(itemName) {
  if (inventario.length < 16) {
    inventario.push(itemName);
  }
}

function removeItem(itemName) {
  const idx = inventario.indexOf(itemName);
  if (idx !== -1) inventario.splice(idx, 1);
}

function renderInventory() {
  const grid = document.getElementById('inventoryGrid');
  grid.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'inv-cell';
    if (inventario[i]) {
      cell.classList.add('has-item');
      cell.textContent = inventario[i];
    }
    grid.appendChild(cell);
  }
}

function toggleInventory() {
  const overlay = document.getElementById('inventoryOverlay');
  const opening = !overlay.classList.contains('open');
  overlay.classList.toggle('open');
  if (opening) renderInventory();
}

// ============================================================
//  EVENTOS — D-PAD
// ============================================================
document.getElementById('btnUp')    .addEventListener('click', () => movePlayer( 0, -1));
document.getElementById('btnDown')  .addEventListener('click', () => movePlayer( 0,  1));
document.getElementById('btnLeft')  .addEventListener('click', () => movePlayer(-1,  0));
document.getElementById('btnRight') .addEventListener('click', () => movePlayer( 1,  0));

// ============================================================
//  EVENTOS — INVENTARIO
// ============================================================
document.getElementById('btnInventory').addEventListener('click', toggleInventory);
document.getElementById('btnCloseInv') .addEventListener('click', toggleInventory);

// ============================================================
//  EVENTOS — TECLADO (para pruebas en escritorio)
// ============================================================
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':    case 'w': movePlayer( 0, -1); e.preventDefault(); break;
    case 'ArrowDown':  case 's': movePlayer( 0,  1); e.preventDefault(); break;
    case 'ArrowLeft':  case 'a': movePlayer(-1,  0); e.preventDefault(); break;
    case 'ArrowRight': case 'd': movePlayer( 1,  0); e.preventDefault(); break;
    case 'i': case 'I': toggleInventory(); e.preventDefault(); break;
  }
});

// ============================================================
//  INICIALIZAR
// ============================================================
render();
