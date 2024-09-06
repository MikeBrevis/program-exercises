/* 
Hacer una función llamada “par” que reciba un número entero y devuelva 1 si es par o cero si no lo es. 
Hacer un programa para ingresar 20 números y mostrar por pantalla cuántos son pares.
*/


// Normal funtion

/* function parNumbers(a) {
return a % 2 == 0 ? `${a} is a even number` : `${a} is a odd number`
}; */

//Arrow funtion - Number is even or odd
const parNumbers = (a) => a % 2 == 0 ? `${a} is an even number` : `${a} is an odd number`;

let number1 = parNumbers(4);
let number2 = parNumbers(7);

console.log(number1, number2);

//Funtion for 20 numbers and show how many are even numbers

function array(numbers) {

    let evenNumbers = 0; // Acumulator
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0){
            evenNumbers++
        }
    }
    return evenNumbers;
}

const numbers1 = array([2,60,8,54,10,20,30,58,105]); // 8 even N
const numbers2 = array([1,2,3,4,5,6]); // 3 even N

console.log(`even numbers: ${numbers1}`);
console.log(`even numbers: ${numbers2}`);




