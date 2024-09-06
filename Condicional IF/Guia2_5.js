/* Hacer un programa para ingresar un número y mostrar por pantalla un cartel
aclaratorio si el mismo es PAR o IMPAR. */

console.log ("Programa que muestra si un numero es par o impar")
let num = parseInt(prompt("ingrese un numero"))

let resto = num%2

if (resto==0){
    console.log ("El numero ingresado es par")
}else{
    console.log ("El numero ingresado es impar")
}

