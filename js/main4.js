let choice = prompt('Введите число для продолжения: 1(Игра - города), 2(всё остальное)', 1);

if (choice == 2) {
	const MIN = 500;
	const MAX = 888;

	/*
	let p = [3, 10, 2];
	let max_of_array = Math.max.apply(Math, p);
	console.log(max_of_array);
	*/
	let a = []
	let n = prompt('Введите размер массива', 5);

	
	for (let i = 0; i < n; i++) {
		a[i] = getRandomInt(MIN, MAX);
	}

	let result1 = get_min(a);
	
	console.log('Ваш массив');
	console.log(a);
	console.log('Минимальное значение');
	console.log(result1);

	let array_text = [];
	let input_text = prompt('Введите текст', 'ТЕЛЕФОН');

	reverse_text(input_text);
	console.log(`Строка в обратном порядке: ${array_text.join('')}`);

	function reverse_text (_text) {
		j = 0;
		for (let i = _text.length-1; -1 < i; i--) {
			array_text[j] = _text.substr(i, 1);
			//console.log (array_text);
			j++;
		}
	}

	function get_min(arr) {
	  let len = arr.length, min = Infinity;
	  while (len--) {
		if (arr[len] < min) {
		  min = arr[len];
		}
	  }
	  return min;
	};

	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min;
	}
} else {
	if (choice == 1) {
		let text1 = prompt('Введите слово',);
		let coint = 0;
		
		while (examination = true) {
			let text2 = prompt('Введите слово',);
			
			if ((text1 !== null) || (text2 !== null)) {
				text1 = text1.toLowerCase();
				text2 = text2.toLowerCase();
				
				if ((text1.substr(text1.length-1, 1)) == (text2.substr(0, 1))) {
					coint++;
				} else {
					alert(`Игра окончена. Ваши очки: ${coint}`);
					break;
				}
				
				text1 = text2;
			} else {
				alert(`Игра окончена. Ваши очки: ${coint}`);
				break;
			}
		}
	} else {
		alert(`Введил отличное значение от 1 и 2: ${choice}`);
	}
}


