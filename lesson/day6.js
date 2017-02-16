// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Вызов obj.hasOwnProperty(prop) возвращает true, если свойство 
// prop принадлежит самому объекту obj, иначе false.

/*var obj1 = {
	name: 'Bob'
};

var obj2 = {
	age: 37,
	__proto__: obj1
};

for (key in obj2) {
	if (!obj2.hasOwnProperty(key)) continue;
	document.write(key + ': ' + obj2[key] + '<br>');
}*/


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Объект, создаваемый при помощи Object.create(null) не имеет 
// прототипа, а значит в нём нет лишних свойств. 
// Для коллекции – как раз то, что надо.

/*var data = Object.create(null);

data.text = 'Hello world';
document.write(data.text + '<br>');
document.write(data.toString);*/

// Кросс-браузерный аналог Object.create() – назовём его inherit, 
// состоит буквально из нескольких строк:

/*function inherit(proto) {
	function F() {};
	F.prototype = proto;
	var object = new F;
	return object;
}

var animal = {
  eats: true
};

var rabbit = inherit(animal);

document.write(rabbit.eats);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// встроенный в язык и полностью кросс-браузерный способ создания
// прототипа.

var obj1 = {
	text: 'Hello world'
};

function Rabit(name) {
	this.name = name
};

Rabit.prototype = obj1;
var rabit = new Rabit('xxx');

document.write(rabit.text);