
//месяца______________________________

let seasons = ['', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

//недели______________________________

let weeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

//Вывести завтрашнюю дату в формате 26 ноября 2019г_________________________

console.log(get_tomorrow());

//высчитать разницу между днями______________________________

a = '7.25.2019';
b = '10.10.2019';

console.log(`Разница в днях между датами ${a} i ${b}: ` + difference_days(a,b));
console.log(`Рабочие дни между датами ${a} i ${b}: ` + get_count_work_days(a,b));

//до нового года______________________________

console.log(`от текущей даты: ` + get_count_days());
console.log(`от ${a} : ` + get_count_days(a));

//возврат дня недели______________________________

console.log(`Дата - ${a} - день недели: ` + get_day(a));


function get_tomorrow() {
	let today = new Date();
	let tomorrow = new Date(today.getTime() + (24 * 3600 * 1000));
	let day_tomorrow = tomorrow.getDate(); 
	let month_tomorrow = tomorrow.getMonth() + 1; //счисление от нуля в js
	let year_tomorrow = tomorrow.getFullYear(); 
	return (`${day_tomorrow} ${seasons[month_tomorrow]} ${year_tomorrow}г`)
}

function difference_days(value1, value2) {
	let date1 = new Date(value1);
	let date2 = new Date(value2);
	let timeDiff = Math.abs(date2.getTime() - date1.getTime());
	let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	if ((isNaN(date1))||(isNaN(date2))) {
		console.log('дата введена не верно');
	} else {
	return diffDays;
	}
}

//js новая неделя начинается с воскресенья
function get_count_work_days(start_value, end_value1) {
	start_date = new Date(start_value);
	end_date = new Date(end_value1);
    let count = 0;
    let cur_date = start_date;
    while (cur_date <= end_date) {
        let day_of_week = cur_date.getDay();
        if(!((day_of_week == 6) || (day_of_week == 0))) 
           count++;
        cur_date.setDate(cur_date.getDate() + 1);
    }
	if ((isNaN(start_date))||(isNaN(end_date))) {
		console.log('дата введена не верно');
	} else {
    return count;
	}
}

function get_count_days(value) {
	let now
	if ((!value)||(value == null)) {
		now = new Date();
	} else {
		now = new Date(value);
	}
	let ny = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
	return ('До Нового ' + ny.getFullYear() + ' осталось ' + Math.floor((ny.getTime() - now.getTime()) / 86400000) + ' дн.'); 
}

function get_day(date) {
	if ((!date)||(date == null)) {
		console.log('Введено не правильное знаечение даты');
	} else {
		let date_ = new Date(date);
		return weeks[date_.getDay()];
	}
}



