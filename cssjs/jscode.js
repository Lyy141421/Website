var slideIndex = 0;
autoSlide(slideIndex)

function toSlide(n) {
  var slides = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('btns');
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
  var slides = document.getElementsByClassName('slides');
  toSlide(slideIndex);
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  setTimeout(autoSlide, 3000);
}
