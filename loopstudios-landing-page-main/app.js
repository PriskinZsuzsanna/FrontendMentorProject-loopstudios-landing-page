const menuToggle = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");

menuToggle.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menu.addEventListener("click", closeMenu);

function openMenu () {
    menuToggle.classList.add("d-none");
    menu.classList.remove("closed");
    menu.classList.add("open-from-top");
}

function closeMenu () {
    menu.classList.remove("open-from-top");
    menu.classList.add("closed");
    menuToggle.classList.add("d-block");
}