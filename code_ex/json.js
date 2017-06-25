// JSON.parse() example ::::::::::::::::::::::::::::::::::::::::
var ex = '{"title":"count","count":"45"}';


function print(obj) {
	console.log(obj);
}

var obj = JSON.parse(ex);
print(obj['title']);


// JSON видит значения обычной строкой поэтому для работы
// со значениями их надо преобразовать
var getCount = JSON.parse(ex, function(key, value) {
	if (key == 'count') return new Number(value);
	return value;
})

// теперь можно работать как с обычными цифрами
print(getCount.count + 1);




// JSON.stringify() ::::::::::::::::::::::::::::::::::::::::::::
var user = {
	name: 'Bob',
	age: 45, 
	friends: ['Sam', 'ALex']
}

print(JSON.stringify(user));
// выведет {"name":"Bob","age":45,"friends":["Sam","ALex"]}
// преобразуем («сериализуем») значение в JSON-строку.


// преобразуем только то что мы хотим
var notAll = JSON.stringify(user, ['name', 'age']);

// либо исключим то, что мы не хотим преобразовывать
var notAll2 = JSON.stringify(user, function(key, value) {
	if (key == 'friends') return undefined;
	return value;
})


print(notAll);
// выведет {"name":"Bob","age":45}

print(notAll2);
// выведет {"name":"Bob","age":45}


// можно красиво преобразовать с отступами
print(JSON.stringify(user, "", 4));
// выведет
/*{
    "name": "Bob",
    "age": 45,
    "friends": [
        "Sam",
        "ALex"
    ]
}*/