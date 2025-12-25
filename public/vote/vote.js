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

/* 🔥 LOG-SCALED RENDER (ONLY REAL CHANGE) */
function renderTower(votes) {
  towerData.innerHTML = '';

  const entries = Object.entries(votes);

  // 1️⃣ Apply logarithmic scaling
  const scaled = entries.map(([name, count]) => {
    return {
      name,
      raw: count,
      scaled: Math.log(count + 1)
    };
  });

  // 2️⃣ Compute scaled total
  const totalScaled = scaled.reduce((sum, e) => sum + e.scaled, 0);

  // 3️⃣ Compute percentages
  scaled.forEach(e => {
    e.percent = totalScaled === 0 ? 0 : (e.scaled / totalScaled) * 100;
  });

  // 4️⃣ Sort by scaled strength
  scaled.sort((a, b) => b.percent - a.percent);

  // 5️⃣ Render
  scaled.forEach((e, i) => {
    const row = document.createElement('div');
    row.className = 'towerRow';
    row.style.top = `${142 + i * 54.6}px`;
    row.innerHTML = `
      <img src="media/driver-names/${e.name}.png">
      <span>${e.percent.toFixed(2)}%</span>
    `;
    towerData.appendChild(row);
  });
}

loadStats();
setInterval(loadStats, 3000);
