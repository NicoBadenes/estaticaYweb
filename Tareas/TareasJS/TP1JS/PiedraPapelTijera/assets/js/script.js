function jugar(eleccionUsuario) {
  const opciones = ['piedra', 'papel', 'tijera'];
  const eleccionCompu = opciones[Math.floor(Math.random() * 3)];
  let resultado = '';

  if(eleccionUsuario === eleccionCompu){
    resultado = 'Empate';
  } else if(
    (eleccionUsuario === 'piedra' && eleccionCompu === 'tijera') ||
    (eleccionUsuario === 'papel' && eleccionCompu === 'piedra') ||
    (eleccionUsuario === 'tijera' && eleccionCompu === 'papel')
  ){
    resultado = 'Ganaste';
  } else {
    resultado = 'Perdiste';
  }

  document.querySelector('#resultado').textContent =
    `Tú: ${eleccionUsuario} | Compu: ${eleccionCompu} → ${resultado}`;
}
