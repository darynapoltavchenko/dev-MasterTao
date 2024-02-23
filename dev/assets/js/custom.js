$(document).ready(function(){
    $('#banner').slick({
        fade: true,
        dots: true,
        arrows: true,
        appendArrows: $('.banner-arrows'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            }
        ]

    });

    mobileOnlySlider("#slider-advantages", true, false, 1024);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
      var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        dots: $dots,
        arrows: $arrows,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
    
      slider.slick(settings);
    
      $(window).on("resize", function () {
        if ($(window).width() > 1024) {
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
    }


    $('.slider-template').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
            
        ]
    });
  

    const burger = document.querySelector('.btn-burger');
    const navigation = document.querySelector('.header__navigation');

    console.log(burger);

    const toggleMenu =()=> {
    burger.classList.toggle('open')
    navigation.classList.toggle('show');
    }

    burger.addEventListener('click', toggleMenu)

    const fileInput = document.querySelector('#fileInput');
    const fileName = document.querySelector('#file-name')

    fileInput.addEventListener('change', function() {
      //fileName.innerHTML = fileInput.value;    long name
      fileName.innerHTML = this.files[0].name; //short name
    })

    const typeTheckbox = document.querySelector('[type=checkbox]');

    typeTheckbox.closest('.input-column').classList.add('column-checkbox');

    const checkbox = document.querySelectorAll('[type="checkbox"]')

    console.log(checkbox);
    if(checkboxes.length > 0) {
        checkbox.forEach(test => {
            test.closest('.input-column').classList.add('column-checkbox')
        })
    }

    const file = document.querySelectorAll('.input-file')

    if(file.length > 0) {
        file.forEach(item => {
        item.closest('.input-column').style.paddingTop = '6px'
        })
    }

    function addClassCharter () {
        const section = document.querySelectorAll('section')
        section.forEach(item => item.classList.add('charter'))
    }

    document.querySelector('.home-page') ? addClassCharter : null
});