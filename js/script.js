document.addEventListener('DOMContentLoaded', function() {
    // Código para ejecutar cuando el DOM esté completamente cargado

    // Ejemplo de función para cambiar el contenido de un elemento
    function cambiarContenido() {
        document.getElementById('miElemento').innerText = 'Nuevo contenido';
    }

    // Ejemplo de función para mostrar una alerta
    function mostrarAlerta() {
        alert('¡Hola! Esta es una alerta.');
    }

    // Asignar eventos a botones
    document.getElementById('botonCambiar').addEventListener('click', cambiarContenido);
    document.getElementById('botonAlerta').addEventListener('click', mostrarAlerta);
});
// Ejemplo de función para cambiar el color de fondo
function cambiarColorFondo() {
    document.body.style.backgroundColor = 'lightblue';
}

// Ejemplo de función para ocultar un elemento
function ocultarElemento() {
    document.getElementById('miElemento').style.display = 'none';
}

// Ejemplo de función para mostrar un elemento oculto
function mostrarElemento() {
    document.getElementById('miElemento').style.display = 'block';
}

// Asignar eventos a nuevos botones
document.getElementById('botonColor').addEventListener('click', cambiarColorFondo);
document.getElementById('botonOcultar').addEventListener('click', ocultarElemento);
document.getElementById('botonMostrar').addEventListener('click', mostrarElemento);
