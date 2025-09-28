const form1 = document.querySelector('#form1');
const salida1 = document.querySelector('#salida1');

form1.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = form1.nombre.value;
  const email = form1.email.value;
  salida1.innerHTML = `<p>Nombre: ${nombre}</p><p>Email: ${email}</p>`;
});
