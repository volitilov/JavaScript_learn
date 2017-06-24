// получаем и выводим в консоль тип получаемого объекта
function getClass(obj) {

	var className = {}.toString.call(obj).slice(8, -1);
	// Для получения [[Class]] нужна именно внутренняя 
	// реализация toString стандартного объекта Object, 
	// другая не подойдёт

	console.log(className);
}


var objects = [new Date(), new Object(), new Function(), new Number(), new String(), new Boolean()];


// перебераем и выводим массив с разными типами данных
for (var i = 0; i < objects.length; i++) {
	getClass(objects[i]);
}