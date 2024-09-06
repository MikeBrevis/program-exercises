/* Hacer un programa para ingresar 4 números. Luego analizar e informar por pantalla si los mismos se encuentran ordenados de forma decreciente */

const number1 = parseInt(prompt("Enter firts numbers"))
const number2 = parseInt(prompt("Enter second numbers"))
const number3 = parseInt(prompt("Enter thrid numbers"))
const number4 = parseInt(prompt("Enter fourd numbers"))

console.log ("the input numbers are " +number1, number2, number3, number4)

if(number1>number2 && number3>number4){
    console.info ("The numbers entered are decreasing")

}else{
    console.info ("The numbers entered are  not decreasing")
}



