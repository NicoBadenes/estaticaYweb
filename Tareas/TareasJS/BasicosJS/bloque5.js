// 1.
let persona = {
  nombre: "Nico",
  edad: 20,
  ciudad: "San Martín de los Andes"
};
console.log(persona);

// 2.
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);

// 3.
let personas = [
  { nombre: "Nico", edad: 20, ciudad: "SMA" },
  { nombre: "Ana", edad: 25, ciudad: "Neuquén" },
  { nombre: "Juan", edad: 30, ciudad: "Bariloche" }
];

for (let i = 0; i < personas.length; i++) {
  console.log("Persona " + (i + 1) + ": " + personas[i].nombre);
}

// 4.
function presentar(persona) {
  console.log("Hola, soy " + persona.nombre + " y tengo " + persona.edad + " años");
}

presentar(persona);
