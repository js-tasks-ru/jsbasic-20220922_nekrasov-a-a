function initCarousel() {
  const body = document.body;

  const rightArrow = body.querySelector('.carousel__arrow_left');
  const leftArrow = body.querySelector('.carousel__arrow_right');
  const carousel = body.querySelector('.carousel__inner');
  const carChildWidth = carousel.querySelector('.carousel__slide').offsetWidth;
  const elementsCount = carousel.querySelectorAll('.carousel__slide').length;
  const carWidth = carChildWidth * elementsCount;

  let offset = 0;

  rightArrow.style.display = 'none';

  rightArrow.addEventListener('click', () => {
    offset -= carChildWidth;
    carousel.style.transform = `translateX(-${offset}px)`;


    if (offset <= 0) {
      rightArrow.style.display = 'none';
    } else {
      leftArrow.style.display = '';
    }
  });

  leftArrow.addEventListener('click', () => {
    offset += carChildWidth;
    carousel.style.transform = `translateX(-${offset}px)`;

    if (offset >= (carWidth - carChildWidth)) {
      leftArrow.style.display = 'none';
    } else {
      rightArrow.style.display = '';
    }
  });
}
