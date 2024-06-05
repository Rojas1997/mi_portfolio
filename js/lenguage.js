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
            btnImg.src = "./img/icon-idioma/" + lang + ".png";
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
            response = await fetch(`./languages/${language}.json`);
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
