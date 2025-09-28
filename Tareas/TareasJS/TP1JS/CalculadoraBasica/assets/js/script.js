const n1 = document.querySelector('#num1');
const n2 = document.querySelector('#num2');
const res = document.querySelector('#resultadoCalc');

document.querySelector('#sumar').addEventListener('click', () => {
  res.textContent = Number(n1.value) + Number(n2.value);
});
document.querySelector('#restar').addEventListener('click', () => {
  res.textContent = Number(n1.value) - Number(n2.value);
});
document.querySelector('#multiplicar').addEventListener('click', () => {
  res.textContent = Number(n1.value) * Number(n2.value);
});
document.querySelector('#dividir').addEventListener('click', () => {
  if(Number(n2.value) !== 0){
    res.textContent = Number(n1.value) / Number(n2.value);
  } else {
    res.textContent = 'Error: división por cero';
  }
});
