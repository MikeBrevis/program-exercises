/* Hacer un programa que solicite 20 números y luego emitir por pantalla el máximo de los números pares y el mínimo de los números impares. */

/* let acumulator = 0 
let cant = 0 */

contOdd = 0 // impar
contEven = 0 // par
MaxOdd = 0
MaxEven = 0

for (let i = 1; i <= 5; i++) { // Request five numbers 

    let number = parseInt(prompt("Enter the number " + i))

    if (number % 2 == 0) { // filter by even or even numbers

        if (contEven == 0) {
            MaxEven = number
            contEven++

        } else {
            if (number > MaxEven) {
                MaxEven = number
            }
        }

    } else { // filter by odd numbers

        if (contOdd == 0) {
            MaxOdd = number
            contOdd++

        } else {
            if (number > MaxOdd) {
                MaxOdd = number
            }
        }
    }
}

console.log("The max even entered number is " + MaxEven) //par
console.log("The max odd entered number is " + MaxOdd) //impar

