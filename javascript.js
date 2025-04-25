const oval = document.querySelector('.switch_all');
const oval2 = document.querySelector('.switch');
const body = document.querySelector('body');

oval.addEventListener('click', function() {
    oval2.classList.toggle('switch2');
    body.classList.toggle('dark');
   
});