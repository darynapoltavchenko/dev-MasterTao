$(document).ready(function(){
    $('#banner').slick({
        fade: true,
        dots: true,
        arrows: true,
        appendArrows: $('.banner-arrows')
    });
  

    const burger = document.querySelector('.btn-burger');
    const navigation = document.querySelector('.header__navigation');

    console.log(burger);

    const toggleMenu =()=> {
    burger.classList.toggle('open')
    navigation.classList.toggle('show');
    }

    burger.addEventListener('click', toggleMenu)
});