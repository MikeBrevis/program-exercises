/* Hacer un programa que solicite 10 números y luego mostrar por pantalla el máximo de ellos y la posición en la que fue ingresado. */

let acumulator = 1
let maxPosition = 1
let max = 0

for (let i = 1; i <= 10; i++) {

    let number = parseInt(prompt("Enter a number"))
    if (number>max) {
        max = number
        maxPosition = acumulator
    }
    acumulator++
}

console.log ("max number "+max+" Position: "+maxPosition)
