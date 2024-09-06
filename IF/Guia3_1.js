/* Hacer un programa que solicite el ingreso de un número y que luego emita un cartel por pantalla aclarando si el mismo es múltiplo de 5. */

let numero1 = parseInt(prompt("Enter a random number, then displayed on the screen if the number is multiple of 5"))

let multiple = numero1%5 // Remainder is 0 when the number is multiple of 5

if (multiple == 0){
    console.log ("Number is multiple of five")
}else{
    console.log ("Number is not a multiple of five")
}

