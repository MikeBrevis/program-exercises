/* 
Hacer una función llamada “mayor” que reciba dos números enteros y
devuelva el mayor de ellos o cero si son iguales
*/

/* function biggerN(a,b) {
    if (a > b){
        return `The bigger number is ${a}`
    } else if (b > a){
        return `The bigger number is ${b}`
    } else {
        return `The numbers are equals`
    }
} */

    function biggerN(a,b) {
        const text = "The biggers number is";
        if (a == b) return "The number are equal";
        return a > b? `${text} ${a}`:`${text} ${b}`; 
        //the router operators ? : are a "else if". ? = true / : = false
        };

const bigger1 = biggerN(3, 5);
const bigger2 = biggerN(3, 3);
const bigger3 = biggerN(10, 7);

console.log(bigger1, bigger2, bigger3);









