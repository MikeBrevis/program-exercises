/* Hacer un programa que solicite cuatro números y emitir un cartel aclaratorio si son todos iguales entre sí, caso contrario, no emitir nada. */

let number1 = parseInt(prompt("Enter the first number"))
let number2 = parseInt(prompt("Enter the second number"))
let number3 = parseInt(prompt("Enter the third number"))
let number4 = parseInt(prompt("Enter the fourth number"))

console.log ("The numbers entered are "+number1, number2, number3, number4)

if (number1==number2 && number3==number4){
    console.log ("The numbers entered are equal")
}

