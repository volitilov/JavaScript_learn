new Promise(executor)
new Promise(function(resolve, reject) { ... })
	executor
	// Объект функции с двумя аргументами resolve и reject. Первый 
	// аргумент вызывает успешное выполнение обещания, второй 
	// отклоняет его. Мы можем вызывать эти функции по завершении 
	// нашей операции.

// Интерфейс Promise (обещание) представляет собой обертку для 
// значения, неизвестного на момент создания обещания. Он позволяет 
// обрабатывать результаты асинхронных операций так, как если бы они 
// были синхронными: вместо конечного результата асинхронного метода 
// возвращается обещание получить результат в некоторый момент в будущем.

// При создании обещание находится в ожидании (pending), а затем может 
// стать выполнено  (fulfilled), вернув полученный результат (значение), 
// или отклонено (rejected), вернув причину отказа. В любом из этих 
// случаев вызывается обработчик, прикрепленный к обещанию методом then. 
// Если в момент прикрепления обработчика обещание уже сдержано или 
// нарушено, он все равно будет выполнен, т.е. между выполнением обещания 
// и прикреплением обработчика нет «состояния гонки», как, например, 
// в случае с событиями в DOM.

// более подробно можно ознакомиться по ссылке 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


Свойства :::::::::::::::::::::::::::::::::::::::

Promise.length
// Значение свойства всегда равно 1 (количество аргументов 
// конструктора).

Promise.prototype
// Представляет прототип для конструктора Promise.



Методы :::::::::::::::::::::::::::::::::::::::::

Promise.all(iterable)
// Возвращает обещание, которое выполнится после выполнения всех 
// обещаний в передаваемом итерируемом аргументе.

Promise.race(iterable)
// Возвращает обещание, которое будет выполнено или отклонено с 
// результатом исполнения первого выполненного или отклонённого 
// итерируемого обещания.

Promise.reject(reason)
// Возвращает объект Promise, который отклонён с указанной 
// причиной.

Promise.resolve(value)
// Возвращает объект Promise, который выполнен с указанным 
// значением. Если значение может быть продолжено (имеется метод 
// then), то возвращаемое обещание будет "следовать" продолжению, 
// выступая адаптером его состояния; в противном случае будет 
// возвращено ожидание в выполненном состоянии.



::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Прототип Promise

Свойства :::::::::::::::::::::::::::::::::::

Promise.prototype.constructor
// Возвращает функцию, которая создала прототип экземпляра. Это 
// функция всех обещаний по умолчанию.


Методы :::::::::::::::::::::::::::::::::::::

Promise.prototype.catch(onRejected)
// Добавляет функцию обратного вызова, для обработки отклонения 
// обещания, которая возвращает новое обещание выполненное с 
// переданным значением, если она вызвана, или оригинальное 
// значение resolve, если обещание выполнено.

Promise.prototype.then(onFulfilled, onRejected)
// Добавляет обработчик выполнения и отклонения обещания, и 
// возвращает новое обещание выполненное со значением вызванного 
// обработчика, или оригинальное значение, если обещание не было 
// обработано (т.е. если соответствующий обработчик onFulfilled 
// или onRejected не является функцией).