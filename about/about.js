$(document).ready(function() {
  $('.navbarbutton').on('click', function() {
    $('navbar ul').toggleClass('show');
  });

   setInterval ('cursorAnimation()', 1000);
});

$(document).scroll(function() { 
   if($(window).width() > 1000) {
    if($(window).scrollTop() < 60) {
        $('navbar ul li').removeClass('short');
        $('.logo').removeClass('short');
    } else {
        $('navbar ul li').addClass('short');
        $('.logo').addClass('short');
    }
   } else{
     $('.logo').removeClass('short');
     $('navbar ul li').removeClass('short');
   }
});

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}


