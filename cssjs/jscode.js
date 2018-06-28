var slideIndex = -1;
var slides = document.getElementsByClassName('slides');
var dots = document.getElementsByClassName('btns');
autoSlide(slideIndex)

function toSlide(n) {
  if (n >= slides.length) {
    n = 0;
  } else if (n < 0) {
    n = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    if (i != n) {
      slides[i].style.display = 'none';
    } else {
      slides[i].style.display = 'block';
    }
  }
  slideIndex = n
}

function autoSlide() {
  slideIndex++;
  toSlide(slideIndex);

  setTimeout(autoSlide, 5000);
}
