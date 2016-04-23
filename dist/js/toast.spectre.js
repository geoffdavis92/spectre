'use strict';

// toast.js

(function (arr) {
	for (var i = 0; i < arr.length; i++) {
		var el = arr[i];
		for (var c = 0; c < el.children.length; c++) {
			if (el.children[c].getAttribute('class').indexOf('btn-clear')) {
				(function () {
					var clear = el.children[c];
					clear.addEventListener('click', function (e) {
						e.preventDefault();
						console.log('TOAST CLICK');
						clear.parentElement.setAttribute('class', clear.parentElement.getAttribute('class') + ' hide');
					});
					// return false
				})();
			}
		}
	}
})(document.querySelectorAll('.toast'));