class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.4
        }
        this.r=r;
        
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        this.body.velocityY=-5;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
        pop();

    }
    update() {
        if(this.body.position.y>690){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:0});
        }
    }
}
