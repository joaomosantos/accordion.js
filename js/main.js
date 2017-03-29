$(function() {
	$('.accordion').accordion();

  $('.accordion-control').click(function() {
    $(this).toggleClass('opened');
  });

  $('pre').mCustomScrollbar({
    axis:"x",
    theme:"light",
    scrollbarPosition: "outside"
  });
});