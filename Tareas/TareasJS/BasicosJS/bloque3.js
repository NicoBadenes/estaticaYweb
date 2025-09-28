// 1. 
function saludar() {
  alert("Hola, mundo");
}
saludar();

// Flecha
const saludarFlecha = () => alert("Hola, mundo");
saludarFlecha();

// 2.
function suma(a, b) {
  return a + b;
}
alert("Suma normal (3 + 4): " + suma(3, 4));

// Flecha
const sumaFlecha = (a, b) => a + b;
alert("Suma flecha (5 + 7): " + sumaFlecha(5, 7));

// 3.
function saludarPersona(nombre) {
  return "Hola, " + nombre + "!";
}
alert(saludarPersona("Nico"));

// Flecha
const saludarPersonaFlecha = (nombre) => "Hola, " + nombre + "!";
alert(saludarPersonaFlecha("Nico"));
