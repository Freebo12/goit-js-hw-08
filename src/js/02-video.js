import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY_LOCAL = 'videoplayer-current-time';
function timeUpDate(e) {
  localStorage.setItem(KEY_LOCAL, JSON.stringify(e.seconds));
}

//throttle//
player.on('timeupdate', throttle(timeUpDate, 1000));
const currentTime = localStorage.getItem(KEY_LOCAL);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
