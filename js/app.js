$(document).foundation();

$(document).ready(function() {
  $("#owl-demo").owlCarousel({
	autoPlay : 2000,
    navigation: true,
	items: 3,
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
      ],
  });
 
});

$('#form_letter').click(function() {
     $('.form_background').css('display', 'block');
	$('html, body').animate({
    scrollTop: $('.form_background').offset().top
}, 1000);
 });
