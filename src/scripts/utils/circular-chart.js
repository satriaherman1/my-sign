let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".circular-progress-value");
let progressStartValue = 0,
  progressEndValue = 25,
  speed = 100;

let progress = setInterval(() => {
  progressStartValue++;
  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(#339eec ${progressStartValue * 3.6}deg, #ededed 0deg)`;
  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
