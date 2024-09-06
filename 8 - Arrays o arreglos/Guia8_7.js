/*
Una empresa comercializa 15 tipos de artículos y por cada venta realizada genera un registro con los siguientes datos:
• Número de artículo (1 a 15).
• Cantidad vendida.

Puede haber varios registros para el mismo artículo y el último se indica número de artículo igual a cero.

Se pide determinar e informar:

a. El número de artículo que más se vendió en total. //
b. Los números de artículos que no registraron ventas.
c. La cantidad de unidades vendidas para el artículo número 10.
Nota: tener en cuenta el concepto de “registro” y el planteo de estructura principal separado de consignas (ver videos de ciclos combinados y ejercicios resueltos de ciclos combinados).

*/

const articles =[]

for (i=0;i<15;i++){
    articles[i]=0
}
console.log(articles)

let article = parseInt(prompt("Enter the number article /1-15/"))
let cant = parseInt(prompt("Enter the amount sold"))

while (article !=0){
articles[article-1] += cant

article = parseInt(prompt("Enter the number article /1-15/"))
cant = parseInt(prompt("Enter the amount sold"))
}

// No sale articles
for (i=0;i<15;i++){
    if (articles[i] == 0){
        console.log("Article Number "+(i+1)+" had no sales")  
    }
}

// Number article / Cant max. 
const maxSold = Math.max(...articles)
const posMaxSold = articles.indexOf(maxSold)+1
console.log(posMaxSold,maxSold) 

// Number article sold by article 10 
const article10 = articles[9]
console.log("Numbers of items solds by item 10 is "+article10);








