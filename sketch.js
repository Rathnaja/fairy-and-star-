var starImg, fairyImg, bgImg;
var fairy , fairyVoice;  
var star, starBody;  
 var ground,invisibleground;


const Engine = Matter.Engine;

const World = Matter.World;  
const world= Matter.Engine;
const Body = Matter.Body; 
 
function preload()
{  
	starImg = loadImage("images/star.png");   
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png"); 
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750); 
 
	// fairyVoice.play();

	fairy = createSprite(130, 520);    
	fairy.addAnimation("fairyflying",fairyImg);     
	fairy.scale =0.25; 
	  

	star = createSprite(650,30);  
	star.addImage(starImg); 
	star.scale = 0.2;

	engine = Engine.create(); 
	world = Engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	ground=createSprite(200,200,50,50);
	ground.velocityX=1; 
	ground,scale=0.1;
	ground.X=ground.width/2;
	ground.visible=false; 

} 
  

function draw() {
  background(bgImg);

	if(ground.X<0){
	ground.X=ground.width/2;
	}
 
	fairy.velocityX=0;
	fairy.velocityY=0;

	star.velocityY=2;

if(keyDown("right_Arrow")){
	fairy.velocityX=3;  
}
 
if(keyDown("left_Arrow")){
	fairy.velocityX=-2;
} 
	
	


  drawSprites();

}

function keyPressed() {
//write code here

if(keyDown("right_Arrow")){
	fairy.velocityX=3;
	fairy.velocityY=0;
	fairy.velocityX=fairy.velocityX+0.2; 
}

if(keyDown("left_Arrow")){
	fairy.velocityX=-4;
	fairy.velocityY=0;
	
}

}
