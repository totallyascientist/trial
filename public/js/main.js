const workSection = document.getElementById("work");
const images = document.querySelectorAll("#work .fly");

window.addEventListener("scroll", () => {
  const rect = workSection.getBoundingClientRect();
  const windowH = window.innerHeight;

  // Scroll progress: 0 → 1 → 2
  let progress = (windowH - rect.top) / windowH;
  progress = Math.max(0, Math.min(progress, 2));

  images.forEach((img, index) => {
    const delay = index * 0.3; // stagger
    const localProgress = Math.max(0, progress - delay);

    if (localProgress <= 0) {
      img.style.opacity = 0;
      img.style.transform = img.dataset.baseTransform;
      return;
    }

    img.style.opacity = 1;

    const moveY = Math.min(localProgress * 300, 900);
    img.style.transform = `translate(${img.dataset.x}, ${-50 - moveY}px)`;
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


