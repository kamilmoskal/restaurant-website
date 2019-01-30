
//////// SLIDER ////////
$(function(){
    $('.slider div:gt(0)').hide();
    setInterval(function(){$('.slider > :first-child').fadeOut(1500).next('div').fadeIn(1500).end().appendTo('.slider');}, 3000);
});

//////// BURGER MENU ////////
$(".nav__burger").on('click', () => {
    $(".nav .nav__list").slideToggle(800);
});

