# Timerjs: Simplifing online timers
# How to
First link to the script
## Regular javascript
```html
<script src="https://cdn.jsdelivr.net/gh/caleb1248/timerjs@master/dist/timer.min.js"></script>
```
### Or
```html
<script src="https://cdn.jsdelivr.net/gh/caleb1248/timerjs@master/dist/timer.js"></script>
```
## ES Javascript
```javascript
// import the minified version
import Timer from 'https://cdn.jsdelivr.net/gh/caleb1248/timerjs@master/dist/timer.esm.min.js'
// Or the regular version
import Timer from 'https://cdn.jsdelivr.net/gh/caleb1248/timerjs@master/dist/timer.esm.js'
```
# Usage:
```javascript
const timer = new Timer();
```

# Methods:

## Start the timer
```javascript
timer.start()
```
## Stop the timer
```javascript
timer.stop()
```
## Set the time on the timer (stops the timer as well)
```javascript
timer.setTime(hours, minutes, seconds)
```
## Handle events...
```javascript
on(event, callback)
```
# Events that are fired:
## start
Usage
```javascript
timer.on('start', function() {
  console.log('timer started');
});
// Or
timer.onstart = function() {
  console.log('timer started');
}
```
## stop
```javascript
timer.on('stop', function() {
  console.log('timer stopped');
})
// Or
timer.onstop = function() {
  console.log('timer stopped');
}
```
## update
```javascript
timer.on('update', function(hours, minutes, seconds) {
  console.log('timer updated', hours, minutes, seconds);
})
// Or
timer.onupdate = function(hours, minutes, seconds) {
  console.log('timer updated', hours, minutes, seconds);
}
```
## timerend
```javascript
timer.on('timerend', function() {
  console.log('event fired');
})
// Or
timer.ontimerend = function() {
  alert('Times up!');
}
```

# View an example [here](https://caleb.fezzle.dev/timerjs/example)
# View the source code for the example [here](https://github.com/caleb1248/timerjs/example)