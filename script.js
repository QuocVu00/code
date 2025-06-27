// Simple confetti effect
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const confettiCount = 100;
const confetti = [];

for (let i = 0; i < confettiCount; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * confettiCount,
    color: `hsl(${Math.random() * 360}, 70%, 50%)`,
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    update(p);
  });
  requestAnimationFrame(draw);
}

function update(p) {
  p.y += Math.cos(p.d) + 1 + p.r / 2;
  p.x += Math.sin(p.d);

  if (p.y > canvas.height) {
    p.y = Math.random() * -20;
    p.x = Math.random() * canvas.width;
  }
}

draw();
