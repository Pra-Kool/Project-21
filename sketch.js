
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	body = Body.world
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction: 0,
		density:1.2
	}

	//Create the Bodies Here.
Matter.Bodies.circle(100,100,20,ball_options)
 World.add(world, this.body)

 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  Ground.display()

  Ground = new ground(width/2,670,width,20);
  leftSide = new ground(1100, 600, 20, 120);

  function keyPressed(){
	  if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position.x,ball.position.y, 0.5)
	  }
  }
  
  drawSprites();
 
}



