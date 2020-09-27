var groundImage;
var monkey , monkey_running
var banana ,bananaImage, rock, rockImage
var FoodGroup, rockGroup;
var PLAY=1;
var END=0; 
var gameState=PLAY; 
var score = 0;
var survivalTime;  
var ground; 
 


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
}



function setup() {
 createCanvas(400,400); 
  
  
    
  ground = createSprite(400,370,900,10);
   ground.scale=0.9; 
  

  
  monkey = createSprite(30,360,20,20);
  monkey.addAnimation("monkey", monkey_running); 
  monkey.scale= 0.08; 
  
 
  
  FoodGroup = createGroup();
  rockGroup = createGroup(); 
  
}


function draw() {
background("yellow");
  

  
    textSize(17);
  fill("red");
  text("No. of bananas: " + score,0,20);
  text("Survival Time: " + survivalTime,190,20);
  
 monkey.collide(ground);
   
  

  
  
  
if (gameState===PLAY){
 
  
if (keyDown("space") && monkey.y>200){
      monkey.velocityY=-20;
    }
  
 if (monkey.isTouching(FoodGroup)){
  FoodGroup.destroyEach();
  score = score+2; 
  }
  
   
  
  monkey.velocityY=monkey.velocityY+1;
  food();
  stone();
  
  
  survivalTime=Math.round(frameCount/frameRate());
  
  if (monkey.isTouching(rockGroup)){
  gameState=END;
  rockGroup.destroyEach(); 
  }
  
}
  
  else if (gameState===END){
  monkey.visible=false;
  FoodGroup.destroyEach();
  
  fill("Red");
  textSize(50);
  text("GAME OVER",30,200); 
  }
  
  
  drawSprites();
}


function food(){

  if (World.frameCount%80===0){
  banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -(5 + score/4);
    banana.addImage(bananaImage);
    banana.scale=0.08;
    banana.lifetime = 100;
    FoodGroup.add(banana);
    
  }

}

function stone(){
if (World.frameCount%300===0){
rock = createSprite(400,315);
rock.velocityX=-(5+ score/6);
rock.addImage("rock", rockImage); 
rock.lifetime=120;
rock.scale=0.2; 
rockGroup.add(rock); 
                  

}
}





