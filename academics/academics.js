
$(document).ready(function() {
  $('.navbarbutton').on('click', function() {
    $('navbar ul').toggleClass('show');
  });


  $('.slide').hide();
  $('.current').show();
  function goNext(){
     $('.current').addClass("before").removeClass("current");
        if($(".before").is(":last-child")){         
          $('.slide').first().addClass("current");
        }else{
           $(".before").next().addClass("current");          
        }
    
    $('.full').addClass("c-before").removeClass("full");    
      if($('.c-before').is(":last-child")){
        $('.circle').first().addClass("full")        
      }else{
       $('.c-before').next().addClass("full");
      }
    
    $('.t-active').addClass("t-before").removeClass("t-active");   
      if($('.t-before').is(":last-child")){
        $('.thumbs > img').first().addClass("t-active");       
      }else{
       $('.t-before').next().addClass("t-active");
      }

      $('.t-before').removeClass("t-before");
      $('.c-before').removeClass("c-before");    
      $('.before').fadeOut(200);
      $('.current').fadeIn(200);
      $('.before').removeClass("before");
  }
  function goPrev(){
     $('.current').addClass("before").removeClass("current");
        if($(".before").is(":first-child")){         
          $('.slide').last().addClass("current");
        }else{
           $(".before").prev().addClass("current");          
        }
    $('.full').addClass("c-before").removeClass("full");
    
      if($('.c-before').is(":first-child")){
        $('.circle').last().addClass("full")
        
      }else{
       $('.c-before').prev().addClass("full");
      }
    
     $('.t-active').addClass("t-before").removeClass("t-active");   
      if($('.t-before').is(":first-child")){
        $('.thumbs > img').last().addClass("t-active");       
      }else{
       $('.t-before').prev().addClass("t-active");
      }

      $('.t-before').removeClass("t-before");

    
      $('.t-before').removeClass("t-before")
      $('.c-before').removeClass("c-before")    
      $('.before').fadeOut(200);
      $('.current').fadeIn(200);
      $('.before').removeClass("before"); 
  }
  function generateThumbs(){
    for(var i=0; i!=$('.slide').length; i++){   
      var src = $('.slide:nth-child('+ (i+1) +') > img').attr('src');
      $('.thumbs').append('<img src="'+ src +'"class="thumb">');   
    }    
    $('.thumbs > img:nth-child(1)').addClass('t-active');
  }
  function getByIndex(){
       var index = Number($(this).index()) + 1;
      $('.current').addClass("before").removeClass("current");
       $('.slide:nth-child('+ index +')').addClass("current");
      
       $('.full').removeClass("full");
       $('.circle:nth-child('+ index +')').addClass("full");  
       $('.before').fadeOut(200);
       $('.current').fadeIn(200);
       $('.before').removeClass("before");     
       $('.t-active').removeClass("t-active");
       $('.thumbs > img:nth-child('+ index +')').addClass("t-active");
  }
  $(".next").on("click",goNext);
  $(".prev").on("click",goPrev);
  generateThumbs();
  
  $('.circle').on('click',getByIndex) 
  $('.thumb').on('click',getByIndex)



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









