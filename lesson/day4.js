// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var obj = {
	name: 'Bob',
	toString: function() {
		return this.name;
	}
};

Object.defineProperty(obj, 'toString', {enumerable: false});

for (var key in obj) document.write(key + '<br>');*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var obj = {
	firstName: 'Bob',
	lastName: 'Donsan',

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},

	set fullName(value) {
		var split = value.split(' ');
		this.firstName = split[0];
		this.lastName = split[1];
	}
}

// Object.defineProperty(obj, 'fullName', {
// 	get: function() {
// 		return this.firstName + ' ' + this.lastName;
// 	},

// 	set: function(value) {
// 		var split = value.split(' ');
// 		this.firstName = split[0];
// 		this.lastName = split[1];
// 	}
// });

obj.fullName = 'Sam Dikens';
document.write(obj.fullName);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function showName() {
	document.write(this.name + ': ' + this.age);
}

var user = {
	name: 'Bob',
	age: 37
};

showName.call(user);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*var user = {
	name: 'Bob',
	age: 37,
	long: 175
}

function showName(part1, part2) {
	document.write(this[part1] + ': ' + this[part2] + '<br>');
}

showName.call(user, 'name', 'age');
showName.call(user, 'name', 'long');*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function printArgs() {
	var join = [].join;
	var argStr = join.call(arguments, ': ');

	document.write(argStr);
}

printArgs(1, 2, 3);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*function printArgs() {
	var args = [].slice.call(arguments);
	document.write(args.join(', ')); 
}

printArgs(1, 2, 3, 4);*/

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

var user = {
	name: 'Bob',
	age: 76,
	sayHi: function() {
		document.write(this.name + ' ==> ' + 'Hi');
	}
}

setTimeout(user.sayHi.bind(user), 5000);

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::