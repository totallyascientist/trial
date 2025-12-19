let hasAnimated = false;

const workSection = document.getElementById('work');
const images = document.querySelectorAll('.fly');
const aboutSection = document.getElementById('about-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        lockScroll();
        animateImages();
      }
    });
  },
  { threshold: 0.6 }
);

observer.observe(workSection);

function animateImages() {
  // Image 1
  images[0].classList.add('out');

  // Image 2 (delay)
  setTimeout(() => {
    images[1].classList.add('out');
  }, 400);

  // Image 3 (delay)
  setTimeout(() => {
    images[2].classList.add('out');
  }, 800);

  // Reveal about section AFTER all animations
  setTimeout(() => {
    unlockScroll();
    aboutSection.classList.remove('hidden');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }, 1600);
}

/* Scroll lock helpers */
function lockScroll() {
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.body.style.overflow = '';
}



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

