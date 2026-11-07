// ============================================================
// AUDIO (protezioni per tablet/iOS)
// ============================================================
let audioCtx = null;
let audioMuted = false;
let musicNodes = null;
let musicTimeouts = [];
let musicPlaying = false;

function initAudio() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  } catch(e) {
    audioCtx = null;
  }
}

function playTone(freq, duration, type = 'sine', volume = 0.15, delay = 0) {
  try {
    if (!audioCtx || audioMuted) return;
    if (audioCtx.state !== 'running') return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, audioCtx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + duration);
  } catch(e) {}
}

const SFX = {
  click: () => playTone(700, 0.08, 'square', 0.08),
  reveal: () => playTone(880, 0.12, 'sine', 0.12),
  tick: () => playTone(1200, 0.03, 'square', 0.04),
  spin: () => { for (let i = 0; i < 6; i++) playTone(300 + i*80, 0.06, 'triangle', 0.05, i*0.08); },
  win: () => {
    playTone(523, 0.15, 'sine', 0.15);
    playTone(659, 0.15, 'sine', 0.15, 0.12);
    playTone(784, 0.25, 'sine', 0.18, 0.25);
    playTone(1047, 0.4, 'sine', 0.2, 0.42);
  },
  lose: () => {
    playTone(400, 0.15, 'sawtooth', 0.12);
    playTone(300, 0.15, 'sawtooth', 0.12, 0.15);
    playTone(200, 0.35, 'sawtooth', 0.14, 0.3);
  },
  prize: () => {
    playTone(600, 0.1, 'square', 0.1);
    playTone(800, 0.15, 'square', 0.12, 0.1);
  },
  jolly: () => {
    playTone(660, 0.1, 'sine', 0.15);
    playTone(880, 0.1, 'sine', 0.15, 0.1);
    playTone(1100, 0.2, 'sine', 0.18, 0.2);
  },
  error: () => playTone(180, 0.25, 'sawtooth', 0.15),
  cecchino: () => {
    playTone(880, 0.1, 'square', 0.15);
    playTone(1200, 0.15, 'square', 0.15, 0.1);
    playTone(1500, 0.25, 'square', 0.18, 0.2);
  },
  swap: () => {
    playTone(500, 0.08, 'sine', 0.12);
    playTone(700, 0.08, 'sine', 0.12, 0.08);
    playTone(900, 0.12, 'sine', 0.14, 0.16);
  }
};

// ============================================================
// MUSICA - Melodia loop estesa (32 note, due frasi A+B)
// ============================================================
function startMusic() {
  try {
    if (!audioCtx || audioMuted || musicPlaying) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(() => {
        if (audioCtx.state === 'running') startMusic();
      }).catch(() => {});
      return;
    }
    if (audioCtx.state !== 'running') return;

    musicPlaying = true;

    const melodia = [
      [523.25, 1], [587.33, 1], [659.25, 1], [783.99, 1],
      [880.00, 2], [783.99, 1], [659.25, 1],
      [587.33, 1], [523.25, 1], [587.33, 1], [659.25, 2],
      [783.99, 1], [880.00, 1], [783.99, 1], [659.25, 1],
      [523.25, 1], [659.25, 1], [783.99, 1], [1046.50, 1],
      [880.00, 2], [783.99, 1], [880.00, 1],
      [1046.50, 1], [880.00, 1], [783.99, 1], [659.25, 2],
      [587.33, 1], [659.25, 1], [523.25, 2]
    ];
    const durataUnita = 0.30;
    const volume = 0.05;

    function playMelodiaLoop() {
      if (!musicPlaying || audioMuted) return;

      let tempo = 0;
      melodia.forEach(([freq, dur]) => {
        if (freq !== 0) {
          const delayMs = tempo * durataUnita * 1000;
          const durataNota = dur * durataUnita;
          const t = setTimeout(() => {
            if (!musicPlaying || audioMuted) return;
            try {
              const osc = audioCtx.createOscillator();
              const gain = audioCtx.createGain();
              osc.type = 'triangle';
              osc.frequency.value = freq;
              gain.gain.setValueAtTime(0, audioCtx.currentTime);
              gain.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + 0.02);
              gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durataNota * 0.9);
              osc.connect(gain);
              gain.connect(audioCtx.destination);
              osc.start();
              osc.stop(audioCtx.currentTime + durataNota);
            } catch(e) {}
          }, delayMs);
          musicTimeouts.push(t);
        }
        tempo += dur;
      });

      const pausaFinale = 0.8;
      const loopDurata = (tempo + pausaFinale) * durataUnita * 1000;
      const tLoop = setTimeout(() => {
        if (musicPlaying && !audioMuted) playMelodiaLoop();
      }, loopDurata);
      musicTimeouts.push(tLoop);
    }

    playMelodiaLoop();
  } catch(e) {
    musicPlaying = false;
  }
}

function stopMusic() {
  musicPlaying = false;
  musicTimeouts.forEach(t => clearTimeout(t));
  musicTimeouts = [];
  if (musicNodes) {
    musicNodes.forEach(({ osc, gain }) => {
      try {
        gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
        osc.stop(audioCtx.currentTime + 0.5);
      } catch(e) {}
    });
    musicNodes = null;
  }
}

// ============================================================
// COSTANTI E RIFERIMENTI DOM
// ============================================================
const SAVE_KEY = 'ruota_materie_save_v4';
const BEST_KEY = 'ruota_materie_best_v4';
const INITIAL_ROUND = 1;
const INITIAL_CONSONANTI = 10;
const INITIAL_VOCALI = 3;

