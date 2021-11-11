let i;
let l = 0;
let name = 'Новый калькулятор';

start_calculator();
but.style.display = "block";
but.onclick = start_calculator;

function start_calculator () {
	while ((exit = prompt('Подтвердить пустую строку, что бы обратиться к калькулятору', )) == '') {
		i = prompt('Введите число (1-сложение; 2-вычетание; 3-умножение; 4-деление; 5-очистить консоль)', 1);
		if ((i>0)&&(i<5)) {
			name = prompt('Введите название калькулятору', name);
		}
		if (i>5) alert('Ввели не правильное значение для калькулятора');
		switch (i){
			case '1':
				let calculator1 = new Run_calculator(name).sum(...input());
				break;
			case '2':
				let a = prompt('Введите вычитаемое',2);
				if ((!isNaN(a))&&(a != null)) {
					let b = prompt('Введите вычитатель',3);
					if ((!isNaN(b))&&(b != null)){
						let calculator2 = new Run_calculator(name).sub(a,b);
					} else {
						alert(`Не допустимая вторая переменная: ${b}`);
					}
				} else {
					alert(`Не допустимая первая переменная: ${a}`);
				}
				break;
			case '3':
				let calculator3 = new Run_calculator(name).mul(...input());
				break;
			case '4':
				let d = prompt('Введите делимое',2);
				if ((!isNaN(d))&&(d != null)) {
					let f = prompt('Введите делитель',3);
					if ((!isNaN(f))&&(f != null)&(f != 0)){
						let calculator4 = new Run_calculator(name).div(d,f);
					} else {
						alert(`Не допустимая вторая переменная: ${f}`);
					}
				} else {
					alert(`Не допустимая первая переменная: ${d}`);
				}
				break;
			case '5': console.clear();
		}
	}
}
function input () {
	let arr = [];
	let j=0;
	
	while(((arr[j]=prompt(`Переменная № ${j+1}, подтвердите пустую строку, для окончания ввода`, )) !== '')&&(arr[j] != null)&&(!isNaN(arr[j]))){
		j++;
	};
	arr.pop();
	return arr;
};	

function Run_calculator (name) {
	this.name = name;	
	this.sum = function (...arrg) {
		if (arrg.length > 0) {
			let result = 0;
			
			for (let value of Object.values(arrg)) {
				result += Number(value);
			}
			this.box(arrg, undefined, undefined, result);
			return result;
		} else {
			alert('Ввели не правильное значение для суммы');
		}
	};	
	this.sub = function (subtrahend, subtractor) {
		result = subtrahend - subtractor;
		this.box(undefined, subtrahend, subtractor, result);
		return result;
	};
	this.mul = function (...arrg) {
		if (arrg.length > 0) {
			let result = arrg[0];
			
			for (let i = 1; i < arrg.length; i++) {
				result *= arrg[i];
			}
			this.box(arrg, undefined, undefined, result);
			return result;
		} else {
			alert('Ввели не правильное значение для умножения');
		}
	};
	this.div = function (dividend, divider) {
		result = dividend / divider;
		this.box(undefined, dividend, divider, result);
		return result;
	};
	this.box = function (arr, meaning1, meaning2, resu) {
		let date = new Date();
		let action;
		
		switch (i) {
			case '1': action = 'сумма'; break;
			case '2': action = 'вычитание'; break;
			case '3': action = 'умножение'; break;
			case '4': action = 'деление'; break;
		}
		
		date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
		if ((i == 2)||(i ==4)) {
		console.log(`${this.name} (${date}): ${action} = ${resu}, (${meaning1}, ${meaning2})`);
		} else {
			console.log(`${this.name} (${date}): ${action} = ${resu}, (${arr})`);
		}
	};
};

/*

эксперименты - сдвиг по заданию(без указания в функции остаточных параметров, двух переменных)
работает без деления, не полное оформление вывода;

let log = [];
let ind = 0;
let i ;
let l ;
let result;

while ((exit = prompt('', )) == '') {
	i = prompt('Введите число (1-сложение; 2-вычетание; 3-умножение; 4-деление)', 1);
	
	let date = new Date();
	
	date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
	console.log(date);
	
	let calculator = new Create_calculator('moio');
	
	console.log('ввели начало '+exit);
	
	switch (i){
		case '1':
			result = calculator.sum();
			break;
		case '2':
			result = calculator.subtraction();
			break;
		case '3':
			result = calculator.multiplication();
			break;
		case '4':
			result = calculator.division();
			break;
	}
	//result = calculator.sum();
	console.log(result);
	log[ind] = `${result} `;
	ind++;
}
console.log(log);

function Run_calculator (name) {
	this.name = name;
	this.input = function () {
		let arr = [];
		let j=0;
		if ((i == 1)||(i == 3)) {
			while(((arr[j]=prompt('jjk', )) !== '')&&(arr[j] != null)&&(!isNaN(arr[j]))){
				j++;
			};
			arr.pop();
		};
		if ((i == 2)||(i == 4)) {
			for (let s = 0; s < 2; s++) {
				arr[s] = prompt('ss',);
			}
		}
		console.log(` ${arr}`);
		//this.arr = arr.join('-');
		return arr;
	};
	this.sum = function () {
		arr = this.input().split('-').map(Number);
		console.log(arr);
		return arr.map(i=>x+=i, x=0).reverse()[0];
	};
	
	this.subtraction = function () {
		this.arr = this.input().split('-').map(Number);
		console.log(this.arr);
		return this.arr = this.arr[0] - this.arr[1];
	};
	this.multiplication = function () {
		this.arr = this.input().split('-').map(Number);
		console.log(this.arr);
		return this.result = this.arr.reduce((present, next) => present * next);
	};
	this.division = function () {
		
	};
	this.box = function () {
		let date = new Date();
		let value = this.input().split('-').map(Number);
		
		date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
		console.log(date);
	};
};

function examination () {
	
}
*/
