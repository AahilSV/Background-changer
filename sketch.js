var Player
function setup() {
  createCanvas(1300,500);
  Player = createSprite(300,300,20,20);
}

function draw() 
{
  background("Black");
  drawSprites ();
  if (keyIsDown("up")) {
    background("green");
  }
  if (keyIsDown("left")) {
    background("orange");
  }
  if(keyIsDown("right")) {
    background("Blue");
  }
  if(keyIsDown("Down")) {
    background("red");
  }
}




