/* Hacer un programa para ingresar por teclado las tres notas de exámenes de un
alumno y luego calcule y emita por pantalla el promedio final. */

console.log("enter the three semester grades")
const nota1 = parseFloat (prompt("Enter the first grade"))
const nota2 = parseFloat (prompt("Enter the second grade"))
const nota3 = parseFloat (prompt("Enter the thrid grade"))
const average_3 = (nota1+nota2+nota3)/3

console.log("The average of three grades of semester is "+average_3)

// Develop the program to input "X" numer of grades. the program will stop taking grades when the user chooses.
