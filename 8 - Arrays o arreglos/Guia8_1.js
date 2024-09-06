/* Hacer un programa que solicite 50 números enteros y los guarde en un vector. Luego recorrer el vector y determinar e informar cuál es la suma de los valores del mismo.

Nota: usar dos ciclos: uno para guardar los números en el vector y otro para
recorrerlo y leerlo.
*/

let acumulator = []
let sum = 0

for ( let i=0; i<5; i++){
numbers = parseInt(prompt("Enter a number"))
acumulator.push(numbers)
}

for ( let x=0; x<acumulator.length; x++){
    console.log (acumulator[x])
    sum += acumulator[x] 
}

console.log (sum)







