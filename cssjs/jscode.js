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
      dots[i].className = dots[i].className.replace(" active", "");
    } else {
      slides[i].style.display = 'block';
      dots[i].className += ' active';
    }
  }
  slideIndex = n
}

function autoSlide() {
  slideIndex++;
  toSlide(slideIndex);

  setTimeout(autoSlide, 5000);
}
