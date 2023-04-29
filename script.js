/**
 * functions to make
 * 
 * change the heart when favorite is pressed !
 * change the read when pressed
 * remove the div when x is pressed 
 */

let hearts = document.querySelectorAll('.likes .hoveredHeart');
hearts.forEach(elem => {
    elem.addEventListener('click',changeHeart);
})
let cards = document.querySelectorAll('.card');
cards.forEach(elem => {
    elem.addEventListener('click', addReadSign);
});
let closeIcons = document.querySelectorAll('.removeIcon');
closeIcons.forEach(elem => {
    elem.addEventListener('click',removeCard);
});
function removeCard(){
    let card = this.closest('.card');
    document.querySelector('.cards').removeChild(card);
};
function addReadSign(){
    let a = this.querySelector('.cardTitle .isRead');
        a.style.height = '20px';
        a.style.visibility = 'visible';
}
function changeHeart(){
    this.classList.toggle("fa-heart");
    this.classList.toggle("fa-heart-o");
    this.classList.toggle("selected");
}