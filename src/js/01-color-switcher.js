const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', startNewBgColorBody);
refs.stopBtn.addEventListener('click', stopNewBgColorBody);

function currentColor() {
  color = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startNewBgColorBody() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  currentColor();
}

function stopNewBgColorBody() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(color);
}
