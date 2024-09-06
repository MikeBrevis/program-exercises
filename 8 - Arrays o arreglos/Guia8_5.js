/*
Hacer un programa que solicite una serie de valores de tipo char (caracteres).
Se entiende por carácter a cada elemento que se obtiene de presionar una tecla. Por ejemplo el valor “25” tiene dos caracteres (si quisiéramos guardarlo en variables enteras nos alcanza con una, pero si queremos guardarlo en variables char, necesitaremos dos); la frase “maxi programa” tiene 13 (se incluye el espacio como un carácter).
La cantidad de valores será como máximo 50, pero el programa puede cortar antes si se ingresa el carácter “.” (punto). Una vez cargado el vector de char, recorrerlo y reemplazar todas las apariciones de la letra “a” por la letra “e”,
por ejemplo:
Vector char original: “Hola muchachada cómo están”.
Vector char modificado: “Hole muchechede cómo esten”
Finalmente, mostrar el resultado en pantalla.
Nota: necesitaremos un vector char de 50, pero no lo cargaremos con un For.
*/
let input 
let acu = []
let caractersAcu=0



while (input !== "." && caractersAcu<=50){
input = prompt("Enter a value (type (.) to stop")
acu.push(input)

caractersAcu += input.length
}

let characters = acu.join(" ") // join de different caracters in a array

console.log(characters)
console.log(characters.replaceAll("a","e")) // replace a caracter 








