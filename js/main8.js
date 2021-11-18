/*
1 Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным. Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.

Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.
*/

let j = 1;
let div = [];
let quantity = 11;

repeat();
setTimeout(get_5, 13000);

function create_div (...arrg) {
	add_style(arrg[0], arrg[1], arrg[2], arrg[3]);
	if (arrg[4] == 1) {
		for (let i = 1; i < quantity; i++) {
			div[i] = document.createElement('div');
			if (i % 3 == 0) {
				div[i].className = 'task';
			} else {
				div[i].className = 'task2';
			}
			document.body.append(div[i]);
		}
	} else {
		if (arrg[4] == 4) {
			for (let i = 1; i < quantity; i++) div[i].remove();
			document.body.style.background = 'black';
		}	
	}
}

function repeat () {
	switch (j) {
		case 1: 
			setTimeout(create_div, 3000 * j, '50', '50', 'blue', 'blue', j);
			break;
		case 2:
			setTimeout(create_div, 3000 * j, '100', '100', 'red', 'red', j);
			break;
		case 3: 
			setTimeout(create_div, 3000 * j, '100', '100', 'red', 'yellow', j);
			break;
		case 4:
			setTimeout(create_div, 3000 * j, '100', '100', 'red', 'yellow', j);
			break;
	}
	j++;
	let result = (j < 5) ? repeat() : '';
}

//в head добавить класс
function add_style(...arrg) {
	if ((document.querySelectorAll('style')).length == 1) document.querySelector('style').remove()
	let add_list_style = document.createElement('style');
	let text_style = document.createTextNode('\n.task {\n height: '+arrg[0]+'px; \n width: '+arrg[1]+'px; \n background: '+arrg[2]+'; \n}\n.task2 {\n height: '+arrg[0]+'px; \n width: '+arrg[1]+'px; \n background: '+arrg[3]+'; \n}');
	add_list_style.appendChild(text_style);
	document.head.appendChild(add_list_style);
	let text_style2 = document.createTextNode('\n.task3 {\n height: 50px; \n width: 150px; \n background: green; \n}\n.task4 {\n height: 100px; \n width: 200px; \n background: orange; \n}');
	add_list_style.appendChild(text_style2);
	document.head.appendChild(add_list_style);
}

function get_5 () {
	rectangle1 = document.createElement('div');
	rectangle1.onmouseover = 'background: red';
	rectangle1.className = 'task3';
	document.body.append(rectangle1);
	rectangle2 = document.createElement('div');
	rectangle2.className = 'task4';
	document.body.append(rectangle2);
	rectangle1.addEventListener('click', function(event) {
	console.log(`прямоугольник зелёный`);
	});
	rectangle2.addEventListener('click', function(event) {
		console.log(`прямоугольник жёлтый`);
	});
	rectangle1.onmouseover = function(event) {
		console.log(`высота 50 пикселей, ширина 150 пикселей`);
	};
	rectangle2.onmouseover = function(event) {
		console.log(`высота 100 пикселей, ширина 200 пикселей`);
	};
}