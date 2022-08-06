const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


function toggleVideo(){
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
}

function updateVideoIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x" ></i>';
    } else{
        play.innerHTML = '<i class="fa fa-pause fa-2x" ></i>'
    }
}


function stopVideo(){
     video.currentTime = 0;
     video.pause();
}


function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){ 
       mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
      secs ="0" + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
    }

function stopVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;

}




video.addEventListener('click', toggleVideo);
video.addEventListener('pause', updateVideoIcon);
video.addEventListener('play', updateVideoIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click',toggleVideo);

stop.addEventListener('click', stopVideo);
progress.addEventListener('change', stopVideoProgress);
