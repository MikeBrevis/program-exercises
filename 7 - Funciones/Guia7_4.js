/* 
Hacer una función llamada “primo” que reciba un número entero y devuelva 1 si el número es primo o cero si no lo es.
*/

//Arrow funtion - Number is even or odd

/* const parNumbers = (a) => a % 2 == 0 ? `${a} is an even number` : `${a} is an odd number`;

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
} */

function primeNumber(a) {
    let counter = 0;
    let i = 1;

    while (i <= a) {
        a % i == 0 ? counter++ : null;
        i++;
    }

    const result = counter == 2 ? `${a} is a prime number` : `${a} is not a prime number`;

    return result
}

console.log(primeNumber(5));

/* Hacer un programa para ingresar números. El lote corta cuando se ingresa un número cero. Informar el promedio teniendo en cuenta sólo los números primos. */

//
function primeNumbers(numbers) {

    let totalPrimeNumbers = 0;
    let sumPrimeNumbers = 0;


// for cicle for all numbers in array 
    for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);

//Cut cicle when array number is [0]

if (numbers[i] == 0){
    break
}

// while cicle for prime number

let count = 0;
let divisorNumber = 1;

while (divisorNumber <= numbers[i]){
    if (numbers[i] % divisorNumber == 0){;
    count ++
    }
    divisorNumber ++
}

if (count == 2){
    totalPrimeNumbers ++
    sumPrimeNumbers += numbers[i]
}

}
const overagePrimeNumbers = sumPrimeNumbers/totalPrimeNumbers
return `The overage of prime numbers is ${overagePrimeNumbers}`
}

console.log(primeNumbers([2, 3, 5, 7]));  // overage 4.25
console.log(primeNumbers([1, 2, 3, 4, 5]));  // overage 3.33






