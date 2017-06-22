// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// --------- Класс-Родитель ------------
// Конструктор родителя пишет свойства конкретного объекта
function Animal(name) {
	this.name = name;
	this.speed = 0;
}

// Методы хранятся в прототипе
Animal.prototype.run = function() {
	document.write(this.name + ' бежит! <br>');
}

// --------- Класс-потомок -----------
// Конструктор потомка
function Rabbit(name) {
	Animal.apply(this, arguments);
}

// Унаследовать
Rabbit.prototype = Object.create(Animal.prototype);

// Желательно и constructor сохранить
Rabbit.prototype.constructor = Rabbit;

// Методы потомка
Rabbit.prototype.run = function() {
	// Вызов метода родителя внутри своего
	Animal.prototype.run.apply(this);
	document.write(this.name + ' подпрыгивает!');
};

// Готово, можно создавать объекты
var rabbit = new Rabbit('Bob');
rabbit.run();
