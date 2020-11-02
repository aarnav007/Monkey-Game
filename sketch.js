
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananasGroup, obstaclesGroup;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(100,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,330,400,10)
  ground.velocityX=-3;
  ground.x=ground.width / 2;
  
 
  bananasGroup = createGroup();

}

function draw() {
    background("white")
  
    if (ground.x < 200){
      ground.x = ground.width/2;
    }
    if (keyDown("space")&&monkey.y>=290){
       monkey.velocityY=-16;
       
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = survivalTime + Math.round(getFrameRate()/62)
  text("Survival Time: "+survivalTime,100,50)
  
  spawnobstacles()
  
  spawnbananas()  
 
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  drawSprites();
}

function spawnbananas(){
  if ( frameCount % 80===0){
    banana = createSprite(350,150,20,20)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage) 
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.setLifetime = 200;
    bananasGroup.add(banana);
  }
} 
  
function spawnobstacles(){
  if ( frameCount % 300===0){
    obstacle = createSprite(400,300,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.setLifetime=200;
    obstacle.collide(ground);
    obstacle.velocityX = -4;
  
  
  }   
}
  
  
  


