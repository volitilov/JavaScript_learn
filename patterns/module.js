// module pattern ::::::::::::::::::::::::::::::::::::::::::::::::
// можно распространять этот скрипт в виде библиотеки. Каждый, кто
// хочет, получить данный счётчик – может просто подключить этот 
// скрипт. Достаточно скачать и подключить, например, как внешний 
// файл module.js

export default class Counter {
	counter = 0

	getCounter = () => {
		return counter;
	}

	increaseCounter = () => {
		counter++;
	}

	decriseCounter = () => {
		counter--;
	}
}
