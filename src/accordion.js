/* accordion.js v1.1.0 | MIT License | https://github.com/joaomosantos/accordion.js */
;(function($) {

	$.fn.accordion = function(options) {
		var previous = null;

		var defaults = {
			controlElement: $('.accordion-control'),
			contentElement: $('.accordion-content'),
			transitionSpeed: 400,
			ease: 'swing',
			multipleCollapse: true,
			onOpened: function(el) {},
			onClosed: function(el) {}
		};
		
		var settings = $.extend(defaults, options);

		$.extend($.easing, {
			back: function (x, t, b, c, d, s) {
				if (s == undefined) s = 1.70158; 
				if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) +1) * t - s)) + b;
				return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
			},
			bounce: function (x, t, b, c, d) {
				if ((t /= d) < (1 / 2.75)) {
					return c * (7.5625 * t * t) + b;
				} else if (t < (2 / 2.75)) {
					return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
				} else if (t < (2.5/2.75)) {
					return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
				} else {
					return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
				}
			},
			circ: function (x, t, b, c, d) {
				if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
				return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
			},
			cubic: function (x, t, b, c, d) {
				if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
				return c / 2 * ((t -= 2) * t * t + 2) + b;
			},
			elastic: function (x, t, b, c, d) {
				var s = 1.70158; var p = 0; var a = c;
				if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5);
				if (a < Math.abs(c)) { a = c; var s = p / 4; }
				else var s = p / (2 * Math.PI) * Math.asin (c / a);
				if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p )) + b;
				return a * Math.pow(2, -10 * (t -=1 )) * Math.sin((t * d - s) * (2 * Math.PI) / p ) * .5 + c + b;
			},
			expo: function (x, t, b, c, d) {
				if (t == 0) return b;
				if (t == d) return b + c;
				if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
				return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
			},
			quad: function (x, t, b, c, d) {
				if ((t /= d / 2) < 1) return c / 2 * t * t + b;
				return -c / 2 * ((--t) * (t - 2) - 1) + b;
			},
			quart: function (x, t, b, c, d) {
				if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
				return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
			},
			quint: function (x, t, b, c, d) {
				if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
				return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
			},
			sine: function (x, t, b, c, d) {
				return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
			}
		});

		var collapse = function(elementCurrent, elementPrevious) {
			var isOpen = elementCurrent.hasClass('opened');
			if(isOpen === false) {
				if(settings.multipleCollapse === false && elementPrevious !== null) {
					elementPrevious.next().stop().slideUp(settings.transitionSpeed, settings.ease, function() {
						elementPrevious.removeClass('opened');
					});
				}
				elementCurrent.next().stop().slideDown(settings.transitionSpeed, settings.ease, function() {
					elementCurrent.addClass('opened');
					settings.onOpened(elementCurrent);
				});
			} else if(isOpen === true) {
				elementCurrent.next().stop().slideUp(settings.transitionSpeed, settings.ease, function() {
					elementCurrent.removeClass('opened');
					settings.onClosed(elementCurrent);
				});
			}
		};

		return this.each(function() {
			$(this).find(settings.contentElement).hide();
			$(this).find(settings.controlElement).click(function(event) {
				event.preventDefault();
				collapse($(this), previous);
				previous = $(this);
			});
		});
	};

}(jQuery));