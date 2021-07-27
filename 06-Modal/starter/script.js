'use strict';
const btnshow=document.querySelectorAll('.show-modal');
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnClose=document.querySelector('.close-modal');

const modalRemove=()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const modalAdd=()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
for(let i=0; i<btnshow.length; i++){
    console.log(btnshow[i].addEventListener('click', modalRemove))
}
btnClose.addEventListener('click', modalAdd)
overlay.addEventListener('click', modalAdd)