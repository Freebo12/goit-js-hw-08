import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY_LOCAL = 'videoplayer-current-time';
function timeUpDate() {
  player.on('timeupdate', function (data) {
    const timeOff = JSON.stringify(data);
    localStorage.setItem(KEY_LOCAL, timeOff);
  });
}
timeUpDate();

//throttle//
iframe.addEventListener('timeupdate', throttle(timeUpDate, 1000));
const timeOn = JSON.parse(localStorage.getItem(KEY_LOCAL));

let timeMove = timeOn.seconds;

player
  .setCurrentTime(timeMove)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
