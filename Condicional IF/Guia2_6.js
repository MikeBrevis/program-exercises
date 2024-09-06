/* Una casa de video juegos otorga un descuento dependiendo del importe de la compra realizada según los siguientes valores:
• Si el importe es menor a ARS 1000, no hay descuento.
• Si el importe es ARS 1000 o más pero menor a ARS 5000, aplica un
descuento del 10%.
• Si el importe es ARS 5000 o más, aplica un descuento del 18%.

Hacer un programa para ingresar un importe de venta y luego */

const totalI = parseFloat(prompt("Ingrese el total de importe"));
console.log ("Total de importe ingresado= "+totalI)
//totalT =100
//x = 10
const desc1 = totalI-((totalI*10)/100) // 10% descuento
const desc2 = totalI-((totalI*18)/100) // 18% descuento

if (totalI<1000){
    console.log ("El importe ingresado no aplica descuento")
}else{
    if (totalI>=1000 && totalI<5000){
        console.log ("El importe ingresado aplica un descuento del 10%, total del importe= "+desc1) 
}else{
    console.log ("El importe ingresado aplica un descuento del 18%, total del importe= "+desc2) 
}
}


