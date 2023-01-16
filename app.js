const menuToggle = document.querySelector(".hamburger");
const ul = document.querySelector("#main-ul");
const closeBtn = document.querySelector(".close");

menuToggle.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
ul.addEventListener("click", closeMenu);

function openMenu () {
    ul.classList.add("open");
}

function closeMenu () {
    ul.classList.remove("open");
}

  //Scroll -sticky nav

  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0)
  });