/*
Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max

Написать функцию count_symbol( symbol, string ), которая подсчитает количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число

Напишите функцию get_string_length(str), которая в качестве аргумента принимает строку str и возвращает её длину, 
предварительно удалив из строки все пробелы (для решения данной задачи обязательно использовать цикл).

Напишите функцию up_first(str), которая возвращает строку str с заглавным первым символом, 
остальные символы должны быть в нижнем регистре (пример: up_first("иванов"), должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")

Напишите функцию search_string(search, string), которая будет проверять наличие подстроки search в строке string. 
Функция должна вернуть булев тип и быть регистронезависимой (использовать метод indexOf)

Напишите функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – 
заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

Напишите функцию get_type_file( file_name ), которая получает расширение файла в заданном имени файла file_name (пример: get_type_file("readme.txt"), 
функция должна вернуть ".txt")

Напишите функцию get_short_fio(full_fio), которая преобразует полное ФИО full_fio в краткое. 
Например: get_short_fio("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."

Напишите функцию get_order(string), которая отсортирует все слова в заданном предложении string в алфавитном порядке. 
Например: get_order("ноты акустика гитара"), функция должна вернуть "акустика гитара ноты"

Напишите функцию get_random( arr ), которая вернет случайный элемент входящего массива arr.

Напишите функцию get_max( arr ), которая находит максимальное значение в заданном массиве.

Напишите функцию get_uniq_arr( arr ), которая удаляет из заданного массива arr элементы, которые дублируются (необходимо использовать цикл)
  
  Задача на синтаксис объектов. Напишите код, по строке на каждое действие.
•  Создайте пустой объект user.
•  Добавьте свойство name со значением Вася.
•  Добавьте свойство surname со значением Петров.
•  Поменяйте значение name на Сергей.
•  Удалите свойство name из объекта.

Создайте функцию is_empty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
Например:
var schedule = {};
isEmpty(schedule) ; // должно вернуть true
schedule["8:30"] = "подъём";
isEmpty(schedule) ; //должно вернуть false

Есть объект points с оценками. Напишите код, который выведет сумму всех оценок. 
var points = {
"Вася": 200,
"Петя": 300,
"Даша": 250,
"Андрей": 150,
"Сергей": 450,
};
Найти имена тех, кто получает минимальную и максимальную оценку.
*/

//случайное целое число от a до b______________________________
let a = '-10';
let b = 10;

console.log(`Cлучайное целое число от ${a} до ${b}: ` + random(a, b));

//количество букв b в строке a______________________________
a = 'можно использовать';
b = 'о';

console.log(`количество букв ${b} в строке - ${a} -: ` + count_symbol(b, a));

//Строка для возврата длины без пробела______________________
a = `можно использовать`;

console.log(`Длина без пробела строки - ${a} -: ` + get_string_length(a));

//строка с заглавным символом______________________________
a = `можно использовать`;

console.log(`строка - ${a} - с заглавным символом: ` + up_first(a));

//проверка подстроки в строке (метод indexOf)______________________________
b = 'Привет мир';
a = 'прив';

console.log(`проверка подстроки - ${a} - в строке - ${b} -: ` + search_string(a, b));

//вставка ограничителя для строки '...'______________________________
a = 'можно использовать';
b =  5;

console.log(`Строка - ${a} - с ограничением на - ${b} - символе: ` + truncate(a, b));

//расширение файла______________________________
a = 'blok.txt';

console.log(`Расширение файла - ${a} -: ` + get_type_file(a));

//фио кратко______________________________
a = 'Янголенко Ирина Василивна';

console.log(`Кратко ФИО - ${a} -: ` + get_short_fio(a));

//сортировка в алфавитном порядке______________________________
a = 'Янголенко Александра Василивна';

console.log(`Сортировка слов - ${a} - в алфавитном порядке: ` + get_order(a));

//рандомное число массива______________________________
r = [6,5,4]

console.log(`Рандомное число массива ${r} :` + get_random(r));

//максмимальное число в массиве______________________________
r = [4,5,6];

console.log(`Максимальное число массива ${r} :` + get_max(r));

//удалить дубликаты из массива______________________________
r = [4,5,3,4,6,7,8,3]

console.log(`Удалить дубликаты массива ${r} :` + get_uniq_arr(r));

//код по строчке на каждое действие______________________________
console.log('Работа с объектом user');

let user = new Object(); //Создайте пустой объект user.

