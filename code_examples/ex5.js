// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// module pattern ::::::::::::::::::::::::::::::::::::::::::::::::
var counterModule = (function(jQ) {
	var counter = 0

	var getCounter = function() {
		console.log(jQ('body'));
		return counter;
	}

	var increaseCounter = function() {
		counter++;
	}

	return {
		getCounter: getCounter,
		increaseCounter: increaseCounter
	}
}(jQuery));

