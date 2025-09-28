const carrito = [];
const productoInput = document.querySelector('#producto');
const precioInput = document.querySelector('#precio');
const listaCarrito = document.querySelector('#listaCarrito');
const totalCarrito = document.querySelector('#totalCarrito');

document.querySelector('#agregar').addEventListener('click', () => {
  const nombre = productoInput.value.trim();
  const precio = Number(precioInput.value);
  if(nombre && precio){
    carrito.push({ nombre, precio });
    renderizarCarrito();
    productoInput.value = '';
    precioInput.value = '';
  } else {
    alert("Ingrese nombre y precio válidos");
  }
});

document.querySelector('#vaciar').addEventListener('click', () => {
  carrito.length = 0; // vacía el array
  renderizarCarrito();
});

document.querySelector('#total').addEventListener('click', () => {
  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  totalCarrito.textContent = `Total: $${total}`;
});

function renderizarCarrito(){
  listaCarrito.innerHTML = '';
  carrito.forEach(prod => {
    const li = document.createElement('li');
    li.textContent = `${prod.nombre} - $${prod.precio}`;
    listaCarrito.appendChild(li);
  });
  totalCarrito.textContent = '';
}
