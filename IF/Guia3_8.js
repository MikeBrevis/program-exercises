/* El negocio de desinfectante antes mencionado vende además detergente suelto, y los precios se aplican según la siguiente escala:

a. 25 ARS por litro los primeros 50 litros.
b. 20 ARS por litro si la venta es de 51 a 200 litros.
c. 15 ARS por litro si la venta es de 201 a 500 litros.
d. 10 ARS por litro si la venta es de más de 500 litros.
Además, si paga en efectivo, tiene un adicional del 10% sobre el importe final.

Hacer un programa que solicite la cantidad de litros vendidos y el tipo de pago (ingresará 1 si paga en efectivo y 0 con cualquier otro medio de pago) y calcule y emita por pantalla el monto final a abonar por el cliente. */

const literT = parseInt(prompt("Enter the total liters sold"))
let price = 0


if (literT <= 50) {
    price = 25
    console.log("The price/liter is " + price)
} else {
    if (literT > 50 && literT <= 200) {
        price = 20
        console.log("The price/liter is " + price)
    } else {
        if (literT > 200 && literT <= 500) {
            price = 15
            console.log("The price/liter is " + price)
        } else {
            price = 10
            console.log("The price/liter is " + price)
        }
    }
}

const totalSold = literT*price
const totalDescount = totalSold*0.9

const paid =parseInt(prompt("Enter payment method (0=Cash, 1=Debit card)"))

if (paid == 0){
    console.log("The total sold with 10% of discount is "+totalDescount)

}else{
console.log("The total sold is "+totalSold)
}

