var users = [];

function User(login) {
	// публичные свойства
	this.login = login;

	// приватные свойства
	var messagePrice = 2;
	var ballans = 4;

	// приватные методы
	

	// публичные методы
	this.message = function(to_whom, message) {
		var messageObj = {
			to_whom: to_whom.login,
			message: message
		}
		if (ballans >= messagePrice) {
			console.log(this.login + ' отправил сообщение для ' + to_whom.login);
			console.log(message);
			ballans -= messagePrice;
		} else {
			console.log(this.login + ' у вас не достаточно средств на счёте.');
		}
	}

	this.upBalance = function(sum) {
		ballans += sum;
		console.log('Вы пополнили баланс на сумму: ' + sum);
	}

}

// создаём объект bob
var bob = new User('Bob');
var sam = new User('Sam');

// выводим информацию о пользователе
console.log(bob.login);

// отправляем сообщение
bob.message(sam, 'Hello Bob, im mr.ROBOT');
bob.message(sam, 'Hello Bob, im mr.ROBOT');
bob.message(sam, 'Hello Bob, im mr.ROBOT');


// пополняем баланс
bob.upBalance(2);

bob.message(sam, 'Hello Bob, im mr.ROBOT');
