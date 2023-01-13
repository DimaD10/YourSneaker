
const header = document.querySelector(".header");
const main = document.querySelector('main');

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);


function checkScroll() {
    let scrollPos = window.scrollY;
    const controlPos = document.querySelector('.new').offsetTop;
    const gate = document.querySelector('.top-decor-img').offsetHeight;

    if(scrollPos > 80) {
        header.classList.add('fixed');
        main.style.cssText = "padding-top: 80px;"

        if(scrollPos > controlPos + gate) {
            header.classList.add('show-header')
        } else {
            header.classList.remove('show-header')
        }
    } else {
        header.classList.remove('fixed');
        main.style.cssText = "padding-top: 0px;"
    }

    console.log(scrollPos);
}

