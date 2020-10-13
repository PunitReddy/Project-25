
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var rightWall
var leftWall
var floor

function preload()
{
	
	paperImage = loadImage("paper.png")
	dustbinImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var options ={

		isStatic : false,
		restitution : 0.3,
		friction : 0.5,
		density : 1.2

	}
	ball = Bodies.circle(100, 350, 20, options);
	World.add(world, ball)

	var options2 ={

		isStatic : true

	}
	ground = Bodies.rectangle(400, 650, 850, 20, options2)
	World.add(world, ground)
	fill("yellow")

	var options3 ={

		isStatic : true

	}
	rightWall = Bodies.rectangle(720, 590, 20, 100, options3)
	World.add(world, rightWall)

	var options4 ={

		isStatic : true

	}
	leftWall = Bodies.rectangle(580, 590, 20, 100, options4)
	World.add(world, leftWall)
	
	var options5 ={

		isStatic : true

	}
	floor = Bodies.rectangle(650, 630, 180, 20, options5)
	World.add(world, floor)

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(255);
  
  image(paperImage, ball.position.x, ball.position.y, 25, 25)
  rect(400, 650, 850, 20)
  rect(580, 590, 20, 100)
  rect(720, 590, 20, 100)
  image(dustbinImage, 560, 500, 180, 150)
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball, ball.position, {x: 50, y:-85})
		
	}
}
