// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var i = 0;

while (i < 3) {
	document.write(i + '<br>');
	i++;
}

for (i = 1; i < 3; i++) {
	document.write(i + '<br>');
}*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var sum = 0;

while (true) {
	var value = prompt('Sum number?', '');
	if (!value) break;
	sum += Number(value);
}

document.write(sum);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var test = 'volitilov';

for (var i = 0; i < 5; i++) {
	var login = prompt('login ?', '');
	if (login == test) {
		document.write('Hello ' + test);
		break;
	} else continue;
}*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var login = prompt('login ?', '');

switch (login) {
	case 'volitilov':
		document.write('Hello volitilov');
		break;
	case 'admin':
		document.write('Hello admin');
		break;
	default:
		document.write('Error');
}*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function sum(a, b) {
	var sum = a + b;
	return sum;
}

document.write(sum(4, 5));*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var obj = {
	name : 'xxx',
	obj2 : {
		name : 'xxx2'
	} 
}
obj.age = 27;
obj.obj2.age = 30;
var key = 'age';

var counter = 0;
for (var key in obj) {
	counter++;
}

var clone = {};
for (var key in obj) {
	clone[key] = obj[key]
}

document.write(obj[key] + '<br>');
document.write(obj.obj2[key] + '<br>');
document.write(counter + '<br>');
document.write(clone.name);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var name = 'Sam';
var mas = [123, name, 'bob', null];

for (var i = 0; i < mas.length; i++) {
	document.write(i + '<br>');
}*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var str = 'Bob, Sam, Dan, Alex';
var arr = str.split(', ');

for (var i = 0; i < arr.length; i++) {
	document.write(i + ' item --- ' + arr[i] + '<br>');
}*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var mas = ['Sam', 'Bob', 'Dan', 'Alex'];
var str = mas.join(', ');

document.write(str + '<br>');
document.write(new Array(4).join('x'));*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var obj = {
	name : 'Bob',
	age : 27
}

var test = Object.keys(obj);

document.write(test);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var mas = [0, -1, 1, 3, -4, 5];
var posNum = mas.filter(function(number) {
	return number > 0;
});

var mas2 = ['Bob', 'Alex', 'Danil'];
var maping = mas2.map(function(test) {
	return test.length;
});

var num = [1, 2, 3, 4, 5];
var test = num.reduce(function(sum, current) {
	return sum + current;
});

document.write(posNum + '<br>');
document.write(maping + '<br>');
document.write(test);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function test() {
	for (var i = 0; i < arguments.length; i++) {
		document.write('Hi ' + arguments[i] + '<br>');
	}
}

test('Sam', 'Bob');*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function show(options) {
	var width = options.width || 100;
	var height = options.height || 50;
	var tittle = options.tittle || 'This tittle';
}

show({
	tittle = options.tittle || 'hi';
});

var opts = {
	name : 'xxx',
	age : 30
};

show(opts);
opts.name = 'volitilov';

show(opts);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function makeCounter() {
	var currentCount = 1;

	return function() {
		return currentCount++;
	}
}

var count = makeCounter();
var count2 = makeCounter();

document.write(count() + '<br>');	// 1
document.write(count() + '<br>');	// 2

document.write(count2() + '<br>');	// 1
document.write(count2() + '<br>');	// 2*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function makeCounter() {
	var currentCount = 1;

	return {
		getNext: function() {
			return currentCount++;
		},
		set: function(value) {
			currentCount = value;
		},
		reset: function() {
			currentCount = 1;
		}
	};
}

var count = makeCounter();

document.write(count.getNext() + '<br>');	// 1
document.write(count.getNext() + '<br>');	// 2

count.set(5);
document.write(count.getNext() + '<br>');	// 5

count.reset();
document.write(count.getNext());	// 1*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function makeCounter() {
	var currentCount = 1;

	function counter() {
		return currentCount++;
	};

	counter.set = function(value) {
		currentCount = value;
	};
		
	counter.reset = function() {
		currentCount = 1;
	};
	
	return counter;
}

var count = makeCounter();

document.write(count() + '<br>');	// 1
document.write(count() + '<br>');	// 2

count.set(5);
document.write(count() + '<br>');	// 5

count.reset();
document.write(count());	// 1

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::