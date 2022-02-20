import throttle from 'lodash.throttle';
const ref={
videoVimeo: document.querySelector('iframe'),
}
const player = new Vimeo.Player(ref.videoVimeo);
//========================================================================//

let time = 0;
let storage = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(storage);

player.on('timeupdate',throttle(function (data) {
    time = data.seconds
localStorage.setItem('videoplayer-current-time', time )  
},1000));


