class gold{
    constructor(){
        this.x = 700;
        this.y = 410;
        this.dx = 20;
        this.size = 20;
        this.cwidth = 700;
        this.cheight = 410;
        this.exist = true;
    }

    update(){
        if(this.x < -10){
            this.y = 600;
            this.x = 600;
            this.exist = false
        }else if(this.exist == true){
            this.x -= 10;
        }
    }

    init(){
        this.x = this.cwidth;
        this.y = this.cheight;
    }

    render(ctx3){
        if(this.exist == true){
            let img = new Image();
            img.src = "coin.jpg";
            ctx3.beginPath();
            ctx3.drawImage(img,this.x, this.y,this.size,this.size);
            ctx3.closePath();
        }
    }

    collisioncoin(px,py){
        let xValue = this.x - ( px + 30 );
        let yValue = this.y - ( py + 30 );
        if(this.exist == true && xValue < 0 && yValue < 0 ){
            this.exist = false
            coinCrash();
        }
    }
}