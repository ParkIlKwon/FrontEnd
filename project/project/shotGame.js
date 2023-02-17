const canvas3 = document.querySelector(".shotGame #canvas");
const ctxs = canvas3.getContext("2d");
let tclass = new Ctarget;
let tarr = [];
let ta = new Ctarget;
tarr.push(ta);

let num = 1;

let ammoImg = new Image();
let ammointerval = 15;
let ammoCnt = 10;
ammoImg.src = "ammo556.png";

object.game4.addEventListener('click',(e)=>{
    tclass.gunshot(e.offsetX,e.offsetY);
    ammoCnt --;
})

function deleteobj(){

    let idx = tarr.findIndex((t)=>t.tag == num);
    console.log(idx);
    tarr.splice(idx, 1 );
    console.log(tarr);
}

function calcpos() {
    object.game4.addEventListener('mousemove',(e)=>{
        if(xpos != e.offsetX-30 || ypos != e.offsetY-30){
            xpos = e.offsetX-30;
            ypos = e.offsetY-30;
        }
    })
}

function drawCrosshair(){
    ctxs.beginPath();
    ctxs.drawImage(crossHair, xpos, ypos, 80, 80);
    ctxs.closePath();
    document.body.style.cursor = 'none';
}

let shotGameTime = setInterval(()=>{
    ctxs.clearRect(0, 0, canvas3.width, canvas3.height);
    tclass.renderTarget(ctxs);
    shotdraw();
    tclass.updateTaget();
    ammo556();
},50);

function shotdraw() {
    calcpos();
    drawCrosshair();
}

function bodyhitAction(){
    
}

function headhitAction(){
    alert('헤드샷');
    deleteobj();
}

function drawAmmo(cnt) {
    ctxs.beginPath();
    ctxs.drawImage(ammoImg,650 -(ammointerval * cnt) , 10, 20, 70);
    ctxs.closePath();
}

function ammo556() {
    for(let i = 1 ; i < ammoCnt ; i ++){
        drawAmmo(i);
    }
}
