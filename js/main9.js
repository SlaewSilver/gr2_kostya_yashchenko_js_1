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
let l = 100
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
	$("<div/>").addClass("rectangle1").css(
		{
			'height': '150px',
			'width': '50px',
			'background': 'turquoise', 
	}).appendTo('body');
	$("<div/>").addClass("rectangle2").css(
		{
			'height': '50px',
			'width': '150px',
			'background': 'gray', 
	}).appendTo('body');
}, 10000);
/*
//вторая часть, появляется при нажатии на Enter
 $("body").keypress(function(e) {
	if (e.which == 13) {
		$("div").remove();
		$("<div/>").addClass("rectangle1").css(
			{
				'height': '150px',
				'width': '50px',
				'background': 'turquoise', 
		}).appendTo('body');
		$("<div/>").addClass("rectangle2").css(
			{
				'height': '50px',
				'width': '150px',
				'background': 'gray', 
		}).appendTo('body');
	}
});
*/
$(document).on('click','div',function(){
	var color = $(this).css("background-color");
	if (color == 'rgb(64, 224, 208)') {
		alert('Бирюзовый');
	}
	if (color == 'rgb(128, 128, 128)') {
		alert('Серый');
	}
});
/*
$(document).on('mouseover','div',function(){
	let height_ = $(this).css("height");
	let width_ = $(this).css("width");
	console.log(`Высота: ${height_}; Ширина: ${width_}`);
});
*/
$(document).on('mouseover','div',function(){
	var color = $(this).css("background-color");
		if ((color == 'rgb(64, 224, 208)')||(color == 'rgb(128, 128, 128)')) {
		let height_ = $(this).css("height");
		let width_ = $(this).css("width");
		console.log(`Высота: ${height_}; Ширина: ${width_}`);
	}
});
