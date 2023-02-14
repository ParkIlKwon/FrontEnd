const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let timer;
let timer2;
let direction = true;

let x = 10;
let radius = x+10;

function draw() {
    ctx.beginPath();
    ctx.arc(x,150,10,0,Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    x++;
    if(x >= canvas.width - radius){
        clearInterval(timer);
    }
}

function draw2() {
    ctx.clearRect(0,0,canvas.width,canvas.width);
    ctx.beginPath();
    ctx.arc(x,150,10,0,Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    if(direction == true){
        x+=6;
    }else{
        x-=3;
    }
    timer = requestAnimationFrame(draw2);
    if(x >= canvas.width - radius){
        direction = true ? false : true;
    }else if(x <= 0){
        direction = true;
    }
}
// let timer = setInterval(draw,10);

function draw3() {
    ctx.beginPath();
    ctx.arc(150,x,10,0,Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();

    timer2 = requestAnimationFrame(draw3);
    
}

draw2();
draw3();

canvas.addEventListener("click",()=>{
    

})