const clock = document.getElementById("clock");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let initial = true; //처음시작:true
let flag = true;
let startTime = 0;
let stopTime = 0;
let saveTime;

let start;

const changeTime = () => {
  const nowTime = Date.now() - startTime;
  const newTime = new Date(nowTime);
  const min = newTime.getMinutes();
  const sec = newTime.getSeconds();
  const millisec = newTime.getMilliseconds();
  clock.innerText = `${min < 10 ? `0${min}` : min}:${
    sec < 10 ? `0${sec}` : sec
  }.${millisec < 10 ? `00${millisec}` : millisec}`;
};

const timeStart = () => {
  if (flag) {
    if (initial) {
      startTime = Date.now();
    } else {
      startTime += Date.now() - stopTime;
    }
    start = setInterval(changeTime, 1);
    flag = false;
  }
};

const timeStop = () => {
  clearInterval(start);
  const nowTime = new Date().getTime();
  stopTime = Date.now();

  initial = false;
  flag = true;
};

const timeReset = () => {
  clearInterval(start);
  initial = true;
  flag = true;
  clock.innerText = "00:00.000";
};

const init = () => {
  startBtn.addEventListener("click", timeStart);
  stopBtn.addEventListener("click", timeStop);
  resetBtn.addEventListener("click", timeReset);
};

init();