user.name = 'Вася';//Добавьте свойство name со значением Вася.
user.surname = 'Петров';//Добавьте свойство surname со значением Петров.
console.log(user);
user.name = 'Сергей';//Поменяйте значение name на Сергей.
console.log(user);
delete user.name;//Удалите свойство name из объекта.
console.log(user);

//проверка есть ли в объекте свойства______________________________
let user_2 = {};

console.log(`user (не пустой) ` + is_empty(user));
console.log(`user_2 (пустой) ` + is_empty(user_2));

//написать код для суммы оценок; min, max оценку.____________________________
let points = {
	'Вася': 200,
	'Петя': 300,
	'Даша': 250,
	'Андрей': 150,
	'Сергей': 450,
};

console.log(`Список ` + points);
for (let [key, val]  of Object.entries(points)) console.log(key + ': ' + val);
console.log(`Сумма оценок: ` + sum_obj(points));
min_max_obj(points);

function random(min,max) {
	min = Number(min);
	max = Number(max);
	if ((!isNaN(min))&&(!isNaN(max))) {
		if (min > max) {
			max = [min, min = max][0];
		}
		return Math.round(Math.random() * (max - min) + min);
	} else {
		console.log(`введено не правильно значение для функции рандома`);
	}
}

function count_symbol(symbol, string) {
	symbol = symbol.toUpperCase();
	string = string.toUpperCase();
	if ((typeof(symbol)  === 'string') && (typeof(string) === 'string')) {
			return string.split(symbol).length-1;
	} else {
		console.log(`введено не правильное значение`);
	}
}

function get_string_length(str) {
	if (!str) {
		console.log(`Не правильно ввели строку для возврата длины без пробела`);
	} else {
		str = str.split('');
		for (let i = 0; i < str.length; i++) {
			if (str[i] == ' ') {
				str.splice(i, 1);
				i--;
			}
		}
		return str.length;
	}
}

function up_first(str) {
	if (!str) {
		console.log('Не правильно ввели строку для заглавных символов');
	} else {
	  return str[0].toUpperCase() + str.slice(1).toLowerCase();
	}
}

function search_string(search, string) {
	if ((!search) || (!string)) {
		console.log('Не правильно ввели данные для поиска подстроки');
	} else {
		string = string.toLowerCase();
		search = search.toLowerCase();
		return string.indexOf(search) != -1;
	}
}

 function truncate(str, maxlength) {
	if ((!str) || (isNaN(maxlength)) || (maxlength == null)) {
		console.log('Ввели не правильно даные для вставки ...');
	} else {
		return str.substr(0, maxlength) + '...';
	}
 }

function get_type_file( file_name ) {
	if (!file_name) {
		console.log('Ввели не правильно даные для нахождения расширения файла');
	} else {
		if (file_name.lastIndexOf('.') !== -1) {
			return file_name.substr(file_name.lastIndexOf('.'), file_name.length);
		} else {
			console.log('Ввели не правильно даные для нахождения расширения файла');
		}
	}
}

function get_short_fio(full_fio) {
	full_fio = full_fio.split(' ');
	console.log(full_fio);
	let surname = full_fio[0].slice(0, 1).toUpperCase() + full_fio[0].slice(1).toLowerCase();
	let name_patronymic = ` ${full_fio[1].slice(0, 1).toUpperCase()}.${full_fio[2].slice(0, 1).toUpperCase()}.`;
	return surname + name_patronymic;
}

function get_order(string) {
	string = string.split(' ');
	return string.sort();
}

function get_random(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function get_max(arr) {
	
	let result = arr[0];
	for (let i = 0; i < arr.length-1; i++) {
		if (arr[i] < arr[i+1]) {
			result = arr[i+1];
		}
	}
	return result;
}

function get_uniq_arr(arr) {
	for (let i = 0; i < arr.length; i++) 
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j, 1);
				j--;
			}
		}
	return arr;
}

function is_empty(obj) {
	return (Object.keys(obj).length === 0);
}

function sum_obj(obj) {
	let sum = 0;
	for (let value of Object.values(obj)) {
		sum += value;
	}
	return sum;
}

function min_max_obj(obj) {
	let max_value = 0;
	for (let val  of Object.values(obj)) {
		if (max_value < val){
			max_value = val;
		};
	}
	let min_value = max_value;
	for (let val of Object.values(obj)) {
		if (min_value > val) min_value = val;
	}
	for (let [key, val]  of Object.entries(obj)) {
		if (max_value == val) console.log('Максимальная оценка: ' + key, val);
		if (min_value == val) console.log('Минимальная оценка: ' + key, val);
	}
}