class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.updateClockView = this.getClockValue(selector);
    this.targetDate = targetDate;
    this.timer();
    this.time();
  };

  getClockValue(time) {
    const refs = {
      days: document.querySelector(`${time} [data-value="days"]`),
      hours: document.querySelector(`${time} [data-value="hours"]`),
      minutes: document.querySelector(`${time} [data-value="mins"]`),
      seconds: document.querySelector(`${time} [data-value="secs"]`),
    }
    return refs;
  };

  time() {
    const distance = this.targetDate - new Date();

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);
  

    this.updateClockView.days.innerHTML = d;
    this.updateClockView.hours.innerHTML = h;
    this.updateClockView.minutes.innerHTML = m;
    this.updateClockView.seconds.innerHTML = s;

      if (this.targetDate <= new Date()) {
        this.updateClockView.days.innerHTML = `00`;
        this.updateClockView.hours.innerHTML = `00`;
        this.updateClockView.minutes.innerHTML = `00`;
        this.updateClockView.seconds.innerHTML = `00`;
    };
  };

  timer() {
    const timerId = setInterval(() => {
      this.time();

        if (this.targetDate <= new Date()) {
          clearInterval(timerId);
      };
    }, 1000);
  };
};

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 13, 2021 23:59:59'),
});