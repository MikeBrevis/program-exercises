/* Hacer un programa que permita ingresar los kilómetros existentes entre dos
ciudades y la velocidad promedio de un vehículo. Calcular y emitir por pantalla
el tiempo aproximado que demandará llegar de un punto a otro teniendo en
cuenta los datos ingresados. */

let distance=prompt("Enter distance between cities in kilometers")
let speed=prompt("Enter average vehicle speed in km/Hr")

//Formula para T (Tiempo) =
let time=distance/speed;
console.log("The time it takes between cities is "+time+" Hrs");

