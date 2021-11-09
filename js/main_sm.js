/*let a = [];
let b = [];
let j = prompt('Введите длину масива 1', 2);
let k = prompt('Введите длину масива 2', 2);
if ((j => 0)&&(k => 0)) {
	for (let i = 0; i < j; i++){
		a[i] = prompt(`введите ${i+1} елемент из ${j}`);
		if (a[i] == null) {
			i--;
			alert('ввели не правильное знаечение');
		}
	}
	for (let i = 0; i < k; i++){
		b[i] = prompt(`введите ${i+1} елемент из ${k}`);
		if (b[i] == null) {
			i--;
			alert('ввели не правильное знаечение');
		}
	}

	examination();
	console.log(result);

	function examination () {
		if (a.length == b.length) {
			for (let i = 0; i < a.length; i++) {
				if (a[i] == b[i]) {
					result = true;
				} else {
					result = false;
					break;
				}
			}
		} else {
			result = false;
			
		}
		return result;
	}	
}
*/
let s = [];
let g = prompt('Введите длину масива 3', 3);

if (g => 0) {
	for (let i = 0; i < g; i++){
		s[i] = prompt(`введите ${i+1} елемент из ${g}`);
		if (s[i] == null) {
			i--;
			alert('ввели не правильное знаечение');
		}
	}
}
j=2;
new_values(s);
console.log(p);

function new_values(f) {
	let p = [];
	for (let i = 0; i < j; i++) {
		k = prompt(`введите ${i+1} елемент из ${j}`);
		p = f.push(k);
	}
	
	for (let i = 0; i < g; i++) 
		for (let j = 0; j < g; j++){
			if (p[i] = f[j]) {
				p.splice(i, 1);
			}
		}
	return p;
}

