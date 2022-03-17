//promp para pedir datos, se guardan en una variable
// alert para mostrar el resultado o document.write

let empleado = prompt("Indique que opción es su categoría: \n1. Repositor \n2. Cajero \n3. Supervisor");
let sueldo = 0;
if(empleado == 1){
    sueldo = 15890;
    alert("Le corresponde cobrar $" + (sueldo +  sueldo*0.1) + ". Teniendo en cuenta que el bono es del 10%");
} else if(empleado == 2){
    sueldo = 25630.89;
    alert("Le corresponde un sueldo de $" + parseFloat(sueldo));
} else if (empleado == 3){
    sueldo = parseFloat(35620.2).toFixed(2);
    alert("El sueldo bruto es de $" + sueldo + ", con el descuento por jubilación, su sueldo neto es de $" 
        + (sueldo - sueldo*0.11).toFixed(2));
} else {
    alert("La opción que ingresó no existe, vuelva a intentarlo.");
}