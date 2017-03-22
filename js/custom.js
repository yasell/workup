
/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura);

}
/* =================================
===  WOW ANIMATION             ====
=================================== */

wow = new WOW(
  {
    mobile: false
  });
wow.init();

// to top
jQuery(".to-top").click(function(){
	jQuery("html, body").animate({scrollTop:0},"slow");
});

$(document).ready(function($) {
	//developer funcitons
	pageWidget(['page1', 'page2']);
});
