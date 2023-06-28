/*
Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se requiere
un programa donde el usuario pueda consultar el día de su cita mediante su documento. 
La cita debe tener día y fecha. Si el usuario consulta, el programa debe mostrarle sus 
nombres, seguidos del día y hora de su cita. Una vez hecha la consulta, el programa le 
debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó fecha de su 
cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que el 
cambio solicitado ha sido exitoso. Use objetos
*/

 let cita ={}
 let documento= parseInt(prompt("inserte su numero de documento"))
 let nombre= prompt("inserte su nombre")
 let dia= parseInt(prompt("inserte el dia de la cita"))
 let hora= parseInt(prompt("inserte la hora de la cita"))
cita[documento]= [nombre,dia,hora]
console.log(cita[documento]);
let actualizar= prompt("consulta hecha desea cambiar algo,ingrese si o no ")
if (actualizar=="si") {
    let opcion=prompt("que desea cambiar, nombre, dia , hora")
    switch (opcion) {
        case "nombre":
            let nombre=prompt("ingrese el nuevo nombre")
            cita[documento][0]= nombre
            console.log(cita[documento]);
            console.log("dato actualizado");
            break;
        case "dia":
            let dia = prompt("ingrese su nuevo dia")
            cita[documento][1]=dia
            console.log(cita[documento]);
            console.log("dato actualizado");
        break;
        case "hora":
            let hora = prompt("ingrese su nuevo dia")
            cita[documento][2]=hora
            console.log(cita[documento]);
            console.log("dato actualizado");
        break;
        default:
            console.log("ingrese una opcion valida");
            break;
    }
}if(actualizar=="no"){
console.log("programa terminado");
}
