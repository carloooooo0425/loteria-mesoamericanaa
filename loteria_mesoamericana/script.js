
const cartas = [
    "Quetzalcóatl", "Tláloc", "Huitzilopochtli", "Chaac",
    "Jaguar", "Pirámide", "Calendario Maya", "Tenochtitlán",
    "Máscara Olmeca", "Codex", "Guerrero Águila", "Sacrificio",
    "Pluma de Quetzal", "Temazcal", "Serpiente Emplumada", "Ollin"
];

let tablero = document.getElementById("tablero");
let cartaActual = document.getElementById("cartaActual");

// Generar la tabla de juego aleatoriamente
let cartasSeleccionadas = [...cartas].sort(() => Math.random() - 0.5).slice(0, 16);
cartasSeleccionadas.forEach(carta => {
    let div = document.createElement("div");
    div.classList.add("carta");
    div.textContent = carta;
    div.onclick = () => div.classList.toggle("marcado");
    tablero.appendChild(div);
});

// Cantar cartas aleatoriamente
function cantarCarta() {
    if (cartas.length > 0) {
        let carta = cartas.splice(Math.floor(Math.random() * cartas.length), 1)[0];
        cartaActual.textContent = "Carta Cantada: " + carta;
    } else {
        cartaActual.textContent = "¡Se han cantado todas las cartas!";
    }
}
    