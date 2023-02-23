let audio = document.querySelector('.audio');
playbtn = document.querySelector('.playbtn');
headerAudio = document.querySelector('.header__audio');
progressBar = document.querySelector('.audiotrack');
progressContainer = document.querySelector('.audiotrack__wrapper');
currentTimeTimer = document.querySelector('.current__time');
allTime = document.querySelector('.all__time');
 menu = document.querySelector('.mob__nav__menu');
 menuButton = document.querySelector('.mob__nav__img');
 menuClose = document.querySelector('.closebutton');
introduceList = document.querySelector('.introduce__list');
// Mobile menu
function openMenu() {
    menu.style.display = 'flex';
    menu.style.justifycontent = 'space-around';
    introduceList.style.display = 'none';

     } 
     function closeMenu() {
       menu.style.display = 'none'; 
       introduceList.style.display = 'grid';
     }
menuButton.addEventListener('click', openMenu);
menuClose.addEventListener('click',closeMenu);


// Audio Player
progressBar.style.width = '0px';
function loadSong() {
    audio.src = 'audio/phonk.mp3';

}
function playSong() {
    audio.play();
    headerAudio.classList.add('active');
    playbtn.src = `img/pausebtn.png`;

}
function pauseSong() {
    audio.pause();
    headerAudio.classList.remove('active');
    playbtn.src = `img/playbtn.png`;
}
playbtn.addEventListener('click', function() {
let isPlaying = headerAudio.classList.contains('active');
if (isPlaying) {
pauseSong();
} else {
playSong();    
}
})
function updateBar(e) {
const {duration,currentTime} = e.srcElement;
const progressPercent = currentTime / duration * 100;
progressBar.style.width = `${progressPercent}%`;
console.log(`${progressPercent}%`);
}
audio.addEventListener('timeupdate', updateBar);

function setProgress(e) {
const width = this.clientWidth;
const clickX = e.offsetX;
const duration = audio.duration;

audio.currentTime = (clickX / width) * duration;

}
progressContainer.addEventListener('click',setProgress);

//Audio Player, ChangeColor

//ChangeColor
let playBtnSection = document.querySelector('.playbtn__section');
let songsSection = document.querySelectorAll('.track__name')
audioSection = document.querySelector('.audio__section');
songsSection.forEach(a => a.addEventListener('click',
(e) => {
    ChangeColor(e.target);
}
))
function ChangeColor(song) {
    songsSection.forEach( element => {
        element.classList.remove('purple');

    } )
    song.classList.add('purple');
}
// play
let AudioWrapper = document.querySelector('.audiotrack__wrapper__section');

 let songsAsArray = [...songsSection];

function loadSection() {
   
    let songsAsArray = [...songsSection];
    let currentTrack = document.querySelector('.purple');
        mustPlay = songsAsArray.indexOf(currentTrack);
    
playBtnSection.src = `img/pausebtn.png`;
AudioWrapper.classList.add('playingNow');
audioSection.src = `audio/audio${mustPlay}.mp3`;
audioSection.play()
audio.pause()



  
}
function nextTrack() {
    let songsAsArray = [...songsSection];
    
    let currentTrack = document.querySelector('.purple');
        mustPlay = songsAsArray.indexOf(currentTrack);
       
        
    mustPlay++;
    if (mustPlay === songsSection.length) {
        mustPlay = 0;
    }
    
    
playBtnSection.src = `img/pausebtn.png`;
AudioWrapper.classList.add('playingNow');
audioSection.src = `audio/audio${mustPlay}.mp3`;
audioSection.play()
songsSection.forEach(e => {
e.classList.remove('purple');
})
songsSection[mustPlay].classList.add('purple');


    
}
audioSection.addEventListener('ended',nextTrack)


function playSection() {
    currentTrack = document.querySelector('.purple');
        mustPlay = songsAsArray.indexOf(currentTrack);
    audioSection.play();
AudioWrapper.classList.add('playingNow');
playBtnSection.src = `img/pausebtn.png`;

}

songsSection.forEach( b => b.addEventListener('click', 
(e) => {
    loadSection(e.target);
}
))
function pauseTrack() {
    AudioWrapper.classList.remove('playingNow');
    audioSection.pause();
    playBtnSection.src = `img/testplay.png`;

}
function checkPlaying() {
   
    let isPlay = AudioWrapper.classList.contains('playingNow');
    if (isPlay) {
        pauseTrack();
    }
    else {
        playSection();
    }
}


playBtnSection.addEventListener('click',checkPlaying);
// AudioTrack
let audioTrackSection = document.querySelector('.audiotrack__section');
let container = document.querySelector('.audiotrack__wrapper__section');
audioTrackSection.style.width = '0px';
function timeUpd() {

    let dur = audioSection.duration;
    let curTime = audioSection.currentTime;
    let percentTime = curTime / dur * 100;
    audioTrackSection.style.width = `${percentTime}%`;
}

audioSection.addEventListener('timeupdate',timeUpd);
function changeTime(e) {
    const width = this.clientWidth;
    const click = e.offsetX;
    let nowDur = audioSection.duration;
    audioSection.currentTime = (click / width) * nowDur;
}
container.addEventListener('click',changeTime);

//
