import { getPercents, reverseStr, getMonth } from './1.js';

function test() {
	let result = getPercents(10, 200);
	let expected = 20;
	result === expected ? console.log('Функция getPercents работает') : console.log('Функция getPercents не работает');
	let result2 = reverseStr('abc+');
	let expected2 = '+cb1a';
	result2 === expected2 ? console.log('Функция reverseStr работает') : console.log('Функция reverseStr не работает');
    let result3 = getMonth(2);
	let expected3 = 'февраль';
	result3 === expected3 ? console.log('Функция getMonth работает') : console.log('Функция getMonth не работает');
}

test();
