"use strict";

// Проверка поддержки браузера формата изображения webP
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); // end  Проверка поддержки браузера формата изображения webP

function ibg() {
  var ibg = document.querySelectorAll(".ibg");

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
$('.icon-menu').click(function (event) {
  $(this).toggleClass('active');
  $('.menu__body').toggleClass('active');
});
$(document).ready(function () {
  $('.slider__body').slick({
    dots: true,
    arrows: false,
    accessibility: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  });
});