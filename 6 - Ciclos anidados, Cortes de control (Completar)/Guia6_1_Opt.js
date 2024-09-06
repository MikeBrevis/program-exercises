/* Se dispone de una lista de 10 grupos de números enteros separados entre ellos por ceros. Se pide determinar e informar:

a. El número de grupo con mayor porcentaje de números impares
positivos respecto al total de números que forman el grupo.

b. Para cada grupo, el último número primo y en qué orden apareció en
ese grupo. Si en un grupo no hubiera números primos, informarlo con
un cartel aclaratorio.

c. Informar cuántos grupos están formados por todos números ordenados
de mayor a menor. */

let maxporc = 0
let groupMaxImpars = 0
let countOrder = 0

for (let i = 1; i <= 5; i++) {

    console.log("Group " + i)

    //
    let impar = 0
    let acum = 0
    //
    let PrintPrime = 0
    let positionPrime = 0
    //
    let foundPrime = false
    //
    let flagMinor = 0
    let maxNumber = 0
    let orderedGroup = 0


    while (true) {

        let number = Math.floor(Math.random() * 5)
        if (number == 0) break

        acum++ // Position count and acumulator
        console.log(acum, number)

        //Defined odd number and sum 
        if (number % 2 == 1) {
            impar++
        }

        //Defined prime number
        let countPrime = 0

        for (let ciclePrime = 1; ciclePrime <= number; ciclePrime++) {
            if (number % ciclePrime == 0) {
                countPrime++
            }

        } if (countPrime == 2) {

            /* console.log("Its a prime number") */
            PrintPrime = number
            positionPrime = acum
            foundPrime = true
        }

        //Define wheter a number is greater  than the previous one

        if (flagMinor == 0){
    maxNumber = number
    flagMinor ++

} else if (number < maxNumber){
    maxNumber = number

} else{
    orderedGroup++
}

    }// End while cicle for numbers


    let porcimp = (impar * 100) / acum

    if (porcimp > maxporc) {
        maxporc = porcimp
        groupMaxImpars = i
    }

    console.log("Total numbers entered: " + acum)

    if (orderedGroup == 0){
        console.log ("This group is ordered by highest to lowest")
        countOrder++
    }

    //Odd numbers
    console.log(
        "Total odd numbers: " + impar +
        "\nTotal percentaje of odd numbers: " + porcimp
    )

    //Prime numbers
    if (!foundPrime) {
        console.log("In this group there a not prime numbers")

    } else {
        console.log(
            "Last prime number " + PrintPrime +
            "\nPosition last prime number " + positionPrime)
    }

} //Finish group of numbers

console.log(
    "The max percentaje of impar numbers is : " + maxporc +
    "\nAnd its in the group " + groupMaxImpars
)

console.log("This total groups ordered by highest to lowest is "+countOrder)