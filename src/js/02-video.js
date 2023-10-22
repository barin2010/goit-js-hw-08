import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on(
  'timeupdate',
  throttle(data => {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
