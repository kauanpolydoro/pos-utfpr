const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const restartButton = document.getElementById('restart');

const output = document.querySelector('output');

let interval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stopTimer);
restartButton.addEventListener('click', restart);

function start()
{
  interval = setInterval(() => startTimer(), 1);
}

function restart()
{
  stopTimer();
  resetTimer();
}

function startTimer()
{
  milliseconds++;

  if (milliseconds >= 100) { seconds++; milliseconds = 0; }
  if (seconds >= 60) { minutes++; seconds = 0; }

  if (minutes > 0) return output.innerHTML = `${minutes}:${seconds}.${milliseconds}`;

  return output.innerHTML = `${seconds}.${milliseconds}`;
}

function stopTimer()
{
  clearInterval(interval);
}

function resetTimer()
{
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  return output.innerHTML = `${seconds}.${milliseconds}`;
}
