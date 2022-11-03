import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
  startBtn: document.querySelector('button'),
  deley: document.querySelectorAll('input')[0],
  step: document.querySelectorAll('input')[1],
  amount: document.querySelectorAll('input')[2],
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
});
refs.startBtn.addEventListener('click', startPromis);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

function startPromis() {
  let time = Number(refs.deley.value);
  let deleyTime = Number(refs.deley.value);

  for (let i = 1; i <= refs.amount.value; i += 1) {
    setTimeout(() => {
      createPromise(i, time);
      time += Number(refs.step.value);
    }, deleyTime);
    deleyTime += Number(refs.step.value);
  }
}
