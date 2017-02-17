/* accordion.js v1.0.0 | MIT License | https://github.com/joaomosantos/accordion.js */
(function() {

	$.fn.accordion = function(options) {
		var defaults = {
			controlElement: $('.accordion-control'),
			contentElement: $('.accordion-content'),
			transitionSpeed: 400
		};

		var settings = $.extend({}, defaults, options);

		return this.each(function() {
			$(this).find(settings.contentElement).css('display', 'none');
			$(this).find(settings.controlElement).click(function(event) {
				event.preventDefault();
				$(this).next().slideToggle(settings.transitionSpeed);
			});
		});
	};

}(jQuery));