// if ($(window).width() < 600) {
//   $("div.justify-content-center").removeClass(".justify-content-center")
// } else {
// }

document.addEventListener('DOMContentLoaded', () => {

  //===== MICRO-SLIDER begin
  const __ms = document.querySelector('.micro-slider');
  const __msSlider = new MicroSlider(__ms, {
    indicators: false,
    indicatorText: ''
  });
  const hammer = new Hammer(__ms);
  const __msTimer = 2000;
  let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);

  //detect mouseenter event
  __ms.onmouseenter = function(e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' mouse detected');
  }

  //detect mouseleave event
  __ms.onmouseleave = function(e) {
    clearInterval(__msAutoplay);
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' mouse detected');
  }

  //detect mouseclick event
  __ms.onclick = function(e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' mouse detected');
  }

  //detect gesture tap event with hammer js library
  hammer.on('tap', function(e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' gesture detected');
  });

  //detect gesture swipe event with hammer js library
  hammer.on('swipe', function(e) {
    clearInterval(__msAutoplay);
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' gesture detected');
  });

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0) {
    slideLink.forEach(el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  //===== MICRO-SLIDER end

});

$(".parcel-button").on("click", function() {
  alert("Your order has been recieved and your package would be pick-up and sent soon, kindly wait for our customer representative to give you a call after processing your data");
  location.href = "index.html";
});
