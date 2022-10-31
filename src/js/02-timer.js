import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const flatpickr = require('flatpickr');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

// function notValidityDate() {
//   window.alert('Please choose a date in the future');
// }
// function validityDate() {
//   refs.startBtn.disabled = false;
// }

flatpickr('input#datetime-picker', options);
