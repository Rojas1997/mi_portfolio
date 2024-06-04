// Obtención de elementos
var langItems = document.getElementsByClassName('language-item');
var btnImg = document.getElementById('btn-img');
var btnTitle = document.getElementById('btn-title');
var languageMenu = document.querySelector('.language-menu'); // Selector del menú desplegable
const flagsElement = document.querySelector(".language-menu");
const textsToChange = document.querySelectorAll("[data-section]");

// Agregamos un listener al botón para alternar la visibilidad del menú
btnImg.addEventListener('click', function() {
    toggleMenu();
});

for (var i = 0; i < langItems.length; i++) {
    var langItem = langItems[i];
    langItem.addEventListener('click', function () {
        changeLanguages(this);
        toggleMenu(); // Llamamos a la función para alternar la visibilidad del menú después de cambiar el idioma
    });
}

// Función para cambiar la imagen y el título del botón de idioma
function changeLanguages(selectedItem) {
    var lang = selectedItem.dataset.lang;
    checkImageExists("../img/icon-idioma/" + lang + ".png", function(exists) {
        if (exists) {
            btnImg.src = "../img/icon-idioma/" + lang + ".png";
        } else {
            btnImg.src = "/img/icon-idioma/" + lang + ".png";
        }
    });
    btnTitle.innerText = lang;
    changeLanguage(lang); // Actualizar los textos de acuerdo con el idioma seleccionado
}

// Función para alternar la visibilidad del menú
function toggleMenu() {
    if (languageMenu.style.display === 'none' || languageMenu.style.display === '') {
        languageMenu.style.display = 'block'; // Mostrar el menú si está oculto
    } else {
        languageMenu.style.display = 'none'; // Ocultar el menú si está visible
    }
}

// Función para cambiar el idioma de la interfaz
const changeLanguage = async (language) => {
    try {
        let response = await fetch(`../languages/${language}.json`);
        if (!response.ok) {
            response = await fetch(`/languages/${language}.json`);
        }
        const texts = await response.json();

        for (const textToChange of textsToChange) {
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;

            if (texts[section] && texts[section][value]) {
                textToChange.innerHTML = texts[section][value];
            }
        }
    } catch (error) {
        console.error("Error al cambiar el idioma:", error);
    }
};

// Función para verificar si una imagen existe
function checkImageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

// Evento para manejar el cambio de idioma
flagsElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('language-item')) {
        changeLanguage(e.target.dataset.lang);
    }
});



// MENU DESPLEABLE ABOUT ME//

const optionMenus = document.querySelectorAll(".select-menu"); // Seleccionar todos los menús

optionMenus.forEach(optionMenu => {
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".Sbtn_text"); // Corregir capitalización

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

});


// INICIO ANIMACION//

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

// Inicialización de la animación de palabras
words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
splitLetters(words[i]);
}

// Función para cambiar las palabras animadas
function changeWord() {
var cw = wordArray[currentWord];
var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
}
for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
}

currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

// Funciones de animación de letras
function animateLetterOut(cw, i) {
setTimeout(function() {
cw[i].className = 'letter out';
}, i*80);
}

function animateLetterIn(nw, i) {
setTimeout(function() {
nw[i].className = 'letter in';
}, 340+(i*80));
}

// Función para dividir las palabras en letras
function splitLetters(word) {
var content = word.innerHTML;
word.innerHTML = '';
var letters = [];
for (var i = 0; i < content.length; i++) {
var letter = document.createElement('span');
letter.className = 'letter';
letter.innerHTML = content.charAt(i);
word.appendChild(letter);
letters.push(letter);
}

wordArray.push(letters);
}

// FIN ANIMACION//

/* MENU ESTUDIOS  */
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
/* FIN ESTUDIOS  */


