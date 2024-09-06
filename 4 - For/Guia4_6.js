/* Hacer un programa que solicite UN número y luego calcule y emita un cartel aclaratorio si el mismo es primo o no es primo. */

console.log("Enter a number, then it will indicate whether its a prime number or not ")

let number = parseInt(prompt("Enter the number"))
let cons = 0


//The number is prime when its divisible by 1 or by itself

for (let i = 1; i <= number; i++) { // Ciclo allows divide the number by all whole numbers minors to 1

    if (number % i == 0) {
        cons++
    }
}

    if (cons == 2) {
        console.log("The number entered  is prime")
    } else {
        console.log("The number entered is not prime")
    }


