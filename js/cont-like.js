document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al elemento del contador
    let postRatingCount = document.querySelector('.post-rating-count');

    // Función para actualizar el valor del contador
    function updateCounter() {
        let counter = localStorage.getItem('likeCounter') ? parseInt(localStorage.getItem('likeCounter')) : 0;
        postRatingCount.textContent = counter;
    }

    // Llamar a la función para establecer el valor inicial del contador al cargar la página
    updateCounter();

    // Agregar un evento de clic al botón de "like"
    let capLike = document.querySelector('.post-rating-button');
    let heartIcon = document.getElementById('heart');

    capLike.addEventListener('click', function() {
        let counter = localStorage.getItem('likeCounter') ? parseInt(localStorage.getItem('likeCounter')) : 0;
        counter = counter === 1 ? 0 : 1;
        localStorage.setItem('likeCounter', counter);
        updateCounter();
        heartIcon.classList.toggle('active');
        console.log('Contador: ' + counter);
    });
});
