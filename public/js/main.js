const workSection = document.getElementById("work");
const images = document.querySelectorAll("#work .fly");

window.addEventListener("scroll", () => {
  const rect = workSection.getBoundingClientRect();
  const windowH = window.innerHeight;

  // 🔹 Start ONLY after section fully enters viewport
  if (rect.top > 0) {
    images.forEach(img => img.style.opacity = 0);
    return;
  }

  // Progress AFTER hero is gone
  let progress = Math.abs(rect.top) / windowH;
  progress = Math.max(0, Math.min(progress, 3));

  images.forEach((img, index) => {
    const delay = index * 0.8;   // 🔹 MUCH larger delay
    const local = progress - delay;

    if (local <= 0) {
      img.style.opacity = 0;
      img.style.transform = `translateY(0)`;
      return;
    }

    img.style.opacity = 1;

    const moveY = Math.min(local * 350, 1200);
    img.style.transform = `translateY(-${moveY}px)`;
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



