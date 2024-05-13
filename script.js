const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

/* Agregado Karina */

const fullcover= document.querySelector('.body-fullcover');
/* const fullcover= document.getElementsByClassName('.body-fullcover'); */
const rotcover=  document.querySelector('.rot-scale-logo')
const masked = document.querySelectorAll('.backmask');

document.addEventListener('DOMContentLoaded', (event) => {
  masked.forEach(element => {
    element.style.opacity=0
  });
  //Al tener el documento cargado ejecuta las animaciones:
    fullcover.classList.add('animateonload');
    rotcover.classList.add('animateonloadtext');

  });

  fullcover.addEventListener('animationend', () => {
  setTimeout(() => {
    
    //Borra el banner despues de ejecutar la animación
    while (fullcover.lastElementChild) {
      fullcover.removeChild(fullcover.lastElementChild);
    }
    fullcover.remove();

    masked.forEach(element => {
      element.style.opacity=1 
    });
  }, 3000);
  
  });
