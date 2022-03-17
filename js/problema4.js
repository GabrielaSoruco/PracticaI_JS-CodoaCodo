let nombreUsuario = prompt("Ingrese su nombre:");
let edadUsuario = parseInt(prompt("Ahora ingrese su edad: "));
if(edadUsuario >= 18){
    alert(nombreUsuario + " podes entrar.");
} else {
    alert(nombreUsuario + " lo lamento, pero no podes entrar.");
}