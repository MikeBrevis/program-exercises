/* Hacer un programa que permita ingresar el año actual y el año de la fecha de
nacimiento de una persona y luego calcule y emita por pantalla su edad.
Nota: no hay que tener en cuenta si la persona cumplió años o no,
simplemente calcular
 */

let añoActual=prompt("Ingrese el año actual");
let año=prompt("Ingrese el año en que nacio");

console.log("El año actual es "+añoActual+" y su año de nacimiento es "+año);

edad=añoActual-año;
console.log("Su edad es de "+edad);