const canvas = document.getElementById('wheelCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const spinBtn = document.getElementById('spinBtn');
const winnerBanner = document.getElementById('winnerBanner');
const winnerValue = document.getElementById('winnerValue');
const wheelSection = document.getElementById('wheelSection');
const titleBanner = document.getElementById('titleBanner');
const questionPhase = document.getElementById('questionPhase');
const questionText = document.getElementById('questionText');
const answerBoard = document.getElementById('answerBoard');
const keyboardContainer = document.getElementById('keyboardContainer');
const solveBtn = document.getElementById('solveBtn');
const clearBtn = document.getElementById('clearBtn');
const rewardModal = document.getElementById('rewardModal');
const rewardText = document.getElementById('rewardText');
const modalCloseBtn = document.getElementById('modalCloseBtn');

const valRound = document.getElementById('valRound');
const valConsonanti = document.getElementById('valConsonanti');
const valVocali = document.getElementById('valVocali');
const valJolly = document.getElementById('valJolly');
const cardRound = document.getElementById('cardRound');
const cardConsonanti = document.getElementById('cardConsonanti');
const cardVocali = document.getElementById('cardVocali');
const cardJolly = document.getElementById('cardJolly');

const splashScreen = document.getElementById('splashScreen');
const splashBestScore = document.getElementById('splashBestScore');
const splashParticles = document.getElementById('splashParticles');
const btnNewGame = document.getElementById('btnNewGame');
const btnResumeGame = document.getElementById('btnResumeGame');
const gameContainer = document.getElementById('gameContainer');
const btnBackToMenu = document.getElementById('btnBackToMenu');
const btnMute = document.getElementById('btnMute');

// ============================================================
// STATO
// ============================================================
let roundCount = INITIAL_ROUND;
let consonantiCount = INITIAL_CONSONANTI;
let vocaliCount = INITIAL_VOCALI;
let hasJolly = false;
let lastPrize = '';
let currentAnswer = '';
let isSolvingMode = false;
let currentSubject = '';
let currentPhase = 1;
let currentAngle = 0;
let isSpinning = false;
let lastTickSlice = -1;

let cecchinoAttivo = false;
let cambiaDomandaAttivo = false;
let currentQuestionObj = null;
let gameOverInCorso = false;

const VOWELS = ['A', 'E', 'I', 'O', 'U'];
const qwertyLayout = [
  ['Q','W','E','R','T','Y','U','I','O','P'],
  ['A','S','D','F','G','H','J','K','L'],
  ['Z','X','C','V','B','N','M']
];
const subjects = [
  'Storia','Matematica','Geografia','Scienze','Arte','Musica',
  'Tecnologia','Filosofia','Fisica','Chimica','Informatica','Religione'
];
const prizes = [
  'Vinci 1 Consonante','Perdi 1 Vocale','Riparti da Zero',
  'Cambia Materia','Supera il Round','Vinci 1 Vocale',
  'Perdi 1 Consonante','Bancarotta','Jolly',
  'Cecchino','Cambia Domanda'
];
const colors = [
  '#f87171','#fb923c','#fbbf24','#a3e635','#4ade80','#34d399',
  '#2dd4bf','#38bdf8','#60a5fa','#818cf8','#a78bfa','#f472b6',
  '#9ca3af','#fcd34d'
];

let currentItems = subjects;

// ============================================================
// HELPER ANIMAZIONI
// ============================================================
function resetAnimazioni() {
  [cardRound, cardConsonanti, cardVocali, cardJolly, answerBoard].forEach(el => {
    if (!el) return;
    el.classList.remove('win-glow', 'shake-fail', 'revealed', 'bump');
  });
  document.querySelectorAll('.letter-tile.manual-filled-cleared')
    .forEach(t => t.classList.remove('manual-filled-cleared'));
}

function bump(el) {
  if (!el) return;
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 450);
}

// ============================================================
// ALERT CUSTOM
// ============================================================
function showAlert({ title = 'Attenzione', message = '', danger = false, buttons = [{ label: 'OK', type: 'primary' }] }) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'alert-overlay';
    const card = document.createElement('div');
    card.className = 'alert-card' + (danger ? ' alert-danger' : '');

    const t = document.createElement('div');
    t.className = 'alert-title';
    t.textContent = title;
    card.appendChild(t);

    const m = document.createElement('div');
    m.className = 'alert-message';
    m.textContent = message;
    card.appendChild(m);

    const btnRow = document.createElement('div');
    btnRow.className = 'alert-buttons';

    buttons.forEach(b => {
      const btn = document.createElement('button');
      btn.className = 'alert-btn alert-btn-' + (b.type || 'primary');
      btn.textContent = b.label;
      btn.addEventListener('click', () => {
        SFX.click();
        overlay.remove();
        resolve(b.value !== undefined ? b.value : true);
      });
      btnRow.appendChild(btn);
    });
    card.appendChild(btnRow);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  });
}

// ============================================================
// EFFETTI VITTORIA / SCONFITTA
// ============================================================
function triggerVictoryEffects() {
  document.body.classList.remove('victory-flash', 'defeat-flash', 'screen-shake');
  void document.body.offsetWidth;
  document.body.classList.add('victory-flash');
  spawnConfetti();
  setTimeout(() => {
    document.body.classList.remove('victory-flash');
  }, 2600);
}

function triggerDefeatEffects() {
  document.body.classList.remove('victory-flash', 'defeat-flash', 'screen-shake');
  void document.body.offsetWidth;
  document.body.classList.add('defeat-flash', 'screen-shake');
  spawnDefeatEmojis();
  setTimeout(() => {
    document.body.classList.remove('defeat-flash', 'screen-shake');
  }, 2000);
}

function spawnConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);
  const confettiColors = ['#fbbf24', '#f87171', '#4ade80', '#60a5fa', '#a78bfa', '#f472b6', '#facc15', '#34d399'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    piece.style.width = (6 + Math.random() * 8) + 'px';
    piece.style.height = (8 + Math.random() * 10) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    container.appendChild(piece);
  }
  setTimeout(() => {
    if (container.parentNode) container.remove();
  }, 4500);
}

function spawnDefeatEmojis() {
  const emojis = ['💀', '❌', '😢', '💥', '⚠️'];
  for (let i = 0; i < 12; i++) {
    const em = document.createElement('div');
    em.className = 'defeat-emoji';
    em.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    em.style.left = (10 + Math.random() * 80) + '%';
    em.style.bottom = '20%';
    em.style.animationDelay = (Math.random() * 0.6) + 's';
    document.body.appendChild(em);
    setTimeout(() => em.remove(), 2500);
  }
}

// ============================================================
// PERSISTENZA
// ============================================================
function salvaPartita() {
  const stato = {
    roundCount, consonantiCount, vocaliCount, hasJolly,
    currentSubject, currentPhase, currentAngle,
    cecchinoAttivo, cambiaDomandaAttivo,
    statoMaterie: serializzaStatoMaterie(),
    timestamp: Date.now()
  };
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(stato)); } catch(e) {}
}

function caricaPartita() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

function cancellaSalvataggio() {
  try { localStorage.removeItem(SAVE_KEY); } catch(e) {}
}

function haSalvataggio() { return caricaPartita() !== null; }

function getBestScore() {
  try { return parseInt(localStorage.getItem(BEST_KEY) || '0', 10); } catch(e) { return 0; }
}

function aggiornaBestScore(round) {
  const best = getBestScore();
  if (round > best) {
    try { localStorage.setItem(BEST_KEY, String(round)); } catch(e) {}
  }
}

// ============================================================
// SPLASH
// ============================================================
function creaParticelleSplash() {
  if (!splashParticles) return;
  splashParticles.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'splash-particle';
    const size = 3 + Math.random() * 6;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '-20px';
    p.style.animationDuration = (6 + Math.random() * 8) + 's';
    p.style.animationDelay = (Math.random() * 6) + 's';
    splashParticles.appendChild(p);
  }
}

function mostraSplash() {
  stopMusic();
  resetAnimazioni();
  const best = getBestScore();
  if (splashBestScore) splashBestScore.textContent = best > 0 ? 'Round ' + best : '-';
  if (btnResumeGame) btnResumeGame.disabled = !haSalvataggio();
  if (splashScreen) {
    splashScreen.classList.remove('fade-out');
    splashScreen.style.display = 'flex';
  }
  if (gameContainer) gameContainer.classList.add('hidden');
  creaParticelleSplash();
}

function nascondiSplash() {
  if (!splashScreen) return;
  splashScreen.classList.add('fade-out');
  if (gameContainer) gameContainer.classList.remove('hidden');
  setTimeout(() => {
    if (splashScreen) splashScreen.style.display = 'none';
  }, 800);
}

// ============================================================
// UI
// ============================================================
function aggiornaUI() {
  if (valRound) valRound.textContent = roundCount;
  if (valConsonanti) valConsonanti.textContent = consonantiCount;
  if (valVocali) valVocali.textContent = vocaliCount;
  if (valJolly) valJolly.textContent = hasJolly ? '⭐' : '—';
  if (cardJolly) cardJolly.classList.toggle('has-jolly', hasJolly);
}

// ============================================================
// AVVIO PARTITE
// ============================================================
function avviaNuovaPartita() {
  gameOverInCorso = false;

  initAudio();
  cancellaSalvataggio();
  resetTuttiContatori();
  resetAnimazioni();

  roundCount = INITIAL_ROUND;
  consonantiCount = INITIAL_CONSONANTI;
  vocaliCount = INITIAL_VOCALI;
  hasJolly = false;
  cecchinoAttivo = false;
  cambiaDomandaAttivo = false;
  currentQuestionObj = null;
  currentSubject = '';
  currentPhase = 1;
  currentAngle = 0;
  currentItems = subjects;

  aggiornaUI();
  nascondiSplash();

  if (winnerBanner) winnerBanner.style.display = 'none';
  if (questionPhase) questionPhase.style.display = 'none';
  if (titleBanner) {
    titleBanner.textContent = 'Ruota delle Materie';
    titleBanner.style.display = 'block';
    titleBanner.style.opacity = '1';
  }
  if (wheelSection) {
    wheelSection.classList.remove('hidden', 'fade-out');
    wheelSection.classList.add('fade-in');
  }
  if (spinBtn) spinBtn.disabled = false;

  drawWheel();
  salvaPartita();
  setTimeout(() => {
    initAudio();
    if (!audioMuted) startMusic();
  }, 200);
}

