function calculateFutureDate(time) {
	var [hours, minutes, seconds] = time;
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
		this.onstop = () => {};
		/**
		 * @type {number}
		 */
		this.interval = 1000;
		/**
		 * @type {number[]}
		 * @private
		 */
		this.time = [0, 0, 0];
		/**
		 * @type {(hours: number, minutes: number, seconds: number) => void}
		 */
		this.onupdate = (hours, minutes, seconds) => {};
		this.ontimerend = () => {};
		this.onstart = () => {};
		this.onstop = () => {};
	}
	
	on(event, callback) {
		this["on" + event] = callback;
	}

	setTime(h, m, s) {
		this.stop();
		this.time = [h, m, s];
		this.update();
	}

	start = () => {
		this.onstart();
		var stopTime = calculateFutureDate(this.time);
		this.interval = setInterval(() => {
			const result = subtract(stopTime, new Date());
			if(result == 'timesup') {
				this.stop();
				clearInterval(this.interval);
				this.ontimerend();
			} else {
				this.time = result;
				this.update();
			}
		}, 1000);
	}

	update() {
		this.onupdate(this.time[0], this.time[1], this.time[2]);
	}
	
	stop = () => {
		clearInterval(this.interval);
		this.onstop();
	}
}
export default Timer;