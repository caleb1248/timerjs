const togglePlay = document.querySelector('#togglePlay');

var timer = new Timer();
togglePlay.onclick = timer.start;

timer.on('update', function (h, m, s) {
  document.querySelector('#time').innerHTML = `${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
});

timer.on('stop', function() {
  togglePlay.innerHTML = "play_arrow";
  togglePlay.style.backgroundColor = "green";
  togglePlay.onclick = timer.start;
});

timer.on('start', function() {
  togglePlay.innerHTML = "stop";
  togglePlay.style.backgroundColor = "red";
  togglePlay.onclick = timer.stop;
});

timer.ontimerend =  function() {
  alert("Time's up!");
};

document.querySelector('#timeSelector').onclick = function() {
  timer.setTime (
    parseInt(prompt("enter hours")),
    parseInt(prompt("enter minutes")),
    parseInt(prompt("enter seconds"))
  );
}
