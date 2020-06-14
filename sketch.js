var fixedRect, movingRect,object1,object2,terex1,terex2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
fixedRect.shapeColor = "green";
fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1 = createSprite(100, 300, 40, 100);
  object2 = createSprite(700, 300, 50, 80);
  object1.shapeColor="blue";
  object2.shapeColor="red";
  object1.velocityX=4;
  object2.velocityX=-4;
  terex1 = createSprite(200, 200, 50, 80);
  terex2 = createSprite(500, 500, 50, 80);
  terex1.shapeColor="white";
  terex2.shapeColor="yellow";
  terex1.velocityX=4;
  terex2.velocityX=-4;
  terex1.velocityY=4;
  terex2.velocityY=-4;
}

function draw() {
  background(0,0,0);  
BounceOff(movingRect,fixedRect);
BounceOff(object1,object2);
BounceOff(terex1,terex2);
  drawSprites();
}
