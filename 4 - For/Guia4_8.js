/* Hacer un programa que solicite 20 números y luego mostrar por pantalla el menor de ellos y la posición en la que fue encontrado. */

let acumulator = 1
let minorPosition = 1
let minor = 0

for (let i = 1; i <= 3; i++) {

    let number = parseInt(prompt("Enter a number"))

    if (i == 1) { // Define the firts number as the minimun
        minor = number

    } else { 
        if (number < minor) { 
            minor = number
            minorPosition = acumulator
        }
    }

    acumulator++
}
console.log("minor number " + minor + " Position: " + minorPosition)
