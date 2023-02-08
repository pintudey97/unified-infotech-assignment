$('.banner-slider').owlCarousel({
    loop:true,
    autoPlay:true,
    nav:false,
    dots:true,
    items:1,
    dotsData: true,
});

$('.testimonials-carousel').owlCarousel({
    loop:true,
    autoPlay:true,
    nav:true,
    dots:false,
    items:1,
    navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    animateOut: 'fadeOut'
});
$('.new-updates-carousel').owlCarousel({
    loop:true,
    autoPlay:true,
    nav:true,
    dots:false,
    items:1,
    navText:["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
    animateOut: 'fadeOut'
});

$(".scroll-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#jobs").offset().top
    }, 2000);
});


$(window).scroll(function(){
    var sticky = $('#header'),
        scroll = $(window).scrollTop();
    if (scroll >= 200) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });