// Set the countdown date

// get date from url query
var urlParams = new URLSearchParams(window.location.search);
var countdownYear = urlParams.get('year');
var countdownMonth = urlParams.get('month');
var countdownDay = urlParams.get('day');
var countdownHours = urlParams.get('hours');
var countdownMinutes = urlParams.get('minutes');
var countdownSeconds = urlParams.get('seconds');

console.log(
  'Date from url',
  countdownYear,
  countdownMonth,
  countdownDay,
  countdownHours,
  countdownMinutes,
  countdownSeconds
);
console.log(
  'Date:',
  new Date(
    countdownYear,
    countdownMonth - 1,
    countdownDay,
    countdownHours,
    countdownMinutes,
    countdownSeconds
  ).toLocaleDateString()
);

// fallback to end of the year if no date is provided
if (!countdownYear) {
  countdownYear = new Date().getFullYear();
}
if (!countdownMonth) {
  countdownMonth = 11;
}
if (!countdownDay) {
  countdownDay = 31;
}
if (!countdownHours) {
  countdownHours = 23;
}
if (!countdownMinutes) {
  countdownMinutes = 59;
}
if (!countdownSeconds) {
  countdownSeconds = 59;
}

var countDownDate = new Date(
  countdownYear,
  countdownMonth - 1,
  countdownDay,
  countdownHours,
  countdownMinutes,
  countdownSeconds
).getTime();

// set the text after the numbers from the url
var daysText = urlParams.get('daysText') ?? 'Days';
var hourText = urlParams.get('hourText') ?? 'Hours';
var minuteText = urlParams.get('minuteText') ?? 'Minutes';
var secondText = urlParams.get('secondText') ?? 'Seconds';

document.getElementById('daysText').innerHTML = daysText;
document.getElementById('hoursText').innerHTML = hourText;
document.getElementById('minutesText').innerHTML = minuteText;
document.getElementById('secondsText').innerHTML = secondText;

// set the text color and background color from the url
var textColor = urlParams.get('textColor');
var backgroundColor = urlParams.get('backgroundColor');

console.log('Colors:', textColor, backgroundColor);

document.getElementById('bg').style.color = `#${textColor}`;
document.getElementById('bg').style.backgroundColor = `#${backgroundColor}`;

// Update the count down every 1 second
var x = setInterval(function () {
  // Get the current time
  var now = new Date().getTime();

  // Find the distance between current time and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the corresponding elements
  var daysString = days < 10 ? '0' + days : days;
  var hoursString = hours < 10 ? '0' + hours : hours;
  var minutesString = minutes < 10 ? '0' + minutes : minutes;
  var secondsString = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('days').innerHTML = daysString;
  document.getElementById('hours').innerHTML = hoursString;
  document.getElementById('minutes').innerHTML = minutesString;
  document.getElementById('seconds').innerHTML = secondsString;
  // If the count down is finished display Happy New Year text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('days').innerHTML = '00';
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
  }
}, 1000);
