window.addEventListener('scroll', () => {
  document.querySelectorAll('.fly').forEach((img, i) => {
    img.style.transform = `translateY(${-window.scrollY * (0.4 + i*0.2)}px)`;
  });

});


const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

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