function avviaRipresa() {
  gameOverInCorso = false;

  initAudio();
  const save = caricaPartita();
  if (!save) { avviaNuovaPartita(); return; }

  resetAnimazioni();

  roundCount = save.roundCount || INITIAL_ROUND;
  consonantiCount = save.consonantiCount ?? INITIAL_CONSONANTI;
  vocaliCount = save.vocaliCount ?? INITIAL_VOCALI;
  hasJolly = !!save.hasJolly;
  cecchinoAttivo = !!save.cecchinoAttivo;
  cambiaDomandaAttivo = !!save.cambiaDomandaAttivo;
  currentSubject = save.currentSubject || '';
  currentPhase = save.currentPhase || 1;
  currentAngle = save.currentAngle || 0;

  if (save.statoMaterie) {
    ripristinaStatoMaterie(save.statoMaterie);
  }

  aggiornaUI();
  nascondiSplash();

  if (currentPhase === 1) {
    currentItems = subjects;
    if (titleBanner) titleBanner.textContent = 'Ruota delle Materie';
  } else {
    currentItems = prizes;
    if (titleBanner) titleBanner.textContent = 'Ruota dei Premi';
  }
  if (winnerBanner) winnerBanner.style.display = 'none';
  if (questionPhase) questionPhase.style.display = 'none';
  if (titleBanner) {
    titleBanner.style.display = 'block';
    titleBanner.style.opacity = '1';
  }
  if (wheelSection) {
    wheelSection.classList.remove('hidden', 'fade-out');
    wheelSection.classList.add('fade-in');
  }
  if (spinBtn) spinBtn.disabled = false;

  drawWheel();
  salvaPartita();
  setTimeout(() => {
    initAudio();
    if (!audioMuted) startMusic();
  }, 200);
}

// ============================================================
// TASTIERA
// ============================================================
function initKeyboard() {
  if (!keyboardContainer) return;
  isSolvingMode = false;
  if (solveBtn) {
    solveBtn.classList.remove('active-mode');
    solveBtn.textContent = "Dà la soluzione";
    solveBtn.disabled = false;
  }
  if (clearBtn) clearBtn.style.display = 'none';
  keyboardContainer.innerHTML = '';
  qwertyLayout.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'keyboard-row';
    row.forEach(char => {
      const btn = document.createElement('button');
      const isVowel = VOWELS.includes(char);
      btn.className = `key-btn ${isVowel ? 'vowel' : 'consonant'}`;
      btn.textContent = char;
      btn.addEventListener('click', () => handleKeyClick(btn, char, isVowel));
      rowDiv.appendChild(btn);
    });
    keyboardContainer.appendChild(rowDiv);
  });
}

function disabilitaTastiera() {
  if (!keyboardContainer) return;
  keyboardContainer.querySelectorAll('.key-btn').forEach(btn => {
    btn.disabled = true;
  });
}

function abilitaTastiera() {
  if (!keyboardContainer) return;
  keyboardContainer.querySelectorAll('.key-btn').forEach(btn => {
    btn.disabled = false;
  });
}

function handleKeyClick(btn, char, isVowel) {
  // Se in modalità solving (o Cecchino, che forza solving),
  // scrivi la lettera nella tile senza consumare cons/voc
  if (isSolvingMode || cecchinoAttivo) {
    SFX.click();
    const tiles = answerBoard.querySelectorAll('.letter-tile');
    for (let tile of tiles) {
      if (tile.classList.contains('space')) continue;
      if (!tile.dataset.manualFilled && tile.classList.contains('covered')) {
        const originalChar = tile.dataset.char || char;
        tile.textContent = char;
        tile.classList.remove('covered');
        tile.classList.remove('manual-filled-cleared');
        tile.classList.add('manual-filled');
        tile.dataset.manualFilled = "true";
        tile.dataset.char = originalChar;
        break;
      }
    }
    checkSolutionComplete();
    return;
  }

  if (isVowel) {
    if (vocaliCount <= 0) { SFX.error(); return; }
    vocaliCount -= 1;
    if (valVocali) valVocali.textContent = vocaliCount;
    bump(valVocali);
  } else {
    if (consonantiCount <= 0) { SFX.error(); return; }
    consonantiCount -= 1;
    if (valConsonanti) valConsonanti.textContent = consonantiCount;
    bump(valConsonanti);
  }
  SFX.click();
  btn.disabled = true;

  const tiles = answerBoard.querySelectorAll(`.letter-tile[data-char="${char}"]`);
  tiles.forEach((tile, i) => {
    setTimeout(() => {
      tile.classList.remove('covered');
      tile.classList.add('revealed');
      SFX.reveal();
    }, i * 60);
  });
  setTimeout(() => {
    tiles.forEach(t => t.classList.remove('revealed'));
  }, tiles.length * 60 + 500);
  setTimeout(checkSolutionComplete, tiles.length * 60 + 100);
  salvaPartita();
}

function clearLastManualInput() {
  const tiles = Array.from(answerBoard.querySelectorAll('.letter-tile.manual-filled'));
  if (tiles.length > 0) {
    SFX.click();
    const lastTile = tiles[tiles.length - 1];
    lastTile.textContent = '';
    lastTile.classList.remove('manual-filled');
    lastTile.classList.add('covered');
    lastTile.classList.add('manual-filled-cleared');
    delete lastTile.dataset.manualFilled;
  }
}

function handleTileClick(tile) {
  if (isSolvingMode && tile.classList.contains('manual-filled')) {
    SFX.click();
    tile.textContent = '';
    tile.classList.remove('manual-filled');
    tile.classList.add('covered');
    tile.classList.add('manual-filled-cleared');
    delete tile.dataset.manualFilled;
  }
}

