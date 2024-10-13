const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];
const arrDay = [
  'неділя',
  'понеділок',
  'вівторок',
  'середа',
  'четвер',
  'пятниця',
  'субота',
];
const day = document.querySelector('.date-day');
const date = document.querySelector('.date');
const month = document.querySelector('.date-month');
const years = document.querySelector('.date-years');
const digitalClock = document.querySelector('.digital-clock');

const arrowSeconds = document.querySelector('.clock-seconds__arrow');
const arrowMinutes = document.querySelector('.clock-minutes__arrow');
const arrowHour = document.querySelector('.clock-hours__arrow');

setInterval(() => {
  const currentTime = new Date();
  const currentDay = arrDay[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();
  const changeSeconds = (360 / 60) * currentSeconds;
  const changeMinuts = (360 / 60) * currentMinutes;
  const changeHour =
    (360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes;

  const formatTime = `${currentHour
    .toString()
    .padStart(2, '0')} : ${currentMinutes
    .toString()
    .padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`;

  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonth;
  years.textContent = currentYear;
  digitalClock.textContent = `Поточний час:${formatTime}`;
  arrowSeconds.style.transform = `rotate(${changeSeconds}deg)`;
  arrowMinutes.style.transform = `rotate(${changeMinuts}deg)`;
  arrowHour.style.transform = `rotate(${changeHour}deg)`;
}, 1000);
const currentTime = new Date();
