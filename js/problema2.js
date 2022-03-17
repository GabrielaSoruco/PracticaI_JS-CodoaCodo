let cantProductos = prompt("Ingresa la cantidad de paquetes que deseas comprar:")
if(cantProductos < 5){
    alert("Lo siento, no realizamos un pedido inferior a 5 productos.")
} else if(cantProductos >= 5 && cantProductos < 15){
    alert("Con tu compra el costo de envío es de $200");
} else {
    alert("Perfecto, el costo de envío es gratuito");
}