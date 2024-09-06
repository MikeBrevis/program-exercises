/* Hacer un programa que solicite 20 números y calcule y emita por pantalla cuántos son positivos (mayores a cero). Se debe mostrar un solo valor: el conteo final. */

let positiveNumbers = 0

console.log ("Enter 20 numbers, then lets count how many are positives")

for (let i=1; i<=20; i++){

    let number = parseFloat(prompt("Enter the number "+ i))
    if (number>0){
        positiveNumbers += 1
    }
}

console.log ("The positive numbers are "+positiveNumbers)

