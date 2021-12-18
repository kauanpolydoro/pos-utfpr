const form = document.querySelector('form');

form.addEventListener('submit', (event) =>
{
  event.preventDefault();

  const { value } = document.querySelector('input');
  const { style } = document.querySelector('body');

  style.backgroundColor = value;

  if (style.backgroundColor === value)
  {
    console.log('Cor alterada com sucesso!');
  } else
  {
    console.error('Cor não alterada!');
  }

});
