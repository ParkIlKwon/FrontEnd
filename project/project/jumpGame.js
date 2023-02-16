const canvas2 = document.querySelector(".jumpGame .containerJump #canvas");
const ctx2 = canvas2.getContext("2d");
const catLife = document.querySelector(".jlife");
let Action = window.setInterval(draw2, 30);
let hurdleArr = [];
let jumpStat = false;
let checkPoint = false;

let h = new hurdle();
hurdleArr.push(h);
hurdleArr = [];
let cat = {"y":500 , "score":0 , "life":50};

function jinit() {
    cat.score = 0;
    cat.life = 50;

    let h = new hurdle();
    hurdleArr.push(h);
}

function jcrash() {
    let counter = 10;
    let catInt = setInterval(()=>{
        counter --;
        if(counter == 0){
            clearInterval(catInt);
        }
        console.log(cat.life);
        catLife.style =`width:${--cat.life}%` ;
    },70)
}

function draw2() {
    if(object.runningGame == false){
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        drawP();
        drawLine();
        jump()
    
        hurdleArr.forEach(e => {e.render(ctx2)});
        hurdleArr.forEach(e => {e.update()});
        hurdleArr.forEach(e => {e.collision(0,cat.y)});
        if(cat.life == 1){
            console.log('죽어뻐림');
        }
    }
}

function jump() {
    if(cat.y == 400){
        checkPoint = true;
    }
    if(cat.y >= 400 && checkPoint == false && jumpStat == true){
        cat.y -=10;
    }else if(cat.y <= 500 && checkPoint == true){
        cat.y +=10;
    }
    if(keyDown[" "] && jumpStat == false){
        jumpStat = true;
    }else if(cat.y >= 500){
        jumpStat = false;
        checkPoint = false;
    }

}

function drawP(){
    ctx2.beginPath();
    ctx2.drawImage(playerImg, 0, cat.y, 50, 50);
    ctx2.closePath();
}

function drawLine(){
    ctx2.beginPath();
    ctx2.moveTo(0, 560);
    ctx2.lineTo(700, 560);
    ctx2.lineWidth = 10;
    ctx2.stroke();
}



