function llamar() {
    let menu = document.getElementById("menu-id");
    let icono = document.getElementById("barid");

    menu.classList.toggle("lista-open");

    if (menu.classList.contains("lista-open")) {
        icono.querySelector("i").classList.remove("fa-bars-staggered");
        icono.querySelector("i").classList.add("fa-x");
    } else {
        icono.querySelector("i").classList.remove("fa-x");
        icono.querySelector("i").classList.add("fa-bars-staggered");
    }
}
