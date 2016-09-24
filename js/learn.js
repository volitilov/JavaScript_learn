// так пишутся короткие комментарии

/* так пишутся длинные

список зарезервированных слов js

break     default     String     parseInt     function     return
var       case        delete     if           switch       void
catch     do          in         this         while        const
else      instanceof  throw      with         continue     finally
let       try         debugger   for          new          typeof

зарезервированные слова на будущее

class
enum
export
extends
import
super

зарезервированные слова на будущее в строгом режиме (use strict)

implements
interface
package
private
protected
public
static
yield


жжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжж
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Встроенные методы работы с массивом ( -- метод(аргументы) -- ) :::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

push() - вписывает элемент в конец массива

unshift() - вписывает элемент в начало массива

pop() - удаляет последний элемент массива

shift() - удаляет начальный элемент массива

split(s, 2) - позваляет превратить строку в массив, разбив его по разделителю s,
			  второй аргумент(2) - ограничивает кол-во элементов массива.

join() - склеивает массив в строку используя аргумент как разделитиль

delete arr[1] - удаляет пару "ключ-значение" из массива

splice() - умеет вставлять, удалять, заменять элементы - по очереди и одновременно
		   также возвращает масив из удалённых элементов var mas = arr.splice(1,3)
splice(1, 1) - начиная с позиции 1 удалить 1 элемент
splice(0, 3, "sf", "sdf") - удалим 3 элемента и вставим другие на их место
splice(2, 0, "dff", "df") - вставляет элементы без удаления, если установить deleteCount в 0
splice(-1, 0, 3, 4) - использование отрицательного номера позиции, которая в этом случае отсчитывается с конца

slice(1, 2) - копирует участок массива от 1 до 2, не включая 2
			- если не указать 2 аргумент скопируется до конца
			- если не указать аргументы скопируется весь массив

sort(fn) - сортирует массив, fn - функция которая указывается без скобок и говорит как сравнивать элементы массива  
		 - универсальная функция сравнения чисел 

		 	function compareNumeric(a, b) {
			  return a - b;
			}

reverse() - меняет порядок элементов в массиве на обратный

concat(a, b) - создаёт новый массив, в который копируюся элементы из массива к катораму он применяется  
			 - аргументы a и b создают допалнительные элементы массива

indexOf(1) - возвращает номер элемента массива (ищет с лева на право)
		   - аргумент 1 это аргумент который мы ищем

lastIndexOf() - возвращает номер элемента массива (ищет с права на лево)

Object.keys() - выводит ключи объекта 


жжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжж
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Объект window - для обращения к функциям и методам window не нужно указывать объект.
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Свойства	::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

closed		возвращает логическое значение (true или false) в зависимости от того, закрыто указанное окно или отрыто.
frames		возвращает массив всех фреймов на странице (включая iframe).
document	возвращает объект Document данного окна.
history		возвращает объект History данного окна.
length		возвращает количество фреймов (включая iframe), которые находятся в данном окне.
location	возвращает объект Location данного окна.
name		устанавливает или возвращает имя данного окна.
navigator	возвращает объект Navigator данного окна.
opener		возвращает ссылку на окно, которое открыло данное.
parent		возвращает родительское окно данного окна.
screen		возвращает объект Screen данного окна.
self		возвращает текущее окно.
top		возвращает верхнее браузерное окно для данного окна.

Методы 		::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

alert()	 		вызывает окно оповещения, которое содержит текст сообщения и клавишу ОК.
blur()			делает окно неактивным.
clearInterval()		прекращает повторное выполнение кода заданного setInterval().
clearTimeout()		отменяет запланированное методом setTimeout() выполнение кода.
close()			закрывает окно.
confirm()		вызывает окно подтверждения содержащее текст сообщения и клавиши ОК и Отмена.
focus()			делает окно активным.
moveBy()		смещает окно относительно его текущей позиции.
moveTo()		перемещает окно на указанную позицию.
open()			открывает новое окно браузера.
print()			распечатывает содержимое текущего окна.
prompt()		вызывает окно запроса, побуждающее посетителя ввести в него определенные данные.
scrollBy()		прокручивает содержимое окна на указанное количество пикселей.
scrollTo()		прокручивает содержимое окна до указанных координат.
setInterval()		вызывает функцию или выполняет код через определенные промежутки времени (указанные в миллисекундах).
setTimeout()		вызывает функцию или выполняет код после указанного количества миллисекунд один раз.


жжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжж
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Объект string - используется для хранения и обработки текстовой информации.	::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Свойства	::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

length		возвращает длину строки.
prototype	позволяет добавлять свойства и методы к объекту.

Методы 		::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

charAt()		возвращает символ находящийся на указанной позиции в строке.
charCodeAt()		возвращает Юникод символа на указанной позиции в строке.
concat()		объединяет две и более строки и возвращает результат.
fromCharCode()		преобразует Юникод в символ.
indexOf()		возвращает позицию первого найденного совпадения выражения в методе со строкой текста.
lastIndexOf()		возвращает позицию последнего найденного совпадения выражения в методе со строкой текста.
match()			ищет совпадение между регулярным выражением переданным в методе и строкой текста и возвращает найденное совпадение (если оно имеется).
replace()		ищет совпадение между регулярным выражением и строкой текста и заменяет найденное совпадение (если оно имеется) новой строкой.
search()		ищет совпадение между регулярным выражением и строкой текста и возвращает позицию найденного совпадения (если оно имеется).
slice()			извлекает часть существующей строки и возвращает новую строку.
split()			разделяет строку на массив подстрок.
substr()		извлекает указанное количество символов из строки начиная с указанного места.
substring()		извлекает символы из строки между указанными координатами.
toLowerCase()		делает все символы строки строчными.
toUpperCase()		делает все символы строки заглавными.
valueOf()		возвращает содержимое объекта Строка.

Методы обертки строк 	::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

bold()		оборачивает строку тэгами <b>.
italics()	оборачивает строку тэгами <i>.
link()		оборачивает строку тэгами <a>.
sub()		оборачивает строку тэгами <sub>.
sup()		оборачивает строку тэгами <sup>.



жжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжж
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Фундаментальные объекты		::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Object  жжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжж

Свойства  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

length
prototype  позволяет добавлять свойства ко всем объектам типа Object.

Методы    ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

assign()  		cоздаёт новый объект путём копирования значений всех собственных 
		  	перечислимых свойств из одного или более исходных объектов в целевой объект.
create()		cоздаёт новый объект с указанными объектом прототипа и свойствами.
defineProperty()  	добавляет к объекту именованное свойство, описываемое переданным дескриптором.
defineProperties()  	добавляет к объекту именованные свойства, описываемые переданными дескрипторами.
freeze()		замораживает объект: другой код не сможет удалить или изменить никакое свойство.
is() 			сравнивает, являются ли два значения различимыми (то есть, одинаковыми)
isExtensible()		определяет, разрешено ли расширение объекта.
isFrozen()		определяет, был ли объект заморожен.
isSealed()		определяет, является ли объект запечатанным (sealed).
keys()			возвращает массив, содержащий имена всех собственных перечислимых свойств 
			переданного объекта.
observe() 		асинхронно наблюдает за изменениями в объекте.
seal()			предотвращает удаление свойств объекта другим кодом.

getOwnPropertyDescriptor()  	возвращает дескриптор свойства для именованного свойства объекта.
getOwnPropertyNames()		возвращает массив, содержащий имена всех переданных объекту собственных 
				перечисляемых и неперечисляемых свойств.
getOwnPropertySymbols() 	возвращает массив всех символьных свойств, найденных непосредственно в 
				переданом объекте.
getPrototypeOf()		возвращает прототип указанного объекта.
preventExtensions()		предотвращает любое расширение объекта.
setPrototypeOf() 		устанавливает прототип (то есть, внутреннее свойство [[Prototype]])


Function  жжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжж



*/
