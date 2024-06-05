
// MENU DESPLEABLE ABOUT ME//

const optionMenus = document.querySelectorAll(".select-menu"); // Seleccionar todos los menús

optionMenus.forEach(optionMenu => {
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".Sbtn_text"); // Corregir capitalización

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

});

// Iniciar la animación de palabras y establecer intervalo de cambio
changeWord();
setInterval(changeWord, 4000);

// Función para mostrar el submenú de opciones
function toggleSubMenu(optionHed) {
var subMenu = optionHed.nextElementSibling;
subMenu.classList.toggle('show');
}

// Funciones relacionadas con la visualización de imágenes en un modal
function showImage(imgUrl) {
var modal = document.getElementById('modal'); // Obtener el modal
var modalImg = document.getElementById('modal-image'); // Obtener el elemento <img> dentro del modal
modalImg.src = imgUrl; // Asignar la URL de la imagen al src del elemento <img> del modal
modal.style.display = 'block'; // Mostrar el modal
}

function closeModal() {
var modal = document.getElementById('modal'); // Obtener el modal
modal.style.display = 'none'; // Ocultar el modal cuando se hace clic en cualquier lugar dentro de él
}