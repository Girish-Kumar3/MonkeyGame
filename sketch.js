
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png  ","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacle1 = loadImage("obstacle.png");
  obstacle2 = loadImage("obstacle.png");
  obstacle3 = loadImage("obstacle.png");
  obstacle4 = loadImage("obstacle.png");
  obstacle5 = loadImage("obstacle.png");
  obstacle6 = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  monkey=createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,190,55000000000000,10);
  ground.x=ground.width/2;
  
 
}


function draw() {
  background("white");
monkey.collide(ground);
  
 if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        //jumpSound.play();
    }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
 var survivalTime=0;
 stroke("black");
 textSize(20);
 fill("black");
  
   survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time : "+survivalTime,100,50);
  
  
   
  
  spawnObstacles();
  spawnbanana();
  drawSprites();
}

function spawnbanana(){
  if (frameCount%40===0){
    var banana=createSprite(650,180,80,10);
    banana.y = Math.round(random(10,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=200;
   banana.depth = monkey.depth;
    monkey.depth =monkey.depth + 1;
  }
}

function spawnObstacles(){
  
 if (frameCount % 80 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -6
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
 }
}



