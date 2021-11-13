//случайное целое число от a до b______________________________

//let a = prompt('случайное целое число от a', '-10');
//let b = prompt('случайное целое число до b', 10);

let a = '-10';
let b = 10;

console.log(`Cлучайное целое число от ${a} до ${b}: ` + random(a, b));

//количество букв b в строке a______________________________

//a = prompt('Введите строку', 'можно использовать');
//b = prompt('Введите для поиска количества встречающегося символа в строке', 'о');

a = 'можно использовать';
b = 'о';

console.log(`количество букв ${b} в строке - ${a} -: ` + count_symbol(b, a));

//Строка для возврата длины без пробела______________________

//a = prompt('Введите строку для возврата длины без пробелов', `можно использовать`);

a = `можно использовать`;

console.log(`Длина без пробела строки - ${a} -: ` + get_string_length(a));

//строка с заглавным символом______________________________

//a = prompt('Введите строку для заглавного символа', `можно использовать`);

a = `можно использовать`;

console.log(`строка - ${a} - с заглавным символом: ` + up_first(a));

//проверка подстроки в строке (метод indexOf)______________________________

//b = prompt('Введите строку для подстроки', 'Привет мир');
//a = prompt('Введите подстроку для поиска в строке', 'прив');

b = 'Привет мир';
a = 'прив';

console.log(`проверка подстроки - ${a} - в строке - ${b} -: ` + search_string(a, b));

//вставка ограничителя для строки '...'______________________________

//a = prompt('Строка с ограничением', 'можно использовать');
//b = prompt('Ограничение кол-во букв', 5);

a = 'можно использовать';
b =  5;

console.log(`Строка - ${a} - с ограничением на - ${b} - символе: ` + truncate(a, b));

//расширение файла______________________________

//a = prompt('Введите название файла с расширением', 'blok.txt');

a = 'blok.txt';

console.log(`Расширение файла - ${a} -: ` + get_type_file(a));

//фио кратко______________________________

//a = prompt('Введите ФИО', 'Янголенко Ирина Василивна');

a = 'Янголенко Ирина Василивна';

console.log(`Кратко ФИО - ${a} -: ` + get_short_fio(a));

//сортировка в алфавитном порядке______________________________

//a = prompt('Введите через пробел слова для сортировки', 'Янголенко Александра Василивна');

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