/* 
Hacer un programa que solicite una lista de números que corta cuando se ingresa un cero y luego mostrar por pantalla el menor y el segundo menor.
*/

// Define the first number by the minor 

let minor = Infinity // Define minor number
let minor2 = Infinity // Define second minor number
let first = 0 // First minor number
let counter = 0

let number = parseInt(prompt("Enter a number"))

while (number != 0) { // Cicle ended when number is 0
    counter++


    if (first == 0) {
        minor = number
        first++

    } else {

        if (number < minor) {
            minor2 = minor
            minor = number
            
        } else if (number < minor2) {
            minor2 = number
        }
    }

    number = parseInt(prompt("Enter a number"))

}

console.log("total number entered:"+counter+" ,Minor is " +minor+ " ,minor two is " + minor2)



