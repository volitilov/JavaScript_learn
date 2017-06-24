new Set([iterable])
// Объекты Set представляют коллекции значений, по которым 
// вы можете выполнить обход в порядке вставки элементов. 
// Значение элемента в Set может присутствовать только в 
// одном экземпляре, что обеспечивает его уникальность в 
// рамках коллекции Set.

// более подробно можно ознакомиться по ссылке 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Свойства :::::::::::::::::::::::::::::::::

Set.length
// Значение свойства length всегда равно 1.

Set.prototype
// Представляет прототип конструктора Set. Позволяет 
// добавлять свойства всем объектам типа Set.



// ::::::::::::::::::::::::::::::::::::::::::
// Экземпляры Set
// Все экземпляры Set унаследованы от Set.prototype.

// Свойства :::::::::::::::::::::::::::::::::

Set.prototype.constructor
// Returns the function that created an instance's prototype. 
// This is the Set function by default.

Set.prototype.size
// Returns the number of values in the Set object.



// Методы :::::::::::::::::::::::::::::::::::

Set.prototype.add(value)
// Appends a new element with the given value to the Set
// object. Returns the Set object.

Set.prototype.clear()
// Removes all elements from the Set object.

Set.prototype.delete(value)
// Removes the element associated to the value and returns 
// the value that Set.prototype.has(value) would have previously 
// returned. Set.prototype.has(value) will return false afterwards.

Set.prototype.entries()
// Returns a new Iterator object that contains an array of 
// [value, value] for each element in the Set object, in insertion 
// order. This is kept similar to the Map object, so that each entry 
// has the same value for its key and value here.

Set.prototype.forEach(callbackFn[, thisArg])
// Calls callbackFn once for each value present in the Set object, 
// in insertion order. If a thisArg parameter is provided to forEach, 
// it will be used as the this value for each callback.

Set.prototype.has(value)
// Returns a boolean asserting whether an element is present with 
// the given value in the Set object or not.

Set.prototype.keys()
// Is the same function as the values() function and returns a new 
// Iterator object that contains the values for each element in the 
// Set object in insertion order.

Set.prototype.values()
// Returns a new Iterator object that contains the values for each 
// element in the Set object in insertion order.

Set.prototype[@@iterator]()
// Returns a new Iterator object that contains the values for each 
// element in the Set object in insertion order.