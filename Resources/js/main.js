$(document).ready(function() {
  $('.carousel').slick({
    autoplaySpeed: 4000,
    autoplay: true,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  var userScroll = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - userScroll >  50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      userScroll = scrollTop;
    }
    else if (userScroll - scrollTop > 50) {
      $('.navbar').animate({top: 0}, 150);
      userScroll = scrollTop;
    }
  });


});
