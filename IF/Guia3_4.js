/* Un importante negocio de desinfectante líquido realiza descuentos
dependiendo de la cantidad de litros vendidos según la siguiente escala:
a. Si vende menos de 100 litros, no hay descuento.
b. Si vende entre 101 y 300 litros, el descuento es del 10%.
c. Si vende entre 301 y 500 litros, el descuento es del 15%.
d. Finalmente, si la venta es de más de 500 litros, el descuento es del 25%.
Hacer un programa que solicite el ingreso del importe total de la venta y la cantidad de litros vendidos y calcule y emita el importe con el descuento
aplicado. */

let cantLiters = parseInt(prompt("Enter the amount of liters sold"))
let price = 500
let totalSold = cantLiters * price
let discount10 = totalSold*0.9
let discount15 = totalSold*0.85
let discount25 = totalSold*0.75

if (cantLiters <= 100) {
    console.log("The sale no aplied discount. The total sold is " + totalSold)
} else {
    if (cantLiters > 100 && cantLiters <= 300) { //10% discount
        console.log("The sale aplied discount of 10%. The total sold is " + discount10)

    } else {
        if (cantLiters > 300 && cantLiters <= 500) { //15% discount
            console.log("The sale aplied discount of 15%. The total sold is " + discount15)
            

        } else {
            console.log("The sale aplied discount of 25%. The total sold is " + discount25)
        }
    }
}
