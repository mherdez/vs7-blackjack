
// REFERENCIAS HTML
const btnNuevoJuego     = document.querySelector('#nuevoJuego');
const btnPedirCarta     = document.querySelector('#pedirCarta');
const btnDetener        = document.querySelector('#detener');

const cartasJugador     = document.querySelector('.cartasJugador');
const cartasComputadora = document.querySelector('.cartasComputadora');

// VARIABLES 
const palo       = ['H','D','S','C'];
const especiales = ['A','J','Q','K'];
let mazo         = [];

// EVENTOS CLICK DE LOS BOTONES
btnNuevoJuego.addEventListener('click', () => {
   cartasJugador.innerHTML     = '';
   cartasComputadora.innerHTML = '';
})

btnPedirCarta.addEventListener('click', () => {
   pintarCarta(cartasJugador);
})

btnDetener.addEventListener('click', () => {
   pintarCarta(cartasComputadora);
})


// FUNCIONES
const pintarCarta = (turno) => {
   if( mazo.length === 0) {
      console.log('ya no hay cartas')
      return
   }
   const figura = mazo.shift();
   const carta = document.createElement('img');
   carta.src   = `./assets/cartas/${ figura }.png`;
   turno.append(carta);
}

const crearMazo = () => {
   for(let n = 2; n <= 10; n++) {
      for(let p of palo) {
         mazo.push(n+p);
      }
   }
   for(let e of especiales) {
      for(let p of palo) {
         mazo.push(e+p);
      }
   }
   mazo = _.shuffle(mazo)
   console.log(mazo)
}

crearMazo();