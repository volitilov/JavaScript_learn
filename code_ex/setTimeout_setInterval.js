// setTimeout(func, 1000) :::::::::::::::::::::::::::::::::::
function showHi(who) {
	return 'Hello ' + who;
}

// устанавливаем таймер на 2 секунды для вызова функции showHi
// с переданными параметрами 
var timerId = setTimeout(function() {
	console.log(showHi('Bob'));
}, 2000)

// выводим числовой индификатор таймера
console.log(timerId); // 1

// отмена действия таймера
clearTimeout(timerId);



// setInterval(func, 1000) ::::::::::::::::::::::::::::::::::
function showMessage() {
	return 'Hello world';
}

// начать повторы с интервалом 2 сек
intervalId = setInterval(function() {
	console.log(showMessage());
}, 2000)

// через 20 сек остановить повторы
setTimeout(function() {
	clearInterval(intervalId);
}, 20000)



// альтернатива setInterval – рекурсивный setTimeout
var timerId2 = setTimeout(function showName() {
	console.log('Bob');
	timerId2 = setTimeout(showName, 2000);
}, 2000)