typeof 
// возвращает тип аргумента. У него есть два синтаксиса: 
// со скобками и без:
// Синтаксис оператора: typeof x.
// Синтаксис функции: typeof(x)

instanceof
// позволяет проверить, создан ли объект данной функцией, 
// причём работает для любых функций – как встроенных, 
// так и наших.
// user instanceof User // true

alert() 
// выводит на экран окно с сообщением и приостанавливает 
// выполнение скрипта, пока пользователь не нажмёт «ОК».


prompt(title, default)
// выводит модальное окно с заголовком title, полем для 
// ввода текста, заполненным строкой по умолчанию default 
// и кнопками OK/CANCEL. Вызов prompt возвращает то, что 
// ввёл посетитель – строку или специальное значение null, 
// если ввод отменён.
// Safari 5.1+ не возвращает null


confirm(question) 
// выводит окно с вопросом question с двумя кнопками: OK и CANCEL.
// Результатом будет true при нажатии OK и false – при CANCEL(Esc)


func.call(context, arg1, arg2, ...)
// При этом вызывается функция func, первый аргумент call 
// становится её this, а остальные передаются «как есть».
// Вызов func.call(context, a, b...) – то же, что обычный вызов 
// func(a, b...), но с явно указанным this(=context)


func.apply(context, [arg1, arg2])
// Вызов функции при помощи func.apply работает аналогично 
// func.call, но принимает массив аргументов вместо списка.



var wrapper = func.bind(context[, arg1, arg2...])
// жёстко фиксирует контекст для func
	func  
	// Произвольная функция
	context
	// Контекст, который привязывается к func
	arg1, arg2, …
	// Если указаны аргументы arg1, arg2... – они будут прибавлены 
	// к каждому вызову новой функции, причем встанут перед теми, 
	// которые указаны при вызове



eval("2 + 2") 	// возвращает 4
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/eval
// выполняет JavaScript код, представленный строкой




decodeURI("https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")
//  возвращает 
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"

// подробнее 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
// декодирует унифицированный идентификатор ресурса (URI), 
// созданный при помощи метода encodeURI или другой подобной процедуры



decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B")  // "JavaScript_шеллы"
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
// декодирует управляющие последовательности символов в компоненте 
// Uniform Resource Identifier (URI), созданные с помощью метода 
// encodeURIComponent или другой подобной процедуры



encodeURI(str)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
// кодирует универсальный идентификатор ресурса (URI), замещая 
// некоторые символы на одну, две, три или четыре управляющие 
// последовательности, представляющие UTF-8 кодировку символа 
// (будет только четыре управляющие последовательности для 
// символов, состоящих из двух «суррогатных» символов).



encodeURIComponent(str)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
// метод, кодирующий компонент универсального идентификатора ресурса 
// (URI) заменой каждой определенной последовательности символов одной, 
// двумя, тремя или четырьмя последовательностями символов, представленных 
// в кодировке UTF-8  (будет только 4 управляющих последовательности для 
// символов, состоящих из 2 "суррогатных" символов).