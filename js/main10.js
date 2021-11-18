/*
Домашнее задание! 
С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных) 
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.

Сделайте обязательно хотя бы ту часть, которую сможете!
Все вопросы и уточнения по заданию пишем сюда, чтобы ВСЕ были в курсе.
*/

//263091487843-v95qj99h0756avkr7nv2moo4cei7dee0.apps.googleusercontent.com

let items = [{},{},{}];

function addValue(obj, key, value) {
    if (obj.hasOwnProperty(key)) {
        obj[key].push(value);
    } else {
        obj[key] = [value];
    }
}

function alert_of_button (value) {
	alert(`Title: ${items[2].object_[value].title}`);
}

function delete_of_button (value) {
	document.getElementsByClassName('task3')[value].remove();
	
	let k = document.getElementsByClassName('task3').length;	
	for (let i=0; i < k; i++) {
		console.log('rabotay');
		document.getElementsByClassName('delete')[i].setAttribute('onclick', `delete_of_button(${i})`);
	};
}

window.onload = function() {
	let func_img = new Promise((resolve) => {
		fetch('https://avatars.mds.yandex.net/get-zen_doc/233051/pub_5d5665bd5ba2b500aeee9366_5d566602d5135c00adea28c2/scale_1200')
			.then((response) => response.blob())
			.then((myBlob) => {
				let objectURL = URL.createObjectURL(myBlob);
				for (let i=0; i < 100; i++) {
					img1 = document.createElement('img');
					img1.style.cssText = 'height: 100px; width: 200px';
					img1.className = 'img1_';
					img1.src = objectURL;
					addValue(items[0], 'img_', img1);
				}
				resolve(img1);
			});
	});
	let buttons = new Promise((resolve) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				
				for (let i=0; i<json.length; i++) {
					div_box = document.createElement('div');
					div_box.style.cssText = 'display: flex; justify-content: space-evenly;';
					div_box.className = 'button_box';
					addValue(items[1], 'box_', div_box);
					
					button_alert = document.createElement('button');
					button_alert.className = 'alerts';
					button_alert.innerText = 'действие alert';
					button_alert.setAttribute ('onclick', `alert_of_button(${i})`);
					addValue(items[1], 'alert_', button_alert);
					
					button_delete = document.createElement('button');
					button_delete.className = 'delete';
					button_delete.innerText = 'delete';
					button_delete.setAttribute ('onclick', `delete_of_button(${i})`);
					addValue(items[1], 'delete_', button_delete);
				}
				resolve();
			});
	});
	let func_text = new Promise((resolve) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {				
				for (let i=0; i < json.length; i++) {
					rectangle1 = document.createElement('div');
					rectangle1.className = 'task3';
					rectangle1.style.cssText = 'text-shadow: 1px 1px 2px black, 0 0 1em red; color: white; font-size: 2em;';
					rectangle1.innerText = `Title: ${json[i].title}\n Body: ${json[i].body}`;
					addValue(items[2], 'div_', rectangle1);
					addValue(items[2], 'object_', json[i]);
				}
				resolve();
			});
	});
	Promise.all([func_img,func_text,buttons]) 
		.then(() => {
			for (let i=0; i < items[2].div_.length; i++) {
				document.body.append(items[2].div_[i]);
			}
			for (let i=0; i < items[2].div_.length; i++) {
				document.getElementsByClassName('task3')[i].appendChild(items[0].img_[i]);
				document.getElementsByClassName('task3')[i].appendChild(items[1].box_[i]);
			}
			for (let i=0; i < items[2].div_.length; i++) {
				document.getElementsByClassName('button_box')[i].appendChild(items[1].alert_[i]);
				document.getElementsByClassName('button_box')[i].appendChild(items[1].delete_[i]);
			}
		});
}



