// toast.js

(function(arr) {
	for (let i=0;i<arr.length;i++) {
		let el = arr[i]
		for(let c=0;c<el.children.length;c++) {
			if (el.children[c].getAttribute('class').indexOf('btn-clear')) {
				let clear = el.children[c]
				clear.addEventListener('click',function(e) {
					e.preventDefault();
					clear.parentElement.setAttribute('class',`${clear.parentElement.getAttribute('class')} hide`)
				})
				// return false
			}
		}
	}
})(document.querySelectorAll('.toast'))