'use strict';

class CountdownTimer{
  constructor({ selector, targetDate}) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    const fieldDays = this.selector.querySelector('span[data-value="days"]');
    const fieldHours = this.selector.querySelector('span[data-value="hours"]');
    const fieldMins = this.selector.querySelector('span[data-value="mins"]');
    const fieldSecs = this.selector.querySelector('span[data-value="secs"]');
    this.fieldDays = fieldDays;
    this.fieldHours = fieldHours;
    this.fieldMins = fieldMins;
    this.fieldSecs = fieldSecs;
    this.updateTimer();
}
  updateTimer(){
      this.timerId = setInterval(() => {
      this.startTimer = Date.now();
      this.differenceTime = this.targetDate.getTime() - this.startTimer;
      this.days = String(
        Math.floor(this.differenceTime / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");      
      this.hours = String(
        Math.floor((this.differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      this.mins = String(
        Math.floor((this.differenceTime % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      this.secs = String(
        Math.floor((this.differenceTime % (1000 * 60)) / 1000)
      ).padStart(2, "0");
      this.fieldDays.textContent = this.days;
      this.fieldHours.textContent = this.hours;
      this.fieldMins.textContent = this.mins;
      this.fieldSecs.textContent = this.secs; 
    }, 1000);
    }
  }
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 13, 2021'),
});