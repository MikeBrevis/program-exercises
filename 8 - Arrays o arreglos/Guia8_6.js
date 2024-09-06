/*
Dada una lista de 10 números, cargarlos en un vector. Luego detectar si en el vector hay algún elemento repetido. De haberlo, indicarlo con un cartel aclaratorio “Hay repetidos”, de lo contrario indicar “No hay repetidos”.
Pista: usar ciclos combinados.
*/


let acu = []
const mySet = new Set()

for (i=0;i<3;i++){
let number = prompt("Enter a number")
acu.push(number) 
mySet.add(number)
}

if (acu.length == mySet.size){

    console.log ("There are not repeat elements")
}else{
    console.log ("There are repeat elements")
}









