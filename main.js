function calculateFutureDate([hours, minutes, seconds]) {
  var date1 = new Date();
  var hours = date1.getHours() + hours,
  minutes = date1.getMinutes() + minutes,
  seconds = date1.getSeconds() + seconds;
  var currentDate = new Date();
  if(seconds > 60) {
    minutes++
    seconds = seconds - 60;
  }
  if(minutes > 60) {
    hours++;
    minutes = minutes - 60
  }
  return new Date (
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDay(),
    hours,
    minutes,
    seconds
  );
  }

function subtract(date1, date2) {
  var dateh = date1.getHours() - date2.getHours();
  var datem = date1.getMinutes() - date2.getMinutes();
  var dates = date1.getSeconds() - date2.getSeconds();
  if(dates < 0) {
    datem--;
    dates += 60;
  }
  if(datem < 0) {
    dateh--;
    datem += 60;
  }
  if(dateh < 0) {
    return 'timesup';
  }
  return [dateh, datem, dates];
}

class Timer {
  constructor() {
    /**
     * @type {number[]}
     */
    this.setTime = time => {this.time = time};
    /** 
     * @type {() => void}
     */
    this.onstop = () => {};
    /**
     * @type {(hours: number, minutes: number, seconds: number) => void}
     */
    this.onupdate = (hours, minutes, seconds) => {};
		/**
			*@type {(state) => void}
		*/
		this.onstatechange = (state) => {}
    /**
     * @type {string}
     */
    this.state = "stopped"; 

    /**
     * @type {Date}
     */

    this.stopTime = new Date();

    /**
     * @type {number}
     */
    this.interval = 1000;
    /**
     * @type {number[]}
     * @private
     */
    this.time = [0, 0, 0];
  }
  /**
   * 
   * @param {string} event 
   * @param {(...args?: any[]) => void} callback 
   */

  on(event, callback) {
    this["on" + event] = callback;
  }

  setTime([hours, minutes, seconds]) {
    clearInterval(this.interval);
    this.time = [hours, minutes, seconds];
    this.onupdate(this.time[0], this.time[1], this.time[2]);
  }

  start() {
    this.state = "running";
		this.onstatechange(this.state);
    this.stopTime = calculateFutureDate(this.time);
    this.interval = setInterval(() => {
      const result = subtract(this.stopTime, new Date());
      if(result == 'timesup') {
        this.onstop();
        this.state = "stopped";
				this.onstatechange(this.state);
        clearInterval(this.interval);
        return;
      } else {
        this.time = result;
        this.onupdate(this.time[0], this.time[1], this.time[2]);
      }
    }, 1000);
  }
}
export default Timer;