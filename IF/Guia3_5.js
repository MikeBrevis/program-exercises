/* Hacer un programa que solicite el ingreso de las notas del primer parcial y del segundo parcial de una alumna de programación. El programa deberá analizar

las notas y emitir la situación de la alumna según la siguiente escala:

a. Si tiene 8 o más en ambos parciales, emitir “aprobación directa”.
b. Si no tiene 8 o más en ambos pero tiene aprobados ambos parciales (se aprueba con 6 o más), emitir “rinde examen final”.
c. Si tiene menos de 6 en alguno de los dos parciales, emitir “debe
recuperar”.

El programa debe emitir solo un cartel, el que corresponda. */

console.log ("Enter the two partial grades of the semester")

let grade1 = parseInt(prompt("Enter the first partial grade"))
let grade2 = parseInt(prompt("Enter the second partial grade"))

if (grade1 < 6 || grade2 < 6){
    console.log ("The student DOES NOT PASS the semester")
}else{
    if (grade1 >= 8 && grade2 >= 8){
        console.log ("The student PASSES the semester directly")
    }else{
        console.log ("The student MUST TAKE THE TEST")
    }
}


