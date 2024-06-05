  // Función para incrementar el contador de vistas
function incrementarContador(id) {
    // Verificar si la cookie de visita existe
    if (document.cookie.indexOf(id) === -1) {
        // Obtener el contador actual desde el localStorage
        let contador = localStorage.getItem(id);
        // Si no existe el contador, iniciarlo en 0
        if (contador === null) {
            contador = 0;
        } else {
            // Si existe, convertirlo a número
            contador = parseInt(contador);
        }
        // Incrementar el contador
        contador++;
        // Guardar el nuevo contador en el localStorage
        localStorage.setItem(id, contador);
        // Actualizar el valor mostrado en la página
        document.getElementById(id + '-contador').innerText = contador;
        // Establecer la cookie de visita con una duración de 1 día
        let expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        document.cookie = id + "=visited; expires=" + expireDate.toUTCString() + "; path=/";
    }
}

// Incrementar el contador de vistas al cargar la página
window.onload = function() {
    // Incrementar el contador de vistas
    incrementarContador('limpi');
    // Obtener el contador almacenado y mostrarlo
    let contador = localStorage.getItem('limpi');
    if (contador !== null) {
        document.getElementById('limpi-contador').innerText = contador;
    }
};