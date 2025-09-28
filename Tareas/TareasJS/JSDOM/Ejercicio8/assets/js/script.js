const formTareas = document.querySelector('#formTareas');
const listaTareas = document.querySelector('#listaTareas');
const btnBorrarTareas = document.querySelector('#borrarTareas');

let tareas = [];

const guardadas = localStorage.getItem('tareas');
if (guardadas) {
  tareas = JSON.parse(guardadas);
  renderizarTareas();
}

function renderizarTareas() {
  listaTareas.innerHTML = '';
  tareas.forEach((tarea, i) => {
    const li = document.createElement('li');
    li.textContent = tarea;
    li.addEventListener('click', () => li.classList.toggle('hecha'));
    listaTareas.appendChild(li);
  });
}

formTareas.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = formTareas.tarea.value.trim();
  if (texto) {
    tareas.push(texto);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    renderizarTareas();
    formTareas.reset();
  }
});

btnBorrarTareas.addEventListener('click', () => {
  tareas = [];
  localStorage.removeItem('tareas');
  renderizarTareas();
  console.log('Todas las tareas borradas');
});
