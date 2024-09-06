/* Una universidad desea conocer los porcentajes de mujeres y hombres en las
carreras de ciencias exactas. Se solicita un programa para cargar la cantidad de
mujeres y la cantidad de hombres y que el mismo calcule y emita por pantalla
los porcentajes correspondientes. */

let men =parseInt(prompt("Enter the number of men in the class"))
let women =parseInt(prompt("Enter the number of women in the class"))

let montoT = men + women
//montoT = 100
//women = x
//(women*100)/montoT

let porcWomen = (women*100)/montoT
let porcMen = (men*100)/montoT
console.log("Porcent of women in class is "+porcWomen+"%")
console.log("Porcent of men in class is "+porcMen+"%")

