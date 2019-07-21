
// Slider-head
$(document).ready(function(){
    $('.head-slider').slick({
        dots: true,
        nextArrow: '<i class="fas next fa-chevron-right"></i>',
        prevArrow: '<i class="fas prev fa-chevron-left"></i>'
    });
});


// Isotop filters
$( document ).ready(function() {
    var $container = $('.projects-grid');
    // filter buttons
    $('#filters button').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.projects-item', filter: selector });
      return false;
    });    
});

// slider posts

$(document).ready(function(){
    $('.posts-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<i class="fas next fa-chevron-circle-right"></i>',
        prevArrow: '<i class="fas prev fa-chevron-circle-left"></i>'
    });
});

