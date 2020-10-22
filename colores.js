const colores = ["green", "yellow", "red","blue","white", "magenta", "cyan"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = obtenerNumero();
    document.body.style.backgroundColor = colores[randomNumber];
    color.textContent = colores[randomNumber]
});

function obtenerNumero() {
    return Math.floor(Math.random() * colores.length);
}