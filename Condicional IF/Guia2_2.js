/* Hacer un programa para ingresar dos números distintos y luego se muestre por pantalla el menor de ellos. */

console.log ("Ingrese dos numeros");

const num1 = parseInt(prompt("Ingrese el primer numero"));
const num2 = parseInt(prompt("Ingrese el segundo numero"));

if (num1<=num2) {
    console.log (+num1+" Es el numero menor ingresado" );
}
else {
    console.log (+num2+" Es el numero menor ingresado");
}


