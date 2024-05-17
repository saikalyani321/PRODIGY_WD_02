let timer;
let isRunning = false;
let isPaused = false;
let lapCount = 0;

function startStop() {
  if (!isRunning && !isPaused) {
    timer = setInterval(displayTime, 10);
    document.getElementById('startStop').innerHTML = 'Stop';
  } else if (!isRunning && isPaused) {
    timer = setInterval(displayTime, 10);
    document.getElementById('startStop').innerHTML = 'Stop';
    document.getElementById('pause').innerHTML = 'Pause';
  } else {
    clearInterval(timer);
    document.getElementById('startStop').innerHTML = 'Start';
  }
  isRunning = !isRunning;
}

function pause() {
  if (isRunning && !isPaused) {
    clearInterval(timer);
    document.getElementById('pause').innerHTML = 'Resume';
    isPaused = true;
  } else if (isRunning && isPaused) {
    timer = setInterval(displayTime, 10);
    document.getElementById('pause').innerHTML = 'Pause';
    isPaused = false;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById('display').innerHTML = '00:00:00';
  document.getElementById('startStop').innerHTML = 'Start';
  isRunning = false;
  isPaused = false;
  lapCount = 0;
  document.getElementById('laps').innerHTML = '';
}

function displayTime() {
  let centiseconds = Math.floor((lapCount % 100));
  let seconds = Math.floor((lapCount / 100) % 60);
  let minutes = Math.floor((lapCount / 100 / 60) % 60);

  centiseconds = (centiseconds < 10) ? '0' + centiseconds : centiseconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  minutes = (minutes < 10) ? '0' + minutes : minutes;

  document.getElementById('display').innerHTML = minutes + ':' + seconds + ':' + centiseconds;
  lapCount++;
}

function lap() {
  let lapTime = document.getElementById('display').innerHTML;
  let lapList = document.getElementById('laps');
  let li = document.createElement('li');
  li.textContent = lapTime;
  lapList.appendChild(li);
}
