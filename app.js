let numSecreto= 0;
let intentos = 0;
let lista = [];
let numMax = 10;

console.log(numSecreto);
asignarTextoElemento = (element, texto) =>{
    const elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = texto;
    return;
}

verificarIntento = () =>{
    const numUsuario = parseInt(document.getElementById('valorUsuario').value);

    // El usuario no acerto
    if(numSecreto === numUsuario){
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        (numSecreto > numUsuario) ? asignarTextoElemento('p', 'El número secreto es mayor') : asignarTextoElemento('p', 'EL número secreto es menor');
    }
    intentos++;
    limpiarInput();

    return;
}

function limpiarInput(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}


function generarNumeroSecreto() {
    let numGenerado =  Math.floor(Math.random()*numMax)+1;

    console.log(numGenerado);
    console.log(lista);
    if (lista.length == numMax) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    }else{
        if (lista.includes(numGenerado)) {
            return generarNumeroSecreto();
        }else{
            lista.push(numGenerado);
            return numGenerado;
        }
    }

}


function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numMax}`);
    numSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Realizar un NUevo Juego
function nuevoJuego() {
    //Limpiar el input
    limpiarInput();
    //Mostrar las condiciones iniciales
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales();
