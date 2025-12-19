window.addEventListener('scroll', () => {
  document.querySelectorAll('.fly').forEach((img, i) => {
    img.style.transform = `translateY(${-window.scrollY * (0.4 + i*0.2)}px)`;
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
