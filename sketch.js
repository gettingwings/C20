var fixedRect, movingRect, edges, velX = -3, velY = 2;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(300, 150, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;
  movingRect.setVelocity(velX,velY);

  edges = createEdgeSprites();
}

function draw() {
  background("lightpink");  

  //movingRect.x = World.mouseX;
  //movingRect.y = mouseY;

  if (  ( movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 )
   && ( fixedRect.x - movingRect.x  < movingRect.width/2 + fixedRect.width/2) 
   && ( movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 )
   && ( fixedRect.y - movingRect.y  < movingRect.height/2 + fixedRect.height/2)  ){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   
    movingRect.setVelocity(-velX, velY);

  }else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  movingRect.bounceOff(edges);
  drawSprites();
}