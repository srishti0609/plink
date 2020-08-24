const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

var engine, world;
var ground;
var div;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(230,780,500,10);
    div1 = new Division(70,590,10,370);
    div2= new Division(150,590,10,370);
    div3= new Division(0,590,10,370);
    div4= new Division(230,590,10,370);
    div5= new Division(320,590,10,370);
    div6= new Division(400,590,10,370);
    div7= new Division(480,590,10,370);
    for(j=40;j<800;j+=50){
      p1=new Particle(j,75,10);
     particles.push(p1);
      World.add(world,p1);
      }
    
    for(var k=15;k<=800;k=k+50){
     d1=new Plinko(k,175);
     plinkos.push(d1);
     World.add(world,d1);
    }
    
}



function draw() {
  background(0,0,0); 
  Engine.update(engine); 
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  
  

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
 for(var g=0;g<particles.length;g++){
   particles[g].display();
   particles[g].update();


 }
  
}
