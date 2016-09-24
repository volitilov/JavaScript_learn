/*var days = ["day1", "day2", "day3", "day4", "day5"];
var numb = 4;

document.write(days[numb]);
*/

/*
var students = ["Абаканов Сергей", "Гагарин Матвей", "Хантухова Лейла", "Алалина Алина", "Сакуров Иоган"];

if (students.length >= 3 && students[students.length - 1] == "Сакуров Иоган") {
	document.write("Good");
} else {
	document.write("No good");
}
*/

/*var i = 0;									 установление щёчика
while (i < students.length) { 					 проверка условий
	document.write(students[i] + "<br />");		 выполнение действий
	i++;										 увеличение счётчика
}

var i = 1;
while (i <= 3) {
	document.write(students[i] + "<br />");
	i++;
}

for (i = 1; i <= 3; i++) {
	document.write(students[i] + "<br />");
}

for (i = 1; i <= 20; i++) {
	document.write(("Квадрат " + i + " = ") + (i * i + "<br />"));
}*/

/*var mySite = "http://volitilov.com";

function sites(a) {

	if(a.indexOf("http://") == -1) {
		document.write("no good");
	} else {
		document.write("good");
	}
}*/
/*
var name = prompt("Name rus ?", "");

var rus = "аяАЯ";
document.write(rus.charCodeAt(0) + "<br />");
document.write(rus.charCodeAt(1) + "<br />");
document.write(rus.charCodeAt(2) + "<br />");
document.write(rus.charCodeAt(3) + "<br />");
// - 1040 -1103

for (var i = 0; i < name.length; i++) {

	if (name.charCodeAt(i) < 1040 || name.charCodeAt(i) > 1103) {
		document.write("no good " + "<strong>" + name.charAt(i) + "</strong>" + "</br />");
	} else {}
}

var students = ["Илья","Greg", "Алина"];

for (var i = 0; i < students.length; i++) {

	for (var j = 0; j < students[i].length; j++) {

		if (students[i].charCodeAt(j) < 1040 || students[i].charCodeAt(j) > 1103) {
			document.write("no good " + "<strong>" + students[i].charAt(j) + "</strong>" + "</br />");
		} else {}
	}
}*/

/*var test = "sub k",
	myindex = "675430",
	reg = /sub/,
	ind = /^\d{6}$/,
	s = test.search(reg),
	b = myindex.search(ind);

document.write(s + "<br />");
document.write(b);

var forTesting = "8 пингвинов и 9 карасей";

function num(a, b) {
	a = /^\d/;
	b = forTesting.search(a);
	document.write(b);
}

num(forTesting);*/
/*
var text = "kskhgfjhgsd sun",
	num = "+375(33)-677-00-99 Slava, +375(33)-615-77-99 Volitilov"
	s = text.match("sun"),
	b = /\+375\(33\)-\d{3}-\d{2}-\d{2}/g,
	c = num.match(b);

document.write(c);

var test = "Вчера я открыл 5 сайтов: www.leson.ru, http://gory.com, http://www.laso.RU, http://kali.ru",
	regV = /(https?:\/\/)?(www\.)?[a-z0-9-\.]{2,100}\.ru/ig,
	result = test.match(regV);

for (i = 0;  i < test.length; i++) {

	document.write(result[i] + "<br />");
}*/

/*var test = "www,leson,ru http://gory,com http://www,laso,RU http://kali,ru",
	regV = /,/g,
	res = test.replace(regV, ".");

document.write(res);*/

/*var tel = "8/927/31/10/765",
	sign = "-";

function test() {
	var rev = /\//g;
	var g = tel.replace(rev, "-");
	document.write(g);
}

test();*/
/*
var randSimbol = ["Молоко", 77, 11, "Мед", -88];

function test(a) {

	for(i = 0; i < a.length; i++) {
		if (isNaN(a[i])) {
			document.write("no number" + "<br />");
		} else {
			document.write("number" + "<br />");
		}
	}
}

test(randSimbol);*/
/*
var myArray = ["100 попугаев", "201 рубль", "624 доллара", "109 кроликов", "33 весельчака", "62 кабана"];

function test(a) {

	for(i = 0; i < a.length; i++) {
		document.write(parseInt(a[i]) + "<br />");
	}
}

test(myArray);*/

/*var randSimbol = [10.5, 15, 112, 77.6];

function test(a) {

	for (i = 0; i < a.length; i++) {
		document.write(a[i].toFixed(2) + "<br />");
	}
}

test(randSimbol);*/

/*var numberArray = [34.82, 12.90, 17.01, 78.51];

function test(a, b) {

	for (i = 0; i < a.length; i++) {
		
		if (b == "round") {
			a[i] = Math.round(a[i]);
			document.write(a[i] + "<br />");
		} 
		else if (b == "ceil") {
			a[i] = Math.ceil(a[i]);
			document.write(a[i] + "<br />");
		} 
		else if (b == "floor") {
			a[i] = Math.floor(a[i]);
			document.write(a[i] + "<br />");
		}
		else {
			document.write("No good");
		}

	}
}

test(numberArray, "floor");*/

/*function myRandom(from, to) {
	return Math.floor((Math.random() * (to - from + 1)) + from);
}

var randomArray = new Array(10);

function test(a, b, c) {

	for (i = 0; i < a.length; i++) {
		a[i] = myRandom(b, c);
		document.write(a[i] + "<br />");
	}

}

test(randomArray, 1, 10);*/

/*
var time = new Date();

function test() {

	var a = time.getHours(),
		b = time.getMinutes(),
		c = time.getSeconds();

	if(b < 10) {
		b = "0" + b;
	}
	else if(c < 10) {
		c = "0" + c;
	}
	else {
			
	}
	document.write(a + " : " + b + " : " + c);
}

test();*/
/*
function User(name) {
	this.name = name;
	this.say = function () {
		document.write("Hellow world, my name " + this.name + ".");
	}
}

var u = new User("Petia");
u.say();*/

/*function Name(name) {
	this.name = name;
	this.say = function() {
		document.write("Hellow world, my name " + this.name);
	}
}

var n = new Name("Alex");
n.say();*/