async function checkSolutionComplete() {
  const tiles = answerBoard.querySelectorAll('.letter-tile');
  let allFilled = true;
  let assembledString = "";
  tiles.forEach(tile => {
    if (tile.classList.contains('space')) assembledString += " ";
    else if (tile.classList.contains('covered')) allFilled = false;
    else assembledString += tile.textContent;
  });

  if (allFilled) {
    if (assembledString === currentAnswer) {
      // ========== VITTORIA ==========
      SFX.win();
      triggerVictoryEffects();

      answerBoard.classList.add('win-glow');
      if (cardConsonanti) cardConsonanti.classList.add('win-glow');
      if (cardVocali) cardVocali.classList.add('win-glow');
      if (cardRound) cardRound.classList.add('win-glow');

      consonantiCount += 2;
      vocaliCount += 1;
      roundCount += 1;

      cecchinoAttivo = false;
      cambiaDomandaAttivo = false;

      if (valConsonanti) valConsonanti.textContent = consonantiCount;
      if (valVocali) valVocali.textContent = vocaliCount;
      if (valRound) valRound.textContent = roundCount;
      aggiornaBestScore(roundCount);

      setTimeout(() => {
        resetAnimazioni();
        resetToSubjectWheel();
      }, 3000);
    } else if (isSolvingMode) {
      // ========== SCONFITTA ==========
      SFX.lose();
      triggerDefeatEffects();

      answerBoard.classList.add('shake-fail');
      if (cardConsonanti) cardConsonanti.classList.add('shake-fail');
      if (cardVocali) cardVocali.classList.add('shake-fail');

      // Cecchino: sbaglio = Game Over immediato
      if (cecchinoAttivo) {
        cecchinoAttivo = false;
        if (gameOverInCorso) return;
        gameOverInCorso = true;
        setTimeout(async () => {
          if (!gameOverInCorso) return;
          await showAlert({
            title: '💀 GAME OVER',
            message: 'Modalità Cecchino: hai sbagliato l\'unico tentativo.\n\nPartita terminata.',
            danger: true,
            buttons: [{ label: 'OK', type: 'danger', value: true }]
          });
          if (!gameOverInCorso) return;
          gameOverReset();
        }, 1800);
        return;
      }

      const newCons = consonantiCount - 2;
      const newVoc = vocaliCount - 1;

      // Game Over se la penalità porterebbe sotto zero
      if (newCons < 0 || newVoc < 0) {
        if (gameOverInCorso) return;
        gameOverInCorso = true;
        setTimeout(async () => {
          if (!gameOverInCorso) return;
          await showAlert({
            title: '💀 GAME OVER',
            message: 'Partita terminata.',
            danger: true,
            buttons: [{ label: 'OK', type: 'danger', value: true }]
          });
          if (!gameOverInCorso) return;
          gameOverReset();
        }, 1800);
        return;
      }

      // Sconfitta normale
      consonantiCount = Math.max(0, newCons);
      vocaliCount = Math.max(0, newVoc);

      cecchinoAttivo = false;
      cambiaDomandaAttivo = false;

      if (valConsonanti) valConsonanti.textContent = consonantiCount;
      if (valVocali) valVocali.textContent = vocaliCount;

      setTimeout(() => {
        answerBoard.classList.remove('shake-fail');
        if (cardConsonanti) cardConsonanti.classList.remove('shake-fail');
        if (cardVocali) cardVocali.classList.remove('shake-fail');
      }, 2000);
      salvaPartita();

      const isCritica = (consonantiCount < 2 || vocaliCount === 0);
      if (isCritica) {
        setTimeout(async () => {
          const motivo = [];
          if (consonantiCount < 2) motivo.push(`Consonanti rimaste: ${consonantiCount}`);
          if (vocaliCount === 0) motivo.push('Vocali rimaste: 0');

          await showAlert({
            title: '⚠️ Ultima Possibilità',
            message: `${motivo.join('\n')}\n\nSe sbagli ancora la soluzione, la partita TERMINA.\n\nStai attento!`,
            danger: true,
            buttons: [{ label: 'Ho capito', type: 'danger', value: true }]
          });
        }, 2200);
      }
    }
  }
}

function gameOverReset() {
  gameOverInCorso = false;

  cancellaSalvataggio();
  resetTuttiContatori();
  resetAnimazioni();
  roundCount = INITIAL_ROUND;
  consonantiCount = INITIAL_CONSONANTI;
  vocaliCount = INITIAL_VOCALI;
  hasJolly = false;
  cecchinoAttivo = false;
  cambiaDomandaAttivo = false;
  currentQuestionObj = null;
  currentPhase = 1;
  currentSubject = '';
  currentItems = subjects;
  aggiornaUI();

  setTimeout(() => {
    mostraSplash();
  }, 1500);
}

function renderAnswerBoard(answer) {
  if (!answerBoard) return;
  answerBoard.classList.remove('win-glow', 'shake-fail', 'revealed', 'bump');
  answerBoard.innerHTML = '';
  currentAnswer = answer.toUpperCase();
  for (let char of currentAnswer) {
    const tile = document.createElement('div');
    if (char === ' ') {
      tile.className = 'letter-tile space';
    } else {
      tile.className = 'letter-tile covered';
      tile.textContent = char;
      tile.dataset.char = char;
      tile.addEventListener('click', () => handleTileClick(tile));
    }
    answerBoard.appendChild(tile);
  }
  checkSolutionComplete();
}

if (solveBtn) {
  solveBtn.addEventListener('click', () => {
    if (solveBtn.disabled) return;
    SFX.click();
    isSolvingMode = true;
    solveBtn.classList.add('active-mode');
    solveBtn.textContent = "Inserimento Soluzione Attivo";
    if (clearBtn) clearBtn.style.display = 'block';
  });
}

if (clearBtn) {
  clearBtn.addEventListener('click', () => { SFX.click(); clearLastManualInput(); });
}

