class Log extends parentsclass{

    constructor(x,y,width,height,angle){
        super(x,y,width,height,angle);
        this.image = loadImage("sprites/wood.png");
Matter.Body.setAngle(this.body,angle)



    }
}