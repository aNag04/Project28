
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boyImg,boy;
var stone,mango,tree;
var mango1,mango2,mango3,mango4,mango5;

function preload(
	
)
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)
  drawSprites();
 
}
function detectCollision(lStone,lMango){
	mangoBodyPosition = lMango.body.position
	stoneBodyPosition = lStone.body.position
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,stoneBodyPosition.width,stoneBodyPosition.height)
	if(distance<=lMango.r+lStone.r){
		Matter.Body.setStatic(lMango.body,false);
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}



