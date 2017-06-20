// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// singleton pattern :::::::::::::::::::::::::::::::::::::::::::::
var testModule = (function() {
	var counter = 0,
		instance;

	var getCounter = function() {
		return counter;
	}

	var changeCounter = function() {
		counter = Math.round(Math.random() * (10 - 1) + 1);
	}

	var createInstance = function() {
		return {
			getCounter: getCounter,
			changeCounter: changeCounter
		}
	}

	return {
		getInstance: function() {
			return instance || (instance = createInstance());
		}
	}
}());

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

