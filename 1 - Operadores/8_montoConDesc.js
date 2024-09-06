/* Una importante cadena de delivery cuenta con una promoción por tiempo
limitado en la que otorga un 15% de descuento sobre el total del valor de la
compra realizada. Hacer un programa para solicitar el monto total y el mismo
calcule y emita por pantalla el total a cobrar con el descuento aplicado.
 */

const montoT = parseFloat(prompt("Enter the total amount"))
const desc = 15
const descA = ((montoT*desc)/100)
const MontpConD = montoT - descA
console.log ("Total with discount of "+desc+"% applied is "+MontpConD)

//montoT = 100
//x = 15
//(montoT*15)/100