/* 
Hacer un programa que solicite una lista de números que corta cuando se ingresa un cero y luego mostrar por pantalla el máximo de ellos y la posición en la que fue ingresado.
*/

let number = parseInt(prompt("Enter a number"))

let max = 0 // Define max number
let first = 0 // Define the max to the firts numbers
let counter = 0 // Input numbers entered
let counterM = 0 // Max numbers position

while (number != 0) { // Cicle ended when number is 0

    if (first = 0) { // Define the firts max number with 
        max = number
        counter++
        bandera++

    } else {

        if (number > max) {
            max = number
            counter++
            counterM = counter

        } else {
            counter++
        }
    }

    number = parseInt(prompt("Enter a number"))

}

console.log("input numbers: "+counter+", Max number its " + max + " and the position input is " + counterM)

