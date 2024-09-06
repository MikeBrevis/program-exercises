/* Hacer un programa para ingresar un número y luego se emita un cartel por pantalla “Positivo” si el número es mayor a cero, “Negativo” si el número es menor a cero o “Cero” si el número es igual a cero. */

console.log ("Ingrese un numeros y se indicara si es positivo o negativo ");

const num1 = parseInt(prompt("Ingrese el primer numero"));


if (num1===0) {
    console.log ("El numero ingresado es 0");
}else{


if (num1>0) {
    console.log ("Es el numero ingresado es positivo");
    
    }else{
    console.log ("Es el numero ingresado es negativo");
}
}

