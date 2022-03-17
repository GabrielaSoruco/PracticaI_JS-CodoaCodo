let usuario = prompt("Ingrese su nombre:");
let usuarioLong = parseInt(usuario.length);
alert("Su nombre tiene " + usuarioLong + " letras.");
let numUsuario = parseInt(prompt("Ahora ingrese un número:"));
let resultado = (usuarioLong + numUsuario);
alert("La cantidad de letras que tiene tu nombre + el número que ingresaste da como resultado " + resultado);
if(resultado >= 15){
    alert("La cuenta total es mayor a 15 caracteres.");
} else {
    alert("La cuenta total es menor a 15 caracteres.");
}