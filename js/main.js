$(function() {
	$('.accordion').accordion();
	$('pre').mCustomScrollbar({
		axis:"x",
		theme:"light",
		scrollbarPosition: "outside"
	});

	$('.accordion-control').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('opened');
	});
});