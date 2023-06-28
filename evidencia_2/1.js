/*
Cree un programa que pida al usuario el nombre de un producto existente en una tienda, 
luego, que le muestre el precio del producto. El usuario debe poder elegir de entre 
por lo menos cinco productos. Use objetos
*/

let objeto={ Papa: 1000 , Arroz: 2000 , Lentejas: 2000 , Aceite: 5000 , Azucar: 1000 };
let pro=prompt("ingrese un producto: Papa , Arroz , Lentejas, Aceite, Azucar")
 let hola = objeto[pro]
 console.log(hola)