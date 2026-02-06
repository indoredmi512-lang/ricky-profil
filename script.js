const songs = [
"musik1.mp3",
"musik2.mp3",
"musik3.mp3"
];

let index = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("songTitle");

function load(){
audio.src = songs[index];
title.innerHTML = songs[index];
}

function play(){
audio.play();
}

function next(){
index = (index + 1) % songs.length;
load();
audio.play();
}

function prev(){
index = (index - 1 + songs.length) % songs.length;
load();
audio.play();
}

load();
</script>
