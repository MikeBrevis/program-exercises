/* Hacer un programa para ingresar un valor que estará expresado en minutos. Si los minutos superan los 60, pasar el valor a horas, de lo contrario dejarlo en minutos. Mostrar el resultado en pantalla aclarando si se muestran minutos u horas. */

let min = parseInt(prompt("Enter the minutes"))

let hours = min/60

if (min>=60){
    console.log ("The minutes entered are "+hours+" hours")
    
}else{
    console.log ("The minutes entered are "+min)
}

