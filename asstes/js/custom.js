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


// window.onscroll = function() {myFunction()};
// var header = document.getElementById("header");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


$(window).scroll(function(){
    var sticky = $('#header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 200) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
  });