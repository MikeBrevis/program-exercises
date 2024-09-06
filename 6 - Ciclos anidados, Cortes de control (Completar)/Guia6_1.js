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

for (let i = 1; i <= 10; i++) {

    console.log("Group " + i)
    
    let number = Math.floor(Math.random() * 9)

    let impar = 0
    let acum = 0

    while (number > 0) {
        acum++

        if (number % 2 == 1) {
            impar++
        }
        number = Math.floor(Math.random() * 9)
    }

    let porcimp = (impar * 100) / acum
    
    if (porcimp > maxporc){
        maxporc = porcimp
    groupMaxImpars = i
    }

    console.log(
        "Total numbers entered: " + acum +
        "\nTotal odd numbers: " + impar +
        "\nTotal percentaje of odd numbers: " + porcimp
    )
}


console.log(
    "The max percentaje of impar numbers is : " + maxporc +
    "\nAnd its in the group " + groupMaxImpars
)













/* for (let i = 1; i <= number; i++) { // Ciclo allows divide the number by all whole numbers minors to 1

    if (number % i == 0) {
        cons++
    }
}
if (cons == 2) {
    console.log("The number entered  is prime")
}  */