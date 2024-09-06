/* Hacer un programa para ingresar por teclado la longitud de los tres lados de un triángulo y que luego determine e informe con un cartel aclaratorio a qué tipo de triángulo corresponde:
a. Equilátero: cuando los tres lados sean iguales.
b. Isósceles: cuando dos de los tres lados sean iguales.
c. Escaleno: cuando todos los lados sean distintos. */

console.log ("Enter the three measures oh the triangle ")

let measure1 = parseInt(prompt("Enter the first measure"))
let measure2 = parseInt(prompt("Enter the second measure"))
let measure3 = parseInt(prompt("Enter the thrid measure"))

if (measure1 == measure2 && measure2 == measure3 ){
    console.log ("Triangle is equilateral")
}else{
    if (measure1 == measure2 || measure2 == measure3){
        console.log ("The triangle is isosceles")
    }else{
        console.log ("The triangle is scalene")
    }
}




