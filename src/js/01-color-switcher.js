const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;
console.log('refs.stopBtn.disabled', refs.stopBtn.disabled);
console.log('refs.startBtn.disabled', refs.startBtn.disabled);

refs.startBtn.addEventListener('click', () => {
  currentColor = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
});
refs.stopBtn.addEventListener('click', stopNewBgColorBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function startNewBgColorBody() {
//   currentColor = setInterval(() => {
//     refs.body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
//   refs.startBtn.disabled = true;
//   refs.stopBtn.disabled = false;
//   console.log('refs.stopBtn.disabled', refs.stopBtn.disabled);
//   console.log('refs.startBtn.disabled', refs.startBtn.disabled);
// }

function stopNewBgColorBody() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(currentColor);
  console.log('refs.stopBtn.disabled', refs.stopBtn.disabled);
  console.log('refs.startBtn.disabled', refs.startBtn.disabled);
}
