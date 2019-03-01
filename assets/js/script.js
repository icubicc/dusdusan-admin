/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document jQuery Choices */

// init Choices
const $choice = document.querySelectorAll('.js-choice');
if ($choice.length) {
	$choice.forEach(element => {
		if (!(element.offsetHeight === 0 && element.offsetWidth === 0)) {
			new Choices(element, {
				shouldSort: false
			});
		}
	});
}

jQuery(document).ready(function($) {

	// initialize magnificPopup
	$('.js-popup-inline').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		removalDelay: 200
	});

	$('.js-popup-modal').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		modal: true,
		removalDelay: 200
	});

	$(document).on('click', '.js-popup-close', function (event) {
		event.preventDefault();
		$.magnificPopup.close();
	});

});
