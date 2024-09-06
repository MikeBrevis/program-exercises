/* 
const arr = [2, 3, 5, 6, 7, 3]

// Obtener un valor del array
console.log(arr[2])

// Obtener el primer elemento del array
console.log(arr[0])

// Obtener el ultimo elemento del array
console.log(arr[5])

// Sumar 2 valores del mismo array
console.log(arr[0] + arr[1])


// Mostrar el ultimo elemento de los arrays
let x = [1, 2, 3, 6, 7]
let y = [2, 4, 5]

let lastNumberx = x[x.length - 1]
let lastNumbery = y[y.length - 1]


console.log(
    "Last number x: " + lastNumberx +
    "\nLast number y: " + lastNumbery
)
//



//Estraer solo los numeros romanos de los string ingresados
//Puedo extraer hasta 4 numeros romanos

//Carlomagno VII
//Julio Cesar X
//Kancervero XIII 


let nameNumber = ["Kancervero XX"]
let strings = nameNumber[0] // string access
let numbers = []

console.log(strings.length)

//For max. four numbers 

for (x = 1; x <= 4; x++) {

    if ((strings[strings.length - x]) == " ") {
        break
    }
    numbers.push(strings[strings.length - x])

}

let reverse = numbers.reverse()

console.log(reverse)

//split method

const eaea = "carlomango vii";

let test = eaea.split(" ")
let test2 = eaea.split(" ")[0]
let test3 = eaea.split(" ")[1]

console.log(test)
console.log(test2)
console.log(test3)

// pop method 
const nameKing = "Kancervero XIII"
let splitName = nameKing.split(" ")
console.log(splitName.pop())
console.log(splitName) 

*/

/* //For max. four numbers (optimized) 

let nameNumber = ["Kancervero XII"]
let position = nameNumber[0] 
let numbers = ""
let pos = position.length-1

for (let i = pos; i >=0 && position[i] !== " "; i--) { 
        numbers = position[i] + numbers
    }
console.log(numbers)
 */

/* //For max. four numbers (optimized2) 
let nameNumber = ["Kancervero XIII"]
let position = nameNumber[0]

let indexOf = position.lastIndexOf(" ")
console.log (indexOf)

console.log(position.slice(indexOf))
 */

/* //For max. four numbers (optimized3) 
const nameNumber = "Kancervero XIII"
const checkBlankSpace = nameNumber.lastIndexOf(" ")+1
const onlyNumber = nameNumber.slice(checkBlankSpace)

console.log(onlyNumber) */

//order sizes
// Order: XS, S, M, L, XL, 
const sizes = ["XL", "XS", "M", "S", "XXL", "L"]

const sizeXS = sizes.indexOf("XS")
const sizeS = sizes.indexOf("S")
const sizeM = sizes.indexOf("M")
const sizeL = sizes.indexOf("L")
const sizeXL = sizes.indexOf("XL")
const sizeXXL = sizes.indexOf("XXL")

const sizesOrdered =[sizes[sizeXS],sizes[sizeS],sizes[sizeM],sizes[sizeL],sizes[sizeXL],sizes[sizeXXL]]

console.log(sizesOrdered)






