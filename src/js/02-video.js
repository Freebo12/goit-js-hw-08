import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOCAL = 'videoplayer-current-time';
player.on('timeupdate', function (data) {
  const timeOff = JSON.stringify(data);
  localStorage.setItem(KEY_LOCAL, timeOff);
});

const timeOn = JSON.parse(localStorage.getItem(KEY_LOCAL));
player.on(
  'timeupdate',
  throttle(() => {}, 1000)
);

player
  .setCurrentTime(timeOn.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
