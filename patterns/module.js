// module pattern ::::::::::::::::::::::::::::::::::::::::::::::::
// можно распространять этот скрипт в виде библиотеки. Каждый, кто
// хочет, получить данный счётчик – может просто подключить этот 
// скрипт. Достаточно скачать и подключить, например, как внешний 
// файл module.js

var counterModule = (function(jQ) {

	// глобальная переменная скрипта (счётчик)
	var counter = 0

	// глобальная функция скрипта (получения счётчика)
	var getCounter = function() {
		return counter;
	}

	// глобальная функция скрипта (увеличения счётчика)
	var increaseCounter = function() {
		counter++;
	}


	return {
		getCounter: getCounter,
		increaseCounter: increaseCounter
	}
}(jQuery));
