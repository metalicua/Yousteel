$(document).ready(function(){
    $('.main-slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1000,
    });
     $('.hall-slider').slick ({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        // prevArrow: $($teamArrowLeft),
        // nextArrow: $($teamArrowRight),
        responsive: [
            {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
        ]
    });

    $('.bars-img').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });
	$('.bars-slider').slick({
		
	});
	$('.additionally-box').slick({
		
	});
	 // scroll to top
	let $buttonToTop = $('.js_button_to_top'),
	  	$header = $('.header');
  $($buttonToTop).click(function(){
     
      $('html, body')
          .animate({scrollTop:$($header)
          .position().top}, 3000);
  });

  $(window).scroll(function(){
 
      if ( $(this).scrollTop() > 1500 ) {
          $($buttonToTop)
              .addClass('db')
      } 
      else {
          $($buttonToTop)
              .removeClass('db')         
      }   
  });
	 $('.nav-link').on('click', function () {
		 event.preventDefault();
        var $value = $(this).data('name');
        $('html, body')
            .animate({scrollTop:$($value)
            .position().top}, 3000);
            
    });
});