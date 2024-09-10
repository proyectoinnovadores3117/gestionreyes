function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.section');
    secciones.forEach(seccion => {
        seccion.classList.remove('active');
    });
    const seccion = document.getElementById(seccionId);
    seccion.classList.add('active');
}



function irACursos() {
    window.location.href = 'cursos.html'; 
}

function irAEventos() {
    window.location.href = 'eventos.html';
}

function irAMesas() {
    window.location.href = 'mesasdeexamen.html'; 
}


function irAMinijuego() {
    window.location.href = 'minijuego.htmin'; 
}


function irAInicio() {
    window.location.href = 'index.html';
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
});
