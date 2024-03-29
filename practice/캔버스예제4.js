const canvas = document.querySelector("#canvas");
const startBtn = document.querySelector(".startBtn");
const ctx = canvas.getContext("2d");

let player = { "x": canvas.width / 2 - 25, "y": canvas.height / 2 - 25, "size": 50, "speed": 3 };
let keyDown = {};
let bulletList = []; // 총알 객체가 들어가는 배열 
let isOver = false; // 게임 종료 인지 아닌지 
let time = null; // setInterval 변수 
window.addEventListener("keydown", (e) => {
    keyDown[e.key] = true;
})
window.addEventListener("keyup", (e) => {
    keyDown[e.key] = false;
})

startBtn.addEventListener("click", startGame);

function bulletInit() {
    // 만들어주고 싶은 총알 갯수 
    bulletList = [];
    // 총알 50개 만듬 
    for (let i = 0; i < 10; i++) {
        let b = new Bullet();
        bulletList.push(b);
    }

    bulletList.forEach((b) => { b.init(player.x, player.y) });
}

function movePlayer() {
    if (keyDown["ArrowUp"]) {
        player.y -= player.speed;
    } else if (keyDown["ArrowRight"]) {
        player.x += player.speed;

    } else if (keyDown["ArrowDown"]) {
        player.y += player.speed;
    } else if (keyDown["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (player.x <= 0) player.x = 0;
    if (player.y <= 0) player.y = 0;
    if (player.x >= canvas.width - player.size) player.x = canvas.width - player.size;
    if (player.y >= canvas.height - player.size) player.y = canvas.height - player.size;

}

// 그림판 새로고침 
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backGround, 0, 0, 800, 400);
    drawPlayer();
    movePlayer();
    bulletList.forEach((b) => { b.update(player.x, player.y) });
    bulletList.forEach((b) => {

        if (b.collision(player.x, player.y, player.size / 2)) {
            gameOver();
            // alert("gameOver");
            clearInterval(time);
            // forEach 문에서 나가기 reutrn false;
            return false;
        }
    });

    if (isOver) {
        return;
    }

    bulletList.forEach((b) => { b.render(ctx) });
}

let playerImg = new Image();  // <img>
playerImg.src = "./ddangddang.jpg";
let backGround = new Image();
backGround.src = "back.png";

backGround.addEventListener("load",()=>{
    ctx.beginPath();
    ctx.drawImage(backGround, 0, 0, 800, 400);
})


function drawPlayer() {
    ctx.beginPath();
    ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
    
    ctx.closePath();
}

function startGame() {
    isOver = false;
    startBtn.style.visibility = "hidden";
    // 플레이어 초기화
    player.x = canvas.width / 2 - 25;
    player.y = canvas.height / 2 - 25;
    // 총알 초기화 
    bulletInit();
    // 게임 시작 
    time = window.setInterval(draw, 10);
}

function gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "40px Gulim";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2)
    isOver = true;
    startBtn.style.visibility = "visible";
}

//bulletInit();