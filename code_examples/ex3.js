// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// переопределяем контекст 
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