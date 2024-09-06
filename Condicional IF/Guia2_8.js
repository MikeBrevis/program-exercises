/* Hacer un programa para ingresar cuatro números distintos y luego mostrar por pantalla el menor de ellos. */

console.log ("Enter below four number, then the smallest will be shown")

const num1 = parseFloat(prompt("Enter the first number"))
const num2 = parseFloat(prompt("Enter the second number"))
const num3 = parseFloat(prompt("Enter the third number"))
const num4 = parseFloat(prompt("Enter the fourth number"))
let mim

console.log ("The input numbers are "+num1+ ", "+num2+ ", "+num3+ " and "+num4)

if (num1<num2){
    min = num1
}else{
    min = num2
}

if (num3<min){
    min=num3
}

if (num4<min){
    min=num4
}
console.log ("The smallest entered number is "+min)