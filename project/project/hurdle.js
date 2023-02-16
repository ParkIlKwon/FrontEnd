class hurdle{
    constructor(){
        this.x = 700;
        this.y = 510;
        this.dx = 50;
        this.size = 50;
        this.cwidth = 700;
        this.cheight = 510;
    }

    init(){
        this.x = this.cwidth;
        this.y = this.cheight;
    }

    update(){
        this.x -= 10;
        if(this.x <= 0){
            this.init();
        }
    }

    render(ctx2){
        let img = new Image();
        img.src = "hurdle.png";
        ctx2.beginPath();
        ctx2.drawImage(img,this.x, this.y,this.size,this.size);
        ctx2.closePath();
    }

    collision(px,py){
        let xValue = this.x - ( px + 50 );
        let yValue = this.y - ( py + 50 );
        if(xValue < 0 && yValue < 0 ){
            this.init();
            jcrash();
        }
    }
}