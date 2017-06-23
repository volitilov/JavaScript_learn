// method call() example :::::::::::::::::::::::::::::::::::::::::::
function showArguments() {
	// вызов [].slice() скопирует все элементы из this в новый массив
	var args = [].slice.call(arguments);
	// args - полноценный массив из аргументов
	console.log(args.join(', '));
}

setTimeout(function() {
	showArguments(1, 2, 3);
}, 3000);



// method apply() example ::::::::::::::::::::::::::::::::::::::::::
function showMaxValue() {
	var mas = [];
	mas.push(1);
	mas.push(5);
	mas.push(33);

	console.log(Math.max.apply(null, mas));
}



// method bind() example :::::::::::::::::::::::::::::::::::::::::::
var user = {
	firstName: 'Bob',
	sayHi: function(who) {
		console.log(this.firstName + ': Hello ' + who);
	}
}

var sayHi = user.sayHi.bind(user);
sayHi('Sam');



// Карринг :::::::::::::::::::::::
function sum(a, b) {
	return a + b;
}

var ex1 = sum.bind(null, 2);
var ex2 = sum.bind(null, 5);

console.log(ex1(3)); // 5
console.log(ex2(5)); // 10
