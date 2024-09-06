/* Hacer un programa para ingresar 10 números y luego calcule y emita el mayor de los primos de la lista. En caso de no haber ningún número primo, deberá aclararlo con un cartel. */

let Maxprime = 0 // Its define out of the cicle for

for (let ciclos = 1; ciclos <= 10; ciclos++) {

    // Number are required

    let number = parseInt(prompt("Enter the number " + ciclos))
    console.log(ciclos, number)


    // Cicle for find the remainder of the number from 1 to the same amount. 

    // counter = 2 / Prime number
    //counter = 0 / No prime number

    let remainder = 0

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            remainder++
        }
    }

    // If to confirt if the number prime or not
if (remainder == 2) {

        console.log("Numero primo")

        // Defines the firs number as the largest
        let counter = 0

        if (counter = 0) {
            Maxprime = number
            counter + 1

        } else {
            if (number > Maxprime) {
                Maxprime = number
            }
        }

    } else {
        console.log("Numero No es primo")
    }
}

console.log("The largest prime number of the list is " + Maxprime)
