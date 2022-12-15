var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear")
}

var muncul = document.querySelector(".ikut")

window.addEventListener("load", hiya);

function hiya() {
    muncul.classList.add("tampil")
}
