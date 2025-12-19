const hero = document.querySelector('.full-bg');
const work = document.getElementById('work');
const about = document.querySelectorAll('.full-bg')[1];
const images = document.querySelectorAll('.fly');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  const heroEnd = hero.offsetTop + hero.offsetHeight;
  const aboutStart = about.offsetTop;

  // OUTSIDE animation window
  if (scrollY < heroEnd || scrollY > aboutStart) {
    images.forEach(img => img.style.opacity = 0);
    return;
  }

  // NORMALISED PROGRESS (0 → 1)
  const progress = (scrollY - heroEnd) / (aboutStart - heroEnd);

  images.forEach((img, index) => {
    const delay = index * 0.25;       // STRONG stagger
    const local = Math.max(0, Math.min(1, (progress - delay) / 0.5));

    img.style.opacity = local > 0 ? 1 : 0;

    const startY = vh * 0.9;          // bottom
    const endY = -vh * 1.1;           // fully gone top
    const y = startY + (endY - startY) * local;

    img.style.transform = img.classList.contains('fly-1')
      ? `translate(-50%, ${y}px)`
      : `translateY(${y}px)`;
  });
});



document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = carousel.querySelectorAll('img');
  const prevBtn = carousel.querySelector('.carousel-btn.left');
  const nextBtn = carousel.querySelector('.carousel-btn.right');

  let index = 0;
  const imageWidth = 280; // image width + gap

  nextBtn.addEventListener('click', () => {
    if (index < images.length - 1) {
      index++;
      track.style.transform = `translateX(-${index * imageWidth}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * imageWidth}px)`;
    }
  });
});




