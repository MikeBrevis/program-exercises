/* Hacer un programa para ingresar dos números. Si el segundo es distinto de
cero, calcular la división del primero por el segundo y mostrar el resultado por
pantalla; caso contrario, emitir un cartel aclarando que no se puede dividir por
cero. */

let numero1 = parseInt(prompt("Enter the first number"))
let numero2 = parseInt(prompt("Enter the second number"))

let division = numero1/numero2


if(numero2 !== 0){

console.log ("The division of both number is "+division)

}else{
console.log ("Cannot be divided the number "+numero1+" by 0")
}