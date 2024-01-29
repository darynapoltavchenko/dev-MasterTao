$(document).ready(function(){
    $('#banner').slick({
        arrows: false,
        dots: true,
        fade: true,
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