/* 
Hacer un programa para ingresar una lista de números que corta cuando se
ingresa un cero y luego mostrar: la cantidad de números primos, la cantidad de
números pares, la cantidad de positivos y la cantidad de negativos.
*/

let priNumbers = 0
let evenNumbers = 0 
let NegNumbers = 0
let PosNumbers = 0
let totalNumbers = 0

console.log("Enter minimun two numbers")
let number = parseInt(prompt("Enter a number"))

while (number != 0) { // Cicle ended when number is 0

    totalNumbers = 0

    //Define positives or negative numbers
    if (number > 0) {
        PosNumbers++
    } else {
        NegNumbers++
    }

    // Define prime numbers

    // Divide the number with his equal and minior. 

    let remaining = 0
    let count = 0

    while (remaining <= number) {
        remaining++

        if (number % remaining == 0) {
            count++
        }
    }

    // Define if the number is prime with count = 2
    if (count == 2) {
        priNumbers++
    }


// Define even number
if (number%2 ==0){
    evenNumbers++
}

    number = parseInt(prompt("Enter a number"))
}

console.log(
    "Positive Numbers: " + PosNumbers +
    "\nNegative Numbers " + NegNumbers +
    "\nEven Numbers " + evenNumbers +
    "\nPrime Numbers " + priNumbers)




    

