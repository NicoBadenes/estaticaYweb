const form3 = document.querySelector('#form3');
const salida3 = document.querySelector('#salida3');
const btnBorrar = document.querySelector('#borrarLocal');

function mostrarEnPantalla(obj) {
  salida3.textContent = JSON.stringify(obj, null, 2);
}

form3.addEventListener('submit', (e) => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(form3));
  localStorage.setItem('usuario', JSON.stringify(datos));
  mostrarEnPantalla(datos);
});

window.addEventListener('load', () => {
  const guardado = localStorage.getItem('usuario');
  if (guardado) {
    mostrarEnPantalla(JSON.parse(guardado));
  }
});

btnBorrar.addEventListener('click', () => {
  localStorage.removeItem('usuario');
  salida3.textContent = '';
  console.log('Local Storage borrado y salida limpia');
});
