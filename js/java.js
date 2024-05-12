document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageIcon = document.querySelector('.language-icon img');
    const selectedLanguage = document.getElementById('selected-language');
    const selectedFlag = document.getElementById('selected-flag');

    dropdownToggle.addEventListener('click', function() {
        languageDropdown.classList.toggle('open');
    });

    const dropdownItems = document.querySelectorAll('.dropdown-menu li a');

    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
            const img = item.querySelector('img');
            const altSrc = img.getAttribute('src');
            const text = item.textContent.trim();
            languageIcon.src = altSrc;
            selectedFlag.src = altSrc;
            selectedLanguage.textContent = text;
            languageDropdown.classList.remove('open'); // Cerrar el menú desplegable después de seleccionar una opción
        });
    });

    // Cerrar el menú desplegable cuando se hace clic en cualquier parte de la página
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.language-dropdown')) {
            languageDropdown.classList.remove('open');
        }
    });

});


const optionMenus = document.querySelectorAll(".select-menu"); // Seleccionar todos los menús

optionMenus.forEach(optionMenu => {
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".Sbtn_text"); // Corregir capitalización

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

});



var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
splitLetters(words[i]);
}

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

changeWord();
setInterval(changeWord, 4000);

/*  Option sub menu */

function toggleSubMenu(optionHed) {
    var subMenu = optionHed.nextElementSibling;
    subMenu.classList.toggle('show');
}


/**/
function showImage(imgUrl) {
    // Obtener el modal
    var modal = document.getElementById('modal');

    // Obtener el elemento <img> dentro del modal
    var modalImg = document.getElementById('modal-image');

    // Asignar la URL de la imagen al src del elemento <img> del modal
    modalImg.src = imgUrl;

    // Mostrar el modal
    modal.style.display = 'block';
}

function closeModal() {
    // Obtener el modal
    var modal = document.getElementById('modal');

    // Ocultar el modal cuando se hace clic en cualquier lugar dentro de él
    modal.style.display = 'none';
}


/*  dark mode */

const switcherTheme = document.querySelector('#check');
const root = document.documentElement;

switcherTheme.addEventListener('click', toggleTheme);

function toggleTheme() {
    const setTheme = switcherTheme.checked ? 'dark' : 'light';

    root.setAttribute('data-theme', setTheme);
    localStorage.setItem('theme', setTheme);
}


