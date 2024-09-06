/* Hacer un programa para ingresar por teclado los metros cuadrados totales de
un predio y los metros cuadrados cubiertos; luego calcular y mostrar por
pantalla el porcentaje de metros */

const metrosT = parseFloat (prompt("Enter the total meters of the land"))
const metrosC = parseFloat (prompt("Enter the land worken"))
//PorcMetrosC
//metrosT = 100
//MetrosC = X
//(MetrosC*100)/metrosT
const PorcMetrosC = (metrosC*100)/metrosT
const PorcMetrosD = 100-PorcMetrosC
console.log("The porcentage of the worked land is "+PorcMetrosC+"%")
console.log("The porcentage of the land for working is "+PorcMetrosD+"%")

//Improvements
//Only accepts numbers in prompt 
//Show a graphics with the porcentage of the data