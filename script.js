const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".main-nav");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});