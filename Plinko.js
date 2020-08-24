class Plinko{
    constructor(x,y,r){
        var options={
            isStatic: true
        }
        this.r=10;
        
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(255,255,255);
        World.add(world,this.body);
    }
    display(){
    
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        

    }
};