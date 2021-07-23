var garden,rabbit;
var gardenImg, rabbitImg;
var LeafsGroup, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  LeafsGroup = createGroup();
  leaf = addImage(leafImg)
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  drawSprites();
}

function spawnLeafs() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var leaf = createSprite(200,120,40,10);
    leaf.x = Math.round(random(1,400));
    leaf.addImage(cloudImage);
    leaf.scale = 0.5;
    leaf.velocityY = 3;
    leaf.lifetime = 200;
    LeafsGroup.add(leaf);
  }
}