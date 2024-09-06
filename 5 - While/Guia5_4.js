/* Hacer un programa que solicite dos números y luego muestre los números entre el menor y el mayor de ellos. Acordate, usando While. */

//Define variables entered by user
let number1 = parseInt(prompt("Enter the firts number"))
let number2 = parseInt(prompt("Enter the second number"))

//Define the variable of the intermediate numbers between lower and higher.

let smaller = 0
let larger = 0 



//Define wich is lower and higher

if (number1 < number2){
    smaller = number1
    larger = number2
    console.log ("The number "+smaller+" is smaller")
    console.log ("The number "+larger+" is greater")

}else{

    smaller = number2
    larger = number1
    console.log ("The number "+smaller+" is smaller")
    console.log ("The number "+larger+" is greater")
}

//Define and print in console the intermediated numbers 
let intermediateCounter = (larger-smaller)-1
console.log ("The intermediated numbers are "+intermediateCounter)

// Cicle while between numbers
//larger 10
//smaller 5
// intermediated 6 - 7 - 8 - 9 (4)
// 10 > 5
let netxNumber = smaller+1

while (netxNumber < larger ){
    console.log (netxNumber)
    netxNumber++

    
}
