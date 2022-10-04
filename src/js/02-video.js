import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);

function onTimeUpdate (timeupdate) {
            localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate.seconds));
        }

player.on('timeupdate', throttle(onTimeUpdate, 1000));
    

player.setCurrentTime(
    localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) { })
    .catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
