const tareas = [];
const lista = document.querySelector('#listaTareas');

document.querySelector('#agregarTarea').addEventListener('click', () => {
  const texto = document.querySelector('#tareaInput').value.trim();
  if(texto){
    tareas.push(texto);
    renderizarTareas();
    document.querySelector('#tareaInput').value = '';
  }
});

function renderizarTareas() {
  lista.innerHTML = '';
  tareas.forEach((tarea, i) => {
    const li = document.createElement('li');
    li.textContent = tarea;
    li.addEventListener('click', () => li.classList.toggle('hecha'));
    lista.appendChild(li);
  });
}
