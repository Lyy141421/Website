var slideIndex = -1;
var slides = document.getElementsByClassName('slides');
var dots = document.getElementsByClassName('btns');
var container = document.getElementsByTagName('body');
autoSlide(slideIndex);

container.style.setProperty('--device-res', screen.availWidth * window.devicePixelRatio + 'px');

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

function myMap() {
  var mackenzie = {lat: 45.384869, lng: -75.698006};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12, center: mackenzie
  });
  var marker = new google.maps.Marker({position: mackenzie, map: map});
}
