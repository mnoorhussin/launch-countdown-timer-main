const countdown = () => {
  const countDate = new Date("August 1, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  // Check if gap is less than or equal to zero
  if (gap <= 0) {
    clearInterval(intervalId);
    return;
  }
  // How the time works
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the time
  let textDay = Math.floor(gap / day);
  let textHour = Math.floor((gap % day) / hour);
  let textMinute = Math.floor((gap % hour) / minute);
  let textSecond = Math.floor((gap % minute) / second);

  // Add 0 if the time is less than 10
  textDay < 10 ? (textDay = "0" + textDay) : textDay;
  textHour < 10 ? (textHour = "0" + textHour) : textHour;
  textMinute < 10 ? (textMinute = "0" + textMinute) : textMinute;
  textSecond < 10 ? (textSecond = "0" + textSecond) : textSecond;

  document.getElementById("days").innerHTML = textDay;
  document.getElementById("hours").innerHTML = textHour;
  document.getElementById("minutes").innerHTML = textMinute;
  document.getElementById("seconds").innerHTML = textSecond;
};

setInterval(countdown, 1000);
