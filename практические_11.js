// Задание 1

let array = [undefined, null, 10 , 11, 0, '%', '', NaN];

function getDataClassification(){
    let data = {
        even : 0,
        odd : 0,
        zero : 0,
        other : 0
    }

    for(i = 0; i < array.length; i++){
        if (array[i] === null || isNaN(array[i]) || array[i] === ''){
            data.other += 1;}
        else if(array[i] === 0){
            data.zero += 1;
        } else if (array[i] % 2){
            data.odd += 1;
        } else{
            data.even += 1;
        }
    };

    console.log(data);
};

getDataClassification();

// Задание 2     

function estimate (num){
    if (num > 1000){
        console.log("Данные неверны");
    } else if(num === 0 || num === 1){
        console.log("Обращаю внимание на цифры 0 и 1")
    }else{
        let count = 0; 
        for (let i = 2; i <= 333; i++){   
            if (num % i === 0){
                count += 1;
            }
        }
        if (count > 1){
            console.log("Число не совсем простое");
        } else{
            console.log("Число простое");
        }
    }
};

estimate(163);

// Задание 3

function mainFunc(number1){
    return function (number2){
        return number1 + number2
    }
}

console.log(mainFunc(1)(44));

// Задание 4 

// 1вариант
// let y = 0;

// function order(num1, num2){ 
//     if (y === num2){
//         clearInterval(int)
//     } else if(y < num1){
//         y += num1;
//         console.log(num1);
//     }else{
//        console.log(y += 1);
//     }
// }

// const int = setInterval(order, 1000, 5, 15);

// 2 вариант
function timer(first, second) {
    let current = first;
    let interval = setInterval(function(){
      console. log(current);
      if (current === second) {
        clearInterval(interval);
      }
      current++
    },1000);
  }
  
  timer(5,15);

// Задание 5 // 
// 1 вариант
let degree1 = (x, n) => console.log(Math.pow(x,n));

degree1(3, 4);
// 2 вариант
let degree2 = (x, n) => console.log(x ** n);

degree2(5, 3);


