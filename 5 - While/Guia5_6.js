/* Hacer un programa que solicite UN número y luego calcule y emita un cartel aclaratorio si el mismo es primo o no es primo.
Nota: usando While. Ya lo hicimos con FOR, ahora con While. */

let number = parseInt(prompt("Enter a number"))
let divisibles = 1
let count = 0

// Define condition while
while (divisibles <= number) {


    if (number % divisibles == 0) {
        count++
    }
    divisibles ++ // increase divisible by one 
}

if (count == 2) {
    console.log("Number "+ number+" is prime")
} else {
    console.log("Number "+ number+" is not prime")
}
