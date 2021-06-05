const days = document.querySelector('[data-value="days"]');
const hours = document.querySelector('[data-value="hours"]');
const minutes = document.querySelector('[data-value="mins"]');
const seconds = document.querySelector('[data-value="secs"]');

const countDownDate = new Date("Jun 13, 2021 23:59:59").getTime();

function time() {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("demo").innerHTML = "time is up!";
    };
};

const timer = setInterval(function () {
    time();
}, 1000);

time();
