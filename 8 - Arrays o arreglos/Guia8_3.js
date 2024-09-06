/*
Hacer un programa que solicite 100 números enteros y los guarde en un vector. Luego recorrer ese vector para calcular el promedio. Mostrar por pantalla los valores del vector que son mayores al promedio calculado.
*/

let vars = []
let largest = []
let accumulator = 0


//Pos 0: Max number
//Pos 1 : Position max number

for (let i = 0; i < 5; i++) {
    let numbers = parseInt(prompt("Enter a number"))
    vars.push(numbers)
}

for (let x = 0; x < vars.length; x++) {
    accumulator += vars[x]
}

let average = accumulator / (vars.length)

for (let y = 0; y < vars.length; y++) {
    if (vars[y] > average) {
        largest.push(vars[y])
    }
}


console.log ("The numbers entered are:  "+vars)
console.log("The average is: " + average)
console.log ("The numbers largest than the average are:  "+largest)










