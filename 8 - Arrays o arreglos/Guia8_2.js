/*
Hacer un programa que solicite 50 números enteros y los guarde en un vector.
Luego recorrer todos los elementos del vector y determinar cuál es el valor máximo y su posición dentro del vector. 
*/

let acumulator = []

//Pos 0: Max number
//Pos 1 : Position max number

let vars = [0,0]


for ( let i=0; i<3; i++){
numbers = parseInt(prompt("Enter a number"))
acumulator.push(numbers)
}

for ( let x=0; x<acumulator.length; x++){

    console.log (acumulator[x])

    if (acumulator[x] > vars[0]){
        vars [0] = acumulator [x]
        vars[1] = x+1
}

}

console.log ("max number " +(vars[0]))
console.log ("max position number " +(vars[1]))















