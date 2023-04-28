/**
 * functions to make
 * 
 * change the heart when favorite is pressed
 * remove the div when x is pressed
 * change the read when pressed
 */

let hearts = document.querySelectorAll('.likes .hoveredHeart');
hearts.forEach(elem => {
    elem.addEventListener('click',() => {
    elem.classList.toggle("fa-heart");
    elem.classList.toggle("fa-heart-o");
    elem.classList.toggle("selected");
    });
})
let cards = document.querySelectorAll('.card');
cards.forEach(elem => {
    elem.addEventListener('click', () => {
        
    })
})