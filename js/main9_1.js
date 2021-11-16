/*
Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.

Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.

сделать на jQuery
*/

let j = 0;
let l = 100;
setTimeout(function () {
	for (let i = 0; i < l; i++) { 
		$("<div/>").css(
			{
				'height': '70px',
				'width': '70px',
				'background': 'blue', 
		}).appendTo('body');
	}
}, 2000);

setTimeout(function () {
	$("div").css(
		{
			'height': '100px',
			'width': '100px',
			'background': 'purple',
		}
	)
}, 4000);

setTimeout(function () {
	$("div").text(function (index) {
		return ++index;
	});
}, 6000);

setTimeout(function () {
	$("div").css(
		{
			'background': function (index, value) {
				index++;
				if (index % 3 === 0) {
					j--;
					if (index % 15 === 0) {
						return 'khaki'
					} else {
						return  'red'
					}
				} else {
					j++;
					if (j < 4) {
						return  'yellow'
					}
				}
				
			},
			'background-image': function (index, value) {
				index++;
				if (index % 15 === 0) return 'linear-gradient(45deg, transparent 71px, white 50px)'
			}
		}
	)
}, 8000);

setTimeout(function () {
	$("body > div").filter(function(index) {
		index++;
		if ((index % 3 === 0)&&(index % 15 !== 0))
		return index
	}).remove();
}, 10000);

