/* accordion.js v1.0.0 | MIT License | https://github.com/joaomosantos/accordion.js */
(function() {

	$.fn.accordion = function(options) {
		var defaults = {
			title: $('.title-accordion'),
			text: $('.text-accordion'),
			duration: 'slow'
		};

		var settings = $.extend({}, defaults, options);

		return this.each(function() {
			$(this).find(settings.text).css('display', 'none');
			$(this).find(settings.title).click(function(event) {
				event.preventDefault();
				$(this).next().slideToggle(settings.duration);
			});
		});
	};

}(jQuery));