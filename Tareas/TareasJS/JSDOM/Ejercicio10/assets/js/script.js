const formProductos = document.querySelector('#formProductos');
const tablaProductos = document.querySelector('#tablaProductos');
const btnBorrarUltimo = document.querySelector('#borrarUltimo');

let productos = [];

const guardados = localStorage.getItem('productos');
if (guardados) {
  productos = JSON.parse(guardados);
  renderizarTabla();
}

function renderizarTabla() {
  tablaProductos.innerHTML = '';
  productos.forEach(prod => {
    const fila = `<tr><td>${prod.nombre}</td><td>${prod.precio}</td></tr>`;
    tablaProductos.innerHTML += fila;
  });
}

formProductos.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = formProductos.nombre.value.trim();
  const precio = Number(formProductos.precio.value);
  if (nombre && precio) {
    productos.push({ nombre, precio });
    localStorage.setItem('productos', JSON.stringify(productos));
    renderizarTabla();
    formProductos.reset();
  }
});

btnBorrarUltimo.addEventListener('click', () => {
  if (productos.length > 0) {
    productos.pop();
    localStorage.setItem('productos', JSON.stringify(productos));
    renderizarTabla();
    console.log('Último producto eliminado');
  } else {
    console.log('No hay productos para eliminar');
  }
});
