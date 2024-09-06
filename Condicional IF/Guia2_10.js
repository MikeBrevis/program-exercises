/* Hacer un programa para ingresar cuatro números y luego mostrar por pantalla cuáles son mayores a 100. */

const n1 = parseInt(prompt("Enter the first number"))
const n2 = parseInt(prompt("Enter the second number"))
const n3 = parseInt(prompt("Enter the third number"))
const n4 = parseInt(prompt("Enter the fourth number"))

let numMa =" "
let acu = 0

if (n1>100){
    numMa += n1+", "
    acu++
}

if (n2>100){
    numMa += n2+", "
acu++
}

if (n3>100){
    numMa += n3+", "
acu++
}

if (n4>100){
    numMa += n4+", "
acu++
}

if (acu==0){
    console.log ("None of the entered numbers is greater than 100")

}else{
    console.log("numbers "+numMa+" are greater than 100")
}





