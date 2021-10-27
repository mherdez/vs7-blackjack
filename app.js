

const btnNuevoJuego = document.querySelector('#nuevoJuego');
const btnPedirCarta = document.querySelector('#pedirCarta');
const btnDetener    = document.querySelector('#detener');

const cartasJugador     = document.querySelector('.cartasJugador');
const cartasComputadora = document.querySelector('.cartasComputadora');

btnNuevoJuego.addEventListener('click', () => {
   cartasJugador.innerHTML = '';
   cartasComputadora.innerHTML = '';
})

btnPedirCarta.addEventListener('click', () => {
   cartasJugador.innerHTML += '<img src="./assets/cartas/AH.png"></img>'
})

btnDetener.addEventListener('click', () => {
   cartasComputadora.innerHTML += '<img src="./assets/cartas/AS.png"></img>'
})