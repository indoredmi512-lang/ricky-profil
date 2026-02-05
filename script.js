let homeScore = 0;

// buat audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

let chants = [
    "GOOOAAALLL!!! ⚽🔥",
    "OLE OLE OLE OLE!",
    "RICKY! RICKY! RICKY!",
    "WHAT A GOAL!",
    "STADION BERGEMURUH!"
];

// fungsi bunyi GOAL (beep cepat + bass)
function playGoalSound() {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sawtooth";      // suara kasar (stadion)
    osc.frequency.setValueAtTime(180, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(
        600,
        audioCtx.currentTime + 0.15
    );

    gain.gain.setValueAtTime(0.8, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audioCtx.currentTime + 0.4
    );

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
}

function goal() {
    // wajib resume audio (aturan browser)
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }

    homeScore++;
    document.getElementById("score").innerText = homeScore + " : 0";

    playGoalSound();

    let randomChant = chants[Math.floor(Math.random() * chants.length)];
    document.getElementById("chant").innerText = randomChant;

    // efek stadion flash
    document.body.style.boxShadow = "0 0 40px #00ff66 inset";
    setTimeout(() => {
        document.body.style.boxShadow = "none";
    }, 300);
}
