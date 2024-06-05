// Obtener referencias a elementos DOM
let capLike = document.querySelector('.post-rating-button');
let heartIcon = document.getElementById('heart');

// Obtener el valor del contador del localStorage o establecerlo en 0 si no existe
let counter = localStorage.getItem('likeCounter') ? parseInt(localStorage.getItem('likeCounter')) : 0;

// Función para actualizar el estado del contador y el icono del corazón
function updateCounter() {
    if (counter === 1) {
        heartIcon.classList.add('active');
    } else {
        heartIcon.classList.remove('active');
    }
}

// Llamar a la función para establecer el estado inicial del contador y el icono del corazón
updateCounter();

// Agregar un evento de clic al botón de "like"
capLike.addEventListener('click', function() {
    // Cambiar el estado del contador y el icono del corazón
    counter = counter === 1 ? 0 : 1;
    updateCounter();
    // Guardar el nuevo valor del contador en el localStorage
    localStorage.setItem('likeCounter', counter);
    console.log('Contador: ' + counter);
});


