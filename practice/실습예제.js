const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let player = { "x": 1, "y": canvas.height, "size": 100, "speed": 3 };
let keyDown = {};
let time = window.setInterval(draw, 10);
window.addEventListener("keydown", (e) => {
    keyDown[e.key] = true;
})
window.addEventListener("keyup", (e) => {
    keyDown[e.key] = false;
})


drawPlayer();
drawBox();

function drawPlayer() {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(player.x,player.y,player.size,player.size);
    ctx.closePath();
}

function drawBox(){
    ctx.beginPath();
    ctx.strokeRect(190,40,100,100);
    ctx.closePath();
}
let falling = 1;
function drawBox2() {
    ctx.beginPath();
    ctx.fillStyle = stat;
    ctx.fillRect(190,4,100,100);
    ctx.closePath();
}

function movePlayer() {
    if (keyDown["ArrowRight"]) {
        player.x += player.speed;}
    else if (keyDown["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if (player.x <= 0) player.x = 0;
    if (player.y <= 0) player.y = 0;
    if (player.x >= canvas.width - player.size) player.x = canvas.width - player.size;
    if (player.y >= canvas.height - player.size) player.y = canvas.height - player.size;

}

let stat = 'yellow';
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePlayer();
    drawBox2();
    drawPlayer();
    if(crash()){
        stat = 'red';
    }else{
        stat = 'yellow'
    }
}

function crash() {

    let px = player.x + player.size / 2;
    let py = player.y + player.size / 2;
    let ex = 190 + 100 / 2;
    let ey = 40 + 100 / 2;

    let pdw = ex - px;
    let pdh = ey - py;
    let pdc = pdw * pdw + pdh * pdh;
    return Math.pow(player.size / 2 + 100 / 2, 2) > pdc;
}

class fall{
    constructor() {
        this.speed = 2;
        this.x; // 현재 총알 x 
        this.y; // 현재 총알 y 
        this.dx; // 도착 x 
        this.dy; // 도착 y 
        this.cwidth = 800;
        this.cheight = 400;
    }

    render(ctx,color) {
        ctx.beginPath();
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,100,100);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();

    }

    update(px, py) {
        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
        // 총알이 화면 밖으로 나갔을때 다시 총알 장전 
        // 상x , 상 y , 하 x, 하 y 

        if (this.x < -this.radius || this.y < -this.radius
            || this.x > this.cwidth + this.radius || this.y > this.cheight + this.radius
        ) {
            this.init(px, py); // 다시 현재 플레이어 값을 유도로 총알 장전 
        }

    }

    init(px,py){
        let dx = px - this.x;
        let dy = py - this.y;
        let c = Math.sqrt(dx * dx + dy * dy);
        this.dx = dx / c;
        this.dy = dy / c;
    }
}