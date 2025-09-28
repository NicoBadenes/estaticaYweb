const form2 = document.querySelector('#form2');
const salida2 = document.querySelector('#salida2');

form2.addEventListener('submit', e => {
  e.preventDefault();
  salida2.innerHTML = '';
  const nombre = form2.nombre.value;
  const email = form2.email.value;

  const pNombre = document.createElement('p');
  pNombre.textContent = `Nombre: ${nombre}`;
  const pEmail = document.createElement('p');
  pEmail.textContent = `Email: ${email}`;

  salida2.appendChild(pNombre);
  salida2.appendChild(pEmail);
});
