// Ejercicio 23 – .push() y .pop()
let carrito = [];
console.log("Carrito inicial:", carrito);

carrito.push({ id: 1, nombre: "Remera", precio: 5000 });
console.log("Después de push:", carrito);

carrito.push({ id: 2, nombre: "Pantalón", precio: 8000 });
console.log("Después de push:", carrito);

carrito.push({ id: 3, nombre: "Zapatillas", precio: 20000 });
console.log("Después de push:", carrito);

carrito.pop();
console.log("Después de pop:", carrito);

// Teoría
// .push() agrega al final del array, .unshift() agrega al inicio.
// Manejar objetos da más info que un string, porque podemos guardar varias propiedades.


// Ejercicio 24 – .map()
let productos = [
  { nombre: "Remera", precio: 5000 },
  { nombre: "Pantalón", precio: 8000 },
  { nombre: "Zapatillas", precio: 20000 }
];

let productosConIVA = productos.map(p => ({
  ...p,
  precioConIVA: p.precio * 1.21
}));

console.log("Original:", productos);
console.log("Con IVA:", productosConIVA);

// Teoría
// .map() devuelve un nuevo array con la misma cantidad de elementos transformados.
// .forEach() recorre pero no devuelve un nuevo array.


// Ejercicio 25 – .filter()
let peliculas = [
  { titulo: "Toy Story", edadMinima: 0 },
  { titulo: "Avengers", edadMinima: 13 },
  { titulo: "Deadpool", edadMinima: 18 }
];

let aptas13 = peliculas.filter(p => p.edadMinima <= 13);
console.log("Películas aptas para +13:", aptas13);

// Teoría
// .filter() devuelve un array (vacío si nada cumple).
// Para simular un buscador se puede usar con includes(), ej: filter(p => p.titulo.includes("Toy")).


// Ejercicio 26 – .find()
let usuarios = [
  { id: 1, nombre: "Nico", email: "nico@mail.com" },
  { id: 2, nombre: "Ana", email: "ana@mail.com" },
  { id: 3, nombre: "Juan", email: "juan@mail.com" }
];

let usuarioEncontrado = usuarios.find(u => u.id === 3);
console.log("Usuario con id 3:", usuarioEncontrado);

// Teoría
// .find() devuelve el primer elemento que cumple (o undefined si no hay).
// .filter() devuelve todos los que cumplen en un array.


// Ejercicio 27 – .map() + .filter()
let productosVenta = [
  { nombre: "Televisor", precio: 15000 },
  { nombre: "Celular", precio: 9000 },
  { nombre: "Notebook", precio: 20000 }
];

let productosCarosConDescuento = productosVenta
  .filter(p => p.precio > 10000)
  .map(p => ({
    ...p,
    precioConDescuento: p.precio * 0.9
  }));

console.log("Productos caros con descuento:", productosCarosConDescuento);

// Teoría
// filter().map() primero reduce la lista y después transforma (más eficiente).
// map().filter() transformaría todo y luego descartaría algunos, menos práctico.
