/* Hacer un programa que solicite el ingreso de 10 números y que muestre el mayor de ellos por pantalla. Solo se debe emitir UN valor por pantalla. */

let largerNumber = 0 
console.log ("Enter ten numbers")

for (let i=1; i<=10; i++){

    let number = parseFloat(prompt("Enter the number "+ i))

    if (number>largerNumber){
        largerNumber = number
    }
}

console.log ("The larger number is "+largerNumber)



