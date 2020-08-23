
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, bin1, bin2, bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ball= new Paper(200, 450, 40);

	ground = new Ground(800, 650, width, 25)
	
	bin1 = new Bin(1500, 610, 20, 100);

 	bin2= new Bin(1400, 650, 200, 20);
 	
	bin3 = new Bin(1220 , 610, 20, 100);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();

  //keyPressed();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.position, {x:200, y:-42})
	}
	
}