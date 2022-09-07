const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const ethStarts = document.querySelector('.Eth-starts');
const ethcd = document.querySelector('.Eth-CD');
const items = document.querySelectorAll('.Eth-CD-format h4');

let futureDate = new Date(2022, 08, 7, 22, 59, 00);
// console.log(futureDate);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];
const hour = futureDate.getHours();
const min = futureDate.getMinutes();
const sec = futureDate.getSeconds();

ethStarts.textContent = `The Ethereum 2.0 Merge starts on ${day}, ${date}th ${month} ${year}  ${hour}:${min}:${sec} am.`;

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  // console.log(t);

  /*
values in ms
1s = 1000 
1min = 60secs
1hour = 60mins
1 day = 24hrs
*/
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMinute);
  let secs = Math.floor((t % oneMinute) / 1000);

  const value = [days, hours, mins, secs];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(value[index]);
  });
  if (t < 0) {
    clearInterval(CD);
    ethcd.innerHTML = `<h1>THE ETH MERGE HAS BEGAN</h1>`;
  }
}
let CD = setInterval(getRemainingTime, 1000);

getRemainingTime();
