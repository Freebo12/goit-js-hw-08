import Player from '@vimeo/player';

console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOCAL = 'videoplayer-current-time';

player.on('timeupdate', function (data) {
  const timeOff = JSON.stringify(data);
  localStorage.setItem(KEY_LOCAL, timeOff);
});

const timeOn = JSON.parse(localStorage.getItem(KEY_LOCAL));
const timeMove = timeOn.seconds;

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
