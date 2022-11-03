import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// const flatpickr = require('flatpickr');

let timerDeadline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timerDeadline = selectedDates[0].getTime();
    if (timerDeadline < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      btnStartRef.setAttribute('disabled', true);
    } else {
      btnStartRef.toggleAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

const btnStartRef = document.querySelector('[data-start]');
btnStartRef.setAttribute('disabled', false);
btnStartRef.addEventListener('click', onBtnStart);

const input = document.querySelector('#datetime-picker');

function onBtnStart() {
  timer.start(timerRef, timerDeadline);
  input.setAttribute('disabled', true);
  btnStartRef.setAttribute('disabled', true);
}

const timerRef = document.querySelector('.timer');

const timer = {
  intervalId: null,
  refs: {},
  start(rootSelector) {
    this.getRefs(rootSelector);
    this.intervalId = setInterval(() => {
      const delta = timerDeadline - Date.now();

      if (delta <= 0) {
        return;
      }

      const data = this.convertMs(delta);
      this.refs.days.textContent = this.addLeadinZero(data.days);
      this.refs.hours.textContent = this.addLeadinZero(data.hours);
      this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
      this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
    }, 1000);
  },
  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('[data-days]');
    this.refs.hours = rootSelector.querySelector('[data-hours]');
    this.refs.minutes = rootSelector.querySelector('[data-minutes]');
    this.refs.seconds = rootSelector.querySelector('[data-seconds]');
  },

  convertMs(delta) {
    const days = Math.floor(delta / 1000 / 60 / 60 / 24);
    const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(delta / 1000 / 60) % 60;
    const seconds = Math.floor(delta / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  addLeadinZero(value) {
    return String(value).padStart(2, '0');
  },
};
