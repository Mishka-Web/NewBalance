'use strict';

let btn = document.querySelector(".btn");

let colItem = 0;
let main = document.querySelector(".main");
let arraySizeSections =  new Array();
let arrayObjectSections = new Array();

for (let i = 0; i < main.children.length; i++) {
    arraySizeSections.push(main.children[i].offsetTop);
    arrayObjectSections.push(document.querySelector(`.${main.children[i].className}`));
    main.children[i].classList.add("unvisible");
}

function loadContent() {
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const position = scrolled + screenHeight;

    if (position - arraySizeSections[colItem] / 15 >= arraySizeSections[colItem]) {
        if (colItem == arraySizeSections.length) {
            colItem = 0;
        }else if (colItem != arraySizeSections.length) {
            main.children[colItem].classList.remove("unvisible");
            main.children[colItem].classList.add("visible");
            colItem++;
        }
    }   
}
window.addEventListener("scroll", loadContent);
window.addEventListener("resize", loadContent);

function clickUpContent() {
    arrayObjectSections[arrayObjectSections.length - 1].scrollIntoView();
}
btn.addEventListener("click", clickUpContent);