const formColor = document.querySelector('#formColor');
const cajaColor = document.querySelector('#cajaColor');

formColor.addEventListener('submit', e => {
  e.preventDefault();
  const color = formColor.color.value;
  localStorage.setItem('color', color);
  cajaColor.style.backgroundColor = color;
});

// Recuperar color al cargar
window.addEventListener('load', () => {
  const color = localStorage.getItem('color');
  if(color) cajaColor.style.backgroundColor = color;
});
