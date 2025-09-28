// 1.
let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Pera"];
console.log("Array de frutas:", frutas);

// 2.
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta " + (i + 1) + ": " + frutas[i]);
}

// 3.
let numeros = [5, 10, 3, 7, 2];
let sumaTotal = 0;
for (let i = 0; i < numeros.length; i++) {
  sumaTotal += numeros[i];
}
console.log("Suma total de números:", sumaTotal);

// 4. 
let num = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
console.log("Tabla de multiplicar del", num);
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}

// 5.
let contador = 1;
console.log("Contando del 1 al 10 con while:");
while (contador <= 10) {
  console.log(contador);
  contador++;
}
