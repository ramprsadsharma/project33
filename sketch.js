var bg,bgIMG;
var snow,snowIMG;




function preload() {

bgImg = loadImage  ("snow1.jpg");
snowIMG = loadImage ("snow4.webp");

  
  
}

function setup() {

  createCanvas(1000,1000);

  bg = createSprite(500,500,1000,10);
  bg.addImage(bgImg);
  bg.scale = 2;

  


}

function draw() {
  background(255,255,255);
  
  


  spawnSnow();

  

  drawSprites();
}

function spawnSnow(){
  if(frameCount%40===0){
    snow = createSprite(random(10,1000),0,10,10);
    snow.velocityY = 3;
    snow.addImage(snowIMG);
    snow.lifetime = 300;
    snow.scale = 0.1;
  }
}











