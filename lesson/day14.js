// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// var Track = function(params) {
// 	this.name = params.name;
// 	this.url = params.url;

// 	/*this.playTrack = function() {
// 		console.log('We started playing', this.name);
// 	}*/
// };

// // делаем прототип для полнаценной работы с методами
// Track.prototype.playTrack = function() {
// 	console.log('We started playing', this.name);
// }

// var track01 = new Track({
// 	name: 'track01',
// 	url: 'track01.mp3'
// });

// var track02 = new Track({
// 	name: 'track02',
// 	url: 'track02.mp3'
// });

// track01.playTrack();

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// делаем конструктор
// var YoutubeTrack = function(params) {
// 	Track.apply(this, arguments);
// 	this.image = params.image;
// }

// // наследование методов
// YoutubeTrack.prototype = Object.create(Track.prototype);

// // присваиваем собственный конструктор класса
// YoutubeTrack.prototype.constructor = YoutubeTrack;

// // переопределяем метод
// YoutubeTrack.prototype.playTrack = function() {
// 	console.log('Hello youtube', this.name);
// }


// // создание экземпляра класса
// var youtubeTrack01 = new YoutubeTrack({
// 	name: 'youtubeTrack01',
// 	url: 'youtubeTrack01.mp3',
// 	image: 'youtubeTrack01.jpg'
// });

// var youtubeTrack02 = new YoutubeTrack({
// 	name: 'youtubeTrack02',
// 	url: 'youtubeTrack02.mp3',
// 	image: 'youtubeTrack02.jpg'
// });

// youtubeTrack01.playTrack();


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// добавляем класу примеси
// var extend = function(target) {
// 	if (!arguments[1]) {
// 		return;
// 	}
// 	for (var i = 1; i < arguments.length; i++) {
// 		var source = arguments[i];

// 		for (var prop in source) {
// 			if (!target[prop] && source.hasOwnProperty(prop)) {
// 				target[prop] = source[prop];
// 			}
// 		}
// 	}
// }

// var Track = function(name) {
// 	this.name = name;
// }


// var Playlist = function(name) {
// 	this.name = name;
// }


// var nameMixin = {
// 	getName: function() {
// 		return this.name;
// 	}
// }

// var playMixin = {
// 	play: function() {
// 		console.log(this.name, 'started playing');
// 	}
// }

// extend(Track.prototype, nameMixin, playMixin);
// extend(Playlist.prototype, nameMixin, playMixin);

// var supertrack = new Track('Super track');
// var coolPlaylist = new Playlist('Cool playlist');


// console.log(supertrack);
// console.log(supertrack.getName());
// supertrack.play();

// console.log(coolPlaylist);
// console.log(coolPlaylist.getName());
// coolPlaylist.play();

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
var sport = {
	tournament: 'The master',
	players: [
		{
			name: 'Bob',
			age: 32
		},
		{
			name: 'Sam',
			age: 54
		}
	],
	show: function() {
		var self = this;
		this.players.forEach(function(person) {
			console.log(person, self.tournament);
		})
	}
}

sport.show();