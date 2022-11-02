const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', startNewBgColorBody);
refs.stopBtn.addEventListener('click', stopNewBgColorBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startNewBgColorBody() {
  currentColor = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.setAttribute('disabled', false);
}

function stopNewBgColorBody() {
  refs.startBtn.setAttribute('disabled', false);
  refs.stopBtn.setAttribute('disabled', true);
  clearInterval(currentColor);
}
