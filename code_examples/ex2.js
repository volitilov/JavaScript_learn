// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// добавляем класу примеси
var extend = function(target) {
	if (!arguments[1]) {
		return;
	}
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];

		for (var prop in source) {
			if (!target[prop] && source.hasOwnProperty(prop)) {
				target[prop] = source[prop];
			}
		}
	}
}

var Track = function(name) {
	this.name = name;
}


var Playlist = function(name) {
	this.name = name;
}


var nameMixin = {
	getName: function() {
		return this.name;
	}
}

var playMixin = {
	play: function() {
		console.log(this.name, 'started playing');
	}
}

extend(Track.prototype, nameMixin, playMixin);
extend(Playlist.prototype, nameMixin, playMixin);

var supertrack = new Track('Super track');
var coolPlaylist = new Playlist('Cool playlist');


console.log(supertrack);
console.log(supertrack.getName());
supertrack.play();

console.log(coolPlaylist);
console.log(coolPlaylist.getName());
coolPlaylist.play();