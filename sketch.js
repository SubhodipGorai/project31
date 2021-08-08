var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var i = 75; i <=width; i=i+50) { 
    plinkos.push(new Plinko(i,75));
  }

  //create 2nd row of plinko objects
  for (var e = 50; e <=width-10; e=e+50) 
  {
    plinkos.push(new Plinko(e,175));
  }

  //create 3rd row of plinko objects
  for (var f = 50; f <=width-10; f=f+50) 
  {
    plinkos.push(new Plinko(f,275));
  }
  
  //create 4th row of plinko objects
  for (var g = 50; g <=width-10; g=g+50) 
  {
    plinkos.push(new Plinko(g,375));
  }

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  for (var f = 0; f < plinkos.length; f++) {
    plinkos[f].display();   
  }
   
  for (var g = 0; g < plinkos.length; g++) {
    plinkos[g].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //create the particles using frameCount

  for (var e = 0; e < particles.length; e++) {
    particles[e].display();
    
  }
  

  //display the particles 
if (frameCount % 60 === 0) {
  particles.push(new Particles(random(0,800),0))
}

}