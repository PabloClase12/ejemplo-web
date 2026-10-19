function PiedraPapelTijera(jugador, maquina) {
    let pantalla = document.getElementById("pantalla");
if (jugador == maquina) { 
    pantalla.innerHTML = "Empate";
} else if (
    jugador == "piedra" && maquina == "tijera" ||
    jugador == "tijera" && maquina == "papel" ||
    jugador == "papel" && maquina == "piedra"
)   {
    pantalla.innerHTML = "Gana jugador";
    } else {
    pantalla.innerHTML = "Gana maquina";
    }
}
let jugador = "piedra";
let maquina = "piedra";

PiedraPapelTijera(jugador, maquina);