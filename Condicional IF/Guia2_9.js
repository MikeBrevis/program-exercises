/* Hacer un programa para ingresar cinco números distintos y luego mostrar por pantalla el mayor y el menor de ellos. */

console.log("Enter below five numbers, then show you the smallest and largest of the number")

let n1 = parseInt(prompt("Enter the first number"))
let n2 = parseInt(prompt("Enter the second number"))
let n3 = parseInt(prompt("Enter the third number"))
let n4 = parseInt(prompt("Enter the fourth number"))
let n5 = parseInt(prompt("Enter the fifth number"))

let max
let min

if (n1>n2){
    max=n1
    min=n2
}else{
    max=n2
    min=n1
}

if(n3>max){
    max=n3

}else{
    if(n3<min){
min=n3
    }
}

if(n4>max){
    max=n4
    
}else{
    if(n4<min){
min=n4
    }
}

if(n5>max){
    max=n5
    
}else{
    if(n5<min){
min=n5
    }
}

console.log ("The smallest number is "+min+ " and the largest number is "+max)
