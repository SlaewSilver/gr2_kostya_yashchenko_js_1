/*
С помощью метода fetch получить масcив данных по Google Api Calendar 

и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных) 
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.
*/
let startDate = null; 
let finishDate = new Date();; 
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
	if (confirm(`Уверены, что нужно удалить?`)) {
		document.getElementsByClassName('task3')[value].remove();
		
		let k = document.getElementsByClassName('task3').length;	
		for (let i=0; i < k; i++) {
			document.getElementsByClassName('delete')[i].setAttribute('onclick', `delete_of_button(${i})`);
		};
	}
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
				resolve();
			});
	});
	let content_element = new Promise((resolve) => {
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
				
				for (let i=0; i < json.length; i++) {
					rectangle1 = document.createElement('div');
					rectangle1.className = 'task3';
					rectangle1.style.cssText = 'text-shadow: 1px 1px 2px black, 0 0 1em red; color: white; font-size: 2em;';
					rectangle1.innerText = `
						Title: ${json[i].title} 
						Body: ${json[i].body}\n`;
					addValue(items[2], 'div_', rectangle1);
					addValue(items[2], 'object_', json[i]);
				}
				resolve();
			});
	});
	Promise.all([func_img,content_element]) 
		.then(() => {
			//for (let j=0; j < 100; j++) {
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
			//}
			startDate = new Date(); 
			console.log(`load: ${startDate - finishDate} ms`);		
		});
}




