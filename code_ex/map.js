var myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "a string";

// задание значений
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");
myMap.set(0, "zero");
myMap.set(1, "one");

myMap.size; // 5

// получение значений
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get("a string");   
// "value associated with 'a string'"
// потому что keyString === 'a string'

myMap.get({});           
// undefined, потому что keyObj !== {}

myMap.get(function() {}) 
// undefined, потому что keyFunc !== function () {}


for (var [key, value] of myMap) {
  alert(key + " = " + value);
}
// Отобразит 2 предупреждения; 
// первое "0 = zero" и второе "1 = one"

for (var key of myMap.keys()) {
  alert(key);
}
// Отобразит 2 предупреждения; 
// первое "0" и второе "1"

for (var value of myMap.values()) {
  alert(value);
}
// Отобразит 2 предупреждения; 
// первое "zero" и второе "one"

for (var [key, value] of myMap.entries()) {
  alert(key + " = " + value);
}
// Отобразит 2 предупреждения; 
// первое "0 = zero" и второе "1 = one"

myMap.forEach(function(value, key, myMap) {
  alert(key + " = " + value);
})
// Отобразит 2 предупреждения; 
// первое "0 = zero" и второе "1 = one"





var kvArray = [["key1", "value1"], ["key2", "value2"]];

var myMap = new Map(kvArray);
// Используйте конструктор Map для преобразования двумерных 
// массивов в ассоциативные

myMap.get("key1"); // вернёт "value1"

alert(uneval([...myMap])); 
// Отобразит тот же массив, что и kvArray
// Используйте переменный оператор для преобразования ассоциативного 
// в двумерный массив

alert(uneval([...myMap.keys()])); 
// Отобразит ["key1", "key2"]
// Или используйте переменный оператор для ключей или значений 
// итератора для получения массива только ключей или значений