class Ctarget{
    constructor(){
        this.tag = 1;
        this.id = 1;
        this.x = 250;
        this.y = 250;
        this.dx;
        this.size = 80;
        this.cwidth;
        this.cheight;
        this.exist = true;
    }

    renderTarget(ctx3){
        let img = new Image();
        img.src = "target1.png";
        ctx3.beginPath();
        ctx3.drawImage(img,this.x, this.y,this.size,this.size);
        ctx3.closePath();
    }

    gunshot(x,y){
        console.log(x,y);
        let pdwb = (this.x-10 + this.size/2) - x;
        let pdhb = (this.y + this.size/2) - y;
        let pdcb = pdwb * pdwb + pdhb * pdhb;
        console.log(pdcb,"=====B");

        let pdwh = (this.x-9 + this.size/2) - x;
        let pdhh = (this.y-32 + this.size/2) - y;
        let pdch = pdwh * pdwh + pdhh * pdhh;
        console.log(pdch,"=====H");

        if(pdcb<=450){
            console.log('bodyshot');
            bodyhitAction();
        }else if(pdch <= 40){
            console.log('headshot');
            headhitAction();
        }
    }

    updateTaget(){
        if(this.id == 1){
            if(this.x >= 350){
                this.y ++;
            }
            this.x ++;
        }
    }

}