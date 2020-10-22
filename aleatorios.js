const aleatorios = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
 let generador = "#"; 
 for (let i = 0; i < 6; i++) {
     generador += aleatorios[obtenerNumero()];
 }

color.textContent = generador;
document.body.style.backgroundColor = generador;
});

function obtenerNumero() {
    return Math.floor(Math.random() * aleatorios.length);
}

