const form3 = document.querySelector('#form3');
const salida3 = document.querySelector('#salida3');

function mostrarEnPantalla(obj) {
  salida3.textContent = JSON.stringify(obj, null, 2);
}

form3.addEventListener('submit', (e) => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(form3)); // ejercicio 3
  localStorage.setItem('usuario', JSON.stringify(datos)); // ejercicio 4
  mostrarEnPantalla(datos);
});

window.addEventListener('load', () => {
  const guardado = localStorage.getItem('usuario');
  if (guardado) {
    mostrarEnPantalla(JSON.parse(guardado));
  }
});
