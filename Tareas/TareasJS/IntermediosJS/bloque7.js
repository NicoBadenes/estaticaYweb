// Ejercicio 28 – .length
let nombre = prompt("Ingresa tu nombre:");
if (nombre.length >= 3) {
  console.log("Nombre válido");
} else {
  console.log("El nombre es demasiado corto");
}

// Ejercicio 29 – Mayúsculas y minúsculas
let texto = prompt("Escribe un texto:");
if (texto.toLowerCase() === "javascript") {
  console.log("Encontrado");
} else {
  console.log("No se encontró");
}

// Ejercicio 30 – .replaceAll()
let comentario = prompt("Escribe un comentario:");
let censurado = comentario.replaceAll("tonto", "****");
console.log("Comentario censurado:");
console.log(censurado);

// Ejercicio 31 – new Date()
let hoy = new Date();
let dia = hoy.getDate().toString().padStart(2, "0");
let mes = (hoy.getMonth() + 1).toString().padStart(2, "0");
let anio = hoy.getFullYear();
console.log(`Hoy es ${dia}/${mes}/${anio}`);

// Ejercicio 32 – Fecha formateada
let concierto = new Date("2025-12-20");
let diferencia = concierto - hoy;
let diasFaltan = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
console.log(`Faltan ${diasFaltan} días para el concierto`);
