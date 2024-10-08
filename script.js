let stopwatchInterval;

let elapsedTime = 0;

function startStopwatch() {

  if (!stopwatchInterval) {

    const startTime = Date.now() - elapsedTime;

    stopwatchInterval = setInterval(function() {

      elapsedTime = Date.now() - startTime;

      document.getElementById('time-display').textContent = formatTime(elapsedTime);

    }, 100);

  }

}

function stopStopwatch() {

  clearInterval(stopwatchInterval);

  stopwatchInterval = null;

}

function resetStopwatch() {

  clearInterval(stopwatchInterval);

  stopwatchInterval = null;

  elapsedTime = 0;

  document.getElementById('time-display').textContent = "00:00:00";

}

function formatTime(milliseconds) {

  const totalSeconds = Math.floor(milliseconds / 1000);

  const hours = Math.floor(totalSeconds / 3600);

  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const seconds = totalSeconds % 60;

  

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

}

function pad(number) {

  return number < 10 ? `0${number}` : number;

}