// Arreglos

const vacio = []                //Arreglo vacio
const numbers = [1,2,3,4,5]    //Arreglo con 5 variables

console.log (vacio)
console.log (numbers)

//Agregar mas elementos al arreglo

// Agrega el valor de 55 al arreglo existente "numbers"
numbers.push(55) 
console.log (numbers)

// Agrega el valor de una variable al arreglo
let prueba = "Variable definida"
numbers.push(prueba) 
console.log (numbers.length) // Imprime cant. de variables
console.log (numbers)

//Imprimir la posicion del arreglo
console.log (numbers[2]) // Imprime el valor del del arreglo 

//Acceder a todos los elementos del arreglo

const acceder = [5,10,15,20,25]

for (let i=0; i < acceder.length; i++){
    console.log (acceder[i])
}

