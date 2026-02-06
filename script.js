let player = document.getElementById("player");
let ball = document.getElementById("ball");
let scoreText = document.getElementById("score");

let x = 100;
let y = 100;
let speed = 12;
let score = 0;

document.addEventListener("keydown", move);

function move(e){

    if(e.key == "ArrowUp") y -= speed;
    if(e.key == "ArrowDown") y += speed;
    if(e.key == "ArrowLeft") x -= speed;
    if(e.key == "ArrowRight") x += speed;

    player.style.left = x + "px";
    player.style.top = y + "px";

    checkCollision();
}

function checkCollision(){
    let p = player.getBoundingClientRect();
    let b = ball.getBoundingClientRect();

    if(
        p.left < b.right &&
        p.right > b.left &&
        p.top < b.bottom &&
        p.bottom > b.top
    ){
        score++;
        scoreText.innerHTML = "Score: " + score;

        ball.style.left = Math.random() * (window.innerWidth - 40) + "px";
        ball.style.top = Math.random() * (window.innerHeight - 40) + "px";
    }
}
