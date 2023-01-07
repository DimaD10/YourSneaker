const menuBurger = document.querySelector(".burger");
const menu = document.querySelector(".categoryes");
const items = document.querySelectorAll(".click");
const body = document.querySelector('main');

menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("active");
    menu.classList.toggle("menu-active");
    body.classList.toggle('hidden');
});

for (let index = 0; index < items.length; index++) {
    const el = items[index];
    
    el.addEventListener("click", () =>{
        menuBurger.classList.remove("active");
        menu.classList.remove("menu-active");
    });
}
