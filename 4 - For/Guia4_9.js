/* Hacer un programa que solicite 20 edades y luego calcule el promedio de edad de aquellas personas mayores a 18 años. */

let acumulator = 0 
let cant = 0

for (let i = 1; i <= 3; i++){

    let number = parseInt(prompt("Enter the number"))

    if (number > 18){
        acumulator += number
        cant++
    }
}

let average = acumulator/cant

console.log ("The quantity of people over 18 years old is "+cant+ " and the overage is "+average)

