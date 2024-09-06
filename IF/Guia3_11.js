/* Hacer un programa para ingresar tres números y luego mostrarlos ordenados de menor a mayor. */

let number1 = parseInt(prompt("Enter the first number"))
let number2 = parseInt(prompt("Enter the second number"))
let number3 = parseInt(prompt("Enter the third number"))

let first = 0
let second = 0
let third = 0

if (number1 < number2 && number1 < number3) {
    first = number1

    if (number2 < number3) {
        second = number2
        third = number3
    } else {
        second = number3
        third = number2
    }
}

    else if (number2 < number1 && number2 < number3) {
        first = number2

        if (number1 < number3) {
            second = number1
            third = number3
        } else {
            second = number3
            third = number1
        }
    }

    else {
        first = number3
        if (number1 < number2) {
            second = number1
            third = number2
        } else {
            second = number2
            third = number1
        }
    }


console.log("The numbers entered from lowest to highest are " +first+ "," +second+ "," +third)