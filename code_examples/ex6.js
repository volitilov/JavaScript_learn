// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// получаем случайную историю
var stories = (function() {
	var allStories = [
		{
			name: 'story_1',
			text: 'example text story_1'
		},
		{
			name: 'story_2',
			text: 'example text story_2'
		},
		{
			name: 'story_3',
			text: 'example text story_3'
		},
		{
			name: 'story_4',
			text: 'example text story_4'
		}
	]

	var generateStory = function() {
		var accidentalNumber = Math.round(Math.random() * (allStories.length - 1));
		console.log(allStories[accidentalNumber].text);
	}

	return {
		generateStory: generateStory
	}
}());
