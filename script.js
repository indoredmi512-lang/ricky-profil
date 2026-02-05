let homeScore = 0;
let chants = [
    "GOOOAAALLL!!! ⚽🔥",
    "OLE OLE OLE OLE!",
    "RICKY! RICKY! RICKY!",
    "WHAT A GOAL!",
    "STADION BERGEMURUH!"
];

function goal() {
    homeScore++;
    document.getElementById("score").innerText = homeScore + " : 0";

    let randomChant = chants[Math.floor(Math.random() * chants.length)];
    document.getElementById("chant").innerText = randomChant;

    document.body.style.boxShadow = "0 0 30px #00ff66 inset";
    setTimeout(() => {
        document.body.style.boxShadow = "none";
    }, 300);
}
