document.addEventListener('DOMContentLoaded', function () {

  const container = document.querySelector('.images');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let counter = 0;

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  function prevSlide() {
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if (counter === 0) {
      counter = 4;
    }
    counter--;
    container.style.background = `url(img/image-${counter}.jpg)`;
  }

  function nextSlide() {
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    if (counter === 4) {
      counter = 0;
    }
    counter++;
    container.style.background = `url(img/image-${counter}.jpg)`;
   
  }
 
});