/* Hacer un programa que solicite la edad de un grupo de personas. 
El programa deberá pedir edades hasta que se ingrese una edad menor a 18 años. Deberá mostrar por pantalla cuántas personas mayores se registraron. */


/* 
Ingresar let age mediante un prompt
contador = 0

mientras edad ingresada es mayor a 0:
se ejecuta un ciclo agregando a contador todas las edades de 18 años, 

Luego imprime por pantalla mediante un console log la cantidad de gente ingresada menores de 18 */



age = parseInt(prompt("Enter the children age"))
let counter = 0

while (age >= 18 ){
    counter++
    age = parseInt(prompt("Enter the children age"))
}

if (age < 17){
console.log ("The entered children age is minor that legal age")
}

console.log ("The number of the children of legal age is "+counter)
