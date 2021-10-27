const NAME = 'Kostya ';
let surname = 'Yashchenko ';
const PATRONYMIC_SPECIFIED = false;

console.log ( NAME + surname + ', const( ' + typeof( NAME ) + 
	' ) variable( ' + typeof( surname ) + ' )');
console.error ( 'patronymic specified = ' + PATRONYMIC_SPECIFIED + 
	', const( ' + typeof( PATRONYMIC_SPECIFIED ) + ' )' )

const DATE_OF_BIRTH = 24;
const MONTH_OF_BIRTH = 03;
const YEAR_OF_BIRTH = 2001;

console.log ( 'birthday = ( '+ DATE_OF_BIRTH + '.' +  
	MONTH_OF_BIRTH + '.' + YEAR_OF_BIRTH + ' ) = type_const(' + 
	typeof( DATE_OF_BIRTH ) + '.' + typeof( MONTH_OF_BIRTH ) + '.' + 
	typeof( YEAR_OF_BIRTH ) + ')' );

let date = new Date();
let years = date.getFullYear() - YEAR_OF_BIRTH;

console.log ( 'years = ' + years + ', type( years ) = ' + typeof( years ) );

let _text = 'snails in the house pets';
let pets = true;

console.warn ( _text + ' ( _text ) = '  + pets + ' ( pets )' ); 
console.warn ( 'type( _text ) = ' + typeof( _text ) + ' and type( pets ) = ' + typeof( pets ) );
