
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box,engine,world;

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;
box=new Box(200,100,50,50);
	
}


function draw() {
  
  background(0);
 Engine.update(engine);
 box1.display();
 
}

