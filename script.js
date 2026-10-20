
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".main-nav");

botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});
