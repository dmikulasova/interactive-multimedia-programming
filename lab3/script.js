var music = document.getElementById('music');
var play = document.getElementById('pButton');
var mute = document.getElementById('mButton');
paused=1;
muted=0;

function playAudio() {
	if (paused) {
		music.play();
    play.innerHTML = "Pause";
    paused=0;
	} else {
		music.pause();
    play.innerHTML = "Play";
    paused=1;
	}
}

function muteAudio() {
  if (muted) {
		music.muted = false;
    mute.innerHTML = "Mute";
    muted=0;
	} else {
		music.muted = true;
    mute.innerHTML = "Unmute";
    muted=1;
	}
}

function volumeUp() {
  if(music.volume < 1){
    music.volume += 0.1;
  }

}

function volumeDown() {
  if(music.volume > 0){
    music.volume -= 0.1;
  }

}
