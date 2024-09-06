/* Hacer un programa que solicite el ingreso de dos números y luego calcular:
a. La resta si el primero es mayor que el segundo.
b. La suma si son iguales.
c. El producto si el primero es menor.
Se deberá emitir un cartel por pantalla con el resultado correspondiente. */

let numero1 = parseInt(prompt("Enter the first number"))
let numero2 = parseInt(prompt("Enter the second number"))

let subtract = numero1-numero2
let sum = numero1+numero2
let mult = numero1*numero2

if (numero1>numero2){ 
    console.log (+numero1+" is greater than "+numero2+". The subtract  of both number is "+subtract)   

}else{

    if (numero1 == numero2) {
        console.log (+numero1+" and "+numero2+" are equal. The sum  of both number is "+sum)   
    }else{
    console.log (+numero1+" is less than "+numero2+". The multiplication of both number is "+mult)   
    }
}

