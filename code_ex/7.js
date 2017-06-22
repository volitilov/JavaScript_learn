// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var toString = {}.toString;

var arr = [1, 2];
document.write(toString.call(arr) + '<br>');

var obj = {name: 'Bob'};
document.write(toString.call(obj) + '<br>');

var date = new Date;
document.write(toString.call(date) + '<br>');

function test() {
	return 'Hi';
}
document.write(toString.call(test) + '<br>');*/


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function sayHi(who) {
	if (who.forEach) {
		who.forEach(sayHi);
	} else {
		document.write('Hi ' + who + '<br>');
	}
}

sayHi('Bob');
sayHi(['Bob', 'Sam', 'Ban', 'xxx']);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var user = {
	name: 'Bob',
	age: 47 
}

var str = JSON.stringify(user, "", 4);
document.write(str + '<br>');

user = JSON.parse(str);
document.write(user.name + ': ' + user.age);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var timer = setInterval(function() {
	document.write('tik <br>');
}, 1000);

setTimeout(function() {
	clearInterval(timer);
	document.write('stop <br>');
}, 4999);*/


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function Test(value) {
	this.value = value;

	this.count = function() {
		this.value++;
	}
	return this.value;
}

var obj = new Test(0);

var timer = setTimeout(function t() {
	obj.count();

	if (obj.value == 1) {
		document.write(obj.value);
	} else {
		document.write(', ' + obj.value);
	};

	timer = setTimeout(t, 1000);
}, 1000);

setTimeout(function() {
	clearTimeout(timer);
}, 9990);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function Test(value) {
	this.value = value;

	this.count = function() {
		this.value++;
	}
	return this.value;
}

var obj = new Test(0);

var name = 'volitilov';
var mas = name.split('');

var timer = setTimeout(function t() {
	
	document.write(mas[obj.value]);
	obj.count();
	timer = setTimeout(t, 1000);

}, 1000);

setTimeout(function() {
	clearTimeout(timer);
}, 9990);

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::