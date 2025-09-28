const formTarea = document.querySelector('#formTarea');
const listaTareas = document.querySelector('#listaTareas');
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

function renderizarTareas() {
  listaTareas.innerHTML = '';
  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.textContent = tarea;
    listaTareas.appendChild(li);
  });
}

formTarea.addEventListener('submit', e => {
  e.preventDefault();
  const texto = formTarea.tarea.value.trim();
  if(texto){
    tareas.push(texto);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    renderizarTareas();
    formTarea.tarea.value = '';
  }
});

window.addEventListener('load', renderizarTareas);
