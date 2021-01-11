window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuburger").addEventListener("click", toggelmenu);
}

function toggelmenu() {
    console.log("toggelmenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("#nav").classList.toggle("nav_hide");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuburger").textContent = "☰";
    } else {
        document.querySelector("#menuburger").textContent = "X";
    }
}
