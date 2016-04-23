'use strict';

// menu.js

Array.prototype.each = function (fn) {
	for (var i = 0; i < this.length; i++) {
		fn(this[i], i, this);
	}
};

var triggers = [],
    arrowArr = [],
    dataToggleMenu = document.querySelectorAll('[data-toggle="menu"]'),
    menuBgOverlay = document.querySelector('.menu-bg-click'),
    arrows = document.querySelectorAll('.arrow');

for (var x = 0; x < dataToggleMenu.length; x++) {
	triggers.push(dataToggleMenu[x]);
}
for (var i = 0; i < arrows.length; i++) {
	arrowArr.push(arrows[i]);
}

triggers.each(function (el) {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		var menu = el.getAttribute('data-target');
		menu = document.querySelector('.menu-container#' + menu);
		if (menu.getAttribute('class').search('hide') >= 0) {
			// isHidden
			menu.setAttribute('class', menu.getAttribute('class').replace('hide', '') + ' menu-active');
		} else {
			// isVisible
			menu.setAttribute('class', menu.getAttribute('class').replace('menu-active', '') + ' hide');
		}
	});
});

arrowArr.each(function (el) {
	el.addEventListener('click', function (e) {
		e.preventDefault();
		if (el.getAttribute('class').indexOf('reverse') >= 0) {
			el.setAttribute('class', '' + el.getAttribute('class').replace('reverse', ''));
		} else {
			el.setAttribute('class', el.getAttribute('class') + ' reverse');
		}
	});
});