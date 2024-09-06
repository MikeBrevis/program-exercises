/* Hacer un programa para ingresar dos números y que luego emita por pantalla el mayor de ellos o un cartel aclaratorio “Son iguales” en el caso de que así sea */

console.log ("Ingrese dos numeros");

const num1 = parseInt(prompt("Ingrese el primer numero"));
const num2 = parseInt(prompt("Ingrese el segundo numero"));

if (num1===num2) {
    console.log ("Los valores ingresados son iguales");
}else{


if (num1>num2) {
    console.log (+num2+" Es el numero menor ingresado");
    
    }else{
    console.log (+num1+" Es el numero menor ingresado");
}
}


