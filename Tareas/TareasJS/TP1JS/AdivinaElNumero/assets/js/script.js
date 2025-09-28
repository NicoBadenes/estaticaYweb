const secreto = Math.floor(Math.random() * 100) + 1;
let adivinanza;
do {
  adivinanza = parseInt(prompt("Adivina el número (1-100)"));
  if(adivinanza < secreto){
    alert("Es mayor");
  } else if(adivinanza > secreto){
    alert("Es menor");
  }
} while(adivinanza !== secreto);

alert("¡Acertaste!");
