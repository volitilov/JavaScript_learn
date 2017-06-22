// более подробно можно ознакомиться по ссылке 
// https://learn.javascript.ru/arguments-pseudoarray

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

arguments
// псевдомассив, это не массив

function getArgs() {
  for (var i = 0; i < arguments.length; i++) {
    alert( arguments[i] );
  }
}

getArgs(a, b);

arguments[0]
// получение аргументов по номеру

arguments.length
// получение длины списка аргументов

arguments[0] = 'new value'
// меняет первый аргумент