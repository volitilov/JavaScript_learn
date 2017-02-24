// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function Menu(elem) {
	this.save = function() {
		alert('Save');
	};
	this.load = function() {
		alert('Loader');
	};
	this.search = function() {
		alert('Searches');
	};

	var self = this;

	elem.onclick = function(e) {
		var target = e.target;
		var action = target.getAttribute('data-action');
		if (action) {
			self[action](); 
		}
	};
}

new Menu(menu);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

document.onclick = function(event) {
	if (!event.target.hasAttribute('data-counter')) return;
	var counter = event.target;
	counter.innerHTML++;
}
