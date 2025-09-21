const btnSumar = document.getElementById('btn-sumar');
const resultado = document.getElementById('resultado');

btnSumar.addEventListener('click', () => {
  const a = 7;
  const b = 5;
  resultado.textContent = 'Resultado: ' + (a + b);
});
