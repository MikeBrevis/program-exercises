/* Hacer un programa para ingresar cuatro números y luego mostrar por pantalla
cuántos son menores a 100. */

const n1 = parseInt(prompt("Enter the first number"))
const n2 = parseInt(prompt("Enter the second number"))
const n3 = parseInt(prompt("Enter the third number"))
const n4 = parseInt(prompt("Enter the fourth number"))

let numMe = 0
let acu = 0

if (n1<100){
    numMe ++
    acu++
}

if (n2<100){
    numMe ++
    acu++
}

if (n3<100){
    numMe ++
    acu++
}

if (n4<100){
    numMe ++
    acu++
}

if (acu==0){
    console.log ("None of the entered numbers is less than 100")

}else{
    console.log(+numMe+" of the numbers input are less than 100")
}

