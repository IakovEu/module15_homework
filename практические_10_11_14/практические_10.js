//задание 1 

// let x = +prompt('Введите значение');

// console.log(typeof(x));

// if(typeof(x) === 'number' && !isNaN(x)){
//     if(x % 2){
//         console.log('нечетное');
//     } else{
//         console.log('четное');
//     }
// }else{
//     console.log('Упс, кажется, вы ошиблись');
// };

//задание 2

// let y = undefined;

// if(typeof(y) === "number"){
//     console.log('y — число');
// } else if(typeof(y) === "string"){
//     console.log('y — строка');
// } else if(typeof(y) === "boolean"){
//     console.log('y — логический тип');
// }else{
//     console.log('Тип y не определён');
// };

//задание 3 

// let str = "Hello"

// console.log(str.split('').reverse().join(''));

//задание 4  ( ... * (max - min) + min )

// let rand1 = Math.random() * (100 - 0) + 0;

// let rand2 = Math.round(rand1)

// console.log(Math.round(rand2));  

//задание 5

// let arr = [0, 1, true, 3, '4'];

// console.log(arr.length);

// arr.forEach(function(elem){         
//     console.log(elem); 
// }); 

//задание 6  

// let elements = [888, 888, 888, 888];
// let count = 0;

// for (let i = 1; i < elements.length; i++){
//     if(elements[i] !== elements[i - 1]){
//         count += 1;
//     };
// };

// if(count > 0){
//     console.log(false)
// }else{
//     console.log(true)
// }

//задание 7   Быстрее объект вывести, чем каждую переменную

// let mass = [undefined, null, 10 , 11, 0, '%', '', NaN ];
// let data = {
//     chet : 0,
//     nechet : 0,
//     zero : 0,
//     other : 0
// }

// for(i = 0; i < mass.length; i++){
//     if (mass[i] === null || isNaN(mass[i]) || mass[i] === ''){
//         data.other += 1;}
//     else if(mass[i] === 0){
//         data.zero += 1;
//     } else if (mass[i] % 2){
//         data.nechet += 1;
//     } else{
//         data.chet += 1;
//     }
// };

// console.log(data);

//задание 8 

// let fruits = new Map([
//     ["apple", "green"],
//     ["strawberry", "red"],
//     ["blueberry", "blue"]
//   ]);

// for (let [fruit, color] of fruits){
//     console.log(`Ключ — ${fruit}, значение — ${color}`);
// };
