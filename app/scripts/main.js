$(document).ready(function () {

  // button up 
  jQuery(function (f) {
    var element = f('.scrolltop');
    f(window).scroll(function () {
      element['fade' + (f(this).scrollTop() > 220 ? 'In' : 'Out')](500);
    });
  });
  $('.scrolltop').click(function () {
    $('body,html').animate({
      scrollTop: 0,
    }, 800);
    return false;
  });
  // button up end


  // scroll button
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 700);
  }
  $('[data-scroll]').on('click', scrollToSection);
  // scroll button end

  // slider
  var swiper = new Swiper('.mainSlider-js', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


  var swiper = new Swiper('.object-js', {
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper('.partners-js', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });
  // slider end



  // hamburger
  $('.hamburger').click(function () {
    $(this).toggleClass('openClose');
    $('.mnu-js').toggleClass('mobileMnu-js');
    $('.hamburger__line').toggleClass('lineBg');
  });

  $('.mnu-js').click(function () {
    $(this).removeClass('mobileMnu-js');
    $('.hamburger').removeClass('openClose');
    $('.hamburger__line').removeClass('lineBg');
  });
  // hamburger end

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [40.945841, 72.995408],
        zoom: 17,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: '"Жилой комплекс "Достук"',
        balloonContent: 'г. Жалал-Абад ул. Б. Осмонова на против стадиона Курманбек'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'images/marker.svg',
        // Размеры метки.
        iconImageSize: [50, 62],
      });
    myMap.geoObjects
      .add(myPlacemark)
  });






  // map end
























});
