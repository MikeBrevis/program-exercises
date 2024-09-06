/*
Dada una lista de 10 números enteros, cargarlos en un vector. Luego, determinar e informar si el vector está ordenado en forma creciente. Por ejemplo el vector con los valores 1, 3, 5, 7 y 9 está ordenado; el vector 1, 5, 3, 7 y 9 no lo está.
*/

let vars = []
console.log(vars)

//Entered 100 numbers and save in vector vars
for(let i=0;i<5;i++){ 
    let num = prompt("Enter a number")
    console.log(num)
    vars.push(num)
}

let pos = vars.length-1
let isSorted = true

//cicle for 
for(let x=0;x<pos;x++){

if (vars[x]>vars[x+1]){
    isSorted = false
    break
}
}

if (isSorted){
    console.log ("The vector is sorted")
}else{
    console.log ("The vector is NOT sorted")
}





