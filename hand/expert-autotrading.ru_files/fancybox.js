//fancybox.js 2013/10/25 10:29 Ivan Demenkov <ivan@demenkov.com> $
(function ($) {
	'use strict'
	Drupal.behaviors.fancybox = {
		attach: function (context, settings) {
			if ($().fancybox) {
				$('a.fancybox').fancybox({
					maxWidth	: 800,
					maxHeight	: 600,
					fitToView	: false,
					width		: '70%',
					height		: '70%',
					autoSize	: false,
					closeClick	: false,
					openEffect	: 'none',
					closeEffect	: 'none',
					helpers: {
						overlay: {
							locked: false
						}
					}
				});
				$('#requests-ajax-wrapper-caller').fancybox({
					height		: 'auto',
					width		: 550,
					autoSize	: false,
					helpers: {
						overlay: {
							locked: false
						}
					}
				});
			}
		}
	};
})(jQuery);