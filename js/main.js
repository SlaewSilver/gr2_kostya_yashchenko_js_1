const PATRONYMIC_SPECIFIED = false;
const DATE_OF_BIRTH = 24;
const MONTH_OF_BIRTH = 03;
const YEAR_OF_BIRTH = 2001;
const NAME = 'Kostya ';

let surname = 'Yashchenko ';

console.log (`${NAME} ${surname} const(${typeof( NAME )}) variable(${typeof( surname )})`);
console.error (`patronymic specified = ${PATRONYMIC_SPECIFIED}, const(${typeof( PATRONYMIC_SPECIFIED )})`);

console.log (`birthday = (${DATE_OF_BIRTH}.${MONTH_OF_BIRTH}.${YEAR_OF_BIRTH}) = type_const(${typeof( DATE_OF_BIRTH )}.${typeof( MONTH_OF_BIRTH )}.${typeof( YEAR_OF_BIRTH )})`);

let dates = new Date();
let years = dates.getFullYear() - YEAR_OF_BIRTH;

console.log (`years = ${years}, type( years ) = ${typeof( years )} `);
 
let obgect_ = {
	_text: 'snails in the house pets',
	pets: true,
	floor: undefined,
	games: NaN,
}

let _text = 'snails in the house pets';
let pets = true;

console.log(`obgect_ = ${obgect_}`);
console.log(obgect_);
