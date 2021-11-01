let min;
let max; 
let result;
let a = prompt('Введите № задачи js_3 (1 - отрезок, числа делимые на 6; 2 - угадывание числа)', 1);
const MAXIMUM_NUMBER_OF_ATTEMPTS = 10;
	let confirmation;
	
a = Number(a);

if (a == 1) {
	let empty; //переменная перестановки
	let i;
	let result2 = 0; //количество переменных

	min = prompt('Введите первую переменную ');
	max = prompt('Введите вторую переменную ');
	result = 0;
	
	let min_allert = min;
	let max_allert = max;
	
	min = Number(min);
	max = Number(max);
	
	if ((!(isNaN(min))) && (!(isNaN(max)))) {
		if (min > max) {
			//перестановка если 1-е число меньше 2-го
			empty = min;
			min = max;
			max = empty;
		}
		console.log(min);	
		console.log(max);	
		for (i = Math.round(min); i <= max; i++) {
			if (i % 6 === 0) {
			result = i + result; 
			result2++; //подсчёт кол-ва значений делимых на 6
			}
		}
		console.log(result);	
		if ((10 < result2 % 100) && (result2 % 100 < 15)) {
			alert(`Количество кратных 6 - ${result2} чисел и их сумма - ${result}`);
		} else {
			switch (result2 % 10) {
				case 1: alert(`Количество кратных 6 - ${result2} число и их сумма - ${result}`);   break;
				case 2:
				case 3:
				case 4: alert(`Количество кратных 6 - ${result2} числа и их сумма - ${result}`);   break;
				default: alert(`Количество кратных 6 - ${result2} чисел и их сумма - ${result}`);   break;
			}
		}
	} else {
		if ((isNaN(min)) && (isNaN(max))) {
			alert(`Не верные обе переменные: ${min_allert} ${max_allert}`);
		} else 
			if ((!(isNaN(min))) && (isNaN(max))) {
				alert(`Не верная вторая переменная: ${max_allert}`);
			} else {
				alert(`Не верная первая переменная: ${min_allert}`);
			}
	}
} else if (a == 2) {
	
	min = 0;
	max = 100;
	
	for (let attemps = 0; attemps < MAXIMUM_NUMBER_OF_ATTEMPTS; attemps++) {
		let n = min + (max - min) / 2;
		let answer = confirm(`Ваше число больше ${n}?`);
		if (answer) {
			min = n;
		} else {
			max = n;
		}
		result = (max - min) <= 0.5;
		if (((result)) == true) {
			if (answer == false) {
					let confirmation = alert(` Ваше число ${Math.round(min)}`);
				} else {
					let confirmation = alert(` Ваше число ${Math.round(max)}`);
				}
			break;
		}
	}
} else {
	alert('Введено не правильное значение');
}

let location_reload = prompt ('Обновить страницу? 1 - да', 0);

if (location_reload == 1) {
	location.reload();
}




