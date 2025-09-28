const formProducto = document.querySelector('#formProducto');
const tablaProductos = document.querySelector('#tablaProductos');
let productos = JSON.parse(localStorage.getItem('productos')) || [];

function renderizarProductos() {
  tablaProductos.innerHTML = '';
  productos.forEach(p => {
    tablaProductos.innerHTML += `<tr><td>${p.nombre}</td><td>${p.precio}</td></tr>`;
  });
}

formProducto.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = formProducto.nombre.value.trim();
  const precio = Number(formProducto.precio.value);
  if(nombre && precio){
    productos.push({nombre, precio});
    localStorage.setItem('productos', JSON.stringify(productos));
    renderizarProductos();
    formProducto.reset();
  }
});

window.addEventListener('load', renderizarProductos);
