/* Hacer un programa para ingresar un número y luego se emita por pantalla un cartel aclaratorio si “Es mayor a 10” o “No es mayor a 10”. */

let num =parseInt(prompt("Escriba un numero cualquiera"));

if (num >= 10){
    console.log ("En numero ingresado "+num+" es igual o mayor a 10");
}else{
    console.log ("En numero ingresado "+num+" es menor a 10");
}

