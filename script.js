const songs=["musik1.mp3","musik2.mp3","musik3.mp3"];
const covers=["dance1.gif","dance2.gif","dance3.gif"];

let index=0;

const audio=document.getElementById("audio");
const title=document.getElementById("songTitle");
const cover=document.getElementById("cover");

function load(){
audio.src=songs[index];
title.innerHTML=songs[index];
cover.src=covers[index];
}

function play(){
audio.play();
}

function next(){
index=(index+1)%songs.length;
load();
audio.play();
}

function prev(){
index=(index-1+songs.length)%songs.length;
load();
audio.play();
}

// beat detector
const AudioContext=window.AudioContext||window.webkitAudioContext;
const ctx=new AudioContext();
const src=ctx.createMediaElementSource(audio);
const analyser=ctx.createAnalyser();

src.connect(analyser);
analyser.connect(ctx.destination);

analyser.fftSize=256;
const data=new Uint8Array(analyser.frequencyBinCount);

function beat(){
analyser.getByteFrequencyData(data);
let sum=0;
for(let i=0;i<data.length;i++) sum+=data[i];
let avg=sum/data.length;

if(avg>60){
cover.classList.add("beat");
}else{
cover.classList.remove("beat");
}

requestAnimationFrame(beat);
}

audio.addEventListener("play",()=>{
ctx.resume();
beat();
});

load();