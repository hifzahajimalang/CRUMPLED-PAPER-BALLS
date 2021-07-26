
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,right,left;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(width/2,670,width,20);
	right=new Ground(700,600,20,120);
	left=new Ground(500,600,20,120);
	
    var ball_options={
		isStatic:false,
		restitution:0.95,
		friction:0,
		density:1.2,
		
	}
	ball=Bodies.circle(200,100,20,ball_options);
	World .add(world,ball);
	
	
	


	

	Engine.run(engine);
  
}






function draw() {
  rectMode(CENTER);
  background(0);
  ellipse (ball.position.x,ball.position.y,20)
  drawSprites();
 
  ground.show()
  left.show()
  right.show()
}


  

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:15,y:-15})
}
	}
	

