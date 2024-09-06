/* Hacer un programa para ingresar tres números y emitir un cartel aclaratorio si la suma de los dos primeros es mayor al producto del segundo con el tercero. */

let number1 = parseInt(prompt("Enter the first number"))
let number2 = parseInt(prompt("Enter the second number"))
let number3 = parseInt(prompt("Enter the third number"))

suma1_2 = number1+number2
mult2_3 = number2*number3

if (suma1_2>mult2_3){
    console.log ("The sum of first two numbers, " +suma1_2+ " is greater than the multiplication of the last two numbers ,"+mult2_3)

}else{
    console.log ("The sum of first two numbers, " +suma1_2+ " is less than the multiplication of the last two numbers ,"+mult2_3)
}