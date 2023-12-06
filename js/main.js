const openmodal = document.querySelector('.btn__contacto');
const modal = document.querySelector('.modal');
const closemodal = document.querySelector('.modal__close');


openmodal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show')    
});
closemodal.addEventListener('click',()=>{
    modal.classList.remove('modal--show');
});


/* Consumimos API de palabras para el apartado de un buscador de palabras */

const API_URL = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf';
