/*
Cree un programa que almacene los documentos y nombres de diez usuarios, donde a 
cada documento corresponda su respectivo nombre. Use objetos. Imprima todos los 
nombres de los usuarios usando ciclos.
*/
let contador=1
let objeto={}
while (contador<=10) {
    let documento =parseInt(prompt("ingrese su documento"))
    let usuario =  prompt("ingrese su nombre")
    objeto[documento]=usuario
    contador++
}
console.log(objeto);

