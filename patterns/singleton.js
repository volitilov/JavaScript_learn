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