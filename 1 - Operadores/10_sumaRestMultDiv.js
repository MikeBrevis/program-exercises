/* Hacer un programa que permita ingresar por teclado dos números y que luego muestre por pantalla la suma, la resta, la multiplicación y la división de dichos números. Se deben mostrar cuatro resultados en pantalla. Los números deben ser solicitados una única vez. */

let numberOne = parseInt(prompt("Enter the firts number"))
let numberTwo = parseInt(prompt("Enter the second number"))

let sum = numberOne+numberTwo
let subtract = numberOne-numberTwo
let mult = numberOne*numberTwo
let div = numberOne/numberTwo

console.log ("La suma de los numeros es "+sum+ " La resta de los numeros es "+subtract+", la multiplicacion de los numeros es "+mult+", la division de los numeros es "+div)