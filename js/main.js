
//////// HEADER SLIDER ////////
$(function(){
    $('.slider div:gt(0)').hide();
    setInterval(function(){$('.slider > :first-child').fadeOut(1500).next('div').fadeIn(1500).end().appendTo('.slider');}, 3000);
});

//////// BURGER MENU ////////
$(".nav__burger").on('click', () => {
    $(".nav .nav__list").slideToggle(800);
});

//////// OWL CAROUSELS ////////
$(document).ready(function(){
    //  IN INGREDIENTS SECTION
    $('.owl-one').owlCarousel({
        margin:50,  // margin between items
        items:1,    // display items
        /* dots:true, //controls dot
        dotsEach:true, */
        dotsContainer: 'content__controls', //custon controls define container

        // custom controls on drag end toggle, add class active
        onDragged :function(){  
            const indexItem = $('.owl-item.active').index(); 
            $('.content__controls').children().each(function(){ $(this).find( "img" ).removeClass('active')})
            $('.content__controls').children().eq(indexItem).find( "img" ).addClass('active');
        },   
    })
    //  IN REVIEWS SECTION
    $('.owl-two').owlCarousel({
        margin:50,  // margin between items
        items:1,    // display items
        loop: true, // infinity loop
        //autoplay
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 2000,
        //controls
        nav: true,
        navSpeed: 2000,
        navText: [$('.controls .controls__left'),$('.controls .controls__right')], //custon controls define
    })
});

// custom controls, trigger slider
$('.content__control').click(function () {
    $('.owl-one').trigger('to.owl.carousel', [$(this).index(), 1500]);
});

// custom controls on click toggle, add class active
$(".content__control__img").on('click', e => {
    if ( !$(e.target).hasClass("active") ) {
        $('.content__control__img.active').removeClass('active');
        $(e.target).addClass('active'); 
    } 
});