
 // REFERENCIAS HTML (DOM)
 const btnNuevoJuego = document.querySelector('#nuevoJuego');
 const btnPedirCarta = document.querySelector('#pedirCarta');
 const btnDetener    = document.querySelector('#detener');
 
 const cartasJugador     = document.querySelector('.cartasJugador');
 const cartasComputadora = document.querySelector('.cartasComputadora');
 const puntuacionesHTML  = document.querySelectorAll('small');

/*
   - Los números son del 2 al 10
   - Las figuras son Jack (J), Queen (Q), King (K), As (A)
   - Palo son Trebol (C), Diamante (D), Corazon (H), Picas (S)
*/

// VARIABLES 

let mazo = [];
const especiales = ['J','Q','K','A'];
const palo       = ['C','D','H','S'];

let   puntuacionJugador = 0;

// FUNCIONES
const crearMazo = () => {
   mazo = [];
   for(let n = 2; n <= 10; n++) {
      for(let p of palo) {
         mazo.push(n+p)
      }
   }
   for(let e of especiales) {
      for(let p of palo) {
         mazo.push(e+p);
      }
   }
   mazo = _.shuffle(mazo)
   // console.log(mazo)
}

const pedirCarta = () => {
   return mazo.shift()
}

const valorCarta = (carta) => {
   let valor = carta.substring(0,carta.length - 1)
   return (isNaN(valor)) ? (valor === 'A') ? valor = 11 
                                           : valor = 10
                         : valor *= 1;
}


// EVENTOS CLICK DE LOS BOTONES

btnNuevoJuego.addEventListener('click', () => {
   cartasJugador.innerHTML = '';
   puntuacionJugador = 0;
   puntuacionesHTML[0].textContent = puntuacionJugador;

   cartasComputadora.innerHTML = '';
   
   console.clear();
   mazo = []
   crearMazo();
})

btnPedirCarta.addEventListener('click', () => {
   let nuevaCartaJugador = pedirCarta();
   cartasJugador.innerHTML += `<img src="./assets/cartas/${nuevaCartaJugador}.png"></img>`;
   puntuacionJugador += valorCarta(nuevaCartaJugador);
   puntuacionesHTML[0].textContent = puntuacionJugador;
})


btnDetener.addEventListener('click', () => {
   cartasComputadora.innerHTML += '<img src="./assets/cartas/QS.png"></img>'
})

// FUNCIONES INICIALES
crearMazo();

