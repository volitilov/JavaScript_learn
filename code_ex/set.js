var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");

mySet.has(1); // true
mySet.has(3); // false, 3 не добавлено в set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true

mySet.size; // 3
mySet.delete(5); // удаляет 5 из set
mySet.has(5);    // false, 5 было удалено
mySet.size; // 2, было удалено одно значение



for (let item of mySet) console.log(item);
// обход элементов set
// выведет элементы в виде: 1, "some text" 


for (let item of mySet.keys()) console.log(item);
// выведет элементы в виде: 1, "some text" 

 
for (let item of mySet.values()) console.log(item);
// выведет элементы в виде: 1, "some text"


for (let [key, value] of mySet.entries()) console.log(key);
// выведет элементы в виде: 1, "some text"
//(key and value are the same here)


var myArr = [v for (v of mySet)]; // [1, "some text"]
// преобразует set в Array


mySet.add(document.body);
mySet.has(document.querySelector("body")); // true
// следующее будет работать при запуске с HTML документом


mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]
// преобразования из Set в Array и обратно


var intersection = new Set([x for (x of set1) if (set2.has(x))]);
// пересечение можно представить следующим образом  


mySet.forEach(function(value) {
  console.log(value);
});
// Обход элементов set при помощи forEach
// 1
// 2
// 3
// 4



var myArray = ["value1", "value2", "value3"];


var mySet = new Set(myArray);
// Используйте конструктор Set для преобразования Array в Set

mySet.has("value1"); // вернёт true

uneval([...mySet]); 
// Отобразит тот же массив, что и myArray
// Используйте переменный оператор для преобразования Set в Array