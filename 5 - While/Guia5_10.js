/* 
Hacer un programa que solicite una lista de números que corta cuando se
ingresa un cero y luego emitir por pantalla el máximo de los números
negativos y el mínimo de los números positivos.
*/

let maxNeg = Infinity 
let minPos = Infinity 
let first1 = 0 
let first2 = 0 

console.log("Enter minimun two numbers")
let number = parseInt(prompt("Enter a number"))

while (number != 0) { // Cicle ended when number is 0

    if (number > 0) {

        if (first1 == 0) {
            minPos = number
            first1++

        } else if (number < minPos) {
            minPos = number
        } 

    }else {
        if (first2 == 0) {
            maxNeg = number
            first2++

        } else if (number > maxNeg)
            maxNeg = number
    }

    number = parseInt(prompt("Enter a number"))
}
console.log(
    "Max negative: " + maxNeg +
    "\nMinor positive " + minPos)





