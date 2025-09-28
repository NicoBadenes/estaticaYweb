const form3 = document.querySelector('#form3');
const salida3 = document.querySelector('#salida3');

form3.addEventListener('submit', e => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(form3));
  salida3.textContent = JSON.stringify(datos, null, 2);
});
