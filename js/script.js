// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icon/left-arrov.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icon/right-arrov.svg"></button>',
//         responsive: [
//           {
//             breakpoint: 992,
//             settings: {
//               dots: true,
//               arrows: false,
//             }
//           }
//         ]
//       });
// });     
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    dots: false,
    nav: true,
    navText: ["",""], 
  });
});