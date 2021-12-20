const submitButton = document.querySelector('button[type="submit"]');
const dateInput = document.getElementById('date-input');

let date = new Date(2022, 00, 01, 00, 00, 00); //Ano novo
// let date = new Date(2021, 11, 20, 13, 46, 30); //Teste Professor

let interval = setInterval(countdown, 10);

submitButton.addEventListener('click', (event) =>
{
  event.preventDefault();
  const now = new Date();

  newDate = new Date(dateInput.value);

  if (newDate instanceof Date && !isNaN(newDate))
  {
    if (newDate.getTime() < now.getTime())
    {
      return alert('Escolha uma data futura!');
    }

    document.getElementById('days').classList.remove('bg-success');
    document.getElementById('hours').classList.remove('bg-success');
    document.getElementById('minutes').classList.remove('bg-success');
    document.getElementById('seconds').classList.remove('bg-success');

    date = newDate;

    return interval = setInterval(countdown, 10);
  }

  return alert('Data inválida!');

});

function countdown()
{
  const now = new Date();
  const difference = date.getTime() - now.getTime();

  if (difference <= 0)
  {
    return finish();
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
};

function finish()
{
  clearInterval(interval);
  document.getElementById('days').classList.add('bg-success');
  document.getElementById('hours').classList.add('bg-success');
  document.getElementById('minutes').classList.add('bg-success');
  document.getElementById('seconds').classList.add('bg-success');
}