var langItems = document.getElementsByClassName('language-item');
var btnImg = document.getElementById('btn-img');
var btnTitle = document.getElementById('btn-title');
var languageMenu = document.querySelector('.language-menu'); // Selector del menú desplegable

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

function changeLanguages(selectedItem) {
  btnImg.src = "./img/icon-Idioma/" + selectedItem.dataset.lang + ".png";
  btnTitle.innerText = selectedItem.dataset.lang;
  }

function changeLanguages(selectedItem) {
btnImg.src = "../img/icon-Idioma/" + selectedItem.dataset.lang + ".png";
btnTitle.innerText = selectedItem.dataset.lang;
}
// Función para alternar la visibilidad del menú
function toggleMenu() {
if (languageMenu.style.display === 'none' || languageMenu.style.display === '') {
    languageMenu.style.display = 'block'; // Mostrar el menú si está oculto
} else {
    languageMenu.style.display = 'none'; // Ocultar el menú si está visible
}
}




//Menu desplegable abou ME//




const flagsElement = document.querySelector(".language-menu");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language=>{
    const requestJson = await fetch(`../languages/${language}.json`)
    const texts = await requestJson.json()

    for(const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML=texts[section][value];
    }
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.lang);
});



// MENU DESPLEABLE ABOUT ME//

const optionMenus = document.querySelectorAll(".select-menu"); // Seleccionar todos los menús

optionMenus.forEach(optionMenu => {
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".Sbtn_text"); // Corregir capitalización

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

});



// Función para mostrar el submenú de opciones estudios

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





"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);