// ============================================================
// RUOTA
// ============================================================
function drawWheel() {
  if (!ctx || !canvas) return;
  const numSlices = currentItems.length;
  const sliceAngle = (2 * Math.PI) / numSlices;
  const radius = canvas.width / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numSlices; i++) {
    const angle = currentAngle + i * sliceAngle;
    ctx.beginPath();
    if (currentItems[i] === 'Jolly') {
      ctx.fillStyle = '#fbbf24';
    } else if (currentItems[i] === 'Cecchino') {
      ctx.fillStyle = '#9ca3af';
    } else if (currentItems[i] === 'Cambia Domanda') {
      ctx.fillStyle = '#fcd34d';
    } else {
      ctx.fillStyle = colors[i % colors.length];
    }
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius - 5, angle, angle + sliceAngle);
    ctx.lineTo(radius, radius);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(angle + sliceAngle / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#000000';
    ctx.font = numSlices >= 10
      ? '900 12px Segoe UI, sans-serif'
      : '900 14px Segoe UI, sans-serif';
    ctx.fillText(currentItems[i], radius - 15, 5);
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(radius, radius, 26, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 4;
  ctx.stroke();
}

function spinWheel() {
  if (isSpinning) return;
  initAudio();
  SFX.spin();
  isSpinning = true;
  if (spinBtn) spinBtn.disabled = true;
  lastTickSlice = -1;

  const totalRotation = (Math.floor(Math.random() * 5) + 5) * 2 * Math.PI + Math.random() * 2 * Math.PI;
  const duration = 4000;
  const startAngle = currentAngle;
  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    currentAngle = startAngle + totalRotation * easeOut;

    const numSlices = currentItems.length;
    const sliceAngle = (2 * Math.PI) / numSlices;
    const currentSlice = Math.floor((currentAngle % (2 * Math.PI)) / sliceAngle);
    if (currentSlice !== lastTickSlice && progress < 0.95) {
      SFX.tick();
      lastTickSlice = currentSlice;
    }

    drawWheel();
    if (progress < 1) requestAnimationFrame(animate);
    else { isSpinning = false; handleResult(); }
  }
  requestAnimationFrame(animate);
}

