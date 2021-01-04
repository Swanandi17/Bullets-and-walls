var bullet,wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10,200,30,30);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1500,200,thickness,height/2);
}

function draw() {
  background(0,0,0);
  bullet.velocityX=speed;
 
  bullet.shapeColor=color(200,200,200);
  wall.shapeColor=color(80,80,80);
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  }
  if(damage>10){
     wall.shapeColor=color(255,0,0);     
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
   bullet.collide(wall);
  
  drawSprites();
}


function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
  return true;

}
else {
  return false;
}
}
