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