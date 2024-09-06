/* 
Realizar el nuevamente el ejercicio 8 pero ahora debe devolver además la posición en la que fue encontrado cada uno de los mínimos
*/

// Define the first number by the minor 

let minor1 = Infinity // Define minor number
let minor2 = Infinity // Define second minor number
let first = 0 // First minor number
let counter = 0
let post1 = 0
let post2 = 0

console.log("Enter minimun two numbers")
let number = parseInt(prompt("Enter a number"))

while (number != 0) { // Cicle ended when number is 0
    counter++

    if (first == 0) {
        minor1 = number
        post1 = counter
        first++
        
    } else if (number < minor1) {

        minor2 = minor1
        minor1 = number
        post2 = post1
        post1 = counter

    } else if (number < minor2) {
        minor2 = number
        post2 = counter
    }

    number = parseInt(prompt("Enter a number"))

}

console.log (
    "Total number entered:" +counter+
    "\nMinor is "+minor1+
    "\nPosition minor is "+post1+
    "\nMinor two is "+minor2+
    "\nPosition minor two is "+post2)



