let _choice = prompt('введите число условий задания js_2 (1 дни - 2 машина)', 1);
let _text;

_choice = Number(_choice);

if (_choice == 1) {
	let log_num;
	let	num = prompt('введите число', 0);

	log_num = num;
	num = Number(num);

	if (Number.isInteger(num)) {
		if ((10 < num) && (num < 15)) {
			_text = 'дней' ;
		} else {
			num = num % 10;
			_text = (num == 1) ? 'день' : 
			_text = ((num < 5) && (num != 0)) ? 'дня' :
			_text = ((num < 10) || (num == 0)) ? 'дней' : '';
		}
		console.log(log_num + ' ' + _text, ', тип: ', typeof(log_num));
	} else {
		console.warn(log_num +' - не является днём');
	}
} else {
	if (_choice == 2) {
	
		let	way = prompt('введите расстояние (км)', 0);
		let	diameter = prompt('введите диаметр колеса машины (дюймы)', 0);
		let pi = 3.14;
		let alert_one_wheel_turn;
		let log_way = way;
		let log_diameter = diameter;
		
		way = Number(way);
		diameter = Number(diameter);
		
		if ((isNaN(way)) || (isNaN(diameter))) {
			_text = ((isNaN(way)) && (isNaN(diameter))) ? console.log('обе переменные не являются числом: ' + log_way + ' и ' + log_diameter) :
				_text = ((isNaN(way)) && (!(isNaN(diameter)))) ? console.log('Количество километров "' + log_way + '" не является числом') : console.log('Диаметр колеса "' + log_diameter + '" не является числом');
		} else {
			if (diameter !== 0) {
				circumference = diameter * pi;
				circumference = (circumference * 2.54) / 100000;
				one_wheel_turn = way / circumference;
				alert_one_wheel_turn = one_wheel_turn;
				
				if (!(isNaN(one_wheel_turn))) {
					if ((10 < one_wheel_turn) && (one_wheel_turn < 15)) {
						_text = 'оборотов' ;
					} else {
						one_wheel_turn = one_wheel_turn % 10;
						_text = (one_wheel_turn == 1) ? 'оборот' : 
						_text = ((one_wheel_turn < 5) && (one_wheel_turn != 0)) ? 'оборота' :
						_text = ((one_wheel_turn < 10) || (one_wheel_turn == 0)) ? 'оборотов' : '';
					}
					alert('За ' + log_way + ' (км) совершает ' + (alert_one_wheel_turn).toFixed(0) + ' ' + _text);
				}
			} else {
				console.log('Зачем считать диаметром ноль?');
			}
		}
	} else {
		alert('ввели не верное значение');
		location.reload()
	}
}






