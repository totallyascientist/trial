const END = new Date('2025-12-27T23:59:00Z');
const TOWER_END = new Date('2025-12-27T23:59:00Z');

const drivers = [
  'rose','tzuyu','jay','bang chan','winter','chaewon','sullyoon','lisa',
  'sana','mingyu','mina','nayeon','jungwon','karina','vernon','jihyo',
  'ning ning','jeongyeon','dino','felix'
];

let selected = null;

const grid = document.getElementById('grid');
const countdown = document.getElementById('countdown');
const towerCountdown = document.getElementById('towerCountdown');
const towerData = document.getElementById('towerData');

/* GRID */
drivers.forEach(name => {
  const d = document.createElement('div');
  d.className = 'card';
  d.innerHTML = `<img src="media/driver-photos/${name}.png">`;
  d.onclick = () => {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    d.classList.add('selected');
    selected = name;
    document.getElementById('voteBtn').style.display = 'block';
  };
  grid.appendChild(d);
});

/* COUNTDOWN */
function renderCountdown() {
  const t = END - new Date();
  if (t <= 0) {
    countdown.innerHTML = 'VOTING CLOSED';
    towerCountdown.innerHTML = 'VOTING CLOSED';
    return;
  }

  const d = Math.floor(t / 86400000);
  const h = Math.floor(t / 3600000) % 24;
  const m = Math.floor(t / 60000) % 60;
  const s = Math.floor(t / 1000) % 60;

  countdown.innerHTML = `
    <span class="countdown-unit"><div class="countdown-value">${d}</div><div class="countdown-label">days</div></span> :
    <span class="countdown-unit"><div class="countdown-value">${h}</div><div class="countdown-label">hours</div></span> :
    <span class="countdown-unit"><div class="countdown-value">${m}</div><div class="countdown-label">minutes</div></span> :
    <span class="countdown-unit"><div class="countdown-value">${s}</div><div class="countdown-label">seconds</div></span>
  `;
}

setInterval(renderCountdown, 1000);
renderCountdown();

/* VOTE */
document.getElementById('voteBtn').onclick = async () => {
  if (!selected) return;

  await fetch('/vote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ driver: selected })
  });

  document.getElementById('overlayImg').src = `media/completion-photos/${selected}.png`;
  document.getElementById('overlay').style.display = 'flex';
  loadStats();
};

/* TOWER */
async function loadStats() {
  const res = await fetch('/stats', { cache: 'no-store' });
  const votes = await res.json();
  renderTower(votes);
}

/* =========================
   GUARANTEED-MOTION LOG SCALE
   ========================= */
function renderTower(votes) {
  towerData.innerHTML = '';

  const entries = Object.entries(votes);
  entries.sort((a, b) => b[1] - a[1]); // raw vote order

  const ALPHA = 1.15; // perceptual gain (critical)
  const weights = entries.map(e => Math.pow(Math.log(e[1] + 1), ALPHA));
  const totalWeight = weights.reduce((a, b) => a + b, 0) || 1;

  entries.forEach((e, i) => {
    const weight = Math.pow(Math.log(e[1] + 1), ALPHA);
    const percent = (weight / totalWeight) * 100;

    const row = document.createElement('div');
    row.className = 'towerRow';
    row.style.top = `${142 + i * 54.6}px`;
    row.innerHTML = `
      <img src="media/driver-names/${e[0]}.png">
      <span>${percent.toFixed(2)}%</span>
    `;
    towerData.appendChild(row);
  });
}

loadStats();
setInterval(loadStats, 3000);