function handleResult() {
  const numSlices = currentItems.length;
  const sliceAngle = (2 * Math.PI) / numSlices;
  const topAngle = (3 * Math.PI) / 2;
  const normalizedAngle = (topAngle - (currentAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const winnerIndex = Math.floor(normalizedAngle / sliceAngle) % numSlices;
  const resultText = currentItems[winnerIndex];

  if (currentPhase === 1) {
    SFX.prize();
    if (winnerValue) winnerValue.textContent = resultText;
    if (winnerBanner) winnerBanner.style.display = 'block';
    currentSubject = resultText;

    if (wheelSection) wheelSection.classList.add('fade-out');
    if (titleBanner) titleBanner.style.opacity = '0';

    setTimeout(() => {
      if (wheelSection) wheelSection.classList.add('hidden');
      if (titleBanner) titleBanner.style.display = 'none';
      setTimeout(() => {
        currentItems = prizes;
        currentPhase = 2;
        if (titleBanner) titleBanner.textContent = 'Ruota dei Premi';
        drawWheel();
        if (titleBanner) titleBanner.style.display = 'block';
        if (wheelSection) {
          wheelSection.classList.remove('hidden', 'fade-out');
          wheelSection.classList.add('fade-in');
        }
        setTimeout(() => {
          if (titleBanner) titleBanner.style.opacity = '1';
          if (spinBtn) spinBtn.disabled = false;
        }, 50);
        salvaPartita();
      }, 1000);
    }, 500);
  } else {
    SFX.prize();
    lastPrize = resultText;
    if (rewardText) rewardText.textContent = resultText;
    if (rewardModal) rewardModal.style.display = 'flex';
    if (spinBtn) spinBtn.disabled = false;
    salvaPartita();
  }
}

function resetToSubjectWheel() {
  if (winnerBanner) winnerBanner.style.display = 'none';
  if (questionPhase) questionPhase.style.display = 'none';
  if (wheelSection) wheelSection.classList.add('fade-out');
  if (titleBanner) titleBanner.style.opacity = '0';

  setTimeout(() => {
    currentItems = subjects;
    currentPhase = 1;
    if (titleBanner) titleBanner.textContent = 'Ruota delle Materie';
    drawWheel();
    if (titleBanner) titleBanner.style.display = 'block';
    if (wheelSection) {
      wheelSection.classList.remove('hidden', 'fade-out');
      wheelSection.classList.add('fade-in');
    }
    setTimeout(() => {
      if (titleBanner) titleBanner.style.opacity = '1';
      if (spinBtn) spinBtn.disabled = false;
    }, 50);
    salvaPartita();
  }, 500);
}

function showQuestionPhase() {
  if (wheelSection) wheelSection.classList.add('fade-out');
  if (titleBanner) titleBanner.style.opacity = '0';

  setTimeout(() => {
    if (wheelSection) wheelSection.classList.add('hidden');
    if (titleBanner) titleBanner.style.display = 'none';
    setTimeout(async () => {
      [answerBoard, cardRound, cardConsonanti, cardVocali, cardJolly].forEach(el => {
        if (el) el.classList.remove('win-glow', 'shake-fail', 'revealed', 'bump');
      });

      let materia = currentSubject;
      if (!DATABASE[materia]) {
        const disponibili = Object.keys(DATABASE);
        materia = disponibili[Math.floor(Math.random() * disponibili.length)];
      }
      let domanda = getNextQuestion(materia);
      if (!domanda) {
        resetContatoreMateria(materia);
        domanda = getNextQuestion(materia);
      }
      if (!domanda) {
        domanda = { domanda: "Nessuna domanda disponibile", risposta: "NESSUNA", difficolta: 1 };
      }

      currentQuestionObj = domanda;
      if (questionText) questionText.textContent = domanda.domanda;
      renderAnswerBoard(domanda.risposta);
      initKeyboard();
      if (questionPhase) questionPhase.style.display = 'flex';
      salvaPartita();

      // === MODALITÀ CAMBIA DOMANDA ===
      if (cambiaDomandaAttivo) {
        setTimeout(async () => {
          const vuoleCambiare = await showAlert({
            title: '🔄 Cambia Domanda',
            message: `La domanda estratta è:\n\n"${domanda.domanda}"\n\nVuoi cambiarla con una nuova domanda della stessa materia?`,
            danger: false,
            buttons: [
              { label: 'No, gioco questa', type: 'primary', value: false },
              { label: 'Sì, cambia domanda', type: 'secondary', value: true }
            ]
          });

          cambiaDomandaAttivo = false;

          if (vuoleCambiare) {
            SFX.swap();
            let nuovaDomanda = getNextQuestion(materia);
            if (!nuovaDomanda) {
              resetContatoreMateria(materia);
              nuovaDomanda = getNextQuestion(materia);
            }
            if (!nuovaDomanda) nuovaDomanda = domanda;
            currentQuestionObj = nuovaDomanda;
            if (questionText) questionText.textContent = nuovaDomanda.domanda;
            renderAnswerBoard(nuovaDomanda.risposta);
            initKeyboard();
          }
          salvaPartita();
        }, 500);
      }

      // === MODALITÀ CECCHINO ===
      if (cecchinoAttivo) {
        setTimeout(async () => {
          // Disabilita la tastiera durante l'alert (nessun click accidentale)
          disabilitaTastiera();

          await showAlert({
            title: '🎯 Modalità Cecchino',
            message: 'Hai un solo tentativo!\n\nNon puoi cercare lettere per rivelare la soluzione.\n\nDevi scrivere la soluzione completa lettera per lettera usando la tastiera.\n\nSe sbagli, la partita TERMINA immediatamente.',
            danger: true,
            buttons: [{ label: 'Sono pronto', type: 'danger', value: true }]
          });

          // Attiva automaticamente "Dà la soluzione"
          isSolvingMode = true;
          if (solveBtn) {
            solveBtn.classList.add('active-mode');
            solveBtn.textContent = "Inserimento Soluzione Attivo";
            solveBtn.disabled = true;
          }
          if (clearBtn) clearBtn.style.display = 'block';

          // ✅ Riabilita la tastiera: serve per scrivere la soluzione
          abilitaTastiera();
        }, 500);
      }
    }, 1000);
  }, 500);
}

// ============================================================
// MODAL PREMIO
// ============================================================
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', async () => {
    SFX.click();
    if (rewardModal) rewardModal.style.display = 'none';
    [cardRound, cardConsonanti, cardVocali, cardJolly].forEach(c => {
      if (c) c.classList.remove('win-glow', 'shake-fail');
    });

    // JOLLY su Bancarotta / Riparti da Zero
    if ((lastPrize === 'Bancarotta' || lastPrize === 'Riparti da Zero') && hasJolly) {
      const usa = await showAlert({
        title: 'Jolly disponibile!',
        message: `È uscito "${lastPrize}". Vuoi usare il tuo Jolly per evitare il malus?`,
        danger: false,
        buttons: [
          { label: 'Usa Jolly', type: 'primary', value: true },
          { label: 'No, accetto', type: 'secondary', value: false }
        ]
      });
      if (usa) {
        hasJolly = false;
        aggiornaUI();
        SFX.jolly();
        salvaPartita();
        resetToSubjectWheel();
        return;
      }
    }

    if (lastPrize === 'Cambia Materia') { resetToSubjectWheel(); return; }

    if (lastPrize === 'Riparti da Zero') {
      await showAlert({
        title: '⚠️ Riparti da Zero',
        message: 'Ricomincerai dal Round 1 con 10 consonanti e 3 vocali.\n\nNessun jolly disponibile per evitarlo.',
        danger: true,
        buttons: [{ label: 'Ricomincia', type: 'danger', value: true }]
      });

      roundCount = INITIAL_ROUND;
      consonantiCount = INITIAL_CONSONANTI;
      vocaliCount = INITIAL_VOCALI;
      if (cardRound) cardRound.classList.add('shake-fail');
      if (cardConsonanti) cardConsonanti.classList.add('shake-fail');
      if (cardVocali) cardVocali.classList.add('shake-fail');
      aggiornaUI();
      SFX.lose();
      triggerDefeatEffects();
      salvaPartita();
      setTimeout(() => {
        [cardRound, cardConsonanti, cardVocali].forEach(c => {
          if (c) c.classList.remove('shake-fail');
        });
        resetToSubjectWheel();
      }, 800);
      return;
    }

    if (lastPrize === 'Supera il Round') {
      roundCount += 1;
      if (cardRound) cardRound.classList.add('win-glow');
      if (cardConsonanti) cardConsonanti.classList.add('win-glow');
      if (cardVocali) cardVocali.classList.add('win-glow');
      if (valRound) valRound.textContent = roundCount;
      bump(valRound);
      aggiornaBestScore(roundCount);
      SFX.win();
      salvaPartita();
      setTimeout(() => {
        [cardRound, cardConsonanti, cardVocali].forEach(c => {
          if (c) c.classList.remove('win-glow', 'shake-fail');
        });
        resetToSubjectWheel();
      }, 2400);
      return;
    }

    switch (lastPrize) {
      case 'Vinci 1 Consonante':
        consonantiCount += 1;
        bump(valConsonanti);
        showQuestionPhase();
        break;
      case 'Perdi 1 Consonante':
        consonantiCount = Math.max(0, consonantiCount - 1);
        bump(valConsonanti);
        showQuestionPhase();
        break;
      case 'Vinci 1 Vocale':
        vocaliCount += 1;
        bump(valVocali);
        showQuestionPhase();
        break;
      case 'Perdi 1 Vocale':
        vocaliCount = Math.max(0, vocaliCount - 1);
        bump(valVocali);
        showQuestionPhase();
        break;
      case 'Jolly':
        if (!hasJolly) {
          hasJolly = true;
          aggiornaUI();
          SFX.jolly();
          await showAlert({
            title: 'Jolly ottenuto!',
            message: 'Hai ottenuto il Jolly. Potrai usarlo per evitare Bancarotta o Riparti da Zero.',
            buttons: [{ label: 'Continua', type: 'primary', value: true }]
          });
        } else {
          SFX.error();
          await showAlert({
            title: 'Jolly già posseduto',
            message: 'Hai già un Jolly! Non è possibile accumularne più di uno.',
            buttons: [{ label: 'Continua', type: 'primary', value: true }]
          });
        }
        showQuestionPhase();
        break;
      case 'Cecchino':
        cecchinoAttivo = true;
        SFX.cecchino();
        await showAlert({
          title: '🎯 Modalità Cecchino attivata!',
          message: 'Nella prossima domanda avrai UN SOLO TENTATIVO.\n\nNon potrai cercare lettere: dovrai scrivere la soluzione completa.\n\nSe sbagli, la partita termina.',
          danger: true,
          buttons: [{ label: 'Ho capito', type: 'danger', value: true }]
        });
        salvaPartita();
        showQuestionPhase();
        break;
      case 'Cambia Domanda':
        cambiaDomandaAttivo = true;
        SFX.swap();
        await showAlert({
          title: '🔄 Modalità Cambia Domanda attivata!',
          message: 'Nella prossima domanda potrai scegliere se cambiarla con una nuova domanda della stessa materia.',
          danger: false,
          buttons: [{ label: 'Continua', type: 'primary', value: true }]
        });
        salvaPartita();
        showQuestionPhase();
        break;
      case 'Bancarotta':
        await showAlert({
          title: '⚠️ Bancarotta',
          message: 'Perderai tutte le consonanti e le vocali.\nDovrai risolvere la prossima domanda solo con la soluzione completa.\n\nNessun jolly disponibile per evitarlo.',
          danger: true,
          buttons: [{ label: 'Accetto', type: 'danger', value: true }]
        });

        consonantiCount = 0;
        vocaliCount = 0;
        if (cardConsonanti) cardConsonanti.classList.add('shake-fail');
        if (cardVocali) cardVocali.classList.add('shake-fail');
        SFX.lose();
        triggerDefeatEffects();
        aggiornaUI();
        salvaPartita();
        setTimeout(() => {
          [cardConsonanti, cardVocali].forEach(c => {
            if (c) c.classList.remove('shake-fail');
          });
          showQuestionPhase();
        }, 700);
        return;
    }

    aggiornaUI();
    salvaPartita();
    setTimeout(() => {
      [cardRound, cardConsonanti, cardVocali].forEach(c => {
        if (c) c.classList.remove('win-glow', 'shake-fail');
      });
    }, 2500);
  });
}

