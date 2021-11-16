/*
Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.

сделать на jQuery
*/
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

$(document).on('click','div',function(){
	var color = $(this).css("background-color");
	if (color == 'rgb(64, 224, 208)') {
		alert('Бирюзовый');
	}
	if (color == 'rgb(128, 128, 128)') {
		alert('Серый');
	};
});

$(document).on('mouseover','div',function(){
	let height_ = $(this).css("height");
	let width_ = $(this).css("width");
	console.log(`Высота: ${height_}; Ширина: ${width_}`);
});