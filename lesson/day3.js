// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var obj = {
	name: 'Bob',

	sayHi: function(){
		show(this);
	}
};

function show(objName) {
	document.write(objName.name);
}

obj.sayHi();*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var a = {
	valueOf: function() {
		return '1';
	}
};

var b = {
	valueOf: function() {
		return '3';
	}
};

document.write(a + b);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function User(name) {
	this.name = name;
	this.sayHi = function() {
		document.write('Hi ' + this.name);
	}
}

var bob = new User('Bob');
bob.sayHi();*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function User(firstName, lastName) {
	var hi = 'Hi';

	function getFullName() {
		return firstName + ' ' + lastName;
	};

	this.sayHi = function() {
		document.write(hi + ', ' + getFullName());
	};
}

var bob = new User('Bob', 'Dikenz');
bob.sayHi();*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function Calculator() {
	this.read = function() {
		this.a = +prompt('num1', 0);
		this.b = +prompt('num2', 0);
	};

	this.sum = function() {
		return this.a + this.b;
	};

	this.mul = function() {
		return this.a * this.b;
	};
}

var calculator = new Calculator;
calculator.read();

document.write(calculator.a + ' and ' + calculator.b + '<br>');
document.write('Suma = ' + calculator.sum() + '<br>');
document.write('Prois = ' + calculator.mul());*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function Acumulator(value) {
	this.value = value;

	this.read = function() {
		var pr = +prompt('num', 0);
		this.value += pr;
	};
}

var acum = new Acumulator(1);
acum.read();
acum.read();
document.write('acum = ' + acum.value + '<br>');

var acum2 = new Acumulator(0);
acum2.read();
acum2.read();
document.write('acum2 = ' + acum2.value);

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::