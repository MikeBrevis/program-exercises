/* Hacer un programa para ingresar cuatro números distintos y luego mostrar por
pantalla el mayor de ellos. */

console.log ("Enter below four number, then the largest will be shown")

const num1 = parseFloat(prompt("Enter the first number"))
const num2 = parseFloat(prompt("Enter the second number"))
const num3 = parseFloat(prompt("Enter the third number"))
const num4 = parseFloat(prompt("Enter the fourth number"))
let maxi 

console.log ("The input numbers are "+num1+ ", "+num2+ ", "+num3+ " and "+num4)

if (num1>num2){
    maxi = num1
}else{
    maxi = num2
}

if (num3>maxi){
    maxi=num3
}

if (num4>maxi){
    maxi=num4
}
console.log ("The largest entered number is "+maxi)

