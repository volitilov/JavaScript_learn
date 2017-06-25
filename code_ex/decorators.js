// создаём объект для таймеров
var timers = {};

// прибавит время выполнения func к таймеру timers[timer]
function timingDecorator(func, timer) {
	return function() {
		// получаем времменую метку на данный моммент
		var start = performance.now();

		var result = func.apply(this, arguments);
		// «форвардинг вызова» текущий контекст и аргументы через apply 
		// передаются в функцию func, так что изнутри func всё выглядит 
		// так, как была вызвана она напрямую, а не декоратор.

		if (!timers[timer]) timers[timer] = 0;
		// проверяем наличие объекта timer, если нету то создаём со 
		// значением по умолчанию

		timers[timer] += performance.now() - start; 
		// прибавляем к таймеру время от одной времменой метки до другой
		// где бала вызвана функция result

		return result;
		// возвращаем стандартный результат выполнения функции
	}
}

// получение квадратного кореня из суммы квадратов своих аргументов
function hupot(a, b) {
	return Math.hypot(a, b);
}

// использование: завернём hupot в декоратор
var myHupot = timingDecorator(hupot, 'hupot');

// вызов стандартного назначения функции
console.log(myHupot(3, 10));

//получаем общее количество времени на вызовы
console.log(timers.hupot + ' ms');




// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Например, декоратор defer(f, ms) ниже получает функцию f и 
// возвращает обёртку вокруг неё, откладывающую вызов на ms 
// миллисекунд:

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}

function sayHi(who) {
  document.write('Hi, ' + who);
}

let sayHiDeferred = defer(sayHi, 3000);
sayHiDeferred('Bob'); // Hi, Bob через 3 секунды