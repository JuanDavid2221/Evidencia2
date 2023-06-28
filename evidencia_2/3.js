/*
Cree un programa que solicite al usuario el nombre de uno de los cinco continentes, 
luego, muestre cincopaíses del continente seleccionado por el usuario. Use objetos. 
Use ciclos.
*/

let continente= {
    america:["argentina", "colombia" , "brazil" , "ecuador" , "bolivia"],
    europa:["españa", "finlandia", "noruega","suecia", "francia"],
    oceania:["Australia","Islas de Cook","Kiribati","Micronesie","Nueva Zelanda"],
    africa:["senegal","marruecos","congo","madagascar","egipto"],
    asia:["russia","japon","corea del sur","corea del norte","china"]
}

let elegir=prompt("ingrese un continente")

for (let index = 0; index < continente[elegir].length; index++) {
    console.log(continente[elegir][index]);
}