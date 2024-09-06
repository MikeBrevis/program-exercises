/* Una casa de computación paga a sus empleados un sueldo fijo de ARS15000
más una comisión del 5% sobre el total facturado por cada empleado. Hacer un
programa para ingresar el total facturado por un empleado y que luego calcule
y emita por pantalla el sueldo total a cobrar por el mismo */

let mes="July"
let totalFa = prompt("Enter the total envoice in "+mes)
let sueldoFi = 15000
let comision = 0.05*totalFa
let sueldoTo = sueldoFi+comision

console.log("El sueldo total del mes de "+mes+ " es "+sueldoTo)