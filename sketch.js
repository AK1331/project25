
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ground;
var rect1,rect2,rect3;
var paper,PImage;
var body;
var dustbin;


function setup() {
	createCanvas(800, 500);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,480,800,20);
  
  paper = new Paper(100,200);

  dustbin = new Dustbin(650,400,20,20);
  
  rect1 = new Box(593,425,15,100);
  rect2 = new Box(708,425,15,100);
	rect3 = new Box(650,465,130,15);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,10);
  
  

  paper.display();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  dustbin.display();

  drawSprites();
  //keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
  
	}
}