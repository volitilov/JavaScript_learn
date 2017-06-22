// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
var Track = function(params) {
	this.name = params.name;
	this.url = params.url;

	/*this.playTrack = function() {
		console.log('We started playing', this.name);
	}*/
};

// делаем прототип для полнаценной работы с методами
Track.prototype.playTrack = function() {
	console.log('We started playing', this.name);
}

var track01 = new Track({
	name: 'track01',
	url: 'track01.mp3'
});

var track02 = new Track({
	name: 'track02',
	url: 'track02.mp3'
});

track01.playTrack();

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// делаем конструктор
var YoutubeTrack = function(params) {
	Track.apply(this, arguments);
	this.image = params.image;
}

// наследование методов
YoutubeTrack.prototype = Object.create(Track.prototype);

// присваиваем собственный конструктор класса
YoutubeTrack.prototype.constructor = YoutubeTrack;

// переопределяем метод
YoutubeTrack.prototype.playTrack = function() {
	console.log('Hello youtube', this.name);
}


// создание экземпляра класса
var youtubeTrack01 = new YoutubeTrack({
	name: 'youtubeTrack01',
	url: 'youtubeTrack01.mp3',
	image: 'youtubeTrack01.jpg'
});

var youtubeTrack02 = new YoutubeTrack({
	name: 'youtubeTrack02',
	url: 'youtubeTrack02.mp3',
	image: 'youtubeTrack02.jpg'
});

youtubeTrack01.playTrack();