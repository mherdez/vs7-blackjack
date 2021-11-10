
// REFERENCIAS HTML
const btnNuevoJuego     = document.querySelector('#nuevoJuego');
const btnPedirCarta     = document.querySelector('#pedirCarta');
const btnDetener        = document.querySelector('#detener');

const cartasJugador     = document.querySelector('.cartasJugador');
const cartasComputadora = document.querySelector('.cartasComputadora');

const puntosJugador     = document.querySelectorAll('small')[0];
const puntosComputadora = document.querySelectorAll('small')[1];

// VARIABLES 
const palo       = ['H','D','S','C'];
const especiales = ['A','J','Q','K'];
let mazo         = [];

let totalPuntosJugador     = 0;
let totalPuntosComputadora = 0;

// EVENTOS CLICK DE LOS BOTONES
btnNuevoJuego.addEventListener('click', () => {
   console.clear();
   mazo = [];
   crearMazo();
   cartasJugador.innerHTML     = '';
   cartasComputadora.innerHTML = '';
   totalPuntosJugador          = 0;
   totalPuntosComputadora      = 0;
   pintarPuntuacion(puntosJugador, totalPuntosJugador);
   pintarPuntuacion(puntosComputadora, totalPuntosComputadora);
   prenderBotones();
})

btnPedirCarta.addEventListener('click', () => {
   totalPuntosJugador += valorCarta(pintarCarta(cartasJugador));
   pintarPuntuacion(puntosJugador, totalPuntosJugador);
   
   if(totalPuntosJugador > 21) {
      apagarBotones();
      turnoComputadora();
   }
})


btnDetener.addEventListener('click', () => {
   // const cartaNueva = pintarCarta(cartasComputadora);
   // const valor = valorCarta(cartaNueva);
   // totalPuntosComputadora += valor;
   // pintarPuntuacion(puntosComputadora, totalPuntosComputadora);
   apagarBotones();
   turnoComputadora();
})


// FUNCIONES

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

const pintarCarta = (turno) => {
   if( mazo.length === 0) {
      console.log('ya no hay cartas')
      return
   }
   const valor = mazo.shift();
   const carta = document.createElement('img');
   carta.src   = `./assets/cartas/${ valor }.png`;
   turno.append(carta);
   return(valor)
}

const valorCarta = (data) => {
   // los numeros valen su denominacion, la J, Q, K valen 10 y el A vale 11
   let valor = data.substring(0, data.length - 1);
   if( isNaN(valor) ) {
      if(valor === 'A') {
         valor = 11;
      } else {
         valor = 10;
      }
   } else {
      valor *= 1;
   }
   return valor
}

const pintarPuntuacion = (turno, puntos) => {
   turno.textContent = puntos;
}

const apagarBotones = () => {
   btnPedirCarta.classList.remove('btnAzul');
   btnPedirCarta.classList.add('btnAzulDesactivado');
   btnDetener.classList.remove('btnAzul');
   btnDetener.classList.add('btnAzulDesactivado');
   btnPedirCarta.setAttribute('disabled', true);
   btnDetener.setAttribute('disabled', true);
}

const prenderBotones = () => {
   btnPedirCarta.classList.remove('btnAzulDesactivado');
   btnPedirCarta.classList.add('btnAzul');
   btnDetener.classList.remove('btnAzulDesactivado');
   btnDetener.classList.add('btnAzul');
   btnPedirCarta.removeAttribute('disabled');
   btnDetener.removeAttribute('disabled');
}

const turnoComputadora = () => {
   
      do {
         totalPuntosComputadora += valorCarta(pintarCarta(cartasComputadora));
         pintarPuntuacion(puntosComputadora, totalPuntosComputadora)
         if( (totalPuntosComputadora >= totalPuntosJugador && 
             totalPuntosComputadora <= 21) || totalPuntosJugador > 21) {
            console.log('la computadora gana')
            break;
         }
      } while( totalPuntosComputadora <= 21 )
      
      if((totalPuntosJugador > totalPuntosComputadora || totalPuntosComputadora > 21) && totalPuntosJugador <= 21) {
         console.log('el jugador gana') 
      }


}

// INICIO DE PROCESOS
crearMazo();