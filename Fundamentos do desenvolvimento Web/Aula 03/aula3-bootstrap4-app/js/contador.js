const plusButton = document.querySelector('.btn-success');
const minusButton = document.querySelector('.btn-danger');

const output = document.querySelector('output');

plusButton.addEventListener('click', () => sum(output, 1));
minusButton.addEventListener('click', () => sum(output, -1));

/**
 * Computa a soma de um valor ao valor atual do elemento informado
 * @param {HTMLOutputElement} element Elemento que será alterado
 * @param {number} value Valor a ser somado
 */
function sum(element, value)
{
  element.innerHTML = parseInt(element.value) + value;
  changeColor(element);
}

function changeColor(element)
{
  if (element.value > 0) return element.classList.add('text-success');
  if (element.value < 0) return element.classList.add('text-danger');

  element.classList.remove('text-success');
  element.classList.remove('text-danger');
}