// ============================================================
// MENU / MUTE
// ============================================================
if (btnBackToMenu) {
  btnBackToMenu.addEventListener('click', async () => {
    SFX.click();
    const conferma = await showAlert({
      title: 'Tornare al menu?',
      message: 'La partita verrà salvata e potrai riprenderla.',
      buttons: [
        { label: 'Sì, Menu', type: 'primary', value: true },
        { label: 'Annulla', type: 'secondary', value: false }
      ]
    });
    if (conferma) {
      salvaPartita();
      mostraSplash();
    }
  });
}

if (btnMute) {
  btnMute.addEventListener('click', () => {
    initAudio();
    audioMuted = !audioMuted;
    btnMute.textContent = audioMuted ? '🔇' : '🔊';
    btnMute.classList.toggle('muted', audioMuted);
    if (audioMuted) {
      stopMusic();
    } else {
      musicPlaying = false;
      startMusic();
      SFX.click();
    }
  });
}

// ============================================================
// EVENTI SPLASH
// ============================================================
if (btnNewGame) {
  btnNewGame.addEventListener('click', () => {
    initAudio();
    avviaNuovaPartita();
  });
}

if (btnResumeGame) {
  btnResumeGame.addEventListener('click', () => {
    initAudio();
    avviaRipresa();
  });
}

// ============================================================
// AVVIO MUSICA AL PRIMO GESTO (compatibilità tablet)
// ============================================================
let musicStarted = false;
function tryStartMusicOnce() {
  if (musicStarted) return;
  musicStarted = true;
  initAudio();
  let tentativi = 0;
  const interval = setInterval(() => {
    tentativi++;
    if (!audioCtx) { clearInterval(interval); return; }
    if (audioCtx.state === 'running') {
      if (!audioMuted && !musicPlaying) startMusic();
      clearInterval(interval);
      return;
    }
    if (tentativi > 20) clearInterval(interval);
  }, 100);
  document.removeEventListener('touchstart', tryStartMusicOnce);
  document.removeEventListener('click', tryStartMusicOnce);
  document.removeEventListener('keydown', tryStartMusicOnce);
}
document.addEventListener('touchstart', tryStartMusicOnce, { once: true });
document.addEventListener('click', tryStartMusicOnce, { once: true });
document.addEventListener('keydown', tryStartMusicOnce, { once: true });

// ============================================================
// AVVIO
// ============================================================
drawWheel();
if (spinBtn) {
  spinBtn.addEventListener('click', spinWheel);
}
mostraSplash();

window.addEventListener('beforeunload', () => {
  if (gameContainer && !gameContainer.classList.contains('hidden')) salvaPartita();
});
