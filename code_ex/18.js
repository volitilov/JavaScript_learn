function User() {
	this.sayHi = function() { return this.name; }
}

User.createAnonymous = function() {
	this.user = new User;
	this.user.name = 'Anonymous';

	return this.user;
}

User.createFromDate = function(userDate) {
	this.user = new User;
	this.user.name = userDate.name;
	this.user.age = userDate.age;

	return this.user;
}


var user1 = User.createAnonymous();
console.log(user1.sayHi());


var user2 = User.createFromDate({
	name: 'Bob', 
	age: 37
});
console.log(user2.sayHi());