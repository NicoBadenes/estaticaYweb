// 1.
let num1 = parseFloat(prompt("Ingresa 1er número:"));
let num2 = parseFloat(prompt("Ingresa 2do número:"));

if (num1 > num2) {
  alert(num1 + " es mayor que " + num2);
} else if (num2 > num1) {
  alert(num2 + " es mayor que " + num1);
} else {
  alert("Los números son iguales");
}

// 2.
let edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 18) {
  alert("Sos mayor de edad");
} else {
  alert("Sos menor de edad");
}

// 3.
let dia = prompt("Ingresa un día de la semana:").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert(dia + " es un día laboral");
} else if (dia === "sabado" || dia === "domingo") {
  alert(dia + " es fin de semana");
} else {
  alert("Ese no es un día válido");
}

// 4.
let n1 = parseFloat(prompt("Ingresa el 1er número:"));
let n2 = parseFloat(prompt("Ingresa el 2do número:"));
let operador = prompt("Ingresa un operaitor (+, -, *, /):");

if (operador === "+") {
  alert("Resultado: " + (n1 + n2));
} else if (operador === "-") {
  alert("Resultado: " + (n1 - n2));
} else if (operador === "*") {
  alert("Resultado: " + (n1 * n2));
} else if (operador === "/") {
  if (n2 !== 0) {
    alert("Resultado: " + (n1 / n2));
  } else {
    alert("Error: no se puede dividir por cero tontin");
  }
} else {
  alert("Operador inválido");
}
